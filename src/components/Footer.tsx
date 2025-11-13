import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <header className="header">
            <div className="footer-content">
                <div className="footer-column">
                    <h3>About</h3>
                    <Image
                        src="/imgs/icon-rounded.png"
                        alt="Site Icon"
                        width={32}
                        height={32}
                        loading="lazy"
                    />
                    <p>&copy; 2024-2025 XDPXI. All rights reserved.</p>
                </div>

                <div className="footer-column">
                    <h3>Pages</h3>
                    <nav aria-label="Site Navigation">
                        <ul>
                            <li>
                                <Link href="/">
                                    <i aria-hidden="true" className="fa-solid fa-house"></i> Home
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://docs.xdpxi.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-solid fa-book"></i> Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://status.xdpxi.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-solid fa-signal"></i> Status
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="footer-column">
                    <h3>Products</h3>
                    <nav aria-label="External Links">
                        <ul>
                            <li>
                                <a
                                    href="https://fastbangs.xdpxi.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-solid fa-magnifying-glass"></i> FastBangs
                                </a>
                            </li>
                            <li>
                                <Link href="/products/dc-webhook">
                                    <i aria-hidden="true" className="fa-brands fa-discord"></i> Discord Webhook
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://xds-code.xdpxi.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-solid fa-code"></i> XD's Code
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drawium.xdpxi.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-solid fa-pen"></i> Drawium
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/XDPXI/XDAutoClicker"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-solid fa-arrow-pointer"></i> XD's AutoClicker
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://xdpxi.itch.io/mono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-solid fa-gamepad"></i> Mono
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://swiftmc.xdpxi.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-solid fa-cube"></i> SwiftMC
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="footer-column">
                    <h3>Links</h3>
                    <nav aria-label="External Links">
                        <ul>
                            <li>
                                <a
                                    href="https://youtube.com/@xdpxi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-brands fa-youtube"></i> YouTube
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitch.tv/xdpxi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-brands fa-twitch"></i> Twitch
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://kick.com/xdpxi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-brands fa-kickstarter-k"></i> Kick
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://xdpxi.itch.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-brands fa-itch-io"></i> Itch.io
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/xdpxi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-brands fa-github"></i> GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://modrinth.com/user/xdpxi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-solid fa-puzzle-piece"></i> Modrinth
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://discord.gg/qRm6yYDswK"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-brands fa-discord"></i> Discord
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://ollama.com/XDPXI"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className="fa-solid fa-robot"></i> Ollama
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="footer-column">
                    <h3>Legal</h3>
                    <nav aria-label="Site Navigation">
                        <ul>
                            <li>
                                <Link href="/legal/mc">
                                    <i aria-hidden="true" className="fa-solid fa-book"></i> XD's MC License
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/xdac">
                                    <i aria-hidden="true" className="fa-solid fa-shield-halved"></i> XD's AntiCheat
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
