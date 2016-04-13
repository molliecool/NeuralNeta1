import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Items } from '../../api/items.js'

import template from './resourcesList.html';

class ResourcesListCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      items() {
        return Items.find({});
      }
    })
  }
  
  addItem(newItem) {
    // Insert a task into the collection
    Items.insert({
      text: newItem,
      createdAt: new Date
    });

    // Clear form
    this.newItem = '';
  }
}



export default angular.module('resourcesList', [
  angularMeteor
])
  .component('resourcesList', {
    templateUrl: 'imports/components/resourcesList/resourcesList.html',
    controller: ['$scope', ResourcesListCtrl]
  });
