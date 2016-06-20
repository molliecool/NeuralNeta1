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
      popFavorites() {
        if(Meteor.user()){
          currentUser = Meteor.user();
          Meteor.call('getFavorites', currentUser.favoritedResources, function(error, result){
               if(error){
                 console.log(error.reason);
                 return;
               }
             //_favorites.push(result[0]);
             //this.favorites = _favorites;
             Session.set('faves', result);
             console.log("result "+ result);
           });
           this.favorites = Session.get('faves');
          console.log(this.favorites);
          return this.favorites;

        }
      },//end popFavorites()


    });


/*
    this.popfavorites = function() {

      if(Meteor.user()){
        currentUser = Meteor.user();
        Meteor.call('getFavorites', currentUser.favoritedResources, function(error, result){
             if(error){
               console.log(error.reason);
               return;
             }
           //_favorites.push(result[0]);
           //this.favorites = _favorites;
           Session.set('faves', result);
           console.log("result "+ result);
         });
         this.favorites = Session.get('faves');
        console.log(this.favorites);
        return this.favorites;

      }

     }
*/

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
       //console.log(this.favorites);
      // console.log(this.favorites.length)
       if(Meteor.user()) {
        if(!this.favorites && this.favorites.length == 0){
           return this.popFavorites();
         }
         else {
          return this.favorites;
         }
       }
     }

     this.openDetail = function(resourceID) {
       console.log("clicked");
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



/*_favorites = [];
if(!this.initialized) {
  this.initialized = true;
  for( i in currentUser.favoritedResources) {
    var _res = Resources.find({_id: currentUser.favoritedResources[i]}).fetch();
    console.log('_res', _res);
    _favorites.push(_res[0]);
    this.favorites = _favorites;
    console.log(this.favorites);
    Session.set('faves', this.favorites);*/
    // Meteor.call("getResource", currentUser.favoritedResources[i], function(error, result){
    //     if(error){
    //       console.log(error.reason);
    //       return;
    //     }
    //   _favorites.push(result[0]);
    //   this.favorites = _favorites;
    //   Session.set('faves', this.favorites);
    //
    //
    //
    // }); // end call
//  }
//  }
