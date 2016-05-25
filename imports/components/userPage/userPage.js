import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './userPage.html'

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

export default angular.module('userPage', [
  angularMeteor,
])
  .component('userPage', {
  templateUrl: 'imports/components/userPage/userPage.html',
})
  .controller('UserPageCtrl', ['$scope', function($scope) {
    console.log("does this ever get called");

    this.currentUser = function() {
      return Meteor.user();
    }

  }])
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('userPage', {
    url: '/userPage',
    template: '<user-page></user-page>'
  });
}
