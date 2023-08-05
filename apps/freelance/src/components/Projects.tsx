import React from "react";
import Image from "next/image";
import { Container } from "ui";

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
      "The official website of Google Developer Student Clubs in the University of St. La Salle!",
    // thumbnail: gdscThumb,
    logo: gdscLogo,
    link: "https://gdsc-usls.live/",
  },
];

export const Projects = () => {
  return (
    <div className="border-b-[1px] border-[#3B3B3B]">
      <Container>
        <h2 className="mb-20 bg-gradient-to-t from-[#c6c7c7] to-white bg-clip-text text-2xl tracking-tight text-transparent sm:text-3xl md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Featured <br />
          Projects
        </h2>
      </Container>
      <div className="grid xl:grid-cols-3">
        {projects.map((project, i) => {
          const { name, description, logo, link } = project;

          return (
            <div
              className=" flex h-[80vh] flex-col justify-between border-r-[1px] border-t-[1px] border-[#3B3B3B] p-20 last-of-type:border-r-0"
              key={name}
            >
              <span className="text-1xl font-light lg:text-2xl xl:text-3xl 2xl:text-2xl">{`(0${
                i + 1
              }.)`}</span>
              <p className="font-regular text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                {name}
              </p>
              <p className="mx-auto w-3/4 text-xl font-light text-gray-400 md:w-2/3 lg:mx-0 lg:w-full lg:text-2xl 2xl:text-2xl">
                {description}
              </p>

              <a href={link} target="_blank">
                <button
                  type="button"
                  className="mt-8 rounded-full border 
                        border-gray-300 px-5 py-2 text-lg font-light xl:px-10 xl:py-3 xl:text-xl"
                >
                  Visit Website
                </button>
              </a>
            </div>

            //       <div
            //         className={`col-span-3 lg:py-48 2xl:py-96 ${
            //           (i + 1) % 2 === 0
            //             ? "col-start-1 row-start-1 ml-auto mr-auto lg:mr-20"
            //             : "col-start-3 ml-auto mr-auto lg:ml-20"
            //         }`}
            //       >
            //         <Image
            //           src={logo}
            //           className="scale-50 lg:scale-75 2xl:scale-100 "
            //           alt={`${name} Logo`}
            //           width={500}
            //         />
            //         <p className="mt-2 -translate-y-[6.5rem] text-center text-gray-400 sm:-translate-y-32 lg:-translate-y-16 2xl:-translate-y-0  2xl:text-left">
            //           Website * Mobile
            //         </p>
            // </div>
          );
        })}
      </div>
    </div>
  );
};
