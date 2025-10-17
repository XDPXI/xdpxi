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
                        Last Updated: 2025-08-23<br/>
                        Version: 2.1.0<br/>
                        Download: <a href="https://cdn.xdpxi.dev/xdpxi/license/mc/2.1.0/LICENSE">LICENSE</a> or <a
                        href="https://cdn.xdpxi.dev/xdpxi/license/mc/2.1.0/LICENSE.txt">LICENSE.txt</a><br/>
                        Copyright: © 2024–2025 XDPXI. All rights reserved.
                    </p>
                </Section>

                <Section>
                    <p>
                        This license governs your use of {" "}<span
                        className="highlight-text">XDPXI's Minecraft Mods</span>{" "} (the
                        "Mods"). By using these Mods, you agree to follow the terms outlined
                        here. This is a legal agreement between you and {" "}<span
                        className="highlight-text">XDPXI</span>. You are free
                        to use these Mods in modpacks and to edit or fork them, but only
                        under the conditions set out below. Using the Mods means you accept
                        these terms in full.
                    </p>
                </Section>

                <Section>
                    <h2>Definitions</h2>
                    <p>
                        {" "}<span className="highlight-text">Mods:</span>{" "} The Minecraft mods or modifications to
                        the game created and maintained by XDPXI.<br/>
                        {" "}<span className="highlight-text">Fork:</span>{" "} Any derivative or modified version of
                        the Mods, including clones, edits, or substantial reuse.<br/>
                        {" "}<span className="highlight-text">You:</span>{" "} Any person or entity using the Mods.
                    </p>
                </Section>

                <Section>
                    <h2>1. Revenue Sharing</h2>
                    <p>
                        If you fork, modify, or reuse significant portions of these Mods
                        (entire classes, files, or large code blocks) and upload them to
                        platforms like {" "}<span className="highlight-text">CurseForge, Modrinth</span>{" "} or similar
                        sites that allow
                        monetization, you must share {" "}<span
                        className="highlight-text">50% of the revenue</span>{" "} with the original
                        author (XDPXI).
                    </p>
                    <ul>
                        <li>Contact the original author before monetizing your fork.</li>
                        <li>If asked, provide proof of revenue sharing. Failure to do so is a breach of this license.
                        </li>
                    </ul>
                    <p>
                        1. You must share 50% of all revenue with the Author.<br/>
                        2. You must contact the Author prior to monetization to arrange revenue sharing.<br/>
                        3. Upon request, you must provide verifiable records of revenue.<br/>
                        4. Failure to comply constitutes a breach of this license and may result in legal action.
                    </p>
                </Section>

                <Section>
                    <h2>2. Distribution Restrictions</h2>
                    <p>
                        You may not reupload these Mods to hosting sites that do not offer
                        compensation to authors or maintain adequate control over
                        redistribution, such as {" "}<span className="highlight-text">PlanetMinecraft</span>.
                        Unauthorized uploads may
                        be treated as copyright infringement.
                    </p>
                </Section>

                <Section>
                    <h2>3. Modpack Integrity</h2>
                    <p>
                        Do not override the JAR files of these Mods directly in modpacks. The
                        Mods should always be downloaded from official sources, such as
                        {" "}<span className="highlight-text">CurseForge or Modrinth</span>. This ensures users receive
                        up-to-date and
                        safe versions.
                    </p>
                </Section>

                <Section>
                    <h2>4. Attribution and License Retention</h2>
                    <p>
                        If you modify the Mods, you must keep the original copyright notice
                        intact. You may not change the license to something else; the Mods
                        must remain under {" "}<span className="highlight-text">"XD's MC License."</span>{" "}
                    </p>
                </Section>

                <Section>
                    <h2>5. Code Reuse Guidelines</h2>
                    <p>
                        Using small parts of the Mods’ code (like functions or build scripts)
                        in other projects with different purposes is allowed. You may not use
                        this permission for projects that directly compete with these Mods
                        or copy their core features.
                    </p>
                </Section>

                <Section>
                    <h2>6. License Exceptions</h2>
                    <p>
                        Exceptions may be granted on a case-by-case basis. Contact the author
                        directly if you need one.
                    </p>
                </Section>

                <Section>
                    <h2>7. Disclaimer of Warranty</h2>
                    <p>
                        The Mods are provided “as-is.” The author makes no guarantees or
                        warranties, and is not responsible for any issues, damages, or losses
                        that may arise from using them. Use at your own risk.
                    </p>
                </Section>

                <Section>
                    <h2>8. Termination</h2>
                    <p>
                        If you break this license, your rights to use the Mods end immediately.
                        After termination, you must stop distributing, modifying, or monetizing
                        the Mods.
                    </p>
                </Section>

                <Section>
                    <h2>9. Governing Law and Jurisdiction</h2>
                    <p>
                        This license is governed by the laws of {" "}<span className="highlight-text">New South Wales, Australia</span>.
                        Any disputes will be handled exclusively in the courts of New South Wales and is intended to be
                        enforceable worldwide.
                        Disputes will first attempt resolution under these laws, but the Author reserves the right to
                        enforce copyright and revenue-sharing rights internationally.
                    </p>
                </Section>

                <Section>
                    <h2>10. DMCA & Global Enforcement</h2>
                    <p>
                        The author can enforce this license worldwide by:
                    </p>
                    <ul>
                        <li>Sending {" "}<span className="highlight-text">DMCA</span>{" "} or equivalent takedown
                            notices on hosting platforms
                        </li>
                        <li>Seeking recovery of revenue</li>
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
                        asking, as long as it’s downloaded from the official {" "}<span className="highlight-text">Curseforge or Modrinth</span>{" "} link.
                    </p>
                </Section>

                <Section>
                    <h2 className="ncap">Can I fork (Clone the code) this mod?</h2>
                    <p>
                        Yes, you don’t need permission, but you must split {" "}<span className="highlight-text">50% of the revenue</span>{" "} with
                        the original author. You may not relicense the
                        software, and you may not reupload it to other sites besides {" "}<span
                        className="highlight-text">Curseforge or Modrinth</span>.
                    </p>
                </Section>

                <Section>
                    <h2 className="ncap">
                        Can I use this as a separate dependency for my own mods?
                    </h2>
                    <p>
                        You can compile against this mod and use it as a library, but you
                        may not JAR it or bundle it with your mod. It should be marked as a
                        dependency on {" "}<span className="highlight-text">Curseforge or Modrinth</span>.
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

            <Footer/>
        </>
    );
}
