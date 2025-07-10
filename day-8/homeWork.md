# ES6 Fundamentals

## 1 Create an arrow function that adds two numbers
```js
// Create an arrow function that adds two numbers
const add = (a, b) => a + b;

console.log(add(5, 3));
console.log(add(10, 7));
```
## 2. Create a function that returns a greeting using template literals
```js
// Create a function that returns a greeting using template literals
const greetUser = (name) => `Hello, ${name}!`

console.log(greetUser("Alice"));
console.log(greetUser("Bob"));
```
## 3. Create a function that safely gets a user's age
```js
const user1 = { name: "Alice", age: 25 };
const user2 = { name: "Bob" };
const user3 = null;

// ===== YOUR CODE BELOW =====
// Create a function that safely gets a user's age
const getUserAge = (user) => {
   return user?.age;
  
};

console.log(getUserAge(user1));
console.log(getUserAge(user2));
console.log(getUserAge(user3));
```

## 4. Create a function that gets theme with a default value
```js
const settings1 = { theme: "dark" };
const settings2 = { theme: null };
const settings3 = { theme: undefined };
const settings4 = {};

// ===== YOUR CODE BELOW =====
// Create a function that gets theme with a default value
const getTheme = (settings) => {
  // Your code here - use nullish coalescing
  return settings.theme ?? 'light'
};

console.log(getTheme(settings1));
console.log(getTheme(settings2));
console.log(getTheme(settings3));
console.log(getTheme(settings4));
```
## Implement the getUserAge function to extract the user's age or provide a default message if it's not available using optional chaining and nullish coalescing.
```js
const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

const userWithAge = { user: { profile: { age: 25 } } };
const userWithoutProfile = { user: {} };

// ===== YOUR CODE BELOW =====
// Write a function that safely returns the user's age or a default message
const getUserAge = (data) => {
  return data?.user?.profile?.age ?? "Age not available";
};

console.log(getUserAge(userData));             // "Age not available"
console.log(getUserAge(userWithAge));          // 25
console.log(getUserAge(userWithoutProfile));   // "Age not available"

```
## 6 - Calculate the total price of all products in your cart using arrow functions and array methods.
```js
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

// ===== YOUR CODE BELOW =====
// Write a function that calculates the total price of all products
const getTotalPrice = (products) => {
  return products.reduce((total, product) => total + product.price, 0);
};

console.log(getTotalPrice(products)); // 2200


```
## 7 - Write a function that takes a user object and returns a message indicating their activity status using template literals and ternary operator.
```js
const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };
const user3 = { name: "Alice", active: null };

// ===== YOUR CODE BELOW =====
// Write a function that returns a message indicating if the user is active
const getUserStatus = (user) => {
  return `${user.name} is ${user.active === true ? "active" : "not active"}.`;
};

console.log(getUserStatus(user1)); // Jane is active.
console.log(getUserStatus(user2)); // John is not active.
console.log(getUserStatus(user3)); // Alice is not active.

```

## 8 - Create a function that returns a greeting message based on the time of day using Date methods and template literals.

```js
// Create a function that returns a greeting message based on time of day
const greet = (name) => {
  const hour = new Date().getHours();
  let timeOfDay;

  if (hour >= 0 && hour <= 11) {
    timeOfDay = "morning";
  } else if (hour >= 12 && hour <= 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  return `Good ${timeOfDay}, ${name}!`;
};

// Test with different times
console.log(greet("Alice"));

```

## 9  Extract properties from an object using destructuring assignment.

```js


const person = { name: "Alice", age: 30, city: "New York" };

// ===== YOUR CODE BELOW =====
// Use object destructuring to extract name and age
const extractPersonInfo = (person) => {
  // Your code here - use destructuring
  const { name, age, city } = person;
  return `${name} is ${age} years old`;
};

console.log(extractPersonInfo(person));
```

## 10- Extract elements from an array using destructuring assignment.

```js
const colors = ["red", "green", "blue", "yellow"];
const coordinates = [10, 20];

// ===== YOUR CODE BELOW =====
// Use array destructuring to extract first two colors
const getFirstTwoColors = (colors) => {
  const [first, second] = colors;
  return `First: ${first}, Second: ${second}`;
};

console.log(getFirstTwoColors(colors)); // First: red, Second: green


```

## 15 - Transform an array of numbers by doubling each value using the map method.

```js
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use map to double each number
const doubleNumbers = numbers => numbers.map((num) => num * 2);

console.log(JSON.stringify(doubleNumbers(numbers)));

```

