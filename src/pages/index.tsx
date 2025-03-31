import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function Home() {
  const hide1Ref = useRef<HTMLDivElement>(null);
  const hide2Refs = useRef<HTMLDivElement[]>([]);

  const checkWidth = () => {
    const width = window.innerWidth;
    const hideElement = hide1Ref.current;

    if (hideElement) {
      hideElement.style.transition = 'opacity 0.3s ease';
      if (width < 800) {
        hideElement.style.opacity = '0';
        setTimeout(() => {
          if (hideElement) hideElement.style.display = 'none';
        }, 300);
      } else {
        hideElement.style.display = '';
        setTimeout(() => {
          if (hideElement) hideElement.style.opacity = '1';
        }, 10);
      }
    }

    hide2Refs.current.forEach(element => {
      if (element) {
        element.style.transition = 'font-size 0.3s ease';
        element.style.fontSize = (width < 620) ? '11px' : '';
      }
    });
  };

  useEffect(() => {
    checkWidth();
    window.addEventListener('resize', checkWidth);

    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  // Function to add elements to the hide2Refs array
  const addToHide2Refs = (el: HTMLDivElement | null) => {
    if (el && !hide2Refs.current.includes(el)) {
      hide2Refs.current.push(el);
    }
  };

  return (
    <>
      <Head>
        <title>XDPXI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://xdpxi.vercel.app/icon.png" rel="icon" type="image/png"/>
        <link href="https://xdpxi.vercel.app/styles.css" rel="stylesheet"/>
      </Head>

      <Script
        src="https://kit.fontawesome.com/7ea2a77467.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <header className="element" role="banner">
        <h1>X D P X I</h1>
      </header>

      <main className="content-wrapper" role="main">
        <section aria-label="Main Content" className="section">
          {/* Main content goes here */}
        </section>
      </main>

      <header>
        <div className="footer-content">
          <div className="footer-column" id="hide1" ref={hide1Ref}>
            <h3>About</h3>
            <Image
              src="https://xdpxi.vercel.app/icon.png"
              alt="Site Icon"
              width={32}
              height={32}
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
                    <i aria-hidden="true" className="fa-solid fa-server"></i> XD&apos;s Servers
                  </Link>
                </li>
                <li>
                  <Link href="/servers/policy">
                    <i aria-hidden="true" className="fa-solid fa-book"></i> XD&apos;s Servers Policy
                  </Link>
                </li>
                <li>
                  <Link href="/license/mc">
                    <i aria-hidden="true" className="fa-solid fa-book"></i> XD&apos;s MC License
                  </Link>
                </li>
                <li>
                  <a href="https://xdpxi.betteruptime.com/" rel="noopener noreferrer" target="_blank">
                    <i aria-hidden="true" className="fa-solid fa-signal"></i> Status
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer-column" id="hide2" ref={addToHide2Refs}>
            <h3>Apps & Games</h3>
            <nav aria-label="External Links">
              <ul>
                <li>
                  <Link href="/teventure">
                    <i aria-hidden="true" className="fa-solid fa-gamepad"></i> Teventure
                  </Link>
                </li>
                <li>
                  <a href="https://bangbrave.vercel.app/" rel="noopener noreferrer" target="_blank">
                    <i aria-hidden="true" className="fa-solid fa-magnifying-glass"></i> Bang Brave
                  </a>
                </li>
                <li>
                  <a href="https://modrinth.com/plugin/xdlib" rel="noopener noreferrer" target="_blank">
                    <i aria-hidden="true" className="fa-solid fa-gear"></i> XD&apos;s Library
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
                  <a href="https://www.youtube.com/@xdpxi" rel="noopener noreferrer" target="_blank">
                    <i aria-hidden="true" className="fa-brands fa-youtube"></i> YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/xdpxi" rel="noopener noreferrer" target="_blank">
                    <i aria-hidden="true" className="fa-brands fa-twitch"></i> Twitch
                  </a>
                </li>
                <li>
                  <a href="https://kick.com/xdpxi" rel="noopener noreferrer" target="_blank">
                    <i aria-hidden="true" className="fa-brands fa-kickstarter-k"></i> Kick
                  </a>
                </li>
                <li>
                  <a href="https://xdpxi.itch.io/" rel="noopener noreferrer" target="_blank">
                    <i aria-hidden="true" className="fa-brands fa-itch-io"></i> Itch.io
                  </a>
                </li>
                <li>
                  <a href="https://github.com/XDPXI/" rel="noopener noreferrer" target="_blank">
                    <i aria-hidden="true" className="fa-brands fa-github"></i> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://modrinth.com/user/XDPXI" rel="noopener noreferrer" target="_blank">
                    <i aria-hidden="true" className="fa-solid fa-puzzle-piece"></i> Modrinth
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}