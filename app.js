/* =========================================================
   RECIPE BUDDY
   COMPLETE ROOT APP.JS
   PART 1 OF 3
========================================================= */

"use strict";

/* =========================================================
   SAVED DATA
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

function copyValue(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadData(key, fallback) {
  try {
    const storedValue = localStorage.getItem(key);

    if (!storedValue) {
      return copyValue(fallback);
    }

    return JSON.parse(storedValue);
  } catch (error) {
    console.error("Could not load saved data:", error);
    return copyValue(fallback);
  }
}

function saveData(key, value) {
  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
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

  timers: []
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
  return String(value).replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );
}

function showToast(message, type = "success") {
  const container = getElement("toastContainer");

  if (!container) {
    console.log(message);
    return;
  }

  const toast = document.createElement("div");

  toast.className =
    type === "error"
      ? "toast error"
      : "toast";

  toast.textContent = message;

  container.appendChild(toast);

  window.setTimeout(function () {
    toast.remove();
  }, 3200);
}

function openModal(id) {
  const modal = getElement(id);

  if (!modal) {
    return;
  }

  modal.hidden = false;
  document.body.classList.add("modal-open");
}

async function closeModal(id) {
  const modal = getElement(id);

  if (!modal) {
    return;
  }

  if (
    id === "barcodeScannerModal" &&
    window.RecipeBuddyScanner &&
    typeof window.RecipeBuddyScanner.stop === "function"
  ) {
    await window.RecipeBuddyScanner.stop();
  }

  modal.hidden = true;

  if (!document.querySelector(".modal:not([hidden])")) {
    document.body.classList.remove("modal-open");
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

  const expirationDate =
    new Date(dateValue + "T12:00:00");

  const today = new Date();

  today.setHours(12, 0, 0, 0);

  return Math.ceil(
    (expirationDate - today) / 86400000
  );
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

  if (
    typeof recipes !== "undefined" &&
    Array.isArray(recipes)
  ) {
    return recipes;
  }

  return [];
}

function categoryEmoji(category) {
  const emojis = {
    Breakfast: "🍳",
    Lunch: "🥪",
    Dinner: "🍽️",
    "Date Night": "🥂",
    Chicken: "🍗",
    Beef: "🥩",
    Pork: "🍖",
    Pasta: "🍝",
    Healthy: "🥗",
    Dessert: "🍰",
    Snack: "🍿",
    Snacks: "🍿",
    Drink: "🥤",
    Drinks: "🥤",
    Seafood: "🦐",
    Vegetarian: "🥦",
    Southern: "🌽",
    "Air Fryer": "♨️",
    "Slow Cooker": "🍲"
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

function normalizeArray(value) {
  if (Array.isArray(value)) {
    return value
      .map(function (item) {
        return String(item).trim();
      })
      .filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(/\n+/)
      .map(function (item) {
        return item
          .replace(/^\d+[.)]\s*/, "")
          .replace(/^[-•]\s*/, "")
          .trim();
      })
      .filter(Boolean);
  }

  return [];
}

function normalizeRecipe(recipe, index, prefix) {
  const title =
    recipe.title ||
    recipe.name ||
    recipe.recipeName ||
    "Recipe " + (index + 1);

  const category =
    recipe.category ||
    recipe.type ||
    recipe.mealType ||
    "Dinner";

  const ingredients = normalizeArray(
    recipe.ingredients ||
    recipe.ingredientList
  );

  const instructions = normalizeArray(
    recipe.instructions ||
    recipe.steps ||
    recipe.directions
  );

  const prepTime =
    Number(
      recipe.prepTime ||
      recipe.prepMinutes
    ) || 10;

  const cookTime =
    Number(
      recipe.cookTime ||
      recipe.cookMinutes
    ) || 20;

  const totalTime =
    Number(recipe.totalTime) ||
    Number(recipe.time) ||
    prepTime + cookTime;

  return {
    id: String(
      recipe.id ||
      prefix + "-" + index + "-" + slugify(title)
    ),

    title: title,

    description:
      recipe.description ||
      recipe.summary ||
      "A delicious " +
        category.toLowerCase() +
        " recipe.",

    category: category,
    cuisine: recipe.cuisine || "American",
    difficulty: recipe.difficulty || "Easy",

    prepTime: prepTime,
    cookTime: cookTime,
    totalTime: totalTime,

    servings:
      Number(recipe.servings) || 4,

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

    rating:
      Number(recipe.rating) || 4.7,

    sourceUrl:
      recipe.sourceUrl ||
      recipe.url ||
      "",

    imported:
      Boolean(recipe.imported)
  };
}

function getAllRecipes() {
  const builtInRecipes =
    getRecipeSource().map(function (recipe, index) {
      return normalizeRecipe(
        recipe,
        index,
        "built-in"
      );
    });

  const customRecipes =
    app.customRecipes.map(function (recipe, index) {
      return normalizeRecipe(
        recipe,
        index,
        "custom"
      );
    });

  return customRecipes.concat(builtInRecipes);
}

/* =========================================================
   NAVIGATION
========================================================= */

