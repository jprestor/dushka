$(document).ready(function () {

	var $moreLinkCards = $('#more-link-cards'),
		$cuttedProductCards = $('.catalog .product-cards .item'),
		$linkBeltCharacteristics = $('.belt .characteristics-heading'),
		$linkClutchCharacteristics = $('.clutch .characteristics-heading'),
		$beltCharacteristics = $('.belt .characteristics'),
		$clutchCharacteristics = $('.clutch .characteristics');

	$moreLinkCards.on('click', function () {
		$cuttedProductCards.css('display', 'flex');
		this.style.display = 'none';
	});

	$linkBeltCharacteristics.on('click', function () {
		$beltCharacteristics.css('display', 'block');
	});

	$linkClutchCharacteristics.on('click', function () {
		$clutchCharacteristics.css('display', 'block');
	});


    var eventsGoals = {
    '1.1':'grelka-gav-1.1',
    '1.2':'grelka-gav-1.2',
    '1.3':'grelka-gav-1.3',
    '1.4':'grelka-gav-1.4',
    '2.1':'grelka-gav-2.1',
    '2.2':'grelka-gav-2.2',
    '2.3':'grelka-gav-2.3',
    '2.4':'grelka-gav-2.4',
    '3.1':'grelka-gav-3.1',
    '3.2':'grelka-gav-3.2',
    '3.3':'grelka-gav-3.3',
    '3.4':'grelka-gav-3.4',
    '4.1':'grelka-gav-4.1',
    '4.2':'grelka-gav-4.2',
    '4.3':'grelka-gav-4.3',
    'get-grelka-button':'get-grelka-button',
    'get-2-grelki-button':'get-2-grelki-button',
    'get-grelka-bottom-button':'get-grelka-bottom-button',
	};
	/*--ajax---*/
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {

			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			setTimeout(function () {
				th.trigger("reset");
			}, 500);

			setTimeout(function () {
				var url = "thank-you.html";

                var eventId = th.find('input[name=prod-id]').val();
                console.log(eventId);
                console.log(eventsGoals[eventId]);
                console.log(yaCounter50158804.reachGoal(eventsGoals[eventId]));
                // MgSensor.invoke('dushka');

				$(location).attr('href', url);
			}, 1000);
		});
		return false;
	});


	/*--WOW---*/
	new WOW().init();


	/*Magnific Popup*/
	var $imagePopup = $('.image-popup'),
		$youtubePopup = $('.popup-youtube'),
		$sertificatePopup = $('.popup-sertificate');

	$imagePopup.magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function (item) {
				return '<a class="btn btn-red" href="#popup-order" data-toggle="modal">купить за 1990 руб.</a>';
			},
		},
		callbacks: {
			change: function () {
				var name = this.currItem.el.attr('data-name'),
					prodId = this.currItem.el.attr('data-prod-id'),
					$popupFormHeading = $('#popup-order h3'),
					$chosenPie = $('#popup-order .form-chosen-pie'),
					$chosenPieId = $('#popup-order .form-chosen-pie-id');

				$popupFormHeading.html("Заказать грелку" + "<br>" + name);
				$chosenPie.val(name);
				$chosenPieId.val(prodId);
			},
		},
	});

	$youtubePopup.magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$sertificatePopup.magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade',
	});


	/*Scroll*/
	$('header a[href*="#"]:not([href="#"]), a[href="#catalog"]').on('click', function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 70,
				}, 1000);
				return false;
			}
		}
	});


	/*Sliders*/
	var $sliderSertificates = $('.slider-sertificates-inner');

	$sliderSertificates.slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
  	]
	});


	/*Яндекс карта*/
	if (window.innerWidth < 992) {
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
				center: [55.84650207, 37.64654300],
				zoom: 16,
				controls: ['zoomControl'],
			});

			// Наша метка, указываем коордианты
			myPlacemark = new ymaps.Placemark([55.84650207, 37.64654300], {
				balloonContentBody: 'Текст в балуне',
			}, {
				iconLayout: 'default#image',
				// Путь до нашей картинки
				iconImageHref: '././../img/map-marker.png',
				// Размер по ширине и высоте
				iconImageSize: [111, 120],
				// Смещение левого верхнего угла иконки относительно
				// её «ножки» (точки привязки).
				//width, height
				iconImageOffset: [-55, -120]
			});

			myMap.geoObjects
				.add(myPlacemark)
		});

	} else {
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
				center: [55.84650207, 37.64371059],
				zoom: 16,
				controls: ['zoomControl'],
			});

			// Наша метка, указываем коордианты
			myPlacemark = new ymaps.Placemark([55.84650207, 37.64654300], {
				balloonContentBody: 'Текст в балуне',
			}, {
				iconLayout: 'default#image',
				// Путь до нашей картинки
				iconImageHref: '././../img/map-marker.png',
				// Размер по ширине и высоте
				iconImageSize: [111, 120],
				// Смещение левого верхнего угла иконки относительно
				// её «ножки» (точки привязки).
				//width, height
				iconImageOffset: [-55, -120]
			});

			myMap.geoObjects
				.add(myPlacemark)
		});
	}
	/*-------###-------*/
});
