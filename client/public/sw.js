if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Iet94v_mlZRMrbEo0x7Wo/_buildManifest.js",revision:"3e2d62a10f4d6bf0b92e14aecf7836f4"},{url:"/_next/static/Iet94v_mlZRMrbEo0x7Wo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1374-32cdc3bdd39853f5.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/160b575a-0cbbbfa6eaf15fe9.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/1801.e7c878771e69f6c1.js",revision:"e7c878771e69f6c1"},{url:"/_next/static/chunks/32.be5f63ea76a4c9dd.js",revision:"be5f63ea76a4c9dd"},{url:"/_next/static/chunks/3d47b92a-ebbb12d935198cba.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/479ba886-e1cc0cd79ad0145b.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/5044.1d1a3c9a8f0a4163.js",revision:"1d1a3c9a8f0a4163"},{url:"/_next/static/chunks/5054-f784d81b22e4a123.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/5189-4e2b3e95b99bf29c.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/5190-c8009bfb88316965.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/5765-a6cab8f14a9e2471.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/5916-db3699f8ad70d258.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/59650de3-2a58891832889f25.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/5e22fd23-07f113e593fd6cdb.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/6144.376c9de77e038266.js",revision:"376c9de77e038266"},{url:"/_next/static/chunks/6236.f86805eaa2539d0a.js",revision:"f86805eaa2539d0a"},{url:"/_next/static/chunks/6686.710a9e921dda9dee.js",revision:"710a9e921dda9dee"},{url:"/_next/static/chunks/74.0a4d7701b769215e.js",revision:"0a4d7701b769215e"},{url:"/_next/static/chunks/795d4814-c6bfe12624a96ab8.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/8372.99a2a86651fe8d74.js",revision:"99a2a86651fe8d74"},{url:"/_next/static/chunks/8981.dd703f6181b3d73e.js",revision:"dd703f6181b3d73e"},{url:"/_next/static/chunks/8e1d74a4-7df0771464b31a0c.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/9616-c4d9661ec3cb777f.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/9786.eb7f297d04a8864e.js",revision:"eb7f297d04a8864e"},{url:"/_next/static/chunks/9929.f89c7a06e6b0e311.js",revision:"f89c7a06e6b0e311"},{url:"/_next/static/chunks/9c4e2130-89a287c9f8b4272d.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/aaea2bcf-5f43109356f16c88.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/(core)/dashboard/page-21a2d48be197d479.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/(core)/fx/page-e3771b0947c0fc41.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/(core)/layout-33f240461e6f7d44.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/(core)/savings/page-193f69cd7bef80bf.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/(core)/swap/page-1e394d62b856c038.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/(marketing)/layout-831d2d42fd3968ff.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/(marketing)/page-90c119be63c0a267.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/(settings)/layout-a620c143ebfaa363.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/(settings)/profile/page-2a2035369ed7fceb.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/(settings)/settings/page-733ca78ff4aebd0f.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/_not-found/page-687048894594d829.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/error-e15ed08128d34858.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/layout-2dc655f701b83ab9.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/lib/auth/page-f64898248b0f7e3a.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/loading-eaa72b21a04a97f1.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/not-found-0dcd062879302994.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/app/template-f971bb5626c7695d.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/e34aaff9-c4013b9a7422f449.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/eec3d76d-049a717dc9e33401.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/fd9d1056-2da87ae24deebb72.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/main-392e4091afc3a6bd.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/main-app-b7939837f6125fc7.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/pages/_app-f870474a17b7f2fd.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/pages/_error-c66a4e8afc46f17b.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-522bbd2983e347b8.js",revision:"Iet94v_mlZRMrbEo0x7Wo"},{url:"/_next/static/css/6e0fc8c034fcd2e2.css",revision:"6e0fc8c034fcd2e2"},{url:"/_next/static/css/efa5af97bb17631c.css",revision:"efa5af97bb17631c"},{url:"/_next/static/media/2bb25458ea2620e9-s.p.woff2",revision:"a5d39b3d0822026c03d97a2447bc67e3"},{url:"/_next/static/media/a4f00cf9cbfc4a42-s.woff2",revision:"c8b9a8e3dec5a10145ad928c11b5f211"},{url:"/bit.jpeg",revision:"a88ff013d6cd500feb690d5093a781e7"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/android-chrome-192x192.png",revision:"08a0e3f99415e5de359721b03f247a44"},{url:"/icons/android-chrome-384x384.png",revision:"08a0e3f99415e5de359721b03f247a44"},{url:"/icons/apple-touch-icon.png",revision:"08a0e3f99415e5de359721b03f247a44"},{url:"/icons/icon-512x512.png",revision:"08a0e3f99415e5de359721b03f247a44"},{url:"/manifest.json",revision:"def2a2e062a26ee3de30d9c891a4f31f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/xmtp-icon.png",revision:"029c14acf3050d178eb5cb3272380980"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
