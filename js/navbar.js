$(document).ready(function () {
  var navbar = $(".navbar");
  var isScrolling = false;

  function handleScroll() {
    if (!isScrolling) {
      isScrolling = true;

      window.requestAnimationFrame(function () {
        var bodyScroll = $(window).scrollTop();
        var screenWidth = $(window).width();

        if (bodyScroll > 50 ) {
          $('.navbar-logo img').attr('src', 'images/logo-black.png');
          navbar.addClass("nav-scroll");
        } else {
          $('.navbar-logo img').attr('src', 'images/logo.png');
          navbar.removeClass("nav-scroll");
        }

        isScrolling = false;
      });
    }
  }

  $(window).on("scroll", handleScroll);
  $(window).on("resize", handleScroll); // Handle resizing

  $(window).on("load", function () {
    handleScroll();

    $.scrollIt({
      easing: 'swing',
      scrollTime: 900,
      activeClass: 'active',
      onPageChange: null,
      topOffset: -63
    });
  });
});



