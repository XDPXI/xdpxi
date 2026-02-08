import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Section from "~/components/Section";

export default function Home() {
  return (
    <>
      <Header>XDPXI</Header>

      <Content>
        <Section>
          <a href="/blogs/my-own-cloud-service" style={{ fontSize: 20 }}>
            My Own Cloud Service
          </a>
        </Section>
      </Content>

      <Footer />
    </>
  );
}
