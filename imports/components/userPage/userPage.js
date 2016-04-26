import angular from 'angular';
import angularMeteor from 'angular-meteor';

class UserPageCtrl {
  constructor($scope) {
    $scope.viewModel(this);

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
  controller: 'UserPageCtrl',
})





/*
userSavedResources
userInfo
userXP
*/
