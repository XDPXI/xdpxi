import "../styles/globals.css";
import type {AppProps} from "next/app";
import Head from "next/head";
import {StatsigProvider, useClientAsyncInit} from '@statsig/react-bindings';
import {StatsigAutoCapturePlugin} from '@statsig/web-analytics';
import {StatsigSessionReplayPlugin} from '@statsig/session-replay';
import {useMemo, useState} from 'react';

const generateUserID = (): string => {
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    return 'user-' +
        Array.from(array)
            .map((byte) => ('0' + byte.toString(36)).slice(-2))
            .join('')
            .substring(0, 13);
};

const useSession = () => {
    const [userID, setUserID] = useState<string>(() => {
        const storedUserID = localStorage.getItem('userID');
        if (storedUserID) {
            return storedUserID;
        } else {
            const newID = generateUserID();
            localStorage.setItem('userID', newID);
            return newID;
        }
    });

    return useMemo(() => ({userID}), [userID]);
};

export default function App({Component, pageProps}: AppProps) {
    const {userID} = useSession();

    const {client} = useClientAsyncInit(
        process.env.STATSIG_SDK!,
        {userID: userID},
        {
            plugins: [new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin()]
        },
    );

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
            <StatsigProvider client={client}>
                <Component {...pageProps} />
            </StatsigProvider>
        </>
    );
}