/* =========================================================
   RECIPE BUDDY
   SMART BARCODE SCANNER
   FILE: js/scanner.js
========================================================= */

"use strict";

window.RecipeBuddyScanner = (function () {
  const state = {
    scanner: null,
    running: false,
    processing: false,
    libraryPromise: null,
    currentProduct: null,
    lastBarcode: "",
    lastScanTime: 0
  };

  function getElement(id) {
    return document.getElementById(id);
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getAppState() {
    return window.RecipeBuddyApp || null;
  }

  function showToast(message, type = "success") {
    if (
      window.RecipeBuddyUtils &&
      typeof window.RecipeBuddyUtils.showToast === "function"
    ) {
      window.RecipeBuddyUtils.showToast(message, type);
      return;
    }

    const container = getElement("toastContainer");

    if (!container) {
      window.alert(message);
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

  function closeModal(id) {
    const modal = getElement(id);

    if (!modal) {
      return;
    }

    modal.hidden = true;

    if (!document.querySelector(".modal:not([hidden])")) {
      document.body.classList.remove("modal-open");
    }
  }

  function setStatus(message) {
    const status = getElement("scannerStatus");

    if (status) {
      status.textContent = message;
    }
  }

  function cleanBarcode(value) {
    return String(value || "")
      .replace(/\D/g, "")
      .trim();
  }

  function formatNumber(value, digits = 1) {
    const number = Number(value);

    if (!Number.isFinite(number)) {
      return "—";
    }

    return number.toFixed(digits).replace(/\.0$/, "");
  }

  function formatNutrition(value, unit) {
    const formatted = formatNumber(value);

    if (formatted === "—") {
      return formatted;
    }

    return formatted + unit;
  }

  function loadLibrary() {
    if (window.Html5Qrcode) {
      return Promise.resolve();
    }

    if (state.libraryPromise) {
      return state.libraryPromise;
    }

    state.libraryPromise = new Promise(function (resolve, reject) {
      const existing = document.querySelector(
        'script[data-recipe-buddy-scanner="true"]'
      );

      if (existing) {
        existing.addEventListener("load", resolve, {
          once: true
        });

        existing.addEventListener("error", reject, {
          once: true
        });

        return;
      }

      const script = document.createElement("script");

      script.src =
        "https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js";

      script.async = true;
      script.dataset.recipeBuddyScanner = "true";

      script.onload = resolve;

      script.onerror = function () {
        reject(
          new Error(
            "The barcode scanner library could not load."
          )
        );
      };

      document.head.appendChild(script);
    });

    return state.libraryPromise;
  }

  function prepareScannerArea() {
    const scannerView = document.querySelector(
      "#barcodeScannerModal .scanner-view"
    );

    if (!scannerView) {
      return null;
    }

    scannerView.innerHTML = `
      <div
        id="html5QrcodeReader"
        style="
          width: 100%;
          min-height: 340px;
          overflow: hidden;
          border-radius: 18px;
          background: #071d22;
        "
      ></div>
    `;

    return getElement("html5QrcodeReader");
  }

  function isRepeat(barcode) {
    const now = Date.now();

    const repeated =
      barcode === state.lastBarcode &&
      now - state.lastScanTime < 5000;

    state.lastBarcode = barcode;
    state.lastScanTime = now;

    return repeated;
  }

  async function start() {
    if (state.running) {
      return;
    }

    setStatus("Loading barcode scanner...");

    try {
      await loadLibrary();
    } catch (error) {
      console.error(error);

      setStatus(
        "The scanner could not load. Check your internet connection."
      );

      showToast(
        "Barcode scanner could not load",
        "error"
      );

      return;
    }

    if (!prepareScannerArea()) {
      showToast(
        "Scanner area was not found",
        "error"
      );

      return;
    }

    state.processing = false;
    state.lastBarcode = "";
    state.lastScanTime = 0;

    try {
      state.scanner = new Html5Qrcode(
        "html5QrcodeReader",
        {
          verbose: false
        }
      );

      const formats = [];

      if (window.Html5QrcodeSupportedFormats) {
        formats.push(
          Html5QrcodeSupportedFormats.UPC_A,
          Html5QrcodeSupportedFormats.UPC_E,
          Html5QrcodeSupportedFormats.EAN_13,
          Html5QrcodeSupportedFormats.EAN_8,
          Html5QrcodeSupportedFormats.CODE_128
        );
      }

      const config = {
        fps: 12,

        qrbox: function (
          viewfinderWidth,
          viewfinderHeight
        ) {
          return {
            width: Math.floor(
              Math.min(
                viewfinderWidth * 0.88,
                420
              )
            ),

            height: Math.floor(
              Math.min(
                viewfinderHeight * 0.38,
                170
              )
            )
          };
        },

        aspectRatio: 1.777778,
        disableFlip: false
      };

      if (formats.length) {
        config.formatsToSupport = formats;
      }

      await state.scanner.start(
        {
          facingMode: "environment"
        },

        config,

        function (decodedText) {
          processBarcode(decodedText);
        },

        function () {
          /*
            Scan misses happen continuously while the
            camera searches. They should stay silent.
          */
        }
      );

      state.running = true;

      setStatus(
        "Camera active. Hold the barcode steady inside the box."
      );
    } catch (error) {
      console.error(
        "Could not start scanner:",
        error
      );

      state.running = false;

      setStatus(
        "The camera could not start. Allow camera permission and try again."
      );

      showToast(
        "Camera could not start",
        "error"
      );
    }
  }

  async function stop() {
    if (
      state.scanner &&
      state.running
    ) {
      try {
        await state.scanner.stop();
      } catch (error) {
        console.warn(
          "Scanner stop warning:",
          error
        );
      }
    }

    if (state.scanner) {
      try {
        await state.scanner.clear();
      } catch (error) {
        console.warn(
          "Scanner clear warning:",
          error
        );
      }
    }

    state.scanner = null;
    state.running = false;
    state.processing = false;
  }

  async function processBarcode(rawBarcode) {
    const barcode = cleanBarcode(rawBarcode);

    if (!barcode) {
      return;
    }

    if (state.processing) {
      return;
    }

    if (isRepeat(barcode)) {
      return;
    }

    state.processing = true;

    setStatus(
      "Barcode found: " +
        barcode +
        ". Looking up product details..."
    );

    if (
      navigator.vibrate &&
      typeof navigator.vibrate === "function"
    ) {
      navigator.vibrate(100);
    }

    await stop();
    await lookup(barcode);
  }

  async function lookup(barcode) {
    let product = null;

    try {
      const fields = [
        "code",
        "product_name",
        "product_name_en",
        "generic_name",
        "brands",
        "quantity",
        "serving_size",
        "image_front_small_url",
        "image_front_url",
        "ingredients_text",
        "ingredients_text_en",
        "allergens",
        "allergens_tags",
        "traces",
        "traces_tags",
        "categories",
        "categories_tags",
        "countries",
        "origins",
        "labels",
        "labels_tags",
        "nutrition_grades",
        "nutriscore_grade",
        "nova_group",
        "ecoscore_grade",
        "nutriments"
      ].join(",");

      const response = await fetch(
        "https://world.openfoodfacts.org/api/v2/product/" +
          encodeURIComponent(barcode) +
          ".json?fields=" +
          encodeURIComponent(fields)
      );

      if (!response.ok) {
        throw new Error(
          "Product lookup returned " +
            response.status
        );
      }

      const data = await response.json();

      if (
        data.status === 1 &&
        data.product
      ) {
        product = data.product;
      }
    } catch (error) {
      console.warn(
        "Product lookup failed:",
        error
      );
    }

    const normalized = normalizeProduct(
      barcode,
      product
    );

    state.currentProduct = normalized;

    closeModal("barcodeScannerModal");
    renderProduct(normalized);
    openModal("productDetailsModal");

    if (normalized.found) {
      showToast(
        "Found " + normalized.name
      );
    } else {
      showToast(
        "Barcode scanned, but product details were not found.",
        "error"
      );
    }
  }

  function normalizeProduct(
    barcode,
    product
  ) {
    const nutriments =
      product?.nutriments || {};

    const name =
      product?.product_name_en ||
      product?.product_name ||
      product?.generic_name ||
      "Unknown product";

    const allergens = normalizeTags(
      product?.allergens_tags ||
        product?.allergens
    );

    const traces = normalizeTags(
      product?.traces_tags ||
        product?.traces
    );

    const labels = normalizeTags(
      product?.labels_tags ||
        product?.labels
    );

    return {
      found: Boolean(product),

      barcode: barcode,
      name: name,
      brand: product?.brands || "",
      quantity: product?.quantity || "",
      servingSize: product?.serving_size || "",

      image:
        product?.image_front_url ||
        product?.image_front_small_url ||
        "",

      ingredients:
        product?.ingredients_text_en ||
        product?.ingredients_text ||
        "",

      allergens: allergens,
      traces: traces,
      labels: labels,

      categories:
        product?.categories || "",

      countries:
        product?.countries || "",

      origins:
        product?.origins || "",

      nutriScore:
        (
          product?.nutriscore_grade ||
          product?.nutrition_grades ||
          ""
        ).toUpperCase(),

      nova:
        product?.nova_group || "",

      ecoScore:
        (
          product?.ecoscore_grade ||
          ""
        ).toUpperCase(),

      category:
        determineCategory(
          name,
          product?.categories_tags || []
        ),

      nutrition: {
        calories:
          nutriments["energy-kcal_serving"] ??
          nutriments["energy-kcal_100g"],

        protein:
          nutriments.proteins_serving ??
          nutriments.proteins_100g,

        carbohydrates:
          nutriments.carbohydrates_serving ??
          nutriments.carbohydrates_100g,

        sugars:
          nutriments.sugars_serving ??
          nutriments.sugars_100g,

        addedSugars:
          nutriments["added-sugars_serving"] ??
          nutriments["added-sugars_100g"],

        fiber:
          nutriments.fiber_serving ??
          nutriments.fiber_100g,

        fat:
          nutriments.fat_serving ??
          nutriments.fat_100g,

        saturatedFat:
          nutriments["saturated-fat_serving"] ??
          nutriments["saturated-fat_100g"],

        transFat:
          nutriments["trans-fat_serving"] ??
          nutriments["trans-fat_100g"],

        cholesterol:
          nutriments.cholesterol_serving ??
          nutriments.cholesterol_100g,

        sodium:
          nutriments.sodium_serving ??
          nutriments.sodium_100g,

        salt:
          nutriments.salt_serving ??
          nutriments.salt_100g,

        potassium:
          nutriments.potassium_serving ??
          nutriments.potassium_100g
      }
    };
  }

  function normalizeTags(value) {
    if (Array.isArray(value)) {
      return value
        .map(cleanTag)
        .filter(Boolean);
    }

    if (!value) {
      return [];
    }

    return String(value)
      .split(",")
      .map(cleanTag)
      .filter(Boolean);
  }

  function cleanTag(value) {
    return String(value || "")
      .replace(/^en:/i, "")
      .replace(/-/g, " ")
      .trim()
      .replace(/\b\w/g, function (letter) {
        return letter.toUpperCase();
      });
  }

  function determineCategory(
    productName,
    categoryTags
  ) {
    const combined = [
      productName,
      ...(categoryTags || [])
    ]
      .join(" ")
      .toLowerCase();

    if (
      /milk|cheese|cream|butter|yogurt|egg/.test(
        combined
      )
    ) {
      return "Dairy";
    }

    if (
      /chicken|beef|pork|turkey|steak|meat|sausage|ham/.test(
        combined
      )
    ) {
      return "Meat";
    }

    if (
      /fruit|vegetable|produce|pickle|cucumber|apple|banana|potato|tomato|onion|lettuce|pepper/.test(
        combined
      )
    ) {
      return "Produce";
    }

    if (/frozen|ice cream/.test(combined)) {
      return "Frozen";
    }

    if (/bread|bakery|bun|roll|cake/.test(combined)) {
      return "Bakery";
    }

    return "Pantry";
  }

  function getProfileAllergies() {
    const appState = getAppState();

    if (
      !appState ||
      !appState.profile
    ) {
      return [];
    }

    const allergies = new Set(
      appState.profile.allergies || []
    );

    (appState.profile.diets || []).forEach(
      function (diet) {
        if (diet === "Dairy Free") {
          allergies.add("Dairy");
        }

        if (diet === "Gluten Free") {
          allergies.add("Gluten");
        }

        if (diet === "Nut Free") {
          allergies.add("Peanuts");
          allergies.add("Tree Nuts");
        }
      }
    );

    return Array.from(allergies);
  }

  function getAllergyMatches(product) {
    const profileAllergies =
      getProfileAllergies();

    const productText = [
      product.ingredients,
      product.allergens.join(" "),
      product.traces.join(" ")
    ]
      .join(" ")
      .toLowerCase();

    const aliases = {
      Dairy: [
        "milk",
        "dairy",
        "cheese",
        "butter",
        "cream",
        "whey",
        "casein"
      ],

      Eggs: [
        "egg",
        "eggs",
        "albumen"
      ],

      Peanuts: [
        "peanut",
        "peanuts"
      ],

      "Tree Nuts": [
        "tree nut",
        "almond",
        "cashew",
        "walnut",
        "pecan",
        "hazelnut",
        "pistachio",
        "macadamia",
        "brazil nut"
      ],

      Gluten: [
        "gluten",
        "wheat",
        "barley",
        "rye"
      ],

      Soy: [
        "soy",
        "soya"
      ],

      Sesame: [
        "sesame"
      ],

      Fish: [
        "fish",
        "salmon",
        "tuna",
        "cod",
        "anchovy"
      ],

      Shellfish: [
        "shellfish",
        "shrimp",
        "crab",
        "lobster",
        "prawn",
        "mollusc"
      ]
    };

    return profileAllergies.filter(
      function (allergy) {
        return (
          aliases[allergy] || [allergy]
        ).some(function (term) {
          return productText.includes(
            term.toLowerCase()
          );
        });
      }
    );
  }

  function getSafetyResult(product) {
    const matches =
      getAllergyMatches(product);

    if (matches.length) {
      return {
        status: "danger",
        title: "Not safe for your profile",
        message:
          "This product may contain: " +
          matches.join(", ") +
          ". Always confirm the package label."
      };
    }

    if (
      !product.ingredients &&
      !product.allergens.length
    ) {
      return {
        status: "warning",
        title: "Not enough information",
        message:
          "The product database does not include a complete ingredient or allergen list. Check the package before eating it."
      };
    }

    return {
      status: "safe",
      title: "No saved allergens detected",
      message:
        "Recipe Buddy did not detect your saved allergens, but you should still confirm the package label."
    };
  }

  function getHealthSummary(product) {
    const nutrition =
      product.nutrition;

    const calories =
      Number(nutrition.calories);

    const sugar =
      Number(nutrition.sugars);

    const sodiumGrams =
      Number(nutrition.sodium);

    const protein =
      Number(nutrition.protein);

    let score = 3;

    if (
      Number.isFinite(protein) &&
      protein >= 10
    ) {
      score += 1;
    }

    if (
      Number.isFinite(sugar) &&
      sugar >= 15
    ) {
      score -= 1;
    }

    if (
      Number.isFinite(sodiumGrams) &&
      sodiumGrams >= 0.6
    ) {
      score -= 1;
    }

    if (
      Number.isFinite(calories) &&
      calories > 500
    ) {
      score -= 1;
    }

    if (
      product.nutriScore === "A" ||
      product.nutriScore === "B"
    ) {
      score += 1;
    }

    if (
      product.nova &&
      Number(product.nova) >= 4
    ) {
      score -= 1;
    }

    score = Math.max(
      1,
      Math.min(5, score)
    );

    const stars =
      "★".repeat(score) +
      "☆".repeat(5 - score);

    let message =
      "This is a moderate choice based on the available nutrition data.";

    if (score >= 4) {
      message =
        "This looks like a stronger choice based on the available nutrition data.";
    }

    if (score <= 2) {
      message =
        "This may be high in calories, sugar, sodium, or processing. Review the label and portion size.";
    }

    return {
      score: score,
      stars: stars,
      message: message
    };
  }

  function nutritionCard(
    label,
    value,
    unit
  ) {
    return `
      <div class="product-nutrition-item">
        <span>${escapeHTML(label)}</span>
        <strong>
          ${escapeHTML(
            formatNutrition(value, unit)
          )}
        </strong>
      </div>
    `;
  }

  function renderProduct(product) {
    const container =
      getElement("productDetailsContent");

    if (!container) {
      showToast(
        "Product details screen was not found",
        "error"
      );

      return;
    }

    const safety =
      getSafetyResult(product);

    const health =
      getHealthSummary(product);

    const allergensHTML =
      product.allergens.length
        ? product.allergens
            .map(function (allergen) {
              return `
                <span class="product-tag danger">
                  ${escapeHTML(allergen)}
                </span>
              `;
            })
            .join("")
        : `
          <span class="product-tag muted">
            No allergens listed
          </span>
        `;

    const tracesHTML =
      product.traces.length
        ? product.traces
            .map(function (trace) {
              return `
                <span class="product-tag warning">
                  ${escapeHTML(trace)}
                </span>
              `;
            })
            .join("")
        : `
          <span class="product-tag muted">
            No traces listed
          </span>
        `;

    const labelsHTML =
      product.labels.length
        ? product.labels
            .slice(0, 12)
            .map(function (label) {
              return `
                <span class="product-tag">
                  ${escapeHTML(label)}
                </span>
              `;
            })
            .join("")
        : `
          <span class="product-tag muted">
            No dietary labels available
          </span>
        `;

    const imageHTML =
      product.image
        ? `
          <img
            src="${escapeHTML(product.image)}"
            alt="${escapeHTML(product.name)}"
            class="product-detail-image"
            onerror="this.style.display='none'"
          >
        `
        : `
          <div class="product-detail-image-placeholder">
            🥫
          </div>
        `;

    container.innerHTML = `
      <div class="product-detail-layout">

        <section class="product-detail-header">

          <div class="product-detail-image-wrap">
            ${imageHTML}
          </div>

          <div class="product-detail-main">

            <span class="section-eyebrow">
              Scanned product
            </span>

            <h1 id="productDetailsTitle">
              ${escapeHTML(product.name)}
            </h1>

            ${
              product.brand
                ? `
                  <p class="product-brand">
                    ${escapeHTML(product.brand)}
                  </p>
                `
                : ""
            }

            <div class="product-meta-list">

              <span>
                Barcode:
                <strong>
                  ${escapeHTML(product.barcode)}
                </strong>
              </span>

              <span>
                Package:
                <strong>
                  ${escapeHTML(
                    product.quantity || "Not listed"
                  )}
                </strong>
              </span>

              <span>
                Serving:
                <strong>
                  ${escapeHTML(
                    product.servingSize || "Not listed"
                  )}
                </strong>
              </span>

              <span>
                Category:
                <strong>
                  ${escapeHTML(product.category)}
                </strong>
              </span>

            </div>

          </div>

        </section>

        <section
          class="product-safety-card ${escapeHTML(
            safety.status
          )}"
        >

          <div class="product-safety-icon">
            ${
              safety.status === "danger"
                ? "⚠️"
                : safety.status === "warning"
                  ? "ℹ️"
                  : "✅"
            }
          </div>

          <div>
            <strong>
              ${escapeHTML(safety.title)}
            </strong>

            <p>
              ${escapeHTML(safety.message)}
            </p>
          </div>

        </section>

        <section class="product-score-grid">

          <div class="product-score-card">
            <span>Nutri-Score</span>
            <strong>
              ${escapeHTML(
                product.nutriScore || "—"
              )}
            </strong>
          </div>

          <div class="product-score-card">
            <span>NOVA Group</span>
            <strong>
              ${escapeHTML(
                product.nova || "—"
              )}
            </strong>
          </div>

          <div class="product-score-card">
            <span>Eco-Score</span>
            <strong>
              ${escapeHTML(
                product.ecoScore || "—"
              )}
            </strong>
          </div>

          <div class="product-score-card health">
            <span>Recipe Buddy rating</span>
            <strong>
              ${escapeHTML(health.stars)}
            </strong>
            <small>
              ${escapeHTML(health.message)}
            </small>
          </div>

        </section>

        <section class="product-content-card">

          <div class="product-section-heading">
            <div>
              <span class="section-eyebrow">
                Nutrition
              </span>
              <h2>Nutrition facts</h2>
            </div>

            <span class="product-serving-note">
              Per serving when available; otherwise per 100 g
            </span>
          </div>

          <div class="product-nutrition-grid">

            ${nutritionCard(
              "Calories",
              product.nutrition.calories,
              " kcal"
            )}

            ${nutritionCard(
              "Protein",
              product.nutrition.protein,
              " g"
            )}

            ${nutritionCard(
              "Carbohydrates",
              product.nutrition.carbohydrates,
              " g"
            )}

            ${nutritionCard(
              "Sugars",
              product.nutrition.sugars,
              " g"
            )}

            ${nutritionCard(
              "Added sugars",
              product.nutrition.addedSugars,
              " g"
            )}

            ${nutritionCard(
              "Fiber",
              product.nutrition.fiber,
              " g"
            )}

            ${nutritionCard(
              "Fat",
              product.nutrition.fat,
              " g"
            )}

            ${nutritionCard(
              "Saturated fat",
              product.nutrition.saturatedFat,
              " g"
            )}

            ${nutritionCard(
              "Trans fat",
              product.nutrition.transFat,
              " g"
            )}

            ${nutritionCard(
              "Cholesterol",
              product.nutrition.cholesterol,
              " g"
            )}

            ${nutritionCard(
              "Sodium",
              product.nutrition.sodium,
              " g"
            )}

            ${nutritionCard(
              "Salt",
              product.nutrition.salt,
              " g"
            )}

            ${nutritionCard(
              "Potassium",
              product.nutrition.potassium,
              " g"
            )}

          </div>

        </section>

        <section class="product-content-grid">

          <article class="product-content-card">

            <span class="section-eyebrow">
              Ingredients
            </span>

            <h2>
              Ingredient list
            </h2>

            <p class="product-ingredients-text">
              ${escapeHTML(
                product.ingredients ||
                "Ingredient information was not provided."
              )}
            </p>

          </article>

          <article class="product-content-card">

            <span class="section-eyebrow">
              Safety
            </span>

            <h2>
              Allergens
            </h2>

            <div class="product-tag-list">
              ${allergensHTML}
            </div>

            <h3>
              May contain traces
            </h3>

            <div class="product-tag-list">
              ${tracesHTML}
            </div>

          </article>

          <article class="product-content-card">

            <span class="section-eyebrow">
              Labels
            </span>

            <h2>
              Dietary and product labels
            </h2>

            <div class="product-tag-list">
              ${labelsHTML}
            </div>

          </article>

          <article class="product-content-card">

            <span class="section-eyebrow">
              Product information
            </span>

            <h2>
              Additional details
            </h2>

            <p>
              <strong>Categories:</strong>
              ${escapeHTML(
                product.categories || "Not listed"
              )}
            </p>

            <p>
              <strong>Countries:</strong>
              ${escapeHTML(
                product.countries || "Not listed"
              )}
            </p>

            <p>
              <strong>Origins:</strong>
              ${escapeHTML(
                product.origins || "Not listed"
              )}
            </p>

          </article>

        </section>

        <section class="product-action-bar">

          <button
            class="primary-button"
            type="button"
            id="addScannedProductToPantryButton"
          >
            + Add to Pantry
          </button>

          <button
            class="secondary-button"
            type="button"
            id="addScannedProductToGroceryButton"
          >
            + Add to Grocery List
          </button>

          <button
            class="secondary-button"
            type="button"
            id="findRecipesWithProductButton"
          >
            Find Recipes Using This
          </button>

          <button
            class="secondary-button"
            type="button"
            id="scanAnotherProductButton"
          >
            Scan Another Item
          </button>

        </section>

        <div class="safety-notice">
          Product information comes from a public product database and may be incomplete or outdated. Always confirm nutrition, ingredients, and allergens on the package.
        </div>

      </div>
    `;

    connectProductButtons();
  }

  function connectProductButtons() {
    getElement(
      "addScannedProductToPantryButton"
    )?.addEventListener(
      "click",
      addCurrentProductToPantry
    );

    getElement(
      "addScannedProductToGroceryButton"
    )?.addEventListener(
      "click",
      addCurrentProductToGrocery
    );

    getElement(
      "findRecipesWithProductButton"
    )?.addEventListener(
      "click",
      findRecipesWithCurrentProduct
    );

    getElement(
      "scanAnotherProductButton"
    )?.addEventListener(
      "click",
      scanAnother
    );
  }

  function addCurrentProductToPantry() {
    const product =
      state.currentProduct;

    const appState =
      getAppState();

    if (
      !product ||
      !appState ||
      !Array.isArray(appState.pantry)
    ) {
      showToast(
        "Pantry is not ready",
        "error"
      );

      return;
    }

    const alreadyExists =
      appState.pantry.some(function (item) {
        return (
          item.barcode &&
          item.barcode === product.barcode
        );
      });

    if (alreadyExists) {
      showToast(
        "This product is already in your pantry",
        "error"
      );

      return;
    }

    appState.pantry.push({
      id:
        "pantry-" +
        Date.now() +
        "-" +
        Math.random()
          .toString(36)
          .slice(2, 8),

      name: product.name,
      brand: product.brand,
      quantity:
        product.quantity || "1 item",

      category: product.category,
      expiration: "",
      barcode: product.barcode,
      image: product.image,

      ingredients: product.ingredients,
      allergens: product.allergens,
      traces: product.traces,
      labels: product.labels,
      nutrition: product.nutrition,
      nutriScore: product.nutriScore,
      nova: product.nova,
      ecoScore: product.ecoScore
    });

    if (
      typeof appState.savePantry ===
      "function"
    ) {
      appState.savePantry();
    } else {
      localStorage.setItem(
        "recipeBuddyPantry",
        JSON.stringify(
          appState.pantry
        )
      );
    }

    if (
      typeof appState.renderPantry ===
      "function"
    ) {
      appState.renderPantry();
    }

    showToast(
      product.name +
      " added to pantry"
    );
  }

  function addCurrentProductToGrocery() {
    const product =
      state.currentProduct;

    const appState =
      getAppState();

    if (
      !product ||
      !appState ||
      !Array.isArray(appState.groceries)
    ) {
      showToast(
        "Grocery list is not ready",
        "error"
      );

      return;
    }

    appState.groceries.push({
      id:
        "grocery-" +
        Date.now() +
        "-" +
        Math.random()
          .toString(36)
          .slice(2, 8),

      name: product.name,
      quantity:
        product.quantity || "1 item",

      category: product.category,
      completed: false,
      barcode: product.barcode,
      brand: product.brand
    });

    if (
      typeof appState.saveGroceries ===
      "function"
    ) {
      appState.saveGroceries();
    } else {
      localStorage.setItem(
        "recipeBuddyGroceries",
        JSON.stringify(
          appState.groceries
        )
      );
    }

    if (
      typeof appState.renderGroceries ===
      "function"
    ) {
      appState.renderGroceries();
    }

    showToast(
      product.name +
      " added to grocery list"
    );
  }

  function findRecipesWithCurrentProduct() {
    const product =
      state.currentProduct;

    if (!product) {
      return;
    }

    closeModal("productDetailsModal");

    if (
      window.RecipeBuddyRecipes &&
      typeof window.RecipeBuddyRecipes.search ===
        "function"
    ) {
      window.RecipeBuddyRecipes.search(
        product.name
      );

      return;
    }

    const recipeSearch =
      getElement("recipeSearchInput");

    if (recipeSearch) {
      recipeSearch.value =
        product.name;
    }

    const recipesButton =
      document.querySelector(
        '[data-page="recipes"]'
      );

    if (recipesButton) {
      recipesButton.click();
    }

    if (
      typeof window.renderAllRecipes ===
      "function"
    ) {
      window.renderAllRecipes();
    }

    showToast(
      "Searching recipes for " +
      product.name
    );
  }

  function scanAnother() {
    closeModal("productDetailsModal");

    state.currentProduct = null;
    state.processing = false;

    setStatus(
      "Press Start camera and allow camera access."
    );

    openModal("barcodeScannerModal");
  }

  function enterManually() {
    const entered = window.prompt(
      "Enter the barcode number:"
    );

    if (!entered) {
      return;
    }

    const barcode =
      cleanBarcode(entered);

    if (!barcode) {
      showToast(
        "Enter a valid barcode number",
        "error"
      );

      return;
    }

    state.processing = true;

    setStatus(
      "Looking up barcode " +
        barcode +
        "..."
    );

    lookup(barcode);
  }

  function initialize() {
    getElement(
      "startScannerButton"
    )?.addEventListener(
      "click",
      start
    );

    getElement(
      "manualBarcodeButton"
    )?.addEventListener(
      "click",
      enterManually
    );

    document.addEventListener(
      "click",
      function (event) {
        const scannerClose =
          event.target.closest(
            '[data-close-modal="barcodeScannerModal"]'
          );

        if (scannerClose) {
          stop();
        }
      }
    );
  }

  return {
    initialize: initialize,
    start: start,
    stop: stop,
    lookup: lookup,
    enterManually: enterManually,
    getCurrentProduct: function () {
      return state.currentProduct;
    }
  };
})();