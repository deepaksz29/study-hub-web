'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "92414427a12cf269c89fabaee76920ef",
"version.json": "ce21b37394abfc3162adb2619e8f5dff",
"index.html": "004faa3a332b129820d283c0714910f4",
"/": "004faa3a332b129820d283c0714910f4",
"main.dart.js": "80531b9be5afe0621b1c5c68f07bb756",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a440c72a5f2f7a76e25b9b85946fd78c",
"assets/AssetManifest.json": "b0850e7866f10be1f84f3c1239302f1e",
"assets/NOTICES": "898be36bf916288757e7b3f5bb56f4f0",
"assets/FontManifest.json": "2b52acee7bee9f34d372a965ef37754f",
"assets/AssetManifest.bin.json": "b0e1eb782b66a1594089d1f778a5cec9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "a9dc98f8bf360be897a0898a7395f905",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1a0afcab914f34594439ff66a9ebdcb0",
"assets/fonts/MaterialIcons-Regular.otf": "685ca95dca914bc2e72bf29342e0c31c",
"assets/assets/images/banneralive.png": "4d337e734512d1609f6e8114ad56ad30",
"assets/assets/images/banners_06.jpg": "801c84c5174eba63e134b330d493b63d",
"assets/assets/images/anim_44_1.png": "34fb65c157f5968762ba63e407aa0acf",
"assets/assets/images/achieve_page_banner.png": "1d5047f3af3a423f99bd09e79d84440d",
"assets/assets/images/vrr.png": "5d12ac564c801391a2ccbab56f66b491",
"assets/assets/images/virms_img_1.png": "55535aea18c239f85fb66712c499f9c6",
"assets/assets/images/intrac_31_1.png": "53532d40b8dec7c34216cf720dbad213",
"assets/assets/images/practice.png": "c2b0c59765c85a79efc7f81590f13a4f",
"assets/assets/images/banners_05.jpg": "0802f22cf665bb2aaf595c470f961405",
"assets/assets/images/teacher.png": "19469aed7f222d6009f48158a682bb9c",
"assets/assets/images/a3d_bg_1.png": "062349cd9811e52abcbe401bfdce598a",
"assets/assets/images/banners_04.jpg": "0c41a13868f931ee8c6df7bbdcbbdfe8",
"assets/assets/images/students.png": "d562ba4f030b364c4a0212082f5334e8",
"assets/assets/images/game.png": "ccd199e12e2e145675bfda5e9afe3c83",
"assets/assets/images/banners_01.jpg": "fa7fdd4067dc6d52a09da16295ecdae8",
"assets/assets/images/school.png": "eff3485c11e0ca38065b2673ea7bc5d5",
"assets/assets/images/discovery_based_learning.png": "e626cc776dca6f88ca94f00d4727cf89",
"assets/assets/images/activities_1.png": "4d29afe404e5d50bf0239830ccd90dfe",
"assets/assets/images/banners_03.jpg": "286caec62ebf4f31900edc5a2f95867a",
"assets/assets/images/banners_02.jpg": "a3a3f7b9b83172364c0023e7b5e83554",
"assets/assets/images/ar_bg_1.png": "96860bc77c7c051748aa8aa33fbe9ff6",
"assets/assets/images/anim_3d_new_img.png": "263853841a02b72f9cea15bdcad0a617",
"assets/assets/images/intrac_30_1.png": "9b1bf1570e6c47e7b3957dd5b6eb8f81",
"assets/assets/images/setin_icon_1.png": "158eea09fb2e60c31e072ba75bbb2c03",
"assets/assets/images/ar_new1.png": "af75282b661627273e592be559fbf463",
"assets/assets/images/test_banner_2_1.png": "9223b7353dd341465adfe3affa6561b9",
"assets/assets/images/study.png": "1843e78f1667ba73ca65217c11007ef7",
"assets/assets/images/intective_new3d.png": "991426d605201bf38b4b4261969dd49f",
"assets/assets/images/asswt_15_1.png": "1bffaad40c125220ae3ea1dd51318127",
"assets/assets/images/ar_new2.png": "b79880fd3ba29ccee762c7ae8978ccc3",
"assets/assets/images/ar_new3.png": "6a28c99c848dd259269ab8986dfd0afd",
"assets/assets/images/anim_45_1.png": "60580ad990d3c2f65610f345e50f74b7",
"assets/assets/images/anim_2d_new_img.png": "3e62b6c48d42a1ef0f2a84b1f62e762d",
"assets/assets/images/meta.png": "d3a14b1fcc96a8e74c16ad2eb0cefb69",
"assets/assets/images/anim_2d_new_img3.png": "6ec89847ee6ca9944ac088cf649978df",
"assets/assets/images/information.png": "6b0bf8a552f3aac8e72cd7f24afb51f7",
"assets/assets/images/banner_2nd_1.png": "972632a56daae5b12412e94d25c1372f",
"assets/assets/images/image_1_1.png": "bc282fc14c03e9a64451fd42af91e796",
"assets/assets/images/shape_book_1.png": "e75ff7fbce2c90040acbeeca9450a9c8",
"assets/assets/images/anim_2d_new_img2.png": "9c76b51cb60b4dce3cc71f07c091af64",
"assets/assets/images/alive_5.png": "8399c21d6584f9282d6041d4954e3176",
"assets/assets/images/assessments_1.png": "089b8cb62205a7900c10ea1efaf077f0",
"assets/assets/images/test.png": "b54520957b9001d819b92e711260cbe6",
"assets/assets/images/anim_43_ss.png": "9be2cb40eb18ffa671fc8906aa7434bd",
"assets/assets/images/alive_4.png": "3d1f4a58db1174237ad8f45a51430eb1",
"assets/assets/images/alive_img.png": "4c6c1e7a746c99f63e84217a023e3b5d",
"assets/assets/images/anim_3d_new_img2.png": "6b9343f9a695417419a0dc551ecf8516",
"assets/assets/images/intrac_29_new.png": "94859945d6b224419443a83bcdec1c70",
"assets/assets/images/anim_3d_new_img3.png": "85f1081edb4c7a47b2309f7fc5a5ffde",
"assets/assets/images/ar_23_1.png": "fe977195f86b86119a786847a0d79bb7",
"assets/assets/images/alive_3.png": "8cd3eea8e5a64d450b8e9e37bfeb178c",
"assets/assets/images/vr_bg_1.png": "7244fb80f5dca6cf44a5ffd10740fe05",
"assets/assets/images/app_logo.png": "d70b4f2b9c3e2486cc0fcb4dc63ae61e",
"assets/assets/images/imaginative_visuals_1.png": "d4b25ec8d886472398de7285427861c4",
"assets/assets/images/achive_baner.png": "3f08964422d09a326f4a9f83cc56f300",
"assets/assets/images/ar_22_1.png": "bd185e732b2889200f19f931fb6c398f",
"assets/assets/images/practice_page_banner_1.png": "67d932fed328ea7ce39547c3b61cfb9c",
"assets/assets/images/test_page_banner_1.png": "fc85e7c4c3bcad5749a9af7898a42113",
"assets/assets/images/test_image_1.png": "dc8e535361ae59957b1792f062d9b882",
"assets/assets/images/vr_new_img1.png": "a7fa2d79a06f14b7a358e459197eca45",
"assets/assets/images/animation_new_2d.png": "d12d23603b248b273142ec8f44f5a451",
"assets/assets/images/asset_20_1.png": "2e7e14727f6987ee5501a10fd5b644f4",
"assets/assets/images/ar_24_1.png": "821e72bd0ea0aae70ec615a038fa651c",
"assets/assets/images/arr.png": "fe5a8cff51d313e9b01cabffa7c05ddb",
"assets/assets/images/advantage_icon__1.png": "76b44916b67bc866ddfe757f5d72e968",
"assets/assets/images/d2_animation_bg_1.png": "6e92cf30b73f390e9fd467ae8276c77a",
"assets/assets/images/vr_new_img2.png": "b095ef354f07dfbedb7280348cb52028",
"assets/assets/images/vr_new_img3.png": "8703e59b889daa2f65e35929ad3797d0",
"assets/assets/images/conceptual_learning_1.png": "490d53a4938f11572b6e04bb816a6da3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
