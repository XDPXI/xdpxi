import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Home() {
    return (
        <>
            <Header>Drawium</Header>

            <Redirect sitekey={null} redirectSite="https://drawium.vercel.app"/>

            <Footer/>
        </>
    );
}
