angular.module('website')

.controller('MainCtrl', ['$scope', '$state', function($scope, $state) {
  $(document).ready(function() {
    $('.takemetop').click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
      return false;
    });
  });


  $scope.showAbout = function($event) {
    $event.preventDefault();
    $(".toppadd").hide();
  }

  $scope.home = function() {
    $state.go('index');
  }

  $scope.portfolio = function() {
    $state.go('portfolio');
  }

  $scope.sideProjects = function() {
    $state.go('sideProjects');
  }

  // $scope.go = function(route) {
  //   $state.go(route);
  // }

}])
