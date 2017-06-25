GoodsApp.config(['$stateProvider', '$locationProvider','$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
  $stateProvider.state('cart', {
    url: '/cart',
    controller: 'CartCtrl',
    templateUrl: getRouteTemplate('cart')
  }).state('goods', {
    url: '/',
    controller: 'GoodsCtrl',
    templateUrl: getRouteTemplate('goods')
  });

  $locationProvider.hashPrefix('');
  function getRouteTemplate(name) {
    var tpl = 'tpl/';
    return tpl + name + '.html'
  }

  $urlRouterProvider.otherwise("/");
  /**
   *  For server and do not forgot inject locationProvider
   */
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
}]);
