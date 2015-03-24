angular.module('website', ['ngMaterial', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "/assets/js/templates/about-me.html"
    })
    .state('portfolio', {
      url: "/portfolio",
      templateUrl: "/assets/js/templates/portfolio.html",
    })
    .state('sideProjects', {
      url: "/sideprojects",
      templateUrl: "/assets/js/templates/projects.html",
    })

    $urlRouterProvider.otherwise("/");
})