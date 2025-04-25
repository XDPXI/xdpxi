import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import {useEffect, useState} from "react";

export default function Home() {
    const [redirectMessage, setRedirectMessage] = useState("Redirecting...");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        if (params.get('type') === 'mc') {
            window.location.replace("https://app.youform.com/forms/nxkv8rfn");
        } else {
            setRedirectMessage("Failed to Redirect");
        }
    }, []);

    return (
        <>
            <Header>XD's Servers</Header>

            <Content>
                <div className="section" style={{textAlign: "center"}}>
                    <h2>{redirectMessage}</h2>
                </div>
            </Content>

            <Footer/>
        </>
    );
}
