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
      className={`mt-8 flex items-center gap-2 border-b-[1px] pb-1 text-lg font-light transition-all ease-out hover:gap-5 xl:text-2xl md:text-xl ${className}`}
      {...rest}
    >
      {name}
      <TfiArrowRight />
    </button>
  );
};
