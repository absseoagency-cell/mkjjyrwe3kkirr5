import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "./index";

export const Route = createFileRoute("/embed")({
  head: () => ({
    meta: [
      { title: "Koin TikTok — Versi Embed" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: EmbedPage,
});

function EmbedPage() {
  return (
    <div className="min-h-screen bg-background">
      <HomeContent />
    </div>
  );
}
