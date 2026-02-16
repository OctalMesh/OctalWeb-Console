"use client";

import type { ComponentProps } from "react";
import { AuthForm } from "@/app/auth/components/auth-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils.ts";
import { Link } from "react-router-dom";

export function SigninForm({ className, ...props }: ComponentProps<"div">) {
  return (
    <AuthForm
      title="Welcome back"
      description="Login to your account to access the dashboard"
      submitButtonText="Login"
      action="/dashboard"
      showSocials
      footerText={
        <>
          Don&apos;t have an account?{" "}
          <Link to="/auth/sign-up" className="underline underline-offset-4">
            Sign up
          </Link>
        </>
      }
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="test@example.com" required />
      </div>
      <div className="grid gap-3">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <Link to="/auth/forgot-password" className="ml-auto text-sm underline-offset-2 hover:underline">
            Forgot your password?
          </Link>
        </div>
        <Input id="password" type="password" required />
      </div>
    </AuthForm>
  );
}
