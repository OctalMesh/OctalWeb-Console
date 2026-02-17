"use client";

import type { ComponentProps } from "react";
import { AuthForm } from "@/pages/auth/components/auth-form.tsx";
import { Input } from "@/shared/ui/input.tsx";
import { Label } from "@/shared/ui/label.tsx";
import { Checkbox } from "@/shared/ui/checkbox.tsx";
import { cn } from "@/shared/lib/utils.ts";
import { Link } from "react-router-dom";

export function SignupForm({ className, ...props }: ComponentProps<"div">) {
  return (
    <AuthForm
      title="Create your account"
      description="Enter your information to create a new account"
      submitButtonText="Create Account"
      showSocials
      footerText={
        <>
          Already have an account?{" "}
          <Link to="/auth/sign-in" className="underline underline-offset-4">
            Sign in
          </Link>
        </>
      }
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-3">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="John" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Doe" required />
        </div>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" required />
        <Label htmlFor="terms" className="text-sm">
          I agree to the <Link to="#">Terms</Link> and <Link to="#">Privacy</Link>
        </Label>
      </div>
    </AuthForm>
  );
}
