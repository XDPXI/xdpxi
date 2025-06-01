import HCaptcha from "@hcaptcha/react-hcaptcha";

interface CaptchaProps {
    sitekey: string;
    onVerify: (token: string, ekey: string) => void;
}

export default function Captcha({sitekey, onVerify}: CaptchaProps) {
    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "5px", marginBottom: "15px"}}>
            <HCaptcha
                sitekey={sitekey}
                theme="dark"
                onVerify={(token, ekey) => onVerify(token, ekey)}
            />
        </div>
    )
}