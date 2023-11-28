"use client";

import gsap from "gsap";
import { useLayoutEffect } from "react";
import { useStore } from "~/hooks/useStore";

export const Loader = () => {
  const { setUnmountLoader } = useStore();

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.to("#loader-bg", {
      duration: 1.5,
      ease: "power3.inOut",
      opacity: 0,
      delay: 2.5,
    }).to("body", {
      overflowY: "auto",
      onComplete: () => setUnmountLoader(true),
    });
  });

  return (
    <div
      id="loader-bg"
      className="fixed left-0 top-0 z-50 h-screen w-screen bg-black"
    />
  );
};
