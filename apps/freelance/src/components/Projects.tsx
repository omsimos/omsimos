import React from "react";
import Image from "next/image";
import { Container } from "ui";
import { BsArrowRight } from "react-icons/bs";

import lineCenterImg from "~/images/line-mid.png";

// import umaminThumb from "~/images/projects/thumbnail/umamin-thumbnail.jpg";
// import portfolioThumb from "~/images/projects/thumbnail/3dportfolio-thumbnail.jpg";
// import gdscThumb from "~/images/projects/thumbnail/gdscusls-thumbnail.jpg";

import umaminLogo from "~/images/projects/logo/umamin-logo.jpg";
import baseLogo from "~/images/projects/logo/om-logo.jpg";

const projects = [
  {
    name: "Umamin",
    description:
      "The ultimate platform for sending and receiving anonymous messages!",
    // thumbnail: umaminThumb,
    logo: umaminLogo,
    link: "https://umamin.link/",
  },
  {
    name: "3D Portfolio",
    description: "An immersive 3D portfolio website for a 3D artist!",
    // thumbnail: portfolioThumb,
    logo: baseLogo,
    link: "https://daleban3d.vercel.app",
  },
  {
    name: "GDSC USLS",
    description:
      "The official website of Google Developer Student Clubs in the University of St. La Salle!",
    // thumbnail: gdscThumb,
    logo: baseLogo,
    link: "https://gdsc-usls.live/",
  },
];

export const Projects = () => {
  return (
    <div>
      <Container className="tracking-tighter uppercase my-12 xl:text-9xl text-6xl sm:text-7xl md:text-8xl md:text-left text-center  font-normal leading-none">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-primary-100 to-white from-70%">
          Featured
        </h1>
        <h1>Projects</h1>
      </Container>

      <Image
        src={lineCenterImg}
        className="w-[700px] 2xl:ml-72 md:block hidden pointer-events-none"
        alt="star"
      />

      {projects.map((project, i) => {
        const { name, description, logo, link } = project;

        return (
          <React.Fragment key={name}>
            <Container
              className={`${i === 0 ? "xl:pb-96 pb-52" : "xl:py-96 py-52"}`}
            >
              <div className="md:grid gap-0 md:gap-20 flex-col-reverse lg:grid-cols-3 md:grid-cols-2  flex items-center md:items-end mt-36 md:mt-0">
                <div className="lg:col-span-2 md:space-y-10 space-y-7 md:text-left text-center">
                  <span className="xl:text-3xl text-xl font-medium">{`(0${
                    i + 1
                  })`}</span>
                  <p className="xl:text-7xl text-5xl mx-auto font-medium">
                    {name}
                  </p>
                  <p className="xl:text-4xl text-2xl lg:w-3/4  w-3/4 md:w-full md:mx-0 mx-auto text-gray-400">
                    {description}
                  </p>

                  <button type="button">
                    <a
                      href={link}
                      className="flex group hover:text-gray-200 transition-colors items-center gap-3 md:text-3xl text-2xl font-medium border-b-[1.5px] border-gray-500"
                    >
                      <span>Visit </span>
                      <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </button>
                </div>

                <Image
                  src={logo}
                  className="md:scale-100 scale-50"
                  alt={`${name} Logo`}
                  width={500}
                />
              </div>
            </Container>
            <div className="h-[1px] bg-[#3B3B3B] w-full" />
          </React.Fragment>
        );
      })}
    </div>
  );
};
