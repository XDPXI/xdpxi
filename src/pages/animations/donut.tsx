import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Section from "~/components/Section";

export default function Donut() {
  return (
    <>
      <Header>Donut</Header>

      <Content>
        <Section>
          <div
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              marginBottom: "30px",
              aspectRatio: "16 / 9",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Donut"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
            />
          </div>

          <h2>About This Animation</h2>
          <p></p>
        </Section>
      </Content>

      <Footer />
    </>
  );
}
