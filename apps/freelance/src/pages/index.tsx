import Image from "next/image";
import fluidImg from "../assets/images/fluid.png";
import starImg from "../assets/images/star.png";
import lineImg from "../assets/images/line.png";
import gridImg from "../assets/images/grid.png";

export default function Freelance() {
  return (
    <main>
      <section className="uppercase font-light text-[7rem] leading-none">
        <h1>
          We<span className="text-primary-100">*</span> Transførm
        </h1>

        <div className="flex gap-x-12 items-center">
          <Image
            src={fluidImg}
            alt="fluid art"
            className="w-[400px] h-[150px] bg-cover"
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
            className="contain absolute -right-10 flex-none w-[170px]"
            alt="star"
          />
        </div>
      </section>

      <section className="relative">
        <Image src={gridImg} className="contain absolute -z-10 pointer-events-none" alt="star" />

          <Image
            src={lineImg}
            className="contain w-[700px] ml-32 mt-8 pointer-events-none"
            alt="star"
          />

        <p className='mt-8 text-5xl font-light leading-snug'>
          Omsimos is a freelance agency based in the Philippines. We create
          elegant websites with modern technologies.
        </p>
      </section>
    </main>
  );
}
