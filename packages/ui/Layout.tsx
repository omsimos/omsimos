import * as React from "react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen font-grotesk max-w-screen-xl text-white w-[90%] mx-auto">
      <Navbar />
      <>{children}</>
    </div>
  );
};
