import React from "react";

interface ContentProps {
    children: React.ReactNode;
}

export default function Content({children}: ContentProps) {
    return (
        <>
            <div className="content-wrapper header" role="main">
                {children}
            </div>
        </>
    );
}
