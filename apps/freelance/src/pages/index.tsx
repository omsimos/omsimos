import Image from "next/image";
import fluidImg from "../assets/images/fluid.png";
import starImg from "../assets/images/star.png";
import lineImg from "../assets/images/line.png";
import gridImg from "../assets/images/grid.png";

export default function Freelance() {
  return (
    <section>
      <div className="uppercase font-light text-[7rem] leading-none">
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

          <Image src={starImg} className="contain absolute -right-10 flex-none w-[170px]" alt="star" />
          <Image src={lineImg} className="contain absolute right-52 top-44 flex-none w-[700px]" alt="star" />
        </div>

      </div>

          <Image src={gridImg} className="contain" alt="star" />
    </section>
  );
}
