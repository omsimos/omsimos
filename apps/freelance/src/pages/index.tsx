import Image from "next/image";
import { Container, Footer } from "ui";

import { Technologies, Projects, About } from "~/components";
import bgImg from "~/images/bg-img.jpg";

export default function Freelance() {
  return (
    <main>
      <section>
        <Container>
          <h1 className="absolute bg-clip-text text-transparent tracking-tight bg-gradient-to-tr from-[#8c8c8c] to-white lg:text-5xl md:mt-52 sm:mt-20  lg:leading-[1.1] text-2xl sm:text-3xl md:text-4xl">
            We transform ideas <br /> into digital
            <span className="bg-clip-text text-transparent bg-gradient-to-tr  from-green-900 to-green-300 ">
              {" "}
              —{" "}
            </span>
            <span className="font-playfair italic">reality.</span>
          </h1>
        </Container>
        <Image
          src={bgImg}
          priority
          quality={100}
          alt="bg image"
          className="h-full w-full pointer-events-none md:mt-0 sm:mt-28  mt-44"
        />
      </section>
      <Technologies />
      <Projects />
      <About />
      <Footer type="freelance" description="Let's build your idea" />
    </main>
  );
}
