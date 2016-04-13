import angular from 'angular';
import angularMeteor from 'angular-meteor';
import resourcesList from '../imports/components/resourcesList/resourcesList';

angular.module('neuralnet', [
  angularMeteor,
  resourcesList.name
]);
