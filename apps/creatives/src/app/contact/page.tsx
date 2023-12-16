"use client";

import gsap from "gsap";
import Image from "next/image";
import { Container } from "~/components/ui";
import { TfiArrowRight } from "react-icons/tfi";
import gradientSide from "~/images/gradient-side.jpg";
import { useLayoutEffect } from "react";

export default function Contact() {
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
        className="pointer-events-none absolute -top-20 left-0 z-10 h-screen mix-blend-screen md:-top-8 lg:-top-0"
      />

      <Container className="space-y-8">
        <a
          href="mailto:omsimos.agency@gmail.com"
          className="block bg-gradient-to-t from-[#c6c7c7] to-white bg-clip-text text-2xl tracking-tight text-transparent mix-blend-difference sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1]"
        >
          omsimos.agency@gmail.com
        </a>

        <div className="inline-block">
          <a
            href="https://www.facebook.com/omsimos.agency"
            target="_blank"
            rel="noreferrer noopener"
            className="group/a flex items-center gap-2 border-b-[1px] pb-1 text-lg font-light transition-opacity ease-out hover:opacity-80 md:text-xl xl:text-2xl"
          >
            Facebook
            <TfiArrowRight className="transition-transform duration-200 ease-out group-hover/a:translate-x-3" />
          </a>
        </div>
      </Container>
    </section>
  );
}
