import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Shopify() {
  return (
    <>
      <Header>Shopify</Header>

      <Redirect sitekey="" redirectSite="https://shopify.pxf.io/xdpxi" />

      <Footer />
    </>
  );
}
