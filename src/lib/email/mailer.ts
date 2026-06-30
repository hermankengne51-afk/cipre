import { Resend } from "resend";
import { envServer } from "@/lib/env/server";

let client: Resend | null = null;

function getClient() {
  if (!envServer.RESEND_API_KEY || !envServer.RESEND_FROM) {
    throw new Error(
      "Envoi d'email non configuré : définissez RESEND_API_KEY et RESEND_FROM dans .env.local",
    );
  }
  if (!client) {
    client = new Resend(envServer.RESEND_API_KEY);
  }
  return client;
}

export async function sendMail(opts: {
  to: string;
  subject: string;
  text: string;
}) {
  const resend = getClient();
  const { error } = await resend.emails.send({
    from: envServer.RESEND_FROM as string,
    to: opts.to,
    subject: opts.subject,
    text: opts.text,
  });
  if (error) throw new Error(error.message);
}
