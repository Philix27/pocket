if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),u={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>u[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-5194662c"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/02e20c09-cd370de4bec446cf.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/1070.150918a5972c83f2.js",revision:"150918a5972c83f2"},{url:"/_next/static/chunks/1179.8207d69e1576455c.js",revision:"8207d69e1576455c"},{url:"/_next/static/chunks/1331.3920026376ad9bef.js",revision:"3920026376ad9bef"},{url:"/_next/static/chunks/1534-77c79e5a3e403daa.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/1567.04e737dd04aab2d3.js",revision:"04e737dd04aab2d3"},{url:"/_next/static/chunks/1758.6c9102c193589b39.js",revision:"6c9102c193589b39"},{url:"/_next/static/chunks/1791.42b3c64bc1dd6e1d.js",revision:"42b3c64bc1dd6e1d"},{url:"/_next/static/chunks/1a41d449-89e39fa1e9b729d3.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/2019.b16fbfc5ce0e26fb.js",revision:"b16fbfc5ce0e26fb"},{url:"/_next/static/chunks/2220c2bf-35795be9db7496c9.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/2224.57c757b2019cb313.js",revision:"57c757b2019cb313"},{url:"/_next/static/chunks/227.3e55b84ed154613e.js",revision:"3e55b84ed154613e"},{url:"/_next/static/chunks/2351.c7fcc5fb3236bbbf.js",revision:"c7fcc5fb3236bbbf"},{url:"/_next/static/chunks/2380.131b60631123476d.js",revision:"131b60631123476d"},{url:"/_next/static/chunks/2402.c8ca67a3ad96d723.js",revision:"c8ca67a3ad96d723"},{url:"/_next/static/chunks/2557.444bf3fb3a0a6ac8.js",revision:"444bf3fb3a0a6ac8"},{url:"/_next/static/chunks/2734.5e5660216f79e215.js",revision:"5e5660216f79e215"},{url:"/_next/static/chunks/288.d2375893b8ee2e58.js",revision:"d2375893b8ee2e58"},{url:"/_next/static/chunks/2919.ca582f2996f8544d.js",revision:"ca582f2996f8544d"},{url:"/_next/static/chunks/3072.9284109f1a280ba8.js",revision:"9284109f1a280ba8"},{url:"/_next/static/chunks/3242.af51f166075d2a7a.js",revision:"af51f166075d2a7a"},{url:"/_next/static/chunks/3450.743c9dbd6270fddf.js",revision:"743c9dbd6270fddf"},{url:"/_next/static/chunks/3645.adde245acfee9f5a.js",revision:"adde245acfee9f5a"},{url:"/_next/static/chunks/3702-b6769faccc98ba6e.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/393be121-d64d76e25076688f.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/4028.62d4f26f95b4c86f.js",revision:"62d4f26f95b4c86f"},{url:"/_next/static/chunks/4039.a290579a859b2af9.js",revision:"a290579a859b2af9"},{url:"/_next/static/chunks/4207.6d6c47b870cdff1f.js",revision:"6d6c47b870cdff1f"},{url:"/_next/static/chunks/4786.2822d7889da7deb5.js",revision:"2822d7889da7deb5"},{url:"/_next/static/chunks/488.c9d98dd4a6e3aad6.js",revision:"c9d98dd4a6e3aad6"},{url:"/_next/static/chunks/5307.931b14bb01e0acff.js",revision:"931b14bb01e0acff"},{url:"/_next/static/chunks/5351.a8660967beffcf87.js",revision:"a8660967beffcf87"},{url:"/_next/static/chunks/5382.dbc48346e4d81a74.js",revision:"dbc48346e4d81a74"},{url:"/_next/static/chunks/5478.7464b54851b0adea.js",revision:"7464b54851b0adea"},{url:"/_next/static/chunks/5498.9af795ae3e53fe51.js",revision:"9af795ae3e53fe51"},{url:"/_next/static/chunks/5679.58a475b4fc92b27b.js",revision:"58a475b4fc92b27b"},{url:"/_next/static/chunks/5874.0791c11708ec0b5e.js",revision:"0791c11708ec0b5e"},{url:"/_next/static/chunks/605.eefae906f1c9a434.js",revision:"eefae906f1c9a434"},{url:"/_next/static/chunks/6136.4bc7e9ebc51ff12f.js",revision:"4bc7e9ebc51ff12f"},{url:"/_next/static/chunks/6200.84a6165bbf4f1a74.js",revision:"84a6165bbf4f1a74"},{url:"/_next/static/chunks/6248.2f20f5724c0652d0.js",revision:"2f20f5724c0652d0"},{url:"/_next/static/chunks/624ef19b-729c242758a22680.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/6365-14ce7c2f4b5458d0.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/6380-1ca627773e43b5c4.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/6414.dc9d24b5669d5b2b.js",revision:"dc9d24b5669d5b2b"},{url:"/_next/static/chunks/6420.350793b0a2c812b2.js",revision:"350793b0a2c812b2"},{url:"/_next/static/chunks/6727.ea96782041de6a47.js",revision:"ea96782041de6a47"},{url:"/_next/static/chunks/6764.525f67990f80c3e0.js",revision:"525f67990f80c3e0"},{url:"/_next/static/chunks/6844.c053b84f8f9dc2e9.js",revision:"c053b84f8f9dc2e9"},{url:"/_next/static/chunks/686.bd8a326d11f77208.js",revision:"bd8a326d11f77208"},{url:"/_next/static/chunks/6892.b3d6088f02916164.js",revision:"b3d6088f02916164"},{url:"/_next/static/chunks/6987.2a756d843a0e2233.js",revision:"2a756d843a0e2233"},{url:"/_next/static/chunks/6991.5a6a2852d0a04109.js",revision:"5a6a2852d0a04109"},{url:"/_next/static/chunks/7053.f8130b323dcbcb52.js",revision:"f8130b323dcbcb52"},{url:"/_next/static/chunks/710.eff3cc794ac5a838.js",revision:"eff3cc794ac5a838"},{url:"/_next/static/chunks/724282ec-f1b8a362ff9521ef.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/7458.03c5f2bfd7e6c26c.js",revision:"03c5f2bfd7e6c26c"},{url:"/_next/static/chunks/7472.55ae2741fbbd0bc3.js",revision:"55ae2741fbbd0bc3"},{url:"/_next/static/chunks/7565.bd3a040a201aa91f.js",revision:"bd3a040a201aa91f"},{url:"/_next/static/chunks/7641.65151da52565f0aa.js",revision:"65151da52565f0aa"},{url:"/_next/static/chunks/7736.03f635b9cf033aea.js",revision:"03f635b9cf033aea"},{url:"/_next/static/chunks/782.3008ad9a63ac512b.js",revision:"3008ad9a63ac512b"},{url:"/_next/static/chunks/8022.247c7cbdbe36d5c4.js",revision:"247c7cbdbe36d5c4"},{url:"/_next/static/chunks/806.24257b65fdac3c51.js",revision:"24257b65fdac3c51"},{url:"/_next/static/chunks/8086.7b08cbd147891978.js",revision:"7b08cbd147891978"},{url:"/_next/static/chunks/8092.c86129e6a07c67af.js",revision:"c86129e6a07c67af"},{url:"/_next/static/chunks/8115.8e52f739470f7604.js",revision:"8e52f739470f7604"},{url:"/_next/static/chunks/824.4a0ee4c7e087ec0d.js",revision:"4a0ee4c7e087ec0d"},{url:"/_next/static/chunks/8348.b2086d7472f07c8c.js",revision:"b2086d7472f07c8c"},{url:"/_next/static/chunks/853680e6-f8288469a1a01a96.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/8660.d1c19abf2c9df5e6.js",revision:"d1c19abf2c9df5e6"},{url:"/_next/static/chunks/8759-5fdf538ae1dfc4ca.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/8846.58f6555b545fd5e0.js",revision:"58f6555b545fd5e0"},{url:"/_next/static/chunks/8887-61878ace0202b112.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/8909.9d3843ece67e15d8.js",revision:"9d3843ece67e15d8"},{url:"/_next/static/chunks/9012.62d07f4e3b5f75fa.js",revision:"62d07f4e3b5f75fa"},{url:"/_next/static/chunks/9331.bc10de16dd09ab06.js",revision:"bc10de16dd09ab06"},{url:"/_next/static/chunks/9346.d84f4579a7bfbb2e.js",revision:"d84f4579a7bfbb2e"},{url:"/_next/static/chunks/9385.c70127f0ff3e2a70.js",revision:"c70127f0ff3e2a70"},{url:"/_next/static/chunks/9412-d530b666727507a1.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/9417.130a93ea283cbe04.js",revision:"130a93ea283cbe04"},{url:"/_next/static/chunks/9586.804c555468cc1ffb.js",revision:"804c555468cc1ffb"},{url:"/_next/static/chunks/9814-2b5b892973937d91.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/9853.5a4bddf5652385ad.js",revision:"5a4bddf5652385ad"},{url:"/_next/static/chunks/9969.da031c0de8deb4d9.js",revision:"da031c0de8deb4d9"},{url:"/_next/static/chunks/a73e7c60-ef16d73f45ec9c88.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/aca0e0ae-2b644a3262dce4d8.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/(admin)/layout-24c6b05f7041351f.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/(admin)/swap/page-70b462e3dfb99ee8.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/(core)/dashboard/page-41ca3e67e30591fc.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/(core)/fx/page-1bc37f2e0b8dbc31.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/(core)/layout-69bf7aac5b583831.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/(core)/savings/page-7c4b52b36f86397e.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/(core)/settings/page-2c46464d02e462f1.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/(core)/settings/profile/page-4d66ac9080322289.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/(marketing)/docs/%5Bslug%5D/page-19c3464d0f607a54.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/(marketing)/layout-22f2912c716807bc.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/(marketing)/page-45660a6838cd799f.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/(messaging)/layout-ddd9f6ed161126d8.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/(messaging)/support/page-dd0f2c01e3e1171f.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/_not-found/page-2e2f7e7b2c31f54a.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/error-696651fb6fc3269b.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/layout-529aa75ef20138ef.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/loading-fb3b54b14dabdd73.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/not-found-abaa7dd0dbf21331.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/app/template-8d65942123b113f6.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/be1ecbf7-7797d428703147b1.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/c81efc84-5262be959b0c436b.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/df465a87-c274e2514f00c35a.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/e042eb9d-763d250cd4707acf.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/ffb75e2a-958b3a3e229c4582.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/framework-69e0f7d37422957b.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/main-3178fb3ca9af1f3e.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/main-app-79d3c994cf7fa07f.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/pages/_app-74d9279482ff4d33.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/pages/_error-cdce8ec83893741e.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-f423828040846e96.js",revision:"jxTmmZ6QlxByuTpdKz7pK"},{url:"/_next/static/css/998c2ef608cebb3f.css",revision:"998c2ef608cebb3f"},{url:"/_next/static/css/efa5af97bb17631c.css",revision:"efa5af97bb17631c"},{url:"/_next/static/css/fbac0e41b55cc10f.css",revision:"fbac0e41b55cc10f"},{url:"/_next/static/jxTmmZ6QlxByuTpdKz7pK/_buildManifest.js",revision:"a2b7a3fb2f771ff10fef8bacd1a6d453"},{url:"/_next/static/jxTmmZ6QlxByuTpdKz7pK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/2bb25458ea2620e9-s.p.woff2",revision:"a5d39b3d0822026c03d97a2447bc67e3"},{url:"/_next/static/media/a4f00cf9cbfc4a42-s.woff2",revision:"c8b9a8e3dec5a10145ad928c11b5f211"},{url:"/_next/static/media/user_preferences_bindings_wasm_bg.df5904c2.wasm",revision:"df5904c2"},{url:"/banner.png",revision:"37cbf88012fff17a437d5eacd158517e"},{url:"/bit.jpeg",revision:"a88ff013d6cd500feb690d5093a781e7"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/android-chrome-192x192.png",revision:"bf08e52ecdb44915ee88929c19b6becd"},{url:"/icons/android-chrome-384x384.png",revision:"a874528b1afef54f080d003e6d840637"},{url:"/icons/apple-touch-icon.png",revision:"966b3f6ee731d3fae1c74de84aed99d7"},{url:"/icons/icon-512x512.png",revision:"64150646c2db3aeaa7735638a2a16aaa"},{url:"/icons/icon.png",revision:"95a85da3e96bb443eb5ede2f7dab299c"},{url:"/logo.png",revision:"bf08e52ecdb44915ee88929c19b6becd"},{url:"/manifest.json",revision:"def2a2e062a26ee3de30d9c891a4f31f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/support.png",revision:"9b8bc5a1e461eee18cc9754525119962"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/xmtp-icon.png",revision:"029c14acf3050d178eb5cb3272380980"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
