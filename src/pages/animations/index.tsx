import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Section from "~/components/Section";
import Link from "next/link";

interface Animation {
  name: string;
  description: string;
  href: string;
  external?: boolean;
}

const animations: Animation[] = [
  {
    name: "Donut",
    description: "My donut from the Blender Guru donut tutorial",
    href: "/animations/donut",
  },
  {
    name: "The Great Heist",
    description: "Releasing 25/09/2026",
    href: "/animations/the-great-heist",
  },
];

export default function Animations() {
  return (
    <>
      <Header>Animations</Header>
      <Content>
        <Section>
          <h2>My Animations</h2>
          <p>
            I've created several animations over time, primarily for school
            projects. Click on any animation to view it!
          </p>
        </Section>

        <Section>
          <div className="animations-grid">
            {animations.map((animation, index) =>
              animation.external ? (
                <a
                  key={index}
                  href={animation.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animation-card"
                >
                  <h3 className="animation-title">
                    {animation.name}{" "}
                    <i className="fa-solid fa-external-link-alt"></i>
                  </h3>
                  <p className="animation-description">
                    {animation.description}
                  </p>
                </a>
              ) : (
                <Link
                  key={index}
                  href={animation.href}
                  className="animation-card"
                >
                  <h3 className="animation-title">{animation.name}</h3>
                  <p className="animation-description">
                    {animation.description}
                  </p>
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
