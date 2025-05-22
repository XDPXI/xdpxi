import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Button from "~/components/Button";
import Section from "~/components/Section";

export default function Home() {
    return (
        <>
            <Header>Penguin SMP</Header>

            <Content>
                <Section>
                    <p>Penguin SMP is a lightweight medieval minecraft server.</p>
                </Section>

                <div className="section" style={{textAlign: "center"}}>
                    <Button
                        onClick={() => {
                            window.open("https://modrinth.com/modpack/penguin-smp", "_blank");
                        }}
                    >
                        Modrinth
                    </Button>
                    <Button
                        onClick={() => {
                            window.open("https://modrinth.com/modpack/penguin-smp/versions", "_blank");
                        }}
                    >
                        Download
                    </Button>
                </div>
            </Content>

            <Footer/>
        </>
    );
}
