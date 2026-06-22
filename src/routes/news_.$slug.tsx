import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/pages/ArticlePage";

export const Route = createFileRoute("/news_/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  return <ArticlePage slug={slug} />;
}
