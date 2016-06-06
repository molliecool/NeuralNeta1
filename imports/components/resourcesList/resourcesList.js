import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Resources } from '../../api/resources.js';
import { Accounts } from 'meteor/accounts-base';


import template from './resourcesList.html';

class ResourcesListCtrl {
  constructor($scope) {
    //console.log("list works");
    $scope.viewModel(this);


    this.isFavorite = false;

    this.helpers({
      resources() {
        return Resources.find({});
      },
      isFavorite() {
        //return true if favorite found in list
      }
    });

    this.toggleFavorite = function(resourceID) {
      console.log(this.isFavorite);
      this.isFavorite = !this.isFavorite;

      Meteor.call('addResource', resourceID);

    //  Meteor.user().favoritedResources.push(test);  //i'm guessing i dont have permissiont to write
      console.log(Meteor.user().favoritedResources);
    }
  }
}

Deps.autorun(function() {
  Meteor.subscribe('resources');
  Meteor.subscribe('favoritedResources')
})



export default angular.module("resourcesList", [
  angularMeteor,

])
  .component('resourcesList', {
    templateUrl: 'imports/components/resourcesList/resourcesList.html',
    controller: ['$scope', ResourcesListCtrl]
  })
/*  .controller('ResourcesListCtrl', ['$scope', function($scope) {

    this.helpers({
      resources() {
        return Resources.find({});
      }
    });

    //this.resources = Resources.find({});


    this.getResource = function() {
      console.log("resources called");
      var temp = Resources.find({});
      return temp;
    }

    this.toggleFavorite = function() {
      console.log("clicked favorite");
      this.isFavorite = !this.isFavorite;

      if(this.isFavorite) {
        //add to favorites array
        //addFavorite(user,resourceID)
      }
      else {
        //remove from favorites array
        //removeFavorite(user, resourceID)
      }
    }

}]) */ .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('resourcesList', {
    url: '/resourcesList',
    template: '<resources-list></resources-list>'
  });
}
