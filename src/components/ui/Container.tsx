import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Container is a responsive layout wrapper that centers content and limits width to ~1200px.
 * It provides horizontal padding at all breakpoints.
 */
export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full ${className}`}>
      {children}
    </Component>
  );
}
