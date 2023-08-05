import Image from "next/image";
import { Container, Footer } from "ui";

import { Technologies, Projects, About } from "~/components";
import bgImg from "~/images/bg-img.jpg";

export default function Freelance() {
  return (
    <main>
      <section>
        <Container>
          <h1 className="absolute bg-gradient-to-tr from-[#8c8c8c] to-white bg-clip-text text-2xl tracking-tight text-transparent sm:mt-20 sm:text-3xl  md:mt-52 md:text-4xl lg:text-5xl lg:leading-[1.1]">
            Weaving dreams <br />
            into digital <span className="font-playfair italic">reality.</span>
          </h1>
        </Container>
        <Image
          src={bgImg}
          priority
          quality={100}
          alt="bg image"
          className="pointer-events-none -z-20 mt-44 h-full w-full sm:mt-28 md:mt-0"
        />
        <About />
      </section>
      <Technologies />
      <Projects />
      <Footer type="freelance" description="Let's build your idea" />
    </main>
  );
}
