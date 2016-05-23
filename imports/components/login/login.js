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
  .controller('LoginCtrl', ['$scope', function($scope, $state) {
    console.log($state + " from login");
    this.$state = $state;

    this.credentials = {
      email: '',
      password: ''
    };

    this.error = '';


    this.login = function() {
      console.log("loginWithPassword called");
      Meteor.loginWithPassword(this.credentials.email,
                                this.credentials.password, function(error) {
        console.log("login initiated")
        if(error) {
          console.log(error.reason);
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

  $stateProvider.state('login', {
    url: '/login',
    template: '<login></login>'
  });
}
