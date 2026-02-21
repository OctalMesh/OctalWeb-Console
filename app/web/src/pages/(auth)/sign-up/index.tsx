import { createFileRoute } from "@tanstack/react-router";

import { SignUpForm } from "@pages/(auth)/sign-up/-components/sign-up-form";

export const Route = createFileRoute("/(auth)/sign-up/")({
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <SignUpForm className="w-full max-w-5xl" />
    </div>
  );
}
