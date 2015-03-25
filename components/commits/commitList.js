angular.module('website')

.directive('commitList', ['$http', function($http) {
  return {
    templateUrl: './components/commits/commit-list.html',
    restrict: 'E',
    link: function (scope, attr, element) {
      $http.get('https://api.github.com/users/hanford/events').success(function(response) {
        var events = [];

        for (var i = 5 - 1; i >= 0; i--) {
          var action = {};
          var evt = response[i];

          if (evt.type.indexOf("Event") > -1) {
            var eType = evt.type.substring(0, evt.type.indexOf("Event"));
            action.type = eType.replace(/([a-z](?=[A-Z]))/g, '$1 ');
          }

          action.date = evt.created_at;
          action.repo = evt.repo.name;
          action.name = evt.actor.login;
          action.avatar = evt.actor.avatar_url;
          events.push(action);
        }

        scope.events = events.reverse();
        console.log(events);

      });
    }
  }
}])