/*!
 * @license
 * TradingView Lightweight Charts v3.8.0
 * Copyright (c) 2020 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
/*!
MIT LICENSE 

Copyright (c) 2022 ChintzRuparel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
!function(){"use strict";var t,i;function n(t,i){var n,s=((n={})[0]=[],n[1]=[t.lineWidth,t.lineWidth],n[2]=[2*t.lineWidth,2*t.lineWidth],n[3]=[6*t.lineWidth,6*t.lineWidth],n[4]=[t.lineWidth,4*t.lineWidth],n)[i];t.setLineDash(s)}function s(t,i,n,s){t.beginPath();var h=t.lineWidth%2?.5:0;t.moveTo(n,i+h),t.lineTo(s,i+h),t.stroke()}function h(t,i){if(!t)throw new Error("Assertion failed"+(i?": "+i:""))}function r(t){if(void 0===t)throw new Error("Value is undefined");return t}function e(t){if(null===t)throw new Error("Value is null");return t}function u(t){return e(r(t))}!function(t){t[t.Simple=0]="Simple",t[t.WithSteps=1]="WithSteps"}(t||(t={})),function(t){t[t.Solid=0]="Solid",t[t.Dotted=1]="Dotted",t[t.Dashed=2]="Dashed",t[t.LargeDashed=3]="LargeDashed",t[t.SparseDotted=4]="SparseDotted"}(i||(i={}));var a={khaki:"#f0e68c",azure:"#f0ffff",aliceblue:"#f0f8ff",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",gray:"#808080",green:"#008000",honeydew:"#f0fff0",floralwhite:"#fffaf0",lightblue:"#add8e6",lightcoral:"#f08080",lemonchiffon:"#fffacd",hotpink:"#ff69b4",lightyellow:"#ffffe0",greenyellow:"#adff2f",lightgoldenrodyellow:"#fafad2",limegreen:"#32cd32",linen:"#faf0e6",lightcyan:"#e0ffff",magenta:"#f0f",maroon:"#800000",olive:"#808000",orange:"#ffa500",oldlace:"#fdf5e6",mediumblue:"#0000cd",transparent:"#0000",lime:"#0f0",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",midnightblue:"#191970",orchid:"#da70d6",mediumorchid:"#ba55d3",mediumturquoise:"#48d1cc",orangered:"#ff4500",royalblue:"#4169e1",powderblue:"#b0e0e6",red:"#f00",coral:"#ff7f50",turquoise:"#40e0d0",white:"#fff",whitesmoke:"#f5f5f5",wheat:"#f5deb3",teal:"#008080",steelblue:"#4682b4",bisque:"#ffe4c4",aquamarine:"#7fffd4",aqua:"#0ff",sienna:"#a0522d",silver:"#c0c0c0",springgreen:"#00ff7f",antiquewhite:"#faebd7",burlywood:"#deb887",brown:"#a52a2a",beige:"#f5f5dc",chocolate:"#d2691e",chartreuse:"#7fff00",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cadetblue:"#5f9ea0",tomato:"#ff6347",fuchsia:"#f0f",blue:"#00f",salmon:"#fa8072",blanchedalmond:"#ffebcd",slateblue:"#6a5acd",slategray:"#708090",thistle:"#d8bfd8",tan:"#d2b48c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",blueviolet:"#8a2be2",black:"#000",darkmagenta:"#8b008b",darkslateblue:"#483d8b",darkkhaki:"#bdb76b",darkorchid:"#9932cc",darkorange:"#ff8c00",darkgreen:"#006400",darkred:"#8b0000",dodgerblue:"#1e90ff",darkslategray:"#2f4f4f",dimgray:"#696969",deepskyblue:"#00bfff",firebrick:"#b22222",forestgreen:"#228b22",indigo:"#4b0082",ivory:"#fffff0",lavenderblush:"#fff0f5",feldspar:"#d19275",indianred:"#cd5c5c",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightskyblue:"#87cefa",lightslategray:"#789",lightslateblue:"#8470ff",snow:"#fffafa",lightseagreen:"#20b2aa",lightsalmon:"#ffa07a",darksalmon:"#e9967a",darkviolet:"#9400d3",mediumpurple:"#9370d8",mediumaquamarine:"#66cdaa",skyblue:"#87ceeb",lavender:"#e6e6fa",lightsteelblue:"#b0c4de",mediumvioletred:"#c71585",mintcream:"#f5fffa",navajowhite:"#ffdead",navy:"#000080",olivedrab:"#6b8e23",palevioletred:"#d87093",violetred:"#d02090",yellow:"#ff0",yellowgreen:"#9acd32",lawngreen:"#7cfc00",pink:"#ffc0cb",paleturquoise:"#afeeee",palegoldenrod:"#eee8aa",darkolivegreen:"#556b2f",darkseagreen:"#8fbc8f",darkturquoise:"#00ced1",peachpuff:"#ffdab9",deeppink:"#ff1493",violet:"#ee82ee",palegreen:"#98fb98",mediumseagreen:"#3cb371",peru:"#cd853f",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",purple:"#800080",seagreen:"#2e8b57",seashell:"#fff5ee",papayawhip:"#ffefd5",mediumslateblue:"#7b68ee",plum:"#dda0dd",mediumspringgreen:"#00fa9a"};function o(t){return t<0?0:t>255?255:Math.round(t)||0}function l(t){return t<=0||t>0?t<0?0:t>1?1:Math.round(1e4*t)/1e4:0}var f=/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,c=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,v=/^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,_=/^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;function d(t){var i;if((t=t.toLowerCase())in a&&(t=a[t]),i=_.exec(t)||v.exec(t))return[o(parseInt(i[1],10)),o(parseInt(i[2],10)),o(parseInt(i[3],10)),l(i.length<5?1:parseFloat(i[4]))];if(i=c.exec(t))return[o(parseInt(i[1],16)),o(parseInt(i[2],16)),o(parseInt(i[3],16)),1];if(i=f.exec(t))return[o(17*parseInt(i[1],16)),o(17*parseInt(i[2],16)),o(17*parseInt(i[3],16)),1];throw new Error("Cannot parse color: ".concat(t))}function w(t){var i,n=d(t);return{t:"rgb(".concat(n[0],", ").concat(n[1],", ").concat(n[2],")"),i:(i=n,.199*i[0]+.687*i[1]+.114*i[2]>160?"black":"white")}}var M=function(t,i){return M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},M(t,i)};function b(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=t}M(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}var m=function(){return m=Object.assign||function(t){for(var i,n=1,s=arguments.length;n<s;n++)for(var h in i=arguments[n])Object.prototype.hasOwnProperty.call(i,h)&&(t[h]=i[h]);return t},m.apply(this,arguments)};function g(t,i,n){if(n||2===arguments.length)for(var s,h=0,r=i.length;h<r;h++)!s&&h in i||(s||(s=Array.prototype.slice.call(i,0,h)),s[h]=i[h]);return t.concat(s||Array.prototype.slice.call(i))}var p=function(){function t(){this.h=[]}return t.prototype.u=function(t,i,n){var s={o:t,l:i,v:!0===n};this.h.push(s)},t.prototype._=function(t){var i=this.h.findIndex((function(i){return t===i.o}));i>-1&&this.h.splice(i,1)},t.prototype.M=function(t){this.h=this.h.filter((function(i){return i.l!==t}))},t.prototype.m=function(t,i){var n=g([],this.h,!0);this.h=this.h.filter((function(t){return!t.v})),n.forEach((function(n){return n.o(t,i)}))},t.prototype.g=function(){return this.h.length>0},t.prototype.p=function(){this.h=[]},t}();function y(t){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];for(var s=0,h=i;s<h.length;s++){var r=h[s];for(var e in r)void 0!==r[e]&&("object"!=typeof r[e]||void 0===t[e]?t[e]=r[e]:y(t[e],r[e]))}return t}function k(t){return"number"==typeof t&&isFinite(t)}function x(t){return"number"==typeof t&&t%1==0}function N(t){return"string"==typeof t}function C(t){return"boolean"==typeof t}function S(t){var i,n,s,h=t;if(!h||"object"!=typeof h)return h;for(n in i=Array.isArray(h)?[]:{},h)h.hasOwnProperty(n)&&(s=h[n],i[n]=s&&"object"==typeof s?S(s):s);return i}function T(t){return null!==t}function D(t){return null===t?void 0:t}var A="'Trebuchet MS', Roboto, Ubuntu, sans-serif";function B(t,i,n){return n=void 0!==n?"".concat(n," "):"",void 0===i&&(i=A),"".concat(n).concat(t,"px ").concat(i)}var L=function(){function t(t){this.k={N:1,C:4,S:NaN,T:"",D:"",A:"",B:0,L:0,O:0,F:0,V:0},this.P=t}return t.prototype.R=function(){var t=this.k,i=this.W(),n=this.I();return t.S===i&&t.D===n||(t.S=i,t.D=n,t.T=B(i,n),t.F=Math.floor(i/3.5),t.B=t.F,t.L=Math.max(Math.ceil(i/2-t.C/2),0),t.O=Math.ceil(i/2+t.C/2),t.V=Math.round(i/10)),t.A=this.j(),this.k},t.prototype.j=function(){return this.P.R().layout.textColor},t.prototype.W=function(){return this.P.R().layout.fontSize},t.prototype.I=function(){return this.P.R().layout.fontFamily},t}(),E=function(){function t(){this.q=[]}return t.prototype.U=function(t){this.q=t},t.prototype.H=function(t,i,n,s){this.q.forEach((function(h){t.save(),h.H(t,i,n,s),t.restore()}))},t}(),O=function(){function t(){}return t.prototype.H=function(t,i,n,s){t.save(),t.scale(i,i),this.Y(t,n,s),t.restore()},t.prototype.$=function(t,i,n,s){t.save(),t.scale(i,i),this.K(t,n,s),t.restore()},t.prototype.K=function(t,i,n){},t}(),F=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.X=null,i}return b(i,t),i.prototype.Z=function(t){this.X=t},i.prototype.Y=function(t){if(null!==this.X&&null!==this.X.J){var i=this.X.J,n=this.X,s=function(s){t.beginPath();for(var h=i.to-1;h>=i.from;--h){var r=n.G[h];t.moveTo(r.tt,r.it),t.arc(r.tt,r.it,s,0,2*Math.PI)}t.fill()};t.fillStyle=n.nt,s(n.st+2),t.fillStyle=n.ht,s(n.st)}},i}(O);function V(){return{G:[{tt:0,it:0,rt:0,et:0}],ht:"",nt:"",st:0,J:null}}var P={from:0,to:1},R=function(){function t(t,i){this.ut=new E,this.ot=[],this.lt=[],this.ft=!0,this.P=t,this.ct=i,this.ut.U(this.ot)}return t.prototype.vt=function(t){var i=this.P._t();i.length!==this.ot.length&&(this.lt=i.map(V),this.ot=this.lt.map((function(t){var i=new F;return i.Z(t),i})),this.ut.U(this.ot)),this.ft=!0},t.prototype.dt=function(t,i,n){return this.ft&&(this.wt(t),this.ft=!1),this.ut},t.prototype.wt=function(t){var i=this,n=this.P._t(),s=this.ct.Mt(),h=this.P.bt();n.forEach((function(n,r){var u,a=i.lt[r],o=n.gt(s);if(null!==o&&n.yt()){var l=e(n.kt());a.ht=o.xt,a.st=o.st,a.G[0].et=o.et,a.G[0].it=n.Ct().Nt(o.et,l.St),a.nt=null!==(u=o.Tt)&&void 0!==u?u:i.P.Dt(a.G[0].it/t),a.G[0].rt=s,a.G[0].tt=h.At(s),a.J=P}else a.J=null}))},t}(),z=function(){function t(t){this.Bt=t}return t.prototype.H=function(t,i,h,r){if(null!==this.Bt){var e=this.Bt.Lt.yt,u=this.Bt.Et.yt;if(e||u){t.save();var a=Math.round(this.Bt.tt*i),o=Math.round(this.Bt.it*i),l=Math.ceil(this.Bt.Ot*i),f=Math.ceil(this.Bt.Ft*i);t.lineCap="butt",e&&a>=0&&(t.lineWidth=Math.floor(this.Bt.Lt.Vt*i),t.strokeStyle=this.Bt.Lt.A,t.fillStyle=this.Bt.Lt.A,n(t,this.Bt.Lt.Pt),function(t,i,n,s){t.beginPath();var h=t.lineWidth%2?.5:0;t.moveTo(i+h,n),t.lineTo(i+h,s),t.stroke()}(t,a,0,f)),u&&o>=0&&(t.lineWidth=Math.floor(this.Bt.Et.Vt*i),t.strokeStyle=this.Bt.Et.A,t.fillSt