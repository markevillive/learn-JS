# learn-JS
## Hello, World
В проект добавлен файл index.html, с первым скриптом:

```javascript
<script type="text/javascript">
    alert('Hello, Wodld!');
</script>    
```
При перезагрузке окна текст "Hello, Wodld!" был выведен в модальное окно браузера

## Внешний скрипт

Создан нешний скрипт следующего содержания:

```javascript
document.write('<h2>Hello, JavaScript!</h2>');
```
При подключении в индексный файл

```html
<script type="text/javascript" src="externalScript.js"></script> 
```
в браузере добавлялся заголовок второго уровня "Hello, JavaScript!
"
## Comments
Комментарии бывают строчные (в одну строку - можно после строки с кодом) и блочные. Примеры комментариев:

- Строный

```javascript
// String comment
<script type="text/javascript">
    alert('Hello, Wodld!'); //string comment
</script>
```
- Блочный
```javascript
<script type="text/javascript">
    alert('Hello, Wodld!'); 
/*
*Вывод фразы "Hello, Wodld!"
* в модальное окно
*/
</script>

```
## Тег noscript