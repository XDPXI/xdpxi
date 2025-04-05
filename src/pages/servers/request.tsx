import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Header>XD's Servers - Request</Header>

      <div className="content-wrapper" role="main">
        <div className="section">
          <h2 style={{ textAlign: "center" }}>Redirecting</h2>
        </div>
      </div>

      <Footer />

      <Script>
        window.location.href = "https://forms.gle/gHY4eAkTyjqhmYRg6";
      </Script>
    </>
  );
}
