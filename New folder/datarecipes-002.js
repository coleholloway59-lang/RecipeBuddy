/* =========================================================
   RECIPE BUDDY
   RECIPE PACK 002
   RECIPES 101–200
========================================================= */

"use strict";

window.RECIPE_PACKS =
  window.RECIPE_PACKS || [];

const recipePack002 = [

  /* =======================================================
     BREAKFAST — 101–120
  ======================================================= */

  {
    id: "pack002-101",
    title: "Strawberry Banana Pancakes",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    rating: 4.7,
    emoji: "🥞",
    description: "Fluffy pancakes filled with banana and topped with strawberries.",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "1 3/4 cups milk",
      "2 large eggs",
      "1 ripe banana, mashed",
      "1 cup sliced strawberries",
      "2 tablespoons melted butter"
    ],
    instructions: [
      "Whisk the flour, sugar, baking powder, and salt.",
      "Whisk the milk, eggs, banana, and melted butter separately.",
      "Combine the wet and dry ingredients until just mixed.",
      "Cook portions on a greased skillet until bubbles form.",
      "Flip until golden and serve with strawberries."
    ]
  },

  {
    id: "pack002-102",
    title: "Chocolate Chip Waffles",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 18,
    servings: 4,
    rating: 4.8,
    emoji: "🧇",
    description: "Crisp waffles filled with melted chocolate chips.",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "1 tablespoon baking powder",
      "1/2 teaspoon salt",
      "2 large eggs",
      "1 3/4 cups milk",
      "1/2 cup melted butter",
      "1 cup chocolate chips"
    ],
    instructions: [
      "Preheat the waffle iron.",
      "Whisk the flour, sugar, baking powder, and salt.",
      "Mix the eggs, milk, and butter separately.",
      "Combine the mixtures and fold in chocolate chips.",
      "Cook until crisp and golden."
    ]
  },

  {
    id: "pack002-103",
    title: "Breakfast Pizza",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 20,
    servings: 6,
    rating: 4.7,
    emoji: "🍕",
    description: "Pizza crust topped with eggs, sausage, bacon, and cheese.",
    ingredients: [
      "1 prepared pizza crust",
      "6 large eggs",
      "1/2 pound breakfast sausage",
      "6 slices cooked bacon",
      "2 cups shredded cheddar cheese",
      "1/4 cup milk",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 400°F.",
      "Cook and crumble the sausage.",
      "Scramble the eggs with milk, salt, and pepper.",
      "Spread eggs, sausage, bacon, and cheese over the crust.",
      "Bake for 15 to 20 minutes."
    ]
  },

  {
    id: "pack002-104",
    title: "Sausage Egg Breakfast Sliders",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 20,
    servings: 6,
    rating: 4.8,
    emoji: "🍔",
    description: "Soft rolls filled with sausage, eggs, and melted cheese.",
    ingredients: [
      "12 slider rolls",
      "8 large eggs",
      "1 pound breakfast sausage",
      "8 slices American cheese",
      "3 tablespoons melted butter",
      "1 teaspoon maple syrup",
      "Salt and pepper"
    ],
    instructions: [
      "Cook and crumble the sausage.",
      "Scramble the eggs and season them.",
      "Layer sausage, eggs, and cheese inside the rolls.",
      "Brush with butter mixed with maple syrup.",
      "Bake at 350°F for 15 minutes."
    ]
  },

  {
    id: "pack002-105",
    title: "Cinnamon Roll French Toast Bake",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 35,
    servings: 8,
    rating: 4.8,
    emoji: "🍥",
    description: "A sweet baked breakfast made with cinnamon rolls and custard.",
    ingredients: [
      "2 cans refrigerated cinnamon rolls",
      "6 large eggs",
      "1 cup milk",
      "1 teaspoon vanilla",
      "1 teaspoon cinnamon",
      "1/4 cup maple syrup"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Cut the cinnamon rolls into pieces.",
      "Place them in a greased baking dish.",
      "Whisk eggs, milk, vanilla, cinnamon, and syrup.",
      "Pour over the rolls and bake for 30 to 35 minutes."
    ]
  },

  {
    id: "pack002-106",
    title: "Denver Omelet",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 10,
    servings: 1,
    rating: 4.6,
    emoji: "🍳",
    description: "A classic omelet filled with ham, peppers, onions, and cheese.",
    ingredients: [
      "3 large eggs",
      "2 tablespoons milk",
      "1/3 cup diced ham",
      "1/4 cup diced bell pepper",
      "2 tablespoons diced onion",
      "1/3 cup shredded cheddar cheese",
      "1 tablespoon butter"
    ],
    instructions: [
      "Cook the ham, pepper, and onion in butter.",
      "Whisk the eggs and milk.",
      "Pour the eggs into the skillet.",
      "Add the cooked filling and cheese to one side.",
      "Fold and cook until set."
    ]
  },

  {
    id: "pack002-107",
    title: "Breakfast Tacos",
    category: "Breakfast",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 12,
    servings: 4,
    rating: 4.7,
    emoji: "🌮",
    description: "Warm tortillas filled with eggs, sausage, cheese, and salsa.",
    ingredients: [
      "8 small tortillas",
      "8 large eggs",
      "1/2 pound breakfast sausage",
      "1 cup shredded cheese",
      "1/2 cup salsa",
      "1 avocado, diced",
      "Salt and pepper"
    ],
    instructions: [
      "Cook and crumble the sausage.",
      "Scramble the eggs with salt and pepper.",
      "Warm the tortillas.",
      "Fill with eggs, sausage, cheese, salsa, and avocado.",
      "Serve immediately."
    ]
  },

  {
    id: "pack002-108",
    title: "Bacon Spinach Quiche",
    category: "Breakfast",
    cuisine: "French-American",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 40,
    servings: 8,
    rating: 4.7,
    emoji: "🥧",
    description: "A savory egg pie with bacon, spinach, and cheese.",
    ingredients: [
      "1 unbaked pie crust",
      "6 large eggs",
      "1 cup milk",
      "6 slices cooked bacon",
      "2 cups chopped spinach",
      "1 cup shredded Swiss cheese",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Place bacon, spinach, and cheese in the crust.",
      "Whisk eggs, milk, salt, and pepper.",
      "Pour the egg mixture into the crust.",
      "Bake for 35 to 40 minutes."
    ]
  },

  {
    id: "pack002-109",
    title: "Sausage Gravy Breakfast Casserole",
    category: "Breakfast",
    cuisine: "Southern",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 40,
    servings: 8,
    rating: 4.8,
    emoji: "🍳",
    description: "Biscuits, eggs, sausage, cheese, and creamy gravy baked together.",
    ingredients: [
      "1 can refrigerated biscuits",
      "1 pound breakfast sausage",
      "6 large eggs",
      "2 cups milk",
      "2 cups shredded cheddar",
      "1 packet country gravy mix",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Cut biscuits into pieces and place in a baking dish.",
      "Top with cooked sausage and cheese.",
      "Whisk eggs and milk and pour over everything.",
      "Prepare gravy, pour over the top, and bake for 35 to 40 minutes."
    ]
  },

  {
    id: "pack002-110",
    title: "Berry Smoothie Bowl",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 0,
    servings: 2,
    rating: 4.6,
    emoji: "🫐",
    description: "A thick berry smoothie topped with fruit and granola.",
    ingredients: [
      "2 cups frozen mixed berries",
      "1 frozen banana",
      "1 cup Greek yogurt",
      "1/2 cup milk",
      "1 tablespoon honey",
      "1/2 cup granola",
      "Fresh berries for topping"
    ],
    instructions: [
      "Blend frozen berries, banana, yogurt, milk, and honey.",
      "Use only enough milk to create a thick texture.",
      "Divide between bowls.",
      "Top with granola and fresh berries."
    ]
  },

  {
    id: "pack002-111",
    title: "Breakfast Bagel Sandwich",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 10,
    servings: 2,
    rating: 4.7,
    emoji: "🥯",
    description: "Toasted bagels filled with eggs, bacon, and cheese.",
    ingredients: [
      "2 bagels",
      "4 large eggs",
      "4 slices bacon",
      "2 slices cheddar cheese",
      "2 tablespoons cream cheese",
      "Salt and pepper"
    ],
    instructions: [
      "Toast the bagels.",
      "Cook the bacon until crisp.",
      "Cook the eggs and season them.",
      "Spread cream cheese on the bagels.",
      "Add eggs, bacon, and cheddar."
    ]
  },

  {
    id: "pack002-112",
    title: "Apple Pie Oatmeal",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    rating: 4.6,
    emoji: "🍎",
    description: "Warm oatmeal flavored with apples, cinnamon, and brown sugar.",
    ingredients: [
      "1 cup rolled oats",
      "2 cups milk",
      "1 apple, diced",
      "1 tablespoon brown sugar",
      "1 teaspoon cinnamon",
      "1 tablespoon butter",
      "Pinch of salt"
    ],
    instructions: [
      "Melt butter in a saucepan.",
      "Cook the apple with cinnamon and brown sugar for 3 minutes.",
      "Add oats, milk, and salt.",
      "Simmer until creamy.",
      "Serve warm."
    ]
  },

  {
    id: "pack002-113",
    title: "Chocolate Peanut Butter Overnight Oats",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 0,
    servings: 2,
    rating: 4.7,
    emoji: "🥜",
    description: "Creamy overnight oats with cocoa and peanut butter.",
    ingredients: [
      "1 cup rolled oats",
      "1 cup milk",
      "1/2 cup Greek yogurt",
      "3 tablespoons peanut butter",
      "2 tablespoons cocoa powder",
      "2 tablespoons honey"
    ],
    instructions: [
      "Stir all ingredients together.",
      "Divide into two containers.",
      "Cover and refrigerate overnight.",
      "Stir before serving.",
      "Add extra milk if needed."
    ]
  },

  {
    id: "pack002-114",
    title: "Breakfast Fried Rice",
    category: "Breakfast",
    cuisine: "Asian-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    rating: 4.6,
    emoji: "🍚",
    description: "Rice stir-fried with eggs, bacon, vegetables, and soy sauce.",
    ingredients: [
      "3 cups cold cooked rice",
      "4 large eggs",
      "6 slices cooked bacon",
      "1 cup frozen peas and carrots",
      "3 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "2 green onions"
    ],
    instructions: [
      "Scramble the eggs and remove them from the skillet.",
      "Cook the vegetables for 3 minutes.",
      "Add rice, bacon, soy sauce, and sesame oil.",
      "Return the eggs.",
      "Top with green onions."
    ]
  },

  {
    id: "pack002-115",
    title: "Sweet Potato Breakfast Hash",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 25,
    servings: 4,
    rating: 4.6,
    emoji: "🍠",
    description: "Sweet potatoes cooked with sausage, peppers, onions, and eggs.",
    ingredients: [
      "2 large sweet potatoes, diced",
      "1/2 pound breakfast sausage",
      "1 bell pepper, diced",
      "1/2 onion, diced",
      "4 large eggs",
      "2 tablespoons olive oil",
      "Salt, pepper, and paprika"
    ],
    instructions: [
      "Cook the sausage and remove it.",
      "Cook sweet potatoes in oil until tender.",
      "Add pepper and onion.",
      "Return the sausage and make four wells.",
      "Add eggs, cover, and cook until set."
    ]
  },

  {
    id: "pack002-116",
    title: "Ham Egg and Cheese Croissants",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    rating: 4.7,
    emoji: "🥐",
    description: "Flaky croissants filled with ham, eggs, and melted cheese.",
    ingredients: [
      "4 croissants",
      "6 large eggs",
      "8 slices deli ham",
      "4 slices Swiss cheese",
      "1 tablespoon butter",
      "Salt and pepper"
    ],
    instructions: [
      "Scramble the eggs in butter.",
      "Season with salt and pepper.",
      "Split the croissants.",
      "Fill with ham, eggs, and cheese.",
      "Warm until the cheese melts."
    ]
  },

  {
    id: "pack002-117",
    title: "Blueberry Baked Oatmeal",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 35,
    servings: 8,
    rating: 4.7,
    emoji: "🫐",
    description: "Soft baked oatmeal with blueberries, cinnamon, and maple syrup.",
    ingredients: [
      "3 cups rolled oats",
      "2 cups milk",
      "2 large eggs",
      "1/3 cup maple syrup",
      "1 teaspoon cinnamon",
      "1 teaspoon baking powder",
      "1 1/2 cups blueberries"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Mix oats, cinnamon, and baking powder.",
      "Whisk milk, eggs, and maple syrup.",
      "Combine and fold in blueberries.",
      "Bake for 30 to 35 minutes."
    ]
  },

  {
    id: "pack002-118",
    title: "Breakfast Stuffed Peppers",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    rating: 4.6,
    emoji: "🫑",
    description: "Bell peppers filled with eggs, sausage, potatoes, and cheese.",
    ingredients: [
      "4 bell peppers",
      "6 large eggs",
      "1/2 pound breakfast sausage",
      "1 cup cooked diced potatoes",
      "1 cup shredded cheddar",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Cut peppers in half and remove seeds.",
      "Fill with sausage and potatoes.",
      "Pour beaten eggs into each pepper half.",
      "Top with cheese and bake for 25 to 30 minutes."
    ]
  },

  {
    id: "pack002-119",
    title: "Peach Yogurt Parfait",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 7,
    cookTime: 0,
    servings: 2,
    rating: 4.5,
    emoji: "🍑",
    description: "Vanilla yogurt layered with peaches, granola, and honey.",
    ingredients: [
      "2 cups vanilla Greek yogurt",
      "2 peaches, diced",
      "1 cup granola",
      "2 tablespoons honey",
      "1/4 teaspoon cinnamon"
    ],
    instructions: [
      "Divide half the yogurt between two glasses.",
      "Add peaches and granola.",
      "Repeat the layers.",
      "Drizzle with honey.",
      "Sprinkle with cinnamon."
    ]
  },

  {
    id: "pack002-120",
    title: "Maple Sausage Pancake Muffins",
    category: "Breakfast",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 18,
    servings: 12,
    rating: 4.7,
    emoji: "🧁",
    description: "Portable pancake muffins with sausage and maple flavor.",
    ingredients: [
      "2 cups pancake mix",
      "1 1/2 cups milk",
      "2 large eggs",
      "1 pound cooked breakfast sausage",
      "1/3 cup maple syrup",
      "1 cup shredded cheddar"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Mix pancake mix, milk, eggs, and maple syrup.",
      "Fold in sausage and cheese.",
      "Divide into greased muffin cups.",
      "Bake for 16 to 18 minutes."
    ]
  },

  /* =======================================================
     LUNCH — 121–140
  ======================================================= */

  {
    id: "pack002-121",
    title: "Classic BLT Sandwich",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    rating: 4.7,
    emoji: "🥓",
    description: "Crispy bacon, lettuce, tomato, and mayonnaise on toast.",
    ingredients: [
      "6 slices bacon",
      "4 slices bread",
      "4 lettuce leaves",
      "1 tomato, sliced",
      "3 tablespoons mayonnaise",
      "Salt and pepper"
    ],
    instructions: [
      "Cook the bacon until crisp.",
      "Toast the bread.",
      "Spread mayonnaise over the toast.",
      "Layer bacon, lettuce, and tomato.",
      "Season and close the sandwiches."
    ]
  },

  {
    id: "pack002-122",
    title: "Ham and Cheese Sliders",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 20,
    servings: 6,
    rating: 4.8,
    emoji: "🍔",
    description: "Baked sliders with ham, Swiss cheese, and buttery seasoning.",
    ingredients: [
      "12 slider rolls",
      "12 slices deli ham",
      "8 slices Swiss cheese",
      "4 tablespoons melted butter",
      "1 tablespoon Dijon mustard",
      "1 teaspoon poppy seeds"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Fill rolls with ham and cheese.",
      "Mix butter, mustard, and poppy seeds.",
      "Brush over the rolls.",
      "Bake covered for 15 minutes, then uncovered for 5 minutes."
    ]
  },

  {
    id: "pack002-123",
    title: "French Dip Sandwiches",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🥖",
    description: "Roast beef and melted provolone served with warm au jus.",
    ingredients: [
      "1 pound sliced roast beef",
      "4 hoagie rolls",
      "8 slices provolone",
      "2 cups beef broth",
      "1 tablespoon Worcestershire sauce",
      "1 teaspoon garlic powder"
    ],
    instructions: [
      "Warm beef broth with Worcestershire sauce and garlic powder.",
      "Add roast beef and heat gently.",
      "Fill rolls with beef and provolone.",
      "Toast until cheese melts.",
      "Serve with broth for dipping."
    ]
  },

  {
    id: "pack002-124",
    title: "Pulled Pork Sandwiches",
    category: "Lunch",
    cuisine: "Southern",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    rating: 4.8,
    emoji: "🍖",
    description: "Barbecue pulled pork served on soft buns with coleslaw.",
    ingredients: [
      "3 cups cooked pulled pork",
      "1 cup barbecue sauce",
      "4 sandwich buns",
      "1 cup coleslaw",
      "1/2 cup sliced pickles"
    ],
    instructions: [
      "Warm pulled pork with barbecue sauce.",
      "Toast buns if desired.",
      "Divide pork among buns.",
      "Top with coleslaw and pickles.",
      "Serve warm."
    ]
  },

  {
    id: "pack002-125",
    title: "Turkey Club Wrap",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    rating: 4.6,
    emoji: "🌯",
    description: "Turkey, bacon, tomato, lettuce, cheese, and ranch in a wrap.",
    ingredients: [
      "4 large tortillas",
      "12 slices turkey",
      "8 slices cooked bacon",
      "1 tomato, diced",
      "2 cups shredded lettuce",
      "1 cup shredded cheese",
      "1/2 cup ranch dressing"
    ],
    instructions: [
      "Lay out the tortillas.",
      "Add turkey, bacon, tomato, lettuce, and cheese.",
      "Drizzle with ranch.",
      "Fold the sides inward.",
      "Roll tightly and slice."
    ]
  },

  {
    id: "pack002-126",
    title: "Roast Beef and Cheddar Sandwich",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 5,
    servings: 2,
    rating: 4.6,
    emoji: "🥪",
    description: "Warm roast beef and cheddar with creamy horseradish sauce.",
    ingredients: [
      "4 slices bread",
      "8 ounces sliced roast beef",
      "4 slices cheddar cheese",
      "3 tablespoons mayonnaise",
      "1 teaspoon horseradish",
      "1/2 onion, thinly sliced"
    ],
    instructions: [
      "Mix mayonnaise and horseradish.",
      "Spread the sauce over the bread.",
      "Add roast beef, cheese, and onion.",
      "Toast in a skillet or sandwich press.",
      "Serve warm."
    ]
  },

  {
    id: "pack002-127",
    title: "Southwest Chicken Salad",
    category: "Lunch",
    cuisine: "Southwestern",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    rating: 4.7,
    emoji: "🥗",
    description: "Chicken salad with beans, corn, avocado, and tortilla strips.",
    ingredients: [
      "3 cups chopped lettuce",
      "2 cups cooked chicken",
      "1 cup black beans",
      "1 cup corn",
      "1 avocado, diced",
      "1 cup tortilla strips",
      "1/2 cup chipotle ranch"
    ],
    instructions: [
      "Divide lettuce between bowls.",
      "Add chicken, beans, corn, and avocado.",
      "Top with tortilla strips.",
      "Drizzle with chipotle ranch.",
      "Serve immediately."
    ]
  },

  {
    id: "pack002-128",
    title: "Grilled Chicken Caprese Sandwich",
    category: "Lunch",
    cuisine: "Italian",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 8,
    servings: 2,
    rating: 4.7,
    emoji: "🥪",
    description: "Chicken, mozzarella, tomato, basil, and balsamic on ciabatta.",
    ingredients: [
      "4 slices ciabatta",
      "1 cooked chicken breast, sliced",
      "4 slices mozzarella",
      "1 tomato, sliced",
      "Fresh basil leaves",
      "2 tablespoons balsamic glaze",
      "1 tablespoon olive oil"
    ],
    instructions: [
      "Layer chicken, mozzarella, tomato, and basil on bread.",
      "Drizzle with balsamic glaze.",
      "Brush the outside with olive oil.",
      "Grill until crisp and melted.",
      "Serve warm."
    ]
  },

  {
    id: "pack002-129",
    title: "Buffalo Chicken Salad",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 0,
    servings: 4,
    rating: 4.7,
    emoji: "🥗",
    description: "Spicy buffalo chicken over lettuce with cheese and ranch.",
    ingredients: [
      "6 cups chopped lettuce",
      "2 cups cooked chicken",
      "1/3 cup buffalo sauce",
      "1 cup shredded cheddar",
      "1/2 cup diced celery",
      "1/2 cup diced tomato",
      "1/2 cup ranch dressing"
    ],
    instructions: [
      "Toss the chicken with buffalo sauce.",
      "Divide lettuce into bowls.",
      "Add chicken, cheese, celery, and tomato.",
      "Drizzle with ranch.",
      "Serve immediately."
    ]
  },

  {
    id: "pack002-130",
    title: "Turkey Pesto Panini",
    category: "Lunch",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 8,
    servings: 2,
    rating: 4.6,
    emoji: "🥪",
    description: "Turkey, pesto, mozzarella, and tomato pressed until crisp.",
    ingredients: [
      "4 slices ciabatta",
      "8 slices turkey",
      "4 tablespoons pesto",
      "4 slices mozzarella",
      "1 tomato, sliced",
      "1 tablespoon olive oil"
    ],
    instructions: [
      "Spread pesto over the bread.",
      "Add turkey, mozzarella, and tomato.",
      "Brush the outside with olive oil.",
      "Cook in a panini press or skillet.",
      "Serve when crisp and melted."
    ]
  },

  {
    id: "pack002-131",
    title: "Chicken Avocado Salad",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    rating: 4.6,
    emoji: "🥑",
    description: "A fresh salad with chicken, avocado, tomato, and lime dressing.",
    ingredients: [
      "3 cups cooked chopped chicken",
      "2 avocados, diced",
      "1 cup cherry tomatoes",
      "1/2 red onion, diced",
      "2 tablespoons lime juice",
      "2 tablespoons olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Combine chicken, avocado, tomatoes, and onion.",
      "Whisk lime juice, olive oil, salt, and pepper.",
      "Pour dressing over the salad.",
      "Toss gently.",
      "Serve chilled."
    ]
  },

  {
    id: "pack002-132",
    title: "BBQ Ranch Chicken Salad",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    rating: 4.7,
    emoji: "🥗",
    description: "Chicken salad with barbecue sauce, ranch, corn, and beans.",
    ingredients: [
      "6 cups chopped lettuce",
      "2 cups cooked chicken",
      "1 cup corn",
      "1 cup black beans",
      "1 cup shredded cheddar",
      "1/4 cup barbecue sauce",
      "1/4 cup ranch dressing"
    ],
    instructions: [
      "Divide lettuce between bowls.",
      "Add chicken, corn, beans, and cheese.",
      "Mix barbecue sauce and ranch.",
      "Drizzle over the salads.",
      "Serve immediately."
    ]
  },

  {
    id: "pack002-133",
    title: "Cuban Sandwich",
    category: "Lunch",
    cuisine: "Cuban",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    rating: 4.8,
    emoji: "🥪",
    description: "Pressed sandwich with pork, ham, Swiss, pickles, and mustard.",
    ingredients: [
      "1 loaf Cuban bread",
      "6 ounces sliced roast pork",
      "6 slices ham",
      "4 slices Swiss cheese",
      "1/2 cup sliced pickles",
      "2 tablespoons mustard",
      "1 tablespoon butter"
    ],
    instructions: [
      "Split the bread and spread with mustard.",
      "Layer pork, ham, Swiss cheese, and pickles.",
      "Brush the outside with butter.",
      "Press in a skillet or sandwich press.",
      "Cook until crisp and melted."
    ]
  },

  {
    id: "pack002-134",
    title: "Greek Chicken Pita",
    category: "Lunch",
    cuisine: "Greek",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 0,
    servings: 4,
    rating: 4.7,
    emoji: "🫓",
    description: "Chicken, vegetables, feta, and tzatziki stuffed into pita bread.",
    ingredients: [
      "4 pita breads",
      "2 cups cooked chicken",
      "1 cucumber, diced",
      "1 tomato, diced",
      "1/2 cup crumbled feta",
      "1/2 cup tzatziki",
      "2 cups shredded lettuce"
    ],
    instructions: [
      "Warm the pita breads.",
      "Fill each pita with lettuce and chicken.",
      "Add cucumber, tomato, and feta.",
      "Drizzle with tzatziki.",
      "Serve immediately."
    ]
  },

  {
    id: "pack002-135",
    title: "Chicken Parmesan Wrap",
    category: "Lunch",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 8,
    servings: 4,
    rating: 4.7,
    emoji: "🌯",
    description: "Chicken, marinara, mozzarella, and Parmesan in a toasted wrap.",
    ingredients: [
      "4 large tortillas",
      "2 cups cooked breaded chicken",
      "1 cup marinara sauce",
      "1 1/2 cups mozzarella",
      "1/4 cup Parmesan"
    ],
    instructions: [
      "Place chicken in the tortillas.",
      "Add marinara, mozzarella, and Parmesan.",
      "Fold and roll tightly.",
      "Toast in a skillet until crisp.",
      "Serve warm."
    ]
  },

  {
    id: "pack002-136",
    title: "Bacon Ranch Pasta Salad",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    servings: 8,
    rating: 4.7,
    emoji: "🥗",
    description: "Cold pasta salad with bacon, cheese, vegetables, and ranch.",
    ingredients: [
      "12 ounces rotini pasta",
      "8 slices cooked bacon",
      "1 cup shredded cheddar",
      "1 cup cherry tomatoes",
      "1 cup diced cucumber",
      "3/4 cup ranch dressing"
    ],
    instructions: [
      "Cook the pasta and cool completely.",
      "Combine pasta, bacon, cheese, tomatoes, and cucumber.",
      "Add ranch dressing.",
      "Toss until coated.",
      "Chill before serving."
    ]
  },

  {
    id: "pack002-137",
    title: "Turkey Bacon Ranch Sandwich",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 0,
    servings: 2,
    rating: 4.6,
    emoji: "🥪",
    description: "Turkey, bacon, cheese, lettuce, tomato, and ranch.",
    ingredients: [
      "4 slices bread",
      "8 slices turkey",
      "4 slices cooked bacon",
      "4 slices cheddar",
      "Lettuce and tomato",
      "3 tablespoons ranch dressing"
    ],
    instructions: [
      "Spread ranch over the bread.",
      "Add turkey and cheddar.",
      "Top with bacon, lettuce, and tomato.",
      "Close the sandwiches.",
      "Slice and serve."
    ]
  },

  {
    id: "pack002-138",
    title: "Chicken Cobb Salad",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 18,
    cookTime: 0,
    servings: 4,
    rating: 4.8,
    emoji: "🥗",
    description: "Chicken, bacon, eggs, avocado, tomato, and cheese over lettuce.",
    ingredients: [
      "6 cups chopped lettuce",
      "2 cups cooked chicken",
      "6 slices cooked bacon",
      "4 hard-boiled eggs",
      "1 avocado",
      "1 cup cherry tomatoes",
      "1/2 cup crumbled blue cheese",
      "1/2 cup ranch dressing"
    ],
    instructions: [
      "Divide lettuce between bowls.",
      "Arrange chicken, bacon, eggs, avocado, tomatoes, and cheese.",
      "Drizzle with dressing.",
      "Serve immediately."
    ]
  },

  {
    id: "pack002-139",
    title: "Broccoli Cheddar Baked Potato",
    category: "Lunch",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 55,
    servings: 4,
    rating: 4.6,
    emoji: "🥔",
    description: "Baked potatoes topped with broccoli and creamy cheddar sauce.",
    ingredients: [
      "4 large russet potatoes",
      "3 cups broccoli florets",
      "2 cups shredded cheddar",
      "1 cup milk",
      "2 tablespoons butter",
      "2 tablespoons flour",
      "Salt and pepper"
    ],
    instructions: [
      "Bake potatoes at 425°F until tender.",
      "Steam the broccoli.",
      "Cook butter and flour for 1 minute.",
      "Whisk in milk and stir in cheese.",
      "Split potatoes and top with broccoli and cheese sauce."
    ]
  },

  {
    id: "pack002-140",
    title: "Chicken Shawarma Wrap",
    category: "Lunch",
    cuisine: "Middle Eastern",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    rating: 4.7,
    emoji: "🌯",
    description: "Seasoned chicken with vegetables and garlic sauce in a wrap.",
    ingredients: [
      "1 1/2 pounds chicken breast, sliced",
      "2 tablespoons olive oil",
      "1 teaspoon cumin",
      "1 teaspoon paprika",
      "4 flatbreads",
      "Lettuce, tomato, and onion",
      "1/2 cup garlic sauce"
    ],
    instructions: [
      "Season chicken with oil, cumin, paprika, salt, and pepper.",
      "Cook until browned and safely cooked.",
      "Warm the flatbreads.",
      "Add chicken and vegetables.",
      "Drizzle with garlic sauce and roll."
    ]
  },

  /* =======================================================
     DINNER — 141–180
  ======================================================= */

  {
    id: "pack002-141",
    title: "Creamy Parmesan Chicken",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Medium",
    prepTime: 12,
    cookTime: 25,
    servings: 4,
    rating: 4.8,
    emoji: "🍗",
    description: "Chicken breasts simmered in a creamy Parmesan garlic sauce.",
    ingredients: [
      "4 chicken breasts",
      "2 tablespoons butter",
      "3 cloves garlic",
      "1 1/2 cups heavy cream",
      "1 cup grated Parmesan",
      "1/2 cup chicken broth",
      "Salt and pepper"
    ],
    instructions: [
      "Season and brown the chicken in butter.",
      "Remove the chicken and cook garlic.",
      "Add broth and cream.",
      "Stir in Parmesan.",
      "Return chicken and simmer until safely cooked."
    ]
  },

  {
    id: "pack002-142",
    title: "Lemon Herb Chicken",
    category: "Dinner",
    cuisine: "Mediterranean",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    rating: 4.7,
    emoji: "🍋",
    description: "Chicken roasted with lemon, garlic, and fresh herbs.",
    ingredients: [
      "4 chicken breasts",
      "3 tablespoons olive oil",
      "1 lemon",
      "4 cloves garlic",
      "1 teaspoon oregano",
      "1 teaspoon thyme",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 400°F.",
      "Combine oil, lemon juice, garlic, and herbs.",
      "Coat the chicken.",
      "Bake for 22 to 25 minutes.",
      "Rest before slicing."
    ]
  },

  {
    id: "pack002-143",
    title: "Cajun Chicken Pasta",
    category: "Dinner",
    cuisine: "Cajun",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    rating: 4.8,
    emoji: "🍝",
    description: "Cajun chicken and pasta in a creamy seasoned sauce.",
    ingredients: [
      "12 ounces penne",
      "2 chicken breasts, sliced",
      "2 tablespoons Cajun seasoning",
      "2 tablespoons butter",
      "2 cloves garlic",
      "1 1/2 cups heavy cream",
      "1 cup Parmesan"
    ],
    instructions: [
      "Cook the pasta.",
      "Season and cook the chicken.",
      "Remove chicken and cook garlic in butter.",
      "Add cream and Parmesan.",
      "Toss with pasta and chicken."
    ]
  },

  {
    id: "pack002-144",
    title: "Teriyaki Chicken Bowls",
    category: "Dinner",
    cuisine: "Japanese-American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 20,
    servings: 4,
    rating: 4.8,
    emoji: "🍚",
    description: "Glazed teriyaki chicken served with rice and vegetables.",
    ingredients: [
      "1 1/2 pounds chicken breast, cubed",
      "1/2 cup teriyaki sauce",
      "3 cups cooked rice",
      "2 cups broccoli",
      "1 cup sliced carrots",
      "1 tablespoon oil",
      "Sesame seeds"
    ],
    instructions: [
      "Cook chicken in oil until browned.",
      "Add teriyaki sauce and simmer.",
      "Steam broccoli and carrots.",
      "Divide rice between bowls.",
      "Top with chicken, vegetables, and sesame seeds."
    ]
  },

  {
    id: "pack002-145",
    title: "BBQ Baked Chicken",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 40,
    servings: 4,
    rating: 4.7,
    emoji: "🍗",
    description: "Juicy oven-baked chicken coated in barbecue sauce.",
    ingredients: [
      "4 chicken thighs",
      "1 cup barbecue sauce",
      "1 tablespoon olive oil",
      "1 teaspoon smoked paprika",
      "1 teaspoon garlic powder",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 400°F.",
      "Season chicken with oil and spices.",
      "Bake for 25 minutes.",
      "Brush with barbecue sauce.",
      "Bake another 10 to 15 minutes."
    ]
  },

  {
    id: "pack002-146",
    title: "Sesame Chicken",
    category: "Dinner",
    cuisine: "Chinese-American",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 20,
    servings: 4,
    rating: 4.8,
    emoji: "🍗",
    description: "Crispy chicken tossed in a sweet sesame glaze.",
    ingredients: [
      "1 1/2 pounds chicken breast, cubed",
      "1/2 cup cornstarch",
      "2 large eggs",
      "1/3 cup soy sauce",
      "1/4 cup honey",
      "1 tablespoon sesame oil",
      "2 tablespoons sesame seeds"
    ],
    instructions: [
      "Coat chicken in egg and cornstarch.",
      "Cook until crisp and safely cooked.",
      "Whisk soy sauce, honey, and sesame oil.",
      "Simmer the sauce until thick.",
      "Toss with chicken and sesame seeds."
    ]
  },

  {
    id: "pack002-147",
    title: "Chicken and Dumplings",
    category: "Dinner",
    cuisine: "Southern",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 40,
    servings: 6,
    rating: 4.9,
    emoji: "🥣",
    description: "Tender chicken stew topped with soft fluffy dumplings.",
    ingredients: [
      "3 cups cooked chicken",
      "6 cups chicken broth",
      "1 onion, diced",
      "2 carrots, sliced",
      "2 celery stalks, sliced",
      "2 cups biscuit mix",
      "2/3 cup milk"
    ],
    instructions: [
      "Cook onion, carrots, and celery in a large pot.",
      "Add broth and chicken and simmer.",
      "Mix biscuit mix with milk.",
      "Drop spoonfuls over the simmering stew.",
      "Cover and cook until dumplings are done."
    ]
  },

  {
    id: "pack002-148",
    title: "Chicken Noodle Soup",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 35,
    servings: 6,
    rating: 4.8,
    emoji: "🥣",
    description: "Classic chicken soup with vegetables and egg noodles.",
    ingredients: [
      "3 cups cooked chicken",
      "8 cups chicken broth",
      "2 carrots, sliced",
      "2 celery stalks, sliced",
      "1 onion, diced",
      "8 ounces egg noodles",
      "1 teaspoon thyme"
    ],
    instructions: [
      "Cook onion, carrots, and celery until softened.",
      "Add broth and thyme.",
      "Bring to a simmer.",
      "Add noodles and chicken.",
      "Cook until noodles are tender."
    ]
  },

  {
    id: "pack002-149",
    title: "Steak Fajitas",
    category: "Dinner",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🥩",
    description: "Sizzling steak strips with peppers and onions.",
    ingredients: [
      "1 1/2 pounds flank steak, sliced",
      "3 bell peppers, sliced",
      "1 onion, sliced",
      "2 tablespoons fajita seasoning",
      "2 tablespoons oil",
      "8 tortillas",
      "1 lime"
    ],
    instructions: [
      "Season steak with fajita seasoning.",
      "Cook steak in a hot skillet.",
      "Remove and cook peppers and onions.",
      "Return steak and squeeze with lime.",
      "Serve in tortillas."
    ]
  },

  {
    id: "pack002-150",
    title: "Steak and Potatoes Skillet",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    rating: 4.8,
    emoji: "🥩",
    description: "Tender steak bites and crispy potatoes in garlic butter.",
    ingredients: [
      "1 1/2 pounds steak, cubed",
      "1 pound baby potatoes, halved",
      "3 tablespoons butter",
      "4 cloves garlic",
      "1 teaspoon rosemary",
      "2 tablespoons olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Cook potatoes in olive oil until tender and crisp.",
      "Remove potatoes.",
      "Cook steak bites until browned.",
      "Add butter, garlic, and rosemary.",
      "Return potatoes and toss together."
    ]
  },

  {
    id: "pack002-151",
    title: "Pepper Steak",
    category: "Dinner",
    cuisine: "Chinese-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 18,
    servings: 4,
    rating: 4.7,
    emoji: "🥩",
    description: "Beef strips with bell peppers in a savory sauce.",
    ingredients: [
      "1 pound beef strips",
      "2 bell peppers, sliced",
      "1 onion, sliced",
      "1/3 cup soy sauce",
      "1 tablespoon cornstarch",
      "1 tablespoon brown sugar",
      "2 tablespoons oil"
    ],
    instructions: [
      "Whisk soy sauce, cornstarch, and sugar.",
      "Cook beef in oil and remove it.",
      "Cook peppers and onion.",
      "Return beef and add sauce.",
      "Cook until thickened."
    ]
  },

  {
    id: "pack002-152",
    title: "Beef Burrito Bowls",
    category: "Dinner",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    rating: 4.7,
    emoji: "🍚",
    description: "Rice bowls with seasoned beef, beans, corn, and toppings.",
    ingredients: [
      "1 pound ground beef",
      "2 tablespoons taco seasoning",
      "3 cups cooked rice",
      "1 can black beans",
      "1 cup corn",
      "1 cup shredded cheese",
      "Salsa and sour cream"
    ],
    instructions: [
      "Brown beef with taco seasoning.",
      "Warm beans and corn.",
      "Divide rice into bowls.",
      "Top with beef, beans, corn, and cheese.",
      "Add salsa and sour cream."
    ]
  },

  {
    id: "pack002-153",
    title: "Sloppy Joes",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 20,
    servings: 6,
    rating: 4.7,
    emoji: "🍔",
    description: "Sweet and savory ground beef served on soft buns.",
    ingredients: [
      "1 1/2 pounds ground beef",
      "1 onion, diced",
      "1 cup tomato sauce",
      "1/4 cup ketchup",
      "2 tablespoons brown sugar",
      "1 tablespoon Worcestershire sauce",
      "6 hamburger buns"
    ],
    instructions: [
      "Brown beef with onion.",
      "Drain excess fat.",
      "Add tomato sauce, ketchup, sugar, and Worcestershire sauce.",
      "Simmer for 15 minutes.",
      "Serve on buns."
    ]
  },

  {
    id: "pack002-154",
    title: "Beef Enchiladas",
    category: "Dinner",
    cuisine: "Mexican-American",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 30,
    servings: 6,
    rating: 4.8,
    emoji: "🌯",
    description: "Beef-filled tortillas covered with enchilada sauce and cheese.",
    ingredients: [
      "1 pound ground beef",
      "8 tortillas",
      "2 cups enchilada sauce",
      "2 cups shredded cheese",
      "1/2 onion, diced",
      "1 tablespoon taco seasoning"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Cook beef, onion, and seasoning.",
      "Fill and roll tortillas.",
      "Cover with sauce and cheese.",
      "Bake for 25 to 30 minutes."
    ]
  },

  {
    id: "pack002-155",
    title: "Pork Tenderloin with Garlic Herbs",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 30,
    servings: 6,
    rating: 4.8,
    emoji: "🍖",
    description: "Roasted pork tenderloin coated with garlic and herbs.",
    ingredients: [
      "2 pork tenderloins",
      "3 tablespoons olive oil",
      "4 cloves garlic",
      "1 teaspoon rosemary",
      "1 teaspoon thyme",
      "1 teaspoon salt",
      "1/2 teaspoon pepper"
    ],
    instructions: [
      "Preheat the oven to 400°F.",
      "Mix oil, garlic, herbs, salt, and pepper.",
      "Rub over the pork.",
      "Roast for 25 to 30 minutes.",
      "Rest before slicing."
    ]
  },

  {
    id: "pack002-156",
    title: "Sausage Potato Skillet",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 25,
    servings: 4,
    rating: 4.7,
    emoji: "🥔",
    description: "Smoked sausage, potatoes, peppers, and onions in one skillet.",
    ingredients: [
      "1 pound smoked sausage, sliced",
      "1 pound potatoes, diced",
      "1 bell pepper, diced",
      "1 onion, diced",
      "2 tablespoons olive oil",
      "1 teaspoon paprika",
      "Salt and pepper"
    ],
    instructions: [
      "Cook potatoes in oil until nearly tender.",
      "Add sausage, pepper, and onion.",
      "Season with paprika, salt, and pepper.",
      "Cook until vegetables are tender.",
      "Serve warm."
    ]
  },

  {
    id: "pack002-157",
    title: "Shrimp Alfredo",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    rating: 4.9,
    emoji: "🍤",
    description: "Shrimp and fettuccine in a creamy Parmesan Alfredo sauce.",
    ingredients: [
      "12 ounces fettuccine",
      "1 pound shrimp",
      "3 tablespoons butter",
      "3 cloves garlic",
      "2 cups heavy cream",
      "1 1/2 cups Parmesan",
      "Salt and pepper"
    ],
    instructions: [
      "Cook the pasta.",
      "Cook shrimp in butter and remove.",
      "Cook garlic for 30 seconds.",
      "Add cream and Parmesan.",
      "Toss with pasta and shrimp."
    ]
  },

  {
    id: "pack002-158",
    title: "Shrimp Fried Rice",
    category: "Dinner",
    cuisine: "Chinese-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    rating: 4.7,
    emoji: "🍚",
    description: "Fried rice with shrimp, eggs, vegetables, and soy sauce.",
    ingredients: [
      "3 cups cold cooked rice",
      "1 pound shrimp",
      "2 large eggs",
      "1 cup peas and carrots",
      "3 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "2 green onions"
    ],
    instructions: [
      "Cook shrimp and remove.",
      "Scramble eggs and remove.",
      "Cook vegetables.",
      "Add rice, soy sauce, and sesame oil.",
      "Return shrimp and eggs and add green onions."
    ]
  },

  {
    id: "pack002-159",
    title: "Shrimp Tacos",
    category: "Dinner",
    cuisine: "Mexican",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    rating: 4.8,
    emoji: "🌮",
    description: "Seasoned shrimp tacos with slaw and lime sauce.",
    ingredients: [
      "1 pound shrimp",
      "2 tablespoons taco seasoning",
      "8 tortillas",
      "2 cups cabbage slaw",
      "1/2 cup sour cream",
      "1 lime",
      "1 tablespoon oil"
    ],
    instructions: [
      "Season shrimp with taco seasoning.",
      "Cook in oil until pink and opaque.",
      "Mix sour cream with lime juice.",
      "Fill tortillas with shrimp and slaw.",
      "Drizzle with lime sauce."
    ]
  },

  {
    id: "pack002-160",
    title: "Honey Glazed Salmon",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    emoji: "🐟",
    description: "Salmon glazed with honey, soy sauce, and garlic.",
    ingredients: [
      "4 salmon fillets",
      "1/4 cup honey",
      "3 tablespoons soy sauce",
      "3 cloves garlic",
      "1 tablespoon lemon juice",
      "1 tablespoon olive oil"
    ],
    instructions: [
      "Whisk honey, soy sauce, garlic, and lemon juice.",
      "Sear salmon in olive oil.",
      "Pour in the glaze.",
      "Cook until salmon flakes easily.",
      "Spoon glaze over the salmon."
    ]
  },

  {
    id: "pack002-161",
    title: "Creamy Tomato Pasta",
    category: "Dinner",
    cuisine: "Italian",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    rating: 4.7,
    emoji: "🍝",
    description: "Pasta tossed in a creamy tomato and Parmesan sauce.",
    ingredients: [
      "12 ounces pasta",
      "2 tablespoons butter",
      "3 cloves garlic",
      "1 can tomato sauce",
      "1 cup heavy cream",
      "1 cup Parmesan",
      "1 teaspoon Italian seasoning"
    ],
    instructions: [
      "Cook the pasta.",
      "Cook garlic in butter.",
      "Add tomato sauce and seasoning.",
      "Stir in cream and Parmesan.",
      "Toss with pasta."
    ]
  },

  {
    id: "pack002-162",
    title: "Pesto Chicken Pasta",
    category: "Dinner",
    cuisine: "Italian",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 20,
    servings: 4,
    rating: 4.8,
    emoji: "🍝",
    description: "Pasta with chicken, pesto, tomatoes, and Parmesan.",
    ingredients: [
      "12 ounces pasta",
      "2 chicken breasts, sliced",
      "3/4 cup pesto",
      "1 cup cherry tomatoes",
      "1/2 cup Parmesan",
      "2 tablespoons olive oil"
    ],
    instructions: [
      "Cook the pasta.",
      "Cook chicken in olive oil.",
      "Add tomatoes and cook briefly.",
      "Stir in pesto and pasta.",
      "Top with Parmesan."
    ]
  },

  {
    id: "pack002-163",
    title: "Garlic Butter Pasta",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 15,
    servings: 4,
    rating: 4.6,
    emoji: "🍝",
    description: "Simple pasta tossed with garlic butter and Parmesan.",
    ingredients: [
      "12 ounces spaghetti",
      "6 tablespoons butter",
      "5 cloves garlic",
      "1/2 cup Parmesan",
      "2 tablespoons parsley",
      "Salt and pepper"
    ],
    instructions: [
      "Cook the spaghetti.",
      "Melt butter and cook garlic briefly.",
      "Add the pasta with a splash of pasta water.",
      "Stir in Parmesan.",
      "Top with parsley."
    ]
  },

  {
    id: "pack002-164",
    title: "Cheesy Taco Pasta",
    category: "Dinner",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    servings: 6,
    rating: 4.8,
    emoji: "🍝",
    description: "Ground beef, pasta, taco seasoning, and melted cheese.",
    ingredients: [
      "12 ounces pasta",
      "1 pound ground beef",
      "2 tablespoons taco seasoning",
      "1 cup salsa",
      "1 cup tomato sauce",
      "2 cups shredded cheddar",
      "1 cup water"
    ],
    instructions: [
      "Brown the beef.",
      "Add taco seasoning, salsa, tomato sauce, and water.",
      "Stir in uncooked pasta.",
      "Cover and simmer until tender.",
      "Stir in cheese."
    ]
  },

  {
    id: "pack002-165",
    title: "Tomato Basil Soup",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 30,
    servings: 6,
    rating: 4.7,
    emoji: "🍅",
    description: "Smooth tomato soup with garlic, cream, and fresh basil.",
    ingredients: [
      "2 cans crushed tomatoes",
      "1 onion, diced",
      "3 cloves garlic",
      "3 cups vegetable broth",
      "1 cup heavy cream",
      "1/2 cup fresh basil",
      "2 tablespoons butter"
    ],
    instructions: [
      "Cook onion and garlic in butter.",
      "Add tomatoes and broth.",
      "Simmer for 20 minutes.",
      "Blend until smooth.",
      "Stir in cream and basil."
    ]
  },

  {
    id: "pack002-166",
    title: "Cheesy Potato Casserole",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 50,
    servings: 8,
    rating: 4.8,
    emoji: "🥔",
    description: "Creamy potatoes baked with cheese and a crispy topping.",
    ingredients: [
      "32 ounces frozen diced potatoes",
      "1 can cream of chicken soup",
      "1 cup sour cream",
      "2 cups shredded cheddar",
      "1/2 cup melted butter",
      "1 cup crushed cornflakes"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Mix potatoes, soup, sour cream, cheese, and half the butter.",
      "Spread in a baking dish.",
      "Mix cornflakes with remaining butter.",
      "Top and bake for 45 to 50 minutes."
    ]
  },

  {
    id: "pack002-167",
    title: "Broccoli Chicken Bake",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 35,
    servings: 6,
    rating: 4.7,
    emoji: "🥦",
    description: "Chicken, broccoli, rice, and cheese baked together.",
    ingredients: [
      "3 cups cooked chicken",
      "3 cups cooked rice",
      "3 cups broccoli florets",
      "1 can cream of chicken soup",
      "1 cup milk",
      "2 cups shredded cheddar"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Mix chicken, rice, broccoli, soup, milk, and half the cheese.",
      "Spread into a baking dish.",
      "Top with remaining cheese.",
      "Bake for 30 to 35 minutes."
    ]
  },

  {
    id: "pack002-168",
    title: "BBQ Meatballs",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    servings: 6,
    rating: 4.7,
    emoji: "🍖",
    description: "Tender meatballs simmered in a sweet barbecue sauce.",
    ingredients: [
      "24 cooked meatballs",
      "1 cup barbecue sauce",
      "1/2 cup grape jelly",
      "1 tablespoon Worcestershire sauce",
      "1 teaspoon garlic powder"
    ],
    instructions: [
      "Combine barbecue sauce, jelly, Worcestershire sauce, and garlic powder.",
      "Add meatballs.",
      "Simmer for 20 to 25 minutes.",
      "Stir occasionally.",
      "Serve warm."
    ]
  },

  {
    id: "pack002-169",
    title: "Chicken Marsala",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    rating: 4.8,
    emoji: "🍗",
    description: "Chicken cutlets with mushrooms in a savory Marsala sauce.",
    ingredients: [
      "4 chicken cutlets",
      "1/2 cup flour",
      "8 ounces mushrooms",
      "3/4 cup chicken broth",
      "3/4 cup Marsala cooking wine",
      "3 tablespoons butter",
      "Salt and pepper"
    ],
    instructions: [
      "Season and coat chicken lightly in flour.",
      "Brown chicken in butter and remove.",
      "Cook mushrooms.",
      "Add broth and Marsala cooking wine.",
      "Return chicken and simmer until safely cooked."
    ]
  },

  {
    id: "pack002-170",
    title: "Chicken Piccata",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    rating: 4.8,
    emoji: "🍋",
    description: "Chicken cutlets in a bright lemon butter caper sauce.",
    ingredients: [
      "4 chicken cutlets",
      "1/2 cup flour",
      "3 tablespoons butter",
      "1 cup chicken broth",
      "1 lemon",
      "2 tablespoons capers",
      "Salt and pepper"
    ],
    instructions: [
      "Season and flour the chicken.",
      "Brown in butter and remove.",
      "Add broth, lemon juice, and capers.",
      "Simmer until slightly reduced.",
      "Return chicken and cook through."
    ]
  },

  {
    id: "pack002-171",
    title: "Beef Vegetable Soup",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 60,
    servings: 8,
    rating: 4.7,
    emoji: "🥣",
    description: "A hearty soup with beef, potatoes, vegetables, and broth.",
    ingredients: [
      "1 1/2 pounds stew beef",
      "6 cups beef broth",
      "3 potatoes, diced",
      "3 carrots, sliced",
      "2 celery stalks",
      "1 can diced tomatoes",
      "2 tablespoons oil"
    ],
    instructions: [
      "Brown the beef in oil.",
      "Add broth and tomatoes.",
      "Simmer for 30 minutes.",
      "Add potatoes, carrots, and celery.",
      "Cook until beef and vegetables are tender."
    ]
  },

  {
    id: "pack002-172",
    title: "Creamy Beef and Shells",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    servings: 6,
    rating: 4.8,
    emoji: "🍝",
    description: "Pasta shells with ground beef in a creamy tomato cheese sauce.",
    ingredients: [
      "12 ounces pasta shells",
      "1 pound ground beef",
      "1 cup tomato sauce",
      "1 cup heavy cream",
      "1 1/2 cups shredded cheddar",
      "2 cloves garlic",
      "1 teaspoon Italian seasoning"
    ],
    instructions: [
      "Cook the pasta.",
      "Brown beef with garlic.",
      "Add tomato sauce and seasoning.",
      "Stir in cream and cheese.",
      "Combine with pasta."
    ]
  },

  {
    id: "pack002-173",
    title: "Chicken Broccoli Alfredo",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 25,
    servings: 6,
    rating: 4.8,
    emoji: "🥦",
    description: "Chicken, broccoli, and pasta in creamy Alfredo sauce.",
    ingredients: [
      "12 ounces fettuccine",
      "2 chicken breasts",
      "3 cups broccoli",
      "2 tablespoons butter",
      "2 cups heavy cream",
      "1 1/2 cups Parmesan",
      "3 cloves garlic"
    ],
    instructions: [
      "Cook pasta and broccoli.",
      "Cook sliced chicken until safe.",
      "Cook garlic in butter.",
      "Add cream and Parmesan.",
      "Combine pasta, broccoli, chicken, and sauce."
    ]
  },

  {
    id: "pack002-174",
    title: "Baked Ravioli Casserole",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 35,
    servings: 6,
    rating: 4.7,
    emoji: "🍝",
    description: "Cheese ravioli baked with marinara and mozzarella.",
    ingredients: [
      "25 ounces frozen cheese ravioli",
      "24 ounces marinara sauce",
      "2 1/2 cups shredded mozzarella",
      "1/2 cup Parmesan",
      "1 teaspoon Italian seasoning"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Spread sauce in a baking dish.",
      "Layer ravioli, sauce, mozzarella, and Parmesan.",
      "Repeat the layers.",
      "Bake covered for 25 minutes and uncovered for 10 minutes."
    ]
  },

  {
    id: "pack002-175",
    title: "Chicken Taco Casserole",
    category: "Dinner",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 30,
    servings: 8,
    rating: 4.7,
    emoji: "🌮",
    description: "Chicken, beans, corn, tortillas, salsa, and cheese baked together.",
    ingredients: [
      "3 cups shredded chicken",
      "1 can black beans",
      "1 cup corn",
      "1 cup salsa",
      "8 tortillas, cut into pieces",
      "2 cups shredded cheese",
      "1 tablespoon taco seasoning"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Mix chicken, beans, corn, salsa, and seasoning.",
      "Layer tortillas, chicken mixture, and cheese.",
      "Repeat the layers.",
      "Bake for 25 to 30 minutes."
    ]
  },

  {
    id: "pack002-176",
    title: "Ground Beef Stuffed Shells",
    category: "Dinner",
    cuisine: "Italian-American",
    difficulty: "Medium",
    prepTime: 25,
    cookTime: 35,
    servings: 6,
    rating: 4.8,
    emoji: "🍝",
    description: "Jumbo pasta shells filled with beef, ricotta, and cheese.",
    ingredients: [
      "20 jumbo pasta shells",
      "1 pound ground beef",
      "15 ounces ricotta",
      "2 cups mozzarella",
      "24 ounces marinara sauce",
      "1/2 cup Parmesan"
    ],
    instructions: [
      "Cook shells until slightly firm.",
      "Brown the beef.",
      "Mix beef, ricotta, half the mozzarella, and Parmesan.",
      "Fill shells and place over marinara.",
      "Top with sauce and cheese and bake for 30 minutes."
    ]
  },

  {
    id: "pack002-177",
    title: "Smothered Pork Chops",
    category: "Dinner",
    cuisine: "Southern",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    rating: 4.8,
    emoji: "🍖",
    description: "Pork chops simmered in rich onion gravy.",
    ingredients: [
      "4 pork chops",
      "1 onion, sliced",
      "1/2 cup flour",
      "2 cups chicken broth",
      "1/2 cup milk",
      "2 tablespoons oil",
      "Salt and pepper"
    ],
    instructions: [
      "Season and lightly flour the pork chops.",
      "Brown them in oil and remove.",
      "Cook the onion.",
      "Add flour, broth, and milk.",
      "Return pork and simmer until safely cooked."
    ]
  },

  {
    id: "pack002-178",
    title: "Baked Honey Mustard Chicken",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    rating: 4.7,
    emoji: "🍯",
    description: "Chicken baked in a sweet and tangy honey mustard glaze.",
    ingredients: [
      "4 chicken breasts",
      "1/3 cup honey",
      "1/3 cup Dijon mustard",
      "2 tablespoons olive oil",
      "2 cloves garlic",
      "1 teaspoon paprika",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat the oven to 400°F.",
      "Whisk honey, mustard, oil, garlic, and paprika.",
      "Coat the chicken.",
      "Bake for 25 to 30 minutes.",
      "Check that chicken is safely cooked."
    ]
  },

  {
    id: "pack002-179",
    title: "One-Pot Cheeseburger Pasta",
    category: "Dinner",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    servings: 6,
    rating: 4.8,
    emoji: "🍔",
    description: "Ground beef and pasta cooked together with cheddar cheese.",
    ingredients: [
      "1 pound ground beef",
      "12 ounces pasta",
      "3 cups beef broth",
      "1 cup tomato sauce",
      "2 cups shredded cheddar",
      "1 teaspoon garlic powder",
      "Salt and pepper"
    ],
    instructions: [
      "Brown the ground beef.",
      "Add broth, tomato sauce, pasta, and garlic powder.",
      "Cover and simmer until pasta is tender.",
      "Stir occasionally.",
      "Stir in cheddar before serving."
    ]
  },

  {
    id: "pack002-180",
    title: "Chicken Cordon Bleu Casserole",
    category: "Dinner",
    cuisine: "French-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 35,
    servings: 8,
    rating: 4.8,
    emoji: "🍗",
    description: "Chicken, ham, Swiss cheese, and creamy sauce baked together.",
    ingredients: [
      "4 cups cooked chicken",
      "2 cups diced ham",
      "2 cups shredded Swiss cheese",
      "1 can cream of chicken soup",
      "1 cup milk",
      "2 cups breadcrumbs",
      "3 tablespoons melted butter"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Layer chicken, ham, and Swiss cheese.",
      "Mix soup and milk and pour over the casserole.",
      "Mix breadcrumbs with butter and add on top.",
      "Bake for 30 to 35 minutes."
    ]
  },

  /* =======================================================
     AIR FRYER AND SNACKS — 181–190
  ======================================================= */

  {
    id: "pack002-181",
    title: "Air Fryer Chicken Wings",
    category: "Air Fryer",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 24,
    servings: 4,
    rating: 4.8,
    emoji: "🍗",
    description: "Crispy chicken wings cooked quickly in the air fryer.",
    ingredients: [
      "2 pounds chicken wings",
      "1 tablespoon baking powder",
      "1 teaspoon garlic powder",
      "1 teaspoon paprika",
      "1 teaspoon salt",
      "1/2 teaspoon pepper"
    ],
    instructions: [
      "Pat the wings dry.",
      "Toss with baking powder and seasonings.",
      "Air fry at 400°F for 20 to 24 minutes.",
      "Shake or turn halfway.",
      "Toss with your favorite sauce."
    ]
  },

  {
    id: "pack002-182",
    title: "Air Fryer Potato Wedges",
    category: "Air Fryer",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 20,
    servings: 4,
    rating: 4.6,
    emoji: "🥔",
    description: "Seasoned potato wedges with crisp edges and soft centers.",
    ingredients: [
      "4 russet potatoes",
      "2 tablespoons olive oil",
      "1 teaspoon paprika",
      "1 teaspoon garlic powder",
      "1 teaspoon salt",
      "1/2 teaspoon pepper"
    ],
    instructions: [
      "Cut potatoes into wedges.",
      "Toss with oil and seasonings.",
      "Arrange in a single layer.",
      "Air fry at 400°F for 18 to 22 minutes.",
      "Shake halfway through."
    ]
  },

  {
    id: "pack002-183",
    title: "Air Fryer Pizza Rolls",
    category: "Air Fryer",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 8,
    servings: 4,
    rating: 4.5,
    emoji: "🍕",
    description: "Frozen pizza rolls cooked until crisp in the air fryer.",
    ingredients: [
      "20 frozen pizza rolls",
      "Cooking spray",
      "Marinara sauce for dipping"
    ],
    instructions: [
      "Preheat the air fryer to 380°F.",
      "Arrange pizza rolls in a single layer.",
      "Spray lightly if desired.",
      "Air fry for 6 to 8 minutes.",
      "Cool briefly before serving."
    ]
  },

  {
    id: "pack002-184",
    title: "Air Fryer Jalapeño Poppers",
    category: "Air Fryer",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 10,
    servings: 6,
    rating: 4.7,
    emoji: "🌶️",
    description: "Jalapeños filled with cream cheese, cheddar, and bacon.",
    ingredients: [
      "6 jalapeños",
      "8 ounces cream cheese",
      "1 cup shredded cheddar",
      "6 slices cooked bacon",
      "1/2 teaspoon garlic powder"
    ],
    instructions: [
      "Cut jalapeños in half and remove seeds.",
      "Mix cream cheese, cheddar, bacon, and garlic powder.",
      "Fill each jalapeño half.",
      "Air fry at 375°F for 8 to 10 minutes.",
      "Serve warm."
    ]
  },

  {
    id: "pack002-185",
    title: "Cheesy Garlic Bread",
    category: "Snack",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 12,
    servings: 6,
    rating: 4.8,
    emoji: "🥖",
    description: "Crisp bread topped with garlic butter and melted cheese.",
    ingredients: [
      "1 loaf French bread",
      "1/2 cup softened butter",
      "4 cloves garlic",
      "2 cups shredded mozzarella",
      "1/4 cup Parmesan",
      "2 tablespoons parsley"
    ],
    instructions: [
      "Preheat the oven to 400°F.",
      "Mix butter, garlic, and parsley.",
      "Spread over sliced bread.",
      "Top with mozzarella and Parmesan.",
      "Bake for 10 to 12 minutes."
    ]
  },

  {
    id: "pack002-186",
    title: "Mini Pizza Bites",
    category: "Snack",
    cuisine: "Italian-American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 12,
    servings: 6,
    rating: 4.7,
    emoji: "🍕",
    description: "Small pizza bites topped with sauce, cheese, and pepperoni.",
    ingredients: [
      "1 package refrigerated biscuit dough",
      "1/2 cup pizza sauce",
      "1 cup shredded mozzarella",
      "24 mini pepperoni slices",
      "1 teaspoon Italian seasoning"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Press biscuit dough into mini muffin cups.",
      "Add sauce, cheese, and pepperoni.",
      "Sprinkle with seasoning.",
      "Bake for 10 to 12 minutes."
    ]
  },

  {
    id: "pack002-187",
    title: "Pretzel Bites",
    category: "Snack",
    cuisine: "German-American",
    difficulty: "Medium",
    prepTime: 25,
    cookTime: 15,
    servings: 8,
    rating: 4.7,
    emoji: "🥨",
    description: "Soft bite-sized pretzels with a salty golden crust.",
    ingredients: [
      "1 pound pizza dough",
      "8 cups water",
      "1/3 cup baking soda",
      "1 large egg",
      "Coarse salt",
      "Cheese sauce for dipping"
    ],
    instructions: [
      "Preheat the oven to 425°F.",
      "Cut dough into bite-sized pieces.",
      "Boil water with baking soda.",
      "Boil dough pieces briefly and transfer to a baking sheet.",
      "Brush with egg, add salt, and bake for 12 to 15 minutes."
    ]
  },

  {
    id: "pack002-188",
    title: "Cheese Fries",
    category: "Snack",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 25,
    servings: 6,
    rating: 4.7,
    emoji: "🍟",
    description: "Crispy fries topped with cheddar, bacon, and green onions.",
    ingredients: [
      "32 ounces frozen fries",
      "2 cups shredded cheddar",
      "6 slices cooked bacon",
      "1/4 cup green onions",
      "1/2 cup ranch dressing"
    ],
    instructions: [
      "Bake fries according to package directions.",
      "Top with cheese and bacon.",
      "Return to the oven until cheese melts.",
      "Add green onions.",
      "Serve with ranch."
    ]
  },

  {
    id: "pack002-189",
    title: "Taco Dip",
    category: "Snack",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 0,
    servings: 10,
    rating: 4.8,
    emoji: "🌮",
    description: "Layered dip with cream cheese, salsa, cheese, and vegetables.",
    ingredients: [
      "8 ounces cream cheese",
      "1 cup sour cream",
      "2 tablespoons taco seasoning",
      "1 cup salsa",
      "2 cups shredded cheese",
      "1 tomato, diced",
      "1/4 cup sliced green onions"
    ],
    instructions: [
      "Mix cream cheese, sour cream, and taco seasoning.",
      "Spread in a serving dish.",
      "Top with salsa and cheese.",
      "Add tomato and green onions.",
      "Chill before serving."
    ]
  },

  {
    id: "pack002-190",
    title: "Chicken Taquitos",
    category: "Snack",
    cuisine: "Mexican-American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 18,
    servings: 6,
    rating: 4.8,
    emoji: "🌯",
    description: "Crispy rolled tortillas filled with chicken and cheese.",
    ingredients: [
      "3 cups shredded chicken",
      "1 cup shredded cheese",
      "4 ounces cream cheese",
      "1 teaspoon taco seasoning",
      "12 small tortillas",
      "Cooking spray"
    ],
    instructions: [
      "Preheat the oven to 425°F.",
      "Mix chicken, cheese, cream cheese, and seasoning.",
      "Fill and tightly roll tortillas.",
      "Place seam-side down and spray lightly.",
      "Bake for 15 to 18 minutes."
    ]
  },

  /* =======================================================
     DESSERTS — 191–200
  ======================================================= */

  {
    id: "pack002-191",
    title: "Peanut Butter Cookies",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 10,
    servings: 24,
    rating: 4.8,
    emoji: "🍪",
    description: "Soft peanut butter cookies with classic fork marks.",
    ingredients: [
      "1 cup peanut butter",
      "1/2 cup softened butter",
      "1 cup sugar",
      "1/2 cup brown sugar",
      "2 large eggs",
      "1 1/2 cups flour",
      "1 teaspoon baking soda"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Beat peanut butter, butter, and sugars.",
      "Add eggs.",
      "Mix in flour and baking soda.",
      "Shape, flatten with a fork, and bake for 9 to 10 minutes."
    ]
  },

  {
    id: "pack002-192",
    title: "Sugar Cookies",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 10,
    servings: 24,
    rating: 4.7,
    emoji: "🍪",
    description: "Soft buttery sugar cookies with crisp edges.",
    ingredients: [
      "2 3/4 cups flour",
      "1 teaspoon baking soda",
      "1/2 teaspoon baking powder",
      "1 cup softened butter",
      "1 1/2 cups sugar",
      "1 large egg",
      "1 teaspoon vanilla"
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Mix flour, baking soda, and baking powder.",
      "Beat butter and sugar.",
      "Add egg and vanilla, then dry ingredients.",
      "Shape into balls and bake for 8 to 10 minutes."
    ]
  },

  {
    id: "pack002-193",
    title: "Oatmeal Raisin Cookies",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    rating: 4.6,
    emoji: "🍪",
    description: "Chewy oatmeal cookies with raisins and cinnamon.",
    ingredients: [
      "1 cup softened butter",
      "1 cup brown sugar",
      "1/2 cup sugar",
      "2 large eggs",
      "1 1/2 cups flour",
      "3 cups rolled oats",
      "1 cup raisins",
      "1 teaspoon cinnamon"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Beat butter and sugars.",
      "Add eggs.",
      "Mix in flour, oats, raisins, and cinnamon.",
      "Bake spoonfuls for 10 to 12 minutes."
    ]
  },

  {
    id: "pack002-194",
    title: "Blondies",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 12,
    cookTime: 25,
    servings: 16,
    rating: 4.7,
    emoji: "🍰",
    description: "Chewy brown sugar dessert bars with vanilla and chocolate chips.",
    ingredients: [
      "1 cup melted butter",
      "2 cups brown sugar",
      "2 large eggs",
      "2 teaspoons vanilla",
      "2 cups flour",
      "1 teaspoon baking powder",
      "1 cup chocolate chips"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Mix butter and brown sugar.",
      "Add eggs and vanilla.",
      "Fold in flour, baking powder, and chocolate chips.",
      "Bake for 22 to 25 minutes."
    ]
  },

  {
    id: "pack002-195",
    title: "Strawberry Cheesecake",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 25,
    cookTime: 55,
    servings: 10,
    rating: 4.9,
    emoji: "🍓",
    description: "Creamy cheesecake topped with sweet strawberries.",
    ingredients: [
      "2 cups graham cracker crumbs",
      "1/2 cup melted butter",
      "24 ounces cream cheese",
      "1 cup sugar",
      "3 large eggs",
      "1 teaspoon vanilla",
      "2 cups strawberry topping"
    ],
    instructions: [
      "Preheat the oven to 325°F.",
      "Mix crumbs and butter and press into a pan.",
      "Beat cream cheese and sugar.",
      "Add eggs and vanilla.",
      "Bake for 50 to 55 minutes, cool, and top with strawberries."
    ]
  },

  {
    id: "pack002-196",
    title: "Lemon Bars",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 40,
    servings: 16,
    rating: 4.8,
    emoji: "🍋",
    description: "Bright lemon filling over a buttery shortbread crust.",
    ingredients: [
      "2 cups flour",
      "1 cup butter",
      "1/2 cup powdered sugar",
      "2 cups sugar",
      "4 large eggs",
      "1/3 cup lemon juice",
      "1 tablespoon lemon zest"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Mix 2 cups flour, butter, and powdered sugar.",
      "Press into a pan and bake for 18 minutes.",
      "Whisk sugar, eggs, lemon juice, zest, and 1/4 cup flour.",
      "Pour over crust and bake for 20 minutes."
    ]
  },

  {
    id: "pack002-197",
    title: "S'mores Bars",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 25,
    servings: 16,
    rating: 4.8,
    emoji: "🍫",
    description: "Graham cracker bars with chocolate and toasted marshmallows.",
    ingredients: [
      "2 cups graham cracker crumbs",
      "1/2 cup melted butter",
      "1/3 cup sugar",
      "2 cups chocolate chips",
      "3 cups mini marshmallows"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Mix crumbs, butter, and sugar.",
      "Press into a baking pan.",
      "Top with chocolate and marshmallows.",
      "Bake for 20 to 25 minutes."
    ]
  },

  {
    id: "pack002-198",
    title: "Red Velvet Cupcakes",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 20,
    servings: 12,
    rating: 4.8,
    emoji: "🧁",
    description: "Soft red velvet cupcakes with cream cheese frosting.",
    ingredients: [
      "1 1/2 cups flour",
      "1 cup sugar",
      "1 tablespoon cocoa powder",
      "1/2 cup vegetable oil",
      "1 cup buttermilk",
      "2 large eggs",
      "1 teaspoon vanilla",
      "Red food coloring"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Mix flour, sugar, and cocoa.",
      "Whisk oil, buttermilk, eggs, vanilla, and coloring.",
      "Combine the mixtures.",
      "Bake for 18 to 20 minutes and frost when cool."
    ]
  },

  {
    id: "pack002-199",
    title: "Carrot Cake",
    category: "Dessert",
    cuisine: "American",
    difficulty: "Medium",
    prepTime: 25,
    cookTime: 35,
    servings: 12,
    rating: 4.9,
    emoji: "🥕",
    description: "Moist spiced carrot cake with cream cheese frosting.",
    ingredients: [
      "2 cups flour",
      "2 cups sugar",
      "2 teaspoons cinnamon",
      "1 teaspoon baking soda",
      "4 large eggs",
      "1 cup vegetable oil",
      "3 cups shredded carrots",
      "1 cup chopped pecans"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Mix flour, sugar, cinnamon, and baking soda.",
      "Whisk eggs and oil.",
      "Combine and fold in carrots and pecans.",
      "Bake for 30 to 35 minutes and frost when cool."
    ]
  },

  {
    id: "pack002-200",
    title: "Chocolate Mousse",
    category: "Dessert",
    cuisine: "French",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 5,
    servings: 6,
    rating: 4.9,
    emoji: "🍫",
    description: "Rich and airy chocolate mousse served chilled.",
    ingredients: [
      "8 ounces dark chocolate",
      "3 tablespoons butter",
      "3 large eggs, separated",
      "1/4 cup sugar",
      "1 cup heavy cream",
      "1 teaspoon vanilla"
    ],
    instructions: [
      "Melt chocolate and butter together.",
      "Whisk egg yolks into the cooled chocolate.",
      "Beat egg whites with sugar until stiff.",
      "Whip cream with vanilla.",
      "Fold everything together gently and chill for 3 hours."
    ]
  }

];

/* Add this pack to the complete Recipe Buddy collection. */

window.RECIPE_PACKS.push(recipePack002);

window.recipes =
  window.RECIPE_PACKS.flat();

console.log(
  recipePack002.length +
  " recipes loaded from Recipe Pack 002."
);