import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';

import template from './userPage.html'


class UserPageCtrl {
  constructor($scope) {
    $scope.viewModel(this);
    this.helpers({
    })
  }
}

Deps.autorun(function() {
  Meteor.subscribe('userXP');
})


export default angular.module('userPage', [
  angularMeteor,
])
  .component('userPage', {
  templateUrl: 'imports/components/userPage/userPage.html',
})
  .controller('UserPageCtrl', ['$scope', function($scope) {


    this.currentUser = function() {
      return Meteor.user();
    }


    this.userXP = function() {
      if(Meteor.user()) {
        var temp = Meteor.user().userXP;
        return temp;
      }
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
