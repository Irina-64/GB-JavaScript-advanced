class Library {
// Приватное свойство для хранения списка книг
    #books = [];

// Конструктор, который принимает начальный список книг
    constructor(initialBooks = []) {
        // Проверяем на дубликаты в начальном списке
        if (new Set(initialBooks).size !== initialBooks.length) {
            throw new Error("Начальный список книг содержит дубликаты");
        }
        this.#books = initialBooks;
    }

// Геттер для получения текущего списка книг
    get allBooks() {
        return this.#books;
    }

// Метод для добавления книги в список
    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Книга с названием "${title}" уже существует в списке`);
        }
        this.#books.push(title);
    }

// Метод для удаления книги из списка по названию
    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error(`Книги с названием "${title}" нет в списке`);
        }
        this.#books.splice(index, 1);
    }

// Метод для проверки наличия книги в библиотеке
    hasBook(title) {
        return this.#books.includes(title);
    }
}

// Пример использования класса Library
try {
    const initialBooks = ["Book A", "Book B", "Book C"];
    const library = new Library(initialBooks);

    console.log(library.allBooks); // ["Book A", "Book B", "Book C"]

    library.addBook("Book D");
    console.log(library.allBooks); // ["Book A", "Book B", "Book C", "Book D"]

    console.log(library.hasBook("Book B")); // true
    console.log(library.hasBook("Book X")); // false

    library.removeBook("Book B");
    console.log(library.allBooks); // ["Book A", "Book C", "Book D"]

// Пробуем добавить книгу, которая уже есть
    library.addBook("Book A"); 
// Ошибка: Книга с названием "Book A" уже существует в списке
} catch (error) {
    console.error(error.message);
}
