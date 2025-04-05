import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

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
    <header>
      <div className="footer-content">
        <div className="footer-column" id="hide1" ref={hide1Ref}>
          <h3>About</h3>
          <Image
            src="/logo-r.png"
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
                <Link href="/servers/policy">
                  <i aria-hidden="true" className="fa-solid fa-book"></i>{" "}
                  XD&apos;s Servers Policy
                </Link>
              </li>
              <li>
                <Link href="/license/mc">
                  <i aria-hidden="true" className="fa-solid fa-book"></i>{" "}
                  XD&apos;s MC License
                </Link>
              </li>
              <li>
                <Link href="/license/app">
                  <i aria-hidden="true" className="fa-solid fa-book"></i>{" "}
                  XD&apos;s App License
                </Link>
              </li>
              <li>
                <a
                  href="https://xdpxi.betteruptime.com/"
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
                  href="https://bangbrave.vercel.app/"
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
                <a href="https://modrinth.com/plugin/xdlib">
                  <i aria-hidden="true" className="fa-solid fa-gear"></i>{" "}
                  XD&apos;s Library
                </a>
              </li>
              <li>
                <Link href="/products/discord-webhook">
                  <i aria-hidden="true" className="fa-brands fa-discord"></i>{" "}
                  Discord Webhook
                </Link>
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
                  href="https://www.youtube.com/@xdpxi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i aria-hidden="true" className="fa-brands fa-youtube"></i>{" "}
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitch.tv/xdpxi"
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
                  href="https://xdpxi.itch.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i aria-hidden="true" className="fa-brands fa-itch-io"></i>{" "}
                  Itch.io
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/XDPXI/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i aria-hidden="true" className="fa-brands fa-github"></i>{" "}
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://modrinth.com/user/XDPXI"
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
