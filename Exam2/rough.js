//rough

const orders = [
  { id: 1, dishName: "Burger", category: "Fast Food", chef: "John Doe", ratings: [5, 4, 5] },
  { id: 2, dishName: "Pizza", category: "Italian", chef: "Jane Smith", ratings: [4, 3, 5] },
  { id: 3, dishName: "Sushi", category: "Japanese", chef: "Tom Brown", ratings: [5, 5, 4] },
  { id: 4, dishName: "Salad", category: "Healthy", chef: "Alice Green", ratings: [3, 4, 5] },
  { id: 5, dishName: "Pasta", category: "Italian", chef: "Gowtam Tinnanuri", ratings: [4, 4, 5] }
];

const moreOrders = [
  { id: 6, dishName: "Tacos", category: "Mexican", chef: "Carlos Ruiz", ratings: [4, 5, 4] },
  { id: 7, dishName: "Ramen", category: "Japanese", chef: "Yuki Tanaka", ratings: [5, 4, 5] }
];


// combine both array of object


const getHighRateDishes = (orders,moreOrders) => {
      const combinedOrders = [...orders,...moreOrders];
   return combinedOrders

    .filter(order => order.ratings.every(rating => rating >= 4))
    .map(order => ({  
        dishName: order.dishName,
        category: order.category,
        chef: order.chef,
        averageRating: (order.ratings.reduce((sum, rating) => sum + rating, 0) / order.ratings.length).toFixed(2)
    }));                        
  }

  console.log(getHighRateDishes(orders,moreOrders));


// var arr = [9, 6, ,5,100,5];

// Math.max(...arr);