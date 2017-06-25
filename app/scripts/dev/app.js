var GoodsApp = angular.module('goodsApp', [
  'ui.router',
  'pascalprecht.translate'
]).run(['$rootScope', function ($rootScope) {
  $rootScope.$broadcast('cart');
}]);
