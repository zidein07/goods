GoodsApp.controller('CartItemRemove', ['$scope', '$uibModalStack', 'callback', function ($scope, $uibModalStack, callback) {
  /**
   * can be true: remove! can be false
   * @param type
   */
  $scope.removeItemCart = function (type) {
    if (type) callback.callbackSuccess();
    closePopup();
  };
  $scope.closePopup = function () {
    closePopup();
  };
  function closePopup() {
    $uibModalStack.dismissAll();
  }
}]);
