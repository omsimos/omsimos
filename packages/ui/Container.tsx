import * as React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Container = ({ className, children }: Props) => {
  return (
    <div className={`max-w-screen-xl w-[90%] mx-auto ${className}`}>
      {children}
    </div>
  );
};
