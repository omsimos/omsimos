"use client";

import Image from "next/image";
import { Container } from "~/components/ui";
import { Technologies, Projects, About, Loader } from "~/components";

import bgImg from "~/images/bg-img.jpg";
import { useStore } from "../hooks/useStore";

export default function Home() {
  const { unmountLoader } = useStore();

  return (
    <>
      <main>
        {/* {!unmountLoader && <Loader />} */}
        <section>
          <Container>
            <h1
              id="main-text"
              className="relative z-50 mt-40 text-2xl tracking-tight sm:text-3xl md:mt-52 md:text-4xl lg:text-5xl lg:leading-[1.1] [&>span]:bg-gradient-to-tr [&>span]:from-[#8c8c8c] [&>span]:to-white [&>span]:bg-clip-text [&>span]:text-transparent"
            >
              <span>Weaving</span> <span>dreams</span> <br />
              <span>into</span> <span>digital</span>{" "}
              <span className="font-playfair italic">reality.</span>
            </h1>
          </Container>
          <div className="absolute left-0 right-0 top-0 -z-20">
            <Image
              src={bgImg}
              priority
              quality={100}
              alt="bg image"
              placeholder="blur"
              draggable={false}
              className="pointer-events-none -mb-96 mt-44 h-full w-full sm:mt-28 md:mt-0"
            />
          </div>
        </section>

        <About />
        <Technologies />
        <Projects />
      </main>
    </>
  );
}
