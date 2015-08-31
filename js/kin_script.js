$(function(){
    $('.mini-slideshow img:gt(0)').hide();
    setInterval(function(){
      $('.mini-slideshow :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.mini-slideshow');}, 
      3000);
});