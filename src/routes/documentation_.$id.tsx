import { createFileRoute } from "@tanstack/react-router";
import { DocumentViewPage } from "@/pages/DocumentViewPage";

export const Route = createFileRoute("/documentation_/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  return <DocumentViewPage id={id} />;
}
