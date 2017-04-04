import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMessages from 'angular-messages';
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
  angularMeteor,
  ngMessages,
])
  .component('resourceSubmit', {
    templateUrl: 'imports/components/resourceSubmit/resourceSubmit.html',
  })
  .controller('ResourceSubmitCtrl', ['$scope', function($scope) {
        //console.log("submit works");
    this.submittedResource = {};
    this.typeOptions = ["Book", "Digital Interactive", "Website", "Class Activity"];
    this.subjectOptions = ["Math", "History", "Science", "Health", "Grammar"];
    this.priceOptions = ["Variable","Free", "One-time Fee", "Subscription", "Pay as You Use"];
    this.ageOptions = ["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","College",]

    this.addResource = function(submittedResource) {
      console.log("begin insert");
      // Insert a task into the collection
      console.log(this.submittedResource.text);

      /*check that everything is filled out before submit
      after a success redirect to the detail view of that page
      */

      Resources.insert({
        Title: this.submittedResource.text,
        Summary: this.submittedResource.summary,
        Type: this.submittedResource.type,
        Location: this.submittedResource.website,
        Recommended_Ages: this.submittedResource.ages,
        Subjects: this.submittedResource.subject,
        price: this.submittedResource.price,
        pricetype: this.submittedResource.pricetype,
        length: this.submittedResource.length,
        Description: this.submittedResource.description,
        createdAt: new Date

        //return true;
      });

      //$state.go(to.redirectTo, params, {location: 'replace'})
      //$stateProvider.state.go('/');

      /*this.clearForm = function() {
      for each field in this.submittedResource,
        set the child === ''
        // Clear form - replace this with a method
        this.submittedResource.text = '';
        this.submittedResource.description = '';
        this.submittedResource.type = '';  //make this better
        this.submittedResource.subject = '';
      }
      */
    }
  }])
  .config(config);

  function config($stateProvider) {
    'ngInject';
    $stateProvider.state('resourceSubmit', {
      url: '/resourceSubmit',
      template: '<resource-submit></resource-submit>'
    });
  }
