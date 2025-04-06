import React from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Section from "~/components/Section";

export default function Home() {
  const [webhookURL, setWebhookURL] = React.useState("");
  const [titleContent, setTitleContent] = React.useState("");
  const [embedTitle, setEmbedTitle] = React.useState("");
  const [embedDescription, setEmbedDescription] = React.useState("");
  const [embedColor, setEmbedColor] = React.useState("e74d3c");

  const sendWebhook = () => {
    if (!webhookURL) {
      console.error("Please enter a webhook URL.");
      return;
    }

    const data = {
      content: titleContent || undefined,
      embeds: [
        {
          title: embedTitle || undefined,
          description: embedDescription || undefined,
          color: parseInt(embedColor, 16),
        },
      ],
    };

    fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Message sent successfully!");
        } else {
          console.error("Error sending message:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <>
      <Header>Discord Webhook Sender</Header>
      <Content>
        <Section>
          <form id="webhookForm">
            <label htmlFor="webhookURL">Webhook URL:</label>
            <input
              type="text"
              id="webhookURL"
              placeholder="Enter Discord Webhook URL"
              required
              value={webhookURL}
              onChange={(e) => setWebhookURL(webhookURL.valueOf)}
            />

            <label htmlFor="titleContent">Title Content:</label>
            <input
              type="text"
              id="titleContent"
              placeholder="Enter Message Title"
              value={titleContent}
              onChange={(e) => setTitleContent(titleContent.valueOf)}
            />

            <label htmlFor="embedTitle">Embed Title:</label>
            <input
              type="text"
              id="embedTitle"
              placeholder="Enter Embed Title"
              value={embedTitle}
              onChange={(e) => setEmbedTitle(embedTitle.valueOf)}
            />

            <label htmlFor="embedDescription">Embed Description:</label>
            <textarea
              id="embedDescription"
              placeholder="Enter Embed Description"
              value={embedDescription}
              onChange={(e) => setEmbedDescription(embedDescription.valueOf)}
            />

            <label htmlFor="embedColor">Embed Color:</label>
            <select
              id="embedColor"
              value={embedColor}
              onChange={(e) => setEmbedColor(embedColor.valueOf)}
            >
              <option value="e74d3c">🔴 Red</option>
              <option value="ff7f00">🟠 Orange</option>
              <option value="f1c40f">🟡 Yellow</option>
              <option value="2ecc70">🟢 Green</option>
              <option value="3498db">🔵 Blue</option>
              <option value="9370DB">🟣 Purple</option>
            </select>

            <button
              className="button"
              type="button"
              onClick={sendWebhook}
              style={{
                width: "100%",
              }}
            >
              Send to Discord
            </button>
          </form>
        </Section>
      </Content>
      <Footer />
    </>
  );
}
