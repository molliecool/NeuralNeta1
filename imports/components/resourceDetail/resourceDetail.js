import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Resources } from '../../api/resources.js'
import template from './resourceDetail.html';

class ResourceDetailCtrl {
  constructor($scope, $stateParams, $mdDialog, $mdMedia) {
    $scope.viewModel(this);

    if(!$stateParams.resourceTitle) {
      console.log('resource not found');
    }

    this.resTitle = $stateParams.resourceTitle;
    console.log(this.resTitle);
    console.log($stateParams.resourceTitle);

    this.res = (Resources.find({Title: this.resTitle}).fetch())[0];
    console.log((Resources.find({Title: this.resTitle}).fetch())[0]);

    this.helpers({
      resources() {
      }

    })
  }
}

Deps.autorun(function() {
  Meteor.subscribe('resources');
})

export default angular.module('resourceDetail', [
  angularMeteor,
  uiRouter
])
  .component('resourceDetail', {
    templateUrl: 'imports/components/resourceDetail/resourceDetail.html',
    controller: ['$scope', '$stateParams', ResourceDetailCtrl],
    controllerAs: 'rDetailCtrl',
  })
  .config(config);

function config($stateProvider) {
  'ngInject';
/*  $stateProvider.state('resourceDetail/:rTitle', {
    url: '/resourceDetail',
    template: '<resource-detail></resource-detail>',
    params: {
      resourceTitle: null
    }
  });*/
}
