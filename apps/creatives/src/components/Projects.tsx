import React from "react";
import Image from "next/image";
import { Button, Container } from "@omsimos/ui";

import umaminLogo from "~/images/projects/logo/umamin-logo.jpg";
import portLogo from "~/images/projects/logo/port-logo.jpg";
import gdscLogo from "~/images/projects/logo/gdsc-logo.jpg";

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
    logo: portLogo,
    link: "https://daleban3d.vercel.app",
  },
  {
    name: "GDSC USLS",
    description:
      "The official website of Google Developer Student Clubs in the University of St. La Salle.",
    // thumbnail: gdscThumb,
    logo: gdscLogo,
    link: "https://gdsc-usls.live/",
  },
];

export const Projects = () => {
  return (
    <div
      id="projects"
      className="mb-80 scroll-mt-14 border-b-[1px] border-gray-600 lg:mb-[30rem]"
    >
      <Container>
        <div id="projects-title">
          <h3 className="mb-20 bg-gradient-to-t from-[#c6c7c7] to-white bg-clip-text text-center text-2xl tracking-tight text-transparent sm:text-3xl md:text-5xl lg:leading-[1.1]">
            Featured Projects
          </h3>
        </div>
      </Container>
      <div id="projects-list" className="grid xl:grid-cols-3">
        {projects.map(({ name, description, logo, link }, i) => {
          return (
            <div
              className="project-item group relative flex min-h-[80vh] flex-col justify-between border-r-[1px] border-t-[1px] border-[#3B3B3B] p-20 last-of-type:border-r-0 md:flex-row lg:gap-10 xl:flex-col xl:gap-0"
              key={name}
            >
              <span className="text-1xl block text-center font-light md:hidden md:text-left lg:text-2xl xl:block">{`(0${
                i + 1
              }.)`}</span>

              <Image
                src={logo}
                priority
                quality={100}
                alt={name}
                className="pointer-events-none -z-10 object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-100 sm:scale-75 xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 xl:opacity-0"
              />

              <p className="font-regular block text-center text-2xl transition-opacity duration-700 ease-in-out sm:text-3xl md:hidden md:text-left xl:block xl:text-4xl xl:group-hover:pointer-events-none xl:group-hover:opacity-0 2xl:text-[2.6rem]">
                {name}
              </p>
              <p className="mx-auto block w-full py-5 text-center text-lg font-light text-gray-400 transition-opacity duration-700 ease-in-out sm:w-2/3 sm:py-8 md:mx-0 md:hidden md:w-2/3 md:py-0 md:text-left lg:mx-0 lg:w-full lg:text-2xl xl:block xl:group-hover:pointer-events-none xl:group-hover:opacity-0 2xl:text-2xl">
                {description}
              </p>

              <a href={link} target="_blank">
                <Button
                  name="Visit Website"
                  className="mx-auto block md:mx-0 md:hidden xl:flex"
                />
              </a>

              <div className="hidden flex-col justify-center space-y-20 md:flex xl:hidden">
                <span className="text-1xl text-center font-light md:text-left lg:text-2xl">{`(0${
                  i + 1
                }.)`}</span>

                <div>
                  <p className="font-regular mb-10 text-left text-3xl">
                    {name}
                  </p>
                  <p className="w-full text-left text-xl font-light text-gray-400 lg:mx-0 lg:w-3/4 lg:text-2xl">
                    {description}
                  </p>
                </div>

                <a href={link} target="_blank">
                  <Button name="Visit Website" className="mx-auto md:mx-0" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
