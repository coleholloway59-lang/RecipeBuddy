/* =========================================================
   RECIPE BUDDY 3.0
   COMPLETE APP.JS
========================================================= */

"use strict";

/* =========================================================
   STORAGE
========================================================= */

const STORAGE = {
  favorites: "recipeBuddyFavorites",
  pantry: "recipeBuddyPantry",
  groceries: "recipeBuddyGroceries",
  profile: "recipeBuddyProfile",
  notes: "recipeBuddyNotes",
  ratings: "recipeBuddyRatings",
  mealPlan: "recipeBuddyMealPlan",
  settings: "recipeBuddySettings",
  customRecipes: "recipeBuddyCustomRecipes"
};

const DEFAULT_PROFILE = {
  name: "Cole",
  servings: 4,
  measurement: "us",
  spiceLevel: "Medium",
  allergies: [],
  diets: ["High Protein"],
  dislikedFoods: [],
  automaticAdjustments: true
};

const DEFAULT_SETTINGS = {
  darkMode: false,
  timerNotifications: true,
  dailyRecipe: true
};

function cloneValue(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadData(key, fallback) {
  try {
    const saved = localStorage.getItem(key);

    if (!saved) {
      return cloneValue(fallback);
    }

    return JSON.parse(saved);
  } catch (error) {
    console.error("Could not load saved data:", error);
    return cloneValue(fallback);
  }
}

function saveData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Could not save app data:", error);
  }
}

const app = {
  favorites: loadData(STORAGE.favorites, []),
  pantry: loadData(STORAGE.pantry, []),
  groceries: loadData(STORAGE.groceries, []),
  profile: loadData(STORAGE.profile, DEFAULT_PROFILE),
  notes: loadData(STORAGE.notes, {}),
  ratings: loadData(STORAGE.ratings, {}),
  mealPlan: loadData(STORAGE.mealPlan, {}),
  settings: loadData(STORAGE.settings, DEFAULT_SETTINGS),
  customRecipes: loadData(STORAGE.customRecipes, []),
  timers: [],
  cameraStream: null
};

/* =========================================================
   BASIC HELPERS
========================================================= */

function getElement(id) {
  return document.getElementById(id);
}

