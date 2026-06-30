import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  email: z.email("Adresse email invalide"),
  phone: z.string().optional(),
  organization: z.string().optional(),
  subject: z.string().min(1, "Le sujet est requis"),
  message: z.string().min(1, "Le message est requis"),
});

export type ContactInput = z.infer<typeof contactSchema>;
