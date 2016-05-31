import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';
import { login } from '../login/login';
import { register } from '../register/register';
import { password } from '../password/password';

import { userPage } from '../userPage/userPage';

import template from './authorization.html'

class AuthorizationCtrl {
  constructor($scope) {

    //$scope.viewModel(this);

  }
}

export default angular.module('authorization', [
  angularMeteor,
])
  .component('authorization', {
    templateUrl: 'imports/components/authorization/authorization.html',
  })
  .controller('AuthorizationCtrl', ['$scope', '$state', function($scope, $state) {
      this.isLoggedIn = function() {
        return !!Meteor.userId();
      }

      this.currentUser = function() {
        return Meteor.user();
      }

      this.logout = function() {

        Accounts.logout();
        $state.go('authorization');
      }
    }])
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('authorization', {
    url: '/authorization',
    template: '<authorization></authorization>'
  });
}
