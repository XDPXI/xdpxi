import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Button from "~/components/Button";

export default function Home() {
    return (
        <>
            <Header>Penguin SMP</Header>

            <Content>
                <div className="section" style={{textAlign: "center"}}>
                    <div className="warning">
                        <span className="warning-icon"><i
                            aria-hidden="true"
                            className="fa-solid fa-triangle-exclamation"
                        ></i></span>
                        <h2>
                            This server is still in development!
                        </h2>
                    </div>
                    <div className="warning">
                        <span className="warning-icon"><i
                            aria-hidden="true"
                            className="fa-solid fa-list-check"
                        ></i></span>
                        <h2>
                            Status: Setting up modpack...
                        </h2>
                    </div>
                </div>

                <div className="section" style={{textAlign: "center"}}>
                    <Button
                        onClick={() => {
                            window.open("https://modrinth.com/modpack/penguin-smp", "_blank");
                        }}
                    >
                        Modrinth
                    </Button>
                </div>
            </Content>

            <Footer/>
        </>
    );
}
