angular.module('NoteWrangler')
.config(function($routeProvider){
  $routeProvider.when('/notes', {
    templateUrl: '/templates/pages/notes/index.html',
      controller: 'NotesIndexController',
      controllerAs: 'indexController'
  })

  .when('/users', {
    templateUrl: 'templates/pages/users/idex.html',
  })

  .when('/', {
    templateUrl: 'templates/pages/notes/index.html',
  })

  .when('/notes/:id', {
    templateUrl: 'templates/pages/notes/show.html',
    controller: 'NotesShowController',
    controllerAs: 'showController'
  })

  .otherwise({ redirectTo: '/' });
});
