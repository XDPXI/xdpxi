import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Script from "next/script";
import Content from "~/components/Content";
import Section from "~/components/Section";

export default function Home() {
  return (
    <>
      <Header>XD's Servers - Request</Header>

      <Content>
        <Section>
          <h2 style={{ textAlign: "center" }}>Redirecting</h2>
        </Section>
      </Content>

      <Footer />

      <Script>
        window.location.href = "https://forms.gle/gHY4eAkTyjqhmYRg6";
      </Script>
    </>
  );
}
