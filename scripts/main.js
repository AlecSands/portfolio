$(document).ready(function() {
  //Set parameters for cards
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


  //Using partial to load header and footer html
  $.get("partials/nav.html", function(data) {$('nav').append(data);});
  $.get("partials/footer.html", function(data) {$('footer').append(data);});


  //Postion footer based on window height
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
