import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Home() {
    return (
        <>
            <Header>GitHub</Header>

            <Redirect sitekey={null} redirectSite="https://github.com/XDPXI/"/>

            <Footer/>
        </>
    );
}
