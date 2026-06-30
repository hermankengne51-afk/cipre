import { createFileRoute } from "@tanstack/react-router";
import { db } from "@/integrations/drizzle/db";
import { contactMessagesTable } from "@/integrations/drizzle/schema";
import { contactSchema } from "@/schemas/contact-schema";

export const Route = createFileRoute("/api/contact")({
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

          const parsed = contactSchema.safeParse(body);
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
            const [message] = await db
              .insert(contactMessagesTable)
              .values(parsed.data)
              .returning({ id: contactMessagesTable.id });

            return new Response(JSON.stringify({ id: message.id }), {
              status: 201,
              headers: { "Content-Type": "application/json" },
            });
          } catch (error) {
            console.error("Error saving contact message:", error);
            return new Response(
              JSON.stringify({
                error: "Échec de l'enregistrement du message",
                details: error instanceof Error ? error.message : String(error),
              }),
              { status: 500, headers: { "Content-Type": "application/json" } },
            );
          }
        },
      }),
  },
});
