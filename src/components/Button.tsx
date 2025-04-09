import React from "react";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

export default function Button({children, onClick}: ButtonProps) {
    return (
        <button
            className="button"
            onClick={onClick}
            style={{margin: "0 10px 10px 0"}}
        >
            {children}
        </button>
    );
}
