import React from "react";
import { Container } from "ui";
import { RiAsterisk } from "react-icons/ri";

export const About = () => {
  return (
    <section className="xl:py-64 py-44 md:py-52 border-y-[1px] border-y-[#3B3B3B] overflow-x-hidden">
      <div className="lg:mb-52 mb-20 flex items-center gap-5 md:gap-10 [font-size:clamp(60px,10vw,200px)]">
        <span>OMSIMOS</span>
        <span>
          <RiAsterisk className="text-primary-100" />
        </span>
        <span>COLLECTIVE</span>
      </div>

      <Container>
        <div>
          <h2 className="mt-12 xl:text-5xl text-2xl sm:text-3xl lg:text-4xl tracking-tighter lg:leading-snug  leading-snug md:leading-snug  xl:leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis
            aliquam repellat obcaecati quam neque dolor libero iure praesentium
            consequatur quos labore error magnam, tempore, dolores nostrum.
            Error, amet dignissimos.
          </h2>

          <button
            type="button"
            className="border border-gray-300 text-lg lg:text-2xl font-light mt-8 px-5 lg:px-10 py-2 lg:py-3 rounded-full"
          >
            Button
          </button>
        </div>
      </Container>
    </section>
  );
};
