import * as React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen font-grotesk text-white">
      <Navbar />
      <>{children}</>
      <Footer type="creatives" description="Let's weave your dream" />
    </div>
  );
};
