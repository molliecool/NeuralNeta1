import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';

import './register.html';

class RegisterCtrl {
  constructor($scope) {

  }
}


// create a module
export default angular.module('register', [
  angularMeteor,
  uiRouter
])
  .component('register', {
    templateUrl: `imports/components/register/register.html`,
  })
  .controller('RegisterCtrl', ['$scope', function($scope, $state) {
    this.$state = $state;

    this.credentials = {
      email: '',
      password: ''
    };

    this.error = '';

    this.register = function(event) {
      //event.preventDefault();

      Accounts.createUser(this.credentials, function(error) {
        console.log("create user process initiated");

        if(error) {
          console.log(error.reason)
        }
        else {
          this.$state.go('resourcesList');
        }
      });
    }
  }])
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('register', {
    url: '/register',
    template: '<register></register>'
  });
}
