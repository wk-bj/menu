/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ddc38224562c4e3bbf247185277a21e4"
  },
  {
    "url": "assets/css/1.styles.bcf8cf25.css",
    "revision": "59cf4993ceb881f0e263207d891ed6a5"
  },
  {
    "url": "assets/css/styles.41b7939e.css",
    "revision": "0dd27dd72dee7d39ff5d300fb45cddc3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.bcf8cf25.js",
    "revision": "3b27da2f2c10018743a8cb77b42c77e3"
  },
  {
    "url": "assets/js/2.a368e8e9.js",
    "revision": "bd5b172861f1e1d2f232519289e05422"
  },
  {
    "url": "assets/js/app.41b7939e.js",
    "revision": "1873cb553cc4165644e5d939dff0bc1d"
  },
  {
    "url": "index.html",
    "revision": "8871da9f6c3e97d6a3fe203ff0108f49"
  },
  {
    "url": "logo.jpg",
    "revision": "47f7e57bf69a8ff5db384642790d1e03"
  },
  {
    "url": "menu/zh-cn.html",
    "revision": "39e15b7ef2274d47897986abc3bd8f92"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
