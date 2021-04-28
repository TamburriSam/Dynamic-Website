const dropdown = document.querySelector(".dropdiv");
const dropdown2 = document.querySelector("#guitardrop");
const content1 = document.querySelector(".dropdown-content");
const content2 = document.querySelector(".dropdown-content2");
const mobileMenu = document.querySelector(".mobile-menu");
const mobile = document.querySelector(".nav-mobile");
const body = document.querySelector("body");
const dropDiv = document.querySelector(".dropdiv");
const info = document.querySelector(".mobile-menu");
const container = document.querySelector(".dropdown");

mobile.addEventListener("click", function () {
  //document.queryselectorall
  dropDiv.style.display = "block";
  document.querySelectorAll(".dropdiv").forEach((drop) => {
    drop.style.display = "block";
  });
  info.style.display = "block";
  info.innerHTML = `  <div class="dropdown">
    <div class="dropdiv">Guitars</div>
    <div class="dropdown-content">
        <a href = "#">Electric Guitar</a>
        <a href = "#">Acoustic Guitar</a>
        <a href = "#">Left-Handed Guitar</a>
    </div>
  
    <div class="dropdiv" id="guitardrop"  >Bass</div>
    <div class="dropdown-content2">
        <a href = "#">4-String Bass</a>
        <a href = "#">5-String Bass</a>
        <a href = "#">6-String Bass</a>
    </div>
  
    <div class="dropdiv">Drums</div>
    <div id="guitarDrop" class="dropdown-content">
        <a href = "#">Link 1</a>
        <a href = "#">Link 2</a>
        <a href = "#">Link 9</a>
    </div>
  
    <div class="dropdiv">Keyboard</div>
    <div id="guitarDrop" class="dropdown-content">
        <a href = "#">Link 1</a>
        <a href = "#">Link 2</a>
        <a href = "#">Link 9</a>
    </div>
  
    <div class="dropdiv">Mics</div>
    <div id="guitarDrop" class="dropdown-content">
        <a href = "#">Link 1</a>
        <a href = "#">Link 2</a>
        <a href = "#">Link 9</a>
    </div>
  </div>`;
  mobile.appendChild(info);
  container.style.display = "flex";
  container.style.flexDirection = "column";
});

dropdown.addEventListener("click", function () {
  showContent(content1);
});
dropdown2.addEventListener("click", function () {
  showContent(content2);
});

function showContent(drop) {
  if (drop.style.display === "none") {
    drop.style.display = "flex";
  } else {
    drop.style.display = "none";
  }
}

//might need to transfer this e
document.addEventListener("click", function (e) {
  canClose(e, info, dropDiv, content1);
  canClose(e, info, dropdown2, content2);
});

/* function canClose(e, info, drop, content) {
  if (mobileMenu.style.display === "block") {
    if (!e.target.closest(".nav-mobile") && !e.target.closest(".info")) {
      info.style.display = "none";
      drop.style.display = "none";
      content.style.display = "none";
      console.log(e.target.parentElement.parentElement);
    }
  }
} */

const nav = document.querySelector(".nav");

function canClose(e, info, drop, content) {
  /* if (mobileMenu.style.display === "block") { */
  if (!e.target.closest("body")) {
    /*  info.style.display = "none";
      drop.style.display = "none";
      content.style.display = "none"; */

    nav.style.display = "none";
  } else {
    console.log("clicked");
  }
}