## 11 - Use the spread operator to combine arrays and copy objects.
```js
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "broccoli"];

// ===== YOUR CODE BELOW =====
// Use spread operator to combine arrays
const combineArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

console.log(JSON.stringify(combineArrays(fruits, vegetables)));
// ["apple","banana","carrot","broccoli"]

```

## 12 - Write a function that extracts the user's name and theme, providing default values if they are missing using destructuring with default values.

```js
const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};

const userWithoutSettings = { id: 2, name: "Adam" };

// ===== YOUR CODE BELOW =====
// Write a function that extracts the user's name and theme with default values
const getUserSettings = (user) => {
  const { name, settings: { theme = "light" } = {} } = user;
  return `User: ${name}, Theme: ${theme}`;
};

console.log(getUserSettings(userProfile));          // User: Eve, Theme: dark
console.log(getUserSettings(userWithoutSettings));  // User: Adam, Theme: light

```

## 13 - Write a function that returns a new array with an additional skill for each employee using destructuring and the spread operator.

```js
const employees = [
  {
    id: 1,
    name: "Alice",
    position: "Developer",
    skills: ["JavaScript", "React"],
  },
  {
    id: 2,
    name: "Bob",
    position: "Manager",
    skills: ["Leadership", "Communication"],
  },
  { 
    id: 3, 
    name: "Charlie", 
    position: "CEO", 
    skills: ["Strategy", "Vision"] 
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that adds a new skill to each employee
const addSkill = (employees, newSkill) => {
  return employees.map(emp => ({
    ...emp,
    skills: [...emp.skills, newSkill],
  }));
};

console.log(JSON.stringify(addSkill(employees, "Problem Solving"), null, 2));

```

## 14-Write a function that returns the name of a user's first friend using nested destructuring and array methods.

```js
const users = [
  { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
  { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
  { id: 4, name: "Deepak", friends: [] },
];

// ===== YOUR CODE BELOW =====
// Write a function that returns the name of a user's first friend
const getFirstFriendName = (users, userId) => {
  const user = users.find(u => u.id === userId);
  if (!user) {
    return "User not found";
  }
  
  const { friends } = user;
  const [ { name: friendName } = {} ] = friends;
  
  return friendName || "No friends found";
};

console.log(getFirstFriendName(users, 1)); // Bob
console.log(getFirstFriendName(users, 2)); // Eve
console.log(getFirstFriendName(users, 3)); // User not found
console.log(getFirstFriendName(users, 4)); // No friends found

```

## 15- Transform an array of numbers by doubling each value using the map method.

```js
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use map to double each number
const doubleNumbers = (numbers) => {
  return numbers.map(n => n * 2);
};

console.log(JSON.stringify(doubleNumbers(numbers))); 
// Output: [2,4,6,8,10]

```
## 16- Filter an array to keep only even numbers using the filter method.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ===== YOUR CODE BELOW =====
// Use filter to keep only even numbers
const getEvenNumbers = (numbers) => {
  return numbers.filter(n => n % 2 === 0);
};

console.log(JSON.stringify(getEvenNumbers(numbers)));
// Output: [2,4,6,8,10]

```
## 17 - Sum all numbers in an array using the reduce method.

```js
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use reduce to sum all numbers
const sumNumbers = (numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(sumNumbers(numbers)); 
// Output: 15

```

## 18 - Write a function that generates a summary string for the top scorer using template literals and array methods.

```js
const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 92 },
  { name: "Diana", score: 88 },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds and formats the top scorer
const getTopScorer = (scores) => {
  const top = scores.reduce((max, curr) =>
    curr.score > max.score ? curr : max
  );

  return `Top scorer is ${top.name} with ${top.score} points.`;
};

console.log(getTopScorer(scores));
// Output: Top scorer is Charlie with 92 points.

```

## 19 - Write a function that finds a movie by ID and returns its title and genre in a formatted string using array methods and template literals.

```js
const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds a movie by ID and returns formatted details
const getMovieDetails = (movies, id) => {
  const movie = movies.find(m => m.id === id);
  
  if (!movie) {
    return "Movie not found.";
  }
  
  const averageRating = (
    movie.ratings.reduce((sum, r) => sum + r, 0) / movie.ratings.length
  ).toFixed(1);
  
  return `Title: ${movie.title}
Director: ${movie.director}
Year: ${movie.year}
Genre: ${movie.genre}
Average Rating: ${averageRating}`;
};

console.log(getMovieDetails(movies, 1));
console.log(getMovieDetails(movies, 5));
console.log(getMovieDetails(movies, 6));

