// ADD EVENT LISTENER TO DOM

window.addEventListener("load", () => {
  const img = document.querySelectorAll("img");

  img.forEach(x => {
    if (x.alt === "UpDog logo") {
      x.remove();
    }
  });
});
