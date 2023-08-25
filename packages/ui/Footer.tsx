import { Container } from "./Container";
import { BsArrowUpCircle } from "react-icons/bs";

type FooterProps = {
  type: "collective" | "creatives";
  description: string;
};

const footerData = [
  {
    title: "Agency",
    contents: [
      {
        title: "Our Story",
        link: "#",
      },
      {
        title: "The Team",
        link: "#",
      },
    ],
  },
  {
    title: "Projects",
    contents: [
      {
        title: "Umamin",
        link: "https://umamin.link/",
      },
      {
        title: "3D Portfolio",
        link: "https://daleban3d.vercel.app/",
      },
      {
        title: "GDSC USLS",
        link: "https://gdsc-usls.live/",
      },
    ],
  },
  {
    title: "Connect",
    contents: [
      {
        title: "Facebook",
        link: "https://www.facebook.com/omsimos.agency",
      },
      {
        title: "Instagram",
        link: "https://www.instagram.com/omsim.os",
      },
      {
        title: "GitHub",
        link: "https://github.com/omsimos",
      },
    ],
  },
];

export const Footer = ({ type, description }: FooterProps) => {
  return (
    <footer>
      <Container>
        <p className="lg:w-1/2 sm:w-5/6 w-11/12 my-20 xl:text-8xl text-6xl sm:text-7xl md:text-8xl uppercase font-light">
          {description}
        </p>
      </Container>

      <div className="border-t-[1px] border-[#3B3B3B]">
        <Container className="py-10">
          <div className="flex justify-between md:hidden">
            <p className="lg:text-3xl md:text-3xl text-2xl uppercase">
              <span>
                OMSIMOS
                <span className="text-primary-100">&copy;</span> {type}
              </span>
            </p>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <BsArrowUpCircle className="text-white cursor-pointer lg:text-5xl md:text-4xl text-3xl" />
            </button>
          </div>

          <div className="flex md:justify-between mt-20 font-light gap-14 flex-wrap">
            {footerData.map(({ title, contents }) => (
              <div key={title} className="space-y-3 xl:text-lg">
                <span className="text-gray-400">{title}</span>
                <ul className="space-y-2">
                  {contents.map((content) => (
                    <li
                      key={content.title}
                      className="hover:text-gray-300 transition-colors"
                    >
                      <a
                        href={content.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {content.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="hidden md:flex flex-col justify-between items-end">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <BsArrowUpCircle className="text-white cursor-pointer lg:text-5xl md:text-4xl text-3xl" />
              </button>
              <p className="lg:text-2xl text-xl uppercase">
                <span>
                  OMSIMOS
                  <span className="text-primary-100">&copy;</span> {type}
                </span>
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-center md:text-left mt-36 xl:text-lg">
            OMSIMOS &copy; 2023 All Rights Reserved
          </p>
        </Container>
      </div>
    </footer>
  );
};
