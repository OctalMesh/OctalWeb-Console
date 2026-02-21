import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/privacy/")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      Something about privacy policy
    </div>
  );
}
