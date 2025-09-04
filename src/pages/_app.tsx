import "../styles/globals.css";
import "../styles/fontawesome.css";
import type {AppProps} from "next/app";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="color-scheme" content="dark"/>
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                body {
                  background-color: #121212;
                }
              `,
                    }}
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}