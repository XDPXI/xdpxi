import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Home() {
    return (
        <>
            <Header>XD's Code</Header>

            <Redirect sitekey={null} redirectSite="https://xds-code.vercel.app"/>

            <Footer/>
        </>
    );
}
