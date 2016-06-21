import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Resources } from '../../api/resources.js';
import { Accounts } from 'meteor/accounts-base';


import template from './resourcesList.html';

class ResourcesListCtrl {
  constructor($scope, $state) {
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

    this.openDetail = function(rTitle) {
      console.log("go to detail page");
      $state.go('resourceDetail/:rTitle', {resourceTitle: rTitle});
    }
  }
}

Deps.autorun(function() {
  Meteor.subscribe('resources');
  Meteor.subscribe('favoritedResources');
})



export default angular.module("resourcesList", [
  angularMeteor,

])
  .component('resourcesList', {
    templateUrl: 'imports/components/resourcesList/resourcesList.html',
    controller: ['$scope', '$state', ResourcesListCtrl]
  })
 .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('resourcesList', {
    url: '/resourcesList',
    template: '<resources-list></resources-list>'
  });
}
