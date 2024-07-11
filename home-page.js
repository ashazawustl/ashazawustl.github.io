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



function middle() {
  // goToMiddle.addEventListener("click", () =>{
  const goToMiddle = document.getElementById("what-we-study");
  goToMiddle.scrollIntoView({ behavior: "smooth", block: "center" });
  // });
}

function bottom() {
  // goToBottom.addEventListener("click", () =>{
  const goToBottom = document.getElementById("how-we-do-it");
  goToBottom.scrollIntoView({ behavior: "smooth", block: "center" });
  // });
}

function toTop(){
  const goToTop = document.getElementById("lab-name");
  goToTop.scrollIntoView({behavior: "smooth", block: "center"});
}

// // window.onload(() =>{
//   console.log("click")
//   const goToTop = document.getElementById("button3");
//   const topPage =  document.getElementById("lab-name");
//   goToTop.addEventListener("click", () =>{
//   topPage.scrollIntoView({ behavior: "smooth", block: "center" });
//   });
// // })

// window.onload = (event) => {
//   console.log("page is fully loaded");
// };
// function toTop() {
  
// }