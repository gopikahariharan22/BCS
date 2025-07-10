// const marks = [90, 84, 82, 95, 30];

// // Task 1.1
// // Use Reduce
// // Find the top score
// // Output
// // 95

// const scores = [
//   {
//     marks: 32,
//     name: "Yvette Merritt",
//   },
//   {
//     marks: 57,
//     name: "Lillian Ellis",
//   },
//   {
//     marks: 22,
//     name: "Mccall Carter",
//   },
//   {
//     marks: 21,
//     name: "Pate Collier",
//   },
//   {
//     marks: 91,
//     name: "Debra Beard",
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock",
//   },
//   {
//     marks: 20,
//     name: "Hatfield Hodge",
//   },
// ];

// Task 1.2
// Use Reduce
// Find the top scorer name
// Output
// Debra Beard

// const sumMarks = marks.reduce((acc,crr) => acc + crr, 0);

// console.log(sumMarks);

// const topScore = marks.reduce((acc, crr) => (crr > acc ? crr : acc), 0);
// const topScorer = scores.reduce((acc, crr) => (crr.marks > acc.marks ? crr : acc), scores[0]);


// console.log(topScore);
// console.log(topScorer.name);


// 21

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
  // Your code here
  return movies.filter((movie) => movies.rating > rating ? "Yes, all Action movies are above 7 ratings" : "No" )
};

console.log(allRatingsAboveForGenre(movies, 7, "Action"));
console.log(allRatingsAboveForGenre(movies, 8, "Biography"));

//output

//-Yes, all Action movies are above 7 ratings
//No, not all Biography movies are above 8 ratings


