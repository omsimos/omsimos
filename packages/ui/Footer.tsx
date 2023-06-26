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
        link: "a",
      },
      {
        title: "b",
        link: "v",
      },
      {
        title: "a",
        link: "d",
      },
      {
        title: "a",
        link: "d",
      },
    ],
  },
  {
    title: "Omsimos",
    contents: [
      {
        title: "Our Story",
        link: "a",
      },
      {
        title: "b",
        link: "v",
      },
      {
        title: "a",
        link: "d",
      },
      {
        title: "a",
        link: "d",
      },
    ],
  },
  {
    title: "Omsimos",
    contents: [
      {
        title: "Our Story",
        link: "a",
      },
      {
        title: "b",
        link: "v",
      },
      {
        title: "a",
        link: "d",
      },
      {
        title: "a",
        link: "d",
      },
    ],
  },
];

export const Footer = ({ type, description }: FooterProps) => {
  return (
    <footer>
      <Container>
        <p>{description}</p>
        <BsArrowUpCircle className="text-white" />
      </Container>

      <Container>
        <div>
          <p>
            OMSIMOS <span>&copy;</span> {type}
          </p>
        </div>
        {footerData.map(({ title, contents }) => (
          <div key={title}>
            <span>{title}</span>
            <ul>
              {contents.map((content) => (
                <li key={content.title}>
                  <a href={content.link}>{content.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p>Omsimos &copy; 2023 All Rights Reserved</p>
      </Container>
    </footer>
  );
};
