/* Подсветка активного пункта меню */
document.addEventListener("DOMContentLoaded", function(event) {
	var curUrl = window.location.pathname;
	var menuItems = document.getElementsByClassName('menu-main__item');
	for (i=0;i<10;i++) {
		var pagesUrl = document.getElementsByClassName('menu-main__item-a')[i].getAttribute('href');
		if (curUrl == pagesUrl) {
		 menuItems[i].classList.add('active');
	 };
	};
});
/*/ Подсветка активного пункта меню */

/* Нажатие кнопки мобильного меню */
$('.mobile-btn').click(function() {
	if ($('.mobile-btn').hasClass('active')) {
		$(this).removeClass('active');
	} else {
		$(this).addClass('active');
	}

	if ($('.menu-main__items').hasClass('show')) {
		$('.menu-main__items').removeClass('show')
	} else {
		$('.menu-main__items').addClass('show')
	}
});
/*/ Нажатие кнопки мобильного меню */
