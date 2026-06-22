import { createFileRoute } from "@tanstack/react-router";
import { DocumentationCenterPage } from "@/pages/DocumentationCenterPage";

export const Route = createFileRoute("/documentation")({
  component: DocumentationCenterPage,
});
