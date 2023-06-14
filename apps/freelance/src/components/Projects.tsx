import React from "react";
import Image from "next/image";
import { Container } from "ui";

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
    <div className="border-[#3B3B3B] border-b-[1px]">
      <Container className="tracking-tighter uppercase my-44 xl:text-8xl text-6xl sm:text-7xl md:text-8xl md:text-left text-center font-normal leading-none">
        <h1 className="text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary-100 to-white from-60% mr-5">
            Featured
          </span>
          Projects
        </h1>
      </Container>

      {projects.map((project, i) => {
        const { name, description, logo, link } = project;

        return (
          <div className="border-t-[1px] border-t-[#3B3B3B]" key={name}>
            <Container>
              <div className="grid grid-cols-5">
                <div
                  className={`border-[#3B3B3B] col-span-2 flex items-center  ${
                    (i + 1) % 2 === 0
                      ? "col-start-4 border-l-[1px] pl-20"
                      : "col-start-1 border-r-[1px] pr-20"
                  }`}
                >
                  <div className=" md:space-y-12 space-y-7 md:text-left text-center ">
                    <span className="xl:text-5xl text-3xl font-light">{`0${
                      i + 1
                    }.`}</span>
                    <p className="xl:text-7xl text-5xl mx-auto font-light">
                      {name}
                    </p>
                    <p className="xl:text-3xl text-2xl md:w-full md:mx-0 mx-auto text-gray-400 font-light">
                      {description}
                    </p>

                    <button
                      type="button"
                      className="border border-gray-300 text-lg lg:text-2xl font-light mt-8 px-5 lg:px-10 py-2 lg:py-3 rounded-full"
                    >
                      Visit Website
                    </button>
                  </div>
                </div>

                <div
                  className={` py-48 col-span-3 ${
                    (i + 1) % 2 === 0
                      ? "col-start-1 row-start-1 mr-20 ml-auto"
                      : "col-start-3 ml-20"
                  }`}
                >
                  <Image
                    src={logo}
                    className="md:scale-100 scale-50 "
                    alt={`${name} Logo`}
                    width={500}
                  />
                  <p className="text-gray-400 mt-2">Website * Mobile</p>
                </div>
              </div>
            </Container>
          </div>
        );
      })}
    </div>
  );
};
