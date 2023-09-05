import Link from "next/link";
import { Container } from "./Container";

export const Navbar = () => {
  return (
    <Container className="flex justify-between items-center pt-12 z-30">
      <Link href="/" className="font-grotesk font-light uppercase text-xl ">
        Omsimos
      </Link>

      <ul className="md:flex gap-x-24 uppercase text-base text-gray-300 hidden">
        <li className="hover-effect">
          <Link href="/services">Services</Link>
        </li>
        <li className="hover-effect">
          <Link href="/#projects">Projects</Link>
        </li>
        <li className="hover-effect">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </Container>
  );
};
