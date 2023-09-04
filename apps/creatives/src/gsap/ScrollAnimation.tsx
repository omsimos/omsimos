import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useLayoutEffect from "~/hooks/useIsomorphicLayoutEffect";

export const ScrollAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  gsap.registerPlugin(ScrollTrigger);
  // Fn for creating a new scrollTrigger instance
  function scrollTrig(trigger: string, start: string, scrub: number | boolean) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start,
        scrub,
        markers: process.env["NODE_ENV"] === "development",
      },
    });

    return tl;
  }

  // Responsible for onScroll (intersection) animation
  function scrollTrigText(
    trigger: string,
    target: string,
    stag?: number,
    start?: string
  ) {
    gsap.fromTo(
      target,
      {
        y: 250,
        opacity: 0,
      },
      {
        scrollTrigger: {
          markers: process.env["NODE_ENV"] === "development",
          start: start || "top bottom",
          trigger: trigger as string,
          toggleActions: "restart none none reset",
        },
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: stag,
        ease: "power4.out",
      }
    );
  }

  useLayoutEffect(() => {
    // Responsible for onScroll (intersection) animation
    gsap.to("#omsimos-creatives-title", {
      scrollTrigger: {
        markers: process.env["NODE_ENV"] === "development",
        trigger: "#omsimos-creatives-title",
        toggleActions: "restart none none reset",
        start: "top bottom",
        scrub: 1.5,
      },
      x: 80,
    });

    const textsTarget = [
      {
        trigger: "#about-container",
        target: "#about-title, #about-description,#about-button",
        stag: 0.3,
      },
      {
        trigger: "#mission-container",
        target: "#mission-container h2",
        stag: 0.3,
      },
    ];

    scrollTrig("#technologies", "top bottom", 1.5).fromTo(
      "#technology-title span, #technology-items div",
      {
        y: 250,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "power4.out",
      }
    );

    textsTarget.forEach(({ trigger, target, stag }) => {
      scrollTrigText(trigger, target, stag);
    });
    // textsTarget.forEach(({ trigger, target, stag, start }) => {
    //   scrollTrigText(trigger, target || trigger, stag, start);
    // });
  }, []);

  return <div>{children}</div>;
};
