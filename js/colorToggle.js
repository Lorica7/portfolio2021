(function ($) {
    "use strict";



    $('.color_panel i').on('click', function () {
        $(".color_panel").toggleClass("show_color_panel");
        $(".color_panel i").toggleClass("icofont-bubble-right").toggleClass("icofont-bubble-left");
    });

    $('li.bgcolor1').on('click', function () {
        $("body").addClass("cng_bgcolor1").removeClass("cng_bgcolor2 cng_bgcolor3 cng_bgcolor4 cng_bgcolor5");
    });

    $('li.bgcolor2').on('click', function () {
        $("body").addClass("cng_bgcolor2").removeClass("cng_bgcolor1 cng_bgcolor3 cng_bgcolor4 cng_bgcolor5");
    });

    $('li.bgcolor3').on('click', function () {
        $("body").addClass("cng_bgcolor3").removeClass("cng_bgcolor1 cng_bgcolor2 cng_bgcolor4 cng_bgcolor5");
    });

    $('li.bgcolor4').on('click', function () {
        $("body").addClass("cng_bgcolor4").removeClass("cng_bgcolor1 cng_bgcolor2 cng_bgcolor3 cng_bgcolor5");
    });

    $('li.bgcolor5').on('click', function () {
        $("body").addClass("cng_bgcolor5").removeClass("cng_bgcolor1 cng_bgcolor2 cng_bgcolor3 cng_bgcolor4");
    });


})(jQuery);
