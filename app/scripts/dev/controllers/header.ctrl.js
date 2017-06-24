GoodsApp.controller('HeaderCtrl', ['$scope', '$translate', function ($scope, $translate) {
  $scope.languages = [{
    "val": "ru",
    "lang": "Русский"
  }, {
    "val": "en",
    "lang": "English"
  }];
  $scope.currentLang = getCurrentLang();
  /**
   *
   * @param lang - type of languages {ru, en}
   * @param first - first init func
   */
  $scope.setCurrentLang = function (lang, first) {
    $translate.use(lang);
    if (!first) localStorage.setItem('lang', lang)
  };
  $scope.setCurrentLang($scope.currentLang, true);
  
  /**
   * get current lang from localStorage and set
   * @returns {string}
   */
  function getCurrentLang() {
    var lang = localStorage.getItem('lang');
    return !lang ? 'ru' : lang;
  }
}]);
