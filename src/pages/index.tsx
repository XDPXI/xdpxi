import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Section from "~/components/Section";
import Title from "~/components/Title";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header>XDPXI</Header>

      <Content>
        <Section>
          <h2>About Me</h2>
          <p>
            Hi, I'm XDPXI or Xavier Perri, I am a developer and artist. I mainly
            work on personal projects, but I also enjoy collaborating with
            others and taking up commissions.
          </p>
        </Section>
        <Section>
          <h2>Projects</h2>
          <p>
            I’ve built and maintained multiple open-source and commissioned
            projects, ranging from Minecraft mods to full-stack applications.
          </p>

          <Link href="/projects">Explore my notable projects</Link>
          <br />
          <br />
          <a
            href="https://github.com/xdpxi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore my GitHub <i className="fa-solid fa-external-link-alt"></i>
          </a>
          <br />
          <a
            href="http://projects.xdpxi.net/explore/repos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore some other source code{" "}
            <i className="fa-solid fa-external-link-alt"></i>
          </a>
        </Section>
        <Section>
          <h2>Commissions</h2>
          <p>
            So far I've been commissioned to create a few projects including:
          </p>
          <a
            href="https://modrinth.com/modpack/pvpp"
            target="_blank"
            rel="noopener noreferrer"
          >
            PVP Pack <i className="fa-solid fa-external-link-alt"></i>
          </a>
          <br />
          <a
            href="https://modrinth.com/mod/anchorteams"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anchor Teams <i className="fa-solid fa-external-link-alt"></i>
          </a>
          <br />
          <a
            href="https://modrinth.com/mod/embersmod"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ember's Mod <i className="fa-solid fa-external-link-alt"></i>
          </a>
          <br />
          <a
            href="https://modrinth.com/mod/halexmod"
            target="_blank"
            rel="noopener noreferrer"
          >
            Halex's Mod <i className="fa-solid fa-external-link-alt"></i>
          </a>
          <p style={{ marginTop: "10px" }}>
            If you would like me to create a project for you, please feel free
            to contact me at{" "}
            <span className="highlight-text">contact@xdpxi.dev</span>!
          </p>
        </Section>
        <Section>
          <h2>Animations</h2>
          <p>
            I have made a few animations over time, primarily for school
            projects. This includes:
          </p>

          <Link href="/animations/donut">Donut!</Link>
          <br />
          <Link href="/animations/the-great-heist">The Great Heist</Link>
          <br />
          <br />
          <Link href="/animations">Explore full list</Link>
        </Section>
      </Content>

      <Title>Blogs</Title>

      <Content>
        <Section>
          <h2>May 1, 2026</h2>
          <a href="/blogs/upgrading-the-servers" style={{ fontSize: 20 }}>
            Upgrading the Servers
          </a>
        </Section>

        <Section>
          <h2>Feb 8, 2026</h2>
          <a href="/blogs/my-own-cloud-service" style={{ fontSize: 20 }}>
            My Own Cloud Service
          </a>
        </Section>
      </Content>

      <Footer />
    </>
  );
}
