GoodsApp.filter('sum', [function () {
  /**
   * element: property of object in `arr` can be undefined
   */
  return function (arr, element) {
    return element ? _.sumBy(arr, element) : _.sumBy(arr);
  };
}]);
