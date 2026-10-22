import { useEffect, useState } from "react";

type Design = "old" | "modern";

const KEY = "xdpxi-design";
export const CHOOSE_EVENT = "xdpxi:choose-design";

function applyDesign(design: Design) {
  document.documentElement.setAttribute("data-design", design);
  const old = document.getElementById("css-old") as HTMLLinkElement | null;
  const modern = document.getElementById("css-modern") as HTMLLinkElement | null;
  if (old) old.media = design === "old" ? "all" : "not all";
  if (modern) modern.media = design === "modern" ? "all" : "not all";
}

function saved(): Design | null {
  try {
    const value = localStorage.getItem(KEY);
    return value === "old" || value === "modern" ? value : null;
  } catch {
    return null;
  }
}

export default function DesignPicker() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const current = saved();
    if (!current) {
      setOpen(true);
    }
    const reopen = () => setOpen(true);
    window.addEventListener(CHOOSE_EVENT, reopen);
    return () => window.removeEventListener(CHOOSE_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (design: Design) => {
    try {
      localStorage.setItem(KEY, design);
    } catch {}
    applyDesign(design);
    setOpen(false);
  };

  const preview = (design: Design) => () => applyDesign(design);

  return (
    <div className={"design-picker"} role="dialog" aria-labelledby="design-title">
      <div className={"design-picker-panel"}>
        <h2 id="design-title" className={"design-picker-title"}>
          What design do you want to use?
        </h2>
        <p className={"design-picker-hint"}>Hover a button to preview it.</p>
        <div className={"design-picker-choices"}>
          {(["modern", "old"] as const).map((design) => (
            <button
              key={design}
              type="button"
              className={
                design === "old"
                  ? "design-picker-choice design-picker-choice-old"
                  : "design-picker-choice"
              }
              onMouseEnter={preview(design)}
              onFocus={preview(design)}
              onClick={() => choose(design)}
            >
              {design === "modern" ? "Modern" : "Old"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
