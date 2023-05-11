import * as React from "react";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen font-grotesk max-w-screen-xl text-white w-[90%] mx-auto">
      <Navbar />
      {children}
    </div>
  );
};
