"use strtict";

const body = document.querySelector("body");
const narotoBtns = document.querySelector(".naruto-btns");
const onePieceBtns = document.querySelector(".onePiece-btns");
const hunterBtns = document.querySelector(".hunterXhuntert-btns");

const naruto = () => {
  body.style.backgroundImage =
    "url('https://wallpapers.com/images/hd/naruto-symbol-itachi-logo-dcfydgnlebwsq9si.jpg')";
  narotoBtns.style.visibility = "visible";
  onePieceBtns.style.visibility = "hidden";
  hunterBtns.style.visibility = "hidden";
};
const onePiece = () => {
  body.style.backgroundImage =
    "url('https://wallpapercave.com/wp/wp2027199.jpg')";
  onePieceBtns.style.visibility = "visible";
  narotoBtns.style.visibility = "hidden";
  hunterBtns.style.visibility = "hidden";
};
const hunterXhuntert = () => {
  body.style.backgroundImage =
    "url('https://wallpaperaccess.com/full/4401839.jpg')";
  narotoBtns.style.visibility = "hidden";
  hunterBtns.style.visibility = "visible";
  onePieceBtns.style.visibility = "hidden";
};

body.addEventListener("click", (event) => {
  if (event.target.classList.contains("n-first")) {
    body.style.backgroundImage =
      "url('https://cdn.wallpapersafari.com/5/56/YFQf86.jpg')";
  } else if (event.target.classList.contains("n-second")) {
    body.style.backgroundImage =
      "url('https://images4.alphacoders.com/748/748034.png')";
  } else if (event.target.classList.contains("n-therd")) {
    body.style.backgroundImage =
      "url('https://cdn.wallpapersafari.com/82/56/SeJOdU.jpg')";
  }
  if (event.target.classList.contains("o-first")) {
    body.style.backgroundImage =
      "url('https://wallpaperaccess.com/full/3794456.jpg')";
  } else if (event.target.classList.contains("o-second")) {
    body.style.backgroundImage =
      "url('https://wallpapercave.com/wp/wp2382501.jpg')";
  } else if (event.target.classList.contains("o-therd")) {
    body.style.backgroundImage =
      "url('https://www.teahub.io/photos/full/146-1463316_one-piece-pc-sanji.jpg')";
  }
  if (event.target.classList.contains("h-first")) {
    body.style.backgroundImage =
      "url('https://wallpapercave.com/wp/wp2230730.jpg')";
  } else if (event.target.classList.contains("h-second")) {
    body.style.backgroundImage =
      "url('https://i.pinimg.com/736x/fb/76/02/fb7602a0513f102cfd045b117bd0280d.jpg')";
  } else if (event.target.classList.contains("h-therd")) {
    body.style.backgroundImage =
      "url('https://images4.alphacoders.com/637/637345.jpg')";
  }
});
