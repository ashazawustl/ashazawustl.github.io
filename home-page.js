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
  const goToMiddle = document.getElementById("what-we-study");
  goToMiddle.scrollIntoView({ behavior: "smooth", block: "center" });
}

function bottom() {
  const goToBottom = document.getElementById("how-we-do-it");
  goToBottom.scrollIntoView({ behavior: "smooth", block: "center" });
}

function toTop(){
  const goToTop = document.getElementById("lab-name");
  goToTop.scrollIntoView({behavior: "smooth", block: "center"});
}



//possible alternative method:
// window.onload = function() {
//   console.log('page loaded');
//   const topButton = document.getElementById('button2');
//   const bottomButton = document.getElementById('button3');

//   topButton.addEventListener('click', function(){
//       const bottomDiv = document.getElementById('how-we-do-it');
//       bottomDiv.scrollIntoView({behavior: 'smooth', block: 'end'});
//   });

//   bottomButton.addEventListener('click', function(){
//       const topDiv = document.getElementById('lab-name');
//       topDiv.scrollIntoView({behavior: 'smooth', block: 'start'});
//   });
// };