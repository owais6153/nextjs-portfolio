"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 pt-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-linkedin to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-0 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          🤝 Let&lsquo;s Collaborate
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Whether you&lsquo;re a visionary startup ready to manifest your MVP,
          an enterprise seeking a digital metamorphosis, or an agency hunting
          for a development virtuoso, I&lsquo;m your spellbinding solution.
          I&lsquo;m here for freelance enigmas, consulting quests, and long-term
          alchemical alliances. Let&lsquo;s brew something magical together!
        </p>
      </div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">📬 Get in Touch</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Send your owl to explore the mystical opportunities we can conjure or
          to discuss your next digital odyssey. Networking, knowledge-sharing,
          and unraveling the secrets of the web are all fair game.
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/owais6153" align="center">
            <img
              align="center"
              src="https://img.shields.io/badge/GitHub-%2312100E?style=for-the-badge&logo=Github&logoColor=white"
              alt="Github Badge"
            />
          </a>
          <a href="https://www.linkedin.com/in/owais6153/" align="center">
            <img
              align="center"
              src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn Badge"
            />
          </a>
          <a href="mailto:owais6153@gmail.com" align="center">
            <img
              align="center"
              src="https://img.shields.io/badge/Email-red?style=for-the-badge&logo=gmail&logoColor=white"
              alt="Gmail Badge"
            />
          </a>
          <a href="https://join.skype.com/invite/v1ooCh7XlUdU" align="center">
            <img
              align="center"
              src="https://img.shields.io/badge/-Skype-00aff0?style=for-the-badge&logo=skype&logoColor=white"
              alt="Skype Badge"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
