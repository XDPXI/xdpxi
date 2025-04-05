import React from "react";

interface ContentProps {
  children: React.ReactNode;
}

export default function Section({ children }: ContentProps) {
  return (
    <>
      <div className="content-wrapper" role="main">
        {children}
      </div>
    </>
  );
}
