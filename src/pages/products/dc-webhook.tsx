import React from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Section from "~/components/Section";
import Captcha from "~/components/Captcha";

export default function Home() {
  const [webhookURL, setWebhookURL] = React.useState("");
  const [titleContent, setTitleContent] = React.useState("");
  const [embedTitle, setEmbedTitle] = React.useState("");
  const [embedDescription, setEmbedDescription] = React.useState("");
  const [embedColor, setEmbedColor] = React.useState("e74d3c");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState<boolean | null>(null);
  const [captchaSuccess, setCaptchaSuccess] = React.useState<boolean | null>(
    null,
  );

  const sendWebhook = async () => {
    if (!webhookURL) {
      console.error("Please enter a webhook URL.");
      setSuccess(false);
      return;
    }

    setLoading(true);
    setSuccess(null);

    const data = {
      content: titleContent,
      embeds: [
        {
          title: embedTitle,
          description: embedDescription,
          color: parseInt(embedColor, 16),
        },
      ],
    };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Message sent successfully!");
        setSuccess(true);
      } else {
        console.error("Error sending message:", response.statusText);
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setState(e.target.value);
    };

  const handleSelectChange =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setState(e.target.value);
    };

  function handleVerificationSuccess(token: string, ekey: string) {
    setCaptchaSuccess(true);
  }

  return (
    <>
      <Header>Discord Webhook Sender</Header>
      <Section>
        <form className="header" id="webhookForm">
          <label htmlFor="webhookURL">Webhook URL:</label>
          <input
            type="text"
            id="webhookURL"
            placeholder="Enter Discord Webhook URL"
            required
            value={webhookURL}
            onChange={handleInputChange(setWebhookURL)}
          />

          <label htmlFor="titleContent">Title Content:</label>
          <input
            type="text"
            id="titleContent"
            placeholder="Enter Message Title"
            value={titleContent}
            onChange={handleInputChange(setTitleContent)}
          />

          <label htmlFor="embedTitle">Embed Title:</label>
          <input
            type="text"
            id="embedTitle"
            placeholder="Enter Embed Title"
            value={embedTitle}
            onChange={handleInputChange(setEmbedTitle)}
          />

          <label htmlFor="embedDescription">Embed Description:</label>
          <textarea
            id="embedDescription"
            placeholder="Enter Embed Description"
            style={{ resize: "vertical" }}
            value={embedDescription}
            onChange={handleInputChange(setEmbedDescription)}
          />

          <label htmlFor="embedColor">Embed Color:</label>
          <select
            id="embedColor"
            value={embedColor}
            onChange={handleSelectChange(setEmbedColor)}
          >
            <option value="e74d3c">🔴 Red</option>
            <option value="ff7f00">🟠 Orange</option>
            <option value="f1c40f">🟡 Yellow</option>
            <option value="2ecc70">🟢 Green</option>
            <option value="3498db">🔵 Blue</option>
            <option value="9370DB">🟣 Purple</option>
          </select>

          {!captchaSuccess && (
            <Captcha
              sitekey="3978b8c8-5892-4f32-97ee-8914de7ae058"
              onVerify={handleVerificationSuccess}
            />
          )}

          <button
            className="button"
            type="button"
            onClick={sendWebhook}
            style={{
              width: "100%",
            }}
            disabled={loading || !captchaSuccess}
          >
            {loading ? "Sending..." : "Send to Discord"}
          </button>

          {success === true && (
            <p
              style={{
                color: "#2ecc70",
                textAlign: "center",
              }}
            >
              <br />
              Message sent successfully!
            </p>
          )}
          {success === false && (
            <p
              style={{
                color: "#e64d3c",
                textAlign: "center",
              }}
            >
              <br />
              Failed to send message.
              <br />
              Please check the URL and try again.
            </p>
          )}
        </form>
      </Section>
      <Footer />
    </>
  );
}
