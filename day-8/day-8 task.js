//

books = [
    {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
    {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
    {"title": "Sapiens", "rating": 4.9, "genre": "History"},
    {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
    {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
]

// Expected Output
//["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]

const booksTitle = (books) => {

    const titles = [];
      for(let book of books ){
       
        console.log(book.title);
         titles.push(book.title);
        
      }

      return titles
      
}

booksTitle(books);
console.log(booksTitle(books));

console.log(titles)
