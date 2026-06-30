import { z } from "zod";

export const volunteerSchema = z.object({
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  email: z.email("Adresse email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  country: z.string().min(1, "Le pays est requis"),
  city: z.string().min(1, "La ville est requise"),
  areaOfInterest: z.string().min(1, "Le domaine d'intérêt est requis"),
  availability: z.string().min(1, "La disponibilité est requise"),
  experience: z.string().optional(),
  motivation: z.string().min(1, "La motivation est requise"),
});

export type VolunteerInput = z.infer<typeof volunteerSchema>;
