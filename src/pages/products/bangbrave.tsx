import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Home() {
    return (
        <>
            <Header>BangBrave</Header>

            <Redirect sitekey={null} redirectSite="https://bangbrave.vercel.app/"/>

            <Footer/>
        </>
    );
}
