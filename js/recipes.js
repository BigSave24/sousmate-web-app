let recipeBook = [];
let recipeMenu = document.getElementById('recipe-list-menu');
let recipeCard = document.getElementById('recipe-card-container');


//          Create Recipe Class
function Recipe(id, name, category, synopsis, instructions, prepTime, cookTime, servings, level, ingredients, author, imagePath) {
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
    'images/bbqchicken.png',
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
);


//          Add Recipe Objects to RecipeBook Array
recipeBook.push(bbqChicken, simpleSalad, chocolatePudding);
console.log(recipeBook);


//          Create Recipe Page Menu and Cards
function makeRecipeMenuAndCard() {
    for (let i = 0; i < recipeBook.length; i++) {
        let tag = document.createElement("li");
        tag.innerHTML = '<a href="#' + recipeBook[i]['name'] + '-recipe">' + recipeBook[i]['name'] + '</a>';
        recipeMenu.appendChild(tag);
    };

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
        '<button class="timer-btn">start timer</button>';
    
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

makeRecipeMenuAndCard();


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
