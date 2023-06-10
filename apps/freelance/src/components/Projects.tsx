import Image from "next/image";
import { Container } from "ui";
import { BsArrowRight } from "react-icons/bs";

import lineCenterImg from "~/images/line-mid.png";
import umaminLogo from "~/images/projects/logo/umamin-logo.jpg";
import umaminThumb from "~/images/projects/thumbnail/umamin-thumbnail.jpg";

export const Projects = () => {
  return (
    <Container>
      <div className="tracking-tighter uppercase my-12 text-9xl font-normal leading-none">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-primary-100 to-white from-70%">
          Featured
        </h1>
        <h1>Projects</h1>
      </div>

      <div className="mt-40">
        <Image src={umaminThumb} alt="Umamin Website Screenshot" />
        <Image
          src={lineCenterImg}
          className="contain -scale-x-100 w-[900px] mx-auto pointer-events-none"
          alt="green line"
        />

        <div className="flex gap-14 items-end">
          <Image src={umaminLogo} alt="Umamin Logo" />

          <div className="space-y-10">
            <span className="text-3xl font-medium">(01)</span>
            <p className="text-7xl w-1/2 font-medium">Umamin</p>
            <p className="text-4xl w-3/4 text-gray-400">
              The ultimate platform for sending and receiving anonymous
              messages!
            </p>
            <button
              type="button"
              className="flex group hover:text-gray-200 transition-colors items-center gap-3 text-3xl font-medium border-b-[1.5px] border-gray-500"
            >
              <span>Visit </span>{" "}
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
