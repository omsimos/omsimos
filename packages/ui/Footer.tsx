import { Container } from "./Container";
import { BsArrowUpCircle } from "react-icons/bs";

type FooterProps = {
  type: "collective" | "freelance";
  description: string;
};

const footerData = [
  {
    title: "Omsimos",
    contents: [
      {
        title: "Our Story",
        link: "#",
      },
      {
        title: "The Team",
        link: "#",
      },
      {
        title: "Collective",
        link: "#",
      },
      {
        title: "Freelance",
        link: "#",
      },
    ],
  },
  {
    title: "Services",
    contents: [
      {
        title: "UI Design",
        link: "#",
      },
      {
        title: "Website",
        link: "#",
      },
      {
        title: "Graphic Design",
        link: "#",
      },
      {
        title: "Custom Request",
        link: "#",
      },
    ],
  },
  {
    title: "Projects",
    contents: [
      {
        title: "Umamnin",
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
        link: "#",
      },
      {
        title: "Instagram",
        link: "#",
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
        <p className="w-1/2 my-20  xl:text-8xl text-6xl sm:text-7xl md:text-8xl uppercase font-light">
          {description}
        </p>
      </Container>

      <div className="border-t-[1px] border-[#3B3B3B]">
        <Container className="py-10">
          <div>
            <p className="lg:text-3xl md:text-2xl text-xl uppercase flex justify-between">
              <span>
                OMSIMOS<span className="text-primary-100">&copy;</span> {type}
              </span>
              <BsArrowUpCircle className="text-white" />
            </p>
          </div>

          <div className="flex justify-between mt-20 font-light">
            {footerData.map(({ title, contents }) => (
              <div key={title} className="space-y-3">
                <span className="text-gray-400 text-lg">{title}</span>
                <ul className="text-xl space-y-2">
                  {contents.map((content) => (
                    <li
                      key={content.title}
                      className="hover:text-gray-300 transition-colors"
                    >
                      <a href={content.link}>{content.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xl text-center mt-36">
            Omsimos &copy; 2023 All Rights Reserved
          </p>
        </Container>
      </div>
    </footer>
  );
};
