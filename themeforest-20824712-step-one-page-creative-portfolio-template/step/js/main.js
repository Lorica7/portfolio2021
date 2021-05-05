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
         googleMap
        ---------------------------- */
        google.maps.event.addDomListener(window, 'load', init);

        function init() {

            var mapOptions = {
                zoom: 13,
                scaleControl: false,
                scrollwheel: false,
                disableDoubleClickZoom: true,

                center: new google.maps.LatLng(23.810332, 90.412518),

                styles: [{ 
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e9e9e9"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dedede"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#333333"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }]
            };

            var mapElement = document.getElementById('map');

            var map = new google.maps.Map(mapElement, mapOptions);

            var beachMarker = new google.maps.Marker({
                position: {
                    lat: 23.810332,
                    lng: 90.412518
                },
                animation: google.maps.Animation.BOUNCE,
                icon: 'img/map-marker.png',
                map: map
            });
        }


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
