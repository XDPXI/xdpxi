import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Home() {
    return (
        <>
            <Header>Discord</Header>

            <Redirect sitekey={null} redirectSite="https://discord.gg/qRm6yYDswK"/>

            <Footer/>
        </>
    );
}
