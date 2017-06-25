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
    }
  }
}]);
