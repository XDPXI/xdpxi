import React from "react";

interface TitleProps {
  children: React.ReactNode;
  id?: string;
}

export default function Title({ children, id }: TitleProps) {
  return (
    <div className="titlebar" id={id}>
      <h1>{children}</h1>
    </div>
  );
}
