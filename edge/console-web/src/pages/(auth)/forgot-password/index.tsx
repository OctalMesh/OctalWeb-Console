import { createFileRoute } from "@tanstack/react-router";

import { ForgotPasswordForm } from "@pages/(auth)/forgot-password/-components/forgot-password-form";

export const Route = createFileRoute("/(auth)/forgot-password/")({
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <ForgotPasswordForm className="w-full max-w-sm md:max-w-4xl" />
    </div>
  );
}
