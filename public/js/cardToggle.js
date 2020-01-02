const cardName1 = document.querySelector(".members__name-1"),
  cardName2 = document.querySelector(".members__name-2"),
  cardName3 = document.querySelector(".members__name-3"),
  cardName4 = document.querySelector(".members__name-4"),
  cardDetail1 = document.querySelector(".members__detail-1"),
  cardDetail2 = document.querySelector(".members__detail-2"),
  cardDetail3 = document.querySelector(".members__detail-3"),
  cardDetail4 = document.querySelector(".members__detail-4"),
  cardImg1 = document.querySelector(".members__img-1"),
  cardImg2 = document.querySelector(".members__img-2"),
  cardImg3 = document.querySelector(".members__img-3"),
  cardImg4 = document.querySelector(".members__img-4"),
  eye1 = document.querySelector(".eye-1"),
  eye2 = document.querySelector(".eye-2"),
  eye3 = document.querySelector(".eye-3"),
  eye4 = document.querySelector(".eye-4");

function cardToggle(name) {
  // Check browser width, if greater than 900 dont execute
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (width <= 900) {
    if (name === "haruna") {
      // Add transition class to card
      cardName1.classList.add("card-name-transition");
      cardDetail1.classList.add("card-detail-transition");
      cardImg1.classList.add("card-img-1");
      eye1.classList.add("eye-fade-out");

      // Remove transition class from other cards
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

    if (name === "mami") {
      // Add transition class to card
      cardName2.classList.add("card-name-transition");
      cardDetail2.classList.add("card-detail-transition");
      cardImg2.classList.add("card-img-2");
      eye2.classList.add("eye-fade-out");

      // Remove transition class from other cards
      cardName1.classList.remove("card-name-transition");
      cardDetail1.classList.remove("card-detail-transition");
      cardImg1.classList.remove("card-img-1");
      eye1.classList.remove("eye-fade-out");

      cardName3.classList.remove("card-name-transition");
      cardDetail3.classList.remove("card-detail-transition");
      cardImg3.classList.remove("card-img-3");
      eye3.classList.remove("eye-fade-out");

      cardName4.classList.remove("card-name-transition");
      cardDetail4.classList.remove("card-detail-transition");
      cardImg4.classList.remove("card-img-4");
      eye4.classList.remove("eye-fade-out");
    }

    if (name === "rina") {
      // Add transition class to card
      cardName3.classList.add("card-name-transition");
      cardDetail3.classList.add("card-detail-transition");
      cardImg3.classList.add("card-img-3");
      eye3.classList.add("eye-fade-out");

      // Remove transition class from other cards
      cardName1.classList.remove("card-name-transition");
      cardDetail1.classList.remove("card-detail-transition");
      cardImg1.classList.remove("card-img-1");
      eye1.classList.remove("eye-fade-out");

      cardName2.classList.remove("card-name-transition");
      cardDetail2.classList.remove("card-detail-transition");
      cardImg2.classList.remove("card-img-2");
      eye2.classList.remove("eye-fade-out");

      cardName4.classList.remove("card-name-transition");
      cardDetail4.classList.remove("card-detail-transition");
      cardImg4.classList.remove("card-img-4");
      eye4.classList.remove("eye-fade-out");
    }

    if (name === "tomo") {
      // Add transition class to card
      cardName4.classList.add("card-name-transition");
      cardDetail4.classList.add("card-detail-transition");
      cardImg4.classList.add("card-img-4");
      eye4.classList.add("eye-fade-out");

      // Remove transition class from other cards
      cardName1.classList.remove("card-name-transition");
      cardDetail1.classList.remove("card-detail-transition");
      cardImg1.classList.remove("card-img-1");
      eye1.classList.remove("eye-fade-out");

      cardName3.classList.remove("card-name-transition");
      cardDetail3.classList.remove("card-detail-transition");
      cardImg3.classList.remove("card-img-3");
      eye3.classList.remove("eye-fade-out");

      cardName2.classList.remove("card-name-transition");
      cardDetail2.classList.remove("card-detail-transition");
      cardImg2.classList.remove("card-img-2");
      eye2.classList.remove("eye-fade-out");
    }
  }
}
