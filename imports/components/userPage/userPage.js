import angular from 'angular';
import angularMeteor from 'angular-meteor';

class UserPageCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    console.log("does this ever get called");

    this.helpers({
      /*currentUser() {
        return Meteor.user();
      }*/
    })
  }
}

}

angular.module('userPage', [
  angularMeteor,
])
  .component('userPage', {
  templateUrl: 'imports/components/userPage/userPage.html',
})
  .controller('UserPageCtrl', ['$scope', function($scope) {

    this.currentUser = function() {
      return. Meteor.user();
    }
    /*
    userSavedResources
    userInfo
    userXP
    */
  }])
