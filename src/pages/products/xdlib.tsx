import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Home() {
    return (
        <>
            <Header>XD's Library</Header>

            <Redirect sitekey={null} redirectSite="https://xdlib.vercel.app/"/>

            <Footer/>
        </>
    );
}
