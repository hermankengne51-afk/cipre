import { createFileRoute } from "@tanstack/react-router";
import { listPublishedEvents } from "@/server/public/events";
import { EventsPage } from "@/pages/EventsPage";

export const Route = createFileRoute("/events")({
  loader: () => listPublishedEvents(),
  component: EventsPage,
});
