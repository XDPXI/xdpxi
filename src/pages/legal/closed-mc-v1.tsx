import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Title from "~/components/Title";
import Content from "~/components/Content";
import Section from "~/components/Section";

export default function ClosedMc() {
  return (
    <>
      <Header>XD's Closed MC License v1</Header>

      <Content>
        <Section>
          <p>
            Last Updated: 2026-07-07
            <br />
            Version: 1
            <br />
            Download:{" "}
            <a href="http://cdn.xdpxi.net/xdpxi/license/mc-closed/v1/LICENSE">
              LICENSE
            </a>{" "}
            or{" "}
            <a href="http://cdn.xdpxi.net/xdpxi/license/mc-closed/v1/LICENSE.txt">
              LICENSE.txt
            </a>
            <br />
            Copyright: © 2026 XDPXI. All rights reserved.
          </p>
        </Section>

        <Section>
          <p>
            This license governs your use of{" "}
            <span className="highlight-text">XDPXI's Minecraft Mods</span> (the
            "Mods"). The Mods are proprietary, closed-source software. By using
            these Mods, you agree to follow the terms outlined here. This is a
            legal agreement between you and{" "}
            <span className="highlight-text">XDPXI</span>. No source code,
            modification, or redistribution rights are granted except as
            explicitly stated below. Using the Mods means you accept these terms
            in full.
          </p>
        </Section>

        <Section>
          <h2>Definitions</h2>
          <p>
            {" "}
            <span className="highlight-text">Mods:</span> The Minecraft mods or
            modifications to the game created and maintained by XDPXI,
            distributed only in compiled/binary form.
            <br /> <span className="highlight-text">Source Code:</span> The
            uncompiled source files, assets, and build scripts used to produce
            the Mods, which remain the exclusive property of XDPXI and are not
            distributed publicly.
            <br /> <span className="highlight-text">You:</span> Any person or
            entity using the Mods.
          </p>
        </Section>

        <Section>
          <h2>1. No Forking or Modification</h2>
          <p>
            The Mods are closed-source. You may not fork, decompile,
            disassemble, reverse-engineer, or otherwise attempt to derive the
            Source Code from the compiled Mods. You may not create or distribute
            modified versions, patches, or derivative works based on the Mods.
          </p>
        </Section>

        <Section>
          <h2>2. No Redistribution</h2>
          <p>
            You may not reupload, rehost, or redistribute the Mods, in whole or
            in part, on any platform. The Mods must always be downloaded from
            official sources, such as{" "}
            <span className="highlight-text">CurseForge or Modrinth</span>.
            Unauthorized uploads may be treated as copyright infringement.
          </p>
        </Section>

        <Section>
          <h2>3. Modpack Integrity</h2>
          <p>
            You may include the unmodified Mods in modpacks, provided they are
            downloaded from official sources and their JAR files are not
            altered, repackaged, or overridden in any way.
          </p>
        </Section>

        <Section>
          <h2>4. No Sublicensing</h2>
          <p>
            You may not sublicense, sell, rent, lease, or otherwise transfer any
            rights to the Mods to a third party. Any license granted here is
            personal and non-transferable.
          </p>
        </Section>

        <Section>
          <h2>5. Attribution and License Retention</h2>
          <p>
            You must keep the original copyright notice intact wherever the Mods
            are referenced or distributed. You may not represent the Mods as
            your own work or relicense them under different terms.
          </p>
        </Section>

        <Section>
          <h2>6. License Exceptions</h2>
          <p>
            Exceptions, including any grant of source access, may be made on a
            case-by-case basis at the sole discretion of the author. Contact the
            author directly if you need one.
          </p>
        </Section>

        <Section>
          <h2>7. Disclaimer of Warranty</h2>
          <p>
            The Mods are provided “as-is.” The author makes no guarantees or
            warranties, and is not responsible for any issues, damages, or
            losses that may arise from using them. Use at your own risk.
          </p>
        </Section>

        <Section>
          <h2>8. Termination</h2>
          <p>
            If you break this license, your rights to use the Mods end
            immediately. After termination, you must stop distributing or using
            the Mods and delete any copies in your possession.
          </p>
        </Section>

        <Section>
          <h2>9. Governing Law and Jurisdiction</h2>
          <p>
            This license is governed by the laws of{" "}
            <span className="highlight-text">New South Wales, Australia</span>.
            Any disputes will be handled exclusively in the courts of New South
            Wales and is intended to be enforceable worldwide. Disputes will
            first attempt resolution under these laws, but the Author reserves
            the right to enforce copyright rights internationally.
          </p>
        </Section>

        <Section>
          <h2>10. DMCA & Global Enforcement</h2>
          <p>The author can enforce this license worldwide by:</p>
          <ul>
            <li>
              Sending <span className="highlight-text">DMCA</span> or equivalent
              takedown notices on hosting platforms
            </li>
            <li>Seeking removal of unauthorized forks or reuploads</li>
            <li>Taking legal action under copyright law</li>
          </ul>
        </Section>
      </Content>

      <Title>F A Q</Title>

      <Content>
        <Section>
          <h2 className="ncap">Can I use this in my modpacks?</h2>
          <p>
            Yes, of course! You can use these mods in your modpack without
            asking, as long as they're downloaded unmodified from the official{" "}
            <span className="highlight-text">Curseforge or Modrinth</span> link.
          </p>
        </Section>

        <Section>
          <h2 className="ncap">Can I fork (clone the code) this mod?</h2>
          <p>
            No. This mod is closed-source, so no source code is available to
            fork. You may not decompile, reverse-engineer, or create modified
            versions of the compiled Mods.
          </p>
        </Section>

        <Section>
          <h2 className="ncap">
            Can I use this as a separate dependency for my own mods?
          </h2>
          <p>
            You can compile/build against the public API of this mod and use it
            as a library, but you may not JAR it or bundle it with your mod. It
            should be marked as a dependency on{" "}
            <span className="highlight-text">Curseforge or Modrinth</span>.
          </p>
        </Section>

        <Section>
          <h2 className="ncap">Can I copy this bit of code I saw?</h2>
          <p>
            No. Since the Mods are closed-source, no part of the source code is
            licensed for reuse, copying, or redistribution in any other project.
          </p>
        </Section>
      </Content>

      <Footer />
    </>
  );
}
