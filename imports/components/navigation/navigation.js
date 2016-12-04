import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';

import template from './navigation.html';

import resourcesList from '../resourcesList/resourcesList';
import resourceDetail from '../resourceDetail/resourceDetail';
import resourceSubmit from '../resourceSubmit/resourceSubmit';
/*import signUp from '../signUp/signUp';*/



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
  .controller("NavigationCtrl", ["$scope", function($scope) {

    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    }

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    }

    this.currentUser = function() {
      return Meteor.user();
    }
  }])

 .config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('resourcesList', {
        url: '/resourcesList'
        ,template: '<resources-list></resources-list>'
      })
      .state('userPage', {
        url: '/userPage'
        ,template: '<user-page></user-page>'
      })
      .state('resourceDetail/:rTitle', {
        url: '/resourceDetail'
        ,template: '<resource-detail></resource-detail>'
        ,params: {
          resourceTitle: null
        }
      })
      .state('smallCard', {
        url: '/smallCard'
        ,templateURL: './templates/smallCard.html'
        ,controller: function($scope, resourceID) {
          this.res = (Resources.find({_id: resourceID}).fetch())[0];
        }
      })
  //$locationProvider.html5Mode(true);

  //for an unmatched url redirect to list

}
