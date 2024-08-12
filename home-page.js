function middle() {
  const goToMiddle = document.getElementById("what-we-study");
  goToMiddle.scrollIntoView({ behavior: "smooth", block: "center" });
}

function bottom() {
  const goToBottom = document.getElementById("how-we-do-it");
  goToBottom.scrollIntoView({ behavior: "smooth", block: "center" });
}

function toTop(){
  const goToTop = document.getElementById("lab-intro");
  goToTop.scrollIntoView({behavior: "smooth", block: "center"});
}

// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function () {
        scroll_top = $(this).scrollTop();
        if (scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});



// const observerOptions = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.7
// };

// function observerCallback(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // fade in observed elements that are in view
//       entry.target.classList.replace('fadeOut', 'fadeIn');
//     } else {
//       // fade out observed elements that are not in view
//       entry.target.classList.replace('fadeIn', 'fadeOut');
//     }
//   });
// }

// const observer = new IntersectionObserver(observerCallback, observerOptions);

// const fadeElms = document.querySelectorAll('.fade');
// fadeElms.forEach(el => observer.observe(el));


// let options = {
//   root: document.querySelector("#scrollArea"),
//   rootMargin: "0px",
//   threshold: 1.0,
// };



// function FadeInSection(props) {
//   const [isVisible, setVisible] = React.useState(false);
//   const domRef = React.useRef();
//   React.useEffect(() => {
//       const observer = new IntersectionObserver(entries => {
//           entries.forEach(entry => setVisible(entry.isIntersecting));
//       });
//       observer.observe(domRef.current);
//   }, []);
//   return (
//       <div
//           className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
//           ref={domRef}
//       >
//           {props.children}
//       </div>
//   );



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