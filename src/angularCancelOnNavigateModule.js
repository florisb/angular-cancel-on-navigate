angular
  .module('angularCancelOnNavigateModule', [])
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('HttpRequestTimeoutInterceptor');
  }])
  .run(['$rootScope', 'HttpPendingRequestsService', function ($rootScope, HttpPendingRequestsService) {
    $rootScope.$on('$locationChangeSuccess', function (event, newUrl, oldUrl) {
      if (newUrl != oldUrl) {
        HttpPendingRequestsService.cancelAll();
      }
    })
  }]);
