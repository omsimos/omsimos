import Image from "next/image";
import { Container, Footer } from "ui";

import { Technologies, Projects, About } from "~/components";

import starImg from "~/images/star.png";
import fluidImg from "~/images/fluid.png";
import lineTopImg from "~/images/line-top.png";

export default function Freelance() {
  return (
    <main>
      <Container>
        <section className="uppercase font-light md:[font-size:clamp(80px,11vw,155px)] [font-size:clamp(50px,14vw,90px)] leading-none lg:space-y-4 space-y-2">
          <div className="md:hidden">
            <div className="flex gap-x-4 items-center mb-2">
              <h1>
                We<span className="text-primary-100">*</span>
              </h1>
              <Image
                src={fluidImg}
                alt="fluid art"
                className="h-[70px] w-[200px] object-cover rounded-md"
              />
            </div>

            <h1>Transførm</h1>
          </div>

          <h1 className="hidden md:block">
            We<span className="text-primary-100">* </span>
            Transform
          </h1>

          <div className="flex xl:gap-x-12 gap-x-6 items-center">
            <Image
              src={fluidImg}
              alt="fluid art"
              className="xl:h-[140px] lg:h-[120px] h-[90px] xl:w-[340px] lg:w-[300px] md:w-[230px] object-cover lg:rounded-xl rounded-md hidden md:block"
            />
            <h1>
              Ideas Into<span className="text-primary-100 md:hidden">—</span>
            </h1>
          </div>

          <div className="flex relative items-center">
            <div className="lowercase inline-block relative">
              <h1>
                digital{" "}
                <span className="text-primary-100 hidden md:inline">—</span>{" "}
                <span className="font-playfair italic">
                  reality<i className="text-primary-100">!</i>
                </span>
              </h1>

              <Image
                src={lineTopImg}
                className="object-contain [width:clamp(300px,70%,700px)] xl:mt-8 mt-4 xl:right-10 sm:right-8 right-5 pointer-events-none absolute"
                alt="line"
              />
            </div>

            <Image
              src={starImg}
              className="contain absolute -right-14 flex-none w-[170px] hidden xl:block"
              alt="star"
            />
          </div>
        </section>

        <section className="relative [margin-top:clamp(192px,45%,500px)]">
          <div className="my-12 [font-size:clamp(60px,10vw,150px)] font-normal leading-none tracking-tight">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-primary-100 to-white from-70%">
              OMSIMOS<span className="font-light text-white">©</span>
            </h1>
            <h1>FREELANCE</h1>
            <p className="lg:text-3xl md:text-2xl text-xl sm:w-2/3 w-full mt-4 tracking-normal font-light text-gray-200">
              An agency based in the Philippines. Dedicated to deliver quality
              digital experiences!
            </p>
          </div>
        </section>
      </Container>

      <Technologies />
      <Projects />
      <About />
      <Footer type="freelance" description="Let's build your idea" />
    </main>
  );
}
