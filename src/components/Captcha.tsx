import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

interface CaptchaProps {
  onVerify: (token: string) => void;
}

export default function Captcha({ onVerify }: CaptchaProps) {
  const turnstileRef = useRef<TurnstileInstance>(undefined);
  const [error, setError] = useState(false);

  async function verifyTurnstileToken(token: string): Promise<boolean> {
    try {
      const res = await fetch("/api/verify-turnstile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      return res.ok && data.success === true;
    } catch {
      return false;
    }
  }

  async function handleSuccess(token: string) {
    setError(false);

    const verified = await verifyTurnstileToken(token);
    if (!verified) {
      setError(true);
      turnstileRef.current?.reset();
      return;
    }

    onVerify(token);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5px",
        marginBottom: "15px",
      }}
    >
      <Turnstile
        ref={turnstileRef}
        siteKey="0x4AAAAAAEQAK7KWf9n_-aa_"
        options={{ theme: "dark" }}
        onSuccess={(token) => void handleSuccess(token)}
      />
      {error ? (
        <p style={{ color: "#f87171", marginTop: "8px" }}>
          Verification failed, please try again
        </p>
      ) : null}
    </div>
  );
}
