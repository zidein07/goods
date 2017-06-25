GoodsApp.controller('CartCtrl', ['$scope', '$storage','$rootScope', function ($scope, $storage, $rootScope) {
  $scope.goods = $storage.getItem('ships');
  $scope.removeGood = function (good) {
    $scope.goods = $storage.removeItem('ships', good, 'name');
    $rootScope.$emit('cart');
  };
}]);
