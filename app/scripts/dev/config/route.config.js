GoodsApp.config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
  $stateProvider.state('goods', {
    url: '/',
    controller: 'GoodsCtrl',
    templateUrl: getRouteTemplate('goods')
  }).state('about', {
    url: '/about',
    controller: 'AboutCtrl',
    templateUrl: getRouteTemplate('about')
  }).state('cart', {
    url: '/cart',
    controller: 'CartCtrl',
    templateUrl: getRouteTemplate('cart')
  });

  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });


  function getRouteTemplate(name) {
    var tpl = 'tpl/';
    return tpl + name + '.html'
  }
  /**
   *  For server and do not forgot inject locationProvider
   */
  // $locationProvider.html5Mode(true);
}]);
