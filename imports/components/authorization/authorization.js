import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';
import { login } from '../login/login';
import { register } from '../register/register';

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
  angularMeteor,
//  login.name,
])
  .component('authorization', {
    templateUrl: 'imports/components/authorization/authorization.html',
    controller: ['$scope', AuthorizationCtrl]
  })
