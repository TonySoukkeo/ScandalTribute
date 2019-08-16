const cardName = document.querySelector(".members__name"),
  cardDetail = document.querySelector(".members__detail"),
  cardImg1 = document.querySelector(".members__img-1"),
  cardImg2 = document.querySelector(".members__img-2"),
  cardImg3 = document.querySelector(".members__img-3"),
  cardImg4 = document.querySelector(".members__img-4"),
  memberCard = document.querySelector(".members__card");

function cardToggle() {
  // Check if any card has any one transition property
  if (cardImg1.classList.contains("card-name-transition")) {
    // remove all transition properties
    cardImg1.classList.remove("card-name-transition", "card-detail-transition");
  }

  if (cardImg2.classList.contains("card-name-transition")) {
    // remove all transition properties
    cardImg2.classList.remove("card-name-transition", "card-detail-transition");
  }

  if (cardImg3.classList.contains("card-name-transition")) {
    // remove all transition properties
    cardImg3.classList.remove("card-name-transition", "card-detail-transition");
  }

  if (cardImg4.classList.contains("card-name-transition")) {
    // remove all transition properties
    cardImg4.classList.remove("card-name-transition", "card-detail-transition");
  }

  // Add transition class to card
  memberCard.classList.add("card-name-transition", "card-detail-transition");
}
