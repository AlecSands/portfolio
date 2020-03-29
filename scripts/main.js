$(document).ready(function() {
  $('.single-item').slick({
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  var navHtml2 = "";
  var navHtml = $.get("partials/nav.html", function(data) {navHtml2 = data;});
  console.log(navHtml);
  console.log(navHtml2);

  $('nav').append(navHtml2);

  function positionFooter () {
    $(".main").css('height', '');
    var contentHeight = $(".main").height();
    var windowHeight = $(window).height();

    if (contentHeight <= (windowHeight-137)) {
      $(".main").height(windowHeight-137);
    }
  }

  $(window).resize(positionFooter);

  positionFooter();
});
