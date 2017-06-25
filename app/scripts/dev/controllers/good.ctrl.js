GoodsApp.controller('GoodsCtrl', ['$scope', 'GoodsApiService', '$storage', '$rootScope', function ($scope, GoodsApiService, $storage, $rootScope) {
  $scope.ships = [];
  $scope.loremTpl = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio dolorem dolorum eius harum in minus non nostrum pariatur, perspiciatis porro quasi, quos repellendus saepe tempore tenetur totam velit vitae?</p>';
  GoodsApiService.getGoods().then(function (goodsRes) {
    if (goodsRes.hasNotResults()) return false;
    $scope.ships = handlerShips(goodsRes.getResults());
  });

  $scope.addToCart = function (good) {
    if (good.inCart) {
      $storage.removeItem('ships', good, 'name');
    } else {
      $storage.pushItem('ships', {
        name: good.name,
        price: good.price
      });
    }
    $rootScope.$emit('cart');
    good.inCart = !good.inCart;
  };

  /**
   * handle ships data
   * @param res
   * @returns {Array|*}
   */
  function handlerShips(res) {
    var goods = $storage.getItem('ships');
    res = _.map(res, function (resItem) {
      resItem.price = _.random(1000, 99999);
      resItem.inCart = _.some(goods, {name: resItem.name});
      return resItem
    });
    return res;
  }
}]);
