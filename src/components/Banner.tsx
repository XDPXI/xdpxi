import Link from "next/link";

export default function Banner() {
  return (
    <header className="banner" role="banner">
      <Link href="/" className="banner-logo" aria-label="XDPXI home">
        <span className="banner-x">xd</span>
        <span className="banner-p">pxi</span>
        <span className="banner-dot">.dev</span>
      </Link>
      <p className="banner-tag">~ a little corner of the web ~</p>
      <div className="banner-ticker" aria-hidden="true">
        <span>
          *** welcome to the personal homepage of xdpxi *** hand-coded in
          Australia *** 14 minecraft projects on modrinth, 450,000+ downloads
          *** now building: XD&apos;s Code, SwiftMC, XD&apos;s Cloud, XDOS ***
          sign the guestbook! ***
        </span>
      </div>
    </header>
  );
}
