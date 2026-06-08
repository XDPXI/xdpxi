import { useEffect } from "react";
import { track } from "@databuddy/sdk/react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Redirect from "~/components/Redirect";

export default function Shopify() {
  useEffect(() => {
    track("visit_shopify");
  }, []);

  return (
    <>
      <Header>Shopify</Header>

      <Redirect sitekey="" redirectSite="https://shopify.pxf.io/xdpxi" />

      <Footer />
    </>
  );
}
