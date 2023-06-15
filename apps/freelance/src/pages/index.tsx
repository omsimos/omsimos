import Image from "next/image";
import { Container } from "ui";

import { Technologies, Projects } from "~/components";

import starImg from "~/images/star.png";
import fluidImg from "~/images/fluid.png";
import lineTopImg from "~/images/line-top.png";
import lineBottomImg from "~/images/line-bottom.png";

export default function Freelance() {
  return (
    <main>
      <Container>
        <section className="uppercase font-light text-[150px] leading-none space-y-4">
          <h1>
            We<span className="text-primary-100">*</span> Transførm
          </h1>

          <div className="flex gap-x-12 items-center">
            <Image
              src={fluidImg}
              alt="fluid art"
              className="w-[400px] h-[150px] bg-cover rounded-xl"
            />
            <h1>Ideas Into</h1>
          </div>

          <div className="flex relative items-center">
            <h1 className="lowercase">
              digital <span className="text-primary-100">—</span>{" "}
              <span className="font-playfair italic">
                reality<i className="text-primary-100">!</i>
              </span>
            </h1>

            <Image
              src={starImg}
              className="contain absolute -right-14 flex-none w-[170px]"
              alt="star"
            />
          </div>
        </section>

        <section className="relative">
          <Image
            src={lineTopImg}
            className="contain w-[700px] ml-96 mt-8 pointer-events-none"
            alt="star"
          />

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

          {/* <Image
            src={lineBottomImg}
            className="contain xl:w-[500px] md:w-96 w-72 xl:ml-96 lg:ml-60 md:ml-32 rotate-12 lg:rotate-0 mt-8 pointer-events-none"
            alt="star"
          />

          <div>
            <h2 className="mt-12 xl:text-5xl text-2xl sm:text-3xl lg:text-4xl tracking-tighter lg:leading-snug  leading-snug md:leading-snug  xl:leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis
              aliquam repellat obcaecati quam neque dolor libero iure
              praesentium consequatur quos labore error magnam, tempore, dolores
              nostrum. Error, amet dignissimos.
            </h2>

            <button
              type="button"
              className="border border-gray-300 text-lg lg:text-2xl font-light mt-8 px-5 lg:px-10 py-2 lg:py-3 rounded-full"
            >
              Visit Website
            </button>
          </div> */}
        </section>
      </Container>

      <Technologies />
      <Projects />
    </main>
  );
}
