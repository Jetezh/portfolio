"use client";

import React, { useEffect, useState } from "react";
import {
  useSwitch,
  VisuallyHidden,
  SwitchProps,
} from "@heroui/react";
import { useLocalStorage } from "usehooks-ts";

// ICONS
export const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 24 24" {...props}>
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

// THEME SWITCH
type ThemeType = "light" | "dark" | "system";

export const ThemeSwitch: React.FC<SwitchProps> = (props) => {
  const [theme, setTheme] = useLocalStorage<ThemeType>("theme", "system");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (!html) return;

    const applyTheme = (t: ThemeType) => {
      let resolvedTheme = t;

      if (t === "system") {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        resolvedTheme = prefersDark ? "dark" : "light";
      }

      setIsDark(resolvedTheme === "dark");

      html.classList.remove("light", "dark");
      html.classList.add(resolvedTheme);
    };

    applyTheme(theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const systemChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        const systemTheme = e.matches ? "dark" : "light";
        setIsDark(systemTheme === "dark");

        html.classList.remove("light", "dark");
        html.classList.add(systemTheme);
      }
    };

    mediaQuery.addEventListener("change", systemChange);
    return () => mediaQuery.removeEventListener("change", systemChange);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
  };

  const {
    Component,
    slots,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    ...props,
    defaultSelected: isDark,
    isSelected: isDark,
    onChange: toggleTheme,
  });

  return (
    <div className="flex flex-col gap-2 items-start">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "lg:w-20 lg:h-20 md:w-15 md:h-15 w-full h-full",
              "flex items-center justify-center",
              "lg:rounded-2xl md:rounded-xl rounded-md",
              "transition-colors duration-300",
              isDark
                ? "lg:bg-white/20 lg:hover:bg-yellow-100 bg-none hover:bg-none"
                : "lg:bg-gray-100 lg:hover:bg-blue-100 bg-none hover:bg-none",
            ],
          })}
        >
          {isDark ? (
            <SunIcon className="text-yellow-400 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8" />
          ) : (
            <MoonIcon className="text-blue-500 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8" />
          )}
        </div>
      </Component>
    </div>
  );
};
