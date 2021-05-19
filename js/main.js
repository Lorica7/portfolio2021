(function ($) {
    "use strict";

    $(document).ready(function ($) {

        /*----------------------------
         easeScroll
        ------------------------------ */
        $("html").easeScroll();

        /*----------------------------
         wow js active
        ------------------------------ */
        new WOW().init();

        /*--------------------------
         Menu
        ---------------------------- */
        $('.menu_toggle , nav ul li a').on('click', function () {
            $('.menu_toggle').toggleClass('menu_toggle_close');
            $('nav').toggleClass('nav_open');
            $('.menu_toggle>span').toggleClass('bg_white');
        });

        /*----------------------------
         owl active
        ------------------------------ */
        $(".owl-carousel").owlCarousel({
            loop: true,
            dots: true,
            items: 1,
            autoplay: false,
            autoplayTimeout: 3000,
            mouseDrag: true
        });

        /*----------------------------
         mixitup active
        ------------------------------ */
        var mixer = mixitup('.portfolio_items', {
            "animation": {
                "duration": 250,
                "nudge": true,
                "reverseOut": true,
                "effects": "fade scale(0.01) translateZ(-100px)"
            }
        });

        /*----------------------------
         magnific popup active
        ------------------------------ */
        $('.port_item').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }

        });

        /*----------------------------
         counterUp active
        ------------------------------ */
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });

        /*--------------------------
         scrollUp
        ---------------------------- */
        $('a').on('click', function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
                location.hostname === this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target ||
                    $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    var targetOffset = $target.offset().top - 65;
                    $('html,body')
                        .animate({
                            scrollTop: targetOffset
                        }, 1000);
                    return false;
                }
            }
        });

     

        /*--------------------------
         scrollFunctions
        ---------------------------- */

        /* -- navbarFixed -- */
        $(window).on('scroll', function () {
            var scroll = getCurrentScroll();
            if (scroll >= 100) {
                $('.nav_bar').addClass('navbar_fixd');
                $('.go_top').addClass('go_top_visible');
            } else {
                $('.nav_bar').removeClass('navbar_fixd');
                $('.go_top').removeClass('go_top_visible');
            }
        });

        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }

    });

})(jQuery);
