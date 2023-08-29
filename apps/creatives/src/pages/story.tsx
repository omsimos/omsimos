import Image from "next/image";
import { Container } from "@omsimos/ui";
import gradientSide from "~/images/gradient-side.jpg";

export default function Story() {
  return (
    <section className="relative mb-80 mt-40 flex flex-col gap-y-60 md:gap-y-72 lg:mb-[30rem] xl:gap-y-96">
      <Image
        src={gradientSide}
        quality={100}
        alt="bg image"
        className="pointer-events-none absolute 2xl:left-0 2xl:right-auto right-0 z-10 2xl:-top-[12rem] -top-72 h-full -scale-x-100 mix-blend-screen 2xl:scale-100"
      />
      <Container className="bg-gradient-to-t from-[#8c8c8c] to-white bg-clip-text text-transparent [font-size:clamp(60px,10vw,200px)]">
        <h1>
          OUR<span className="text-primary-100 font-light">*</span> STORY
        </h1>
      </Container>

      <Container className="mt-12 space-y-8 md:space-y-10 lg:space-y-14 2xl:pl-48 md:pl-24 sm:pl-12 xl:space-y-16">
        <h2 className="bg-gradient-to-t from-[#c6c7c7] to-white bg-clip-text text-2xl tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1]">
          OMSIMOS<span className="font-light">©</span> Collective
        </h2>

        <h2 className="w-full max-w-[400px] text-xl font-light leading-snug tracking-tighter sm:max-w-[500px] sm:text-2xl md:max-w-[600px] md:leading-snug lg:max-w-[700px] lg:text-3xl lg:leading-snug xl:max-w-[800px] xl:text-4xl xl:leading-snug">
          We<span className="text-primary-100">*</span> started as an initiative
          in the open-source community, building software for learning and
          collaboration—Our collective built many open-source projects,
          including Umamin, the ultimate platform for anonymous messages.
        </h2>
      </Container>

      <Container className="flex flex-col items-end space-y-8 text-right md:space-y-10 lg:space-y-14 xl:space-y-16">
        <h2 className="bg-gradient-to-t from-[#c6c7c7] to-white bg-clip-text text-2xl tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1]">
          OMSIMOS<span className="font-light">©</span> Creatives
        </h2>

        <h2 className="w-full max-w-[400px] text-xl font-light leading-snug tracking-tighter sm:max-w-[500px] sm:text-2xl md:max-w-[600px] md:leading-snug lg:max-w-[800px] lg:text-3xl lg:leading-snug xl:max-w-[900px] xl:text-4xl xl:leading-snug">
          While studying at the university, one of the co-founders invited
          talented individuals in design to start a creative agency. The goal
          was to ignite the digital landscape with creativity and innovation.
          Our creative agency is here to weave your dreams into digital reality!
        </h2>
      </Container>

      <Image
        src={gradientSide}
        quality={100}
        alt="bg image"
        className="pointer-events-none absolute 2xl:right-0 2xl:left-auto left-0 top-[45rem] md:top-[50rem] lg:top-[60rem] z-10 h-full scale-x-100 mix-blend-screen 2xl:-scale-100"
      />
    </section>
  );
}
