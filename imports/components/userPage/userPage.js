import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Resources } from '../../api/resources.js';
import { Accounts } from 'meteor/accounts-base';

import template from './userPage.html';


class UserPageCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.favorites = [];

    this.helpers({
    });

    /*
      this.currentUser = function() {
        return Meteor.user();
      }*/

      this.userXP = function() {
        if(Meteor.user()) {
          var temp = Meteor.user().userXP;
          return temp;
        }
      }

      this.getFavorites = function() {
        if(Meteor.user()){
          return Meteor.user().favoritedResources;
          /*
          need to as mongo to send back the resource object that matches the id in favoritedResources
          and build an array from that
          */
        }
      }
  }

}

Deps.autorun(function() {
  Meteor.subscribe('userXP');
  Meteor.subscribe('resources');
  Meteor.subscribe('favoritedResources');
})


export default angular.module('userPage', [
  angularMeteor,
])
  .component('userPage', {
  templateUrl: 'imports/components/userPage/userPage.html',
  controller: ['$scope', UserPageCtrl],
  controllerAs: 'uPageCtrl',
})
  //.controller('UserPageCtrl', ['$scope', function($scope) {  }])
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('userPage', {
    url: '/userPage',
    template: '<user-page></user-page>'
  });
}
