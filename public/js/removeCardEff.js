function removeCardEff() {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (width > 900) {
    // Remove card transitions

    cardName1.classList.remove("card-name-transition");
    cardDetail1.classList.remove("card-detail-transition");
    cardImg1.classList.remove("card-img-1");
    eye1.classList.remove("eye-fade-out");

    cardName2.classList.remove("card-name-transition");
    cardDetail2.classList.remove("card-detail-transition");
    cardImg2.classList.remove("card-img-2");
    eye2.classList.remove("eye-fade-out");

    cardName3.classList.remove("card-name-transition");
    cardDetail3.classList.remove("card-detail-transition");
    cardImg3.classList.remove("card-img-3");
    eye3.classList.remove("eye-fade-out");

    cardName4.classList.remove("card-name-transition");
    cardDetail4.classList.remove("card-detail-transition");
    cardImg4.classList.remove("card-img-4");
    eye4.classList.remove("eye-fade-out");
  }
}
