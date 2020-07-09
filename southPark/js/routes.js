angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.inicio', {
    url: '/HomeLogin',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.pedidos', {
    url: '/homero',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedidos.html',
        controller: 'pedidosCtrl'
      }
    }
  })

  .state('menu.misDatos', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/misDatos.html',
        controller: 'misDatosCtrl'
      }
    }
  })

  .state('menu.modificado', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/modificado.html',
        controller: 'modificadoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/HomeLogin')


});