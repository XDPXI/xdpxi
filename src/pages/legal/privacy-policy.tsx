import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Section from "~/components/Section";

export default function PrivacyPolicy() {
  return (
    <>
      <Header>XDPXI - Privacy Policy</Header>

      <Content>
        <Section>
          <p>
            Last Updated: 2026-08-15
            <br />
            Copyright: © 2026 XDPXI. All rights reserved.
          </p>
        </Section>

        <Section>
          <p>
            This Privacy Policy covers xdpxi.dev and its subdomains (the
            "Site"). We collect the absolute minimum data necessary to
            operate the Site and keep it secure. We do not sell, rent, or
            trade your data with third parties.
          </p>
        </Section>

        <Section>
          <h2>1. What We Collect</h2>
          <ul>
            <li>
              <span className="highlight-text">Analytics data</span> via
              Databuddy, such as pages visited, outgoing link clicks, page
              interactions, and errors
            </li>
            <li>
              <span className="highlight-text">
                Anti-bot verification data
              </span>{" "}
              via Cloudflare Turnstile, used to confirm you are a legitimate
              visitor
            </li>
          </ul>
          <p>
            We do not use tracking cookies, and we do not collect any
            personal information such as your name or email address unless
            you voluntarily provide it to us (e.g. by emailing us).
          </p>
        </Section>

        <Section>
          <h2>2. Cloudflare Turnstile</h2>
          <p>
            The Site uses{" "}
            <a
              href="https://www.cloudflare.com/products/turnstile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare Turnstile
            </a>{" "}
            to protect the Site from bots and abuse without showing you
            annoying CAPTCHAs. Turnstile may collect certain information
            (such as your IP address and browser characteristics) to verify
            you are human. This data is processed by Cloudflare in
            accordance with the{" "}
            <a
              href="https://www.cloudflare.com/en-gb/turnstile-privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare Turnstile Privacy Policy
            </a>
            .
          </p>
        </Section>

        <Section>
          <h2>3. Databuddy Analytics</h2>
          <p>
            The Site uses{" "}
            <a
              href="https://databuddy.cc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Databuddy
            </a>{" "}
            for privacy-friendly, cookie-less analytics. This helps us
            understand how visitors use the Site so we can improve it. No
            personally identifiable information is collected for analytics
            purposes.
          </p>
        </Section>

        <Section>
          <h2>4. Data Retention</h2>
          <p>
            Data is retained only as long as necessary to fulfill the
            purposes outlined above, in line with the retention policies of
            our providers, Cloudflare and Databuddy.
          </p>
        </Section>

        <Section>
          <h2>5. Your Rights</h2>
          <p>
            You may contact us at{" "}
            <span className="highlight-text">contact@xdpxi.dev</span> with
            any questions or requests regarding your data.
          </p>
        </Section>

        <Section>
          <h2>6. Policy Updates</h2>
          <p>
            This policy may be updated from time to time. Continued use of
            the Site implies acceptance of the most recent version.
          </p>
        </Section>

        <Section>
          <h2>7. Contact</h2>
          <p>
            For privacy-related concerns, contact{" "}
            <span className="highlight-text">contact@xdpxi.dev</span>.
          </p>
        </Section>
      </Content>

      <Footer />
    </>
  );
}
