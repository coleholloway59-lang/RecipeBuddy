const recipeNames = [
    // Breakfast — 25
    ["Fluffy Buttermilk Pancakes", "Breakfast"],
    ["Blueberry Pancakes", "Breakfast"],
    ["Chocolate Chip Pancakes", "Breakfast"],
    ["Cinnamon French Toast", "Breakfast"],
    ["Strawberry French Toast", "Breakfast"],
    ["Breakfast Burritos", "Breakfast"],
    ["Sausage Egg Biscuits", "Breakfast"],
    ["Bacon Egg Sandwiches", "Breakfast"],
    ["Cheesy Scrambled Eggs", "Breakfast"],
    ["Breakfast Quesadillas", "Breakfast"],
    ["Hash Brown Casserole", "Breakfast"],
    ["Banana Oatmeal", "Breakfast"],
    ["Strawberry Yogurt Parfait", "Breakfast"],
    ["Breakfast Pizza", "Breakfast"],
    ["Avocado Egg Toast", "Breakfast"],
    ["Biscuits and Gravy", "Breakfast"],
    ["Belgian Waffles", "Breakfast"],
    ["Breakfast Tacos", "Breakfast"],
    ["Ham and Cheese Omelet", "Breakfast"],
    ["Breakfast Sliders", "Breakfast"],
    ["Cinnamon Roll Casserole", "Breakfast"],
    ["Blueberry Muffins", "Breakfast"],
    ["Banana Nut Muffins", "Breakfast"],
    ["Breakfast Potato Skillet", "Breakfast"],
    ["Peanut Butter Banana Toast", "Breakfast"],

    // Lunch — 25
    ["Classic Grilled Cheese", "Lunch"],
    ["Turkey Club Sandwich", "Lunch"],
    ["Chicken Caesar Wrap", "Lunch"],
    ["Tuna Salad Sandwich", "Lunch"],
    ["BLT Sandwich", "Lunch"],
    ["Ham and Cheese Sliders", "Lunch"],
    ["Chicken Salad Croissant", "Lunch"],
    ["Buffalo Chicken Wrap", "Lunch"],
    ["Italian Sub Sandwich", "Lunch"],
    ["Philly Cheesesteak", "Lunch"],
    ["Chicken Pesto Panini", "Lunch"],
    ["BBQ Chicken Sandwich", "Lunch"],
    ["Egg Salad Sandwich", "Lunch"],
    ["Meatball Sub", "Lunch"],
    ["Cheeseburger Wrap", "Lunch"],
    ["Chicken Bacon Ranch Wrap", "Lunch"],
    ["Turkey Avocado Wrap", "Lunch"],
    ["Crispy Chicken Sandwich", "Lunch"],
    ["Chicken Parmesan Sandwich", "Lunch"],
    ["French Dip Sandwich", "Lunch"],
    ["Pulled Pork Sandwich", "Lunch"],
    ["Chicken Taco Salad", "Lunch"],
    ["Caesar Salad", "Lunch"],
    ["Loaded Baked Potato", "Lunch"],
    ["Macaroni Salad", "Lunch"],

    // Dinner — 75
    ["Chicken Alfredo", "Dinner"],
    ["Garlic Butter Chicken", "Dinner"],
    ["Honey Garlic Chicken", "Dinner"],
    ["Creamy Parmesan Chicken", "Dinner"],
    ["Lemon Herb Chicken", "Dinner"],
    ["Cajun Chicken", "Dinner"],
    ["Teriyaki Chicken", "Dinner"],
    ["BBQ Chicken", "Dinner"],
    ["Tuscan Chicken", "Dinner"],
    ["Chicken Parmesan", "Dinner"],
    ["Baked Chicken Thighs", "Dinner"],
    ["Chicken and Rice", "Dinner"],
    ["Chicken Fajitas", "Dinner"],
    ["Chicken Enchiladas", "Dinner"],
    ["Chicken Fried Rice", "Dinner"],
    ["Orange Chicken", "Dinner"],
    ["Sesame Chicken", "Dinner"],
    ["Chicken Pot Pie", "Dinner"],
    ["Chicken and Dumplings", "Dinner"],
    ["Chicken Noodle Soup", "Dinner"],
    ["Garlic Herb Steak", "Date Night"],
    ["Steak Fajitas", "Dinner"],
    ["Steak and Potatoes", "Date Night"],
    ["Pepper Steak", "Dinner"],
    ["Beef Stroganoff", "Dinner"],
    ["Beef and Broccoli", "Dinner"],
    ["Beef Fried Rice", "Dinner"],
    ["Beef Tacos", "Dinner"],
    ["Beef Enchiladas", "Dinner"],
    ["Beef Burrito Bowls", "Dinner"],
    ["Cheeseburgers", "Dinner"],
    ["Homemade Meatloaf", "Dinner"],
    ["Pot Roast", "Dinner"],
    ["Beef Vegetable Soup", "Dinner"],
    ["Sloppy Joes", "Dinner"],
    ["Pork Chops", "Dinner"],
    ["Honey Garlic Pork Chops", "Dinner"],
    ["BBQ Pulled Pork", "Dinner"],
    ["Pork Tenderloin", "Dinner"],
    ["Sausage and Peppers", "Dinner"],
    ["Sausage Potato Skillet", "Dinner"],
    ["Shrimp Alfredo", "Date Night"],
    ["Garlic Butter Shrimp", "Date Night"],
    ["Cajun Shrimp Pasta", "Date Night"],
    ["Shrimp Fried Rice", "Dinner"],
    ["Shrimp Tacos", "Dinner"],
    ["Lemon Garlic Salmon", "Date Night"],
    ["Honey Glazed Salmon", "Dinner"],
    ["Baked Salmon", "Dinner"],
    ["Fish Tacos", "Dinner"],
    ["Spaghetti and Meat Sauce", "Dinner"],
    ["Baked Ziti", "Dinner"],
    ["Lasagna", "Dinner"],
    ["Homemade Pizza", "Dinner"],
    ["Pepperoni Pizza", "Dinner"],
    ["Chicken Bacon Ranch Pizza", "Dinner"],
    ["Baked Mac and Cheese", "Dinner"],
    ["Cheesy Taco Pasta", "Dinner"],
    ["Chicken Bacon Ranch Pasta", "Dinner"],
    ["Creamy Tomato Pasta", "Dinner"],
    ["Pesto Chicken Pasta", "Dinner"],
    ["Garlic Butter Pasta", "Dinner"],
    ["Loaded Potato Soup", "Dinner"],
    ["Broccoli Cheddar Soup", "Dinner"],
    ["Tomato Basil Soup", "Dinner"],
    ["White Chicken Chili", "Dinner"],
    ["Chicken Tortilla Soup", "Dinner"],
    ["Tater Tot Casserole", "Dinner"],
    ["Chicken Rice Casserole", "Dinner"],
    ["Cheesy Potato Casserole", "Dinner"],
    ["Broccoli Chicken Bake", "Dinner"],
    ["Stuffed Bell Peppers", "Dinner"],
    ["Swedish Meatballs", "Dinner"],
    ["BBQ Meatballs", "Dinner"],
    ["Homemade Chili", "Dinner"],

    // Snacks — 25
    ["Buffalo Chicken Dip", "Snack"],
    ["Spinach Artichoke Dip", "Snack"],
    ["Loaded Potato Skins", "Snack"],
    ["Mozzarella Sticks", "Snack"],
    ["Jalapeño Poppers", "Snack"],
    ["Cheesy Garlic Bread", "Snack"],
    ["Mini Pizza Bites", "Snack"],
    ["Pretzel Bites", "Snack"],
    ["Chicken Quesadillas", "Snack"],
    ["Nachos Supreme", "Snack"],
    ["Cheese Fries", "Snack"],
    ["Buffalo Chicken Sliders", "Snack"],
    ["Ham and Cheese Pinwheels", "Snack"],
    ["Sausage Balls", "Snack"],
    ["Pizza Rolls", "Snack"],
    ["Chicken Wings", "Snack"],
    ["BBQ Wings", "Snack"],
    ["Garlic Parmesan Wings", "Snack"],
    ["Onion Rings", "Snack"],
    ["Fried Pickles", "Snack"],
    ["Cheese Dip", "Snack"],
    ["Taco Dip", "Snack"],
    ["Chicken Taquitos", "Snack"],
    ["Soft Pretzels", "Snack"],
    ["Mac and Cheese Bites", "Snack"],

    // Desserts — 40
    ["Chocolate Chip Cookies", "Dessert"],
    ["Peanut Butter Cookies", "Dessert"],
    ["Sugar Cookies", "Dessert"],
    ["Oatmeal Raisin Cookies", "Dessert"],
    ["Double Chocolate Cookies", "Dessert"],
    ["Fudgy Brownies", "Dessert"],
    ["Blondies", "Dessert"],
    ["Banana Pudding", "Dessert"],
    ["Strawberry Shortcake", "Dessert"],
    ["No-Bake Cheesecake", "Dessert"],
    ["Strawberry Cheesecake", "Dessert"],
    ["Chocolate Cheesecake", "Dessert"],
    ["Apple Crisp", "Dessert"],
    ["Peach Cobbler", "Dessert"],
    ["Chocolate Pudding Pie", "Dessert"],
    ["Lemon Bars", "Dessert"],
    ["Cinnamon Roll Cake", "Dessert"],
    ["Rice Krispie Treats", "Dessert"],
    ["Chocolate Lava Cakes", "Dessert"],
    ["Bread Pudding", "Dessert"],
    ["Pumpkin Pie Bars", "Dessert"],
    ["S'mores Bars", "Dessert"],
    ["Cookies and Cream Trifle", "Dessert"],
    ["Chocolate Cupcakes", "Dessert"],
    ["Vanilla Cupcakes", "Dessert"],
    ["Strawberry Cupcakes", "Dessert"],
    ["Red Velvet Cupcakes", "Dessert"],
    ["Chocolate Cake", "Dessert"],
    ["Vanilla Cake", "Dessert"],
    ["Strawberry Cake", "Dessert"],
    ["Carrot Cake", "Dessert"],
    ["Banana Bread", "Dessert"],
    ["Chocolate Banana Bread", "Dessert"],
    ["Cinnamon Apple Bread", "Dessert"],
    ["Blueberry Cobbler", "Dessert"],
    ["Chocolate Mousse", "Dessert"],
    ["Strawberry Mousse", "Dessert"],
    ["Peanut Butter Pie", "Dessert"],
    ["Oreo Pie", "Dessert"],
    ["Chocolate Peanut Butter Bars", "Dessert"],

    // Drinks — 10
    ["Strawberry Lemonade", "Drink"],
    ["Peach Iced Tea", "Drink"],
    ["Vanilla Milkshake", "Drink"],
    ["Chocolate Milkshake", "Drink"],
    ["Strawberry Milkshake", "Drink"],
    ["Mango Smoothie", "Drink"],
    ["Berry Smoothie", "Drink"],
    ["Peanut Butter Banana Smoothie", "Drink"],
    ["Homemade Hot Chocolate", "Drink"],
    ["Caramel Iced Coffee", "Drink"]
];


