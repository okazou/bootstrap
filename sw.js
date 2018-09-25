/* global workbox:false */

self.importScripts('docs/4.1/assets/js/vendor/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "docs/4.1/about/brand/index.html",
    "revision": "58e9914407acc8b5ab713f29781fcc24"
  },
  {
    "url": "docs/4.1/about/index.html",
    "revision": "e2abe85a350eee0baef989198a63d3b8"
  },
  {
    "url": "docs/4.1/about/license/index.html",
    "revision": "4aa3e495723ee727e40579defd3917e1"
  },
  {
    "url": "docs/4.1/about/overview/index.html",
    "revision": "ad843a15f2d69a6c09adcf25e29f2840"
  },
  {
    "url": "docs/4.1/about/translations/index.html",
    "revision": "e6f61bdb21f596bd19a2c2aad7b6172c"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-outline.svg",
    "revision": "8ab0338973a6a0b26e58ef3467120203"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-punchout.svg",
    "revision": "83465f31cb7c0e3d62d53f8dade0ecbb"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-solid.svg",
    "revision": "ba23603c8668f4fe65dc2c7996053224"
  },
  {
    "url": "docs/4.1/assets/css/docs.min.css",
    "revision": "9c60ccbe68627389c71142972b8c5072"
  },
  {
    "url": "docs/4.1/assets/img/bootstrap-stack.png",
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "docs/4.1/assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "docs/4.1/assets/img/favicons/android-chrome-192x192.png",
    "revision": "643718426d0a7d60036217ba988155be"
  },
  {
    "url": "docs/4.1/assets/img/favicons/android-chrome-512x512.png",
    "revision": "eb512e79165f504fd4da4d2758d5584b"
  },
  {
    "url": "docs/4.1/assets/img/favicons/apple-touch-icon.png",
    "revision": "042a7e9fdd293212aca19150aef71b0d"
  },
  {
    "url": "docs/4.1/assets/img/favicons/favicon-16x16.png",
    "revision": "50c62448d4014e5fb411887c05c2935b"
  },
  {
    "url": "docs/4.1/assets/img/favicons/favicon-32x32.png",
    "revision": "fed84e16b6ccfe88ee7ffaae5dfefd34"
  },
  {
    "url": "docs/4.1/assets/img/favicons/manifest.json",
    "revision": "c29cc62ce253308cabb1d2bceb023a3f"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-144x144.png",
    "revision": "84892991321e7998ca4c80ae21175f78"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-150x150.png",
    "revision": "61821c45a353e259bb83f9b0d338f5e8"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-310x150.png",
    "revision": "913e1b81006831c72a7bca38e4125edb"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-310x310.png",
    "revision": "29d79a7e648876504496211f003c4076"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-70x70.png",
    "revision": "386d71707992eb91fc53df303e99c2e7"
  },
  {
    "url": "docs/4.1/assets/img/favicons/safari-pinned-tab.svg",
    "revision": "426e00c049a15eb18c37bc88ca6746d9"
  },
  {
    "url": "docs/4.1/assets/js/docs.min.js",
    "revision": "fde529aa8fa442f19c11f54cff376843"
  },
  {
    "url": "docs/4.1/assets/js/src/application.js",
    "revision": "31b1592dcfbc8948a0190f69619a4dda"
  },
  {
    "url": "docs/4.1/assets/js/src/ie-emulation-modes-warning.js",
    "revision": "c6e7032adf9bd98ac39e83c83108977b"
  },
  {
    "url": "docs/4.1/assets/js/src/pwa.js",
    "revision": "7799a8252f0c1a0c8f1cc07e696e183e"
  },
  {
    "url": "docs/4.1/assets/js/src/search.js",
    "revision": "5b8bb2081b9e10ee9a469dd5feca5996"
  },
  {
    "url": "docs/4.1/assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "docs/4.1/assets/js/vendor/clipboard.min.js",
    "revision": "3f3688138a1b9fc4ef669ce9056b6674"
  },
  {
    "url": "docs/4.1/assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "docs/4.1/assets/js/vendor/jquery-slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "docs/4.1/assets/js/vendor/popper.min.js",
    "revision": "83fb8c4d9199dce0224da0206423106f"
  },
  {
    "url": "docs/4.1/assets/js/vendor/workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "docs/4.1/browser-bugs/index.html",
    "revision": "7e0151e00149e3e79dc95cf85aaef620"
  },
  {
    "url": "docs/4.1/components/alerts/index.html",
    "revision": "3e60ace5010ecd172927b47d9a8a3b71"
  },
  {
    "url": "docs/4.1/components/badge/index.html",
    "revision": "932fae7f33d625bf77011773a86116fb"
  },
  {
    "url": "docs/4.1/components/breadcrumb/index.html",
    "revision": "ac92564323774a8df9a458c037d1bc2b"
  },
  {
    "url": "docs/4.1/components/button-group/index.html",
    "revision": "2bcf39db29597e2316f8a3d848e550a0"
  },
  {
    "url": "docs/4.1/components/buttons/index.html",
    "revision": "2bb96369b42928144862117c86308334"
  },
  {
    "url": "docs/4.1/components/card/index.html",
    "revision": "69bc12ebbe7d6458a39761beb542c5fb"
  },
  {
    "url": "docs/4.1/components/carousel/index.html",
    "revision": "5f45c95a0c85c35bf10718aa74439103"
  },
  {
    "url": "docs/4.1/components/collapse/index.html",
    "revision": "24e687f31b394b4e982bab1451f0d0eb"
  },
  {
    "url": "docs/4.1/components/dropdowns/index.html",
    "revision": "80fb9dd9f6b11301e7d283680598c165"
  },
  {
    "url": "docs/4.1/components/forms/index.html",
    "revision": "136e24f9d7ba4e69f6b693a9257fd35a"
  },
  {
    "url": "docs/4.1/components/index.html",
    "revision": "7f3c3bfd7604b15e4cd49bde50119cb3"
  },
  {
    "url": "docs/4.1/components/input-group/index.html",
    "revision": "f8e9b465c0fa759c3007755cd11b95b9"
  },
  {
    "url": "docs/4.1/components/jumbotron/index.html",
    "revision": "c754bbb232a4c897df1259702313381a"
  },
  {
    "url": "docs/4.1/components/list-group/index.html",
    "revision": "0fb0984bdd35b98222ec949ea903673d"
  },
  {
    "url": "docs/4.1/components/modal/index.html",
    "revision": "39bcee0a36edbe5ef63aafc20ed1a2c7"
  },
  {
    "url": "docs/4.1/components/navbar/index.html",
    "revision": "33b97bd4ef0844e1238f0b1aa66ab411"
  },
  {
    "url": "docs/4.1/components/navs/index.html",
    "revision": "de9ec2c00a846ad6f88c7a1caf19342d"
  },
  {
    "url": "docs/4.1/components/pagination/index.html",
    "revision": "9ce5a96171a09b406705049431d699a6"
  },
  {
    "url": "docs/4.1/components/popovers/index.html",
    "revision": "25d1c6afeb5bf4cd667d4f441a697074"
  },
  {
    "url": "docs/4.1/components/progress/index.html",
    "revision": "05bcaf8de023e88b3ecc858f9ef2dcf0"
  },
  {
    "url": "docs/4.1/components/scrollspy/index.html",
    "revision": "f09e1e765be09a7a7188040b497618b6"
  },
  {
    "url": "docs/4.1/components/tooltips/index.html",
    "revision": "23474e31b1b0701b047b83a752ae2d19"
  },
  {
    "url": "docs/4.1/content/code/index.html",
    "revision": "a5ac9c36176568029fcfd0c19d5a9a8a"
  },
  {
    "url": "docs/4.1/content/figures/index.html",
    "revision": "14cf9da2d35063198425bd933ca905a5"
  },
  {
    "url": "docs/4.1/content/images/index.html",
    "revision": "35b021443309a2236a391b58a4e05fa0"
  },
  {
    "url": "docs/4.1/content/index.html",
    "revision": "04af87a06dcd8c15b6016a478afbc517"
  },
  {
    "url": "docs/4.1/content/reboot/index.html",
    "revision": "6c5d037e5e6d9ddf5dfc31f835d54d95"
  },
  {
    "url": "docs/4.1/content/tables/index.html",
    "revision": "2f5e268767cfcf82152a8ca621ec24b1"
  },
  {
    "url": "docs/4.1/content/typography/index.html",
    "revision": "c72b89948f3dc965bdc6a4f7d6f0732a"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-grid.css",
    "revision": "9781f4a4610d27259bcb91268e711f4d"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-grid.min.css",
    "revision": "3690c7f90a55a89c5f13d3024b2ed2d0"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-reboot.css",
    "revision": "62d9f800245f7a049d9cae7088d0d302"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-reboot.min.css",
    "revision": "2e1129ecefb7da25a44fdddf7dff498b"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap.css",
    "revision": "e218b46c9cbfcc7530ee6d892c379228"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap.min.css",
    "revision": "50e655f5c428b5b91b5e42e171c4839b"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.bundle.js",
    "revision": "ec9d321d2a739ebfaca3e1bf74775146"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.bundle.min.js",
    "revision": "6f1b6a7b46b50e8479ea1e05cc8c0b7b"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.js",
    "revision": "56897c3e43587fe96a840e338ec4eaf5"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.min.js",
    "revision": "0583c3d5852b0e332bd2772dfaf2c67d"
  },
  {
    "url": "docs/4.1/examples/album/album.css",
    "revision": "e884afc370b7f73395903344ed35cea2"
  },
  {
    "url": "docs/4.1/examples/album/index.html",
    "revision": "3cf256607b5e39d812d9abfa8ac6e334"
  },
  {
    "url": "docs/4.1/examples/blog/blog.css",
    "revision": "098be9399aa2bda1a8d62d2c720ab225"
  },
  {
    "url": "docs/4.1/examples/blog/index.html",
    "revision": "bd2d5e609ff9f87fc74f7f5107a4f569"
  },
  {
    "url": "docs/4.1/examples/carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "docs/4.1/examples/carousel/index.html",
    "revision": "52f0215a5005cc7c21c5083dd7939a7e"
  },
  {
    "url": "docs/4.1/examples/checkout/form-validation.css",
    "revision": "8e5fb15c4155f38020798e5c2bfb38b7"
  },
  {
    "url": "docs/4.1/examples/checkout/index.html",
    "revision": "a3beb88caa4b44de31976e74ad5eaa83"
  },
  {
    "url": "docs/4.1/examples/cover/cover.css",
    "revision": "211daf4eee015cb38fb10893c4645bbb"
  },
  {
    "url": "docs/4.1/examples/cover/index.html",
    "revision": "048fae28475f3bdd6d7d1612e8ece5cc"
  },
  {
    "url": "docs/4.1/examples/dashboard/dashboard.css",
    "revision": "58e66f4dae74a72052e9c5252171e0f8"
  },
  {
    "url": "docs/4.1/examples/dashboard/index.html",
    "revision": "444bbace9f5b649faaa9d3d51b1d3c86"
  },
  {
    "url": "docs/4.1/examples/floating-labels/floating-labels.css",
    "revision": "15c75924bc41226ca00fdae75e2abde7"
  },
  {
    "url": "docs/4.1/examples/floating-labels/index.html",
    "revision": "0889b053e0315e02b24128c8ad71590f"
  },
  {
    "url": "docs/4.1/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.1/examples/grid/index.html",
    "revision": "7754ea51ef4513e1c099aca97857fd37"
  },
  {
    "url": "docs/4.1/examples/index.html",
    "revision": "339a3bf25776d4459d788d9ff4bb43f0"
  },
  {
    "url": "docs/4.1/examples/jumbotron/index.html",
    "revision": "9bb1da29cef11b3993343808dbb488cd"
  },
  {
    "url": "docs/4.1/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.1/examples/navbar-bottom/index.html",
    "revision": "9d593c1276a24a936d31f9edfd7860df"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/index.html",
    "revision": "f7ead48d9f5f43f295f9635e5f18d6c2"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.1/examples/navbar-static/index.html",
    "revision": "77004f809351706b609d3cbbf1aec27f"
  },
  {
    "url": "docs/4.1/examples/navbar-static/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.1/examples/navbars/index.html",
    "revision": "c7a79fd01d21b29cbdf2c398d71c7f48"
  },
  {
    "url": "docs/4.1/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.1/examples/offcanvas/index.html",
    "revision": "f33ab0ac2368877adbfec2d8d1ce8317"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.css",
    "revision": "708a755e83b96d289c3165ef83e13d9d"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/4.1/examples/pricing/index.html",
    "revision": "0e4ae047b5c504a3125b99c0975a85fb"
  },
  {
    "url": "docs/4.1/examples/pricing/pricing.css",
    "revision": "c06793e3c3a28147e7efcec8c2636538"
  },
  {
    "url": "docs/4.1/examples/product/index.html",
    "revision": "1c2bda672d15143ded6e3b5e5be0b6ea"
  },
  {
    "url": "docs/4.1/examples/product/product.css",
    "revision": "e4efe420b0a96e18293c1afeb20ce6d3"
  },
  {
    "url": "docs/4.1/examples/screenshots/album.png",
    "revision": "685d5277fdf6f04aefbcbe01ba93e9ef"
  },
  {
    "url": "docs/4.1/examples/screenshots/blog.png",
    "revision": "d06dc15ae8285908ec7ba9f4b1f98a44"
  },
  {
    "url": "docs/4.1/examples/screenshots/carousel.png",
    "revision": "dc04e087b8ad4f000fa64e266812fc0f"
  },
  {
    "url": "docs/4.1/examples/screenshots/checkout.png",
    "revision": "030255900e0b73653cf6a2d074f17b31"
  },
  {
    "url": "docs/4.1/examples/screenshots/cover.png",
    "revision": "ece97a4eb488c46a86a67d61db25dda2"
  },
  {
    "url": "docs/4.1/examples/screenshots/dashboard.png",
    "revision": "2fc93187d09b5b8c342b962576eaf39e"
  },
  {
    "url": "docs/4.1/examples/screenshots/floating-labels.png",
    "revision": "fae0436f9d026a67778f3a37d29b3dfc"
  },
  {
    "url": "docs/4.1/examples/screenshots/grid.png",
    "revision": "cb63b8b5fd89749a2d87342876306dd8"
  },
  {
    "url": "docs/4.1/examples/screenshots/jumbotron.png",
    "revision": "0f579cb67e8c8535d8fffef7d17b7e45"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-bottom.png",
    "revision": "0cefd6caed82af75be57d758633d9094"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-fixed.png",
    "revision": "1d38f157f0bbbd90957044d30eaef242"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-static.png",
    "revision": "2ff01be7ee251fc5c7f51ccf9de5f48d"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbars.png",
    "revision": "d4fbce8e1e38d78a5134e6be05cdd4d7"
  },
  {
    "url": "docs/4.1/examples/screenshots/offcanvas.png",
    "revision": "c581d49a56f3e9d0d1753195c62e719a"
  },
  {
    "url": "docs/4.1/examples/screenshots/pricing.png",
    "revision": "e33e2f37741c6d15c99f3378e2e551ea"
  },
  {
    "url": "docs/4.1/examples/screenshots/product.png",
    "revision": "af74e4f7ddfc8cf2a44a9c601881329f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sign-in.png",
    "revision": "9e4bf345a8c21403868f70b777efb483"
  },
  {
    "url": "docs/4.1/examples/screenshots/starter-template.png",
    "revision": "1761d4e831e7c0659962e1abdb95421f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer-navbar.png",
    "revision": "428112965cf6826db55bcc6db07d9e5f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer.png",
    "revision": "59b69c34997abee3d477f836d44ce8a3"
  },
  {
    "url": "docs/4.1/examples/sign-in/index.html",
    "revision": "253d015ba1f15d1a6bc38913e14f5850"
  },
  {
    "url": "docs/4.1/examples/sign-in/signin.css",
    "revision": "00e205f17ee0cd3f59d5e1e1e9cf3b3f"
  },
  {
    "url": "docs/4.1/examples/starter-template/index.html",
    "revision": "dbbfced32a95a6c50bdc755d460832ab"
  },
  {
    "url": "docs/4.1/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/index.html",
    "revision": "846c7984f0bf4f487ef1a87070aff0db"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "6fdbd6c044785ad21176f0a63e5ff5d2"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/index.html",
    "revision": "795a82b74efc535d8407bc7650d9e57b"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/sticky-footer.css",
    "revision": "08458f94e3c790fde385d34fb4c8612c"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/index.html",
    "revision": "84df4402f0742fb12c26e24adece94d5"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.1/extend/approach/index.html",
    "revision": "88f206a3c2320f34a19106fcf4722c8f"
  },
  {
    "url": "docs/4.1/extend/icons/index.html",
    "revision": "0b44a6a8d20446b1a79233e9ea5eac89"
  },
  {
    "url": "docs/4.1/extend/index.html",
    "revision": "c62005ef79c31983e281dd4d46bcb25d"
  },
  {
    "url": "docs/4.1/getting-started/accessibility/index.html",
    "revision": "1ea99bad907358bbbd747c1a4688e466"
  },
  {
    "url": "docs/4.1/getting-started/best-practices/index.html",
    "revision": "1c2ea8b174ee31e11f8fee22fae0af6e"
  },
  {
    "url": "docs/4.1/getting-started/browsers-devices/index.html",
    "revision": "302d49712bd49a6b5b7397629e94fd81"
  },
  {
    "url": "docs/4.1/getting-started/build-tools/index.html",
    "revision": "e6b88b2ea52bf5d48f22dfc2b2152e63"
  },
  {
    "url": "docs/4.1/getting-started/contents/index.html",
    "revision": "1ca30a305849076e0ebed5800a5f9c17"
  },
  {
    "url": "docs/4.1/getting-started/download/index.html",
    "revision": "a4795c00bcbd558d1c607e5b0be550ea"
  },
  {
    "url": "docs/4.1/getting-started/index.html",
    "revision": "6c67d761f0662b9b69f9dcb3b47f326c"
  },
  {
    "url": "docs/4.1/getting-started/introduction/index.html",
    "revision": "9d86dd17e93b7b14a2c50f66a9097389"
  },
  {
    "url": "docs/4.1/getting-started/javascript/index.html",
    "revision": "85c7b9ec5c6901de6b5b5bf25d7f8160"
  },
  {
    "url": "docs/4.1/getting-started/options/index.html",
    "revision": "3c7bddea10519a85d3cbb7e9cb330ed7"
  },
  {
    "url": "docs/4.1/getting-started/theming/index.html",
    "revision": "88fb4a4a3619ae92feac12fd59640d0b"
  },
  {
    "url": "docs/4.1/getting-started/webpack/index.html",
    "revision": "5cf7d8148037ed610dfaa64b206d5889"
  },
  {
    "url": "docs/4.1/history/index.html",
    "revision": "e2abe85a350eee0baef989198a63d3b8"
  },
  {
    "url": "docs/4.1/index.html",
    "revision": "6c67d761f0662b9b69f9dcb3b47f326c"
  },
  {
    "url": "docs/4.1/layout/grid/index.html",
    "revision": "8b25b592abd16c5ee9a3373f93344074"
  },
  {
    "url": "docs/4.1/layout/index.html",
    "revision": "50bf876ae52ee61fba0267cb09bac513"
  },
  {
    "url": "docs/4.1/layout/media-object/index.html",
    "revision": "7344df9a46a955b0c421ba08e118359a"
  },
  {
    "url": "docs/4.1/layout/overview/index.html",
    "revision": "0f793ecc3d0047b84c87c88dbf6142ae"
  },
  {
    "url": "docs/4.1/layout/utilities-for-layout/index.html",
    "revision": "e15d5f620cb88e044c9349a514c91efe"
  },
  {
    "url": "docs/4.1/migration/index.html",
    "revision": "546102c2a9f6f7839584eaf9b25110d0"
  },
  {
    "url": "docs/4.1/team/index.html",
    "revision": "e2abe85a350eee0baef989198a63d3b8"
  },
  {
    "url": "docs/4.1/utilities/borders/index.html",
    "revision": "a583d7cdbba12c1eac9daa666ed671b7"
  },
  {
    "url": "docs/4.1/utilities/clearfix/index.html",
    "revision": "3cea1c7b3a4cf1cb1d500439af36d525"
  },
  {
    "url": "docs/4.1/utilities/close-icon/index.html",
    "revision": "959a567acc9f9d228e419668655acd06"
  },
  {
    "url": "docs/4.1/utilities/colors/index.html",
    "revision": "0afa542a3747ba198ae3fe7cc75a1dc4"
  },
  {
    "url": "docs/4.1/utilities/display/index.html",
    "revision": "7bde95e1e211e32f4b2d4d5daf99adfc"
  },
  {
    "url": "docs/4.1/utilities/embed/index.html",
    "revision": "7fb765be9e02944fbeeb9d4b75d1f148"
  },
  {
    "url": "docs/4.1/utilities/flex/index.html",
    "revision": "2a30ad99d4bf6c277a1ade5428c97e86"
  },
  {
    "url": "docs/4.1/utilities/float/index.html",
    "revision": "e78f6b3a27a36df89efbb48ef0f0fa4f"
  },
  {
    "url": "docs/4.1/utilities/image-replacement/index.html",
    "revision": "87208da17f8e0a3785d85a9e1617ef43"
  },
  {
    "url": "docs/4.1/utilities/index.html",
    "revision": "fb43982c19c3d6201d1175e75cf0f3dd"
  },
  {
    "url": "docs/4.1/utilities/position/index.html",
    "revision": "2e693364f99d0a3c5407a47c7685c827"
  },
  {
    "url": "docs/4.1/utilities/screenreaders/index.html",
    "revision": "54fbea7dc237e1df790ff87fe028010e"
  },
  {
    "url": "docs/4.1/utilities/shadows/index.html",
    "revision": "0a1982e30781436bc2cfccd87ee3a25a"
  },
  {
    "url": "docs/4.1/utilities/sizing/index.html",
    "revision": "99f1865e517dcd82d49441823273adb2"
  },
  {
    "url": "docs/4.1/utilities/spacing/index.html",
    "revision": "5dce0166c427662b0d3d38665b74c082"
  },
  {
    "url": "docs/4.1/utilities/text/index.html",
    "revision": "e87166ce8bc82076a3f3e14d34c032b6"
  },
  {
    "url": "docs/4.1/utilities/vertical-align/index.html",
    "revision": "2e0befdb05ce3bfbc4cb73eb9e05b554"
  },
  {
    "url": "docs/4.1/utilities/visibility/index.html",
    "revision": "cef0137c39b146ec8e8acf7ad333822c"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "6c67d761f0662b9b69f9dcb3b47f326c"
  },
  {
    "url": "docs/index.html",
    "revision": "6c67d761f0662b9b69f9dcb3b47f326c"
  },
  {
    "url": "docs/versions/index.html",
    "revision": "34b6248f74c9ff4c114f2a2ffc6fff8f"
  },
  {
    "url": "examples/index.html",
    "revision": "5da1ecc8bb6b55cd722edcb9e930c032"
  },
  {
    "url": "index.html",
    "revision": "4c664b619dedbd1050a9442c2620b93f"
  },
  {
    "url": "redirects.json",
    "revision": "f20d51a70756df7b8272e6e79c3c97f8"
  }
])
