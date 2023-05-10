let installed = false;
var i = 0;
function onPlay() {
  alert(
    "Game is playing. Dont you see it? (no game will ever launch but this is the end of our prototype and project scope)"
  );
}

function setLoadScreen(imgLink) {
  document.getElementById("loadScreen").src = imgLink;
}

function setTitle(title) {
  var titleID = document.getElementById("game_title");
  console.log(titleID);
  titleID.innerHTML = title;
}

function goBackGame() {
  const ButtonText = "PLAY NOW";
  var titleID = document.getElementById("game_title");
  window.location.href = "PaymentPage.html?gameName=" + titleID.innerHTML;
}
//used to grab page parameters

var args = new URLSearchParams(window.location.search);
var coverImg = args.get("coverImg");
var title = args.get("title");

setLoadScreen(coverImg);
setTitle(title);

// set button listenser
let homeButton = document.querySelector("#home");
let backButton = document.querySelector("#back");
let playButton = document.querySelector("#msg");

homeButton.addEventListener("click", () => {
  window.location.href = "./index.html";
});

backButton.addEventListener("click", () => {
  goBackGame();
});

playButton.addEventListener("click", () => {
  onPlay();
});
