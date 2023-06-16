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
    <section className="xl:my-60 my-36 border-y border-[#3B3B3B] lg:py-28 py-20  gap-y-16 grid place-items-center">
      <Container>
        <h3 className="uppercase mb-20 text-sm sm:text-md lg:text-lg xl:text-xl tracking-[0.2em] text-gray-300 text-center">
          Powering Your Website With Modern Technologies
        </h3>

        <div className="flex gap-10 sm:gap-16 w-full md:gap-20 lg:gap-28 xl:gap-36 justify-center lg:text-4xl xl:text-5xl md:text-4xl sm:text-3xl text-2xl text-gray-100">
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
