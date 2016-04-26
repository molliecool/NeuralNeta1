import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './navigation.html';
import resourcesList from '../resourcesList/resourcesList';
import resourceDetail from '../resourceDetail/resourceDetail';
import resourceSubmit from '../resourceSubmit/resourceSubmit';
import signUp from '../signUp/signUp';



class NavigationCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({

    })
  }
}


export default angular.module("navigation", [
  angularMeteor,
  uiRouter
])
  .component("navigation", {
  templateUrl: 'imports/components/navigation/navigation.html',
})
  .controller("navigationCtrl", ["$scope", function($scope) {

    this.tab = 2;

    this.selectTab = function(setTab) {
      this.tab = setTab;
      console.log(this.currentUser);
    }

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    }

    this.currentUser = function() {
      return Meteor.user();
    }
  }]);

/* .config(function($stateProvider, $urlRouterProvider){
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
})*/
