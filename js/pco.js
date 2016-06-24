$(function(){

  $('.above-fold-panel').delay(200).animate({opacity: 1}, 2500);

  $("#learn-more").on("click", function(e) {

    e.preventDefault();

    $("body, html").animate({
        scrollTop: $('#box-grid').offset().top
    }, 500);
  });
});