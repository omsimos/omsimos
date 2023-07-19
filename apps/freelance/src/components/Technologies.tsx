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
    <section className="my-36 grid place-items-center gap-y-16 border-y border-[#3B3B3B]  py-20 lg:py-28 xl:my-60">
      <Container>
        <h3 className="sm:text-md mb-12 text-center text-sm uppercase tracking-[0.2em] text-gray-300 md:mb-20 lg:text-lg xl:text-xl">
          Powering Your Website With Modern Technologies
        </h3>

        <div className="flex w-full justify-center gap-10 text-2xl text-gray-100 sm:gap-16 sm:text-3xl md:gap-20 md:text-4xl lg:gap-28 lg:text-4xl xl:gap-36 xl:text-5xl">
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
