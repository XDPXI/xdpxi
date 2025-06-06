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
                    <div className="warning">
                        <span className="warning-icon"><i
                            aria-hidden="true"
                            className="fa-solid fa-triangle-exclamation"
                        ></i></span>
                        <h2>
                            High-Tier Servers Offline!
                            <a href="https://xdpxi.betteruptime.com/">View More</a>
                        </h2>
                    </div>
                    <div className="warning">
                        <span className="warning-icon"><i
                            aria-hidden="true"
                            className="fa-solid fa-triangle-exclamation"
                        ></i></span>
                        <h2>
                            Low-Tier Servers Offline!
                            <a href="https://xdpxi.betteruptime.com/">View More</a>
                        </h2>
                    </div>
                </div>

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
                            window.location.href = "/servers/policy";
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
