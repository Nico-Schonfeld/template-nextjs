"use client";

import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { layout } from "@/messages/en.json";

const AppComponent = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="relative flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link
          href={layout.home.header.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert fixed top-5 left-5"
            src="/next.svg"
            alt="Next.js logo"
            width={90}
            height={19}
            priority
          />
        </Link>

        <div className="w-full h-full container mx-auto flex items-center sm:items-start justify-center flex-col gap-1 lg:gap-5">
          <h1 className="text-4xl lg:text-5xl font-black text-balance text-[#000103]">
            <span>{layout.home.title} </span>
            <span className="animate-background-shine bg-[linear-gradient(110deg,#000103,45%,#c4c4c4,55%,#000103)] dark:bg-[linear-gradient(110deg,#ffffff,45%,#c8c8c8,55%,#ffffff)] bg-[length:250%_100%] bg-clip-text text-transparent">
              {layout.home.spanTitle}
            </span>
          </h1>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              {layout.home.description}{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                {layout.home.spanDescription}
              </code>
              .
            </li>
            <li>{layout.home.descriptionTwo}</li>
          </ol>

          <div className="w-full flex items-center justify-center sm:justify-start flex-col sm:flex-row gap-5 mt-5">
            <Link
              href={layout.home.deplyBtn.link}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:w-auto w-full rounded-3xl inline-flex h-12 animate-background-shine items-center justify-center border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              {layout.home.deplyBtn.title}
            </Link>

            <Link
              href={layout.home.docuBtn.link}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:w-auto w-full rounded-3xl inline-flex h-12 animate-background-shine items-center justify-center border border-transparent bg-transparent bg-[length:200%_100%] hover:bg-gray-100 px-6 font-medium text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              {layout.home.docuBtn.title}
            </Link>
          </div>
        </div>
      </main>

      <footer className="w-full h-auto fixed bottom-0 left-0 border-b overflow-hidden">
        <div className="w-full h-full container mx-auto flex items-center justify-center px-5 py-3 text-gray-500 text-pretty text-center text-sm">
          <span>
            © {moment().format("YYYY")} Template Next.js 15,{" "}
            <Link
              href="https://www.linkedin.com/in/nicoschonfeld/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-gray-200 transition-all"
            >
              @nicoschonfeld
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default AppComponent;
