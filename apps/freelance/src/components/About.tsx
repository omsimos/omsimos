import React from "react";
import { Container } from "ui";
import { RiAsterisk } from "react-icons/ri";

export const About = () => {
  return (
    <section className="overflow-x-hidden border-y-[1px] border-y-[#3B3B3B] py-44 md:py-52 xl:py-64">
      <div className="mb-20 flex items-center gap-5 [font-size:clamp(60px,10vw,200px)] md:gap-10 lg:mb-52">
        <span>OMSIMOS</span>
        <span>
          <RiAsterisk className="text-primary-100" />
        </span>
        <span>COLLECTIVE</span>
      </div>

      <Container>
        <div>
          <h2 className="mt-12 text-2xl leading-snug tracking-tighter sm:text-3xl md:leading-snug lg:text-4xl  lg:leading-snug xl:text-5xl  xl:leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis
            aliquam repellat obcaecati quam neque dolor libero iure praesentium
            consequatur quos labore error magnam, tempore, dolores nostrum.
            Error, amet dignissimos.
          </h2>

          <button
            type="button"
            className="mt-8 rounded-full border border-gray-300 px-5 py-2 text-lg font-light lg:px-10 lg:py-3 lg:text-2xl"
          >
            Button
          </button>
        </div>
      </Container>
    </section>
  );
};
