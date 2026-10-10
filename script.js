
(() => {
  const body = document.body;
  const portraitButton = document.getElementById("portraitButton");
  const enterButton = document.getElementById("enterButton");
  const returnButton = document.getElementById("returnButton");
  const buttonLabel = document.getElementById("buttonLabel");
  const worldStatus = document.getElementById("worldStatus");

  let upsideDown = false;
  let transitioning = false;

  function crossDimension() {
    if (transitioning) return;

    transitioning = true;
    body.classList.add("transitioning");

    window.setTimeout(() => {
      upsideDown = !upsideDown;
      body.classList.toggle("upside-down", upsideDown);
      body.classList.remove("transitioning");

      portraitButton.setAttribute("aria-pressed", String(upsideDown));
      buttonLabel.textContent = upsideDown
        ? "RESTORE REALITY"
        : "OPEN THE GATE";

      worldStatus.textContent = upsideDown
        ? "REALITY STATUS: BREACHED"
        : "REALITY STATUS: STABLE";

      document.title = upsideDown
        ? "THE UPSIDE DOWN // GANESH"
        : "GANESH // HAWKINS ARCHIVES";

      transitioning = false;
    }, 750);
  }

  portraitButton.addEventListener("click", crossDimension);
  enterButton.addEventListener("click", crossDimension);
  returnButton.addEventListener("click", () => {
    if (upsideDown) crossDimension();
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && upsideDown && !transitioning) {
      crossDimension();
    }
  });
})();
