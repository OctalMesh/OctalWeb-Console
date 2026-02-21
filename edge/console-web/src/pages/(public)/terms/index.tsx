import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/terms/")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      Something about terms and conditions
    </div>
  );
}
