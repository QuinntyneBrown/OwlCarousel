(function (factory) {
  typeof define === 'function' && define.amd ? define('site', factory) :
  factory();
}(function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var Vehicles =
  /*#__PURE__*/
  function () {
    function Vehicles() {
      _classCallCheck(this, Vehicles);
    }

    _createClass(Vehicles, [{
      key: "init",
      value: function init() {
        $('.owl-carousel').owlCarousel({
          margin: 10,
          nav: true,
          navText: ["<a class='nav-btn prev-slide'><i class=' fa fa-chevron-left '></i></a>", "<a class='nav-btn next-slide'><i class='fa fa-chevron-right'></i></a>"],
          dots: false
        });
      }
    }]);

    return Vehicles;
  }();

  document.addEventListener("readystatechange", function () {
    if (document.readyState === 'complete') {
      new Vehicles().init();
    }
  });

}));
