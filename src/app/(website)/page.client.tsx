"use client";

import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

// Add more shadcn/ui components with the command: `npx shadcn-ui@latest add`
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import texts from "@/messages/es.json";
import Link from "next/link";

// Redux/toolkit
import { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/redux/features/counter/counterSlice";

// Momentjs
import moment from "moment";
import LogoNext from "@/components/LogoNext";

const AppComponent = () => {
  const { setTheme, theme } = useTheme();

  const text = texts.layout.home;

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="w-full h-screen overflow-hidden">
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

      <div className="w-full h-full container mx-auto flex items-center justify-center flex-col gap-1 lg:gap-5">
        <h1 className="text-4xl lg:text-5xl font-black text-balance text-center">
          <span>{text.title}</span>
          <span className="animate-background-shine bg-[linear-gradient(110deg,#000000,45%,#c4c4c4,55%,#000000)] dark:bg-[linear-gradient(110deg,#ffffff,45%,#c8c8c8,55%,#ffffff)] bg-[length:250%_100%] bg-clip-text text-transparent">
            {text.spanTitle}
          </span>
        </h1>
        <div className="flex flex-col gap-2 mt-5">
          <p className="text-pretty text-center flex items-center flex-col gap-2 lg:flex-row">
            {text.description}
            <code className="bg-gray-100 dark:bg-[#282828] px-2 py-0.5 rounded-md text-sm dark:text-gray-300">
              {text.spanDescription}
            </code>
          </p>

          <p className="text-pretty text-center flex items-center flex-col gap-2 lg:flex-row">
            {text.descriptionTwo}
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 mt-5">
          <Button variant="secondary" onClick={() => dispatch(decrement())}>
            -
          </Button>
          <span>{count}</span>
          <Button variant="secondary" onClick={() => dispatch(increment())}>
            +
          </Button>
        </div>
      </div>

      <footer className="w-full h-auto fixed bottom-0 left-0 border-b overflow-hidden">
        <div className="w-full h-full container mx-auto flex items-center justify-center px-5 py-3 text-gray-500 text-pretty text-center text-sm">
          <span>
            © {moment().format("YYYY")} Template Next.js,{" "}
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
    </main>
  );
};

export default AppComponent;
