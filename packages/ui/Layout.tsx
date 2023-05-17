import * as React from "react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: Element | JSX.Element }) => {
  return (
    <div className="min-h-screen font-grotesk max-w-screen-lg text-white w-[90%] mx-auto">
      <Navbar />
      <>{children}</>
    </div>
  );
};
