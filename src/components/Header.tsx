import Head from "next/head";
import React from "react";
import Title from "~/components/Title";

interface HeaderProps {
    children: string;
}

export default function Header({children}: HeaderProps) {
    return (
        <>
            <Head>
                <title>{children}</title>
                <meta name="pagename" content={children}/>
                <meta property="og:title" content={children}/>
                <meta name="twitter:title" content={children}/>
            </Head>

            <Title>{children}</Title>
        </>
    );
}
