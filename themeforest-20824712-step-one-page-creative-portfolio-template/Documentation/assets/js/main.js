(function ($) {
    "use strict";

    /*--------------------------
     scrollUp
    ---------------------------- */
    $('a').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target ||
                $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top-100;
                $('html,body')
                    .animate({
                        scrollTop: targetOffset
                    }, 500);
                return false;
            }
        }
    });

    /*--------------------------
     fixnav
    ---------------------------- */
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= 588) {
            $('.menu').addClass('menu_fixd');
            $('.hidden_div').addClass('show_div');
        } else {
            $('.menu').removeClass('menu_fixd');
            $('.hidden_div').removeClass('show_div');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

})(jQuery);
