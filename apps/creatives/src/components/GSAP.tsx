"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { useStore } from "~/hooks/useStore";

gsap.registerPlugin(ScrollTrigger);

export function GSAP({ children }: { children: React.ReactNode }) {
  const app = useRef<HTMLDivElement>(null);
  const { setUnmountLoader } = useStore();

  const pathname = usePathname();

  // Fn for creating a new scrollTrigger instance
  function scrollTrig(
    trigger: string,
    start: string,
    scrub: number | boolean,
    end = "bottom top"
  ) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub: scrub || false,
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
    console.log(pathname);
    if (pathname === "/") {
      let ctx = gsap.context(() => {
        // Marquee scroll animation
        const tl: GSAPTimeline = gsap.timeline({
          ease: "power3.inOut",
        });

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
        ).to("#loader-bg", {
          duration: 1.5,
          ease: "power3.inOut",
          opacity: 0,
          onComplete: () => setUnmountLoader(true),
        });

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

        gsap.fromTo(
          "#projects-title, #projects-list .project-item",
          {
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: "#projects",
              start: "top bottom",
              markers: process.env["NODE_ENV"] === "development",
            },
            // y: 0,
            opacity: 1,
            duration: 1.5,
            stagger: 0.1,
            ease: "power4.out",
          }
        );

        // scrollTrig("#projects", "top bottom", false).fromTo(
        //   "#projects-title, #projects-list div",
        //   {
        //     // y: 250,
        //     opacity: 0,
        //   },
        //   {
        //     // y: 0,
        //     opacity: 1,
        //     duration: 1.5,
        //     stagger: 0.1,
        //     ease: "power4.out",
        //   }
        // );

        const textsTarget = [
          {
            trigger: "#about-container",
            target: "#about-title, #about-description,#about-button",
            stag: 0.3,
          },
          {
            trigger: "#mission-container",
            target: "#mission-container h2, #mission-title",
            stag: 0.3,
          },
        ];

        scrollTrig("#technologies", "top bottom", 1.5, "20% top").fromTo(
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
      }, app);

      return () => ctx.revert();
    }
  }, [pathname]);

  return (
    <div id="parent" ref={app}>
      {children}
    </div>
  );
}
