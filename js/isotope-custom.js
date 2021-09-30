(function ($) {
  // USE STRICT
  "use strict";

  /*ISOTOPE*/
  var $topeContainer = $('#isotope-grid');
  var $filter = $('#filter');

  // filter items on button click
  $filter.each(function () {
    $filter.on('click', 'li span', function () {
      var filterValue = $(this).attr('data-filter');
      $topeContainer.isotope({
        filter: filterValue
      });
    });
    var $buttonGroup = $('#filter');
    $buttonGroup.on('click', 'li', function () {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });

  // init Isotope
  $(window).on('load', function () {
    var $grid = $topeContainer.each(function () {
      $(this).isotope({
        itemSelector: '.item',
        percentPosition: true,
        animationEngine: 'best-available',
        masonry: {
          columnWidth: '.item'
        }
      });
    });
  });


})(jQuery);