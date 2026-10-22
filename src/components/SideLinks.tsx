const UPDATES = [
  { date: "2026-10-22", text: "Add new design!" },
  { date: "2026-08-15", text: "Privacy policy added" },
  { date: "2026-05-01", text: "Upgrading the servers " },
  { date: "2026-02-08", text: "My own cloud service." },
];

const ACCOUNTS: { name: string; href: string }[] = [
  { name: "YouTube", href: "https://youtube.com/@xdpxi2" },
  { name: "TikTok", href: "https://www.tiktok.com/@xdpxi" },
  { name: "Twitch", href: "https://twitch.tv/xdpxi" },
  { name: "Kick", href: "https://kick.com/xdpxi" },
  { name: "Itch.io", href: "https://xdpxi.itch.io" },
  { name: "GitHub", href: "https://github.com/xdpxi" },
  { name: "Modrinth", href: "https://modrinth.com/user/xdpxi" },
  { name: "Discord", href: "https://discord.gg/qRm6yYDswK" },
  { name: "Ollama", href: "https://ollama.com/XDPXI" },
];

export default function SideLinks() {
  return (
    <aside className="side side-right" aria-label="Updates and links">
      <section className="box updates-box">
        <h3>Updates</h3>
        <ul>
          {UPDATES.map((u) => (
            <li key={u.date + u.text}>
              <b>{u.date}</b>
              <br />
              {u.text}
            </li>
          ))}
        </ul>
      </section>

      <nav className="box blogroll-box" aria-label="Accounts">
        <h3>Find me on</h3>
        <ul>
          {ACCOUNTS.map((a) => (
            <li key={a.name}>
              <a href={a.href} target="_blank" rel="noopener noreferrer">
                {a.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
