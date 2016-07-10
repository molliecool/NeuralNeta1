import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Resources } from '../../api/resources.js';
import { Accounts } from 'meteor/accounts-base';

import template from './resourcesList.html';
import templateUrl from '../../templates/bigCard.html';




class ResourcesListCtrl {
  constructor($scope, $state, $mdMedia, $mdDialog) {
    $scope.viewModel(this);

    //open the modal window

    this.status = ' ';
    this.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    this.showAdvanced = function(ev, resourceID) {
      console.log("called show advanced");
      this.res = (Resources.find({_id: resourceID}).fetch())[0];

      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: DialogController,
        templateUrl,
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen,
        locals: { res: this.res }
      })
      .then(function(answer) {
        console.log('then');
      }, function() {
        console.log('then again');

      });
      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };



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


function DialogController($scope, $mdDialog, res) {

  $scope.res = res;
  console.log(res);

  this.hide = function() {
    $mdDialog.hide();
  };
  this.cancel = function() {
    $mdDialog.cancel();
  };
  this.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}

Deps.autorun(function() {
  Meteor.subscribe('resources');
  Meteor.subscribe('favoritedResources');
})


export default angular.module("resourcesList", [
  angularMeteor,
])
  .component('resourcesList', {
    templateUrl: 'imports/components/resourcesList/resourcesList.html'
    ,controller: ('ResourcesListCtrl', ['$scope', '$state', '$mdMedia', '$mdDialog', ResourcesListCtrl])
    ,controllerAs: 'rListCtrl'
  })
 .config(config);

function config($stateProvider) {
  'ngInject';
/*  $stateProvider.state('resourcesList', {
    url: '/resourcesList',
    template: '<resources-list></resources-list>'
  });*/
}
