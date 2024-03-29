import React from "react";
import Image from "next/image";
import { RiAsterisk } from "react-icons/ri";
import { Button, Container } from "~/components/ui";
import gradientSide from "~/images/gradient-side.jpg";

export const About = () => {
  return (
    <section className="relative mb-80 mt-[30rem] space-y-60 sm:mt-[35rem] md:mt-[40rem] md:space-y-72 lg:mb-[30rem] lg:mt-[50rem] xl:mt-[70rem] xl:space-y-96 2xl:mt-[80rem]">
      <Image
        src={gradientSide}
        priority
        quality={100}
        alt="bg image"
        className="pointer-events-none absolute -bottom-[6rem] left-0 z-10 h-full -scale-x-100 mix-blend-screen lg:scale-100 2xl:-bottom-[35rem]"
      />
      <Container
        id="about-container"
        className="space-y-8 md:space-y-10 lg:space-y-14 xl:space-y-16"
      >
        <div id="about-title">
          <h2 className="bg-gradient-to-t from-[#c6c7c7] to-white bg-clip-text text-2xl tracking-tight text-transparent mix-blend-difference sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1]">
            About us
          </h2>
        </div>

        <h2
          id="about-description"
          className="w-full max-w-[400px] text-xl font-light leading-snug tracking-tighter sm:max-w-[500px] sm:text-2xl md:max-w-[600px] md:leading-snug lg:max-w-[700px] lg:text-3xl lg:leading-snug xl:max-w-[800px] xl:text-4xl xl:leading-snug"
        >
          We<span className="text-primary-100">*</span> are a team of passionate
          developers and designers. Our shared vision is to ignite the digital
          landscape with creativity and innovation by transforming ideas into
          digital realities.
        </h2>

        <Button id="about-button" route="/story" name="Our Story" />
      </Container>

      <div className="relative z-20 w-full items-center overflow-x-hidden">
        <div
          id="omsimos-creatives-title"
          className="flex -translate-x-96 items-center gap-5 [font-size:clamp(60px,10vw,200px)]  md:gap-10"
        >
          <span className="bg-gradient-to-t from-[#8c8c8c] to-white bg-clip-text text-transparent">
            OMSIMOS
          </span>
          <span>
            <RiAsterisk id="asterisk-rotate" className="text-primary-100" />
          </span>
          <span className="bg-gradient-to-t from-[#8c8c8c] to-white bg-clip-text text-transparent ">
            CREATIVES
          </span>
        </div>
      </div>

      <Container
        id="mission-container"
        className="space-y-8 md:space-y-10 lg:space-y-14 lg:pl-48 xl:space-y-16"
      >
        <div id="mission-title">
          <h2 className="bg-gradient-to-t from-[#c6c7c7] to-white bg-clip-text text-2xl tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1]">
            Your Vision, Our Mission
          </h2>
        </div>

        <h2 className="w-full max-w-[400px] text-xl font-light leading-snug tracking-tighter sm:max-w-[500px] sm:text-2xl md:max-w-[600px] md:leading-snug lg:max-w-[700px] lg:text-3xl lg:leading-snug xl:max-w-[800px] xl:text-4xl xl:leading-snug">
          Bring your vision to us, and we&apos;ll embark on a collaborative
          journey to turn your ideas into a digital masterpiece. We
          <span className="text-primary-100">*</span> immerse ourselves in the
          creative process to craft solutions that resonate with your vision.
        </h2>
      </Container>
    </section>
  );
};
