import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Section from "~/components/Section";

export default function ANewDesign() {
  return (
    <>
      <Header>A New Design!</Header>

      <Content>
        <Section>
          <p>
            If you’ve been here before, you probably noticed the site looks
            very different now. Or maybe you got a popup asking which design
            you want. Either way, welcome to the new (old?) look.
          </p>
        </Section>

        <Section>
          <p>
            I got tired of the site feeling like a company page. Clean cards, calm colours, nice spacing, nothing
            wrong with any of it, but it could have belonged to anyone. This is
            my personal site. It should look like a person made it.
          </p>
        </Section>

        <Section>
          <p>
            So I went looking back at the web from around 2003 to 2007. Tiled
            backgrounds, pixel fonts, Comic Sans without any shame, sidebars
            full of links, little hearts and sparkles everywhere. Those sites
            were messy, but they had personality. You could tell someone sat
            there and decorated it for fun.
          </p>
        </Section>

        <Section>
          <p>
            That’s what the “Old” design is. It has a plaid background, a
            pixel font called Silkscreen for the headings, a purple and pink
            title bar, star dividers, and a navigation sidebar. Every part of
            the site gets its own colour theme too, so it doesn’t all blend
            together. It’s a bit much. That’s the point.
          </p>
        </Section>

        <Section>
          <p>
            I didn’t want to force it on everyone, though. Not everybody wants
            their eyes assaulted by a hazard-stripe tile at 2am. So the first
            time you visit, you get asked to pick between “Modern” and “Old”.
            Hover over a button and the page previews it live. Your choice is
            saved in your browser, so it won’t ask again.
          </p>
        </Section>

        <Section>
          <p>
            The whole thing is just two stylesheets that I swap between, with
            no theme library. Picking a design flips a single attribute on the
            page and turns one stylesheet off and the other on. Very 2005
            energy.
          </p>
        </Section>

        <Section>
          <p>
            I also cleaned some things out while I was in there. The animations
            pages are gone.
          </p>
        </Section>

        <Section>
          <p>
            If something looks broken or just ugly in the wrong way, let me
            know at{" "}
            <span className="highlight-text">contact@xdpxi.dev</span>. And if
            you hate it, the “Modern” design is still there. I won’t be
            offended. (Okay, maybe a little.)
          </p>
        </Section>
      </Content>

      <Footer />
    </>
  );
}
