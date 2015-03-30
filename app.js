angular.module('website', [
  'ngMaterial', 
  'about',
  'ngNewRouter'
])

.controller('AppController', ['$router', AppController]);

function AppController($router) {
  console.log('here')
  $router.config([
    { path: '/', component: 'about' },
    { path: '/portfolio', component: 'portfolio' },
    { path: '/projects', component: 'projects' }
  ]);

  function runFadeIn(elements) {
    timeout = 300;
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].className += " animated fadeInUp"
    };
  }

  $(document).ready(function() {
    runFadeIn(document.querySelectorAll('.animateMe'));
  });
}
