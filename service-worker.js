const CACHE_NAME = "recipe-buddy-v3";

const APP_FILES = [
    "./",
    "./index.html",
    "./recipe.html",
    "./gallery.html",
    "./grocery.html",
    "./favorites.html",
    "./her-favorites.html",
    "./add-recipe.html",
    "./style.css",
    "./recipes.js",
    "./manifest.json"
];

/*
Install the newest app files and activate
the new service worker immediately.
*/
self.addEventListener("install", function (event) {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(APP_FILES);
            })
    );
});

/*
Delete caches from older app versions.
*/
self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys()
            .then(function (cacheNames) {
                return Promise.all(
                    cacheNames.map(function (cacheName) {
                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(function () {
                return self.clients.claim();
            })
    );
});

/*
Use the internet version first.

When the internet version is available,
save it in the cache and return it.

When offline, use the saved version.
*/
self.addEventListener("fetch", function (event) {
    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then(function (networkResponse) {
                const responseCopy =
                    networkResponse.clone();

                caches.open(CACHE_NAME)
                    .then(function (cache) {
                        cache.put(
                            event.request,
                            responseCopy
                        );
                    });

                return networkResponse;
            })
            .catch(function () {
                return caches.match(event.request)
                    .then(function (cachedResponse) {
                        return (
                            cachedResponse ||
                            caches.match("./index.html")
                        );
                    });
            })
    );
});