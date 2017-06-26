## Установка

Для начала необходимо склонировать данный проект.

Для этого достаточно прописать команду `git clone git@github.com:zidein07/goods.git`

После установки необходимо перейти в папку с проектом и подтянуть все зависимости.
Делается это следующими командами: `cd goods/` после перехода в директорию `npm install` и `bower install`.  
Запускаем **сборщик проектов** с помощью команды `gulp`.  
Начинаем работать, вбиваем в браузере `localhost:3000`
## Структура проекта

В папке `./app` находятся стили и скрипты проекта.  
Папка `./app/scripts/dist` служит для работы с клиентом, собирается нашим **build** таской **gulp**.  
В Папке `./app/scripts/dev` лежит наш рабочий код.  

В папке `./app/styles/dev` лежат наши less стили, они ватчатся галпом на предмет изменений, если есть,  
то обрабатываются и складываются в `./app/styles/dist`  

Все шаблоны хранятся в папке `./app/tpl/`  
Если это попап то здесь `./app/tpl/popups/`  
Если это директива то здесь `./app/tpl/directives/`  

Контроллеры также разбиты, на директивы и попапы  
Если это попап то здесь `./app/scripts/dev/controllers/popups`  
Если это директива то здесь `./app/scripts/dev/controllers/directives`  

## Дерево проекта
```
|-- goods
    |-- index.html
    |-- bower
    |   | bower_components
    |-- scripts
    |   |-- dev
    |   |   |-- app.js
    |   |   |-- config
    |   |   |   |-- route.config.js
    |   |   |   |-- translate.config.js
    |   |   |-- controllers
    |   |   |   |-- cart.ctrl.js
    |   |   |   |-- goods.ctrl.js
    |   |   |   |-- directives
    |   |   |   |   |-- header.ctrl.js
    |   |   |   |-- popups
    |   |   |       |-- cartItemRemove.ctrl.js
    |   |   |       |-- cartOrder.ctrl.js
    |   |   |-- directives
    |   |   |   |-- header.directive.js
    |   |   |   |-- spinner.directive.js
    |   |   |-- filters
    |   |   |   |-- sum.filter.js
    |   |   |   |-- trustHtml.filter.js
    |   |   |-- service
    |   |       |-- goodsApi.service.js
    |   |       |-- goodsApiResponse.service.js
    |   |       |-- localStorage.service.js
    |   |       |-- popup.service.js
    |   |       |-- spinner.service.js
    |   |-- dist
    |       |-- all.js
    |-- styles
    |   |-- dev
    |   |   |-- main.less
    |   |   |-- base
    |   |   |   |-- color.less
    |   |   |   |-- properties.less
    |   |   |   |-- spinner.less
    |   |   |-- cart
    |   |   |   |-- cart.less
    |   |   |-- goods
    |   |   |   |-- goods.less
    |   |   |-- header
    |   |       |-- header.less
    |   |-- dist
    |       |-- main.css
    |-- tpl
        |-- cart.html
        |-- goods.html
        |-- directives
        |   |-- header.html
        |   |-- spinner.html
        |-- popups
            |-- cart
                |-- cart-item-remove.html
                |-- cart-order.html
```
