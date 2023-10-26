// slider--------------------

var imgArray = [
    "images/woman-1.jpg",
    "images/woman-2.jpg",
    "images/woman-3.jpg",
    "images/woman-4.jpg",
  ],
  curIndex = 0;
imgDuration = 4000;

function slideShow() {
  document.getElementById("slider").className += "fadeOut";
  setTimeout(function () {
    document.getElementById("slider").src = imgArray[curIndex];
    document.getElementById("slider").className = "";
  }, 700);
  curIndex++;
  if (curIndex == imgArray.length) {
    curIndex = 0;
  }
  setTimeout(slideShow, imgDuration);
}
slideShow();
// slider--------------------
//
//
//
//button back to top
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
//navbar - responsive
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
    name: "Maria",
    role: "Hair Stylist",
    image: "images/team/avatar1.jpg",
    facebook: "facebook_link",
    twitter: "twitter_link",
    instagram: "instagram_link",
  },
  {
    name: "Konstantinos",
    role: "Hair Specialist",
    image: "images/team/avatar2.jpg",
    facebook: "facebook_link",
    twitter: "twitter_link",
    instagram: "instagram_link",
  },
  {
    name: "Giorgos",
    role: "Makeup Artist",
    image: "images/team/avatar3.jpg",
    facebook: "facebook_link",
    twitter: "twitter_link",
    instagram: "instagram_link",
  },
  {
    name: "Eleni",
    role: "Nail Artist",
    image: "images/team/avatar4.jpg",
    facebook: "facebook_link",
    twitter: "twitter_link",
    instagram: "instagram_link",
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
  // AN LEIPEI KAPOIO SOCIAL NA MH FTIAXNEI ICON
  const buttons = document.createElement("div");
  buttons.classList.add("buttons");
  if (member.facebook !== "") {
    buttons.innerHTML = `
        <a class="button button1" href="${member.facebook}"><i class="fa-brands fa-facebook-f fa-lg"></i></a>`;
  }
  if (member.twitter !== "") {
    buttons.innerHTML += `
        <a class="button button2" href="${member.twitter}"><i class="fa-brands fa-twitter fa-lg"></i></a>`;
  }
  if (member.instagram !== "") {
    buttons.innerHTML += `
        <a class="button button3" href="${member.instagram}"><i class="fa-brands fa-instagram fa-lg"></i></a>`;
  }

  // buttons.innerHTML = `
  //       <a class="button button1" href="${member.facebook}"><i class="fa-brands fa-facebook-f fa-lg"></i></a>
  //       <a class="button button2" href="${member.twitter}"><i class="fa-brands fa-twitter fa-lg"></i></a>
  //       <a class="button button3" href="${member.instagram}"><i class="fa-brands fa-instagram fa-lg"></i></a>
  //     `;
  // AN LEIPEI KAPOIO SOCIAL NA MH FTIAXNEI ICON
  memberDiv.appendChild(image);
  memberDiv.appendChild(name);
  memberDiv.appendChild(role);
  memberDiv.appendChild(buttons);

  teamSection.appendChild(memberDiv);
});
