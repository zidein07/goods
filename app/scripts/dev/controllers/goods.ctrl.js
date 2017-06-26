GoodsApp.controller('GoodsCtrl', ['$scope', 'GoodsApiService', '$storage', '$rootScope', '$interval', '$spinner', function ($scope, GoodsApiService, $storage, $rootScope, $interval, $spinner) {
  $scope.loadGoods = function () {
    $spinner.show();
    $scope.ships = [];
    GoodsApiService.getGoods().then(function (goodsRes) {
      $spinner.hide();
      if (goodsRes.hasNotResults()) return false;
      $scope.ships = handlerShips(goodsRes.getResults());
    });
  };

  /**
   * load data every 1m
   */
  $scope.Timer = $interval(function () {
    $scope.loadGoods();
  }, 60000);
  $scope.loadGoods();

  $scope.$on("$destroy",function(){
    if (angular.isDefined($scope.Timer)) {
      $interval.cancel($scope.Timer);
    }
  });

  /**
   * add data to cart
   * @param good
   */
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
    return _.map(res, function (resItem) {
      resItem.price = _.random(1000, 99999);
      resItem.inCart = _.some(goods, {name: resItem.name});
      return resItem
    });
  }
}]);
