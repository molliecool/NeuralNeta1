import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Resources } from '../../api/resources.js';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';

import template from './userPage.html';


class UserPageCtrl {
  constructor($scope, $reactive) {
    $scope.viewModel(this);
    $reactive(this).attach($scope);


    this.favorites = []; //new ReactiveArray();
    this.initialized = false;
  //  _favorites = [];

    this.helpers({
      getFavorites() {

      },//end getFavorites()


    });



    this.favorites = function() {
      if(Meteor.user()){
        currentUser = Meteor.user();

        _favorites = [];
        if(!this.initialized) {
          this.initialized = true;
          for( i in currentUser.favoritedResources) {
            Meteor.call("getResource", currentUser.favoritedResources[i], function(error, result){
                if(error){
                  console.log(error.reason);
                  return;
                }
              _favorites.push(result[0]);
              this.favorites = _favorites;
              Session.set('faves', this.favorites);

              console.log(this.favorites);


            }); // end call
        }
      }

        console.log("outside call");
      //  this.favorites = Session.get('faves');
      //  console.log(this.favorites);
      return Session.get('faves');
      }

     }



     this.userXP = function() {
       if(Meteor.user()) {
         var temp = Meteor.user().userXP;
         return temp;
       }
     }
 }//end constructor
}

Deps.autorun(function() {
  Meteor.subscribe('userXP');
  Meteor.subscribe('resources');
  Meteor.subscribe('favoritedResources');
  Meteor.subscribe('getResource', function() {

  });
})


export default angular.module('userPage', [
  angularMeteor,
])
  .component('userPage', {
  templateUrl: 'imports/components/userPage/userPage.html',
  controller: ['$scope','$reactive', UserPageCtrl],
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
