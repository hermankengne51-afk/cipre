import { createFileRoute, notFound } from "@tanstack/react-router";
import { getPublishedProgramBySlug } from "@/server/public/programs";
import { ProgramDetailPage } from "@/pages/ProgramDetailPage";

export const Route = createFileRoute("/programs_/$slug")({
  loader: async ({ params }) => {
    const program = await getPublishedProgramBySlug({ data: { slug: params.slug } });
    if (!program) throw notFound();
    return program;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const program = Route.useLoaderData();
  return <ProgramDetailPage program={program} />;
}
