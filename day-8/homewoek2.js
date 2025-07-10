// wrire fnction to merge two array of objects

const movies = [
  { id: 1, title: "Baahubali", genre: "Action" },
  { id: 2, title: "Arjun Reddy", genre: "Drama" },
];

const moreMovies = [
  { id: 3, title: "Jersey", genre: "Sports" },
  { id: 4, title: "Eega", genre: "Fantasy" },
];

function mergedArrays(arr1,arr2=[]){
    return [...arr1,...arr2];
};

console.log(mergedArrays(movies,moreMovies));


