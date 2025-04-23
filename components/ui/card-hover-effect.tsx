import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string | StaticImport;
    alt: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block lg:p-5 md:p-3 p-1.5 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[var(--card-hover-color)] block rounded-4xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImage src={item.image} alt={item.alt} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "lg:rounded-3xl md:rounded-2xl rounded-xl h-full w-full p-2 overflow-hidden bg-[var(--card-color)] border-4 border-transparent group-hover:border-[var(--border-hover)] relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="lg:p-1 md:p-0.5 ">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-[var(--primary-font-color)] lg:text-[1.5rem] font-semibold tracking-wide lg:mt-4 md:mt-2 mt-1", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "lg:mt-2 md:mt-0.5 mt-[1px] text-[var(--primary-font-color)] tracking-wide leading-relaxed lg:text-[1.5rem] md:text-[.7rem] text-[.5rem]",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardImage = ({
    className,
    src,
    alt,
}: {
    className?: string;
    src: string | StaticImport;
    alt: string;
}) => {
    return (
        <Image
        className={cn( "w-full lg:rounded-2xl md:rounded-xl rounded-lg" , className)}
        src={src}
        alt={alt}
         />
    )
}