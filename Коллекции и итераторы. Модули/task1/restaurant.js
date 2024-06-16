// Создание коллекции для поваров и их специализаций
const chefSpecialties = new Map([
    ["Виктор", "Пицца"],
    ["Ольга", "Суши"],
    ["Дмитрий", "Десерты"]
]);

// Создание коллекции для блюд и их поваров
const dishToChef = new Map([
    ["Пицца Маргарита", "Виктор"],
    ["Пицца Пепперони", "Виктор"],
    ["Суши Филадельфия", "Ольга"],
    ["Суши Калифорния", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"]
]);

// Создание объектов клиентов
const clientAlexey = { name: "Алексей" };
const clientMaria = { name: "Мария" };
const clientIrina = { name: "Ирина" };

// Создание коллекции для заказов клиентов
const clientOrders = new Map([
    [clientAlexey, ["Пицца Пепперони", "Тирамису"]],
    [clientMaria, ["Суши Калифорния", "Пицца Маргарита"]],
    [clientIrina, ["Чизкейк"]]
]);

// Функция для отображения повара для каждого блюда
function displayChefForDishes() {
    for (const [dish, chef] of dishToChef) {
        console.log(`Блюдо "${dish}" готовит повар ${chef}`);
    }
}

// Функция для отображения заказов каждого клиента
function displayClientOrders() {
    for (const [client, orders] of clientOrders) {
        console.log(`Клиент ${client.name} заказал:`);
        for (const dish of orders) {
            console.log(`- ${dish}`);
        }
    }
}

// Отображение поваров для блюд
displayChefForDishes();

// Отображение заказов клиентов
displayClientOrders();
