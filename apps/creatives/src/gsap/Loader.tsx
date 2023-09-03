import React, { useCallback, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import useLayoutEffect from "~/hooks/useIsomorphicLayoutEffect";

export const Loader = () => {
  const [unmountLoader, setUnmountLoader] = useState(false);

  const handleUnmountLoader = useCallback(() => {
    setUnmountLoader(true);
  }, []);

  useLayoutEffect(() => {
    const tl: GSAPTimeline = gsap.timeline({
      delay: 1.5,
      ease: "power3.inOut",
    });

    if (!unmountLoader) {
      tl.to(
        "body",
        {
          overflowY: "auto",
          onComplete: () => handleUnmountLoader(),
        },
        ">"
      );
    }
  }, [handleUnmountLoader, unmountLoader]);

  return (
    <>
      {/* {!unmountLoader && ( */}
      <div className="absolute left-0 top-0 z-50 flex h-screen w-screen flex-col">
        <div className="flex h-full [&>*]:w-full [&>*]:border [&>*]:bg-black">
          <div />
          <div />
          <div />
          <div />
        </div>

        <div className="flex h-full [&>*]:w-full [&>*]:border [&>*]:bg-black">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      {/* )} */}
    </>
  );
};
