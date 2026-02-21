import { createFileRoute } from "@tanstack/react-router";

import { SignInForm } from "@pages/(auth)/sign-in/-components/signin-form";

export const Route = createFileRoute("/(auth)/sign-in/")({
  component: SignInPage,
});

function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <SignInForm className="w-full max-w-sm md:max-w-4xl" />
    </div>
  );
}
