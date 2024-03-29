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
})({"5D4Hd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "13fcd2feb55ebe5208d5e351c419655d"; // @flow
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

},{}],"4vORa":[function(require,module,exports) {
(function(t, i) {
    "object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], i) : i(t.L = {
    });
})(this, function(t) {
    "use strict";
    function h(t1) {
        for(var i, e, n = 1, o = arguments.length; n < o; n++)for(i in e = arguments[n])t1[i] = e[i];
        return t1;
    }
    var s = Object.create || function(t1) {
        return i.prototype = t1, new i;
    };
    function i() {
    }
    function p(t1, i1) {
        var e = Array.prototype.slice;
        if (t1.bind) return t1.bind.apply(t1, e.call(arguments, 1));
        var n = e.call(arguments, 2);
        return function() {
            return t1.apply(i1, n.length ? n.concat(e.call(arguments)) : arguments);
        };
    }
    var e = 0;
    function m(t1) {
        return t1._leaflet_id = t1._leaflet_id || ++e, t1._leaflet_id;
    }
    function n(t1, i1, e1) {
        var n1, o, s1 = function() {
            n1 = false, o && (r.apply(e1, o), o = false);
        }, r = function() {
            n1 ? o = arguments : (t1.apply(e1, arguments), setTimeout(s1, i1), n1 = true);
        };
        return r;
    }
    function o(t1, i1, e1) {
        var n1 = i1[1], o1 = i1[0], s1 = n1 - o1;
        return t1 === n1 && e1 ? t1 : ((t1 - o1) % s1 + s1) % s1 + o1;
    }
    function a() {
        return false;
    }
    function r3(t1, i1) {
        var e1 = Math.pow(10, (void 0) === i1 ? 6 : i1);
        return Math.round(t1 * e1) / e1;
    }
    function u(t1) {
        return t1.trim ? t1.trim() : t1.replace(/^\s+|\s+$/g, "");
    }
    function l(t1) {
        return u(t1).split(/\s+/);
    }
    function c(t1, i1) {
        for(var e1 in Object.prototype.hasOwnProperty.call(t1, "options") || (t1.options = t1.options ? s(t1.options) : {
        }), i1)t1.options[e1] = i1[e1];
        return t1.options;
    }
    function _(t1, i1, e1) {
        var n1 = [];
        for(var o1 in t1)n1.push(encodeURIComponent(e1 ? o1.toUpperCase() : o1) + "=" + encodeURIComponent(t1[o1]));
        return (i1 && -1 !== i1.indexOf("?") ? "&" : "?") + n1.join("&");
    }
    var d = /\{ *([\w_-]+) *\}/g;
    function f(t1, n1) {
        return t1.replace(d, function(t2, i1) {
            var e1 = n1[i1];
            if ((void 0) === e1) throw new Error("No value provided for variable " + t2);
            return "function" == typeof e1 && (e1 = e1(n1)), e1;
        });
    }
    var g = Array.isArray || function(t1) {
        return "[object Array]" === Object.prototype.toString.call(t1);
    };
    function v(t1, i1) {
        for(var e1 = 0; e1 < t1.length; e1++)if (t1[e1] === i1) return e1;
        return -1;
    }
    var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function x(t1) {
        return window["webkit" + t1] || window["moz" + t1] || window["ms" + t1];
    }
    var w = 0;
    function P(t1) {
        var i1 = +new Date, e1 = Math.max(0, 16 - (i1 - w));
        return w = i1 + e1, window.setTimeout(t1, e1);
    }
    var b = window.requestAnimationFrame || x("RequestAnimationFrame") || P, T = window.cancelAnimationFrame || x("CancelAnimationFrame") || x("CancelRequestAnimationFrame") || function(t1) {
        window.clearTimeout(t1);
    };
    function M(t1, i1, e1) {
        if (!e1 || b !== P) return b.call(window, p(t1, i1));
        t1.call(i1);
    }
    function z(t1) {
        t1 && T.call(window, t1);
    }
    var C = {
        extend: h,
        create: s,
        bind: p,
        lastId: e,
        stamp: m,
        throttle: n,
        wrapNum: o,
        falseFn: a,
        formatNum: r3,
        trim: u,
        splitWords: l,
        setOptions: c,
        getParamString: _,
        template: f,
        isArray: g,
        indexOf: v,
        emptyImageUrl: y,
        requestFn: b,
        cancelFn: T,
        requestAnimFrame: M,
        cancelAnimFrame: z
    };
    function S() {
    }
    S.extend = function(t1) {
        function i1() {
            this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }
        var e1 = i1.__super__ = this.prototype, n1 = s(e1);
        for(var o1 in (n1.constructor = i1).prototype = n1, this)Object.prototype.hasOwnProperty.call(this, o1) && "prototype" !== o1 && "__super__" !== o1 && (i1[o1] = this[o1]);
        return t1.statics && (h(i1, t1.statics), delete t1.statics), t1.includes && ((function(t2) {
            if ("undefined" == typeof L || !L || !L.Mixin) return;
            t2 = g(t2) ? t2 : [
                t2
            ];
            for(var i2 = 0; i2 < t2.length; i2++)t2[i2] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack);
        })(t1.includes), h.apply(null, [
            n1
        ].concat(t1.includes)), delete t1.includes), n1.options && (t1.options = h(s(n1.options), t1.options)), h(n1, t1), n1._initHooks = [], n1.callInitHooks = function() {
            if (!this._initHooksCalled) {
                e1.callInitHooks && e1.callInitHooks.call(this), this._initHooksCalled = true;
                for(var t2 = 0, i2 = n1._initHooks.length; t2 < i2; t2++)n1._initHooks[t2].call(this);
            }
        }, i1;
    }, S.include = function(t1) {
        return h(this.prototype, t1), this;
    }, S.mergeOptions = function(t1) {
        return h(this.prototype.options, t1), this;
    }, S.addInitHook = function(t1) {
        var i1 = Array.prototype.slice.call(arguments, 1), e1 = "function" == typeof t1 ? t1 : function() {
            this[t1].apply(this, i1);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e1), this;
    };
    var Z = {
        on: function(t1, i1, e1) {
            if ("object" == typeof t1) for(var n1 in t1)this._on(n1, t1[n1], i1);
            else for(var o1 = 0, s1 = (t1 = l(t1)).length; o1 < s1; o1++)this._on(t1[o1], i1, e1);
            return this;
        },
        off: function(t1, i1, e1) {
            if (t1) {
                if ("object" == typeof t1) for(var n1 in t1)this._off(n1, t1[n1], i1);
                else for(var o1 = 0, s1 = (t1 = l(t1)).length; o1 < s1; o1++)this._off(t1[o1], i1, e1);
            } else delete this._events;
            return this;
        },
        _on: function(t1, i1, e1) {
            this._events = this._events || {
            };
            var n2 = this._events[t1];
            n2 || (n2 = [], this._events[t1] = n2), e1 === this && (e1 = void 0);
            for(var o2 = {
                fn: i1,
                ctx: e1
            }, s2 = n2, r1 = 0, a1 = s2.length; r1 < a1; r1++)if (s2[r1].fn === i1 && s2[r1].ctx === e1) return;
            s2.push(o2);
        },
        _off: function(t1, i1, e1) {
            var n2, o2, s2;
            if (this._events && (n2 = this._events[t1])) {
                if (i1) {
                    if (e1 === this && (e1 = void 0), n2) for(o2 = 0, s2 = n2.length; o2 < s2; o2++){
                        var r1 = n2[o2];
                        if (r1.ctx === e1 && r1.fn === i1) return r1.fn = a, this._firingCount && (this._events[t1] = n2 = n2.slice()), void n2.splice(o2, 1);
                    }
                } else {
                    for(o2 = 0, s2 = n2.length; o2 < s2; o2++)n2[o2].fn = a;
                    delete this._events[t1];
                }
            }
        },
        fire: function(t1, i1, e1) {
            if (!this.listens(t1, e1)) return this;
            var n2 = h({
            }, i1, {
                type: t1,
                target: this,
                sourceTarget: i1 && i1.sourceTarget || this
            });
            if (this._events) {
                var o2 = this._events[t1];
                if (o2) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for(var s2 = 0, r2 = o2.length; s2 < r2; s2++){
                        var a1 = o2[s2];
                        a1.fn.call(a1.ctx || this, n2);
                    }
                    this._firingCount--;
                }
            }
            return e1 && this._propagateEvent(n2), this;
        },
        listens: function(t1, i1) {
            var e1 = this._events && this._events[t1];
            if (e1 && e1.length) return true;
            if (i1) for(var n2 in this._eventParents)if (this._eventParents[n2].listens(t1, i1)) return true;
            return false;
        },
        once: function(t1, i1, e1) {
            if ("object" == typeof t1) {
                for(var n2 in t1)this.once(n2, t1[n2], i1);
                return this;
            }
            var o3 = p(function() {
                this.off(t1, i1, e1).off(t1, o3, e1);
            }, this);
            return this.on(t1, i1, e1).on(t1, o3, e1);
        },
        addEventParent: function(t1) {
            return this._eventParents = this._eventParents || {
            }, this._eventParents[m(t1)] = t1, this;
        },
        removeEventParent: function(t1) {
            return this._eventParents && delete this._eventParents[m(t1)], this;
        },
        _propagateEvent: function(t1) {
            for(var i1 in this._eventParents)this._eventParents[i1].fire(t1.type, h({
                layer: t1.target,
                propagatedFrom: t1.target
            }, t1), true);
        }
    };
    Z.addEventListener = Z.on, Z.removeEventListener = Z.clearAllEventListeners = Z.off, Z.addOneTimeEventListener = Z.once, Z.fireEvent = Z.fire, Z.hasEventListeners = Z.listens;
    var E = S.extend(Z);
    function k(t1, i1, e1) {
        this.x = e1 ? Math.round(t1) : t1, this.y = e1 ? Math.round(i1) : i1;
    }
    var B = Math.trunc || function(t1) {
        return 0 < t1 ? Math.floor(t1) : Math.ceil(t1);
    };
    function A(t1, i1, e1) {
        return t1 instanceof k ? t1 : g(t1) ? new k(t1[0], t1[1]) : null == t1 ? t1 : "object" == typeof t1 && "x" in t1 && "y" in t1 ? new k(t1.x, t1.y) : new k(t1, i1, e1);
    }
    function I(t1, i1) {
        if (t1) for(var e1 = i1 ? [
            t1,
            i1
        ] : t1, n3 = 0, o3 = e1.length; n3 < o3; n3++)this.extend(e1[n3]);
    }
    function O(t1, i1) {
        return !t1 || t1 instanceof I ? t1 : new I(t1, i1);
    }
    function R(t1, i1) {
        if (t1) for(var e1 = i1 ? [
            t1,
            i1
        ] : t1, n3 = 0, o3 = e1.length; n3 < o3; n3++)this.extend(e1[n3]);
    }
    function N(t1, i1) {
        return t1 instanceof R ? t1 : new R(t1, i1);
    }
    function D(t1, i1, e1) {
        if (isNaN(t1) || isNaN(i1)) throw new Error("Invalid LatLng object: (" + t1 + ", " + i1 + ")");
        this.lat = +t1, this.lng = +i1, (void 0) !== e1 && (this.alt = +e1);
    }
    function j(t1, i1, e1) {
        return t1 instanceof D ? t1 : g(t1) && "object" != typeof t1[0] ? 3 === t1.length ? new D(t1[0], t1[1], t1[2]) : 2 === t1.length ? new D(t1[0], t1[1]) : null : null == t1 ? t1 : "object" == typeof t1 && "lat" in t1 ? new D(t1.lat, "lng" in t1 ? t1.lng : t1.lon, t1.alt) : (void 0) === i1 ? null : new D(t1, i1, e1);
    }
    k.prototype = {
        clone: function() {
            return new k(this.x, this.y);
        },
        add: function(t1) {
            return this.clone()._add(A(t1));
        },
        _add: function(t1) {
            return this.x += t1.x, this.y += t1.y, this;
        },
        subtract: function(t1) {
            return this.clone()._subtract(A(t1));
        },
        _subtract: function(t1) {
            return this.x -= t1.x, this.y -= t1.y, this;
        },
        divideBy: function(t1) {
            return this.clone()._divideBy(t1);
        },
        _divideBy: function(t1) {
            return this.x /= t1, this.y /= t1, this;
        },
        multiplyBy: function(t1) {
            return this.clone()._multiplyBy(t1);
        },
        _multiplyBy: function(t1) {
            return this.x *= t1, this.y *= t1, this;
        },
        scaleBy: function(t1) {
            return new k(this.x * t1.x, this.y * t1.y);
        },
        unscaleBy: function(t1) {
            return new k(this.x / t1.x, this.y / t1.y);
        },
        round: function() {
            return this.clone()._round();
        },
        _round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        },
        floor: function() {
            return this.clone()._floor();
        },
        _floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        },
        ceil: function() {
            return this.clone()._ceil();
        },
        _ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        },
        trunc: function() {
            return this.clone()._trunc();
        },
        _trunc: function() {
            return this.x = B(this.x), this.y = B(this.y), this;
        },
        distanceTo: function(t1) {
            var i1 = (t1 = A(t1)).x - this.x, e1 = t1.y - this.y;
            return Math.sqrt(i1 * i1 + e1 * e1);
        },
        equals: function(t1) {
            return (t1 = A(t1)).x === this.x && t1.y === this.y;
        },
        contains: function(t1) {
            return t1 = A(t1), Math.abs(t1.x) <= Math.abs(this.x) && Math.abs(t1.y) <= Math.abs(this.y);
        },
        toString: function() {
            return "Point(" + r3(this.x) + ", " + r3(this.y) + ")";
        }
    }, I.prototype = {
        extend: function(t1) {
            return t1 = A(t1), this.min || this.max ? (this.min.x = Math.min(t1.x, this.min.x), this.max.x = Math.max(t1.x, this.max.x), this.min.y = Math.min(t1.y, this.min.y), this.max.y = Math.max(t1.y, this.max.y)) : (this.min = t1.clone(), this.max = t1.clone()), this;
        },
        getCenter: function(t1) {
            return new k((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t1);
        },
        getBottomLeft: function() {
            return new k(this.min.x, this.max.y);
        },
        getTopRight: function() {
            return new k(this.max.x, this.min.y);
        },
        getTopLeft: function() {
            return this.min;
        },
        getBottomRight: function() {
            return this.max;
        },
        getSize: function() {
            return this.max.subtract(this.min);
        },
        contains: function(t1) {
            var i1, e1;
            return (t1 = ("number" == typeof t1[0] || t1 instanceof k ? A : O)(t1)) instanceof I ? (i1 = t1.min, e1 = t1.max) : i1 = e1 = t1, i1.x >= this.min.x && e1.x <= this.max.x && i1.y >= this.min.y && e1.y <= this.max.y;
        },
        intersects: function(t1) {
            t1 = O(t1);
            var i1 = this.min, e1 = this.max, n3 = t1.min, o3 = t1.max, s3 = o3.x >= i1.x && n3.x <= e1.x, r3 = o3.y >= i1.y && n3.y <= e1.y;
            return s3 && r3;
        },
        overlaps: function(t1) {
            t1 = O(t1);
            var i1 = this.min, e1 = this.max, n3 = t1.min, o3 = t1.max, s3 = o3.x > i1.x && n3.x < e1.x, r3 = o3.y > i1.y && n3.y < e1.y;
            return s3 && r3;
        },
        isValid: function() {
            return !(!this.min || !this.max);
        }
    }, R.prototype = {
        extend: function(t1) {
            var i1, e1, n3 = this._southWest, o3 = this._northEast;
            if (t1 instanceof D) e1 = i1 = t1;
            else {
                if (!(t1 instanceof R)) return t1 ? this.extend(j(t1) || N(t1)) : this;
                if (i1 = t1._southWest, e1 = t1._northEast, !i1 || !e1) return this;
            }
            return n3 || o3 ? (n3.lat = Math.min(i1.lat, n3.lat), n3.lng = Math.min(i1.lng, n3.lng), o3.lat = Math.max(e1.lat, o3.lat), o3.lng = Math.max(e1.lng, o3.lng)) : (this._southWest = new D(i1.lat, i1.lng), this._northEast = new D(e1.lat, e1.lng)), this;
        },
        pad: function(t1) {
            var i1 = this._southWest, e1 = this._northEast, n3 = Math.abs(i1.lat - e1.lat) * t1, o3 = Math.abs(i1.lng - e1.lng) * t1;
            return new R(new D(i1.lat - n3, i1.lng - o3), new D(e1.lat + n3, e1.lng + o3));
        },
        getCenter: function() {
            return new D((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
        },
        getSouthWest: function() {
            return this._southWest;
        },
        getNorthEast: function() {
            return this._northEast;
        },
        getNorthWest: function() {
            return new D(this.getNorth(), this.getWest());
        },
        getSouthEast: function() {
            return new D(this.getSouth(), this.getEast());
        },
        getWest: function() {
            return this._southWest.lng;
        },
        getSouth: function() {
            return this._southWest.lat;
        },
        getEast: function() {
            return this._northEast.lng;
        },
        getNorth: function() {
            return this._northEast.lat;
        },
        contains: function(t1) {
            t1 = ("number" == typeof t1[0] || t1 instanceof D || "lat" in t1 ? j : N)(t1);
            var i1, e1, n3 = this._southWest, o3 = this._northEast;
            return t1 instanceof R ? (i1 = t1.getSouthWest(), e1 = t1.getNorthEast()) : i1 = e1 = t1, i1.lat >= n3.lat && e1.lat <= o3.lat && i1.lng >= n3.lng && e1.lng <= o3.lng;
        },
        intersects: function(t1) {
            t1 = N(t1);
            var i1 = this._southWest, e1 = this._northEast, n3 = t1.getSouthWest(), o3 = t1.getNorthEast(), s3 = o3.lat >= i1.lat && n3.lat <= e1.lat, r3 = o3.lng >= i1.lng && n3.lng <= e1.lng;
            return s3 && r3;
        },
        overlaps: function(t1) {
            t1 = N(t1);
            var i1 = this._southWest, e1 = this._northEast, n3 = t1.getSouthWest(), o3 = t1.getNorthEast(), s3 = o3.lat > i1.lat && n3.lat < e1.lat, r3 = o3.lng > i1.lng && n3.lng < e1.lng;
            return s3 && r3;
        },
        toBBoxString: function() {
            return [
                this.getWest(),
                this.getSouth(),
                this.getEast(),
                this.getNorth()
            ].join(",");
        },
        equals: function(t1, i1) {
            return !!t1 && (t1 = N(t1), this._southWest.equals(t1.getSouthWest(), i1) && this._northEast.equals(t1.getNorthEast(), i1));
        },
        isValid: function() {
            return !(!this._southWest || !this._northEast);
        }
    };
    var W, H = {
        latLngToPoint: function(t1, i1) {
            var e1 = this.projection.project(t1), n3 = this.scale(i1);
            return this.transformation._transform(e1, n3);
        },
        pointToLatLng: function(t1, i1) {
            var e1 = this.scale(i1), n3 = this.transformation.untransform(t1, e1);
            return this.projection.unproject(n3);
        },
        project: function(t1) {
            return this.projection.project(t1);
        },
        unproject: function(t1) {
            return this.projection.unproject(t1);
        },
        scale: function(t1) {
            return 256 * Math.pow(2, t1);
        },
        zoom: function(t1) {
            return Math.log(t1 / 256) / Math.LN2;
        },
        getProjectedBounds: function(t1) {
            if (this.infinite) return null;
            var i1 = this.projection.bounds, e1 = this.scale(t1);
            return new I(this.transformation.transform(i1.min, e1), this.transformation.transform(i1.max, e1));
        },
        infinite: (D.prototype = {
            equals: function(t1, i1) {
                return !!t1 && (t1 = j(t1), Math.max(Math.abs(this.lat - t1.lat), Math.abs(this.lng - t1.lng)) <= ((void 0) === i1 ? 0.000000001 : i1));
            },
            toString: function(t1) {
                return "LatLng(" + r3(this.lat, t1) + ", " + r3(this.lng, t1) + ")";
            },
            distanceTo: function(t1) {
                return F.distance(this, j(t1));
            },
            wrap: function() {
                return F.wrapLatLng(this);
            },
            toBounds: function(t1) {
                var i1 = 180 * t1 / 40075017, e1 = i1 / Math.cos(Math.PI / 180 * this.lat);
                return N([
                    this.lat - i1,
                    this.lng - e1
                ], [
                    this.lat + i1,
                    this.lng + e1
                ]);
            },
            clone: function() {
                return new D(this.lat, this.lng, this.alt);
            }
        }, false),
        wrapLatLng: function(t1) {
            var i1 = this.wrapLng ? o(t1.lng, this.wrapLng, true) : t1.lng;
            return new D(this.wrapLat ? o(t1.lat, this.wrapLat, true) : t1.lat, i1, t1.alt);
        },
        wrapLatLngBounds: function(t1) {
            var i1 = t1.getCenter(), e1 = this.wrapLatLng(i1), n3 = i1.lat - e1.lat, o3 = i1.lng - e1.lng;
            if (0 == n3 && 0 == o3) return t1;
            var s3 = t1.getSouthWest(), r3 = t1.getNorthEast();
            return new R(new D(s3.lat - n3, s3.lng - o3), new D(r3.lat - n3, r3.lng - o3));
        }
    }, F = h({
    }, H, {
        wrapLng: [
            -180,
            180
        ],
        R: 6371000,
        distance: function(t1, i1) {
            var e1 = Math.PI / 180, n3 = t1.lat * e1, o3 = i1.lat * e1, s3 = Math.sin((i1.lat - t1.lat) * e1 / 2), r3 = Math.sin((i1.lng - t1.lng) * e1 / 2), a2 = s3 * s3 + Math.cos(n3) * Math.cos(o3) * r3 * r3, h1 = 2 * Math.atan2(Math.sqrt(a2), Math.sqrt(1 - a2));
            return this.R * h1;
        }
    }), U = 6378137, V = {
        R: U,
        MAX_LATITUDE: 85.0511287798,
        project: function(t1) {
            var i1 = Math.PI / 180, e1 = this.MAX_LATITUDE, n3 = Math.max(Math.min(e1, t1.lat), -e1), o3 = Math.sin(n3 * i1);
            return new k(this.R * t1.lng * i1, this.R * Math.log((1 + o3) / (1 - o3)) / 2);
        },
        unproject: function(t1) {
            var i1 = 180 / Math.PI;
            return new D((2 * Math.atan(Math.exp(t1.y / this.R)) - Math.PI / 2) * i1, t1.x * i1 / this.R);
        },
        bounds: new I([
            -(W = U * Math.PI),
            -W
        ], [
            W,
            W
        ])
    };
    function q(t1, i1, e1, n3) {
        if (g(t1)) return this._a = t1[0], this._b = t1[1], this._c = t1[2], void (this._d = t1[3]);
        this._a = t1, this._b = i1, this._c = e1, this._d = n3;
    }
    function G(t1, i1, e1, n3) {
        return new q(t1, i1, e1, n3);
    }
    q.prototype = {
        transform: function(t1, i1) {
            return this._transform(t1.clone(), i1);
        },
        _transform: function(t1, i1) {
            return i1 = i1 || 1, t1.x = i1 * (this._a * t1.x + this._b), t1.y = i1 * (this._c * t1.y + this._d), t1;
        },
        untransform: function(t1, i1) {
            return i1 = i1 || 1, new k((t1.x / i1 - this._b) / this._a, (t1.y / i1 - this._d) / this._c);
        }
    };
    var K, Y = h({
    }, F, {
        code: "EPSG:3857",
        projection: V,
        transformation: G(K = 0.5 / (Math.PI * V.R), 0.5, -K, 0.5)
    }), X = h({
    }, Y, {
        code: "EPSG:900913"
    });
    function J(t1) {
        return document.createElementNS("http://www.w3.org/2000/svg", t1);
    }
    function $(t1, i1) {
        for(var e1, n3, o3, s3, r3 = "", a2 = 0, h1 = t1.length; a2 < h1; a2++){
            for(e1 = 0, n3 = (o3 = t1[a2]).length; e1 < n3; e1++)r3 += (e1 ? "L" : "M") + (s3 = o3[e1]).x + " " + s3.y;
            r3 += i1 ? Zt ? "z" : "x" : "";
        }
        return r3 || "M0 0";
    }
    var Q = document.documentElement.style, tt = "ActiveXObject" in window, it = tt && !document.addEventListener, et = "msLaunchUri" in navigator && !("documentMode" in document), nt = kt("webkit"), ot = kt("android"), st = kt("android 2") || kt("android 3"), rt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), at = ot && kt("Google") && rt < 537 && !("AudioNode" in window), ht = !!window.opera, ut = !et && kt("chrome"), lt = kt("gecko") && !nt && !ht && !tt, ct = !ut && kt("safari"), _t = kt("phantom"), dt = "OTransition" in Q, pt = 0 === navigator.platform.indexOf("Win"), mt = tt && "transition" in Q, ft = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !st, gt = "MozPerspective" in Q, vt = !window.L_DISABLE_3D && (mt || ft || gt) && !dt && !_t, yt = "undefined" != typeof orientation || kt("mobile"), xt = yt && nt, wt = yt && ft, Pt = !window.PointerEvent && window.MSPointerEvent, Lt = !(!window.PointerEvent && !Pt), bt = !window.L_NO_TOUCH && (Lt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch), Tt = yt && ht, Mt = yt && lt, zt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI), Ct = function() {
        var t1 = false;
        try {
            var i1 = Object.defineProperty({
            }, "passive", {
                get: function() {
                    t1 = true;
                }
            });
            window.addEventListener("testPassiveEventSupport", a, i1), window.removeEventListener("testPassiveEventSupport", a, i1);
        } catch (t3) {
        }
        return t1;
    }(), St = !!document.createElement("canvas").getContext, Zt = !(!document.createElementNS || !J("svg").createSVGRect), Et = !Zt && function() {
        try {
            var t1 = document.createElement("div");
            t1.innerHTML = '<v:shape adj="1"/>';
            var i1 = t1.firstChild;
            return i1.style.behavior = "url(#default#VML)", i1 && "object" == typeof i1.adj;
        } catch (t3) {
            return false;
        }
    }();
    function kt(t1) {
        return 0 <= navigator.userAgent.toLowerCase().indexOf(t1);
    }
    var Bt = {
        ie: tt,
        ielt9: it,
        edge: et,
        webkit: nt,
        android: ot,
        android23: st,
        androidStock: at,
        opera: ht,
        chrome: ut,
        gecko: lt,
        safari: ct,
        phantom: _t,
        opera12: dt,
        win: pt,
        ie3d: mt,
        webkit3d: ft,
        gecko3d: gt,
        any3d: vt,
        mobile: yt,
        mobileWebkit: xt,
        mobileWebkit3d: wt,
        msPointer: Pt,
        pointer: Lt,
        touch: bt,
        mobileOpera: Tt,
        mobileGecko: Mt,
        retina: zt,
        passiveEvents: Ct,
        canvas: St,
        svg: Zt,
        vml: Et
    }, At = Pt ? "MSPointerDown" : "pointerdown", It = Pt ? "MSPointerMove" : "pointermove", Ot = Pt ? "MSPointerUp" : "pointerup", Rt = Pt ? "MSPointerCancel" : "pointercancel", Nt = {
    }, Dt = false;
    function jt(t1, i1, e1, n3) {
        function o3(t3) {
            Ut(t3, r4);
        }
        var s3, r4, a2, h1, u1, l1, c1, _1;
        function d1(t3) {
            t3.pointerType === (t3.MSPOINTER_TYPE_MOUSE || "mouse") && 0 === t3.buttons || Ut(t3, h1);
        }
        return "touchstart" === i1 ? (u1 = t1, l1 = e1, c1 = n3, _1 = p(function(t3) {
            t3.MSPOINTER_TYPE_TOUCH && t3.pointerType === t3.MSPOINTER_TYPE_TOUCH && Ri(t3), Ut(t3, l1);
        }), u1["_leaflet_touchstart" + c1] = _1, u1.addEventListener(At, _1, false), Dt || (document.addEventListener(At, Wt, true), document.addEventListener(It, Ht, true), document.addEventListener(Ot, Ft, true), document.addEventListener(Rt, Ft, true), Dt = true)) : "touchmove" === i1 ? (h1 = e1, (a2 = t1)["_leaflet_touchmove" + n3] = d1, a2.addEventListener(It, d1, false)) : "touchend" === i1 && (r4 = e1, (s3 = t1)["_leaflet_touchend" + n3] = o3, s3.addEventListener(Ot, o3, false), s3.addEventListener(Rt, o3, false)), this;
    }
    function Wt(t1) {
        Nt[t1.pointerId] = t1;
    }
    function Ht(t1) {
        Nt[t1.pointerId] && (Nt[t1.pointerId] = t1);
    }
    function Ft(t1) {
        delete Nt[t1.pointerId];
    }
    function Ut(t1, i1) {
        for(var e1 in t1.touches = [], Nt)t1.touches.push(Nt[e1]);
        t1.changedTouches = [
            t1
        ], i1(t1);
    }
    var Vt = Pt ? "MSPointerDown" : Lt ? "pointerdown" : "touchstart", qt = Pt ? "MSPointerUp" : Lt ? "pointerup" : "touchend", Gt = "_leaflet_";
    var Kt, Yt, Xt, Jt, $t, Qt, ti = fi([
        "transform",
        "webkitTransform",
        "OTransform",
        "MozTransform",
        "msTransform"
    ]), ii = fi([
        "webkitTransition",
        "transition",
        "OTransition",
        "MozTransition",
        "msTransition"
    ]), ei = "webkitTransition" === ii || "OTransition" === ii ? ii + "End" : "transitionend";
    function ni(t1) {
        return "string" == typeof t1 ? document.getElementById(t1) : t1;
    }
    function oi(t1, i1) {
        var e1, n3 = t1.style[i1] || t1.currentStyle && t1.currentStyle[i1];
        return n3 && "auto" !== n3 || !document.defaultView || (n3 = (e1 = document.defaultView.getComputedStyle(t1, null)) ? e1[i1] : null), "auto" === n3 ? null : n3;
    }
    function si(t1, i1, e1) {
        var n3 = document.createElement(t1);
        return n3.className = i1 || "", e1 && e1.appendChild(n3), n3;
    }
    function ri(t1) {
        var i1 = t1.parentNode;
        i1 && i1.removeChild(t1);
    }
    function ai(t1) {
        for(; t1.firstChild;)t1.removeChild(t1.firstChild);
    }
    function hi(t1) {
        var i1 = t1.parentNode;
        i1 && i1.lastChild !== t1 && i1.appendChild(t1);
    }
    function ui(t1) {
        var i1 = t1.parentNode;
        i1 && i1.firstChild !== t1 && i1.insertBefore(t1, i1.firstChild);
    }
    function li(t1, i1) {
        if ((void 0) !== t1.classList) return t1.classList.contains(i1);
        var e1 = pi(t1);
        return 0 < e1.length && new RegExp("(^|\\s)" + i1 + "(\\s|$)").test(e1);
    }
    function ci(t1, i1) {
        var e1;
        if ((void 0) !== t1.classList) for(var n3 = l(i1), o3 = 0, s3 = n3.length; o3 < s3; o3++)t1.classList.add(n3[o3]);
        else li(t1, i1) || di(t1, ((e1 = pi(t1)) ? e1 + " " : "") + i1);
    }
    function _i(t1, i1) {
        (void 0) !== t1.classList ? t1.classList.remove(i1) : di(t1, u((" " + pi(t1) + " ").replace(" " + i1 + " ", " ")));
    }
    function di(t1, i1) {
        (void 0) === t1.className.baseVal ? t1.className = i1 : t1.className.baseVal = i1;
    }
    function pi(t1) {
        return t1.correspondingElement && (t1 = t1.correspondingElement), (void 0) === t1.className.baseVal ? t1.className : t1.className.baseVal;
    }
    function mi(t1, i1) {
        "opacity" in t1.style ? t1.style.opacity = i1 : "filter" in t1.style && (function(t3, i3) {
            var e1 = false, n3 = "DXImageTransform.Microsoft.Alpha";
            try {
                e1 = t3.filters.item(n3);
            } catch (t4) {
                if (1 === i3) return;
            }
            i3 = Math.round(100 * i3), e1 ? (e1.Enabled = 100 !== i3, e1.Opacity = i3) : t3.style.filter += " progid:" + n3 + "(opacity=" + i3 + ")";
        })(t1, i1);
    }
    function fi(t1) {
        for(var i1 = document.documentElement.style, e1 = 0; e1 < t1.length; e1++)if (t1[e1] in i1) return t1[e1];
        return false;
    }
    function gi(t1, i1, e1) {
        var n3 = i1 || new k(0, 0);
        t1.style[ti] = (mt ? "translate(" + n3.x + "px," + n3.y + "px)" : "translate3d(" + n3.x + "px," + n3.y + "px,0)") + (e1 ? " scale(" + e1 + ")" : "");
    }
    function vi(t1, i1) {
        t1._leaflet_pos = i1, vt ? gi(t1, i1) : (t1.style.left = i1.x + "px", t1.style.top = i1.y + "px");
    }
    function yi(t1) {
        return t1._leaflet_pos || new k(0, 0);
    }
    function xi() {
        zi(window, "dragstart", Ri);
    }
    function wi() {
        Si(window, "dragstart", Ri);
    }
    function Pi(t1) {
        for(; -1 === t1.tabIndex;)t1 = t1.parentNode;
        t1.style && (Li(), Qt = ($t = t1).style.outline, t1.style.outline = "none", zi(window, "keydown", Li));
    }
    function Li() {
        $t && ($t.style.outline = Qt, Qt = $t = void 0, Si(window, "keydown", Li));
    }
    function bi(t1) {
        for(; !((t1 = t1.parentNode).offsetWidth && t1.offsetHeight || t1 === document.body););
        return t1;
    }
    function Ti(t1) {
        var i1 = t1.getBoundingClientRect();
        return {
            x: i1.width / t1.offsetWidth || 1,
            y: i1.height / t1.offsetHeight || 1,
            boundingClientRect: i1
        };
    }
    Jt = "onselectstart" in document ? (Xt = function() {
        zi(window, "selectstart", Ri);
    }, function() {
        Si(window, "selectstart", Ri);
    }) : (Yt = fi([
        "userSelect",
        "WebkitUserSelect",
        "OUserSelect",
        "MozUserSelect",
        "msUserSelect"
    ]), Xt = function() {
        var t1;
        Yt && (t1 = document.documentElement.style, Kt = t1[Yt], t1[Yt] = "none");
    }, function() {
        Yt && (document.documentElement.style[Yt] = Kt, Kt = void 0);
    });
    var Mi = {
        TRANSFORM: ti,
        TRANSITION: ii,
        TRANSITION_END: ei,
        get: ni,
        getStyle: oi,
        create: si,
        remove: ri,
        empty: ai,
        toFront: hi,
        toBack: ui,
        hasClass: li,
        addClass: ci,
        removeClass: _i,
        setClass: di,
        getClass: pi,
        setOpacity: mi,
        testProp: fi,
        setTransform: gi,
        setPosition: vi,
        getPosition: yi,
        disableTextSelection: Xt,
        enableTextSelection: Jt,
        disableImageDrag: xi,
        enableImageDrag: wi,
        preventOutline: Pi,
        restoreOutline: Li,
        getSizedParentNode: bi,
        getScale: Ti
    };
    function zi(t1, i1, e1, n3) {
        if ("object" == typeof i1) for(var o3 in i1)ki(t1, o3, i1[o3], e1);
        else for(var s3 = 0, r4 = (i1 = l(i1)).length; s3 < r4; s3++)ki(t1, i1[s3], e1, n3);
        return this;
    }
    var Ci = "_leaflet_events";
    function Si(t1, i1, e1, n3) {
        if ("object" == typeof i1) for(var o3 in i1)Bi(t1, o3, i1[o3], e1);
        else if (i1) for(var s3 = 0, r4 = (i1 = l(i1)).length; s3 < r4; s3++)Bi(t1, i1[s3], e1, n3);
        else {
            for(var a2 in t1[Ci])Bi(t1, a2, t1[Ci][a2]);
            delete t1[Ci];
        }
        return this;
    }
    function Zi() {
        return Lt && !et && !ct;
    }
    var Ei = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
    };
    function ki(i1, t1, e1, n3) {
        var o3 = t1 + m(e1) + (n3 ? "_" + m(n3) : "");
        if (i1[Ci] && i1[Ci][o3]) return this;
        var s3, r4, a3, h1, u1, l1, c1 = function(t3) {
            return e1.call(n3 || i1, t3 || window.event);
        }, _1 = c1;
        function d1(t3) {
            if (Lt) {
                if (!t3.isPrimary) return;
                if ("mouse" === t3.pointerType) return;
            } else if (1 < t3.touches.length) return;
            var i3 = Date.now(), e2 = i3 - (h1 || i3);
            u1 = t3.touches ? t3.touches[0] : t3, l1 = 0 < e2 && e2 <= 250, h1 = i3;
        }
        function p1(t3) {
            if (l1 && !u1.cancelBubble) {
                if (Lt) {
                    if ("mouse" === t3.pointerType) return;
                    var i3, e2, n4 = {
                    };
                    for(e2 in u1)i3 = u1[e2], n4[e2] = i3 && i3.bind ? i3.bind(u1) : i3;
                    u1 = n4;
                }
                u1.type = "dblclick", u1.button = 0, r4(u1), h1 = null;
            }
        }
        Lt && 0 === t1.indexOf("touch") ? jt(i1, t1, c1, o3) : bt && "dblclick" === t1 && !Zi() ? (r4 = c1, l1 = false, (s3 = i1)[Gt + Vt + (a3 = o3)] = d1, s3[Gt + qt + a3] = p1, s3[Gt + "dblclick" + a3] = r4, s3.addEventListener(Vt, d1, !!Ct && {
            passive: false
        }), s3.addEventListener(qt, p1, !!Ct && {
            passive: false
        }), s3.addEventListener("dblclick", r4, false)) : "addEventListener" in i1 ? "touchstart" === t1 || "touchmove" === t1 || "wheel" === t1 || "mousewheel" === t1 ? i1.addEventListener(Ei[t1] || t1, c1, !!Ct && {
            passive: false
        }) : "mouseenter" === t1 || "mouseleave" === t1 ? (c1 = function(t3) {
            t3 = t3 || window.event, Vi(i1, t3) && _1(t3);
        }, i1.addEventListener(Ei[t1], c1, false)) : i1.addEventListener(t1, _1, false) : "attachEvent" in i1 && i1.attachEvent("on" + t1, c1), i1[Ci] = i1[Ci] || {
        }, i1[Ci][o3] = c1;
    }
    function Bi(t1, i1, e1, n3) {
        var o3, s3, r4, a3, h1, u1, l1, c1, _1 = i1 + m(e1) + (n3 ? "_" + m(n3) : ""), d1 = t1[Ci] && t1[Ci][_1];
        if (!d1) return this;
        Lt && 0 === i1.indexOf("touch") ? (c1 = (u1 = t1)["_leaflet_" + (l1 = i1) + _1], "touchstart" === l1 ? u1.removeEventListener(At, c1, false) : "touchmove" === l1 ? u1.removeEventListener(It, c1, false) : "touchend" === l1 && (u1.removeEventListener(Ot, c1, false), u1.removeEventListener(Rt, c1, false))) : bt && "dblclick" === i1 && !Zi() ? (r4 = (o3 = t1)[Gt + Vt + (s3 = _1)], a3 = o3[Gt + qt + s3], h1 = o3[Gt + "dblclick" + s3], o3.removeEventListener(Vt, r4, !!Ct && {
            passive: false
        }), o3.removeEventListener(qt, a3, !!Ct && {
            passive: false
        }), o3.removeEventListener("dblclick", h1, false)) : "removeEventListener" in t1 ? t1.removeEventListener(Ei[i1] || i1, d1, false) : "detachEvent" in t1 && t1.detachEvent("on" + i1, d1), t1[Ci][_1] = null;
    }
    function Ai(t1) {
        return t1.stopPropagation ? t1.stopPropagation() : t1.originalEvent ? t1.originalEvent._stopped = true : t1.cancelBubble = true, Ui(t1), this;
    }
    function Ii(t1) {
        return ki(t1, "wheel", Ai), this;
    }
    function Oi(t1) {
        return zi(t1, "mousedown touchstart dblclick", Ai), ki(t1, "click", Fi), this;
    }
    function Ri(t1) {
        return t1.preventDefault ? t1.preventDefault() : t1.returnValue = false, this;
    }
    function Ni(t1) {
        return Ri(t1), Ai(t1), this;
    }
    function Di(t1, i1) {
        if (!i1) return new k(t1.clientX, t1.clientY);
        var e1 = Ti(i1), n3 = e1.boundingClientRect;
        return new k((t1.clientX - n3.left) / e1.x - i1.clientLeft, (t1.clientY - n3.top) / e1.y - i1.clientTop);
    }
    var ji = pt && ut ? 2 * window.devicePixelRatio : lt ? window.devicePixelRatio : 1;
    function Wi(t1) {
        return et ? t1.wheelDeltaY / 2 : t1.deltaY && 0 === t1.deltaMode ? -t1.deltaY / ji : t1.deltaY && 1 === t1.deltaMode ? 20 * -t1.deltaY : t1.deltaY && 2 === t1.deltaMode ? 60 * -t1.deltaY : t1.deltaX || t1.deltaZ ? 0 : t1.wheelDelta ? (t1.wheelDeltaY || t1.wheelDelta) / 2 : t1.detail && Math.abs(t1.detail) < 32765 ? 20 * -t1.detail : t1.detail ? t1.detail / -32765 * 60 : 0;
    }
    var Hi = {
    };
    function Fi(t1) {
        Hi[t1.type] = true;
    }
    function Ui(t1) {
        var i1 = Hi[t1.type];
        return Hi[t1.type] = false, i1;
    }
    function Vi(t1, i1) {
        var e1 = i1.relatedTarget;
        if (!e1) return true;
        try {
            for(; e1 && e1 !== t1;)e1 = e1.parentNode;
        } catch (t3) {
            return false;
        }
        return e1 !== t1;
    }
    var qi = {
        on: zi,
        off: Si,
        stopPropagation: Ai,
        disableScrollPropagation: Ii,
        disableClickPropagation: Oi,
        preventDefault: Ri,
        stop: Ni,
        getMousePosition: Di,
        getWheelDelta: Wi,
        fakeStop: Fi,
        skipped: Ui,
        isExternalTarget: Vi,
        addListener: zi,
        removeListener: Si
    }, Gi = E.extend({
        run: function(t1, i1, e1, n3) {
            this.stop(), this._el = t1, this._inProgress = true, this._duration = e1 || 0.25, this._easeOutPower = 1 / Math.max(n3 || 0.5, 0.2), this._startPos = yi(t1), this._offset = i1.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate();
        },
        stop: function() {
            this._inProgress && (this._step(true), this._complete());
        },
        _animate: function() {
            this._animId = M(this._animate, this), this._step();
        },
        _step: function(t1) {
            var i1 = new Date - this._startTime, e1 = 1000 * this._duration;
            i1 < e1 ? this._runFrame(this._easeOut(i1 / e1), t1) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(t1, i1) {
            var e1 = this._startPos.add(this._offset.multiplyBy(t1));
            i1 && e1._round(), vi(this._el, e1), this.fire("step");
        },
        _complete: function() {
            z(this._animId), this._inProgress = false, this.fire("end");
        },
        _easeOut: function(t1) {
            return 1 - Math.pow(1 - t1, this._easeOutPower);
        }
    }), Ki = E.extend({
        options: {
            crs: Y,
            center: void 0,
            zoom: void 0,
            minZoom: void 0,
            maxZoom: void 0,
            layers: [],
            maxBounds: void 0,
            renderer: void 0,
            zoomAnimation: true,
            zoomAnimationThreshold: 4,
            fadeAnimation: true,
            markerZoomAnimation: true,
            transform3DLimit: 8388608,
            zoomSnap: 1,
            zoomDelta: 1,
            trackResize: true
        },
        initialize: function(t1, i1) {
            i1 = c(this, i1), this._handlers = [], this._layers = {
            }, this._zoomBoundLayers = {
            }, this._sizeChanged = true, this._initContainer(t1), this._initLayout(), this._onResize = p(this._onResize, this), this._initEvents(), i1.maxBounds && this.setMaxBounds(i1.maxBounds), (void 0) !== i1.zoom && (this._zoom = this._limitZoom(i1.zoom)), i1.center && (void 0) !== i1.zoom && this.setView(j(i1.center), i1.zoom, {
                reset: true
            }), this.callInitHooks(), this._zoomAnimated = ii && vt && !Tt && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), zi(this._proxy, ei, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        setView: function(t1, i1, e1) {
            if ((i1 = (void 0) === i1 ? this._zoom : this._limitZoom(i1), t1 = this._limitCenter(j(t1), i1, this.options.maxBounds), e1 = e1 || {
            }, this._stop(), this._loaded && !e1.reset && true !== e1) && ((void 0) !== e1.animate && (e1.zoom = h({
                animate: e1.animate
            }, e1.zoom), e1.pan = h({
                animate: e1.animate,
                duration: e1.duration
            }, e1.pan)), this._zoom !== i1 ? this._tryAnimatedZoom && this._tryAnimatedZoom(t1, i1, e1.zoom) : this._tryAnimatedPan(t1, e1.pan))) return clearTimeout(this._sizeTimer), this;
            return this._resetView(t1, i1), this;
        },
        setZoom: function(t1, i1) {
            return this._loaded ? this.setView(this.getCenter(), t1, {
                zoom: i1
            }) : (this._zoom = t1, this);
        },
        zoomIn: function(t1, i1) {
            return t1 = t1 || (vt ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t1, i1);
        },
        zoomOut: function(t1, i1) {
            return t1 = t1 || (vt ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t1, i1);
        },
        setZoomAround: function(t1, i1, e1) {
            var n3 = this.getZoomScale(i1), o3 = this.getSize().divideBy(2), s3 = (t1 instanceof k ? t1 : this.latLngToContainerPoint(t1)).subtract(o3).multiplyBy(1 - 1 / n3), r4 = this.containerPointToLatLng(o3.add(s3));
            return this.setView(r4, i1, {
                zoom: e1
            });
        },
        _getBoundsCenterZoom: function(t1, i1) {
            i1 = i1 || {
            }, t1 = t1.getBounds ? t1.getBounds() : N(t1);
            var e1 = A(i1.paddingTopLeft || i1.padding || [
                0,
                0
            ]), n3 = A(i1.paddingBottomRight || i1.padding || [
                0,
                0
            ]), o3 = this.getBoundsZoom(t1, false, e1.add(n3));
            if ((o3 = "number" == typeof i1.maxZoom ? Math.min(i1.maxZoom, o3) : o3) === 1 / 0) return {
                center: t1.getCenter(),
                zoom: o3
            };
            var s3 = n3.subtract(e1).divideBy(2), r4 = this.project(t1.getSouthWest(), o3), a3 = this.project(t1.getNorthEast(), o3);
            return {
                center: this.unproject(r4.add(a3).divideBy(2).add(s3), o3),
                zoom: o3
            };
        },
        fitBounds: function(t1, i1) {
            if (!(t1 = N(t1)).isValid()) throw new Error("Bounds are not valid.");
            var e1 = this._getBoundsCenterZoom(t1, i1);
            return this.setView(e1.center, e1.zoom, i1);
        },
        fitWorld: function(t1) {
            return this.fitBounds([
                [
                    -90,
                    -180
                ],
                [
                    90,
                    180
                ]
            ], t1);
        },
        panTo: function(t1, i1) {
            return this.setView(t1, this._zoom, {
                pan: i1
            });
        },
        panBy: function(t1, i1) {
            var e1;
            return i1 = i1 || {
            }, (t1 = A(t1).round()).x || t1.y ? (true === i1.animate || this.getSize().contains(t1) ? (this._panAnim || (this._panAnim = new Gi, this._panAnim.on({
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd
            }, this)), i1.noMoveStart || this.fire("movestart"), false !== i1.animate ? (ci(this._mapPane, "leaflet-pan-anim"), e1 = this._getMapPanePos().subtract(t1).round(), this._panAnim.run(this._mapPane, e1, i1.duration || 0.25, i1.easeLinearity)) : (this._rawPanBy(t1), this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t1)), this.getZoom()), this) : this.fire("moveend");
        },
        flyTo: function(s3, r4, t1) {
            if (false === (t1 = t1 || {
            }).animate || !vt) return this.setView(s3, r4, t1);
            this._stop();
            var a3 = this.project(this.getCenter()), h1 = this.project(s3), i1 = this.getSize(), u1 = this._zoom;
            s3 = j(s3), r4 = (void 0) === r4 ? u1 : r4;
            var l1 = Math.max(i1.x, i1.y), n3 = l1 * this.getZoomScale(u1, r4), c1 = h1.distanceTo(a3) || 1, _1 = 1.42, o3 = _1 * _1;
            function e1(t3) {
                var i4 = (n3 * n3 - l1 * l1 + (t3 ? -1 : 1) * o3 * o3 * c1 * c1) / (2 * (t3 ? n3 : l1) * o3 * c1), e3 = Math.sqrt(i4 * i4 + 1) - i4;
                return e3 < 0.000000001 ? -18 : Math.log(e3);
            }
            function d1(t3) {
                return (Math.exp(t3) - Math.exp(-t3)) / 2;
            }
            function p1(t3) {
                return (Math.exp(t3) + Math.exp(-t3)) / 2;
            }
            var m1 = e1(0);
            function f1(t3) {
                var i4;
                return l1 * (p1(m1) * (d1(i4 = m1 + _1 * t3) / p1(i4)) - d1(m1)) / o3;
            }
            var g1 = Date.now(), v1 = (e1(1) - m1) / _1, y1 = t1.duration ? 1000 * t1.duration : 1000 * v1 * 0.8;
            return this._moveStart(true, t1.noMoveStart), (function t3() {
                var i4, e3, n5 = (Date.now() - g1) / y1, o4 = (i4 = n5, (1 - Math.pow(1 - i4, 1.5)) * v1);
                n5 <= 1 ? (this._flyToFrame = M(t3, this), this._move(this.unproject(a3.add(h1.subtract(a3).multiplyBy(f1(o4) / c1)), u1), this.getScaleZoom(l1 / (e3 = o4, l1 * (p1(m1) / p1(m1 + _1 * e3))), u1), {
                    flyTo: true
                })) : this._move(s3, r4)._moveEnd(true);
            }).call(this), this;
        },
        flyToBounds: function(t1, i1) {
            var e1 = this._getBoundsCenterZoom(t1, i1);
            return this.flyTo(e1.center, e1.zoom, i1);
        },
        setMaxBounds: function(t1) {
            return (t1 = N(t1)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t1, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds));
        },
        setMinZoom: function(t1) {
            var i1 = this.options.minZoom;
            return this.options.minZoom = t1, this._loaded && i1 !== t1 && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t1) : this;
        },
        setMaxZoom: function(t1) {
            var i1 = this.options.maxZoom;
            return this.options.maxZoom = t1, this._loaded && i1 !== t1 && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t1) : this;
        },
        panInsideBounds: function(t1, i1) {
            this._enforcingBounds = true;
            var e1 = this.getCenter(), n3 = this._limitCenter(e1, this._zoom, N(t1));
            return e1.equals(n3) || this.panTo(n3, i1), this._enforcingBounds = false, this;
        },
        panInside: function(t1, i1) {
            var e1, n3, o3 = A((i1 = i1 || {
            }).paddingTopLeft || i1.padding || [
                0,
                0
            ]), s3 = A(i1.paddingBottomRight || i1.padding || [
                0,
                0
            ]), r4 = this.getCenter(), a3 = this.project(r4), h1 = this.project(t1), u1 = this.getPixelBounds(), l1 = u1.getSize().divideBy(2), c1 = O([
                u1.min.add(o3),
                u1.max.subtract(s3)
            ]);
            return c1.contains(h1) || (this._enforcingBounds = true, e1 = a3.subtract(h1), n3 = A(h1.x + e1.x, h1.y + e1.y), (h1.x < c1.min.x || h1.x > c1.max.x) && (n3.x = a3.x - e1.x, 0 < e1.x ? n3.x += l1.x - o3.x : n3.x -= l1.x - s3.x), (h1.y < c1.min.y || h1.y > c1.max.y) && (n3.y = a3.y - e1.y, 0 < e1.y ? n3.y += l1.y - o3.y : n3.y -= l1.y - s3.y), this.panTo(this.unproject(n3), i1), this._enforcingBounds = false), this;
        },
        invalidateSize: function(t1) {
            if (!this._loaded) return this;
            t1 = h({
                animate: false,
                pan: true
            }, true === t1 ? {
                animate: true
            } : t1);
            var i1 = this.getSize();
            this._sizeChanged = true, this._lastCenter = null;
            var e1 = this.getSize(), n3 = i1.divideBy(2).round(), o3 = e1.divideBy(2).round(), s3 = n3.subtract(o3);
            return s3.x || s3.y ? (t1.animate && t1.pan ? this.panBy(s3) : (t1.pan && this._rawPanBy(s3), this.fire("move"), t1.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(p(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                oldSize: i1,
                newSize: e1
            })) : this;
        },
        stop: function() {
            return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
        },
        locate: function(t1) {
            if (t1 = this._locateOptions = h({
                timeout: 10000,
                watch: false
            }, t1), !("geolocation" in navigator)) return this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported."
            }), this;
            var i1 = p(this._handleGeolocationResponse, this), e1 = p(this._handleGeolocationError, this);
            return t1.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i1, e1, t1) : navigator.geolocation.getCurrentPosition(i1, e1, t1), this;
        },
        stopLocate: function() {
            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = false), this;
        },
        _handleGeolocationError: function(t1) {
            var i1 = t1.code, e1 = t1.message || (1 === i1 ? "permission denied" : 2 === i1 ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                code: i1,
                message: "Geolocation error: " + e1 + "."
            });
        },
        _handleGeolocationResponse: function(t1) {
            var i1, e1 = new D(t1.coords.latitude, t1.coords.longitude), n3 = e1.toBounds(2 * t1.coords.accuracy), o3 = this._locateOptions;
            o3.setView && (i1 = this.getBoundsZoom(n3), this.setView(e1, o3.maxZoom ? Math.min(i1, o3.maxZoom) : i1));
            var s3 = {
                latlng: e1,
                bounds: n3,
                timestamp: t1.timestamp
            };
            for(var r4 in t1.coords)"number" == typeof t1.coords[r4] && (s3[r4] = t1.coords[r4]);
            this.fire("locationfound", s3);
        },
        addHandler: function(t1, i1) {
            if (!i1) return this;
            var e1 = this[t1] = new i1(this);
            return this._handlers.push(e1), this.options[t1] && e1.enable(), this;
        },
        remove: function() {
            if (this._initEvents(true), this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
            try {
                delete this._container._leaflet_id, delete this._containerId;
            } catch (t1) {
                this._container._leaflet_id = void 0, this._containerId = void 0;
            }
            var t1;
            for(t1 in (void 0) !== this._locationWatchId && this.stopLocate(), this._stop(), ri(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (z(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers)this._layers[t1].remove();
            for(t1 in this._panes)ri(this._panes[t1]);
            return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        createPane: function(t1, i1) {
            var e1 = si("div", "leaflet-pane" + (t1 ? " leaflet-" + t1.replace("Pane", "") + "-pane" : ""), i1 || this._mapPane);
            return t1 && (this._panes[t1] = e1), e1;
        },
        getCenter: function() {
            return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
        },
        getZoom: function() {
            return this._zoom;
        },
        getBounds: function() {
            var t1 = this.getPixelBounds();
            return new R(this.unproject(t1.getBottomLeft()), this.unproject(t1.getTopRight()));
        },
        getMinZoom: function() {
            return (void 0) === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        getMaxZoom: function() {
            return (void 0) === this.options.maxZoom ? (void 0) === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
        },
        getBoundsZoom: function(t1, i1, e1) {
            t1 = N(t1), e1 = A(e1 || [
                0,
                0
            ]);
            var n3 = this.getZoom() || 0, o3 = this.getMinZoom(), s3 = this.getMaxZoom(), r4 = t1.getNorthWest(), a3 = t1.getSouthEast(), h1 = this.getSize().subtract(e1), u1 = O(this.project(a3, n3), this.project(r4, n3)).getSize(), l1 = vt ? this.options.zoomSnap : 1, c1 = h1.x / u1.x, _1 = h1.y / u1.y, d1 = i1 ? Math.max(c1, _1) : Math.min(c1, _1), n3 = this.getScaleZoom(d1, n3);
            return l1 && (n3 = Math.round(n3 / (l1 / 100)) * (l1 / 100), n3 = i1 ? Math.ceil(n3 / l1) * l1 : Math.floor(n3 / l1) * l1), Math.max(o3, Math.min(s3, n3));
        },
        getSize: function() {
            return this._size && !this._sizeChanged || (this._size = new k(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = false), this._size.clone();
        },
        getPixelBounds: function(t1, i1) {
            var e1 = this._getTopLeftPoint(t1, i1);
            return new I(e1, e1.add(this.getSize()));
        },
        getPixelOrigin: function() {
            return this._checkIfLoaded(), this._pixelOrigin;
        },
        getPixelWorldBounds: function(t1) {
            return this.options.crs.getProjectedBounds((void 0) === t1 ? this.getZoom() : t1);
        },
        getPane: function(t1) {
            return "string" == typeof t1 ? this._panes[t1] : t1;
        },
        getPanes: function() {
            return this._panes;
        },
        getContainer: function() {
            return this._container;
        },
        getZoomScale: function(t1, i1) {
            var e1 = this.options.crs;
            return i1 = (void 0) === i1 ? this._zoom : i1, e1.scale(t1) / e1.scale(i1);
        },
        getScaleZoom: function(t1, i1) {
            var e1 = this.options.crs;
            i1 = (void 0) === i1 ? this._zoom : i1;
            var n3 = e1.zoom(t1 * e1.scale(i1));
            return isNaN(n3) ? 1 / 0 : n3;
        },
        project: function(t1, i1) {
            return i1 = (void 0) === i1 ? this._zoom : i1, this.options.crs.latLngToPoint(j(t1), i1);
        },
        unproject: function(t1, i1) {
            return i1 = (void 0) === i1 ? this._zoom : i1, this.options.crs.pointToLatLng(A(t1), i1);
        },
        layerPointToLatLng: function(t1) {
            var i1 = A(t1).add(this.getPixelOrigin());
            return this.unproject(i1);
        },
        latLngToLayerPoint: function(t1) {
            return this.project(j(t1))._round()._subtract(this.getPixelOrigin());
        },
        wrapLatLng: function(t1) {
            return this.options.crs.wrapLatLng(j(t1));
        },
        wrapLatLngBounds: function(t1) {
            return this.options.crs.wrapLatLngBounds(N(t1));
        },
        distance: function(t1, i1) {
            return this.options.crs.distance(j(t1), j(i1));
        },
        containerPointToLayerPoint: function(t1) {
            return A(t1).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint: function(t1) {
            return A(t1).add(this._getMapPanePos());
        },
        containerPointToLatLng: function(t1) {
            var i1 = this.containerPointToLayerPoint(A(t1));
            return this.layerPointToLatLng(i1);
        },
        latLngToContainerPoint: function(t1) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(j(t1)));
        },
        mouseEventToContainerPoint: function(t1) {
            return Di(t1, this._container);
        },
        mouseEventToLayerPoint: function(t1) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t1));
        },
        mouseEventToLatLng: function(t1) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t1));
        },
        _initContainer: function(t1) {
            var i1 = this._container = ni(t1);
            if (!i1) throw new Error("Map container not found.");
            if (i1._leaflet_id) throw new Error("Map container is already initialized.");
            zi(i1, "scroll", this._onScroll, this), this._containerId = m(i1);
        },
        _initLayout: function() {
            var t1 = this._container;
            this._fadeAnimated = this.options.fadeAnimation && vt, ci(t1, "leaflet-container" + (bt ? " leaflet-touch" : "") + (zt ? " leaflet-retina" : "") + (it ? " leaflet-oldie" : "") + (ct ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
            var i1 = oi(t1, "position");
            "absolute" !== i1 && "relative" !== i1 && "fixed" !== i1 && (t1.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
            var t1 = this._panes = {
            };
            this._paneRenderers = {
            }, this._mapPane = this.createPane("mapPane", this._container), vi(this._mapPane, new k(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (ci(t1.markerPane, "leaflet-zoom-hide"), ci(t1.shadowPane, "leaflet-zoom-hide"));
        },
        _resetView: function(t1, i1) {
            vi(this._mapPane, new k(0, 0));
            var e1 = !this._loaded;
            this._loaded = true, i1 = this._limitZoom(i1), this.fire("viewprereset");
            var n3 = this._zoom !== i1;
            this._moveStart(n3, false)._move(t1, i1)._moveEnd(n3), this.fire("viewreset"), e1 && this.fire("load");
        },
        _moveStart: function(t1, i1) {
            return t1 && this.fire("zoomstart"), i1 || this.fire("movestart"), this;
        },
        _move: function(t1, i1, e1) {
            (void 0) === i1 && (i1 = this._zoom);
            var n3 = this._zoom !== i1;
            return this._zoom = i1, this._lastCenter = t1, this._pixelOrigin = this._getNewPixelOrigin(t1), (n3 || e1 && e1.pinch) && this.fire("zoom", e1), this.fire("move", e1);
        },
        _moveEnd: function(t1) {
            return t1 && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function() {
            return z(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(t1) {
            vi(this._mapPane, this._getMapPanePos().subtract(t1));
        },
        _getZoomSpan: function() {
            return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function() {
            this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function() {
            if (!this._loaded) throw new Error("Set map center and zoom first.");
        },
        _initEvents: function(t1) {
            this._targets = {
            };
            var i1 = t1 ? Si : zi;
            i1((this._targets[m(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && i1(window, "resize", this._onResize, this), vt && this.options.transform3DLimit && (t1 ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
            z(this._resizeRequest), this._resizeRequest = M(function() {
                this.invalidateSize({
                    debounceMoveend: true
                });
            }, this);
        },
        _onScroll: function() {
            this._container.scrollTop = 0, this._container.scrollLeft = 0;
        },
        _onMoveEnd: function() {
            var t1 = this._getMapPanePos();
            Math.max(Math.abs(t1.x), Math.abs(t1.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function(t1, i1) {
            for(var e1, n3 = [], o3 = "mouseout" === i1 || "mouseover" === i1, s3 = t1.target || t1.srcElement, r4 = false; s3;){
                if ((e1 = this._targets[m(s3)]) && ("click" === i1 || "preclick" === i1) && !t1._simulated && this._draggableMoved(e1)) {
                    r4 = true;
                    break;
                }
                if (e1 && e1.listens(i1, true)) {
                    if (o3 && !Vi(s3, t1)) break;
                    if (n3.push(e1), o3) break;
                }
                if (s3 === this._container) break;
                s3 = s3.parentNode;
            }
            return n3.length || r4 || o3 || !Vi(s3, t1) || (n3 = [
                this
            ]), n3;
        },
        _handleDOMEvent: function(t1) {
            var i1;
            this._loaded && !Ui(t1) && ("mousedown" !== (i1 = t1.type) && "keypress" !== i1 && "keyup" !== i1 && "keydown" !== i1 || Pi(t1.target || t1.srcElement), this._fireDOMEvent(t1, i1));
        },
        _mouseEvents: [
            "click",
            "dblclick",
            "mouseover",
            "mouseout",
            "contextmenu"
        ],
        _fireDOMEvent: function(t1, i1, e1) {
            var n3;
            if ("click" === t1.type && ((n3 = h({
            }, t1)).type = "preclick", this._fireDOMEvent(n3, n3.type, e1)), !t1._stopped && (e1 = (e1 || []).concat(this._findEventTargets(t1, i1))).length) {
                var o3 = e1[0];
                "contextmenu" === i1 && o3.listens(i1, true) && Ri(t1);
                var s3, r4 = {
                    originalEvent: t1
                };
                "keypress" !== t1.type && "keydown" !== t1.type && "keyup" !== t1.type && (s3 = o3.getLatLng && (!o3._radius || o3._radius <= 10), r4.containerPoint = s3 ? this.latLngToContainerPoint(o3.getLatLng()) : this.mouseEventToContainerPoint(t1), r4.layerPoint = this.containerPointToLayerPoint(r4.containerPoint), r4.latlng = s3 ? o3.getLatLng() : this.layerPointToLatLng(r4.layerPoint));
                for(var a3 = 0; a3 < e1.length; a3++)if (e1[a3].fire(i1, r4, true), r4.originalEvent._stopped || false === e1[a3].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, i1)) return;
            }
        },
        _draggableMoved: function(t1) {
            return (t1 = t1.dragging && t1.dragging.enabled() ? t1 : this).dragging && t1.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers: function() {
            for(var t1 = 0, i1 = this._handlers.length; t1 < i1; t1++)this._handlers[t1].disable();
        },
        whenReady: function(t1, i1) {
            return this._loaded ? t1.call(i1 || this, {
                target: this
            }) : this.on("load", t1, i1), this;
        },
        _getMapPanePos: function() {
            return yi(this._mapPane) || new k(0, 0);
        },
        _moved: function() {
            var t1 = this._getMapPanePos();
            return t1 && !t1.equals([
                0,
                0
            ]);
        },
        _getTopLeftPoint: function(t1, i1) {
            return (t1 && (void 0) !== i1 ? this._getNewPixelOrigin(t1, i1) : this.getPixelOrigin()).subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function(t1, i1) {
            var e1 = this.getSize()._divideBy(2);
            return this.project(t1, i1)._subtract(e1)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function(t1, i1, e1) {
            var n3 = this._getNewPixelOrigin(e1, i1);
            return this.project(t1, i1)._subtract(n3);
        },
        _latLngBoundsToNewLayerBounds: function(t1, i1, e1) {
            var n3 = this._getNewPixelOrigin(e1, i1);
            return O([
                this.project(t1.getSouthWest(), i1)._subtract(n3),
                this.project(t1.getNorthWest(), i1)._subtract(n3),
                this.project(t1.getSouthEast(), i1)._subtract(n3),
                this.project(t1.getNorthEast(), i1)._subtract(n3)
            ]);
        },
        _getCenterLayerPoint: function() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset: function(t1) {
            return this.latLngToLayerPoint(t1).subtract(this._getCenterLayerPoint());
        },
        _limitCenter: function(t1, i1, e1) {
            if (!e1) return t1;
            var n3 = this.project(t1, i1), o4 = this.getSize().divideBy(2), s4 = new I(n3.subtract(o4), n3.add(o4)), r5 = this._getBoundsOffset(s4, e1, i1);
            return r5.round().equals([
                0,
                0
            ]) ? t1 : this.unproject(n3.add(r5), i1);
        },
        _limitOffset: function(t1, i1) {
            if (!i1) return t1;
            var e1 = this.getPixelBounds(), n3 = new I(e1.min.add(t1), e1.max.add(t1));
            return t1.add(this._getBoundsOffset(n3, i1));
        },
        _getBoundsOffset: function(t1, i1, e1) {
            var n3 = O(this.project(i1.getNorthEast(), e1), this.project(i1.getSouthWest(), e1)), o4 = n3.min.subtract(t1.min), s4 = n3.max.subtract(t1.max);
            return new k(this._rebound(o4.x, -s4.x), this._rebound(o4.y, -s4.y));
        },
        _rebound: function(t1, i1) {
            return 0 < t1 + i1 ? Math.round(t1 - i1) / 2 : Math.max(0, Math.ceil(t1)) - Math.max(0, Math.floor(i1));
        },
        _limitZoom: function(t1) {
            var i1 = this.getMinZoom(), e1 = this.getMaxZoom(), n3 = vt ? this.options.zoomSnap : 1;
            return n3 && (t1 = Math.round(t1 / n3) * n3), Math.max(i1, Math.min(e1, t1));
        },
        _onPanTransitionStep: function() {
            this.fire("move");
        },
        _onPanTransitionEnd: function() {
            _i(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(t1, i1) {
            var e1 = this._getCenterOffset(t1)._trunc();
            return !(true !== (i1 && i1.animate) && !this.getSize().contains(e1)) && (this.panBy(e1, i1), true);
        },
        _createAnimProxy: function() {
            var t1 = this._proxy = si("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(t1), this.on("zoomanim", function(t3) {
                var i1 = ti, e1 = this._proxy.style[i1];
                gi(this._proxy, this.project(t3.center, t3.zoom), this.getZoomScale(t3.zoom, 1)), e1 === this._proxy.style[i1] && this._animatingZoom && this._onZoomTransitionEnd();
            }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
            ri(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
            var t1 = this.getCenter(), i1 = this.getZoom();
            gi(this._proxy, this.project(t1, i1), this.getZoomScale(i1, 1));
        },
        _catchTransitionEnd: function(t1) {
            this._animatingZoom && 0 <= t1.propertyName.indexOf("transform") && this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function() {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        },
        _tryAnimatedZoom: function(t1, i1, e1) {
            if (this._animatingZoom) return true;
            if (e1 = e1 || {
            }, !this._zoomAnimated || false === e1.animate || this._nothingToAnimate() || Math.abs(i1 - this._zoom) > this.options.zoomAnimationThreshold) return false;
            var n3 = this.getZoomScale(i1), o4 = this._getCenterOffset(t1)._divideBy(1 - 1 / n3);
            return !(true !== e1.animate && !this.getSize().contains(o4)) && (M(function() {
                this._moveStart(true, false)._animateZoom(t1, i1, true);
            }, this), true);
        },
        _animateZoom: function(t1, i1, e1, n3) {
            this._mapPane && (e1 && (this._animatingZoom = true, this._animateToCenter = t1, this._animateToZoom = i1, ci(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                center: t1,
                zoom: i1,
                noUpdate: n3
            }), setTimeout(p(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
            this._animatingZoom && (this._mapPane && _i(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = false, this._move(this._animateToCenter, this._animateToZoom), M(function() {
                this._moveEnd(true);
            }, this));
        }
    });
    function Yi(t1) {
        return new Xi(t1);
    }
    var Xi = S.extend({
        options: {
            position: "topright"
        },
        initialize: function(t1) {
            c(this, t1);
        },
        getPosition: function() {
            return this.options.position;
        },
        setPosition: function(t1) {
            var i1 = this._map;
            return i1 && i1.removeControl(this), this.options.position = t1, i1 && i1.addControl(this), this;
        },
        getContainer: function() {
            return this._container;
        },
        addTo: function(t1) {
            this.remove(), this._map = t1;
            var i1 = this._container = this.onAdd(t1), e1 = this.getPosition(), n3 = t1._controlCorners[e1];
            return ci(i1, "leaflet-control"), -1 !== e1.indexOf("bottom") ? n3.insertBefore(i1, n3.firstChild) : n3.appendChild(i1), this._map.on("unload", this.remove, this), this;
        },
        remove: function() {
            return this._map && (ri(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this;
        },
        _refocusOnMap: function(t1) {
            this._map && t1 && 0 < t1.screenX && 0 < t1.screenY && this._map.getContainer().focus();
        }
    });
    Ki.include({
        addControl: function(t1) {
            return t1.addTo(this), this;
        },
        removeControl: function(t1) {
            return t1.remove(), this;
        },
        _initControlPos: function() {
            var n3 = this._controlCorners = {
            }, o4 = "leaflet-", s4 = this._controlContainer = si("div", o4 + "control-container", this._container);
            function t1(t3, i1) {
                var e1 = o4 + t3 + " " + o4 + i1;
                n3[t3 + i1] = si("div", e1, s4);
            }
            t1("top", "left"), t1("top", "right"), t1("bottom", "left"), t1("bottom", "right");
        },
        _clearControlPos: function() {
            for(var t1 in this._controlCorners)ri(this._controlCorners[t1]);
            ri(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
    });
    var Ji = Xi.extend({
        options: {
            collapsed: true,
            position: "topright",
            autoZIndex: true,
            hideSingleBase: false,
            sortLayers: false,
            sortFunction: function(t1, i1, e1, n3) {
                return e1 < n3 ? -1 : n3 < e1 ? 1 : 0;
            }
        },
        initialize: function(t1, i1, e1) {
            for(var n3 in c(this, e1), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = false, t1)this._addLayer(t1[n3], n3);
            for(n3 in i1)this._addLayer(i1[n3], n3, true);
        },
        onAdd: function(t1) {
            this._initLayout(), this._update(), (this._map = t1).on("zoomend", this._checkDisabledLayers, this);
            for(var i1 = 0; i1 < this._layers.length; i1++)this._layers[i1].layer.on("add remove", this._onLayerChange, this);
            return this._container;
        },
        addTo: function(t1) {
            return Xi.prototype.addTo.call(this, t1), this._expandIfNotCollapsed();
        },
        onRemove: function() {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for(var t1 = 0; t1 < this._layers.length; t1++)this._layers[t1].layer.off("add remove", this._onLayerChange, this);
        },
        addBaseLayer: function(t1, i1) {
            return this._addLayer(t1, i1), this._map ? this._update() : this;
        },
        addOverlay: function(t1, i1) {
            return this._addLayer(t1, i1, true), this._map ? this._update() : this;
        },
        removeLayer: function(t1) {
            t1.off("add remove", this._onLayerChange, this);
            var i1 = this._getLayer(m(t1));
            return i1 && this._layers.splice(this._layers.indexOf(i1), 1), this._map ? this._update() : this;
        },
        expand: function() {
            ci(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
            var t1 = this._map.getSize().y - (this._container.offsetTop + 50);
            return t1 < this._section.clientHeight ? (ci(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t1 + "px") : _i(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        collapse: function() {
            return _i(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
            var t1 = "leaflet-control-layers", i1 = this._container = si("div", t1), e1 = this.options.collapsed;
            i1.setAttribute("aria-haspopup", true), Oi(i1), Ii(i1);
            var n3 = this._section = si("section", t1 + "-list");
            e1 && (this._map.on("click", this.collapse, this), ot || zi(i1, {
                mouseenter: this.expand,
                mouseleave: this.collapse
            }, this));
            var o4 = this._layersLink = si("a", t1 + "-toggle", i1);
            o4.href = "#", o4.title = "Layers", bt ? (zi(o4, "click", Ni), zi(o4, "click", this.expand, this)) : zi(o4, "focus", this.expand, this), e1 || this.expand(), this._baseLayersList = si("div", t1 + "-base", n3), this._separator = si("div", t1 + "-separator", n3), this._overlaysList = si("div", t1 + "-overlays", n3), i1.appendChild(n3);
        },
        _getLayer: function(t1) {
            for(var i1 = 0; i1 < this._layers.length; i1++)if (this._layers[i1] && m(this._layers[i1].layer) === t1) return this._layers[i1];
        },
        _addLayer: function(t1, i1, e1) {
            this._map && t1.on("add remove", this._onLayerChange, this), this._layers.push({
                layer: t1,
                name: i1,
                overlay: e1
            }), this.options.sortLayers && this._layers.sort(p(function(t3, i4) {
                return this.options.sortFunction(t3.layer, i4.layer, t3.name, i4.name);
            }, this)), this.options.autoZIndex && t1.setZIndex && (this._lastZIndex++, t1.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
            if (!this._container) return this;
            ai(this._baseLayersList), ai(this._overlaysList), this._layerControlInputs = [];
            for(var t1, i1, e1, n3 = 0, o4 = 0; o4 < this._layers.length; o4++)e1 = this._layers[o4], this._addItem(e1), i1 = i1 || e1.overlay, t1 = t1 || !e1.overlay, n3 += e1.overlay ? 0 : 1;
            return this.options.hideSingleBase && (t1 = t1 && 1 < n3, this._baseLayersList.style.display = t1 ? "" : "none"), this._separator.style.display = i1 && t1 ? "" : "none", this;
        },
        _onLayerChange: function(t1) {
            this._handlingClick || this._update();
            var i1 = this._getLayer(m(t1.target)), e1 = i1.overlay ? "add" === t1.type ? "overlayadd" : "overlayremove" : "add" === t1.type ? "baselayerchange" : null;
            e1 && this._map.fire(e1, i1);
        },
        _createRadioElement: function(t1, i1) {
            var e1 = '<input type="radio" class="leaflet-control-layers-selector" name="' + t1 + '"' + (i1 ? ' checked="checked"' : "") + "/>", n3 = document.createElement("div");
            return n3.innerHTML = e1, n3.firstChild;
        },
        _addItem: function(t1) {
            var i1, e1 = document.createElement("label"), n3 = this._map.hasLayer(t1.layer);
            t1.overlay ? ((i1 = document.createElement("input")).type = "checkbox", i1.className = "leaflet-control-layers-selector", i1.defaultChecked = n3) : i1 = this._createRadioElement("leaflet-base-layers_" + m(this), n3), this._layerControlInputs.push(i1), i1.layerId = m(t1.layer), zi(i1, "click", this._onInputClick, this);
            var o4 = document.createElement("span");
            o4.innerHTML = " " + t1.name;
            var s4 = document.createElement("div");
            return e1.appendChild(s4), s4.appendChild(i1), s4.appendChild(o4), (t1.overlay ? this._overlaysList : this._baseLayersList).appendChild(e1), this._checkDisabledLayers(), e1;
        },
        _onInputClick: function() {
            var t1, i1, e1 = this._layerControlInputs, n3 = [], o4 = [];
            this._handlingClick = true;
            for(var s4 = e1.length - 1; 0 <= s4; s4--)t1 = e1[s4], i1 = this._getLayer(t1.layerId).layer, t1.checked ? n3.push(i1) : t1.checked || o4.push(i1);
            for(s4 = 0; s4 < o4.length; s4++)this._map.hasLayer(o4[s4]) && this._map.removeLayer(o4[s4]);
            for(s4 = 0; s4 < n3.length; s4++)this._map.hasLayer(n3[s4]) || this._map.addLayer(n3[s4]);
            this._handlingClick = false, this._refocusOnMap();
        },
        _checkDisabledLayers: function() {
            for(var t1, i1, e1 = this._layerControlInputs, n3 = this._map.getZoom(), o4 = e1.length - 1; 0 <= o4; o4--)t1 = e1[o4], i1 = this._getLayer(t1.layerId).layer, t1.disabled = (void 0) !== i1.options.minZoom && n3 < i1.options.minZoom || (void 0) !== i1.options.maxZoom && n3 > i1.options.maxZoom;
        },
        _expandIfNotCollapsed: function() {
            return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expand: function() {
            return this.expand();
        },
        _collapse: function() {
            return this.collapse();
        }
    }), $i = Xi.extend({
        options: {
            position: "topleft",
            zoomInText: "+",
            zoomInTitle: "Zoom in",
            zoomOutText: "&#x2212;",
            zoomOutTitle: "Zoom out"
        },
        onAdd: function(t1) {
            var i1 = "leaflet-control-zoom", e1 = si("div", i1 + " leaflet-bar"), n3 = this.options;
            return this._zoomInButton = this._createButton(n3.zoomInText, n3.zoomInTitle, i1 + "-in", e1, this._zoomIn), this._zoomOutButton = this._createButton(n3.zoomOutText, n3.zoomOutTitle, i1 + "-out", e1, this._zoomOut), this._updateDisabled(), t1.on("zoomend zoomlevelschange", this._updateDisabled, this), e1;
        },
        onRemove: function(t1) {
            t1.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function() {
            return this._disabled = true, this._updateDisabled(), this;
        },
        enable: function() {
            return this._disabled = false, this._updateDisabled(), this;
        },
        _zoomIn: function(t1) {
            !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t1.shiftKey ? 3 : 1));
        },
        _zoomOut: function(t1) {
            !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t1.shiftKey ? 3 : 1));
        },
        _createButton: function(t1, i1, e1, n3, o4) {
            var s4 = si("a", e1, n3);
            return s4.innerHTML = t1, s4.href = "#", s4.title = i1, s4.setAttribute("role", "button"), s4.setAttribute("aria-label", i1), Oi(s4), zi(s4, "click", Ni), zi(s4, "click", o4, this), zi(s4, "click", this._refocusOnMap, this), s4;
        },
        _updateDisabled: function() {
            var t1 = this._map, i1 = "leaflet-disabled";
            _i(this._zoomInButton, i1), _i(this._zoomOutButton, i1), !this._disabled && t1._zoom !== t1.getMinZoom() || ci(this._zoomOutButton, i1), !this._disabled && t1._zoom !== t1.getMaxZoom() || ci(this._zoomInButton, i1);
        }
    });
    Ki.mergeOptions({
        zoomControl: true
    }), Ki.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new $i, this.addControl(this.zoomControl));
    });
    var Qi = Xi.extend({
        options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: true,
            imperial: true
        },
        onAdd: function(t1) {
            var i1 = "leaflet-control-scale", e1 = si("div", i1), n3 = this.options;
            return this._addScales(n3, i1 + "-line", e1), t1.on(n3.updateWhenIdle ? "moveend" : "move", this._update, this), t1.whenReady(this._update, this), e1;
        },
        onRemove: function(t1) {
            t1.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(t1, i1, e1) {
            t1.metric && (this._mScale = si("div", i1, e1)), t1.imperial && (this._iScale = si("div", i1, e1));
        },
        _update: function() {
            var t1 = this._map, i1 = t1.getSize().y / 2, e1 = t1.distance(t1.containerPointToLatLng([
                0,
                i1
            ]), t1.containerPointToLatLng([
                this.options.maxWidth,
                i1
            ]));
            this._updateScales(e1);
        },
        _updateScales: function(t1) {
            this.options.metric && t1 && this._updateMetric(t1), this.options.imperial && t1 && this._updateImperial(t1);
        },
        _updateMetric: function(t1) {
            var i1 = this._getRoundNum(t1), e1 = i1 < 1000 ? i1 + " m" : i1 / 1000 + " km";
            this._updateScale(this._mScale, e1, i1 / t1);
        },
        _updateImperial: function(t1) {
            var i1, e1, n3, o4 = 3.2808399 * t1;
            5280 < o4 ? (i1 = o4 / 5280, e1 = this._getRoundNum(i1), this._updateScale(this._iScale, e1 + " mi", e1 / i1)) : (n3 = this._getRoundNum(o4), this._updateScale(this._iScale, n3 + " ft", n3 / o4));
        },
        _updateScale: function(t1, i1, e1) {
            t1.style.width = Math.round(this.options.maxWidth * e1) + "px", t1.innerHTML = i1;
        },
        _getRoundNum: function(t1) {
            var i1 = Math.pow(10, (Math.floor(t1) + "").length - 1), e1 = t1 / i1;
            return i1 * (e1 = 10 <= e1 ? 10 : 5 <= e1 ? 5 : 3 <= e1 ? 3 : 2 <= e1 ? 2 : 1);
        }
    }), te = Xi.extend({
        options: {
            position: "bottomright",
            prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
        },
        initialize: function(t1) {
            c(this, t1), this._attributions = {
            };
        },
        onAdd: function(t1) {
            for(var i1 in (t1.attributionControl = this)._container = si("div", "leaflet-control-attribution"), Oi(this._container), t1._layers)t1._layers[i1].getAttribution && this.addAttribution(t1._layers[i1].getAttribution());
            return this._update(), this._container;
        },
        setPrefix: function(t1) {
            return this.options.prefix = t1, this._update(), this;
        },
        addAttribution: function(t1) {
            return t1 && (this._attributions[t1] || (this._attributions[t1] = 0), this._attributions[t1]++, this._update()), this;
        },
        removeAttribution: function(t1) {
            return t1 && this._attributions[t1] && (this._attributions[t1]--, this._update()), this;
        },
        _update: function() {
            if (this._map) {
                var t1 = [];
                for(var i1 in this._attributions)this._attributions[i1] && t1.push(i1);
                var e1 = [];
                this.options.prefix && e1.push(this.options.prefix), t1.length && e1.push(t1.join(", ")), this._container.innerHTML = e1.join(" | ");
            }
        }
    });
    Ki.mergeOptions({
        attributionControl: true
    }), Ki.addInitHook(function() {
        this.options.attributionControl && (new te).addTo(this);
    });
    Xi.Layers = Ji, Xi.Zoom = $i, Xi.Scale = Qi, Xi.Attribution = te, Yi.layers = function(t3, i4, e3) {
        return new Ji(t3, i4, e3);
    }, Yi.zoom = function(t3) {
        return new $i(t3);
    }, Yi.scale = function(t3) {
        return new Qi(t3);
    }, Yi.attribution = function(t3) {
        return new te(t3);
    };
    var ie = S.extend({
        initialize: function(t3) {
            this._map = t3;
        },
        enable: function() {
            return this._enabled || (this._enabled = true, this.addHooks()), this;
        },
        disable: function() {
            return this._enabled && (this._enabled = false, this.removeHooks()), this;
        },
        enabled: function() {
            return !!this._enabled;
        }
    });
    ie.addTo = function(t3, i4) {
        return t3.addHandler(i4, this), this;
    };
    var ee, ne = {
        Events: Z
    }, oe = bt ? "touchstart mousedown" : "mousedown", se = {
        mousedown: "mouseup",
        touchstart: "touchend",
        pointerdown: "touchend",
        MSPointerDown: "touchend"
    }, re = {
        mousedown: "mousemove",
        touchstart: "touchmove",
        pointerdown: "touchmove",
        MSPointerDown: "touchmove"
    }, ae = E.extend({
        options: {
            clickTolerance: 3
        },
        initialize: function(t3, i4, e3, n3) {
            c(this, n3), this._element = t3, this._dragStartTarget = i4 || t3, this._preventOutline = e3;
        },
        enable: function() {
            this._enabled || (zi(this._dragStartTarget, oe, this._onDown, this), this._enabled = true);
        },
        disable: function() {
            this._enabled && (ae._dragging === this && this.finishDrag(), Si(this._dragStartTarget, oe, this._onDown, this), this._enabled = false, this._moved = false);
        },
        _onDown: function(t3) {
            var i4, e3;
            !t3._simulated && this._enabled && (this._moved = false, li(this._element, "leaflet-zoom-anim") || ae._dragging || t3.shiftKey || 1 !== t3.which && 1 !== t3.button && !t3.touches || ((ae._dragging = this)._preventOutline && Pi(this._element), xi(), Xt(), this._moving || (this.fire("down"), i4 = t3.touches ? t3.touches[0] : t3, e3 = bi(this._element), this._startPoint = new k(i4.clientX, i4.clientY), this._parentScale = Ti(e3), zi(document, re[t3.type], this._onMove, this), zi(document, se[t3.type], this._onUp, this))));
        },
        _onMove: function(t3) {
            var i4, e3;
            !t3._simulated && this._enabled && (t3.touches && 1 < t3.touches.length ? this._moved = true : ((e3 = new k((i4 = t3.touches && 1 === t3.touches.length ? t3.touches[0] : t3).clientX, i4.clientY)._subtract(this._startPoint)).x || e3.y) && (Math.abs(e3.x) + Math.abs(e3.y) < this.options.clickTolerance || (e3.x /= this._parentScale.x, e3.y /= this._parentScale.y, Ri(t3), this._moved || (this.fire("dragstart"), this._moved = true, this._startPos = yi(this._element).subtract(e3), ci(document.body, "leaflet-dragging"), this._lastTarget = t3.target || t3.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), ci(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e3), this._moving = true, z(this._animRequest), this._lastEvent = t3, this._animRequest = M(this._updatePosition, this, true))));
        },
        _updatePosition: function() {
            var t3 = {
                originalEvent: this._lastEvent
            };
            this.fire("predrag", t3), vi(this._element, this._newPos), this.fire("drag", t3);
        },
        _onUp: function(t3) {
            !t3._simulated && this._enabled && this.finishDrag();
        },
        finishDrag: function() {
            for(var t3 in _i(document.body, "leaflet-dragging"), this._lastTarget && (_i(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), re)Si(document, re[t3], this._onMove, this), Si(document, se[t3], this._onUp, this);
            wi(), Jt(), this._moved && this._moving && (z(this._animRequest), this.fire("dragend", {
                distance: this._newPos.distanceTo(this._startPos)
            })), this._moving = false, ae._dragging = false;
        }
    });
    function he(t3, i4) {
        if (!i4 || !t3.length) return t3.slice();
        var e3 = i4 * i4;
        return t3 = (function(t4, i5) {
            var e4 = t4.length, n3 = new (typeof Uint8Array != "undefined" ? Uint8Array : Array)(e4);
            n3[0] = n3[e4 - 1] = 1, (function t5(i6, e5, n5, o4, s4) {
                var r5, a4, h1, u1 = 0;
                for(a4 = o4 + 1; a4 <= s4 - 1; a4++)h1 = de(i6[a4], i6[o4], i6[s4], true), u1 < h1 && (r5 = a4, u1 = h1);
                n5 < u1 && (e5[r5] = 1, t5(i6, e5, n5, o4, r5), t5(i6, e5, n5, r5, s4));
            })(t4, n3, i5, 0, e4 - 1);
            var o4, s4 = [];
            for(o4 = 0; o4 < e4; o4++)n3[o4] && s4.push(t4[o4]);
            return s4;
        })(t3 = function(t4, i5) {
            for(var e4 = [
                t4[0]
            ], n3 = 1, o4 = 0, s4 = t4.length; n3 < s4; n3++)(function(t5, i6) {
                var e5 = i6.x - t5.x, n5 = i6.y - t5.y;
                return e5 * e5 + n5 * n5;
            })(t4[n3], t4[o4]) > i5 && (e4.push(t4[n3]), o4 = n3);
            o4 < s4 - 1 && e4.push(t4[s4 - 1]);
            return e4;
        }(t3, e3), e3);
    }
    function ue(t3, i4, e3) {
        return Math.sqrt(de(t3, i4, e3, true));
    }
    function le(t3, i4, e3, n3, o4) {
        var s4, r5, a4, h1 = n3 ? ee : _e(t3, e3), u1 = _e(i4, e3);
        for(ee = u1;;){
            if (!(h1 | u1)) return [
                t3,
                i4
            ];
            if (h1 & u1) return false;
            a4 = _e(r5 = ce(t3, i4, s4 = h1 || u1, e3, o4), e3), s4 === h1 ? (t3 = r5, h1 = a4) : (i4 = r5, u1 = a4);
        }
    }
    function ce(t3, i4, e3, n3, o4) {
        var s4, r5, a4 = i4.x - t3.x, h1 = i4.y - t3.y, u1 = n3.min, l1 = n3.max;
        return 8 & e3 ? (s4 = t3.x + a4 * (l1.y - t3.y) / h1, r5 = l1.y) : 4 & e3 ? (s4 = t3.x + a4 * (u1.y - t3.y) / h1, r5 = u1.y) : 2 & e3 ? (s4 = l1.x, r5 = t3.y + h1 * (l1.x - t3.x) / a4) : 1 & e3 && (s4 = u1.x, r5 = t3.y + h1 * (u1.x - t3.x) / a4), new k(s4, r5, o4);
    }
    function _e(t3, i4) {
        var e3 = 0;
        return t3.x < i4.min.x ? e3 |= 1 : t3.x > i4.max.x && (e3 |= 2), t3.y < i4.min.y ? e3 |= 4 : t3.y > i4.max.y && (e3 |= 8), e3;
    }
    function de(t3, i4, e3, n3) {
        var o4, s4 = i4.x, r5 = i4.y, a4 = e3.x - s4, h1 = e3.y - r5, u1 = a4 * a4 + h1 * h1;
        return 0 < u1 && (1 < (o4 = ((t3.x - s4) * a4 + (t3.y - r5) * h1) / u1) ? (s4 = e3.x, r5 = e3.y) : 0 < o4 && (s4 += a4 * o4, r5 += h1 * o4)), a4 = t3.x - s4, h1 = t3.y - r5, n3 ? a4 * a4 + h1 * h1 : new k(s4, r5);
    }
    function pe(t3) {
        return !g(t3[0]) || "object" != typeof t3[0][0] && (void 0) !== t3[0][0];
    }
    function me(t3) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), pe(t3);
    }
    var fe = {
        simplify: he,
        pointToSegmentDistance: ue,
        closestPointOnSegment: function(t3, i4, e3) {
            return de(t3, i4, e3);
        },
        clipSegment: le,
        _getEdgeIntersection: ce,
        _getBitCode: _e,
        _sqClosestPointOnSegment: de,
        isFlat: pe,
        _flat: me
    };
    function ge(t3, i4, e3) {
        for(var n3, o4, s4, r5, a4, h1, u1, l1 = [
            1,
            4,
            2,
            8
        ], c1 = 0, _1 = t3.length; c1 < _1; c1++)t3[c1]._code = _e(t3[c1], i4);
        for(s4 = 0; s4 < 4; s4++){
            for(h1 = l1[s4], n3 = [], c1 = 0, o4 = (_1 = t3.length) - 1; c1 < _1; o4 = c1++)r5 = t3[c1], a4 = t3[o4], r5._code & h1 ? a4._code & h1 || ((u1 = ce(a4, r5, h1, i4, e3))._code = _e(u1, i4), n3.push(u1)) : (a4._code & h1 && ((u1 = ce(a4, r5, h1, i4, e3))._code = _e(u1, i4), n3.push(u1)), n3.push(r5));
            t3 = n3;
        }
        return t3;
    }
    var ve, ye = {
        clipPolygon: ge
    }, xe = {
        project: function(t3) {
            return new k(t3.lng, t3.lat);
        },
        unproject: function(t3) {
            return new D(t3.y, t3.x);
        },
        bounds: new I([
            -180,
            -90
        ], [
            180,
            90
        ])
    }, we = {
        R: 6378137,
        R_MINOR: 6356752.314245179,
        bounds: new I([
            -20037508.34279,
            -15496570.73972
        ], [
            20037508.34279,
            18764656.23138
        ]),
        project: function(t3) {
            var i4 = Math.PI / 180, e3 = this.R, n3 = t3.lat * i4, o4 = this.R_MINOR / e3, s4 = Math.sqrt(1 - o4 * o4), r5 = s4 * Math.sin(n3), a4 = Math.tan(Math.PI / 4 - n3 / 2) / Math.pow((1 - r5) / (1 + r5), s4 / 2), n3 = -e3 * Math.log(Math.max(a4, 0.0000000001));
            return new k(t3.lng * i4 * e3, n3);
        },
        unproject: function(t3) {
            for(var i4, e3 = 180 / Math.PI, n3 = this.R, o4 = this.R_MINOR / n3, s4 = Math.sqrt(1 - o4 * o4), r5 = Math.exp(-t3.y / n3), a4 = Math.PI / 2 - 2 * Math.atan(r5), h1 = 0, u1 = 0.1; h1 < 15 && 0.0000001 < Math.abs(u1); h1++)i4 = s4 * Math.sin(a4), i4 = Math.pow((1 - i4) / (1 + i4), s4 / 2), a4 += u1 = Math.PI / 2 - 2 * Math.atan(r5 * i4) - a4;
            return new D(a4 * e3, t3.x * e3 / n3);
        }
    }, Pe = {
        LonLat: xe,
        Mercator: we,
        SphericalMercator: V
    }, Le = h({
    }, F, {
        code: "EPSG:3395",
        projection: we,
        transformation: G(ve = 0.5 / (Math.PI * we.R), 0.5, -ve, 0.5)
    }), be = h({
    }, F, {
        code: "EPSG:4326",
        projection: xe,
        transformation: G(1 / 180, 1, -1 / 180, 0.5)
    }), Te = h({
    }, H, {
        projection: xe,
        transformation: G(1, 0, -1, 0),
        scale: function(t3) {
            return Math.pow(2, t3);
        },
        zoom: function(t3) {
            return Math.log(t3) / Math.LN2;
        },
        distance: function(t3, i4) {
            var e3 = i4.lng - t3.lng, n3 = i4.lat - t3.lat;
            return Math.sqrt(e3 * e3 + n3 * n3);
        },
        infinite: true
    });
    H.Earth = F, H.EPSG3395 = Le, H.EPSG3857 = Y, H.EPSG900913 = X, H.EPSG4326 = be, H.Simple = Te;
    var Me = E.extend({
        options: {
            pane: "overlayPane",
            attribution: null,
            bubblingMouseEvents: true
        },
        addTo: function(t3) {
            return t3.addLayer(this), this;
        },
        remove: function() {
            return this.removeFrom(this._map || this._mapToAdd);
        },
        removeFrom: function(t3) {
            return t3 && t3.removeLayer(this), this;
        },
        getPane: function(t3) {
            return this._map.getPane(t3 ? this.options[t3] || t3 : this.options.pane);
        },
        addInteractiveTarget: function(t3) {
            return this._map._targets[m(t3)] = this;
        },
        removeInteractiveTarget: function(t3) {
            return delete this._map._targets[m(t3)], this;
        },
        getAttribution: function() {
            return this.options.attribution;
        },
        _layerAdd: function(t3) {
            var i4, e3 = t3.target;
            e3.hasLayer(this) && (this._map = e3, this._zoomAnimated = e3._zoomAnimated, this.getEvents && (i4 = this.getEvents(), e3.on(i4, this), this.once("remove", function() {
                e3.off(i4, this);
            }, this)), this.onAdd(e3), this.getAttribution && e3.attributionControl && e3.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e3.fire("layeradd", {
                layer: this
            }));
        }
    });
    Ki.include({
        addLayer: function(t3) {
            if (!t3._layerAdd) throw new Error("The provided object is not a Layer.");
            var i4 = m(t3);
            return this._layers[i4] || ((this._layers[i4] = t3)._mapToAdd = this, t3.beforeAdd && t3.beforeAdd(this), this.whenReady(t3._layerAdd, t3)), this;
        },
        removeLayer: function(t3) {
            var i4 = m(t3);
            return this._layers[i4] && (this._loaded && t3.onRemove(this), t3.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t3.getAttribution()), delete this._layers[i4], this._loaded && (this.fire("layerremove", {
                layer: t3
            }), t3.fire("remove")), t3._map = t3._mapToAdd = null), this;
        },
        hasLayer: function(t3) {
            return !!t3 && m(t3) in this._layers;
        },
        eachLayer: function(t3, i4) {
            for(var e3 in this._layers)t3.call(i4, this._layers[e3]);
            return this;
        },
        _addLayers: function(t3) {
            for(var i4 = 0, e3 = (t3 = t3 ? g(t3) ? t3 : [
                t3
            ] : []).length; i4 < e3; i4++)this.addLayer(t3[i4]);
        },
        _addZoomLimit: function(t3) {
            !isNaN(t3.options.maxZoom) && isNaN(t3.options.minZoom) || (this._zoomBoundLayers[m(t3)] = t3, this._updateZoomLevels());
        },
        _removeZoomLimit: function(t3) {
            var i4 = m(t3);
            this._zoomBoundLayers[i4] && (delete this._zoomBoundLayers[i4], this._updateZoomLevels());
        },
        _updateZoomLevels: function() {
            var t3 = 1 / 0, i4 = -1 / 0, e3 = this._getZoomSpan();
            for(var n3 in this._zoomBoundLayers)var o4 = this._zoomBoundLayers[n3].options, t3 = (void 0) === o4.minZoom ? t3 : Math.min(t3, o4.minZoom), i4 = (void 0) === o4.maxZoom ? i4 : Math.max(i4, o4.maxZoom);
            this._layersMaxZoom = i4 === -1 / 0 ? void 0 : i4, this._layersMinZoom = t3 === 1 / 0 ? void 0 : t3, e3 !== this._getZoomSpan() && this.fire("zoomlevelschange"), (void 0) === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), (void 0) === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        }
    });
    var ze = Me.extend({
        initialize: function(t3, i4) {
            var e3, n3;
            if (c(this, i4), this._layers = {
            }, t3) for(e3 = 0, n3 = t3.length; e3 < n3; e3++)this.addLayer(t3[e3]);
        },
        addLayer: function(t3) {
            var i4 = this.getLayerId(t3);
            return this._layers[i4] = t3, this._map && this._map.addLayer(t3), this;
        },
        removeLayer: function(t3) {
            var i4 = t3 in this._layers ? t3 : this.getLayerId(t3);
            return this._map && this._layers[i4] && this._map.removeLayer(this._layers[i4]), delete this._layers[i4], this;
        },
        hasLayer: function(t3) {
            return !!t3 && ("number" == typeof t3 ? t3 : this.getLayerId(t3)) in this._layers;
        },
        clearLayers: function() {
            return this.eachLayer(this.removeLayer, this);
        },
        invoke: function(t3) {
            var i4, e3, n3 = Array.prototype.slice.call(arguments, 1);
            for(i4 in this._layers)(e3 = this._layers[i4])[t3] && e3[t3].apply(e3, n3);
            return this;
        },
        onAdd: function(t3) {
            this.eachLayer(t3.addLayer, t3);
        },
        onRemove: function(t3) {
            this.eachLayer(t3.removeLayer, t3);
        },
        eachLayer: function(t3, i4) {
            for(var e3 in this._layers)t3.call(i4, this._layers[e3]);
            return this;
        },
        getLayer: function(t3) {
            return this._layers[t3];
        },
        getLayers: function() {
            var t3 = [];
            return this.eachLayer(t3.push, t3), t3;
        },
        setZIndex: function(t3) {
            return this.invoke("setZIndex", t3);
        },
        getLayerId: m
    }), Ce = ze.extend({
        addLayer: function(t3) {
            return this.hasLayer(t3) ? this : (t3.addEventParent(this), ze.prototype.addLayer.call(this, t3), this.fire("layeradd", {
                layer: t3
            }));
        },
        removeLayer: function(t3) {
            return this.hasLayer(t3) ? (t3 in this._layers && (t3 = this._layers[t3]), t3.removeEventParent(this), ze.prototype.removeLayer.call(this, t3), this.fire("layerremove", {
                layer: t3
            })) : this;
        },
        setStyle: function(t3) {
            return this.invoke("setStyle", t3);
        },
        bringToFront: function() {
            return this.invoke("bringToFront");
        },
        bringToBack: function() {
            return this.invoke("bringToBack");
        },
        getBounds: function() {
            var t3 = new R;
            for(var i4 in this._layers){
                var e3 = this._layers[i4];
                t3.extend(e3.getBounds ? e3.getBounds() : e3.getLatLng());
            }
            return t3;
        }
    }), Se = S.extend({
        options: {
            popupAnchor: [
                0,
                0
            ],
            tooltipAnchor: [
                0,
                0
            ]
        },
        initialize: function(t3) {
            c(this, t3);
        },
        createIcon: function(t3) {
            return this._createIcon("icon", t3);
        },
        createShadow: function(t3) {
            return this._createIcon("shadow", t3);
        },
        _createIcon: function(t3, i4) {
            var e4 = this._getIconUrl(t3);
            if (!e4) {
                if ("icon" === t3) throw new Error("iconUrl not set in Icon options (see the docs).");
                return null;
            }
            var n3 = this._createImg(e4, i4 && "IMG" === i4.tagName ? i4 : null);
            return this._setIconStyles(n3, t3), n3;
        },
        _setIconStyles: function(t3, i4) {
            var e4 = this.options, n3 = e4[i4 + "Size"];
            "number" == typeof n3 && (n3 = [
                n3,
                n3
            ]);
            var o4 = A(n3), s4 = A("shadow" === i4 && e4.shadowAnchor || e4.iconAnchor || o4 && o4.divideBy(2, true));
            t3.className = "leaflet-marker-" + i4 + " " + (e4.className || ""), s4 && (t3.style.marginLeft = -s4.x + "px", t3.style.marginTop = -s4.y + "px"), o4 && (t3.style.width = o4.x + "px", t3.style.height = o4.y + "px");
        },
        _createImg: function(t3, i4) {
            return (i4 = i4 || document.createElement("img")).src = t3, i4;
        },
        _getIconUrl: function(t3) {
            return zt && this.options[t3 + "RetinaUrl"] || this.options[t3 + "Url"];
        }
    });
    var Ze = Se.extend({
        options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [
                25,
                41
            ],
            iconAnchor: [
                12,
                41
            ],
            popupAnchor: [
                1,
                -34
            ],
            tooltipAnchor: [
                16,
                -28
            ],
            shadowSize: [
                41,
                41
            ]
        },
        _getIconUrl: function(t3) {
            return Ze.imagePath || (Ze.imagePath = this._detectIconPath()), (this.options.imagePath || Ze.imagePath) + Se.prototype._getIconUrl.call(this, t3);
        },
        _detectIconPath: function() {
            var t3 = si("div", "leaflet-default-icon-path", document.body), i4 = oi(t3, "background-image") || oi(t3, "backgroundImage");
            return document.body.removeChild(t3), i4 = null === i4 || 0 !== i4.indexOf("url") ? "" : i4.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "");
        }
    }), Ee = ie.extend({
        initialize: function(t3) {
            this._marker = t3;
        },
        addHooks: function() {
            var t3 = this._marker._icon;
            this._draggable || (this._draggable = new ae(t3, t3, true)), this._draggable.on({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).enable(), ci(t3, "leaflet-marker-draggable");
        },
        removeHooks: function() {
            this._draggable.off({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).disable(), this._marker._icon && _i(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
            return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(t3) {
            var i4, e4 = this._marker, n3 = e4._map, o4 = this._marker.options.autoPanSpeed, s4 = this._marker.options.autoPanPadding, r5 = yi(e4._icon), a4 = n3.getPixelBounds(), h1 = n3.getPixelOrigin(), u1 = O(a4.min._subtract(h1).add(s4), a4.max._subtract(h1).subtract(s4));
            u1.contains(r5) || (i4 = A((Math.max(u1.max.x, r5.x) - u1.max.x) / (a4.max.x - u1.max.x) - (Math.min(u1.min.x, r5.x) - u1.min.x) / (a4.min.x - u1.min.x), (Math.max(u1.max.y, r5.y) - u1.max.y) / (a4.max.y - u1.max.y) - (Math.min(u1.min.y, r5.y) - u1.min.y) / (a4.min.y - u1.min.y)).multiplyBy(o4), n3.panBy(i4, {
                animate: false
            }), this._draggable._newPos._add(i4), this._draggable._startPos._add(i4), vi(e4._icon, this._draggable._newPos), this._onDrag(t3), this._panRequest = M(this._adjustPan.bind(this, t3)));
        },
        _onDragStart: function() {
            this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(t3) {
            this._marker.options.autoPan && (z(this._panRequest), this._panRequest = M(this._adjustPan.bind(this, t3)));
        },
        _onDrag: function(t3) {
            var i4 = this._marker, e4 = i4._shadow, n3 = yi(i4._icon), o4 = i4._map.layerPointToLatLng(n3);
            e4 && vi(e4, n3), i4._latlng = o4, t3.latlng = o4, t3.oldLatLng = this._oldLatLng, i4.fire("move", t3).fire("drag", t3);
        },
        _onDragEnd: function(t3) {
            z(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t3);
        }
    }), ke = Me.extend({
        options: {
            icon: new Ze,
            interactive: true,
            keyboard: true,
            title: "",
            alt: "",
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: false,
            riseOffset: 250,
            pane: "markerPane",
            shadowPane: "shadowPane",
            bubblingMouseEvents: false,
            draggable: false,
            autoPan: false,
            autoPanPadding: [
                50,
                50
            ],
            autoPanSpeed: 10
        },
        initialize: function(t3, i4) {
            c(this, i4), this._latlng = j(t3);
        },
        onAdd: function(t3) {
            this._zoomAnimated = this._zoomAnimated && t3.options.markerZoomAnimation, this._zoomAnimated && t3.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
        },
        onRemove: function(t3) {
            this.dragging && this.dragging.enabled() && (this.options.draggable = true, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t3.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
        },
        getEvents: function() {
            return {
                zoom: this.update,
                viewreset: this.update
            };
        },
        getLatLng: function() {
            return this._latlng;
        },
        setLatLng: function(t3) {
            var i4 = this._latlng;
            return this._latlng = j(t3), this.update(), this.fire("move", {
                oldLatLng: i4,
                latlng: this._latlng
            });
        },
        setZIndexOffset: function(t3) {
            return this.options.zIndexOffset = t3, this.update();
        },
        getIcon: function() {
            return this.options.icon;
        },
        setIcon: function(t3) {
            return this.options.icon = t3, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
        },
        getElement: function() {
            return this._icon;
        },
        update: function() {
            var t3;
            return this._icon && this._map && (t3 = this._map.latLngToLayerPoint(this._latlng).round(), this._setPos(t3)), this;
        },
        _initIcon: function() {
            var t3 = this.options, i4 = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), e4 = t3.icon.createIcon(this._icon), n3 = false;
            e4 !== this._icon && (this._icon && this._removeIcon(), n3 = true, t3.title && (e4.title = t3.title), "IMG" === e4.tagName && (e4.alt = t3.alt || "")), ci(e4, i4), t3.keyboard && (e4.tabIndex = "0"), this._icon = e4, t3.riseOnHover && this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            });
            var o4 = t3.icon.createShadow(this._shadow), s4 = false;
            o4 !== this._shadow && (this._removeShadow(), s4 = true), o4 && (ci(o4, i4), o4.alt = ""), this._shadow = o4, t3.opacity < 1 && this._updateOpacity(), n3 && this.getPane().appendChild(this._icon), this._initInteraction(), o4 && s4 && this.getPane(t3.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
            this.options.riseOnHover && this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            }), ri(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
            this._shadow && ri(this._shadow), this._shadow = null;
        },
        _setPos: function(t3) {
            this._icon && vi(this._icon, t3), this._shadow && vi(this._shadow, t3), this._zIndex = t3.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(t3) {
            this._icon && (this._icon.style.zIndex = this._zIndex + t3);
        },
        _animateZoom: function(t3) {
            var i4 = this._map._latLngToNewLayerPoint(this._latlng, t3.zoom, t3.center).round();
            this._setPos(i4);
        },
        _initInteraction: function() {
            var t3;
            this.options.interactive && (ci(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ee && (t3 = this.options.draggable, this.dragging && (t3 = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ee(this), t3 && this.dragging.enable()));
        },
        setOpacity: function(t3) {
            return this.options.opacity = t3, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function() {
            var t3 = this.options.opacity;
            this._icon && mi(this._icon, t3), this._shadow && mi(this._shadow, t3);
        },
        _bringToFront: function() {
            this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function() {
            this._updateZIndex(0);
        },
        _getPopupAnchor: function() {
            return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function() {
            return this.options.icon.options.tooltipAnchor;
        }
    });
    var Be = Me.extend({
        options: {
            stroke: true,
            color: "#3388ff",
            weight: 3,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            dashArray: null,
            dashOffset: null,
            fill: false,
            fillColor: null,
            fillOpacity: 0.2,
            fillRule: "evenodd",
            interactive: true,
            bubblingMouseEvents: true
        },
        beforeAdd: function(t3) {
            this._renderer = t3.getRenderer(this);
        },
        onAdd: function() {
            this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        },
        onRemove: function() {
            this._renderer._removePath(this);
        },
        redraw: function() {
            return this._map && this._renderer._updatePath(this), this;
        },
        setStyle: function(t3) {
            return c(this, t3), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t3 && Object.prototype.hasOwnProperty.call(t3, "weight") && this._updateBounds()), this;
        },
        bringToFront: function() {
            return this._renderer && this._renderer._bringToFront(this), this;
        },
        bringToBack: function() {
            return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function() {
            return this._path;
        },
        _reset: function() {
            this._project(), this._update();
        },
        _clickTolerance: function() {
            return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
        }
    }), Ae = Be.extend({
        options: {
            fill: true,
            radius: 10
        },
        initialize: function(t3, i4) {
            c(this, i4), this._latlng = j(t3), this._radius = this.options.radius;
        },
        setLatLng: function(t3) {
            var i4 = this._latlng;
            return this._latlng = j(t3), this.redraw(), this.fire("move", {
                oldLatLng: i4,
                latlng: this._latlng
            });
        },
        getLatLng: function() {
            return this._latlng;
        },
        setRadius: function(t3) {
            return this.options.radius = this._radius = t3, this.redraw();
        },
        getRadius: function() {
            return this._radius;
        },
        setStyle: function(t3) {
            var i4 = t3 && t3.radius || this._radius;
            return Be.prototype.setStyle.call(this, t3), this.setRadius(i4), this;
        },
        _project: function() {
            this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
            var t3 = this._radius, i4 = this._radiusY || t3, e4 = this._clickTolerance(), n3 = [
                t3 + e4,
                i4 + e4
            ];
            this._pxBounds = new I(this._point.subtract(n3), this._point.add(n3));
        },
        _update: function() {
            this._map && this._updatePath();
        },
        _updatePath: function() {
            this._renderer._updateCircle(this);
        },
        _empty: function() {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        _containsPoint: function(t3) {
            return t3.distanceTo(this._point) <= this._radius + this._clickTolerance();
        }
    });
    var Ie = Ae.extend({
        initialize: function(t3, i4, e4) {
            if ("number" == typeof i4 && (i4 = h({
            }, e4, {
                radius: i4
            })), c(this, i4), this._latlng = j(t3), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
            this._mRadius = this.options.radius;
        },
        setRadius: function(t3) {
            return this._mRadius = t3, this.redraw();
        },
        getRadius: function() {
            return this._mRadius;
        },
        getBounds: function() {
            var t3 = [
                this._radius,
                this._radiusY || this._radius
            ];
            return new R(this._map.layerPointToLatLng(this._point.subtract(t3)), this._map.layerPointToLatLng(this._point.add(t3)));
        },
        setStyle: Be.prototype.setStyle,
        _project: function() {
            var t3, i4, e4, n3, o4, s4, r5, a4, h1 = this._latlng.lng, u1 = this._latlng.lat, l1 = this._map, c1 = l1.options.crs;
            c1.distance === F.distance ? (t3 = Math.PI / 180, i4 = this._mRadius / F.R / t3, e4 = l1.project([
                u1 + i4,
                h1
            ]), n3 = l1.project([
                u1 - i4,
                h1
            ]), o4 = e4.add(n3).divideBy(2), s4 = l1.unproject(o4).lat, r5 = Math.acos((Math.cos(i4 * t3) - Math.sin(u1 * t3) * Math.sin(s4 * t3)) / (Math.cos(u1 * t3) * Math.cos(s4 * t3))) / t3, !isNaN(r5) && 0 !== r5 || (r5 = i4 / Math.cos(Math.PI / 180 * u1)), this._point = o4.subtract(l1.getPixelOrigin()), this._radius = isNaN(r5) ? 0 : o4.x - l1.project([
                s4,
                h1 - r5
            ]).x, this._radiusY = o4.y - e4.y) : (a4 = c1.unproject(c1.project(this._latlng).subtract([
                this._mRadius,
                0
            ])), this._point = l1.latLngToLayerPoint(this._latlng), this._radius = this._point.x - l1.latLngToLayerPoint(a4).x), this._updateBounds();
        }
    });
    var Oe = Be.extend({
        options: {
            smoothFactor: 1,
            noClip: false
        },
        initialize: function(t3, i4) {
            c(this, i4), this._setLatLngs(t3);
        },
        getLatLngs: function() {
            return this._latlngs;
        },
        setLatLngs: function(t3) {
            return this._setLatLngs(t3), this.redraw();
        },
        isEmpty: function() {
            return !this._latlngs.length;
        },
        closestLayerPoint: function(t3) {
            for(var i4, e4, n3 = 1 / 0, o4 = null, s4 = de, r5 = 0, a4 = this._parts.length; r5 < a4; r5++)for(var h1 = this._parts[r5], u1 = 1, l1 = h1.length; u1 < l1; u1++){
                var c1 = s4(t3, i4 = h1[u1 - 1], e4 = h1[u1], true);
                c1 < n3 && (n3 = c1, o4 = s4(t3, i4, e4));
            }
            return o4 && (o4.distance = Math.sqrt(n3)), o4;
        },
        getCenter: function() {
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            var t3, i4, e4, n3, o4, s4, r5, a4 = this._rings[0], h1 = a4.length;
            if (!h1) return null;
            for(i4 = t3 = 0; t3 < h1 - 1; t3++)i4 += a4[t3].distanceTo(a4[t3 + 1]) / 2;
            if (0 === i4) return this._map.layerPointToLatLng(a4[0]);
            for(n3 = t3 = 0; t3 < h1 - 1; t3++)if (o4 = a4[t3], s4 = a4[t3 + 1], i4 < (n3 += e4 = o4.distanceTo(s4))) return r5 = (n3 - i4) / e4, this._map.layerPointToLatLng([
                s4.x - r5 * (s4.x - o4.x),
                s4.y - r5 * (s4.y - o4.y)
            ]);
        },
        getBounds: function() {
            return this._bounds;
        },
        addLatLng: function(t3, i4) {
            return i4 = i4 || this._defaultShape(), t3 = j(t3), i4.push(t3), this._bounds.extend(t3), this.redraw();
        },
        _setLatLngs: function(t3) {
            this._bounds = new R, this._latlngs = this._convertLatLngs(t3);
        },
        _defaultShape: function() {
            return pe(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        _convertLatLngs: function(t3) {
            for(var i4 = [], e4 = pe(t3), n3 = 0, o4 = t3.length; n3 < o4; n3++)e4 ? (i4[n3] = j(t3[n3]), this._bounds.extend(i4[n3])) : i4[n3] = this._convertLatLngs(t3[n3]);
            return i4;
        },
        _project: function() {
            var t3 = new I;
            this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t3), this._bounds.isValid() && t3.isValid() && (this._rawPxBounds = t3, this._updateBounds());
        },
        _updateBounds: function() {
            var t3 = this._clickTolerance(), i4 = new k(t3, t3);
            this._pxBounds = new I([
                this._rawPxBounds.min.subtract(i4),
                this._rawPxBounds.max.add(i4)
            ]);
        },
        _projectLatlngs: function(t3, i4, e4) {
            var n3, o4, s4 = t3[0] instanceof D, r5 = t3.length;
            if (s4) {
                for(o4 = [], n3 = 0; n3 < r5; n3++)o4[n3] = this._map.latLngToLayerPoint(t3[n3]), e4.extend(o4[n3]);
                i4.push(o4);
            } else for(n3 = 0; n3 < r5; n3++)this._projectLatlngs(t3[n3], i4, e4);
        },
        _clipPoints: function() {
            var t3 = this._renderer._bounds;
            if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t3)) {
                if (this.options.noClip) this._parts = this._rings;
                else for(var i4, e4, n3, o4, s4 = this._parts, r5 = 0, a4 = 0, h1 = this._rings.length; r5 < h1; r5++)for(i4 = 0, e4 = (o4 = this._rings[r5]).length; i4 < e4 - 1; i4++)(n3 = le(o4[i4], o4[i4 + 1], t3, i4, true)) && (s4[a4] = s4[a4] || [], s4[a4].push(n3[0]), n3[1] === o4[i4 + 1] && i4 !== e4 - 2 || (s4[a4].push(n3[1]), a4++));
            }
        },
        _simplifyPoints: function() {
            for(var t3 = this._parts, i5 = this.options.smoothFactor, e5 = 0, n5 = t3.length; e5 < n5; e5++)t3[e5] = he(t3[e5], i5);
        },
        _update: function() {
            this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
            this._renderer._updatePoly(this);
        },
        _containsPoint: function(t3, i5) {
            var e5, n5, o5, s5, r6, a5, h2 = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(t3)) return false;
            for(e5 = 0, s5 = this._parts.length; e5 < s5; e5++)for(n5 = 0, o5 = (r6 = (a5 = this._parts[e5]).length) - 1; n5 < r6; o5 = n5++)if ((i5 || 0 !== n5) && ue(t3, a5[o5], a5[n5]) <= h2) return true;
            return false;
        }
    });
    Oe._flat = me;
    var Re = Oe.extend({
        options: {
            fill: true
        },
        isEmpty: function() {
            return !this._latlngs.length || !this._latlngs[0].length;
        },
        getCenter: function() {
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            var t3, i5, e5, n5, o5, s5, r6, a5, h2, u1 = this._rings[0], l1 = u1.length;
            if (!l1) return null;
            for(t3 = s5 = r6 = a5 = 0, i5 = l1 - 1; t3 < l1; i5 = t3++)e5 = u1[t3], n5 = u1[i5], o5 = e5.y * n5.x - n5.y * e5.x, r6 += (e5.x + n5.x) * o5, a5 += (e5.y + n5.y) * o5, s5 += 3 * o5;
            return h2 = 0 === s5 ? u1[0] : [
                r6 / s5,
                a5 / s5
            ], this._map.layerPointToLatLng(h2);
        },
        _convertLatLngs: function(t3) {
            var i5 = Oe.prototype._convertLatLngs.call(this, t3), e5 = i5.length;
            return 2 <= e5 && i5[0] instanceof D && i5[0].equals(i5[e5 - 1]) && i5.pop(), i5;
        },
        _setLatLngs: function(t3) {
            Oe.prototype._setLatLngs.call(this, t3), pe(this._latlngs) && (this._latlngs = [
                this._latlngs
            ]);
        },
        _defaultShape: function() {
            return pe(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
            var t3 = this._renderer._bounds, i5 = this.options.weight, e5 = new k(i5, i5), t3 = new I(t3.min.subtract(e5), t3.max.add(e5));
            if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t3)) {
                if (this.options.noClip) this._parts = this._rings;
                else for(var n5, o5 = 0, s5 = this._rings.length; o5 < s5; o5++)(n5 = ge(this._rings[o5], t3, true)).length && this._parts.push(n5);
            }
        },
        _updatePath: function() {
            this._renderer._updatePoly(this, true);
        },
        _containsPoint: function(t3) {
            var i5, e5, n6, o6, s6, r6, a5, h2, u1 = false;
            if (!this._pxBounds || !this._pxBounds.contains(t3)) return false;
            for(o6 = 0, a5 = this._parts.length; o6 < a5; o6++)for(s6 = 0, r6 = (h2 = (i5 = this._parts[o6]).length) - 1; s6 < h2; r6 = s6++)e5 = i5[s6], n6 = i5[r6], e5.y > t3.y != n6.y > t3.y && t3.x < (n6.x - e5.x) * (t3.y - e5.y) / (n6.y - e5.y) + e5.x && (u1 = !u1);
            return u1 || Oe.prototype._containsPoint.call(this, t3, true);
        }
    });
    var Ne = Ce.extend({
        initialize: function(t3, i5) {
            c(this, i5), this._layers = {
            }, t3 && this.addData(t3);
        },
        addData: function(t3) {
            var i5, e5, n6, o6 = g(t3) ? t3 : t3.features;
            if (o6) {
                for(i5 = 0, e5 = o6.length; i5 < e5; i5++)((n6 = o6[i5]).geometries || n6.geometry || n6.features || n6.coordinates) && this.addData(n6);
                return this;
            }
            var s6 = this.options;
            if (s6.filter && !s6.filter(t3)) return this;
            var r6 = De(t3, s6);
            return r6 ? (r6.feature = qe(t3), r6.defaultOptions = r6.options, this.resetStyle(r6), s6.onEachFeature && s6.onEachFeature(t3, r6), this.addLayer(r6)) : this;
        },
        resetStyle: function(t3) {
            return (void 0) === t3 ? this.eachLayer(this.resetStyle, this) : (t3.options = h({
            }, t3.defaultOptions), this._setLayerStyle(t3, this.options.style), this);
        },
        setStyle: function(i5) {
            return this.eachLayer(function(t3) {
                this._setLayerStyle(t3, i5);
            }, this);
        },
        _setLayerStyle: function(t3, i5) {
            t3.setStyle && ("function" == typeof i5 && (i5 = i5(t3.feature)), t3.setStyle(i5));
        }
    });
    function De(t3, i5) {
        var e5, n6, o6, s6, r6 = "Feature" === t3.type ? t3.geometry : t3, a5 = r6 ? r6.coordinates : null, h2 = [], u1 = i5 && i5.pointToLayer, l1 = i5 && i5.coordsToLatLng || We;
        if (!a5 && !r6) return null;
        switch(r6.type){
            case "Point":
                return je(u1, t3, e5 = l1(a5), i5);
            case "MultiPoint":
                for(o6 = 0, s6 = a5.length; o6 < s6; o6++)e5 = l1(a5[o6]), h2.push(je(u1, t3, e5, i5));
                return new Ce(h2);
            case "LineString":
            case "MultiLineString":
                return n6 = He(a5, "LineString" === r6.type ? 0 : 1, l1), new Oe(n6, i5);
            case "Polygon":
            case "MultiPolygon":
                return n6 = He(a5, "Polygon" === r6.type ? 1 : 2, l1), new Re(n6, i5);
            case "GeometryCollection":
                for(o6 = 0, s6 = r6.geometries.length; o6 < s6; o6++){
                    var c2 = De({
                        geometry: r6.geometries[o6],
                        type: "Feature",
                        properties: t3.properties
                    }, i5);
                    c2 && h2.push(c2);
                }
                return new Ce(h2);
            default:
                throw new Error("Invalid GeoJSON object.");
        }
    }
    function je(t3, i5, e5, n6) {
        return t3 ? t3(i5, e5) : new ke(e5, n6 && n6.markersInheritOptions && n6);
    }
    function We(t3) {
        return new D(t3[1], t3[0], t3[2]);
    }
    function He(t3, i5, e5) {
        for(var n6, o6 = [], s6 = 0, r6 = t3.length; s6 < r6; s6++)n6 = i5 ? He(t3[s6], i5 - 1, e5) : (e5 || We)(t3[s6]), o6.push(n6);
        return o6;
    }
    function Fe(t3, i5) {
        return i5 = "number" == typeof i5 ? i5 : 6, (void 0) !== t3.alt ? [
            r3(t3.lng, i5),
            r3(t3.lat, i5),
            r3(t3.alt, i5)
        ] : [
            r3(t3.lng, i5),
            r3(t3.lat, i5)
        ];
    }
    function Ue(t3, i5, e5, n6) {
        for(var o6 = [], s6 = 0, r6 = t3.length; s6 < r6; s6++)o6.push(i5 ? Ue(t3[s6], i5 - 1, e5, n6) : Fe(t3[s6], n6));
        return !i5 && e5 && o6.push(o6[0]), o6;
    }
    function Ve(t3, i5) {
        return t3.feature ? h({
        }, t3.feature, {
            geometry: i5
        }) : qe(i5);
    }
    function qe(t3) {
        return "Feature" === t3.type || "FeatureCollection" === t3.type ? t3 : {
            type: "Feature",
            properties: {
            },
            geometry: t3
        };
    }
    var Ge = {
        toGeoJSON: function(t3) {
            return Ve(this, {
                type: "Point",
                coordinates: Fe(this.getLatLng(), t3)
            });
        }
    };
    function Ke(t3, i5) {
        return new Ne(t3, i5);
    }
    ke.include(Ge), Ie.include(Ge), Ae.include(Ge), Oe.include({
        toGeoJSON: function(t3) {
            var i5 = !pe(this._latlngs);
            return Ve(this, {
                type: (i5 ? "Multi" : "") + "LineString",
                coordinates: Ue(this._latlngs, i5 ? 1 : 0, false, t3)
            });
        }
    }), Re.include({
        toGeoJSON: function(t3) {
            var i5 = !pe(this._latlngs), e5 = i5 && !pe(this._latlngs[0]), n6 = Ue(this._latlngs, e5 ? 2 : i5 ? 1 : 0, true, t3);
            return i5 || (n6 = [
                n6
            ]), Ve(this, {
                type: (e5 ? "Multi" : "") + "Polygon",
                coordinates: n6
            });
        }
    }), ze.include({
        toMultiPoint: function(i5) {
            var e5 = [];
            return this.eachLayer(function(t3) {
                e5.push(t3.toGeoJSON(i5).geometry.coordinates);
            }), Ve(this, {
                type: "MultiPoint",
                coordinates: e5
            });
        },
        toGeoJSON: function(n6) {
            var t3 = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === t3) return this.toMultiPoint(n6);
            var o6 = "GeometryCollection" === t3, s6 = [];
            return this.eachLayer(function(t4) {
                var i5, e5;
                t4.toGeoJSON && (i5 = t4.toGeoJSON(n6), o6 ? s6.push(i5.geometry) : "FeatureCollection" === (e5 = qe(i5)).type ? s6.push.apply(s6, e5.features) : s6.push(e5));
            }), o6 ? Ve(this, {
                geometries: s6,
                type: "GeometryCollection"
            }) : {
                type: "FeatureCollection",
                features: s6
            };
        }
    });
    var Ye = Ke, Xe = Me.extend({
        options: {
            opacity: 1,
            alt: "",
            interactive: false,
            crossOrigin: false,
            errorOverlayUrl: "",
            zIndex: 1,
            className: ""
        },
        initialize: function(t3, i5, e5) {
            this._url = t3, this._bounds = N(i5), c(this, e5);
        },
        onAdd: function() {
            this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (ci(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
            ri(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
        },
        setOpacity: function(t3) {
            return this.options.opacity = t3, this._image && this._updateOpacity(), this;
        },
        setStyle: function(t3) {
            return t3.opacity && this.setOpacity(t3.opacity), this;
        },
        bringToFront: function() {
            return this._map && hi(this._image), this;
        },
        bringToBack: function() {
            return this._map && ui(this._image), this;
        },
        setUrl: function(t3) {
            return this._url = t3, this._image && (this._image.src = t3), this;
        },
        setBounds: function(t3) {
            return this._bounds = N(t3), this._map && this._reset(), this;
        },
        getEvents: function() {
            var t3 = {
                zoom: this._reset,
                viewreset: this._reset
            };
            return this._zoomAnimated && (t3.zoomanim = this._animateZoom), t3;
        },
        setZIndex: function(t3) {
            return this.options.zIndex = t3, this._updateZIndex(), this;
        },
        getBounds: function() {
            return this._bounds;
        },
        getElement: function() {
            return this._image;
        },
        _initImage: function() {
            var t3 = "IMG" === this._url.tagName, i5 = this._image = t3 ? this._url : si("img");
            ci(i5, "leaflet-image-layer"), this._zoomAnimated && ci(i5, "leaflet-zoom-animated"), this.options.className && ci(i5, this.options.className), i5.onselectstart = a, i5.onmousemove = a, i5.onload = p(this.fire, this, "load"), i5.onerror = p(this._overlayOnError, this, "error"), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i5.crossOrigin = true === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t3 ? this._url = i5.src : (i5.src = this._url, i5.alt = this.options.alt);
        },
        _animateZoom: function(t3) {
            var i5 = this._map.getZoomScale(t3.zoom), e5 = this._map._latLngBoundsToNewLayerBounds(this._bounds, t3.zoom, t3.center).min;
            gi(this._image, e5, i5);
        },
        _reset: function() {
            var t3 = this._image, i5 = new I(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), e5 = i5.getSize();
            vi(t3, i5.min), t3.style.width = e5.x + "px", t3.style.height = e5.y + "px";
        },
        _updateOpacity: function() {
            mi(this._image, this.options.opacity);
        },
        _updateZIndex: function() {
            this._image && (void 0) !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function() {
            this.fire("error");
            var t3 = this.options.errorOverlayUrl;
            t3 && this._url !== t3 && (this._url = t3, this._image.src = t3);
        }
    }), Je = Xe.extend({
        options: {
            autoplay: true,
            loop: true,
            keepAspectRatio: true,
            muted: false
        },
        _initImage: function() {
            var t3 = "VIDEO" === this._url.tagName, i5 = this._image = t3 ? this._url : si("video");
            if (ci(i5, "leaflet-image-layer"), this._zoomAnimated && ci(i5, "leaflet-zoom-animated"), this.options.className && ci(i5, this.options.className), i5.onselectstart = a, i5.onmousemove = a, i5.onloadeddata = p(this.fire, this, "load"), t3) {
                for(var e5 = i5.getElementsByTagName("source"), n6 = [], o6 = 0; o6 < e5.length; o6++)n6.push(e5[o6].src);
                this._url = 0 < e5.length ? n6 : [
                    i5.src
                ];
            } else {
                g(this._url) || (this._url = [
                    this._url
                ]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(i5.style, "objectFit") && (i5.style.objectFit = "fill"), i5.autoplay = !!this.options.autoplay, i5.loop = !!this.options.loop, i5.muted = !!this.options.muted;
                for(var s6 = 0; s6 < this._url.length; s6++){
                    var r6 = si("source");
                    r6.src = this._url[s6], i5.appendChild(r6);
                }
            }
        }
    });
    var $e = Xe.extend({
        _initImage: function() {
            var t3 = this._image = this._url;
            ci(t3, "leaflet-image-layer"), this._zoomAnimated && ci(t3, "leaflet-zoom-animated"), this.options.className && ci(t3, this.options.className), t3.onselectstart = a, t3.onmousemove = a;
        }
    });
    var Qe = Me.extend({
        options: {
            offset: [
                0,
                7
            ],
            className: "",
            pane: "popupPane"
        },
        initialize: function(t3, i5) {
            c(this, t3), this._source = i5;
        },
        onAdd: function(t3) {
            this._zoomAnimated = t3._zoomAnimated, this._container || this._initLayout(), t3._fadeAnimated && mi(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t3._fadeAnimated && mi(this._container, 1), this.bringToFront();
        },
        onRemove: function(t3) {
            t3._fadeAnimated ? (mi(this._container, 0), this._removeTimeout = setTimeout(p(ri, void 0, this._container), 200)) : ri(this._container);
        },
        getLatLng: function() {
            return this._latlng;
        },
        setLatLng: function(t3) {
            return this._latlng = j(t3), this._map && (this._updatePosition(), this._adjustPan()), this;
        },
        getContent: function() {
            return this._content;
        },
        setContent: function(t3) {
            return this._content = t3, this.update(), this;
        },
        getElement: function() {
            return this._container;
        },
        update: function() {
            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
        },
        getEvents: function() {
            var t3 = {
                zoom: this._updatePosition,
                viewreset: this._updatePosition
            };
            return this._zoomAnimated && (t3.zoomanim = this._animateZoom), t3;
        },
        isOpen: function() {
            return !!this._map && this._map.hasLayer(this);
        },
        bringToFront: function() {
            return this._map && hi(this._container), this;
        },
        bringToBack: function() {
            return this._map && ui(this._container), this;
        },
        _prepareOpen: function(t3, i5, e6) {
            if (i5 instanceof Me || (e6 = i5, i5 = t3), i5 instanceof Ce) for(var n7 in t3._layers){
                i5 = t3._layers[n7];
                break;
            }
            if (!e6) {
                if (i5.getCenter) e6 = i5.getCenter();
                else {
                    if (!i5.getLatLng) throw new Error("Unable to get source layer LatLng.");
                    e6 = i5.getLatLng();
                }
            }
            return this._source = i5, this.update(), e6;
        },
        _updateContent: function() {
            if (this._content) {
                var t3 = this._contentNode, i5 = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                if ("string" == typeof i5) t3.innerHTML = i5;
                else {
                    for(; t3.hasChildNodes();)t3.removeChild(t3.firstChild);
                    t3.appendChild(i5);
                }
                this.fire("contentupdate");
            }
        },
        _updatePosition: function() {
            var t4, i6, e6, n7, o7;
            this._map && (t4 = this._map.latLngToLayerPoint(this._latlng), i6 = A(this.options.offset), e6 = this._getAnchor(), this._zoomAnimated ? vi(this._container, t4.add(e6)) : i6 = i6.add(t4).add(e6), n7 = this._containerBottom = -i6.y, o7 = this._containerLeft = -Math.round(this._containerWidth / 2) + i6.x, this._container.style.bottom = n7 + "px", this._container.style.left = o7 + "px");
        },
        _getAnchor: function() {
            return [
                0,
                0
            ];
        }
    }), tn = Qe.extend({
        options: {
            maxWidth: 300,
            minWidth: 50,
            maxHeight: null,
            autoPan: true,
            autoPanPaddingTopLeft: null,
            autoPanPaddingBottomRight: null,
            autoPanPadding: [
                5,
                5
            ],
            keepInView: false,
            closeButton: true,
            autoClose: true,
            closeOnEscapeKey: true,
            className: ""
        },
        openOn: function(t4) {
            return t4.openPopup(this), this;
        },
        onAdd: function(t4) {
            Qe.prototype.onAdd.call(this, t4), t4.fire("popupopen", {
                popup: this
            }), this._source && (this._source.fire("popupopen", {
                popup: this
            }, true), this._source instanceof Be || this._source.on("preclick", Ai));
        },
        onRemove: function(t4) {
            Qe.prototype.onRemove.call(this, t4), t4.fire("popupclose", {
                popup: this
            }), this._source && (this._source.fire("popupclose", {
                popup: this
            }, true), this._source instanceof Be || this._source.off("preclick", Ai));
        },
        getEvents: function() {
            var t4 = Qe.prototype.getEvents.call(this);
            return ((void 0) !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t4.preclick = this._close), this.options.keepInView && (t4.moveend = this._adjustPan), t4;
        },
        _close: function() {
            this._map && this._map.closePopup(this);
        },
        _initLayout: function() {
            var t4, i6 = "leaflet-popup", e6 = this._container = si("div", i6 + " " + (this.options.className || "") + " leaflet-zoom-animated"), n7 = this._wrapper = si("div", i6 + "-content-wrapper", e6);
            this._contentNode = si("div", i6 + "-content", n7), Oi(e6), Ii(this._contentNode), zi(e6, "contextmenu", Ai), this._tipContainer = si("div", i6 + "-tip-container", e6), this._tip = si("div", i6 + "-tip", this._tipContainer), this.options.closeButton && ((t4 = this._closeButton = si("a", i6 + "-close-button", e6)).href = "#close", t4.innerHTML = "&#215;", zi(t4, "click", this._onCloseButtonClick, this));
        },
        _updateLayout: function() {
            var t4 = this._contentNode, i6 = t4.style;
            i6.width = "", i6.whiteSpace = "nowrap";
            var e6 = t4.offsetWidth, e6 = Math.min(e6, this.options.maxWidth);
            e6 = Math.max(e6, this.options.minWidth), i6.width = e6 + 1 + "px", i6.whiteSpace = "", i6.height = "";
            var n7 = t4.offsetHeight, o7 = this.options.maxHeight, s7 = "leaflet-popup-scrolled";
            o7 && o7 < n7 ? (i6.height = o7 + "px", ci(t4, s7)) : _i(t4, s7), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(t4) {
            var i6 = this._map._latLngToNewLayerPoint(this._latlng, t4.zoom, t4.center), e6 = this._getAnchor();
            vi(this._container, i6.add(e6));
        },
        _adjustPan: function() {
            var t4, i6, e6, n7, o7, s7, r7, a5, h2, u1, l1, c3;
            this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(), t4 = this._map, i6 = parseInt(oi(this._container, "marginBottom"), 10) || 0, e6 = this._container.offsetHeight + i6, n7 = this._containerWidth, (o7 = new k(this._containerLeft, -e6 - this._containerBottom))._add(yi(this._container)), s7 = t4.layerPointToContainerPoint(o7), r7 = A(this.options.autoPanPadding), a5 = A(this.options.autoPanPaddingTopLeft || r7), h2 = A(this.options.autoPanPaddingBottomRight || r7), u1 = t4.getSize(), c3 = l1 = 0, s7.x + n7 + h2.x > u1.x && (l1 = s7.x + n7 - u1.x + h2.x), s7.x - l1 - a5.x < 0 && (l1 = s7.x - a5.x), s7.y + e6 + h2.y > u1.y && (c3 = s7.y + e6 - u1.y + h2.y), s7.y - c3 - a5.y < 0 && (c3 = s7.y - a5.y), (l1 || c3) && t4.fire("autopanstart").panBy([
                l1,
                c3
            ]));
        },
        _onCloseButtonClick: function(t4) {
            this._close(), Ni(t4);
        },
        _getAnchor: function() {
            return A(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [
                0,
                0
            ]);
        }
    });
    Ki.mergeOptions({
        closePopupOnClick: true
    }), Ki.include({
        openPopup: function(t4, i6, e6) {
            return t4 instanceof tn || (t4 = new tn(e6).setContent(t4)), i6 && t4.setLatLng(i6), this.hasLayer(t4) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t4, this.addLayer(t4));
        },
        closePopup: function(t4) {
            return t4 && t4 !== this._popup || (t4 = this._popup, this._popup = null), t4 && this.removeLayer(t4), this;
        }
    }), Me.include({
        bindPopup: function(t4, i6) {
            return t4 instanceof tn ? (c(t4, i6), (this._popup = t4)._source = this) : (this._popup && !i6 || (this._popup = new tn(i6, this)), this._popup.setContent(t4)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = true), this;
        },
        unbindPopup: function() {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = false, this._popup = null), this;
        },
        openPopup: function(t4, i6) {
            return this._popup && this._map && (i6 = this._popup._prepareOpen(this, t4, i6), this._map.openPopup(this._popup, i6)), this;
        },
        closePopup: function() {
            return this._popup && this._popup._close(), this;
        },
        togglePopup: function(t4) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t4)), this;
        },
        isPopupOpen: function() {
            return !!this._popup && this._popup.isOpen();
        },
        setPopupContent: function(t4) {
            return this._popup && this._popup.setContent(t4), this;
        },
        getPopup: function() {
            return this._popup;
        },
        _openPopup: function(t4) {
            var i6 = t4.layer || t4.target;
            this._popup && this._map && (Ni(t4), i6 instanceof Be ? this.openPopup(t4.layer || t4.target, t4.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i6 ? this.closePopup() : this.openPopup(i6, t4.latlng));
        },
        _movePopup: function(t4) {
            this._popup.setLatLng(t4.latlng);
        },
        _onKeyPress: function(t4) {
            13 === t4.originalEvent.keyCode && this._openPopup(t4);
        }
    });
    var en = Qe.extend({
        options: {
            pane: "tooltipPane",
            offset: [
                0,
                0
            ],
            direction: "auto",
            permanent: false,
            sticky: false,
            interactive: false,
            opacity: 0.9
        },
        onAdd: function(t4) {
            Qe.prototype.onAdd.call(this, t4), this.setOpacity(this.options.opacity), t4.fire("tooltipopen", {
                tooltip: this
            }), this._source && this._source.fire("tooltipopen", {
                tooltip: this
            }, true);
        },
        onRemove: function(t4) {
            Qe.prototype.onRemove.call(this, t4), t4.fire("tooltipclose", {
                tooltip: this
            }), this._source && this._source.fire("tooltipclose", {
                tooltip: this
            }, true);
        },
        getEvents: function() {
            var t4 = Qe.prototype.getEvents.call(this);
            return bt && !this.options.permanent && (t4.preclick = this._close), t4;
        },
        _close: function() {
            this._map && this._map.closeTooltip(this);
        },
        _initLayout: function() {
            var t4 = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = si("div", t4);
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(t4) {
            var i6, e6 = this._map, n7 = this._container, o7 = e6.latLngToContainerPoint(e6.getCenter()), s7 = e6.layerPointToContainerPoint(t4), r7 = this.options.direction, a5 = n7.offsetWidth, h2 = n7.offsetHeight, u1 = A(this.options.offset), l1 = this._getAnchor(), c3 = "top" === r7 ? (i6 = a5 / 2, h2) : "bottom" === r7 ? (i6 = a5 / 2, 0) : (i6 = "center" === r7 ? a5 / 2 : "right" === r7 ? 0 : "left" === r7 ? a5 : s7.x < o7.x ? (r7 = "right", 0) : (r7 = "left", a5 + 2 * (u1.x + l1.x)), h2 / 2);
            t4 = t4.subtract(A(i6, c3, true)).add(u1).add(l1), _i(n7, "leaflet-tooltip-right"), _i(n7, "leaflet-tooltip-left"), _i(n7, "leaflet-tooltip-top"), _i(n7, "leaflet-tooltip-bottom"), ci(n7, "leaflet-tooltip-" + r7), vi(n7, t4);
        },
        _updatePosition: function() {
            var t4 = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t4);
        },
        setOpacity: function(t4) {
            this.options.opacity = t4, this._container && mi(this._container, t4);
        },
        _animateZoom: function(t4) {
            var i6 = this._map._latLngToNewLayerPoint(this._latlng, t4.zoom, t4.center);
            this._setPosition(i6);
        },
        _getAnchor: function() {
            return A(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [
                0,
                0
            ]);
        }
    });
    Ki.include({
        openTooltip: function(t4, i6, e6) {
            return t4 instanceof en || (t4 = new en(e6).setContent(t4)), i6 && t4.setLatLng(i6), this.hasLayer(t4) ? this : this.addLayer(t4);
        },
        closeTooltip: function(t4) {
            return t4 && this.removeLayer(t4), this;
        }
    }), Me.include({
        bindTooltip: function(t4, i6) {
            return t4 instanceof en ? (c(t4, i6), (this._tooltip = t4)._source = this) : (this._tooltip && !i6 || (this._tooltip = new en(i6, this)), this._tooltip.setContent(t4)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
        },
        unbindTooltip: function() {
            return this._tooltip && (this._initTooltipInteractions(true), this.closeTooltip(), this._tooltip = null), this;
        },
        _initTooltipInteractions: function(t4) {
            var i6, e6;
            !t4 && this._tooltipHandlersAdded || (i6 = t4 ? "off" : "on", e6 = {
                remove: this.closeTooltip,
                move: this._moveTooltip
            }, this._tooltip.options.permanent ? e6.add = this._openTooltip : (e6.mouseover = this._openTooltip, e6.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e6.mousemove = this._moveTooltip), bt && (e6.click = this._openTooltip)), this[i6](e6), this._tooltipHandlersAdded = !t4);
        },
        openTooltip: function(t4, i6) {
            return this._tooltip && this._map && (i6 = this._tooltip._prepareOpen(this, t4, i6), this._map.openTooltip(this._tooltip, i6), this._tooltip.options.interactive && this._tooltip._container && (ci(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this;
        },
        closeTooltip: function() {
            return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (_i(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this;
        },
        toggleTooltip: function(t4) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t4)), this;
        },
        isTooltipOpen: function() {
            return this._tooltip.isOpen();
        },
        setTooltipContent: function(t4) {
            return this._tooltip && this._tooltip.setContent(t4), this;
        },
        getTooltip: function() {
            return this._tooltip;
        },
        _openTooltip: function(t4) {
            var i6 = t4.layer || t4.target;
            this._tooltip && this._map && this.openTooltip(i6, this._tooltip.options.sticky ? t4.latlng : void 0);
        },
        _moveTooltip: function(t4) {
            var i6, e6, n7 = t4.latlng;
            this._tooltip.options.sticky && t4.originalEvent && (i6 = this._map.mouseEventToContainerPoint(t4.originalEvent), e6 = this._map.containerPointToLayerPoint(i6), n7 = this._map.layerPointToLatLng(e6)), this._tooltip.setLatLng(n7);
        }
    });
    var nn = Se.extend({
        options: {
            iconSize: [
                12,
                12
            ],
            html: false,
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function(t4) {
            var i6, e6 = t4 && "DIV" === t4.tagName ? t4 : document.createElement("div"), n7 = this.options;
            return n7.html instanceof Element ? (ai(e6), e6.appendChild(n7.html)) : e6.innerHTML = false !== n7.html ? n7.html : "", n7.bgPos && (i6 = A(n7.bgPos), e6.style.backgroundPosition = -i6.x + "px " + -i6.y + "px"), this._setIconStyles(e6, "icon"), e6;
        },
        createShadow: function() {
            return null;
        }
    });
    Se.Default = Ze;
    var on = Me.extend({
        options: {
            tileSize: 256,
            opacity: 1,
            updateWhenIdle: yt,
            updateWhenZooming: true,
            updateInterval: 200,
            zIndex: 1,
            bounds: null,
            minZoom: 0,
            maxZoom: void 0,
            maxNativeZoom: void 0,
            minNativeZoom: void 0,
            noWrap: false,
            pane: "tilePane",
            className: "",
            keepBuffer: 2
        },
        initialize: function(t4) {
            c(this, t4);
        },
        onAdd: function() {
            this._initContainer(), this._levels = {
            }, this._tiles = {
            }, this._resetView(), this._update();
        },
        beforeAdd: function(t4) {
            t4._addZoomLimit(this);
        },
        onRemove: function(t4) {
            this._removeAllTiles(), ri(this._container), t4._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        bringToFront: function() {
            return this._map && (hi(this._container), this._setAutoZIndex(Math.max)), this;
        },
        bringToBack: function() {
            return this._map && (ui(this._container), this._setAutoZIndex(Math.min)), this;
        },
        getContainer: function() {
            return this._container;
        },
        setOpacity: function(t4) {
            return this.options.opacity = t4, this._updateOpacity(), this;
        },
        setZIndex: function(t4) {
            return this.options.zIndex = t4, this._updateZIndex(), this;
        },
        isLoading: function() {
            return this._loading;
        },
        redraw: function() {
            return this._map && (this._removeAllTiles(), this._update()), this;
        },
        getEvents: function() {
            var t4 = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
            };
            return this.options.updateWhenIdle || (this._onMove || (this._onMove = n(this._onMoveEnd, this.options.updateInterval, this)), t4.move = this._onMove), this._zoomAnimated && (t4.zoomanim = this._animateZoom), t4;
        },
        createTile: function() {
            return document.createElement("div");
        },
        getTileSize: function() {
            var t4 = this.options.tileSize;
            return t4 instanceof k ? t4 : new k(t4, t4);
        },
        _updateZIndex: function() {
            this._container && (void 0) !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
        },
        _setAutoZIndex: function(t4) {
            for(var i6, e6 = this.getPane().children, n7 = -t4(-1 / 0, 1 / 0), o7 = 0, s7 = e6.length; o7 < s7; o7++)i6 = e6[o7].style.zIndex, e6[o7] !== this._container && i6 && (n7 = t4(n7, +i6));
            isFinite(n7) && (this.options.zIndex = n7 + t4(-1, 1), this._updateZIndex());
        },
        _updateOpacity: function() {
            if (this._map && !it) {
                mi(this._container, this.options.opacity);
                var t4 = +new Date, i6 = false, e6 = false;
                for(var n7 in this._tiles){
                    var o7, s7 = this._tiles[n7];
                    s7.current && s7.loaded && (o7 = Math.min(1, (t4 - s7.loaded) / 200), mi(s7.el, o7), o7 < 1 ? i6 = true : (s7.active ? e6 = true : this._onOpaqueTile(s7), s7.active = true));
                }
                e6 && !this._noPrune && this._pruneTiles(), i6 && (z(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this));
            }
        },
        _onOpaqueTile: a,
        _initContainer: function() {
            this._container || (this._container = si("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
            var t5 = this._tileZoom, i7 = this.options.maxZoom;
            if ((void 0) !== t5) {
                for(var e7 in this._levels)e7 = Number(e7), this._levels[e7].el.children.length || e7 === t5 ? (this._levels[e7].el.style.zIndex = i7 - Math.abs(t5 - e7), this._onUpdateLevel(e7)) : (ri(this._levels[e7].el), this._removeTilesAtZoom(e7), this._onRemoveLevel(e7), delete this._levels[e7]);
                var n8 = this._levels[t5], o8 = this._map;
                return n8 || ((n8 = this._levels[t5] = {
                }).el = si("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n8.el.style.zIndex = i7, n8.origin = o8.project(o8.unproject(o8.getPixelOrigin()), t5).round(), n8.zoom = t5, this._setZoomTransform(n8, o8.getCenter(), o8.getZoom()), a(n8.el.offsetWidth), this._onCreateLevel(n8)), this._level = n8;
            }
        },
        _onUpdateLevel: a,
        _onRemoveLevel: a,
        _onCreateLevel: a,
        _pruneTiles: function() {
            if (this._map) {
                var t5, i7, e8, n9 = this._map.getZoom();
                if (n9 > this.options.maxZoom || n9 < this.options.minZoom) this._removeAllTiles();
                else {
                    for(t5 in this._tiles)(e8 = this._tiles[t5]).retain = e8.current;
                    for(t5 in this._tiles)(e8 = this._tiles[t5]).current && !e8.active && (i7 = e8.coords, this._retainParent(i7.x, i7.y, i7.z, i7.z - 5) || this._retainChildren(i7.x, i7.y, i7.z, i7.z + 2));
                    for(t5 in this._tiles)this._tiles[t5].retain || this._removeTile(t5);
                }
            }
        },
        _removeTilesAtZoom: function(t6) {
            for(var i8 in this._tiles)this._tiles[i8].coords.z === t6 && this._removeTile(i8);
        },
        _removeAllTiles: function() {
            for(var t6 in this._tiles)this._removeTile(t6);
        },
        _invalidateAll: function() {
            for(var t6 in this._levels)ri(this._levels[t6].el), this._onRemoveLevel(Number(t6)), delete this._levels[t6];
            this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(t6, i8, e9, n10) {
            var o9 = Math.floor(t6 / 2), s8 = Math.floor(i8 / 2), r7 = e9 - 1, a5 = new k(+o9, +s8);
            a5.z = +r7;
            var h2 = this._tileCoordsToKey(a5), u1 = this._tiles[h2];
            return u1 && u1.active ? u1.retain = true : (u1 && u1.loaded && (u1.retain = true), n10 < r7 && this._retainParent(o9, s8, r7, n10));
        },
        _retainChildren: function(t6, i8, e9, n10) {
            for(var o9 = 2 * t6; o9 < 2 * t6 + 2; o9++)for(var s8 = 2 * i8; s8 < 2 * i8 + 2; s8++){
                var r7 = new k(o9, s8);
                r7.z = e9 + 1;
                var a5 = this._tileCoordsToKey(r7), h2 = this._tiles[a5];
                h2 && h2.active ? h2.retain = true : (h2 && h2.loaded && (h2.retain = true), e9 + 1 < n10 && this._retainChildren(o9, s8, e9 + 1, n10));
            }
        },
        _resetView: function(t6) {
            var i8 = t6 && (t6.pinch || t6.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), i8, i8);
        },
        _animateZoom: function(t6) {
            this._setView(t6.center, t6.zoom, true, t6.noUpdate);
        },
        _clampZoom: function(t6) {
            var i8 = this.options;
            return (void 0) !== i8.minNativeZoom && t6 < i8.minNativeZoom ? i8.minNativeZoom : (void 0) !== i8.maxNativeZoom && i8.maxNativeZoom < t6 ? i8.maxNativeZoom : t6;
        },
        _setView: function(t6, i8, e9, n10) {
            var o9 = Math.round(i8), o9 = (void 0) !== this.options.maxZoom && o9 > this.options.maxZoom || (void 0) !== this.options.minZoom && o9 < this.options.minZoom ? void 0 : this._clampZoom(o9), s8 = this.options.updateWhenZooming && o9 !== this._tileZoom;
            n10 && !s8 || (this._tileZoom = o9, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), (void 0) !== o9 && this._update(t6), e9 || this._pruneTiles(), this._noPrune = !!e9), this._setZoomTransforms(t6, i8);
        },
        _setZoomTransforms: function(t6, i8) {
            for(var e9 in this._levels)this._setZoomTransform(this._levels[e9], t6, i8);
        },
        _setZoomTransform: function(t6, i8, e9) {
            var n10 = this._map.getZoomScale(e9, t6.zoom), o9 = t6.origin.multiplyBy(n10).subtract(this._map._getNewPixelOrigin(i8, e9)).round();
            vt ? gi(t6.el, o9, n10) : vi(t6.el, o9);
        },
        _resetGrid: function() {
            var t6 = this._map, i8 = t6.options.crs, e9 = this._tileSize = this.getTileSize(), n10 = this._tileZoom, o9 = this._map.getPixelWorldBounds(this._tileZoom);
            o9 && (this._globalTileRange = this._pxBoundsToTileRange(o9)), this._wrapX = i8.wrapLng && !this.options.noWrap && [
                Math.floor(t6.project([
                    0,
                    i8.wrapLng[0]
                ], n10).x / e9.x),
                Math.ceil(t6.project([
                    0,
                    i8.wrapLng[1]
                ], n10).x / e9.y)
            ], this._wrapY = i8.wrapLat && !this.options.noWrap && [
                Math.floor(t6.project([
                    i8.wrapLat[0],
                    0
                ], n10).y / e9.x),
                Math.ceil(t6.project([
                    i8.wrapLat[1],
                    0
                ], n10).y / e9.y)
            ];
        },
        _onMoveEnd: function() {
            this._map && !this._map._animatingZoom && this._update();
        },
        _getTiledPixelBounds: function(t6) {
            var i8 = this._map, e9 = i8._animatingZoom ? Math.max(i8._animateToZoom, i8.getZoom()) : i8.getZoom(), n10 = i8.getZoomScale(e9, this._tileZoom), o9 = i8.project(t6, this._tileZoom).floor(), s8 = i8.getSize().divideBy(2 * n10);
            return new I(o9.subtract(s8), o9.add(s8));
        },
        _update: function(t6) {
            var i8 = this._map;
            if (i8) {
                var e9 = this._clampZoom(i8.getZoom());
                if ((void 0) === t6 && (t6 = i8.getCenter()), (void 0) !== this._tileZoom) {
                    var n10 = this._getTiledPixelBounds(t6), o9 = this._pxBoundsToTileRange(n10), s8 = o9.getCenter(), r8 = [], a6 = this.options.keepBuffer, h3 = new I(o9.getBottomLeft().subtract([
                        a6,
                        -a6
                    ]), o9.getTopRight().add([
                        a6,
                        -a6
                    ]));
                    if (!(isFinite(o9.min.x) && isFinite(o9.min.y) && isFinite(o9.max.x) && isFinite(o9.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                    for(var u1 in this._tiles){
                        var l1 = this._tiles[u1].coords;
                        l1.z === this._tileZoom && h3.contains(new k(l1.x, l1.y)) || (this._tiles[u1].current = false);
                    }
                    if (1 < Math.abs(e9 - this._tileZoom)) this._setView(t6, e9);
                    else {
                        for(var c3 = o9.min.y; c3 <= o9.max.y; c3++)for(var _1 = o9.min.x; _1 <= o9.max.x; _1++){
                            var d1, p1 = new k(_1, c3);
                            p1.z = this._tileZoom, this._isValidTile(p1) && ((d1 = this._tiles[this._tileCoordsToKey(p1)]) ? d1.current = true : r8.push(p1));
                        }
                        if (r8.sort(function(t7, i9) {
                            return t7.distanceTo(s8) - i9.distanceTo(s8);
                        }), 0 !== r8.length) {
                            this._loading || (this._loading = true, this.fire("loading"));
                            for(var m1 = document.createDocumentFragment(), _1 = 0; _1 < r8.length; _1++)this._addTile(r8[_1], m1);
                            this._level.el.appendChild(m1);
                        }
                    }
                }
            }
        },
        _isValidTile: function(t6) {
            var i8 = this._map.options.crs;
            if (!i8.infinite) {
                var e10 = this._globalTileRange;
                if (!i8.wrapLng && (t6.x < e10.min.x || t6.x > e10.max.x) || !i8.wrapLat && (t6.y < e10.min.y || t6.y > e10.max.y)) return false;
            }
            if (!this.options.bounds) return true;
            var n11 = this._tileCoordsToBounds(t6);
            return N(this.options.bounds).overlaps(n11);
        },
        _keyToBounds: function(t6) {
            return this._tileCoordsToBounds(this._keyToTileCoords(t6));
        },
        _tileCoordsToNwSe: function(t6) {
            var i8 = this._map, e11 = this.getTileSize(), n11 = t6.scaleBy(e11), o10 = n11.add(e11);
            return [
                i8.unproject(n11, t6.z),
                i8.unproject(o10, t6.z)
            ];
        },
        _tileCoordsToBounds: function(t6) {
            var i8 = this._tileCoordsToNwSe(t6), e11 = new R(i8[0], i8[1]);
            return this.options.noWrap || (e11 = this._map.wrapLatLngBounds(e11)), e11;
        },
        _tileCoordsToKey: function(t6) {
            return t6.x + ":" + t6.y + ":" + t6.z;
        },
        _keyToTileCoords: function(t6) {
            var i8 = t6.split(":"), e11 = new k(+i8[0], +i8[1]);
            return e11.z = +i8[2], e11;
        },
        _removeTile: function(t6) {
            var i8 = this._tiles[t6];
            i8 && (ri(i8.el), delete this._tiles[t6], this.fire("tileunload", {
                tile: i8.el,
                coords: this._keyToTileCoords(t6)
            }));
        },
        _initTile: function(t6) {
            ci(t6, "leaflet-tile");
            var i8 = this.getTileSize();
            t6.style.width = i8.x + "px", t6.style.height = i8.y + "px", t6.onselectstart = a, t6.onmousemove = a, it && this.options.opacity < 1 && mi(t6, this.options.opacity), ot && !st && (t6.style.WebkitBackfaceVisibility = "hidden");
        },
        _addTile: function(t6, i8) {
            var e11 = this._getTilePos(t6), n11 = this._tileCoordsToKey(t6), o10 = this.createTile(this._wrapCoords(t6), p(this._tileReady, this, t6));
            this._initTile(o10), this.createTile.length < 2 && M(p(this._tileReady, this, t6, null, o10)), vi(o10, e11), this._tiles[n11] = {
                el: o10,
                coords: t6,
                current: true
            }, i8.appendChild(o10), this.fire("tileloadstart", {
                tile: o10,
                coords: t6
            });
        },
        _tileReady: function(t6, i8, e11) {
            i8 && this.fire("tileerror", {
                error: i8,
                tile: e11,
                coords: t6
            });
            var n11 = this._tileCoordsToKey(t6);
            (e11 = this._tiles[n11]) && (e11.loaded = +new Date, this._map._fadeAnimated ? (mi(e11.el, 0), z(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this)) : (e11.active = true, this._pruneTiles()), i8 || (ci(e11.el, "leaflet-tile-loaded"), this.fire("tileload", {
                tile: e11.el,
                coords: t6
            })), this._noTilesToLoad() && (this._loading = false, this.fire("load"), it || !this._map._fadeAnimated ? M(this._pruneTiles, this) : setTimeout(p(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(t6) {
            return t6.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(t6) {
            var i8 = new k(this._wrapX ? o(t6.x, this._wrapX) : t6.x, this._wrapY ? o(t6.y, this._wrapY) : t6.y);
            return i8.z = t6.z, i8;
        },
        _pxBoundsToTileRange: function(t6) {
            var i8 = this.getTileSize();
            return new I(t6.min.unscaleBy(i8).floor(), t6.max.unscaleBy(i8).ceil().subtract([
                1,
                1
            ]));
        },
        _noTilesToLoad: function() {
            for(var t6 in this._tiles)if (!this._tiles[t6].loaded) return false;
            return true;
        }
    });
    var sn = on.extend({
        options: {
            minZoom: 0,
            maxZoom: 18,
            subdomains: "abc",
            errorTileUrl: "",
            zoomOffset: 0,
            tms: false,
            zoomReverse: false,
            detectRetina: false,
            crossOrigin: false
        },
        initialize: function(t6, i8) {
            this._url = t6, (i8 = c(this, i8)).detectRetina && zt && 0 < i8.maxZoom && (i8.tileSize = Math.floor(i8.tileSize / 2), i8.zoomReverse ? (i8.zoomOffset--, i8.minZoom++) : (i8.zoomOffset++, i8.maxZoom--), i8.minZoom = Math.max(0, i8.minZoom)), "string" == typeof i8.subdomains && (i8.subdomains = i8.subdomains.split("")), ot || this.on("tileunload", this._onTileRemove);
        },
        setUrl: function(t6, i8) {
            return this._url === t6 && (void 0) === i8 && (i8 = true), this._url = t6, i8 || this.redraw(), this;
        },
        createTile: function(t6, i8) {
            var e11 = document.createElement("img");
            return zi(e11, "load", p(this._tileOnLoad, this, i8, e11)), zi(e11, "error", p(this._tileOnError, this, i8, e11)), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e11.crossOrigin = true === this.options.crossOrigin ? "" : this.options.crossOrigin), e11.alt = "", e11.setAttribute("role", "presentation"), e11.src = this.getTileUrl(t6), e11;
        },
        getTileUrl: function(t6) {
            var i8, e11 = {
                r: zt ? "@2x" : "",
                s: this._getSubdomain(t6),
                x: t6.x,
                y: t6.y,
                z: this._getZoomForUrl()
            };
            return this._map && !this._map.options.crs.infinite && (i8 = this._globalTileRange.max.y - t6.y, this.options.tms && (e11.y = i8), e11["-y"] = i8), f(this._url, h(e11, this.options));
        },
        _tileOnLoad: function(t6, i8) {
            it ? setTimeout(p(t6, this, null, i8), 0) : t6(null, i8);
        },
        _tileOnError: function(t6, i8, e11) {
            var n11 = this.options.errorTileUrl;
            n11 && i8.getAttribute("src") !== n11 && (i8.src = n11), t6(e11, i8);
        },
        _onTileRemove: function(t6) {
            t6.tile.onload = null;
        },
        _getZoomForUrl: function() {
            var t6 = this._tileZoom, i8 = this.options.maxZoom;
            return this.options.zoomReverse && (t6 = i8 - t6), t6 + this.options.zoomOffset;
        },
        _getSubdomain: function(t6) {
            var i8 = Math.abs(t6.x + t6.y) % this.options.subdomains.length;
            return this.options.subdomains[i8];
        },
        _abortLoading: function() {
            var t6, i8;
            for(t6 in this._tiles)this._tiles[t6].coords.z !== this._tileZoom && ((i8 = this._tiles[t6].el).onload = a, i8.onerror = a, i8.complete || (i8.src = y, ri(i8), delete this._tiles[t6]));
        },
        _removeTile: function(t6) {
            var i8 = this._tiles[t6];
            if (i8) return at || i8.el.setAttribute("src", y), on.prototype._removeTile.call(this, t6);
        },
        _tileReady: function(t6, i8, e11) {
            if (this._map && (!e11 || e11.getAttribute("src") !== y)) return on.prototype._tileReady.call(this, t6, i8, e11);
        }
    });
    function rn(t6, i8) {
        return new sn(t6, i8);
    }
    var an = sn.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: false,
            version: "1.1.1"
        },
        options: {
            crs: null,
            uppercase: false
        },
        initialize: function(t6, i8) {
            this._url = t6;
            var e11 = h({
            }, this.defaultWmsParams);
            for(var n11 in i8)n11 in this.options || (e11[n11] = i8[n11]);
            var o10 = (i8 = c(this, i8)).detectRetina && zt ? 2 : 1, s9 = this.getTileSize();
            e11.width = s9.x * o10, e11.height = s9.y * o10, this.wmsParams = e11;
        },
        onAdd: function(t6) {
            this._crs = this.options.crs || t6.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
            var i8 = 1.3 <= this._wmsVersion ? "crs" : "srs";
            this.wmsParams[i8] = this._crs.code, sn.prototype.onAdd.call(this, t6);
        },
        getTileUrl: function(t6) {
            var i8 = this._tileCoordsToNwSe(t6), e11 = this._crs, n11 = O(e11.project(i8[0]), e11.project(i8[1])), o10 = n11.min, s9 = n11.max, r9 = (1.3 <= this._wmsVersion && this._crs === be ? [
                o10.y,
                o10.x,
                s9.y,
                s9.x
            ] : [
                o10.x,
                o10.y,
                s9.x,
                s9.y
            ]).join(","), a7 = sn.prototype.getTileUrl.call(this, t6);
            return a7 + _(this.wmsParams, a7, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r9;
        },
        setParams: function(t6, i8) {
            return h(this.wmsParams, t6), i8 || this.redraw(), this;
        }
    });
    sn.WMS = an, rn.wms = function(t6, i8) {
        return new an(t6, i8);
    };
    var hn = Me.extend({
        options: {
            padding: 0.1,
            tolerance: 0
        },
        initialize: function(t6) {
            c(this, t6), m(this), this._layers = this._layers || {
            };
        },
        onAdd: function() {
            this._container || (this._initContainer(), this._zoomAnimated && ci(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
        },
        onRemove: function() {
            this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function() {
            var t6 = {
                viewreset: this._reset,
                zoom: this._onZoom,
                moveend: this._update,
                zoomend: this._onZoomEnd
            };
            return this._zoomAnimated && (t6.zoomanim = this._onAnimZoom), t6;
        },
        _onAnimZoom: function(t6) {
            this._updateTransform(t6.center, t6.zoom);
        },
        _onZoom: function() {
            this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function(t6, i8) {
            var e11 = this._map.getZoomScale(i8, this._zoom), n11 = yi(this._container), o10 = this._map.getSize().multiplyBy(0.5 + this.options.padding), s9 = this._map.project(this._center, i8), r9 = this._map.project(t6, i8).subtract(s9), a7 = o10.multiplyBy(-e11).add(n11).add(o10).subtract(r9);
            vt ? gi(this._container, a7, e11) : vi(this._container, a7);
        },
        _reset: function() {
            for(var t6 in this._update(), this._updateTransform(this._center, this._zoom), this._layers)this._layers[t6]._reset();
        },
        _onZoomEnd: function() {
            for(var t6 in this._layers)this._layers[t6]._project();
        },
        _updatePaths: function() {
            for(var t6 in this._layers)this._layers[t6]._update();
        },
        _update: function() {
            var t6 = this.options.padding, i8 = this._map.getSize(), e11 = this._map.containerPointToLayerPoint(i8.multiplyBy(-t6)).round();
            this._bounds = new I(e11, e11.add(i8.multiplyBy(1 + 2 * t6)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
    }), un = hn.extend({
        getEvents: function() {
            var t6 = hn.prototype.getEvents.call(this);
            return t6.viewprereset = this._onViewPreReset, t6;
        },
        _onViewPreReset: function() {
            this._postponeUpdatePaths = true;
        },
        onAdd: function() {
            hn.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
            var t6 = this._container = document.createElement("canvas");
            zi(t6, "mousemove", this._onMouseMove, this), zi(t6, "click dblclick mousedown mouseup contextmenu", this._onClick, this), zi(t6, "mouseout", this._handleMouseOut, this), this._ctx = t6.getContext("2d");
        },
        _destroyContainer: function() {
            z(this._redrawRequest), delete this._ctx, ri(this._container), Si(this._container), delete this._container;
        },
        _updatePaths: function() {
            if (!this._postponeUpdatePaths) {
                for(var t6 in this._redrawBounds = null, this._layers)this._layers[t6]._update();
                this._redraw();
            }
        },
        _update: function() {
            var t7, i8, e11, n11;
            this._map._animatingZoom && this._bounds || (hn.prototype._update.call(this), t7 = this._bounds, i8 = this._container, e11 = t7.getSize(), n11 = zt ? 2 : 1, vi(i8, t7.min), i8.width = n11 * e11.x, i8.height = n11 * e11.y, i8.style.width = e11.x + "px", i8.style.height = e11.y + "px", zt && this._ctx.scale(2, 2), this._ctx.translate(-t7.min.x, -t7.min.y), this.fire("update"));
        },
        _reset: function() {
            hn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = false, this._updatePaths());
        },
        _initPath: function(t7) {
            this._updateDashArray(t7);
            var i8 = (this._layers[m(t7)] = t7)._order = {
                layer: t7,
                prev: this._drawLast,
                next: null
            };
            this._drawLast && (this._drawLast.next = i8), this._drawLast = i8, this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath: function(t7) {
            this._requestRedraw(t7);
        },
        _removePath: function(t7) {
            var i8 = t7._order, e11 = i8.next, n11 = i8.prev;
            e11 ? e11.prev = n11 : this._drawLast = n11, n11 ? n11.next = e11 : this._drawFirst = e11, delete t7._order, delete this._layers[m(t7)], this._requestRedraw(t7);
        },
        _updatePath: function(t7) {
            this._extendRedrawBounds(t7), t7._project(), t7._update(), this._requestRedraw(t7);
        },
        _updateStyle: function(t7) {
            this._updateDashArray(t7), this._requestRedraw(t7);
        },
        _updateDashArray: function(t7) {
            if ("string" == typeof t7.options.dashArray) {
                for(var i8, e11 = t7.options.dashArray.split(/[, ]+/), n11 = [], o10 = 0; o10 < e11.length; o10++){
                    if (i8 = Number(e11[o10]), isNaN(i8)) return;
                    n11.push(i8);
                }
                t7.options._dashArray = n11;
            } else t7.options._dashArray = t7.options.dashArray;
        },
        _requestRedraw: function(t7) {
            this._map && (this._extendRedrawBounds(t7), this._redrawRequest = this._redrawRequest || M(this._redraw, this));
        },
        _extendRedrawBounds: function(t7) {
            var i9;
            t7._pxBounds && (i9 = (t7.options.weight || 0) + 1, this._redrawBounds = this._redrawBounds || new I, this._redrawBounds.extend(t7._pxBounds.min.subtract([
                i9,
                i9
            ])), this._redrawBounds.extend(t7._pxBounds.max.add([
                i9,
                i9
            ])));
        },
        _redraw: function() {
            this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
        },
        _clear: function() {
            var t7, i9 = this._redrawBounds;
            i9 ? (t7 = i9.getSize(), this._ctx.clearRect(i9.min.x, i9.min.y, t7.x, t7.y)) : (this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore());
        },
        _draw: function() {
            var t7, i9, e12 = this._redrawBounds;
            this._ctx.save(), e12 && (i9 = e12.getSize(), this._ctx.beginPath(), this._ctx.rect(e12.min.x, e12.min.y, i9.x, i9.y), this._ctx.clip()), this._drawing = true;
            for(var n12 = this._drawFirst; n12; n12 = n12.next)t7 = n12.layer, (!e12 || t7._pxBounds && t7._pxBounds.intersects(e12)) && t7._updatePath();
            this._drawing = false, this._ctx.restore();
        },
        _updatePoly: function(t7, i9) {
            if (this._drawing) {
                var e12, n12, o11, s9, r9 = t7._parts, a7 = r9.length, h4 = this._ctx;
                if (a7) {
                    for(h4.beginPath(), e12 = 0; e12 < a7; e12++){
                        for(n12 = 0, o11 = r9[e12].length; n12 < o11; n12++)s9 = r9[e12][n12], h4[n12 ? "lineTo" : "moveTo"](s9.x, s9.y);
                        i9 && h4.closePath();
                    }
                    this._fillStroke(h4, t7);
                }
            }
        },
        _updateCircle: function(t7) {
            var i9, e13, n13, o12;
            this._drawing && !t7._empty() && (i9 = t7._point, e13 = this._ctx, n13 = Math.max(Math.round(t7._radius), 1), 1 != (o12 = (Math.max(Math.round(t7._radiusY), 1) || n13) / n13) && (e13.save(), e13.scale(1, o12)), e13.beginPath(), e13.arc(i9.x, i9.y / o12, n13, 0, 2 * Math.PI, false), 1 != o12 && e13.restore(), this._fillStroke(e13, t7));
        },
        _fillStroke: function(t7, i9) {
            var e13 = i9.options;
            e13.fill && (t7.globalAlpha = e13.fillOpacity, t7.fillStyle = e13.fillColor || e13.color, t7.fill(e13.fillRule || "evenodd")), e13.stroke && 0 !== e13.weight && (t7.setLineDash && t7.setLineDash(i9.options && i9.options._dashArray || []), t7.globalAlpha = e13.opacity, t7.lineWidth = e13.weight, t7.strokeStyle = e13.color, t7.lineCap = e13.lineCap, t7.lineJoin = e13.lineJoin, t7.stroke());
        },
        _onClick: function(t7) {
            for(var i9, e13, n13 = this._map.mouseEventToLayerPoint(t7), o12 = this._drawFirst; o12; o12 = o12.next)(i9 = o12.layer).options.interactive && i9._containsPoint(n13) && (("click" === t7.type || "preclick" !== t7.type) && this._map._draggableMoved(i9) || (e13 = i9));
            e13 && (Fi(t7), this._fireEvent([
                e13
            ], t7));
        },
        _onMouseMove: function(t7) {
            var i9;
            !this._map || this._map.dragging.moving() || this._map._animatingZoom || (i9 = this._map.mouseEventToLayerPoint(t7), this._handleMouseHover(t7, i9));
        },
        _handleMouseOut: function(t7) {
            var i9 = this._hoveredLayer;
            i9 && (_i(this._container, "leaflet-interactive"), this._fireEvent([
                i9
            ], t7, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = false);
        },
        _handleMouseHover: function(t7, i9) {
            if (!this._mouseHoverThrottled) {
                for(var e13, n13, o12 = this._drawFirst; o12; o12 = o12.next)(e13 = o12.layer).options.interactive && e13._containsPoint(i9) && (n13 = e13);
                n13 !== this._hoveredLayer && (this._handleMouseOut(t7), n13 && (ci(this._container, "leaflet-interactive"), this._fireEvent([
                    n13
                ], t7, "mouseover"), this._hoveredLayer = n13)), this._hoveredLayer && this._fireEvent([
                    this._hoveredLayer
                ], t7), this._mouseHoverThrottled = true, setTimeout(p(function() {
                    this._mouseHoverThrottled = false;
                }, this), 32);
            }
        },
        _fireEvent: function(t7, i9, e14) {
            this._map._fireDOMEvent(i9, e14 || i9.type, t7);
        },
        _bringToFront: function(t7) {
            var i9, e14, n14 = t7._order;
            n14 && (i9 = n14.next, e14 = n14.prev, i9 && ((i9.prev = e14) ? e14.next = i9 : i9 && (this._drawFirst = i9), n14.prev = this._drawLast, (this._drawLast.next = n14).next = null, this._drawLast = n14, this._requestRedraw(t7)));
        },
        _bringToBack: function(t7) {
            var i9, e14, n14 = t7._order;
            n14 && (i9 = n14.next, (e14 = n14.prev) && ((e14.next = i9) ? i9.prev = e14 : e14 && (this._drawLast = e14), n14.prev = null, n14.next = this._drawFirst, this._drawFirst.prev = n14, this._drawFirst = n14, this._requestRedraw(t7)));
        }
    });
    function ln(t7) {
        return St ? new un(t7) : null;
    }
    var cn = function() {
        try {
            return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t7) {
                return document.createElement("<lvml:" + t7 + ' class="lvml">');
            };
        } catch (t7) {
            return function(t8) {
                return document.createElement("<" + t8 + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
            };
        }
    }(), _n = {
        _initContainer: function() {
            this._container = si("div", "leaflet-vml-container");
        },
        _update: function() {
            this._map._animatingZoom || (hn.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(t7) {
            var i9 = t7._container = cn("shape");
            ci(i9, "leaflet-vml-shape " + (this.options.className || "")), i9.coordsize = "1 1", t7._path = cn("path"), i9.appendChild(t7._path), this._updateStyle(t7), this._layers[m(t7)] = t7;
        },
        _addPath: function(t7) {
            var i9 = t7._container;
            this._container.appendChild(i9), t7.options.interactive && t7.addInteractiveTarget(i9);
        },
        _removePath: function(t7) {
            var i9 = t7._container;
            ri(i9), t7.removeInteractiveTarget(i9), delete this._layers[m(t7)];
        },
        _updateStyle: function(t7) {
            var i9 = t7._stroke, e14 = t7._fill, n14 = t7.options, o13 = t7._container;
            o13.stroked = !!n14.stroke, o13.filled = !!n14.fill, n14.stroke ? (i9 = i9 || (t7._stroke = cn("stroke")), o13.appendChild(i9), i9.weight = n14.weight + "px", i9.color = n14.color, i9.opacity = n14.opacity, n14.dashArray ? i9.dashStyle = g(n14.dashArray) ? n14.dashArray.join(" ") : n14.dashArray.replace(/( *, *)/g, " ") : i9.dashStyle = "", i9.endcap = n14.lineCap.replace("butt", "flat"), i9.joinstyle = n14.lineJoin) : i9 && (o13.removeChild(i9), t7._stroke = null), n14.fill ? (e14 = e14 || (t7._fill = cn("fill")), o13.appendChild(e14), e14.color = n14.fillColor || n14.color, e14.opacity = n14.fillOpacity) : e14 && (o13.removeChild(e14), t7._fill = null);
        },
        _updateCircle: function(t7) {
            var i9 = t7._point.round(), e14 = Math.round(t7._radius), n14 = Math.round(t7._radiusY || e14);
            this._setPath(t7, t7._empty() ? "M0 0" : "AL " + i9.x + "," + i9.y + " " + e14 + "," + n14 + " 0,23592600");
        },
        _setPath: function(t7, i9) {
            t7._path.v = i9;
        },
        _bringToFront: function(t7) {
            hi(t7._container);
        },
        _bringToBack: function(t7) {
            ui(t7._container);
        }
    }, dn = Et ? cn : J, pn = hn.extend({
        getEvents: function() {
            var t7 = hn.prototype.getEvents.call(this);
            return t7.zoomstart = this._onZoomStart, t7;
        },
        _initContainer: function() {
            this._container = dn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = dn("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
            ri(this._container), Si(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _onZoomStart: function() {
            this._update();
        },
        _update: function() {
            var t7, i9, e14;
            this._map._animatingZoom && this._bounds || (hn.prototype._update.call(this), i9 = (t7 = this._bounds).getSize(), e14 = this._container, this._svgSize && this._svgSize.equals(i9) || (this._svgSize = i9, e14.setAttribute("width", i9.x), e14.setAttribute("height", i9.y)), vi(e14, t7.min), e14.setAttribute("viewBox", [
                t7.min.x,
                t7.min.y,
                i9.x,
                i9.y
            ].join(" ")), this.fire("update"));
        },
        _initPath: function(t7) {
            var i9 = t7._path = dn("path");
            t7.options.className && ci(i9, t7.options.className), t7.options.interactive && ci(i9, "leaflet-interactive"), this._updateStyle(t7), this._layers[m(t7)] = t7;
        },
        _addPath: function(t7) {
            this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t7._path), t7.addInteractiveTarget(t7._path);
        },
        _removePath: function(t7) {
            ri(t7._path), t7.removeInteractiveTarget(t7._path), delete this._layers[m(t7)];
        },
        _updatePath: function(t7) {
            t7._project(), t7._update();
        },
        _updateStyle: function(t7) {
            var i9 = t7._path, e14 = t7.options;
            i9 && (e14.stroke ? (i9.setAttribute("stroke", e14.color), i9.setAttribute("stroke-opacity", e14.opacity), i9.setAttribute("stroke-width", e14.weight), i9.setAttribute("stroke-linecap", e14.lineCap), i9.setAttribute("stroke-linejoin", e14.lineJoin), e14.dashArray ? i9.setAttribute("stroke-dasharray", e14.dashArray) : i9.removeAttribute("stroke-dasharray"), e14.dashOffset ? i9.setAttribute("stroke-dashoffset", e14.dashOffset) : i9.removeAttribute("stroke-dashoffset")) : i9.setAttribute("stroke", "none"), e14.fill ? (i9.setAttribute("fill", e14.fillColor || e14.color), i9.setAttribute("fill-opacity", e14.fillOpacity), i9.setAttribute("fill-rule", e14.fillRule || "evenodd")) : i9.setAttribute("fill", "none"));
        },
        _updatePoly: function(t7, i9) {
            this._setPath(t7, $(t7._parts, i9));
        },
        _updateCircle: function(t7) {
            var i9 = t7._point, e14 = Math.max(Math.round(t7._radius), 1), n14 = "a" + e14 + "," + (Math.max(Math.round(t7._radiusY), 1) || e14) + " 0 1,0 ", o13 = t7._empty() ? "M0 0" : "M" + (i9.x - e14) + "," + i9.y + n14 + 2 * e14 + ",0 " + n14 + 2 * -e14 + ",0 ";
            this._setPath(t7, o13);
        },
        _setPath: function(t7, i9) {
            t7._path.setAttribute("d", i9);
        },
        _bringToFront: function(t7) {
            hi(t7._path);
        },
        _bringToBack: function(t7) {
            ui(t7._path);
        }
    });
    function mn(t7) {
        return Zt || Et ? new pn(t7) : null;
    }
    Et && pn.include(_n), Ki.include({
        getRenderer: function(t7) {
            var i9 = (i9 = t7.options.renderer || this._getPaneRenderer(t7.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());
            return this.hasLayer(i9) || this.addLayer(i9), i9;
        },
        _getPaneRenderer: function(t7) {
            if ("overlayPane" === t7 || (void 0) === t7) return false;
            var i9 = this._paneRenderers[t7];
            return (void 0) === i9 && (i9 = this._createRenderer({
                pane: t7
            }), this._paneRenderers[t7] = i9), i9;
        },
        _createRenderer: function(t7) {
            return this.options.preferCanvas && ln(t7) || mn(t7);
        }
    });
    var fn = Re.extend({
        initialize: function(t7, i9) {
            Re.prototype.initialize.call(this, this._boundsToLatLngs(t7), i9);
        },
        setBounds: function(t7) {
            return this.setLatLngs(this._boundsToLatLngs(t7));
        },
        _boundsToLatLngs: function(t7) {
            return [
                (t7 = N(t7)).getSouthWest(),
                t7.getNorthWest(),
                t7.getNorthEast(),
                t7.getSouthEast()
            ];
        }
    });
    pn.create = dn, pn.pointsToPath = $, Ne.geometryToLayer = De, Ne.coordsToLatLng = We, Ne.coordsToLatLngs = He, Ne.latLngToCoords = Fe, Ne.latLngsToCoords = Ue, Ne.getFeature = Ve, Ne.asFeature = qe, Ki.mergeOptions({
        boxZoom: true
    });
    var gn = ie.extend({
        initialize: function(t7) {
            this._map = t7, this._container = t7._container, this._pane = t7._panes.overlayPane, this._resetStateTimeout = 0, t7.on("unload", this._destroy, this);
        },
        addHooks: function() {
            zi(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
            Si(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
            return this._moved;
        },
        _destroy: function() {
            ri(this._pane), delete this._pane;
        },
        _resetState: function() {
            this._resetStateTimeout = 0, this._moved = false;
        },
        _clearDeferredResetState: function() {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
        },
        _onMouseDown: function(t7) {
            if (!t7.shiftKey || 1 !== t7.which && 1 !== t7.button) return false;
            this._clearDeferredResetState(), this._resetState(), Xt(), xi(), this._startPoint = this._map.mouseEventToContainerPoint(t7), zi(document, {
                contextmenu: Ni,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this);
        },
        _onMouseMove: function(t7) {
            this._moved || (this._moved = true, this._box = si("div", "leaflet-zoom-box", this._container), ci(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t7);
            var i9 = new I(this._point, this._startPoint), e14 = i9.getSize();
            vi(this._box, i9.min), this._box.style.width = e14.x + "px", this._box.style.height = e14.y + "px";
        },
        _finish: function() {
            this._moved && (ri(this._box), _i(this._container, "leaflet-crosshair")), Jt(), wi(), Si(document, {
                contextmenu: Ni,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this);
        },
        _onMouseUp: function(t7) {
            var i9;
            1 !== t7.which && 1 !== t7.button || (this._finish(), this._moved && (this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(p(this._resetState, this), 0), i9 = new R(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point)), this._map.fitBounds(i9).fire("boxzoomend", {
                boxZoomBounds: i9
            })));
        },
        _onKeyDown: function(t7) {
            27 === t7.keyCode && this._finish();
        }
    });
    Ki.addInitHook("addHandler", "boxZoom", gn), Ki.mergeOptions({
        doubleClickZoom: true
    });
    var vn = ie.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(t7) {
            var i9 = this._map, e14 = i9.getZoom(), n14 = i9.options.zoomDelta, o13 = t7.originalEvent.shiftKey ? e14 - n14 : e14 + n14;
            "center" === i9.options.doubleClickZoom ? i9.setZoom(o13) : i9.setZoomAround(t7.containerPoint, o13);
        }
    });
    Ki.addInitHook("addHandler", "doubleClickZoom", vn), Ki.mergeOptions({
        dragging: true,
        inertia: !st,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: false,
        maxBoundsViscosity: 0
    });
    var yn = ie.extend({
        addHooks: function() {
            var t7;
            this._draggable || (t7 = this._map, this._draggable = new ae(t7._mapPane, t7._container), this._draggable.on({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t7.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t7.on("zoomend", this._onZoomEnd, this), t7.whenReady(this._onZoomEnd, this))), ci(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
            _i(this._map._container, "leaflet-grab"), _i(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
        },
        moved: function() {
            return this._draggable && this._draggable._moved;
        },
        moving: function() {
            return this._draggable && this._draggable._moving;
        },
        _onDragStart: function() {
            var t7, i9 = this._map;
            i9._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t7 = N(this._map.options.maxBounds), this._offsetLimit = O(this._map.latLngToContainerPoint(t7.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t7.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null, i9.fire("movestart").fire("dragstart"), i9.options.inertia && (this._positions = [], this._times = []);
        },
        _onDrag: function(t7) {
            var i9, e14;
            this._map.options.inertia && (i9 = this._lastTime = +new Date, e14 = this._lastPos = this._draggable._absPos || this._draggable._newPos, this._positions.push(e14), this._times.push(i9), this._prunePositions(i9)), this._map.fire("move", t7).fire("drag", t7);
        },
        _prunePositions: function(t7) {
            for(; 1 < this._positions.length && 50 < t7 - this._times[0];)this._positions.shift(), this._times.shift();
        },
        _onZoomEnd: function() {
            var t7 = this._map.getSize().divideBy(2), i9 = this._map.latLngToLayerPoint([
                0,
                0
            ]);
            this._initialWorldOffset = i9.subtract(t7).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit: function(t7, i9) {
            return t7 - (t7 - i9) * this._viscosity;
        },
        _onPreDragLimit: function() {
            var t7, i9;
            this._viscosity && this._offsetLimit && (t7 = this._draggable._newPos.subtract(this._draggable._startPos), i9 = this._offsetLimit, t7.x < i9.min.x && (t7.x = this._viscousLimit(t7.x, i9.min.x)), t7.y < i9.min.y && (t7.y = this._viscousLimit(t7.y, i9.min.y)), t7.x > i9.max.x && (t7.x = this._viscousLimit(t7.x, i9.max.x)), t7.y > i9.max.y && (t7.y = this._viscousLimit(t7.y, i9.max.y)), this._draggable._newPos = this._draggable._startPos.add(t7));
        },
        _onPreDragWrap: function() {
            var t7 = this._worldWidth, i9 = Math.round(t7 / 2), e14 = this._initialWorldOffset, n14 = this._draggable._newPos.x, o13 = (n14 - i9 + e14) % t7 + i9 - e14, s10 = (n14 + i9 + e14) % t7 - i9 - e14, r10 = Math.abs(o13 + e14) < Math.abs(s10 + e14) ? o13 : s10;
            this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r10;
        },
        _onDragEnd: function(t7) {
            var i9, e14, n14, o13, s10, r10, a8, h5, u2, l2 = this._map, c4 = l2.options, _2 = !c4.inertia || this._times.length < 2;
            l2.fire("dragend", t7), _2 ? l2.fire("moveend") : (this._prunePositions(+new Date), i9 = this._lastPos.subtract(this._positions[0]), e14 = (this._lastTime - this._times[0]) / 1000, n14 = c4.easeLinearity, s10 = (o13 = i9.multiplyBy(n14 / e14)).distanceTo([
                0,
                0
            ]), r10 = Math.min(c4.inertiaMaxSpeed, s10), a8 = o13.multiplyBy(r10 / s10), h5 = r10 / (c4.inertiaDeceleration * n14), (u2 = a8.multiplyBy(-h5 / 2).round()).x || u2.y ? (u2 = l2._limitOffset(u2, l2.options.maxBounds), M(function() {
                l2.panBy(u2, {
                    duration: h5,
                    easeLinearity: n14,
                    noMoveStart: true,
                    animate: true
                });
            })) : l2.fire("moveend"));
        }
    });
    Ki.addInitHook("addHandler", "dragging", yn), Ki.mergeOptions({
        keyboard: true,
        keyboardPanDelta: 80
    });
    var xn = ie.extend({
        keyCodes: {
            left: [
                37
            ],
            right: [
                39
            ],
            down: [
                40
            ],
            up: [
                38
            ],
            zoomIn: [
                187,
                107,
                61,
                171
            ],
            zoomOut: [
                189,
                109,
                54,
                173
            ]
        },
        initialize: function(t7) {
            this._map = t7, this._setPanDelta(t7.options.keyboardPanDelta), this._setZoomDelta(t7.options.zoomDelta);
        },
        addHooks: function() {
            var t7 = this._map._container;
            t7.tabIndex <= 0 && (t7.tabIndex = "0"), zi(t7, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this);
        },
        removeHooks: function() {
            this._removeHooks(), Si(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this);
        },
        _onMouseDown: function() {
            var t7, i9, e14, n14;
            this._focused || (t7 = document.body, i9 = document.documentElement, e14 = t7.scrollTop || i9.scrollTop, n14 = t7.scrollLeft || i9.scrollLeft, this._map._container.focus(), window.scrollTo(n14, e14));
        },
        _onFocus: function() {
            this._focused = true, this._map.fire("focus");
        },
        _onBlur: function() {
            this._focused = false, this._map.fire("blur");
        },
        _setPanDelta: function(t7) {
            for(var i9 = this._panKeys = {
            }, e14 = this.keyCodes, n14 = 0, o13 = e14.left.length; n14 < o13; n14++)i9[e14.left[n14]] = [
                -1 * t7,
                0
            ];
            for(n14 = 0, o13 = e14.right.length; n14 < o13; n14++)i9[e14.right[n14]] = [
                t7,
                0
            ];
            for(n14 = 0, o13 = e14.down.length; n14 < o13; n14++)i9[e14.down[n14]] = [
                0,
                t7
            ];
            for(n14 = 0, o13 = e14.up.length; n14 < o13; n14++)i9[e14.up[n14]] = [
                0,
                -1 * t7
            ];
        },
        _setZoomDelta: function(t7) {
            for(var i9 = this._zoomKeys = {
            }, e14 = this.keyCodes, n14 = 0, o13 = e14.zoomIn.length; n14 < o13; n14++)i9[e14.zoomIn[n14]] = t7;
            for(n14 = 0, o13 = e14.zoomOut.length; n14 < o13; n14++)i9[e14.zoomOut[n14]] = -t7;
        },
        _addHooks: function() {
            zi(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
            Si(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(t7) {
            if (!(t7.altKey || t7.ctrlKey || t7.metaKey)) {
                var i9, e14 = t7.keyCode, n14 = this._map;
                if (e14 in this._panKeys) n14._panAnim && n14._panAnim._inProgress || (i9 = this._panKeys[e14], t7.shiftKey && (i9 = A(i9).multiplyBy(3)), n14.panBy(i9), n14.options.maxBounds && n14.panInsideBounds(n14.options.maxBounds));
                else if (e14 in this._zoomKeys) n14.setZoom(n14.getZoom() + (t7.shiftKey ? 3 : 1) * this._zoomKeys[e14]);
                else {
                    if (27 !== e14 || !n14._popup || !n14._popup.options.closeOnEscapeKey) return;
                    n14.closePopup();
                }
                Ni(t7);
            }
        }
    });
    Ki.addInitHook("addHandler", "keyboard", xn), Ki.mergeOptions({
        scrollWheelZoom: true,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    });
    var wn = ie.extend({
        addHooks: function() {
            zi(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
            Si(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(t7) {
            var i10 = Wi(t7), e15 = this._map.options.wheelDebounceTime;
            this._delta += i10, this._lastMousePos = this._map.mouseEventToContainerPoint(t7), this._startTime || (this._startTime = +new Date);
            var n15 = Math.max(e15 - (new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(p(this._performZoom, this), n15), Ni(t7);
        },
        _performZoom: function() {
            var t7 = this._map, i10 = t7.getZoom(), e15 = this._map.options.zoomSnap || 0;
            t7._stop();
            var n15 = this._delta / (4 * this._map.options.wheelPxPerZoomLevel), o13 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n15)))) / Math.LN2, s10 = e15 ? Math.ceil(o13 / e15) * e15 : o13, r10 = t7._limitZoom(i10 + (0 < this._delta ? s10 : -s10)) - i10;
            this._delta = 0, this._startTime = null, r10 && ("center" === t7.options.scrollWheelZoom ? t7.setZoom(i10 + r10) : t7.setZoomAround(this._lastMousePos, i10 + r10));
        }
    });
    Ki.addInitHook("addHandler", "scrollWheelZoom", wn), Ki.mergeOptions({
        tap: true,
        tapTolerance: 15
    });
    var Pn = ie.extend({
        addHooks: function() {
            zi(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
            Si(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(t7) {
            if (t7.touches) {
                if (Ri(t7), this._fireClick = true, 1 < t7.touches.length) return this._fireClick = false, void clearTimeout(this._holdTimeout);
                var i10 = t7.touches[0], e15 = i10.target;
                this._startPos = this._newPos = new k(i10.clientX, i10.clientY), e15.tagName && "a" === e15.tagName.toLowerCase() && ci(e15, "leaflet-active"), this._holdTimeout = setTimeout(p(function() {
                    this._isTapValid() && (this._fireClick = false, this._onUp(), this._simulateEvent("contextmenu", i10));
                }, this), 1000), this._simulateEvent("mousedown", i10), zi(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this);
            }
        },
        _onUp: function(t7) {
            var i11, e16;
            clearTimeout(this._holdTimeout), Si(document, {
                touchmove: this._onMove,
                touchend: this._onUp
            }, this), this._fireClick && t7 && t7.changedTouches && ((e16 = (i11 = t7.changedTouches[0]).target) && e16.tagName && "a" === e16.tagName.toLowerCase() && _i(e16, "leaflet-active"), this._simulateEvent("mouseup", i11), this._isTapValid() && this._simulateEvent("click", i11));
        },
        _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _onMove: function(t7) {
            var i11 = t7.touches[0];
            this._newPos = new k(i11.clientX, i11.clientY), this._simulateEvent("mousemove", i11);
        },
        _simulateEvent: function(t7, i11) {
            var e16 = document.createEvent("MouseEvents");
            e16._simulated = true, i11.target._simulatedClick = true, e16.initMouseEvent(t7, true, true, window, 1, i11.screenX, i11.screenY, i11.clientX, i11.clientY, false, false, false, false, 0, null), i11.target.dispatchEvent(e16);
        }
    });
    !bt || Lt && !ct || Ki.addInitHook("addHandler", "tap", Pn), Ki.mergeOptions({
        touchZoom: bt && !st,
        bounceAtZoomLimits: true
    });
    var Ln = ie.extend({
        addHooks: function() {
            ci(this._map._container, "leaflet-touch-zoom"), zi(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
            _i(this._map._container, "leaflet-touch-zoom"), Si(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(t7) {
            var i11, e16, n15 = this._map;
            !t7.touches || 2 !== t7.touches.length || n15._animatingZoom || this._zooming || (i11 = n15.mouseEventToContainerPoint(t7.touches[0]), e16 = n15.mouseEventToContainerPoint(t7.touches[1]), this._centerPoint = n15.getSize()._divideBy(2), this._startLatLng = n15.containerPointToLatLng(this._centerPoint), "center" !== n15.options.touchZoom && (this._pinchStartLatLng = n15.containerPointToLatLng(i11.add(e16)._divideBy(2))), this._startDist = i11.distanceTo(e16), this._startZoom = n15.getZoom(), this._moved = false, this._zooming = true, n15._stop(), zi(document, "touchmove", this._onTouchMove, this), zi(document, "touchend", this._onTouchEnd, this), Ri(t7));
        },
        _onTouchMove: function(t7) {
            if (t7.touches && 2 === t7.touches.length && this._zooming) {
                var i11 = this._map, e16 = i11.mouseEventToContainerPoint(t7.touches[0]), n15 = i11.mouseEventToContainerPoint(t7.touches[1]), o13 = e16.distanceTo(n15) / this._startDist;
                if (this._zoom = i11.getScaleZoom(o13, this._startZoom), !i11.options.bounceAtZoomLimits && (this._zoom < i11.getMinZoom() && o13 < 1 || this._zoom > i11.getMaxZoom() && 1 < o13) && (this._zoom = i11._limitZoom(this._zoom)), "center" === i11.options.touchZoom) {
                    if (this._center = this._startLatLng, 1 == o13) return;
                } else {
                    var s10 = e16._add(n15)._divideBy(2)._subtract(this._centerPoint);
                    if (1 == o13 && 0 === s10.x && 0 === s10.y) return;
                    this._center = i11.unproject(i11.project(this._pinchStartLatLng, this._zoom).subtract(s10), this._zoom);
                }
                this._moved || (i11._moveStart(true, false), this._moved = true), z(this._animRequest);
                var r10 = p(i11._move, i11, this._center, this._zoom, {
                    pinch: true,
                    round: false
                });
                this._animRequest = M(r10, this, true), Ri(t7);
            }
        },
        _onTouchEnd: function() {
            this._moved && this._zooming ? (this._zooming = false, z(this._animRequest), Si(document, "touchmove", this._onTouchMove, this), Si(document, "touchend", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = false;
        }
    });
    Ki.addInitHook("addHandler", "touchZoom", Ln), Ki.BoxZoom = gn, Ki.DoubleClickZoom = vn, Ki.Drag = yn, Ki.Keyboard = xn, Ki.ScrollWheelZoom = wn, Ki.Tap = Pn, Ki.TouchZoom = Ln, t.version = "1.7.1", t.Control = Xi, t.control = Yi, t.Browser = Bt, t.Evented = E, t.Mixin = ne, t.Util = C, t.Class = S, t.Handler = ie, t.extend = h, t.bind = p, t.stamp = m, t.setOptions = c, t.DomEvent = qi, t.DomUtil = Mi, t.PosAnimation = Gi, t.Draggable = ae, t.LineUtil = fe, t.PolyUtil = ye, t.Point = k, t.point = A, t.Bounds = I, t.bounds = O, t.Transformation = q, t.transformation = G, t.Projection = Pe, t.LatLng = D, t.latLng = j, t.LatLngBounds = R, t.latLngBounds = N, t.CRS = H, t.GeoJSON = Ne, t.geoJSON = Ke, t.geoJson = Ye, t.Layer = Me, t.LayerGroup = ze, t.layerGroup = function(t7, i12) {
        return new ze(t7, i12);
    }, t.FeatureGroup = Ce, t.featureGroup = function(t7, i12) {
        return new Ce(t7, i12);
    }, t.ImageOverlay = Xe, t.imageOverlay = function(t7, i12, e17) {
        return new Xe(t7, i12, e17);
    }, t.VideoOverlay = Je, t.videoOverlay = function(t7, i12, e17) {
        return new Je(t7, i12, e17);
    }, t.SVGOverlay = $e, t.svgOverlay = function(t7, i12, e17) {
        return new $e(t7, i12, e17);
    }, t.DivOverlay = Qe, t.Popup = tn, t.popup = function(t7, i12) {
        return new tn(t7, i12);
    }, t.Tooltip = en, t.tooltip = function(t7, i12) {
        return new en(t7, i12);
    }, t.Icon = Se, t.icon = function(t7) {
        return new Se(t7);
    }, t.DivIcon = nn, t.divIcon = function(t7) {
        return new nn(t7);
    }, t.Marker = ke, t.marker = function(t7, i12) {
        return new ke(t7, i12);
    }, t.TileLayer = sn, t.tileLayer = rn, t.GridLayer = on, t.gridLayer = function(t7) {
        return new on(t7);
    }, t.SVG = pn, t.svg = mn, t.Renderer = hn, t.Canvas = un, t.canvas = ln, t.Path = Be, t.CircleMarker = Ae, t.circleMarker = function(t7, i12) {
        return new Ae(t7, i12);
    }, t.Circle = Ie, t.circle = function(t7, i12, e17) {
        return new Ie(t7, i12, e17);
    }, t.Polyline = Oe, t.polyline = function(t7, i12) {
        return new Oe(t7, i12);
    }, t.Polygon = Re, t.polygon = function(t7, i12) {
        return new Re(t7, i12);
    }, t.Rectangle = fn, t.rectangle = function(t7, i12) {
        return new fn(t7, i12);
    }, t.Map = Ki, t.map = function(t7, i12) {
        return new Ki(t7, i12);
    };
    var bn = window.L;
    t.noConflict = function() {
        return window.L = bn, this;
    }, window.L = t;
});

},{}]},["5D4Hd","4vORa"], "4vORa", "parcelRequire3596")

//# sourceMappingURL=contact.c419655d.js.map
