import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Resources } from '../../api/resources.js';

import template from './resourcesList.html';

class ResourcesListCtrl {
  constructor($scope) {
    //console.log("list works");
    $scope.viewModel(this);

    this.helpers({
      resources() {
        return Resources.find({});
      }
    })
  }
}

export default angular.module('resourcesList', [
  angularMeteor
])
  .component('resourcesList', {
    templateUrl: 'imports/components/resourcesList/resourcesList.html',
    controller: ['$scope', ResourcesListCtrl]
  })
/*  .controller('ResourcesListCtrl', ['$scope', function($scope) {

}]);*/
