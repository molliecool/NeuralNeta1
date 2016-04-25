import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngFileUpload from 'ng-file-upload';

import template from './uploadImage.html';

class UploadImageCtrl {
/*  constructor($scope){
    $scope.viewModel(this);
    console.log("hello?");

    this.helpers({
      addImages(files) {
        console.log("dropped");
      }
    })

  }*/

}


// create a module
export default angular.module('uploadImage', [
  angularMeteor,
  ngFileUpload
])
  .component('uploadImage', {
    templateUrl: 'imports/components/uploadImage/uploadImage.html',
  //  controller: ['$scope', UploadImageCtrl]
})

 .controller('UploadImageCtrl', ['$scope', 'Upload', '$timeout',
    function($scope, Upload, $timeout) {

    console.log("uploadimage created");

    $scope.$watch('files', function() {
      $scope.upload($scope.files);
    });

    $scope.$watch('file', function() {
      if($scope.file !=null) {
        $scope.files = [$scope.file];
      }
    });

    $scope.log = '';


    $scope.upload = function (files) {
        console.log("upload called");
      /*  if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: 'api/files',
                    data: {
                      //username: $scope.username,
                      file: file
                    }
                }).then(function (resp) {
                    $timeout(function() {
                        $scope.log = 'file: ' +
                        resp.config.data.file.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.log;
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage +
                    	'% ' + evt.config.data.file.name + '\n' +
                      $scope.log;
                });
              }
            }
        }*/
      };
  }]);
