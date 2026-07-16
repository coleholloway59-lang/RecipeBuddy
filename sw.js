/* =========================================================
   RECIPE BUDDY
   SERVICE WORKER
========================================================= */

const CACHE_NAME = "recipe-buddy-v4.0.0";

const APP_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./recipes.js",
  "./manifest.json",

  "./assets/logo.png",

  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

/* =========================================================
   INSTALL
========================================================= */

self.addEventListener("install", event => {

  self.skipWaiting();

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then(cache => cache.addAll(APP_FILES))

  );

});

/* =========================================================
   ACTIVATE
========================================================= */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys()

      .then(keys =>

        Promise.all(

          keys.map(key => {

            if (key !== CACHE_NAME) {

              return caches.delete(key);

            }

          })

        )

      )

  );

  self.clients.claim();

});

/* =========================================================
   FETCH
========================================================= */

self.addEventListener("fetch", event => {

  if (event.request.method !== "GET") return;

  event.respondWith(

    caches.match(event.request)

      .then(response => {

        if (response) {

          return response;

        }

        return fetch(event.request)

          .then(networkResponse => {

            if (

              !networkResponse ||

              networkResponse.status !== 200 ||

              networkResponse.type !== "basic"

            ) {

              return networkResponse;

            }

            const copy = networkResponse.clone();

            caches.open(CACHE_NAME)

              .then(cache => {

                cache.put(event.request, copy);

              });

            return networkResponse;

          });

      })

      .catch(() => {

        if (

          event.request.destination === "document"

        ) {

          return caches.match("./index.html");

        }

      })

  );

});

/* =========================================================
   MESSAGE
========================================================= */

self.addEventListener("message", event => {

  if (event.data === "SKIP_WAITING") {

    self.skipWaiting();

  }

});