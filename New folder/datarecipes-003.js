/* =========================================================
   RECIPE BUDDY
   RECIPE PACK 003
   RECIPES 201–300
========================================================= */

"use strict";

window.RECIPE_PACKS =
  window.RECIPE_PACKS || [];

const recipePack003 = [

  /* =======================================================
     BREAKFAST — 201–220
  ======================================================= */

  {
    id: "pack003-201",
    title: "Pumpkin Spice Pancakes",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    rating: 4.7,
    emoji: "🥞",
    description: "Fluffy pumpkin pancakes flavored with cinnamon and warm spices.",
    ingredients: [
      "2 cups all-purpose flour",
      "2 teaspoons baking powder",
      "1 teaspoon cinnamon",
      "1 cup pumpkin puree",
      "1 1/2 cups milk",
      "2 large eggs",
      "3 tablespoons melted butter"
    ],
    instructions: [
      "Whisk the flour, baking powder, cinnamon, and a pinch of salt.",
      "Whisk the pumpkin, milk, eggs, and butter separately.",
      "Combine the wet and dry mixtures.",
      "Cook portions on a greased skillet until bubbles form.",
      "Flip and cook until golden."
    ]
  },

  {
    id: "pack003-202",
    title: "Lemon Ricotta Pancakes",
    category: "Breakfast",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🍋",
    description: "Light pancakes with creamy ricotta and fresh lemon.",
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "2 teaspoons baking powder",
      "1 cup ricotta cheese",
      "1 cup milk",
      "2 large eggs",
      "1 tablespoon lemon zest",
      "2 tablespoons sugar"
    ],
    instructions: [
      "Mix the flour, baking powder, and sugar.",
      "Whisk ricotta, milk, eggs, and lemon zest.",
      "Combine until just mixed.",
      "Cook on a buttered skillet over medium heat.",
      "Flip when bubbles appear."
    ]
  },

  {
    id: "pack003-203",
    title: "Chicken and Waffles",
    category: "Breakfast",
    cuisine: "Southern",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    rating: 4.9,
    emoji: "🧇",
    description: "Crispy chicken served over waffles with maple syrup.",
    ingredients: [
      "8 chicken tenders",
      "1 cup flour",
      "2 large eggs",
      "1 cup breadcrumbs",
      "4 prepared waffles",
      "Maple syrup",
      "Oil for cooking"
    ],
    instructions: [
      "Coat the chicken in flour, egg, and breadcrumbs.",
      "Cook until golden and safely cooked.",
      "Prepare or warm the waffles.",
      "Place chicken over the waffles.",
      "Serve with maple syrup."
    ]
  },

  {
    id: "pack003-204",
    title: "Eggs Benedict",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Hard",
    prepTime: 20,
    cookTime: 20,
    servings: 4,
    rating: 4.8,
    emoji: "🍳",
    description: "English muffins topped with ham, poached eggs, and hollandaise.",
    ingredients: [
      "4 English muffins",
      "8 slices Canadian bacon",
      "8 large eggs",
      "3 egg yolks",
      "1/2 cup melted butter",
      "1 tablespoon lemon juice",
      "Salt and pepper"
    ],
    instructions: [
      "Toast the English muffins and warm the bacon.",
      "Poach the eggs until the whites are set.",
      "Whisk egg yolks and lemon juice over gentle heat.",
      "Slowly whisk in melted butter.",
      "Assemble and spoon hollandaise over the eggs."
    ]
  },

  {
    id: "pack003-205",
    title: "Chorizo Breakfast Burritos",
    category: "Breakfast",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🌯",
    description: "Spicy chorizo, scrambled eggs, potatoes, and cheese in tortillas.",
    ingredients: [
      "1/2 pound chorizo",
      "8 large eggs",
      "2 cups cooked potatoes",
      "1 cup shredded cheese",
      "4 large tortillas",
      "1/2 cup salsa"
    ],
    instructions: [
      "Cook the chorizo until browned.",
      "Scramble the eggs.",
      "Warm the tortillas.",
      "Fill with chorizo, eggs, potatoes, cheese, and salsa.",
      "Roll tightly."
    ]
  },

  {
    id: "pack003-206",
    title: "Bacon Breakfast Quesadilla",
    category: "Breakfast",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 12,
    servings: 4,
    rating: 4.7,
    emoji: "🥓",
    description: "Crispy tortillas filled with bacon, eggs, and cheddar.",
    ingredients: [
      "4 flour tortillas",
      "8 slices cooked bacon",
      "6 large eggs",
      "1 1/2 cups shredded cheddar",
      "2 tablespoons butter",
      "Salt and pepper"
    ],
    instructions: [
      "Scramble the eggs and season them.",
      "Place eggs, bacon, and cheese on half of each tortilla.",
      "Fold the tortillas.",
      "Cook in butter until golden.",
      "Flip and cook until melted."
    ]
  },

  {
    id: "pack003-207",
    title: "Western Breakfast Skillet",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 25,
    servings: 4,
    rating: 4.7,
    emoji: "🍳",
    description: "Potatoes, ham, peppers, onions, eggs, and cheese in one skillet.",
    ingredients: [
      "3 cups diced potatoes",
      "1 cup diced ham",
      "1 bell pepper",
      "1/2 onion",
      "4 large eggs",
      "1 cup shredded cheddar",
      "2 tablespoons oil"
    ],
    instructions: [
      "Cook the potatoes in oil until crisp.",
      "Add ham, pepper, and onion.",
      "Make four wells in the mixture.",
      "Crack an egg into each well.",
      "Cover, cook, and top with cheese."
    ]
  },

  {
    id: "pack003-208",
    title: "Cinnamon Apple French Toast",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🍎",
    description: "French toast topped with warm cinnamon apples.",
    ingredients: [
      "8 slices thick bread",
      "4 large eggs",
      "1 cup milk",
      "2 apples, sliced",
      "2 tablespoons butter",
      "2 tablespoons brown sugar",
      "1 teaspoon cinnamon"
    ],
    instructions: [
      "Cook apples with butter, brown sugar, and cinnamon.",
      "Whisk eggs and milk.",
      "Dip the bread into the egg mixture.",
      "Cook until golden on both sides.",
      "Top with the cinnamon apples."
    ]
  },

  {
    id: "pack003-209",
    title: "Sausage Cheese Grits Bowl",
    category: "Breakfast",
    cuisine: "Southern",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 18,
    servings: 4,
    rating: 4.7,
    emoji: "🥣",
    description: "Creamy cheese grits topped with sausage and eggs.",
    ingredients: [
      "2 cups cooked grits",
      "1 cup shredded cheddar",
      "1/2 pound breakfast sausage",
      "4 large eggs",
      "2 tablespoons butter",
      "Salt and pepper"
    ],
    instructions: [
      "Prepare the grits and stir in butter and cheese.",
      "Cook and crumble the sausage.",
      "Cook the eggs as desired.",
      "Divide the grits into bowls.",
      "Top with sausage and eggs."
    ]
  },

  {
    id: "pack003-210",
    title: "Vanilla Almond Granola",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 25,
    servings: 8,
    rating: 4.6,
    emoji: "🥣",
    description: "Crunchy baked granola with almonds, honey, and vanilla.",
    ingredients: [
      "3 cups rolled oats",
      "1 cup sliced almonds",
      "1/3 cup honey",
      "1/4 cup melted coconut oil",
      "1 teaspoon vanilla",
      "1/2 teaspoon cinnamon"
    ],
    instructions: [
      "Preheat the oven to 325°F.",
      "Mix all ingredients together.",
      "Spread over a lined baking sheet.",
      "Bake for 20 to 25 minutes, stirring once.",
      "Cool completely."
    ]
  },

  {
    id: "pack003-211",
    title: "Mango Smoothie Bowl",
    category: "Breakfast",
    cuisine: "Tropical",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 0,
    servings: 2,
    rating: 4.6,
    emoji: "🥭",
    description: "A thick mango smoothie topped with fruit and coconut.",
    ingredients: [
      "2 cups frozen mango",
      "1 frozen banana",
      "1 cup Greek yogurt",
      "1/2 cup orange juice",
      "1/2 cup granola",
      "2 tablespoons shredded coconut"
    ],
    instructions: [
      "Blend mango, banana, yogurt, and orange juice.",
      "Keep the mixture thick.",
      "Divide into bowls.",
      "Top with granola and coconut."
    ]
  },

  {
    id: "pack003-212",
    title: "Breakfast Monte Cristo",
    category: "Breakfast",
    cuisine: "French-American",
    difficulty: "Medium",
    prepTime: 12,
    cookTime: 12,
    servings: 2,
    rating: 4.7,
    emoji: "🥪",
    description: "Ham, turkey, and cheese dipped in egg and cooked until golden.",
    ingredients: [
      "4 slices bread",
      "4 slices ham",
      "4 slices turkey",
      "4 slices Swiss cheese",
      "2 large eggs",
      "1/4 cup milk",
      "2 tablespoons butter"
    ],
    instructions: [
      "Build sandwiches with ham, turkey, and cheese.",
      "Whisk eggs and milk.",
      "Dip both sides of each sandwich.",
      "Cook in butter until golden.",
      "Serve with powdered sugar if desired."
    ]
  },

  {
    id: "pack003-213",
    title: "Coconut Chia Pudding",
    category: "Breakfast",
    cuisine: "Tropical",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    rating: 4.5,
    emoji: "🥥",
    description: "Creamy chia pudding made with coconut milk and honey.",
    ingredients: [
      "1 1/2 cups coconut milk",
      "1/3 cup chia seeds",
      "2 tablespoons honey",
      "1/2 teaspoon vanilla",
      "Fresh fruit"
    ],
    instructions: [
      "Whisk coconut milk, chia seeds, honey, and vanilla.",
      "Rest for 10 minutes and whisk again.",
      "Cover and refrigerate overnight.",
      "Top with fruit before serving."
    ]
  },

  {
    id: "pack003-214",
    title: "Breakfast Enchiladas",
    category: "Breakfast",
    cuisine: "Mexican-American",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 30,
    servings: 6,
    rating: 4.8,
    emoji: "🌯",
    description: "Tortillas filled with eggs and sausage under cheese sauce.",
    ingredients: [
      "8 tortillas",
      "8 large eggs",
      "1 pound breakfast sausage",
      "2 cups shredded cheese",
      "1 cup enchilada sauce",
      "1/2 cup sour cream"
    ],
    instructions: [
      "Cook the sausage and scramble the eggs.",
      "Fill and roll the tortillas.",
      "Place in a baking dish.",
      "Top with sauce, sour cream, and cheese.",
      "Bake at 375°F for 25 to 30 minutes."
    ]
  },

  {
    id: "pack003-215",
    title: "Raspberry Cream Cheese Danish",
    category: "Breakfast",
    cuisine: "Danish-American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 18,
    servings: 8,
    rating: 4.7,
    emoji: "🥐",
    description: "Flaky pastries filled with cream cheese and raspberry preserves.",
    ingredients: [
      "1 sheet puff pastry",
      "8 ounces cream cheese",
      "1/3 cup sugar",
      "1 teaspoon vanilla",
      "1/2 cup raspberry preserves",
      "1 large egg"
    ],
    instructions: [
      "Preheat the oven to 400°F.",
      "Cut the pastry into squares.",
      "Mix cream cheese, sugar, and vanilla.",
      "Add filling and raspberry preserves.",
      "Brush with egg and bake for 15 to 18 minutes."
    ]
  },

  {
    id: "pack003-216",
    title: "Savory Breakfast Crepes",
    category: "Breakfast",
    cuisine: "French",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    rating: 4.6,
    emoji: "🥞",
    description: "Thin crepes filled with eggs, ham, spinach, and cheese.",
    ingredients: [
      "1 cup flour",
      "1 1/2 cups milk",
      "2 large eggs",
      "1 cup diced ham",
      "4 scrambled eggs",
      "1 cup spinach",
      "1 cup shredded cheese"
    ],
    instructions: [
      "Blend flour, milk, and eggs into a smooth batter.",
      "Cook thin crepes in a lightly greased skillet.",
      "Fill with eggs, ham, spinach, and cheese.",
      "Fold and warm until melted."
    ]
  },

  {
    id: "pack003-217",
    title: "Maple Pecan Oatmeal",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 8,
    servings: 2,
    rating: 4.6,
    emoji: "🥣",
    description: "Warm oatmeal with maple syrup, pecans, and cinnamon.",
    ingredients: [
      "1 cup rolled oats",
      "2 cups milk",
      "1/3 cup chopped pecans",
      "2 tablespoons maple syrup",
      "1/2 teaspoon cinnamon",
      "Pinch of salt"
    ],
    instructions: [
      "Combine oats, milk, cinnamon, and salt.",
      "Simmer until creamy.",
      "Stir in maple syrup.",
      "Top with pecans."
    ]
  },

  {
    id: "pack003-218",
    title: "Egg White Vegetable Omelet",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 8,
    servings: 1,
    rating: 4.5,
    emoji: "🥦",
    description: "A light omelet filled with colorful vegetables.",
    ingredients: [
      "5 egg whites",
      "1/4 cup diced bell pepper",
      "1/4 cup spinach",
      "2 tablespoons diced onion",
      "1/4 cup shredded cheese",
      "1 teaspoon olive oil"
    ],
    instructions: [
      "Cook the vegetables in olive oil.",
      "Pour in the egg whites.",
      "Cook until nearly set.",
      "Add cheese to one side.",
      "Fold and serve."
    ]
  },

  {
    id: "pack003-219",
    title: "Croissant Breakfast Casserole",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 40,
    servings: 8,
    rating: 4.8,
    emoji: "🥐",
    description: "Buttery croissants baked with eggs, ham, and cheese.",
    ingredients: [
      "6 croissants, torn",
      "8 large eggs",
      "2 cups milk",
      "2 cups diced ham",
      "2 cups shredded cheddar",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Place croissant pieces and ham in a baking dish.",
      "Whisk eggs, milk, salt, and pepper.",
      "Pour over the croissants and top with cheese.",
      "Bake for 35 to 40 minutes."
    ]
  },

  {
    id: "pack003-220",
    title: "Peanut Butter Berry Smoothie",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    rating: 4.6,
    emoji: "🥤",
    description: "A creamy berry smoothie with peanut butter and banana.",
    ingredients: [
      "2 cups frozen berries",
      "1 banana",
      "3 tablespoons peanut butter",
      "1 cup milk",
      "1/2 cup Greek yogurt",
      "1 tablespoon honey"
    ],
    instructions: [
      "Place all ingredients in a blender.",
      "Blend until smooth.",
      "Add more milk if needed.",
      "Serve immediately."
    ]
  },

  /* =======================================================
     LUNCH — 221–240
  ======================================================= */

  {
    id: "pack003-221",
    title: "Chicken Caesar Pasta Salad",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    servings: 6,
    rating: 4.7,
    emoji: "🥗",
    description: "Pasta, chicken, romaine, Parmesan, and Caesar dressing.",
    ingredients: [
      "12 ounces rotini",
      "2 cups cooked chicken",
      "3 cups chopped romaine",
      "1 cup cherry tomatoes",
      "1/2 cup Parmesan",
      "3/4 cup Caesar dressing"
    ],
    instructions: [
      "Cook and cool the pasta.",
      "Combine pasta, chicken, lettuce, tomatoes, and Parmesan.",
      "Add Caesar dressing.",
      "Toss and serve chilled."
    ]
  },

  {
    id: "pack003-222",
    title: "Italian Chicken Wrap",
    category: "Lunch",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    rating: 4.6,
    emoji: "🌯",
    description: "Chicken, provolone, vegetables, and Italian dressing in a wrap.",
    ingredients: [
      "4 tortillas",
      "2 cups cooked chicken",
      "4 slices provolone",
      "2 cups lettuce",
      "1 tomato",
      "1/4 cup Italian dressing"
    ],
    instructions: [
      "Lay out the tortillas.",
      "Add chicken, provolone, lettuce, and tomato.",
      "Drizzle with dressing.",
      "Fold and roll tightly."
    ]
  },

  {
    id: "pack003-223",
    title: "Chicken Philly Sandwich",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 15,
    servings: 4,
    rating: 4.7,
    emoji: "🥖",
    description: "Chicken, peppers, onions, and provolone on toasted rolls.",
    ingredients: [
      "1 1/2 pounds chicken, sliced",
      "1 bell pepper",
      "1 onion",
      "8 slices provolone",
      "4 hoagie rolls",
      "2 tablespoons oil"
    ],
    instructions: [
      "Cook the chicken in oil.",
      "Add peppers and onions.",
      "Season and cook until tender.",
      "Fill the rolls.",
      "Top with provolone and melt."
    ]
  },

  {
    id: "pack003-224",
    title: "Avocado Tuna Salad",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 0,
    servings: 3,
    rating: 4.5,
    emoji: "🥑",
    description: "Tuna mixed with avocado, lemon, celery, and herbs.",
    ingredients: [
      "2 cans tuna",
      "1 ripe avocado",
      "1/3 cup diced celery",
      "1 tablespoon lemon juice",
      "2 tablespoons diced onion",
      "Salt and pepper"
    ],
    instructions: [
      "Mash the avocado.",
      "Stir in tuna, celery, onion, and lemon juice.",
      "Season with salt and pepper.",
      "Serve on bread, crackers, or lettuce."
    ]
  },

  {
    id: "pack003-225",
    title: "Turkey Reuben Sandwich",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 8,
    servings: 2,
    rating: 4.6,
    emoji: "🥪",
    description: "Turkey, Swiss, sauerkraut, and dressing on grilled rye.",
    ingredients: [
      "4 slices rye bread",
      "8 slices turkey",
      "4 slices Swiss cheese",
      "1/2 cup sauerkraut",
      "3 tablespoons Thousand Island dressing",
      "2 tablespoons butter"
    ],
    instructions: [
      "Spread dressing over the bread.",
      "Add turkey, Swiss cheese, and sauerkraut.",
      "Butter the outside.",
      "Grill until golden and melted."
    ]
  },

  {
    id: "pack003-226",
    title: "Chicken Ranch Flatbread",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 12,
    servings: 4,
    rating: 4.7,
    emoji: "🍕",
    description: "Flatbread topped with chicken, bacon, ranch, and cheese.",
    ingredients: [
      "2 flatbreads",
      "2 cups cooked chicken",
      "6 slices cooked bacon",
      "1/2 cup ranch dressing",
      "2 cups shredded mozzarella",
      "Green onions"
    ],
    instructions: [
      "Preheat the oven to 400°F.",
      "Spread ranch over the flatbreads.",
      "Add chicken, bacon, and cheese.",
      "Bake for 10 to 12 minutes.",
      "Top with green onions."
    ]
  },

  {
    id: "pack003-227",
    title: "Steak Caesar Salad",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    rating: 4.7,
    emoji: "🥗",
    description: "Sliced steak served over Caesar salad with Parmesan.",
    ingredients: [
      "1 pound steak",
      "6 cups romaine",
      "1/2 cup Caesar dressing",
      "1/2 cup Parmesan",
      "1 cup croutons",
      "Salt and pepper"
    ],
    instructions: [
      "Season and cook the steak.",
      "Rest and slice thinly.",
      "Toss romaine with dressing, Parmesan, and croutons.",
      "Top with steak."
    ]
  },

  {
    id: "pack003-228",
    title: "Pimento Cheese Sandwich",
    category: "Lunch",
    cuisine: "Southern",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    rating: 4.6,
    emoji: "🧀",
    description: "Creamy Southern pimento cheese served on soft bread.",
    ingredients: [
      "2 cups shredded cheddar",
      "4 ounces cream cheese",
      "1/3 cup mayonnaise",
      "1 jar diced pimentos",
      "1/2 teaspoon garlic powder",
      "8 slices bread"
    ],
    instructions: [
      "Mix cheddar, cream cheese, mayonnaise, pimentos, and garlic powder.",
      "Spread over four bread slices.",
      "Top with remaining bread.",
      "Slice and serve."
    ]
  },

  {
    id: "pack003-229",
    title: "Chicken Salad Lettuce Wraps",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 0,
    servings: 4,
    rating: 4.5,
    emoji: "🥬",
    description: "Creamy chicken salad served in crisp lettuce leaves.",
    ingredients: [
      "3 cups cooked chicken",
      "1/2 cup mayonnaise",
      "1/3 cup celery",
      "1/3 cup grapes",
      "1/4 cup chopped pecans",
      "8 large lettuce leaves"
    ],
    instructions: [
      "Mix chicken, mayonnaise, celery, grapes, and pecans.",
      "Season to taste.",
      "Spoon into lettuce leaves.",
      "Serve chilled."
    ]
  },

  {
    id: "pack003-230",
    title: "Pizza Grilled Cheese",
    category: "Lunch",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 8,
    servings: 2,
    rating: 4.7,
    emoji: "🍕",
    description: "Grilled cheese filled with mozzarella, pepperoni, and pizza sauce.",
    ingredients: [
      "4 slices bread",
      "1 cup shredded mozzarella",
      "12 pepperoni slices",
      "1/4 cup pizza sauce",
      "2 tablespoons butter"
    ],
    instructions: [
      "Butter the outside of the bread.",
      "Fill with mozzarella, pepperoni, and a little sauce.",
      "Cook over medium-low heat.",
      "Flip and cook until melted."
    ]
  },

  {
    id: "pack003-231",
    title: "Buffalo Turkey Wrap",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 0,
    servings: 4,
    rating: 4.5,
    emoji: "🌯",
    description: "Turkey, buffalo sauce, lettuce, cheese, and ranch.",
    ingredients: [
      "4 tortillas",
      "12 slices turkey",
      "1/4 cup buffalo sauce",
      "2 cups lettuce",
      "1 cup shredded cheese",
      "1/2 cup ranch"
    ],
    instructions: [
      "Toss the turkey with buffalo sauce.",
      "Place turkey, lettuce, and cheese on tortillas.",
      "Drizzle with ranch.",
      "Roll tightly."
    ]
  },

  {
    id: "pack003-232",
    title: "Loaded Chicken Nachos",
    category: "Lunch",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 12,
    servings: 6,
    rating: 4.8,
    emoji: "🧀",
    description: "Tortilla chips topped with chicken, beans, cheese, and vegetables.",
    ingredients: [
      "10 ounces tortilla chips",
      "2 cups cooked chicken",
      "1 can black beans",
      "2 cups shredded cheese",
      "1 tomato",
      "Salsa and sour cream"
    ],
    instructions: [
      "Spread chips over a sheet pan.",
      "Top with chicken, beans, and cheese.",
      "Bake at 400°F for 10 minutes.",
      "Add tomato, salsa, and sour cream."
    ]
  },

  {
    id: "pack003-233",
    title: "Mediterranean Pasta Salad",
    category: "Lunch",
    cuisine: "Mediterranean",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    servings: 6,
    rating: 4.6,
    emoji: "🥗",
    description: "Pasta salad with cucumber, tomato, olives, feta, and dressing.",
    ingredients: [
      "12 ounces rotini",
      "1 cucumber",
      "1 cup cherry tomatoes",
      "1/2 cup olives",
      "1 cup feta",
      "3/4 cup Greek dressing"
    ],
    instructions: [
      "Cook and cool the pasta.",
      "Add cucumber, tomatoes, olives, and feta.",
      "Pour in the dressing.",
      "Toss and chill."
    ]
  },

  {
    id: "pack003-234",
    title: "Ham Salad Sandwich",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    rating: 4.5,
    emoji: "🥪",
    description: "Chopped ham salad with celery, pickles, and mayonnaise.",
    ingredients: [
      "2 cups chopped ham",
      "1/3 cup mayonnaise",
      "1/4 cup diced celery",
      "2 tablespoons pickle relish",
      "1 teaspoon mustard",
      "8 slices bread"
    ],
    instructions: [
      "Combine ham, mayonnaise, celery, relish, and mustard.",
      "Season if needed.",
      "Spread over bread.",
      "Close and slice."
    ]
  },

  {
    id: "pack003-235",
    title: "Chicken Taco Wrap",
    category: "Lunch",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    rating: 4.7,
    emoji: "🌯",
    description: "Seasoned chicken, beans, lettuce, cheese, and salsa in wraps.",
    ingredients: [
      "4 tortillas",
      "2 cups seasoned chicken",
      "1 cup black beans",
      "2 cups lettuce",
      "1 cup cheese",
      "1/2 cup salsa"
    ],
    instructions: [
      "Warm the tortillas.",
      "Add chicken, beans, lettuce, and cheese.",
      "Spoon salsa over the filling.",
      "Fold and roll."
    ]
  },

  {
    id: "pack003-236",
    title: "Roast Beef French Onion Melt",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🥖",
    description: "Roast beef, caramelized onions, and provolone on toasted rolls.",
    ingredients: [
      "1 pound roast beef",
      "1 onion, sliced",
      "8 slices provolone",
      "4 rolls",
      "2 tablespoons butter",
      "1 cup beef broth"
    ],
    instructions: [
      "Cook onions in butter until soft.",
      "Warm the roast beef in broth.",
      "Fill rolls with beef and onions.",
      "Top with provolone.",
      "Toast until melted."
    ]
  },

  {
    id: "pack003-237",
    title: "Crispy Fish Sandwich",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    rating: 4.7,
    emoji: "🐟",
    description: "Breaded fish with lettuce, pickles, and tartar sauce.",
    ingredients: [
      "4 white fish fillets",
      "1 cup flour",
      "2 large eggs",
      "1 1/2 cups breadcrumbs",
      "4 buns",
      "Lettuce and pickles",
      "Tartar sauce"
    ],
    instructions: [
      "Coat fish in flour, egg, and breadcrumbs.",
      "Cook until crisp and flaky.",
      "Toast the buns.",
      "Add fish, lettuce, pickles, and tartar sauce."
   