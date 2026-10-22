import { Html, Head, Main, NextScript } from "next/document";

const DESIGN_KEY = "xdpxi-design";

// Runs before first paint: activates the saved design (default: old).
const applyDesign = `(function(){var d="old";try{var s=localStorage.getItem("${DESIGN_KEY}");if(s==="modern"||s==="old")d=s}catch(e){}
document.documentElement.setAttribute("data-design",d);
var o=document.getElementById("css-old"),m=document.getElementById("css-modern");
if(o&&m){o.media=d==="old"?"all":"not all";m.media=d==="modern"?"all":"not all"}})();`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link id="css-old" rel="stylesheet" href="/styles/old.css" />
        <link
          id="css-modern"
          rel="stylesheet"
          href="/styles/modern.css"
          media="not all"
        />
        <script dangerouslySetInnerHTML={{ __html: applyDesign }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
