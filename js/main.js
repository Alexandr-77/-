
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

let popapClose = document.querySelector('.popap__close');
let popap = document.querySelector('.popap');
let btnForma = document.querySelector('.header__main-btn');
let btnFormaOtpravit = document.querySelector('.popap__btn');

popapClose.addEventListener('click', closeF);
btnForma.addEventListener('click', open);
btnFormaOtpravit.addEventListener('click', otravka);

function closeF() {
  popap.style.display = "none";
  console.log(popap);
}
function open() {
  popap.style.display = "block";
}
function otravka() {
  popap.style.display = "none";
}


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
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});







// ===================================

// let animationNum = document.querySelector('#reliably__box');

// animationNum.addEventListener('click', showAnimation);

// function showAnimation() {
  
// }

