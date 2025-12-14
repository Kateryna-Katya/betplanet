document.addEventListener("DOMContentLoaded", () => {
    const demoBtn = document.querySelector(".demo-btn");
    const iframe = document.getElementById("gameIframe");
    const closeBtn = document.getElementById("closeIframeBtn");
  
    if (demoBtn && iframe && closeBtn) {
      demoBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const gameUrl = demoBtn.getAttribute("data-game-url");
  
        iframe.src = gameUrl;
        iframe.style.display = "block";
        closeBtn.style.display = "flex";
      });
  
      closeBtn.addEventListener("click", () => {
        iframe.style.display = "none";
        closeBtn.style.display = "none";
        iframe.src = "";
      });
    }
  });