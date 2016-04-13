import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './resourcesList.html';

class ResourcesListCtrl {
  constructor() {
    this.items = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];
  }
}

export default angular.module('resourcesList', [
  angularMeteor
])
  .component('resourcesList', {
    templateUrl: 'imports/components/resourcesList/resourcesList.html',
    controller: ResourcesListCtrl
  });
