/*
Template: knight - Responsive HTML5 Template
Author:Iqonicthemes 
Design and Developed by: Iqonicthemes
*/


(function($) {
    'use strict';

    jQuery(document).ready(function() {

        /*PRELOADER JS*/
        $(window).load(function() {
            $('.status').fadeOut();
            $('.iq-preloader').delay(350).fadeOut('slow');
        });
        /*END PRELOADER JS*/

        /*START MENU JS*/
        $('a.page-scroll').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.iq-menu-top').addClass('menu-shrink');
            } else {
                $('.iq-menu-top').removeClass('menu-shrink');
            }
        });

        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        /*END MENU JS*/

        /*START MIXITUP JS*/
        $('.iq-work-all').mixItUp();
        // jQuery Lightbox
        $('.lightbox').venobox({
            numeratio: true,
            infinigall: true
        });
        /*END MIXITUP JS*/

    });

    /* End Stellar for background scrolling  */

})(jQuery);

