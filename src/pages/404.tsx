import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Button from "~/components/Button";
import Content from "~/components/Content";

export default function Home() {
    return (
        <>
            <Header>404 - Not found!</Header>

            <Content>
                <div className="section" style={{textAlign: "center"}}>
                    <Button onClick={() => (window.location.href = "/")}>
                        <i className="fa-solid fa-house"></i> Home
                    </Button>

                    <Button onClick={() => window.history.back()}>
                        <i className="fa-solid fa-arrow-left"></i> Go Back
                    </Button>
                </div>
            </Content>

            <Footer/>
        </>
    );
}
