import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../../../components/Footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>XD's Servers - Request</title>
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

      <header role="banner">
        <h1>XD's Servers - Request Form</h1>
      </header>

      <div className="content-wrapper" role="main">
        <div className="section">
          <h2 style={{ textAlign: "center" }}>Redirecting</h2>
        </div>
      </div>

      <Footer />

      <script>
        window.location.href = "https://forms.gle/gHY4eAkTyjqhmYRg6";
      </script>
    </>
  );
}
