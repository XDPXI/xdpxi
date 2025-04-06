import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Button from "~/components/Button";

export default function Home() {
  return (
    <>
      <Header>XD's Servers</Header>

      <Content>
        <div className="section" style={{ textAlign: "center" }}>
          <Button
            onClick={() => {
              window.open("https://docs.google.com/forms/d/e/1FAIpQLSfHGyQCrn_Kg7xW8BhisdnUDbiaZamLzcycNhk7syhG_ohhcg/viewform", "_blank");
            }}
          >
            Request a Server
          </Button>
          <Button
            onClick={() => {
              window.location.href = "/servers/policy";
            }}
          >
            View the Policy
          </Button>
        </div>
      </Content>

      <Footer />
    </>
  );
}
