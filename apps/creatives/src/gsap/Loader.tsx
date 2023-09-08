import React, { useCallback, useState } from "react";
import { gsap } from "gsap";
import useLayoutEffect from "~/hooks/useIsomorphicLayoutEffect";

export const Loader = () => {
  const [unmountLoader, setUnmountLoader] = useState(false);

  const handleUnmountLoader = useCallback(() => {
    setUnmountLoader(true);
  }, []);

  useLayoutEffect(() => {
    const tl: GSAPTimeline = gsap.timeline({
      delay: 1,
      ease: "power3.inOut",
    });

    if (!unmountLoader) {
      tl.to("body", {
        overflowY: "hidden",
      })
        .fromTo(
          "#main-text span",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2.5,
            stagger: 0.2,
            ease: "power3.inOut",
          }
        )
        .to("#loader-bg", {
          duration: 1.5,
          ease: "power3.inOut",
          opacity: 0,
        })
        .to(
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
      {!unmountLoader && (
        <div
          id="loader-bg"
          className="fixed left-0 top-0 z-50 h-screen w-screen bg-black"
        />
      )}
    </>
  );
};
