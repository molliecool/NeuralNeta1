import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Accounts } from 'meteor/accounts-base';




export default angular.module('userFactory', [
  angularMeteor,
]).config(['$provide', function($provide) {
  $provide.factory('getUser', function() {

    console.log("i have no idea what i'm doing");

  })
}])
