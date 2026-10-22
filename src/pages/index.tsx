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
        <Section variant="s-about">
          <img
            className="polaroid footer-retro"
            src="/imgs/icon.png"
            alt="XDPXI's site icon"
            width={96}
            height={108}
          />
          <h2>About Me</h2>
          <p className="scribble">heya!!</p>
          <p>
            I'm Xavier Perri (or as you would know me, XDPXI), I'm a
            developer and artist. I mainly work on personal projects but I
            love to work with other people such as collaborations or commisions.
          </p>
        </Section>
        <Section variant="s-card retro-only">
          <h2>Quick Facts</h2>
          <table className="facts">
            <tbody>
              <tr><th>Name</th><td>Xavier Perri</td></tr>
              <tr><th>Handle</th><td>XDPXI</td></tr>
              <tr><th>Lives in</th><td>New South Wales, Australia</td></tr>
              <tr><th>Makes</th><td>Minecraft mods and servers, apps, games, game engines, OSes, websites</td></tr>
              <tr><th>Languages</th><td>Java, TypeScript, C++, C#, Rust, Python, Go, Swift, GDScript, Assembly</td></tr>
              <tr><th>Tools</th><td>Tauri, Godot, Unity, Next.js, Bun, Avalonia, OpenGL, CMake, Gradle</td></tr>
              <tr><th>Streams on</th><td>Twitch and Kick</td></tr>
              <tr><th>Mail</th><td>contact@xdpxi.dev</td></tr>
            </tbody>
          </table>
        </Section>
        <Section variant="s-projects">
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

        <Section variant="s-commish">
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
          <a>
            <span
              className="privatised-project"
              title="Project has been privatised by owner."
            >
              Halex's Mod{" "}
              <i className="fa-solid fa-external-link-alt"></i>
            </span>
          </a>
          <p className="contact-note">
            If you would like me to create a project for you, please feel free
            to contact me at{" "}
            <span className="highlight-text">contact@xdpxi.dev</span>!
          </p>
        </Section>
        <Section variant="s-mods retro-only">
          <h2>Hall of Mods</h2>
          <p>My most downloaded things on Modrinth:</p>
          <ol>
            <li><a href="https://modrinth.com/mod/fake-fabric-loader" target="_blank" rel="noopener noreferrer">Fake Fabric Loader</a> <span className="dl">361,000+ downloads</span></li>
            <li><a href="https://modrinth.com/modpack/pvpp" target="_blank" rel="noopener noreferrer">PVP Pack</a> <span className="dl">32,000+ downloads</span></li>
            <li><a href="https://modrinth.com/user/xdpxi" target="_blank" rel="noopener noreferrer">XD&apos;s Library</a> <span className="dl">26,000+ downloads</span></li>
            <li><a href="https://modrinth.com/user/xdpxi" target="_blank" rel="noopener noreferrer">Earth Untrial</a> <span className="dl">11,000+ downloads</span></li>
            <li><a href="https://modrinth.com/user/xdpxi" target="_blank" rel="noopener noreferrer">United Empires</a> <span className="dl">7,600+ downloads</span></li>
          </ol>
          <a
            className="mods-all"
            href="https://modrinth.com/user/xdpxi"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all projects <i className="fa-solid fa-external-link-alt"></i>
          </a>
        </Section>
      </Content>

      <Title id="blogs">Blogs</Title>

      <Content>
        <Section variant="s-blog">
          <h2>Sep 17, 2026</h2>
          <Link href="https://cloud.xdpxi.dev/blog/another-network-upgrade" className="entry-title">
            We're replacing our third-party network provider with our own infrastructure for faster speeds and more control.
          </Link>
        </Section>

        <Section variant="s-blog">
          <h2>Sep 17, 2026</h2>
          <Link href="https://cloud.xdpxi.dev/blog/pricing-changes" className="entry-title">
            Switching to usage-based pricing so you pay only for what you use.
          </Link>
        </Section>

        <Section variant="s-blog">
          <h2>Jul 18, 2026</h2>
          <Link href="https://cloud.xdpxi.dev/blog/network-infrastructure-upgrades" className="entry-title">
            Network infrastructure upgrades
          </Link>
        </Section>

        <Section variant="s-blog">
          <h2>May 1, 2026</h2>
          <Link href="/blogs/upgrading-the-servers" className="entry-title">
            Upgrading the servers
          </Link>
        </Section>

        <Section variant="s-blog">
          <h2>Feb 8, 2026</h2>
          <Link href="/blogs/my-own-cloud-service" className="entry-title">
            My own cloud service
          </Link>
        </Section>
      </Content>

      <Footer />
    </>
  );
}
