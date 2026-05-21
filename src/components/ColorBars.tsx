import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const COLOR_BARS = {
  rainbow: {
    name: "Rainbow",
    colors: ["#f26f70", "#faa75d", "#fdf27e", "#94cf9a", "#6c84c2", "#a782bb"],
  },
  trans: {
    name: "Trans",
    colors: ["#5bcefa", "#f5a9d0", "#ffffff", "#f5a9d0", "#5bcefa"],
  },
  bi: {
    name: "Bi",
    colors: ["#d0036d", "#d0036d", "#964d92", "#0038a8", "#0038a8"],
  },
  lesbian: {
    name: "Lesbian",
    colors: ["#cd2500", "#ff9654", "#ffffff", "#d162a4", "#9b005c"],
  },
  gay: {
    name: "Gay",
    colors: [
      "#089276",
      "#2bd0ae",
      "#9de9c3",
      "#f1f0fe",
      "#81b0e4",
      "#564fd0",
      "#431e7e",
    ],
  },
  femboy: {
    name: "Femboy",
    colors: [
      "#d260a5",
      "#e4afcd",
      "#ffffff",
      "#57cef8",
      "#ffffff",
      "#e4afcd",
      "#d260a5",
    ],
  },
  asexual: {
    name: "Asexual",
    colors: ["#000000", "#a3a3a3", "#ffffff", "#810081"],
  },
  demisexual: {
    name: "Demisexual",
    colors: ["#3e3e3e", "#8c8c8c", "#d4d4d4", "#810081", "#3e3e3e"],
  },
  nonbinary: {
    name: "Non-binary",
    colors: ["#ffff00", "#ffffff", "#9c4dff", "#000000"],
  },
  pansexual: {
    name: "Pansexual",
    colors: ["#ff218c", "#ffd800", "#21b1ff"],
  },
  genderfluid: {
    name: "Genderfluid",
    colors: ["#ff75a2", "#ffffff", "#be18d6", "#000000", "#333ebd"],
  },
  agender: {
    name: "Agender",
    colors: [
      "#000000",
      "#b9b9b9",
      "#ffffff",
      "#b8f483",
      "#ffffff",
      "#b9b9b9",
      "#000000",
    ],
  },
  aromantic: {
    name: "Aromantic",
    colors: ["#3aa63f", "#a8d47a", "#ffffff", "#ababab", "#000000"],
  },
  polysexual: {
    name: "Polysexual",
    colors: ["#f61cb9", "#07d569", "#1c92f6"],
  },
  omnisexual: {
    name: "Omnisexual",
    colors: ["#ff9ccd", "#ff53bf", "#1f1f1f", "#675fff", "#8ea6ff"],
  },
  genderqueer: {
    name: "Genderqueer",
    colors: ["#b57edc", "#ffffff", "#4a8123"],
  },
  intersex: {
    name: "Intersex",
    colors: ["#ffd800", "#ffd800", "#7a01aa", "#ffd800", "#ffd800"],
  },
  bear: {
    name: "Bear",
    colors: ["#623804", "#d56300", "#fedd63", "#f6f6f6", "#555555", "#000000"],
  },
  demiboy: {
    name: "Demiboy",
    colors: [
      "#7f7f7f",
      "#c4c4c4",
      "#9ad9eb",
      "#ffffff",
      "#9ad9eb",
      "#c4c4c4",
      "#7f7f7f",
    ],
  },
  demigirl: {
    name: "Demigirl",
    colors: [
      "#7f7f7f",
      "#c4c4c4",
      "#f7b1cc",
      "#ffffff",
      "#f7b1cc",
      "#c4c4c4",
      "#7f7f7f",
    ],
  },
  bigender: {
    name: "Bigender",
    colors: ["#c479a2", "#eda5cd", "#d6c7e8", "#ffffff", "#9ac7e8", "#6d82d1"],
  },
  abrosexual: {
    name: "Abrosexual",
    colors: ["#46d294", "#a8e4a0", "#ffffff", "#f78bb3", "#ee1766"],
  },
  aroace: {
    name: "AroAce",
    colors: ["#e28c00", "#eccd00", "#ffffff", "#62aedc", "#203856"],
  },
};

const COLOR_BARS_KEYS = Object.keys(COLOR_BARS);

function getWeightedRandomFlag(): string {
  const lastSeenKey = "colorBarsLastSeen";
  const lastSeen = JSON.parse(localStorage.getItem(lastSeenKey) || "{}");
  const now = Date.now();

  const weights: Record<string, number> = {};
  let totalWeight = 0;

  for (const flag of COLOR_BARS_KEYS) {
    const timeSinceLastSeen = now - (lastSeen[flag] || 0);
    const weight = Math.pow(timeSinceLastSeen / 1000 + 1, 1.5);
    weights[flag] = weight;
    totalWeight += weight;
  }

  const percentages: Record<string, string> = {};
  for (const flag of COLOR_BARS_KEYS) {
    const percentage = ((weights[flag] / totalWeight) * 100).toFixed(2);
    percentages[flag] = percentage;
  }

  let random = Math.random() * totalWeight;
  for (const flag of COLOR_BARS_KEYS) {
    random -= weights[flag];
    if (random <= 0) {
      lastSeen[flag] = now;
      localStorage.setItem(lastSeenKey, JSON.stringify(lastSeen));
      return flag;
    }
  }

  return COLOR_BARS_KEYS[0];
}

export default function ColorBars() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [side, setSide] = useState<"left" | "right">("left");
  const [isHovering, setIsHovering] = useState(false);
  const [transitionsEnabled, setTransitionsEnabled] = useState(true);
  const [selectedBars, setselectedBars] = useState<string>("rainbow");

  useEffect(() => {
    const randomBars = getWeightedRandomFlag();
    setselectedBars(randomBars);
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      if (!transitionsEnabled) return;
      setIsCollapsing(false);
      setIsExpanded(true);
      setTimeout(() => {
        const randomBars = getWeightedRandomFlag();
        setselectedBars(randomBars);
      }, 175);
    };

    const handleRouteChangeComplete = () => {
      if (!transitionsEnabled) return;
      setIsCollapsing(true);
      setTimeout(() => {
        setSide(side === "left" ? "right" : "left");
        setIsExpanded(false);
        setIsCollapsing(false);
      }, 350);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router, side, transitionsEnabled]);

  const isAnimating = isExpanded || isCollapsing;

  return (
    <div
      className={`colorBarsContainer ${side} ${isExpanded ? "expanded" : ""} ${isCollapsing ? "collapsing" : ""} ${isHovering && !isAnimating ? "hovering" : ""} ${!transitionsEnabled ? "disabled" : ""}`}
      onMouseEnter={() => !isAnimating && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => !isAnimating && setTransitionsEnabled(!transitionsEnabled)}
    >
      {COLOR_BARS[selectedBars as keyof typeof COLOR_BARS].colors.map(
        (color, index) => (
          <div
            key={index}
            className="colorBar"
            style={{ backgroundColor: color }}
          />
        ),
      )}
      <div className={`colorBarsText ${isHovering ? "visible" : ""}`}>
        Click me to toggle page transitions
      </div>
    </div>
  );
}
