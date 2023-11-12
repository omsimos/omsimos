import Link from "next/link";
import * as React from "react";
import { TfiArrowRight } from "react-icons/tfi";

type Props = {
  className?: string;
  name: string;
  route?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ className, name, route, ...rest }: Props) => {
  return route ? (
    <Link
      href={route}
      className={`group/button inline-flex items-center gap-2 border-b-[1px] pb-1 text-lg font-light transition-opacity ease-out hover:opacity-80 md:text-xl xl:text-2xl ${className}`}
    >
      <p>{name}</p>
      <TfiArrowRight className="transition-transform duration-200 ease-out group-hover/button:translate-x-3" />
    </Link>
  ) : (
    <button
      type="button"
      className={`group/button flex items-center gap-2 border-b-[1px] pb-1 text-lg font-light transition-opacity ease-out hover:opacity-80 md:text-xl xl:text-2xl ${className}`}
      {...rest}
    >
      {name}
      <TfiArrowRight className="transition-transform duration-200 ease-out group-hover/button:translate-x-3" />
    </button>
  );
};
