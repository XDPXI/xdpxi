import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Title from "~/components/Title";
import Content from "~/components/Content";
import Section from "~/components/Section";

export default function Home() {
  return (
    <>
      <Header>XD's MC License</Header>

      <Content>
        <Section>
          <p>
            This license governs your use of XDPXI's Minecraft Mods (the
            "Mods"). By using the Mods, you agree to be bound by the terms of
            this license. This is a legal agreement between you and XDPXI's
            Servers.
          </p>
          <p>
            You are permitted to use these Mods in modpacks, and you are allowed
            to edit and fork these Mods, subject to the conditions outlined
            below. Your use of the Mods constitutes your full acceptance of
            these terms and conditions.
          </p>
        </Section>

        <Section>
          <h2>1. Revenue Sharing</h2>
          <p>
            If you fork, modify, or reuse substantial code from these Mods and
            upload it to CurseForge, Modrinth, or similar sites with
            monetization features,{" "}
            <span className="highlight-text">
              50% of the revenue generated from the fork must be shared with the
              original author (XDPXI)
            </span>
            . This ensures fair compensation for the original work.
          </p>
        </Section>

        <Section>
          <h2>2. Distribution Restrictions</h2>
          <p>
            To protect the Mods' integrity and support legitimate distribution
            channels, you{" "}
            <span className="highlight-text">
              are prohibited from reuploading these Mods
            </span>{" "}
            to mod hosting sites that do not offer author compensation or
            exercise adequate control over modification and redistribution, such
            as PlanetMinecraft.
          </p>
        </Section>

        <Section>
          <h2>3. Modpack Integrity</h2>
          <p>
            To ensure the Mods remain up-to-date and secure, you{" "}
            <span className="highlight-text">
              must not directly override the JAR files
            </span>
            of these Mods within a modpack. The Mods{" "}
            <span className="highlight-text">
              must be obtained from Modrinth
            </span>
            . This helps prevent the distribution of outdated or maliciously
            modified versions.
          </p>
        </Section>

        <Section>
          <h2>4. Attribution and License Retention</h2>
          <p>
            If you modify these Mods, you{" "}
            <span className="highlight-text">
              must retain the original copyright notice
            </span>{" "}
            within your modified code. You
            <span className="highlight-text">
              are not permitted to relicense the software
            </span>{" "}
            under a different license. The license must remain "XD's MC
            License." This ensures proper attribution and consistent licensing
            terms.
          </p>
        </Section>

        <Section>
          <h2>5. Code Reuse Guidelines</h2>
          <p>
            Reuse of small portions of the Mods' code (e.g., individual
            functions) in projects with{" "}
            <span className="highlight-text">
              distinct and non-competing purposes
            </span>{" "}
            is permitted. However, this permission does not extend to projects
            that directly compete with these Mods or replicate its core
            functionalities. This is to protect the unique value and innovation
            of the original Mods.
          </p>
        </Section>

        <Section>
          <h2>6. License Exceptions</h2>
          <p>
            Exceptions to these terms may be granted on a case-by-case basis. If
            you require clarification or wish to request an exception (e.g., for
            using minor portions of code in unrelated projects), please contact
            the author for approval.
          </p>
        </Section>

        <Section>
          <h2>7. Disclaimer of Warranty</h2>
          <p>
            These Mods are provided "as-is" without any warranties, express or
            implied. The author is not responsible for any issues, damages, or
            losses arising from the use of these Mods. Use at your own risk.
          </p>
        </Section>
      </Content>

      <Title>F A Q</Title>

      <Content>
        <Section>
          <h2 className="ncap">Can I use this in my modpacks?</h2>
          <p>
            Yes, of course! You can use these mods in your modpack without
            asking, as long as it’s downloaded from the official Curseforge or
            Modrinth link.
          </p>
        </Section>

        <Section>
          <h2 className="ncap">Can I fork this mod?</h2>
          <p>
            Yes, you don’t need permission, but you must split 50% of the
            revenue with the original author. You may not relicense the
            software, and you may not reupload it to other sites besides
            Curseforge or Modrinth.
          </p>
        </Section>

        <Section>
          <h2 className="ncap">
            Can I use this as a separate dependency for my own mods?
          </h2>
          <p>
            You can compile against this mod and use it as a library, but you
            may not JAR it or bundle it with your mod. It should be marked as a
            dependency on Curseforge or Modrinth.
          </p>
        </Section>

        <Section>
          <h2 className="ncap">Can I copy this bit of code I saw?</h2>
          <p>
            Yes! Just be respectful. You may copy small parts of this mod, such
            as individual functions or the build script, if used in another mod
            with different functionality. You may not copy a substantial amount
            of the mod, or copy code from this mod to use in competing mods that
            serve a similar purpose.
          </p>
        </Section>
      </Content>

      <Footer />
    </>
  );
}
