import { createFileRoute } from "@tanstack/react-router";
import { listPublishedPrograms } from "@/server/public/programs";
import { ProgramsPage } from "@/pages/ProgramsPage";

export const Route = createFileRoute("/programs")({
  loader: () => listPublishedPrograms(),
  component: ProgramsPage,
});
