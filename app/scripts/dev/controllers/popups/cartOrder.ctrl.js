GoodsApp.controller('CartOrderCtrl', ['$scope', '$storage', '$location', '$uibModalStack','$rootScope', function ($scope, $storage, $location, $uibModalStack, $rootScope) {
  var date = new Date();
  date.setDate(date.getDate() + 1);
  $scope.dateOrder = new Date(date);
  $scope.sendOrder = function (data) {
    // Здесь данные пользователя при отправке
    console.log('data', data);
    // Здесь данные пользователя при отправке
    $storage.remove('ships');
    $rootScope.$emit('cart');
    $location.url('/');
    closePopup();
  };

  $scope.closePopup = function () {
    closePopup();
  };
  function closePopup() {
    $uibModalStack.dismissAll();
  }
}]);
