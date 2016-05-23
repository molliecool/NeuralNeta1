import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';

import './password.html';

/*
  reset() {
    Accounts.forgotPassword(this.credentials, this.$bindToContext((err) => {
      if (err) {
        this.error = err;
      } else {
        this.$state.go('parties');
      }
    }));
  }
}

// create a module
export default angular.module("password", [
  angularMeteor,
//  uiRouter
])
  .component("password", {
    templateUrl: `imports/components/password/password.html`,
    controller: Ctrl
  })
  .config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider.state('password', {
    url: '/password',
    template: '<password></password>'
  });
}*/
