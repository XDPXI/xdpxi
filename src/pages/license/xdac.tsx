import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function XDAC() {
  return (
    <>
      <Header>XD's AntiCheat License & Policy</Header>

      <Redirect sitekey="" redirectSite="/legal/xdac" />

      <Footer />
    </>
  );
}
