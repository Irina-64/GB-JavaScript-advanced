### Задание 2

Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

```
const initialData = [
{
product: "Apple iPhone 13",
reviews: [
{
id: "1",
text: "Отличный телефон! Батарея держится долго.",
},
{
id: "2",
text: "Камера супер, фото выглядят просто потрясающе.",
},
],
},
{
product: "Samsung Galaxy Z Fold 3",
reviews: [
{
id: "3",
text: "Интересный дизайн, но дорогой.",
},
],
},
{
product: "Sony PlayStation 5",
reviews: [
{
id: "4",
text: "Люблю играть на PS5, графика на высоте.",
},
],
},
];
```

Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.


Для создания системы отзывов с указанными ограничениями и функциями, нужно выполнить следующие шаги:

1. Создать HTML-структуру для ввода отзывов и отображения списка отзывов.

2. Написать JavaScript-код для обработки ввода и добавления отзывов с проверкой длины текста.

3. Инициализировать данные из initialData при загрузке страницы.

Здесь [полный пример кода](task2/).

**Объяснение:**

1. HTML:

- Создаем текстовое поле и кнопку для ввода отзывов.
- Контейнер для отображения списка отзывов.

2. JavaScript:

- Инициализируем данные из initialData при загрузке страницы.
- Функция addReview проверяет длину отзыва и добавляет его в соответствующий продукт.
- Функция updateReviews обновляет отображение отзывов.
- Обработчик событий на кнопке отправки вызывает функцию addReview и обрабатывает возможные ошибки.

Таким образом, мы создаем систему управления отзывами, которая позволяет добавлять и отображать отзывы для разных продуктов.