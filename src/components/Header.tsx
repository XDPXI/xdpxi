import Head from "next/head";
import Script from "next/script";
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
                <link href="https://raw.githubusercontent.com/XDPXI/xdpxi/main/public/favicon.ico" sizes="32x32"
                      rel="icon" type="image/x-icon"/>
                <link rel="preconnect" href="https://kit.fontawesome.com"/>
                <link rel="dns-prefetch" href="https://kit.fontawesome.com"/>

            </Head>

            <Script
                src="https://kit.fontawesome.com/7ea2a77467.js"
                crossOrigin="anonymous"
                strategy="lazyOnload"
            />

            <script
                src="/oneko/script.js"
                crossOrigin="anonymous"
                async
            />

            <Title>{children}</Title>
        </>
    );
}
