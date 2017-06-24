GoodsApp.directive('headerDirective', [function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'tpl/header.html',
    controller: 'HeaderCtrl',
    scope: {
      props: '='
    }
  }
}]);
