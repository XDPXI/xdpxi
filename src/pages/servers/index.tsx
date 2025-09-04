import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Button from "~/components/Button";

export default function Home() {
    return (
        <>
            <Header>XD's Servers</Header>

            <Content>
                <div className="section" style={{textAlign: "center"}}>
                    <Button
                        onClick={() => {
                            window.open("/servers/request?type=mc", "_blank");
                        }}
                    >
                        Request a Minecraft Server
                    </Button>
                    <Button
                        onClick={() => {
                            window.location.href = "/license/servers";
                        }}
                    >
                        View the Policy
                    </Button>
                </div>
            </Content>

            <Footer/>
        </>
    );
}
