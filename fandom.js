let games = document.querySelector(".film-info");
let p = document.querySelector(".inside-p");
let gamesSecond = document.querySelector(".film-infoo");
let gamesThird = document.querySelector(".film-infoo-third");
let gamesFourth = document.querySelector(".film-infoo-fourth");
let gamesFifth = document.querySelector(".film-infoo-fifth");
let gamesSixth = document.querySelector(".film-infoo-sixth");
let gamesSeventh = document.querySelector(".film-infoo-seventh");
let gamesEight = document.querySelector(".film-infoo-eight");

games.addEventListener("mouseover", (event) => {
  games.style.position = "relative";
  games.style.bottom = "30px";
  games.style.transition = "0.5s";
});
games.addEventListener("mouseout", (event) => {
  games.style.position = "relative";
  games.style.bottom = "0px";
  games.style.transition = "0.5s";
});

gamesSecond.addEventListener("mouseover", (event) => {
  gamesSecond.style.position = "relative";
  gamesSecond.style.bottom = "30px";
  gamesSecond.style.transition = "0.7s";
});
gamesSecond.addEventListener("mouseout", (event) => {
  gamesSecond.style.position = "relative";
  gamesSecond.style.bottom = "0px";
  games.style.transition = "0.7s";
});

gamesThird.addEventListener("mouseover", (event) => {
  gamesThird.style.position = "relative";
  gamesThird.style.bottom = "30px";
  gamesThird.style.transition = "0.7s";
});
gamesThird.addEventListener("mouseout", (event) => {
  gamesThird.style.position = "relative";
  gamesThird.style.bottom = "0px";
  gamesThird.style.transition = "0.7s";
});

gamesFourth.addEventListener("mouseover", (event) => {
  gamesFourth.style.position = "relative";
  gamesFourth.style.bottom = "30px";
  gamesFourth.style.transition = "0.5s";
});
gamesFourth.addEventListener("mouseout", (event) => {
  gamesFourth.style.position = "relative";
  gamesFourth.style.bottom = "0px";
  gamesFourth.style.transition = "0.5s";
});

gamesFifth.addEventListener("mouseover", (event) => {
  gamesFifth.style.position = "relative";
  gamesFifth.style.bottom = "30px";
  gamesFifth.style.transition = "0.5s";
});
gamesFifth.addEventListener("mouseout", (event) => {
  gamesFifth.style.position = "relative";
  gamesFifth.style.bottom = "0px";
  gamesFifth.style.transition = "0.5s";
});

gamesSixth.addEventListener("mouseover", (event) => {
  gamesSixth.style.position = "relative";
  gamesSixth.style.bottom = "30px";
  gamesSixth.style.transition = "0.5s";
});
gamesSixth.addEventListener("mouseout", (event) => {
  gamesSixth.style.position = "relative";
  gamesSixth.style.bottom = "0px";
  gamesSixth.style.transition = "0.5s";
});

gamesSeventh.addEventListener("mouseover", (event) => {
  gamesSeventh.style.position = "relative";
  gamesSeventh.style.bottom = "30px";
  gamesSeventh.style.transition = "0.5s";
});
gamesSeventh.addEventListener("mouseout", (event) => {
  gamesSeventh.style.position = "relative";
  gamesSeventh.style.bottom = "0px";
  gamesSeventh.style.transition = "0.5s";
});

gamesEight.addEventListener("mouseover", (event) => {
  gamesEight.style.position = "relative";
  gamesEight.style.bottom = "30px";
  gamesEight.style.transition = "0.5s";
});
gamesEight.addEventListener("mouseout", (event) => {
  gamesEight.style.position = "relative";
  gamesEight.style.bottom = "0px";
  gamesEight.style.transition = "0.5s";
});

let view = document.querySelector(".view");
let i = document.querySelector(".panel-head i");
view.addEventListener("mouseover", () => {
  i.style.marginLeft = "20px";
  i.style.transition = "0.5s";
});
view.addEventListener("mouseout", () => {
  i.style.marginLeft = "10px";
});

let harry = document.querySelector(".harry-img");

harry.addEventListener("mouseover", () => {
  harry.style.position = "relative";
  harry.style.bottom = "10px";
  harry.style.transition = "0.6s";
});
harry.addEventListener("mouseout", () => {
  harry.style.position = "relative";
  harry.style.bottom = "0px";
});

let matrix = document.querySelector(".matrix img");

matrix.addEventListener("mouseover", () => {
  matrix.style.position = "relative";
  matrix.style.bottom = "10px";
  matrix.style.transition = "0.6s";
});
matrix.addEventListener("mouseout", () => {
  matrix.style.position = "relative";
  matrix.style.bottom = "0px";
});

let harley = document.querySelector(".harley-quin img");

harley.addEventListener("mouseover", () => {
  harley.style.position = "relative";
  harley.style.bottom = "10px";
  harley.style.transition = "0.6s";
});
harley.addEventListener("mouseout", () => {
  harley.style.position = "relative";
  harley.style.bottom = "0px";
});

let snake = document.querySelector(".snake-eyes img");

snake.addEventListener("mouseover", () => {
  snake.style.position = "relative";
  snake.style.bottom = "10px";
  snake.style.transition = "0.6s";
});
snake.addEventListener("mouseout", () => {
  snake.style.position = "relative";
  snake.style.bottom = "0px";
});

let princesses = document.querySelector(".princesses img");

princesses.addEventListener("mouseover", () => {
  princesses.style.position = "relative";
  princesses.style.bottom = "10px";
  princesses.style.transition = "0.6s";
});
princesses.addEventListener("mouseout", () => {
  princesses.style.position = "relative";
  princesses.style.bottom = "0px";
});

let godzilla = document.querySelector(".godzilla img");

godzilla.addEventListener("mouseover", () => {
  godzilla.style.position = "relative";
  godzilla.style.bottom = "10px";
  godzilla.style.transition = "0.6s";
});
godzilla.addEventListener("mouseout", () => {
  godzilla.style.position = "relative";
  godzilla.style.bottom = "0px";
});

let deadpool = document.querySelector(".deadpool");
let gameSpot = document.querySelector(".game-spot");

deadpool.addEventListener("mouseover", () => {
  gameSpot.style.backgroundColor = "#520044";
  gameSpot.style.transition = "0.6s"
});

deadpool.addEventListener("mouseout", () => {
  gameSpot.style.backgroundColor = "#fa005a";
});

let strange = document.querySelector(".strange");
let gameSpotSecond = document.querySelector(".game-spot-second");

strange.addEventListener("mouseover", () => {
  gameSpotSecond.style.backgroundColor = "#520044";
  gameSpotSecond.style.transition = "0.6s"
});

strange.addEventListener("mouseout", () => {
  gameSpotSecond.style.backgroundColor = "#fa005a";
});

let hide = document.querySelector(".hide-part");
let user = document.querySelector(".user");
let registerButton = document.querySelector(".register-button");
let wikis = document.querySelector(".wikis");

user.addEventListener("mouseover" , ()=>{
  hide.style.display = "flex";
  hide.style.flexDirection = "column";
  hide.style.alignItems = "center";
  hide.style.justifyContent = "center";
});

hide.addEventListener("mouseleave" , (event)=>{
  hide.style.display = "none";
});

wikis.addEventListener( "mouseover", ()=>{
  hide.style.display = "none";
} )