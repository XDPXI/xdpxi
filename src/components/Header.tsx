import Head from "next/head";
import React from "react";
import Title from "~/components/Title";

interface HeaderProps {
    children: React.ReactNode;
}

export default function Header({children}: HeaderProps) {
    return (
        <>
            <Head>
                <title>{children}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="/imgs/favicon.ico" sizes="32x32" rel="icon" type="image/x-icon"/>
            </Head>

            <Title>{children}</Title>
        </>
    );
}
