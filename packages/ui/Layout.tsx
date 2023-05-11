import * as React from "react";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="text-4xl min-h-screen max-w-screen-xl text-white w-[90%] mx-auto">
      {children}
    </div>
  );
};
