let username = document.querySelector(".username");
username.placeholder="Username";
let pass = document.querySelector(".pass");

username.addEventListener("click", (event) => {
  event.target.style.outline = "none";
});

pass.addEventListener("click", (event) => {
  event.target.style.outline = "none";
});
