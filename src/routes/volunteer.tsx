import { createFileRoute } from "@tanstack/react-router";
import { VolunteerPage } from "@/pages/VolunteerPage";

export const Route = createFileRoute("/volunteer")({
  component: VolunteerPage,
});
