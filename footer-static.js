document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Fetch and inject the CSS
        const cssResponse = await fetch("https://xdpxi.vercel.app/footer.css");
        if (!cssResponse.ok) throw new Error("Failed to load footer.css");
        const cssContent = await cssResponse.text();
        const style = document.createElement("style");
        style.textContent = cssContent;
        document.head.appendChild(style);

        // Fetch and inject the HTML
        const htmlResponse = await fetch("https://xdpxi.vercel.app/footer-static.html");
        if (!htmlResponse.ok) throw new Error("Failed to load footer.html");
        const htmlContent = await htmlResponse.text();
        document.body.insertAdjacentHTML("beforeend", htmlContent);
    } catch (error) {
        console.error("Error loading footer:", error);
    }
});