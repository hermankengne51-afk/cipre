import { createFileRoute } from "@tanstack/react-router";
import { listPublishedPartners } from "@/server/public/partners";
import { PartnershipsPage } from "@/pages/PartnershipsPage";

export const Route = createFileRoute("/partnerships")({
  loader: () => listPublishedPartners(),
  component: PartnershipsPage,
});
