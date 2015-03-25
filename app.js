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
}
