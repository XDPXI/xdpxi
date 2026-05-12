import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Section from "~/components/Section";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  href: string;
  external?: boolean;
}

const projects: Project[] = [
  {
    name: "Discord Webhook Sender",
    description:
      "A tool to send custom formatted Discord messages via webhooks",
    href: "/projects/dc-webhook",
  },
  {
    name: "Fast Bangs",
    description: "A fork of Und*ck that provides QoL features",
    href: "https://fastbangs.xdpxi.dev/",
    external: true,
  },
  {
    name: "XD's Code",
    description: "XD's Code is a code editor that is insipred by VSC.",
    href: "https://github.com/XDPXI/XDs-Code",
    external: true,
  },
  {
    name: "XD's AutoClicker",
    description: "An autoclicker!",
    href: "https://github.com/XDPXI/XDAutoClicker",
    external: true,
  },
  {
    name: "Mono",
    description:
      "Mono is a monochrome-styled game (that’s where the name came from) and a 2D platformer made for a school project.",
    href: "https://xdpxi.itch.io/mono",
    external: true,
  },
  {
    name: "SwiftMC",
    description:
      "A fast, lightweight, and modern Minecraft server built on Minestom.",
    href: "https://swiftmc.xdpxi.dev/",
    external: true,
  },
  {
    name: "XD's Cloud",
    description: "Blazing performance. One-click deployments. No nonsense.",
    href: "https://cloud.xdpxi.dev/",
    external: true,
  },
];

export default function Projects() {
  return (
    <>
      <Header>Projects</Header>
      <Content>
        <Section>
          <h2>My Projects</h2>
          <p>
            Here are some of the projects I've worked on. Click on any project
            to learn more!
          </p>
        </Section>

        <Section>
          <div className="projects-grid">
            {projects.map((project, index) =>
              project.external ? (
                <a
                  key={index}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                >
                  <h3 className="project-title">
                    {project.name}{" "}
                    <i className="fa-solid fa-external-link-alt"></i>
                  </h3>
                  <p className="project-description">{project.description}</p>
                </a>
              ) : (
                <Link key={index} href={project.href} className="project-card">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                </Link>
              ),
            )}
          </div>
        </Section>
      </Content>
      <Footer />
    </>
  );
}
