import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Home() {
    return (
        <>
            <Header>Modrinth</Header>

            <Redirect sitekey={null} redirectSite="https://modrinth.com/user/XDPXI"/>

            <Footer/>
        </>
    );
}
