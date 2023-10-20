var img = document.getElementById("img-slider");

var slides = [
  "./images/woman-1.jpg",
  "./images/woman-2.jpg",
  "./images/woman-3.jpg",
  "./images/woman-4.jpg",
];

var start = 0;

function slider() {
  if (start < slides.length) {
    start = start + 1;
  } else {
    start = 1;
  }
  img.innerHTML = "<img src=" + slides[start - 1] + ">";
}
setInterval(slider, 3000);
//
//
//
//
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//
function myFunction() {
  var x = document.getElementById("nav-container");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
