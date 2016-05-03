import angular from 'angular';
import angularMeteor from 'angular-meteor';
//import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';

import './register.html';

class RegisterCtrl {
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

  register() {
    Accounts.createUser(this.credentials,
      this.$bindToContext((err) => {
        if (err) {
          this.error = err;
        } else {
          this.$state.go('parties');
        }
      })
    );
  }
}


// create a module
export default angular.module('register', [
  angularMeteor,
//  uiRouter
])
  .component('register', {
    templateUrl: `imports/components/register/register.html`,
    controller: RegisterCtrl
  })
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('register', {
    url: '/register',
    template: '<register></register>'
  });
}
