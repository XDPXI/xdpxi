import "../styles/globals.css";
import type {AppProps} from "next/app";
import Head from "next/head";
import {StatsigProvider, useClientAsyncInit} from '@statsig/react-bindings';
import {StatsigAutoCapturePlugin} from '@statsig/web-analytics';
import {StatsigSessionReplayPlugin} from '@statsig/session-replay';

export default function App({Component, pageProps}: AppProps) {
    const {client} = useClientAsyncInit(
        process.env.STATSIG_SDK_KEY ?? '',
        {userID: 'a-user'},
        {plugins: [new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin()]},
    );

    return (
        <StatsigProvider client={client} loadingComponent={<div>Loading...</div>}>
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
        </StatsigProvider>
    );
}
