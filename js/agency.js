(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Scroll to card text when in mobile mode
  function scrollToCard(scrollTo) {
    if ($(window).width() < 768) {
      $('html, body').animate({
        scrollTop: $(scrollTo).offset().top - 80
      }, 500);
    }
  }

  // Card functions
  $('.card1').click(function() {
    $('.card1').toggleClass('activeCard');
    $('.card2').removeClass('activeCard');
    $('.card3').removeClass('activeCard');
    $('.cardText3').hide();
    $('.cardText2').hide();
    $('.cardText1').toggle();
    scrollToCard('.cardText1');
  });

  $('.card2').click(function() {
    $('.card2').toggleClass('activeCard');
    $('.card1').removeClass('activeCard');
    $('.card3').removeClass('activeCard');
    $('.cardText1').hide();
    $('.cardText3').hide();
    $('.cardText2').toggle();
    scrollToCard('.cardText2');
  });

  $('.card3').click(function() {
    $('.card3').toggleClass('activeCard');
    $('.card2').removeClass('activeCard');
    $('.card1').removeClass('activeCard');
    $('.cardText1').hide();
    $('.cardText2').hide();
    $('.cardText3').toggle();
    scrollToCard('.cardText3');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict
