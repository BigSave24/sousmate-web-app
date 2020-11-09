let thumbnail = document.getElementById('recipe-thumbnail');
let recipeBtn = document.getElementById('recipeBtn');
let menuBtn = document.getElementById('menuBtn');
let closeMenuBtn = document.getElementsByClassName('closeBtn');
let sideMenu = document.getElementById('sideNav');
let sideMenuLink = document.getElementsByClassName('side-menu-link');
let recipeBookLength = Object.keys(recipeBook).length;
let result;

menuBtn.addEventListener('click', openSideMenu);

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

function openSideMenu(){
    sideMenu.style.width = '200px';
    closeMenuBtn[0].addEventListener('click', closeSideMenu);

    for (let i = 0; i < sideMenuLink.length; i++) {
        sideMenuLink[i].addEventListener('click', closeSideMenu);
    }
    
};

function closeSideMenu(){
    sideMenu.style.width = '0';
};

// console.log(result = randomRecipe(recipeBookLength));
console.log(getRecipe());

// recipeBtn.setAttribute('href', )