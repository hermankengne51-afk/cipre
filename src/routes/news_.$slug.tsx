import { createFileRoute, notFound } from "@tanstack/react-router";
import { getPublishedNewsBySlug } from "@/server/public/news";
import { ArticlePage } from "@/pages/ArticlePage";

export const Route = createFileRoute("/news_/$slug")({
  loader: async ({ params }) => {
    const article = await getPublishedNewsBySlug({ data: { slug: params.slug } });
    if (!article) throw notFound();
    return article;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const article = Route.useLoaderData();
  return <ArticlePage article={article} />;
}
