let recipeBook = [];
let recipeMenu = document.getElementById('recipe-list-menu');
let recipeCard = document.getElementById('recipe-card-container');
let startTimerBtn = document.getElementsByClassName('timer-btn');
let getHour = document.getElementById('hours');
let getMinute = document.getElementById('minutes');
let getSecond = document.getElementById('seconds');
let count = 0;
let currentMinute = 0;
let currentHour = 0;


//          Create Recipe Class
function Recipe(id, name, category, synopsis, instructions, prepTime, cookTime, servings, level, ingredients, author, imagePath, thumbnailPath) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.synopsis = synopsis;
    this.instructions = instructions;
    this.prepTime = prepTime;
    this.cookTime = cookTime;
    this.servings = servings; 
    this.level = level;
    this.ingredients = ingredients; 
    this.author = author;
    this.imagePath = imagePath;
    this.thumbnailPath = thumbnailPath;
  };


//          Create Recipe Objects from Recipe Class
let bbqChicken = new Recipe(
    01,
    'Barbeque Chicken',
    'Main Dish',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui. Faucibus interdum posuere lorem ipsum dolor. Ullamcorper malesuada proin libero nunc consequat interdum varius.',
    [
        'Preheat The Oven To 375 Degress.',
        'In A Bowl Mix All Ingredients Instead Of Chicken.',
        'Season The Chicken With Salt And Pepper.',
        'Place The Chicken Breasts In A Baking Dish And Place In The Over. Cover.',
        'Bake For 20 Minutes Or Until The Juices Run Clear.',
        'Pour Over The Sauce Over The Chicken.',
        'Bake For Another 5 Minutes Or Until Sauce Thickens Over The Chicken.',
        'Remove From The Oven And Serve With Vegetables.'
    ],
    20,
    30,
    '3 Servings',
    00,
    [
        '2 Quarts Water',
        '1 Cup Sugar',
        '1 Tsp Salt',
        '1/2 Cup Homemade BBQ Sauce',
        '3 Chicken Breasts (Boneless, Skinless)',
        '1 Glove Of Garlic',
        '1/2 Tbsp Of Onion Powder',
        '1 Chile (Red)'
    ],
    'Leroy Washington',
    'images/bbqchicken.jpg',
    'images/bbqchicken-00.png'
);

let simpleSalad = new Recipe(
    02,
    'Simple Salad',
    'Salad',
    'Tempus urna et pharetra pharetra massa massa ultricies mi. Lectus nulla at volutpat diam. Mi bibendum neque egestas congue. Non consectetur a erat nam at lectus urna duis. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.',
    [
        'On A Cutting Board, Slice The Radishes And Carrot',
        'In A Large Bowl Mix All Ingredients.',
        'Toss With A Large Spoon And Fork.',
        'Serve Immediately Or Place In Refrigerator.'
    ],
    5,
    0,
    '1 Servings',
    00,
    [
        '1 Cup Of Lettuce',
        '1 Cup Of Baby Spinach',
        '1/2 Cup Of Cherry Tomatoes',
        '1 Cucumber',
        '2 Radishes',
        '1 Carrot (Peeled)',
        '2 Tbsp Of Your Favorite Dressing'
    ],
    'Alice Davis',
    'images/simplesalad.png',
    'images/simplesalad-00.png'
);

let chocolatePudding = new Recipe(
    03,
    'Chocolate Pudding',
    'Dessert',
    'Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Scelerisque fermentum dui faucibus in ornare quam viverra. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Amet nisl purus in mollis nunc sed.',
    [
        'In A Large Saucepan, Stir Together Sugar, Cocoa, Cornstarch And Salt.',
        'Put Saucepan On The Stove And Change The Setting To Medium-High Heat.',
        'Bring The Mixture To A Boil And Cook Until Mixture Thickens, Stirring Constantly.',
        'Remove Saucepan To A Cool Element And Stir In Butter And Vanilla Extract. Do NOT Melt Butter Beforehand.',
        'Let Cool And Serve Warm.',
        'Chill In Refrigerator After Done.'
    ],
    8,
    20,
    '8 Servings',
    00,
    [
        '1 Cup Of Sugar',
        '1 Tsp Of Cinnamon',
        '3 Tbsp Of Cocoa Chips, Unsweetened',
        '1/4 Cup Of Cornstarch',
        'Pinch Of Salt',
        '3 Cups Of Milk',
        '2 Tbsp Of Butter',
        '1 Tsp Of Vanilla Extract'
    ],
    'Stacy Miller',
    'images/chocolatepudding.png',
    'images/chocolatepudding-00.png'
);


