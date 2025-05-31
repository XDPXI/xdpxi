import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import React, {useEffect, useState} from "react";
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function Home() {
    const [redirectMessage, setRedirectMessage] = useState("Awaiting for hCaptcha");
    const [captchaSuccess, setCaptchaSuccess] = React.useState<boolean>(false);

    function handleVerificationSuccess(token: string, ekey: string) {
        const params = new URLSearchParams(window.location.search);

        setRedirectMessage("Redirecting...");
        setTimeout(() => {
            setCaptchaSuccess(true);

            if (params.get('type') === 'mc') {
                window.location.replace("https://app.youform.com/forms/nxkv8rfn");
            } else {
                setRedirectMessage("Failed to Redirect");
            }
        }, 1000);
    }

    return (
        <>
            <Header>XD's Servers</Header>

            <Content>
                <div className="section" style={{textAlign: "center"}}>
                    {captchaSuccess ? (
                        <h2>{redirectMessage}</h2>
                    ) : null}

                    {!captchaSuccess ? (
                        <div style={{display: "flex", justifyContent: "center", marginTop: "5px", marginBottom: "15px"}}>
                            <HCaptcha
                                sitekey="9558f5e2-c30c-41a8-9f18-2ad8cc0e7d92"
                                theme="dark"
                                onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
                            />
                        </div>
                    ) : null}
                </div>
            </Content>

            <Footer/>
        </>
    );
}
