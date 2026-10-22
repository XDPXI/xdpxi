import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Button from "~/components/Button";
import Content from "~/components/Content";

export default function NotFound() {
  return (
    <>
      <Header>404 - Not found!</Header>

      <Content>
        <div className="section s-404">
          <Button onClick={() => (window.location.href = "/")}>
            Home
          </Button>

          <Button onClick={() => window.history.back()}>
            &laquo; Go Back
          </Button>
        </div>
      </Content>

      <Footer />
    </>
  );
}
