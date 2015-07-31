$(function(){

  $('.above-fold-panel').delay(200).animate({opacity: 1}, 2500);

  $("#explore").on("click", function(e) {

    e.preventDefault();

    $("body, html").animate({
        scrollTop: $('.projects').offset().top
    }, 500);
  });
});