//          Add Recipe Objects to RecipeBook Array
recipeBook.push(bbqChicken, simpleSalad, chocolatePudding);
console.log(recipeBook);


//          Create Recipe Page Menu and Cards
function makeRecipeMenuAndCard() {

    //      Create Recipe Menu List
    for (let i = 0; i < recipeBook.length; i++) {
        let tag = document.createElement("li");
        tag.innerHTML = '<a href="#' + recipeBook[i]['name'] + '-recipe">' + recipeBook[i]['name'] + '</a>';
        recipeMenu.appendChild(tag);
    };


    //      Create Recipe Cards for Each Menu List Item
    for (let i = 0; i < recipeBook.length; i++) {
        let createDiv = document.createElement("div");
        createDiv.className = 'recipe-card';
        createDiv.innerHTML = '<h4 id="' + recipeBook[i]['name'] + '-recipe">' + recipeBook[i]['name'] + '</h4>'+
        '<br>'+
        '<span id="prep-time">Prep time: ' + recipeBook[i]['prepTime'] + ' minutes</span>'+
        '<br>'+
        '<span id="cook-time">Cook time: ' + recipeBook[i]['cookTime'] +  ' minutes</span>'+
        '<br>'+
        '<div class="ingredients">'+
        '<h5>Ingredients</h5>'+
        '<ol id="' + recipeBook[i]['name'] + '-ingredients"></ol>'+
        '</div>'+
        '<h4>Instructions:</h4>'+
        '<ol id="' + recipeBook[i]['name'] + '-instructions"></ol>'+
        '<button class="timer-btn" value="' + (recipeBook[i]['prepTime'] + recipeBook[i]['cookTime']) + '">start timer</button>';

        recipeCard.appendChild(createDiv);
    
        for (let x = 0; x < recipeBook[i]['ingredients'].length; x++) {
            let tag = document.createElement("li");
            tag.innerHTML = recipeBook[i]['ingredients'][x];
            document.getElementById(recipeBook[i]['name'] + '-ingredients').appendChild(tag);
        };
    
        for (let x = 0; x < recipeBook[i]['instructions'].length; x++) {
            let tag = document.createElement("li");
            tag.innerHTML = recipeBook[i]['instructions'][x];
            document.getElementById(recipeBook[i]['name'] + '-instructions').appendChild(tag);
        };
        
    };

};


//      Run makeRecipeMenuAndCard Function 
makeRecipeMenuAndCard();


//          Recipe Timer Function

//          Apply Click Event Listener to Recipe Card Timer Buttons
for (let i = 0; i < startTimerBtn.length; i++) {
    startTimerBtn[i].addEventListener('click', startRecipeTimer);
}


//          Function to Start Selected Recipe Timer
function startRecipeTimer(event) {
    let displayTimer = document.getElementById('timer');
    let closeTimerBtn = document.getElementById('closeTimer');
    let totaltime = Number(event.target.value);
    let interval = 0;

    interval = setInterval(function(){counter(totaltime, interval)}, 1000);

    //      Functions to Stop and Close Recipe Timer
    function exitTimer() {
        clearInterval(interval);
        console.log('Stopping Timer...')
        setTimeout(closeTimerDisplay, 3000);
        getSecond.innerHTML = '00';
        getMinute.innerHTML = '00';
        getHour.innerHTML = '00';
    };
    
    function closeTimerDisplay(){
        displayTimer.style.visibility = 'hidden';
        displayTimer.style.backgroundColor = '#a64ac9';
    };


    displayTimer.style.visibility = "visible";
    closeTimerBtn.addEventListener('click', exitTimer);


};


//          Counter Function for Recipe Timer 
function counter(recipeTime, interval){

    if (recipeTime === currentMinute) {
        document.getElementById('timer').style.backgroundColor = 'Red';
        clearInterval(interval);
    } else {
        getSecond.innerHTML = (count < 10) ? '0' + count : count;

        if (count === 60) {
            count = 0;
            getSecond.innerHTML = (count < 10) ? '0' + count : count;
            getMinute.innerHTML = (++currentMinute < 10) ? '0' + currentMinute : currentMinute;

            if (currentMinute == 60) {
                currentMinute = 0;
                getMinute.innerHTML = (currentMinute < 10) ? '0' + currentMinute : currentMinute;
                getHour.innerHTML = (++currentHour < 10) ? '0' + currentHour : currentHour;
            }

        }

        count++;
    }
};


//          Recipe Categories
// Appetizer
// Beverage
// Soup
// Salad
// Vegetable
// Main Dish
// Bread
// Dessert
// Miscellaneous
