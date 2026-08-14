import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function MC() {
  return (
    <>
      <Header>XD's MC License</Header>

      <Redirect redirectSite="/legal/mc" />

      <Footer />
    </>
  );
}
