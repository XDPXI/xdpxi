import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Home() {
    return (
        <>
            <Header>XD's MC License</Header>

            <Redirect sitekey="" redirectSite="/legal/mc"/>

            <Footer/>
        </>
    );
}
