import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Resources } from '../../api/resources.js';

import template from './resourceSubmit.html';
import uploadImage from '../uploadImage/uploadImage';

class ResourceSubmitCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
    })
  }
}

export default angular.module('resourceSubmit', [
  angularMeteor
])
  .component('resourceSubmit', {
    templateUrl: 'imports/components/resourceSubmit/resourceSubmit.html',
  })
  .controller('ResourceSubmitCtrl', ['$scope', function($scope) {
        //console.log("submit works");
    this.submittedResource = {};

    this.addResource = function(submittedResource) {
      console.log("begin insert");
      // Insert a task into the collection
      Resources.insert({
        name: submittedResource.text,
        description: submittedResource.description,
        type: [
                submittedResource.isBook,
                submittedResource.isGame,
                submittedResource.isWebsite,
                submittedResource.isClassActivity
              ],
        subject: [
                submittedResource.isMath,
                submittedResource.isHistory,
                submittedResource.isScience,
                submittedResource.isHealth
              ],
        createdAt: new Date
      });

      // Clear form - replace this with a method
      this.submittedResource.text = '';
      this.submittedResource.description = '';
      this.submittedResource.type = '';  //make this better
      this.submittedResource.subject = '';
    }
  }])
