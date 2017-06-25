GoodsApp.config(['$translateProvider', function ($translateProvider) {
  //TODO: Вынести перевод в отдельный json файл
  $translateProvider.translations('en', {
    'PARSER_TITLE': 'Wall parsing in',
    'SHIPS': 'Spaceships',
    'ABOUT': 'About',
    'CART': 'Cart`s ship',
    'PRICE': 'Price',
    'REMOVE': 'Remove',
    'NAME': 'NAME',
    'GOODS': 'Goods',
    'RELOAD_LIST': 'Reload list',
    'TOTAL': 'Total:',
    'MAKE_ORDER': 'Make order',
    'YOUR_FULL_NAME': 'Your full name',
    'YOUR_ADDRESS': 'Your address',
    'DATE': 'Date',
    'SEND': 'Send',
    // TODO: Можно обработать ui-sref с помощью $compile затем вывести с помощью trustAsHtml, но а пока оставим href
    'CART_EMPTY_DESCRIPTION': '<p>Your cart is empty, but you can buy <b>luke skywalker`s ship</b> redirect to this <a href="#/">page</a></p>',
    'CONFIRM_AN_ORDER': 'Confirmation of an order',
    'LOADING': 'Loading',
    'DESCRIPTION_OF_SPACESHIP':'<p>Description of the spaceship</p>'
  }).translations('ru', {
    'PARSER_TITLE': 'Парсинг стены',
    'SHIPS': 'Космические корабли',
    'ABOUT': 'О Проекте',
    'CART': 'Корзина',
    'PRICE': 'Цена',
    'REMOVE': 'Удалить',
    'NAME': 'Название',
    'GOODS': 'Товаров',
    'RELOAD_LIST': 'Обновить список',
    'TOTAL': 'Итого:',
    'MAKE_ORDER': 'Заказать',
    'YOUR_FULL_NAME': 'Ваше полное имя',
    'YOUR_ADDRESS': 'Ваш адрес',
    'DATE': 'Дата',
    'SEND': 'Отправить',
    // TODO: Можно обработать ui-sref с помощью $compile затем вывести с помощью trustAsHtml, но а пока оставим href
    'CART_EMPTY_DESCRIPTION': '<p>Ваша корзина пуста, но вы можете приобрести <b>космический корабль Люка Скайвокера</b> для этого перейдите на эту <a href="#/">страницу</a></p>',
    'CONFIRM_AN_ORDER': 'Подтверждение заказа',
    'LOADING': 'Загрузка',
    'DESCRIPTION_OF_SPACESHIP':'<p>Какое-то описание об этом корабле</p>'
  }).registerAvailableLanguageKeys(['en', 'ru'], {
    'en_*': 'en',
    'ru_*': 'ru',
    '*': 'ru'
  }).preferredLanguage('ru');
}]);
