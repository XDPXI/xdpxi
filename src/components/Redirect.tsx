import React, { useEffect, useState } from "react";
import Content from "~/components/Content";
import Captcha from "~/components/Captcha";

interface RedirectProps {
  redirectSite: string;
}

export default function Redirect({ redirectSite }: RedirectProps) {
  const [redirectMessage, setRedirectMessage] = useState(
    "Awaiting for Turnstile",
  );
  const [captchaSuccess, setCaptchaSuccess] = React.useState<boolean>(false);

  function handleVerificationSuccess(token: string) {
    setRedirectMessage("Redirecting...");
    setCaptchaSuccess(true);
    window.location.replace(redirectSite);
  }

  return (
    <Content>
      <div className="section" style={{ textAlign: "center" }}>
        {captchaSuccess ? <h2>{redirectMessage}</h2> : null}

        {!captchaSuccess ? (
          <Captcha onVerify={handleVerificationSuccess} />
        ) : null}
      </div>
    </Content>
  );
}