/* ========================================
   INGREDIENT TEMPLATES
======================================== */

const ingredientTemplates = {

    Breakfast: [
        "2 cups flour or breakfast base",
        "2 eggs",
        "1 cup milk",
        "2 tablespoons butter",
        "2 tablespoons sugar",
        "1 teaspoon vanilla",
        "Salt to taste"
    ],

    Lunch: [
        "4 servings of bread, wraps, or lettuce",
        "2 cups cooked meat or filling",
        "1 cup shredded cheese",
        "1 tomato, sliced",
        "1 cup lettuce",
        "1/3 cup sauce or dressing",
        "Salt and pepper"
    ],

    Dinner: [
        "1 1/2 pounds main protein",
        "2 tablespoons olive oil",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "2 cups vegetables",
        "1 cup sauce or broth",
        "Salt and black pepper"
    ],

    "Date Night": [
        "2 portions main protein",
        "2 tablespoons butter",
        "3 cloves garlic",
        "1 cup cream, sauce, or broth",
        "1/2 cup Parmesan cheese",
        "Fresh herbs",
        "Salt and black pepper"
    ],

    Snack: [
        "2 cups main filling",
        "1 cup shredded cheese",
        "1 package bread, tortillas, or dough",
        "1/2 cup dipping sauce",
        "Seasoning to taste"
    ],

    Dessert: [
        "2 cups flour or dessert base",
        "1 cup sugar",
        "1/2 cup butter",
        "2 eggs",
        "1 teaspoon vanilla",
        "1 teaspoon baking powder",
        "Chocolate, fruit, or topping"
    ],

    Drink: [
        "2 cups main fruit, coffee, or milk",
        "1 cup water or milk",
        "1/4 cup sugar or sweetener",
        "1 cup ice",
        "Optional whipped cream or garnish"
    ]
};


