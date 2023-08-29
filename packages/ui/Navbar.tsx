import { Container } from "./Container";

export const Navbar = () => {
  return (
    <Container className="flex justify-between items-center pt-12 z-40">
      <h1 className="font-grotesk font-light uppercase text-xl ">Omsimos</h1>

      <ul className="md:flex gap-x-24 uppercase text-base text-gray-300 hidden">
        <li className="hover-effect">Services</li>
        <li className="hover-effect">Projects</li>
        <li className="hover-effect">Contact</li>
      </ul>
    </Container>
  );
};
