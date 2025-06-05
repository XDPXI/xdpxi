import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Home() {
    return (
        <>
            <Header>Kick</Header>

            <Redirect sitekey={null} redirectSite="https://kick.com/xdpxi"/>

            <Footer/>
        </>
    );
}
