import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Resources } from '../../api/resources.js';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';

import template from './userPage.html';
import templateUrl from '../../templates/bigCard.html';


class UserPageCtrl {
  constructor($scope, $state, $reactive) {
    $scope.viewModel(this);
    $reactive(this).attach($scope);


    this.favorites = []; //new ReactiveArray();
    this.initialized = false;

    this.helpers({
      popFavorites() {
        if(Meteor.user()){
          currentUser = Meteor.user();
          Meteor.call('getFavorites', currentUser.favoritedResources, function(error, result){
               if(error){
                 console.log(error.reason);
                 return;
               }
             Session.set('faves', result);
             console.log("result "+ result);
           });

           this.favorites = Session.get('faves');
          console.log(this.favorites);
          return this.favorites;

        }
      },//end popFavorites()


    });

    this.isFavorite = function(resourceID) {
      var flag = false;
      for(res in Meteor.user().favoritedResources) {
        //console.log(Meteor.user().favoritedResources[res]);
        if(resourceID === Meteor.user().favoritedResources[res]) {
          flag = true;
          break;
        }
      }

      if(flag) {
        //console.log("is favorite");
        return true;
      }
      else {
        //console.log("not favorite");
        return false;
      }
    }

    this.toggleFavorite = function(resourceID) {

      if(this.isFavorite(resourceID)) {
        console.log("removing favorite");
        Meteor.call('removeFavorite', resourceID);
      }
      else {
        console.log("adding favorite");
        Meteor.call('addFavorite', resourceID);
      }
      console.log(Meteor.user().favoritedResources);
    }

     this.getFaves = function(){
       if(Meteor.user()) {
      //  if(!this.favorites){
          if( this.favorites.length == 0){
           return this.popFavorites();
         }

      // }
       else {
        return this.favorites;
       }
     }
     }

     this.openDetail = function(rID) {
       console.log("go to detail page");
       $state.go('resourceDetail', {resourceID: rID});
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
//  Meteor.subscribe('favoriteObjects');  //not used
})


export default angular.module('userPage', [
  angularMeteor,
  uiRouter,
])
  .component('userPage', {
  templateUrl: 'imports/components/userPage/userPage.html',
  controller: ['$scope', '$state','$reactive', UserPageCtrl],
  controllerAs: 'uPageCtrl',
})
  //.controller('UserPageCtrl', ['$scope', function($scope) {  }])
  .config(config);

function config($stateProvider) {
  'ngInject';
  /*$stateProvider.state('userPage', {
    url: '/userPage',
    template: '<user-page></user-page>'
  });*/
}