/* ========================================
   INSTRUCTION TEMPLATES
======================================== */

const instructionTemplates = {

    Breakfast: [
        "Gather and measure all ingredients.",
        "Mix the wet ingredients in one bowl.",
        "Mix the dry ingredients in another bowl.",
        "Combine the mixtures without overmixing.",
        "Cook in a skillet, oven, or waffle maker until golden.",
        "Serve warm with your favorite toppings."
    ],

    Lunch: [
        "Prepare the bread, wrap, or salad base.",
        "Cook or warm the meat and filling ingredients.",
        "Add cheese, vegetables, and sauce.",
        "Assemble the meal carefully.",
        "Toast or warm it if desired.",
        "Serve immediately."
    ],

    Dinner: [
        "Prepare and measure all ingredients.",
        "Season the main protein with salt and pepper.",
        "Heat oil in a large skillet or pot.",
        "Cook the protein until safely cooked through.",
        "Add the vegetables, garlic, sauce, or broth.",
        "Simmer until everything is tender and flavorful.",
        "Taste and adjust seasoning before serving."
    ],

    "Date Night": [
        "Prepare all ingredients before cooking.",
        "Season the protein generously.",
        "Heat butter or oil in a skillet.",
        "Cook the protein until browned and safely cooked.",
        "Prepare the sauce in the same skillet.",
        "Return the protein to the sauce.",
        "Serve with pasta, potatoes, rice, or vegetables."
    ],

    Snack: [
        "Preheat the oven or skillet if needed.",
        "Prepare the filling and toppings.",
        "Assemble the snack.",
        "Bake or cook until crisp and melted.",
        "Serve warm with dipping sauce."
    ],

    Dessert: [
        "Preheat the oven to 350°F if baking.",
        "Mix the butter, sugar, eggs, and vanilla.",
        "Add the flour and remaining dry ingredients.",
        "Fold in chocolate, fruit, or toppings.",
        "Transfer to the proper baking pan.",
        "Bake until set and lightly golden.",
        "Cool before serving."
    ],

    Drink: [
        "Add all ingredients to a blender, pitcher, or cup.",
        "Blend or stir until smooth.",
        "Taste and adjust sweetness.",
        "Pour over ice if desired.",
        "Add garnish and serve."
    ]
};


/* ========================================
   CREATE THE 200 RECIPES
======================================== */

const recipes = recipeNames.map(function (recipe, index) {

    const name = recipe[0];
    const category = recipe[1];

    const difficulties = [
        "Easy",
        "Easy",
        "Medium",
        "Medium",
        "Hard"
    ];

    const prepMinutes =
        10 + ((index % 4) * 5);

    const cookMinutes =
        category === "Drink"
            ? 0
            : 15 + ((index % 5) * 5);

    return {
        id: index + 1,

        name: name,

        category: category,

        difficulty:
            difficulties[index % difficulties.length],

        servings:
            category === "Date Night"
                ? 2
                : 4,

        prepTime:
            prepMinutes + " minutes",

        cookTime:
            cookMinutes + " minutes",

        time:
            (prepMinutes + cookMinutes) +
            " minutes",

        source: "Built In",

        image: "food.jpg",

        ingredients:
            ingredientTemplates[category] ||
            ingredientTemplates.Dinner,

        instructions:
            instructionTemplates[category] ||
            instructionTemplates.Dinner,

        notes:
            "Adjust seasonings, cooking time, and ingredients to your preference."
    };

});


console.log(
    recipes.length + " recipes loaded."
);