import { timingSafeEqual } from "node:crypto";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { envServer } from "@/lib/env/server";
import { getAdminSession } from "./session";

function passwordsMatch(input: string, expected: string) {
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export const getAdminAuth = createServerFn({ method: "GET" }).handler(
  async () => {
    const session = await getAdminSession();
    return session.data.status === "authenticated";
  },
);

export const loginAdmin = createServerFn({ method: "POST" })
  .inputValidator(z.object({ password: z.string().min(1) }))
  .handler(async ({ data }) => {
    if (!passwordsMatch(data.password, envServer.ADMIN_PASSWORD)) {
      throw new Error("Mot de passe incorrect");
    }
    const session = await getAdminSession();
    await session.update({ status: "authenticated" });
    return { success: true };
  });

export const logoutAdmin = createServerFn({ method: "POST" }).handler(
  async () => {
    const session = await getAdminSession();
    await session.clear();
    return { success: true };
  },
);
