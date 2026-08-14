import { Turnstile } from "@marsidev/react-turnstile";

interface CaptchaProps {
  onVerify: (token: string) => void;
}

export default function Captcha({ onVerify }: CaptchaProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5px",
        marginBottom: "15px",
      }}
    >
      <Turnstile
        siteKey="0x4AAAAAAEQAK7KWf9n_-aa_"
        options={{ theme: "dark" }}
        onSuccess={(token) => onVerify(token)}
      />
    </div>
  );
}