```

## 20-Write a function that filters movies released after a certain year and calculates their average rating.

```js
const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that calculates average rating after a specific year
const getAverageRatingAfterYear = (movies, year) => {
  const filteredMovies = movies.filter(m => m.year > year);
  
  if (filteredMovies.length === 0) {
    return "No movies found.";
  }
  
  const allRatings = filteredMovies.flatMap(m => m.ratings);
  
  const average =
    allRatings.reduce((sum, r) => sum + r, 0) / allRatings.length;
  
  return average.toFixed(1);
};

console.log(getAverageRatingAfterYear(movies, 2016));
// Calculates average ratings from Arjun Reddy, Mahanati, Jersey

console.log(getAverageRatingAfterYear(movies, 2020));
// No movies after 2020 → No movies found.

```

## 21-Write a function that checks if all movies of a certain genre have ratings above a certain value using array methods.

```js
const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that checks if all movies of a genre have high ratings
const allRatingsAboveForGenre = (movies, rating, genre) => {
  const genreMovies = movies.filter(m => m.genre === genre);
  
  if (genreMovies.length === 0) {
    return false; // No movies of the genre
  }
  
  return genreMovies.every(movie =>
    movie.ratings.every(r => r > rating)
  );
};

console.log(allRatingsAboveForGenre(movies, 7, "Action"));    // true
console.log(allRatingsAboveForGenre(movies, 8, "Biography")); // false

```

## 22-Write a function that returns a string with each movie's title and its ratings joined by commas using array methods.

```js
const getTitlesAndRatings = (movies) => {
  return movies.map(movie => {
    const avgRating = (movie.ratings.reduce((sum, r) => sum + r, 0) / movie.ratings.length).toFixed(1);
    return `${movie.title} (Avg Rating: ${avgRating})`;
  });
};

console.log(getTitlesAndRatings(movies));

```

## 23-Write a function that returns a single array containing all ratings of all movies using array methods.

```js
const movies = [
  {
    id: 1,
    title: "Baahubali",
    ratings: [8, 9, 10],
  },
  {
    id: 2,
    title: "Arjun Reddy",
    ratings: [9, 8, 9],
  },
  {
    id: 3,
    title: "Mahanati",
    ratings: [10, 9, 8],
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that compiles all ratings into a single array
const getAllRatings = (movies) => {
  return movies.flatMap(movie => movie.ratings);
};

console.log(JSON.stringify(getAllRatings(movies)));

```

## 24-Write a function that returns an array of titles of movies that have ratings above a certain threshold using array methods.

```js
const movies = [
  {
    id: 1,
    title: "Baahubali",
    ratings: [8, 9, 10],
  },
  {
    id: 2,
    title: "Arjun Reddy",
    ratings: [9, 8, 9],
  },
  {
    id: 3,
    title: "Mahanati",
    ratings: [10, 9, 8],
  },
  {
    id: 4,
    title: "Eega",
    ratings: [7, 8, 9],
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds movie titles with high ratings
const getTitlesWithHighRatings = (movies, threshold) => {
  return movies
    .filter(movie => movie.ratings.some(rating => rating > threshold))
    .map(movie => movie.title);
};

console.log(JSON.stringify(getTitlesWithHighRatings(movies, 9)));
// ["Baahubali","Mahanati"]

console.log(JSON.stringify(getTitlesWithHighRatings(movies, 10)));
// []

```

## 25- Write a function that returns an array of movie titles sorted by their average ratings in descending order.

```js
const movies = [
  {
    title: "Baahubali",
    ratings: [8, 9, 10],
  },
  {
    title: "Arjun Reddy",
    ratings: [9, 8, 9],
  },
  {
    title: "Jersey",
    ratings: [9, 9, 8],
  },
  {
    title: "Mahanati",
    ratings: [10, 9, 8],
  },
  {
    title: "Eega",
    ratings: [7, 8, 9],
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that sorts movie titles by average rating
const getTitlesSortedByAverageRating = (movies) => {
  return movies
    .map(movie => {
      const avg =
        movie.ratings.reduce((sum, r) => sum + r, 0) / movie.ratings.length;
      return { title: movie.title, avgRating: avg };
    })
    .sort((a, b) => b.avgRating - a.avgRating)
    .map(movie => movie.title);
};

console.log(JSON.stringify(getTitlesSortedByAverageRating(movies)));

```

## 26 - Write a function that returns an array of titles of movies that have at least one rating below a certain threshold.

```js

```