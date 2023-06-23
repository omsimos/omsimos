import React from "react";
import { Container } from "ui";

export const About = () => {
  return (
    <section className="py-64 border-y-[1px] border-y-[#3B3B3B]">
      <div className="mb-52 flex items-center gap-10 overflow-x-hidden [font-size:clamp(60px,10vw,200px)] h-fit">
        <span>OMSIMOS</span>
        <span className="text-primary-100 scale-150 h-fit">*</span>
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
