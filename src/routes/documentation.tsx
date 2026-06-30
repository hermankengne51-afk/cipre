import { createFileRoute } from "@tanstack/react-router";
import { listPublishedDocuments } from "@/server/public/documents";
import { DocumentationCenterPage } from "@/pages/DocumentationCenterPage";

export const Route = createFileRoute("/documentation")({
  loader: () => listPublishedDocuments(),
  component: DocumentationCenterPage,
});
