import { createFileRoute } from "@tanstack/react-router";
import { NewsPublicationsPage } from "@/pages/NewsPublicationsPage";

export const Route = createFileRoute("/news")({
  component: NewsPublicationsPage,
});
