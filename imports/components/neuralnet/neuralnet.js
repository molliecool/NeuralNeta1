import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './neuralnet.html';
import ResourcesList from '../resourcesList/resourcesList';
//import ResourceDetail from '../resourceDetail/resourceDetail';
//import Navigation  from '../navigation/navigation';


class NeuralNetCtrl {
  constructor() {
    console.log("hello?");
  }
}

const name = 'neuralnet';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  ResourcesList,
  //ResourceDetail,
  //Navigation
]).component(name, {
    templateUrl: 'imports/ui/components/${name}/${name}.html',
    controllerAs: name,
    controller: NeuralNetCtrl
  })
/*    .config(config);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  console.log("neural");

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/resources');
}
*/


console.log("neural");
