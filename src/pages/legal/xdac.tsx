import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Title from "~/components/Title";
import Content from "~/components/Content";
import Section from "~/components/Section";

export default function Home() {
    return (
        <>
            <Header>XD's AntiCheat License & Policy</Header>

            <Content>
                <Section>
                    <p>
                        Last Updated: 2025-09-23<br/>
                        Version: 1.0.0<br/>
                        Download: <a href="https://cdn.xdpxi.dev/xdpxi/license/xdac/1.0.0/LICENSE">LICENSE</a> or <a
                        href="https://cdn.xdpxi.dev/xdpxi/license/xdac/1.0.0/LICENSE.txt">LICENSE.txt</a><br/>
                        Copyright: © 2025 XD's AntiCheat. All rights reserved.
                    </p>
                </Section>

                <Section>
                    <p>
                        This document governs your use of {" "}
                        <span className="highlight-text">XD's AntiCheat</span>{" "} (the "Software").
                        By using the Software, you agree to all terms outlined here. This is a binding legal agreement
                        between you and {" "}
                        <span className="highlight-text">XDPXI</span>. Use of the Software indicates your full
                        acceptance of these terms and conditions.
                    </p>
                </Section>

                <Section>
                    <h2>1. Definitions</h2>
                    <p>
                        <span className="highlight-text">Software:</span>{" "} The XD's AntiCheat software created and
                        maintained by XDPXI.<br/>
                        <span className="highlight-text">You:</span>{" "} Any user or entity using the Software.
                    </p>
                </Section>

                <Section>
                    <h2>2. Permitted Use</h2>
                    <p>
                        You may use the Software only for its intended purpose:{" "}
                        <span className="highlight-text">preventing cheating and unauthorized modifications</span> in
                        your own applications or games.
                        Use of the Software for unrelated or malicious purposes is strictly prohibited.
                    </p>
                </Section>

                <Section>
                    <h2>3. Restrictions</h2>
                    <ul>
                        <li>You may not reverse engineer, decompile, or tamper with the Software.</li>
                        <li>You may not distribute, rent, lease, or sublicense the Software without written
                            permission.
                        </li>
                        <li>You may not use the Software in illegal, malicious, or unethical ways.</li>
                    </ul>
                </Section>

                <Section>
                    <h2>4. Data Collection</h2>
                    <p>
                        See the <span className="highlight-text">Privacy Policy</span> below for full details on what
                        data is collected and why.
                        By using this Software, you agree to the collection and processing of this data.
                    </p>
                </Section>

                <Section>
                    <h2>5. Disclaimer of Warranty</h2>
                    <p>
                        The Software is provided <span className="highlight-text">“as is”</span> without warranties of
                        any kind.
                        XDPXI is not responsible for any damages, data loss, or issues that may arise from the use or
                        misuse of this Software.
                        Use it at your own risk.
                    </p>
                </Section>

                <Section>
                    <h2>6. Termination</h2>
                    <p>
                        Violation of these terms may result in{" "}
                        <span className="highlight-text">immediate termination</span> of your access or license. You
                        must cease all use and delete any copies.
                    </p>
                </Section>

                <Section>
                    <h2>7. Governing Law</h2>
                    <p>
                        This license is governed by the laws of{" "}
                        <span className="highlight-text">New South Wales, Australia</span>. Any disputes will be handled
                        in accordance with these laws,
                        and the Author reserves the right to enforce rights globally.
                    </p>
                </Section>

                <Title>Privacy Policy</Title>

                <Section>
                    <p>
                        XD's AntiCheat collects only minimal data required to function effectively and legally.
                        We do not sell or share this data with third parties.
                    </p>
                </Section>

                <Section>
                    <h2>1. What We Collect</h2>
                    <ul>
                        <li><span className="highlight-text">Geolocation data</span> (e.g., your country or region)</li>
                        <li><span className="highlight-text">Operating system details</span></li>
                        <li><span className="highlight-text">Logs, errors, and stack traces</span></li>
                        <li><span className="highlight-text">IP address</span></li>
                    </ul>
                </Section>

                <Section>
                    <h2>2. Why We Collect It</h2>
                    <ul>
                        <li><span className="highlight-text">Compliance</span> with geo-restrictions and local laws</li>
                        <li><span className="highlight-text">Improvement</span> of performance, stability, and
                            reliability
                        </li>
                        <li><span className="highlight-text">Debugging</span> issues and fixing crashes faster</li>
                        <li><span className="highlight-text">Enforcement</span> of bans, cheating flags, or abuse
                            prevention using IP addresses
                        </li>
                    </ul>
                </Section>

                <Section>
                    <h2>3. Your Rights</h2>
                    <p>
                        You may contact us at <span className="highlight-text">contact@xdpxi.dev</span> to request
                        information on your data or request deletion,
                        subject to verification and legal compliance.
                    </p>
                </Section>

                <Section>
                    <h2>4. Security</h2>
                    <p>
                        All data is stored securely and used only for the purposes outlined. Access is restricted and
                        monitored.
                    </p>
                </Section>

                <Section>
                    <h2>5. Policy Updates</h2>
                    <p>
                        This policy may be updated over time. Continued use of the Software implies acceptance of the
                        most recent version.
                    </p>
                </Section>

                <Section>
                    <h2>6. Contact</h2>
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
