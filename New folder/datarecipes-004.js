/* =========================================================
   RECIPE BUDDY
   RECIPE PACK 004
   RECIPES 301–400
========================================================= */

"use strict";

window.RECIPE_PACKS =
  window.RECIPE_PACKS || [];

function pack004Recipe(
  id,
  title,
  category,
  cuisine,
  difficulty,
  prepTime,
  cookTime,
  servings,
  rating,
  emoji,
  description,
  ingredients,
  instructions
) {
  return {
    id,
    title,
    category,
    cuisine,
    difficulty,
    prepTime,
    cookTime,
    totalTime: prepTime + cookTime,
    servings,
    rating,
    emoji,
    description,
    ingredients,
    instructions
  };
}

const recipePack004 = [

  /* =======================================================
     BREAKFAST — 301–320
  ======================================================= */

  pack004Recipe(
    "pack004-301",
    "Lemon Ricotta Pancakes",
    "Breakfast",
    "Italian-American",
    "Easy",
    12,
    15,
    4,
    4.8,
    "🥞",
    "Tender pancakes flavored with ricotta and fresh lemon.",
    [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1 cup ricotta cheese",
      "1 1/2 cups milk",
      "2 large eggs",
      "1 tablespoon lemon zest",
      "2 tablespoons melted butter"
    ],
    [
      "Whisk the flour, sugar, and baking powder.",
      "Whisk ricotta, milk, eggs, lemon zest, and butter separately.",
      "Combine the wet and dry ingredients.",
      "Cook portions on a greased skillet until bubbles form.",
      "Flip and cook until golden."
    ]
  ),

  pack004Recipe(
    "pack004-302",
    "Pumpkin Spice Pancakes",
    "Breakfast",
    "American",
    "Easy",
    10,
    15,
    4,
    4.7,
    "🎃",
    "Fluffy pumpkin pancakes with warm fall spices.",
    [
      "2 cups all-purpose flour",
      "2 tablespoons brown sugar",
      "2 teaspoons baking powder",
      "1 teaspoon cinnamon",
      "1 cup pumpkin puree",
      "1 1/2 cups milk",
      "2 large eggs"
    ],
    [
      "Mix the flour, sugar, baking powder, and cinnamon.",
      "Whisk pumpkin, milk, and eggs.",
      "Combine the mixtures until just blended.",
      "Cook on a greased skillet over medium heat.",
      "Flip when bubbles form and cook until golden."
    ]
  ),

  pack004Recipe(
    "pack004-303",
    "Cinnamon Apple Pancakes",
    "Breakfast",
    "American",
    "Easy",
    12,
    15,
    4,
    4.7,
    "🍎",
    "Soft pancakes filled with cinnamon-seasoned apples.",
    [
      "2 cups pancake mix",
      "1 1/2 cups milk",
      "2 large eggs",
      "1 apple, finely diced",
      "1 teaspoon cinnamon",
      "2 tablespoons butter",
      "2 tablespoons maple syrup"
    ],
    [
      "Cook the apple in butter and cinnamon until slightly tender.",
      "Mix pancake mix, milk, and eggs.",
      "Fold the apples into the batter.",
      "Cook portions on a greased skillet.",
      "Serve with maple syrup."
    ]
  ),

  pack004Recipe(
    "pack004-304",
    "Cheddar Chive Biscuits",
    "Breakfast",
    "Southern",
    "Easy",
    15,
    15,
    8,
    4.7,
    "🧀",
    "Flaky biscuits filled with cheddar cheese and fresh chives.",
    [
      "2 cups all-purpose flour",
      "1 tablespoon baking powder",
      "1/2 teaspoon salt",
      "1/2 cup cold butter",
      "1 cup shredded cheddar",
      "2 tablespoons chopped chives",
      "3/4 cup buttermilk"
    ],
    [
      "Preheat the oven to 425°F.",
      "Mix flour, baking powder, and salt.",
      "Cut in cold butter, then stir in cheddar and chives.",
      "Add buttermilk and form the dough.",
      "Cut into biscuits and bake for 13 to 15 minutes."
    ]
  ),

  pack004Recipe(
    "pack004-305",
    "Sausage Cheddar Breakfast Muffins",
    "Breakfast",
    "American",
    "Easy",
    15,
    20,
    12,
    4.7,
    "🧁",
    "Savory muffins packed with sausage, eggs, and cheddar.",
    [
      "1 pound cooked breakfast sausage",
      "8 large eggs",
      "1 cup milk",
      "2 cups baking mix",
      "1 1/2 cups shredded cheddar",
      "1/2 teaspoon black pepper"
    ],
    [
      "Preheat the oven to 375°F.",
      "Whisk the eggs and milk.",
      "Stir in baking mix, sausage, cheese, and pepper.",
      "Divide among greased muffin cups.",
      "Bake for 18 to 20 minutes."
    ]
  ),

  pack004Recipe(
    "pack004-306",
    "Hash Brown Egg Cups",
    "Breakfast",
    "American",
    "Easy",
    15,
    25,
    6,
    4.7,
    "🥔",
    "Crispy hash brown cups filled with eggs and cheese.",
    [
      "3 cups shredded hash browns",
      "2 tablespoons melted butter",
      "6 large eggs",
      "1 cup shredded cheddar",
      "1/2 cup diced ham",
      "Salt and pepper"
    ],
    [
      "Preheat the oven to 400°F.",
      "Mix hash browns with butter and press into muffin cups.",
      "Bake for 12 minutes.",
      "Add ham, cheese, and one egg to each cup.",
      "Bake until the eggs are set."
    ]
  ),

  pack004Recipe(
    "pack004-307",
    "Breakfast Enchiladas",
    "Breakfast",
    "Mexican-American",
    "Medium",
    20,
    30,
    6,
    4.8,
    "🌯",
    "Breakfast tortillas filled with sausage, eggs, potatoes, and cheese.",
    [
      "8 flour tortillas",
      "1 pound breakfast sausage",
      "8 large eggs",
      "2 cups cooked potatoes",
      "2 cups shredded cheese",
      "1 cup enchilada sauce"
    ],
    [
      "Preheat the oven to 375°F.",
      "Cook the sausage and scramble the eggs.",
      "Fill tortillas with sausage, eggs, potatoes, and cheese.",
      "Roll and place in a baking dish.",
      "Top with sauce and cheese and bake for 25 to 30 minutes."
    ]
  ),

  pack004Recipe(
    "pack004-308",
    "Mushroom Swiss Omelet",
    "Breakfast",
    "American",
    "Easy",
    8,
    10,
    1,
    4.6,
    "🍳",
    "A tender omelet filled with sautéed mushrooms and Swiss cheese.",
    [
      "3 large eggs",
      "2 tablespoons milk",
      "1 cup sliced mushrooms",
      "1/2 cup shredded Swiss cheese",
      "1 tablespoon butter",
      "Salt and pepper"
    ],
    [
      "Cook mushrooms in half the butter until browned.",
      "Whisk eggs, milk, salt, and pepper.",
      "Melt remaining butter and add the eggs.",
      "Add mushrooms and cheese to one side.",
      "Fold and cook until the cheese melts."
    ]
  ),

  pack004Recipe(
    "pack004-309",
    "Western Breakfast Burrito",
    "Breakfast",
    "American",
    "Easy",
    12,
    15,
    4,
    4.7,
    "🌯",
    "Eggs, ham, peppers, onions, potatoes, and cheese in a warm tortilla.",
    [
      "4 large flour tortillas",
      "8 large eggs",
      "1 cup diced ham",
      "1 bell pepper, diced",
      "1/2 onion, diced",
      "1 cup cooked potatoes",
      "1 cup shredded cheddar"
    ],
    [
      "Cook the ham, pepper, and onion.",
      "Scramble the eggs.",
      "Warm the tortillas.",
      "Fill with eggs, ham mixture, potatoes, and cheese.",
      "Fold tightly and toast if desired."
    ]
  ),

  pack004Recipe(
    "pack004-310",
    "Vanilla Almond Granola",
    "Breakfast",
    "American",
    "Easy",
    10,
    25,
    10,
    4.6,
    "🥣",
    "Crunchy homemade granola with vanilla, almonds, and honey.",
    [
      "4 cups rolled oats",
      "1 cup sliced almonds",
      "1/2 cup honey",
      "1/3 cup coconut oil",
      "2 teaspoons vanilla",
      "1 teaspoon cinnamon",
      "1/2 teaspoon salt"
    ],
    [
      "Preheat the oven to 325°F.",
      "Mix oats, almonds, cinnamon, and salt.",
      "Warm honey, oil, and vanilla.",
      "Combine and spread on a baking sheet.",
      "Bake for 22 to 25 minutes, stirring once."
    ]
  ),

  pack004Recipe(
    "pack004-311",
    "Cherry Chocolate Overnight Oats",
    "Breakfast",
    "American",
    "Easy",
    8,
    0,
    2,
    4.6,
    "🍒",
    "Chocolate overnight oats with sweet cherries.",
    [
      "1 cup rolled oats",
      "1 cup milk",
      "1/2 cup Greek yogurt",
      "2 tablespoons cocoa powder",
      "1 tablespoon honey",
      "1 cup chopped cherries"
    ],
    [
      "Combine oats, milk, yogurt, cocoa, and honey.",
      "Fold in half of the cherries.",
      "Divide into containers.",
      "Refrigerate overnight.",
      "Top with remaining cherries."
    ]
  ),

  pack004Recipe(
    "pack004-312",
    "Pineapple Coconut Smoothie",
    "Breakfast",
    "Tropical",
    "Easy",
    5,
    0,
    2,
    4.6,
    "🍍",
    "A creamy tropical smoothie with pineapple and coconut.",
    [
      "2 cups frozen pineapple",
      "1 banana",
      "1 cup coconut milk",
      "1/2 cup Greek yogurt",
      "1 tablespoon honey",
      "1/2 cup ice"
    ],
    [
      "Add all ingredients to a blender.",
      "Blend until completely smooth.",
      "Add more coconut milk if needed.",
      "Pour into glasses and serve."
    ]
  ),

  pack004Recipe(
    "pack004-313",
    "Mocha Breakfast Smoothie",
    "Breakfast",
    "American",
    "Easy",
    5,
    0,
    2,
    4.6,
    "☕",
    "A coffee and chocolate smoothie with banana and oats.",
    [
      "1 cup chilled coffee",
      "1 frozen banana",
      "1/2 cup milk",
      "1/2 cup Greek yogurt",
      "2 tablespoons cocoa powder",
      "1/4 cup rolled oats",
      "1 tablespoon honey"
    ],
    [
      "Place all ingredients in a blender.",
      "Blend until smooth.",
      "Taste and add more honey if desired.",
      "Serve immediately."
    ]
  ),

  pack004Recipe(
    "pack004-314",
    "Country Ham Breakfast Bowl",
    "Breakfast",
    "Southern",
    "Easy",
    10,
    18,
    4,
    4.7,
    "🥣",
    "Grits topped with country ham, eggs, cheese, and green onions.",
    [
      "3 cups cooked grits",
      "1 cup diced country ham",
      "4 large eggs",
      "1 cup shredded cheddar",
      "2 tablespoons butter",
      "2 tablespoons green onions"
    ],
    [
      "Stir butter into the warm grits.",
      "Cook the ham until lightly browned.",
      "Cook eggs to your preferred doneness.",
      "Divide grits between bowls.",
      "Top with ham, eggs, cheese, and green onions."
    ]
  ),

  pack004Recipe(
    "pack004-315",
    "Bacon Cheddar Breakfast Pizza",
    "Breakfast",
    "American",
    "Medium",
    15,
    20,
    6,
    4.8,
    "🍕",
    "Breakfast pizza topped with eggs, bacon, cheddar, and onions.",
    [
      "1 prepared pizza crust",
      "6 large eggs",
      "8 slices cooked bacon",
      "2 cups shredded cheddar",
      "1/4 cup diced green onion",
      "1/4 cup milk"
    ],
    [
      "Preheat the oven to 400°F.",
      "Scramble the eggs with milk.",
      "Spread the eggs over the crust.",
      "Top with bacon, cheese, and onions.",
      "Bake for 15 to 20 minutes."
    ]
  ),

  pack004Recipe(
    "pack004-316",
    "Strawberry Cream Cheese French Toast",
    "Breakfast",
    "American",
    "Medium",
    15,
    12,
    4,
    4.8,
    "🍓",
    "French toast stuffed with cream cheese and strawberries.",
    [
      "8 thick bread slices",
      "6 ounces cream cheese",
      "1 cup sliced strawberries",
      "4 large eggs",
      "1 cup milk",
      "1 teaspoon vanilla",
      "2 tablespoons butter"
    ],
    [
      "Spread cream cheese on four bread slices.",
      "Add strawberries and top with remaining bread.",
      "Whisk eggs, milk, and vanilla.",
      "Dip each sandwich in the egg mixture.",
      "Cook in butter until golden on both sides."
    ]
  ),

  pack004Recipe(
    "pack004-317",
    "Blueberry Cream Cheese Toast",
    "Breakfast",
    "American",
    "Easy",
    7,
    3,
    2,
    4.5,
    "🫐",
    "Toast topped with sweetened cream cheese and blueberries.",
    [
      "2 slices thick bread",
      "4 tablespoons cream cheese",
      "1 tablespoon honey",
      "1/2 cup blueberries",
      "1/4 teaspoon lemon zest"
    ],
    [
      "Toast the bread.",
      "Mix cream cheese with honey.",
      "Spread over the toast.",
      "Top with blueberries and lemon zest."
    ]
  ),

  pack004Recipe(
    "pack004-318",
    "Savory Breakfast Crepes",
    "Breakfast",
    "French",
    "Medium",
    20,
    20,
    4,
    4.7,
    "🥞",
    "Thin crepes filled with eggs, ham, spinach, and cheese.",
    [
      "1 cup all-purpose flour",
      "1 1/2 cups milk",
      "2 large eggs",
      "2 tablespoons melted butter",
      "4 scrambled eggs",
      "1 cup diced ham",
      "1 cup spinach",
      "1 cup shredded Swiss cheese"
    ],
    [
      "Blend flour, milk, eggs, and butter into a smooth batter.",
      "Cook thin crepes in a lightly greased skillet.",
      "Fill each crepe with eggs, ham, spinach, and cheese.",
      "Fold and warm until the cheese melts."
    ]
  ),

  pack004Recipe(
    "pack004-319",
    "Cinnamon Pear Oatmeal",
    "Breakfast",
    "American",
    "Easy",
    5,
    10,
    2,
    4.5,
    "🍐",
    "Creamy oatmeal with pears, cinnamon, and maple syrup.",
    [
      "1 cup rolled oats",
      "2 cups milk",
      "1 pear, diced",
      "1 tablespoon maple syrup",
      "1/2 teaspoon cinnamon",
      "1 tablespoon chopped walnuts"
    ],
    [
      "Combine oats, milk, pear, and cinnamon.",
      "Simmer until creamy and tender.",
      "Divide between bowls.",
      "Top with maple syrup and walnuts."
    ]
  ),

  pack004Recipe(
    "pack004-320",
    "Chicken Sausage Breakfast Skillet",
    "Breakfast",
    "American",
    "Easy",
    12,
    25,
    4,
    4.7,
    "🍳",
    "Chicken sausage, potatoes, peppers, spinach, and eggs in one skillet.",
    [
      "1 pound chicken sausage, sliced",
      "3 cups diced potatoes",
      "1 bell pepper, diced",
      "2 cups spinach",
      "4 large eggs",
      "2 tablespoons olive oil",
      "Salt and pepper"
    ],
    [
      "Cook potatoes in oil until nearly tender.",
      "Add sausage and bell pepper.",
      "Stir in spinach.",
      "Make four wells and add the eggs.",
      "Cover and cook until the eggs are set."
    ]
  ),

  /* =======================================================
     LUNCH — 321–340
  ======================================================= */

  pack004Recipe(
    "pack004-321",
    "Turkey Apple Cheddar Sandwich",
    "Lunch",
    "American",
    "Easy",
    8,
    0,
    2,
    4.6,
    "🥪",
    "Turkey, crisp apple, cheddar, spinach, and honey mustard.",
    [
      "4 slices bread",
      "8 slices turkey",
      "1 apple, thinly sliced",
      "4 slices cheddar",
      "1 cup spinach",
      "3 tablespoons honey mustard"
    ],
    [
      "Spread honey mustard over the bread.",
      "Layer turkey, apple, cheddar, and spinach.",
      "Close the sandwiches.",
      "Slice and serve."
    ]
  ),

  pack004Recipe(
    "pack004-322",
    "Chicken Caesar Pasta Salad",
    "Lunch",
    "American",
    "Easy",
    15,
    12,
    6,
    4.7,
    "🥗",
    "Cold pasta salad with chicken, romaine, Parmesan, and Caesar dressing.",
    [
      "12 ounces rotini",
      "2 cups cooked chicken",
      "3 cups chopped romaine",
      "1 cup cherry tomatoes",
      "1/2 cup Parmesan",
      "3/4 cup Caesar dressing",
      "1 cup croutons"
    ],
    [
      "Cook the pasta and cool completely.",
      "Combine pasta, chicken, romaine, tomatoes, and Parmesan.",
      "Add Caesar dressing and toss.",
      "Top with croutons before serving."
    ]
  ),

  pack004Recipe(
    "pack004-323",
    "Buffalo Turkey Wrap",
    "Lunch",
    "American",
    "Easy",
    8,
    0,
    4,
    4.6,
    "🌯",
    "Turkey, buffalo sauce, cheese, lettuce, and ranch in a tortilla.",
    [
      "4 large tortillas",
      "12 slices turkey",
      "1/4 cup buffalo sauce",
      "1 cup shredded cheddar",
      "2 cups shredded lettuce",
      "1/2 cup ranch dressing"
    ],
    [
      "Lay out the tortillas.",
      "Add turkey, buffalo sauce, cheese, lettuce, and ranch.",
      "Fold the sides inward.",
      "Roll tightly and slice."
    ]
  ),

  pack004Recipe(
    "pack004-324",
    "Italian Chicken Salad",
    "Lunch",
    "Italian-American",
    "Easy",
    15,
    0,
    4,
    4.7,
    "🥗",
    "Chicken salad with tomatoes, mozzarella, olives, and Italian dressing.",
    [
      "6 cups chopped lettuce",
      "2 cups cooked chicken",
      "1 cup cherry tomatoes",
      "1 cup mozzarella pearls",
      "1/2 cup sliced olives",
      "1/2 cup Italian dressing"
    ],
    [
      "Divide lettuce between bowls.",
      "Add chicken, tomatoes, mozzarella, and olives.",
      "Drizzle with Italian dressing.",
      "Toss gently and serve."
    ]
  ),

  pack004Recipe(
    "pack004-325",
    "Hot Honey Chicken Sandwich",
    "Lunch",
    "American",
    "Medium",
    15,
    15,
    4,
    4.8,
    "🍔",
    "Crispy chicken with spicy honey, pickles, and creamy slaw.",
    [
      "4 breaded chicken cutlets",
      "4 brioche buns",
      "1/4 cup honey",
      "1 teaspoon hot sauce",
      "1 cup coleslaw",
      "1/2 cup pickle slices"
    ],
    [
      "Cook chicken until crisp and safely cooked.",
      "Mix honey with hot sauce.",
      "Toast the buns.",
      "Add chicken, hot honey, pickles, and coleslaw.",
      "Serve immediately."
    ]
  ),

  pack004Recipe(
    "pack004-326",
    "Chicken Salad Lettuce Wraps",
    "Lunch",
    "American",
    "Easy",
    15,
    0,
    4,
    4.6,
    "🥬",
    "Creamy chicken salad served in crisp lettuce leaves.",
    [
      "3 cups cooked chopped chicken",
      "1/2 cup mayonnaise",
      "1/3 cup diced celery",
      "1/3 cup grapes",
      "1/4 cup chopped pecans",
      "1 teaspoon Dijon mustard",
      "12 lettuce leaves"
    ],
    [
      "Mix chicken, mayonnaise, celery, grapes, pecans, and mustard.",
      "Season with salt and pepper.",
      "Spoon the mixture into lettuce leaves.",
      "Serve chilled."
    ]
  ),

  pack004Recipe(
    "pack004-327",
    "Spicy Tuna Wrap",
    "Lunch",
    "Asian-American",
    "Easy",
    10,
    0,
    4,
    4.6,
    "🌯",
    "Tuna, spicy mayonnaise, cucumber, avocado, and lettuce in a wrap.",
    [
      "2 cans tuna, drained",
      "1/3 cup mayonnaise",
      "1 tablespoon hot sauce",
      "4 tortillas",
      "1 cucumber, sliced",
      "1 avocado, sliced",
      "2 cups shredded lettuce"
    ],
    [
      "Mix tuna, mayonnaise, and hot sauce.",
      "Divide among tortillas.",
      "Add cucumber, avocado, and lettuce.",
      "Roll tightly and slice."
    ]
  ),

  pack004Recipe(
    "pack004-328",
    "Chicken BLT Wrap",
    "Lunch",
    "American",
    "Easy",
    10,
    0,
    4,
    4.7,
    "🌯",
    "Chicken, bacon, lettuce, tomato, and mayonnaise in a tortilla.",
    [
      "4 large tortillas",
      "2 cups cooked chicken",
      "8 slices cooked bacon",
      "2 cups lettuce",
      "1 tomato, diced",
      "1/3 cup mayonnaise"
    ],
    [
      "Lay out the tortillas.",
      "Spread with mayonnaise.",
      "Add chicken, bacon, lettuce, and tomato.",
      "Roll tightly and slice."
    ]
  ),

  pack004Recipe(
    "pack004-329",
    "Roast Beef Provolone Panini",
    "Lunch",
    "Italian-American",
    "Easy",
    10,
    8,
    2,
    4.7,
    "🥪",
    "Roast beef, provolone, onions, and mustard pressed until crisp.",
    [
      "4 slices ciabatta",
      "8 ounces sliced roast beef",
      "4 slices provolone",
      "1/2 onion, thinly sliced",
      "2 tablespoons Dijon mustard",
      "1 tablespoon olive oil"
    ],
    [
      "Spread mustard over the bread.",
      "Add roast beef, provolone, and onion.",
      "Brush the outside with olive oil.",
      "Press or grill until crisp and melted."
    ]
  ),

  pack004Recipe(
    "pack004-330",
    "Chicken Fajita Quesadilla",
    "Lunch",
    "Mexican-American",
    "Easy",
    12,
    12,
    4,
    4.8,
    "🌮",
    "Chicken, peppers, onions, and cheese inside a crisp tortilla.",
    [
      "4 large tortillas",
      "2 cups cooked fajita chicken",
      "1 bell pepper, sliced",
      "1/2 onion, sliced",
      "2 cups shredded cheese",
      "2 tablespoons butter"
    ],
    [
      "Cook the pepper and onion until tender.",
      "Add chicken and warm through.",
      "Fill half of each tortilla with chicken mixture and cheese.",
      "Fold and cook in butter until crisp.",
      "Slice into wedges."
    ]
  ),

  pack004Recipe(
    "pack004-331",
    "Balsamic Chicken Salad",
    "Lunch",
    "American",
    "Easy",
    15,
    0,
    4,
    4.7,
    "🥗",
    "Chicken, berries, pecans, feta, and balsamic dressing.",
    [
      "6 cups mixed greens",
      "2 cups cooked chicken",
      "1 cup sliced strawberries",
      "1/2 cup blueberries",
      "1/2 cup pecans",
      "1/2 cup crumbled feta",
      "1/2 cup balsamic dressing"
    ],
    [
      "Divide greens between bowls.",
      "Add chicken, strawberries, blueberries, pecans, and feta.",
      "Drizzle with balsamic dressing.",
      "Serve immediately."
    ]
  ),

  pack004Recipe(
    "pack004-332",
    "Turkey Meatball Sub",
    "Lunch",
    "Italian-American",
    "Easy",
    10,
    20,
    4,
    4.7,
    "🥖",
    "Turkey meatballs, marinara, and mozzarella on toasted rolls.",
    [
      "16 cooked turkey meatballs",
      "2 cups marinara sauce",
      "4 sub rolls",
      "1 1/2 cups mozzarella",
      "1/4 cup Parmesan"
    ],
    [
      "Warm the meatballs in marinara.",
      "Fill each roll with four meatballs.",
      "Top with mozzarella and Parmesan.",
      "Bake until the cheese melts."
    ]
  ),

  pack004Recipe(
    "pack004-333",
    "Mediterranean Turkey Wrap",
    "Lunch",
    "Mediterranean",
    "Easy",
    10,
    0,
    4,
    4.6,
    "🌯",
    "Turkey, hummus, cucumber, tomato, feta, and spinach.",
    [
      "4 tortillas",
      "12 slices turkey",
      "1/2 cup hummus",
      "1 cucumber, diced",
      "1 tomato, diced",
      "1/2 cup feta",
      "2 cups spinach"
    ],
    [
      "Spread hummus over tortillas.",
      "Add turkey, cucumber, tomato, feta, and spinach.",
      "Fold the sides inward.",
      "Roll tightly."
    ]
  ),

  pack004Recipe(
    "pack004-334",
    "Loaded Chicken Nachos",
    "Lunch",
    "Mexican-American",
    "Easy",
    12,
    12,
    6,
    4.8,
    "🧀",
    "Tortilla chips loaded with chicken, beans, corn, cheese, and toppings.",
    [
      "10 ounces tortilla chips",
      "2 cups cooked chicken",
      "1 cup black beans",
      "1 cup corn",
      "2 cups shredded cheese",
      "1 tomato, diced",
      "Salsa and sour cream"
    ],
    [
      "Preheat the oven to 400°F.",
      "Spread chips on a sheet pan.",
      "Top with chicken, beans, corn, and cheese.",
      "Bake until the cheese melts.",
      "Add tomato, salsa, and sour cream."
    ]
  ),

  pack004Recipe(
    "pack004-335",
    "Crispy Buffalo Chicken Sandwich",
    "Lunch",
    "American",
    "Medium",
    15,
    15,
    4,
    4.8,
    "🍔",
    "Crispy buffalo chicken with ranch, lettuce, and pickles.",
    [
      "4 breaded chicken cutlets",
      "1/2 cup buffalo sauce",
      "4 sandwich buns",
      "1 cup lettuce",
      "1/2 cup ranch dressing",
      "1/2 cup sliced pickles"
    ],
    [
      "Cook chicken until crisp and safely cooked.",
      "Toss with buffalo sauce.",
      "Toast the buns.",
      "Add ranch, lettuce, chicken, and pickles.",
      "Serve warm."
    ]
  ),

  pack004Recipe(
    "pack004-336",
    "Pesto Tortellini Salad",
    "Lunch",
    "Italian",
    "Easy",
    12,
    10,
    6,
    4.7,
    "🥗",
    "Cold tortellini salad with pesto, tomatoes, mozzarella, and spinach.",
    [
      "20 ounces cheese tortellini",
      "3/4 cup pesto",
      "1 cup cherry tomatoes",
      "1 cup mozzarella pearls",
      "2 cups spinach",
      "1/4 cup Parmesan"
    ],
    [
      "Cook tortellini and cool completely.",
      "Combine with pesto, tomatoes, mozzarella, and spinach.",
      "Top with Parmesan.",
      "Chill before serving."
    ]
  ),

  pack004Recipe(
    "pack004-337",
    "Chicken Bacon Avocado Sandwich",
    "Lunch",
    "American",
    "Easy",
    12,
    0,
    2,
    4.8,
    "🥪",
    "Chicken, bacon, avocado, tomato, lettuce, and ranch.",
    [
      "4 slices toasted bread",
      "1 cooked chicken breast, sliced",
      "4 slices cooked bacon",
      "1 avocado, sliced",
      "1 tomato, sliced",
      "Lettuce",
      "3 tablespoons ranch dressing"
    ],
    [
      "Spread ranch over the toast.",
      "Add chicken, bacon, avocado, tomato, and lettuce.",
      "Close the sandwiches.",
      "Slice and serve."
    ]
  ),

  pack004Recipe(
    "pack004-338",
    "Honey Mustard Chicken Wrap",
    "Lunch",
    "American",
    "Easy",
    10,
    0,
    4,
    4.7,
    "🌯",
    "Chicken, bacon, cheddar, lettuce, and honey mustard.",
    [
      "4 tortillas",
      "2 cups cooked chicken",
      "6 slices cooked bacon",
      "1 cup shredded cheddar",
      "2 cups lettuce",
      "1/2 cup honey mustard"
    ],
    [
      "Lay out the tortillas.",
      "Add chicken, bacon, cheddar, and lettuce.",
      "Drizzle with honey mustard.",
      "Roll tightly and slice."
    ]
  ),

  pack004Recipe(
    "pack004-339",
    "Greek Pasta Salad",
    "Lunch",
    "Greek",
    "Easy",
    15,
    12,
    8,
    4.7,
    "🥗",
    "Cold pasta with cucumber, tomatoes, olives, feta, and Greek dressing.",
    [
      "12 ounces rotini",
      "1 cucumber, diced",
      "1 cup cherry tomatoes",
      "1/2 cup olives",
      "1 cup feta",
      "1/2 red onion, diced",
      "3/4 cup Greek dressing"
    ],
    [
      "Cook pasta and cool completely.",
      "Combine pasta, cucumber, tomatoes, olives, feta, and onion.",
      "Add dressing and toss.",
      "Chill before serving."
    ]
  ),

  pack004Recipe(
    "pack004-340",
    "Chicken Parmesan Sliders",
    "Lunch",
    "Italian-American",
    "Easy",
    15,
    20,
    6,
    4.8,
    "🍔",
    "Slider rolls filled with chicken, marinara, mozzarella, and Parmesan.",
    [
      "12 slider rolls",
      "3 cups chopped breaded chicken",
      "1 cup marinara sauce",
      "2 cups mozzarella",
      "1/2 cup Parmesan",
      "3 tablespoons garlic butter"
    ],
    [
      "Preheat the oven to 375°F.",
      "Fill rolls with chicken, marinara, mozzarella, and Parmesan.",
      "Brush with garlic butter.",
      "Cover and bake for 15 minutes.",
      "Uncover and bake for 5 minutes."
    ]
  ),

  /* =======================================================
     DINNER — 341–350
  ======================================================= */

  pack004Recipe(
    "pack004-341",
    "Creamy Garlic Chicken Pasta",
    "Dinner",
    "Italian-American",
    "Medium",
    15,
    25,
    4,
    4.9,
    "🍝",
    "Chicken and pasta in a rich garlic Parmesan cream sauce.",
    [
      "12 ounces penne",
      "2 chicken breasts, sliced",
      "3 tablespoons butter",
      "5 cloves garlic",
      "2 cups heavy cream",
      "1 1/2 cups Parmesan",
      "Salt and pepper"
    ],
    [
      "Cook the pasta.",
      "Season and cook the chicken.",
      "Remove chicken and cook garlic in butter.",
      "Add cream and Parmesan.",
      "Toss with pasta and chicken."
    ]
  ),

  pack004Recipe(
    "pack004-342",
    "Creamy Cajun Sausage Pasta",
    "Dinner",
    "Cajun",
    "Easy",
    12,
    25,
    6,
    4.8,
    "🍝",
    "Smoked sausage and pasta in a creamy Cajun sauce.",
    [
      "12 ounces penne",
      "1 pound smoked sausage, sliced",
      "2 tablespoons Cajun seasoning",
      "1 bell pepper, sliced",
      "2 cloves garlic",
      "1 1/2 cups heavy cream",
      "1 cup Parmesan"
    ],
    [
      "Cook the pasta.",
      "Brown sausage with bell pepper.",
      "Add garlic and Cajun seasoning.",
      "Stir in cream and Parmesan.",
      "Combine with pasta."
    ]
  ),

  pack004Recipe(
    "pack004-343",
    "Chicken Spinach Alfredo",
    "Dinner",
    "Italian-American",
    "Medium",
    15,
    25,
    6,
    4.8,
    "🍝",
    "Chicken, spinach, and pasta in creamy Alfredo sauce.",
    [
      "12 ounces fettuccine",
      "2 chicken breasts",
      "3 cups spinach",
      "3 tablespoons butter",
      "3 cloves garlic",
      "2 cups heavy cream",
      "1 1/2 cups Parmesan"
    ],
    [
      "Cook the pasta.",
      "Cook sliced chicken until safely cooked.",
      "Cook garlic in butter.",
      "Add cream, Parmesan, and spinach.",
      "Combine with chicken and pasta."
    ]
  ),

  pack004Recipe(
    "pack004-344",
    "Buffalo Chicken Pasta",
    "Dinner",
    "American",
    "Easy",
    12,
    25,
    6,
    4.8,
    "🌶️",
    "Creamy buffalo chicken pasta with cheddar and ranch seasoning.",
    [
      "12 ounces pasta",
      "3 cups cooked chicken",
      "1/2 cup buffalo sauce",
      "8 ounces cream cheese",
      "1 cup milk",
      "1 1/2 cups cheddar",
      "1 tablespoon ranch seasoning"
    ],
    [
      "Cook the pasta.",
      "Warm chicken with buffalo sauce.",
      "Add cream cheese, milk, cheddar, and ranch seasoning.",
      "Stir until smooth.",
      "Combine with pasta."
    ]
  ),

  pack004Recipe(
    "pack004-345",
    "Chicken Mozzarella Pasta",
    "Dinner",
    "Italian-American",
    "Easy",
    15,
    25,
    6,
    4.8,
    "🍝",
    "Chicken and pasta in tomato cream sauce with melted mozzarella.",
    [
      "12 ounces penne",
      "2 chicken breasts, sliced",
      "2 cups marinara",
      "1 cup heavy cream",
      "2 cups mozzarella",
      "2 cloves garlic",
      "1 teaspoon Italian seasoning"
    ],
    [
      "Cook the pasta.",
      "Cook the chicken with garlic and seasoning.",
      "Add marinara and cream.",
      "Stir in mozzarella until melted.",
      "Combine with pasta."
    ]
  ),

  pack004Recipe(
    "pack004-346",
    "Garlic Parmesan Chicken Thighs",
    "Dinner",
    "American",
    "Easy",
    10,
    35,
    4,
    4.8,
    "🍗",
    "Oven-baked chicken thighs with garlic, Parmesan, and herbs.",
    [
      "6 chicken thighs",
      "3 tablespoons olive oil",
      "5 cloves garlic",
      "1/2 cup Parmesan",
      "1 teaspoon Italian seasoning",
      "Salt and pepper"
    ],
    [
      "Preheat the oven to 425°F.",
      "Mix oil, garlic, Parmesan, seasoning, salt, and pepper.",
      "Coat the chicken.",
      "Bake for 30 to 35 minutes.",
      "Check that the chicken is safely cooked."
    ]
  ),

  pack004Recipe(
    "pack004-347",
    "Brown Sugar Garlic Chicken",
    "Dinner",
    "American",
    "Easy",
    10,
    30,
    4,
    4.7,
    "🍗",
    "Chicken baked with a sweet garlic brown sugar glaze.",
    [
      "4 chicken breasts",
      "1/3 cup brown sugar",
      "4 cloves garlic",
      "2 tablespoons olive oil",
      "1 teaspoon paprika",
      "Salt and pepper"
    ],
    [
      "Preheat the oven to 400°F.",
      "Cook garlic briefly in olive oil.",
      "Stir in brown sugar and paprika.",
      "Spread over seasoned chicken.",
      "Bake for 25 to 30 minutes."
    ]
  ),

  pack004Recipe(
    "pack004-348",
    "Creamy Mushroom Chicken",
    "Dinner",
    "American",
    "Medium",
    15,
    25,
    4,
    4.8,
    "🍄",
    "Chicken breasts in a creamy mushroom garlic sauce.",
    [
      "4 chicken breasts",
      "8 ounces mushrooms",
      "3 tablespoons butter",
      "3 cloves garlic",
      "1 cup chicken broth",
      "1 cup heavy cream",
      "Salt and pepper"
    ],
    [
      "Season and brown the chicken.",
      "Remove chicken and cook mushrooms in butter.",
      "Add garlic, broth, and cream.",
      "Return the chicken.",
      "Simmer until safely cooked."
    ]
  ),

  pack004Recipe(
    "pack004-349",
    "Ranch Baked Chicken",
    "Dinner",
    "American",
    "Easy",
    10,
    30,
    4,
    4.7,
    "🍗",
    "Juicy baked chicken coated with ranch seasoning and Parmesan.",
    [
      "4 chicken breasts",
      "2 tablespoons ranch seasoning",
      "1/2 cup mayonnaise",
      "1/2 cup Parmesan",
      "1/2 teaspoon garlic powder"
    ],
    [
      "Preheat the oven to 400°F.",
      "Mix ranch seasoning, mayonnaise, Parmesan, and garlic powder.",
      "Spread over the chicken.",
      "Bake for 25 to 30 minutes.",
      "Check that the chicken is safely cooked."
    ]
  ),

  pack004Recipe(
    "pack004-350",
    "Chicken Cacciatore",
    "Dinner",
    "Italian",
    "Medium",
    20,
    45,
    6,
    4.8,
    "🍗",
    "Chicken simmered with tomatoes, peppers, onions, and herbs.",
    [
      "6 chicken thighs",
      "1 onion, sliced",
      "2 bell peppers, sliced",
      "8 ounces mushrooms",
      "1 can crushed tomatoes",
      "3 cloves garlic",
      "1 teaspoon Italian seasoning"
    ],
    [
      "Brown the chicken and remove it.",
      "Cook onion, peppers, mushrooms, and garlic.",
      "Add tomatoes and seasoning.",
      "Return the chicken.",
      "Cover and simmer until tender and safely cooked."
    ]
  )
  pack004Recipe(
    "pack004-376",
    "Smoked Sausage Mac and Cheese",
    "Dinner",
    "American",
    "Easy",
    12,
    25,
    6,
    4.8,
    "🧀",
    "Creamy macaroni and cheese with browned smoked sausage.",
    [
      "12 ounces elbow macaroni",
      "1 pound smoked sausage, sliced",
      "3 tablespoons butter",
      "3 tablespoons flour",
      "3 cups milk",
      "3 cups shredded cheddar",
      "Salt and pepper"
    ],
    [
      "Cook the macaroni according to package directions.",
      "Brown the sausage in a large skillet and remove it.",
      "Melt butter, stir in flour, and cook for 1 minute.",
      "Whisk in milk and cook until thickened.",
      "Stir in cheddar, sausage, and macaroni."
    ]
  ),

  pack004Recipe(
    "pack004-377",
    "Sausage and Spinach Pasta",
    "Dinner",
    "Italian-American",
    "Easy",
    12,
    25,
    6,
    4.7,
    "🍝",
    "Italian sausage and spinach tossed with pasta in tomato cream sauce.",
    [
      "12 ounces penne",
      "1 pound Italian sausage",
      "3 cups spinach",
      "2 cloves garlic",
      "1 cup tomato sauce",
      "1 cup heavy cream",
      "1/2 cup Parmesan"
    ],
    [
      "Cook the pasta.",
      "Brown and crumble the sausage.",
      "Add garlic, tomato sauce, and cream.",
      "Stir in spinach until wilted.",
      "Add pasta and Parmesan."
    ]
  ),

  pack004Recipe(
    "pack004-378",
    "Shrimp Scampi Pasta",
    "Dinner",
    "Italian-American",
    "Medium",
    15,
    20,
    4,
    4.9,
    "🍤",
    "Shrimp and pasta tossed in lemon garlic butter sauce.",
    [
      "12 ounces linguine",
      "1 pound shrimp",
      "5 tablespoons butter",
      "5 cloves garlic",
      "1 lemon",
      "1/2 cup chicken broth",
      "2 tablespoons parsley"
    ],
    [
      "Cook the linguine and reserve some pasta water.",
      "Cook shrimp in butter until pink and opaque.",
      "Remove shrimp and cook garlic briefly.",
      "Add broth and lemon juice.",
      "Toss with pasta, shrimp, parsley, and pasta water as needed."
    ]
  ),

  pack004Recipe(
    "pack004-379",
    "Coconut Curry Shrimp",
    "Dinner",
    "Asian",
    "Easy",
    15,
    20,
    4,
    4.8,
    "🦐",
    "Shrimp simmered in a creamy coconut curry sauce.",
    [
      "1 pound shrimp",
      "1 tablespoon oil",
      "1 onion, diced",
      "3 cloves garlic",
      "2 tablespoons curry powder",
      "1 can coconut milk",
      "1 tablespoon lime juice"
    ],
    [
      "Cook the onion in oil until tender.",
      "Add garlic and curry powder.",
      "Pour in coconut milk and simmer for 5 minutes.",
      "Add shrimp and cook until pink and opaque.",
      "Stir in lime juice and serve with rice."
    ]
  ),

  pack004Recipe(
    "pack004-380",
    "Blackened Salmon",
    "Dinner",
    "Cajun",
    "Easy",
    10,
    15,
    4,
    4.8,
    "🐟",
    "Salmon fillets coated with bold Cajun seasoning and seared.",
    [
      "4 salmon fillets",
      "2 tablespoons olive oil",
      "2 teaspoons paprika",
      "1 teaspoon garlic powder",
      "1 teaspoon onion powder",
      "1/2 teaspoon cayenne",
      "Salt and pepper"
    ],
    [
      "Mix the spices together.",
      "Coat the salmon with oil and seasoning.",
      "Heat a skillet over medium-high heat.",
      "Cook salmon for 4 to 5 minutes per side.",
      "Serve when the salmon flakes easily."
    ]
  ),

  pack004Recipe(
    "pack004-381",
    "Creamy Tuscan Salmon",
    "Dinner",
    "Italian-American",
    "Medium",
    15,
    25,
    4,
    4.9,
    "🐟",
    "Salmon in a creamy garlic sauce with spinach and sun-dried tomatoes.",
    [
      "4 salmon fillets",
      "2 tablespoons olive oil",
      "3 cloves garlic",
      "1 1/2 cups heavy cream",
      "1/2 cup Parmesan",
      "2 cups spinach",
      "1/2 cup sun-dried tomatoes"
    ],
    [
      "Season and sear the salmon, then remove it.",
      "Cook garlic in the skillet.",
      "Add cream, Parmesan, spinach, and tomatoes.",
      "Return the salmon.",
      "Simmer gently until the salmon is cooked."
    ]
  ),

  pack004Recipe(
    "pack004-382",
    "Baked Cod with Garlic Butter",
    "Dinner",
    "American",
    "Easy",
    10,
    15,
    4,
    4.7,
    "🐟",
    "Flaky cod baked with garlic, lemon, and melted butter.",
    [
      "4 cod fillets",
      "4 tablespoons melted butter",
      "3 cloves garlic",
      "1 tablespoon lemon juice",
      "1 teaspoon paprika",
      "2 tablespoons parsley",
      "Salt and pepper"
    ],
    [
      "Preheat the oven to 400°F.",
      "Place cod in a baking dish.",
      "Mix butter, garlic, lemon juice, paprika, salt, and pepper.",
      "Pour over the fish.",
      "Bake for 12 to 15 minutes and top with parsley."
    ]
  ),

  pack004Recipe(
    "pack004-383",
    "Seafood Alfredo",
    "Dinner",
    "Italian-American",
    "Medium",
    20,
    25,
    6,
    4.9,
    "🍝",
    "Pasta with shrimp and scallops in creamy Parmesan sauce.",
    [
      "12 ounces fettuccine",
      "1 pound shrimp",
      "1/2 pound scallops",
      "3 tablespoons butter",
      "3 cloves garlic",
      "2 cups heavy cream",
      "1 1/2 cups Parmesan"
    ],
    [
      "Cook the pasta.",
      "Cook shrimp and scallops in butter and remove them.",
      "Cook garlic briefly.",
      "Add cream and Parmesan.",
      "Toss with pasta and seafood."
    ]
  ),

  pack004Recipe(
    "pack004-384",
    "Vegetable Stir Fry",
    "Vegetarian",
    "Asian",
    "Easy",
    15,
    15,
    4,
    4.6,
    "🥦",
    "Colorful vegetables cooked quickly in a savory stir-fry sauce.",
    [
      "2 cups broccoli",
      "1 bell pepper, sliced",
      "1 cup sliced carrots",
      "1 zucchini, sliced",
      "1 cup snap peas",
      "1/3 cup soy sauce",
      "1 tablespoon cornstarch",
      "2 tablespoons oil"
    ],
    [
      "Whisk soy sauce and cornstarch together.",
      "Heat oil in a large skillet or wok.",
      "Cook carrots and broccoli first.",
      "Add remaining vegetables.",
      "Pour in the sauce and cook until thickened."
    ]
  ),

  pack004Recipe(
    "pack004-385",
    "Creamy Spinach Pasta",
    "Vegetarian",
    "Italian",
    "Easy",
    10,
    20,
    4,
    4.7,
    "🍝",
    "Pasta in a creamy garlic spinach and Parmesan sauce.",
    [
      "12 ounces pasta",
      "3 cups spinach",
      "3 tablespoons butter",
      "3 cloves garlic",
      "1 1/2 cups heavy cream",
      "1 cup Parmesan",
      "Salt and pepper"
    ],
    [
      "Cook the pasta.",
      "Cook garlic in butter.",
      "Add cream and Parmesan.",
      "Stir in spinach until wilted.",
      "Toss with pasta and season."
    ]
  ),

  pack004Recipe(
    "pack004-386",
    "Vegetable Lasagna",
    "Vegetarian",
    "Italian",
    "Medium",
    30,
    50,
    10,
    4.8,
    "🍝",
    "Lasagna layered with vegetables, ricotta, marinara, and cheese.",
    [
      "12 lasagna noodles",
      "1 zucchini, diced",
      "1 bell pepper, diced",
      "3 cups spinach",
      "24 ounces marinara",
      "15 ounces ricotta",
      "3 cups mozzarella",
      "1/2 cup Parmesan"
    ],
    [
      "Preheat the oven to 375°F.",
      "Cook the noodles and sauté the vegetables.",
      "Layer sauce, noodles, ricotta, vegetables, and mozzarella.",
      "Repeat the layers and top with Parmesan.",
      "Bake covered for 40 minutes and uncovered for 10 minutes."
    ]
  ),

  pack004Recipe(
    "pack004-387",
    "Black Bean Tacos",
    "Vegetarian",
    "Mexican",
    "Easy",
    10,
    12,
    4,
    4.6,
    "🌮",
    "Seasoned black beans with cheese, lettuce, tomato, and avocado.",
    [
      "2 cans black beans",
      "2 tablespoons taco seasoning",
      "8 tortillas",
      "1 cup shredded cheese",
      "2 cups shredded lettuce",
      "1 tomato, diced",
      "1 avocado, diced"
    ],
    [
      "Warm the beans with taco seasoning.",
      "Heat the tortillas.",
      "Fill with beans and cheese.",
      "Add lettuce, tomato, and avocado.",
      "Serve with salsa if desired."
    ]
  ),

  pack004Recipe(
    "pack004-388",
    "Chickpea Curry",
    "Vegetarian",
    "Indian",
    "Easy",
    15,
    25,
    6,
    4.8,
    "🍛",
    "Chickpeas simmered in a tomato coconut curry sauce.",
    [
      "2 cans chickpeas",
      "1 onion, diced",
      "3 cloves garlic",
      "2 tablespoons curry powder",
      "1 can diced tomatoes",
      "1 can coconut milk",
      "2 cups spinach"
    ],
    [
      "Cook the onion until tender.",
      "Add garlic and curry powder.",
      "Stir in tomatoes, coconut milk, and chickpeas.",
      "Simmer for 20 minutes.",
      "Stir in spinach and serve with rice."
    ]
  ),

  pack004Recipe(
    "pack004-389",
    "Broccoli Cheddar Stuffed Potatoes",
    "Vegetarian",
    "American",
    "Easy",
    12,
    55,
    4,
    4.7,
    "🥔",
    "Baked potatoes stuffed with broccoli and creamy cheddar sauce.",
    [
      "4 large russet potatoes",
      "3 cups broccoli florets",
      "2 tablespoons butter",
      "2 tablespoons flour",
      "1 1/2 cups milk",
      "2 cups shredded cheddar",
      "Salt and pepper"
    ],
    [
      "Bake potatoes at 425°F until tender.",
      "Steam broccoli until crisp-tender.",
      "Cook butter and flour for 1 minute.",
      "Whisk in milk and stir in cheddar.",
      "Split potatoes and fill with broccoli and cheese sauce."
    ]
  ),

  pack004Recipe(
    "pack004-390",
    "Vegetarian Burrito Bowls",
    "Vegetarian",
    "Mexican-American",
    "Easy",
    15,
    10,
    4,
    4.7,
    "🍚",
    "Rice bowls with beans, corn, vegetables, avocado, and cheese.",
    [
      "3 cups cooked rice",
      "1 can black beans",
      "1 cup corn",
      "1 bell pepper, diced",
      "1 avocado, diced",
      "1 cup shredded cheese",
      "1 cup salsa"
    ],
    [
      "Warm the rice, beans, and corn.",
      "Cook the bell pepper until slightly tender.",
      "Divide rice between bowls.",
      "Add beans, corn, pepper, avocado, and cheese.",
      "Top with salsa."
    ]
  ),

  pack004Recipe(
    "pack004-391",
    "Air Fryer Parmesan Chicken",
    "Air Fryer",
    "Italian-American",
    "Easy",
    15,
    14,
    4,
    4.8,
    "🍗",
    "Crispy Parmesan-coated chicken cooked in the air fryer.",
    [
      "4 thin chicken breasts",
      "1 cup breadcrumbs",
      "1/2 cup Parmesan",
      "2 large eggs",
      "1 teaspoon Italian seasoning",
      "Cooking spray",
      "Salt and pepper"
    ],
    [
      "Preheat the air fryer to 390°F.",
      "Mix breadcrumbs, Parmesan, and seasoning.",
      "Dip chicken in egg and then breadcrumb mixture.",
      "Spray lightly and air fry for 12 to 14 minutes.",
      "Flip halfway and confirm the chicken is safely cooked."
    ]
  ),

  pack004Recipe(
    "pack004-392",
    "Air Fryer Garlic Shrimp",
    "Air Fryer",
    "American",
    "Easy",
    8,
    8,
    4,
    4.7,
    "🦐",
    "Garlic-seasoned shrimp cooked quickly in the air fryer.",
    [
      "1 pound shrimp",
      "2 tablespoons olive oil",
      "3 cloves garlic",
      "1 teaspoon paprika",
      "1 tablespoon lemon juice",
      "Salt and pepper"
    ],
    [
      "Preheat the air fryer to 400°F.",
      "Toss shrimp with oil, garlic, paprika, salt, and pepper.",
      "Arrange in a single layer.",
      "Air fry for 6 to 8 minutes.",
      "Finish with lemon juice."
    ]
  ),

  pack004Recipe(
    "pack004-393",
    "Air Fryer Salmon Bites",
    "Air Fryer",
    "American",
    "Easy",
    10,
    9,
    4,
    4.8,
    "🐟",
    "Tender seasoned salmon bites with crisp edges.",
    [
      "1 1/2 pounds salmon, cubed",
      "1 tablespoon olive oil",
      "1 teaspoon paprika",
      "1 teaspoon garlic powder",
      "1 tablespoon honey",
      "1 tablespoon soy sauce"
    ],
    [
      "Preheat the air fryer to 400°F.",
      "Mix oil, paprika, garlic powder, honey, and soy sauce.",
      "Coat the salmon pieces.",
      "Air fry for 7 to 9 minutes.",
      "Serve immediately."
    ]
  ),

  pack004Recipe(
    "pack004-394",
    "Air Fryer Sweet Potato Fries",
    "Air Fryer",
    "American",
    "Easy",
    12,
    18,
    4,
    4.6,
    "🍠",
    "Crispy seasoned sweet potato fries made with little oil.",
    [
      "2 large sweet potatoes",
      "2 tablespoons olive oil",
      "1 teaspoon paprika",
      "1/2 teaspoon garlic powder",
      "1/2 teaspoon salt"
    ],
    [
      "Cut sweet potatoes into thin fries.",
      "Toss with oil and seasonings.",
      "Arrange in a single layer.",
      "Air fry at 390°F for 16 to 18 minutes.",
      "Shake the basket several times."
    ]
  ),

  pack004Recipe(
    "pack004-395",
    "Air Fryer Apple Chips",
    "Air Fryer",
    "Snack",
    "Easy",
    10,
    18,
    4,
    4.5,
    "🍎",
    "Thin cinnamon apple slices crisped in the air fryer.",
    [
      "2 apples",
      "1 teaspoon cinnamon",
      "1 teaspoon sugar",
      "Cooking spray"
    ],
    [
      "Slice the apples very thinly.",
      "Toss with cinnamon and sugar.",
      "Arrange in a single layer.",
      "Air fry at 300°F for 15 to 18 minutes.",
      "Allow the chips to cool and crisp."
    ]
  ),

  pack004Recipe(
    "pack004-396",
    "Chocolate Peanut Butter Bars",
    "Dessert",
    "American",
    "Easy",
    15,
    0,
    16,
    4.9,
    "🍫",
    "No-bake peanut butter bars topped with chocolate.",
    [
      "2 cups graham cracker crumbs",
      "1 cup melted butter",
      "2 cups powdered sugar",
      "1 cup peanut butter",
      "2 cups chocolate chips",
      "2 tablespoons peanut butter"
    ],
    [
      "Mix graham crumbs, butter, powdered sugar, and 1 cup peanut butter.",
      "Press into a lined pan.",
      "Melt chocolate chips with 2 tablespoons peanut butter.",
      "Spread over the base.",
      "Chill until firm and slice."
    ]
  ),

  pack004Recipe(
    "pack004-397",
    "Lemon Blueberry Cake",
    "Dessert",
    "American",
    "Medium",
    20,
    35,
    12,
    4.8,
    "🍋",
    "Tender lemon cake filled with fresh blueberries.",
    [
      "2 1/2 cups flour",
      "1 1/2 cups sugar",
      "2 teaspoons baking powder",
      "1 cup butter",
      "4 large eggs",
      "1 cup milk",
      "2 tablespoons lemon zest",
      "1 1/2 cups blueberries"
    ],
    [
      "Preheat the oven to 350°F.",
      "Mix flour and baking powder.",
      "Beat butter and sugar, then add eggs.",
      "Alternate adding flour mixture and milk.",
      "Fold in zest and blueberries and bake for 30 to 35 minutes."
    ]
  ),

  pack004Recipe(
    "pack004-398",
    "Cookies and Cream Pie",
    "Dessert",
    "American",
    "Easy",
    20,
    0,
    8,
    4.8,
    "🍪",
    "A chilled cream pie filled with crushed chocolate sandwich cookies.",
    [
      "1 chocolate cookie crust",
      "8 ounces cream cheese",
      "1 cup powdered sugar",
      "8 ounces whipped topping",
      "15 chocolate sandwich cookies, crushed",
      "1 teaspoon vanilla"
    ],
    [
      "Beat cream cheese, powdered sugar, and vanilla.",
      "Fold in whipped topping.",
      "Stir in most of the crushed cookies.",
      "Spread into the crust.",
      "Top with remaining cookies and chill for 4 hours."
    ]
  ),

  pack004Recipe(
    "pack004-399",
    "Cinnamon Sugar Donut Muffins",
    "Dessert",
    "American",
    "Easy",
    15,
    18,
    12,
    4.8,
    "🧁",
    "Soft muffins coated in buttery cinnamon sugar.",
    [
      "2 cups flour",
      "3/4 cup sugar",
      "2 teaspoons baking powder",
      "1 cup milk",
      "1 large egg",
      "1/3 cup melted butter",
      "1/2 cup sugar",
      "1 teaspoon cinnamon"
    ],
    [
      "Preheat the oven to 375°F.",
      "Mix flour, sugar, and baking powder.",
      "Add milk, egg, and melted butter.",
      "Divide into muffin cups and bake for 16 to 18 minutes.",
      "Brush with butter and roll in cinnamon sugar."
    ]
  ),

  pack004Recipe(
    "pack004-400",
    "Salted Caramel Brownies",
    "Dessert",
    "American",
    "Medium",
    20,
    30,
    16,
    4.9,
    "🍫",
    "Fudgy brownies swirled with caramel and finished with sea salt.",
    [
      "1 cup melted butter",
      "2 cups sugar",
      "4 large eggs",
      "1 cup cocoa powder",
      "1 cup flour",
      "1 cup chocolate chips",
      "3/4 cup caramel sauce",
      "1 teaspoon sea salt"
    ],
    [
      "Preheat the oven to 350°F.",
      "Whisk butter, sugar, and eggs.",
      "Fold in cocoa, flour, and chocolate chips.",
      "Spread in a baking pan and swirl caramel over the top.",
      "Sprinkle with sea salt and bake for 25 to 30 minutes."
    ]
  )

];

/* Add Pack 4 to the complete Recipe Buddy collection. */

window.RECIPE_PACKS.push(recipePack004);

window.recipes =
  window.RECIPE_PACKS.flat();

console.log(
  recipePack004.length +
  " recipes loaded from Recipe Pack 004."
);