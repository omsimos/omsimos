import React from "react";
import Image from "next/image";
import { Button, Container } from "ui";

import umaminLogo from "~/images/projects/logo/umamin-logo.jpg";
import portLogo from "~/images/projects/logo/port-logo.jpg";
import gdscLogo from "~/images/projects/logo/gdsc-logo.jpg";

import { TfiArrowRight } from "react-icons/tfi";

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
    <div className="border-b-[1px] border-[#3B3B3B]">
      <Container>
        <h2 className="mb-20 bg-gradient-to-t from-[#c6c7c7] to-white bg-clip-text text-center text-2xl tracking-tight text-transparent sm:text-3xl md:text-5xl lg:leading-[1.1]">
          Featured Projects
        </h2>
      </Container>
      <div className="grid xl:grid-cols-3">
        {projects.map((project, i) => {
          const { name, description, logo, link } = project;

          return (
            <div
              className="group relative flex h-[80vh] flex-col justify-between border-r-[1px] border-t-[1px] border-[#3B3B3B] p-20 last-of-type:border-r-0"
              key={name}
            >
              <span className="text-1xl font-light lg:text-2xl xl:text-3xl 2xl:text-2xl">{`(0${
                i + 1
              }.)`}</span>
              <p className="font-regular text-2xl transition-opacity duration-700 ease-in-out group-hover:pointer-events-none group-hover:opacity-0 lg:text-3xl xl:text-4xl 2xl:text-5xl">
                {name}
              </p>
              <p className="mx-auto w-3/4 text-xl font-light text-gray-400 transition-opacity duration-700 ease-in-out  group-hover:pointer-events-none group-hover:opacity-0 md:w-2/3 lg:mx-0 lg:w-full lg:text-2xl 2xl:text-2xl">
                {description}
              </p>

              <Image
                src={logo}
                priority
                quality={100}
                alt="bg image"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity  duration-700 ease-in-out group-hover:opacity-100"
              />

              <a href={link} target="_blank">
                <Button name="Visit Website" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
