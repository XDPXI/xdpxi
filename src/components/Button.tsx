import React from "react";

interface ButtomProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ children, onClick }: ButtomProps) {
  return (
    <button
      className="button"
      onClick={onClick}
      style={{ margin: "0 10px 10px 0" }}
    >
      {children}
    </button>
  );
}
