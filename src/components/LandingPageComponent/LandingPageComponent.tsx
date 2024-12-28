"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import LogoVico from "../ui/LogoVico";
import Image from "next/image";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/magnetic";
import { SpinningText } from "@/components/ui/spinning-text";

const LandingPageComponent = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const springOptions = { bounce: 0.1 };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex min-h-screen flex-col">
      {/* Header */}

      <header
        className={`w-full z-50 px-5 flex items-center justify-center fixed top-0 left-0 transition-all duration-300  border-b ${
          scrolled ? "bg-[#006E5E]" : "bg-white"
        }`}
      >
        <nav className="w-full container mx-auto flex items-center justify-between">
          <Link href="/">
            <LogoVico
              width={80}
              height={80}
              colorPrimary={scrolled ? "#ffffff" : "#FBC04A"}
            />
          </Link>

          <ul
            className={`flex items-center justify-center gap-5 text-sm transition-colors duration-300 ${
              scrolled ? "text-white" : "text-black"
            }`}
          >
            <li>
              <Link href="/">Que es Vico</Link>
            </li>
            <li>
              <Link href="/">Cómo Funciona</Link>
            </li>
            <li>
              <Link href="/">Testimonios</Link>
            </li>
          </ul>

          <div className="flex items-center justify-center gap-5">
            <Button variant={scrolled ? "secondary" : "outline"}>
              Iniciar Sesión
            </Button>
            <Button variant={scrolled ? "outline" : "default"}>Comenzar</Button>
          </div>
        </nav>
      </header>

      {/* Main */}

      <main className="w-full min-h-screen flex flex-col py-16 md:py-0 px-4 sm:px-5 justify-center items-center gap-5 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
          className="hidden lg:block"
        >
          <SpinningText
            radius={7}
            fontSize={1}
            duration={6}
            transition={{
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="font-mono text-vico-yellow fixed top-[370px] left-[210px]"
          >
            {`Viajes Compartidos • Viajes Compartidos • `}
          </SpinningText>
        </motion.div>

        <div className="w-full min-h-screen container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start justify-center gap-5 w-full md:w-1/2 z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-black font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center md:text-left"
            >
              Comparte Tu Viaje, <br />
              <span className="bg-gradient-to-r from-vico-green to-vico-yellow bg-clip-text text-transparent">
                Divide Los Gastos
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-gray-500 max-w-[600px] text-center md:text-left text-sm sm:text-base"
            >
              Conéctate con otros viajeros, comparte gastos y haz que tus viajes
              soñados sean más económicos. Únete a nuestra comunidad de viajeros
              inteligentes hoy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Magnetic
                intensity={0.2}
                springOptions={springOptions}
                actionArea="global"
                range={200}
              >
                <Button variant="secondary" className="w-full sm:w-auto">
                  <Magnetic
                    intensity={0.1}
                    springOptions={springOptions}
                    actionArea="global"
                    range={200}
                  >
                    Empezar Ahora
                  </Magnetic>
                </Button>
              </Magnetic>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative w-full md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden"
          >
            <motion.div
              initial={{ height: "100%" }}
              animate={{ height: "0%" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              className="w-full h-full bg-white absolute top-0 left-0 z-10"
            ></motion.div>
            {/*   <Image
              src="/assets/photos/placeholderImage.svg"
              alt="Hero Image"
              fill
              className="object-cover rounded-lg"
              priority
            /> */}

            <img
              src="/assets/photos/placeholderImage.svg"
              alt="Hero Image"
              width="100%"
              className="object-cover rounded-lg aspect-square"
            />
          </motion.div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
};

export default LandingPageComponent;
