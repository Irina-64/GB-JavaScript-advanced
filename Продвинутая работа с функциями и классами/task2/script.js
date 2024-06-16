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

// Инициализация данных при загрузке страницы
window.onload = () => {
    loadInitialData();
};

function loadInitialData() {
    const reviewsContainer = document.getElementById('reviews-container');
    initialData.forEach(productData => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        const productTitle = document.createElement('h2');
        productTitle.innerText = productData.product;
        productDiv.appendChild(productTitle);

        const reviewList = document.createElement('ul');
        productData.reviews.forEach(review => {
            const reviewItem = document.createElement('li');
            reviewItem.innerText = `${review.text}`;
            reviewList.appendChild(reviewItem);
        });

        productDiv.appendChild(reviewList);
        reviewsContainer.appendChild(productDiv);
    });
}

// Функция для добавления нового отзыва
function addReview(product, text) {
    if (text.length < 50 || text.length > 500) {
        throw new Error('Отзыв должен быть длиной от 50 до 500 символов');
    }

    const productData = initialData.find(p => p.product === product);
    const newReview = {
        id: (productData.reviews.length + 1).toString(),
        text: text
    };
    productData.reviews.push(newReview);

// Обновить отображение отзывов
    updateReviews();
}

// Обновление отображения отзывов
function updateReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';
    loadInitialData();
}

document.getElementById('submit-review').addEventListener('click', () => {
    const productSelect = document.getElementById('product-select');
    const reviewInput = document.getElementById('review-input');
    const product = productSelect.value;
    const reviewText = reviewInput.value;

    try {
        addReview(product, reviewText);
        reviewInput.value = '';  // Очистить поле ввода после успешного добавления
    } catch (error) {
        alert(error.message);
    }
});
