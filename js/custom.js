 //Begin - Window Load
 $(window).load(function () {
     $('#page-loader').delay(300).fadeOut(400, function () {});
     $('#loader-name').addClass('loader-left');
     $('#loader-job').addClass('loader-right');
     $('#loader-animation').addClass('loader-hide');
 });
 $(document).ready(function () {
     $('#loading-wraper').fadeIn(300);
 });

 $(document).ready(function () {
     // sticky menu
     var header = $('.menu-sticky');
     var win = $(window);
     win.on('scroll', function () {
         var scroll = win.scrollTop();
         if (scroll < 300) {
             header.removeClass("sticky");
             header.addClass("header2");
         } else {
             header.addClass("sticky");
             header.removeClass("header2");
         }
     });
     //canvas menu
     var navexpander = $('#nav-expander');
     if (navexpander.length) {
         $('#nav-expander').on('click', function (e) {
             e.preventDefault();
             $('body').toggleClass('nav-expanded');
         });
     }
     var navclose = $('#nav-close');
     if (navclose.length) {
         $('#nav-close').on('click', function (e) {
             e.preventDefault();
             $('body').removeClass('nav-expanded');
         });
     }

     $(".hamburger-menu-container ul li").on('click', function () {
         $(this).children('.sub-menu').slideToggle();
     });
     $('.menu li a').on('click', function (e) {
         $('body').removeClass('nav-expanded');
     });
     // onepage nav
     $(".navbar li").on("click", function () {
         if ($(".showhide").is(":visible")) {
             $(".showhide").trigger("click");
         }
     });

     if ($.fn.onePageNav) {
         $(".navbar").onePageNav({
             currentClass: "active"
         });
     }

     // collapse hidden
     $(function () {
         var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // "a:not([data-toggle])" - to avoid issues caused
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
         });
     });

     // scrollTop init
     var totop = $('#scrollUp');
     win.on('scroll', function () {
         if (win.scrollTop() > 150) {
             totop.fadeIn();
         } else {
             totop.fadeOut();
         }
     });

     totop.on('click', function () {
         $("html,body").animate({
             scrollTop: 0
         }, 500)
     });

     // Smooth scroll js-----
     var html_body = $('html, body');
     $('ul li a').on('click', function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 html_body.animate({
                     scrollTop: target.offset().top - 60
                 }, 500);
                 return false;
             }
         }
     });

     // typed js Start------
     $(".typed").typed({
         strings: ["Freelancher...", "Frontin Designer...", "Web Devloper..."],
         // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
         stringsElement: null,
         // typing speed
         typeSpeed: 100,
         // time before typing starts
         startDelay: 1200,
         // backspacing speed
         backSpeed: 20,
         // time before backspacing
         backDelay: 500,
         // loop
         loop: true,
         // false = infinite
         loopCount: 5,
         // show cursor
         showCursor: false,
         // character for cursor
         cursorChar: "|",
         // attribute to type (null == text)
         attr: null,
         // either html or text
         contentType: 'html',
         // call when done callback function
         callback: function () {},
         // starting callback function before each string
         preStringTyped: function () {},
         //callback for every typed string
         onStringTyped: function () {},
         // callback for reset
         resetCallback: function () {}
     });

     //    active-brand-carusel
     $('.active-brand-carusel').slick({
         slidesToShow: 5,
         slidesToScroll: 2,
         autoplay: true,
         arrows: false,
         dots: false,
         autoplaySpeed: 2000,
         responsive: [
             {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                 }
    }
  ]
     });

     // Skill Bar Progress
     jQuery('.skillbar').each(function () {
         jQuery(this).find('.progress-fill-bar').animate({
             width: jQuery(this).attr('data-percent')
         }, 6000);
     })
     //Counter Up
     $('.counter').counterUp({
         delay: 10,
         time: 3000
     });
     //achievement-slider
     $('.service-slider').slick({
         slidesToShow: 3,
         slidesToScroll: 3,
         autoplay: true,
         centerMode: true,
         centerPadding: '100px',
         arrows: true,
         dots: false,
         infinite: true,
         autoplaySpeed: 4000,
         prevArrow: '.arrow_left',
         nextArrow: '.arrow_right',
         responsive: [
             {
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                     infinite: true,
                 }
    },
             {
                 breakpoint: 600,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
    },
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     centerPadding: '40px'
                 }
    }
  ]
     });

     //achievement-slider
     $('.claint-wraper').slick({
         slidesToShow: 3,
         slidesToScroll: 3,
         autoplay: true,
         centerMode: true,
         centerPadding: '80px',
         arrows: false,
         dots: false,
         infinite: true,
         autoplaySpeed: 4000,
         prevArrow: ' <i class="fa fa-chevron-left arrow_left"></i>',
         nextArrow: ' <i class="fa fa-chevron-right arrow_right"></i>',
         responsive: [
             {
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                     infinite: true,
                 }
    },
             {
                 breakpoint: 600,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
    },
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     centerPadding: '40px'
                 }
    }
  ]
     });

     var mixer = mixitup('.portfolio-item-gellary');
     // mixitup function
     $('.gallery ul li').on('click', function () {
         $('.gallery ul li').removeClass('active');
         $(this).addClass('active');
         var selector = $(this).attr('data-filter');
         $('.portfolio-item-gellary').isotope({
             filter: selector
         });
         return false;
     });

     // wow init
     new WOW().init();
 })(jQuery);

 function chat_send() {
     document.getElementsByClassName("chat_s")[0].innerHTML +=
         '<div class="chat chat_me">' +
         document.getElementById("entry_1650216873").value +
         "</div>";
     chat_tobottom();
     document.getElementById("entry_1650216873").value = "";
 }

 function chat_tobottom() {
     document.getElementsByClassName(
         "chat_s"
     )[0].scrollTop = document.getElementsByClassName("chat_s")[0].scrollHeight;
 }

 function chat_load() {
     document.getElementsByClassName("chat_s")[0].innerHTML =
         "<p style='margin:20px'>Loading...</p>";
     $.getJSON(
         "",
         function (data) {
             document.getElementsByClassName("chat_s")[0].innerHTML = "";
             for (var i = 0; i < data.feed.entry.length; i++) {
                 var entry = data.feed.entry[i];
                 var a;
                 if (entry.gsx$name.$t == "Ariana") {
                     a = "chat_ar";
                 } else {
                     a = "chat_me";
                 }
                 document.getElementsByClassName("chat_s")[0].innerHTML +=
                     '<div class="chat ' +
                     a +
                     '">' +
                     entry.gsx$message.$t +
                     "</div>";
             }
         }
     );
 }

 chat_load();