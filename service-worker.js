/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["1st-half-of-2018/index.html","099181ef8e751f95ee3cac44e59d74b0"],["404.html","9a9ef3d8b37bffb93330bba5f022af5d"],["A-Custom-Sublime-Text-3/index.html","a132ca2935019e720b7e75c261e7840b"],["Duoshuo-CSS/index.html","dca6fb5d2c804dbd8542f8abdd9cba97"],["Hots-China-Android-APP-API/index.html","054e863323786c0cc11c9c82a4e46244"],["Last-day/index.html","e7e432084589297ec4025e9e3952bd72"],["One-Programming/index.html","80b74db47857c434ccf2effcd9f39da3"],["ProxmoxVE-and-LEDE/index.html","897aa723bdac32047a8ea0d7ff16e6aa"],["about/index.html","2c3892c70920f9683b2eab68b2847003"],["archives/2016/07/index.html","ce1997d47ec6644242528d07330c42b1"],["archives/2016/08/index.html","bd400433c9f607963b9526a311911ca2"],["archives/2016/09/index.html","6fd075d117ac441703463b1771a10f55"],["archives/2016/index.html","f2d506841e6521163a970f40c7cda710"],["archives/2017/04/index.html","4171a1813dd47ac229b76b4442384be6"],["archives/2017/05/index.html","54f728f6753d23018330f422248ed295"],["archives/2017/07/index.html","9e095d50be1d1e76f3a26fe33b47a2f9"],["archives/2017/09/index.html","49e2d00004dc1cbb878015c118ed6da0"],["archives/2017/index.html","8da7091d6e83eb020bb62f6b1257df86"],["archives/2018/08/index.html","a17ceb2ff9d3fd957f272677f1f88443"],["archives/2018/index.html","7a4e40960a0bc4710a3de03d134f348c"],["archives/2019/06/index.html","d334e5fd5e17c951fdce0a1c580e568a"],["archives/2019/07/index.html","8b91f28a1a4c03f774a97f784e22f568"],["archives/2019/index.html","42ad187df1d59a03e191a3f680f2691e"],["archives/index.html","0697814f372b6420faac2de4b173b3c2"],["archives/page/2/index.html","1412f1c1fbc80853562107a0c7290ec5"],["cmder-sublime-win10-1703-backup/index.html","651e2a3398555ae521c4191088f35fe7"],["css/index.css","bda26e4d492f788123cf18189fe913c7"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["hello-world/index.html","7feab04e45d85e076afca09b0655eb96"],["img/Gin.png","426ca066d586cf91231a4f506692ef23"],["img/TopImg.jpg","b2529b585fe2b75cd484a60466d795cd"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","f107452430ed6e1026edeb14a7761040"],["js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["links/index.html","82f2a2fc0a2e77f924c6c2a393f6f7cc"],["message/index.html","06b9062ad7c79d2c9de8f1d4519c7f7e"],["page/2/index.html","87c499c2b6f3f7d96c0a1914333fc72d"],["raspberry-pi-sms/index.html","9d40670414bc26c438c928c3ded8f441"],["search-engine/index.html","2fb333885805e135ff1248ad4a358c98"],["search/index.html","b7397e8f17f2e8abda45e1ef0aad0d1b"],["tags/API/index.html","378e72ccb7be574249d28ad0546a0a7e"],["tags/Android/index.html","fc99d2dece890feade660d6474fa436a"],["tags/C/index.html","86ddb1ced0b09b5f48ad0bcabb7d00c2"],["tags/CSS/index.html","ab3bd6041f6423dc5364126307c2d72d"],["tags/DNS/index.html","66e135b29d73cdcec11c40936f00b3ae"],["tags/LEDE/index.html","e95052033e11a51789651bf50db165ad"],["tags/NET/index.html","5b5f113d07d79348c5dfb63b94072bc2"],["tags/OpenWRT/index.html","7200b4cf8ae800fb5786affcc35eaa03"],["tags/ProxmoxVE/index.html","881c7fb976080bdb62dc876b01cc9d44"],["tags/SNS/index.html","a98d73c678ebcab9530ae9e0d457febe"],["tags/Telegram-Bot/index.html","73311bb7d2c5087e24c5c14a7f63ced1"],["tags/cmder/index.html","3bf6de652836c66fb04ceeccef3fbe28"],["tags/index.html","6f6ce7b65513f6fd37a2a2989c1ae080"],["tags/sublime/index.html","bac741c21eb5c05bf2d0f202ce774911"],["tags/多说/index.html","966c157ee151a00e2f56bb70f9006481"],["tags/搜索引擎/index.html","bc0542fd69f53b5f8341bd2f2fa2f395"],["tags/树莓派/index.html","23b4ab14e2e6e38b00a1d8cc6b26f160"],["tags/爬虫/index.html","5bea3e93b859cd40408f9ee25b4d5a71"],["tags/编程/index.html","431c5155889cbf8a17219815abe8fa1a"],["talk-about-dns-again/index.html","a4249955ae42ecf28726db11fa1067ff"],["the-new-home/index.html","c32b3e49e08b7f9c7f018ac9592c67f7"],["universities-dns/index.html","cdbe6928392da70a9a561f7e67182646"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







