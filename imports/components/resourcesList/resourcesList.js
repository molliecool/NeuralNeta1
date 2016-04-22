import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Resources } from '../../api/resources.js';

import template from './resourcesList.html';
/*
class ResourcesListCtrl {
  constructor($scope) {
    console.log(Resources.count());
    $scope.viewModel(this);

    this.helpers({

    })
  }
}
*/
export default angular.module('resourcesList', [
  angularMeteor
])
  .component('resourcesList', {
    templateUrl: 'imports/components/resourcesList/resourcesList.html',
  })
  .controller('ResourcesListCtrl', ['$scope', function($scope) {

  }]);
