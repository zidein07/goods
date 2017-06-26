GoodsApp.directive('headerDirective', [function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'tpl/directives/header.html',
    controller: 'HeaderCtrl',
    scope: {
      props: '='
    }
  }
}]);
