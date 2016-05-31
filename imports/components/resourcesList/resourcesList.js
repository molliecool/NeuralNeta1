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

      toggleFavorite() {
        
        //this.isFavorite = !this.isFavorite;
      },
    });
  }
}

Deps.autorun(function() {
  Meteor.subscribe('resources');
})


export default angular.module("resourcesList", [
  angularMeteor,
])
  .component('resourcesList', {
    templateUrl: 'imports/components/resourcesList/resourcesList.html',
    controller: ['$scope', ResourcesListCtrl]
  })
/*  .controller('ResourcesListCtrl', ['$scope', function($scope) {
    this.toggleFavorite = function() {
      console.log("clicked favorite");
      this.isFavorite = !this.isFavorite;
    }

}])*/  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('resourcesList', {
    url: '/resourcesList',
    template: '<resources-list></resources-list>'
  });
}
