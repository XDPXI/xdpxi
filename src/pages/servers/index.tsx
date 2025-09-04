import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Button from "~/components/Button";
import Section from "~/components/Section";

export default function Home() {
    return (
        <>
            <Header>XD's Servers</Header>

            <Content>
                <Section>
                    <p>

                    </p>
                </Section>

                <div className="section" style={{textAlign: "center"}}>
                    <Button
                        onClick={() => {
                            window.open("/servers/request?type=mc", "_blank");
                        }}
                    >
                        Request a Minecraft Server
                    </Button>
                </div>
            </Content>

            <Footer/>
        </>
    );
}
