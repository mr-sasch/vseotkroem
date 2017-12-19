// Прокрутка к началу страницы
$(document).ready(function(){

	if ($(this).scrollTop() > 100) {
			$('.footer__to-top').fadeIn();
	} else {
			$('.footer__to-top').fadeOut();
	}

  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.footer__to-top').fadeIn();
      } else {
          $('.footer__to-top').fadeOut();
      }
  });

  //Click event to scroll to top
  $('.footer__to-top').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });
});
