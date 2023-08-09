import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Container } from "ui";

import Image from "next/image";
import gradientSide from "~/images/gradient-side.jpg";

export const Technologies = () => {
  const icons = [
    {
      component: SiNextdotjs,
      description: "Web development framework",
    },
    {
      component: SiReact,
      description: "Library for web interfaces",
    },
    {
      component: SiTailwindcss,
      description: "A utility-first CSS framework",
    },
    {
      component: SiTypescript,
      description: "Strongly typed programming language",
    },
    {
      component: SiVercel,
      description: "Frontend cloud from the creators of Next.js ",
    },
  ];
  return (
    <section className="relative mb-56 xl:mb-96">
      <Image
        src={gradientSide}
        priority
        quality={100}
        alt="side gradient"
        className="pointer-events-none absolute -top-72 right-0 -z-10 h-full -scale-x-100 mix-blend-screen sm:h-[230%] lg:-top-48"
      />

      <Container>
        <h3 className="mb-20 bg-gradient-to-t from-[#c6c7c7] to-white bg-clip-text text-center text-2xl tracking-tight text-transparent sm:text-3xl md:text-left md:text-5xl lg:leading-[1.1]">
          Powering your website <br /> with modern technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-12 md:justify-start">
          {icons.map((icon) => (
            <div
              key={icon.component.toString()}
              className="flex h-64 w-64 flex-col justify-between rounded-xl border-[1px] border-gray-600 p-10 md:h-72 md:w-72"
            >
              <icon.component className="text-4xl text-gray-100 xl:text-5xl" />
              <p className="text-lg font-light md:text-xl">
                {icon.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
