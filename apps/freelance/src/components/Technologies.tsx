import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Container } from "ui";

export const Technologies = () => {
  return (
    <section className="mt-44 border-y border-[#3B3B3B] py-28 gap-y-16 grid place-items-center">
      <Container>
        <h3 className="uppercase mb-20 text-md lg:text-xl tracking-[0.2em] text-gray-300 text-center">
          Powering Your Website With Modern Technologies
        </h3>

        <div className="flex gap-10 w-3/5 md:w-full mx-auto md:gap-20 lg:gap-36 flex-wrap justify-center lg:text-5xl md:text-4xl  text-3xl text-gray-100">
          {[SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiVercel].map(
            (Icon) => (
              <Icon key={Icon.toString()} />
            )
          )}
        </div>
      </Container>
    </section>
  );
};
