GoodsApp.controller('CartCtrl', ['$scope', '$storage', '$rootScope', 'PopupService', function ($scope, $storage, $rootScope, PopupService) {
  $scope.goods = $storage.getItem('ships');
  $scope.removeGood = function (good) {
    $scope.goods = $storage.removeItem('ships', good, 'name');
    $rootScope.$emit('cart');
  };
  $scope.takeOrder = function () {
    PopupService.cartOrder();
  }
}]);
