import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Resources } from '../../api/resources.js';
import { Accounts } from 'meteor/accounts-base';


import template from './resourcesList.html';

class ResourcesListCtrl {
  constructor($scope) {
    //console.log("list works");
    $scope.viewModel(this);


    //this.isFavorite = false;

    this.helpers({
      resources() {
        return Resources.find({});
      },
    });
    this.isFavorite = function(resourceID) {
      var flag = false;
      for(res in Meteor.user().favoritedResources) {
        //console.log(Meteor.user().favoritedResources[res]);
        if(resourceID === Meteor.user().favoritedResources[res]) {
          console.log("flag");
          flag = true;
          break;
        }
      }
      
      if(flag) {
        console.log("is favorite");
        return true;
      }
      else {
        console.log("not favorite");
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
