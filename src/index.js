let dropdownLabel = document.querySelector(".dropdiv");
let dropdownLabel2 = document.querySelector("#guitardrop");
let dropdownContent1 = document.querySelector(".dropdown-content");
let dropdownContent2 = document.querySelector(".dropdown-content2");
let mobileIcon = document.querySelector(".nav-mobile");
let dropdownLabels = document.querySelectorAll(".dropdiv");
let nav = document.querySelector(".nav");
let navMobile = document.querySelector(".nav-mobile");

dropdownLabel.addEventListener("click", function () {
  if (dropdownContent1.style.display === "none") {
    dropdownContent1.style.display = "flex";
  } else {
    dropdownContent1.style.display = "none";
  }
});

dropdownLabel2.addEventListener("click", function () {
  if (dropdownContent2.style.display === "none") {
    dropdownContent2.style.display = "flex";
  } else {
    dropdownContent2.style.display = "none";
  }
});

document.addEventListener("click", function (e) {
  if (!e.target.closest("body") || e.target.closest(".slider")) {
    dropdownContent1.style.display = "none";
    dropdownContent2.style.display = "none";
  }
});

let body = document.querySelector("body");

mobileIcon.addEventListener("click", function (e) {
  if (nav.style.display === "none") {
    nav.style.display = "block";
    dropdownLabel.style.display = "block";

    dropdownLabels.forEach((label) => {
      label.style.display = "block";
    });

    dropdownContent1.style.top = "0px";
    dropdownContent1.style.left = "0px";

    dropdownContent2.style.top = "0px";
    dropdownContent2.style.left = "0px";
    dropdownContent2.style.width = "100%";
  } else {
    nav.style.display = "none";
    dropdownLabels.forEach((label) => {
      label.style.display = "none";
    });
  }
});

let img = document.querySelector(".photo");
let imgArray = ["photo1", "photo2", "photo3"];
let slideIndex = 0;

let next = document.querySelector(".next");
next.addEventListener("click", function () {
  if (slideIndex < imgArray.length) {
    img.src = `${imgArray[slideIndex]}.jpg`;
    slideIndex++;
  } else if ((slideIndex = imgArray.length)) {
    img.src = `${imgArray[0]}.jpg`;
    slideIndex = 0;
    slideIndex++;
  }
});

let prev = document.querySelector(".previous");
prev.addEventListener("click", function () {
  if (slideIndex === 1) {
    //prev.disabled = true;
    img.src = `${imgArray[imgArray.length - 1]}.jpg`;
    slideIndex = 3;
  } else {
    slideIndex--;
    img.src = `${imgArray[slideIndex - 1]}.jpg`;
  }
});
