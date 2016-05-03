import angular from 'angular';
import angularMeteor from 'angular-meteor';
//import uiRouter from 'angular-ui-router';

import template from './login.html';

//import { Register } from '../register/register';

class LoginCtrl {
  constructor($scope, $reactive, $state) {
    'ngInject';

    this.$state = $state;

    $reactive(this).attach($scope);

    this.credentials = {
      email: '',
      password: ''
    };

    this.error = '';
  }

  login() {
    console("loginWithPassword called");
    Meteor.loginWithPassword(this.credentials.email, this.credentials.password,

      this.$bindToContext((err) => {
        if (err) {
          this.error = err;
        } else {
          this.$state.go('/');
        }
      })
    );
  }
}


// create a module
export default angular.module('login', [
  angularMeteor,
//  uiRouter
])
  .component('login', {
    templateUrl: `imports/components/login/login.html`,
    controller: LoginCtrl
  })
  .config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider.state('login', {
    url: '/login',
    template: '<login></login>'
  });
}
