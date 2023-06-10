import Image from "next/image";
import { Container } from "ui";
import { BsArrowRight } from "react-icons/bs";

import lineCenterImg from "~/images/line-mid.png";

import umaminThumb from "~/images/projects/thumbnail/umamin-thumbnail.jpg";
import portfolioThumb from "~/images/projects/thumbnail/3dportfolio-thumbnail.jpg";
import gdscThumb from "~/images/projects/thumbnail/gdscusls-thumbnail.jpg";

import umaminLogo from "~/images/projects/logo/umamin-logo.jpg";
import baseLogo from "~/images/projects/logo/om-logo.jpg";

const projects = [
  {
    name: "Umamin",
    description:
      "The ultimate platform for sending and receiving anonymous messages!",
    thumbnail: umaminThumb,
    logo: umaminLogo,
    link: "https://umamin.link/",
  },
  {
    name: "3D Portfolio",
    description: "An immersive 3D portfolio website for a 3D artist!",
    thumbnail: portfolioThumb,
    logo: baseLogo,
    link: "https://daleban3d.vercel.app",
  },
  {
    name: "GDSC USLS",
    description:
      "The official website of Google Developer Student Clubs in the University of St. La Salle!",
    thumbnail: gdscThumb,
    logo: baseLogo,
    link: "https://gdsc-usls.live/",
  },
];

export const Projects = () => {
  return (
    <Container>
      <div className="tracking-tighter uppercase my-12 text-9xl font-normal leading-none">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-primary-100 to-white from-70%">
          Featured
        </h1>
        <h1>Projects</h1>
      </div>

      {projects.map((project, i) => {
        const { name, description, thumbnail, logo, link } = project;

        return (
          <div
            key={name}
            className={`${
              i === 0 ? "pt-40 pb-96" : "py-96"
            } border-b-[1.5px] border-[#3B3B3B]`}
          >
            <Image src={thumbnail} alt={`${name} Website Screenshot`} />
            <Image
              src={lineCenterImg}
              className={`${
                (i + 1) % 2 === 0 ? "" : "-scale-x-100"
              } contain  w-[900px] mx-auto pointer-events-none`}
              alt="green line"
            />

            <div
              className={`${
                (i + 1) % 2 === 0 ? "flex flex-row-reverse" : "flex gap-14"
              } items-end`}
            >
              <Image src={logo} alt={`${name} Logo`} />

              <div className="space-y-10">
                <span className="text-3xl font-medium">{`(0${i + 1})`}</span>
                <p className="text-7xl w-1/2 font-medium">{name}</p>
                <p className="text-4xl w-3/4 text-gray-400">{description}</p>

                <button type="button">
                  <a
                    href={link}
                    className="flex group hover:text-gray-200 transition-colors items-center gap-3 text-3xl font-medium border-b-[1.5px] border-gray-500"
                  >
                    <span>Visit </span>
                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
};
