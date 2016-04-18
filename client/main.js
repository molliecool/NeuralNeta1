import angular from 'angular';
import angularMeteor from 'angular-meteor';

import resourcesList from '../imports/components/resourcesList/resourcesList';
import resourceDetail from '../imports/components/resourceDetail/resourceDetail';
import resourceSubmit from '../imports/components/resourceSubmit/resourceSubmit';

angular.module('neuralnet', [
  angularMeteor,
  resourcesList.name,
  resourceDetail.name,
  resourceSubmit.name
]);
