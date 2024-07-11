// const navbarToggle = navbar.querySelector("#navbar-toggle");
// const navbarMenu = document.querySelector("#navbar-menu");
// const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
// let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

// const toggleNavbarVisibility = () => {
//   isNavbarExpanded = !isNavbarExpanded;
//   navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
// };

// navbarToggle.addEventListener("click", toggleNavbarVisibility);

// navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
// navbarMenu.addEventListener("click", toggleNavbarVisibility);


const goToMiddle =  document.geteElementById("botton1");
const goToBottom = document.getElementById("button2");
const goToTop = document.getElementById("button3");

function middle(){
  goToMiddle.addEventListener("click", () =>{
    goToBottom.scrollIntoView({behavior: "smooth", block: "center"});
  });
}

function bottom(){
  goToBottom.addEventListener("click", () =>{
    goToTop.scrollIntoView({behavior: "smooth", block: "center"});
  });
}

function top(){
  goToTop.addEventListener("click", () =>{
    goToMiddle.scrollIntoView({behavior: "smooth", block: "center"});
  });
}