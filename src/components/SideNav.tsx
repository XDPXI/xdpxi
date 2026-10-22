import Link from "next/link";

export default function SideNav() {
  return (
    <aside className="side side-left" aria-label="Site navigation">
      <nav className="box nav-box" aria-label="Pages">
        <h3>Pages</h3>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/#blogs">Blogs</Link>
          </li>
          <li>
            <a
              href="https://docs.xdpxi.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </li>
          <li>
            <a
              href="https://git.xdpxi.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositories
            </a>
          </li>
          <li>
            <a
              href="https://maven.xdpxi.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maven
            </a>
          </li>
          <li>
            <a
              href="https://status.xdpxi.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Status
            </a>
          </li>
        </ul>
      </nav>

      <nav className="box affiliate-box" aria-label="Affiliates">
        <h3>Affiliates</h3>
        <ul>
          <li>
            <a href="/shopify" target="_blank" rel="noopener noreferrer">
              Shopify
            </a>
          </li>
          <li>
            <a href="/neyhost" target="_blank" rel="noopener noreferrer">
              NeyHost
            </a>
          </li>
        </ul>
      </nav>

      <section className="box stats-box" aria-label="Site stats">
        <h3>Stats</h3>
        <dl>
          <dt>Location</dt>
          <dd>NSW, Australia</dd>
          <dt>Online since</dt>
          <dd>2022</dd>
          <dt>Public repos</dt>
          <dd>21</dd>
          <dt>Mod downloads</dt>
          <dd>456,000+</dd>
        </dl>
      </section>

      <div className="box scrap-box">
        <p className="scribble">
          thanks for visiting!
          <img style={{ marginLeft: "8px" }} src="/imgs/heart.svg" alt="" width={14} height={12} />
        </p>
      </div>
    </aside>
  );
}
