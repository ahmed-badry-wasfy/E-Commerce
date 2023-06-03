// open icone nave

let navPar = document.querySelector(".ul .container ul");
let userIconeO = document.getElementById("user");
let clickIconT = document.querySelector(".fa-arrow-down-wide-short");

// add class name

clickIconT.onclick = navParToggle;

function navParToggle() {
  navPar.classList.toggle("open");
}

let navfi = document.getElementById("ficx");

window.onscroll = function () {
  if (window.scrollY >= 500) {
    navfi.classList.add("ficxx");
  } else {
    navfi.classList.remove("ficxx");
  }
};

if (localStorage.getItem("user") == null) {
  userIconeO.style.display = "none";
} else {
  userIconeO.style.display = "";
}
