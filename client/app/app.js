angular.module('app', [
    'ui.bootstrap',
    'ui.router',
  ])
  .config(['$urlRouterProvider', '$locationProvider',
    function ($urlRouterProvider, $locationProvider) {
      'use strict';

      $locationProvider.html5mode(true);
      $urlRouterProvider.otherwise('/');
  }])
  .run(['$rootScope', '$state',
    function ($rootScope, $state) {
      'use strict';

      $rootScope.appName = 'app';
      $rootScope.$state = $state;
  }]);
