const epicMix = [
  "Sunny Side Up",
  "Pocker Face",
  "HandClap",
  "Telephone",
  "1 of 1",
  "Get Lucky",
  "Paper Planes",
  "Good Time",
  "Robot Rock",
  "Jam Jam",
  "Russian Roulette",
  "Mr. Saxobeat"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix);
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function (song,index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};