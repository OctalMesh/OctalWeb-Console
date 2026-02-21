import { SigninForm } from "./components/signin-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <SigninForm className="w-full max-w-sm md:max-w-4xl" />
    </div>
  );
}
