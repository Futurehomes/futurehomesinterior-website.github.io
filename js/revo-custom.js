(function ($) {
  // USE STRICT
  "use strict";
  /* Slider HomePage 1 */
  $('#revolution-slider1').show().revolution({

    /* options are 'auto', 'fullwidth' or 'fullscreen' */
    sliderLayout: 'fullwidth',
    responsiveLevels: [1600, 1200, 992, 768],
    gridwidth: [1170, 970, 768, 480],
    gridheight: [820, 600, 600, 500],
    disableProgressBar: "on",
    /* basic navigation arrows and bullets */
    navigation: {
      bullets: {
        enable: true,
        style: 'au-bullet-wrap',
        tmp: '<span class="au-bullet"></span>',
        hide_onleave: false,
        h_align: 'center',
        v_align: 'bottom',
        h_offset: 0,
        v_offset: 50,
        space: 14
      },
      arrows: {
        enable: true,
        style: 'uranus',
        hide_onleave: true
      }
    }
  });
  /* Slider HomePage 2 */
  $('#revolution-slider2').show().revolution({

    /* options are 'auto', 'fullwidth' or 'fullscreen' */
    sliderLayout: 'fullscreen',
    responsiveLevels: [1600, 1200, 992, 768],
    gridwidth: [1170, 970, 768, 480],
    autoHeight: 'on',
    disableProgressBar: "on",
    /* basic navigation arrows and bullets */
    navigation: {
      arrows: {
        enable: false,

      },
      bullets: {
        enable: true,
        style: 'au-bullet-wrap',
        tmp: '<span class="au-bullet"></span>',
        direction: "vertical",
        hide_onleave: false,
        hide_onmobile: true,
        h_align: 'right',
        v_offset: 50,
        v_align: 'center',
        space: 12
      }
    }
  });
  /* Slider HomePage 3 */
  $('#revolution-slider3').show().revolution({
    /* options are 'auto', 'fullwidth' or 'fullscreen' */
    sliderLayout: 'auto',
    responsiveLevels: [1600, 1200, 992, 768],
    gridwidth: [1170, 970, 768, 480],
    gridheight: [820, 600, 600, 500],
    disableProgressBar: "on",

    /* basic navigation arrows and bullets */
    navigation: {

      arrows: {
        enable: true,
        style: 'uranus',
        hide_onleave: true
      },

      bullets: {
        enable: false
      }
    }
  });
  /* Slider HomePage 4 */
  $('#revolution-slider4').show().revolution({

    /* options are 'auto', 'fullwidth' or 'fullscreen' */
    sliderLayout: 'fullwidth',
    responsiveLevels: [1600, 1200, 992, 768],
    gridwidth: [1170, 970, 768, 480],
    gridheight: [850, 600, 600, 500],
    spinner: 'spinner4',
    disableProgressBar: "on",
    /* basic navigation arrows and bullets */
    navigation: {

      arrows: {
        enable: true,
        style: 'gyges',
        hide_onleave: true,
        hide_onmobile: true,
        h_offset: -10
      },
      bullets: {
        enable: true,
        style: 'au-bullet-wrap',
        tmp: '<span class="au-bullet"></span>',
        hide_onleave: false,
        h_align: 'center',
        v_align: 'bottom',
        h_offset: 0,
        v_offset: 50,
        space: 12
      }
    }
  });
  /* Slider HomePage 5 */
  $('#revolution-slider5').show().revolution({

    /* options are 'auto', 'fullwidth' or 'fullscreen' */
    sliderLayout: 'fullscreen',
    responsiveLevels: [1600, 1200, 992, 768],
    gridwidth: [1170, 970, 768, 480],
    disableProgressBar: "on",

    /* basic navigation arrows and bullets */
    navigation: {
      arrows: {
        enable: true,
        style: 'persephone',
        hide_onleave: true
      },
      bullets: {
        enable: true,
        style: 'au-bullet-wrap',
        tmp: '<span class="au-bullet"></span>',
        hide_onleave: false,
        h_align: 'center',
        v_align: 'bottom',
        h_offset: 0,
        v_offset: 60,
        space: 10
      }
    }
  });
  /* Slider HomePage 6 */
  $('#revolution-slider6').show().revolution({
    /* options are 'auto', 'fullwidth' or 'fullscreen' */
    sliderLayout: 'auto',
    responsiveLevels: [1600, 1200, 992, 768],
    gridwidth: [960, 800, 600, 450],
    gridheight: [432, 432, 400, 300],
    spinner: 'spinner4',
    disableProgressBar: "on"
  });
  $('.mouse').on('click', function () {
    var t = $(this).attr("href");
    console.log(t);
    $("html").animate({
      scrollTop: $(t).offset().top
    }, 600);
    return false;
  });

})(jQuery);