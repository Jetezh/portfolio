"use client";
import {
//   useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="z-0 w-full bg-[var(--bg-color)] font-sans md:px-10 text-[var(--primary-font-color)]"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-3/4 mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-5 lg:pt-20 md:pt-15 lg:gap-10 md:gap-5 gap-2"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="lg:h-8 lg:w-8 md:h-7 md:w-7 h-4 w-4 absolute lg:left-5.5 md:left-5.5 left-6.5 rounded-full bg-[var(--bg-navbar)] flex items-center justify-center">
                <div className="lg:h-4 lg:w-4 md:h-2 md:w-2 h-2 w-2 rounded-full bg-[var(--bg-dot)] border border-[var(--bg-border-dot)] lg:p-2 md:p-2 p-0.5" />
              </div>
              <h3 className="hidden md:block lg:text-[4rem] md:text-[2.5rem] text-[1.5rem] md:pl-15 lg:pl-20 font-bold text-[var(--sticky-font-color)] ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block lg:text-[4rem] md:text-[2.5rem] text-[1.5rem] mb-4 text-left font-bold text-[var(--primary-font-color)]">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[30px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 lg:w-[12px] md:w-[8px] w-[5px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
