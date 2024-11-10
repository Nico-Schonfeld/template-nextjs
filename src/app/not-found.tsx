"use client";

import React from "react";
import { useRouter } from "next/navigation";
import texts from "@/messages/en.json";

const NotFoundPage = () => {
  const text = texts.pageNotFound;
  const router = useRouter();

  return (
    <section className="w-full h-screen">
      <div className="w-full h-full container mx-auto flex items-center justify-center flex-col px-2 py-3">
        <h2 className="text-5xl font-bold">{text.title}</h2>
        <p className="text-gray-400">{text.description}</p>
        <button
          className="p-2 border rounded-md mt-5"
          onClick={() => router.back()}
        >
          {text.textLink}
        </button>
      </div>
    </section>
  );
};

export default NotFoundPage;
