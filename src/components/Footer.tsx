import Image from "next/image";
import Link from "next/link";
import { CHOOSE_EVENT } from "~/components/DesignPicker";

export default function Footer() {
  return (
    <>
    <footer className="footer footer-retro" role="contentinfo">
      <nav className="footer-legal" aria-label="Legal">
        <h3>Legal stuff (the boring part)</h3>
        <ul>
          <li>
            <Link href="/legal/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/legal/mc">XD's MC License v2.1</Link>
          </li>
          <li>
            <Link href="/legal/open-mc-v3">XD's Open MC License v3</Link>
          </li>
          <li>
            <Link href="/legal/closed-mc-v1">XD's Closed MC License v1</Link>
          </li>
          <li>
            <Link href="/legal/xdac-terms-of-service">
              XD's AntiCheat - Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/legal/xdac-privacy-policy">
              XD's AntiCheat - Privacy Policy
            </Link>
          </li>
          <li>
            <a
              href="https://cloud.xdpxi.dev/legal/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              XD's Cloud - Terms of Service
            </a>
          </li>
          <li>
            <a
              href="https://cloud.xdpxi.dev/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              XD's Cloud - Privacy Policy
            </a>
          </li>
        </ul>
      </nav>

      <div className="footer-bottom">
        <Image
          src="/imgs/icon-rounded.png"
          alt="Site Icon"
          width={32}
          height={32}
          loading="lazy"
        />
        <p>
          &copy; 2026 XDPXI. All rights reserved.
          <br />
          Made with{" "}
          <img
            src="/imgs/heart.svg"
            alt="love"
            width={14}
            height={12}
            className="heart-icon"
          />{" "}
          by XDPXI! <a href="#top">[back to top]</a>{" "}
          <a
            href="#top"
            onClick={() => window.dispatchEvent(new Event(CHOOSE_EVENT))}
          >
            [change design]
          </a>
        </p>
      </div>
    </footer>
    <footer className="footer-modern" role="contentinfo">
      <div className="footer-content">
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
                <Link href="/projects">
                  <i aria-hidden="true" className="fa-solid fa-list"></i>{" "}
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href="https://docs.xdpxi.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-solid fa-book"></i>{" "}
                  Documentation{" "}
                  <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://git.xdpxi.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-solid fa-list"></i>{" "}
                  Repositories <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://maven.xdpxi.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-solid fa-list"></i> Maven{" "}
                  <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://status.xdpxi.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-solid fa-signal"></i>{" "}
                  Status <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-column">
          <h3>Affiliates</h3>
          <nav aria-label="Site Navigation">
            <ul>
              <li>
                <a
                  href="/shopify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-brands fa-shopify"></i>{" "}
                  Shopify <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="/neyhost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-solid fa-server"></i>{" "}
                  NeyHost <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-column">
          <h3>Accounts</h3>
          <nav aria-label="External Links">
            <ul>
              <li>
                <a
                  href="https://youtube.com/@xdpxi2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-brands fa-youtube"></i>{" "}
                  YouTube <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@xdpxi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-brands fa-tiktok"></i>{" "}
                  TikTok <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitch.tv/xdpxi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-brands fa-twitch"></i>{" "}
                  Twitch <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://kick.com/xdpxi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    aria-hidden="true"
                    className="fa-brands fa-kickstarter-k"
                  ></i>{" "}
                  Kick <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://xdpxi.itch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-brands fa-itch-io"></i>{" "}
                  Itch.io <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/xdpxi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-brands fa-github"></i>{" "}
                  GitHub <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://modrinth.com/user/xdpxi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    aria-hidden="true"
                    className="fa-solid fa-puzzle-piece"
                  ></i>{" "}
                  Modrinth <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/qRm6yYDswK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-brands fa-discord"></i>{" "}
                  Discord <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://ollama.com/XDPXI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-solid fa-robot"></i>{" "}
                  Ollama <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-column footer-column-wide">
          <h3>Legal</h3>
          <nav aria-label="Site Navigation">
            <ul>
              <li>
                <Link href="/legal/privacy-policy">
                  <i
                    aria-hidden="true"
                    className="fa-solid fa-lock"
                  ></i>{" "}
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/mc">
                  <i aria-hidden="true" className="fa-solid fa-book"></i> XD's
                  MC License v2.1
                </Link>
              </li>
              <li>
                <Link href="/legal/open-mc-v3">
                  <i aria-hidden="true" className="fa-solid fa-book"></i> XD's
                  Open MC License v3
                </Link>
              </li>
              <li>
                <Link href="/legal/closed-mc-v1">
                  <i aria-hidden="true" className="fa-solid fa-book"></i> XD's
                  Closed MC License v1
                </Link>
              </li>
              <li>
                <Link href="/legal/xdac-terms-of-service">
                  <i
                    aria-hidden="true"
                    className="fa-solid fa-shield-halved"
                  ></i>{" "}
                  XD's AntiCheat - Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/xdac-privacy-policy">
                  <i
                    aria-hidden="true"
                    className="fa-solid fa-shield-halved"
                  ></i>{" "}
                  XD's AntiCheat - Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://cloud.xdpxi.dev/legal/terms-of-service"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-solid fa-cloud"></i> XD's
                  Cloud - Terms of Service{" "}
                  <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://cloud.xdpxi.dev/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i aria-hidden="true" className="fa-solid fa-cloud"></i> XD's
                  Cloud - Privacy Policy{" "}
                  <i className="fa-solid fa-external-link-alt"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <Image
            src="/imgs/icon-rounded.png"
            alt="Site Icon"
            width={32}
            height={32}
            loading="lazy"
          />
          <p>&copy; 2026 XDPXI. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <p>
            Made with{" "}
            <i aria-hidden="true" className="fa-solid fa-heart heart-icon"></i>{" "}
            by XDPXI!{" "}
            <a
              href="#top"
              onClick={() => window.dispatchEvent(new Event(CHOOSE_EVENT))}
            >
              Change design
            </a>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
