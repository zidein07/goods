GoodsApp.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'PARSER_TITLE': 'Wall parsing in',
    'SHIPS': 'Spaceships',
    'ABOUT': 'About'
  }).translations('ru', {
    'PARSER_TITLE': 'Парсинг стены',
    'SHIPS': 'Космические корабли',
    'ABOUT': 'О Проекте'
  }).registerAvailableLanguageKeys(['en', 'ru'], {
    'en_*': 'en',
    'ru_*': 'ru',
    '*': 'ru'
  }).preferredLanguage('ru');
}]);
