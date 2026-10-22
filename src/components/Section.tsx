import React from "react";

interface SectionProps {
  children: React.ReactNode;
  variant?: string;
  id?: string;
}

export default function Section({ children, variant, id }: SectionProps) {
  return (
    <div className={variant ? `section ${variant}` : "section"} id={id}>
      {children}
    </div>
  );
}
