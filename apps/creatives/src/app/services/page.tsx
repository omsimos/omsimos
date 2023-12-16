"use client";

import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect } from "react";
import { Container } from "~/components/ui";
import gradientSide from "~/images/gradient-side.jpg";

export default function Services() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.to("body", {
      overflowY: "auto",
    });
  });

  return (
    <section className="relative mb-80 mt-40 lg:mb-[30rem]">
      <Image
        src={gradientSide}
        quality={100}
        alt="bg image"
        className="pointer-events-none absolute -top-24 left-0 z-10 h-screen mix-blend-screen md:-top-8 lg:-top-0"
      />
      <Container className="mt-12 space-y-8 sm:pl-12 md:space-y-10 md:pl-24 lg:space-y-14 xl:space-y-16 2xl:pl-48">
        <h2 className="bg-gradient-to-t from-[#c6c7c7] to-white bg-clip-text text-2xl tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1]">
          OMSIMOS<span className="font-light">©</span> Creatives
        </h2>

        <h2 className="w-full max-w-[400px] text-xl font-light leading-snug tracking-tighter sm:max-w-[500px] sm:text-2xl md:max-w-[600px] md:leading-snug lg:max-w-[700px] lg:text-3xl lg:leading-snug xl:max-w-[800px] xl:text-4xl xl:leading-snug">
          We<span className="text-primary-100">*</span> offer web development,
          UI/UX design, and graphics design.
        </h2>
      </Container>
    </section>
  );
}
