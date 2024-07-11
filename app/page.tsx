"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import ModeToggle from "@/components/ModeToggle";

export default function SparklesPreview() {
  return (
    <>
    <div className="absolute top-5 right-5">
      <ModeToggle />
    </div>
      <header className="flex flex-col items-center mt-5 lg:mt-20">
        <h1 className="text-4xl font-bold mb-2">Formulate</h1>
        <h2 className="text-2xl">CODERS.BAY Projekt</h2>
      </header>

      <section className="w-full flex flex-col items-center overflow-hidden lg:justify-center mt-10">
        <div className="mx-5 lg:w-1/3 bg-dark lg:p-10">
          <h2 className="text-xl text-sky-400 lg:text-xl font-bold mb-4">
            Repositories:
          </h2>
          <ul className="list-disc">
            <li className="underline mb-2">
              <Link href="https://github.com/lamacoding/formulate-vite" target="_blank">React Frontend</Link>
            </li>
            <li className="underline mb-2">
              <Link href="https://github.com/lamacoding/formulatesb" target="_blank">Java Spring Boot Backend</Link>
            </li>
            <li className="underline mb-2">
              <Link href="https://github.com/lamacoding/formulate-ai" target="_blank">OpenAI Node.js Backend</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full flex flex-col items-center overflow-hidden lg:justify-center mt-5 py-10">
        <div className="mx-5 lg:w-1/3 bg-dark relative antialiased border rounded-3xl p-10 lg:p-20 hover:scale-105 transition-transform duration-500">
          <p className="text-xl text-sky-400 lg:text-3xl font-bold mb-4">
            Streamline Your Form Creation with AI-Powered Simplicity!
          </p>
          <p className="text-muted-foreground">
            Say goodbye to the frustration of manually crafting complex forms.
            This AI-driven platform revolutionizes the way you create and manage
            your online forms.
          </p>
          <BackgroundBeams />
        </div>
      </section>
    </>
  );
}
