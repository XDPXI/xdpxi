import Head from 'next/head';
import Script from 'next/script';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../components/Footer'), {ssr: false});

export default function Home() {
    return (
        <>
            <Head>
                <title>XDPXI</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="/favicon.ico" rel="icon" type="image/ico"/>
                <link rel="preconnect" href="https://kit.fontawesome.com"/>
                <link rel="dns-prefetch" href="https://kit.fontawesome.com"/>
            </Head>

            <Script
                src="https://kit.fontawesome.com/7ea2a77467.js"
                crossOrigin="anonymous"
                strategy="lazyOnload"
            />

            <header className="element" role="banner">
                <h1>X D P X I</h1>
            </header>

            <main className="content-wrapper" role="main">
                <section aria-label="Main Content" className="section">
                    {/* Main content goes here */}
                </section>
            </main>

            <Footer/>
        </>
    );
}