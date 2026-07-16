/* =========================================================
   RECIPE BUDDY
   MODULE CONNECTOR
   FILE: js/app.js

   Connects:
   - Existing app.js
   - js/scanner.js
   - Pantry
   - Grocery list
   - Recipe search
========================================================= */

"use strict";

(function () {
  function savePantry() {
    localStorage.setItem(
      "recipeBuddyPantry",
      JSON.stringify(app.pantry)
    );
  }

  function saveGroceries() {
    localStorage.setItem(
      "recipeBuddyGroceries",
      JSON.stringify(app.groceries)
    );
  }

  function searchRecipes(searchText) {
    const input =
      document.getElementById("recipeSearchInput");

    if (input) {
      input.value = searchText || "";
    }

    if (typeof goToPage === "function") {
      goToPage("recipes");
    }

    if (typeof renderAllRecipes === "function") {
      renderAllRecipes();
    }
  }

  /*
    Expose the existing Recipe Buddy app so scanner.js
    can add products to the pantry and grocery list.
  */

  window.RecipeBuddyApp = {
    get pantry() {
      return app.pantry;
    },

    set pantry(value) {
      app.pantry = value;
    },

    get groceries() {
      return app.groceries;
    },

    set groceries(value) {
      app.groceries = value;
    },

    get profile() {
      return app.profile;
    },

    set profile(value) {
      app.profile = value;
    },

    savePantry: savePantry,
    saveGroceries: saveGroceries,

    renderPantry: function () {
      if (typeof renderPantry === "function") {
        renderPantry();
      }
    },

    renderGroceries: function () {
      if (typeof renderGroceries === "function") {
        renderGroceries();
      }
    },

    goToPage: function (pageName) {
      if (typeof goToPage === "function") {
        goToPage(pageName);
      }
    }
  };

  /*
    Allow scanner.js to search the existing recipe library.
  */

  window.RecipeBuddyRecipes = {
    search: searchRecipes
  };

  /*
    Shared toast helper for the scanner module.
  */

  window.RecipeBuddyUtils = {
    showToast: function (
      message,
      type = "success"
    ) {
      if (typeof showToast === "function") {
        showToast(message, type);
        return;
      }

      window.alert(message);
    }
  };

  function initializeModules() {
    if (
      window.RecipeBuddyScanner &&
      typeof window.RecipeBuddyScanner.initialize ===
        "function"
    ) {
      window.RecipeBuddyScanner.initialize();

      console.log(
        "Recipe Buddy Smart Scanner connected."
      );
    } else {
      console.warn(
        "scanner.js was not loaded before js/app.js."
      );
    }
  }

  if (
    document.readyState === "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      initializeModules
    );
  } else {
    initializeModules();
  }
})();