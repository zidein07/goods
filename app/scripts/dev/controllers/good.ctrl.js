GoodsApp.controller('GoodsCtrl', ['$scope', 'GoodsApiService', function ($scope, GoodsApiService) {
  $scope.goods = [];
  $scope.loremTpl = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio dolorem dolorum eius harum in minus non nostrum pariatur, perspiciatis porro quasi, quos repellendus saepe tempore tenetur totam velit vitae?';
  GoodsApiService.getGoods().then(function (goodsRes) {
    if (goodsRes.hasNotResults()) return false;
    $scope.goods = goodsRes.getResults();
  })
}]);
