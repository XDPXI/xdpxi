import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Home() {
    return (
        <>
            <Header>Twitch</Header>

            <Redirect sitekey={null} redirectSite="https://www.twitch.tv/xdpxi"/>

            <Footer/>
        </>
    );
}
