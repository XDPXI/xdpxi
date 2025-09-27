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
                        Last Updated: 2025-09-27<br/>
                        Version: 1.1.0<br/>
                        Download: <a href="https://cdn.xdpxi.dev/xdpxi/license/xdac/1.1.0/LICENSE">LICENSE</a> or <a
                        href="https://cdn.xdpxi.dev/xdpxi/license/xdac/1.1.0/LICENSE.txt">LICENSE.txt</a><br/>
                        Copyright: © 2025 XD's AntiCheat.
                        All rights reserved.
                    </p>
                </Section>

                <Section>
                    <p>
                        This document governs your use of {" "}
                        <span className="highlight-text">XD's AntiCheat</span> (the "Software").
                        By using the Software, you agree to all terms outlined here.
                        This is a binding legal agreement between you and {" "}
                        <span className="highlight-text">XDPXI</span>.
                        Use of the Software indicates your full acceptance of these terms and conditions.
                    </p>
                </Section>

                <Section>
                    <h2>1. Definitions</h2>
                    <p>
                        <span className="highlight-text">Software:</span>{" "} The XD's AntiCheat software created and
                        maintained by XDPXI.<br/>
                        <span className="highlight-text">You:</span>{" "} Any user, developer, or entity using the Software.<br/>
                        <span className="highlight-text">License:</span>{" "} A limited, non-exclusive, non-transferable, revocable right to use the Software as defined below.
                    </p>
                </Section>

                <Section>
                    <h2>2. License Grant & Permitted Use</h2>
                    <p>
                        Subject to compliance with these terms, XDPXI grants you a {" "}
                        <span className="highlight-text">limited, non-exclusive, non-transferable, revocable license</span>
                        to use the Software solely for the purpose of preventing cheating and unauthorized modifications in your own applications or games.
                        Commercial use is permitted provided the Software is embedded within your application or service.
                    </p>
                </Section>

                <Section>
                    <h2>3. Restrictions</h2>
                    <ul>
                        <li>You may not reverse engineer, decompile, modify, or tamper with the Software.</li>
                        <li>You may not distribute, rent, lease, sublicense, or resell the Software without prior written permission.</li>
                        <li>You may not use the Software in illegal, malicious, or unethical ways.</li>
                        <li>You may not remove or alter any copyright, trademark, or legal notices within the Software.</li>
                    </ul>
                </Section>

                <Section>
                    <h2>4. Intellectual Property</h2>
                    <p>
                        All rights, title, and interest in and to the Software remain the sole property of XDPXI.
                        Nothing in this License transfers ownership to you.
                        All rights not expressly granted are reserved.
                    </p>
                </Section>

                <Section>
                    <h2>5. Data Collection</h2>
                    <p>
                        See the <span className="highlight-text">Privacy Policy</span> below for details on what data is collected and why.
                        By using this Software, you agree to such collection and processing.
                    </p>
                </Section>

                <Section>
                    <h2>6. Automatic Updates</h2>
                    <p>
                        The Software may update or modify itself automatically without prior notice.
                        By using the Software, you consent to receiving such updates as a condition of continued use.
                    </p>
                </Section>

                <Section>
                    <h2>7. Disclaimer of Warranty</h2>
                    <p>
                        The Software is provided <span className="highlight-text">“as is”</span> without warranties of any kind, express or implied.
                        XDPXI does not guarantee uninterrupted or error-free operation.
                        Use of the Software is at your own risk.
                    </p>
                </Section>

                <Section>
                    <h2>8. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, XDPXI shall not be liable for any indirect, incidental, special, or consequential damages,
                        including but not limited to lost profits, business interruption, or data loss, arising from the use or inability to use the Software.
                    </p>
                </Section>

                <Section>
                    <h2>9. Indemnification</h2>
                    <p>
                        You agree to indemnify, defend, and hold harmless XDPXI from any claims, damages, or liabilities arising from your misuse of the Software.
                    </p>
                </Section>

                <Section>
                    <h2>10. Termination</h2>
                    <p>
                        XDPXI may suspend or terminate this License immediately if you violate any terms.
                        Upon termination, you must cease all use of the Software and delete all copies.
                        XDPXI reserves the right to disable or restrict the Software in cases of breach.
                    </p>
                </Section>

                <Section>
                    <h2>11. Governing Law</h2>
                    <p>
                        This License is governed by the laws of {" "}
                        <span className="highlight-text">New South Wales, Australia</span>.
                        Any disputes will be resolved exclusively under these laws.
                        If any provision is found unenforceable, the remainder shall remain in effect.
                    </p>
                </Section>

                <Title>Privacy Policy</Title>

                <Section>
                    <p>
                        XD's AntiCheat collects only minimal data required for functionality, stability, and compliance.
                        We do not sell, rent, or trade this data with third parties.
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
                        <li><span className="highlight-text">Improvement</span> of performance, stability, and reliability</li>
                        <li><span className="highlight-text">Debugging</span> issues and fixing crashes faster</li>
                        <li><span className="highlight-text">Enforcement</span> of bans, cheating flags, or abuse prevention</li>
                    </ul>
                </Section>

                <Section>
                    <h2>3. Data Retention</h2>
                    <p>
                        Data is retained only as long as necessary to fulfill the purposes outlined.
                        Some logs may be stored for security, compliance, or debugging purposes for up to {" "}
                        <span className="highlight-text">12 months</span>, unless legally required otherwise.
                    </p>
                </Section>

                <Section>
                    <h2>4. Your Rights</h2>
                    <p>
                        You may contact us at <span className="highlight-text">contact@xdpxi.dev</span> to request
                        access to or deletion of your data, subject to verification and applicable legal obligations.
                    </p>
                </Section>

                <Section>
                    <h2>5. Security</h2>
                    <p>
                        Data is stored securely with restricted access and monitoring.
                        While we take reasonable measures, no system is 100% secure.
                    </p>
                </Section>

                <Section>
                    <h2>6. Cross-Border Data</h2>
                    <p>
                        Your data may be transferred and processed in countries outside your region, including servers operated in Australia or other jurisdictions.
                        By using the Software, you consent to such transfers.
                    </p>
                </Section>

                <Section>
                    <h2>7. Policy Updates</h2>
                    <p>
                        This policy may be updated from time to time.
                        Continued use of the Software implies acceptance of the most recent version.
                    </p>
                </Section>

                <Section>
                    <h2>8. Contact</h2>
                    <p>
                        For privacy-related concerns, contact {" "}
                        <span className="highlight-text">contact@xdpxi.dev</span>.
                    </p>
                </Section>
            </Content>

            <Footer />
        </>
    );
}
