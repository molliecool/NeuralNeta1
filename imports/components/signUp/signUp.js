import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './signUp.html';

class SignUpCtrl {
  constructor($scope) {
    //console.log("list works");
    $scope.viewModel(this);

    this.helpers({

    })
  }
}

export default angular.module('signUp', [
  angularMeteor
])
  .component('signUp', {
    templateUrl: 'imports/components/signUp/signUp.html',
    controller: ['$scope', SignUpCtrl]
  })
/*  .controller('ResourcesListCtrl', ['$scope', function($scope) {

}]);*/
