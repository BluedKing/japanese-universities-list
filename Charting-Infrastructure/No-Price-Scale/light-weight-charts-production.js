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
!function(){"use strict";var t,i;function n(t,i){var n,s=((n={})[0]=[],n[1]=[t.lineWidth,t.lineWidth],n[2]=[2*t.lineWidth,2*t.lineWidth],n[3]=[6*t.lineWidth,6*t.lineWidth],n[4]=[t.lineWidth,4*t.lineWidth],n)[i];t.setLineDash(s)}function s(t,i,n,s){t.beginPath();var h=t.lineWidth%2?.5:0;t.moveTo(n,i+h),t.lineTo(s,i+h),t.stroke()}function h(t,i){if(!t)throw new Error("Assertion failed"+(i?": "+i:""))}function r(t){if(void 0===t)throw new Error("Value is undefined");return t}function e(t){if(null===t)throw new Error("Value is null");return t}function u(t){return e(r(t))}!function(t){t[t.Simple=0]="Simple",t[t.WithSteps=1]="WithSteps"}(t||(t={})),function(t){t[t.Solid=0]="Solid",t[t.Dotted=1]="Dotted",t[t.Dashed=2]="Dashed",t[t.LargeDashed=3]="LargeDashed",t[t.SparseDotted=4]="SparseDotted"}(i||(i={}));var a={khaki:"#f0e68c",azure:"#f0ffff",aliceblue:"#f0f8ff",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",gray:"#808080",green:"#008000",honeydew:"#f0fff0",floralwhite:"#fffaf0",lightblue:"#add8e6",lightcoral:"#f08080",lemonchiffon:"#fffacd",hotpink:"#ff69b4",lightyellow:"#ffffe0",greenyellow:"#adff2f",lightgoldenrodyellow:"#fafad2",limegreen:"#32cd32",linen:"#faf0e6",lightcyan:"#e0ffff",magenta:"#f0f",maroon:"#800000",olive:"#808000",orange:"#ffa500",oldlace:"#fdf5e6",mediumblue:"#0000cd",transparent:"#0000",lime:"#0f0",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",midnightblue:"#191970",orchid:"#da70d6",mediumorchid:"#ba55d3",mediumturquoise:"#48d1cc",orangered:"#ff4500",royalblue:"#4169e1",powderblue:"#b0e0e6",red:"#f00",coral:"#ff7f50",turquoise:"#40e0d0",white:"#fff",whitesmoke:"#f5f5f5",wheat:"#f5deb3",teal:"#008080",steelblue:"#4682b4",bisque:"#ffe4c4",aquamarine:"#7fffd4",aqua:"#0ff",sienna:"#a0522d",silver:"#c0c0c0",springgreen:"#00ff7f",antiquewhite:"#faebd7",burlywood:"#deb887",brown:"#a52a2a",beige:"#f5f5dc",chocolate:"#d2691e",chartreuse:"#7fff00",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cadetblue:"#5f9ea0",tomato:"#ff6347",fuchsia:"#f0f",blue:"#00f",salmon:"#fa8072",blanchedalmond:"#ffebcd",slateblue:"#6a5acd",slategray:"#708090",thistle:"#d8bfd8",tan:"#d2b48c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",blueviolet:"#8a2be2",black:"#000",darkmagenta:"#8b008b",darkslateblue:"#483d8b",darkkhaki:"#bdb76b",darkorchid:"#9932cc",darkorange:"#ff8c00",darkgreen:"#006400",darkred:"#8b0000",dodgerblue:"#1e90ff",darkslategray:"#2f4f4f",dimgray:"#696969",deepskyblue:"#00bfff",firebrick:"#b22222",forestgreen:"#228b22",indigo:"#4b0082",ivory:"#fffff0",lavenderblush:"#fff0f5",feldspar:"#d19275",indianred:"#cd5c5c",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightskyblue:"#87cefa",lightslategray:"#789",lightslateblue:"#8470ff",snow:"#fffafa",lightseagreen:"#20b2aa",lightsalmon:"#ffa07a",darksalmon:"#e9967a",darkviolet:"#9400d3",mediumpurple:"#9370d8",mediumaquamarine:"#66cdaa",skyblue:"#87ceeb",lavender:"#e6e6fa",lightsteelblue:"#b0c4de",mediumvioletred:"#c71585",mintcream:"#f5fffa",navajowhite:"#ffdead",navy:"#000080",olivedrab:"#6b8e23",palevioletred:"#d87093",violetred:"#d02090",yellow:"#ff0",yellowgreen:"#9acd32",lawngreen:"#7cfc00",pink:"#ffc0cb",paleturquoise:"#afeeee",palegoldenrod:"#eee8aa",darkolivegreen:"#556b2f",darkseagreen:"#8fbc8f",darkturquoise:"#00ced1",peachpuff:"#ffdab9",deeppink:"#ff1493",violet:"#ee82ee",palegreen:"#98fb98",mediumseagreen:"#3cb371",peru:"#cd853f",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",purple:"#800080",seagreen:"#2e8b57",seashell:"#fff5ee",papayawhip:"#ffefd5",mediumslateblue:"#7b68ee",plum:"#dda0dd",mediumspringgreen:"#00fa9a"};function o(t){return t<0?0:t>255?255:Math.round(t)||0}function l(t){return t<=0||t>0?t<0?0:t>1?1:Math.round(1e4*t)/1e4:0}var f=/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,c=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,v=/^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,_=/^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;function d(t){var i;if((t=t.toLowerCase())in a&&(t=a[t]),i=_.exec(t)||v.exec(t))return[o(parseInt(i[1],10)),o(parseInt(i[2],10)),o(parseInt(i[3],10)),l(i.length<5?1:parseFloat(i[4]))];if(i=c.exec(t))return[o(parseInt(i[1],16)),o(parseInt(i[2],16)),o(parseInt(i[3],16)),1];if(i=f.exec(t))return[o(17*parseInt(i[1],16)),o(17*parseInt(i[2],16)),o(17*parseInt(i[3],16)),1];throw new Error("Cannot parse color: ".concat(t))}function w(t){var i,n=d(t);return{t:"rgb(".concat(n[0],", ").concat(n[1],", ").concat(n[2],")"),i:(i=n,.199*i[0]+.687*i[1]+.114*i[2]>160?"black":"white")}}var M=function(t,i){return M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},M(t,i)};function b(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=t}M(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}var m=function(){return m=Object.assign||function(t){for(var i,n=1,s=arguments.length;n<s;n++)for(var h in i=arguments[n])Object.prototype.hasOwnProperty.call(i,h)&&(t[h]=i[h]);return t},m.apply(this,arguments)};function g(t,i,n){if(n||2===arguments.length)for(var s,h=0,r=i.length;h<r;h++)!s&&h in i||(s||(s=Array.prototype.slice.call(i,0,h)),s[h]=i[h]);return t.concat(s||Array.prototype.slice.call(i))}var p=function(){function t(){this.h=[]}return t.prototype.u=function(t,i,n){var s={o:t,l:i,v:!0===n};this.h.push(s)},t.prototype._=function(t){var i=this.h.findIndex((function(i){return t===i.o}));i>-1&&this.h.splice(i,1)},t.prototype.M=function(t){this.h=this.h.filter((function(i){return i.l!==t}))},t.prototype.m=function(t,i){var n=g([],this.h,!0);this.h=this.h.filter((function(t){return!t.v})),n.forEach((function(n){return n.o(t,i)}))},t.prototype.g=function(){return this.h.length>0},t.prototype.p=function(){this.h=[]},t}();function y(t){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];for(var s=0,h=i;s<h.length;s++){var r=h[s];for(var e in r)void 0!==r[e]&&("object"!=typeof r[e]||void 0===t[e]?t[e]=r[e]:y(t[e],r[e]))}return t}function k(t){return"number"==typeof t&&isFinite(t)}function x(t){return"number"==typeof t&&t%1==0}function N(t){return"string"==typeof t}function C(t){return"boolean"==typeof t}function S(t){var i,n,s,h=t;if(!h||"object"!=typeof h)return h;for(n in i=Array.isArray(h)?[]:{},h)h.hasOwnProperty(n)&&(s=h[n],i[n]=s&&"object"==typeof s?S(s):s);return i}function T(t){return null!==t}function D(t){return null===t?void 0:t}var A="'Trebuchet MS', Roboto, Ubuntu, sans-serif";function B(t,i,n){return n=void 0!==n?"".concat(n," "):"",void 0===i&&(i=A),"".concat(n).concat(t,"px ").concat(i)}var L=function(){function t(t){this.k={N:1,C:4,S:NaN,T:"",D:"",A:"",B:0,L:0,O:0,F:0,V:0},this.P=t}return t.prototype.R=function(){var t=this.k,i=this.W(),n=this.I();return t.S===i&&t.D===n||(t.S=i,t.D=n,t.T=B(i,n),t.F=Math.floor(i/3.5),t.B=t.F,t.L=Math.max(Math.ceil(i/2-t.C/2),0),t.O=Math.ceil(i/2+t.C/2),t.V=Math.round(i/10)),t.A=this.j(),this.k},t.prototype.j=function(){return this.P.R().layout.textColor},t.prototype.W=function(){return this.P.R().layout.fontSize},t.prototype.I=function(){return this.P.R().layout.fontFamily},t}(),E=function(){function t(){this.q=[]}return t.prototype.U=function(t){this.q=t},t.prototype.H=function(t,i,n,s){this.q.forEach((function(h){t.save(),h.H(t,i,n,s),t.restore()}))},t}(),O=function(){function t(){}return t.prototype.H=function(t,i,n,s){t.save(),t.scale(i,i),this.Y(t,n,s),t.restore()},t.prototype.$=function(t,i,n,s){t.save(),t.scale(i,i),this.K(t,n,s),t.restore()},t.prototype.K=function(t,i,n){},t}(),F=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.X=null,i}return b(i,t),i.prototype.Z=function(t){this.X=t},i.prototype.Y=function(t){if(null!==this.X&&null!==this.X.J){var i=this.X.J,n=this.X,s=function(s){t.beginPath();for(var h=i.to-1;h>=i.from;--h){var r=n.G[h];t.moveTo(r.tt,r.it),t.arc(r.tt,r.it,s,0,2*Math.PI)}t.fill()};t.fillStyle=n.nt,s(n.st+2),t.fillStyle=n.ht,s(n.st)}},i}(O);function V(){return{G:[{tt:0,it:0,rt:0,et:0}],ht:"",nt:"",st:0,J:null}}var P={from:0,to:1},R=function(){function t(t,i){this.ut=new E,this.ot=[],this.lt=[],this.ft=!0,this.P=t,this.ct=i,this.ut.U(this.ot)}return t.prototype.vt=function(t){var i=this.P._t();i.length!==this.ot.length&&(this.lt=i.map(V),this.ot=this.lt.map((function(t){var i=new F;return i.Z(t),i})),this.ut.U(this.ot)),this.ft=!0},t.prototype.dt=function(t,i,n){return this.ft&&(this.wt(t),this.ft=!1),this.ut},t.prototype.wt=function(t){var i=this,n=this.P._t(),s=this.ct.Mt(),h=this.P.bt();n.forEach((function(n,r){var u,a=i.lt[r],o=n.gt(s);if(null!==o&&n.yt()){var l=e(n.kt());a.ht=o.xt,a.st=o.st,a.G[0].et=o.et,a.G[0].it=n.Ct().Nt(o.et,l.St),a.nt=null!==(u=o.Tt)&&void 0!==u?u:i.P.Dt(a.G[0].it/t),a.G[0].rt=s,a.G[0].tt=h.At(s),a.J=P}else a.J=null}))},t}(),z=function(){function t(t){this.Bt=t}return t.prototype.H=function(t,i,h,r){if(null!==this.Bt){var e=this.Bt.Lt.yt,u=this.Bt.Et.yt;if(e||u){t.save();var a=Math.round(this.Bt.tt*i),o=Math.round(this.Bt.it*i),l=Math.ceil(this.Bt.Ot*i),f=Math.ceil(this.Bt.Ft*i);t.lineCap="butt",e&&a>=0&&(t.lineWidth=Math.floor(this.Bt.Lt.Vt*i),t.strokeStyle=this.Bt.Lt.A,t.fillStyle=this.Bt.Lt.A,n(t,this.Bt.Lt.Pt),function(t,i,n,s){t.beginPath();var h=t.lineWidth%2?.5:0;t.moveTo(i+h,n),t.lineTo(i+h,s),t.stroke()}(t,a,0,f)),u&&o>=0&&(t.lineWidth=Math.floor(this.Bt.Et.Vt*i),t.strokeStyle=this.Bt.Et.A,t.fillStyle=this.Bt.Et.A,n(t,this.Bt.Et.Pt),s(t,o,0,l)),t.restore()}}},t}(),W=function(){function t(t){this.ft=!0,this.Rt={Lt:{Vt:1,Pt:0,A:"",yt:!1},Et:{Vt:1,Pt:0,A:"",yt:!1},Ot:0,Ft:0,tt:0,it:0},this.zt=new z(this.Rt),this.Wt=t}return t.prototype.vt=function(){this.ft=!0},t.prototype.dt=function(t,i){return this.ft&&(this.wt(),this.ft=!1),this.zt},t.prototype.wt=function(){var t=this.Wt.yt(),i=e(this.Wt.It()),n=i.jt().R().crosshair,s=this.Rt;s.Et.yt=t&&this.Wt.qt(i),s.Lt.yt=t&&this.Wt.Ut(),s.Et.Vt=n.horzLine.width,s.Et.Pt=n.horzLine.style,s.Et.A=n.horzLine.color,s.Lt.Vt=n.vertLine.width,s.Lt.Pt=n.vertLine.style,s.Lt.A=n.vertLine.color,s.Ot=i.Ht(),s.Ft=i.Yt(),s.tt=this.Wt.$t(),s.it=this.Wt.Kt()},t}();function I(t,i,n,s,h,r){t.fillRect(i+r,n,s-2*r,r),t.fillRect(i+r,n+h-r,s-2*r,r),t.fillRect(i,n,r,h),t.fillRect(i+s-r,n,r,h)}function j(t,i,n){t.save(),t.scale(i,i),n(),t.restore()}function q(t,i,n,s,h,r){t.save(),t.globalCompositeOperation="copy",t.fillStyle=r,t.fillRect(i,n,s,h),t.restore()}function U(t,i,n,s,h,r,e){t.save(),t.globalCompositeOperation="copy";var u=t.createLinearGradient(0,0,0,h);u.addColorStop(0,r),u.addColorStop(1,e),t.fillStyle=u,t.fillRect(i,n,s,h),t.restore()}var H,Y=function(){function t(t,i){this.Z(t,i)}return t.prototype.Z=function(t,i){this.Bt=t,this.Xt=i},t.prototype.H=function(t,i,n,s,h,r){if(this.Bt.yt){t.font=i.T;var e=this.Bt.Zt||!this.Bt.Jt?i.C:0,u=i.N,a=i.F,o=i.B,l=i.L,f=i.O,c=this.Bt.Gt,v=Math.ceil(n.Qt(t,c)),_=i.V,d=i.S+a+o,w=Math.ceil(.5*d),M=u+v+l+f+e,b=this.Xt.ti;this.Xt.ii&&(b=this.Xt.ii);var m,g,p=(b=Math.round(b))-w,y=p+d,k="right"===h,x=k?s:0,N=Math.ceil(s*r),C=x;if(t.fillStyle=this.Xt.t,t.lineWidth=1,t.lineCap="butt",c){k?(m=x-e,g=(C=x-M)+f):(C=x+M,m=x+e,g=x+u+e+l);var S=Math.max(1,Math.floor(r)),T=Math.max(1,Math.floor(u*r)),D=k?N:0,A=Math.round(p*r),B=Math.round(C*r),L=Math.round(b*r)-Math.floor(.5*r),E=L+S+(L-A),O=Math.round(m*r);t.save(),t.beginPath(),t.moveTo(D,A),t.lineTo(B,A),t.lineTo(B,E),t.lineTo(D,E),t.fill(),t.fillStyle=this.Bt.Tt,t.fillRect(k?N-T:0,A,T,E-A),this.Bt.Zt&&(t.fillStyle=this.Xt.A,t.fillRect(D,L,O-D,S)),t.textAlign="left",t.fillStyle=this.Xt.A,j(t,r,(function(){t.fillText(c,g,y-o-_)})),t.restore()}}},t.prototype.Yt=function(t,i){return this.Bt.yt?t.S+t.F+t.B:0},t}(),$=function(){function t(t){this.ni={ti:0,A:"#FFF",t:"#000"},this.si={Gt:"",yt:!1,Zt:!0,Jt:!1,Tt:""},this.hi={Gt:"",yt:!1,Zt:!1,Jt:!0,Tt:""},this.ft=!0,this.ri=new(t||Y)(this.si,this.ni),this.ei=new(t||Y)(this.hi,this.ni)}return t.prototype.Gt=function(){return this.ui(),this.si.Gt},t.prototype.ti=function(){return this.ui(),this.ni.ti},t.prototype.vt=function(){this.ft=!0},t.prototype.Yt=function(t,i){return void 0===i&&(i=!1),Math.max(this.ri.Yt(t,i),this.ei.Yt(t,i))},t.prototype.ai=function(){return this.ni.ii||0},t.prototype.oi=function(t){this.ni.ii=t},t.prototype.li=function(){return this.ui(),this.si.yt||this.hi.yt},t.prototype.fi=function(){return this.ui(),this.si.yt},t.prototype.dt=function(t){return this.ui(),this.si.Zt=this.si.Zt&&t.R().drawTicks,this.hi.Zt=this.hi.Zt&&t.R().drawTicks,this.ri.Z(this.si,this.ni),this.ei.Z(this.hi,this.ni),this.ri},t.prototype.ci=function(){return this.ui(),this.ri.Z(this.si,this.ni),this.ei.Z(this.hi,this.ni),this.ei},t.prototype.ui=function(){this.ft&&(this.si.Zt=!0,this.hi.Zt=!1,this.vi(this.si,this.hi,this.ni))},t}(),K=function(t){function i(i,n,s){var h=t.call(this)||this;return h.Wt=i,h._i=n,h.di=s,h}return b(i,t),i.prototype.vi=function(t,i,n){t.yt=!1;var s=this.Wt.R().horzLine;if(s.labelVisible){var h=this._i.kt();if(this.Wt.yt()&&!this._i.wi()&&null!==h){var r=w(s.labelBackgroundColor);n.t=r.t,n.A=r.i;var e=this.di(this._i);n.ti=e.ti,t.Gt=this._i.Mi(e.et,h),t.yt=!0}}},i}($),X=/[1-9]/g,Z=function(){function t(){this.Bt=null}return t.prototype.Z=function(t){this.Bt=t},t.prototype.H=function(t,i,n){var s=this;if(null!==this.Bt&&!1!==this.Bt.yt&&0!==this.Bt.Gt.length){t.font=i.T;var h=Math.round(i.bi.Qt(t,this.Bt.Gt,X));if(!(h<=0)){t.save();var r=i.mi,u=h+2*r,a=u/2,o=this.Bt.Ht,l=this.Bt.ti,f=Math.floor(l-a)+.5;f<0?(l+=Math.abs(0-f),f=Math.floor(l-a)+.5):f+u>o&&(l-=Math.abs(o-(f+u)),f=Math.floor(l-a)+.5);var c=f+u,v=0+i.N+i.F+i.S+i.B;t.fillStyle=this.Bt.t;var _=Math.round(f*n),d=Math.round(0*n),w=Math.round(c*n),M=Math.round(v*n);t.fillRect(_,d,w-_,M-d);var b=Math.round(this.Bt.ti*n),m=d,g=Math.round((m+i.N+i.C)*n);t.fillStyle=this.Bt.A;var p=Math.max(1,Math.floor(n)),y=Math.floor(.5*n);t.fillRect(b-y,m,p,g-m);var k=v-i.V-i.B;t.textAlign="left",t.fillStyle=this.Bt.A,j(t,n,(function(){t.fillText(e(s.Bt).Gt,f+r,k)})),t.restore()}}},t}(),J=function(){function t(t,i,n){this.ft=!0,this.zt=new Z,this.Rt={yt:!1,t:"#4c525e",A:"white",Gt:"",Ht:0,ti:NaN},this.ct=t,this.gi=i,this.di=n}return t.prototype.vt=function(){this.ft=!0},t.prototype.dt=function(){return this.ft&&(this.wt(),this.ft=!1),this.zt.Z(this.Rt),this.zt},t.prototype.wt=function(){var t=this.Rt;t.yt=!1;var i=this.ct.R().vertLine;if(i.labelVisible){var n=this.gi.bt();if(!n.wi()){var s=n.pi(this.ct.Mt());t.Ht=n.Ht();var h=this.di();if(h.rt){t.ti=h.ti,t.Gt=n.yi(e(s)),t.yt=!0;var r=w(i.labelBackgroundColor);t.t=r.t,t.A=r.i}}}},t}(),G=function(){function t(){this.ki=null,this.xi=0}return t.prototype.Ni=function(){return this.xi},t.prototype.Ci=function(t){this.xi=t},t.prototype.Ct=function(){return this.ki},t.prototype.Si=function(t){this.ki=t},t.prototype.Ti=function(){return[]},t.prototype.yt=function(){return!0},t}();!function(t){t[t.Normal=0]="Normal",t[t.Magnet=1]="Magnet"}(H||(H={}));var Q=function(t){function i(i,n){var s=t.call(this)||this;s.Di=null,s.Ai=NaN,s.Bi=0,s.Li=!0,s.Ei=new Map,s.Oi=!1,s.Fi=NaN,s.Vi=NaN,s.Pi=NaN,s.Ri=NaN,s.gi=i,s.zi=n,s.Wi=new R(i,s);var h,r;s.Ii=(h=function(){return s.Ai},r=function(){return s.Vi},function(t){var i=r(),n=h();if(t===e(s.Di).ji())return{et:n,ti:i};var u=e(t.kt());return{et:t.qi(i,u),ti:i}});var u=function(t,i){return function(){return{rt:s.gi.bt().pi(t()),ti:i()}}}((function(){return s.Bi}),(function(){return s.$t()}));return s.Ui=new J(s,i,u),s.Hi=new W(s),s}return b(i,t),i.prototype.R=function(){return this.zi},i.prototype.Yi=function(t,i){this.Pi=t,this.Ri=i},i.prototype.$i=function(){this.Pi=NaN,this.Ri=NaN},i.prototype.Ki=function(){return this.Pi},i.prototype.Xi=function(){return this.Ri},i.prototype.Zi=function(t,i,n){this.Oi||(this.Oi=!0),this.Li=!0,this.Ji(t,i,n)},i.prototype.Mt=function(){return this.Bi},i.prototype.$t=function(){return this.Fi},i.prototype.Kt=function(){return this.Vi},i.prototype.yt=function(){return this.Li},i.prototype.Gi=function(){this.Li=!1,this.Qi(),this.Ai=NaN,this.Fi=NaN,this.Vi=NaN,this.Di=null,this.$i()},i.prototype.tn=function(t){return null!==this.Di?[this.Hi,this.Wi]:[]},i.prototype.qt=function(t){return t===this.Di&&this.zi.horzLine.visible},i.prototype.Ut=function(){return this.zi.vertLine.visible},i.prototype.nn=function(t,i){this.Li&&this.Di===t||this.Ei.clear();var n=[];return this.Di===t&&n.push(this.sn(this.Ei,i,this.Ii)),n},i.prototype.Ti=function(){return this.Li?[this.Ui]:[]},i.prototype.It=function(){return this.Di},i.prototype.hn=function(){this.Hi.vt(),this.Ei.forEach((function(t){return t.vt()})),this.Ui.vt(),this.Wi.vt()},i.prototype.rn=function(t){return t&&!t.ji().wi()?t.ji():null},i.prototype.Ji=function(t,i,n){this.en(t,i,n)&&this.hn()},i.prototype.en=function(t,i,n){var s=this.Fi,h=this.Vi,r=this.Ai,e=this.Bi,u=this.Di,a=this.rn(n);this.Bi=t,this.Fi=isNaN(t)?NaN:this.gi.bt().At(t),this.Di=n;var o=null!==a?a.kt():null;return null!==a&&null!==o?(this.Ai=i,this.Vi=a.Nt(i,o)):(this.Ai=NaN,this.Vi=NaN),s!==this.Fi||h!==this.Vi||e!==this.Bi||r!==this.Ai||u!==this.Di},i.prototype.Qi=function(){var t=this.gi._t().map((function(t){return t.an().un()})).filter(T),i=0===t.length?null:Math.max.apply(Math,t);this.Bi=null!==i?i:NaN},i.prototype.sn=function(t,i,n){var s=t.get(i);return void 0===s&&(s=new K(this,i,n),t.set(i,s)),s},i}(G);function tt(t){return"left"===t||"right"===t}var it=function(){function t(t){this.on=new Map,this.ln=[],this.fn=t}return t.prototype.cn=function(t,i){var n=function(t,i){return void 0===t?i:{vn:Math.max(t.vn,i.vn),_n:t._n||i._n}}(this.on.get(t),i);this.on.set(t,n)},t.prototype.dn=function(){return this.fn},t.prototype.wn=function(t){var i=this.on.get(t);return void 0===i?{vn:this.fn}:{vn:Math.max(this.fn,i.vn),_n:i._n}},t.prototype.Mn=function(){this.ln=[{bn:0}]},t.prototype.mn=function(t){this.ln=[{bn:1,St:t}]},t.prototype.gn=function(){this.ln=[{bn:4}]},t.prototype.pn=function(t){this.ln.push({bn:2,St:t})},t.prototype.yn=function(t){this.ln.push({bn:3,St:t})},t.prototype.kn=function(){return this.ln},t.prototype.xn=function(t){for(var i=this,n=0,s=t.ln;n<s.length;n++){var h=s[n];this.Nn(h)}this.fn=Math.max(this.fn,t.fn),t.on.forEach((function(t,n){i.cn(n,t)}))},t.prototype.Nn=function(t){switch(t.bn){case 0:this.Mn();break;case 1:this.mn(t.St);break;case 2:this.pn(t.St);break;case 3:this.yn(t.St);break;case 4:this.gn()}},t}(),nt=".";function st(t,i){if(!k(t))return"n/a";if(!x(i))throw new TypeError("invalid length");if(i<0||i>16)throw new TypeError("invalid length");if(0===i)return t.toString();return("0000000000000000"+t.toString()).slice(-i)}var ht=function(){function t(t,i){if(i||(i=1),k(t)&&x(t)||(t=100),t<0)throw new TypeError("invalid base");this._i=t,this.Cn=i,this.Sn()}return t.prototype.format=function(t){var i=t<0?"−":"";return t=Math.abs(t),i+this.Tn(t)},t.prototype.Sn=function(){if(this.Dn=0,this._i>0&&this.Cn>0)for(var t=this._i;t>1;)t/=10,this.Dn++},t.prototype.Tn=function(t){var i=this._i/this.Cn,n=Math.floor(t),s="",h=void 0!==this.Dn?this.Dn:NaN;if(i>1){var r=+(Math.round(t*i)-n*i).toFixed(this.Dn);r>=i&&(r-=i,n+=1),s=nt+st(+r.toFixed(this.Dn)*this.Cn,h)}else n=Math.round(n*i)/i,h>0&&(s=nt+st(0,h));return n.toFixed(0)+s},t}(),rt=function(t){function i(i){return void 0===i&&(i=100),t.call(this,i)||this}return b(i,t),i.prototype.format=function(i){return"".concat(t.prototype.format.call(this,i),"%")},i}(ht),et=function(){function t(t){this.An=t}return t.prototype.format=function(t){var i="";return t<0&&(i="-",t=-t),t<995?i+this.Bn(t):t<999995?i+this.Bn(t/1e3)+"K":t<999999995?(t=1e3*Math.round(t/1e3),i+this.Bn(t/1e6)+"M"):(t=1e6*Math.round(t/1e6),i+this.Bn(t/1e9)+"B")},t.prototype.Bn=function(t){var i=Math.pow(10,this.An);return((t=Math.round(t*i)/i)>=1e-15&&t<1?t.toFixed(this.An).replace(/\.?0+$/,""):String(t)).replace(/(\.[1-9]*)0+$/,(function(t,i){return i}))},t}();function ut(t,i,n,s){if(0!==i.length){var h=i[s.from].tt,r=i[s.from].it;t.moveTo(h,r);for(var e=s.from+1;e<s.to;++e){var u=i[e];if(1===n){var a=i[e-1].it,o=u.tt;t.lineTo(o,a)}t.lineTo(u.tt,u.it)}}}var at=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.X=null,i}return b(i,t),i.prototype.Z=function(t){this.X=t},i.prototype.Y=function(t){if(null!==this.X&&0!==this.X.G.length&&null!==this.X.J){if(t.lineCap="butt",t.lineJoin="round",t.lineWidth=this.X.Vt,n(t,this.X.Pt),t.lineWidth=1,t.beginPath(),1===this.X.G.length){var i=this.X.G[0],s=this.X.Ln/2;t.moveTo(i.tt-s,this.X.En),t.lineTo(i.tt-s,i.it),t.lineTo(i.tt+s,i.it),t.lineTo(i.tt+s,this.X.En)}else t.moveTo(this.X.G[this.X.J.from].tt,this.X.En),t.lineTo(this.X.G[this.X.J.from].tt,this.X.G[this.X.J.from].it),ut(t,this.X.G,this.X.On,this.X.J),this.X.J.to>this.X.J.from&&(t.lineTo(this.X.G[this.X.J.to-1].tt,this.X.En),t.lineTo(this.X.G[this.X.J.from].tt,this.X.En));t.closePath(),t.fillStyle=this.Fn(t),t.fill()}},i}(O),ot=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return b(i,t),i.prototype.Fn=function(t){var i=this.X,n=t.createLinearGradient(0,0,0,i.Vn);return n.addColorStop(0,i.Pn),n.addColorStop(1,i.Rn),n},i}(at),lt=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.X=null,i}return b(i,t),i.prototype.Z=function(t){this.X=t},i.prototype.Y=function(t){if(null!==this.X&&0!==this.X.G.length&&null!==this.X.J)if(t.lineCap="butt",t.lineWidth=this.X.Vt,n(t,this.X.Pt),t.strokeStyle=this.zn(t),t.lineJoin="round",1===this.X.G.length){t.beginPath();var i=this.X.G[0];t.moveTo(i.tt-this.X.Ln/2,i.it),t.lineTo(i.tt+this.X.Ln/2,i.it),void 0!==i.A&&(t.strokeStyle=i.A),t.stroke()}else this.Wn(t,this.X)},i.prototype.Wn=function(t,i){t.beginPath(),ut(t,i.G,i.On,i.J),t.stroke()},i}(O),ft=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return b(i,t),i.prototype.Wn=function(t,i){var n,s,h=i.G,r=i.J,e=i.On,u=i.ht;if(0!==h.length&&null!==r){t.beginPath();var a=h[r.from];t.moveTo(a.tt,a.it);var o=null!==(n=a.A)&&void 0!==n?n:u;t.strokeStyle=o;for(var l=function(i){t.stroke(),t.beginPath(),t.strokeStyle=i,o=i},f=r.from+1;f<r.to;++f){var c=h[f],v=h[f-1],_=null!==(s=c.A)&&void 0!==s?s:u;1===e&&(t.lineTo(c.tt,v.it),_!==o&&(l(_),t.moveTo(c.tt,v.it))),t.lineTo(c.tt,c.it),1!==e&&_!==o&&(l(_),t.moveTo(c.tt,c.it))}t.stroke()}},i.prototype.zn=function(){return this.X.ht},i}(lt);function ct(t,i,n,s,h){void 0===s&&(s=0),void 0===h&&(h=t.length);for(var r=h-s;0<r;){var e=r>>1,u=s+e;n(t[u],i)?(s=u+1,r-=e+1):r=e}return s}function vt(t,i,n,s,h){void 0===s&&(s=0),void 0===h&&(h=t.length);for(var r=h-s;0<r;){var e=r>>1,u=s+e;n(i,t[u])?r=e:(s=u+1,r-=e+1)}return s}function _t(t,i){return t.rt<i}function dt(t,i){return t<i.rt}function wt(t,i,n){var s=i.In(),h=i.jn(),r=ct(t,s,_t),e=vt(t,h,dt);if(!n)return{from:r,to:e};var u=r,a=e;return r>0&&r<t.length&&t[r].rt>=s&&(u=r-1),e>0&&e<t.length&&t[e-1].rt<=h&&(a=e+1),{from:u,to:a}}var Mt=function(){function t(t,i,n){this.qn=!0,this.Un=!0,this.Hn=!0,this.Yn=[],this.$n=null,this.Kn=t,this.Xn=i,this.Zn=n}return t.prototype.vt=function(t){this.qn=!0,"data"===t&&(this.Un=!0),"options"===t&&(this.Hn=!0)},t.prototype.Jn=function(){this.Un&&(this.Gn(),this.Un=!1),this.qn&&(this.Qn(),this.qn=!1),this.Hn&&(this.ts(),this.Hn=!1)},t.prototype.ns=function(){this.$n=null},t.prototype.Qn=function(){var t=this.Kn.Ct(),i=this.Xn.bt();if(this.ns(),!i.wi()&&!t.wi()){var n=i.ss();if(null!==n&&0!==this.Kn.an().hs()){var s=this.Kn.kt();null!==s&&(this.$n=wt(this.Yn,n,this.Zn),this.rs(t,i,s.St))}}},t}(),bt=function(t){function i(i,n){return t.call(this,i,n,!0)||this}return b(i,t),i.prototype.rs=function(t,i,n){i.es(this.Yn,D(this.$n)),t.us(this.Yn,n,D(this.$n))},i.prototype.os=function(t,i){return{rt:t,et:i,tt:NaN,it:NaN}},i.prototype.ts=function(){},i.prototype.Gn=function(){var t=this,i=this.Kn.ls();this.Yn=this.Kn.an().fs().map((function(n){var s=n.St[3];return t.cs(n.vs,s,i)}))},i}(Mt),mt=function(t){function i(i,n){var s=t.call(this,i,n)||this;return s.zt=new E,s._s=new ot,s.ds=new ft,s.zt.U([s._s,s.ds]),s}return b(i,t),i.prototype.dt=function(t,i){if(!this.Kn.yt())return null;var n=this.Kn.R();return this.Jn(),this._s.Z({On:n.lineType,G:this.Yn,Pt:n.lineStyle,Vt:n.lineWidth,Pn:n.topColor,Rn:n.bottomColor,En:t,Vn:t,J:this.$n,Ln:this.Xn.bt().ws()}),this.ds.Z({On:n.lineType,G:this.Yn,ht:n.lineColor,Pt:n.lineStyle,Vt:n.lineWidth,J:this.$n,Ln:this.Xn.bt().ws()}),this.zt},i.prototype.cs=function(t,i){return this.os(t,i)},i}(bt);var gt=function(){function t(){this.Bt=null,this.Ms=0,this.bs=0}return t.prototype.Z=function(t){this.Bt=t},t.prototype.H=function(t,i,n,s){if(null!==this.Bt&&0!==this.Bt.an.length&&null!==this.Bt.J){if(this.Ms=this.gs(i),this.Ms>=2)Math.max(1,Math.floor(i))%2!=this.Ms%2&&this.Ms--;this.bs=this.Bt.ps?Math.min(this.Ms,Math.floor(i)):this.Ms;for(var h=null,r=this.bs<=this.Ms&&this.Bt.ws>=Math.floor(1.5*i),e=this.Bt.J.from;e<this.Bt.J.to;++e){var u=this.Bt.an[e];h!==u.A&&(t.fillStyle=u.A,h=u.A);var a=Math.floor(.5*this.bs),o=Math.round(u.tt*i),l=o-a,f=this.bs,c=l+f-1,v=Math.min(u.ys,u.ks),_=Math.max(u.ys,u.ks),d=Math.round(v*i)-a,w=Math.round(_*i)+a,M=Math.max(w-d,this.bs);t.fillRect(l,d,f,M);var b=Math.ceil(1.5*this.Ms);if(r){if(this.Bt.xs){var m=o-b,g=Math.max(d,Math.round(u.Ns*i)-a),p=g+f-1;p>d+M-1&&(g=(p=d+M-1)-f+1),t.fillRect(m,g,l-m,p-g+1)}var y=o+b,k=Math.max(d,Math.round(u.Cs*i)-a),x=k+f-1;x>d+M-1&&(k=(x=d+M-1)-f+1),t.fillRect(c+1,k,y-c,x-k+1)}}}},t.prototype.gs=function(t){var i=Math.floor(t);return Math.max(i,Math.floor(function(t,i){return Math.floor(.3*t*i)}(e(this.Bt).ws,t)))},t}(),pt=function(t){function i(i,n){return t.call(this,i,n,!1)||this}return b(i,t),i.prototype.rs=function(t,i,n){i.es(this.Yn,D(this.$n)),t.Ss(this.Yn,n,D(this.$n))},i.prototype.Ts=function(t,i,n){return{rt:t,open:i.St[0],high:i.St[1],low:i.St[2],close:i.St[3],tt:NaN,Ns:NaN,ys:NaN,ks:NaN,Cs:NaN}},i.prototype.Gn=function(){var t=this,i=this.Kn.ls();this.Yn=this.Kn.an().fs().map((function(n){return t.cs(n.vs,n,i)}))},i}(Mt),yt=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.zt=new gt,i}return b(i,t),i.prototype.dt=function(t,i){if(!this.Kn.yt())return null;var n=this.Kn.R();this.Jn();var s={an:this.Yn,ws:this.Xn.bt().ws(),xs:n.openVisible,ps:n.thinBars,J:this.$n};return this.zt.Z(s),this.zt},i.prototype.ts=function(){var t=this;this.Yn.forEach((function(i){i.A=t.Kn.ls().As(i.rt).Ds}))},i.prototype.cs=function(t,i,n){return m(m({},this.Ts(t,i,n)),{A:n.As(t).Ds})},i}(pt);function kt(t,i,n){return Math.min(Math.max(t,i),n)}function xt(t,i,n){return i-t<=n}function Nt(t){return t<=0?NaN:Math.log(t)/Math.log(10)}function Ct(t){var i=Math.ceil(t);return i%2!=0?i-1:i}function St(t){var i=Math.ceil(t);return i%2==0?i-1:i}var Tt=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return b(i,t),i.prototype.Fn=function(t){var i=this.X,n=t.createLinearGradient(0,0,0,i.Vn),s=kt(i.En/i.Vn,0,1);return n.addColorStop(0,i.Bs),n.addColorStop(s,i.Ls),n.addColorStop(s,i.Es),n.addColorStop(1,i.Os),n},i}(at),Dt=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return b(i,t),i.prototype.zn=function(t){var i=this.X,n=t.createLinearGradient(0,0,0,i.Vn),s=kt(i.En/i.Vn,0,1);return n.addColorStop(0,i.Pn),n.addColorStop(s,i.Pn),n.addColorStop(s,i.Rn),n.addColorStop(1,i.Rn),n},i}(lt),At=function(t){function i(i,n){var s=t.call(this,i,n)||this;return s.Fs=new Tt,s.Vs=new Dt,s.ut=new E,s.ut.U([s.Fs,s.Vs]),s}return b(i,t),i.prototype.dt=function(t,i){if(!this.Kn.yt())return null;var n=this.Kn.kt();if(null===n)return null;var s=this.Kn.R();this.Jn();var h=this.Kn.Ct().Nt(s.baseValue.price,n.St),r=this.Xn.bt().ws();return this.Fs.Z({G:this.Yn,Bs:s.topFillColor1,Ls:s.topFillColor2,Es:s.bottomFillColor1,Os:s.bottomFillColor2,Vt:s.lineWidth,Pt:s.lineStyle,On:0,En:h,Vn:t,J:this.$n,Ln:r}),this.Vs.Z({G:this.Yn,Pn:s.topLineColor,Rn:s.bottomLineColor,Vt:s.lineWidth,Pt:s.lineStyle,On:0,En:h,Vn:t,J:this.$n,Ln:r}),this.ut},i.prototype.cs=function(t,i){return this.os(t,i)},i}(bt),Bt=function(){function t(){this.Bt=null,this.Ms=0}return t.prototype.Z=function(t){this.Bt=t},t.prototype.H=function(t,i,n,s){if(null!==this.Bt&&0!==this.Bt.an.length&&null!==this.Bt.J){if(this.Ms=function(t,i){if(t>=2.5&&t<=4)return Math.floor(3*i);var n=1-.2*Math.atan(Math.max(4,t)-4)/(.5*Math.PI),s=Math.floor(t*n*i),h=Math.floor(t*i),r=Math.min(s,h);return Math.max(Math.floor(i),r)}(this.Bt.ws,i),this.Ms>=2)Math.floor(i)%2!=this.Ms%2&&this.Ms--;var h=this.Bt.an;this.Bt.Ps&&this.Rs(t,h,this.Bt.J,i),this.Bt.zs&&this.Ws(t,h,this.Bt.J,this.Bt.ws,i);var r=this.Is(i);(!this.Bt.zs||this.Ms>2*r)&&this.js(t,h,this.Bt.J,i)}},t.prototype.Rs=function(t,i,n,s){if(null!==this.Bt){var h="",r=Math.min(Math.floor(s),Math.floor(this.Bt.ws*s));r=Math.max(Math.floor(s),Math.min(r,this.Ms));for(var e=Math.floor(.5*r),u=null,a=n.from;a<n.to;a++){var o=i[a];o.qs!==h&&(t.fillStyle=o.qs,h=o.qs);var l=Math.round(Math.min(o.Ns,o.Cs)*s),f=Math.round(Math.max(o.Ns,o.Cs)*s),c=Math.round(o.ys*s),v=Math.round(o.ks*s),_=Math.round(s*o.tt)-e,d=_+r-1;null!==u&&(_=Math.max(u+1,_),_=Math.min(_,d));var w=d-_+1;t.fillRect(_,c,w,l-c),t.fillRect(_,f+1,w,v-f),u=d}}},t.prototype.Is=function(t){var i=Math.floor(1*t);this.Ms<=2*i&&(i=Math.floor(.5*(this.Ms-1)));var n=Math.max(Math.floor(t),i);return this.Ms<=2*n?Math.max(Math.floor(t),Math.floor(1*t)):n},t.prototype.Ws=function(t,i,n,s,h){if(null!==this.Bt)for(var r="",e=this.Is(h),u=null,a=n.from;a<n.to;a++){var o=i[a];o.Tt!==r&&(t.fillStyle=o.Tt,r=o.Tt);var l=Math.round(o.tt*h)-Math.floor(.5*this.Ms),f=l+this.Ms-1,c=Math.round(Math.min(o.Ns,o.Cs)*h),v=Math.round(Math.max(o.Ns,o.Cs)*h);if(null!==u&&(l=Math.max(u+1,l),l=Math.min(l,f)),this.Bt.ws*h>2*e)I(t,l,c,f-l+1,v-c+1,e);else{var _=f-l+1;t.fillRect(l,c,_,v-c+1)}u=f}},t.prototype.js=function(t,i,n,s){if(null!==this.Bt)for(var h="",r=this.Is(s),e=n.from;e<n.to;e++){var u=i[e],a=Math.round(Math.min(u.Ns,u.Cs)*s),o=Math.round(Math.max(u.Ns,u.Cs)*s),l=Math.round(u.tt*s)-Math.floor(.5*this.Ms),f=l+this.Ms-1;if(u.A!==h){var c=u.A;t.fillStyle=c,h=c}this.Bt.zs&&(l+=r,a+=r,f-=r,o-=r),a>o||t.fillRect(l,a,f-l+1,o-a+1)}},t}(),Lt=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.zt=new Bt,i}return b(i,t),i.prototype.dt=function(t,i){if(!this.Kn.yt())return null;var n=this.Kn.R();this.Jn();var s={an:this.Yn,ws:this.Xn.bt().ws(),Ps:n.wickVisible,zs:n.borderVisible,J:this.$n};return this.zt.Z(s),this.zt},i.prototype.ts=function(){var t=this;this.Yn.forEach((function(i){var n=t.Kn.ls().As(i.rt);i.A=n.Ds,i.qs=n.Us,i.Tt=n.Hs}))},i.prototype.cs=function(t,i,n){var s=n.As(t);return m(m({},this.Ts(t,i,n)),{A:s.Ds,qs:s.Us,Tt:s.Hs})},i}(pt),Et=function(){function t(){this.Bt=null,this.Ys=[]}return t.prototype.Z=function(t){this.Bt=t,this.Ys=[]},t.prototype.H=function(t,i,n,s){if(null!==this.Bt&&0!==this.Bt.G.length&&null!==this.Bt.J){this.Ys.length||this.$s(i);for(var h=Math.max(1,Math.floor(i)),r=Math.round(this.Bt.Ks*i)-Math.floor(h/2),e=r+h,u=this.Bt.J.from;u<this.Bt.J.to;u++){var a=this.Bt.G[u],o=this.Ys[u-this.Bt.J.from],l=Math.round(a.it*i);t.fillStyle=a.A;var f=void 0,c=void 0;l<=r?(f=l,c=e):(f=r,c=l-Math.floor(h/2)+h),t.fillRect(o.In,f,o.jn-o.In+1,c-f)}}},t.prototype.$s=function(t){if(null!==this.Bt&&0!==this.Bt.G.length&&null!==this.Bt.J){var i=Math.ceil(this.Bt.ws*t)<=1?0:Math.max(1,Math.floor(t)),n=Math.round(this.Bt.ws*t)-i;this.Ys=new Array(this.Bt.J.to-this.Bt.J.from);for(var s=this.Bt.J.from;s<this.Bt.J.to;s++){var h,r=this.Bt.G[s],e=Math.round(r.tt*t),u=void 0,a=void 0;if(n%2)u=e-(h=(n-1)/2),a=e+h;else u=e-(h=n/2),a=e+h-1;this.Ys[s-this.Bt.J.from]={In:u,