var cards = document.querySelectorAll(".card");

cards[0].addEventListener("mouseover", () => {
    cards[0].childNodes[1].classList.toggle("show");
    cards[0].childNodes[1].classList.toggle("hide");
    cards[0].childNodes[2].classList.toggle("hide");
    cards[0].childNodes[2].classList.toggle("show");
});

cards[1].addEventListener("mouseover", () => {
    cards[1].childNodes[1].classList.toggle("show");
    cards[1].childNodes[1].classList.toggle("hide");
    cards[1].childNodes[2].classList.toggle("hide");
    cards[1].childNodes[2].classList.toggle("show");
});

cards[2].addEventListener("mouseover", () => {
    cards[2].childNodes[1].classList.toggle("show");
    cards[2].childNodes[1].classList.toggle("hide");
    cards[2].childNodes[2].classList.toggle("hide");
    cards[2].childNodes[2].classList.toggle("show");
});