function createId(prefix) {
  return (
    prefix +
    "-" +
    Date.now() +
    "-" +
    Math.random().toString(36).slice(2, 8)
  );
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function showToast(message, type = "success") {
  const container = getElement("toastContainer");

  if (!container) {
    return;
  }

  const toast = document.createElement("div");

  toast.className = type === "error" ? "toast error" : "toast";
  toast.textContent = message;

  container.appendChild(toast);

  window.setTimeout(function () {
    toast.remove();
  }, 3000);
}

function openModal(id) {
  const modal = getElement(id);

  if (!modal) {
    return;
  }

  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal(id) {
  const modal = getElement(id);

  if (!modal) {
    return;
  }

  modal.hidden = true;

  if (!document.querySelector(".modal:not([hidden])")) {
    document.body.classList.remove("modal-open");
  }

  if (id === "barcodeScannerModal") {
    stopScanner();
  }
}

function formatDate(dateValue) {
  if (!dateValue) {
    return "No expiration date";
  }

  const date = new Date(dateValue + "T12:00:00");

  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  return date.toLocaleDateString();
}

function daysUntil(dateValue) {
  if (!dateValue) {
    return Infinity;
  }

  const expiration = new Date(dateValue + "T12:00:00");
  const today = new Date();

  today.setHours(12, 0, 0, 0);

  return Math.ceil((expiration - today) / 86400000);
}

/* =========================================================
   RECIPE DATA
========================================================= */

function getRecipeSource() {
  if (Array.isArray(window.recipes)) {
    return window.recipes;
  }

  if (Array.isArray(window.RECIPES)) {
    return window.RECIPES;
  }

  if (Array.isArray(window.recipeData)) {
    return window.recipeData;
  }

  return [];
}

function categoryEmoji(category) {
  const emojis = {
    Breakfast: "🍳",
    Lunch: "🥪",
    Dinner: "🍽️",
    Chicken: "🍗",
    Beef: "🥩",
    Pork: "🍖",
    Pasta: "🍝",
    Healthy: "🥗",
    Dessert: "🍰",
    "Air Fryer": "♨️",
    "Slow Cooker": "🍲",
    Seafood: "🦐",
    Vegetarian: "🥦",
    Drinks: "🥤",
    Snacks: "🍿"
  };

  return emojis[category] || "🍲";
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeRecipe(recipe, index, prefix) {
  const title =
    recipe.title ||
    recipe.name ||
    recipe.recipeName ||
    "Recipe " + (index + 1);

  let ingredients = [];

  if (Array.isArray(recipe.ingredients)) {
    ingredients = recipe.ingredients;
  } else if (Array.isArray(recipe.ingredientList)) {
    ingredients = recipe.ingredientList;
  }

  let instructions = [];

  if (Array.isArray(recipe.instructions)) {
    instructions = recipe.instructions;
  } else if (Array.isArray(recipe.steps)) {
    instructions = recipe.steps;
  } else if (typeof recipe.instructions === "string") {
    instructions = recipe.instructions
      .split(/\n+/)
      .map(function (step) {
        return step.trim();
      })
      .filter(Boolean);
  }

  const category =
    recipe.category ||
    recipe.type ||
    recipe.mealType ||
    "Dinner";

  const totalTime =
    Number(recipe.totalTime) ||
    Number(recipe.time) ||
    Number(recipe.cookTime) ||
    Number(recipe.minutes) ||
    30;

  return {
    id: String(
      recipe.id ||
        prefix + "-" + index + "-" + slugify(title)
    ),

    title: title,

    description:
      recipe.description ||
      recipe.summary ||
      "A delicious " + category.toLowerCase() + " recipe.",

    category: category,
    cuisine: recipe.cuisine || "American",
    difficulty: recipe.difficulty || "Easy",
    totalTime: totalTime,

    prepTime:
      Number(recipe.prepTime) ||
      Math.max(5, Math.round(totalTime * 0.3)),

    cookTime:
      Number(recipe.cookTime) ||
      Math.max(5, Math.round(totalTime * 0.7)),

    servings: Number(recipe.servings) || 4,
    ingredients: ingredients,
    instructions: instructions,

    image:
      recipe.image ||
      recipe.imageUrl ||
      recipe.photo ||
      "",

    emoji:
      recipe.emoji ||
      categoryEmoji(category),

    rating: Number(recipe.rating) || 4.7,
    sourceUrl: recipe.sourceUrl || recipe.url || "",
    imported: Boolean(recipe.imported)
  };
}

function getAllRecipes() {
  const builtInRecipes = getRecipeSource().map(function (recipe, index) {
    return normalizeRecipe(recipe, index, "built-in");
  });

  const customRecipes = app.customRecipes.map(function (recipe, index) {
    return normalizeRecipe(recipe, index, "custom");
  });

  return customRecipes.concat(builtInRecipes);
}

/* =========================================================
   NAVIGATION
========================================================= */

function goToPage(pageName) {
  document.querySelectorAll("[data-page-section]").forEach(function (page) {
    page.classList.remove("active");
  });

  const selectedPage = document.querySelector(
    '[data-page-section="' + pageName + '"]'
  );

  if (!selectedPage) {
    return;
  }

  selectedPage.classList.add("active");

  document.querySelectorAll("[data-page]").forEach(function (button) {
    button.classList.toggle(
      "active",
      button.dataset.page === pageName
    );
  });

  closeSidebar();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (pageName === "recipes") {
    renderAllRecipes();
  }

  if (pageName === "favorites") {
    renderFavorites();
  }

  if (pageName === "pantry") {
    renderPantry();
  }

  if (pageName === "groceries") {
    renderGroceries();
  }

  if (pageName === "meal-planner") {
    renderMealPlanner();
  }

  if (pageName === "profile") {
    renderProfile();
  }
}

function openSidebar() {
  getElement("sidebar")?.classList.add("open");
}

function closeSidebar() {
  getElement("sidebar")?.classList.remove("open");
}

/* =========================================================
   ALLERGY SUBSTITUTIONS
========================================================= */

const SUBSTITUTIONS = {
  Dairy: [
    ["whole milk", "oat milk"],
    ["milk", "oat milk"],
    ["butter", "dairy-free butter"],
    ["heavy cream", "coconut cream"],
    ["cream", "coconut cream"],
    ["cheese", "dairy-free cheese"],
    ["yogurt", "coconut yogurt"]
  ],

  Eggs: [
    ["eggs", "flax eggs"],
    ["egg", "flax egg"]
  ],

  Gluten: [
    ["all-purpose flour", "gluten-free flour blend"],
    ["flour", "gluten-free flour blend"],
    ["bread", "gluten-free bread"],
    ["pasta", "gluten-free pasta"],
    ["soy sauce", "gluten-free tamari"]
  ],

  Peanuts: [
    ["peanut butter", "sunflower seed butter"],
    ["peanuts", "roasted sunflower seeds"]
  ],

  "Tree Nuts": [
    ["almond milk", "oat milk"],
    ["almonds", "pumpkin seeds"],
    ["cashews", "sunflower seeds"],
    ["walnuts", "pumpkin seeds"]
  ],

  Soy: [
    ["soy sauce", "coconut aminos"],
    ["tofu", "chickpeas"]
  ],

  Sesame: [
    ["sesame oil", "olive oil"],
    ["sesame seeds", "pumpkin seeds"],
    ["tahini", "sunflower seed butter"]
  ],

  Shellfish: [
    ["shrimp", "chicken"],
    ["crab", "hearts of palm"],
    ["lobster", "chicken"]
  ],

  Fish: [
    ["salmon", "chicken"],
    ["tuna", "chickpeas"],
    ["cod", "chicken"]
  ]
};

function getRestrictions() {
  const restrictions = new Set(app.profile.allergies || []);

  (app.profile.diets || []).forEach(function (diet) {
    if (diet === "Dairy Free") {
      restrictions.add("Dairy");
    }

    if (diet === "Gluten Free") {
      restrictions.add("Gluten");
    }

    if (diet === "Nut Free") {
      restrictions.add("Peanuts");
      restrictions.add("Tree Nuts");
    }
  });

  return Array.from(restrictions);
}

function adjustIngredient(ingredient) {
  let adjustedIngredient = String(ingredient);
  const changes = [];

  if (!app.profile.automaticAdjustments) {
    return {
      ingredient: adjustedIngredient,
      changes: changes
    };
  }

  getRestrictions().forEach(function (restriction) {
    const substitutions = SUBSTITUTIONS[restriction] || [];

    substitutions.forEach(function (substitution) {
      const original = substitution[0];
      const replacement = substitution[1];

      const pattern = new RegExp(
        "\\b" + escapeRegExp(original) + "\\b",
        "gi"
      );

      if (pattern.test(adjustedIngredient)) {
        adjustedIngredient = adjustedIngredient.replace(
          pattern,
          replacement
        );

        changes.push(original + " → " + replacement);
      }
    });
  });

  (app.profile.dislikedFoods || []).forEach(function (food) {
    const pattern = new RegExp(
      "\\b" + escapeRegExp(food) + "\\b",
      "gi"
    );

    if (pattern.test(adjustedIngredient)) {
      adjustedIngredient = adjustedIngredient.replace(
        pattern,
        "optional " + food
      );

      changes.push(food + " marked optional");
    }
  });

  if ((app.profile.diets || []).includes("Low Sodium")) {
    adjustedIngredient = adjustedIngredient.replace(
      /\bsalt\b/gi,
      "reduced-sodium salt, to taste"
    );
  }

  return {
    ingredient: adjustedIngredient,
    changes: changes
  };
}

function adjustRecipe(recipe) {
  const adjustedIngredients = [];
  const changes = [];

  recipe.ingredients.forEach(function (ingredient) {
    const result = adjustIngredient(ingredient);

    adjustedIngredients.push(result.ingredient);
    changes.push.apply(changes, result.changes);
  });

  let adjustedInstructions = recipe.instructions.map(function (step) {
    return String(step);
  });

  Array.from(new Set(changes)).forEach(function (change) {
    if (!change.includes(" → ")) {
      return;
    }

    const pieces = change.split(" → ");
    const original = pieces[0];
    const replacement = pieces[1];

    const pattern = new RegExp(
      "\\b" + escapeRegExp(original) + "\\b",
      "gi"
    );

    adjustedInstructions = adjustedInstructions.map(function (step) {
      return step.replace(pattern, replacement);
    });
  });

  return {
    ...recipe,
    ingredients: adjustedIngredients,
    instructions: adjustedInstructions,
    adjustments: Array.from(new Set(changes))
  };
}

/* =========================================================
   RECIPE CARDS
========================================================= */

function recipeMatches(
  recipe,
  searchText,
  category,
  maximumTime,
  difficulty
) {
  const searchableText = [
    recipe.title,
    recipe.description,
    recipe.category,
    recipe.cuisine
  ]
    .concat(recipe.ingredients)
    .join(" ")
    .toLowerCase();

  const searchMatches =
    !searchText ||
    searchableText.includes(searchText.toLowerCase());

  const categoryMatches =
    category === "all" ||
    recipe.category.toLowerCase() === category.toLowerCase() ||
    searchableText.includes(category.toLowerCase());

  const timeMatches =
    maximumTime === "all" ||
    recipe.totalTime <= Number(maximumTime);

  const difficultyMatches =
    difficulty === "all" ||
    recipe.difficulty.toLowerCase() === difficulty.toLowerCase();

  return (
    searchMatches &&
    categoryMatches &&
    timeMatches &&
    difficultyMatches
  );
}

function createRecipeCard(recipe) {
  const isFavorite = app.favorites.includes(recipe.id);

  let imageHTML = "";

  if (recipe.image) {
    imageHTML =
      '<img src="' +
      escapeHTML(recipe.image) +
      '" alt="' +
      escapeHTML(recipe.title) +
      '" loading="lazy" onerror="this.remove()">';
  } else {
    imageHTML =
      "<span>" +
      escapeHTML(recipe.emoji) +
      "</span>";
  }

  return `
    <article
      class="recipe-card"
      data-recipe-id="${escapeHTML(recipe.id)}"
    >
      <div class="recipe-card-image">
        ${imageHTML}

        <button
          class="favorite-button ${isFavorite ? "active" : ""}"
          type="button"
          data-favorite-id="${escapeHTML(recipe.id)}"
          aria-label="${
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }"
        >
          ${isFavorite ? "♥" : "♡"}
        </button>

        ${
          app.profile.automaticAdjustments
            ? '<span class="recipe-safety-badge">✓ Profile checked</span>'
            : ""
        }
      </div>

      <div class="recipe-card-content">
        <div class="recipe-card-category">
          ${escapeHTML(recipe.category)}
        </div>

        <h3 class="recipe-card-title">
          ${escapeHTML(recipe.title)}
        </h3>

        <p class="recipe-card-description">
          ${escapeHTML(recipe.description)}
        </p>

        <div class="recipe-card-meta">
          <span>⏱ ${recipe.totalTime} min</span>
          <span>⭐ ${recipe.rating.toFixed(1)}</span>
          <span>${escapeHTML(recipe.difficulty)}</span>
        </div>
      </div>
    </article>
  `;
}

function renderRecipeGrid(container, recipesToShow) {
  if (!container) {
    return;
  }

  container.innerHTML = recipesToShow
    .map(createRecipeCard)
    .join("");
}

function renderFeaturedRecipes() {
  const recipesToShow = getAllRecipes().slice(0, 8);

  renderRecipeGrid(
    getElement("featuredRecipeGrid"),
    recipesToShow
  );

  const emptyState = getElement("featuredEmptyState");

  if (emptyState) {
    emptyState.hidden = recipesToShow.length > 0;
  }
}

function renderAllRecipes() {
  const searchText =
    getElement("recipeSearchInput")?.value.trim() || "";

  const category =
    getElement("categoryFilter")?.value || "all";

  const maximumTime =
    getElement("timeFilter")?.value || "all";

  const difficulty =
    getElement("difficultyFilter")?.value || "all";

  const matchingRecipes = getAllRecipes().filter(function (recipe) {
    return recipeMatches(
      recipe,
      searchText,
      category,
      maximumTime,
      difficulty
    );
  });

  renderRecipeGrid(
    getElement("allRecipesGrid"),
    matchingRecipes
  );

  const resultsCount = getElement("recipeResultsCount");

  if (resultsCount) {
    resultsCount.textContent =
      matchingRecipes.length +
      " recipe" +
      (matchingRecipes.length === 1 ? "" : "s");
  }

  const emptyState = getElement("recipesEmptyState");

  if (emptyState) {
    emptyState.hidden = matchingRecipes.length > 0;
  }
}

function renderFavorites() {
  const favoriteRecipes = getAllRecipes().filter(function (recipe) {
    return app.favorites.includes(recipe.id);
  });

  renderRecipeGrid(
    getElement("favoritesRecipeGrid"),
    favoriteRecipes
  );

  const emptyState = getElement("favoritesEmptyState");

  if (emptyState) {
    emptyState.hidden = favoriteRecipes.length > 0;
  }

  updateNavigationCounts();
}

function toggleFavorite(recipeId) {
  if (app.favorites.includes(recipeId)) {
    app.favorites = app.favorites.filter(function (id) {
      return id !== recipeId;
    });

    showToast("Removed from favorites");
  } else {
    app.favorites.push(recipeId);
    showToast("Added to favorites");
  }

  saveData(STORAGE.favorites, app.favorites);

  renderFeaturedRecipes();
  renderAllRecipes();
  renderFavorites();
}

/* =========================================================
   RECIPE DETAILS
========================================================= */

function openRecipe(recipeId) {
  const recipe = getAllRecipes().find(function (item) {
    return item.id === recipeId;
  });

  if (!recipe) {
    return;
  }

  const adjustedRecipe = adjustRecipe(recipe);
  const personalNote = app.notes[recipe.id] || "";
  const personalRating = Number(app.ratings[recipe.id]) || 0;
  const isFavorite = app.favorites.includes(recipe.id);

  let heroImage = "";

  if (recipe.image) {
    heroImage =
      '<img src="' +
      escapeHTML(recipe.image) +
      '" alt="' +
      escapeHTML(recipe.title) +
      '" onerror="this.remove()">';
  } else {
    heroImage = escapeHTML(recipe.emoji);
  }

  let adjustmentMessage = "";

  if (adjustedRecipe.adjustments.length > 0) {
    adjustmentMessage = `
      <div class="recipe-adjustment-alert">
        <strong>✓ Automatically adjusted for your profile</strong>
        <p>
          ${escapeHTML(adjustedRecipe.adjustments.join(", "))}
        </p>
      </div>
    `;
  } else {
    adjustmentMessage = `
      <div class="recipe-adjustment-alert">
        <strong>✓ Checked against your profile</strong>
        <p>No automatic substitutions were needed.</p>
      </div>
    `;
  }

  const ingredientsHTML = adjustedRecipe.ingredients.length
    ? adjustedRecipe.ingredients
        .map(function (ingredient) {
          return `
            <li>
              <input
                type="checkbox"
                aria-label="Mark ingredient complete"
              >
              <span>${escapeHTML(ingredient)}</span>
            </li>
          `;
        })
        .join("")
    : "<li>Ingredients have not been added yet.</li>";

  const instructionsHTML = adjustedRecipe.instructions.length
    ? adjustedRecipe.instructions
        .map(function (step) {
          return "<li>" + escapeHTML(step) + "</li>";
        })
        .join("")
    : `
      <li>Prepare all ingredients.</li>
      <li>Cook until the food is fully done.</li>
      <li>Serve and enjoy.</li>
    `;

  const ratingButtons = [1, 2, 3, 4, 5]
    .map(function (ratingNumber) {
      return `
        <button
          class="secondary-button"
          type="button"
          data-rate-recipe="${escapeHTML(recipe.id)}"
          data-rating="${ratingNumber}"
        >
          ${
            ratingNumber <= personalRating
              ? "★"
              : "☆"
          }
          ${ratingNumber}
        </button>
      `;
    })
    .join("");

  const modalContent = getElement("recipeModalContent");

  if (!modalContent) {
    return;
  }

  modalContent.innerHTML = `
    <div class="recipe-modal-hero">
      ${heroImage}
    </div>

    <div class="recipe-modal-body">
      <span class="section-eyebrow">
        ${escapeHTML(recipe.category)}
      </span>

      <h1 id="recipeModalTitle">
        ${escapeHTML(recipe.title)}
      </h1>

      <p>${escapeHTML(recipe.description)}</p>

      <div class="recipe-modal-meta">
        <span class="recipe-meta-pill">
          ⏱ ${recipe.totalTime} minutes
        </span>

        <span class="recipe-meta-pill">
          🍽 ${recipe.servings} servings
        </span>

        <span class="recipe-meta-pill">
          ⭐ ${recipe.rating.toFixed(1)}
        </span>

        <span class="recipe-meta-pill">
          ${escapeHTML(recipe.difficulty)}
        </span>
      </div>

      ${adjustmentMessage}

      <div class="hero-actions">
        <button
          class="primary-button"
          type="button"
          data-add-all-groceries="${escapeHTML(recipe.id)}"
        >
          🛒 Add ingredients
        </button>

        <button
          class="secondary-button"
          type="button"
          data-modal-favorite="${escapeHTML(recipe.id)}"
        >
          ${isFavorite ? "♥ Favorited" : "♡ Favorite"}
        </button>

        <button
          class="secondary-button"
          type="button"
          data-start-recipe-timer="${escapeHTML(recipe.id)}"
        >
          ⏱ Start timer
        </button>
      </div>

      <div class="recipe-detail-grid">
        <section class="recipe-detail-section">
          <h2>Ingredients</h2>

          <ul class="ingredient-list">
            ${ingredientsHTML}
          </ul>
        </section>

        <section class="recipe-detail-section">
          <h2>Instructions</h2>

          <ol class="instruction-list">
            ${instructionsHTML}
          </ol>
        </section>
      </div>

      <div class="content-card" style="margin-top: 24px;">
        <div class="form-group">
          <label for="recipeNoteInput">
            Personal note
          </label>

          <textarea
            id="recipeNoteInput"
            rows="3"
            placeholder="Example: Add extra garlic next time."
          >${escapeHTML(personalNote)}</textarea>
        </div>

        <button
          class="secondary-button"
          type="button"
          data-save-note="${escapeHTML(recipe.id)}"
        >
          Save note
        </button>
      </div>

      <div class="content-card" style="margin-top: 16px;">
        <h2>Your rating</h2>

        <div class="hero-actions">
          ${ratingButtons}
        </div>
      </div>
    </div>
  `;

  openModal("recipeModal");
}

/* =========================================================
   PANTRY
========================================================= */

function renderPantry() {
  const searchText =
    getElement("pantrySearchInput")?.value
      .trim()
      .toLowerCase() || "";

  const selectedCategory =
    getElement("pantryCategoryFilter")?.value || "all";

  const matchingItems = app.pantry.filter(function (item) {
    const searchMatches =
      !searchText ||
      item.name.toLowerCase().includes(searchText) ||
      String(item.quantity || "")
        .toLowerCase()
        .includes(searchText);

    const categoryMatches =
      selectedCategory === "all" ||
      item.category === selectedCategory;

    return searchMatches && categoryMatches;
  });

  const grid = getElement("pantryItemGrid");

  if (grid) {
    grid.innerHTML = matchingItems
      .map(function (item) {
        return `
          <article class="pantry-item-card">
            <h3>${escapeHTML(item.name)}</h3>

            <p>
              ${
                escapeHTML(item.quantity) ||
                "Quantity not set"
              }
            </p>

            <p>${escapeHTML(item.category)}</p>

            <p>${escapeHTML(formatDate(item.expiration))}</p>

            <div class="pantry-item-actions">
              <button
                class="small-action-button"
                type="button"
                data-pantry-to-grocery="${escapeHTML(item.id)}"
              >
                Add to grocery
              </button>

              <button
                class="small-action-button delete"
                type="button"
                data-delete-pantry="${escapeHTML(item.id)}"
              >
                Delete
              </button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  const emptyState = getElement("pantryEmptyState");

  if (emptyState) {
    emptyState.hidden = matchingItems.length > 0;
  }

  const count = getElement("pantryPageCount");

  if (count) {
    count.textContent =
      matchingItems.length +
      " item" +
      (matchingItems.length === 1 ? "" : "s");
  }

  renderDashboard();
}

function addPantryItem(event) {
  event.preventDefault();

  const name =
    getElement("pantryItemNameInput")?.value.trim();

  if (!name) {
    showToast("Enter an item name", "error");
    return;
  }

  app.pantry.push({
    id: createId("pantry"),
    name: name,

    quantity:
      getElement("pantryItemQuantityInput")?.value.trim() ||
      "",

    category:
      getElement("pantryItemCategorySelect")?.value ||
      "Pantry",

    expiration:
      getElement("pantryExpirationInput")?.value ||
      ""
  });

  saveData(STORAGE.pantry, app.pantry);

  event.target.reset();

  closeModal("pantryItemModal");
  renderPantry();

  showToast("Pantry item added");
}

function deletePantryItem(itemId) {
  app.pantry = app.pantry.filter(function (item) {
    return item.id !== itemId;
  });

  saveData(STORAGE.pantry, app.pantry);

  renderPantry();
  showToast("Pantry item removed");
}

function findPantryRecipes() {
  const pantryNames = app.pantry
    .map(function (item) {
      return item.name.toLowerCase();
    })
    .filter(Boolean);

  if (!pantryNames.length) {
    showToast("Add pantry items first", "error");
    return;
  }

  const matches = getAllRecipes()
    .map(function (recipe) {
      const ingredientText = recipe.ingredients
        .join(" ")
        .toLowerCase();

      const matchingIngredients = pantryNames.filter(function (
        pantryName
      ) {
        return ingredientText.includes(pantryName);
      });

      return {
        recipe: recipe,
        score: matchingIngredients.length
      };
    })
    .filter(function (result) {
      return result.score > 0;
    })
    .sort(function (first, second) {
      return second.score - first.score;
    });

  goToPage("recipes");

  if (!matches.length) {
    renderRecipeGrid(getElement("allRecipesGrid"), []);

    getElement("recipeResultsCount").textContent =
      "0 pantry matches";

    getElement("recipesEmptyState").hidden = false;

    showToast("No pantry matches found", "error");
    return;
  }

  renderRecipeGrid(
    getElement("allRecipesGrid"),
    matches.map(function (result) {
      return result.recipe;
    })
  );

  getElement("recipeResultsCount").textContent =
    matches.length +
    " pantry match" +
    (matches.length === 1 ? "" : "es");

  getElement("recipesEmptyState").hidden = true;

  showToast("Showing your closest pantry matches");
}

/* =========================================================
   GROCERY LIST
========================================================= */

function guessGroceryDepartment(itemName) {
  const value = String(itemName).toLowerCase();

  if (
    /chicken|beef|pork|turkey|sausage|steak|bacon/.test(
      value
    )
  ) {
    return "Meat";
  }

  if (
    /milk|cheese|butter|cream|yogurt|egg/.test(value)
  ) {
    return "Dairy";
  }

  if (
    /apple|onion|garlic|pepper|tomato|lettuce|broccoli|carrot|lemon|lime|potato/.test(
      value
    )
  ) {
    return "Produce";
  }

  if (/frozen/.test(value)) {
    return "Frozen";
  }

  if (/bread|roll|bun|tortilla/.test(value)) {
    return "Bakery";
  }

  return "Pantry";
}

function renderGroceries() {
  const departments = Array.from(
    new Set(
      app.groceries.map(function (item) {
        return item.category;
      })
    )
  );

  const list = getElement("groceryDepartmentList");

  if (list) {
    list.innerHTML = departments
      .map(function (department) {
        const items = app.groceries.filter(function (item) {
          return item.category === department;
        });

        const itemRows = items
          .map(function (item) {
            return `
              <div
                class="grocery-item-row ${
                  item.completed ? "completed" : ""
                }"
              >
                <input
                  type="checkbox"
                  data-toggle-grocery="${escapeHTML(item.id)}"
                  ${item.completed ? "checked" : ""}
                  aria-label="Mark ${escapeHTML(item.name)} complete"
                >

                <div class="grocery-item-name">
                  <strong>${escapeHTML(item.name)}</strong>

                  <small>
                    ${escapeHTML(item.quantity || "")}
                  </small>
                </div>

                <button
                  class="small-action-button delete"
                  type="button"
                  data-delete-grocery="${escapeHTML(item.id)}"
                >
                  Delete
                </button>
              </div>
            `;
          })
          .join("");

        return `
          <section class="grocery-department">
            <h3>${escapeHTML(department)}</h3>
            ${itemRows}
          </section>
        `;
      })
      .join("");
  }

  const totalItems = app.groceries.length;

  const completedItems = app.groceries.filter(function (item) {
    return item.completed;
  }).length;

  const remainingItems = totalItems - completedItems;

  const percentage = totalItems
    ? Math.round((completedItems / totalItems) * 100)
    : 0;

  const emptyState = getElement("groceryEmptyState");

  if (emptyState) {
    emptyState.hidden = totalItems > 0;
  }

  if (getElement("groceryTotalCount")) {
    getElement("groceryTotalCount").textContent =
      totalItems;
  }

  if (getElement("groceryCompletedCount")) {
    getElement("groceryCompletedCount").textContent =
      completedItems;
  }

  if (getElement("groceryRemainingCount")) {
    getElement("groceryRemainingCount").textContent =
      remainingItems;
  }

  if (getElement("groceryPageProgressFill")) {
    getElement("groceryPageProgressFill").style.width =
      percentage + "%";
  }

  updateNavigationCounts();
  renderDashboard();
}

function addGroceryItem(event) {
  event.preventDefault();

  const name =
    getElement("groceryItemNameInput")?.value.trim();

  if (!name) {
    showToast("Enter an item name", "error");
    return;
  }

  app.groceries.push({
    id: createId("grocery"),
    name: name,

    quantity:
      getElement("groceryItemQuantityInput")?.value.trim() ||
      "",

    category:
      getElement("groceryItemCategorySelect")?.value ||
      "Pantry",

    completed: false
  });

  saveData(STORAGE.groceries, app.groceries);

  event.target.reset();

  closeModal("groceryItemModal");
  renderGroceries();

  showToast("Added to grocery list");
}

function addRecipeToGroceries(recipeId) {
  const recipe = getAllRecipes().find(function (item) {
    return item.id === recipeId;
  });

  if (!recipe) {
    return;
  }

  const adjustedRecipe = adjustRecipe(recipe);

  adjustedRecipe.ingredients.forEach(function (ingredient) {
    app.groceries.push({
      id: createId("grocery"),
      name: ingredient,
      quantity: "",
      category: guessGroceryDepartment(ingredient),
      completed: false
    });
  });

  saveData(STORAGE.groceries, app.groceries);

  renderGroceries();
  showToast("Recipe ingredients added");
}

/* =========================================================
   PROFILE
========================================================= */

function renderProfile() {
  if (getElement("profileNameInput")) {
    getElement("profileNameInput").value =
      app.profile.name;
  }

  if (getElement("defaultServingsSelect")) {
    getElement("defaultServingsSelect").value =
      String(app.profile.servings);
  }

  if (getElement("measurementSelect")) {
    getElement("measurementSelect").value =
      app.profile.measurement;
  }

  if (getElement("spiceLevelSelect")) {
    getElement("spiceLevelSelect").value =
      app.profile.spiceLevel;
  }

  if (getElement("automaticAdjustmentToggle")) {
    getElement("automaticAdjustmentToggle").checked =
      app.profile.automaticAdjustments;
  }

  document
    .querySelectorAll('input[name="allergy"]')
    .forEach(function (input) {
      input.checked =
        app.profile.allergies.includes(input.value);
    });

  document
    .querySelectorAll('input[name="diet"]')
    .forEach(function (input) {
      input.checked =
        app.profile.diets.includes(input.value);
    });

  renderDislikedFoods();
  updateProfileDisplay();
}

function saveProfile() {
  const selectedAllergies = Array.from(
    document.querySelectorAll(
      'input[name="allergy"]:checked'
    )
  ).map(function (input) {
    return input.value;
  });

  const selectedDiets = Array.from(
    document.querySelectorAll(
      'input[name="diet"]:checked'
    )
  ).map(function (input) {
    return input.value;
  });

  app.profile = {
    name:
      getElement("profileNameInput")?.value.trim() ||
      "Chef",

    servings:
      Number(
        getElement("defaultServingsSelect")?.value
      ) || 4,

    measurement:
      getElement("measurementSelect")?.value ||
      "us",

    spiceLevel:
      getElement("spiceLevelSelect")?.value ||
      "Medium",

    allergies: selectedAllergies,
    diets: selectedDiets,

    dislikedFoods:
      app.profile.dislikedFoods || [],

    automaticAdjustments: Boolean(
      getElement("automaticAdjustmentToggle")?.checked
    )
  };

  saveData(STORAGE.profile, app.profile);

  updateProfileDisplay();
  renderFeaturedRecipes();

  showToast("Profile saved");
}

function addDislikedFood() {
  const input = getElement("dislikedFoodInput");
  const food = input?.value.trim();

  if (!food) {
    return;
  }

  const alreadyExists =
    app.profile.dislikedFoods.some(function (savedFood) {
      return savedFood.toLowerCase() === food.toLowerCase();
    });

  if (!alreadyExists) {
    app.profile.dislikedFoods.push(food);
    saveData(STORAGE.profile, app.profile);
  }

  input.value = "";
  renderDislikedFoods();
}

function renderDislikedFoods() {
  const container = getElement("dislikedFoodList");

  if (!container) {
    return;
  }

  container.innerHTML = (
    app.profile.dislikedFoods || []
  )
    .map(function (food) {
      return `
        <span class="tag">
          ${escapeHTML(food)}

          <button
            type="button"
            data-remove-disliked="${escapeHTML(food)}"
            aria-label="Remove ${escapeHTML(food)}"
          >
            ✕
          </button>
        </span>
      `;
    })
    .join("");
}

function updateProfileDisplay() {
  const name = app.profile.name || "Chef";
  const firstLetter = name.charAt(0).toUpperCase();

  document
    .querySelectorAll(".profile-avatar")
    .forEach(function (avatar) {
      avatar.textContent = firstLetter;
    });

  if (getElement("sidebarProfileName")) {
    getElement("sidebarProfileName").textContent = name;
  }

  const profileName =
    document.querySelector(".profile-button-name");

  if (profileName) {
    profileName.textContent = name;
  }

  if (getElement("sidebarProfileDiet")) {
    getElement("sidebarProfileDiet").textContent =
      app.profile.diets[0] ||
      "Personal profile";
  }

  const heroBadges = getElement("heroProfileBadges");

  if (heroBadges) {
    const automaticText =
      app.profile.automaticAdjustments
        ? "✓ Allergy profile active"
        : "Manual adjustments";

    const dietText =
      app.profile.diets[0] ||
      "Personal profile";

    const measurementText =
      app.profile.measurement === "metric"
        ? "Metric measurements"
        : "US measurements";

    heroBadges.innerHTML = `
      <span class="profile-badge safe">
        ${escapeHTML(automaticText)}
      </span>

      <span class="profile-badge">
        ${escapeHTML(dietText)}
      </span>

      <span class="profile-badge">
        ${escapeHTML(measurementText)}
      </span>
    `;
  }

  const allergyChips = getElement("allergyChipList");

  if (allergyChips) {
    const restrictions = getRestrictions();

    if (restrictions.length) {
      allergyChips.innerHTML = restrictions
        .map(function (restriction) {
          return `
            <span class="allergy-chip">
              ${escapeHTML(restriction)}
            </span>
          `;
        })
        .join("");
    } else {
      allergyChips.innerHTML = `
        <span class="allergy-chip muted">
          No allergies selected
        </span>
      `;
    }
  }
}

/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {
  const expiringItems = app.pantry.filter(function (item) {
    const days = daysUntil(item.expiration);

    return days >= 0 && days <= 7;
  });

  if (getElement("pantryItemCount")) {
    getElement("pantryItemCount").textContent =
      app.pantry.length;
  }

  if (getElement("pantryExpiringCount")) {
    getElement("pantryExpiringCount").textContent =
      expiringItems.length;
  }

  const pantryPreview = getElement("pantryPreviewList");

  if (pantryPreview) {
    if (app.pantry.length) {
      pantryPreview.innerHTML = app.pantry
        .slice(0, 4)
        .map(function (item) {
          return `
            <div class="preview-list-item">
              <strong>${escapeHTML(item.name)}</strong>

              <small>
                ${escapeHTML(
                  item.quantity || item.category
                )}
              </small>
            </div>
          `;
        })
        .join("");
    } else {
      pantryPreview.innerHTML = `
        <div class="mini-empty-state">
          Add pantry items to see them here.
        </div>
      `;
    }
  }

  const groceryTotal = app.groceries.length;

  const groceryCompleted = app.groceries.filter(function (
    item
  ) {
    return item.completed;
  }).length;

  const groceryPercentage = groceryTotal
    ? Math.round(
        (groceryCompleted / groceryTotal) * 100
      )
    : 0;

  if (getElement("groceryProgressText")) {
    getElement("groceryProgressText").textContent =
      groceryCompleted + " of " + groceryTotal;
  }

  if (getElement("groceryProgressFill")) {
    getElement("groceryProgressFill").style.width =
      groceryPercentage + "%";
  }

  const groceryPreview = getElement("groceryPreviewList");

  if (groceryPreview) {
    if (app.groceries.length) {
      groceryPreview.innerHTML = app.groceries
        .slice(0, 4)
        .map(function (item) {
          return `
            <div class="preview-list-item">
              <strong>${escapeHTML(item.name)}</strong>

              <small>
                ${
                  item.completed
                    ? "Completed"
                    : escapeHTML(
                        item.quantity ||
                          item.category
                      )
                }
              </small>
            </div>
          `;
        })
        .join("");
    } else {
      groceryPreview.innerHTML = `
        <div class="mini-empty-state">
          Your grocery list is currently empty.
        </div>
      `;
    }
  }

  updateNavigationCounts();
}

function updateNavigationCounts() {
  if (getElement("favoritesNavCount")) {
    getElement("favoritesNavCount").textContent =
      app.favorites.length;
  }

  if (getElement("groceryNavCount")) {
    const remainingItems = app.groceries.filter(function (
      item
    ) {
      return !item.completed;
    }).length;

    getElement("groceryNavCount").textContent =
      remainingItems;
  }
}

/* =========================================================
   MEAL PLANNER
========================================================= */

function renderMealPlanner() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const meals = [
    "Breakfast",
    "Lunch",
    "Dinner"
  ];

  const grid = getElement("mealPlannerGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML = days
    .map(function (day) {
      const mealSlots = meals
        .map(function (meal) {
          const key = day + "-" + meal;
          const savedRecipe = app.mealPlan[key] || "";

          return `
            <div class="meal-slot">
              <small>${meal}</small>

              <button
                type="button"
                data-meal-slot="${key}"
              >
                ${
                  savedRecipe
                    ? escapeHTML(savedRecipe)
                    : "+ Add meal"
                }
              </button>
            </div>
          `;
        })
        .join("");

      return `
        <article class="meal-day-card">
          <h3>${day}</h3>
          ${mealSlots}
        </article>
      `;
    })
    .join("");
}

function automaticallyPlanMeals() {
  const recipes = getAllRecipes();

  if (!recipes.length) {
    showToast(
      "Add recipes before planning meals",
      "error"
    );

    return;
  }

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const meals = [
    "Breakfast",
    "Lunch",
    "Dinner"
  ];

  days.forEach(function (day) {
    meals.forEach(function (meal) {
      const matchingRecipes = recipes.filter(function (
        recipe
      ) {
        return recipe.category
          .toLowerCase()
          .includes(meal.toLowerCase());
      });

      const recipePool = matchingRecipes.length
        ? matchingRecipes
        : recipes;

      const selectedRecipe =
        recipePool[
          Math.floor(
            Math.random() * recipePool.length
          )
        ];

      app.mealPlan[day + "-" + meal] =
        selectedRecipe.title;
    });
  });

  saveData(STORAGE.mealPlan, app.mealPlan);

  renderMealPlanner();
  showToast("Your week has been planned");
}

/* =========================================================
   SURPRISE ME
========================================================= */

function surpriseMe() {
  const recipes = getAllRecipes();

  if (!recipes.length) {
    showToast(
      "No recipes are available yet",
      "error"
    );

    return;
  }

  const randomRecipe =
    recipes[
      Math.floor(Math.random() * recipes.length)
    ];

  openRecipe(randomRecipe.id);
}

/* =========================================================
   AI CHEF
========================================================= */

function generateRecipe() {
  const ingredientText =
    getElement("aiIngredientsInput")?.value.trim() ||
    "";

  const ingredients = ingredientText
    .split(",")
    .map(function (ingredient) {
      return ingredient.trim();
    })
    .filter(Boolean);

  if (!ingredients.length) {
    showToast(
      "Enter ingredients separated by commas",
      "error"
    );

    return;
  }

  const mealType =
    getElement("aiMealTypeSelect")?.value ||
    "Dinner";

  const cuisine =
    getElement("aiCuisineSelect")?.value ||
    "Any";

  const difficulty =
    getElement("aiDifficultySelect")?.value ||
    "Easy";

  const time =
    getElement("aiTimeSelect")?.value ||
    "30";

  const useProfile =
    getElement("aiUseProfileCheckbox")?.checked;

  const generatedRecipe = {
    id: createId("generated"),

    title:
      (cuisine === "Any" ? "" : cuisine + " ") +
      ingredients[0] +
      " " +
      (mealType === "Any" ? "Skillet" : mealType),

    description:
      "A custom meal made with " +
      ingredients.join(", ") +
      ".",

    category:
      mealType === "Any"
        ? "Dinner"
        : mealType,

    cuisine:
      cuisine === "Any"
        ? "Custom"
        : cuisine,

    difficulty:
      difficulty === "Any"
        ? "Easy"
        : difficulty,

    totalTime:
      time === "Any"
        ? 30
        : Number(time),

    servings: app.profile.servings,

    ingredients: ingredients
      .map(function (ingredient) {
        return "1 portion " + ingredient;
      })
      .concat([
        "1 tablespoon olive oil",
        "Salt and pepper to taste"
      ]),

    instructions: [
      "Prepare and measure all ingredients.",
      "Heat olive oil in a large skillet over medium heat.",
      "Add the main ingredients and cook until tender and fully cooked.",
      "Season to taste and adjust the spice level as desired.",
      "Serve warm."
    ],

    emoji: "👨‍🍳",
    rating: 4.8
  };

  const displayedRecipe = useProfile
    ? adjustRecipe(generatedRecipe)
    : generatedRecipe;

  const container =
    getElement("generatedRecipeContainer");

  if (!container) {
    return;
  }

  container.hidden = false;

  container.innerHTML = `
    <span class="section-eyebrow">
      Generated for ${escapeHTML(app.profile.name)}
    </span>

    <h2>${escapeHTML(displayedRecipe.title)}</h2>

    <p>
      ${escapeHTML(displayedRecipe.description)}
    </p>

    <div class="recipe-modal-meta">
      <span class="recipe-meta-pill">
        ⏱ ${displayedRecipe.totalTime} minutes
      </span>

      <span class="recipe-meta-pill">
        🍽 ${displayedRecipe.servings} servings
      </span>

      <span class="recipe-meta-pill">
        ${escapeHTML(displayedRecipe.difficulty)}
      </span>
    </div>

    ${
      displayedRecipe.adjustments &&
      displayedRecipe.adjustments.length
        ? `
          <div class="recipe-adjustment-alert">
            <strong>
              Profile adjustments applied
            </strong>

            <p>
              ${escapeHTML(
                displayedRecipe.adjustments.join(", ")
              )}
            </p>
          </div>
        `
        : ""
    }

    <div class="recipe-detail-grid">
      <section class="recipe-detail-section">
        <h2>Ingredients</h2>

        <ul class="ingredient-list">
          ${displayedRecipe.ingredients
            .map(function (ingredient) {
              return (
                "<li>" +
                escapeHTML(ingredient) +
                "</li>"
              );
            })
            .join("")}
        </ul>
      </section>

      <section class="recipe-detail-section">
        <h2>Instructions</h2>

        <ol class="instruction-list">
          ${displayedRecipe.instructions
            .map(function (step) {
              return (
                "<li>" +
                escapeHTML(step) +
                "</li>"
              );
            })
            .join("")}
        </ol>
      </section>
    </div>

    <button
      class="primary-button"
      type="button"
      id="saveGeneratedRecipeButton"
    >
      Save to my recipes
    </button>
  `;

  getElement("saveGeneratedRecipeButton")
    ?.addEventListener("click", function () {
      app.customRecipes.unshift({
        ...generatedRecipe,
        imported: true
      });

      saveData(
        STORAGE.customRecipes,
        app.customRecipes
      );

      renderFeaturedRecipes();
      renderAllRecipes();

      showToast("Generated recipe saved");
    });

  container.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* =========================================================
   WEBSITE IMPORT
========================================================= */

function importRecipe() {
  const input = getElement("recipeUrlInput");
  const status = getElement("importStatus");
  const url = input?.value.trim();

  if (!url) {
    showToast(
      "Paste a recipe website address",
      "error"
    );

    return;
  }

  try {
    new URL(url);
  } catch (error) {
    showToast(
      "Enter a valid website address",
      "error"
    );

    return;
  }

  if (status) {
    status.hidden = false;
    status.textContent =
      "Importing recipe information...";
  }

  window.setTimeout(function () {
    const websiteName = new URL(url)
      .hostname
      .replace(/^www\./, "");

    const importedRecipe = {
      id: createId("imported"),

      title:
        "Imported recipe from " +
        websiteName,

      description:
        "Review this recipe and add any details the website could not provide.",

      category: "Dinner",
      cuisine: "Imported",
      difficulty: "Easy",
      totalTime: 30,
      servings: app.profile.servings,

      ingredients: [
        "Imported ingredient list pending",
        "Add ingredients manually if needed"
      ],

      instructions: [
        "Review the original recipe website.",
        "Add or correct the ingredients and directions.",
        "Save your personalized version."
      ],

      emoji: "🌐",
      rating: 4.5,
      sourceUrl: url,
      imported: true
    };

    app.customRecipes.unshift(importedRecipe);

    saveData(
      STORAGE.customRecipes,
      app.customRecipes
    );

    if (status) {
      status.textContent =
        "Recipe saved. Some websites may require manual details.";
    }

    input.value = "";

    renderFeaturedRecipes();
    renderAllRecipes();

    showToast("Recipe imported");
  }, 700);
}

/* =========================================================
   BARCODE SCANNER
========================================================= */

async function startScanner() {
  const video = getElement("barcodeVideo");
  const placeholder =
    getElement("scannerPlaceholder");
  const status = getElement("scannerStatus");

  if (
    !navigator.mediaDevices ||
    !navigator.mediaDevices.getUserMedia
  ) {
    showToast(
      "Camera scanning is not supported",
      "error"
    );

    return;
  }

  try {
    app.cameraStream =
      await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: {
            ideal: "environment"
          }
        },

        audio: false
      });

    video.srcObject = app.cameraStream;

    if (placeholder) {
      placeholder.style.display = "none";
    }

    if (status) {
      status.textContent =
        "Camera active. Center the barcode inside the frame.";
    }

    if ("BarcodeDetector" in window) {
      detectBarcode();
    } else if (status) {
      status.textContent =
        "Camera active. Use manual entry if automatic scanning is unavailable.";
    }
  } catch (error) {
    console.error(error);

    showToast(
      "Camera permission was not granted",
      "error"
    );
  }
}

async function detectBarcode() {
  if (
    !app.cameraStream ||
    !("BarcodeDetector" in window)
  ) {
    return;
  }

  const detector = new BarcodeDetector({
    formats: [
      "ean_13",
      "ean_8",
      "upc_a",
      "upc_e",
      "code_128"
    ]
  });

  const video = getElement("barcodeVideo");

  try {
    const detectedCodes =
      await detector.detect(video);

    if (detectedCodes.length) {
      handleBarcode(
        detectedCodes[0].rawValue
      );

      return;
    }
  } catch (error) {
    console.warn(
      "Barcode detection error:",
      error
    );
  }

  window.requestAnimationFrame(detectBarcode);
}

function stopScanner() {
  if (app.cameraStream) {
    app.cameraStream
      .getTracks()
      .forEach(function (track) {
        track.stop();
      });

    app.cameraStream = null;
  }

  const video = getElement("barcodeVideo");
  const placeholder =
    getElement("scannerPlaceholder");

  if (video) {
    video.srcObject = null;
  }

  if (placeholder) {
    placeholder.style.display = "";
  }
}

function handleBarcode(barcodeNumber) {
  stopScanner();
  closeModal("barcodeScannerModal");

  const nameInput =
    getElement("pantryItemNameInput");

  const quantityInput =
    getElement("pantryItemQuantityInput");

  if (nameInput) {
    nameInput.value =
      "Product " + barcodeNumber;
  }

  if (quantityInput) {
    quantityInput.value = "1 item";
  }

  openModal("pantryItemModal");

  showToast(
    "Barcode detected. Confirm the product name."
  );
}

function enterBarcodeManually() {
  const barcode = window.prompt(
    "Enter the barcode number:"
  );

  if (!barcode || !barcode.trim()) {
    return;
  }

  handleBarcode(barcode.trim());
}

/* =========================================================
   COOKING TIMERS
========================================================= */

function startRecipeTimer(recipeId) {
  const recipe = getAllRecipes().find(function (item) {
    return item.id === recipeId;
  });

  if (!recipe) {
    return;
  }

  const enteredMinutes = window.prompt(
    "How many minutes for " +
      recipe.title +
      "?",
    String(
      recipe.cookTime ||
        recipe.totalTime ||
        10
    )
  );

  const minutes = Number(enteredMinutes);

  if (
    !Number.isFinite(minutes) ||
    minutes <= 0
  ) {
    return;
  }

  app.timers.push({
    id: createId("timer"),
    label: recipe.title,
    endingTime:
      Date.now() + minutes * 60000,
    finished: false
  });

  renderTimers();

  getElement("timerDrawer")
    ?.classList.add("open");

  showToast("Timer started");
}

function renderTimers() {
  const list = getElement("timerList");
  const floatingButton =
    getElement("floatingTimerButton");

  if (!list) {
    return;
  }

  if (!app.timers.length) {
    list.innerHTML = `
      <div class="mini-empty-state">
        No active timers.
      </div>
    `;

    if (floatingButton) {
      floatingButton.hidden = true;
    }

    return;
  }

  if (floatingButton) {
    floatingButton.hidden = false;
  }

  if (getElement("activeTimerCount")) {
    getElement("activeTimerCount").textContent =
      app.timers.length;
  }

  list.innerHTML = app.timers
    .map(function (timer) {
      const remainingTime = Math.max(
        0,
        timer.endingTime - Date.now()
      );

      const minutes = Math.floor(
        remainingTime / 60000
      );

      const seconds = Math.floor(
        (remainingTime % 60000) / 1000
      );

      return `
        <div class="timer-item">
          <strong>${escapeHTML(timer.label)}</strong>

          <span class="timer-countdown">
            ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}
          </span>

          <button
            class="small-action-button delete"
            type="button"
            data-delete-timer="${escapeHTML(timer.id)}"
          >
            Stop timer
          </button>
        </div>
      `;
    })
    .join("");
}

function updateTimers() {
  let timerFinished = false;

  app.timers.forEach(function (timer) {
    if (
      !timer.finished &&
      Date.now() >= timer.endingTime
    ) {
      timer.finished = true;
      timerFinished = true;

      showToast(
        timer.label + " timer is finished"
      );

      if (
        app.settings.timerNotifications &&
        "Notification" in window &&
        Notification.permission === "granted"
      ) {
        new Notification(
          "Recipe Buddy Timer",
          {
            body:
              timer.label +
              " is finished."
          }
        );
      }
    }
  });

  app.timers = app.timers.filter(function (timer) {
    return (
      !timer.finished ||
      Date.now() - timer.endingTime <
        30000
    );
  });

  renderTimers();

  if (timerFinished) {
    getElement("timerDrawer")
      ?.classList.add("open");
  }
}

/* =========================================================
   SETTINGS
========================================================= */

function applySettings() {
  document.body.classList.toggle(
    "dark-mode",
    Boolean(app.settings.darkMode)
  );

  if (getElement("darkModeToggle")) {
    getElement("darkModeToggle").checked =
      Boolean(app.settings.darkMode);
  }

  if (getElement("timerNotificationToggle")) {
    getElement(
      "timerNotificationToggle"
    ).checked = Boolean(
      app.settings.timerNotifications
    );
  }

  if (getElement("dailyRecipeToggle")) {
    getElement("dailyRecipeToggle").checked =
      Boolean(app.settings.dailyRecipe);
  }
}

async function saveSettings() {
  app.settings = {
    darkMode: Boolean(
      getElement("darkModeToggle")?.checked
    ),

    timerNotifications: Boolean(
      getElement(
        "timerNotificationToggle"
      )?.checked
    ),

    dailyRecipe: Boolean(
      getElement("dailyRecipeToggle")?.checked
    )
  };

  saveData(STORAGE.settings, app.settings);
  applySettings();

  if (
    app.settings.timerNotifications &&
    "Notification" in window &&
    Notification.permission === "default"
  ) {
    try {
      await Notification.requestPermission();
    } catch (error) {
      console.warn(
        "Notifications were not enabled:",
        error
      );
    }
  }
}

function resetAppData() {
  const confirmed = window.confirm(
    "Reset all Recipe Buddy saved information?"
  );

  if (!confirmed) {
    return;
  }

  Object.values(STORAGE).forEach(function (key) {
    localStorage.removeItem(key);
  });

  window.location.reload();
}

/* =========================================================
   HEADER SEARCH
========================================================= */

function searchFromHeader() {
  const searchInput =
    getElement("globalSearchInput");

  const searchText =
    searchInput?.value.trim() || "";

  if (!searchText) {
    return;
  }

  goToPage("recipes");

  const recipeSearch =
    getElement("recipeSearchInput");

  if (recipeSearch) {
    recipeSearch.value = searchText;
  }

  renderAllRecipes();
}

/* =========================================================
   GLOBAL CLICK EVENTS
========================================================= */

document.addEventListener("click", function (event) {
  const pageButton =
    event.target.closest("[data-page]");

  if (pageButton) {
    event.preventDefault();
    goToPage(pageButton.dataset.page);
    return;
  }

  const modalClose =
    event.target.closest("[data-close-modal]");

  if (modalClose) {
    closeModal(
      modalClose.dataset.closeModal
    );

    return;
  }

  const favoriteButton =
    event.target.closest("[data-favorite-id]");

  if (favoriteButton) {
    event.stopPropagation();

    toggleFavorite(
      favoriteButton.dataset.favoriteId
    );

    return;
  }

  const modalFavorite =
    event.target.closest("[data-modal-favorite]");

  if (modalFavorite) {
    const recipeId =
      modalFavorite.dataset.modalFavorite;

    toggleFavorite(recipeId);
    openRecipe(recipeId);

    return;
  }

  const recipeCard =
    event.target.closest("[data-recipe-id]");

  if (recipeCard) {
    openRecipe(
      recipeCard.dataset.recipeId
    );

    return;
  }

  const categoryButton =
    event.target.closest("[data-category]");

  if (categoryButton) {
    goToPage("recipes");

    const categoryFilter =
      getElement("categoryFilter");

    if (categoryFilter) {
      categoryFilter.value =
        categoryButton.dataset.category;
    }

    renderAllRecipes();
    return;
  }

  const deletePantryButton =
    event.target.closest("[data-delete-pantry]");

  if (deletePantryButton) {
    deletePantryItem(
      deletePantryButton.dataset.deletePantry
    );

    return;
  }

  const pantryToGroceryButton =
    event.target.closest(
      "[data-pantry-to-grocery]"
    );

  if (pantryToGroceryButton) {
    const pantryItem = app.pantry.find(function (
      item
    ) {
      return (
        item.id ===
        pantryToGroceryButton.dataset
          .pantryToGrocery
      );
    });

    if (pantryItem) {
      app.groceries.push({
        id: createId("grocery"),
        name: pantryItem.name,
        quantity: pantryItem.quantity,
        category: pantryItem.category,
        completed: false
      });

      saveData(
        STORAGE.groceries,
        app.groceries
      );

      renderGroceries();
      showToast("Added to grocery list");
    }

    return;
  }

  const deleteGroceryButton =
    event.target.closest(
      "[data-delete-grocery]"
    );

  if (deleteGroceryButton) {
    app.groceries = app.groceries.filter(
      function (item) {
        return (
          item.id !==
          deleteGroceryButton.dataset
            .deleteGrocery
        );
      }
    );

    saveData(
      STORAGE.groceries,
      app.groceries
    );

    renderGroceries();
    return;
  }

  const addRecipeIngredientsButton =
    event.target.closest(
      "[data-add-all-groceries]"
    );

  if (addRecipeIngredientsButton) {
    addRecipeToGroceries(
      addRecipeIngredientsButton.dataset
        .addAllGroceries
    );

    return;
  }

  const saveNoteButton =
    event.target.closest("[data-save-note]");

  if (saveNoteButton) {
    const noteInput =
      getElement("recipeNoteInput");

    app.notes[
      saveNoteButton.dataset.saveNote
    ] = noteInput?.value || "";

    saveData(STORAGE.notes, app.notes);

    showToast("Recipe note saved");
    return;
  }

  const ratingButton =
    event.target.closest("[data-rate-recipe]");

  if (ratingButton) {
    const recipeId =
      ratingButton.dataset.rateRecipe;

    app.ratings[recipeId] = Number(
      ratingButton.dataset.rating
    );

    saveData(STORAGE.ratings, app.ratings);

    openRecipe(recipeId);
    showToast("Rating saved");

    return;
  }

  const timerButton =
    event.target.closest(
      "[data-start-recipe-timer]"
    );

  if (timerButton) {
    startRecipeTimer(
      timerButton.dataset.startRecipeTimer
    );

    return;
  }

  const removeDislikedButton =
    event.target.closest(
      "[data-remove-disliked]"
    );

  if (removeDislikedButton) {
    app.profile.dislikedFoods =
      app.profile.dislikedFoods.filter(
        function (food) {
          return (
            food !==
            removeDislikedButton.dataset
              .removeDisliked
          );
        }
      );

    saveData(STORAGE.profile, app.profile);
    renderDislikedFoods();

    return;
  }

  const deleteTimerButton =
    event.target.closest("[data-delete-timer]");

  if (deleteTimerButton) {
    app.timers = app.timers.filter(function (
      timer
    ) {
      return (
        timer.id !==
        deleteTimerButton.dataset.deleteTimer
      );
    });

    renderTimers();
    return;
  }

  const mealSlot =
    event.target.closest("[data-meal-slot]");

  if (mealSlot) {
    const recipes = getAllRecipes();

    if (!recipes.length) {
      return;
    }

    const currentRecipeTitle =
      app.mealPlan[
        mealSlot.dataset.mealSlot
      ];

    const currentIndex = recipes.findIndex(
      function (recipe) {
        return (
          recipe.title === currentRecipeTitle
        );
      }
    );

    const nextRecipe =
      recipes[
        (currentIndex + 1) %
          recipes.length
      ];

    app.mealPlan[
      mealSlot.dataset.mealSlot
    ] = nextRecipe.title;

    saveData(
      STORAGE.mealPlan,
      app.mealPlan
    );

    renderMealPlanner();
  }
});

/* =========================================================
   CHECKBOX EVENTS
========================================================= */

document.addEventListener("change", function (event) {
  const groceryCheckbox =
    event.target.closest(
      "[data-toggle-grocery]"
    );

  if (!groceryCheckbox) {
    return;
  }

  const groceryItem = app.groceries.find(function (
    item
  ) {
    return (
      item.id ===
      groceryCheckbox.dataset.toggleGrocery
    );
  });

  if (!groceryItem) {
    return;
  }

  groceryItem.completed =
    groceryCheckbox.checked;

  saveData(
    STORAGE.groceries,
    app.groceries
  );

  renderGroceries();
});

/* =========================================================
   CONNECT PAGE BUTTONS
========================================================= */

function connectButtons() {
  getElement("mobileMenuButton")
    ?.addEventListener("click", openSidebar);

  getElement("sidebarCloseButton")
    ?.addEventListener("click", closeSidebar);

  getElement("sidebarOverlay")
    ?.addEventListener("click", closeSidebar);

  getElement("surpriseMeButton")
    ?.addEventListener("click", surpriseMe);

  getElement("globalSearchInput")
    ?.addEventListener("input", function () {
      const searchText =
        getElement("globalSearchInput")
          .value
          .trim();

      const clearButton =
        getElement("searchClearButton");

      if (clearButton) {
        clearButton.hidden = !searchText;
      }
    });

  getElement("globalSearchInput")
    ?.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        searchFromHeader();
      }
    });

  getElement("searchClearButton")
    ?.addEventListener("click", function () {
      getElement("globalSearchInput").value =
        "";

      getElement("searchClearButton").hidden =
        true;
    });

  [
    "recipeSearchInput",
    "categoryFilter",
    "timeFilter",
    "difficultyFilter"
  ].forEach(function (id) {
    getElement(id)?.addEventListener(
      "input",
      renderAllRecipes
    );

    getElement(id)?.addEventListener(
      "change",
      renderAllRecipes
    );
  });

  getElement("clearRecipeFiltersButton")
    ?.addEventListener("click", function () {
      getElement("recipeSearchInput").value =
        "";

      getElement("categoryFilter").value =
        "all";

      getElement("timeFilter").value =
        "all";

      getElement("difficultyFilter").value =
        "all";

      renderAllRecipes();
    });

  getElement("addPantryItemButton")
    ?.addEventListener("click", function () {
      openModal("pantryItemModal");
    });

  getElement("pantryItemForm")
    ?.addEventListener(
      "submit",
      addPantryItem
    );

  getElement("pantrySearchInput")
    ?.addEventListener(
      "input",
      renderPantry
    );

  getElement("pantryCategoryFilter")
    ?.addEventListener(
      "change",
      renderPantry
    );

  getElement("findPantryRecipesButton")
    ?.addEventListener(
      "click",
      findPantryRecipes
    );

  [
    "openBarcodeScannerButton",
    "pantryBarcodeButton"
  ].forEach(function (id) {
    getElement(id)?.addEventListener(
      "click",
      function () {
        openModal("barcodeScannerModal");
      }
    );
  });

  getElement("startScannerButton")
    ?.addEventListener(
      "click",
      startScanner
    );

  getElement("manualBarcodeButton")
    ?.addEventListener(
      "click",
      enterBarcodeManually
    );

  [
    "addGroceryItemButton",
    "quickAddGroceryButton"
  ].forEach(function (id) {
    getElement(id)?.addEventListener(
      "click",
      function () {
        openModal("groceryItemModal");
      }
    );
  });

  getElement("groceryItemForm")
    ?.addEventListener(
      "submit",
      addGroceryItem
    );

  getElement(
    "clearCompletedGroceriesButton"
  )?.addEventListener("click", function () {
    app.groceries = app.groceries.filter(
      function (item) {
        return !item.completed;
      }
    );

    saveData(
      STORAGE.groceries,
      app.groceries
    );

    renderGroceries();
    showToast("Completed items cleared");
  });

  getElement("saveProfileButton")
    ?.addEventListener(
      "click",
      saveProfile
    );

  getElement("addDislikedFoodButton")
    ?.addEventListener(
      "click",
      addDislikedFood
    );

  getElement("dislikedFoodInput")
    ?.addEventListener(
      "keydown",
      function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          addDislikedFood();
        }
      }
    );

  getElement("generateRecipeButton")
    ?.addEventListener(
      "click",
      generateRecipe
    );

  document
    .querySelectorAll("[data-prompt]")
    .forEach(function (button) {
      button.addEventListener(
        "click",
        function () {
          const input =
            getElement("aiIngredientsInput");

          if (input) {
            input.value =
              button.dataset.prompt;

            input.focus();
          }
        }
      );
    });

  getElement("importRecipeButton")
    ?.addEventListener(
      "click",
      importRecipe
    );

  getElement("autoPlanMealsButton")
    ?.addEventListener(
      "click",
      automaticallyPlanMeals
    );

  [
    "darkModeToggle",
    "timerNotificationToggle",
    "dailyRecipeToggle"
  ].forEach(function (id) {
    getElement(id)?.addEventListener(
      "change",
      saveSettings
    );
  });

  getElement("resetAppDataButton")
    ?.addEventListener(
      "click",
      resetAppData
    );

  getElement("floatingTimerButton")
    ?.addEventListener("click", function () {
      getElement("timerDrawer")
        ?.classList.add("open");
    });

  getElement("closeTimerDrawerButton")
    ?.addEventListener("click", function () {
      getElement("timerDrawer")
        ?.classList.remove("open");
    });

  document.addEventListener(
    "keydown",
    function (event) {
      if (event.key !== "Escape") {
        return;
      }

      document
        .querySelectorAll(
          ".modal:not([hidden])"
        )
        .forEach(function (modal) {
          closeModal(modal.id);
        });

      closeSidebar();

      getElement("timerDrawer")
        ?.classList.remove("open");
    }
  );
}

/* =========================================================
   START APP
========================================================= */

function startApp() {
  connectButtons();
  applySettings();
  updateProfileDisplay();

  renderFeaturedRecipes();
  renderAllRecipes();
  renderFavorites();
  renderPantry();
  renderGroceries();
  renderMealPlanner();
  renderTimers();

  window.setInterval(
    updateTimers,
    1000
  );

  if (!getAllRecipes().length) {
    console.warn(
      "No recipes were found. Make sure recipes.js is in the same folder and loads before app.js."
    );
  }
}
if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("./sw.js")
            .then(() => {

                console.log("Recipe Buddy Service Worker Loaded");

            })
            .catch(err => {

                console.log(err);

            });

    });

}
document.addEventListener(
  "DOMContentLoaded",
  startApp
);