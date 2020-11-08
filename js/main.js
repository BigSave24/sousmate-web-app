let testArray = [1,2,3,4,5,];
let testNum = 10;
let thumbnail = document.getElementById('recipe-thumbnail');
let recipeBtn = document.getElementById('recipeBtn');
let recipeBookLength = Object.keys(recipeBook).length;
let result;

// function randomGenerator(maxNum){
//     return Math.floor(Math.random() * Math.floor(maxNum));
// };

function randomRecipe(maxNumRecipes){
    return Math.floor(Math.random() * Math.floor(maxNumRecipes));
};

function getRecipe(){
    let selectRecipe = randomRecipe(recipeBookLength);
    thumbnail.style.backgroundImage = "url('" + recipeBook[selectRecipe]['thumbnailPath'] + "')";
    recipeBtn.setAttribute('href', "recipes.html#" + recipeBook[selectRecipe]['name'] + "-recipe");
    "recipes.html#bbq-chicken-recipe"
    return recipeBook[selectRecipe];

};

console.log(result = randomRecipe(recipeBookLength));
console.log(getRecipe());

// recipeBtn.setAttribute('href', )