import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <>
      <Header>XD's Servers</Header>

      <div className="content-wrapper" role="main">
        <div className="section">
          <h2 style={{ textAlign: "center" }}>Work in Progress</h2>
        </div>
      </div>

      <Footer />
    </>
  );
}
