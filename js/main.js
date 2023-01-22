$('.class-mi').slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 4,
   slidesToScroll: 4,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 });


// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');


burger.addEventListener('click', rotateBurger); 

function rotateBurger() {
  
  burger.classList.toggle('burger-active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

}

// ===========================================
let btnTop = document.querySelector('.header__main-btn');
let mainFormSowe = document.querySelector('.header__main');

btnTop.addEventListener('click', formaS);

function formaS() {
  // mainFormSowe.innerHTML = "с(sdfdfs)";
  window.prompt()
}