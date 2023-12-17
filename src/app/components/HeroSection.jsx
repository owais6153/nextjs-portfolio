"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 my-[50px] lg:my-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center lg:text-left justify-self-start order-2 lg:order-1 z-20"
        >
          <p className="text-[#ADB7BE] mb-3 lg:mb-0 tracking-[2px] font-bold text-[10px] uppercase">
            Welcome to my digital playground!
          </p>
          <h1 className="text-white mb-4 text-2xl sm:text-4xl !leading-[150%] lg:leading-normal font-extrabold">
            <span className="">
              Hello, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Owais Khan{" "}
              </span>
            </span>
            <br></br>
            <span className="text-3xl sm:text-5xl xl:text-6xl">
              <TypeAnimation
                sequence={[
                  "Full Stack Mastreo",
                  1000,
                  "",
                  1000,
                  "MERN Stack Developer",
                  1000,
                  "LAMP Stack Developer",
                  1000,
                  "Tech Consultant",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            On a mission to transform ideas into stunning, functional digital
            experiences.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary to-secondary hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary to-secondary hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center order-1 lg:order-2"
        >
          <div className="relative mb-[50px] lg:mb-0">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-0 right-0 lg:right-[-50px] lg:top-[-50px] opacity-[50%]"></div>

            <div
              className="rounded-full bg-[#12121200] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative  z-10"
              style={{ backdropFilter: "blur(50px)" }}
            >
              <Image
                src="/images/owais-khan-dev.png"
                alt="M. Owais Kan - Full Stack Dev"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                width={300}
                height={300}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
