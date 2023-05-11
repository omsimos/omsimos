import * as React from "react";

export const Navbar = () => {
  return (
  <nav className='flex justify-between items-center'>
      <h1 className='font-grotesk font-light uppercase text-xl py-12'>Omsimos</h1>

      <ul className='md:flex gap-x-24 uppercase text-sm text-gray-300 hidden'>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
