/* Подсветка активного содержимого таба */
$('.menu-services__tab-content').click(function() {
	$('.menu-services__tabs-content').find('.active').removeClass('active');
	$(this).addClass('active');
});
/*/ Подсветка активного содержимого таба */



/* Подсветка активного таба */
// $('.menu-services__tab').click(function() {
// 	$('.menu-services__tabs').find('.active').removeClass('active');
// 	$(this).addClass('active');
// });
/*/ Подсветка активного таба */

var tab;
var tabContent;

window.onload = function() {
	tabContent = document.getElementsByClassName('menu-services__tabs-content');
	tab = document.getElementsByClassName('menu-services__tab');
	hideTabsContent(1);
}

function hideTabsContent(a) {
	for(var i=a; i<tabContent.length; i++) {
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('active');
	}
}

document.getElementById('menu-services__tabs').onclick=function (event) {
	var target=event.target;
	if (target.className=='menu-services__tab'){
		for (var i=0; i<tab.length; i++){
			if(target==tab[i]){
				showTabsContent(i);
				break;
			}
		}
	}
}

function showTabsContent(b) {
	if (tabContent[b].classList.contains('hide')) {
		hideTabsContent(0);
		tab[b].classList.add('active');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}
