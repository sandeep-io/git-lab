const breakfastItems = ["Pancakes", "Omelette", "Toast", "Coffee"];
const mainCourseItems = ["Burger", "Pizza", "Pasta", "Sandwich"];
const dessertItems = ["Ice Cream", "Cake", "Brownie", "Cookies"];

// map()
document.getElementById("breakfastMenu").innerHTML =
    breakfastItems.map(item => `<li>${item}</li>`).join("");

// forEach()
let mainCourseHTML = "";

mainCourseItems.forEach(item => {
    mainCourseHTML += `<li>${item}</li>`;
});

document.getElementById("mainCourseMenu").innerHTML = mainCourseHTML;

// for loop
let dessertHTML = "";

for (let i = 0; i < dessertItems.length; i++) {
    dessertHTML += `<li>${dessertItems[i]}</li>`;
}

document.getElementById("dessertMenu").innerHTML = dessertHTML;