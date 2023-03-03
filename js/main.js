
// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');
let liHeader = document.querySelectorAll('.header__menu-item');

burger.addEventListener('click', rotateBurger); 

for(let i = 0; i < liHeader.length; i++ ) {
	if (window.innerWidth < 990 ) {
		liHeader[i].addEventListener('click', rotateBurger);
	}
 }

function rotateBurger() {
  
  burger.classList.toggle('burger-active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

}

// ===========================================

let popapClose = document.querySelector('.popap__close');
let popap = document.querySelector('.popap');
let btnForma = document.querySelector('.header__main-btn');
let btnFormaOtpravit = document.querySelector('.popap__btn');

popapClose.addEventListener('click', closeF);
btnForma.addEventListener('click', open);
// btnFormaOtpravit.addEventListener('click', otravka);

function closeF() {
  popap.style.display = "none";
  console.log(popap);
}
function open() {
  popap.style.display = "block";
}
// function otravka() {
//   popap.style.display = "none";
// }


// ===============================================
// отправка формы =============>
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			popap.style.display = "none";
			alert("Спасибо. Ваша заявка была отправлена. Наш менеджер свяжется с вами в течение 24 часов.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
// ============================

let reliably = document.querySelector('.reliably');


// window.addEventListener('scroll', function() {
// if (reliably <= window.pageYOffset){

// }
// });
// =============================

function onEntry(entry) {
entry.forEach(change => {
	if (change.isIntersecting) {
		change.target.classList.add('element-show');
	}
});

}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.reliably__box-item');
for (let elm of elements) {
observer.observe(elm);
}

// ===================================

// let animationNum = document.querySelector('#reliably__box');

// animationNum.addEventListener('click', showAnimation);

// function showAnimation() {
  
// }

