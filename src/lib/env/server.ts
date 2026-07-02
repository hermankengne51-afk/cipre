import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const envServer = createEnv({
  server: {
    SERVER_URL: z.url().default("http://localhost:3010"),
    // Base de données — requise
    DATABASE_URL: z.url(),
    // Super administrateur — reconnu directement par le système
    SUPER_ADMIN_EMAIL: z.string().email(),
    SUPER_ADMIN_PASSWORD: z.string().min(8),
    // Secret de chiffrement des cookies de session
    AUTH_SECRET: z.string().min(32),
    // Resend — envoi d'emails depuis l'admin (réponses messages/bénévolat)
    RESEND_API_KEY: z.string().optional(),
    RESEND_FROM: z.string().optional(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
