import Image from "next/image";
import { Container } from "@omsimos/ui";

import { Technologies, Projects, About } from "~/components";
import bgImg from "~/images/bg-img.jpg";
import { Loader } from "~/gsap/Loader";
import { ScrollAnimation } from "~/gsap/ScrollAnimation";

export default function Freelance() {
  return (
    <>
      <Loader />
      <main>
        <section>
          <Container>
            <h1
              id="main-text"
              className="relative z-50 mt-40 bg-gradient-to-tr from-[#8c8c8c] to-white bg-clip-text text-2xl tracking-tight text-transparent sm:text-3xl md:mt-52 md:text-4xl lg:text-5xl lg:leading-[1.1]"
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
