import React from "react";

interface TitleProps {
    children: React.ReactNode;
}

export default function Title({children}: TitleProps) {
    return (
        <>
            <header role="banner">
                <h1>{children}</h1>
            </header>
        </>
    );
}
