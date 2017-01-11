// Name of the cache that we install
var CACHE_NAME = 'my-site-cache-v1';

// Array of files needed to be cached
var REQUIRED_FILES = [
  '/js/app.js',
  '/js/waves.min.js',
  '/css/style.css',
  '/css/waves.min.css',
  '/index.html'
];


self.addEventListener('install', function(event) {
 
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('[install] Caches opened, adding all core components' +
          'to cache');
        return cache.addAll(REQUIRED_FILES);
      })
      .then(function() {
        console.log('[install] All required resources have been cached, ' +
          'we\'re good!');
        return self.skipWaiting();
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          console.log(
            '[fetch] Returning from ServiceWorker cache: ',
            event.request.url
          );
          return response;
        } 
        console.log('[fetch] Returning from server: ', event.request.url);
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {
  console.log('[activate] Activating ServiceWorker!');
 
  console.log('[activate] Claiming this ServiceWorker!');
  event.waitUntil(self.clients.claim());
});