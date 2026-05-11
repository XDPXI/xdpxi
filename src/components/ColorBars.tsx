import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const COLORS = [
  "#f26f70",
  "#faa75d",
  "#fdf27e",
  "#94cf9a",
  "#6c84c2",
  "#a782bb",
];

export default function ColorBars() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [side, setSide] = useState<"left" | "right">("left");
  const [isHovering, setIsHovering] = useState(false);
  const [transitionsEnabled, setTransitionsEnabled] = useState(true);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      if (!transitionsEnabled) return;
      setIsCollapsing(false);
      setIsExpanded(true);
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
      {COLORS.map((color, index) => (
        <div
          key={index}
          className="colorBar"
          style={{ backgroundColor: color }}
        />
      ))}
      <div className={`colorBarsText ${isHovering ? "visible" : ""}`}>
        Click me to toggle page transitions
      </div>
    </div>
  );
}
