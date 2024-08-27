$(document).ready(function () {
    $(".portfolio").show();

    // =======================================================================//
    // ------------------------------ Dropmenu Responsive ---------------------
    // =======================================================================//

    if ($(window).width() >= 768) {
        $('ul.navbar-nav li.dropdown').hover(function () {
            $(this).find('.dropdown-menu:first').stop(true, true).fadeIn(500).addClass("show");
        }, function () {
            $(this).find('.dropdown-menu:first').stop(true, true).fadeOut(0).removeClass("show");
        });
    } else {
        $('.dropdown-menu').addClass("dropdown-menu-responsive");
        $('ul.navbar-nav li.dropdown a').click(function () {
            $(this).next('.dropdown-menu-responsive').slideToggle();
        });
    }

    // =======================================================================//
    // ------------------------- Fixed Header When Scroll --------------------
    // =======================================================================//

    $(window).bind('scroll', function () {
        if ($(window).width() > 768) {
            var navHeight = $(window).height() - 500;
            if ($(window).scrollTop() > navHeight) {
                $('header').addClass('fixed');
                $('.navbar-brand').css('width', '75px');
                $('.navbar').css('height', 'auto');
                $('.header-right-shadow').css('display', 'none');
                $('.header-left-shadow').css('display', 'none');
            } else {
                $('header').removeClass('fixed');
                $('.navbar-brand').css('width', '100px');
                $('.navbar').css('height', 'auto');
                $('.header-right-shadow').css('display', 'block');
                $('.header-left-shadow').css('display', 'block');
            }
        }
    });

    // =======================================================================//
    // ------------------------- View Searchbox When Scroll --------------------
    // =======================================================================//
    $('.toggle-search').click(function () {
        $('.search-box').slideToggle();
    });

    // =======================================================================//
    // ------------------------- View accicons When Scroll --------------------
    // =======================================================================//
    $('.acc-link').click(function () {
        $('.acc-icons').slideToggle();
        return false;
    });


    /* ======================================================================= */
    /* --------------- ADD CLASS ACTIVE TO FIRST SLIDE ----------------------- */
    /* ======================================================================= */

    $(".carousel-item:first").addClass("active");
    /* ======================================================================= */
    /* --------------- ADD CLASS ACTIVE TO FIRST Filter ----------------------- */
    /* ======================================================================= */


    // =======================================================================//
    // ---------------------------- Carousel Auto Animate ----------------------
    // =======================================================================//
    $('.carousel').css('direction', 'ltr');
    $('.carousel').carousel({
        interval: 4000
    });


    // =======================================================================//
    // ---------------------------- Albume Photos Script ----------------------
    // =======================================================================//
    $(function () {
        var filterList = {
            init: function () {
                $('#portfoliolist').mixItUp({
                    selectors: {
                        target: '.portfolio',
                        filter: '.filter'
                    },
                    load: {
                        filter: '.app'
                    }
                });
            }
        };

        // Run the show!
        filterList.init();
    });

    // =======================================================================//
    // ---------------------------- TIME AND DATE ----------------------
    // =======================================================================//

    function today() {
        var currentdate = new Date();
        var datetime = "<i class='fa fa-calendar date-icon' aria-hidden='true'></i>" + currentdate.getDate() + "/" +
            (currentdate.getMonth() + 1) + "/" +
            currentdate.getFullYear() + "<i class='fa fa-clock-o time-icon' aria-hidden='true'></i>" +
            currentdate.getHours() + ":" +
            currentdate.getMinutes() + ":" +
            currentdate.getSeconds();
        document.getElementById("demo").innerHTML = datetime;
    }

    var $today = setInterval(today, 1000);
});
$('.autoplay').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    centerMode: false,
    focusOnSelect: false,
    arrows: true,
    adaptiveHeight: false,
    autoplaySpeed: 3000,
    enterPadding: '60px',
    Speed: 2000,
    // fade: true,
    autoplay: true
});

// =======================================================================//
// ---------------------------- Accessibility plugin ----------------------
// =======================================================================//

function zoomIn() {
    document.body.style.zoom = "150%"
}

function zoomOut() {
    document.body.style.zoom = "100%"
}

function grayscale() {
    document.body.classList.add("grayscale");
}

function link() {
    var link = document.getElementsByTagName('a');

    for (var i = link.length - 1; i >= 0; --i) {
        link[i].setAttribute("style", "color: yellow !important;");
        link[i].style.backgroundColor = "black";
        link[i].classList.add("yellowicon");

    }
}


