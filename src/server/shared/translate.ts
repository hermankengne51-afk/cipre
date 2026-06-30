import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

async function translateOne(text: string, from: "fr" | "en", to: "fr" | "en"): Promise<string> {
  if (!text.trim()) return "";
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10_000);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error(`Translation API HTTP ${res.status}`);
    const json = (await res.json()) as {
      responseStatus: number;
      responseData: { translatedText: string };
      responseDetails?: string;
    };
    if (json.responseStatus !== 200)
      throw new Error(json.responseDetails ?? "Translation failed");
    return json.responseData.translatedText;
  } finally {
    clearTimeout(timer);
  }
}

// texts: { targetFormKey: sourceText } — returns { targetFormKey: translatedText }
export const translateFields = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      texts: z.record(z.string(), z.string()),
      from: z.enum(["fr", "en"]),
      to: z.enum(["fr", "en"]),
    }),
  )
  .handler(async ({ data }) => {
    const entries = Object.entries(data.texts).filter(([, v]) => v.trim());
    if (entries.length === 0) return {} as Record<string, string>;
    const results = await Promise.all(
      entries.map(async ([key, text]) => {
        const translated = await translateOne(text, data.from, data.to);
        return [key, translated] as [string, string];
      }),
    );
    return Object.fromEntries(results) as Record<string, string>;
  });
