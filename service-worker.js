const CACHE_NAME = "recipe-buddy-v1";


const files = [

"index.html",
"recipe.html",
"gallery.html",
"grocery.html",
"favorites.html",
"her-favorites.html",
"add-recipe.html",
"cook-for-her.html",
"style.css",
"recipes.js"

];




self.addEventListener(
"install",
event=>{


event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(files);

})

);


});







self.addEventListener(
"fetch",
event=>{


event.respondWith(

caches.match(event.request)

.then(response=>{


return response || fetch(event.request);


})

);


});