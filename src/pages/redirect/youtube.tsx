import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Home() {
    return (
        <>
            <Header>YouTube</Header>

            <Redirect sitekey={null} redirectSite="https://www.youtube.com/@xdpxi"/>

            <Footer/>
        </>
    );
}
