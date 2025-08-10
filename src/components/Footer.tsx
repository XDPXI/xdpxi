import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef} from "react";

export default function Footer() {
    const hide1Ref = useRef<HTMLDivElement>(null);
    const hide2Refs = useRef<HTMLDivElement[]>([]);

    const checkWidth = () => {
        const width = window.innerWidth;
        const hideElement = hide1Ref.current;

        if (hideElement) {
            hideElement.style.transition = "opacity 0.3s ease";
            if (width < 800) {
                hideElement.style.opacity = "0";
                setTimeout(() => {
                    if (hideElement) hideElement.style.display = "none";
                }, 300);
            } else {
                hideElement.style.display = "";
                setTimeout(() => {
                    if (hideElement) hideElement.style.opacity = "1";
                }, 10);
            }
        }

        hide2Refs.current.forEach((element) => {
            if (element) {
                element.style.transition = "font-size 0.3s ease";
                element.style.fontSize = width < 620 ? "11px" : "";
            }
        });
    };

    useEffect(() => {
        checkWidth();
        window.addEventListener("resize", checkWidth);

        return () => {
            window.removeEventListener("resize", checkWidth);
        };
    }, []);

    const addToHide2Refs = (el: HTMLDivElement | null) => {
        if (el && !hide2Refs.current.includes(el)) {
            hide2Refs.current.push(el);
        }
    };

    return (
        <header className="header">
            <div className="footer-content">
                <div className="footer-column" id="hide1" ref={hide1Ref}>
                    <h3>About</h3>
                    <Image
                        src="/imgs/icon-rounded.png"
                        alt="Site Icon"
                        width={32}
                        height={32}
                        loading="lazy"
                    />
                    <p>&copy; 2025 XDPXI. All rights reserved.</p>
                </div>

                <div className="footer-column" id="hide2" ref={addToHide2Refs}>
                    <h3>Pages</h3>
                    <nav aria-label="Site Navigation">
                        <ul>
                            <li>
                                <Link href="/">
                                    <i aria-hidden="true" className="fa-solid fa-house"></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/servers">
                                    <i aria-hidden="true" className="fa-solid fa-server"></i>{" "}
                                    XD&apos;s Servers
                                </Link>
                            </li>
                            <li>
                                <Link href="/license/mc">
                                    <i aria-hidden="true" className="fa-solid fa-book"></i>{" "}
                                    XD&apos;s MC License
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://status.xdpxi.dev/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i aria-hidden="true" className="fa-solid fa-signal"></i>{" "}
                                    Status
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="footer-column" id="hide2" ref={addToHide2Refs}>
                    <h3>Products</h3>
                    <nav aria-label="External Links">
                        <ul>
                            <li>
                                <a
                                    href="https://bangbrave.xdpxi.dev/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        aria-hidden="true"
                                        className="fa-solid fa-magnifying-glass"
                                    ></i>{" "}
                                    Bang Brave
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://xdlib.xdpxi.dev/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        aria-hidden="true"
                                        className="fa-solid fa-gear"
                                    ></i>{" "}
                                    XD's Library
                                </a>
                            </li>
                            <li>
                                <Link href="/products/discord-webhook">
                                    <i aria-hidden="true" className="fa-brands fa-discord"></i>{" "}
                                    Discord Webhook
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://xds-code.xdpxi.dev/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        aria-hidden="true"
                                        className="fa-solid fa-code"
                                    ></i>{" "}
                                    XD's Code
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drawium.xdpxi.dev/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        aria-hidden="true"
                                        className="fa-solid fa-pen"
                                    ></i>{" "}
                                    Drawium
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="footer-column" id="hide2" ref={addToHide2Refs}>
                    <h3>Links</h3>
                    <nav aria-label="External Links">
                        <ul>
                            <li>
                                <a
                                    href="https://youtube.com/@xdpxi"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i aria-hidden="true" className="fa-brands fa-youtube"></i>{" "}
                                    YouTube
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitch.tv/xdpxi"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i aria-hidden="true" className="fa-brands fa-twitch"></i>{" "}
                                    Twitch
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://kick.com/xdpxi"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        aria-hidden="true"
                                        className="fa-brands fa-kickstarter-k"
                                    ></i>{" "}
                                    Kick
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://xdpxi.itch.io"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i aria-hidden="true" className="fa-brands fa-itch-io"></i>{" "}
                                    Itch.io
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/xdpxi"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i aria-hidden="true" className="fa-brands fa-github"></i>{" "}
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://modrinth.com/user/xdpxi"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        aria-hidden="true"
                                        className="fa-solid fa-puzzle-piece"
                                    ></i>{" "}
                                    Modrinth
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://discord.gg/qRm6yYDswK"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        aria-hidden="true"
                                        className="fa-brands fa-discord"
                                    ></i>{" "}
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
