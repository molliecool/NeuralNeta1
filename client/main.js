import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import resourcesList from '../imports/components/resourcesList/resourcesList';
import resourceDetail from '../imports/components/resourceDetail/resourceDetail';
import resourceSubmit from '../imports/components/resourceSubmit/resourceSubmit';
import uploadImage from '../imports/components/uploadImage/uploadImage';
import navigation from '../imports/components/navigation/navigation';
import signUp from '../imports/components/signUp/signUp';

import '../imports/startup/accounts-config.js';

angular.module('neuralnet', [
  angularMeteor,
  'accounts.ui',
  navigation.name,
  resourcesList.name,
  resourceDetail.name,
  resourceSubmit.name,
  uploadImage.name,
  signUp.name,
])
