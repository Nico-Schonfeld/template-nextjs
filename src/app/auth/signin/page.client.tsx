"use client";

import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import LogoNext from "@/components/LogoNext";

const SigninComponent = () => {
  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2">
      <div className="w-full h-full flex items-center justify-center py-12 px-5 relative">
        <div className="mx-auto grid w-[350px] gap-6">
          <Link href="/" className="text-xl absolute top-10 left-10">
            <LogoNext />
          </Link>

          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-pretty text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>

          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="example@example.com"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/assets/photos/placeholderImage.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          layout="responive"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default SigninComponent;
