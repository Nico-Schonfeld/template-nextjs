"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import moment from "moment";
import Link from "next/link";
import { layout } from "@/messages/en.json";
import LogoNext from "@/components/LogoNext";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const AppComponent = () => {
  const { setTheme } = useTheme();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="relative flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <header className="w-full h-auto fixed top-0 left-0 border-b overflow-hidden">
          <nav className="w-full h-full container mx-auto flex items-center justify-between px-5 py-3">
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-lg"
            >
              <LogoNext />
            </Link>

            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <span className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        />
                      </svg>
                    </span>
                    <span className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                        />
                      </svg>
                    </span>
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </header>

        <div className="w-full h-full container mx-auto flex items-center sm:items-start justify-center flex-col gap-1 lg:gap-5">
          <h1 className="text-4xl lg:text-5xl text-center font-black text-balance text-[#000103] dark:text-[#ffffff]">
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
              className="sm:w-auto w-full dark:text-gray-500 dark:hover:text-black rounded-3xl inline-flex h-12 animate-background-shine items-center justify-center border border-transparent bg-transparent bg-[length:200%_100%] hover:bg-gray-100 px-6 font-medium text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              {layout.home.docuBtn.title}
            </Link>
          </div>
        </div>
      </main>

      <footer className="w-full h-auto fixed bottom-0 left-0 border-b overflow-hidden">
        <div className="w-full h-full container mx-auto flex items-center justify-center px-5 py-3 text-gray-500 text-pretty text-center text-sm">
          <span>
            © {moment().format("YYYY")} Template Next.js 14,{" "}
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
