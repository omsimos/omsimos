import * as React from "react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen font-grotesk text-white">
      <Navbar />
      <>{children}</>
    </div>
  );
};
