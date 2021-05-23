import "@fancyapps/fancybox";
import "./replaceImgSvg"
import "./carousels"

import "../scss/style.scss";
(function ($) {
  "use strict";
  $(function () {

    $(".header__burger").on("click", function () {
      const $self = $(this).find(".burger");
      const $menu = $(".header__menu");

      $self.toggleClass("js-active");
      $menu.toggleClass("js-active");
      $("body").toggleClass("scroll-block");
      $(".overlay").toggleClass("js-active");
    });

    $(".overlay").on("click", function () {
      $(".js-active").removeClass("js-active");
      $("body").removeClass("scroll-block");
      $(this).removeClass("js-active");
    });

    $(".header__link").on("click", function () {
      if (window.matchMedia("(max-width: 1240px)")) {
        $(".js-active").removeClass("js-active");
        $("body").removeClass("scroll-block");
        $(this).removeClass("js-active");
      }
    });


  });
})(jQuery);
