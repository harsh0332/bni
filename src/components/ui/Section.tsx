import React from "react";

interface SectionProps {
  children: React.ReactNode;
  bg?: "white" | "cloud" | "cream" | "dark";
  className?: string;
  id?: string;
  as?: React.ElementType;
}

/**
 * Section is a full-width container wrapper that enforces unified vertical spacing (padding)
 * and holds standard background-color theme options (white, cloud, cream, dark).
 * Supports standard section elements and id anchors for navigation.
 */
export function Section({
  children,
  bg = "white",
  className = "",
  id,
  as: Component = "section",
}: SectionProps) {
  const bgClasses = {
    white: "bg-white text-slate",
    cloud: "bg-cloud text-slate",
    cream: "bg-cream text-slate",
    dark: "bg-ink text-white",
  };

  return (
    <Component
      id={id}
      className={`py-12 sm:py-20 ${bgClasses[bg]} ${className}`}
    >
      {children}
    </Component>
  );
}
