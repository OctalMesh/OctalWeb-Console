"use client"

import type { ComponentProps } from "react";
import { AuthForm } from "@/app/auth/components/auth-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils.ts";
import { Link } from "react-router-dom";

export function ForgotPasswordForm({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
      <AuthForm
          title="Forgot your password?"
          description="Enter your email to reset your account password"
          submitButtonText="Send Reset Link"
          footerText={
            <Link to="/auth/sign-in" className="underline underline-offset-4">Back to sign in</Link>
          }
          className={cn("flex flex-col gap-6", className)} {...props}
      >
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
          />
        </div>
      </AuthForm>
  )
}
