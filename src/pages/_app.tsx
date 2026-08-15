import "../styles/globals.css";
import "../styles/fontawesome.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Databuddy } from "@databuddy/sdk/react";
import { Turnstile } from "@marsidev/react-turnstile";
import ColorBars from "~/components/ColorBars";

async function verifyBackgroundTurnstileToken(token: string) {
  try {
    await fetch("/api/verify-background-turnstile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
  } catch {
    // ignorr
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />

        <meta name="description" content="Idk its just my site" />
        <meta property="og:description" content="Idk its just my site" />
        <meta name="twitter:description" content="Idk its just my site" />

        <meta name="url" content="https://www.xdpxi.dev/" />
        <meta property="og:url" content="https://www.xdpxi.dev/" />
        <meta name="twitter:url" content="https://www.xdpxi.dev/" />
        <meta property="og:site_name" content="XDPXI" />
        <meta name="twitter:site" content="@xdpxi" />
        <meta name="twitter:creator" content="@xdpxi" />

        <meta
          property="og:image"
          content="https://cdn.xdpxi.dev/xdpxi/photo/icon.png"
        />
        <meta
          name="twitter:image"
          content="https://cdn.xdpxi.dev/xdpxi/photo/icon.png"
        />

        <link
          href="/imgs/favicon.ico"
          sizes="32x32"
          rel="icon"
          type="image/x-icon"
        />

        <meta name="color-scheme" content="dark" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
                body {
                  background-color: #1e2021;
                }
              `,
          }}
        />
      </Head>
      <ColorBars />
      <Turnstile
        siteKey="0x4AAAAAAEQdaa7Lozsyh3UJ"
        options={{ size: "invisible" }}
        onSuccess={(token) => void verifyBackgroundTurnstileToken(token)}
      />
      {process.env.NEXT_PUBLIC_DATABUDDY_CLIENT_ID && (
        <Databuddy
          clientId={process.env.NEXT_PUBLIC_DATABUDDY_CLIENT_ID}
          trackAttributes={true}
          trackOutgoingLinks={true}
          trackInteractions={true}
          trackErrors={true}
        />
      )}
      <Component {...pageProps} />
    </>
  );
}
