/* =========================================================
   RECIPE BUDDY
   RECIPE PACK 001
   RECIPES 1–100
========================================================= */

"use strict";

window.RECIPE_PACKS =
  window.RECIPE_PACKS || [];

const recipePack001 = [

  /* =======================================================
     BREAKFAST — 1–20
  ======================================================= */

  {
    id: "pack001-001",
    title: "Fluffy Buttermilk Pancakes",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🥞",
    description: "Soft, fluffy pancakes with crisp golden edges.",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1/2 teaspoon baking soda",
      "1/2 teaspoon salt",
      "2 cups buttermilk",
      "2 large eggs",
      "4 tablespoons melted butter"
    ],
    instructions: [
      "Whisk the flour, sugar, baking powder, baking soda, and salt together.",
      "Whisk the buttermilk, eggs, and melted butter in a separate bowl.",
      "Pour the wet mixture into the dry ingredients and stir until just combined.",
      "Cook 1/4-cup portions on a greased skillet over medium heat until bubbles form.",
      "Flip and cook until golden brown."
    ]
  },

  {
    id: "pack001-002",
    title: "Blueberry Lemon Pancakes",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    rating: 4.7,
    emoji: "🫐",
    description: "Bright lemon pancakes filled with juicy blueberries.",
    ingredients: [
      "2 cups pancake mix",
      "1 1/2 cups milk",
      "2 large eggs",
      "1 tablespoon lemon zest",
      "1 tablespoon lemon juice",
      "1 cup blueberries",
      "2 tablespoons butter"
    ],
    instructions: [
      "Mix the pancake mix, milk, eggs, lemon zest, and lemon juice.",
      "Fold the blueberries gently into the batter.",
      "Heat a buttered skillet over medium heat.",
      "Cook the pancakes until bubbles form around the edges.",
      "Flip and cook until golden."
    ]
  },

  {
    id: "pack001-003",
    title: "Cinnamon French Toast",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 12,
    servings: 4,
    rating: 4.8,
    emoji: "🍞",
    description: "Thick slices of bread coated in a cinnamon vanilla custard.",
    ingredients: [
      "8 slices thick bread",
      "4 large eggs",
      "1 cup milk",
      "1 teaspoon vanilla",
      "1 teaspoon cinnamon",
      "2 tablespoons sugar",
      "2 tablespoons butter"
    ],
    instructions: [
      "Whisk the eggs, milk, vanilla, cinnamon, and sugar together.",
      "Dip each bread slice into the egg mixture.",
      "Melt butter in a skillet over medium heat.",
      "Cook each slice for 2 to 3 minutes per side.",
      "Serve with syrup, fruit, or powdered sugar."
    ]
  },

  {
    id: "pack001-004",
    title: "Cheesy Breakfast Burritos",
    category: "Breakfast",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    rating: 4.7,
    emoji: "🌯",
    description: "Warm tortillas filled with eggs, sausage, potatoes, and cheese.",
    ingredients: [
      "8 large eggs",
      "1/2 pound breakfast sausage",
      "2 cups cooked breakfast potatoes",
      "1 cup shredded cheddar cheese",
      "4 large flour tortillas",
      "1/4 cup salsa",
      "Salt and pepper"
    ],
    instructions: [
      "Cook and crumble the sausage in a skillet.",
      "Scramble the eggs with salt and pepper.",
      "Warm the tortillas until flexible.",
      "Fill each tortilla with sausage, eggs, potatoes, cheese, and salsa.",
      "Fold tightly and toast seam-side down."
    ]
  },

  {
    id: "pack001-005",
    title: "Bacon Egg and Cheese Biscuits",
    category: "Breakfast",
    cuisine: "Southern",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    rating: 4.8,
    emoji: "🥓",
    description: "Buttery biscuits stacked with bacon, eggs, and melted cheese.",
    ingredients: [
      "4 large biscuits",
      "8 slices bacon",
      "4 large eggs",
      "4 slices cheddar cheese",
      "1 tablespoon butter",
      "Salt and pepper"
    ],
    instructions: [
      "Bake or warm the biscuits according to package directions.",
      "Cook the bacon until crisp.",
      "Cook the eggs in a buttered skillet and season them.",
      "Split the biscuits and add cheese, eggs, and bacon.",
      "Serve while warm."
    ]
  },

  {
    id: "pack001-006",
    title: "Sausage Hash Brown Casserole",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 45,
    servings: 8,
    rating: 4.8,
    emoji: "🥔",
    description: "A hearty baked casserole with sausage, eggs, potatoes, and cheese.",
    ingredients: [
      "1 pound breakfast sausage",
      "6 large eggs",
      "2 cups milk",
      "4 cups frozen hash browns",
      "2 cups shredded cheddar cheese",
      "1/2 teaspoon garlic powder",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Cook and crumble the sausage.",
      "Spread the hash browns and sausage in a greased baking dish.",
      "Whisk the eggs, milk, garlic powder, salt, and pepper.",
      "Pour over the casserole, top with cheese, and bake for 40 to 45 minutes."
    ]
  },

  {
    id: "pack001-007",
    title: "Ham and Cheese Omelet",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 8,
    servings: 1,
    rating: 4.6,
    emoji: "🍳",
    description: "A tender folded omelet filled with ham and cheddar.",
    ingredients: [
      "3 large eggs",
      "2 tablespoons milk",
      "1/3 cup diced ham",
      "1/3 cup shredded cheddar cheese",
      "1 tablespoon butter",
      "Salt and pepper"
    ],
    instructions: [
      "Whisk the eggs, milk, salt, and pepper.",
      "Melt butter in a nonstick skillet over medium-low heat.",
      "Pour in the eggs and gently pull the cooked edges toward the center.",
      "Add the ham and cheese to one side.",
      "Fold the omelet and cook until the cheese melts."
    ]
  },

  {
    id: "pack001-008",
    title: "Banana Walnut Oatmeal",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 8,
    servings: 2,
    rating: 4.5,
    emoji: "🍌",
    description: "Creamy oatmeal topped with banana, walnuts, and cinnamon.",
    ingredients: [
      "1 cup rolled oats",
      "2 cups milk",
      "1 banana, sliced",
      "1/4 cup chopped walnuts",
      "1 tablespoon brown sugar",
      "1/2 teaspoon cinnamon",
      "Pinch of salt"
    ],
    instructions: [
      "Combine the oats, milk, cinnamon, and salt in a saucepan.",
      "Simmer for 5 to 7 minutes while stirring.",
      "Divide the oatmeal between bowls.",
      "Top with banana, walnuts, and brown sugar."
    ]
  },

  {
    id: "pack001-009",
    title: "Strawberry Yogurt Parfait",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 0,
    servings: 2,
    rating: 4.6,
    emoji: "🍓",
    description: "Layers of creamy yogurt, strawberries, granola, and honey.",
    ingredients: [
      "2 cups vanilla Greek yogurt",
      "1 1/2 cups sliced strawberries",
      "1 cup granola",
      "2 tablespoons honey",
      "1/4 teaspoon vanilla"
    ],
    instructions: [
      "Stir the vanilla into the yogurt.",
      "Spoon yogurt into two glasses.",
      "Add a layer of strawberries and granola.",
      "Repeat the layers.",
      "Drizzle with honey before serving."
    ]
  },

  {
    id: "pack001-010",
    title: "Avocado Egg Toast",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 7,
    servings: 2,
    rating: 4.6,
    emoji: "🥑",
    description: "Crisp toast topped with seasoned avocado and fried eggs.",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "2 large eggs",
      "1 teaspoon lemon juice",
      "1 tablespoon butter",
      "Salt, pepper, and red pepper flakes"
    ],
    instructions: [
      "Toast the bread until crisp.",
      "Mash the avocado with lemon juice, salt, and pepper.",
      "Cook the eggs in butter to your preferred doneness.",
      "Spread avocado over the toast.",
      "Top with eggs and red pepper flakes."
    ]
  },

  {
    id: "pack001-011",
    title: "Belgian Waffles",
    category: "Breakfast",
    cuisine: "Belgian",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    rating: 4.8,
    emoji: "🧇",
    description: "Crisp waffles with a light, tender center.",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "1 tablespoon baking powder",
      "1/2 teaspoon salt",
      "2 large eggs",
      "1 3/4 cups milk",
      "1/2 cup melted butter",
      "1 teaspoon vanilla"
    ],
    instructions: [
      "Preheat the waffle iron.",
      "Whisk the flour, sugar, baking powder, and salt.",
      "Whisk the eggs, milk, butter, and vanilla separately.",
      "Combine the wet and dry ingredients.",
      "Cook according to the waffle iron instructions."
    ]
  },

  {
    id: "pack001-012",
    title: "Breakfast Quesadillas",
    category: "Breakfast",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 12,
    servings: 4,
    rating: 4.7,
    emoji: "🌮",
    description: "Crisp tortillas filled with eggs, sausage, and melted cheese.",
    ingredients: [
      "4 large flour tortillas",
      "6 large eggs",
      "1/2 pound breakfast sausage",
      "1 1/2 cups shredded cheese",
      "1/4 cup diced bell pepper",
      "2 tablespoons butter",
      "Salt and pepper"
    ],
    instructions: [
      "Cook the sausage and bell pepper in a skillet.",
      "Scramble the eggs and season them.",
      "Fill half of each tortilla with eggs, sausage, and cheese.",
      "Fold the tortillas and cook in butter until crisp.",
      "Slice into wedges."
    ]
  },

  {
    id: "pack001-013",
    title: "Biscuits and Sausage Gravy",
    category: "Breakfast",
    cuisine: "Southern",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 25,
    servings: 6,
    rating: 4.9,
    emoji: "🍞",
    description: "Flaky biscuits covered with creamy peppered sausage gravy.",
    ingredients: [
      "6 baked biscuits",
      "1 pound breakfast sausage",
      "1/4 cup all-purpose flour",
      "3 cups milk",
      "1/2 teaspoon black pepper",
      "1/4 teaspoon salt"
    ],
    instructions: [
      "Cook and crumble the sausage in a skillet.",
      "Sprinkle the flour over the sausage and stir for 1 minute.",
      "Slowly add the milk while stirring.",
      "Simmer until thickened.",
      "Season and serve over split biscuits."
    ]
  },

  {
    id: "pack001-014",
    title: "Blueberry Muffins",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 22,
    servings: 12,
    rating: 4.8,
    emoji: "🧁",
    description: "Tender bakery-style muffins filled with blueberries.",
    ingredients: [
      "2 cups all-purpose flour",
      "3/4 cup sugar",
      "2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "2 large eggs",
      "1 cup milk",
      "1/2 cup vegetable oil",
      "1 1/2 cups blueberries"
    ],
    instructions: [
      "Preheat the oven to 375°F and line a muffin pan.",
      "Mix the flour, sugar, baking powder, and salt.",
      "Whisk the eggs, milk, and oil.",
      "Combine the mixtures and fold in the blueberries.",
      "Bake for 20 to 22 minutes."
    ]
  },

  {
    id: "pack001-015",
    title: "Breakfast Potato Skillet",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 25,
    servings: 4,
    rating: 4.7,
    emoji: "🥔",
    description: "Crispy potatoes cooked with peppers, onions, eggs, and cheese.",
    ingredients: [
      "4 medium potatoes, diced",
      "1 bell pepper, diced",
      "1/2 onion, diced",
      "4 large eggs",
      "1 cup shredded cheddar cheese",
      "2 tablespoons olive oil",
      "Salt, pepper, and paprika"
    ],
    instructions: [
      "Heat the oil in a large skillet.",
      "Cook the potatoes for 12 to 15 minutes.",
      "Add the peppers and onions and cook until tender.",
      "Make four wells and crack an egg into each.",
      "Cover, cook the eggs, and sprinkle with cheese."
    ]
  },

  {
    id: "pack001-016",
    title: "Peanut Butter Banana Toast",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 3,
    servings: 2,
    rating: 4.5,
    emoji: "🍌",
    description: "Toast topped with creamy peanut butter, banana, and honey.",
    ingredients: [
      "2 slices whole-grain bread",
      "4 tablespoons peanut butter",
      "1 banana, sliced",
      "1 tablespoon honey",
      "1/4 teaspoon cinnamon"
    ],
    instructions: [
      "Toast the bread.",
      "Spread peanut butter over each slice.",
      "Arrange banana slices on top.",
      "Drizzle with honey and sprinkle with cinnamon."
    ]
  },

  {
    id: "pack001-017",
    title: "Spinach Feta Egg Muffins",
    category: "Breakfast",
    cuisine: "Mediterranean",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 20,
    servings: 6,
    rating: 4.6,
    emoji: "🥚",
    description: "Portable baked egg cups with spinach and feta.",
    ingredients: [
      "8 large eggs",
      "1 cup chopped spinach",
      "1/2 cup crumbled feta",
      "1/4 cup diced onion",
      "1/4 cup milk",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 350°F and grease a muffin pan.",
      "Whisk the eggs, milk, salt, and pepper.",
      "Stir in the spinach, feta, and onion.",
      "Divide the mixture among the muffin cups.",
      "Bake for 18 to 20 minutes."
    ]
  },

  {
    id: "pack001-018",
    title: "Apple Cinnamon Overnight Oats",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 0,
    servings: 2,
    rating: 4.5,
    emoji: "🍎",
    description: "Creamy overnight oats with apple, cinnamon, and maple syrup.",
    ingredients: [
      "1 cup rolled oats",
      "1 cup milk",
      "1/2 cup Greek yogurt",
      "1 apple, diced",
      "1 tablespoon maple syrup",
      "1/2 teaspoon cinnamon"
    ],
    instructions: [
      "Combine the oats, milk, yogurt, maple syrup, and cinnamon.",
      "Fold in half of the diced apple.",
      "Divide into containers.",
      "Refrigerate overnight.",
      "Top with the remaining apple before serving."
    ]
  },

  {
    id: "pack001-019",
    title: "Southern Breakfast Bowl",
    category: "Breakfast",
    cuisine: "Southern",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    rating: 4.7,
    emoji: "🥣",
    description: "A filling bowl with grits, eggs, sausage, and cheese.",
    ingredients: [
      "2 cups cooked grits",
      "1/2 pound breakfast sausage",
      "4 large eggs",
      "1 cup shredded cheddar cheese",
      "2 tablespoons butter",
      "Salt and pepper"
    ],
    instructions: [
      "Prepare the grits and stir in the butter.",
      "Cook and crumble the sausage.",
      "Cook the eggs to your preferred doneness.",
      "Divide the grits into bowls.",
      "Top with sausage, eggs, cheese, salt, and pepper."
    ]
  },

  {
    id: "pack001-020",
    title: "Chocolate Chip Banana Bread",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 55,
    servings: 10,
    rating: 4.8,
    emoji: "🍌",
    description: "Moist banana bread filled with chocolate chips.",
    ingredients: [
      "3 ripe bananas",
      "1/2 cup melted butter",
      "3/4 cup brown sugar",
      "2 large eggs",
      "1 teaspoon vanilla",
      "1 1/2 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1 cup chocolate chips"
    ],
    instructions: [
      "Preheat the oven to 350°F and grease a loaf pan.",
      "Mash the bananas and mix in the butter, sugar, eggs, and vanilla.",
      "Fold in the flour and baking soda.",
      "Stir in the chocolate chips.",
      "Bake for 50 to 55 minutes."
    ]
  },

  /* =======================================================
     LUNCH — 21–40
  ======================================================= */

  {
    id: "pack001-021",
    title: "Classic Grilled Cheese",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 8,
    servings: 2,
    rating: 4.7,
    emoji: "🥪",
    description: "Crisp buttery bread with gooey melted cheese.",
    ingredients: [
      "4 slices sandwich bread",
      "4 slices cheddar cheese",
      "2 tablespoons softened butter"
    ],
    instructions: [
      "Butter one side of each bread slice.",
      "Place cheese between the unbuttered sides.",
      "Cook in a skillet over medium-low heat.",
      "Flip when golden and cook until the cheese melts."
    ]
  },

  {
    id: "pack001-022",
    title: "Chicken Caesar Wrap",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 10,
    servings: 4,
    rating: 4.7,
    emoji: "🌯",
    description: "Grilled chicken, crisp lettuce, Parmesan, and Caesar dressing.",
    ingredients: [
      "2 cooked chicken breasts, sliced",
      "4 large flour tortillas",
      "3 cups chopped romaine",
      "1/2 cup Caesar dressing",
      "1/2 cup grated Parmesan",
      "1 cup croutons"
    ],
    instructions: [
      "Combine the lettuce, dressing, Parmesan, and croutons.",
      "Warm the tortillas.",
      "Divide the salad and chicken among the tortillas.",
      "Fold the sides inward and roll tightly."
    ]
  },

  {
    id: "pack001-023",
    title: "Buffalo Chicken Wrap",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    rating: 4.7,
    emoji: "🌯",
    description: "Spicy buffalo chicken with lettuce, cheese, and ranch.",
    ingredients: [
      "2 cups cooked shredded chicken",
      "1/3 cup buffalo sauce",
      "4 flour tortillas",
      "2 cups shredded lettuce",
      "1 cup shredded cheddar cheese",
      "1/2 cup ranch dressing"
    ],
    instructions: [
      "Warm the chicken with the buffalo sauce.",
      "Lay out the tortillas.",
      "Add lettuce, chicken, cheese, and ranch.",
      "Fold and roll tightly."
    ]
  },

  {
    id: "pack001-024",
    title: "Turkey Avocado Club",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    rating: 4.6,
    emoji: "🥪",
    description: "A stacked sandwich with turkey, avocado, bacon, and tomato.",
    ingredients: [
      "6 slices toasted bread",
      "8 slices deli turkey",
      "1 avocado, sliced",
      "4 slices cooked bacon",
      "1 tomato, sliced",
      "Lettuce",
      "3 tablespoons mayonnaise"
    ],
    instructions: [
      "Spread mayonnaise on the toast.",
      "Layer turkey, avocado, bacon, tomato, and lettuce.",
      "Stack the sandwich with a third slice of toast.",
      "Secure with toothpicks and cut in half."
    ]
  },

  {
    id: "pack001-025",
    title: "Chicken Salad Croissants",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    rating: 4.7,
    emoji: "🥐",
    description: "Creamy chicken salad served on flaky croissants.",
    ingredients: [
      "3 cups cooked chopped chicken",
      "1/2 cup mayonnaise",
      "1/3 cup diced celery",
      "1/3 cup halved grapes",
      "1/4 cup chopped pecans",
      "1 teaspoon Dijon mustard",
      "4 croissants"
    ],
    instructions: [
      "Combine the chicken, mayonnaise, celery, grapes, pecans, and mustard.",
      "Season with salt and pepper.",
      "Split the croissants.",
      "Fill each croissant with chicken salad."
    ]
  },

  {
    id: "pack001-026",
    title: "Italian Sub Sandwiches",
    category: "Lunch",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 0,
    servings: 4,
    rating: 4.7,
    emoji: "🥖",
    description: "Deli meats, provolone, vegetables, and Italian dressing.",
    ingredients: [
      "4 sub rolls",
      "8 slices salami",
      "8 slices ham",
      "8 slices pepperoni",
      "4 slices provolone",
      "Lettuce, tomato, and onion",
      "1/4 cup Italian dressing"
    ],
    instructions: [
      "Split the sub rolls.",
      "Layer the meats and cheese.",
      "Add lettuce, tomato, and onion.",
      "Drizzle with Italian dressing and close the sandwiches."
    ]
  },

  {
    id: "pack001-027",
    title: "Philly Cheesesteak",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🥩",
    description: "Thin beef, peppers, onions, and melted provolone on toasted rolls.",
    ingredients: [
      "1 pound thinly sliced steak",
      "1 green bell pepper, sliced",
      "1 onion, sliced",
      "8 slices provolone",
      "4 hoagie rolls",
      "2 tablespoons oil",
      "Salt and pepper"
    ],
    instructions: [
      "Cook the peppers and onions in oil until tender.",
      "Add the steak and cook until browned.",
      "Season with salt and pepper.",
      "Divide among the rolls and top with provolone.",
      "Toast until the cheese melts."
    ]
  },

  {
    id: "pack001-028",
    title: "Chicken Pesto Panini",
    category: "Lunch",
    cuisine: "Italian",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 8,
    servings: 2,
    rating: 4.7,
    emoji: "🥪",
    description: "Grilled chicken, pesto, tomato, and mozzarella pressed until crisp.",
    ingredients: [
      "4 slices ciabatta bread",
      "1 cooked chicken breast, sliced",
      "4 tablespoons pesto",
      "1 tomato, sliced",
      "4 slices mozzarella",
      "1 tablespoon olive oil"
    ],
    instructions: [
      "Spread pesto over the bread.",
      "Layer chicken, tomato, and mozzarella.",
      "Brush the outside with olive oil.",
      "Cook in a panini press or skillet until crisp and melted."
    ]
  },

  {
    id: "pack001-029",
    title: "BBQ Chicken Sandwiches",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    rating: 4.7,
    emoji: "🍗",
    description: "Tender shredded chicken tossed in barbecue sauce.",
    ingredients: [
      "3 cups shredded cooked chicken",
      "1 cup barbecue sauce",
      "4 sandwich buns",
      "1 cup coleslaw",
      "1/2 cup sliced pickles"
    ],
    instructions: [
      "Warm the chicken and barbecue sauce in a saucepan.",
      "Toast the buns if desired.",
      "Divide the chicken among the buns.",
      "Top with coleslaw and pickles."
    ]
  },

  {
    id: "pack001-030",
    title: "Crispy Chicken Sandwich",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🍔",
    description: "Crunchy chicken cutlets served with lettuce, pickles, and sauce.",
    ingredients: [
      "4 thin chicken cutlets",
      "1 cup flour",
      "2 large eggs",
      "1 1/2 cups breadcrumbs",
      "4 brioche buns",
      "Lettuce and pickles",
      "1/2 cup mayonnaise",
      "Oil for cooking"
    ],
    instructions: [
      "Coat the chicken in flour, egg, and breadcrumbs.",
      "Cook in oil until golden and safely cooked.",
      "Toast the buns.",
      "Spread mayonnaise over the buns.",
      "Add chicken, lettuce, and pickles."
    ]
  },

  {
    id: "pack001-031",
    title: "Chicken Taco Salad",
    category: "Lunch",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    rating: 4.6,
    emoji: "🥗",
    description: "Seasoned chicken, beans, corn, cheese, and tortilla chips.",
    ingredients: [
      "2 cooked chicken breasts, chopped",
      "6 cups chopped lettuce",
      "1 cup black beans",
      "1 cup corn",
      "1 cup shredded cheese",
      "1 cup crushed tortilla chips",
      "1/2 cup salsa ranch dressing"
    ],
    instructions: [
      "Divide the lettuce among bowls.",
      "Top with chicken, beans, corn, and cheese.",
      "Add tortilla chips.",
      "Drizzle with salsa ranch dressing."
    ]
  },

  {
    id: "pack001-032",
    title: "Loaded Baked Potatoes",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 55,
    servings: 4,
    rating: 4.7,
    emoji: "🥔",
    description: "Baked potatoes filled with cheese, bacon, sour cream, and onions.",
    ingredients: [
      "4 large russet potatoes",
      "1 cup shredded cheddar cheese",
      "8 slices cooked bacon, crumbled",
      "1/2 cup sour cream",
      "1/4 cup sliced green onions",
      "2 tablespoons butter",
      "Salt and pepper"
    ],
    instructions: [
      "Bake the potatoes at 425°F for 50 to 55 minutes.",
      "Split the potatoes and fluff the centers.",
      "Add butter, salt, and pepper.",
      "Top with cheese, bacon, sour cream, and green onions."
    ]
  },

  {
    id: "pack001-033",
    title: "Tuna Melt",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 8,
    servings: 2,
    rating: 4.5,
    emoji: "🐟",
    description: "Creamy tuna salad and melted cheese on crisp bread.",
    ingredients: [
      "2 cans tuna, drained",
      "1/3 cup mayonnaise",
      "2 tablespoons diced celery",
      "1 teaspoon Dijon mustard",
      "4 slices bread",
      "4 slices cheddar cheese",
      "2 tablespoons butter"
    ],
    instructions: [
      "Mix the tuna, mayonnaise, celery, and mustard.",
      "Spread the tuna mixture over two bread slices.",
      "Top with cheese and remaining bread.",
      "Butter the outside and cook until golden and melted."
    ]
  },

  {
    id: "pack001-034",
    title: "Chicken Bacon Ranch Wrap",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    rating: 4.8,
    emoji: "🌯",
    description: "Chicken, bacon, cheese, lettuce, and ranch in a soft wrap.",
    ingredients: [
      "2 cups cooked chopped chicken",
      "8 slices cooked bacon",
      "4 flour tortillas",
      "2 cups shredded lettuce",
      "1 cup shredded cheddar cheese",
      "1/2 cup ranch dressing"
    ],
    instructions: [
      "Lay the tortillas on a clean surface.",
      "Add lettuce, chicken, bacon, cheese, and ranch.",
      "Fold in the sides.",
      "Roll tightly and slice."
    ]
  },

  {
    id: "pack001-035",
    title: "Meatball Subs",
    category: "Lunch",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    rating: 4.8,
    emoji: "🥖",
    description: "Saucy meatballs and melted mozzarella on toasted rolls.",
    ingredients: [
      "16 cooked meatballs",
      "2 cups marinara sauce",
      "4 sub rolls",
      "1 1/2 cups shredded mozzarella",
      "1/4 cup grated Parmesan"
    ],
    instructions: [
      "Warm the meatballs in the marinara sauce.",
      "Place four meatballs in each roll.",
      "Top with mozzarella and Parmesan.",
      "Bake at 400°F until the cheese melts."
    ]
  },

  {
    id: "pack001-036",
    title: "Egg Salad Sandwiches",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    rating: 4.5,
    emoji: "🥚",
    description: "Creamy seasoned egg salad served on soft bread.",
    ingredients: [
      "8 hard-boiled eggs",
      "1/3 cup mayonnaise",
      "1 tablespoon mustard",
      "2 tablespoons diced celery",
      "1 tablespoon chopped green onion",
      "8 slices bread",
      "Salt and pepper"
    ],
    instructions: [
      "Chop the hard-boiled eggs.",
      "Mix with mayonnaise, mustard, celery, and green onion.",
      "Season with salt and pepper.",
      "Divide between four sandwiches."
    ]
  },

  {
    id: "pack001-037",
    title: "Chicken Parmesan Sandwiches",
    category: "Lunch",
    cuisine: "Italian-American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    rating: 4.8,
    emoji: "🍗",
    description: "Breaded chicken, marinara, mozzarella, and Parmesan on rolls.",
    ingredients: [
      "4 breaded chicken cutlets",
      "1 cup marinara sauce",
      "1 cup shredded mozzarella",
      "1/4 cup grated Parmesan",
      "4 sandwich rolls"
    ],
    instructions: [
      "Cook the chicken cutlets until crisp and safely cooked.",
      "Place one cutlet in each roll.",
      "Top with marinara, mozzarella, and Parmesan.",
      "Bake until the cheese melts."
    ]
  },

  {
    id: "pack001-038",
    title: "Mediterranean Chickpea Wrap",
    category: "Lunch",
    cuisine: "Mediterranean",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 0,
    servings: 4,
    rating: 4.5,
    emoji: "🫓",
    description: "Chickpeas, vegetables, feta, and hummus in a soft wrap.",
    ingredients: [
      "1 can chickpeas, drained",
      "4 flour tortillas",
      "1 cucumber, diced",
      "1 tomato, diced",
      "1/2 cup crumbled feta",
      "1/2 cup hummus",
      "2 cups spinach"
    ],
    instructions: [
      "Spread hummus over the tortillas.",
      "Add spinach, chickpeas, cucumber, tomato, and feta.",
      "Fold the sides inward.",
      "Roll tightly and serve."
    ]
  },

  {
    id: "pack001-039",
    title: "Turkey Cranberry Sandwich",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 0,
    servings: 2,
    rating: 4.5,
    emoji: "🥪",
    description: "Turkey, cranberry sauce, cream cheese, and spinach.",
    ingredients: [
      "4 slices bread",
      "8 slices turkey",
      "4 tablespoons cranberry sauce",
      "4 tablespoons cream cheese",
      "1 cup spinach"
    ],
    instructions: [
      "Spread cream cheese over two bread slices.",
      "Spread cranberry sauce over the remaining slices.",
      "Add turkey and spinach.",
      "Close the sandwiches and slice."
    ]
  },

  {
    id: "pack001-040",
    title: "Cheeseburger Wrap",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 12,
    servings: 4,
    rating: 4.6,
    emoji: "🍔",
    description: "Seasoned beef, cheese, pickles, lettuce, and burger sauce.",
    ingredients: [
      "1 pound ground beef",
      "4 flour tortillas",
      "1 cup shredded cheddar cheese",
      "1 cup shredded lettuce",
      "1/2 cup diced pickles",
      "1/3 cup burger sauce",
      "Salt and pepper"
    ],
    instructions: [
      "Cook the beef in a skillet and season it.",
      "Warm the tortillas.",
      "Add beef, cheese, lettuce, pickles, and sauce.",
      "Fold and roll tightly."
    ]
  },

  /* =======================================================
     DINNER — 41–80
  ======================================================= */

  {
    id: "pack001-041",
    title: "Creamy Chicken Alfredo",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    rating: 4.9,
    emoji: "🍝",
    description: "Tender chicken and fettuccine in a creamy Parmesan sauce.",
    ingredients: [
      "12 ounces fettuccine",
      "2 chicken breasts, sliced",
      "2 tablespoons butter",
      "3 cloves garlic, minced",
      "2 cups heavy cream",
      "1 1/2 cups grated Parmesan",
      "Salt and pepper"
    ],
    instructions: [
      "Cook the pasta and reserve 1/2 cup pasta water.",
      "Season and cook the chicken until safely cooked.",
      "Melt butter and cook the garlic for 30 seconds.",
      "Add cream and simmer gently.",
      "Stir in Parmesan, pasta, chicken, and enough pasta water to loosen the sauce."
    ]
  },

  {
    id: "pack001-042",
    title: "Garlic Butter Chicken",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    rating: 4.8,
    emoji: "🍗",
    description: "Juicy chicken cooked in a rich garlic herb butter sauce.",
    ingredients: [
      "4 chicken breasts",
      "4 tablespoons butter",
      "5 cloves garlic, minced",
      "1 teaspoon Italian seasoning",
      "1/2 cup chicken broth",
      "Salt and pepper"
    ],
    instructions: [
      "Season the chicken with salt, pepper, and Italian seasoning.",
      "Cook the chicken in 2 tablespoons butter until browned.",
      "Remove the chicken and add the remaining butter and garlic.",
      "Pour in the broth and simmer.",
      "Return the chicken and cook until safely cooked."
    ]
  },

  {
    id: "pack001-043",
    title: "Honey Garlic Chicken",
    category: "Dinner",
    cuisine: "Asian-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    rating: 4.8,
    emoji: "🍯",
    description: "Chicken glazed with a sweet and savory honey garlic sauce.",
    ingredients: [
      "4 chicken thighs",
      "1/3 cup honey",
      "1/4 cup soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon rice vinegar",
      "1 tablespoon oil",
      "1 teaspoon cornstarch"
    ],
    instructions: [
      "Brown the chicken in oil.",
      "Whisk the honey, soy sauce, garlic, vinegar, and cornstarch.",
      "Pour the sauce over the chicken.",
      "Simmer until the chicken is safely cooked and the sauce thickens.",
      "Serve with rice."
    ]
  },

  {
    id: "pack001-044",
    title: "Chicken Parmesan",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    rating: 4.9,
    emoji: "🍗",
    description: "Crispy chicken topped with marinara and melted cheese.",
    ingredients: [
      "4 thin chicken cutlets",
      "1 cup flour",
      "2 large eggs",
      "1 1/2 cups breadcrumbs",
      "2 cups marinara sauce",
      "1 1/2 cups mozzarella",
      "1/2 cup Parmesan"
    ],
    instructions: [
      "Coat the chicken in flour, egg, and breadcrumbs.",
      "Cook until golden on both sides.",
      "Place in a baking dish and top with marinara.",
      "Add mozzarella and Parmesan.",
      "Bake at 400°F until safely cooked and melted."
    ]
  },

  {
    id: "pack001-045",
    title: "Chicken and Rice Skillet",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    rating: 4.7,
    emoji: "🍚",
    description: "A one-pan chicken dinner with seasoned rice and vegetables.",
    ingredients: [
      "4 chicken thighs",
      "1 cup long-grain rice",
      "2 cups chicken broth",
      "1 onion, diced",
      "1 cup frozen peas and carrots",
      "2 tablespoons oil",
      "Salt, pepper, and paprika"
    ],
    instructions: [
      "Season and brown the chicken in oil.",
      "Remove the chicken and cook the onion.",
      "Stir in the rice and broth.",
      "Return the chicken, cover, and simmer for 25 minutes.",
      "Stir in the vegetables and cook until tender."
    ]
  },

  {
    id: "pack001-046",
    title: "Chicken Fajitas",
    category: "Dinner",
    cuisine: "Mexican",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🌮",
    description: "Sizzling chicken with peppers, onions, and fajita seasoning.",
    ingredients: [
      "1 1/2 pounds chicken breast, sliced",
      "3 bell peppers, sliced",
      "1 onion, sliced",
      "2 tablespoons oil",
      "2 tablespoons fajita seasoning",
      "8 flour tortillas",
      "1 lime"
    ],
    instructions: [
      "Toss the chicken with oil and seasoning.",
      "Cook the chicken in a hot skillet.",
      "Add the peppers and onions.",
      "Cook until the chicken is safe and the vegetables are tender.",
      "Squeeze with lime and serve in tortillas."
    ]
  },

  {
    id: "pack001-047",
    title: "Chicken Enchiladas",
    category: "Dinner",
    cuisine: "Mexican-American",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 30,
    servings: 6,
    rating: 4.8,
    emoji: "🌯",
    description: "Tortillas filled with chicken and cheese in enchilada sauce.",
    ingredients: [
      "3 cups shredded chicken",
      "8 flour tortillas",
      "2 cups enchilada sauce",
      "2 cups shredded Mexican cheese",
      "1/2 cup diced onion",
      "1/2 cup sour cream"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Mix the chicken, onion, sour cream, and 1 cup cheese.",
      "Fill and roll the tortillas.",
      "Cover with enchilada sauce and remaining cheese.",
      "Bake for 25 to 30 minutes."
    ]
  },

  {
    id: "pack001-048",
    title: "Chicken Fried Rice",
    category: "Dinner",
    cuisine: "Chinese-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🍚",
    description: "Savory fried rice with chicken, vegetables, and eggs.",
    ingredients: [
      "3 cups cold cooked rice",
      "2 cups cooked diced chicken",
      "2 large eggs",
      "1 cup frozen peas and carrots",
      "3 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "2 green onions"
    ],
    instructions: [
      "Scramble the eggs in a large skillet and remove them.",
      "Cook the vegetables until tender.",
      "Add the rice and chicken.",
      "Stir in soy sauce and sesame oil.",
      "Return the eggs and add green onions."
    ]
  },

  {
    id: "pack001-049",
    title: "Orange Chicken",
    category: "Dinner",
    cuisine: "Chinese-American",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 20,
    servings: 4,
    rating: 4.8,
    emoji: "🍊",
    description: "Crispy chicken tossed in a bright orange glaze.",
    ingredients: [
      "1 1/2 pounds chicken breast, cubed",
      "1/2 cup cornstarch",
      "2 large eggs",
      "1/2 cup orange juice",
      "1/4 cup soy sauce",
      "1/3 cup brown sugar",
      "2 cloves garlic, minced",
      "Oil for cooking"
    ],
    instructions: [
      "Coat the chicken in egg and cornstarch.",
      "Cook in oil until crisp and safely cooked.",
      "Whisk the orange juice, soy sauce, sugar, and garlic.",
      "Simmer the sauce until thickened.",
      "Toss the chicken in the sauce."
    ]
  },

  {
    id: "pack001-050",
    title: "Chicken Pot Pie",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 25,
    cookTime: 40,
    servings: 6,
    rating: 4.9,
    emoji: "🥧",
    description: "Creamy chicken and vegetables beneath a flaky crust.",
    ingredients: [
      "3 cups cooked chicken",
      "2 cups mixed vegetables",
      "1/3 cup butter",
      "1/3 cup flour",
      "2 cups chicken broth",
      "1 cup milk",
      "2 refrigerated pie crusts",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 400°F.",
      "Cook butter and flour together for 1 minute.",
      "Whisk in broth and milk until thick.",
      "Stir in chicken and vegetables.",
      "Fill a crust, cover with the second crust, vent, and bake for 35 to 40 minutes."
    ]
  },

  {
    id: "pack001-051",
    title: "Garlic Herb Steak",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    rating: 4.9,
    emoji: "🥩",
    description: "Pan-seared steak basted with garlic herb butter.",
    ingredients: [
      "2 steaks",
      "2 tablespoons oil",
      "4 tablespoons butter",
      "4 cloves garlic",
      "2 sprigs rosemary",
      "Salt and pepper"
    ],
    instructions: [
      "Pat the steaks dry and season generously.",
      "Sear in a very hot oiled skillet.",
      "Add butter, garlic, and rosemary.",
      "Baste until the steaks reach the desired doneness.",
      "Rest for 5 to 10 minutes before slicing."
    ]
  },

  {
    id: "pack001-052",
    title: "Beef Stroganoff",
    category: "Dinner",
    cuisine: "Russian-American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    rating: 4.8,
    emoji: "🥩",
    description: "Tender beef and mushrooms in a creamy sauce over noodles.",
    ingredients: [
      "1 pound beef strips",
      "8 ounces egg noodles",
      "8 ounces mushrooms",
      "1 onion, diced",
      "2 cups beef broth",
      "1/2 cup sour cream",
      "2 tablespoons flour"
    ],
    instructions: [
      "Cook the noodles according to package directions.",
      "Brown the beef and remove it.",
      "Cook the onion and mushrooms.",
      "Stir in flour and broth and simmer until thick.",
      "Return the beef and stir in sour cream before serving over noodles."
    ]
  },

  {
    id: "pack001-053",
    title: "Beef and Broccoli",
    category: "Dinner",
    cuisine: "Chinese-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🥦",
    description: "Tender beef and broccoli in a savory stir-fry sauce.",
    ingredients: [
      "1 pound thinly sliced beef",
      "4 cups broccoli florets",
      "1/3 cup soy sauce",
      "2 tablespoons brown sugar",
      "1 tablespoon cornstarch",
      "2 cloves garlic",
      "1 tablespoon oil"
    ],
    instructions: [
      "Whisk the soy sauce, sugar, cornstarch, and garlic.",
      "Cook the beef in oil and remove it.",
      "Cook the broccoli until crisp-tender.",
      "Return the beef and pour in the sauce.",
      "Cook until thickened."
    ]
  },

  {
    id: "pack001-054",
    title: "Classic Meatloaf",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 60,
    servings: 6,
    rating: 4.8,
    emoji: "🍖",
    description: "Tender seasoned meatloaf with a sweet tomato glaze.",
    ingredients: [
      "2 pounds ground beef",
      "1 cup breadcrumbs",
      "2 large eggs",
      "1/2 cup milk",
      "1 onion, finely diced",
      "1/2 cup ketchup",
      "2 tablespoons brown sugar",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Mix the beef, breadcrumbs, eggs, milk, onion, salt, and pepper.",
      "Shape into a loaf.",
      "Mix ketchup and brown sugar and spread over the top.",
      "Bake for about 60 minutes."
    ]
  },

  {
    id: "pack001-055",
    title: "Slow-Cooked Pot Roast",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 240,
    servings: 6,
    rating: 4.9,
    emoji: "🥘",
    description: "Tender beef roast with potatoes, carrots, and rich gravy.",
    ingredients: [
      "3-pound chuck roast",
      "1 pound potatoes",
      "4 carrots",
      "1 onion",
      "3 cups beef broth",
      "2 tablespoons tomato paste",
      "2 tablespoons oil",
      "Salt and pepper"
    ],
    instructions: [
      "Season and brown the roast in oil.",
      "Place the vegetables in a slow cooker or Dutch oven.",
      "Add the roast, broth, and tomato paste.",
      "Cook until the beef is fork-tender.",
      "Slice and serve with the vegetables and juices."
    ]
  },

  {
    id: "pack001-056",
    title: "Beef Tacos",
    category: "Dinner",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    rating: 4.7,
    emoji: "🌮",
    description: "Seasoned ground beef served in crisp or soft taco shells.",
    ingredients: [
      "1 pound ground beef",
      "2 tablespoons taco seasoning",
      "1/2 cup water",
      "8 taco shells",
      "1 cup shredded lettuce",
      "1 cup shredded cheese",
      "Salsa and sour cream"
    ],
    instructions: [
      "Brown the ground beef and drain excess fat.",
      "Add taco seasoning and water.",
      "Simmer until thickened.",
      "Fill the taco shells.",
      "Add lettuce, cheese, salsa, and sour cream."
    ]
  },

  {
    id: "pack001-057",
    title: "Honey Garlic Pork Chops",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 18,
    servings: 4,
    rating: 4.7,
    emoji: "🍖",
    description: "Pan-seared pork chops glazed with honey and garlic.",
    ingredients: [
      "4 pork chops",
      "1/4 cup honey",
      "3 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon oil",
      "Salt and pepper"
    ],
    instructions: [
      "Season the pork chops.",
      "Brown them in oil on both sides.",
      "Whisk the honey, soy sauce, and garlic.",
      "Pour the sauce into the skillet.",
      "Simmer until the pork is safely cooked and glazed."
    ]
  },

  {
    id: "pack001-058",
    title: "BBQ Pulled Pork",
    category: "Dinner",
    cuisine: "Southern",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 480,
    servings: 8,
    rating: 4.9,
    emoji: "🍖",
    description: "Tender slow-cooked pork shredded in barbecue sauce.",
    ingredients: [
      "4-pound pork shoulder",
      "2 tablespoons brown sugar",
      "1 tablespoon smoked paprika",
      "1 teaspoon garlic powder",
      "1 cup barbecue sauce",
      "1/2 cup chicken broth",
      "Salt and pepper"
    ],
    instructions: [
      "Rub the pork with sugar, paprika, garlic powder, salt, and pepper.",
      "Place it in a slow cooker with the broth.",
      "Cook on low until very tender.",
      "Shred the pork and discard excess fat.",
      "Stir in barbecue sauce."
    ]
  },

  {
    id: "pack001-059",
    title: "Sausage and Peppers",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    rating: 4.7,
    emoji: "🌭",
    description: "Italian sausage cooked with peppers, onions, and tomato sauce.",
    ingredients: [
      "1 pound Italian sausage",
      "3 bell peppers, sliced",
      "1 onion, sliced",
      "2 cloves garlic",
      "1 cup tomato sauce",
      "2 tablespoons olive oil"
    ],
    instructions: [
      "Brown the sausage in olive oil.",
      "Remove it and cook the peppers and onions.",
      "Add the garlic and tomato sauce.",
      "Return the sausage.",
      "Simmer until safely cooked."
    ]
  },

  {
    id: "pack001-060",
    title: "Garlic Butter Shrimp",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 8,
    servings: 4,
    rating: 4.8,
    emoji: "🦐",
    description: "Juicy shrimp cooked quickly in garlic lemon butter.",
    ingredients: [
      "1 1/2 pounds shrimp",
      "4 tablespoons butter",
      "5 cloves garlic",
      "1 tablespoon lemon juice",
      "2 tablespoons chopped parsley",
      "Salt and pepper"
    ],
    instructions: [
      "Melt the butter in a skillet.",
      "Cook the garlic for 30 seconds.",
      "Add the shrimp, salt, and pepper.",
      "Cook until the shrimp are pink and opaque.",
      "Stir in lemon juice and parsley."
    ]
  },

  {
    id: "pack001-061",
    title: "Cajun Shrimp Pasta",
    category: "Dinner",
    cuisine: "Cajun",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    rating: 4.8,
    emoji: "🍤",
    description: "Cajun shrimp and pasta in a creamy seasoned sauce.",
    ingredients: [
      "12 ounces penne",
      "1 pound shrimp",
      "2 tablespoons Cajun seasoning",
      "2 tablespoons butter",
      "3 cloves garlic",
      "1 1/2 cups heavy cream",
      "1 cup Parmesan"
    ],
    instructions: [
      "Cook the pasta.",
      "Season and cook the shrimp in butter.",
      "Remove the shrimp and cook the garlic.",
      "Add cream and Parmesan.",
      "Toss with pasta and return the shrimp."
    ]
  },

  {
    id: "pack001-062",
    title: "Lemon Garlic Salmon",
    category: "Dinner",
    cuisine: "Mediterranean",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🐟",
    description: "Baked salmon flavored with lemon, garlic, and herbs.",
    ingredients: [
      "4 salmon fillets",
      "2 tablespoons olive oil",
      "3 cloves garlic, minced",
      "1 lemon",
      "1 teaspoon dried dill",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 400°F.",
      "Place the salmon on a lined baking sheet.",
      "Brush with olive oil, garlic, lemon juice, dill, salt, and pepper.",
      "Bake for 12 to 15 minutes.",
      "Serve with lemon wedges."
    ]
  },

  {
    id: "pack001-063",
    title: "Fish Tacos",
    category: "Dinner",
    cuisine: "Mexican",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    rating: 4.7,
    emoji: "🌮",
    description: "Seasoned fish with crunchy slaw and lime sauce.",
    ingredients: [
      "1 1/2 pounds white fish",
      "2 tablespoons taco seasoning",
      "8 tortillas",
      "2 cups cabbage slaw",
      "1/2 cup sour cream",
      "1 lime",
      "2 tablespoons oil"
    ],
    instructions: [
      "Season the fish with taco seasoning.",
      "Cook in oil until flaky.",
      "Mix sour cream with lime juice.",
      "Fill tortillas with fish and slaw.",
      "Drizzle with lime sauce."
    ]
  },

  {
    id: "pack001-064",
    title: "Spaghetti and Meat Sauce",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 30,
    servings: 6,
    rating: 4.8,
    emoji: "🍝",
    description: "Classic spaghetti with a rich tomato and beef sauce.",
    ingredients: [
      "1 pound spaghetti",
      "1 pound ground beef",
      "1 onion, diced",
      "3 cloves garlic",
      "24 ounces marinara sauce",
      "1 teaspoon Italian seasoning",
      "Parmesan cheese"
    ],
    instructions: [
      "Cook the spaghetti.",
      "Brown the beef with the onion.",
      "Add the garlic and seasoning.",
      "Pour in the marinara and simmer for 15 minutes.",
      "Serve over spaghetti with Parmesan."
    ]
  },

  {
    id: "pack001-065",
    title: "Baked Ziti",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 35,
    servings: 8,
    rating: 4.9,
    emoji: "🍝",
    description: "Baked pasta layered with marinara, ricotta, and mozzarella.",
    ingredients: [
      "1 pound ziti",
      "24 ounces marinara sauce",
      "15 ounces ricotta",
      "3 cups shredded mozzarella",
      "1/2 cup Parmesan",
      "1 teaspoon Italian seasoning"
    ],
    instructions: [
      "Cook the pasta until just tender.",
      "Mix the pasta with marinara and Italian seasoning.",
      "Layer pasta, ricotta, mozzarella, and Parmesan in a baking dish.",
      "Repeat the layers.",
      "Bake at 375°F for 30 to 35 minutes."
    ]
  },

  {
    id: "pack001-066",
    title: "Classic Lasagna",
    category: "Dinner",
    cuisine: "Italian",
    difficulty: "Medium",
    prepTime: 30,
    cookTime: 50,
    servings: 10,
    rating: 4.9,
    emoji: "🍝",
    description: "Layers of pasta, meat sauce, ricotta, and melted cheese.",
    ingredients: [
      "12 lasagna noodles",
      "1 pound ground beef",
      "24 ounces marinara sauce",
      "15 ounces ricotta",
      "3 cups mozzarella",
      "1/2 cup Parmesan",
      "1 large egg"
    ],
    instructions: [
      "Cook the noodles and brown the beef.",
      "Combine the beef with marinara.",
      "Mix ricotta, egg, and Parmesan.",
      "Layer sauce, noodles, ricotta, and mozzarella.",
      "Bake covered at 375°F for 40 minutes, then uncover for 10 minutes."
    ]
  },

  {
    id: "pack001-067",
    title: "Homemade Pepperoni Pizza",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🍕",
    description: "Crisp homemade pizza topped with sauce, cheese, and pepperoni.",
    ingredients: [
      "1 pound pizza dough",
      "1 cup pizza sauce",
      "2 cups shredded mozzarella",
      "30 pepperoni slices",
      "1 tablespoon olive oil",
      "1 teaspoon Italian seasoning"
    ],
    instructions: [
      "Preheat the oven to 475°F.",
      "Stretch the dough onto a baking pan.",
      "Brush the crust edge with olive oil.",
      "Add sauce, cheese, pepperoni, and seasoning.",
      "Bake for 12 to 15 minutes."
    ]
  },

  {
    id: "pack001-068",
    title: "Baked Mac and Cheese",
    category: "Dinner",
    cuisine: "Southern",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 35,
    servings: 8,
    rating: 4.9,
    emoji: "🧀",
    description: "Creamy macaroni baked beneath a golden cheese topping.",
    ingredients: [
      "1 pound elbow macaroni",
      "4 tablespoons butter",
      "1/4 cup flour",
      "3 cups milk",
      "4 cups shredded cheddar cheese",
      "1 cup breadcrumbs",
      "Salt and pepper"
    ],
    instructions: [
      "Cook the macaroni.",
      "Cook butter and flour for 1 minute.",
      "Whisk in milk until thick.",
      "Stir in 3 cups cheese and combine with pasta.",
      "Top with remaining cheese and breadcrumbs and bake at 375°F for 25 minutes."
    ]
  },

  {
    id: "pack001-069",
    title: "Chicken Bacon Ranch Pasta",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 25,
    servings: 6,
    rating: 4.8,
    emoji: "🍝",
    description: "Creamy pasta with chicken, bacon, cheddar, and ranch seasoning.",
    ingredients: [
      "12 ounces pasta",
      "2 cups cooked chicken",
      "8 slices cooked bacon",
      "2 tablespoons ranch seasoning",
      "1 1/2 cups heavy cream",
      "1 1/2 cups cheddar cheese",
      "2 cloves garlic"
    ],
    instructions: [
      "Cook the pasta.",
      "Cook the garlic in a skillet.",
      "Add cream and ranch seasoning.",
      "Stir in cheese until melted.",
      "Add chicken, bacon, and pasta."
    ]
  },

  {
    id: "pack001-070",
    title: "Loaded Potato Soup",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 35,
    servings: 6,
    rating: 4.8,
    emoji: "🥣",
    description: "Creamy potato soup topped with bacon, cheese, and green onions.",
    ingredients: [
      "2 pounds potatoes, diced",
      "1 onion, diced",
      "4 cups chicken broth",
      "2 cups milk",
      "1 cup shredded cheddar",
      "8 slices cooked bacon",
      "2 tablespoons butter",
      "Green onions"
    ],
    instructions: [
      "Cook the onion in butter.",
      "Add potatoes and broth.",
      "Simmer until the potatoes are tender.",
      "Mash some of the potatoes and stir in milk and cheese.",
      "Top with bacon and green onions."
    ]
  },

  {
    id: "pack001-071",
    title: "Broccoli Cheddar Soup",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 30,
    servings: 6,
    rating: 4.8,
    emoji: "🥦",
    description: "Creamy soup filled with broccoli and sharp cheddar.",
    ingredients: [
      "4 cups broccoli florets",
      "1 onion, diced",
      "4 tablespoons butter",
      "1/4 cup flour",
      "3 cups chicken broth",
      "2 cups milk",
      "2 cups shredded cheddar"
    ],
    instructions: [
      "Cook the onion in butter.",
      "Stir in flour and cook for 1 minute.",
      "Whisk in broth and milk.",
      "Add broccoli and simmer until tender.",
      "Stir in cheddar until melted."
    ]
  },

  {
    id: "pack001-072",
    title: "White Chicken Chili",
    category: "Dinner",
    cuisine: "Southwestern",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 35,
    servings: 6,
    rating: 4.8,
    emoji: "🥣",
    description: "Creamy chicken chili with white beans, corn, and green chiles.",
    ingredients: [
      "3 cups shredded chicken",
      "2 cans white beans",
      "1 can corn",
      "1 can green chiles",
      "4 cups chicken broth",
      "1 teaspoon cumin",
      "4 ounces cream cheese"
    ],
    instructions: [
      "Combine chicken, beans, corn, chiles, broth, and cumin.",
      "Bring to a simmer.",
      "Cook for 25 minutes.",
      "Stir in cream cheese.",
      "Cook until smooth and creamy."
    ]
  },

  {
    id: "pack001-073",
    title: "Chicken Tortilla Soup",
    category: "Dinner",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 30,
    servings: 6,
    rating: 4.7,
    emoji: "🥣",
    description: "Tomato chicken soup with beans, corn, lime, and tortilla strips.",
    ingredients: [
      "3 cups shredded chicken",
      "4 cups chicken broth",
      "1 can diced tomatoes",
      "1 can black beans",
      "1 cup corn",
      "1 teaspoon cumin",
      "Tortilla strips and lime"
    ],
    instructions: [
      "Combine chicken, broth, tomatoes, beans, corn, and cumin.",
      "Simmer for 25 minutes.",
      "Taste and adjust seasoning.",
      "Serve with tortilla strips and lime."
    ]
  },

  {
    id: "pack001-074",
    title: "Tater Tot Casserole",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 40,
    servings: 8,
    rating: 4.7,
    emoji: "🥔",
    description: "Ground beef, creamy sauce, cheese, and crispy tater tots.",
    ingredients: [
      "1 pound ground beef",
      "1 onion, diced",
      "1 can cream of mushroom soup",
      "1 cup frozen mixed vegetables",
      "2 cups shredded cheddar",
      "32 ounces frozen tater tots"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Brown the beef and onion.",
      "Stir in soup and vegetables.",
      "Spread in a baking dish and top with cheese and tater tots.",
      "Bake for 35 to 40 minutes."
    ]
  },

  {
    id: "pack001-075",
    title: "Chicken Rice Casserole",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 50,
    servings: 6,
    rating: 4.7,
    emoji: "🍚",
    description: "Creamy baked chicken and rice with vegetables and cheese.",
    ingredients: [
      "3 cups cooked rice",
      "3 cups cooked chicken",
      "1 can cream of chicken soup",
      "1 cup milk",
      "1 cup mixed vegetables",
      "1 1/2 cups shredded cheese"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Mix rice, chicken, soup, milk, and vegetables.",
      "Spread into a baking dish.",
      "Top with cheese.",
      "Bake for 35 to 40 minutes."
    ]
  },

  {
    id: "pack001-076",
    title: "Stuffed Bell Peppers",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 40,
    servings: 6,
    rating: 4.7,
    emoji: "🫑",
    description: "Bell peppers filled with beef, rice, tomatoes, and cheese.",
    ingredients: [
      "6 bell peppers",
      "1 pound ground beef",
      "2 cups cooked rice",
      "1 can diced tomatoes",
      "1 cup shredded cheese",
      "1 teaspoon Italian seasoning"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Cut the tops from the peppers and remove the seeds.",
      "Brown the beef and mix with rice, tomatoes, and seasoning.",
      "Fill the peppers and top with cheese.",
      "Bake for 35 to 40 minutes."
    ]
  },

  {
    id: "pack001-077",
    title: "Swedish Meatballs",
    category: "Dinner",
    cuisine: "Swedish",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 30,
    servings: 6,
    rating: 4.8,
    emoji: "🍖",
    description: "Tender meatballs in a creamy savory gravy.",
    ingredients: [
      "1 pound ground beef",
      "1/2 pound ground pork",
      "1/2 cup breadcrumbs",
      "1 large egg",
      "2 cups beef broth",
      "1 cup heavy cream",
      "2 tablespoons flour"
    ],
    instructions: [
      "Mix the beef, pork, breadcrumbs, egg, salt, and pepper.",
      "Shape and brown the meatballs.",
      "Remove them and stir flour into the drippings.",
      "Whisk in broth and cream.",
      "Return the meatballs and simmer until safely cooked."
    ]
  },

  {
    id: "pack001-078",
    title: "Homemade Chili",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 45,
    servings: 8,
    rating: 4.9,
    emoji: "🌶️",
    description: "A hearty beef and bean chili with tomato and warm spices.",
    ingredients: [
      "2 pounds ground beef",
      "1 onion, diced",
      "2 cans kidney beans",
      "2 cans diced tomatoes",
      "2 tablespoons chili powder",
      "1 teaspoon cumin",
      "2 cups beef broth"
    ],
    instructions: [
      "Brown the beef with the onion.",
      "Drain excess fat.",
      "Add beans, tomatoes, chili powder, cumin, and broth.",
      "Simmer for 35 to 45 minutes.",
      "Taste and adjust seasoning."
    ]
  },

  {
    id: "pack001-079",
    title: "Sheet Pan Chicken and Vegetables",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    rating: 4.6,
    emoji: "🍗",
    description: "Seasoned chicken roasted with colorful vegetables.",
    ingredients: [
      "4 chicken breasts",
      "2 cups broccoli",
      "2 bell peppers, sliced",
      "1 zucchini, sliced",
      "3 tablespoons olive oil",
      "1 teaspoon garlic powder",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 425°F.",
      "Place the chicken and vegetables on a sheet pan.",
      "Drizzle with oil and season.",
      "Roast for 25 to 30 minutes.",
      "Check that the chicken is safely cooked."
    ]
  },

  {
    id: "pack001-080",
    title: "Creamy Tuscan Chicken",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    rating: 4.9,
    emoji: "🍗",
    description: "Chicken in a creamy garlic sauce with spinach and tomatoes.",
    ingredients: [
      "4 chicken breasts",
      "2 tablespoons olive oil",
      "3 cloves garlic",
      "1 1/2 cups heavy cream",
      "1/2 cup Parmesan",
      "2 cups spinach",
      "1/2 cup sun-dried tomatoes"
    ],
    instructions: [
      "Season and brown the chicken in olive oil.",
      "Remove it and cook the garlic.",
      "Add cream, Parmesan, spinach, and tomatoes.",
      "Return the chicken.",
      "Simmer until the chicken is safely cooked."
    ]
  },

  /* =======================================================
     AIR FRYER AND SNACKS — 81–90
  ======================================================= */

  {
    id: "pack001-081",
    title: "Air Fryer Chicken Tenders",
    category: "Air Fryer",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    rating: 4.8,
    emoji: "🍗",
    description: "Crispy seasoned chicken tenders with very little oil.",
    ingredients: [
      "1 1/2 pounds chicken tenders",
      "1 cup flour",
      "2 large eggs",
      "1 1/2 cups breadcrumbs",
      "1 teaspoon paprika",
      "Cooking spray",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the air fryer to 400°F.",
      "Coat the chicken in flour, egg, and seasoned breadcrumbs.",
      "Arrange in a single layer and spray lightly.",
      "Air fry for 10 to 12 minutes, flipping halfway.",
      "Check that the chicken is safely cooked."
    ]
  },

  {
    id: "pack001-082",
    title: "Air Fryer French Fries",
    category: "Air Fryer",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    rating: 4.6,
    emoji: "🍟",
    description: "Crispy homemade fries seasoned with salt and garlic.",
    ingredients: [
      "4 russet potatoes",
      "2 tablespoons olive oil",
      "1 teaspoon garlic powder",
      "1 teaspoon salt",
      "1/2 teaspoon paprika"
    ],
    instructions: [
      "Cut the potatoes into fries and soak them in cold water.",
      "Dry them thoroughly.",
      "Toss with oil and seasonings.",
      "Air fry at 390°F for 18 to 22 minutes.",
      "Shake the basket several times."
    ]
  },

  {
    id: "pack001-083",
    title: "Air Fryer Mozzarella Sticks",
    category: "Air Fryer",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 45,
    cookTime: 8,
    servings: 6,
    rating: 4.7,
    emoji: "🧀",
    description: "Crispy mozzarella sticks with a gooey melted center.",
    ingredients: [
      "12 mozzarella string cheeses",
      "1 cup flour",
      "2 large eggs",
      "2 cups seasoned breadcrumbs",
      "Cooking spray",
      "Marinara sauce"
    ],
    instructions: [
      "Cut the cheese sticks in half.",
      "Coat twice in flour, egg, and breadcrumbs.",
      "Freeze for at least 30 minutes.",
      "Air fry at 390°F for 6 to 8 minutes.",
      "Serve with marinara."
    ]
  },

  {
    id: "pack001-084",
    title: "Air Fryer Fried Pickles",
    category: "Air Fryer",
    cuisine: "Southern",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    rating: 4.6,
    emoji: "🥒",
    description: "Crunchy breaded pickle chips cooked in the air fryer.",
    ingredients: [
      "2 cups pickle chips",
      "1/2 cup flour",
      "2 large eggs",
      "1 cup breadcrumbs",
      "1 teaspoon Cajun seasoning",
      "Cooking spray"
    ],
    instructions: [
      "Dry the pickle chips thoroughly.",
      "Coat them in flour, egg, and seasoned breadcrumbs.",
      "Arrange in a single layer.",
      "Spray lightly and air fry at 400°F for 8 to 10 minutes."
    ]
  },

  {
    id: "pack001-085",
    title: "Buffalo Chicken Dip",
    category: "Snack",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    servings: 8,
    rating: 4.9,
    emoji: "🌶️",
    description: "Creamy spicy chicken dip with ranch and melted cheese.",
    ingredients: [
      "3 cups shredded chicken",
      "8 ounces cream cheese",
      "1/2 cup buffalo sauce",
      "1/2 cup ranch dressing",
      "1 1/2 cups shredded cheddar"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Mix chicken, cream cheese, buffalo sauce, ranch, and 1 cup cheese.",
      "Spread in a baking dish.",
      "Top with remaining cheese.",
      "Bake for 20 to 25 minutes."
    ]
  },

  {
    id: "pack001-086",
    title: "Spinach Artichoke Dip",
    category: "Snack",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    servings: 8,
    rating: 4.8,
    emoji: "🥬",
    description: "Creamy baked dip with spinach, artichokes, and cheese.",
    ingredients: [
      "1 cup chopped spinach",
      "1 can artichoke hearts, chopped",
      "8 ounces cream cheese",
      "1/2 cup sour cream",
      "1 cup mozzarella",
      "1/2 cup Parmesan",
      "2 cloves garlic"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Mix all ingredients together.",
      "Spread in a baking dish.",
      "Bake for 20 to 25 minutes.",
      "Serve with chips or bread."
    ]
  },

  {
    id: "pack001-087",
    title: "Loaded Potato Skins",
    category: "Snack",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 55,
    servings: 6,
    rating: 4.8,
    emoji: "🥔",
    description: "Crispy potato skins filled with cheese and bacon.",
    ingredients: [
      "6 russet potatoes",
      "2 tablespoons oil",
      "2 cups shredded cheddar",
      "8 slices cooked bacon",
      "1/2 cup sour cream",
      "Green onions",
      "Salt and pepper"
    ],
    instructions: [
      "Bake the potatoes until tender.",
      "Cut them in half and scoop out most of the centers.",
      "Brush with oil and bake until crisp.",
      "Fill with cheese and bacon.",
      "Bake until melted and top with sour cream and onions."
    ]
  },

  {
    id: "pack001-088",
    title: "Garlic Parmesan Wings",
    category: "Snack",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 45,
    servings: 6,
    rating: 4.8,
    emoji: "🍗",
    description: "Crispy wings coated in garlic butter and Parmesan.",
    ingredients: [
      "3 pounds chicken wings",
      "1 tablespoon baking powder",
      "1 teaspoon salt",
      "4 tablespoons butter",
      "4 cloves garlic",
      "1/2 cup grated Parmesan",
      "2 tablespoons parsley"
    ],
    instructions: [
      "Preheat the oven to 425°F.",
      "Toss the wings with baking powder and salt.",
      "Bake for 40 to 45 minutes, turning once.",
      "Melt butter with garlic.",
      "Toss the wings with garlic butter, Parmesan, and parsley."
    ]
  },

  {
    id: "pack001-089",
    title: "Chicken Quesadillas",
    category: "Snack",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    rating: 4.7,
    emoji: "🌮",
    description: "Crispy tortillas filled with seasoned chicken and cheese.",
    ingredients: [
      "4 flour tortillas",
      "2 cups cooked chicken",
      "2 cups shredded Mexican cheese",
      "1/2 cup diced bell pepper",
      "2 tablespoons butter",
      "Salsa and sour cream"
    ],
    instructions: [
      "Add chicken, cheese, and peppers to half of each tortilla.",
      "Fold the tortillas.",
      "Cook in butter until golden.",
      "Flip and cook until the cheese melts.",
      "Slice and serve with salsa."
    ]
  },

  {
    id: "pack001-090",
    title: "Nachos Supreme",
    category: "Snack",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    servings: 6,
    rating: 4.8,
    emoji: "🧀",
    description: "Tortilla chips loaded with beef, beans, cheese, and toppings.",
    ingredients: [
      "10 ounces tortilla chips",
      "1 pound seasoned ground beef",
      "1 can black beans",
      "2 cups shredded cheese",
      "1 tomato, diced",
      "1/2 cup sliced jalapeños",
      "Sour cream and salsa"
    ],
    instructions: [
      "Preheat the oven to 400°F.",
      "Spread chips over a sheet pan.",
      "Top with beef, beans, and cheese.",
      "Bake for 8 to 12 minutes.",
      "Add tomato, jalapeños, sour cream, and salsa."
    ]
  },

  /* =======================================================
     DESSERT — 91–100
  ======================================================= */

  {
    id: "pack001-091",
    title: "Chocolate Chip Cookies",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    rating: 4.9,
    emoji: "🍪",
    description: "Soft-centered cookies with crisp edges and chocolate chips.",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1 teaspoon salt",
      "1 cup softened butter",
      "3/4 cup sugar",
      "3/4 cup brown sugar",
      "2 large eggs",
      "2 cups chocolate chips"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Mix the flour, baking soda, and salt.",
      "Beat butter and sugars until creamy.",
      "Beat in the eggs, then add the dry ingredients and chocolate chips.",
      "Bake spoonfuls for 9 to 12 minutes."
    ]
  },

  {
    id: "pack001-092",
    title: "Fudgy Brownies",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 30,
    servings: 16,
    rating: 4.9,
    emoji: "🍫",
    description: "Rich chocolate brownies with a dense fudgy center.",
    ingredients: [
      "1 cup melted butter",
      "2 cups sugar",
      "4 large eggs",
      "1 teaspoon vanilla",
      "1 cup cocoa powder",
      "1 cup all-purpose flour",
      "1/2 teaspoon salt",
      "1 cup chocolate chips"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Whisk butter and sugar together.",
      "Add the eggs and vanilla.",
      "Fold in cocoa, flour, salt, and chocolate chips.",
      "Bake for 25 to 30 minutes."
    ]
  },

  {
    id: "pack001-093",
    title: "Banana Pudding",
    category: "Dessert",
    cuisine: "Southern",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 0,
    servings: 10,
    rating: 4.9,
    emoji: "🍌",
    description: "Creamy vanilla pudding layered with bananas and vanilla wafers.",
    ingredients: [
      "2 boxes instant vanilla pudding",
      "3 cups milk",
      "8 ounces cream cheese",
      "8 ounces whipped topping",
      "5 bananas, sliced",
      "1 box vanilla wafers"
    ],
    instructions: [
      "Whisk the pudding mix and milk.",
      "Beat in softened cream cheese.",
      "Fold in the whipped topping.",
      "Layer wafers, bananas, and pudding.",
      "Chill for at least 4 hours."
    ]
  },

  {
    id: "pack001-094",
    title: "Peach Cobbler",
    category: "Dessert",
    cuisine: "Southern",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 45,
    servings: 8,
    rating: 4.9,
    emoji: "🍑",
    description: "Sweet peaches baked beneath a buttery golden topping.",
    ingredients: [
      "6 cups sliced peaches",
      "1 cup sugar",
      "1 cup all-purpose flour",
      "1 cup milk",
      "1/2 cup melted butter",
      "2 teaspoons baking powder",
      "1 teaspoon cinnamon"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Place the melted butter in a baking dish.",
      "Mix flour, sugar, baking powder, and milk.",
      "Pour over the butter and spoon peaches on top.",
      "Bake for 40 to 45 minutes."
    ]
  },

  {
    id: "pack001-095",
    title: "No-Bake Cheesecake",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 0,
    servings: 8,
    rating: 4.8,
    emoji: "🍰",
    description: "Smooth creamy cheesecake in a graham cracker crust.",
    ingredients: [
      "8 ounces cream cheese",
      "1 cup powdered sugar",
      "1 teaspoon vanilla",
      "8 ounces whipped topping",
      "1 graham cracker crust",
      "1 cup berry topping"
    ],
    instructions: [
      "Beat the cream cheese, powdered sugar, and vanilla.",
      "Fold in the whipped topping.",
      "Spread the filling into the crust.",
      "Chill for at least 4 hours.",
      "Top with berries before serving."
    ]
  },

  {
    id: "pack001-096",
    title: "Apple Crisp",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 40,
    servings: 8,
    rating: 4.8,
    emoji: "🍎",
    description: "Warm cinnamon apples beneath a buttery oat topping.",
    ingredients: [
      "6 apples, sliced",
      "1/2 cup sugar",
      "1 teaspoon cinnamon",
      "1 cup rolled oats",
      "3/4 cup flour",
      "3/4 cup brown sugar",
      "1/2 cup butter"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Toss apples with sugar and cinnamon.",
      "Place them in a baking dish.",
      "Mix oats, flour, brown sugar, and butter.",
      "Sprinkle over the apples and bake for 35 to 40 minutes."
    ]
  },

  {
    id: "pack001-097",
    title: "Chocolate Lava Cakes",
    category: "Dessert",
    cuisine: "French-American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    rating: 4.9,
    emoji: "🍫",
    description: "Individual chocolate cakes with warm molten centers.",
    ingredients: [
      "1/2 cup butter",
      "6 ounces dark chocolate",
      "2 large eggs",
      "2 egg yolks",
      "1/4 cup sugar",
      "2 tablespoons flour",
      "Pinch of salt"
    ],
    instructions: [
      "Preheat the oven to 425°F and grease four ramekins.",
      "Melt the butter and chocolate.",
      "Whisk eggs, yolks, and sugar.",
      "Fold in chocolate, flour, and salt.",
      "Bake for 10 to 12 minutes and serve immediately."
    ]
  },

  {
    id: "pack001-098",
    title: "Strawberry Shortcake",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 15,
    servings: 6,
    rating: 4.8,
    emoji: "🍓",
    description: "Sweet biscuits layered with strawberries and whipped cream.",
    ingredients: [
      "2 cups sliced strawberries",
      "1/4 cup sugar",
      "6 shortcake biscuits",
      "2 cups whipped cream",
      "1 teaspoon vanilla"
    ],
    instructions: [
      "Mix the strawberries with sugar and let them rest for 20 minutes.",
      "Split the biscuits.",
      "Stir vanilla into the whipped cream.",
      "Layer biscuits, strawberries, and whipped cream.",
      "Serve immediately."
    ]
  },

  {
    id: "pack001-099",
    title: "Cinnamon Roll Cake",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 35,
    servings: 12,
    rating: 4.8,
    emoji: "🍰",
    description: "A soft vanilla cake swirled with cinnamon brown sugar.",
    ingredients: [
      "3 cups all-purpose flour",
      "1 cup sugar",
      "4 teaspoons baking powder",
      "1 1/2 cups milk",
      "2 large eggs",
      "1 cup butter",
      "1 cup brown sugar",
      "1 tablespoon cinnamon"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Mix flour, sugar, baking powder, milk, eggs, and half the butter.",
      "Spread into a baking dish.",
      "Mix remaining butter, brown sugar, and cinnamon and swirl into the batter.",
      "Bake for 30 to 35 minutes."
    ]
  },

  {
    id: "pack001-100",
    title: "Peanut Butter Pie",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 0,
    servings: 8,
    rating: 4.9,
    emoji: "🥜",
    description: "Creamy peanut butter filling in a chocolate cookie crust.",
    ingredients: [
      "8 ounces cream cheese",
      "1 cup peanut butter",
      "1 cup powdered sugar",
      "8 ounces whipped topping",
      "1 chocolate cookie crust",
      "Chocolate syrup"
    ],
    instructions: [
      "Beat the cream cheese, peanut butter, and powdered sugar.",
      "Fold in the whipped topping.",
      "Spread the filling into the crust.",
      "Chill for at least 4 hours.",
      "Drizzle with chocolate syrup."
    ]
  }

];

/* Add this pack to the complete Recipe Buddy collection. */

window.RECIPE_PACKS.push(recipePack001);

window.recipes =
  window.RECIPE_PACKS.flat();

console.log(
  recipePack001.length +
  " recipes loaded from Recipe Pack 001."
);