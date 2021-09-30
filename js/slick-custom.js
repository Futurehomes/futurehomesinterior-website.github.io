(function ($) {
	// USE STRICT
	"use strict";
	try {
		var slick_object = $('.js-slick-wrapper');
		slick_object.each(function () {
			var that = $(this);
			var slick_content = that.find('.js-slick-content');
			var arrow_left = that.find('.js-slick-arrow-left');
			var arrow_right = that.find('.js-slick-arrow-right');
			var option = {
				accessibility: true,
				adaptiveheight: false,
				autoplay: false,
				autoplayspeed: 5000,
				arrows: false,
				asnavfor: null,
				appendarrows: $(this),
				appenddots: $(this),
				prevarrow: '<i class="slick-prev"></i>',
				nextarrow: '<i class="slick-next"></i>',
				centermode: false,
				centerpadding: '50px',
				cssease: 'ease',
				dots: false,
				dotsclass: 'slick-dots',
				draggable: true,
				fade: false,
				speed: 500,
				pauseonhover: false,
				xl: 1,
				lg: this.xl,
				md: this.lg,
				sm: this.md,
				xs: this.sm,
				vertical: false,
				loop: true,
				thumb: false

			};

			for (var k in option) {
				if (option.hasOwnProperty(k)) {
					if ($(this).attr('data-slick-' + k) != null) {
						option[k] = $(this).data('slick-' + k);
					}
				}
			}

			if (option.thumb)
				slick_content.slick({
					accessibility: option.accessibility,
					adaptiveHeight: option.adaptiveheight,
					autoplay: option.autoplay,
					autoplaySpeed: option.autoplayspeed,
					arrows: option.arrows,
					asNavFor: option.asnavfor,
					appendArrows: option.appendarrows,
					appendDots: option.appenddots,
					prevArrow: option.prevarrow,
					nextArrow: option.nextarrow,
					centerMode: option.centermode,
					centerPadding: option.centerpadding,
					cssease: option.cssease,
					dots: option.dots,
					dotsClass: option.dotsclass,
					draggable: option.draggable,
					pauseOnHover: option.pauseonhover,
					fade: option.fade,
					vertical: option.vertical,
					slidesToShow: option.xl,
					infinite: option.loop,
					swipeToSlide: true,
					customPaging: function (slider, i) {
						var thumb = $(slider.$slides[i]).data('thumb');
						return '<div class="p-btn"><img src="' + thumb + '"></div>';
					},

					responsive: [{
							breakpoint: 1201,
							settings: {
								slidesToShow: option.lg
							}
						},
						{
							breakpoint: 993,
							settings: {
								slidesToShow: option.md
							}
						},
						{
							breakpoint: 769,
							settings: {
								slidesToShow: option.sm
							}
						},
						{
							breakpoint: 576,
							settings: {
								slidesToShow: option.xs,
								fade: false
							}
						}
					]
				});
			else
				slick_content.slick({
					accessibility: option.accessibility,
					adaptiveHeight: option.adaptiveheight,
					autoplay: option.autoplay,
					autoplaySpeed: option.autoplayspeed,
					arrows: option.arrows,
					asNavFor: option.asnavfor,
					appendArrows: option.appendarrows,
					appendDots: option.appenddots,
					prevArrow: option.prevarrow,
					nextArrow: option.nextarrow,
					centerMode: option.centermode,
					centerPadding: option.centerpadding,
					cssease: option.cssease,
					dots: option.dots,
					dotsClass: option.dotsclass,
					draggable: option.draggable,
					pauseOnHover: option.pauseonhover,
					fade: option.fade,
					vertical: option.vertical,
					slidesToShow: option.xl,
					infinite: option.loop,
					swipeToSlide: true,

					responsive: [{
							breakpoint: 1201,
							settings: {
								slidesToShow: option.lg
							}
						},
						{
							breakpoint: 993,
							settings: {
								slidesToShow: option.md
							}
						},
						{
							breakpoint: 769,
							settings: {
								slidesToShow: option.sm
							}
						},
						{
							breakpoint: 576,
							settings: {
								slidesToShow: option.xs,
								fade: false
							}
						}
					]
				});


		});

	} catch (err) {
		console.log(err)
	}
})(jQuery);