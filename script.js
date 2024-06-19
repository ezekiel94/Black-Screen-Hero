/* Duplicate Logo Slides Copy */
let mainContainer = document.getElementById("logo")
let realCopy = document.getElementById("logo-slide");
let duplicateCopy = realCopy.cloneNode(true);
duplicateCopy.id = "logo-slides-copy";


mainContainer.appendChild(duplicateCopy)


/* Drop Down Button For The Questions */

const housingSupportAnswer = document.querySelectorAll(".the-questions-and-answer");


housingSupportAnswer.forEach(housingSupportAnswer => {
    housingSupportAnswer.addEventListener("click", () => {
        housingSupportAnswer.classList.toggle("active"); 
    })
   
})



const swiper = new Swiper('.swiper', {
 
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
  });

  console.log(swiper);

/* Scrolling Back To The Top */

const backToTop = document.getElementById("back-to-top");


backToTop.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});