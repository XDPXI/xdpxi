import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Title from "~/components/Title";
import Content from "~/components/Content";
import Section from "~/components/Section";

export default function Home() {
    return (
        <>
            <Header>XD's AntiCheat</Header>

            <Content>
                <Section>
                    <p>
                        Last Updated: 2025-09-23<br/>
                        Version: 1.0.0<br/>
                        Download: <a href="https://cdn.xdpxi.dev/xdpxi/license/xdac/1.0.0/LICENSE">LICENSE</a> or <a href="https://cdn.xdpxi.dev/xdpxi/license/xdac/1.0.0/LICENSE.txt">LICENSE.txt</a><br/>
                        Copyright: © 2025 XD's AntiCheat. All rights reserved.
                    </p>
                </Section>
            </Content>

            <Title>Terms of Service</Title>

            <Content>
                <Section>
                    <p>

                    </p>
                </Section>
            </Content>

            <Title>Privacy Policy</Title>

            <Content>
                <Section>
                    <p>

                    </p>
                </Section>
            </Content>

            <Footer />
        </>
    );
}
