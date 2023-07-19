import * as React from "react";
import { Container } from "./Container";

export const Navbar = () => {
  return (
    <Container className="fixed top-0 left-0 right-0 flex justify-between items-center pt-12">
      <h1 className="font-grotesk font-light uppercase text-xl ">Omsimos</h1>

      <ul className="md:flex gap-x-24 uppercase text-sm text-gray-300 hidden">
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </Container>
  );
};
