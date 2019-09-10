(function (factory) {
    typeof define === 'function' && define.amd ? define('site', factory) :
    factory();
}(function () { 'use strict';

    function initVehiclesCarousel() {
      $('.owl-carousel').owlCarousel({
        margin: 10,
        nav: true,
        navText: ["<a class='nav-btn prev-slide'><i class=' fa fa-chevron-left '></i></a>", "<a class='nav-btn next-slide'><i class='fa fa-chevron-right'></i></a>"],
        dots: false
      });
    }

    document.addEventListener("readystatechange", function () {
      if (document.readyState === 'complete') {
        initVehiclesCarousel();
      }
    });

}));
