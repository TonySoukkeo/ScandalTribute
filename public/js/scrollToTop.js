const scrollBtn = document.querySelector(".scroll-to-top");
scrollBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({ top: 0, behaviour: "smooth" });
}
