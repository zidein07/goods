GoodsApp.config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
  $stateProvider.state('main', {
    url: '/',
    controller: 'GoodsCtrl',
    templateUrl: getRouteTemplate('goods')
  }).state('about', {
    url: '/about',
    controller: 'AboutCtrl',
    templateUrl: getRouteTemplate('about')
  });

  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
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
