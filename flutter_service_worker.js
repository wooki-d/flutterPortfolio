'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "43797d59f5bfd4f001f9abb978e86ebb",
"index.html": "88d3667161f3cd8b871dacf28a670d6f",
"/": "88d3667161f3cd8b871dacf28a670d6f",
"main.dart.js": "969c5a039dd79119264d037de4490ec6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "98f720e2837f7eeeab43ecd2ca932384",
".git/config": "b90e0dff2822195651df97c0429dba53",
".git/objects/0c/fa4bbde058fde105fd5028265460dc7c75bf28": "3bd46f5e3934c3858614c5b6589a6515",
".git/objects/03/f948c5e55108c8e4b11aac6cb426571040dc3b": "91ff1670860060e98fc01fbf81ee9b39",
".git/objects/04/bf2fb06bba68dcfe57813a376ee5f1c9d6897a": "b5638f41aa0c688d3c03741132b2679a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/aa0e171554db16f1b21ea4b3e66e573822b331": "de1dc4988d0372a5208cf5ee5f2a817c",
".git/objects/a4/80c92daec1326eb0d08cbfeb0d3709bd9e3527": "0929dfd828dad99e43f69c0d13e48259",
".git/objects/a5/f12dcaa43e34bce7dc464fa682d07f67351f7a": "2c4154ed2b8d850925e3c2dcfaca36f5",
".git/objects/bd/dd98ef877e31b38d92c5958b370cbbae25195c": "992b2d42f235c5b06e44db1573a0b1a3",
".git/objects/d8/caccef8608bef1dabca75257c8c166cecfe75d": "85ec9f38d4a2179c20133668ba966c31",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/2596b768ca7f1682cf86cc3d6b9ae14f814e16": "3a6e91e0f76b1afbda41fdae400cfa4f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/6c1cd350870002012b12345aa8999228806332": "c3ee09e19e7dc55a0d1dd92c14a4cfcc",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/1a/2c36088379d5e30bb46892a10f0fe1f8d2b81f": "23e502e73a722091aef32cd2ad99615c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/f039dcc3403f1c1f0543f40b610a9e64b4bec4": "5e83025d184a6052444a4076eeee7c29",
".git/objects/44/28ec74b0ce4cc50793dc0f5ba8c36a8c11aa73": "f0148375a63ed0c205cedb1bcf25404d",
".git/objects/43/60f50787355e79f0744b48c5aaa2506d8c0faa": "96a612cfd528ecdd21297bbad629c96f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/c00c4d406a6e0a5acabf26bbec1e0f58cc0c27": "0689a272242686131f7c3e4098385aa0",
".git/objects/54/247343eded1c8b0c75f7cb64247cba65e5a0f8": "b98972f7247f154e73cf1d204b060cb1",
".git/objects/55/be2f798b42eb0082ea53d7d5e50d609bdb4271": "14d0163a0421c45a4d4a0ab02f48441c",
".git/objects/0f/418c5893c9445e5785e0ced704930a712e7b54": "ff0cf5c197f7d72832cb9d025be25524",
".git/objects/aa/3683f90c436fdd6995c808f6e65d83450a5c52": "a88ce3065974fefc97a92cfb611e2e61",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/62a105df0e5b308c6f516ff8323cc697dfa03b": "91830e013e3534654e2de2bf39466a79",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/bc11c8e3d49fbe2efe8a58759b15b7771b08ad": "93a7865f3a934dc2a40ace9800d51655",
".git/objects/fa/bde8c23a5933e676979b9acd6bf0afcdd1b418": "41ae9b7e1e782ece5ca9a68a093de459",
".git/objects/f8/75506e7c36c8d0d63fdafc0ca99bc7f68465f7": "74083f15034e0f15195dc7be14a647cc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/04d6a2d57c0f55121b940177afc2c7930c9c65": "dd5b9f4b25356fe8d6d6ce79eb0ba0a6",
".git/objects/83/368d4924f913f231be064f8e17aad4ad0f128d": "31c4cc73829a150fd5aea5d93e82ca6d",
".git/objects/76/d1c934c5951ef05929103ed913bead2f2ab183": "d4087b61971329817ccb42f8c3c66259",
".git/objects/47/6133e8ed84bc8a7340fe1ebed3dcea480535d9": "b1a5d38a2aa6efbdaf80cb034f17d001",
".git/objects/13/cea5bdcbe3e17bd689f389c69a7a32c49b44df": "663636a721d0a36352a68ba864a37d9b",
".git/objects/7f/4131ce7aa75733a51b7035ade7fe1d91f607ac": "07a9f8d5171b64159c504efe0537515f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6191385302254e2a11415b337411ff7d",
".git/logs/refs/heads/main": "6ce73fb8de8b2b977a1bcd52cf1c913c",
".git/logs/refs/remotes/origin/main": "72f1a795c3057b0d21b575e43564792d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "210ab117e83608c1f804748839cc7ddb",
".git/refs/remotes/origin/main": "210ab117e83608c1f804748839cc7ddb",
".git/index": "9f94a85d19709a12c03b25f3088e4b16",
".git/COMMIT_EDITMSG": "8abfa2375e9bf374e4a1b07cb6361a8f",
".git/FETCH_HEAD": "81f8dbe8f1a04d6e1ba30baa16f96f27",
"assets/AssetManifest.json": "f4f45e1f954c2b72e7a9b2353f8a0060",
"assets/NOTICES": "53bad454bf41c6b9e5796d185829a5ce",
"assets/FontManifest.json": "bb56e20a846f6c0a34f5410b5b6db968",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/lomabox_logo.png": "09ca72a4e7d47a5fa4ef0939270c1a24",
"assets/assets/images/loma_logo.png": "8e7ed2ae2ecdf6dad455240ed88fc2f5",
"assets/assets/images/wooang_logo.png": "f3db368577d1c458c0ae1dc9105eb46a",
"assets/assets/images/back.jpeg": "864adb904da216e19de37b8bb442dfa5",
"assets/assets/font/Noto_Sans_KR/NotoSansKR-Light.otf": "89816c0e22baa4f81a196a1c3b61bf46",
"assets/assets/font/Noto_Sans_KR/NotoSansKR-Bold.otf": "b59ac7cf449e57469daf2480fafbddf4",
"assets/assets/font/Noto_Sans_KR/NotoSansKR-Thin.otf": "5dac92efb94655ca5331df2505f3428a",
"assets/assets/font/Noto_Sans_KR/NotoSansKR-Black.otf": "aef8424b7c9ece17f01cbc8618e4723b",
"assets/assets/font/Noto_Sans_KR/NotoSansKR-Medium.otf": "de132efeffa48aef0bf5bdfe1c4602f4",
"assets/assets/font/Noto_Sans_KR/NotoSansKR-Regular.otf": "913f146b0200b19b17eb4de8b4427a9c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
