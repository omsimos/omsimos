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
      tl.fromTo(
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
        .to("#blocks-1", {
          height: 0,
          duration: 1.5,
          ease: "power3.inOut",
        })
        .to(
          "#blocks-2",
          {
            y: "100%",
            duration: 1.5,
            ease: "power3.inOut",
          },
          "<"
        )
        .to(
          "#blocks-1-trail div",
          {
            height: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.inOut",
            delay: 0.4,
          },
          "<"
        )
        .to(
          "#blocks-2-trail div",
          {
            y: "100%",
            stagger: -0.1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "<"
        )

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
        <div className="absolute left-0 top-0 z-40 flex h-screen w-screen flex-col">
          <div className="relative h-full">
            <div
              id="blocks-1-trail"
              className="absolute left-0 right-0 top-0 flex h-full [&>*]:w-full [&>*]:bg-[#00FF66]"
            >
              <div />
              <div />
              <div />
              <div />
            </div>

            <div
              id="blocks-1"
              className="absolute left-0 right-0 top-0 flex h-full w-full bg-black"
            />
          </div>

          <div className="relative h-full">
            <div
              id="blocks-2-trail"
              className="absolute left-0 right-0 top-0 flex h-full [&>*]:w-full [&>*]:bg-[#00FF66]"
            >
              <div />
              <div />
              <div />
              <div />
            </div>

            <div
              id="blocks-2"
              className="absolute left-0 right-0 top-0 flex h-full w-full bg-black"
            />
          </div>
        </div>
      )}
    </>
  );
};
