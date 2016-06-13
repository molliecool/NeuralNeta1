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
      getFavorites() {
        if(Meteor.user()){
          currentUser = Meteor.user();
          for( res in currentUser.favoritedResources) {
            console.log(currentUser.favoritedResources[res]);
            temp = Meteor.call('getResource', currentUser.favoritedResources[res]);
            console.log(temp);
            this.favorites.push(temp);
          }
        }
      }
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
    }
}

Deps.autorun(function() {
  Meteor.subscribe('userXP');
  Meteor.subscribe('resources');
  Meteor.subscribe('favoritedResources');
  Meteor.subscribe('getResource');
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
