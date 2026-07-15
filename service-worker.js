const CACHE_NAME = "recipe-buddy-v1";

const filesToCache = [
"index.html",
"recipe.html",
"gallery.html",
"grocery.html",
"favorites.html",
"her-favorites.html",
"add-recipe.html",
"style.css",
"recipes.js",
"manifest.json"
];


self.addEventListener("install", event => {

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => {

return cache.addAll(filesToCache);

})

);

});



self.addEventListener("fetch", event => {

event.respondWith(

caches.match(event.request)
.then(response => {

return response || fetch(event.request);

})

);

});