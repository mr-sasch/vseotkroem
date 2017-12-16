/* Подсветка активного пункта меню */
$('.menu-main__item').click(function() {
	$('.menu-main__items').find('.active').removeClass('active');
	$(this).addClass('active');
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
