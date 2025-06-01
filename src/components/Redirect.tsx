import React, {useState} from "react";
import Content from "~/components/Content";
import Captcha from "~/components/Captcha";

interface RedirectProps {
    sitekey: string;
    redirectSite: string;
}

export default function Redirect({sitekey, redirectSite}: RedirectProps) {
    const [redirectMessage, setRedirectMessage] = useState("Awaiting for hCaptcha");
    const [captchaSuccess, setCaptchaSuccess] = React.useState<boolean>(false);

    function handleVerificationSuccess(token: string, ekey: string) {
        setRedirectMessage("Redirecting...");
        setTimeout(() => {
            setCaptchaSuccess(true);
            window.location.replace(redirectSite);
        }, 1000);
    }

    return (
        <Content>
            <div className="section" style={{textAlign: "center"}}>
                {captchaSuccess ? (
                    <h2>{redirectMessage}</h2>
                ) : null}

                {!captchaSuccess ? (
                    <Captcha sitekey={sitekey} onVerify={handleVerificationSuccess}/>
                ) : null}
            </div>
        </Content>
    )
}