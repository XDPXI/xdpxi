import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Section from "~/components/Section";

export default function XDACPrivacyPolicy() {
  return (
    <>
      <Header>XD's AntiCheat - Privacy Policy</Header>

      <Content>
        <Section>
          <p>
            Last Updated: 2026-03-03
            <br />
            Version: 1.1.0
            <br />
            Download:{" "}
            <a href="http://cdn.xdpxi.net:8716/xdpxi/license/xdac/1.1.0/LICENSE">
              LICENSE
            </a>{" "}
            or{" "}
            <a href="http://cdn.xdpxi.net:8716/xdpxi/license/xdac/1.1.0/LICENSE.txt">
              LICENSE.txt
            </a>
            <br />
            Copyright: © 2025 XD's AntiCheat. All rights reserved.
          </p>
        </Section>

        <Section>
          <p>
            XD's AntiCheat collects only minimal data required for
            functionality, stability, and compliance. We do not sell, rent, or
            trade this data with third parties.
          </p>
        </Section>

        <Section>
          <h2>1. What We Collect</h2>
          <ul>
            <li>
              <span className="highlight-text">Geolocation data</span> (e.g.,
              your country or region)
            </li>
            <li>
              <span className="highlight-text">Operating system details</span>
            </li>
            <li>
              <span className="highlight-text">
                Logs, errors, and stack traces
              </span>
            </li>
            <li>
              <span className="highlight-text">IP address</span>
            </li>
          </ul>
        </Section>

        <Section>
          <h2>2. Why We Collect It</h2>
          <ul>
            <li>
              <span className="highlight-text">Compliance</span> with
              geo-restrictions and local laws
            </li>
            <li>
              <span className="highlight-text">Improvement</span> of
              performance, stability, and reliability
            </li>
            <li>
              <span className="highlight-text">Debugging</span> issues and
              fixing crashes faster
            </li>
            <li>
              <span className="highlight-text">Enforcement</span> of bans,
              cheating flags, or abuse prevention
            </li>
          </ul>
        </Section>

        <Section>
          <h2>3. Data Retention</h2>
          <p>
            Data is retained only as long as necessary to fulfill the purposes
            outlined. Some logs may be stored for security, compliance, or
            debugging purposes for up to{" "}
            <span className="highlight-text">12 months</span>, unless legally
            required otherwise.
          </p>
        </Section>

        <Section>
          <h2>4. Your Rights</h2>
          <p>
            You may contact us at{" "}
            <span className="highlight-text">contact@xdpxi.dev</span> to request
            access to or deletion of your data, subject to verification and
            applicable legal obligations.
          </p>
        </Section>

        <Section>
          <h2>5. Security</h2>
          <p>
            Data is stored securely with restricted access and monitoring. While
            we take reasonable measures, no system is 100% secure.
          </p>
        </Section>

        <Section>
          <h2>6. Cross-Border Data</h2>
          <p>
            Your data may be transferred and processed in countries outside your
            region, including servers operated in Australia or other
            jurisdictions. By using the Software, you consent to such transfers.
          </p>
        </Section>

        <Section>
          <h2>7. Policy Updates</h2>
          <p>
            This policy may be updated from time to time. Continued use of the
            Software implies acceptance of the most recent version.
          </p>
        </Section>

        <Section>
          <h2>8. Contact</h2>
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
