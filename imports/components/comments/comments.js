import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Resources } from '../../api/resources.js';
import { Accounts } from 'meteor/accounts-base';

import template from './comments.html';

class CommentsCtrl {
  constructor($scope, $state, $mdMedia, $mdDialog) {
    $scope.viewModel(this);


  }
}

export default angular.module("comments", [])
//  .controller('commentsCtrl', ['$scope', CommentsCtrl])
  .component('comments', {
    templateUrl: '/imports/components/comments/comments.html'
    ,controller: ('CommentsCtrl', ['$scope', CommentsCtrl])
    ,controllerAs: 'commentsCtrl'
  })
  .factory('getComments', function(resourceID) {
    var commentsList = (Comments.find({}/*ResourceID: resourceID*/).fetch())[0];

    console.log(commentsList);

    return commentsList;
  })
