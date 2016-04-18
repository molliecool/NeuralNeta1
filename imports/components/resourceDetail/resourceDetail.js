import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Resources } from '../../api/resources.js'
import template from './resourceDetail.html';

class ResourceDetailCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({

    })
  }
}

export default angular.module('resourceDetail', [
  angularMeteor,
  uiRouter
])
  .component('resourceDetail', {
    templateUrl: 'imports/components/resourceDetail/resourceDetail.html',
    controller: ['$scope', ResourceDetailCtrl]
  })