function goToPage(pageName) {
  document
    .querySelectorAll("[data-page-section]")
    .forEach(function (page) {
      page.classList.remove("active");
    });

  const selectedPage =
    document.querySelector(
      '[data-page-section="' +
        pageName +
        '"]'
    );

  if (!selectedPage) {
    return;
  }

  selectedPage.classList.add("active");

  document
    .querySelectorAll("[data-page]")
    .forEach(function (button) {
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
   ALLERGY AND DIET ADJUSTMENTS
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
    [
      "all-purpose flour",
      "gluten-free flour blend"
    ],
    ["flour", "gluten-free flour blend"],
    ["bread", "gluten-free bread"],
    ["pasta", "gluten-free pasta"],
    ["soy sauce", "gluten-free tamari"],
    ["tortilla", "gluten-free tortilla"]
  ],

  Peanuts: [
    [
      "peanut butter",
      "sunflower seed butter"
    ],
    [
      "peanuts",
      "roasted sunflower seeds"
    ]
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
  const restrictions =
    new Set(app.profile.allergies || []);

  (app.profile.diets || []).forEach(
    function (diet) {
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
    }
  );

  return Array.from(restrictions);
}

function adjustIngredient(ingredient) {
  let adjustedIngredient =
    String(ingredient);

  const changes = [];

  if (!app.profile.automaticAdjustments) {
    return {
      ingredient: adjustedIngredient,
      changes: changes
    };
  }

  getRestrictions().forEach(
    function (restriction) {
      const substitutions =
        SUBSTITUTIONS[restriction] || [];

      substitutions.forEach(
        function (substitution) {
          const original =
            substitution[0];

          const replacement =
            substitution[1];

          const pattern =
            new RegExp(
              "\\b" +
                escapeRegExp(original) +
                "\\b",
              "gi"
            );

          if (
            pattern.test(adjustedIngredient)
          ) {
            adjustedIngredient =
              adjustedIngredient.replace(
                pattern,
                replacement
              );

            changes.push(
              original +
                " → " +
                replacement
            );
          }
        }
      );
    }
  );

  (app.profile.dislikedFoods || []).forEach(
    function (food) {
      const pattern =
        new RegExp(
          "\\b" +
            escapeRegExp(food) +
            "\\b",
          "gi"
        );

      if (
        pattern.test(adjustedIngredient)
      ) {
        adjustedIngredient =
          adjustedIngredient.replace(
            pattern,
            "optional " + food
          );

        changes.push(
          food + " marked optional"
        );
      }
    }
  );

  if (
    (app.profile.diets || []).includes(
      "Low Sodium"
    )
  ) {
    adjustedIngredient =
      adjustedIngredient.replace(
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
  const ingredients = [];
  const changes = [];

  recipe.ingredients.forEach(
    function (ingredient) {
      const result =
        adjustIngredient(ingredient);

      ingredients.push(result.ingredient);

      changes.push.apply(
        changes,
        result.changes
      );
    }
  );

  let instructions =
    recipe.instructions.map(function (step) {
      return String(step);
    });

  Array.from(new Set(changes)).forEach(
    function (change) {
      if (!change.includes(" → ")) {
        return;
      }

      const parts = change.split(" → ");

      const original = parts[0];
      const replacement = parts[1];

      const pattern =
        new RegExp(
          "\\b" +
            escapeRegExp(original) +
            "\\b",
          "gi"
        );

      instructions =
        instructions.map(function (step) {
          return step.replace(
            pattern,
            replacement
          );
        });
    }
  );

  return {
    ...recipe,
    ingredients: ingredients,
    instructions: instructions,
    adjustments: Array.from(
      new Set(changes)
    )
  };
}

/* =========================================================
   RECIPE SEARCH AND CARDS
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
    searchableText.includes(
      searchText.toLowerCase()
    );

  const categoryMatches =
    category === "all" ||
    recipe.category.toLowerCase() ===
      category.toLowerCase() ||
    searchableText.includes(
      category.toLowerCase()
    );

  const timeMatches =
    maximumTime === "all" ||
    recipe.totalTime <=
      Number(maximumTime);

  const difficultyMatches =
    difficulty === "all" ||
    recipe.difficulty.toLowerCase() ===
      difficulty.toLowerCase();

  return (
    searchMatches &&
    categoryMatches &&
    timeMatches &&
    difficultyMatches
  );
}

function createRecipeCard(recipe) {
  const isFavorite =
    app.favorites.includes(recipe.id);

  const imageHTML = recipe.image
    ? `
      <img
        src="${escapeHTML(recipe.image)}"
        alt="${escapeHTML(recipe.title)}"
        loading="lazy"
        onerror="this.remove()"
      >
    `
    : `
      <span>
        ${escapeHTML(recipe.emoji)}
      </span>
    `;

  return `
    <article
      class="recipe-card"
      data-recipe-id="${escapeHTML(recipe.id)}"
    >

      <div class="recipe-card-image">

        ${imageHTML}

        <button
          class="favorite-button ${
            isFavorite ? "active" : ""
          }"
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
            ? `
              <span class="recipe-safety-badge">
                ✓ Profile checked
              </span>
            `
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

          <span>
            ⏱ ${recipe.totalTime} min
          </span>

          <span>
            ⭐ ${recipe.rating.toFixed(1)}
          </span>

          <span>
            ${escapeHTML(recipe.difficulty)}
          </span>

        </div>

      </div>

    </article>
  `;
}

function renderRecipeGrid(
  container,
  recipesToShow
) {
  if (!container) {
    return;
  }

  container.innerHTML =
    recipesToShow
      .map(createRecipeCard)
      .join("");
}

function renderFeaturedRecipes() {
  const recipesToShow =
    getAllRecipes().slice(0, 8);

  renderRecipeGrid(
    getElement("featuredRecipeGrid"),
    recipesToShow
  );

  const emptyState =
    getElement("featuredEmptyState");

  if (emptyState) {
    emptyState.hidden =
      recipesToShow.length > 0;
  }
}

function renderAllRecipes() {
  const searchText =
    getElement("recipeSearchInput")
      ?.value.trim() || "";

  const category =
    getElement("categoryFilter")
      ?.value || "all";

  const maximumTime =
    getElement("timeFilter")
      ?.value || "all";

  const difficulty =
    getElement("difficultyFilter")
      ?.value || "all";

  const matchingRecipes =
    getAllRecipes().filter(
      function (recipe) {
        return recipeMatches(
          recipe,
          searchText,
          category,
          maximumTime,
          difficulty
        );
      }
    );

  renderRecipeGrid(
    getElement("allRecipesGrid"),
    matchingRecipes
  );

  const resultsCount =
    getElement("recipeResultsCount");

  if (resultsCount) {
    resultsCount.textContent =
      matchingRecipes.length +
      " recipe" +
      (
        matchingRecipes.length === 1
          ? ""
          : "s"
      );
  }

  const emptyState =
    getElement("recipesEmptyState");

  if (emptyState) {
    emptyState.hidden =
      matchingRecipes.length > 0;
  }
}

function renderFavorites() {
  const favoriteRecipes =
    getAllRecipes().filter(
      function (recipe) {
        return app.favorites.includes(
          recipe.id
        );
      }
    );

  renderRecipeGrid(
    getElement("favoritesRecipeGrid"),
    favoriteRecipes
  );

  const emptyState =
    getElement("favoritesEmptyState");

  if (emptyState) {
    emptyState.hidden =
      favoriteRecipes.length > 0;
  }

  updateNavigationCounts();
}

function toggleFavorite(recipeId) {
  if (
    app.favorites.includes(recipeId)
  ) {
    app.favorites =
      app.favorites.filter(
        function (id) {
          return id !== recipeId;
        }
      );

    showToast(
      "Removed from favorites"
    );
  } else {
    app.favorites.push(recipeId);

    showToast(
      "Added to favorites"
    );
  }

  saveData(
    STORAGE.favorites,
    app.favorites
  );

  renderFeaturedRecipes();
  renderAllRecipes();
  renderFavorites();
}
/* =========================================================
   RECIPE DETAILS
========================================================= */

function openRecipe(recipeId) {
  const recipe =
    getAllRecipes().find(function (item) {
      return item.id === recipeId;
    });

  if (!recipe) {
    showToast(
      "Recipe could not be found",
      "error"
    );

    return;
  }

  const adjustedRecipe =
    adjustRecipe(recipe);

  const personalNote =
    app.notes[recipe.id] || "";

  const personalRating =
    Number(app.ratings[recipe.id]) || 0;

  const isFavorite =
    app.favorites.includes(recipe.id);

  const heroImage = recipe.image
    ? `
      <img
        src="${escapeHTML(recipe.image)}"
        alt="${escapeHTML(recipe.title)}"
        onerror="this.remove()"
      >
    `
    : escapeHTML(recipe.emoji);

  const adjustmentMessage =
    adjustedRecipe.adjustments.length
      ? `
        <div class="recipe-adjustment-alert">

          <strong>
            ✓ Automatically adjusted for your profile
          </strong>

          <p>
            ${escapeHTML(
              adjustedRecipe.adjustments.join(", ")
            )}
          </p>

        </div>
      `
      : `
        <div class="recipe-adjustment-alert">

          <strong>
            ✓ Checked against your profile
          </strong>

          <p>
            No automatic substitutions were needed.
          </p>

        </div>
      `;

  const ingredientsHTML =
    adjustedRecipe.ingredients.length
      ? adjustedRecipe.ingredients
          .map(function (ingredient) {
            return `
              <li>

                <input
                  type="checkbox"
                  aria-label="Mark ingredient complete"
                >

                <span>
                  ${escapeHTML(ingredient)}
                </span>

              </li>
            `;
          })
          .join("")
      : `
        <li>
          Ingredients have not been added yet.
        </li>
      `;

  const instructionsHTML =
    adjustedRecipe.instructions.length
      ? adjustedRecipe.instructions
          .map(function (step) {
            return `
              <li>
                ${escapeHTML(step)}
              </li>
            `;
          })
          .join("")
      : `
        <li>
          Prepare all ingredients.
        </li>

        <li>
          Cook until everything is safely cooked through.
        </li>

        <li>
          Serve and enjoy.
        </li>
      `;

  const ratingButtons =
    [1, 2, 3, 4, 5]
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

  const modalContent =
    getElement("recipeModalContent");

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

      <p>
        ${escapeHTML(recipe.description)}
      </p>

      <div class="recipe-modal-meta">

        <span class="recipe-meta-pill">
          Prep: ${recipe.prepTime} min
        </span>

        <span class="recipe-meta-pill">
          Cook: ${recipe.cookTime} min
        </span>

        <span class="recipe-meta-pill">
          Total: ${recipe.totalTime} min
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
          ${
            isFavorite
              ? "♥ Favorited"
              : "♡ Favorite"
          }
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

          <h2>
            Ingredients
          </h2>

          <ul class="ingredient-list">
            ${ingredientsHTML}
          </ul>

        </section>

        <section class="recipe-detail-section">

          <h2>
            Instructions
          </h2>

          <ol class="instruction-list">
            ${instructionsHTML}
          </ol>

        </section>

      </div>

      <div
        class="content-card"
        style="margin-top: 24px;"
      >

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

      <div
        class="content-card"
        style="margin-top: 16px;"
      >

        <h2>
          Your rating
        </h2>

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
    getElement("pantrySearchInput")
      ?.value
      .trim()
      .toLowerCase() || "";

  const selectedCategory =
    getElement("pantryCategoryFilter")
      ?.value || "all";

  const matchingItems =
    app.pantry.filter(function (item) {
      const itemName =
        String(item.name || "")
          .toLowerCase();

      const itemQuantity =
        String(item.quantity || "")
          .toLowerCase();

      const searchMatches =
        !searchText ||
        itemName.includes(searchText) ||
        itemQuantity.includes(searchText);

      const categoryMatches =
        selectedCategory === "all" ||
        item.category === selectedCategory;

      return (
        searchMatches &&
        categoryMatches
      );
    });

  const grid =
    getElement("pantryItemGrid");

  if (grid) {
    grid.innerHTML =
      matchingItems
        .map(function (item) {
          const imageHTML = item.image
            ? `
              <img
                src="${escapeHTML(item.image)}"
                alt="${escapeHTML(item.name)}"
                style="
                  width: 72px;
                  height: 72px;
                  object-fit: contain;
                  margin-bottom: 10px;
                  border-radius: 11px;
                  background: white;
                "
                onerror="this.remove()"
              >
            `
            : `
              <div
                style="
                  font-size: 42px;
                  margin-bottom: 10px;
                "
              >
                🥫
              </div>
            `;

          const expirationDays =
            daysUntil(item.expiration);

          let expirationText =
            formatDate(item.expiration);

          if (
            Number.isFinite(expirationDays)
          ) {
            if (expirationDays < 0) {
              expirationText =
                "Expired";
            } else if (
              expirationDays === 0
            ) {
              expirationText =
                "Expires today";
            } else if (
              expirationDays <= 7
            ) {
              expirationText =
                "Expires in " +
                expirationDays +
                " day" +
                (
                  expirationDays === 1
                    ? ""
                    : "s"
                );
            }
          }

          return `
            <article class="pantry-item-card">

              ${imageHTML}

              <h3>
                ${escapeHTML(item.name)}
              </h3>

              ${
                item.brand
                  ? `
                    <p>
                      ${escapeHTML(item.brand)}
                    </p>
                  `
                  : ""
              }

              <p>
                ${
                  escapeHTML(item.quantity) ||
                  "Quantity not set"
                }
              </p>

              <p>
                ${escapeHTML(
                  item.category || "Pantry"
                )}
              </p>

              <p>
                ${escapeHTML(expirationText)}
              </p>

              ${
                item.barcode
                  ? `
                    <p>
                      Barcode:
                      ${escapeHTML(item.barcode)}
                    </p>
                  `
                  : ""
              }

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

  const emptyState =
    getElement("pantryEmptyState");

  if (emptyState) {
    emptyState.hidden =
      matchingItems.length > 0;
  }

  const count =
    getElement("pantryPageCount");

  if (count) {
    count.textContent =
      matchingItems.length +
      " item" +
      (
        matchingItems.length === 1
          ? ""
          : "s"
      );
  }

  renderDashboard();
}

function addPantryItem(event) {
  event.preventDefault();

  const nameInput =
    getElement("pantryItemNameInput");

  const name =
    nameInput?.value.trim();

  if (!name) {
    showToast(
      "Enter an item name",
      "error"
    );

    return;
  }

  app.pantry.push({
    id: createId("pantry"),

    name: name,

    quantity:
      getElement("pantryItemQuantityInput")
        ?.value.trim() || "",

    category:
      getElement("pantryItemCategorySelect")
        ?.value || "Pantry",

    expiration:
      getElement("pantryExpirationInput")
        ?.value || "",

    barcode:
      nameInput?.dataset.barcode || "",

    brand:
      nameInput?.dataset.brand || "",

    image:
      nameInput?.dataset.image || ""
  });

  saveData(
    STORAGE.pantry,
    app.pantry
  );

  event.target.reset();

  if (nameInput) {
    delete nameInput.dataset.barcode;
    delete nameInput.dataset.brand;
    delete nameInput.dataset.image;
  }

  closeModal("pantryItemModal");
  renderPantry();

  showToast("Pantry item added");
}

function deletePantryItem(itemId) {
  app.pantry =
    app.pantry.filter(function (item) {
      return item.id !== itemId;
    });

  saveData(
    STORAGE.pantry,
    app.pantry
  );

  renderPantry();

  showToast("Pantry item removed");
}

function findPantryRecipes() {
  const pantryNames =
    app.pantry
      .map(function (item) {
        return String(
          item.name || ""
        ).toLowerCase();
      })
      .filter(Boolean);

  if (!pantryNames.length) {
    showToast(
      "Add pantry items first",
      "error"
    );

    return;
  }

  const matches =
    getAllRecipes()
      .map(function (recipe) {
        const ingredientText =
          recipe.ingredients
            .join(" ")
            .toLowerCase();

        const matchingIngredients =
          pantryNames.filter(
            function (pantryName) {
              return (
                ingredientText.includes(
                  pantryName
                ) ||
                pantryName.includes(
                  ingredientText
                )
              );
            }
          );

        return {
          recipe: recipe,
          score:
            matchingIngredients.length
        };
      })
      .filter(function (result) {
        return result.score > 0;
      })
      .sort(function (
        first,
        second
      ) {
        return (
          second.score -
          first.score
        );
      });

  goToPage("recipes");

  if (!matches.length) {
    renderRecipeGrid(
      getElement("allRecipesGrid"),
      []
    );

    if (
      getElement("recipeResultsCount")
    ) {
      getElement(
        "recipeResultsCount"
      ).textContent =
        "0 pantry matches";
    }

    if (
      getElement("recipesEmptyState")
    ) {
      getElement(
        "recipesEmptyState"
      ).hidden = false;
    }

    showToast(
      "No pantry matches found",
      "error"
    );

    return;
  }

  renderRecipeGrid(
    getElement("allRecipesGrid"),
    matches.map(function (result) {
      return result.recipe;
    })
  );

  if (
    getElement("recipeResultsCount")
  ) {
    getElement(
      "recipeResultsCount"
    ).textContent =
      matches.length +
      " pantry match" +
      (
        matches.length === 1
          ? ""
          : "es"
      );
  }

  if (
    getElement("recipesEmptyState")
  ) {
    getElement(
      "recipesEmptyState"
    ).hidden = true;
  }

  showToast(
    "Showing your closest pantry matches"
  );
}

/* =========================================================
   GROCERY LIST
========================================================= */

function guessGroceryDepartment(itemName) {
  const value =
    String(itemName).toLowerCase();

  if (
    /chicken|beef|pork|turkey|sausage|steak|bacon|ham|shrimp|salmon|fish/.test(
      value
    )
  ) {
    return "Meat";
  }

  if (
    /milk|cheese|butter|cream|yogurt|egg/.test(
      value
    )
  ) {
    return "Dairy";
  }

  if (
    /apple|onion|garlic|pepper|tomato|lettuce|broccoli|carrot|lemon|lime|potato|pickle|cucumber|banana|avocado/.test(
      value
    )
  ) {
    return "Produce";
  }

  if (/frozen|ice cream/.test(value)) {
    return "Frozen";
  }

  if (
    /bread|roll|bun|tortilla|croissant/.test(
      value
    )
  ) {
    return "Bakery";
  }

  return "Pantry";
}

function renderGroceries() {
  const departments =
    Array.from(
      new Set(
        app.groceries.map(
          function (item) {
            return (
              item.category ||
              "Pantry"
            );
          }
        )
      )
    );

  const list =
    getElement("groceryDepartmentList");

  if (list) {
    list.innerHTML =
      departments
        .map(function (department) {
          const items =
            app.groceries.filter(
              function (item) {
                return (
                  (
                    item.category ||
                    "Pantry"
                  ) === department
                );
              }
            );

          const rows =
            items
              .map(function (item) {
                return `
                  <div
                    class="grocery-item-row ${
                      item.completed
                        ? "completed"
                        : ""
                    }"
                  >

                    <input
                      type="checkbox"
                      data-toggle-grocery="${escapeHTML(item.id)}"
                      ${
                        item.completed
                          ? "checked"
                          : ""
                      }
                      aria-label="Mark ${escapeHTML(item.name)} complete"
                    >

                    <div class="grocery-item-name">

                      <strong>
                        ${escapeHTML(item.name)}
                      </strong>

                      <small>
                        ${escapeHTML(
                          item.quantity || ""
                        )}
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

              <h3>
                ${escapeHTML(department)}
              </h3>

              ${rows}

            </section>
          `;
        })
        .join("");
  }

  const totalItems =
    app.groceries.length;

  const completedItems =
    app.groceries.filter(
      function (item) {
        return item.completed;
      }
    ).length;

  const remainingItems =
    totalItems - completedItems;

  const percentage =
    totalItems
      ? Math.round(
          (
            completedItems /
            totalItems
          ) * 100
        )
      : 0;

  const emptyState =
    getElement("groceryEmptyState");

  if (emptyState) {
    emptyState.hidden =
      totalItems > 0;
  }

  if (
    getElement("groceryTotalCount")
  ) {
    getElement(
      "groceryTotalCount"
    ).textContent = totalItems;
  }

  if (
    getElement("groceryCompletedCount")
  ) {
    getElement(
      "groceryCompletedCount"
    ).textContent =
      completedItems;
  }

  if (
    getElement("groceryRemainingCount")
  ) {
    getElement(
      "groceryRemainingCount"
    ).textContent =
      remainingItems;
  }

  if (
    getElement(
      "groceryPageProgressFill"
    )
  ) {
    getElement(
      "groceryPageProgressFill"
    ).style.width =
      percentage + "%";
  }

  updateNavigationCounts();
  renderDashboard();
}

function addGroceryItem(event) {
  event.preventDefault();

  const name =
    getElement("groceryItemNameInput")
      ?.value.trim();

  if (!name) {
    showToast(
      "Enter an item name",
      "error"
    );

    return;
  }

  app.groceries.push({
    id: createId("grocery"),

    name: name,

    quantity:
      getElement(
        "groceryItemQuantityInput"
      )?.value.trim() || "",

    category:
      getElement(
        "groceryItemCategorySelect"
      )?.value ||
      guessGroceryDepartment(name),

    completed: false
  });

  saveData(
    STORAGE.groceries,
    app.groceries
  );

  event.target.reset();

  closeModal("groceryItemModal");
  renderGroceries();

  showToast(
    "Added to grocery list"
  );
}

function addRecipeToGroceries(recipeId) {
  const recipe =
    getAllRecipes().find(
      function (item) {
        return item.id === recipeId;
      }
    );

  if (!recipe) {
    return;
  }

  const adjustedRecipe =
    adjustRecipe(recipe);

  adjustedRecipe.ingredients.forEach(
    function (ingredient) {
      app.groceries.push({
        id: createId("grocery"),
        name: ingredient,
        quantity: "",
        category:
          guessGroceryDepartment(
            ingredient
          ),
        completed: false
      });
    }
  );

  saveData(
    STORAGE.groceries,
    app.groceries
  );

  renderGroceries();

  showToast(
    "Recipe ingredients added"
  );
}

/* =========================================================
   PROFILE
========================================================= */

function renderProfile() {
  if (
    getElement("profileNameInput")
  ) {
    getElement(
      "profileNameInput"
    ).value =
      app.profile.name || "Cole";
  }

  if (
    getElement(
      "defaultServingsSelect"
    )
  ) {
    getElement(
      "defaultServingsSelect"
    ).value =
      String(
        app.profile.servings || 4
      );
  }

  if (
    getElement("measurementSelect")
  ) {
    getElement(
      "measurementSelect"
    ).value =
      app.profile.measurement ||
      "us";
  }

  if (
    getElement("spiceLevelSelect")
  ) {
    getElement(
      "spiceLevelSelect"
    ).value =
      app.profile.spiceLevel ||
      "Medium";
  }

  if (
    getElement(
      "automaticAdjustmentToggle"
    )
  ) {
    getElement(
      "automaticAdjustmentToggle"
    ).checked =
      Boolean(
        app.profile
          .automaticAdjustments
      );
  }

  document
    .querySelectorAll(
      'input[name="allergy"]'
    )
    .forEach(function (input) {
      input.checked =
        (
          app.profile.allergies ||
          []
        ).includes(input.value);
    });

  document
    .querySelectorAll(
      'input[name="diet"]'
    )
    .forEach(function (input) {
      input.checked =
        (
          app.profile.diets ||
          []
        ).includes(input.value);
    });

  renderDislikedFoods();
  updateProfileDisplay();
}

function saveProfile() {
  const selectedAllergies =
    Array.from(
      document.querySelectorAll(
        'input[name="allergy"]:checked'
      )
    ).map(function (input) {
      return input.value;
    });

  const selectedDiets =
    Array.from(
      document.querySelectorAll(
        'input[name="diet"]:checked'
      )
    ).map(function (input) {
      return input.value;
    });

  app.profile = {
    name:
      getElement("profileNameInput")
        ?.value.trim() ||
      "Chef",

    servings:
      Number(
        getElement(
          "defaultServingsSelect"
        )?.value
      ) || 4,

    measurement:
      getElement(
        "measurementSelect"
      )?.value || "us",

    spiceLevel:
      getElement(
        "spiceLevelSelect"
      )?.value || "Medium",

    allergies:
      selectedAllergies,

    diets:
      selectedDiets,

    dislikedFoods:
      app.profile.dislikedFoods ||
      [],

    automaticAdjustments:
      Boolean(
        getElement(
          "automaticAdjustmentToggle"
        )?.checked
      )
  };

  saveData(
    STORAGE.profile,
    app.profile
  );

  updateProfileDisplay();
  renderFeaturedRecipes();
  renderAllRecipes();

  showToast("Profile saved");
}

function addDislikedFood() {
  const input =
    getElement("dislikedFoodInput");

  const food =
    input?.value.trim();

  if (!food) {
    return;
  }

  const alreadyExists =
    (
      app.profile.dislikedFoods ||
      []
    ).some(function (savedFood) {
      return (
        savedFood.toLowerCase() ===
        food.toLowerCase()
      );
    });

  if (!alreadyExists) {
    app.profile.dislikedFoods.push(
      food
    );

    saveData(
      STORAGE.profile,
      app.profile
    );
  }

  input.value = "";

  renderDislikedFoods();
}

function renderDislikedFoods() {
  const container =
    getElement("dislikedFoodList");

  if (!container) {
    return;
  }

  container.innerHTML =
    (
      app.profile.dislikedFoods ||
      []
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
  const name =
    app.profile.name || "Chef";

  const firstLetter =
    name.charAt(0).toUpperCase();

  document
    .querySelectorAll(
      ".profile-avatar"
    )
    .forEach(function (avatar) {
      avatar.textContent =
        firstLetter;
    });

  if (
    getElement(
      "sidebarProfileName"
    )
  ) {
    getElement(
      "sidebarProfileName"
    ).textContent = name;
  }

  const profileButtonName =
    document.querySelector(
      ".profile-button-name"
    );

  if (profileButtonName) {
    profileButtonName.textContent =
      name;
  }

  if (
    getElement(
      "sidebarProfileDiet"
    )
  ) {
    getElement(
      "sidebarProfileDiet"
    ).textContent =
      (
        app.profile.diets ||
        []
      )[0] ||
      "Personal profile";
  }

  const heroBadges =
    getElement(
      "heroProfileBadges"
    );

  if (heroBadges) {
    const automaticText =
      app.profile
        .automaticAdjustments
        ? "✓ Allergy profile active"
        : "Manual adjustments";

    const dietText =
      (
        app.profile.diets ||
        []
      )[0] ||
      "Personal profile";

    const measurementText =
      app.profile.measurement ===
      "metric"
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

  const allergyChips =
    getElement("allergyChipList");

  if (allergyChips) {
    const restrictions =
      getRestrictions();

    allergyChips.innerHTML =
      restrictions.length
        ? restrictions
            .map(function (
              restriction
            ) {
              return `
                <span class="allergy-chip">
                  ${escapeHTML(
                    restriction
                  )}
                </span>
              `;
            })
            .join("")
        : `
          <span class="allergy-chip muted">
            No allergies selected
          </span>
        `;
  }
}

/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {
  const expiringItems =
    app.pantry.filter(
      function (item) {
        const days =
          daysUntil(
            item.expiration
          );

        return (
          days >= 0 &&
          days <= 7
        );
      }
    );

  if (
    getElement("pantryItemCount")
  ) {
    getElement(
      "pantryItemCount"
    ).textContent =
      app.pantry.length;
  }

  if (
    getElement(
      "pantryExpiringCount"
    )
  ) {
    getElement(
      "pantryExpiringCount"
    ).textContent =
      expiringItems.length;
  }

  const pantryPreview =
    getElement(
      "pantryPreviewList"
    );

  if (pantryPreview) {
    pantryPreview.innerHTML =
      app.pantry.length
        ? app.pantry
            .slice(0, 4)
            .map(function (item) {
              return `
                <div class="preview-list-item">

                  <strong>
                    ${escapeHTML(item.name)}
                  </strong>

                  <small>
                    ${escapeHTML(
                      item.quantity ||
                      item.category ||
                      ""
                    )}
                  </small>

                </div>
              `;
            })
            .join("")
        : `
          <div class="mini-empty-state">
            Add pantry items to see them here.
          </div>
        `;
  }

  const total =
    app.groceries.length;

  const completed =
    app.groceries.filter(
      function (item) {
        return item.completed;
      }
    ).length;

  const percentage =
    total
      ? Math.round(
          (
            completed /
            total
          ) * 100
        )
      : 0;

  if (
    getElement(
      "groceryProgressText"
    )
  ) {
    getElement(
      "groceryProgressText"
    ).textContent =
      completed +
      " of " +
      total;
  }

  if (
    getElement(
      "groceryProgressFill"
    )
  ) {
    getElement(
      "groceryProgressFill"
    ).style.width =
      percentage + "%";
  }

  const groceryPreview =
    getElement(
      "groceryPreviewList"
    );

  if (groceryPreview) {
    groceryPreview.innerHTML =
      app.groceries.length
        ? app.groceries
            .slice(0, 4)
            .map(function (item) {
              return `
                <div class="preview-list-item">

                  <strong>
                    ${escapeHTML(item.name)}
                  </strong>

                  <small>
                    ${
                      item.completed
                        ? "Completed"
                        : escapeHTML(
                            item.quantity ||
                            item.category ||
                            ""
                          )
                    }
                  </small>

                </div>
              `;
            })
            .join("")
        : `
          <div class="mini-empty-state">
            Your grocery list is currently empty.
          </div>
        `;
  }

  updateNavigationCounts();
}

function updateNavigationCounts() {
  if (
    getElement(
      "favoritesNavCount"
    )
  ) {
    getElement(
      "favoritesNavCount"
    ).textContent =
      app.favorites.length;
  }

  if (
    getElement(
      "groceryNavCount"
    )
  ) {
    const remaining =
      app.groceries.filter(
        function (item) {
          return !item.completed;
        }
      ).length;

    getElement(
      "groceryNavCount"
    ).textContent =
      remaining;
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

  const mealTypes = [
    "Breakfast",
    "Lunch",
    "Dinner"
  ];

  const grid =
    getElement("mealPlannerGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML =
    days
      .map(function (day) {
        const slots =
          mealTypes
            .map(function (mealType) {
              const key =
                day + "-" + mealType;

              const savedMeal =
                app.mealPlan[key] || "";

              return `
                <div class="meal-slot">

                  <small>
                    ${mealType}
                  </small>

                  <button
                    type="button"
                    data-meal-slot="${escapeHTML(key)}"
                  >
                    ${
                      savedMeal
                        ? escapeHTML(savedMeal)
                        : "+ Add meal"
                    }
                  </button>

                </div>
              `;
            })
            .join("");

        return `
          <article class="meal-day-card">

            <h3>
              ${day}
            </h3>

            ${slots}

          </article>
        `;
      })
      .join("");
}

function automaticallyPlanMeals() {
  const allRecipes =
    getAllRecipes();

  if (!allRecipes.length) {
    showToast(
      "No recipes are available",
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

  const mealTypes = [
    "Breakfast",
    "Lunch",
    "Dinner"
  ];

  days.forEach(function (day) {
    mealTypes.forEach(
      function (mealType) {
        const matchingRecipes =
          allRecipes.filter(
            function (recipe) {
              return (
                recipe.category
                  .toLowerCase()
                  .includes(
                    mealType.toLowerCase()
                  )
              );
            }
          );

        const recipePool =
          matchingRecipes.length
            ? matchingRecipes
            : allRecipes;

        const selectedRecipe =
          recipePool[
            Math.floor(
              Math.random() *
              recipePool.length
            )
          ];

        app.mealPlan[
          day + "-" + mealType
        ] = selectedRecipe.title;
      }
    );
  });

  saveData(
    STORAGE.mealPlan,
    app.mealPlan
  );

  renderMealPlanner();

  showToast(
    "Your weekly meal plan is ready"
  );
}

function changeMealSlot(slotKey) {
  const allRecipes =
    getAllRecipes();

  if (!allRecipes.length) {
    return;
  }

  const currentTitle =
    app.mealPlan[slotKey] || "";

  const currentIndex =
    allRecipes.findIndex(
      function (recipe) {
        return (
          recipe.title ===
          currentTitle
        );
      }
    );

  const nextIndex =
    currentIndex < 0
      ? 0
      : (
          currentIndex + 1
        ) % allRecipes.length;

  app.mealPlan[slotKey] =
    allRecipes[nextIndex].title;

  saveData(
    STORAGE.mealPlan,
    app.mealPlan
  );

  renderMealPlanner();
}

/* =========================================================
   SURPRISE RECIPE
========================================================= */

function surpriseMe() {
  const allRecipes =
    getAllRecipes();

  if (!allRecipes.length) {
    showToast(
      "No recipes are available",
      "error"
    );

    return;
  }

  const randomRecipe =
    allRecipes[
      Math.floor(
        Math.random() *
        allRecipes.length
      )
    ];

  openRecipe(randomRecipe.id);
}

/* =========================================================
   AI-STYLE RECIPE GENERATOR
========================================================= */

function generateRecipe() {
  const ingredientText =
    getElement("aiIngredientsInput")
      ?.value.trim() || "";

  const ingredients =
    ingredientText
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
    getElement("aiMealTypeSelect")
      ?.value || "Dinner";

  const timeValue =
    getElement("aiTimeSelect")
      ?.value || "30";

  const cuisine =
    getElement("aiCuisineSelect")
      ?.value || "Any";

  const difficulty =
    getElement("aiDifficultySelect")
      ?.value || "Easy";

  const useProfile =
    Boolean(
      getElement(
        "aiUseProfileCheckbox"
      )?.checked
    );

  const titleCuisine =
    cuisine === "Any"
      ? ""
      : cuisine + " ";

  const titleMeal =
    mealType === "Any"
      ? "Skillet"
      : mealType;

  const generatedRecipe = {
    id: createId("generated"),

    title:
      titleCuisine +
      ingredients[0] +
      " " +
      titleMeal,

    description:
      "A custom recipe made with " +
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

    prepTime: 10,

    cookTime:
      timeValue === "Any"
        ? 20
        : Math.max(
            5,
            Number(timeValue) - 10
          ),

    totalTime:
      timeValue === "Any"
        ? 30
        : Number(timeValue),

    servings:
      app.profile.servings || 4,

    ingredients:
      ingredients
        .map(function (ingredient) {
          return (
            "1 portion " +
            ingredient
          );
        })
        .concat([
          "1 tablespoon olive oil",
          "Salt and black pepper to taste",
          "Optional herbs or seasoning"
        ]),

    instructions: [
      "Wash, prepare, and measure all ingredients.",
      "Heat the olive oil in a large skillet over medium heat.",
      "Add the ingredients that need the longest cooking time first.",
      "Add the remaining ingredients and cook until everything is safely cooked and tender.",
      "Season to taste.",
      "Serve warm."
    ],

    emoji: "👨‍🍳",
    rating: 4.8,
    imported: false
  };

  const displayedRecipe =
    useProfile
      ? adjustRecipe(
          generatedRecipe
        )
      : generatedRecipe;

  const container =
    getElement(
      "generatedRecipeContainer"
    );

  if (!container) {
    return;
  }

  const adjustmentHTML =
    displayedRecipe.adjustments &&
    displayedRecipe.adjustments.length
      ? `
        <div class="recipe-adjustment-alert">

          <strong>
            Profile adjustments applied
          </strong>

          <p>
            ${escapeHTML(
              displayedRecipe
                .adjustments
                .join(", ")
            )}
          </p>

        </div>
      `
      : "";

  container.hidden = false;

  container.innerHTML = `
    <span class="section-eyebrow">
      Generated for
      ${escapeHTML(
        app.profile.name ||
        "Chef"
      )}
    </span>

    <h2>
      ${escapeHTML(
        displayedRecipe.title
      )}
    </h2>

    <p>
      ${escapeHTML(
        displayedRecipe.description
      )}
    </p>

    <div class="recipe-modal-meta">

      <span class="recipe-meta-pill">
        ⏱
        ${displayedRecipe.totalTime}
        minutes
      </span>

      <span class="recipe-meta-pill">
        🍽
        ${displayedRecipe.servings}
        servings
      </span>

      <span class="recipe-meta-pill">
        ${escapeHTML(
          displayedRecipe.difficulty
        )}
      </span>

    </div>

    ${adjustmentHTML}

    <div class="recipe-detail-grid">

      <section class="recipe-detail-section">

        <h2>
          Ingredients
        </h2>

        <ul class="ingredient-list">

          ${displayedRecipe.ingredients
            .map(function (ingredient) {
              return `
                <li>
                  <span>
                    ${escapeHTML(
                      ingredient
                    )}
                  </span>
                </li>
              `;
            })
            .join("")}

        </ul>

      </section>

      <section class="recipe-detail-section">

        <h2>
          Instructions
        </h2>

        <ol class="instruction-list">

          ${displayedRecipe.instructions
            .map(function (step) {
              return `
                <li>
                  ${escapeHTML(step)}
                </li>
              `;
            })
            .join("")}

        </ol>

      </section>

    </div>

    <button
      class="primary-button"
      id="saveGeneratedRecipeButton"
      type="button"
    >
      Save to my recipes
    </button>
  `;

  getElement(
    "saveGeneratedRecipeButton"
  )?.addEventListener(
    "click",
    function () {
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

      showToast(
        "Generated recipe saved"
      );

      this.disabled = true;
      this.textContent =
        "Recipe saved";
    }
  );

  container.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* =========================================================
   WEBSITE IMPORT
========================================================= */

function importRecipe() {
  const urlInput =
    getElement("recipeUrlInput");

  const status =
    getElement("importStatus");

  const url =
    urlInput?.value.trim();

  if (!url) {
    showToast(
      "Paste a recipe website address",
      "error"
    );

    return;
  }

  let parsedUrl;

  try {
    parsedUrl = new URL(url);
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
      "Preparing imported recipe...";
  }

  const websiteName =
    parsedUrl.hostname
      .replace(/^www\./, "");

  window.setTimeout(
    function () {
      const importedRecipe = {
        id: createId("imported"),

        title:
          "Imported recipe from " +
          websiteName,

        description:
          "A saved recipe from " +
          websiteName +
          ". Review and customize its details.",

        category: "Dinner",
        cuisine: "Imported",
        difficulty: "Easy",

        prepTime: 10,
        cookTime: 20,
        totalTime: 30,

        servings:
          app.profile.servings || 4,

        ingredients: [
          "Add the ingredients from the original recipe page"
        ],

        instructions: [
          "Open the original recipe website.",
          "Copy the ingredients into this saved recipe.",
          "Copy or rewrite the cooking directions.",
          "Review the recipe before cooking."
        ],

        emoji: "🌐",
        rating: 4.5,
        sourceUrl: url,
        imported: true
      };

      app.customRecipes.unshift(
        importedRecipe
      );

      saveData(
        STORAGE.customRecipes,
        app.customRecipes
      );

      if (status) {
        status.textContent =
          "Recipe saved. Some website details must be entered manually.";
      }

      if (urlInput) {
        urlInput.value = "";
      }

      renderFeaturedRecipes();
      renderAllRecipes();

      showToast(
        "Recipe website saved"
      );
    },
    600
  );
}

/* =========================================================
   COOKING TIMERS
========================================================= */

function startRecipeTimer(recipeId) {
  const recipe =
    getAllRecipes().find(
      function (item) {
        return item.id === recipeId;
      }
    );

  if (!recipe) {
    return;
  }

  const enteredMinutes =
    window.prompt(
      "How many minutes for " +
      recipe.title +
      "?",
      String(
        recipe.cookTime ||
        recipe.totalTime ||
        10
      )
    );

  if (enteredMinutes === null) {
    return;
  }

  const minutes =
    Number(enteredMinutes);

  if (
    !Number.isFinite(minutes) ||
    minutes <= 0
  ) {
    showToast(
      "Enter a valid timer length",
      "error"
    );

    return;
  }

  app.timers.push({
    id: createId("timer"),
    label: recipe.title,
    endingTime:
      Date.now() +
      minutes * 60000,
    finished: false
  });

  renderTimers();

  getElement("timerDrawer")
    ?.classList.add("open");

  showToast("Timer started");
}

function renderTimers() {
  const list =
    getElement("timerList");

  const floatingButton =
    getElement(
      "floatingTimerButton"
    );

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

  if (
    getElement(
      "activeTimerCount"
    )
  ) {
    getElement(
      "activeTimerCount"
    ).textContent =
      app.timers.length;
  }

  list.innerHTML =
    app.timers
      .map(function (timer) {
        const remainingMilliseconds =
          Math.max(
            0,
            timer.endingTime -
            Date.now()
          );

        const minutes =
          Math.floor(
            remainingMilliseconds /
            60000
          );

        const seconds =
          Math.floor(
            (
              remainingMilliseconds %
              60000
            ) / 1000
          );

        return `
          <div class="timer-item">

            <strong>
              ${escapeHTML(
                timer.label
              )}
            </strong>

            <span class="timer-countdown">
              ${String(minutes)
                .padStart(2, "0")}:
              ${String(seconds)
                .padStart(2, "0")}
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
  let completedTimer = false;

  app.timers.forEach(
    function (timer) {
      if (
        !timer.finished &&
        Date.now() >=
          timer.endingTime
      ) {
        timer.finished = true;
        completedTimer = true;

        showToast(
          timer.label +
          " timer is finished"
        );

        if (
          app.settings
            .timerNotifications &&
          "Notification" in window &&
          Notification.permission ===
            "granted"
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
    }
  );

  app.timers =
    app.timers.filter(
      function (timer) {
        return (
          !timer.finished ||
          Date.now() -
            timer.endingTime <
            30000
        );
      }
    );

  renderTimers();

  if (completedTimer) {
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
    Boolean(
      app.settings.darkMode
    )
  );

  if (
    getElement("darkModeToggle")
  ) {
    getElement(
      "darkModeToggle"
    ).checked =
      Boolean(
        app.settings.darkMode
      );
  }

  if (
    getElement(
      "timerNotificationToggle"
    )
  ) {
    getElement(
      "timerNotificationToggle"
    ).checked =
      Boolean(
        app.settings
          .timerNotifications
      );
  }

  if (
    getElement(
      "dailyRecipeToggle"
    )
  ) {
    getElement(
      "dailyRecipeToggle"
    ).checked =
      Boolean(
        app.settings.dailyRecipe
      );
  }
}

async function saveSettings() {
  app.settings = {
    darkMode:
      Boolean(
        getElement(
          "darkModeToggle"
        )?.checked
      ),

    timerNotifications:
      Boolean(
        getElement(
          "timerNotificationToggle"
        )?.checked
      ),

    dailyRecipe:
      Boolean(
        getElement(
          "dailyRecipeToggle"
        )?.checked
      )
  };

  saveData(
    STORAGE.settings,
    app.settings
  );

  applySettings();

  if (
    app.settings
      .timerNotifications &&
    "Notification" in window &&
    Notification.permission ===
      "default"
  ) {
    try {
      await Notification
        .requestPermission();
    } catch (error) {
      console.warn(
        "Notification permission failed:",
        error
      );
    }
  }
}

function resetAppData() {
  const confirmed =
    window.confirm(
      "Reset all Recipe Buddy saved information?"
    );

  if (!confirmed) {
    return;
  }

  Object.values(
    STORAGE
  ).forEach(function (key) {
    localStorage.removeItem(key);
  });

  window.location.reload();
}

/* =========================================================
   HEADER SEARCH
========================================================= */

function searchFromHeader() {
  const input =
    getElement(
      "globalSearchInput"
    );

  const searchText =
    input?.value.trim() || "";

  if (!searchText) {
    return;
  }

  goToPage("recipes");

  const recipeSearch =
    getElement(
      "recipeSearchInput"
    );

  if (recipeSearch) {
    recipeSearch.value =
      searchText;
  }

  renderAllRecipes();
}

/* =========================================================
   GLOBAL CLICK HANDLER
========================================================= */

document.addEventListener(
  "click",
  function (event) {
    const pageButton =
      event.target.closest(
        "[data-page]"
      );

    if (pageButton) {
      event.preventDefault();

      goToPage(
        pageButton.dataset.page
      );

      return;
    }

    const modalCloseButton =
      event.target.closest(
        "[data-close-modal]"
      );

    if (modalCloseButton) {
      closeModal(
        modalCloseButton.dataset
          .closeModal
      );

      return;
    }

    const favoriteButton =
      event.target.closest(
        "[data-favorite-id]"
      );

    if (favoriteButton) {
      event.stopPropagation();

      toggleFavorite(
        favoriteButton.dataset
          .favoriteId
      );

      return;
    }

    const modalFavoriteButton =
      event.target.closest(
        "[data-modal-favorite]"
      );

    if (modalFavoriteButton) {
      const recipeId =
        modalFavoriteButton.dataset
          .modalFavorite;

      toggleFavorite(recipeId);
      openRecipe(recipeId);

      return;
    }

    const recipeCard =
      event.target.closest(
        "[data-recipe-id]"
      );

    if (recipeCard) {
      openRecipe(
        recipeCard.dataset.recipeId
      );

      return;
    }

    const categoryButton =
      event.target.closest(
        "[data-category]"
      );

    if (categoryButton) {
      goToPage("recipes");

      const categoryFilter =
        getElement(
          "categoryFilter"
        );

      if (categoryFilter) {
        categoryFilter.value =
          categoryButton.dataset
            .category;
      }

      renderAllRecipes();

      return;
    }

    const deletePantryButton =
      event.target.closest(
        "[data-delete-pantry]"
      );

    if (deletePantryButton) {
      deletePantryItem(
        deletePantryButton.dataset
          .deletePantry
      );

      return;
    }

    const pantryToGroceryButton =
      event.target.closest(
        "[data-pantry-to-grocery]"
      );

    if (pantryToGroceryButton) {
      const pantryItem =
        app.pantry.find(
          function (item) {
            return (
              item.id ===
              pantryToGroceryButton
                .dataset
                .pantryToGrocery
            );
          }
        );

      if (pantryItem) {
        app.groceries.push({
          id: createId("grocery"),
          name: pantryItem.name,
          quantity:
            pantryItem.quantity,
          category:
            pantryItem.category ||
            guessGroceryDepartment(
              pantryItem.name
            ),
          completed: false
        });

        saveData(
          STORAGE.groceries,
          app.groceries
        );

        renderGroceries();

        showToast(
          "Added to grocery list"
        );
      }

      return;
    }

    const deleteGroceryButton =
      event.target.closest(
        "[data-delete-grocery]"
      );

    if (deleteGroceryButton) {
      app.groceries =
        app.groceries.filter(
          function (item) {
            return (
              item.id !==
              deleteGroceryButton
                .dataset
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

    if (
      addRecipeIngredientsButton
    ) {
      addRecipeToGroceries(
        addRecipeIngredientsButton
          .dataset
          .addAllGroceries
      );

      return;
    }

    const saveNoteButton =
      event.target.closest(
        "[data-save-note]"
      );

    if (saveNoteButton) {
      app.notes[
        saveNoteButton.dataset
          .saveNote
      ] =
        getElement(
          "recipeNoteInput"
        )?.value || "";

      saveData(
        STORAGE.notes,
        app.notes
      );

      showToast(
        "Recipe note saved"
      );

      return;
    }

    const ratingButton =
      event.target.closest(
        "[data-rate-recipe]"
      );

    if (ratingButton) {
      const recipeId =
        ratingButton.dataset
          .rateRecipe;

      app.ratings[recipeId] =
        Number(
          ratingButton.dataset
            .rating
        );

      saveData(
        STORAGE.ratings,
        app.ratings
      );

      openRecipe(recipeId);

      showToast("Rating saved");

      return;
    }

    const recipeTimerButton =
      event.target.closest(
        "[data-start-recipe-timer]"
      );

    if (recipeTimerButton) {
      startRecipeTimer(
        recipeTimerButton.dataset
          .startRecipeTimer
      );

      return;
    }

    const removeDislikedButton =
      event.target.closest(
        "[data-remove-disliked]"
      );

    if (removeDislikedButton) {
      app.profile.dislikedFoods =
        (
          app.profile
            .dislikedFoods ||
          []
        ).filter(
          function (food) {
            return (
              food !==
              removeDislikedButton
                .dataset
                .removeDisliked
            );
          }
        );

      saveData(
        STORAGE.profile,
        app.profile
      );

      renderDislikedFoods();

      return;
    }

    const deleteTimerButton =
      event.target.closest(
        "[data-delete-timer]"
      );

    if (deleteTimerButton) {
      app.timers =
        app.timers.filter(
          function (timer) {
            return (
              timer.id !==
              deleteTimerButton
                .dataset
                .deleteTimer
            );
          }
        );

      renderTimers();

      return;
    }

    const mealSlotButton =
      event.target.closest(
        "[data-meal-slot]"
      );

    if (mealSlotButton) {
      changeMealSlot(
        mealSlotButton.dataset
          .mealSlot
      );
    }
  }
);

/* =========================================================
   CHECKBOX HANDLER
========================================================= */

document.addEventListener(
  "change",
  function (event) {
    const groceryCheckbox =
      event.target.closest(
        "[data-toggle-grocery]"
      );

    if (!groceryCheckbox) {
      return;
    }

    const groceryItem =
      app.groceries.find(
        function (item) {
          return (
            item.id ===
            groceryCheckbox.dataset
              .toggleGrocery
          );
        }
      );

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
  }
);

/* =========================================================
   CONNECT PAGE BUTTONS
========================================================= */

function connectButtons() {
  getElement(
    "mobileMenuButton"
  )?.addEventListener(
    "click",
    openSidebar
  );

  getElement(
    "sidebarCloseButton"
  )?.addEventListener(
    "click",
    closeSidebar
  );

  getElement(
    "sidebarOverlay"
  )?.addEventListener(
    "click",
    closeSidebar
  );

  getElement(
    "surpriseMeButton"
  )?.addEventListener(
    "click",
    surpriseMe
  );

  getElement(
    "globalSearchInput"
  )?.addEventListener(
    "input",
    function () {
      const text =
        this.value.trim();

      const clearButton =
        getElement(
          "searchClearButton"
        );

      if (clearButton) {
        clearButton.hidden =
          !text;
      }
    }
  );

  getElement(
    "globalSearchInput"
  )?.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Enter") {
        searchFromHeader();
      }
    }
  );

  getElement(
    "searchClearButton"
  )?.addEventListener(
    "click",
    function () {
      const input =
        getElement(
          "globalSearchInput"
        );

      if (input) {
        input.value = "";
        input.focus();
      }

      this.hidden = true;
    }
  );

  [
    "recipeSearchInput",
    "categoryFilter",
    "timeFilter",
    "difficultyFilter"
  ].forEach(function (id) {
    getElement(id)
      ?.addEventListener(
        "input",
        renderAllRecipes
      );

    getElement(id)
      ?.addEventListener(
        "change",
        renderAllRecipes
      );
  });

  getElement(
    "clearRecipeFiltersButton"
  )?.addEventListener(
    "click",
    function () {
      if (
        getElement(
          "recipeSearchInput"
        )
      ) {
        getElement(
          "recipeSearchInput"
        ).value = "";
      }

      if (
        getElement(
          "categoryFilter"
        )
      ) {
        getElement(
          "categoryFilter"
        ).value = "all";
      }

      if (
        getElement("timeFilter")
      ) {
        getElement(
          "timeFilter"
        ).value = "all";
      }

      if (
        getElement(
          "difficultyFilter"
        )
      ) {
        getElement(
          "difficultyFilter"
        ).value = "all";
      }

      renderAllRecipes();
    }
  );

  getElement(
    "addPantryItemButton"
  )?.addEventListener(
    "click",
    function () {
      openModal(
        "pantryItemModal"
      );
    }
  );

  getElement(
    "pantryItemForm"
  )?.addEventListener(
    "submit",
    addPantryItem
  );

  getElement(
    "pantrySearchInput"
  )?.addEventListener(
    "input",
    renderPantry
  );

  getElement(
    "pantryCategoryFilter"
  )?.addEventListener(
    "change",
    renderPantry
  );

  getElement(
    "findPantryRecipesButton"
  )?.addEventListener(
    "click",
    findPantryRecipes
  );

  [
    "openBarcodeScannerButton",
    "pantryBarcodeButton"
  ].forEach(function (id) {
    getElement(id)
      ?.addEventListener(
        "click",
        function () {
          const status =
            getElement(
              "scannerStatus"
            );

          if (status) {
            status.textContent =
              "Press Start camera and allow camera access.";
          }

          openModal(
            "barcodeScannerModal"
          );
        }
      );
  });

  [
    "addGroceryItemButton",
    "quickAddGroceryButton"
  ].forEach(function (id) {
    getElement(id)
      ?.addEventListener(
        "click",
        function () {
          openModal(
            "groceryItemModal"
          );
        }
      );
  });

  getElement(
    "groceryItemForm"
  )?.addEventListener(
    "submit",
    addGroceryItem
  );

  getElement(
    "clearCompletedGroceriesButton"
  )?.addEventListener(
    "click",
    function () {
      app.groceries =
        app.groceries.filter(
          function (item) {
            return !item.completed;
          }
        );

      saveData(
        STORAGE.groceries,
        app.groceries
      );

      renderGroceries();

      showToast(
        "Completed items cleared"
      );
    }
  );

  getElement(
    "saveProfileButton"
  )?.addEventListener(
    "click",
    saveProfile
  );

  getElement(
    "addDislikedFoodButton"
  )?.addEventListener(
    "click",
    addDislikedFood
  );

  getElement(
    "dislikedFoodInput"
  )?.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        addDislikedFood();
      }
    }
  );

  getElement(
    "generateRecipeButton"
  )?.addEventListener(
    "click",
    generateRecipe
  );

  document
    .querySelectorAll(
      "[data-prompt]"
    )
    .forEach(function (button) {
      button.addEventListener(
        "click",
        function () {
          const input =
            getElement(
              "aiIngredientsInput"
            );

          if (input) {
            input.value =
              button.dataset.prompt;

            input.focus();
          }
        }
      );
    });

  getElement(
    "importRecipeButton"
  )?.addEventListener(
    "click",
    importRecipe
  );

  getElement(
    "autoPlanMealsButton"
  )?.addEventListener(
    "click",
    automaticallyPlanMeals
  );

  [
    "darkModeToggle",
    "timerNotificationToggle",
    "dailyRecipeToggle"
  ].forEach(function (id) {
    getElement(id)
      ?.addEventListener(
        "change",
        saveSettings
      );
  });

  getElement(
    "resetAppDataButton"
  )?.addEventListener(
    "click",
    resetAppData
  );

  getElement(
    "floatingTimerButton"
  )?.addEventListener(
    "click",
    function () {
      getElement(
        "timerDrawer"
      )?.classList.add("open");
    }
  );

  getElement(
    "closeTimerDrawerButton"
  )?.addEventListener(
    "click",
    function () {
      getElement(
        "timerDrawer"
      )?.classList.remove("open");
    }
  );

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
        .forEach(
          function (modal) {
            closeModal(modal.id);
          }
        );

      closeSidebar();

      getElement(
        "timerDrawer"
      )?.classList.remove("open");
    }
  );
}

/* =========================================================
   SERVICE WORKER
========================================================= */

function registerServiceWorker() {
  if (
    !(
      "serviceWorker" in
      navigator
    )
  ) {
    return;
  }

  window.addEventListener(
    "load",
    function () {
      navigator.serviceWorker
        .register("./sw.js")
        .then(function (
          registration
        ) {
          console.log(
            "Recipe Buddy service worker loaded.",
            registration.scope
          );
        })
        .catch(function (error) {
          console.warn(
            "Service worker could not load:",
            error
          );
        });
    }
  );
}

/* =========================================================
   START APPLICATION
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
  renderDashboard();

  registerServiceWorker();

  window.setInterval(
    updateTimers,
    1000
  );

  if (!getAllRecipes().length) {
    console.warn(
      "No recipes were found. Make sure recipes.js loads before app.js and includes window.recipes = recipes."
    );
  } else {
    console.log(
      getAllRecipes().length +
      " Recipe Buddy recipes loaded."
    );
  }
}

/*
  These functions are exposed so js/app.js and
  js/scanner.js can connect to the main application.
*/

window.renderAllRecipes =
  renderAllRecipes;

window.renderPantry =
  renderPantry;

window.renderGroceries =
  renderGroceries;

window.goToPage =
  goToPage;

window.showToast =
  showToast;

document.addEventListener(
  "DOMContentLoaded",
  startApp
);