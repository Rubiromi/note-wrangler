angular.module("NoteWrangler")
.directive("nwCard", function() {
  return {
    restrict: "E",
    templateUrl: "templates/directives/nw-card.html",
    controller: function($scopte) {
      $scope.header = "Note Title";

    },
    controllerAs: "card"
  };
});
