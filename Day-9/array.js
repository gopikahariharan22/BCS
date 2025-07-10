//

books = [
    {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
    {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
    {"title": "Sapiens", "rating": 4.9, "genre": "History"},
    {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
    {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
]

books3 = [
    {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
    {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
    {"title": "Sapiens", "rating": 4.9, "genre": "History"},
    {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
    {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
]

// loop through all books and log all titles

books.forEach((book) => {
    console.log(book.title);
});

// create an array of book titles

const titles = books.map((book) => book.title);
console.log(titles);

// create an array of book genre

const genre = books.map((book) => book.genre);
console.log(genre);

// create an array book rating

const rating = books.map((book) => book.rating);
console.log(rating);

//  get all books with rating above 4.5

const topRated = books.filter((book) => book.rating > 4.5);
console.log(topRated);

// find science Fiction book

const scienceBook = books.find((book) => book.genre = "Science");
console.log(scienceBook);

//find book by its name

const findBook = books.find((book) => book.title ="Clean Code");
console.log(findBook);

//check is any book has rating below 4

const lowRated = books.some((book) => book.rating < 4);
console.log(lowRated);//true

const highRated = books.some((book) => book.rating > 9);
console.log(highRated);

const exactRated = books.some((book) => book.rating = 3.9);
console.log(exactRated);

//every 
// check if all books are highrated

const allHighRated = books.every((book) => book.rating > 2.0);
console.log(allHighRated);

const allHighRated2 = books.every((book) => book.rating < 5);
console.log(allHighRated2);

const veryLowRated = books.every((book) => book.rating > 3.9);
console.log(veryLowRated);

// Destructuring

const book = books3[0];
const {title,ratings,genres} = book;

console.log(books3[0].title);
console.log(books3[0].genre);
console.log(books3[0].rating);

console.log(books3[1].title);

//string methods

// upperTitles


