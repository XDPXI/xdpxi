import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Home() {
    return (
        <>
            <Header>United Empires</Header>

            <Redirect sitekey="c6223a5a-20b4-4274-8d00-455646d473d2" redirectSite="https://unitedempires.vercel.app/"/>

            <Footer/>
        </>
    );
}
