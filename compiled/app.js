!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.app=e():t.app=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";var r=n(2),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n(3),(0,o.default)(".ring-before","50% 0 0 0"),(0,o.default)(".ring-bigger-before","50% 0 0 0"),(0,o.default)(".ring-after","0 0 50% 0"),(0,o.default)(".ring-bigger-after","0 0 50% 0")},function(t,e,n){var r,o,i;!function(n,u){"use strict";o=[e],r=u,void 0!==(i="function"==typeof r?r.apply(e,o):r)&&(t.exports=i)}(0,function(t){"use strict";function e(){return"clip-path-"+Math.random().toString(36).substring(7)}function n(t,n){n=n.replace(/px|%|em/g,"");var r=t.getAttribute("data-clip-path-id");if(r)document.querySelector("#"+r+" > polygon").setAttribute("points",n);else{var o=e(),i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("width","0"),i.setAttribute("height","0"),i.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink");var u=document.createElementNS("http://www.w3.org/2000/svg","clipPath");u.setAttribute("id",o);var p=document.createElementNS("http://www.w3.org/2000/svg","polygon");p.setAttribute("points",n),u.appendChild(p),i.appendChild(u),document.body.appendChild(i),t.setAttribute("data-clip-path-id",o),setTimeout(function(){t.style.clipPath="url(#"+o+")"},0)}}function r(t,e,r){r=void 0!==r?r:i,void 0!==t.style.webkitClipPath?t.style.webkitClipPath="polygon("+e+")":r?t.style.clipPath="polygon("+e+")":n(t,e)}function o(t,e,n){if(!t)return console.error("Missing selector"),!1;var o=document.querySelectorAll(t||"");Array.prototype.forEach.call(o,function(t){(e=e||t.getAttribute("data-clip"))?r(t,e,n):console.error("Missing clip-path parameters. Please check ClipPath() arguments or data-clip attribute.",t)})}var i=function(){var t=document.createElement("div");return t.style.clipPath="polygon(0 0, 0 0, 0 0, 0 0)","polygon(0 0, 0 0, 0 0, 0 0)"===t.style.clipPath}();o.applyClipPath=r,"undefined"!=typeof jQuery&&function(t,e){t.fn.ClipPath=function(n){return n===Object(n)&&n.path&&(n=n.path),this.each(function(){e.applyClipPath(this,t(this).attr("data-clip")||n)})}}(jQuery,o),t.ClipPath=o})},function(t,e){}])});
