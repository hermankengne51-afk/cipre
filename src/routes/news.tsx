import { createFileRoute } from "@tanstack/react-router";
import { listPublishedNews } from "@/server/public/news";
import { NewsPublicationsPage } from "@/pages/NewsPublicationsPage";

export const Route = createFileRoute("/news")({
  loader: () => listPublishedNews(),
  component: NewsPublicationsPage,
});
