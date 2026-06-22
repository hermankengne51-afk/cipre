import { createFileRoute } from "@tanstack/react-router";
import { PartnershipsPage } from "@/pages/PartnershipsPage";

export const Route = createFileRoute("/partnerships")({
  component: PartnershipsPage,
});
