import React from "react";
import Image from "next/image";
import { Container } from "ui";
import { RiAsterisk } from "react-icons/ri";
import gradientSide from "~/images/gradient-side.jpg";

export const About = () => {
  return (
    <section className="relative bottom-[35rem]">
      <div className="space-y-56">
        <Container>
          <h2 className="bg-gradient-to-t from-[#c6c7c7] to-white bg-clip-text text-2xl tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-6xl lg:leading-[1.1]">
            About us
          </h2>

          <h2 className="mt-5 w-3/4 text-xl font-light leading-snug tracking-tighter sm:text-2xl md:mt-6 md:leading-snug lg:text-3xl lg:leading-snug xl:mt-12 xl:text-4xl xl:leading-snug">
            We are a team of passionate developers, designers, and digital
            enthusiasts. Our shared vision is to ignite the digital landscape
            with creativity and innovation by transforming ideas into
            captivating digital realities.
          </h2>

          <button
            type="button"
            className="mt-8 rounded-full border border-gray-300 px-5 py-2 text-lg font-light lg:px-10 lg:py-3 lg:text-2xl"
          >
            Meet the team
          </button>
        </Container>

        <div className="flex w-screen items-center gap-5 overflow-x-hidden bg-gradient-to-t from-[#8c8c8c] to-white bg-clip-text text-transparent [font-size:clamp(60px,10vw,200px)] md:gap-10">
          <span>OMSIMOS</span>
          <span>
            <RiAsterisk className="text-primary-100" />
          </span>
          <span>COLLECTIVE</span>
        </div>

        <Image
          src={gradientSide}
          priority
          quality={100}
          alt="bg image"
          className="pointer-events-none absolute -bottom-96 left-0 -z-10 h-full"
        />

        <Container className="translate-x-48">
          <h2 className="bg-gradient-to-t from-[#c6c7c7] to-white bg-clip-text text-2xl tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-6xl lg:leading-[1.1]">
            Your Vision, Our Mission
          </h2>

          <h2 className="mt-5 w-3/4 text-xl font-light leading-snug tracking-tighter sm:text-2xl md:mt-6 md:leading-snug lg:text-3xl lg:leading-snug xl:mt-12 xl:text-4xl xl:leading-snug">
            When you bring your ideas to us, we embark on a collaborative
            journey to turn them into a digital masterpiece. Whether it&apos;s
            web development, web design, logo design, graphics design, layout,
            or any other project, we immerse ourselves in the creative process
            to craft solutions that resonate with your vision.{" "}
          </h2>

          <button
            type="button"
            className="mt-8 rounded-full border border-gray-300 px-5 py-2 text-lg font-light lg:px-10 lg:py-3 lg:text-2xl"
          >
            Our Services
          </button>
        </Container>
      </div>
    </section>
  );
};
