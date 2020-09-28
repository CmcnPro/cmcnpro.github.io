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

var precacheConfig = [["1st-half-of-2018/index.html","6870f344bec1962ea76bcd3822c3f005"],["404.html","f57081d40d60630273fb869e9c7528c5"],["A-Custom-Sublime-Text-3/index.html","fc697e97fbecafa10c2eefb4d5bf5fb6"],["Duoshuo-CSS/index.html","1cc9635a645d44bd41343066f0a1a14e"],["Hots-China-Android-APP-API/index.html","f3cf60c8555ec2b460ae60ac973de41d"],["Last-day/index.html","ee5d4ca8b467c615e05e24c686bdbe90"],["Mi-band-5-NFC/index.html","c11ae40f7681a38074079e30bd3eca2f"],["One-Programming/index.html","37b55106d34912e3b1ed82b9d95efe6a"],["ProxmoxVE-and-LEDE/index.html","ff78687625eec0cee89397fcc28d3c6c"],["about/index.html","05ecbdc738bc2945d262563412d0a609"],["archives/2016/07/index.html","1269fd7c6061e3d38b0e7751b8880c08"],["archives/2016/08/index.html","440523dbb4a6daf98447a9e68e8e29ad"],["archives/2016/09/index.html","2208f5459e2497bc0db766c2e431d338"],["archives/2016/index.html","0b50a20aa7751eff97ae23b5de6f1563"],["archives/2017/04/index.html","0ef121d30a52691866f56f59684c613e"],["archives/2017/05/index.html","abc05b421dd23403532c2a2e13d1b3f9"],["archives/2017/07/index.html","d09e3b2b280d29ef5e493ac4f0a97a65"],["archives/2017/09/index.html","056b58904354f11a69a23ec949b6534b"],["archives/2017/index.html","95dbe50e6954134c32dc08cd1915f384"],["archives/2018/08/index.html","c0053385db5d239675509e64be65639e"],["archives/2018/index.html","faecd539e2f74168eb5d32ac806d16ca"],["archives/2019/06/index.html","518693a454688d26e651dddee666410d"],["archives/2019/07/index.html","bf9421b9d830494cea11d7243168b1ba"],["archives/2019/index.html","6a15c7bab278c0be3b14980b8b870561"],["archives/2020/09/index.html","aead4a47afc599a5c3077bb475a2cda2"],["archives/2020/index.html","c96031ef8aa1c98ee01c5c8b3072d81a"],["archives/index.html","b681c6ad5d6f4203709a727b231fb620"],["archives/page/2/index.html","1b8ec61fbf4f6812cb99f52525cf9127"],["cmder-sublime-win10-1703-backup/index.html","ef0290070460f083d85ae793ef5d94cd"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","a7642b4f8c7aff51a047e16a029df3ef"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["hello-world/index.html","b2694cd78db6d455c2457103382fbe94"],["img/Gin.png","426ca066d586cf91231a4f506692ef23"],["img/TopImg.jpg","b2529b585fe2b75cd484a60466d795cd"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","9afcb8f8553d02c16dca6d6db681aeb3"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","603fa932f3ec986228c2136a51a14f94"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["links/index.html","86a4f934d4030856b63206e5b634477c"],["message/index.html","1844edd3df8bc9fc819c94d5f27042f4"],["page/2/index.html","9584cf1b700454f12ddc3aaaaa17f473"],["raspberry-pi-sms/index.html","c121ccaf381e71288997c41fb613b5bf"],["search-engine/index.html","9bbf61642578e47e04dc2988df052474"],["search/index.html","851e96648cda5617cf136727df440f0a"],["tags/API/index.html","3b1358158cb835b66ea73fa72018e159"],["tags/Android/index.html","aa92490c913232c411ba3d6fe929e2fd"],["tags/C/index.html","e67e0dd3236f47747190ca93d50bc8b9"],["tags/CSS/index.html","afb0e1d07955de482d94b9c54395828c"],["tags/DNS/index.html","f231ca80235fc42d71ef86de371c39b2"],["tags/LEDE/index.html","9fd0aabe389e80850748e91cf1fa9b30"],["tags/NET/index.html","ac5efa74c72809aacc7611ffe1071d9b"],["tags/OpenWRT/index.html","476334f44114af0c226bcda14b363931"],["tags/ProxmoxVE/index.html","97dc3479a109327b59b1e6ca293ab24a"],["tags/SNS/index.html","e2635cc12a22c8b3eb706730d1ebd46c"],["tags/Telegram-Bot/index.html","ac787c811e21a439693095f94d088841"],["tags/cmder/index.html","5473aed1d893dbc31fc93f5833e724dc"],["tags/index.html","6ba7a5f4b05f7816efe994779781b4d0"],["tags/sublime/index.html","805edd7edb6d9995f1b9dda36b70a06d"],["tags/多说/index.html","a312ea8c95104551cd487f6ec2065918"],["tags/搜索引擎/index.html","a0114bafeb046b71f8ba4cd64c89edb0"],["tags/树莓派/index.html","4648cd43c38a6fc1686678bae8a5311e"],["tags/爬虫/index.html","9e9f50638a1d90f848cba613ac0210a5"],["tags/编程/index.html","d58c02e7a3bec17e1bab8ca4d7fd1064"],["talk-about-dns-again/index.html","ca2cbced74a732b16b5a9ec8ea77376d"],["the-new-home/index.html","ff44b3d3481235e07cc6e4039da54cc8"],["universities-dns/index.html","fc9c035a17b488c4cb9b03ff5323e606"]];
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







