import React from "react";
import Image from "next/image";
import { Container } from "ui";
import { RiAsterisk } from "react-icons/ri";
import gradientSide from "~/images/gradient-side.jpg";

export const About = () => {
  return (
    <section className="relative bottom-[30rem] space-y-60 md:bottom-[45rem] md:space-y-72 xl:bottom-[60rem] xl:space-y-96 2xl:bottom-[70rem]">
      <Image
        src={gradientSide}
        priority
        quality={100}
        alt="bg image"
        className="pointer-events-none absolute -bottom-[6rem] left-0 z-10 h-full -scale-x-100 mix-blend-screen lg:scale-100 2xl:-bottom-[35rem]"
      />
      <Container className="space-y-8 md:space-y-10 lg:space-y-14 xl:space-y-16">
        <h2 className="bg-gradient-to-t from-[#c6c7c7] to-white bg-clip-text text-2xl tracking-tight text-transparent mix-blend-difference sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1]">
          About us
        </h2>

        <h2 className="w-full text-xl font-light leading-snug tracking-tighter sm:w-3/4 sm:text-2xl md:leading-snug lg:w-2/3 lg:text-3xl lg:leading-snug xl:text-4xl xl:leading-snug">
          We are a team of passionate developers and designers. Our shared
          vision is to ignite the digital landscape with creativity and
          innovation by transforming ideas into digital realities.
        </h2>

        <button
          type="button"
          className="text-md rounded-full border border-gray-300 px-5 py-2 font-light md:text-lg lg:px-10 lg:py-3 lg:text-2xl"
        >
          Our Story
        </button>
      </Container>

      <div className="flex w-screen items-center gap-5 overflow-x-hidden bg-gradient-to-t from-[#8c8c8c] to-white bg-clip-text text-transparent [font-size:clamp(60px,10vw,200px)] md:gap-10">
        <span>OMSIMOS</span>
        <span>
          <RiAsterisk className="text-primary-100" />
        </span>
        <span>COLLECTIVE</span>
      </div>

      <Container className="space-y-8 md:space-y-10 lg:space-y-14 lg:pl-48 xl:space-y-16">
        <h2 className="bg-gradient-to-t from-[#c6c7c7] to-white bg-clip-text text-2xl tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1]">
          Your Vision, Our Mission
        </h2>

        <h2 className="w-full text-xl font-light leading-snug tracking-tighter sm:w-3/4 sm:text-2xl md:leading-snug lg:w-5/6 lg:text-3xl lg:leading-snug xl:w-3/4 xl:text-4xl xl:leading-snug">
          When you bring your ideas to us, we embark on a collaborative journey
          to turn them into a digital masterpiece. Whether it&apos;s a website,
          graphics design, or any other project, we immerse ourselves in the
          creative process to craft solutions that resonate with your vision.{" "}
        </h2>

        <button
          type="button"
          className="text-md rounded-full border border-gray-300 px-5 py-2 font-light md:text-lg lg:px-10 lg:py-3 lg:text-2xl"
        >
          Meet the team
        </button>
      </Container>
    </section>
  );
};
