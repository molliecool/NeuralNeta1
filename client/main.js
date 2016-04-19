import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import resourcesList from '../imports/components/resourcesList/resourcesList';
import resourceDetail from '../imports/components/resourceDetail/resourceDetail';
import resourceSubmit from '../imports/components/resourceSubmit/resourceSubmit';
import navigation from '../imports/components/navigation/navigation';

angular.module('neuralnet', [
  angularMeteor,
  navigation.name,
  resourcesList.name,
  resourceDetail.name,
  resourceSubmit.name

])
