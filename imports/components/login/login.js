import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './login.html';

//import { Register } from '../register/register';

class LoginCtrl {
  constructor($scope, $state) {
    this.$state = $state;
  }
}


// create a module
export default angular.module('login', [
  angularMeteor,
  uiRouter
])
  .component('login', {
    templateUrl: `imports/components/login/login.html`,

  })
  .controller('LoginCtrl', ['$scope', '$state', function($scope, $state) {

    this.credentials = {
      email: '',
      password: ''
    };

    this.error = '';


    this.login = function() {
      Meteor.loginWithPassword(this.credentials.email,
                                this.credentials.password, function(error) {
        if(error) {
          console.log(error.reason);
        }
        else {
          $state.go('resourcesList');
        }
      });
    }
  }])
  .config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider.state('login', {
    url: '/login',
    template: '<login></login>'
  });
}
