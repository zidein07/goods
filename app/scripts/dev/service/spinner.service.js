GoodsApp.factory('$spinner', [function () {
  return {
    show: function () {
      $('.bkg-sk-fading-circle').show();
    },
    hide: function () {
      $('.bkg-sk-fading-circle').hide();
    }
  }
}]);
