GoodsApp.factory('PopupService', ['$uibModal', '$uibModalStack', function ($uibModal, $uibModalStack) {
  return {
    cartOrder: function () {
      return $uibModal.open({
        templateUrl: 'tpl/popups/cart/cart-order.html',
        controller: 'CartOrderCtrl',
        size: 'lg'
      }).result.then(function () {
      }, function () {
        // modal has been closed
      });
    },
    cartItemRemove: function (callback) {
      return $uibModal.open({
        templateUrl: 'tpl/popups/cart/cart-item-remove.html',
        controller: 'CartItemRemove',
        size: 'sm',
        resolve: {
          callback: callback
        }
      }).result.then(function () {
      }, function () {
        // modal has been closed
      });
    }
  }
}]);
