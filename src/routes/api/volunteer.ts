import { createFileRoute } from "@tanstack/react-router";
import { db } from "@/integrations/drizzle/db";
import { volunteerApplicationsTable } from "@/integrations/drizzle/schema";
import { volunteerSchema } from "@/schemas/volunteer-schema";

export const Route = createFileRoute("/api/volunteer")({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        POST: async ({ request }) => {
          let body: unknown;
          try {
            body = await request.json();
          } catch {
            return new Response(
              JSON.stringify({ error: "Corps de requête JSON invalide" }),
              { status: 400, headers: { "Content-Type": "application/json" } },
            );
          }

          const parsed = volunteerSchema.safeParse(body);
          if (!parsed.success) {
            return new Response(
              JSON.stringify({
                error: "Données invalides",
                details: parsed.error.flatten().fieldErrors,
              }),
              { status: 400, headers: { "Content-Type": "application/json" } },
            );
          }

          try {
            const [application] = await db
              .insert(volunteerApplicationsTable)
              .values(parsed.data)
              .returning({ id: volunteerApplicationsTable.id });

            return new Response(JSON.stringify({ id: application.id }), {
              status: 201,
              headers: { "Content-Type": "application/json" },
            });
          } catch (error) {
            console.error("Error saving volunteer application:", error);
            return new Response(
              JSON.stringify({
                error: "Échec de l'enregistrement de la candidature",
                details: error instanceof Error ? error.message : String(error),
              }),
              { status: 500, headers: { "Content-Type": "application/json" } },
            );
          }
        },
      }),
  },
});
