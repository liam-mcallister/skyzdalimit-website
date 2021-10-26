// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"413eb":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "59238111cf75d97bcb0f86220dd226ff"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2duEN":[function(require,module,exports) {
(function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.baguetteBox = t();
})(this, function() {
    "use strict";
    var r, l, u, c, d, f = '<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>', g = '<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>', p = '<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>', b = {
    }, v = {
        captions: true,
        buttons: "auto",
        fullScreen: false,
        noScrollbars: false,
        bodyClass: "baguetteBox-open",
        titleTag: false,
        async: false,
        preload: 2,
        animation: "slideIn",
        afterShow: null,
        afterHide: null,
        onChange: null,
        overlayBackgroundColor: "rgba(0,0,0,.8)"
    }, m = {
    }, h = [], o = 0, n = false, i = {
    }, a = false, y = /.+\.(gif|jpe?g|png|webp)/i, w = {
    }, k = [], s = null, x = function(e) {
        -1 !== e.target.id.indexOf("baguette-img") && j();
    }, E = function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true, D();
    }, C = function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true, X();
    }, B = function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true, j();
    }, T = function(e) {
        i.count++, 1 < i.count && (i.multitouch = true), i.startX = e.changedTouches[0].pageX, i.startY = e.changedTouches[0].pageY;
    }, N = function(e) {
        if (!a && !i.multitouch) {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            var t = e.touches[0] || e.changedTouches[0];
            40 < t.pageX - i.startX ? (a = true, D()) : t.pageX - i.startX < -40 ? (a = true, X()) : 100 < i.startY - t.pageY && j();
        }
    }, L = function() {
        i.count--, i.count <= 0 && (i.multitouch = false), a = false;
    }, A = function() {
        L();
    }, P = function(e) {
        "block" === r.style.display && r.contains && !r.contains(e.target) && (e.stopPropagation(), Y());
    };
    function S(e) {
        if (w.hasOwnProperty(e)) {
            var t = w[e].galleries;
            [].forEach.call(t, function(e1) {
                [].forEach.call(e1, function(e2) {
                    W(e2.imageElement, "click", e2.eventHandler);
                }), h === e1 && (h = []);
            }), delete w[e];
        }
    }
    function F(e) {
        switch(e.keyCode){
            case 37:
                D();
                break;
            case 39:
                X();
                break;
            case 27:
                j();
                break;
            case 36:
                (function t(e1) {
                    e1 && e1.preventDefault();
                    return M(0);
                })(e);
                break;
            case 35:
                (function n1(e1) {
                    e1 && e1.preventDefault();
                    return M(h.length - 1);
                })(e);
        }
    }
    function H(e, t) {
        if (h !== e) {
            for(h = e, (function s1(e1) {
                e1 = e1 || {
                };
                for(var t1 in v)b[t1] = v[t1], "undefined" != typeof e1[t1] && (b[t1] = e1[t1]);
                l.style.transition = l.style.webkitTransition = "fadeIn" === b.animation ? "opacity .4s ease" : "slideIn" === b.animation ? "" : "none", "auto" === b.buttons && ("ontouchstart" in window || 1 === h.length) && (b.buttons = false);
                u.style.display = c.style.display = b.buttons ? "" : "none";
                try {
                    r.style.backgroundColor = b.overlayBackgroundColor;
                } catch (n1) {
                }
            })(t); l.firstChild;)l.removeChild(l.firstChild);
            for(var n1, o1 = [], i1 = [], a1 = k.length = 0; a1 < e.length; a1++)(n1 = J("div")).className = "full-image", n1.id = "baguette-img-" + a1, k.push(n1), o1.push("baguetteBox-figure-" + a1), i1.push("baguetteBox-figcaption-" + a1), l.appendChild(k[a1]);
            r.setAttribute("aria-labelledby", o1.join(" ")), r.setAttribute("aria-describedby", i1.join(" "));
        }
    }
    function I(e) {
        b.noScrollbars && (document.documentElement.style.overflowY = "hidden", document.body.style.overflowY = "scroll"), "block" !== r.style.display && (U(document, "keydown", F), i = {
            count: 0,
            startX: null,
            startY: null
        }, q(o = e, function() {
            z(o), V(o);
        }), R(), r.style.display = "block", b.fullScreen && (function t() {
            r.requestFullscreen ? r.requestFullscreen() : r.webkitRequestFullscreen ? r.webkitRequestFullscreen() : r.mozRequestFullScreen && r.mozRequestFullScreen();
        })(), setTimeout(function() {
            r.className = "visible", b.bodyClass && document.body.classList && document.body.classList.add(b.bodyClass), b.afterShow && b.afterShow();
        }, 50), b.onChange && b.onChange(o, k.length), s = document.activeElement, Y(), n = true);
    }
    function Y() {
        b.buttons ? u.focus() : d.focus();
    }
    function j() {
        b.noScrollbars && (document.documentElement.style.overflowY = "auto", document.body.style.overflowY = "auto"), "none" !== r.style.display && (W(document, "keydown", F), r.className = "", setTimeout(function() {
            r.style.display = "none", document.fullscreen && (function e() {
                document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
            })(), b.bodyClass && document.body.classList && document.body.classList.remove(b.bodyClass), b.afterHide && b.afterHide(), s && s.focus(), n = false;
        }, 500));
    }
    function q(t, n2) {
        var e = k[t], o2 = h[t];
        if ((void 0) !== e && (void 0) !== o2) {
            if (e.getElementsByTagName("img")[0]) n2 && n2();
            else {
                var i2 = o2.imageElement, a2 = i2.getElementsByTagName("img")[0], s1 = "function" == typeof b.captions ? b.captions.call(h, i2) : i2.getAttribute("data-caption") || i2.title, r1 = function d1(e1) {
                    var t1 = e1.href;
                    if (e1.dataset) {
                        var n3 = [];
                        for(var o3 in e1.dataset)"at-" !== o3.substring(0, 3) || isNaN(o3.substring(3)) || (n3[o3.replace("at-", "")] = e1.dataset[o3]);
                        for(var i3 = Object.keys(n3).sort(function(e2, t2) {
                            return parseInt(e2, 10) < parseInt(t2, 10) ? -1 : 1;
                        }), a3 = window.innerWidth * window.devicePixelRatio, s2 = 0; s2 < i3.length - 1 && i3[s2] < a3;)s2++;
                        t1 = n3[i3[s2]] || t1;
                    }
                    return t1;
                }(i2), l1 = J("figure");
                if (l1.id = "baguetteBox-figure-" + t, l1.innerHTML = '<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>', b.captions && s1) {
                    var u1 = J("figcaption");
                    u1.id = "baguetteBox-figcaption-" + t, u1.innerHTML = s1, l1.appendChild(u1);
                }
                e.appendChild(l1);
                var c1 = J("img");
                c1.onload = function() {
                    var e1 = document.querySelector("#baguette-img-" + t + " .baguetteBox-spinner");
                    l1.removeChild(e1), !b.async && n2 && n2();
                }, c1.setAttribute("src", r1), c1.alt = a2 && a2.alt || "", b.titleTag && s1 && (c1.title = s1), l1.appendChild(c1), b.async && n2 && n2();
            }
        }
    }
    function X() {
        return M(o + 1);
    }
    function D() {
        return M(o - 1);
    }
    function M(e, t) {
        return !n && 0 <= e && e < t.length ? (H(t, b), I(e), true) : e < 0 ? (b.animation && O("left"), false) : e >= k.length ? (b.animation && O("right"), false) : (q(o = e, function() {
            z(o), V(o);
        }), R(), b.onChange && b.onChange(o, k.length), true);
    }
    function O(e) {
        l.className = "bounce-from-" + e, setTimeout(function() {
            l.className = "";
        }, 400);
    }
    function R() {
        var e = 100 * -o + "%";
        "fadeIn" === b.animation ? (l.style.opacity = 0, setTimeout(function() {
            m.transforms ? l.style.transform = l.style.webkitTransform = "translate3d(" + e + ",0,0)" : l.style.left = e, l.style.opacity = 1;
        }, 400)) : m.transforms ? l.style.transform = l.style.webkitTransform = "translate3d(" + e + ",0,0)" : l.style.left = e;
    }
    function z(e) {
        e - o >= b.preload || q(e + 1, function() {
            z(e + 1);
        });
    }
    function V(e) {
        o - e >= b.preload || q(e - 1, function() {
            V(e - 1);
        });
    }
    function U(e, t, n2, o2) {
        e.addEventListener ? e.addEventListener(t, n2, o2) : e.attachEvent("on" + t, function(e1) {
            (e1 = e1 || window.event).target = e1.target || e1.srcElement, n2(e1);
        });
    }
    function W(e, t, n2, o2) {
        e.removeEventListener ? e.removeEventListener(t, n2, o2) : e.detachEvent("on" + t, n2);
    }
    function G(e) {
        return document.getElementById(e);
    }
    function J(e) {
        return document.createElement(e);
    }
    return [].forEach || (Array.prototype.forEach = function(e, t) {
        for(var n2 = 0; n2 < this.length; n2++)e.call(t, this[n2], n2, this);
    }), [].filter || (Array.prototype.filter = function(e, t, n2, o2, i4) {
        for(n2 = this, o2 = [], i4 = 0; i4 < n2.length; i4++)e.call(t, n2[i4], i4, n2) && o2.push(n2[i4]);
        return o2;
    }), {
        run: function K(e, t) {
            return m.transforms = (function n2() {
                var e1 = J("div");
                return "undefined" != typeof e1.style.perspective || "undefined" != typeof e1.style.webkitPerspective;
            })(), m.svg = (function o2() {
                var e1 = J("div");
                return e1.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === (e1.firstChild && e1.firstChild.namespaceURI);
            })(), m.passiveEvents = (function i4() {
                var e1 = false;
                try {
                    var t1 = Object.defineProperty({
                    }, "passive", {
                        get: function() {
                            e1 = true;
                        }
                    });
                    window.addEventListener("test", null, t1);
                } catch (n4) {
                }
                return e1;
            })(), (function a4() {
                if (r = G("baguetteBox-overlay")) return l = G("baguetteBox-slider"), u = G("previous-button"), c = G("next-button"), void (d = G("close-button"));
                (r = J("div")).setAttribute("role", "dialog"), r.id = "baguetteBox-overlay", document.getElementsByTagName("body")[0].appendChild(r), (l = J("div")).id = "baguetteBox-slider", r.appendChild(l), (u = J("button")).setAttribute("type", "button"), u.id = "previous-button", u.setAttribute("aria-label", "Previous"), u.innerHTML = m.svg ? f : "&lt;", r.appendChild(u), (c = J("button")).setAttribute("type", "button"), c.id = "next-button", c.setAttribute("aria-label", "Next"), c.innerHTML = m.svg ? g : "&gt;", r.appendChild(c), (d = J("button")).setAttribute("type", "button"), d.id = "close-button", d.setAttribute("aria-label", "Close"), d.innerHTML = m.svg ? p : "&times;", r.appendChild(d), u.className = c.className = d.className = "baguetteBox-button", (function n4() {
                    var e1 = m.passiveEvents ? {
                        passive: false
                    } : null, t1 = m.passiveEvents ? {
                        passive: true
                    } : null;
                    U(r, "click", x), U(u, "click", E), U(c, "click", C), U(d, "click", B), U(l, "contextmenu", A), U(r, "touchstart", T, t1), U(r, "touchmove", N, e1), U(r, "touchend", L), U(document, "focus", P, true);
                })();
            })(), S(e), (function s3(e1, a5) {
                var t1 = document.querySelectorAll(e1), n4 = {
                    galleries: [],
                    nodeList: t1
                };
                return w[e1] = n4, [].forEach.call(t1, function(e2) {
                    a5 && a5.filter && (y = a5.filter);
                    var t2 = [];
                    if (t2 = "A" === e2.tagName ? [
                        e2
                    ] : e2.getElementsByTagName("a"), 0 !== (t2 = [].filter.call(t2, function(e3) {
                        if (-1 === e3.className.indexOf(a5 && a5.ignoreClass)) return y.test(e3.href);
                    })).length) {
                        var i5 = [];
                        [].forEach.call(t2, function(e3, t3) {
                            var n5 = function(e4) {
                                e4.preventDefault ? e4.preventDefault() : e4.returnValue = false, H(i5, a5), I(t3);
                            }, o4 = {
                                eventHandler: n5,
                                imageElement: e3
                            };
                            U(e3, "click", n5), i5.push(o4);
                        }), n4.galleries.push(i5);
                    }
                }), n4.galleries;
            })(e, t);
        },
        show: M,
        showNext: X,
        showPrevious: D,
        hide: j,
        destroy: function e() {
            (function n2() {
                var e1 = m.passiveEvents ? {
                    passive: false
                } : null, t = m.passiveEvents ? {
                    passive: true
                } : null;
                W(r, "click", x), W(u, "click", E), W(c, "click", C), W(d, "click", B), W(l, "contextmenu", A), W(r, "touchstart", T, t), W(r, "touchmove", N, e1), W(r, "touchend", L), W(document, "focus", P, true);
            })(), (function t() {
                for(var e1 in w)w.hasOwnProperty(e1) && S(e1);
            })(), W(document, "keydown", F), document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")), w = {
            }, h = [], o = 0;
        }
    };
});

},{}]},["413eb","2duEN"], "2duEN", "parcelRequire3596")

//# sourceMappingURL=productions.0dd226ff.js.map
