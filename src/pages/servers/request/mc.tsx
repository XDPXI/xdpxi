import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Home() {
    return (
        <>
            <Header>XD's Servers</Header>

            <Redirect sitekey="9558f5e2-c30c-41a8-9f18-2ad8cc0e7d92"
                      redirectSite="https://app.youform.com/forms/nxkv8rfn"/>

            <Footer/>
        </>
    );
}
