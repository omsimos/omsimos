import Image from "next/image";
import { Container } from "@omsimos/ui";
import { Technologies, Projects, About } from "~/components";

import bgImg from "~/images/bg-img.jpg";
import { ScrollAnimation } from "~/gsap/ScrollAnimation";
import { Loader } from "~/gsap/Loader";
import { useStore } from "../hooks/useStore";

export default function Freelance() {
  const { unmountLoader } = useStore();

  return (
    <>
      <main>
        {!unmountLoader && <Loader />}
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
              draggable={false}
              className="pointer-events-none -mb-96 mt-44 h-full w-full sm:mt-28 md:mt-0"
            />
          </div>
        </section>

        <ScrollAnimation>
          <About />
          <Technologies />
          <Projects />
        </ScrollAnimation>
      </main>
    </>
  );
}
