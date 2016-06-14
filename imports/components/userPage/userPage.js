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
    _favorites = [];

    this.helpers({
      getFavorites() {
        if(Meteor.user()){
          currentUser = Meteor.user();
          for( i in currentUser.favoritedResources) {
            Meteor.call("getResource", currentUser.favoritedResources[i], function(error, result){
            if(error){
              console.log(error.reason);
              return;
            }
            _favorites.push(result[0]);
            this.favorites = _favorites;
            console.log('this.favorites', this.favorites);
          });

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
  Meteor.subscribe('getResource', function() {
    console.log("ugh");
  });
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
