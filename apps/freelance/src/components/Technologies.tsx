import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export const Technologies = () => {
  return (
    <section className="my-56 border-y border-[#3B3B3B] py-28 gap-y-16 grid place-items-center">
      <h3 className="uppercase text-xl tracking-[0.2em] text-gray-300">
        Powering Your Website With Modern Technologies
      </h3>

      <div className='flex gap-x-36 text-5xl text-gray-100'>
        {[SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiVercel].map(
          (Icon) => (
            <Icon key={Icon.toString()} />
          )
        )}
      </div>
    </section>
  );
};
