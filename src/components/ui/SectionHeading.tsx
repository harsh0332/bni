import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtext?: string;
  align?: "center" | "left";
  className?: string;
}

/**
 * SectionHeading provides a standardized layout for section headers.
 * It features an optional red eyebrow label, a prominent h2 title, and an optional subtext description.
 * It can be left-aligned or centered.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtext,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={`mb-10 sm:mb-14 ${isCentered ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <span className="block text-brand-red font-heading font-extrabold text-xs uppercase tracking-widest mb-2 sm:mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-ink tracking-tight text-balance">
        {title}
      </h2>
      {subtext && (
        <p className={`mt-4 text-sm sm:text-base md:text-lg text-slate font-sans leading-relaxed ${isCentered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}
