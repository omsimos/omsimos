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
    description:
      "An interactive creative website with 3D elements, created with react-three-fiber.",
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
      <Container className="tracking-tighter uppercase my-28 lg:my-44 xl:text-8xl text-6xl sm:text-7xl md:text-8xl md:text-left text-center font-normal leading-none">
        <h1 className="text-center flex flex-col lg:block">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary-100 to-white from-60% lg:mr-5">
            Featured
          </span>
          <span>Projects</span>
        </h1>
      </Container>

      {projects.map((project, i) => {
        const { name, description, logo, link } = project;

        return (
          <div
            className="border-t-[1px] border-t-[#3B3B3B] py-36 sm:py-56 lg:py-0"
            key={name}
          >
            <Container>
              <div className="lg:grid grid-cols-5 flex flex-col">
                <div
                  className={`border-[#3B3B3B] col-span-2 flex items-center mx-auto ${
                    (i + 1) % 2 === 0
                      ? "col-start-4 lg:border-l-[1px] lg:pl-20"
                      : "col-start-1 lg:border-r-[1px] lg:pr-20"
                  }`}
                >
                  <div className=" md:space-y-12 space-y-7 lg:text-left text-center">
                    <span className="lg:text-4xl 2xl:text-5xl text-3xl font-light">{`0${
                      i + 1
                    }.`}</span>
                    <p className="lg:text-6xl 2xl:text-7xl text-5xl mx-auto font-light">
                      {name}
                    </p>
                    <p className="2xl:text-3xl text-2xl lg:w-full w-3/4 md:w-2/3 lg:mx-0 mx-auto text-gray-400 font-light">
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
                  className={`lg:py-48 2xl:py-64 col-span-3 ${
                    (i + 1) % 2 === 0
                      ? "col-start-1 row-start-1 lg:mr-20 ml-auto mr-auto"
                      : "col-start-3 lg:ml-20 ml-auto mr-auto"
                  }`}
                >
                  <Image
                    src={logo}
                    className="2xl:scale-100 scale-50 lg:scale-75 "
                    alt={`${name} Logo`}
                    width={500}
                  />
                  <p className="text-gray-400 mt-2 text-center sm:-translate-y-36 -translate-y-28 lg:-translate-y-16 2xl:-translate-y-0  2xl:text-left">
                    Website * Mobile
                  </p>
                </div>
              </div>
            </Container>
          </div>
        );
      })}
    </div>
  );
};
