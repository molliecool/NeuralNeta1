import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Resources } from '../../api/resources.js'

import template from './resourceSubmit.html';

class ResourceSubmitCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
    })
  }

  addResource(submittedResource) {
    // Insert a task into the collection
    Resources.insert({
      name: submittedResource.text,
      description: submittedResource.description,
      type: submittedResource.type,
      createdAt: new Date
    });

    // Clear form
    this.submitResource.name = '';
  }
}

export default angular.module('resourceSubmit', [
  angularMeteor
])
  .component('resourceSubmit', {
    templateUrl: 'imports/components/resourceSubmit/resourceSubmit.html',
    controller: ['$scope', ResourceSubmitCtrl]
  });
