const epicMix = [
  "Time to Pretend",
  "O-o-oh Child",
  "Wish You Were Here",
  "Heroes",
  "I Put a Spell on You",
  "Call Me",
  "Paper Planes",
  "Jolene",
  "You Don't Own Me",
  "Fast Car",
  "Run the World (Girls)",
  "Superstition"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
});
