import { createFileRoute } from "@tanstack/react-router";
import { ProgramDetailPage } from "@/pages/ProgramDetailPage";

export const Route = createFileRoute("/programs_/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  return <ProgramDetailPage slug={slug} />;
}
