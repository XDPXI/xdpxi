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

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsCollapsing(false);
      setIsExpanded(true);
    };

    const handleRouteChangeComplete = () => {
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
  }, [router, side]);

  return (
    <div
      className={`colorBarsContainer ${side} ${isExpanded ? "expanded" : ""} ${isCollapsing ? "collapsing" : ""}`}
    >
      {COLORS.map((color, index) => (
        <div
          key={index}
          className="colorBar"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
