import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Title from "~/components/Title";
import Content from "~/components/Content";
import Section from "~/components/Section";

export default function Home() {
    return (
        <>
            <Header>XD's App License</Header>

            <Content>
                <Section>
                    <p>
                        This license governs your use of XDPXI's Applications (the "Apps").
                        By using the Apps, you agree to be bound by the terms of this
                        license. This is a legal agreement between you and XDPXI's Servers.
                    </p>
                    <p>
                        You are permitted to use these Apps as provided, subject to the
                        conditions outlined below. Your use of the Apps constitutes your
                        full acceptance of these terms and conditions.
                    </p>
                </Section>

                <Section>
                    <h2>1. Usage Rights</h2>
                    <p>
                        Subject to the terms of this license, you are granted a
                        non-exclusive, non-transferable, revocable license to use the Apps
                        for their intended purpose, as specified in the App's documentation.
                    </p>
                </Section>

                <Section>
                    <h2>2. Restrictions on Modification and Distribution</h2>
                    <p>
            <span className="highlight-text">
              You are strictly prohibited from modifying, reverse engineering,
              decompiling, or disassembling the Apps.
            </span>{" "}
                        Furthermore,
                        <span className="highlight-text">
              you are prohibited from redistributing the Apps in any form,
              whether modified or unmodified.
            </span>
                    </p>
                </Section>

                <Section>
                    <h2>3. Ownership</h2>
                    <p>
                        XDPXI retains all rights, title, and interest in and to the Apps,
                        including all intellectual property rights. You acknowledge that
                        this license does not grant you any ownership rights in the Apps.
                    </p>
                </Section>

                <Section>
                    <h2>4. Permitted Use</h2>
                    <p>
                        You may use the Apps for personal or commercial purposes, as
                        specified in the App's documentation, provided that you comply with
                        all terms and conditions of this license.
                    </p>
                </Section>

                <Section>
                    <h2>5. Prohibited Uses</h2>
                    <p>You are prohibited from:</p>
                    <ul>
                        <li>Using the Apps for any illegal or unauthorized purpose.</li>
                        <li>
                            Attempting to circumvent any security measures implemented in the
                            Apps.
                        </li>
                        <li>
                            Using the Apps in a way that could damage, disable, overburden, or
                            impair XDPXI's servers or networks.
                        </li>
                    </ul>
                </Section>

                <Section>
                    <h2>6. Disclaimer of Warranty</h2>
                    <p>
                        These Apps are provided "as-is" without any warranties, express or
                        implied. The author is not responsible for any issues, damages, or
                        losses arising from the use of these Apps. Use at your own risk.
                    </p>
                </Section>

                <Section>
                    <h2>7. Termination</h2>
                    <p>
                        This license will terminate automatically if you violate any of its
                        terms. Upon termination, you must cease all use of the Apps and
                        destroy all copies in your possession or control.
                    </p>
                </Section>
            </Content>

            <Title>F A Q</Title>

            <Content>
                <Section>
                    <h2 className="ncap">Can I use this App for commercial purposes?</h2>
                    <p>Yes, unless otherwise specified in the App's documentation.</p>
                </Section>

                <Section>
                    <h2 className="ncap">Can I modify this App?</h2>
                    <p>No, modification is strictly prohibited.</p>
                </Section>

                <Section>
                    <h2 className="ncap">Can I redistribute this App?</h2>
                    <p>No, redistribution is strictly prohibited.</p>
                </Section>

                <Section>
                    <h2 className="ncap">What if I find a bug?</h2>
                    <p>Please contact the author to report any bugs.</p>
                </Section>
            </Content>

            <Footer/>
        </>
    );
}
