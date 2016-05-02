import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Accounts } from 'meteor/accounts-base';

import template from './authorization.html'

class AuthorizationCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      isLoggedIn() {
        return !!Meteor.userId();
      },
      currentUser() {
        return Meteor.user();
      }

    });
  }
  logout() {
    Accounts.logout();
  }
}

export default angular.module('authorization', [
  angularMeteor
])
  .component('authorization', {
    templateUrl: 'imports/components/authorization/authorization.html',
    controller: ['$scope', AuthorizationCtrl]
  })
