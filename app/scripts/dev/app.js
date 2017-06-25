var GoodsApp = angular.module('goodsApp', [
  'ui.router',
  'pascalprecht.translate',
  'ui.bootstrap'
]).run(['$rootScope', function ($rootScope) {
  $rootScope.$broadcast('cart');
}]);
