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
//
//KEKINAEI TO SWIPER//
var swiper = new Swiper(".card_slider", {
  // autoHeight: true,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
//
//
// JavaScript for dynamically adding team members
const teamData = [
  {
    name: "John Doe",
    role: "Hair Stylist",
    image: "images/team/avatar1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Makeup Artist",
    image: "images/team/avatar2.jpg",
  },
  {
    name: "Jane Smith",
    role: "Makeup Artist",
    image: "images/team/avatar3.jpg",
  },
  {
    name: "Jane Smith",
    role: "Makeup Artist",
    image: "images/team/avatar4.jpg",
  },

  // Add more team members here
];

const teamSection = document.getElementById("team-members");

// Loop through the team data and create elements dynamically
teamData.forEach((member) => {
  const memberDiv = document.createElement("div");
  memberDiv.classList.add("team-member");

  const image = document.createElement("img");
  image.src = member.image;
  image.alt = member.name;

  const name = document.createElement("p");
  name.textContent = member.name;
  name.style.fontWeight = "bold";

  const role = document.createElement("p");
  role.textContent = member.role;

  memberDiv.appendChild(image);
  memberDiv.appendChild(name);
  memberDiv.appendChild(role);

  teamSection.appendChild(memberDiv);
});
