GoodsApp.controller('HeaderCtrl', ['$scope', '$translate', '$storage', '$rootScope', function ($scope, $translate, $storage, $rootScope) {
  $scope.languages = [{
    "val": "ru",
    "lang": "Русский"
  }, {
    "val": "en",
    "lang": "English"
  }];
  $scope.currentLang = getCurrentLang();
  $rootScope.$on('cart', function () {
    // Почему не сделал передачу данных через событие ?
    // Было бы немного быстрее
    // Но проблема в цене, она рандомная,
    // Если будем передавать постоянно разные числа - будет ложная цена
    // Поэтому отправляю просто событие, без данных и затем обновляю данные в контроллере
    // Была бы постоянная цена, сделал бы иначе, загружал со стореджа
    // Затем отправлял бы сюда название, и уже отталкивался от данных, которые имею
    $scope.goods = $storage.getItem('ships');
  });
  $scope.goods = $storage.getItem('ships');
  /**
   *
   * @param lang - type of languages {ru, en}
   * @param first - first init func
   */
  $scope.setCurrentLang = function (lang, first) {
    $translate.use(lang);
    if (!first) $storage.setItem('lang', lang)
  };
  $scope.setCurrentLang($scope.currentLang, true);
  
  /**
   * get current lang from localStorage and set
   * @returns {string}
   */
  function getCurrentLang() {
    var lang = $storage.getItem('lang');
    return !lang ? 'ru' : lang;
  }
}]);
