import * as React from "react";
import { TfiArrowRight } from "react-icons/tfi";

type Props = {
  className?: string;
  name: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ className, name, ...rest }: Props) => {
  return (
    <button
      type="button"
      className={`flex items-center gap-2 border-b-[1px] pb-1 text-lg font-light transition-opacity ease-out group/button xl:text-2xl md:text-xl hover:opacity-80 ${className}`}
      {...rest}
    >
      {name}
      <TfiArrowRight className="group-hover/button:translate-x-3 duration-200 transition-transform ease-out" />
    </button>
  );
};
