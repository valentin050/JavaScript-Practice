console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favourite_foods = ["Pizza", "Barbicue", "Pasta", "Burgers", "Potato", "Meat"];


// 2. Loop through the list and print: "One of my favorite foods is ______."
for(let i = 0; i < favourite_foods.length; i++) {
    console.log(`One of my favorite foods is ${favourite_foods[i]}.`);
}




// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
for(let i = 0; i < favourite_foods.length; i++) {
    console.log(`My #${i + 1} favorite food is ${favourite_foods[i]}.`);
}




// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
function printFoodRecommendation(foodName) {
    console.log(`Have you ever tried ${foodName}?`);
    console.log(`I always recommend ${foodName} to friends.`);
    console.log(`Trust me — ${foodName} is delicious.`);
}



// 4b. Call the function at least 3 times
printFoodRecommendation("Hamburger");
printFoodRecommendation("Barbecue");
printFoodRecommendation("Pasta");

// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Donuts" would be.
for(let i = 0; i < friendFavorites.length; i++) {
    if(friendFavorites[i].toLowerCase().includes("a")) {
        console.log(friendFavorites[i]);
    }
}


// 6. Store the result in an array called foodsWithA. Print out the array.
 let foodsWithA = friendFavorites.filter(food => food.toLowerCase().includes("a"));
 console.log(foodsWithA);


// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = friendFavorites.filter(food => food.length > 6);


// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = friendFavorites.filter(food => food.length <= 6);


// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
if(longFoodNames.length > shortFoodNames.length) {
    console.log("There are more long-named foods.");
} else if(longFoodNames.length < shortFoodNames.length) {
    console.log("There are more short-named foods.");
}

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
let longestFoodName = longFoodNames[0];  

for(let i = 0; i < longFoodNames.length; i++) {

    if(longFoodNames[i].length > longestFoodName.length) {// then we compare it with the previous one
        longestFoodName = longFoodNames[i];               // and change it if longer
    }
}
 
console.log(`The longest food name in the list is ${longestFoodName} with ${longestFoodName.length} characters.`); 