import { SignupForm } from "./components/signup-form.tsx"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <SignupForm className="w-full max-w-5xl" />
    </div>
  )
}
