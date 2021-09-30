(function ($) {
  // USE STRICT
  "use strict";

  $(window).on("load", function () {
    $("#page-loader").fadeOut("slow");
  });

  /* Header Stick */
  $(window).scroll(function (event) {
    /* Act on the event */
    var top = $(document).scrollTop();
    if (top > 82) {
      $('.header-stick').addClass('header-stick--show');
    }
    else {
      $('.header-stick').removeClass('header-stick--show');
    }
  });
  /* Menu Canvas */
  $('.canvas-menu-button').on('click', function () {
    if ($('#menu-canvas').hasClass('menu-canvas--hidden')) {
      $('#menu-canvas').removeClass('menu-canvas--hidden');
      $('#menu-canvas').addClass('menu-canvas--show');
    }
    else {
      $('#menu-canvas').removeClass('menu-canvas--show');
      $('#menu-canvas').addClass('menu-canvas--hidden');
    }
  });
  $('#btn-close').on('click', function () {
    $('#menu-canvas').removeClass('menu-canvas--show');
    $('#menu-canvas').addClass('menu-canvas--hidden');
  });
  try {
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 1;
    var syncedSecondary = true;

    sync1.owlCarousel({
      items: 1,
      slideSpeed: 3000,
      nav: false,
      autoplay: true,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      smartSpeed: 800,
      animateOut: 'fadeOut'
    }).on('changed.owl.carousel', syncPosition);

    sync2
      .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
        items: slidesPerPage,
        dots: true,
        nav: false,
        smartSpeed: 800,
        slideSpeed: 3000,
        slideBy: slidesPerPage,
        responsiveRefreshRate: 100,
        animateOut: 'fadeOut',
      }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - .5);

      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }
      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();

      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }

    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    }

    sync2.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
    });
  } catch (error) {

  }


  /* Cart dropdown */
  $('#cart-button').on('click', function () {
    if ($('.cart-dropdown').hasClass('cart-dropdown--hidden')) {
      $('.cart-dropdown').removeClass('cart-dropdown--hidden');
      $('.cart-dropdown').addClass('cart-dropdown--show');
    }
    else {
      $('.cart-dropdown').removeClass('cart-dropdown--show');
      $('.cart-dropdown').addClass('cart-dropdown--hidden');

    }

  });
  /* Search */
  $('.search-button__btn').on('click', function () {
    if ($('#header-input').hasClass('form__input--hidden')) {
      $('#header-input').removeClass('form__input--hidden');
      $('#header-input').addClass('form__input--show');
      $('.menu-desktop').removeClass('menu-desktop--show');
      $('.menu-desktop').addClass('menu-desktop--hidden');
    }
    else {
      $('#header-input').removeClass('form__input--show');
      $('#header-input').addClass('form__input--hidden');
      $('.menu-desktop').removeClass('menu-desktop--hidden');
      $('.menu-desktop').addClass('menu-desktop--show');
    }

  });
  /* Menu Mobile */
  $('.menu-mobile__button').on('click', function () {
    if ($(this).hasClass('click')) {
      $(this).removeClass('click');
    }
    else {
      $(this).addClass('click');
    }
    $('nav.menu-mobile').slideToggle("400");
  });

  $('.menu-mobile__more').on('click', function () {

    var sub_list = $(this).parent().find('ul');
    $(this).toggleClass("fa-minus");
    sub_list.slideToggle("400");

  });
  try {
    /* What client say */

    $('#owl-client-say').owlCarousel({
      loop: true,
      margin: 30,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      smartSpeed: 1000,
      dotData: true,
      responsive: {
        0: {
          items: 1,
          dots: false,
          nav: false,
          margin: 20,
        },
        768: {
          items: 1,
          margin: 20,
          dots: false,
          nav: false
        },
        992: {
          items: 1,
          margin: 20,
          dots: true
        },
        1024: {
          items: 2,
          dots: true
        },
        1200: {
          items: 3,
          dots: true,
          loop: true
        }
      }
    });
  } catch (error) {

  }
  try {
    /* What client say */
    $('#owl-client-say-1').owlCarousel({
      loop: true,
      margin: 30,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
          dots: false,
          nav: false
        },
        768: {
          items: 1,
          dots: false,
          nav: false
        },
        992: {
          items: 1,
          dots: true
        },
        1024: {
          items: 2,
          dots: true
        },
        1200: {
          items: 2,
          dots: true,
          loop: true
        }
      }
    });
  } catch (error) {

  }

  try {
    /* Partner */
    $('#owl-partner').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 9000,
      autoplayHoverPause: false,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 2,
          nav: false,
          dots: false,
          margin: 10
        },
        768: {
          items: 3,
          nav: false,
          dots: false,
          margin: 10
        },
        992: {
          items: 4,
          nav: false,
          dots: false,
          margin: 20
        },
        1024: {
          items: 5,
          margin: 25,
          nav: false,
          dots: false,
          loop: true
        },
        1200: {
          items: 6,
          nav: false,
          margin: 25,
          dots: false,
          loop: true
        },
        1600: {
          items: 8,
          nav: false,
          margin: 30,
          dots: false,
          loop: true
        }
      }
    });
  } catch (error) {

  }
  try {
    /* Recent Proj 2 */
    $('#owl-re-pro-2').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 8000,
      autoplayHoverPause: false,
      smartSpeed: 1000,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      responsive: {
        0: {
          items: 1,
          dots: false,
          nav: false
        },
        768: {
          items: 2,
          dots: false,
          nav: false
        },
        992: {
          items: 3,
          dots: false
        },
        1024: {
          items: 3,
          dots: false
        },
        1200: {
          items: 4,
          dots: false,
          loop: true
        }
      }
    });
  } catch (error) {

  }

  try {
    /* Our Team */
    $('#owl-our-team').owlCarousel({
      loop: true,
      margin: 60,
      responsiveClass: true,
      smartSpeed: 1000,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: true,
          margin: 10
        },
        768: {
          items: 2,
          nav: false,
          dots: true,
          margin: 10
        },
        992: {
          items: 3,
          nav: false,
          dots: true,
          margin: 20
        },
        1024: {
          items: 3,
          nav: false,
          dots: true,
          margin: 20
        },
        1200: {
          items: 3,
          nav: false,
          dots: true,
          loop: true
        }
      }
    });
  } catch (error) {

  }

  try {
    /* Testi */
    $('#owl-testi').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 8000,
      autoplayHoverPause: false,
      smartSpeed: 1000,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      margin: 30,
      responsive: {
        0: {
          items: 1,
          dots: false,
          nav: false
        },
        768: {
          items: 1,
          dots: false,
          nav: false
        },
        992: {
          items: 1,
          dots: false,
          nav: false
        },
        1024: {
          items: 1,
          dots: false
        },
        1200: {
          items: 1,
          dots: false,
          loop: true
        }
      }
    });
  } catch (error) {

  }

  try {
    /* Our Team 2 */
    $('#owl-our-team-2').owlCarousel({
      loop: true,
      margin: 30,
      responsiveClass: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: true,
          margin: 0
        },
        768: {
          items: 2,
          nav: false,
          dots: true,
          margin: 20
        },
        992: {
          items: 3,
          nav: false,
          dots: true,
          margin: 20
        },
        1024: {
          items: 4,
          nav: false,
          dots: true,
          margin: 20
        },
        1200: {
          items: 4,
          nav: false,
          dots: true,
          loop: true
        }
      }
    });
  } catch (error) {

  }

  try {
    /* Testi 1 */
    $('#owl-testi-1').owlCarousel({
      loop: true,
      margin: 2,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: false,
      smartSpeed: 2000,
      items: 1
    });
  } catch (error) {

  }

  try {
    /* Partner 1 */
    $('#owl-partner-1').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      dots: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 2,
          nav: false,
          margin: 5
        },
        576: {
          items: 3,
          nav: false,
          margin: 8
        },
        768: {
          items: 3,
          nav: false,
          margin: 10
        },
        992: {
          items: 3,
          nav: false,
          margin: 20
        },
        1024: {
          items: 3,
          nav: false,
          loop: true
        },
        1200: {
          items: 4,
          nav: false,
          loop: true
        }
      }
    });
  } catch (error) {

  }

  try {
    /* Partner 2 */
    $('#owl-partner-2').owlCarousel({
      loop: true,
      margin: 48,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      smartSpeed: 1000,
      dots: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
          margin: 5
        },
        576: {
          items: 2,
          nav: false,
          margin: 8
        },
        768: {
          items: 3,
          nav: false,
          margin: 10
        },
        992: {
          items: 3,
          nav: false,
          margin: 20
        },
        1024: {
          items: 3,
          nav: false,
          loop: true
        },
        1200: {
          items: 4,
          nav: false,
          loop: true
        }
      }
    });
  } catch (error) {

  }

  try {
    /* What client say */
    $('#owl-client-say-2').owlCarousel({
      loop: true,
      margin: 30,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
          dots: false,
          nav: false
        },
        768: {
          items: 1,
          dots: false,
          nav: false
        },
        992: {
          items: 2,
          dots: true
        },
        1024: {
          items: 2,
          dots: true
        },
        1200: {
          items: 3,
          dots: true
        }
      }

    });
  } catch (error) {

  }

  try {
    /* Blog  */
    $('#owl-blog').owlCarousel({
      loop: true,
      margin: 2,
      smartSpeed: 1000,
      items: 1
    });
  } catch (error) {

  }


  // BACK TO TOP BUTTON
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#btn-to-top').fadeIn('slow');
    } else {
      $('#btn-to-top').fadeOut('slow');
    }
  });
  $('#btn-to-top').on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
})(jQuery);