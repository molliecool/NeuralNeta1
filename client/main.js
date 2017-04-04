import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';

import resourcesList from '../imports/components/resourcesList/resourcesList';
import resourceDetail from '../imports/components/resourceDetail/resourceDetail';
import resourceSubmit from '../imports/components/resourceSubmit/resourceSubmit';
import uploadImage from '../imports/components/uploadImage/uploadImage';
import navigation from '../imports/components/navigation/navigation';
/*import signUp from '../imports/components/signUp/signUp';*/
import authorization from '../imports/components/authorization/authorization';
import login from '../imports/components/login/login';
import register from '../imports/components/register/register';
import password from '../imports/components/password/password';
import userPage from '../imports/components/userPage/userPage';
import comments from '../imports/components/comments/comments';

import '../imports/startup/accounts-config.js';

angular.module('neuralnet', [
  angularMeteor,
  ngMaterial,
  'accounts.ui',
  navigation.name,
  resourcesList.name,
  resourceDetail.name,
  resourceSubmit.name,
  uploadImage.name,
  authorization.name,
  login.name,
  register.name,
//  password.name,
  userPage.name,
  comments.name,
])
  .config(config);


function config($stateProvider, $urlRouterProvider, $mdIconProvider, $mdThemingProvider) {


  $mdThemingProvider.theme('default')
    .primaryPalette('orange',{
      'default': '400', // by default use shade 400 from the pink palette for primary intentions
      /*'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class*/
    })
    .accentPalette('purple');

  const iconPath =  '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';

  $mdIconProvider
    .defaultIconSet('icons/mdi.svg')
    //.iconSet('mdi','icons/mdi.svg')
    .iconSet('social', iconPath + 'svg-sprite-social.svg')
    .iconSet('action',  iconPath + 'svg-sprite-action.svg')
    .iconSet('communication',  iconPath + 'svg-sprite-communication.svg')
    .iconSet('content',  iconPath + 'svg-sprite-content.svg')
    .iconSet('toggle',  iconPath + 'svg-sprite-toggle.svg')
    .iconSet('navigation',  iconPath + 'svg-sprite-navigation.svg')
    .iconSet('image',  iconPath + 'svg-sprite-image.svg');
  }
