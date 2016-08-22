/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function() {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e) {
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function(options) {

        var defaults = {
                elem: $(this),
                speed: 500
            },

            allOptions = $.extend(defaults, options);

        allOptions.elem.click(function(event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset) + 60;
                $htmlBody.stop(true, false).animate({
                    scrollTop: ($(this.hash).offset().top + toMove)
                }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({
                    scrollTop: toMove
                }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({
                    scrollTop: ($(this.hash).offset().top - 60)
                }, allOptions.speed);
            }
        });

    };
})(jQuery);


$(document).
ready(function() {
    function o() {
        $(".shot-svg").toggleClass("switch"), $(".shot-container").toggleClass("switch")
    }
    var n = $(".info-avatar");
    n.on("click", o), console.log("© XFeiF 🙋 2015-" + (new Date).getFullYear())
});


$(document).ready(function() {
    $(document).scroll(function() {
        $(document).scrollTop()> $(".post-header").height() ? $("#returnTop").css("bottom", "15px") : $("#returnTop").css("bottom", "-200px")
    }), $("#returnTop").on("click", function() {
        console.log('testuse');
        $('html, body').animate({
                    scrollTop: 0
                }, 500);
    }), console.log("© XFeiF 🙋 2015-" + (new Date).getFullYear()),
    console.log($('#content').scrollTop());
});


// $(document).ready(function() {
//     $(".post-body").scroll(function() {
//         $(".post-body").scrollTop() > $(".article-header").height() ? $("#returnTop").css("bottom", "15px") : $("#returnTop").css("bottom", "-200px")
//     }), $("#returnTop").on("click", function() {
//         $(".post-body").animate({
//             scrollTop: 0
//         }, 500)
//     }), console.log("© zchen9 🙋 2015-" + (new Date).getFullYear())
// });
