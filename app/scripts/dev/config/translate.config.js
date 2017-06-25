GoodsApp.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'PARSER_TITLE': 'Wall parsing in',
    'SHIPS': 'Spaceships',
    'ABOUT': 'About',
    'CART': 'Cart`s ship',
    'PRICE': 'Price',
    'REMOVE': 'Remove',
    'NAME': 'NAME',
    'GOODS': 'Goods'
  }).translations('ru', {
    'PARSER_TITLE': 'Парсинг стены',
    'SHIPS': 'Космические корабли',
    'ABOUT': 'О Проекте',
    'CART': 'Корзина',
    'PRICE': 'Цена',
    'REMOVE': 'Удалить',
    'NAME': 'Название',
    'GOODS': 'Товаров'
  }).registerAvailableLanguageKeys(['en', 'ru'], {
    'en_*': 'en',
    'ru_*': 'ru',
    '*': 'ru'
  }).preferredLanguage('ru');
}]);
