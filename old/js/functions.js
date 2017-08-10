//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var navbar = $("#navbar");
    navbar.on("click", "a", null, function () {
        navbar.collapse('hide');
    });
});
// Isotope filters
//-----------------------------------------------
if ($('.isotope-container').length > 0) {
    $(window).load(function () {
        $('.isotope-container').fadeIn();
        var $container = $('.isotope-container').isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
            transitionDuration: '0.5s',
            filter: "*"
        });
        // filter items on button click
        $('.filters').on('click', 'ul.nav li a', function () {
            var filterValue = $(this).attr('data-filter');
            $(".filters").find("li.active").removeClass("active");
            $(this).parent().addClass("active");
            $container.isotope({
                filter: filterValue
            });
            return false;
        });
    });
}
;
//Modal
//-----------------------------------------------
if ($(".modal").length > 0) {
    $(".modal").each(function () {
        $(".modal").prependTo("body");
    });
}
// Fixed header
//-----------------------------------------------
// $(window).scroll(function () {
//     if ($(this).scrollTop() > ($(window).height() - 10)) {
//         $(".navbar-fixed-top").fadeIn();
//         $(".navbar-fixed-top").removeClass("hidden");
//     } else {
//         $(".navbar-fixed-top").fadeOut();
//     }
// });


// $(document).ready(function () {
//   setTimeout(function() {
//             $(".navbar-fixed-top").fadeIn();
//             $(".navbar-fixed-top").removeClass("hidden");
//     }, 600);

//     //Close navbar on mobile
//     $(".navbar a").click(function (event) {
//         if ($(window).width() < 768) {
//             $(".navbar-collapse").collapse('hide');
//         }
//     });
// });
