$(document).ready(function() {
  $("#learn-more").on("click", function(e) {

    e.preventDefault();

    $("body, html").animate({
        scrollTop: $('#box-grid').offset().top
    }, 500);
  });
});