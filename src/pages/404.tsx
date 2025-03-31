import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>404 - Page not found!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/favicon.ico" rel="icon" type="image/ico" />
        <link
          rel="preload"
          href="/favicon.ico"
          as="image"
          type="image/x-icon"
        />
        <link rel="preconnect" href="https://kit.fontawesome.com" />
        <link rel="dns-prefetch" href="https://kit.fontawesome.com" />
      </Head>

      <Script
        src="https://kit.fontawesome.com/7ea2a77467.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />

      <header className="element" role="banner">
        <h1>404 - Page not found!</h1>
      </header>

      <div className="content-wrapper" role="main">
        <div className="section" style={{ textAlign: "center" }}>
          <button 
            className="button" 
            onClick={() => window.location.href = '/'} 
            style={{ margin: "0 10px 10px 0" }}
          >
            <i className="fa-solid fa-house"></i> Home
          </button>

          <button 
            className="button" 
            onClick={() => window.history.back()} 
            style={{ margin: "0 0 10px 10px" }}
          >
            <i className="fa-solid fa-arrow-left"></i> Go Back
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
