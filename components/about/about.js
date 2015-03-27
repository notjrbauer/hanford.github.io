angular.module('about', []).
    controller('AboutController', AboutController);

function AboutController() {
  console.log('About Component Loaded');
  // this.heading = 'About Component!';

    $('.slideshow img:gt(0)').addClass('animated rollIn');
    setInterval(function(){
      $('.slideshow :first-child').addClass('animated rollIn').next('img').addClass('rollIn')
      .end().appendTo('.slideshow');},
      3000);

}