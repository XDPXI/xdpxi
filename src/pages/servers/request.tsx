﻿import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Header>XD's Servers</Header>

      <Content>
        <div className="section" style={{ textAlign: "center" }}>
          <h2>Redirecting...</h2>
        </div>
      </Content>

      <Footer />

      <Script>
        location.replace("https://form.typeform.com/to/cHUBGvvy"); // Typeform
        // location.replace("https://forms.gle/1FFC9g9kDd1qdGuDA"); // Google
        Forms
      </Script>
    </>
  );
}
