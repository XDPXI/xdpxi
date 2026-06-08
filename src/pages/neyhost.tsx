import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Shopify() {
  return (
    <>
      <Header>NeyHost</Header>

      <Redirect sitekey="" redirectSite="https://www.neyhost.com/?ref=XDPXI" />

      <Footer />
    </>
  );
}
