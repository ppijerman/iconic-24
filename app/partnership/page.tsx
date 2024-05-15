"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import dicoLogo from "@/assets/dico.png";
import { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: APP_NAME + " | " + "Partnership",
  description: "Contact us for partnership",
};

export default function Component() {
  return (
    <main className="bg-white text-secondary flex items-center justify-center min-h-screen">
      <div className="w-full max-w-3xl space-y-2 p-5">
        <div className="flex flex-col md:flex-row gap-5 py-5 justify-center md:justify-between items-center w-full">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">Contact us for partnership</h1>
            <p className="">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
          <Image
            className="hidden md:block"
            src={dicoLogo}
            alt="Dico Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="space-y-4 text-xl">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              className="bg-white text-black"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              className="bg-white text-black"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              className="bg-white text-black"
              placeholder="Enter your company"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              className="min-h-[120px] bg-white text-black"
              id="message"
              placeholder="Enter your message"
            />
          </div>
          <Button className="bg-white rounded-none hover:text-primary hover:bg-accent ring-secondary text-2xl font-bold px-10 py-7 ring-[1px]">
            Send message
          </Button>
        </div>
      </div>
    </main>
  );
}
