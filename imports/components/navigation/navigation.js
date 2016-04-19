import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './navigation.html';

class NavigationCtrl {
  constructor($scope) {
  }
}

export default angular.module("navigation", [
  angularMeteor,
  uiRouter
])
  .component("navigation", {
  templateUrl: 'imports/components/navigation/navigation.html',
  controller:  ['$scope', NavigationCtrl]
})
 .config(function($stateProvider, $urlRouterProvider){
  //for an unmatched url redirect to list
  $urlRouterProvider.otherwise("/list");

  $stateProvider
    .state("list", {
      url: "/list",
      templateUrl: 'imports/components/resourcesList/resourcesList.html'
    })
    .state('submit', {
      url: "/submit",
      templateUrl: 'imports/components/resourceSubmit/resourceSubmit.html'
    })
})
