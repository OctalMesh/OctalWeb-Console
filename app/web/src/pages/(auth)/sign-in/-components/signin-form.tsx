"use client";

import type { ComponentProps } from "react";

import { Link } from "@tanstack/react-router";

import { AuthForm } from "@pages/(auth)/-components/auth-form";

import { cn } from "@shared/lib/utils";
import { Input } from "@shared/ui/input";
import { Label } from "@shared/ui/label";

export function SignInForm({ className, ...props }: ComponentProps<"div">) {
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
          <Link to="/sign-up" className="underline underline-offset-4">
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
          <Link to="/forgot-password" className="ml-auto text-sm underline-offset-2 hover:underline">
            Forgot your password?
          </Link>
        </div>
        <Input id="password" type="password" required />
      </div>
    </AuthForm>
  );
}
