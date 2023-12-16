"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "frontend",
    id: "frontend",
    content: (
      <>
        <p className="mb-5 text-[#ADB7BE]">
          Transforming ordinary concepts into extraordinary digital experiences.{" "}
        </p>
        <div className="flex gap-[10px] flex-wrap ">
          <img
            src="https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            alt="html"
          />
          <img
            src="https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3"
            alt="css"
          />
          <img
            src="https://img.shields.io/badge/-Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
            alt="Sass"
          />
          <img
            src="https://img.shields.io/badge/-Bootstrap-563D7C?style=for-the-badge&logo=bootstrap"
            alt="bootstrap"
          />
          <img
            src="https://img.shields.io/badge/-Tailwind-222?style=for-the-badge&logo=tailwindcss"
            alt="tailwind css"
          />
          <img
            src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"
            alt="jquery"
          />
          <img
            src="https://img.shields.io/badge/-JavaScript-black?style=for-the-badge&logo=javascript"
            alt="javascript"
          />
          <img
            src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react"
            alt="react"
          />
          <img
            src="https://img.shields.io/badge/-Redux-764ABC?style=for-the-badge&logo=redux"
            alt="redux"
          />
          <img
            src="https://img.shields.io/badge/-Nextjs-556070?style=for-the-badge&logo=Next.js&logoColor=white"
            alt="Next.js"
          />
          <img
            alt="Apollo"
            src="https://img.shields.io/badge/-Apollo%20GraphQL-311C87?style=for-the-badge&logo=apollo-graphql&logoColor=white"
          />
        </div>
      </>
    ),
  },
  {
    title: "Backend",
    id: "backend",
    content: (
      <>
        <p className="mb-5 text-[#ADB7BE]">
          For over 5 enchanting years in web development, I&lsquo;ve danced
          through the ever-evolving tech landscape, crafting not just interfaces
          but entire digital realms.
        </p>
        <div className="flex gap-[10px] flex-wrap ">
          <img
            src="https://img.shields.io/badge/-Express-black?style=for-the-badge&logo=express"
            alt="Express.js"
          />
          <img
            src="https://img.shields.io/badge/-Node%20JS-80ae3b?style=for-the-badge&logoColor=white&logo=Node.js"
            alt="node"
          />
          <img
            alt="GraphQL"
            src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"
          />
          <img
            src="https://img.shields.io/badge/-Wordpress%20Backend-00749c?style=for-the-badge&logo=wordpress&logoColor=white"
            alt="wordpress"
          />
          <img
            src="https://img.shields.io/badge/-Php-black?style=for-the-badge&logo=Php"
            alt="php"
          />
          <img
            src="https://img.shields.io/badge/-Laravel-E34F26?style=for-the-badge&logo=laravel&logoColor=white"
            alt="laravel"
          />
          <img
            src="https://img.shields.io/badge/-Codeigniter-black?style=for-the-badge&logo=codeigniter"
            alt="codeigniter"
          />
        </div>
      </>
    ),
  },
  {
    title: "CMS",
    id: "cms-dev",
    content: (
      <>
        <p className="mb-5 text-[#ADB7BE]">
          Bringing magic to every line of code for seamless digital experiences.
        </p>
        <div className="flex gap-[10px] flex-wrap ">
          <img
            src="https://img.shields.io/badge/-WIX-black?style=for-the-badge&logo=wix"
            alt="wix"
          />
          <img
            src="https://img.shields.io/badge/-Wordpress-00749c?style=for-the-badge&logo=wordpress&logoColor=white"
            alt="wordpress"
          />
          <img
            src="https://img.shields.io/badge/-Webflow-black?style=for-the-badge&logo=webflow"
            alt="webflow"
          />
          <img
            src="https://img.shields.io/badge/-shopify-95bf47?style=for-the-badge&logoColor=white&logo=shopify"
            alt="shopify"
          />
          <img
            src="https://img.shields.io/badge/-squarespace-black?style=for-the-badge&logo=squarespace"
            alt="squarespace"
          />
          <img
            src="https://img.shields.io/badge/-hubspot-ff7e5e?style=for-the-badge&logoColor=white&logo=hubspot"
            alt="hubspot"
          />
        </div>
      </>
    ),
  },
  {
    title: "Database",
    id: "database",
    content: (
      <>
        <p className="mb-5 text-[#ADB7BE]">
          Behold the magic within databases! I summon powers from Mongo DB and
          MySQL, casting spells to create dynamic and efficient digital
          experiences
        </p>
        <div className="flex gap-[10px] flex-wrap ">
          <img
            src="https://img.shields.io/badge/-Mongo%20db-45a33d?style=for-the-badge&logoColor=white&logo=mongodb"
            alt="Mongo DB"
          />
          <img
            src="https://img.shields.io/badge/-MySQL-087993?style=for-the-badge&logoColor=white&logo=mysql"
            alt="mysql"
          />
        </div>
      </>
    ),
  },
  {
    title: "Devops",
    id: "devops",
    content: (
      <>
        <p className="mb-5 text-[#ADB7BE]">
          Through GitHub Actions, AWS, and Docker, I conjure DevOps magic,
          bringing automation and efficiency to the mystical journey of
          development.
        </p>
        <div className="flex gap-[10px] flex-wrap ">
          <img
            src="https://img.shields.io/badge/-Github_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white"
            alt="Github_Actions"
          />
          <img
            src="https://img.shields.io/badge/Amazon%20AWS-232F3E?style=for-the-badge&logo=amazon-aws"
            alt="aws"
          />
          <img
            src="https://img.shields.io/badge/-docker-0db7ed?style=for-the-badge&logoColor=white&logo=docker"
            alt="docker"
          />
        </div>
      </>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("frontend");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white  " id="about">
      <div className="py-8 px-4 sm:py-16 xl:px-16 z-10 relative">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            With over 5 years in the web development trenches, I&lsquo;ve
            navigated the ever-evolving tech landscape with zeal. My journey has
            been marked by creating captivating front-end interfaces,
            architecting robust back-end infrastructures, and sprinkling a bit
            of magic into every line of code.
          </p>
          <h2 className="text-3xl font-bold text-white mb-4 mt-8">My Skills</h2>
          <div className="flex flex-row justify-start gap-[20px]">
            <TabButton
              selectTab={() => handleTabChange("frontend")}
              active={tab === "frontend"}
            >
              {" "}
              Front-End Alchemy{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              {" "}
              Back-End Wizardry{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("cms-dev")}
              active={tab === "cms-dev"}
            >
              {" "}
              CMS Mastery{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("database")}
              active={tab === "database"}
            >
              {" "}
              Database Sorcery{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("devops")}
              active={tab === "devops"}
            >
              {" "}
              DevOps{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
