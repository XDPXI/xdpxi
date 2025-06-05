import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Home() {
    return (
        <>
            <Header>Itch.IO</Header>

            <Redirect sitekey={null} redirectSite="https://xdpxi.itch.io/"/>

            <Footer/>
        </>
    );
}
