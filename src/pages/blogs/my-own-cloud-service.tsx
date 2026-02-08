import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Section from "~/components/Section";

export default function Home() {
  return (
    <>
      <Header>My Own Cloud Service</Header>

      <Content>
        <Section>
          <p>
            Over the past few months, I’ve been working on my own cloud service.
            The project is still very much a work in progress and definitely not
            production ready yet, but I’m actively improving it and adding
            features as I go.
          </p>
        </Section>

        <Section>
          <p>
            The service is called{" "}
            <a href="https://cloud.xdpxi.dev/">XD's Cloud</a>. (Get it? XDPXI’s
            Cloud? No? Okay.)
          </p>
        </Section>

        <Section>
          <p>
            The original reason I made it because my friends would not stop
            asking me to create Minecraft servers for them. So instead of doing
            it over and over again, I decided to build a system where they (and
            others) could spin up servers themselves.
          </p>
        </Section>

        <Section>
          <p>
            Right now, the service only offers servers in Australia (Sydney),
            but I’m planning to expand to other regions in the future. At the
            moment, Central Europe and the US West Coast are planned but if you
            would like to see another region supported, feel free to email me at{" "}
            <span className="highlight-text">contact@xdpxi.dev</span>.
          </p>
        </Section>

        <Section>
          <p>
            The hardware isn’t top-tier yet, but upgrades are planned to improve
            performance over time. Currently, one server (Syd01) runs on an i7
            processor with 16GB of RAM and 512GB of storage. The other (Syd02)
            uses an i7 processor with 32GB of RAM and 1TB of storage.
          </p>
        </Section>

        <Section>
          <p>
            I hope you find <a href="https://cloud.xdpxi.dev/">XD's Cloud</a>{" "}
            useful, and I hope you enjoy using it!
          </p>
        </Section>
      </Content>

      <Footer />
    </>
  );
}
