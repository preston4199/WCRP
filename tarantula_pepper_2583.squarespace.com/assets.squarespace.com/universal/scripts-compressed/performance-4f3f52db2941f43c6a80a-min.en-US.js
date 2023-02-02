(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [52730], {
        410659: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), b.default = void 0;
            var d;
            (function(f) {
                f.MAIN_CONTENT = 1, f.CONTENT_COLLECTION = 1, f.PAGE = 2, f.SPLASH_PAGE = 3, f.CONTENT_ITEM = 50, f.NOT_FOUND = 100, f.ERROR = 101, f.SEARCH = 102, f.LOCK_SCREEN = 103, f.POPUP_OVERLAY = 104, f.PROTECTED_CONTENT = 105, f.MEMBER_AREA_ACCESS_DENIED = 106, f.SHOW_CART = 200, f.CHECKOUT = 201, f.ORDER_CONFIRMED = 202, f.DONATE = 203, f.CONTRIBUTION_CONFIRMED = 204, f.COMMERCE_CART_V2 = 205, f.SUBSCRIPTION_CONFIRMED = 206, f.ORDER_RECEIVED = 207, f.MEMBERSHIP_CONFIRMED = 208, f.REVIEWS_REQUEST = 209, f.DIGITAL_PRODUCT_COMPOSER_PREVIEW = 210, f.ORDER_STATUS = 211, f.NEWSLETTER_UNSUBSCRIBE = 300, f.COMMERCE_EMAIL_PREVIEW = 301
            })(d || (d = {}));
            var D = d;
            b.default = D, X.exports = b.default
        },
        248310: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), b.default = void 0;
            var d;
            (function(f) {
                f.EXPIRED = 1, f.PASTDUE = 2, f.TRIAL = 3, f.BETA = 4, f.REMOVED = 5, f.INTERNAL = 6, f.COMPED = 7, f.PAID = 8, f.V5_LINKED = 11, f.ACTIVE_PARKING_PAGE = 12, f.RESOLD = 13, f.RESOLD_GRACE_PERIOD = 14, f.ENTERPRISE = 15
            })(d || (d = {}));
            var D = d;
            b.default = D, X.exports = b.default
        },
        192628: function(X, b, d) {
            "use strict";
            var D = d(870752),
                f = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                P = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                C = {
                    $$typeof: !0,
                    render: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0
                },
                w = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                I = {};
            I[D.ForwardRef] = C, I[D.Memo] = w;

            function h(v) {
                return D.isMemo(v) ? w : I[v.$$typeof] || f
            }
            var _ = Object.defineProperty,
                m = Object.getOwnPropertyNames,
                E = Object.getOwnPropertySymbols,
                u = Object.getOwnPropertyDescriptor,
                g = Object.getPrototypeOf,
                l = Object.prototype;

            function s(v, o, p) {
                if (typeof o != "string") {
                    if (l) {
                        var a = g(o);
                        a && a !== l && s(v, a, p)
                    }
                    var i = m(o);
                    E && (i = i.concat(E(o)));
                    for (var t = h(v), e = h(o), r = 0; r < i.length; ++r) {
                        var n = i[r];
                        if (!P[n] && !(p && p[n]) && !(e && e[n]) && !(t && t[n])) {
                            var c = u(o, n);
                            try {
                                _(v, n, c)
                            } catch (T) {}
                        }
                    }
                }
                return v
            }
            X.exports = s
        },
        139e3: function(X) {
            "use strict";
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
            var b = Object.getOwnPropertySymbols,
                d = Object.prototype.hasOwnProperty,
                D = Object.prototype.propertyIsEnumerable;

            function f(C) {
                if (C == null) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(C)
            }

            function P() {
                try {
                    if (!Object.assign) return !1;
                    var C = new String("abc");
                    if (C[5] = "de", Object.getOwnPropertyNames(C)[0] === "5") return !1;
                    for (var w = {}, I = 0; I < 10; I++) w["_" + String.fromCharCode(I)] = I;
                    var h = Object.getOwnPropertyNames(w).map(function(m) {
                        return w[m]
                    });
                    if (h.join("") !== "0123456789") return !1;
                    var _ = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(m) {
                        _[m] = m
                    }), Object.keys(Object.assign({}, _)).join("") === "abcdefghijklmnopqrst"
                } catch (m) {
                    return !1
                }
            }
            X.exports = P() ? Object.assign : function(C, w) {
                for (var I, h = f(C), _, m = 1; m < arguments.length; m++) {
                    I = Object(arguments[m]);
                    for (var E in I) d.call(I, E) && (h[E] = I[E]);
                    if (b) {
                        _ = b(I);
                        for (var u = 0; u < _.length; u++) D.call(I, _[u]) && (h[_[u]] = I[_[u]])
                    }
                }
                return h
            }
        },
        760636: function(X) {
            var b = X.exports = {},
                d, D;

            function f() {
                throw new Error("setTimeout has not been defined")
            }

            function P() {
                throw new Error("clearTimeout has not been defined")
            }(function() {
                try {
                    typeof setTimeout == "function" ? d = setTimeout : d = f
                } catch (s) {
                    d = f
                }
                try {
                    typeof clearTimeout == "function" ? D = clearTimeout : D = P
                } catch (s) {
                    D = P
                }
            })();

            function C(s) {
                if (d === setTimeout) return setTimeout(s, 0);
                if ((d === f || !d) && setTimeout) return d = setTimeout, setTimeout(s, 0);
                try {
                    return d(s, 0)
                } catch (v) {
                    try {
                        return d.call(null, s, 0)
                    } catch (o) {
                        return d.call(this, s, 0)
                    }
                }
            }

            function w(s) {
                if (D === clearTimeout) return clearTimeout(s);
                if ((D === P || !D) && clearTimeout) return D = clearTimeout, clearTimeout(s);
                try {
                    return D(s)
                } catch (v) {
                    try {
                        return D.call(null, s)
                    } catch (o) {
                        return D.call(this, s)
                    }
                }
            }
            var I = [],
                h = !1,
                _, m = -1;

            function E() {
                !h || !_ || (h = !1, _.length ? I = _.concat(I) : m = -1, I.length && u())
            }

            function u() {
                if (!h) {
                    var s = C(E);
                    h = !0;
                    for (var v = I.length; v;) {
                        for (_ = I, I = []; ++m < v;) _ && _[m].run();
                        m = -1, v = I.length
                    }
                    _ = null, h = !1, w(s)
                }
            }
            b.nextTick = function(s) {
                var v = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var o = 1; o < arguments.length; o++) v[o - 1] = arguments[o];
                I.push(new g(s, v)), I.length === 1 && !h && C(u)
            };

            function g(s, v) {
                this.fun = s, this.array = v
            }
            g.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, b.title = "browser", b.browser = !0, b.env = {}, b.argv = [], b.version = "", b.versions = {};

            function l() {}
            b.on = l, b.addListener = l, b.once = l, b.off = l, b.removeListener = l, b.removeAllListeners = l, b.emit = l, b.prependListener = l, b.prependOnceListener = l, b.listeners = function(s) {
                return []
            }, b.binding = function(s) {
                throw new Error("process.binding is not supported")
            }, b.cwd = function() {
                return "/"
            }, b.chdir = function(s) {
                throw new Error("process.chdir is not supported")
            }, b.umask = function() {
                return 0
            }
        },
        739847: function(X, b) {
            "use strict";
            /** @license React v16.13.1
             * react-is.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var d = typeof Symbol == "function" && Symbol.for,
                D = d ? Symbol.for("react.element") : 60103,
                f = d ? Symbol.for("react.portal") : 60106,
                P = d ? Symbol.for("react.fragment") : 60107,
                C = d ? Symbol.for("react.strict_mode") : 60108,
                w = d ? Symbol.for("react.profiler") : 60114,
                I = d ? Symbol.for("react.provider") : 60109,
                h = d ? Symbol.for("react.context") : 60110,
                _ = d ? Symbol.for("react.async_mode") : 60111,
                m = d ? Symbol.for("react.concurrent_mode") : 60111,
                E = d ? Symbol.for("react.forward_ref") : 60112,
                u = d ? Symbol.for("react.suspense") : 60113,
                g = d ? Symbol.for("react.suspense_list") : 60120,
                l = d ? Symbol.for("react.memo") : 60115,
                s = d ? Symbol.for("react.lazy") : 60116,
                v = d ? Symbol.for("react.block") : 60121,
                o = d ? Symbol.for("react.fundamental") : 60117,
                p = d ? Symbol.for("react.responder") : 60118,
                a = d ? Symbol.for("react.scope") : 60119;

            function i(e) {
                if (typeof e == "object" && e !== null) {
                    var r = e.$$typeof;
                    switch (r) {
                        case D:
                            switch (e = e.type, e) {
                                case _:
                                case m:
                                case P:
                                case w:
                                case C:
                                case u:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof, e) {
                                        case h:
                                        case E:
                                        case s:
                                        case l:
                                        case I:
                                            return e;
                                        default:
                                            return r
                                    }
                            }
                        case f:
                            return r
                    }
                }
            }

            function t(e) {
                return i(e) === m
            }
            b.AsyncMode = _, b.ConcurrentMode = m, b.ContextConsumer = h, b.ContextProvider = I, b.Element = D, b.ForwardRef = E, b.Fragment = P, b.Lazy = s, b.Memo = l, b.Portal = f, b.Profiler = w, b.StrictMode = C, b.Suspense = u, b.isAsyncMode = function(e) {
                return t(e) || i(e) === _
            }, b.isConcurrentMode = t, b.isContextConsumer = function(e) {
                return i(e) === h
            }, b.isContextProvider = function(e) {
                return i(e) === I
            }, b.isElement = function(e) {
                return typeof e == "object" && e !== null && e.$$typeof === D
            }, b.isForwardRef = function(e) {
                return i(e) === E
            }, b.isFragment = function(e) {
                return i(e) === P
            }, b.isLazy = function(e) {
                return i(e) === s
            }, b.isMemo = function(e) {
                return i(e) === l
            }, b.isPortal = function(e) {
                return i(e) === f
            }, b.isProfiler = function(e) {
                return i(e) === w
            }, b.isStrictMode = function(e) {
                return i(e) === C
            }, b.isSuspense = function(e) {
                return i(e) === u
            }, b.isValidElementType = function(e) {
                return typeof e == "string" || typeof e == "function" || e === P || e === m || e === w || e === C || e === u || e === g || typeof e == "object" && e !== null && (e.$$typeof === s || e.$$typeof === l || e.$$typeof === I || e.$$typeof === h || e.$$typeof === E || e.$$typeof === o || e.$$typeof === p || e.$$typeof === a || e.$$typeof === v)
            }, b.typeOf = i
        },
        870752: function(X, b, d) {
            "use strict";
            X.exports = d(739847)
        },
        713320: function(X, b, d) {
            "use strict";
            /** @license React v16.14.0
             * react.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var D = d(139e3),
                f = typeof Symbol == "function" && Symbol.for,
                P = f ? Symbol.for("react.element") : 60103,
                C = f ? Symbol.for("react.portal") : 60106,
                w = f ? Symbol.for("react.fragment") : 60107,
                I = f ? Symbol.for("react.strict_mode") : 60108,
                h = f ? Symbol.for("react.profiler") : 60114,
                _ = f ? Symbol.for("react.provider") : 60109,
                m = f ? Symbol.for("react.context") : 60110,
                E = f ? Symbol.for("react.forward_ref") : 60112,
                u = f ? Symbol.for("react.suspense") : 60113,
                g = f ? Symbol.for("react.memo") : 60115,
                l = f ? Symbol.for("react.lazy") : 60116,
                s = typeof Symbol == "function" && Symbol.iterator;

            function v(N) {
                for (var J = "https://reactjs.org/docs/error-decoder.html?invariant=" + N, Q = 1; Q < arguments.length; Q++) J += "&args[]=" + encodeURIComponent(arguments[Q]);
                return "Minified React error #" + N + "; visit " + J + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var o = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                p = {};

            function a(N, J, Q) {
                this.props = N, this.context = J, this.refs = p, this.updater = Q || o
            }
            a.prototype.isReactComponent = {}, a.prototype.setState = function(N, J) {
                if (typeof N != "object" && typeof N != "function" && N != null) throw Error(v(85));
                this.updater.enqueueSetState(this, N, J, "setState")
            }, a.prototype.forceUpdate = function(N) {
                this.updater.enqueueForceUpdate(this, N, "forceUpdate")
            };

            function i() {}
            i.prototype = a.prototype;

            function t(N, J, Q) {
                this.props = N, this.context = J, this.refs = p, this.updater = Q || o
            }
            var e = t.prototype = new i;
            e.constructor = t, D(e, a.prototype), e.isPureReactComponent = !0;
            var r = {
                    current: null
                },
                n = Object.prototype.hasOwnProperty,
                c = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function T(N, J, Q) {
                var te, ee = {},
                    K = null,
                    q = null;
                if (J != null)
                    for (te in J.ref !== void 0 && (q = J.ref), J.key !== void 0 && (K = "" + J.key), J) n.call(J, te) && !c.hasOwnProperty(te) && (ee[te] = J[te]);
                var ne = arguments.length - 2;
                if (ne === 1) ee.children = Q;
                else if (1 < ne) {
                    for (var ie = Array(ne), ae = 0; ae < ne; ae++) ie[ae] = arguments[ae + 2];
                    ee.children = ie
                }
                if (N && N.defaultProps)
                    for (te in ne = N.defaultProps, ne) ee[te] === void 0 && (ee[te] = ne[te]);
                return {
                    $$typeof: P,
                    type: N,
                    key: K,
                    ref: q,
                    props: ee,
                    _owner: r.current
                }
            }

            function S(N, J) {
                return {
                    $$typeof: P,
                    type: N.type,
                    key: J,
                    ref: N.ref,
                    props: N.props,
                    _owner: N._owner
                }
            }

            function y(N) {
                return typeof N == "object" && N !== null && N.$$typeof === P
            }

            function O(N) {
                var J = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + ("" + N).replace(/[=:]/g, function(Q) {
                    return J[Q]
                })
            }
            var A = /\/+/g,
                j = [];

            function G(N, J, Q, te) {
                if (j.length) {
                    var ee = j.pop();
                    return ee.result = N, ee.keyPrefix = J, ee.func = Q, ee.context = te, ee.count = 0, ee
                }
                return {
                    result: N,
                    keyPrefix: J,
                    func: Q,
                    context: te,
                    count: 0
                }
            }

            function z(N) {
                N.result = null, N.keyPrefix = null, N.func = null, N.context = null, N.count = 0, 10 > j.length && j.push(N)
            }

            function $(N, J, Q, te) {
                var ee = typeof N;
                (ee === "undefined" || ee === "boolean") && (N = null);
                var K = !1;
                if (N === null) K = !0;
                else switch (ee) {
                    case "string":
                    case "number":
                        K = !0;
                        break;
                    case "object":
                        switch (N.$$typeof) {
                            case P:
                            case C:
                                K = !0
                        }
                }
                if (K) return Q(te, N, J === "" ? "." + R(N, 0) : J), 1;
                if (K = 0, J = J === "" ? "." : J + ":", Array.isArray(N))
                    for (var q = 0; q < N.length; q++) {
                        ee = N[q];
                        var ne = J + R(ee, q);
                        K += $(ee, ne, Q, te)
                    } else if (N === null || typeof N != "object" ? ne = null : (ne = s && N[s] || N["@@iterator"], ne = typeof ne == "function" ? ne : null), typeof ne == "function")
                        for (N = ne.call(N), q = 0; !(ee = N.next()).done;) ee = ee.value, ne = J + R(ee, q++), K += $(ee, ne, Q, te);
                    else if (ee === "object") throw Q = "" + N, Error(v(31, Q === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : Q, ""));
                return K
            }

            function W(N, J, Q) {
                return N == null ? 0 : $(N, "", J, Q)
            }

            function R(N, J) {
                return typeof N == "object" && N !== null && N.key != null ? O(N.key) : J.toString(36)
            }

            function L(N, J) {
                N.func.call(N.context, J, N.count++)
            }

            function k(N, J, Q) {
                var te = N.result,
                    ee = N.keyPrefix;
                N = N.func.call(N.context, J, N.count++), Array.isArray(N) ? x(N, te, Q, function(K) {
                    return K
                }) : N != null && (y(N) && (N = S(N, ee + (!N.key || J && J.key === N.key ? "" : ("" + N.key).replace(A, "$&/") + "/") + Q)), te.push(N))
            }

            function x(N, J, Q, te, ee) {
                var K = "";
                Q != null && (K = ("" + Q).replace(A, "$&/") + "/"), J = G(J, K, te, ee), W(N, k, J), z(J)
            }
            var U = {
                current: null
            };

            function M() {
                var N = U.current;
                if (N === null) throw Error(v(321));
                return N
            }
            var H = {
                ReactCurrentDispatcher: U,
                ReactCurrentBatchConfig: {
                    suspense: null
                },
                ReactCurrentOwner: r,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: D
            };
            b.Children = {
                map: function(N, J, Q) {
                    if (N == null) return N;
                    var te = [];
                    return x(N, te, null, J, Q), te
                },
                forEach: function(N, J, Q) {
                    if (N == null) return N;
                    J = G(null, null, J, Q), W(N, L, J), z(J)
                },
                count: function(N) {
                    return W(N, function() {
                        return null
                    }, null)
                },
                toArray: function(N) {
                    var J = [];
                    return x(N, J, null, function(Q) {
                        return Q
                    }), J
                },
                only: function(N) {
                    if (!y(N)) throw Error(v(143));
                    return N
                }
            }, b.Component = a, b.Fragment = w, b.Profiler = h, b.PureComponent = t, b.StrictMode = I, b.Suspense = u, b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H, b.cloneElement = function(N, J, Q) {
                if (N == null) throw Error(v(267, N));
                var te = D({}, N.props),
                    ee = N.key,
                    K = N.ref,
                    q = N._owner;
                if (J != null) {
                    if (J.ref !== void 0 && (K = J.ref, q = r.current), J.key !== void 0 && (ee = "" + J.key), N.type && N.type.defaultProps) var ne = N.type.defaultProps;
                    for (ie in J) n.call(J, ie) && !c.hasOwnProperty(ie) && (te[ie] = J[ie] === void 0 && ne !== void 0 ? ne[ie] : J[ie])
                }
                var ie = arguments.length - 2;
                if (ie === 1) te.children = Q;
                else if (1 < ie) {
                    ne = Array(ie);
                    for (var ae = 0; ae < ie; ae++) ne[ae] = arguments[ae + 2];
                    te.children = ne
                }
                return {
                    $$typeof: P,
                    type: N.type,
                    key: ee,
                    ref: K,
                    props: te,
                    _owner: q
                }
            }, b.createContext = function(N, J) {
                return J === void 0 && (J = null), N = {
                    $$typeof: m,
                    _calculateChangedBits: J,
                    _currentValue: N,
                    _currentValue2: N,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }, N.Provider = {
                    $$typeof: _,
                    _context: N
                }, N.Consumer = N
            }, b.createElement = T, b.createFactory = function(N) {
                var J = T.bind(null, N);
                return J.type = N, J
            }, b.createRef = function() {
                return {
                    current: null
                }
            }, b.forwardRef = function(N) {
                return {
                    $$typeof: E,
                    render: N
                }
            }, b.isValidElement = y, b.lazy = function(N) {
                return {
                    $$typeof: l,
                    _ctor: N,
                    _status: -1,
                    _result: null
                }
            }, b.memo = function(N, J) {
                return {
                    $$typeof: g,
                    type: N,
                    compare: J === void 0 ? null : J
                }
            }, b.useCallback = function(N, J) {
                return M().useCallback(N, J)
            }, b.useContext = function(N, J) {
                return M().useContext(N, J)
            }, b.useDebugValue = function() {}, b.useEffect = function(N, J) {
                return M().useEffect(N, J)
            }, b.useImperativeHandle = function(N, J, Q) {
                return M().useImperativeHandle(N, J, Q)
            }, b.useLayoutEffect = function(N, J) {
                return M().useLayoutEffect(N, J)
            }, b.useMemo = function(N, J) {
                return M().useMemo(N, J)
            }, b.useReducer = function(N, J, Q) {
                return M().useReducer(N, J, Q)
            }, b.useRef = function(N) {
                return M().useRef(N)
            }, b.useState = function(N) {
                return M().useState(N)
            }, b.version = "16.14.0"
        },
        508669: function(X, b, d) {
            "use strict";
            X.exports = d(713320)
        },
        395640: function(X, b, d) {
            "use strict";
            var D;
            D = {
                value: !0
            };
            var f = d(490762),
                P = h(d(248310)),
                C = h(d(410659)),
                w = d(225269);

            function I(e, r, n) {
                return r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n, e
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function _(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = arguments[r] != null ? arguments[r] : {},
                        c = Object.keys(n);
                    typeof Object.getOwnPropertySymbols == "function" && (c = c.concat(Object.getOwnPropertySymbols(n).filter(function(T) {
                        return Object.getOwnPropertyDescriptor(n, T).enumerable
                    }))), c.forEach(function(T) {
                        I(e, T, n[T])
                    })
                }
                return e
            }
            var m = window.Static && window.Static.SQUARESPACE_CONTEXT,
                E = window.top !== window,
                u = Object.freeze(I({}, C.default.COMMERCE_CART_V2, "commerce-cart"));

            function g() {
                var e = window.location && window.location.pathname || "";
                return !E && /^\/config(\/.*)?$/.test(e)
            }

            function l() {
                return {
                    inFrame: E,
                    templateId: m.templateId || "",
                    impersonatedSession: !!m.impersonatedSession,
                    pageType: typeof m.pageType == "number" ? m.pageType : -1
                }
            }

            function s() {
                var e = m.website,
                    r = e === void 0 ? {} : e;
                return {
                    authenticUrl: r.authenticUrl || "",
                    cloneable: !!r.cloneable,
                    developerMode: !!r.developerMode,
                    isHstsEnabled: !!r.isHstsEnabled,
                    language: r.language || "",
                    timeZone: r.timeZone || "",
                    websiteId: r.id || "",
                    websiteType: r.websiteType || -1
                }
            }

            function v() {
                var e = m.websiteSettings,
                    r = e === void 0 ? {} : e;
                return {
                    ampEnabled: !!r.ampEnabled
                }
            }

            function o() {
                var e = m.collection,
                    r = e === void 0 ? {} : e;
                return {
                    collectionType: r.type || -1
                }
            }

            function p() {
                return window.Squarespace && "SECTION_CONTEXT" in window.Squarespace
            }

            function a() {
                return m.hasOwnProperty("templateVersion") ? m.templateVersion.replace(".", "_") : p() ? "8" : null
            }

            function i(e) {
                var r = g(),
                    n = u[m.pageType],
                    c = {
                        appName: n || "v".concat(e, "-").concat(r ? "config" : "user-sites"),
                        context: _({}, l(), s(), v(), o()),
                        captureException: function(A, j) {
                            (0, w.withScope)(function(G) {
                                G.setTag("project", "rum-collector"), j !== void 0 && G.setExtra("extras", j), (0, w.captureException)(A)
                            })
                        }
                    };
                if (r) {
                    var T = m.website.siteStatus.value === P.default.INTERNAL,
                        S = m.authenticatedAccount,
                        y = S.createdOn,
                        O = S.id;
                    c.context.isInternal = T, c.context.createdOn = y, c.context.memberId = O
                }
                return c
            }

            function t() {
                if (m) {
                    var e = a();
                    if (e === null) return;
                    var r = i(e);
                    (0, f.init)(r)
                }
            }
            t()
        },
        225269: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(i, t) {
                for (var e in t) Object.defineProperty(i, e, {
                    enumerable: !0,
                    get: t[e]
                })
            }
            D(b, {
                addBreadcrumb: function() {
                    return m
                },
                captureMessage: function() {
                    return E
                },
                captureException: function() {
                    return u
                },
                captureEvent: function() {
                    return g
                },
                configureScope: function() {
                    return l
                },
                withScope: function() {
                    return s
                },
                isSentryConnected: function() {
                    return a
                }
            });
            var f = d(532940);

            function P(i, t) {
                (t == null || t > i.length) && (t = i.length);
                for (var e = 0, r = new Array(t); e < t; e++) r[e] = i[e];
                return r
            }

            function C(i) {
                if (Array.isArray(i)) return P(i)
            }

            function w(i) {
                if (typeof Symbol != "undefined" && i[Symbol.iterator] != null || i["@@iterator"] != null) return Array.from(i)
            }

            function I() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function h(i) {
                return C(i) || w(i) || _(i) || I()
            }

            function _(i, t) {
                if (!!i) {
                    if (typeof i == "string") return P(i, t);
                    var e = Object.prototype.toString.call(i).slice(8, -1);
                    if (e === "Object" && i.constructor && (e = i.constructor.name), e === "Map" || e === "Set") return Array.from(e);
                    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return P(i, t)
                }
            }
            var m, E, u, g, l, s, v = function(i) {
                    return function(t) {
                        for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                        var c;
                        return (c = console).log.apply(c, ["[Sentry][".concat(i, "] ").concat(t)].concat(h(r))), "some-error-identifier"
                    }
                },
                o = !1,
                p = function(i) {
                    var t = i.category,
                        e = i.message;
                    console.log("[Sentry][addBreadcrumb] (".concat(t, ") ").concat(e))
                },
                a = !1;
            window.SQUARESPACE_SENTRY ? (a = !0, m = window.SQUARESPACE_SENTRY.addBreadcrumb, E = window.SQUARESPACE_SENTRY.captureMessage, u = window.SQUARESPACE_SENTRY.captureException, g = window.SQUARESPACE_SENTRY.captureEvent, l = window.SQUARESPACE_SENTRY.configureScope, s = window.SQUARESPACE_SENTRY.withScope) : (console.warn("SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead."), m = o ? p : function() {}, E = v("captureMessage"), u = v("captureException"), g = v("captureEvent"), l = function() {}, s = function(i) {
                var t = new f.Scope;
                console.log("[Sentry][withScope]", t), i(t)
            })
        },
        407712: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "BrowserClient", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            var D = d(335090),
                f = d(364904),
                P = d(442378),
                C = d(401612),
                w = d(497595),
                I = d(182365);

            function h(i) {
                if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return i
            }

            function _(i, t) {
                if (!(i instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(i, t, e) {
                return typeof Reflect != "undefined" && Reflect.get ? m = Reflect.get : m = function(n, c, T) {
                    var S = s(n, c);
                    if (!!S) {
                        var y = Object.getOwnPropertyDescriptor(S, c);
                        return y.get ? y.get.call(T) : y.value
                    }
                }, m(i, t, e || i)
            }

            function E(i) {
                return E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, E(i)
            }

            function u(i, t) {
                if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
                i.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: i,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(i, t)
            }

            function g(i, t) {
                return t && (v(t) === "object" || typeof t == "function") ? t : h(i)
            }

            function l(i, t) {
                return l = Object.setPrototypeOf || function(r, n) {
                    return r.__proto__ = n, r
                }, l(i, t)
            }

            function s(i, t) {
                for (; !Object.prototype.hasOwnProperty.call(i, t) && (i = E(i), i !== null););
                return i
            }
            var v = function(i) {
                return i && typeof Symbol != "undefined" && i.constructor === Symbol ? "symbol" : typeof i
            };

            function o() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (i) {
                    return !1
                }
            }

            function p(i) {
                var t = o();
                return function() {
                    var r = E(i),
                        n;
                    if (t) {
                        var c = E(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var a = function(i) {
                "use strict";
                u(e, i);
                var t = p(e);

                function e(n) {
                    _(this, e);
                    var c;
                    return n._metadata = n._metadata || {}, n._metadata.sdk = n._metadata.sdk || {
                        name: "sentry.javascript.browser",
                        packages: [{
                            name: "npm:@sentry/browser",
                            version: f.SDK_VERSION
                        }],
                        version: f.SDK_VERSION
                    }, c = t.call(this, n), n.sendClientReports && w.WINDOW.document && w.WINDOW.document.addEventListener("visibilitychange", function() {
                        w.WINDOW.document.visibilityState === "hidden" && c._flushOutcomes()
                    }), c
                }
                var r = e.prototype;
                return r.eventFromException = function(c, T) {
                    return (0, C.eventFromException)(this._options.stackParser, c, T, this._options.attachStacktrace)
                }, r.eventFromMessage = function(c) {
                    var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "info",
                        S = arguments.length > 2 ? arguments[2] : void 0;
                    return (0, C.eventFromMessage)(this._options.stackParser, c, T, S, this._options.attachStacktrace)
                }, r.sendEvent = function(c, T) {
                    var S = this.getIntegrationById(I.BREADCRUMB_INTEGRATION_ID);
                    (0, D._optionalChain)([S, "optionalAccess", function(y) {
                        return y.addSentryBreadcrumb
                    }, "optionalCall", function(y) {
                        return y(c)
                    }]), m(E(e.prototype), "sendEvent", this).call(this, c, T)
                }, r._prepareEvent = function(c, T, S) {
                    return c.platform = c.platform || "javascript", m(E(e.prototype), "_prepareEvent", this).call(this, c, T, S)
                }, r._flushOutcomes = function() {
                    var c = this._clearOutcomes();
                    if (c.length === 0) {
                        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.log("No outcomes to send");
                        return
                    }
                    if (!this._dsn) {
                        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.log("No dsn provided, will not send outcomes");
                        return
                    }(typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.log("Sending outcomes:", c);
                    var T = (0, f.getEnvelopeEndpointWithUrlEncodedAuth)(this._dsn, this._options),
                        S = (0, P.createClientReportEnvelope)(c, this._options.tunnel && (0, P.dsnToString)(this._dsn));
                    try {
                        var y = Object.prototype.toString.call(w.WINDOW && w.WINDOW.navigator) === "[object Navigator]",
                            O = y && typeof w.WINDOW.navigator.sendBeacon == "function";
                        if (O && !this._options.transportOptions) {
                            var A = w.WINDOW.navigator.sendBeacon.bind(w.WINDOW.navigator);
                            A(T, (0, P.serializeEnvelope)(S))
                        } else this._sendEnvelope(S)
                    } catch (j) {
                        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.error(j)
                    }
                }, e
            }(f.BaseClient)
        },
        401612: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(i, t) {
                for (var e in t) Object.defineProperty(i, e, {
                    enumerable: !0,
                    get: t[e]
                })
            }
            D(b, {
                eventFromError: function() {
                    return E
                },
                eventFromException: function() {
                    return v
                },
                eventFromMessage: function() {
                    return o
                },
                eventFromPlainObject: function() {
                    return m
                },
                eventFromString: function() {
                    return a
                },
                eventFromUnknownInput: function() {
                    return p
                },
                exceptionFromError: function() {
                    return _
                },
                parseStackFrames: function() {
                    return u
                }
            });
            var f = d(364904),
                P = d(442378);

            function C(i, t, e) {
                return t in i ? Object.defineProperty(i, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[t] = e, i
            }

            function w(i) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t] != null ? arguments[t] : {},
                        r = Object.keys(e);
                    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), r.forEach(function(n) {
                        C(i, n, e[n])
                    })
                }
                return i
            }

            function I(i, t) {
                var e = Object.keys(i);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(i);
                    t && (r = r.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(i, n).enumerable
                    })), e.push.apply(e, r)
                }
                return e
            }

            function h(i, t) {
                return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(t, e))
                }), i
            }

            function _(i, t) {
                var e = u(i, t),
                    r = {
                        type: t && t.name,
                        value: s(t)
                    };
                return e.length && (r.stacktrace = {
                    frames: e
                }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r
            }

            function m(i, t, e, r) {
                var n = (0, f.getCurrentHub)(),
                    c = n.getClient(),
                    T = c && c.getOptions().normalizeDepth,
                    S = {
                        exception: {
                            values: [{
                                type: (0, P.isEvent)(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                                value: "Non-Error ".concat(r ? "promise rejection" : "exception", " captured with keys: ").concat((0, P.extractExceptionKeysForMessage)(t))
                            }]
                        },
                        extra: {
                            __serialized__: (0, P.normalizeToSize)(t, T)
                        }
                    };
                if (e) {
                    var y = u(i, e);
                    y.length && (S.exception.values[0].stacktrace = {
                        frames: y
                    })
                }
                return S
            }

            function E(i, t) {
                return {
                    exception: {
                        values: [_(i, t)]
                    }
                }
            }

            function u(i, t) {
                var e = t.stacktrace || t.stack || "",
                    r = l(t);
                try {
                    return i(e, r)
                } catch (n) {}
                return []
            }
            var g = /Minified React error #\d+;/i;

            function l(i) {
                if (i) {
                    if (typeof i.framesToPop == "number") return i.framesToPop;
                    if (g.test(i.message)) return 1
                }
                return 0
            }

            function s(i) {
                var t = i && i.message;
                return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
            }

            function v(i, t, e, r) {
                var n = e && e.syntheticException || void 0,
                    c = p(i, t, n, r);
                return (0, P.addExceptionMechanism)(c), c.level = "error", e && e.event_id && (c.event_id = e.event_id), (0, P.resolvedSyncPromise)(c)
            }

            function o(i, t) {
                var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "info",
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    n = arguments.length > 4 ? arguments[4] : void 0,
                    c = r && r.syntheticException || void 0,
                    T = a(i, t, c, n);
                return T.level = e, r && r.event_id && (T.event_id = r.event_id), (0, P.resolvedSyncPromise)(T)
            }

            function p(i, t, e, r, n) {
                var c;
                if ((0, P.isErrorEvent)(t) && t.error) {
                    var T = t;
                    return E(i, T.error)
                }
                if ((0, P.isDOMError)(t) || (0, P.isDOMException)(t)) {
                    var S = t;
                    if ("stack" in t) c = E(i, t);
                    else {
                        var y = S.name || ((0, P.isDOMError)(S) ? "DOMError" : "DOMException"),
                            O = S.message ? "".concat(y, ": ").concat(S.message) : y;
                        c = a(i, O, e, r), (0, P.addExceptionTypeValue)(c, O)
                    }
                    return "code" in S && (c.tags = h(w({}, c.tags), {
                        "DOMException.code": "".concat(S.code)
                    })), c
                }
                if ((0, P.isError)(t)) return E(i, t);
                if ((0, P.isPlainObject)(t) || (0, P.isEvent)(t)) {
                    var A = t;
                    return c = m(i, A, e, n), (0, P.addExceptionMechanism)(c, {
                        synthetic: !0
                    }), c
                }
                return c = a(i, t, e, r), (0, P.addExceptionTypeValue)(c, "".concat(t), void 0), (0, P.addExceptionMechanism)(c, {
                    synthetic: !0
                }), c
            }

            function a(i, t, e, r) {
                var n = {
                    message: t
                };
                if (r && e) {
                    var c = u(i, e);
                    c.length && (n.exception = {
                        values: [{
                            value: t,
                            stacktrace: {
                                frames: c
                            }
                        }]
                    })
                }
                return n
            }
        },
        754126: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(h, _) {
                for (var m in _) Object.defineProperty(h, m, {
                    enumerable: !0,
                    get: _[m]
                })
            }
            D(b, {
                FunctionToString: function() {
                    return f.FunctionToString
                },
                Hub: function() {
                    return f.Hub
                },
                InboundFilters: function() {
                    return f.InboundFilters
                },
                SDK_VERSION: function() {
                    return f.SDK_VERSION
                },
                Scope: function() {
                    return f.Scope
                },
                addBreadcrumb: function() {
                    return f.addBreadcrumb
                },
                addGlobalEventProcessor: function() {
                    return f.addGlobalEventProcessor
                },
                captureEvent: function() {
                    return f.captureEvent
                },
                captureException: function() {
                    return f.captureException
                },
                captureMessage: function() {
                    return f.captureMessage
                },
                configureScope: function() {
                    return f.configureScope
                },
                createTransport: function() {
                    return f.createTransport
                },
                getCurrentHub: function() {
                    return f.getCurrentHub
                },
                getHubFromCarrier: function() {
                    return f.getHubFromCarrier
                },
                makeMain: function() {
                    return f.makeMain
                },
                setContext: function() {
                    return f.setContext
                },
                setExtra: function() {
                    return f.setExtra
                },
                setExtras: function() {
                    return f.setExtras
                },
                setTag: function() {
                    return f.setTag
                },
                setTags: function() {
                    return f.setTags
                },
                setUser: function() {
                    return f.setUser
                },
                startTransaction: function() {
                    return f.startTransaction
                },
                withScope: function() {
                    return f.withScope
                },
                WINDOW: function() {
                    return P.WINDOW
                },
                BrowserClient: function() {
                    return C.BrowserClient
                },
                chromeStackLineParser: function() {
                    return w.chromeStackLineParser
                },
                defaultStackLineParsers: function() {
                    return w.defaultStackLineParsers
                },
                defaultStackParser: function() {
                    return w.defaultStackParser
                },
                geckoStackLineParser: function() {
                    return w.geckoStackLineParser
                },
                opera10StackLineParser: function() {
                    return w.opera10StackLineParser
                },
                opera11StackLineParser: function() {
                    return w.opera11StackLineParser
                },
                winjsStackLineParser: function() {
                    return w.winjsStackLineParser
                },
                close: function() {
                    return I.close
                },
                defaultIntegrations: function() {
                    return I.defaultIntegrations
                },
                flush: function() {
                    return I.flush
                },
                forceLoad: function() {
                    return I.forceLoad
                },
                init: function() {
                    return I.init
                },
                lastEventId: function() {
                    return I.lastEventId
                },
                onLoad: function() {
                    return I.onLoad
                },
                showReportDialog: function() {
                    return I.showReportDialog
                },
                wrap: function() {
                    return I.wrap
                }
            });
            var f = d(364904),
                P = d(497595),
                C = d(407712);
            d(611472);
            var w = d(476397),
                I = d(397059);
            d(659356)
        },
        497595: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(l, s) {
                for (var v in s) Object.defineProperty(l, v, {
                    enumerable: !0,
                    get: s[v]
                })
            }
            D(b, {
                WINDOW: function() {
                    return _
                },
                ignoreNextOnError: function() {
                    return u
                },
                shouldIgnoreOnError: function() {
                    return E
                },
                wrap: function() {
                    return g
                }
            });
            var f = d(364904),
                P = d(442378);

            function C(l, s, v) {
                return s in l ? Object.defineProperty(l, s, {
                    value: v,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : l[s] = v, l
            }

            function w(l) {
                for (var s = 1; s < arguments.length; s++) {
                    var v = arguments[s] != null ? arguments[s] : {},
                        o = Object.keys(v);
                    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(v).filter(function(p) {
                        return Object.getOwnPropertyDescriptor(v, p).enumerable
                    }))), o.forEach(function(p) {
                        C(l, p, v[p])
                    })
                }
                return l
            }

            function I(l, s) {
                var v = Object.keys(l);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(l);
                    s && (o = o.filter(function(p) {
                        return Object.getOwnPropertyDescriptor(l, p).enumerable
                    })), v.push.apply(v, o)
                }
                return v
            }

            function h(l, s) {
                return s = s != null ? s : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : I(Object(s)).forEach(function(v) {
                    Object.defineProperty(l, v, Object.getOwnPropertyDescriptor(s, v))
                }), l
            }
            var _ = P.GLOBAL_OBJ,
                m = 0;

            function E() {
                return m > 0
            }

            function u() {
                m++, setTimeout(function() {
                    m--
                })
            }

            function g(l) {
                var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    v = arguments.length > 2 ? arguments[2] : void 0;
                if (typeof l != "function") return l;
                try {
                    var o = l.__sentry_wrapped__;
                    if (o) return o;
                    if ((0, P.getOriginalFunction)(l)) return l
                } catch (t) {
                    return l
                }
                var p = function() {
                    var e = Array.prototype.slice.call(arguments);
                    try {
                        v && typeof v == "function" && v.apply(this, arguments);
                        var r = e.map(function(n) {
                            return g(n, s)
                        });
                        return l.apply(this, r)
                    } catch (n) {
                        throw u(), (0, f.withScope)(function(c) {
                            c.addEventProcessor(function(T) {
                                return s.mechanism && ((0, P.addExceptionTypeValue)(T, void 0, void 0), (0, P.addExceptionMechanism)(T, s.mechanism)), T.extra = h(w({}, T.extra), {
                                    arguments: e
                                }), T
                            }), (0, f.captureException)(n)
                        }), n
                    }
                };
                try {
                    for (var a in l) Object.prototype.hasOwnProperty.call(l, a) && (p[a] = l[a])
                } catch (t) {}(0, P.markFunctionWrapped)(p, l), (0, P.addNonEnumerableProperty)(l, "__sentry_wrapped__", p);
                try {
                    var i = Object.getOwnPropertyDescriptor(p, "name");
                    i.configurable && Object.defineProperty(p, "name", {
                        get: function() {
                            return l.name
                        }
                    })
                } catch (t) {}
                return p
            }
        },
        268601: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(r, n) {
                for (var c in n) Object.defineProperty(r, c, {
                    enumerable: !0,
                    get: n[c]
                })
            }
            D(b, {
                FunctionToString: function() {
                    return f.FunctionToString
                },
                Hub: function() {
                    return f.Hub
                },
                InboundFilters: function() {
                    return f.InboundFilters
                },
                SDK_VERSION: function() {
                    return f.SDK_VERSION
                },
                Scope: function() {
                    return f.Scope
                },
                addBreadcrumb: function() {
                    return f.addBreadcrumb
                },
                addGlobalEventProcessor: function() {
                    return f.addGlobalEventProcessor
                },
                captureEvent: function() {
                    return f.captureEvent
                },
                captureException: function() {
                    return f.captureException
                },
                captureMessage: function() {
                    return f.captureMessage
                },
                configureScope: function() {
                    return f.configureScope
                },
                createTransport: function() {
                    return f.createTransport
                },
                getCurrentHub: function() {
                    return f.getCurrentHub
                },
                getHubFromCarrier: function() {
                    return f.getHubFromCarrier
                },
                makeMain: function() {
                    return f.makeMain
                },
                setContext: function() {
                    return f.setContext
                },
                setExtra: function() {
                    return f.setExtra
                },
                setExtras: function() {
                    return f.setExtras
                },
                setTag: function() {
                    return f.setTag
                },
                setTags: function() {
                    return f.setTags
                },
                setUser: function() {
                    return f.setUser
                },
                startTransaction: function() {
                    return f.startTransaction
                },
                withScope: function() {
                    return f.withScope
                },
                WINDOW: function() {
                    return P.WINDOW
                },
                BrowserClient: function() {
                    return w.BrowserClient
                },
                makeFetchTransport: function() {
                    return I.makeFetchTransport
                },
                makeXHRTransport: function() {
                    return h.makeXHRTransport
                },
                chromeStackLineParser: function() {
                    return _.chromeStackLineParser
                },
                defaultStackLineParsers: function() {
                    return _.defaultStackLineParsers
                },
                defaultStackParser: function() {
                    return _.defaultStackParser
                },
                geckoStackLineParser: function() {
                    return _.geckoStackLineParser
                },
                opera10StackLineParser: function() {
                    return _.opera10StackLineParser
                },
                opera11StackLineParser: function() {
                    return _.opera11StackLineParser
                },
                winjsStackLineParser: function() {
                    return _.winjsStackLineParser
                },
                close: function() {
                    return m.close
                },
                defaultIntegrations: function() {
                    return m.defaultIntegrations
                },
                flush: function() {
                    return m.flush
                },
                forceLoad: function() {
                    return m.forceLoad
                },
                init: function() {
                    return m.init
                },
                lastEventId: function() {
                    return m.lastEventId
                },
                onLoad: function() {
                    return m.onLoad
                },
                showReportDialog: function() {
                    return m.showReportDialog
                },
                wrap: function() {
                    return m.wrap
                },
                GlobalHandlers: function() {
                    return E.GlobalHandlers
                },
                TryCatch: function() {
                    return u.TryCatch
                },
                Breadcrumbs: function() {
                    return g.Breadcrumbs
                },
                LinkedErrors: function() {
                    return l.LinkedErrors
                },
                HttpContext: function() {
                    return s.HttpContext
                },
                Dedupe: function() {
                    return v.Dedupe
                },
                Integrations: function() {
                    return e
                }
            }), d(754126);
            var f = d(364904),
                P = d(497595),
                C = a(d(659356)),
                w = d(407712),
                I = d(235751),
                h = d(665115),
                _ = d(476397),
                m = d(397059),
                E = d(600529),
                u = d(521174),
                g = d(182365),
                l = d(45158),
                s = d(408363),
                v = d(57874);

            function o(r, n, c) {
                return n in r ? Object.defineProperty(r, n, {
                    value: c,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = c, r
            }

            function p(r) {
                if (typeof WeakMap != "function") return null;
                var n = new WeakMap,
                    c = new WeakMap;
                return (p = function(T) {
                    return T ? c : n
                })(r)
            }

            function a(r, n) {
                if (!n && r && r.__esModule) return r;
                if (r === null || typeof r != "object" && typeof r != "function") return {
                    default: r
                };
                var c = p(n);
                if (c && c.has(r)) return c.get(r);
                var T = {},
                    S = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var y in r)
                    if (y !== "default" && Object.prototype.hasOwnProperty.call(r, y)) {
                        var O = S ? Object.getOwnPropertyDescriptor(r, y) : null;
                        O && (O.get || O.set) ? Object.defineProperty(T, y, O) : T[y] = r[y]
                    }
                return T.default = r, c && c.set(r, T), T
            }

            function i(r) {
                for (var n = 1; n < arguments.length; n++) {
                    var c = arguments[n] != null ? arguments[n] : {},
                        T = Object.keys(c);
                    typeof Object.getOwnPropertySymbols == "function" && (T = T.concat(Object.getOwnPropertySymbols(c).filter(function(S) {
                        return Object.getOwnPropertyDescriptor(c, S).enumerable
                    }))), T.forEach(function(S) {
                        o(r, S, c[S])
                    })
                }
                return r
            }
            var t = {};
            P.WINDOW.Sentry && P.WINDOW.Sentry.Integrations && (t = P.WINDOW.Sentry.Integrations);
            var e = i({}, t, f.Integrations, C)
        },
        182365: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(a, i) {
                for (var t in i) Object.defineProperty(a, t, {
                    enumerable: !0,
                    get: i[t]
                })
            }
            D(b, {
                BREADCRUMB_INTEGRATION_ID: function() {
                    return u
                },
                Breadcrumbs: function() {
                    return g
                }
            });
            var f = d(364904),
                P = d(442378),
                C = d(497595);

            function w(a, i) {
                if (!(a instanceof i)) throw new TypeError("Cannot call a class as a function")
            }

            function I(a, i, t) {
                return i in a ? Object.defineProperty(a, i, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[i] = t, a
            }

            function h(a) {
                for (var i = 1; i < arguments.length; i++) {
                    var t = arguments[i] != null ? arguments[i] : {},
                        e = Object.keys(t);
                    typeof Object.getOwnPropertySymbols == "function" && (e = e.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
                        return Object.getOwnPropertyDescriptor(t, r).enumerable
                    }))), e.forEach(function(r) {
                        I(a, r, t[r])
                    })
                }
                return a
            }

            function _(a, i) {
                var t = Object.keys(a);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(a);
                    i && (e = e.filter(function(r) {
                        return Object.getOwnPropertyDescriptor(a, r).enumerable
                    })), t.push.apply(t, e)
                }
                return t
            }

            function m(a, i) {
                return i = i != null ? i : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : _(Object(i)).forEach(function(t) {
                    Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(i, t))
                }), a
            }
            var E = 1024,
                u = "Breadcrumbs",
                g = function() {
                    "use strict";

                    function a(t) {
                        w(this, a), a.prototype.__init.call(this), this.options = h({
                            console: !0,
                            dom: !0,
                            fetch: !0,
                            history: !0,
                            sentry: !0,
                            xhr: !0
                        }, t)
                    }
                    var i = a.prototype;
                    return i.__init = function() {
                        this.name = a.id
                    }, i.setupOnce = function() {
                        this.options.console && (0, P.addInstrumentationHandler)("console", s), this.options.dom && (0, P.addInstrumentationHandler)("dom", l(this.options.dom)), this.options.xhr && (0, P.addInstrumentationHandler)("xhr", v), this.options.fetch && (0, P.addInstrumentationHandler)("fetch", o), this.options.history && (0, P.addInstrumentationHandler)("history", p)
                    }, i.addSentryBreadcrumb = function(e) {
                        this.options.sentry && (0, f.getCurrentHub)().addBreadcrumb({
                            category: "sentry.".concat(e.type === "transaction" ? "transaction" : "event"),
                            event_id: e.event_id,
                            level: e.level,
                            message: (0, P.getEventDescription)(e)
                        }, {
                            event: e
                        })
                    }, a.__initStatic = function() {
                        this.id = u
                    }, a
                }();
            g.__initStatic();

            function l(a) {
                var i = function(e) {
                    var r, n = typeof a == "object" ? a.serializeAttribute : void 0,
                        c = typeof a == "object" && typeof a.maxStringLength == "number" ? a.maxStringLength : void 0;
                    c && c > E && ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.warn("`dom.maxStringLength` cannot exceed ".concat(E, ", but a value of ").concat(c, " was configured. Sentry will use ").concat(E, " instead.")), c = E), typeof n == "string" && (n = [n]);
                    try {
                        r = e.event.target ? (0, P.htmlTreeAsString)(e.event.target, {
                            keyAttrs: n,
                            maxStringLength: c
                        }) : (0, P.htmlTreeAsString)(e.event, {
                            keyAttrs: n,
                            maxStringLength: c
                        })
                    } catch (T) {
                        r = "<unknown>"
                    }
                    r.length !== 0 && (0, f.getCurrentHub)().addBreadcrumb({
                        category: "ui.".concat(e.name),
                        message: r
                    }, {
                        event: e.event,
                        name: e.name,
                        global: e.global
                    })
                };
                return i
            }

            function s(a) {
                for (var i = 0; i < a.args.length; i++)
                    if (a.args[i] === "ref=Ref<") {
                        a.args[i + 1] = "viewRef";
                        break
                    }
                var t = {
                    category: "console",
                    data: {
                        arguments: a.args,
                        logger: "console"
                    },
                    level: (0, P.severityLevelFromString)(a.level),
                    message: (0, P.safeJoin)(a.args, " ")
                };
                if (a.level === "assert")
                    if (a.args[0] === !1) t.message = "Assertion failed: ".concat((0, P.safeJoin)(a.args.slice(1), " ") || "console.assert"), t.data.arguments = a.args.slice(1);
                    else return;
                (0, f.getCurrentHub)().addBreadcrumb(t, {
                    input: a.args,
                    level: a.level
                })
            }

            function v(a) {
                if (a.endTimestamp) {
                    if (a.xhr.__sentry_own_request__) return;
                    var i = a.xhr.__sentry_xhr__ || {},
                        t = i.method,
                        e = i.url,
                        r = i.status_code,
                        n = i.body;
                    (0, f.getCurrentHub)().addBreadcrumb({
                        category: "xhr",
                        data: {
                            method: t,
                            url: e,
                            status_code: r
                        },
                        type: "http"
                    }, {
                        xhr: a.xhr,
                        input: n
                    });
                    return
                }
            }

            function o(a) {
                !a.endTimestamp || a.fetchData.url.match(/sentry_key/) && a.fetchData.method === "POST" || (a.error ? (0, f.getCurrentHub)().addBreadcrumb({
                    category: "fetch",
                    data: a.fetchData,
                    level: "error",
                    type: "http"
                }, {
                    data: a.error,
                    input: a.args
                }) : (0, f.getCurrentHub)().addBreadcrumb({
                    category: "fetch",
                    data: m(h({}, a.fetchData), {
                        status_code: a.response.status
                    }),
                    type: "http"
                }, {
                    input: a.args,
                    response: a.response
                }))
            }

            function p(a) {
                var i = a.from,
                    t = a.to,
                    e = (0, P.parseUrl)(C.WINDOW.location.href),
                    r = (0, P.parseUrl)(i),
                    n = (0, P.parseUrl)(t);
                r.path || (r = e), e.protocol === n.protocol && e.host === n.host && (t = n.relative), e.protocol === r.protocol && e.host === r.host && (i = r.relative), (0, f.getCurrentHub)().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: i,
                        to: t
                    }
                })
            }
        },
        57874: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "Dedupe", {
                enumerable: !0,
                get: function() {
                    return P
                }
            });
            var D = d(442378);

            function f(u, g) {
                if (!(u instanceof g)) throw new TypeError("Cannot call a class as a function")
            }
            var P = function() {
                "use strict";

                function u() {
                    f(this, u), u.prototype.__init.call(this)
                }
                var g = u.prototype;
                return g.__init = function() {
                    this.name = u.id
                }, g.setupOnce = function(s, v) {
                    var o = function(p) {
                        var a = v().getIntegration(u);
                        if (a) {
                            try {
                                if (C(p, a._previousEvent)) return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && D.logger.warn("Event dropped due to being a duplicate of previously captured event."), null
                            } catch (i) {
                                return a._previousEvent = p
                            }
                            return a._previousEvent = p
                        }
                        return p
                    };
                    o.id = this.name, s(o)
                }, u.__initStatic = function() {
                    this.id = "Dedupe"
                }, u
            }();
            P.__initStatic();

            function C(u, g) {
                return g ? !!(w(u, g) || I(u, g)) : !1
            }

            function w(u, g) {
                var l = u.message,
                    s = g.message;
                return !(!l && !s || l && !s || !l && s || l !== s || !_(u, g) || !h(u, g))
            }

            function I(u, g) {
                var l = m(g),
                    s = m(u);
                return !(!l || !s || l.type !== s.type || l.value !== s.value || !_(u, g) || !h(u, g))
            }

            function h(u, g) {
                var l = E(u),
                    s = E(g);
                if (!l && !s) return !0;
                if (l && !s || !l && s || (l = l, s = s, s.length !== l.length)) return !1;
                for (var v = 0; v < s.length; v++) {
                    var o = s[v],
                        p = l[v];
                    if (o.filename !== p.filename || o.lineno !== p.lineno || o.colno !== p.colno || o.function !== p.function) return !1
                }
                return !0
            }

            function _(u, g) {
                var l = u.fingerprint,
                    s = g.fingerprint;
                if (!l && !s) return !0;
                if (l && !s || !l && s) return !1;
                l = l, s = s;
                try {
                    return l.join("") === s.join("")
                } catch (v) {
                    return !1
                }
            }

            function m(u) {
                return u.exception && u.exception.values && u.exception.values[0]
            }

            function E(u) {
                var g = u.exception;
                if (g) try {
                    return g.values[0].stacktrace.frames
                } catch (l) {
                    return
                }
            }
        },
        600529: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "GlobalHandlers", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            var D = d(364904),
                f = d(442378),
                P = d(401612),
                C = d(497595);

            function w(n, c) {
                (c == null || c > n.length) && (c = n.length);
                for (var T = 0, S = new Array(c); T < c; T++) S[T] = n[T];
                return S
            }

            function I(n) {
                if (Array.isArray(n)) return n
            }

            function h(n, c) {
                if (!(n instanceof c)) throw new TypeError("Cannot call a class as a function")
            }

            function _(n, c, T) {
                return c in n ? Object.defineProperty(n, c, {
                    value: T,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[c] = T, n
            }

            function m(n, c) {
                var T = n == null ? null : typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
                if (T != null) {
                    var S = [],
                        y = !0,
                        O = !1,
                        A, j;
                    try {
                        for (T = T.call(n); !(y = (A = T.next()).done) && (S.push(A.value), !(c && S.length === c)); y = !0);
                    } catch (G) {
                        O = !0, j = G
                    } finally {
                        try {
                            !y && T.return != null && T.return()
                        } finally {
                            if (O) throw j
                        }
                    }
                    return S
                }
            }

            function E() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function u(n) {
                for (var c = 1; c < arguments.length; c++) {
                    var T = arguments[c] != null ? arguments[c] : {},
                        S = Object.keys(T);
                    typeof Object.getOwnPropertySymbols == "function" && (S = S.concat(Object.getOwnPropertySymbols(T).filter(function(y) {
                        return Object.getOwnPropertyDescriptor(T, y).enumerable
                    }))), S.forEach(function(y) {
                        _(n, y, T[y])
                    })
                }
                return n
            }

            function g(n, c) {
                return I(n) || m(n, c) || l(n, c) || E()
            }

            function l(n, c) {
                if (!!n) {
                    if (typeof n == "string") return w(n, c);
                    var T = Object.prototype.toString.call(n).slice(8, -1);
                    if (T === "Object" && n.constructor && (T = n.constructor.name), T === "Map" || T === "Set") return Array.from(T);
                    if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)) return w(n, c)
                }
            }
            var s = function() {
                "use strict";

                function n(T) {
                    h(this, n), n.prototype.__init.call(this), n.prototype.__init2.call(this), this._options = u({
                        onerror: !0,
                        onunhandledrejection: !0
                    }, T)
                }
                var c = n.prototype;
                return c.__init = function() {
                    this.name = n.id
                }, c.__init2 = function() {
                    this._installFunc = {
                        onerror: v,
                        onunhandledrejection: o
                    }
                }, c.setupOnce = function() {
                    Error.stackTraceLimit = 50;
                    var S = this._options;
                    for (var y in S) {
                        var O = this._installFunc[y];
                        O && S[y] && (t(y), O(), this._installFunc[y] = void 0)
                    }
                }, n.__initStatic = function() {
                    this.id = "GlobalHandlers"
                }, n
            }();
            s.__initStatic();

            function v() {
                (0, f.addInstrumentationHandler)("error", function(n) {
                    var c = g(r(), 3),
                        T = c[0],
                        S = c[1],
                        y = c[2];
                    if (!!T.getIntegration(s)) {
                        var O = n.msg,
                            A = n.url,
                            j = n.line,
                            G = n.column,
                            z = n.error;
                        if (!((0, C.shouldIgnoreOnError)() || z && z.__sentry_own_request__)) {
                            var $ = z === void 0 && (0, f.isString)(O) ? a(O, A, j, G) : i((0, P.eventFromUnknownInput)(S, z || O, void 0, y, !1), A, j, G);
                            $.level = "error", e(T, z, $, "onerror")
                        }
                    }
                })
            }

            function o() {
                (0, f.addInstrumentationHandler)("unhandledrejection", function(n) {
                    var c = g(r(), 3),
                        T = c[0],
                        S = c[1],
                        y = c[2];
                    if (!!T.getIntegration(s)) {
                        var O = n;
                        try {
                            "reason" in n ? O = n.reason : "detail" in n && "reason" in n.detail && (O = n.detail.reason)
                        } catch (j) {}
                        if ((0, C.shouldIgnoreOnError)() || O && O.__sentry_own_request__) return !0;
                        var A = (0, f.isPrimitive)(O) ? p(O) : (0, P.eventFromUnknownInput)(S, O, void 0, y, !0);
                        A.level = "error", e(T, O, A, "onunhandledrejection")
                    }
                })
            }

            function p(n) {
                return {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: "Non-Error promise rejection captured with value: ".concat(String(n))
                        }]
                    }
                }
            }

            function a(n, c, T, S) {
                var y = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
                    O = (0, f.isErrorEvent)(n) ? n.message : n,
                    A = "Error",
                    j = O.match(y);
                j && (A = j[1], O = j[2]);
                var G = {
                    exception: {
                        values: [{
                            type: A,
                            value: O
                        }]
                    }
                };
                return i(G, c, T, S)
            }

            function i(n, c, T, S) {
                var y = n.exception = n.exception || {},
                    O = y.values = y.values || [],
                    A = O[0] = O[0] || {},
                    j = A.stacktrace = A.stacktrace || {},
                    G = j.frames = j.frames || [],
                    z = isNaN(parseInt(S, 10)) ? void 0 : S,
                    $ = isNaN(parseInt(T, 10)) ? void 0 : T,
                    W = (0, f.isString)(c) && c.length > 0 ? c : (0, f.getLocationHref)();
                return G.length === 0 && G.push({
                    colno: z,
                    filename: W,
                    function: "?",
                    in_app: !0,
                    lineno: $
                }), n
            }

            function t(n) {
                (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.log("Global Handler attached: ".concat(n))
            }

            function e(n, c, T, S) {
                (0, f.addExceptionMechanism)(T, {
                    handled: !1,
                    type: S
                }), n.captureEvent(T, {
                    originalException: c
                })
            }

            function r() {
                var n = (0, D.getCurrentHub)(),
                    c = n.getClient(),
                    T = c && c.getOptions() || {
                        stackParser: function() {
                            return []
                        },
                        attachStacktrace: !1
                    };
                return [n, T.stackParser, T.attachStacktrace]
            }
        },
        408363: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "HttpContext", {
                enumerable: !0,
                get: function() {
                    return _
                }
            });
            var D = d(364904),
                f = d(497595);

            function P(m, E) {
                if (!(m instanceof E)) throw new TypeError("Cannot call a class as a function")
            }

            function C(m, E, u) {
                return E in m ? Object.defineProperty(m, E, {
                    value: u,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : m[E] = u, m
            }

            function w(m) {
                for (var E = 1; E < arguments.length; E++) {
                    var u = arguments[E] != null ? arguments[E] : {},
                        g = Object.keys(u);
                    typeof Object.getOwnPropertySymbols == "function" && (g = g.concat(Object.getOwnPropertySymbols(u).filter(function(l) {
                        return Object.getOwnPropertyDescriptor(u, l).enumerable
                    }))), g.forEach(function(l) {
                        C(m, l, u[l])
                    })
                }
                return m
            }

            function I(m, E) {
                var u = Object.keys(m);
                if (Object.getOwnPropertySymbols) {
                    var g = Object.getOwnPropertySymbols(m);
                    E && (g = g.filter(function(l) {
                        return Object.getOwnPropertyDescriptor(m, l).enumerable
                    })), u.push.apply(u, g)
                }
                return u
            }

            function h(m, E) {
                return E = E != null ? E : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(E)) : I(Object(E)).forEach(function(u) {
                    Object.defineProperty(m, u, Object.getOwnPropertyDescriptor(E, u))
                }), m
            }
            var _ = function() {
                "use strict";

                function m() {
                    P(this, m), m.prototype.__init.call(this)
                }
                var E = m.prototype;
                return E.__init = function() {
                    this.name = m.id
                }, E.setupOnce = function() {
                    (0, D.addGlobalEventProcessor)(function(g) {
                        if ((0, D.getCurrentHub)().getIntegration(m)) {
                            if (!f.WINDOW.navigator && !f.WINDOW.location && !f.WINDOW.document) return g;
                            var l = g.request && g.request.url || f.WINDOW.location && f.WINDOW.location.href,
                                s = (f.WINDOW.document || {}).referrer,
                                v = (f.WINDOW.navigator || {}).userAgent,
                                o = w({}, g.request && g.request.headers, s && {
                                    Referer: s
                                }, v && {
                                    "User-Agent": v
                                }),
                                p = h(w({}, l && {
                                    url: l
                                }), {
                                    headers: o
                                });
                            return h(w({}, g), {
                                request: p
                            })
                        }
                        return g
                    })
                }, m.__initStatic = function() {
                    this.id = "HttpContext"
                }, m
            }();
            _.__initStatic()
        },
        659356: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(_, m) {
                for (var E in m) Object.defineProperty(_, E, {
                    enumerable: !0,
                    get: m[E]
                })
            }
            D(b, {
                GlobalHandlers: function() {
                    return f.GlobalHandlers
                },
                TryCatch: function() {
                    return P.TryCatch
                },
                Breadcrumbs: function() {
                    return C.Breadcrumbs
                },
                LinkedErrors: function() {
                    return w.LinkedErrors
                },
                HttpContext: function() {
                    return I.HttpContext
                },
                Dedupe: function() {
                    return h.Dedupe
                }
            });
            var f = d(600529),
                P = d(521174),
                C = d(182365),
                w = d(45158),
                I = d(408363),
                h = d(57874)
        },
        45158: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(p, a) {
                for (var i in a) Object.defineProperty(p, i, {
                    enumerable: !0,
                    get: a[i]
                })
            }
            D(b, {
                LinkedErrors: function() {
                    return s
                },
                _handler: function() {
                    return v
                },
                _walkErrorTree: function() {
                    return o
                }
            });
            var f = d(364904),
                P = d(442378),
                C = d(401612);

            function w(p, a) {
                (a == null || a > p.length) && (a = p.length);
                for (var i = 0, t = new Array(a); i < a; i++) t[i] = p[i];
                return t
            }

            function I(p) {
                if (Array.isArray(p)) return w(p)
            }

            function h(p, a) {
                if (!(p instanceof a)) throw new TypeError("Cannot call a class as a function")
            }

            function _(p) {
                if (typeof Symbol != "undefined" && p[Symbol.iterator] != null || p["@@iterator"] != null) return Array.from(p)
            }

            function m() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function E(p) {
                return I(p) || _(p) || u(p) || m()
            }

            function u(p, a) {
                if (!!p) {
                    if (typeof p == "string") return w(p, a);
                    var i = Object.prototype.toString.call(p).slice(8, -1);
                    if (i === "Object" && p.constructor && (i = p.constructor.name), i === "Map" || i === "Set") return Array.from(i);
                    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return w(p, a)
                }
            }
            var g = "cause",
                l = 5,
                s = function() {
                    "use strict";

                    function p() {
                        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        h(this, p), p.prototype.__init.call(this), this._key = i.key || g, this._limit = i.limit || l
                    }
                    var a = p.prototype;
                    return a.__init = function() {
                        this.name = p.id
                    }, a.setupOnce = function() {
                        var t = (0, f.getCurrentHub)().getClient();
                        !t || (0, f.addGlobalEventProcessor)(function(e, r) {
                            var n = (0, f.getCurrentHub)().getIntegration(p);
                            return n ? v(t.getOptions().stackParser, n._key, n._limit, e, r) : e
                        })
                    }, p.__initStatic = function() {
                        this.id = "LinkedErrors"
                    }, p
                }();
            s.__initStatic();

            function v(p, a, i, t, e) {
                if (!t.exception || !t.exception.values || !e || !(0, P.isInstanceOf)(e.originalException, Error)) return t;
                var r = o(p, i, e.originalException, a);
                return t.exception.values = E(r).concat(E(t.exception.values)), t
            }

            function o(p, a, i, t) {
                var e = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [];
                if (!(0, P.isInstanceOf)(i[t], Error) || e.length + 1 >= a) return e;
                var r = (0, C.exceptionFromError)(p, i[t]);
                return o(p, a, i[t], t, [r].concat(E(e)))
            }
        },
        521174: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "TryCatch", {
                enumerable: !0,
                get: function() {
                    return h
                }
            });
            var D = d(442378),
                f = d(497595);

            function P(g, l) {
                if (!(g instanceof l)) throw new TypeError("Cannot call a class as a function")
            }

            function C(g, l, s) {
                return l in g ? Object.defineProperty(g, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : g[l] = s, g
            }

            function w(g) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = arguments[l] != null ? arguments[l] : {},
                        v = Object.keys(s);
                    typeof Object.getOwnPropertySymbols == "function" && (v = v.concat(Object.getOwnPropertySymbols(s).filter(function(o) {
                        return Object.getOwnPropertyDescriptor(s, o).enumerable
                    }))), v.forEach(function(o) {
                        C(g, o, s[o])
                    })
                }
                return g
            }
            var I = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
                h = function() {
                    "use strict";

                    function g(s) {
                        P(this, g), g.prototype.__init.call(this), this._options = w({
                            XMLHttpRequest: !0,
                            eventTarget: !0,
                            requestAnimationFrame: !0,
                            setInterval: !0,
                            setTimeout: !0
                        }, s)
                    }
                    var l = g.prototype;
                    return l.__init = function() {
                        this.name = g.id
                    }, l.setupOnce = function() {
                        this._options.setTimeout && (0, D.fill)(f.WINDOW, "setTimeout", _), this._options.setInterval && (0, D.fill)(f.WINDOW, "setInterval", _), this._options.requestAnimationFrame && (0, D.fill)(f.WINDOW, "requestAnimationFrame", m), this._options.XMLHttpRequest && "XMLHttpRequest" in f.WINDOW && (0, D.fill)(XMLHttpRequest.prototype, "send", E);
                        var v = this._options.eventTarget;
                        if (v) {
                            var o = Array.isArray(v) ? v : I;
                            o.forEach(u)
                        }
                    }, g.__initStatic = function() {
                        this.id = "TryCatch"
                    }, g
                }();
            h.__initStatic();

            function _(g) {
                return function() {
                    for (var l = arguments.length, s = new Array(l), v = 0; v < l; v++) s[v] = arguments[v];
                    var o = s[0];
                    return s[0] = (0, f.wrap)(o, {
                        mechanism: {
                            data: {
                                function: (0, D.getFunctionName)(g)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), g.apply(this, s)
                }
            }

            function m(g) {
                return function(l) {
                    return g.apply(this, [(0, f.wrap)(l, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: (0, D.getFunctionName)(g)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    })])
                }
            }

            function E(g) {
                return function() {
                    for (var l = arguments.length, s = new Array(l), v = 0; v < l; v++) s[v] = arguments[v];
                    var o = this,
                        p = ["onload", "onerror", "onprogress", "onreadystatechange"];
                    return p.forEach(function(a) {
                        a in o && typeof o[a] == "function" && (0, D.fill)(o, a, function(i) {
                            var t = {
                                    mechanism: {
                                        data: {
                                            function: a,
                                            handler: (0, D.getFunctionName)(i)
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                },
                                e = (0, D.getOriginalFunction)(i);
                            return e && (t.mechanism.data.handler = (0, D.getFunctionName)(e)), (0, f.wrap)(i, t)
                        })
                    }), g.apply(this, s)
                }
            }

            function u(g) {
                var l = f.WINDOW,
                    s = l[g] && l[g].prototype;
                !s || !s.hasOwnProperty || !s.hasOwnProperty("addEventListener") || ((0, D.fill)(s, "addEventListener", function(v) {
                    return function(o, p, a) {
                        try {
                            typeof p.handleEvent == "function" && (p.handleEvent = (0, f.wrap)(p.handleEvent, {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: (0, D.getFunctionName)(p),
                                        target: g
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (i) {}
                        return v.apply(this, [o, (0, f.wrap)(p, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: (0, D.getFunctionName)(p),
                                    target: g
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), a])
                    }
                }), (0, D.fill)(s, "removeEventListener", function(v) {
                    return function(o, p, a) {
                        var i = p;
                        try {
                            var t = i && i.__sentry_wrapped__;
                            t && v.call(this, o, t, a)
                        } catch (e) {}
                        return v.call(this, o, i, a)
                    }
                }))
            }
        },
        397059: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(j, G) {
                for (var z in G) Object.defineProperty(j, z, {
                    enumerable: !0,
                    get: G[z]
                })
            }
            D(b, {
                close: function() {
                    return S
                },
                defaultIntegrations: function() {
                    return i
                },
                flush: function() {
                    return T
                },
                forceLoad: function() {
                    return n
                },
                init: function() {
                    return t
                },
                lastEventId: function() {
                    return r
                },
                onLoad: function() {
                    return c
                },
                showReportDialog: function() {
                    return e
                },
                wrap: function() {
                    return y
                }
            });
            var f = d(364904),
                P = d(442378),
                C = d(407712),
                w = d(497595);
            d(659356);
            var I = d(476397);
            d(611472);
            var h = d(521174),
                _ = d(182365),
                m = d(600529),
                E = d(45158),
                u = d(57874),
                g = d(408363),
                l = d(235751),
                s = d(665115);

            function v(j, G, z) {
                return G in j ? Object.defineProperty(j, G, {
                    value: z,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : j[G] = z, j
            }

            function o(j) {
                for (var G = 1; G < arguments.length; G++) {
                    var z = arguments[G] != null ? arguments[G] : {},
                        $ = Object.keys(z);
                    typeof Object.getOwnPropertySymbols == "function" && ($ = $.concat(Object.getOwnPropertySymbols(z).filter(function(W) {
                        return Object.getOwnPropertyDescriptor(z, W).enumerable
                    }))), $.forEach(function(W) {
                        v(j, W, z[W])
                    })
                }
                return j
            }

            function p(j, G) {
                var z = Object.keys(j);
                if (Object.getOwnPropertySymbols) {
                    var $ = Object.getOwnPropertySymbols(j);
                    G && ($ = $.filter(function(W) {
                        return Object.getOwnPropertyDescriptor(j, W).enumerable
                    })), z.push.apply(z, $)
                }
                return z
            }

            function a(j, G) {
                return G = G != null ? G : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(G)) : p(Object(G)).forEach(function(z) {
                    Object.defineProperty(j, z, Object.getOwnPropertyDescriptor(G, z))
                }), j
            }
            var i = [new f.Integrations.InboundFilters, new f.Integrations.FunctionToString, new h.TryCatch, new _.Breadcrumbs, new m.GlobalHandlers, new E.LinkedErrors, new u.Dedupe, new g.HttpContext];

            function t() {
                var j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                j.defaultIntegrations === void 0 && (j.defaultIntegrations = i), j.release === void 0 && (typeof __SENTRY_RELEASE__ == "string" && (j.release = __SENTRY_RELEASE__), w.WINDOW.SENTRY_RELEASE && w.WINDOW.SENTRY_RELEASE.id && (j.release = w.WINDOW.SENTRY_RELEASE.id)), j.autoSessionTracking === void 0 && (j.autoSessionTracking = !0), j.sendClientReports === void 0 && (j.sendClientReports = !0);
                var G = a(o({}, j), {
                    stackParser: (0, P.stackParserFromStackParserOptions)(j.stackParser || I.defaultStackParser),
                    integrations: (0, f.getIntegrationsToSetup)(j),
                    transport: j.transport || ((0, P.supportsFetch)() ? l.makeFetchTransport : s.makeXHRTransport)
                });
                (0, f.initAndBind)(C.BrowserClient, G), j.autoSessionTracking && A()
            }

            function e() {
                var j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (0, f.getCurrentHub)();
                if (!w.WINDOW.document) {
                    (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.error("Global document not defined in showReportDialog call");
                    return
                }
                var z = G.getStackTop(),
                    $ = z.client,
                    W = z.scope,
                    R = j.dsn || $ && $.getDsn();
                if (!R) {
                    (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.error("DSN not configured for showReportDialog call");
                    return
                }
                W && (j.user = o({}, W.getUser(), j.user)), j.eventId || (j.eventId = G.lastEventId());
                var L = w.WINDOW.document.createElement("script");
                L.async = !0, L.src = (0, f.getReportDialogEndpoint)(R, j), j.onLoad && (L.onload = j.onLoad);
                var k = w.WINDOW.document.head || w.WINDOW.document.body;
                k ? k.appendChild(L) : (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.error("Not injecting report dialog. No injection point found in HTML")
            }

            function r() {
                return (0, f.getCurrentHub)().lastEventId()
            }

            function n() {}

            function c(j) {
                j()
            }

            function T(j) {
                var G = (0, f.getCurrentHub)().getClient();
                return G ? G.flush(j) : ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.warn("Cannot flush events. No client defined."), (0, P.resolvedSyncPromise)(!1))
            }

            function S(j) {
                var G = (0, f.getCurrentHub)().getClient();
                return G ? G.close(j) : ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.warn("Cannot flush events and disable SDK. No client defined."), (0, P.resolvedSyncPromise)(!1))
            }

            function y(j) {
                return (0, w.wrap)(j)()
            }

            function O(j) {
                j.startSession({
                    ignoreDuration: !0
                }), j.captureSession()
            }

            function A() {
                if (typeof w.WINDOW.document == "undefined") {
                    (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                    return
                }
                var j = (0, f.getCurrentHub)();
                !j.captureSession || (O(j), (0, P.addInstrumentationHandler)("history", function(G) {
                    var z = G.from,
                        $ = G.to;
                    z === void 0 || z === $ || O((0, f.getCurrentHub)())
                }))
            }
        },
        476397: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(M, H) {
                for (var N in H) Object.defineProperty(M, N, {
                    enumerable: !0,
                    get: H[N]
                })
            }
            D(b, {
                chromeStackLineParser: function() {
                    return n
                },
                defaultStackLineParsers: function() {
                    return k
                },
                defaultStackParser: function() {
                    return x
                },
                geckoStackLineParser: function() {
                    return y
                },
                opera10StackLineParser: function() {
                    return $
                },
                opera11StackLineParser: function() {
                    return L
                },
                winjsStackLineParser: function() {
                    return j
                }
            });
            var f = d(442378);

            function P(M, H) {
                (H == null || H > M.length) && (H = M.length);
                for (var N = 0, J = new Array(H); N < H; N++) J[N] = M[N];
                return J
            }

            function C(M) {
                if (Array.isArray(M)) return M
            }

            function w(M) {
                if (Array.isArray(M)) return P(M)
            }

            function I(M) {
                if (typeof Symbol != "undefined" && M[Symbol.iterator] != null || M["@@iterator"] != null) return Array.from(M)
            }

            function h(M, H) {
                var N = M == null ? null : typeof Symbol != "undefined" && M[Symbol.iterator] || M["@@iterator"];
                if (N != null) {
                    var J = [],
                        Q = !0,
                        te = !1,
                        ee, K;
                    try {
                        for (N = N.call(M); !(Q = (ee = N.next()).done) && (J.push(ee.value), !(H && J.length === H)); Q = !0);
                    } catch (q) {
                        te = !0, K = q
                    } finally {
                        try {
                            !Q && N.return != null && N.return()
                        } finally {
                            if (te) throw K
                        }
                    }
                    return J
                }
            }

            function _() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function m() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function E(M, H) {
                return C(M) || h(M, H) || g(M, H) || _()
            }

            function u(M) {
                return w(M) || I(M) || g(M) || m()
            }

            function g(M, H) {
                if (!!M) {
                    if (typeof M == "string") return P(M, H);
                    var N = Object.prototype.toString.call(M).slice(8, -1);
                    if (N === "Object" && M.constructor && (N = M.constructor.name), N === "Map" || N === "Set") return Array.from(N);
                    if (N === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N)) return P(M, H)
                }
            }
            var l = "?",
                s = 10,
                v = 20,
                o = 30,
                p = 40,
                a = 50;

            function i(M, H, N, J) {
                var Q = {
                    filename: M,
                    function: H,
                    in_app: !0
                };
                return N !== void 0 && (Q.lineno = N), J !== void 0 && (Q.colno = J), Q
            }
            var t = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                e = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                r = function(M) {
                    var H = t.exec(M);
                    if (H) {
                        var N = H[2] && H[2].indexOf("eval") === 0;
                        if (N) {
                            var J = e.exec(H[2]);
                            J && (H[2] = J[1], H[3] = J[2], H[4] = J[3])
                        }
                        var Q = E(U(H[1] || l, H[2]), 2),
                            te = Q[0],
                            ee = Q[1];
                        return i(ee, te, H[3] ? +H[3] : void 0, H[4] ? +H[4] : void 0)
                    }
                },
                n = [o, r],
                c = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                T = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                S = function(M) {
                    var H = c.exec(M);
                    if (H) {
                        var N = H[3] && H[3].indexOf(" > eval") > -1;
                        if (N) {
                            var J = T.exec(H[3]);
                            J && (H[1] = H[1] || "eval", H[3] = J[1], H[4] = J[2], H[5] = "")
                        }
                        var Q = H[3],
                            te = H[1] || l,
                            ee;
                        return ee = E(U(te, Q), 2), te = ee[0], Q = ee[1], i(Q, te, H[4] ? +H[4] : void 0, H[5] ? +H[5] : void 0)
                    }
                },
                y = [a, S],
                O = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                A = function(M) {
                    var H = O.exec(M);
                    return H ? i(H[2], H[1] || l, +H[3], H[4] ? +H[4] : void 0) : void 0
                },
                j = [p, A],
                G = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                z = function(M) {
                    var H = G.exec(M);
                    return H ? i(H[2], H[3] || l, +H[1]) : void 0
                },
                $ = [s, z],
                W = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
                R = function(M) {
                    var H = W.exec(M);
                    return H ? i(H[5], H[3] || H[4] || l, +H[1], +H[2]) : void 0
                },
                L = [v, R],
                k = [n, y, j],
                x = f.createStackParser.apply(void 0, u(k)),
                U = function(M, H) {
                    var N = M.indexOf("safari-extension") !== -1,
                        J = M.indexOf("safari-web-extension") !== -1;
                    return N || J ? [M.indexOf("@") !== -1 ? M.split("@")[0] : l, N ? "safari-extension:".concat(H) : "safari-web-extension:".concat(H)] : [M, H]
                }
        },
        235751: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "makeFetchTransport", {
                enumerable: !0,
                get: function() {
                    return I
                }
            });
            var D = d(364904),
                f = d(442378),
                P = d(29929);

            function C(h, _, m) {
                return _ in h ? Object.defineProperty(h, _, {
                    value: m,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : h[_] = m, h
            }

            function w(h) {
                for (var _ = 1; _ < arguments.length; _++) {
                    var m = arguments[_] != null ? arguments[_] : {},
                        E = Object.keys(m);
                    typeof Object.getOwnPropertySymbols == "function" && (E = E.concat(Object.getOwnPropertySymbols(m).filter(function(u) {
                        return Object.getOwnPropertyDescriptor(m, u).enumerable
                    }))), E.forEach(function(u) {
                        C(h, u, m[u])
                    })
                }
                return h
            }

            function I(h) {
                var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (0, P.getNativeFetchImplementation)(),
                    m = function(u) {
                        var g = w({
                            body: u.body,
                            method: "POST",
                            referrerPolicy: "origin",
                            headers: h.headers,
                            keepalive: u.body.length <= 65536
                        }, h.fetchOptions);
                        try {
                            return _(h.url, g).then(function(l) {
                                return {
                                    statusCode: l.status,
                                    headers: {
                                        "x-sentry-rate-limits": l.headers.get("X-Sentry-Rate-Limits"),
                                        "retry-after": l.headers.get("Retry-After")
                                    }
                                }
                            })
                        } catch (l) {
                            return (0, P.clearCachedFetchImplementation)(), (0, f.rejectedSyncPromise)(l)
                        }
                    };
                return (0, D.createTransport)(h, m)
            }
        },
        611472: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(C, w) {
                for (var I in w) Object.defineProperty(C, I, {
                    enumerable: !0,
                    get: w[I]
                })
            }
            D(b, {
                makeFetchTransport: function() {
                    return f.makeFetchTransport
                },
                makeXHRTransport: function() {
                    return P.makeXHRTransport
                }
            });
            var f = d(235751),
                P = d(665115)
        },
        29929: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(h, _) {
                for (var m in _) Object.defineProperty(h, m, {
                    enumerable: !0,
                    get: _[m]
                })
            }
            D(b, {
                clearCachedFetchImplementation: function() {
                    return I
                },
                getNativeFetchImplementation: function() {
                    return w
                }
            });
            var f = d(442378),
                P = d(497595),
                C = void 0;

            function w() {
                if (C) return C;
                if ((0, f.isNativeFetch)(P.WINDOW.fetch)) return C = P.WINDOW.fetch.bind(P.WINDOW);
                var h = P.WINDOW.document,
                    _ = P.WINDOW.fetch;
                if (h && typeof h.createElement == "function") try {
                    var m = h.createElement("iframe");
                    m.hidden = !0, h.head.appendChild(m);
                    var E = m.contentWindow;
                    E && E.fetch && (_ = E.fetch), h.head.removeChild(m)
                } catch (u) {
                    (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", u)
                }
                return C = _.bind(P.WINDOW)
            }

            function I() {
                C = void 0
            }
        },
        665115: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "makeXHRTransport", {
                enumerable: !0,
                get: function() {
                    return C
                }
            });
            var D = d(364904),
                f = d(442378),
                P = 4;

            function C(w) {
                var I = function(_) {
                    return new f.SyncPromise(function(m, E) {
                        var u = new XMLHttpRequest;
                        u.onerror = E, u.onreadystatechange = function() {
                            u.readyState === P && m({
                                statusCode: u.status,
                                headers: {
                                    "x-sentry-rate-limits": u.getResponseHeader("X-Sentry-Rate-Limits"),
                                    "retry-after": u.getResponseHeader("Retry-After")
                                }
                            })
                        }, u.open("POST", w.url);
                        for (var g in w.headers) Object.prototype.hasOwnProperty.call(w.headers, g) && u.setRequestHeader(g, w.headers[g]);
                        u.send(_.body)
                    })
                };
                return (0, D.createTransport)(w, I)
            }
        },
        1441: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(u, g) {
                for (var l in g) Object.defineProperty(u, l, {
                    enumerable: !0,
                    get: g[l]
                })
            }
            D(b, {
                getEnvelopeEndpointWithUrlEncodedAuth: function() {
                    return m
                },
                getReportDialogEndpoint: function() {
                    return E
                }
            });
            var f = d(442378);

            function P(u, g, l) {
                return g in u ? Object.defineProperty(u, g, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : u[g] = l, u
            }

            function C(u) {
                for (var g = 1; g < arguments.length; g++) {
                    var l = arguments[g] != null ? arguments[g] : {},
                        s = Object.keys(l);
                    typeof Object.getOwnPropertySymbols == "function" && (s = s.concat(Object.getOwnPropertySymbols(l).filter(function(v) {
                        return Object.getOwnPropertyDescriptor(l, v).enumerable
                    }))), s.forEach(function(v) {
                        P(u, v, l[v])
                    })
                }
                return u
            }
            var w = "7";

            function I(u) {
                var g = u.protocol ? "".concat(u.protocol, ":") : "",
                    l = u.port ? ":".concat(u.port) : "";
                return "".concat(g, "//").concat(u.host).concat(l).concat(u.path ? "/".concat(u.path) : "", "/api/")
            }

            function h(u) {
                return "".concat(I(u)).concat(u.projectId, "/envelope/")
            }

            function _(u, g) {
                return (0, f.urlEncode)(C({
                    sentry_key: u.publicKey,
                    sentry_version: w
                }, g && {
                    sentry_client: "".concat(g.name, "/").concat(g.version)
                }))
            }

            function m(u) {
                var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    l = typeof g == "string" ? g : g.tunnel,
                    s = typeof g == "string" || !g._metadata ? void 0 : g._metadata.sdk;
                return l || "".concat(h(u), "?").concat(_(u, s))
            }

            function E(u, g) {
                var l = (0, f.makeDsn)(u),
                    s = "".concat(I(l), "embed/error-page/"),
                    v = "dsn=".concat((0, f.dsnToString)(l));
                for (var o in g)
                    if (o !== "dsn")
                        if (o === "user") {
                            var p = g.user;
                            if (!p) continue;
                            p.name && (v += "&name=".concat(encodeURIComponent(p.name))), p.email && (v += "&email=".concat(encodeURIComponent(p.email)))
                        } else v += "&".concat(encodeURIComponent(o), "=").concat(encodeURIComponent(g[o]));
                return "".concat(s, "?").concat(v)
            }
        },
        559265: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "BaseClient", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            var D = d(442378),
                f = d(1441),
                P = d(310481),
                C = d(432127),
                w = d(320761),
                I = d(391455);

            function h(S, y) {
                (y == null || y > S.length) && (y = S.length);
                for (var O = 0, A = new Array(y); O < y; O++) A[O] = S[O];
                return A
            }

            function _(S) {
                if (Array.isArray(S)) return S
            }

            function m(S) {
                if (Array.isArray(S)) return h(S)
            }

            function E(S, y) {
                if (!(S instanceof y)) throw new TypeError("Cannot call a class as a function")
            }

            function u(S, y, O) {
                return y in S ? Object.defineProperty(S, y, {
                    value: O,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : S[y] = O, S
            }

            function g(S, y) {
                return y != null && typeof Symbol != "undefined" && y[Symbol.hasInstance] ? !!y[Symbol.hasInstance](S) : S instanceof y
            }

            function l(S) {
                if (typeof Symbol != "undefined" && S[Symbol.iterator] != null || S["@@iterator"] != null) return Array.from(S)
            }

            function s(S, y) {
                var O = S == null ? null : typeof Symbol != "undefined" && S[Symbol.iterator] || S["@@iterator"];
                if (O != null) {
                    var A = [],
                        j = !0,
                        G = !1,
                        z, $;
                    try {
                        for (O = O.call(S); !(j = (z = O.next()).done) && (A.push(z.value), !(y && A.length === y)); j = !0);
                    } catch (W) {
                        G = !0, $ = W
                    } finally {
                        try {
                            !j && O.return != null && O.return()
                        } finally {
                            if (G) throw $
                        }
                    }
                    return A
                }
            }

            function v() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function o() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function p(S) {
                for (var y = 1; y < arguments.length; y++) {
                    var O = arguments[y] != null ? arguments[y] : {},
                        A = Object.keys(O);
                    typeof Object.getOwnPropertySymbols == "function" && (A = A.concat(Object.getOwnPropertySymbols(O).filter(function(j) {
                        return Object.getOwnPropertyDescriptor(O, j).enumerable
                    }))), A.forEach(function(j) {
                        u(S, j, O[j])
                    })
                }
                return S
            }

            function a(S, y) {
                var O = Object.keys(S);
                if (Object.getOwnPropertySymbols) {
                    var A = Object.getOwnPropertySymbols(S);
                    y && (A = A.filter(function(j) {
                        return Object.getOwnPropertyDescriptor(S, j).enumerable
                    })), O.push.apply(O, A)
                }
                return O
            }

            function i(S, y) {
                return y = y != null ? y : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(y)) : a(Object(y)).forEach(function(O) {
                    Object.defineProperty(S, O, Object.getOwnPropertyDescriptor(y, O))
                }), S
            }

            function t(S, y) {
                return _(S) || s(S, y) || r(S, y) || v()
            }

            function e(S) {
                return m(S) || l(S) || r(S) || o()
            }

            function r(S, y) {
                if (!!S) {
                    if (typeof S == "string") return h(S, y);
                    var O = Object.prototype.toString.call(S).slice(8, -1);
                    if (O === "Object" && S.constructor && (O = S.constructor.name), O === "Map" || O === "Set") return Array.from(O);
                    if (O === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)) return h(S, y)
                }
            }
            var n = "Not capturing exception because it's already been captured.",
                c = function() {
                    "use strict";

                    function S(O) {
                        if (E(this, S), S.prototype.__init.call(this), S.prototype.__init2.call(this), S.prototype.__init3.call(this), S.prototype.__init4.call(this), this._options = O, O.dsn) {
                            this._dsn = (0, D.makeDsn)(O.dsn);
                            var A = (0, f.getEnvelopeEndpointWithUrlEncodedAuth)(this._dsn, O);
                            this._transport = O.transport(i(p({
                                recordDroppedEvent: this.recordDroppedEvent.bind(this)
                            }, O.transportOptions), {
                                url: A
                            }))
                        } else(typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && D.logger.warn("No DSN provided, client will not do anything.")
                    }
                    var y = S.prototype;
                    return y.__init = function() {
                        this._integrations = {}
                    }, y.__init2 = function() {
                        this._integrationsInitialized = !1
                    }, y.__init3 = function() {
                        this._numProcessing = 0
                    }, y.__init4 = function() {
                        this._outcomes = {}
                    }, y.captureException = function(A, j, G) {
                        var z = this;
                        if ((0, D.checkOrSetAlreadyCaught)(A)) {
                            (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && D.logger.log(n);
                            return
                        }
                        var $ = j && j.event_id;
                        return this._process(this.eventFromException(A, j).then(function(W) {
                            return z._captureEvent(W, j, G)
                        }).then(function(W) {
                            $ = W
                        })), $
                    }, y.captureMessage = function(A, j, G, z) {
                        var $ = this,
                            W = G && G.event_id,
                            R = (0, D.isPrimitive)(A) ? this.eventFromMessage(String(A), j, G) : this.eventFromException(A, G);
                        return this._process(R.then(function(L) {
                            return $._captureEvent(L, G, z)
                        }).then(function(L) {
                            W = L
                        })), W
                    }, y.captureEvent = function(A, j, G) {
                        if (j && j.originalException && (0, D.checkOrSetAlreadyCaught)(j.originalException)) {
                            (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && D.logger.log(n);
                            return
                        }
                        var z = j && j.event_id;
                        return this._process(this._captureEvent(A, j, G).then(function($) {
                            z = $
                        })), z
                    }, y.captureSession = function(A) {
                        if (!this._isEnabled()) {
                            (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && D.logger.warn("SDK not enabled, will not capture session.");
                            return
                        }
                        typeof A.release != "string" ? (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && D.logger.warn("Discarded session because of missing or non-string release") : (this.sendSession(A), (0, I.updateSession)(A, {
                            init: !1
                        }))
                    }, y.getDsn = function() {
                        return this._dsn
                    }, y.getOptions = function() {
                        return this._options
                    }, y.getTransport = function() {
                        return this._transport
                    }, y.flush = function(A) {
                        var j = this._transport;
                        return j ? this._isClientDoneProcessing(A).then(function(G) {
                            return j.flush(A).then(function(z) {
                                return G && z
                            })
                        }) : (0, D.resolvedSyncPromise)(!0)
                    }, y.close = function(A) {
                        var j = this;
                        return this.flush(A).then(function(G) {
                            return j.getOptions().enabled = !1, G
                        })
                    }, y.setupIntegrations = function() {
                        this._isEnabled() && !this._integrationsInitialized && (this._integrations = (0, C.setupIntegrations)(this._options.integrations), this._integrationsInitialized = !0)
                    }, y.getIntegrationById = function(A) {
                        return this._integrations[A]
                    }, y.getIntegration = function(A) {
                        try {
                            return this._integrations[A.id] || null
                        } catch (j) {
                            return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && D.logger.warn("Cannot retrieve integration ".concat(A.id, " from the current Client")), null
                        }
                    }, y.sendEvent = function(A) {
                        var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        if (this._dsn) {
                            var G = (0, P.createEventEnvelope)(A, this._dsn, this._options._metadata, this._options.tunnel),
                                z = !0,
                                $ = !1,
                                W = void 0;
                            try {
                                for (var R = (j.attachments || [])[Symbol.iterator](), L; !(z = (L = R.next()).done); z = !0) {
                                    var k = L.value;
                                    G = (0, D.addItemToEnvelope)(G, (0, D.createAttachmentEnvelopeItem)(k, this._options.transportOptions && this._options.transportOptions.textEncoder))
                                }
                            } catch (x) {
                                $ = !0, W = x
                            } finally {
                                try {
                                    !z && R.return != null && R.return()
                                } finally {
                                    if ($) throw W
                                }
                            }
                            this._sendEnvelope(G)
                        }
                    }, y.sendSession = function(A) {
                        if (this._dsn) {
                            var j = (0, P.createSessionEnvelope)(A, this._dsn, this._options._metadata, this._options.tunnel);
                            this._sendEnvelope(j)
                        }
                    }, y.recordDroppedEvent = function(A, j, G) {
                        if (this._options.sendClientReports) {
                            var z = "".concat(A, ":").concat(j);
                            (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && D.logger.log('Adding outcome: "'.concat(z, '"')), this._outcomes[z] = this._outcomes[z] + 1 || 1
                        }
                    }, y._updateSessionFromEvent = function(A, j) {
                        var G = !1,
                            z = !1,
                            $ = j.exception && j.exception.values;
                        if ($) {
                            z = !0;
                            var W = !0,
                                R = !1,
                                L = void 0;
                            try {
                                for (var k = $[Symbol.iterator](), x; !(W = (x = k.next()).done); W = !0) {
                                    var U = x.value,
                                        M = U.mechanism;
                                    if (M && M.handled === !1) {
                                        G = !0;
                                        break
                                    }
                                }
                            } catch (J) {
                                R = !0, L = J
                            } finally {
                                try {
                                    !W && k.return != null && k.return()
                                } finally {
                                    if (R) throw L
                                }
                            }
                        }
                        var H = A.status === "ok",
                            N = H && A.errors === 0 || H && G;
                        N && ((0, I.updateSession)(A, i(p({}, G && {
                            status: "crashed"
                        }), {
                            errors: A.errors || Number(z || G)
                        })), this.captureSession(A))
                    }, y._isClientDoneProcessing = function(A) {
                        var j = this;
                        return new D.SyncPromise(function(G) {
                            var z = 0,
                                $ = 1,
                                W = setInterval(function() {
                                    j._numProcessing == 0 ? (clearInterval(W), G(!0)) : (z += $, A && z >= A && (clearInterval(W), G(!1)))
                                }, $)
                        })
                    }, y._isEnabled = function() {
                        return this.getOptions().enabled !== !1 && this._dsn !== void 0
                    }, y._prepareEvent = function(A, j, G) {
                        var z = this,
                            $ = this.getOptions(),
                            W = $.normalizeDepth,
                            R = W === void 0 ? 3 : W,
                            L = $.normalizeMaxBreadth,
                            k = L === void 0 ? 1e3 : L,
                            x = i(p({}, A), {
                                event_id: A.event_id || j.event_id || (0, D.uuid4)(),
                                timestamp: A.timestamp || (0, D.dateTimestampInSeconds)()
                            });
                        this._applyClientOptions(x), this._applyIntegrationsMetadata(x);
                        var U = G;
                        j.captureContext && (U = w.Scope.clone(U).update(j.captureContext));
                        var M = (0, D.resolvedSyncPromise)(x);
                        if (U && U.getAttachments) {
                            var H = e(j.attachments || []).concat(e(U.getAttachments()));
                            H.length && (j.attachments = H), M = U.applyToEvent(x, j)
                        }
                        return M.then(function(N) {
                            return typeof R == "number" && R > 0 ? z._normalizeEvent(N, R, k) : N
                        })
                    }, y._normalizeEvent = function(A, j, G) {
                        if (!A) return null;
                        var z = p({}, A, A.breadcrumbs && {
                            breadcrumbs: A.breadcrumbs.map(function($) {
                                return p({}, $, $.data && {
                                    data: (0, D.normalize)($.data, j, G)
                                })
                            })
                        }, A.user && {
                            user: (0, D.normalize)(A.user, j, G)
                        }, A.contexts && {
                            contexts: (0, D.normalize)(A.contexts, j, G)
                        }, A.extra && {
                            extra: (0, D.normalize)(A.extra, j, G)
                        });
                        return A.contexts && A.contexts.trace && z.contexts && (z.contexts.trace = A.contexts.trace, A.contexts.trace.data && (z.contexts.trace.data = (0, D.normalize)(A.contexts.trace.data, j, G))), A.spans && (z.spans = A.spans.map(function($) {
                            return $.data && ($.data = (0, D.normalize)($.data, j, G)), $
                        })), z
                    }, y._applyClientOptions = function(A) {
                        var j = this.getOptions(),
                            G = j.environment,
                            z = j.release,
                            $ = j.dist,
                            W = j.maxValueLength,
                            R = W === void 0 ? 250 : W;
                        "environment" in A || (A.environment = "environment" in j ? G : "production"), A.release === void 0 && z !== void 0 && (A.release = z), A.dist === void 0 && $ !== void 0 && (A.dist = $), A.message && (A.message = (0, D.truncate)(A.message, R));
                        var L = A.exception && A.exception.values && A.exception.values[0];
                        L && L.value && (L.value = (0, D.truncate)(L.value, R));
                        var k = A.request;
                        k && k.url && (k.url = (0, D.truncate)(k.url, R))
                    }, y._applyIntegrationsMetadata = function(A) {
                        var j = Object.keys(this._integrations);
                        j.length > 0 && (A.sdk = A.sdk || {}, A.sdk.integrations = e(A.sdk.integrations || []).concat(e(j)))
                    }, y._captureEvent = function(A) {
                        var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                            G = arguments.length > 2 ? arguments[2] : void 0;
                        return this._processEvent(A, j, G).then(function(z) {
                            return z.event_id
                        }, function(z) {
                            if (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) {
                                var $ = z;
                                $.logLevel === "log" ? D.logger.log($.message) : D.logger.warn($)
                            }
                        })
                    }, y._processEvent = function(A, j, G) {
                        var z = this,
                            $ = this.getOptions(),
                            W = $.sampleRate;
                        if (!this._isEnabled()) return (0, D.rejectedSyncPromise)(new D.SentryError("SDK not enabled, will not capture event.", "log"));
                        var R = A.type === "transaction",
                            L = R ? "beforeSendTransaction" : "beforeSend",
                            k = $[L];
                        return !R && typeof W == "number" && Math.random() > W ? (this.recordDroppedEvent("sample_rate", "error", A), (0, D.rejectedSyncPromise)(new D.SentryError("Discarding event because it's not included in the random sample (sampling rate = ".concat(W, ")"), "log"))) : this._prepareEvent(A, j, G).then(function(x) {
                            if (x === null) throw z.recordDroppedEvent("event_processor", A.type || "error", A), new D.SentryError("An event processor returned `null`, will not send event.", "log");
                            var U = j.data && j.data.__sentry__ === !0;
                            if (U || !k) return x;
                            var M = k(x, j);
                            return T(M, L)
                        }).then(function(x) {
                            if (x === null) throw z.recordDroppedEvent("before_send", A.type || "error", A), new D.SentryError("`".concat(L, "` returned `null`, will not send event."), "log");
                            var U = G && G.getSession();
                            !R && U && z._updateSessionFromEvent(U, x);
                            var M = x.transaction_info;
                            if (R && M && x.transaction !== A.transaction) {
                                var H = "custom";
                                x.transaction_info = i(p({}, M), {
                                    source: H,
                                    changes: e(M.changes).concat([{
                                        source: H,
                                        timestamp: x.timestamp,
                                        propagations: M.propagations
                                    }])
                                })
                            }
                            return z.sendEvent(x, j), x
                        }).then(null, function(x) {
                            throw g(x, D.SentryError) ? x : (z.captureException(x, {
                                data: {
                                    __sentry__: !0
                                },
                                originalException: x
                            }), new D.SentryError("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ".concat(x)))
                        })
                    }, y._process = function(A) {
                        var j = this;
                        this._numProcessing++, A.then(function(G) {
                            return j._numProcessing--, G
                        }, function(G) {
                            return j._numProcessing--, G
                        })
                    }, y._sendEnvelope = function(A) {
                        this._transport && this._dsn ? this._transport.send(A).then(null, function(j) {
                            (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && D.logger.error("Error while sending event:", j)
                        }) : (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && D.logger.error("Transport disabled")
                    }, y._clearOutcomes = function() {
                        var A = this._outcomes;
                        return this._outcomes = {}, Object.keys(A).map(function(j) {
                            var G = t(j.split(":"), 2),
                                z = G[0],
                                $ = G[1];
                            return {
                                reason: z,
                                category: $,
                                quantity: A[j]
                            }
                        })
                    }, S
                }();

            function T(S, y) {
                var O = "`".concat(y, "` must return `null` or a valid event.");
                if ((0, D.isThenable)(S)) return S.then(function(A) {
                    if (!(0, D.isPlainObject)(A) && A !== null) throw new D.SentryError(O);
                    return A
                }, function(A) {
                    throw new D.SentryError("`".concat(y, "` rejected with ").concat(A))
                });
                if (!(0, D.isPlainObject)(S) && S !== null) throw new D.SentryError(O);
                return S
            }
        },
        310481: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(o, p) {
                for (var a in p) Object.defineProperty(o, a, {
                    enumerable: !0,
                    get: p[a]
                })
            }
            D(b, {
                createEventEnvelope: function() {
                    return s
                },
                createSessionEnvelope: function() {
                    return l
                }
            });
            var f = d(442378);

            function P(o, p) {
                (p == null || p > o.length) && (p = o.length);
                for (var a = 0, i = new Array(p); a < p; a++) i[a] = o[a];
                return i
            }

            function C(o) {
                if (Array.isArray(o)) return P(o)
            }

            function w(o, p, a) {
                return p in o ? Object.defineProperty(o, p, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[p] = a, o
            }

            function I(o) {
                if (typeof Symbol != "undefined" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o)
            }

            function h() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function _(o) {
                for (var p = 1; p < arguments.length; p++) {
                    var a = arguments[p] != null ? arguments[p] : {},
                        i = Object.keys(a);
                    typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(a).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(a, t).enumerable
                    }))), i.forEach(function(t) {
                        w(o, t, a[t])
                    })
                }
                return o
            }

            function m(o) {
                return C(o) || I(o) || E(o) || h()
            }

            function E(o, p) {
                if (!!o) {
                    if (typeof o == "string") return P(o, p);
                    var a = Object.prototype.toString.call(o).slice(8, -1);
                    if (a === "Object" && o.constructor && (a = o.constructor.name), a === "Map" || a === "Set") return Array.from(a);
                    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return P(o, p)
                }
            }

            function u(o) {
                if (!(!o || !o.sdk)) {
                    var p = o.sdk,
                        a = p.name,
                        i = p.version;
                    return {
                        name: a,
                        version: i
                    }
                }
            }

            function g(o, p) {
                return p && (o.sdk = o.sdk || {}, o.sdk.name = o.sdk.name || p.name, o.sdk.version = o.sdk.version || p.version, o.sdk.integrations = m(o.sdk.integrations || []).concat(m(p.integrations || [])), o.sdk.packages = m(o.sdk.packages || []).concat(m(p.packages || []))), o
            }

            function l(o, p, a, i) {
                var t = u(a),
                    e = _({
                        sent_at: new Date().toISOString()
                    }, t && {
                        sdk: t
                    }, !!i && {
                        dsn: (0, f.dsnToString)(p)
                    }),
                    r = "aggregates" in o ? [{
                        type: "sessions"
                    }, o] : [{
                        type: "session"
                    }, o];
                return (0, f.createEnvelope)(e, [r])
            }

            function s(o, p, a, i) {
                var t = u(a),
                    e = o.type || "event";
                g(o, a && a.sdk);
                var r = v(o, t, i, p);
                delete o.sdkProcessingMetadata;
                var n = [{
                    type: e
                }, o];
                return (0, f.createEnvelope)(r, [n])
            }

            function v(o, p, a, i) {
                var t = o.sdkProcessingMetadata && o.sdkProcessingMetadata.dynamicSamplingContext;
                return _({
                    event_id: o.event_id,
                    sent_at: new Date().toISOString()
                }, p && {
                    sdk: p
                }, !!a && {
                    dsn: (0, f.dsnToString)(i)
                }, o.type === "transaction" && t && {
                    trace: (0, f.dropUndefinedKeys)(_({}, t))
                })
            }
        },
        794690: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(a, i) {
                for (var t in i) Object.defineProperty(a, t, {
                    enumerable: !0,
                    get: i[t]
                })
            }
            D(b, {
                addBreadcrumb: function() {
                    return m
                },
                captureEvent: function() {
                    return h
                },
                captureException: function() {
                    return w
                },
                captureMessage: function() {
                    return I
                },
                configureScope: function() {
                    return _
                },
                setContext: function() {
                    return E
                },
                setExtra: function() {
                    return g
                },
                setExtras: function() {
                    return u
                },
                setTag: function() {
                    return s
                },
                setTags: function() {
                    return l
                },
                setUser: function() {
                    return v
                },
                startTransaction: function() {
                    return p
                },
                withScope: function() {
                    return o
                }
            });
            var f = d(603147);

            function P(a, i, t) {
                return i in a ? Object.defineProperty(a, i, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[i] = t, a
            }

            function C(a) {
                for (var i = 1; i < arguments.length; i++) {
                    var t = arguments[i] != null ? arguments[i] : {},
                        e = Object.keys(t);
                    typeof Object.getOwnPropertySymbols == "function" && (e = e.concat(Object.getOwnPropertySymbols(t).filter(function(r) {
                        return Object.getOwnPropertyDescriptor(t, r).enumerable
                    }))), e.forEach(function(r) {
                        P(a, r, t[r])
                    })
                }
                return a
            }

            function w(a, i) {
                return (0, f.getCurrentHub)().captureException(a, {
                    captureContext: i
                })
            }

            function I(a, i) {
                var t = typeof i == "string" ? i : void 0,
                    e = typeof i != "string" ? {
                        captureContext: i
                    } : void 0;
                return (0, f.getCurrentHub)().captureMessage(a, t, e)
            }

            function h(a, i) {
                return (0, f.getCurrentHub)().captureEvent(a, i)
            }

            function _(a) {
                (0, f.getCurrentHub)().configureScope(a)
            }

            function m(a) {
                (0, f.getCurrentHub)().addBreadcrumb(a)
            }

            function E(a, i) {
                (0, f.getCurrentHub)().setContext(a, i)
            }

            function u(a) {
                (0, f.getCurrentHub)().setExtras(a)
            }

            function g(a, i) {
                (0, f.getCurrentHub)().setExtra(a, i)
            }

            function l(a) {
                (0, f.getCurrentHub)().setTags(a)
            }

            function s(a, i) {
                (0, f.getCurrentHub)().setTag(a, i)
            }

            function v(a) {
                (0, f.getCurrentHub)().setUser(a)
            }

            function o(a) {
                (0, f.getCurrentHub)().withScope(a)
            }

            function p(a, i) {
                return (0, f.getCurrentHub)().startTransaction(C({}, a), i)
            }
        },
        603147: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(t, e) {
                for (var r in e) Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }
            D(b, {
                API_VERSION: function() {
                    return E
                },
                Hub: function() {
                    return g
                },
                getCurrentHub: function() {
                    return v
                },
                getHubFromCarrier: function() {
                    return a
                },
                getMainCarrier: function() {
                    return l
                },
                makeMain: function() {
                    return s
                },
                setHubOnCarrier: function() {
                    return i
                }
            });
            var f = d(442378),
                P = d(320761),
                C = d(391455);

            function w(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function I(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e] != null ? arguments[e] : {},
                        n = Object.keys(r);
                    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(c) {
                        return Object.getOwnPropertyDescriptor(r, c).enumerable
                    }))), n.forEach(function(c) {
                        I(t, c, r[c])
                    })
                }
                return t
            }

            function _(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(c) {
                        return Object.getOwnPropertyDescriptor(t, c).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function m(t, e) {
                return e = e != null ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : _(Object(e)).forEach(function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                }), t
            }
            var E = 4,
                u = 100,
                g = function() {
                    "use strict";

                    function t(r) {
                        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new P.Scope,
                            c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : E;
                        w(this, t), this._version = c, t.prototype.__init.call(this), this.getStackTop().scope = n, r && this.bindClient(r)
                    }
                    var e = t.prototype;
                    return e.__init = function() {
                        this._stack = [{}]
                    }, e.isOlderThan = function(n) {
                        return this._version < n
                    }, e.bindClient = function(n) {
                        var c = this.getStackTop();
                        c.client = n, n && n.setupIntegrations && n.setupIntegrations()
                    }, e.pushScope = function() {
                        var n = P.Scope.clone(this.getScope());
                        return this.getStack().push({
                            client: this.getClient(),
                            scope: n
                        }), n
                    }, e.popScope = function() {
                        return this.getStack().length <= 1 ? !1 : !!this.getStack().pop()
                    }, e.withScope = function(n) {
                        var c = this.pushScope();
                        try {
                            n(c)
                        } finally {
                            this.popScope()
                        }
                    }, e.getClient = function() {
                        return this.getStackTop().client
                    }, e.getScope = function() {
                        return this.getStackTop().scope
                    }, e.getStack = function() {
                        return this._stack
                    }, e.getStackTop = function() {
                        return this._stack[this._stack.length - 1]
                    }, e.captureException = function(n, c) {
                        var T = this._lastEventId = c && c.event_id ? c.event_id : (0, f.uuid4)(),
                            S = new Error("Sentry syntheticException");
                        return this._withClient(function(y, O) {
                            y.captureException(n, m(h({
                                originalException: n,
                                syntheticException: S
                            }, c), {
                                event_id: T
                            }), O)
                        }), T
                    }, e.captureMessage = function(n, c, T) {
                        var S = this._lastEventId = T && T.event_id ? T.event_id : (0, f.uuid4)(),
                            y = new Error(n);
                        return this._withClient(function(O, A) {
                            O.captureMessage(n, c, m(h({
                                originalException: n,
                                syntheticException: y
                            }, T), {
                                event_id: S
                            }), A)
                        }), S
                    }, e.captureEvent = function(n, c) {
                        var T = c && c.event_id ? c.event_id : (0, f.uuid4)();
                        return n.type !== "transaction" && (this._lastEventId = T), this._withClient(function(S, y) {
                            S.captureEvent(n, m(h({}, c), {
                                event_id: T
                            }), y)
                        }), T
                    }, e.lastEventId = function() {
                        return this._lastEventId
                    }, e.addBreadcrumb = function(n, c) {
                        var T = this.getStackTop(),
                            S = T.scope,
                            y = T.client;
                        if (!(!S || !y)) {
                            var O = y.getOptions && y.getOptions() || {},
                                A = O.beforeBreadcrumb,
                                j = A === void 0 ? null : A,
                                G = O.maxBreadcrumbs,
                                z = G === void 0 ? u : G;
                            if (!(z <= 0)) {
                                var $ = (0, f.dateTimestampInSeconds)(),
                                    W = h({
                                        timestamp: $
                                    }, n),
                                    R = j ? (0, f.consoleSandbox)(function() {
                                        return j(W, c)
                                    }) : W;
                                R !== null && S.addBreadcrumb(R, z)
                            }
                        }
                    }, e.setUser = function(n) {
                        var c = this.getScope();
                        c && c.setUser(n)
                    }, e.setTags = function(n) {
                        var c = this.getScope();
                        c && c.setTags(n)
                    }, e.setExtras = function(n) {
                        var c = this.getScope();
                        c && c.setExtras(n)
                    }, e.setTag = function(n, c) {
                        var T = this.getScope();
                        T && T.setTag(n, c)
                    }, e.setExtra = function(n, c) {
                        var T = this.getScope();
                        T && T.setExtra(n, c)
                    }, e.setContext = function(n, c) {
                        var T = this.getScope();
                        T && T.setContext(n, c)
                    }, e.configureScope = function(n) {
                        var c = this.getStackTop(),
                            T = c.scope,
                            S = c.client;
                        T && S && n(T)
                    }, e.run = function(n) {
                        var c = s(this);
                        try {
                            n(this)
                        } finally {
                            s(c)
                        }
                    }, e.getIntegration = function(n) {
                        var c = this.getClient();
                        if (!c) return null;
                        try {
                            return c.getIntegration(n)
                        } catch (T) {
                            return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.warn("Cannot retrieve integration ".concat(n.id, " from the current Hub")), null
                        }
                    }, e.startTransaction = function(n, c) {
                        return this._callExtensionMethod("startTransaction", n, c)
                    }, e.traceHeaders = function() {
                        return this._callExtensionMethod("traceHeaders")
                    }, e.captureSession = function() {
                        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                        if (n) return this.endSession();
                        this._sendSessionUpdate()
                    }, e.endSession = function() {
                        var n = this.getStackTop(),
                            c = n && n.scope,
                            T = c && c.getSession();
                        T && (0, C.closeSession)(T), this._sendSessionUpdate(), c && c.setSession()
                    }, e.startSession = function(n) {
                        var c = this.getStackTop(),
                            T = c.scope,
                            S = c.client,
                            y = S && S.getOptions() || {},
                            O = y.release,
                            A = y.environment,
                            j = (f.GLOBAL_OBJ.navigator || {}).userAgent,
                            G = (0, C.makeSession)(h({
                                release: O,
                                environment: A
                            }, T && {
                                user: T.getUser()
                            }, j && {
                                userAgent: j
                            }, n));
                        if (T) {
                            var z = T.getSession && T.getSession();
                            z && z.status === "ok" && (0, C.updateSession)(z, {
                                status: "exited"
                            }), this.endSession(), T.setSession(G)
                        }
                        return G
                    }, e.shouldSendDefaultPii = function() {
                        var n = this.getClient(),
                            c = n && n.getOptions();
                        return Boolean(c && c.sendDefaultPii)
                    }, e._sendSessionUpdate = function() {
                        var n = this.getStackTop(),
                            c = n.scope,
                            T = n.client;
                        if (!!c) {
                            var S = c.getSession();
                            S && T && T.captureSession && T.captureSession(S)
                        }
                    }, e._withClient = function(n) {
                        var c = this.getStackTop(),
                            T = c.scope,
                            S = c.client;
                        S && n(S, T)
                    }, e._callExtensionMethod = function(n) {
                        for (var c = arguments.length, T = new Array(c > 1 ? c - 1 : 0), S = 1; S < c; S++) T[S - 1] = arguments[S];
                        var y = l(),
                            O = y.__SENTRY__;
                        if (O && O.extensions && typeof O.extensions[n] == "function") return O.extensions[n].apply(this, T);
                        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.warn("Extension method ".concat(n, " couldn't be found, doing nothing."))
                    }, t
                }();

            function l() {
                return f.GLOBAL_OBJ.__SENTRY__ = f.GLOBAL_OBJ.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, f.GLOBAL_OBJ
            }

            function s(t) {
                var e = l(),
                    r = a(e);
                return i(e, t), r
            }

            function v() {
                var t = l();
                return (!p(t) || a(t).isOlderThan(E)) && i(t, new g), (0, f.isNodeEnv)() ? o(t) : a(t)
            }

            function o(t) {
                try {
                    var e = l().__SENTRY__,
                        r = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
                    if (!r) return a(t);
                    if (!p(r) || a(r).isOlderThan(E)) {
                        var n = a(t).getStackTop();
                        i(r, new g(n.client, P.Scope.clone(n.scope)))
                    }
                    return a(r)
                } catch (c) {
                    return a(t)
                }
            }

            function p(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
            }

            function a(t) {
                return (0, f.getGlobalSingleton)("hub", function() {
                    return new g
                }, t)
            }

            function i(t, e) {
                if (!t) return !1;
                var r = t.__SENTRY__ = t.__SENTRY__ || {};
                return r.hub = e, !0
            }
        },
        364904: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(a, i) {
                for (var t in i) Object.defineProperty(a, t, {
                    enumerable: !0,
                    get: i[t]
                })
            }
            D(b, {
                addBreadcrumb: function() {
                    return f.addBreadcrumb
                },
                captureEvent: function() {
                    return f.captureEvent
                },
                captureException: function() {
                    return f.captureException
                },
                captureMessage: function() {
                    return f.captureMessage
                },
                configureScope: function() {
                    return f.configureScope
                },
                setContext: function() {
                    return f.setContext
                },
                setExtra: function() {
                    return f.setExtra
                },
                setExtras: function() {
                    return f.setExtras
                },
                setTag: function() {
                    return f.setTag
                },
                setTags: function() {
                    return f.setTags
                },
                setUser: function() {
                    return f.setUser
                },
                startTransaction: function() {
                    return f.startTransaction
                },
                withScope: function() {
                    return f.withScope
                },
                Hub: function() {
                    return P.Hub
                },
                getCurrentHub: function() {
                    return P.getCurrentHub
                },
                getHubFromCarrier: function() {
                    return P.getHubFromCarrier
                },
                getMainCarrier: function() {
                    return P.getMainCarrier
                },
                makeMain: function() {
                    return P.makeMain
                },
                setHubOnCarrier: function() {
                    return P.setHubOnCarrier
                },
                closeSession: function() {
                    return C.closeSession
                },
                makeSession: function() {
                    return C.makeSession
                },
                updateSession: function() {
                    return C.updateSession
                },
                SessionFlusher: function() {
                    return w.SessionFlusher
                },
                Scope: function() {
                    return I.Scope
                },
                addGlobalEventProcessor: function() {
                    return I.addGlobalEventProcessor
                },
                getEnvelopeEndpointWithUrlEncodedAuth: function() {
                    return h.getEnvelopeEndpointWithUrlEncodedAuth
                },
                getReportDialogEndpoint: function() {
                    return h.getReportDialogEndpoint
                },
                BaseClient: function() {
                    return _.BaseClient
                },
                initAndBind: function() {
                    return m.initAndBind
                },
                createTransport: function() {
                    return E.createTransport
                },
                SDK_VERSION: function() {
                    return u.SDK_VERSION
                },
                getIntegrationsToSetup: function() {
                    return g.getIntegrationsToSetup
                },
                Integrations: function() {
                    return l
                },
                FunctionToString: function() {
                    return s.FunctionToString
                },
                InboundFilters: function() {
                    return v.InboundFilters
                }
            });
            var f = d(794690),
                P = d(603147),
                C = d(391455),
                w = d(503988),
                I = d(320761),
                h = d(1441),
                _ = d(559265),
                m = d(966698),
                E = d(295406),
                u = d(467084),
                g = d(432127),
                l = p(d(273915)),
                s = d(20971),
                v = d(81805);

            function o(a) {
                if (typeof WeakMap != "function") return null;
                var i = new WeakMap,
                    t = new WeakMap;
                return (o = function(e) {
                    return e ? t : i
                })(a)
            }

            function p(a, i) {
                if (!i && a && a.__esModule) return a;
                if (a === null || typeof a != "object" && typeof a != "function") return {
                    default: a
                };
                var t = o(i);
                if (t && t.has(a)) return t.get(a);
                var e = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in a)
                    if (n !== "default" && Object.prototype.hasOwnProperty.call(a, n)) {
                        var c = r ? Object.getOwnPropertyDescriptor(a, n) : null;
                        c && (c.get || c.set) ? Object.defineProperty(e, n, c) : e[n] = a[n]
                    }
                return e.default = a, t && t.set(a, e), e
            }
        },
        432127: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(i, t) {
                for (var e in t) Object.defineProperty(i, e, {
                    enumerable: !0,
                    get: t[e]
                })
            }
            D(b, {
                getIntegrationsToSetup: function() {
                    return p
                },
                installedIntegrations: function() {
                    return v
                },
                setupIntegrations: function() {
                    return a
                }
            });
            var f = d(442378),
                P = d(603147),
                C = d(320761);

            function w(i, t) {
                (t == null || t > i.length) && (t = i.length);
                for (var e = 0, r = new Array(t); e < t; e++) r[e] = i[e];
                return r
            }

            function I(i) {
                if (Array.isArray(i)) return i
            }

            function h(i) {
                if (Array.isArray(i)) return w(i)
            }

            function _(i) {
                if (typeof Symbol != "undefined" && i[Symbol.iterator] != null || i["@@iterator"] != null) return Array.from(i)
            }

            function m(i, t) {
                var e = i == null ? null : typeof Symbol != "undefined" && i[Symbol.iterator] || i["@@iterator"];
                if (e != null) {
                    var r = [],
                        n = !0,
                        c = !1,
                        T, S;
                    try {
                        for (e = e.call(i); !(n = (T = e.next()).done) && (r.push(T.value), !(t && r.length === t)); n = !0);
                    } catch (y) {
                        c = !0, S = y
                    } finally {
                        try {
                            !n && e.return != null && e.return()
                        } finally {
                            if (c) throw S
                        }
                    }
                    return r
                }
            }

            function E() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function u() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function g(i, t) {
                return I(i) || m(i, t) || s(i, t) || E()
            }

            function l(i) {
                return h(i) || _(i) || s(i) || u()
            }

            function s(i, t) {
                if (!!i) {
                    if (typeof i == "string") return w(i, t);
                    var e = Object.prototype.toString.call(i).slice(8, -1);
                    if (e === "Object" && i.constructor && (e = i.constructor.name), e === "Map" || e === "Set") return Array.from(e);
                    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return w(i, t)
                }
            }
            var v = [];

            function o(i) {
                var t = {};
                return i.forEach(function(e) {
                    var r = e.name,
                        n = t[r];
                    n && !n.isDefaultInstance && e.isDefaultInstance || (t[r] = e)
                }), Object.values(t)
            }

            function p(i) {
                var t = i.defaultIntegrations || [],
                    e = i.integrations;
                t.forEach(function(y) {
                    y.isDefaultInstance = !0
                });
                var r;
                Array.isArray(e) ? r = l(t).concat(l(e)) : typeof e == "function" ? r = (0, f.arrayify)(e(t)) : r = t;
                var n = o(r),
                    c = n.findIndex(function(y) {
                        return y.name === "Debug"
                    });
                if (c !== -1) {
                    var T = g(n.splice(c, 1), 1),
                        S = T[0];
                    n.push(S)
                }
                return n
            }

            function a(i) {
                var t = {};
                return i.forEach(function(e) {
                    t[e.name] = e, v.indexOf(e.name) === -1 && (e.setupOnce(C.addGlobalEventProcessor, P.getCurrentHub), v.push(e.name), (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.log("Integration installed: ".concat(e.name)))
                }), t
            }
        },
        20971: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "FunctionToString", {
                enumerable: !0,
                get: function() {
                    return C
                }
            });
            var D = d(442378);

            function f(w, I) {
                if (!(w instanceof I)) throw new TypeError("Cannot call a class as a function")
            }
            var P, C = function() {
                "use strict";

                function w() {
                    f(this, w), w.prototype.__init.call(this)
                }
                var I = w.prototype;
                return I.__init = function() {
                    this.name = w.id
                }, I.setupOnce = function() {
                    P = Function.prototype.toString, Function.prototype.toString = function() {
                        for (var _ = arguments.length, m = new Array(_), E = 0; E < _; E++) m[E] = arguments[E];
                        var u = (0, D.getOriginalFunction)(this) || this;
                        return P.apply(u, m)
                    }
                }, w.__initStatic = function() {
                    this.id = "FunctionToString"
                }, w
            }();
            C.__initStatic()
        },
        81805: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(e, r) {
                for (var n in r) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: r[n]
                })
            }
            D(b, {
                InboundFilters: function() {
                    return u
                },
                _mergeOptions: function() {
                    return g
                },
                _shouldDropEvent: function() {
                    return l
                }
            });
            var f = d(442378);

            function P(e, r) {
                (r == null || r > e.length) && (r = e.length);
                for (var n = 0, c = new Array(r); n < r; n++) c[n] = e[n];
                return c
            }

            function C(e) {
                if (Array.isArray(e)) return P(e)
            }

            function w(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e) {
                if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
            }

            function h() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function _(e) {
                return C(e) || I(e) || m(e) || h()
            }

            function m(e, r) {
                if (!!e) {
                    if (typeof e == "string") return P(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(n);
                    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, r)
                }
            }
            var E = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
                u = function() {
                    "use strict";

                    function e() {
                        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        w(this, e), this._options = n, e.prototype.__init.call(this)
                    }
                    var r = e.prototype;
                    return r.__init = function() {
                        this.name = e.id
                    }, r.setupOnce = function(c, T) {
                        var S = function(y) {
                            var O = T();
                            if (O) {
                                var A = O.getIntegration(e);
                                if (A) {
                                    var j = O.getClient(),
                                        G = j ? j.getOptions() : {},
                                        z = g(A._options, G);
                                    return l(y, z) ? null : y
                                }
                            }
                            return y
                        };
                        S.id = this.name, c(S)
                    }, e.__initStatic = function() {
                        this.id = "InboundFilters"
                    }, e
                }();
            u.__initStatic();

            function g() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return {
                    allowUrls: _(e.allowUrls || []).concat(_(r.allowUrls || [])),
                    denyUrls: _(e.denyUrls || []).concat(_(r.denyUrls || [])),
                    ignoreErrors: _(e.ignoreErrors || []).concat(_(r.ignoreErrors || []), _(E)),
                    ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
                }
            }

            function l(e, r) {
                return r.ignoreInternal && a(e) ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.warn("Event dropped due to being internal Sentry Error.\nEvent: ".concat((0, f.getEventDescription)(e))), !0) : s(e, r.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: ".concat((0, f.getEventDescription)(e))), !0) : v(e, r.denyUrls) ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: ".concat((0, f.getEventDescription)(e), ".\nUrl: ").concat(t(e))), !0) : o(e, r.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: ".concat((0, f.getEventDescription)(e), ".\nUrl: ").concat(t(e))), !0)
            }

            function s(e, r) {
                return !r || !r.length ? !1 : p(e).some(function(n) {
                    return (0, f.stringMatchesSomePattern)(n, r)
                })
            }

            function v(e, r) {
                if (!r || !r.length) return !1;
                var n = t(e);
                return n ? (0, f.stringMatchesSomePattern)(n, r) : !1
            }

            function o(e, r) {
                if (!r || !r.length) return !0;
                var n = t(e);
                return n ? (0, f.stringMatchesSomePattern)(n, r) : !0
            }

            function p(e) {
                if (e.message) return [e.message];
                if (e.exception) try {
                    var r = e.exception.values && e.exception.values[0] || {},
                        n = r.type,
                        c = n === void 0 ? "" : n,
                        T = r.value,
                        S = T === void 0 ? "" : T;
                    return ["".concat(S), "".concat(c, ": ").concat(S)]
                } catch (y) {
                    return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.error("Cannot extract message for event ".concat((0, f.getEventDescription)(e))), []
                }
                return []
            }

            function a(e) {
                try {
                    return e.exception.values[0].type === "SentryError"
                } catch (r) {}
                return !1
            }

            function i() {
                for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = e.length - 1; r >= 0; r--) {
                    var n = e[r];
                    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null
                }
                return null
            }

            function t(e) {
                try {
                    var r;
                    try {
                        r = e.exception.values[0].stacktrace.frames
                    } catch (n) {}
                    return r ? i(r) : null
                } catch (n) {
                    return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.error("Cannot extract url for event ".concat((0, f.getEventDescription)(e))), null
                }
            }
        },
        273915: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(C, w) {
                for (var I in w) Object.defineProperty(C, I, {
                    enumerable: !0,
                    get: w[I]
                })
            }
            D(b, {
                FunctionToString: function() {
                    return f.FunctionToString
                },
                InboundFilters: function() {
                    return P.InboundFilters
                }
            });
            var f = d(20971),
                P = d(81805)
        },
        320761: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(t, e) {
                for (var r in e) Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }
            D(b, {
                Scope: function() {
                    return p
                },
                addGlobalEventProcessor: function() {
                    return i
                }
            });
            var f = d(442378),
                P = d(391455);

            function C(t, e) {
                (e == null || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function w(t) {
                if (Array.isArray(t)) return C(t)
            }

            function I(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function h(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function _(t, e) {
                return e != null && typeof Symbol != "undefined" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e
            }

            function m(t) {
                if (typeof Symbol != "undefined" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
            }

            function E() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e] != null ? arguments[e] : {},
                        n = Object.keys(r);
                    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(c) {
                        return Object.getOwnPropertyDescriptor(r, c).enumerable
                    }))), n.forEach(function(c) {
                        h(t, c, r[c])
                    })
                }
                return t
            }

            function g(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(c) {
                        return Object.getOwnPropertyDescriptor(t, c).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function l(t, e) {
                return e = e != null ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : g(Object(e)).forEach(function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                }), t
            }

            function s(t) {
                return w(t) || m(t) || v(t) || E()
            }

            function v(t, e) {
                if (!!t) {
                    if (typeof t == "string") return C(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(r);
                    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return C(t, e)
                }
            }
            var o = 100,
                p = function() {
                    "use strict";

                    function t() {
                        I(this, t), this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
                    }
                    var e = t.prototype;
                    return e.addScopeListener = function(n) {
                        this._scopeListeners.push(n)
                    }, e.addEventProcessor = function(n) {
                        return this._eventProcessors.push(n), this
                    }, e.setUser = function(n) {
                        return this._user = n || {}, this._session && (0, P.updateSession)(this._session, {
                            user: n
                        }), this._notifyScopeListeners(), this
                    }, e.getUser = function() {
                        return this._user
                    }, e.getRequestSession = function() {
                        return this._requestSession
                    }, e.setRequestSession = function(n) {
                        return this._requestSession = n, this
                    }, e.setTags = function(n) {
                        return this._tags = u({}, this._tags, n), this._notifyScopeListeners(), this
                    }, e.setTag = function(n, c) {
                        return this._tags = l(u({}, this._tags), h({}, n, c)), this._notifyScopeListeners(), this
                    }, e.setExtras = function(n) {
                        return this._extra = u({}, this._extra, n), this._notifyScopeListeners(), this
                    }, e.setExtra = function(n, c) {
                        return this._extra = l(u({}, this._extra), h({}, n, c)), this._notifyScopeListeners(), this
                    }, e.setFingerprint = function(n) {
                        return this._fingerprint = n, this._notifyScopeListeners(), this
                    }, e.setLevel = function(n) {
                        return this._level = n, this._notifyScopeListeners(), this
                    }, e.setTransactionName = function(n) {
                        return this._transactionName = n, this._notifyScopeListeners(), this
                    }, e.setContext = function(n, c) {
                        return c === null ? delete this._contexts[n] : this._contexts[n] = c, this._notifyScopeListeners(), this
                    }, e.setSpan = function(n) {
                        return this._span = n, this._notifyScopeListeners(), this
                    }, e.getSpan = function() {
                        return this._span
                    }, e.getTransaction = function() {
                        var n = this.getSpan();
                        return n && n.transaction
                    }, e.setSession = function(n) {
                        return n ? this._session = n : delete this._session, this._notifyScopeListeners(), this
                    }, e.getSession = function() {
                        return this._session
                    }, e.update = function(n) {
                        if (!n) return this;
                        if (typeof n == "function") {
                            var c = n(this);
                            return _(c, t) ? c : this
                        }
                        return _(n, t) ? (this._tags = u({}, this._tags, n._tags), this._extra = u({}, this._extra, n._extra), this._contexts = u({}, this._contexts, n._contexts), n._user && Object.keys(n._user).length && (this._user = n._user), n._level && (this._level = n._level), n._fingerprint && (this._fingerprint = n._fingerprint), n._requestSession && (this._requestSession = n._requestSession)) : (0, f.isPlainObject)(n) && (n = n, this._tags = u({}, this._tags, n.tags), this._extra = u({}, this._extra, n.extra), this._contexts = u({}, this._contexts, n.contexts), n.user && (this._user = n.user), n.level && (this._level = n.level), n.fingerprint && (this._fingerprint = n.fingerprint), n.requestSession && (this._requestSession = n.requestSession)), this
                    }, e.clear = function() {
                        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this
                    }, e.addBreadcrumb = function(n, c) {
                        var T = typeof c == "number" ? c : o;
                        if (T <= 0) return this;
                        var S = u({
                            timestamp: (0, f.dateTimestampInSeconds)()
                        }, n);
                        return this._breadcrumbs = s(this._breadcrumbs).concat([S]).slice(-T), this._notifyScopeListeners(), this
                    }, e.clearBreadcrumbs = function() {
                        return this._breadcrumbs = [], this._notifyScopeListeners(), this
                    }, e.addAttachment = function(n) {
                        return this._attachments.push(n), this
                    }, e.getAttachments = function() {
                        return this._attachments
                    }, e.clearAttachments = function() {
                        return this._attachments = [], this
                    }, e.applyToEvent = function(n) {
                        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        if (this._extra && Object.keys(this._extra).length && (n.extra = u({}, this._extra, n.extra)), this._tags && Object.keys(this._tags).length && (n.tags = u({}, this._tags, n.tags)), this._user && Object.keys(this._user).length && (n.user = u({}, this._user, n.user)), this._contexts && Object.keys(this._contexts).length && (n.contexts = u({}, this._contexts, n.contexts)), this._level && (n.level = this._level), this._transactionName && (n.transaction = this._transactionName), this._span) {
                            n.contexts = u({
                                trace: this._span.getTraceContext()
                            }, n.contexts);
                            var T = this._span.transaction && this._span.transaction.name;
                            T && (n.tags = u({
                                transaction: T
                            }, n.tags))
                        }
                        return this._applyFingerprint(n), n.breadcrumbs = s(n.breadcrumbs || []).concat(s(this._breadcrumbs)), n.breadcrumbs = n.breadcrumbs.length > 0 ? n.breadcrumbs : void 0, n.sdkProcessingMetadata = u({}, n.sdkProcessingMetadata, this._sdkProcessingMetadata), this._notifyEventProcessors(s(a()).concat(s(this._eventProcessors)), n, c)
                    }, e.setSDKProcessingMetadata = function(n) {
                        return this._sdkProcessingMetadata = u({}, this._sdkProcessingMetadata, n), this
                    }, e._notifyEventProcessors = function(n, c, T) {
                        var S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
                            y = this;
                        return new f.SyncPromise(function(O, A) {
                            var j = n[S];
                            if (c === null || typeof j != "function") O(c);
                            else {
                                var G = j(u({}, c), T);
                                (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && j.id && G === null && f.logger.log('Event processor "'.concat(j.id, '" dropped event')), (0, f.isThenable)(G) ? G.then(function(z) {
                                    return y._notifyEventProcessors(n, z, T, S + 1).then(O)
                                }).then(null, A) : y._notifyEventProcessors(n, G, T, S + 1).then(O).then(null, A)
                            }
                        })
                    }, e._notifyScopeListeners = function() {
                        var n = this;
                        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(function(c) {
                            c(n)
                        }), this._notifyingListeners = !1)
                    }, e._applyFingerprint = function(n) {
                        n.fingerprint = n.fingerprint ? (0, f.arrayify)(n.fingerprint) : [], this._fingerprint && (n.fingerprint = n.fingerprint.concat(this._fingerprint)), n.fingerprint && !n.fingerprint.length && delete n.fingerprint
                    }, t.clone = function(n) {
                        var c = new t;
                        return n && (c._breadcrumbs = s(n._breadcrumbs), c._tags = u({}, n._tags), c._extra = u({}, n._extra), c._contexts = u({}, n._contexts), c._user = n._user, c._level = n._level, c._span = n._span, c._session = n._session, c._transactionName = n._transactionName, c._fingerprint = n._fingerprint, c._eventProcessors = s(n._eventProcessors), c._requestSession = n._requestSession, c._attachments = s(n._attachments), c._sdkProcessingMetadata = u({}, n._sdkProcessingMetadata)), c
                    }, t
                }();

            function a() {
                return (0, f.getGlobalSingleton)("globalEventProcessors", function() {
                    return []
                })
            }

            function i(t) {
                a().push(t)
            }
        },
        966698: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "initAndBind", {
                enumerable: !0,
                get: function() {
                    return P
                }
            });
            var D = d(442378),
                f = d(603147);

            function P(C, w) {
                w.debug === !0 && (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__ ? D.logger.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
                var I = (0, f.getCurrentHub)(),
                    h = I.getScope();
                h && h.update(w.initialScope);
                var _ = new C(w);
                I.bindClient(_)
            }
        },
        391455: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(h, _) {
                for (var m in _) Object.defineProperty(h, m, {
                    enumerable: !0,
                    get: _[m]
                })
            }
            D(b, {
                closeSession: function() {
                    return w
                },
                makeSession: function() {
                    return P
                },
                updateSession: function() {
                    return C
                }
            });
            var f = d(442378);

            function P(h) {
                var _ = (0, f.timestampInSeconds)(),
                    m = {
                        sid: (0, f.uuid4)(),
                        init: !0,
                        timestamp: _,
                        started: _,
                        duration: 0,
                        status: "ok",
                        errors: 0,
                        ignoreDuration: !1,
                        toJSON: function() {
                            return I(m)
                        }
                    };
                return h && C(m, h), m
            }

            function C(h) {
                var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (_.user && (!h.ipAddress && _.user.ip_address && (h.ipAddress = _.user.ip_address), !h.did && !_.did && (h.did = _.user.id || _.user.email || _.user.username)), h.timestamp = _.timestamp || (0, f.timestampInSeconds)(), _.ignoreDuration && (h.ignoreDuration = _.ignoreDuration), _.sid && (h.sid = _.sid.length === 32 ? _.sid : (0, f.uuid4)()), _.init !== void 0 && (h.init = _.init), !h.did && _.did && (h.did = "".concat(_.did)), typeof _.started == "number" && (h.started = _.started), h.ignoreDuration) h.duration = void 0;
                else if (typeof _.duration == "number") h.duration = _.duration;
                else {
                    var m = h.timestamp - h.started;
                    h.duration = m >= 0 ? m : 0
                }
                _.release && (h.release = _.release), _.environment && (h.environment = _.environment), !h.ipAddress && _.ipAddress && (h.ipAddress = _.ipAddress), !h.userAgent && _.userAgent && (h.userAgent = _.userAgent), typeof _.errors == "number" && (h.errors = _.errors), _.status && (h.status = _.status)
            }

            function w(h, _) {
                var m = {};
                _ ? m = {
                    status: _
                } : h.status === "ok" && (m = {
                    status: "exited"
                }), C(h, m)
            }

            function I(h) {
                return (0, f.dropUndefinedKeys)({
                    sid: "".concat(h.sid),
                    init: h.init,
                    started: new Date(h.started * 1e3).toISOString(),
                    timestamp: new Date(h.timestamp * 1e3).toISOString(),
                    status: h.status,
                    errors: h.errors,
                    did: typeof h.did == "number" || typeof h.did == "string" ? "".concat(h.did) : void 0,
                    duration: h.duration,
                    attrs: {
                        release: h.release,
                        environment: h.environment,
                        ip_address: h.ipAddress,
                        user_agent: h.userAgent
                    }
                })
            }
        },
        503988: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "SessionFlusher", {
                enumerable: !0,
                get: function() {
                    return C
                }
            });
            var D = d(442378),
                f = d(603147);

            function P(w, I) {
                if (!(w instanceof I)) throw new TypeError("Cannot call a class as a function")
            }
            var C = function() {
                "use strict";

                function w(h, _) {
                    var m = this;
                    P(this, w), w.prototype.__init.call(this), w.prototype.__init2.call(this), w.prototype.__init3.call(this), this._client = h, this._intervalId = setInterval(function() {
                        return m.flush()
                    }, this.flushTimeout * 1e3), this._sessionAttrs = _
                }
                var I = w.prototype;
                return I.__init = function() {
                    this.flushTimeout = 60
                }, I.__init2 = function() {
                    this._pendingAggregates = {}
                }, I.__init3 = function() {
                    this._isEnabled = !0
                }, I.flush = function() {
                    var _ = this.getSessionAggregates();
                    _.aggregates.length !== 0 && (this._pendingAggregates = {}, this._client.sendSession(_))
                }, I.getSessionAggregates = function() {
                    var _ = this,
                        m = Object.keys(this._pendingAggregates).map(function(u) {
                            return _._pendingAggregates[parseInt(u)]
                        }),
                        E = {
                            attrs: this._sessionAttrs,
                            aggregates: m
                        };
                    return (0, D.dropUndefinedKeys)(E)
                }, I.close = function() {
                    clearInterval(this._intervalId), this._isEnabled = !1, this.flush()
                }, I.incrementSessionStatusCount = function() {
                    if (!!this._isEnabled) {
                        var _ = (0, f.getCurrentHub)().getScope(),
                            m = _ && _.getRequestSession();
                        m && m.status && (this._incrementSessionStatusCount(m.status, new Date), _ && _.setRequestSession(void 0))
                    }
                }, I._incrementSessionStatusCount = function(_, m) {
                    var E = new Date(m).setSeconds(0, 0);
                    this._pendingAggregates[E] = this._pendingAggregates[E] || {};
                    var u = this._pendingAggregates[E];
                    switch (u.started || (u.started = new Date(E).toISOString()), _) {
                        case "errored":
                            return u.errored = (u.errored || 0) + 1, u.errored;
                        case "ok":
                            return u.exited = (u.exited || 0) + 1, u.exited;
                        default:
                            return u.crashed = (u.crashed || 0) + 1, u.crashed
                    }
                }, w
            }()
        },
        295406: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(h, _) {
                for (var m in _) Object.defineProperty(h, m, {
                    enumerable: !0,
                    get: _[m]
                })
            }
            D(b, {
                DEFAULT_TRANSPORT_BUFFER_SIZE: function() {
                    return C
                },
                createTransport: function() {
                    return w
                }
            });
            var f = d(442378);

            function P(h, _) {
                return _ != null && typeof Symbol != "undefined" && _[Symbol.hasInstance] ? !!_[Symbol.hasInstance](h) : h instanceof _
            }
            var C = 30;

            function w(h, _) {
                var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : (0, f.makePromiseBuffer)(h.bufferSize || C),
                    E = function(s) {
                        var v = [];
                        if ((0, f.forEachEnvelopeItem)(s, function(i, t) {
                                var e = (0, f.envelopeItemTypeToDataCategory)(t);
                                if ((0, f.isRateLimited)(u, e)) {
                                    var r = I(i, t);
                                    h.recordDroppedEvent("ratelimit_backoff", e, r)
                                } else v.push(i)
                            }), v.length === 0) return (0, f.resolvedSyncPromise)();
                        var o = (0, f.createEnvelope)(s[0], v),
                            p = function(i) {
                                (0, f.forEachEnvelopeItem)(o, function(t, e) {
                                    var r = I(t, e);
                                    h.recordDroppedEvent(i, (0, f.envelopeItemTypeToDataCategory)(e), r)
                                })
                            },
                            a = function() {
                                return _({
                                    body: (0, f.serializeEnvelope)(o, h.textEncoder)
                                }).then(function(i) {
                                    i.statusCode !== void 0 && (i.statusCode < 200 || i.statusCode >= 300) && (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.warn("Sentry responded with status code ".concat(i.statusCode, " to sent event.")), u = (0, f.updateRateLimits)(u, i)
                                }, function(i) {
                                    (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.error("Failed while sending event:", i), p("network_error")
                                })
                            };
                        return m.add(a).then(function(i) {
                            return i
                        }, function(i) {
                            if (P(i, f.SentryError)) return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.error("Skipped sending event because buffer is full."), p("queue_overflow"), (0, f.resolvedSyncPromise)();
                            throw i
                        })
                    },
                    u = {},
                    g = function(l) {
                        return m.drain(l)
                    };
                return {
                    send: E,
                    flush: g
                }
            }

            function I(h, _) {
                if (!(_ !== "event" && _ !== "transaction")) return Array.isArray(h) ? h[1] : void 0
            }
        },
        467084: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "SDK_VERSION", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            var d = "7.24.2"
        },
        70859: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function d(C, w) {
                for (var I in w) Object.defineProperty(C, I, {
                    enumerable: !0,
                    get: w[I]
                })
            }
            d(b, {
                REACT_MOUNT_OP: function() {
                    return P
                },
                REACT_RENDER_OP: function() {
                    return D
                },
                REACT_UPDATE_OP: function() {
                    return f
                }
            });
            var D = "ui.react.render",
                f = "ui.react.update",
                P = "ui.react.mount"
        },
        876012: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(W, R) {
                for (var L in R) Object.defineProperty(W, L, {
                    enumerable: !0,
                    get: R[L]
                })
            }
            D(b, {
                ErrorBoundary: function() {
                    return z
                },
                UNKNOWN_COMPONENT: function() {
                    return j
                },
                isAtLeastReact17: function() {
                    return A
                },
                withErrorBoundary: function() {
                    return $
                }
            });
            var f = d(268601),
                P = d(442378),
                C = l(d(192628)),
                w = v(d(508669));

            function I(W, R) {
                (R == null || R > W.length) && (R = W.length);
                for (var L = 0, k = new Array(R); L < R; L++) k[L] = W[L];
                return k
            }

            function h(W) {
                if (Array.isArray(W)) return I(W)
            }

            function _(W) {
                if (W === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return W
            }

            function m(W, R) {
                if (!(W instanceof R)) throw new TypeError("Cannot call a class as a function")
            }

            function E(W, R, L) {
                return R in W ? Object.defineProperty(W, R, {
                    value: L,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : W[R] = L, W
            }

            function u(W) {
                return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(L) {
                    return L.__proto__ || Object.getPrototypeOf(L)
                }, u(W)
            }

            function g(W, R) {
                if (typeof R != "function" && R !== null) throw new TypeError("Super expression must either be null or a function");
                W.prototype = Object.create(R && R.prototype, {
                    constructor: {
                        value: W,
                        writable: !0,
                        configurable: !0
                    }
                }), R && r(W, R)
            }

            function l(W) {
                return W && W.__esModule ? W : {
                    default: W
                }
            }

            function s(W) {
                if (typeof WeakMap != "function") return null;
                var R = new WeakMap,
                    L = new WeakMap;
                return (s = function(k) {
                    return k ? L : R
                })(W)
            }

            function v(W, R) {
                if (!R && W && W.__esModule) return W;
                if (W === null || typeof W != "object" && typeof W != "function") return {
                    default: W
                };
                var L = s(R);
                if (L && L.has(W)) return L.get(W);
                var k = {},
                    x = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var U in W)
                    if (U !== "default" && Object.prototype.hasOwnProperty.call(W, U)) {
                        var M = x ? Object.getOwnPropertyDescriptor(W, U) : null;
                        M && (M.get || M.set) ? Object.defineProperty(k, U, M) : k[U] = W[U]
                    }
                return k.default = W, L && L.set(W, k), k
            }

            function o(W) {
                if (typeof Symbol != "undefined" && W[Symbol.iterator] != null || W["@@iterator"] != null) return Array.from(W)
            }

            function p() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function a(W) {
                for (var R = 1; R < arguments.length; R++) {
                    var L = arguments[R] != null ? arguments[R] : {},
                        k = Object.keys(L);
                    typeof Object.getOwnPropertySymbols == "function" && (k = k.concat(Object.getOwnPropertySymbols(L).filter(function(x) {
                        return Object.getOwnPropertyDescriptor(L, x).enumerable
                    }))), k.forEach(function(x) {
                        E(W, x, L[x])
                    })
                }
                return W
            }

            function i(W, R) {
                var L = Object.keys(W);
                if (Object.getOwnPropertySymbols) {
                    var k = Object.getOwnPropertySymbols(W);
                    R && (k = k.filter(function(x) {
                        return Object.getOwnPropertyDescriptor(W, x).enumerable
                    })), L.push.apply(L, k)
                }
                return L
            }

            function t(W, R) {
                return R = R != null ? R : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(W, Object.getOwnPropertyDescriptors(R)) : i(Object(R)).forEach(function(L) {
                    Object.defineProperty(W, L, Object.getOwnPropertyDescriptor(R, L))
                }), W
            }

            function e(W, R) {
                return R && (c(R) === "object" || typeof R == "function") ? R : _(W)
            }

            function r(W, R) {
                return r = Object.setPrototypeOf || function(k, x) {
                    return k.__proto__ = x, k
                }, r(W, R)
            }

            function n(W) {
                return h(W) || o(W) || T(W) || p()
            }
            var c = function(W) {
                return W && typeof Symbol != "undefined" && W.constructor === Symbol ? "symbol" : typeof W
            };

            function T(W, R) {
                if (!!W) {
                    if (typeof W == "string") return I(W, R);
                    var L = Object.prototype.toString.call(W).slice(8, -1);
                    if (L === "Object" && W.constructor && (L = W.constructor.name), L === "Map" || L === "Set") return Array.from(L);
                    if (L === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L)) return I(W, R)
                }
            }

            function S() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (W) {
                    return !1
                }
            }

            function y(W) {
                var R = S();
                return function() {
                    var k = u(W),
                        x;
                    if (R) {
                        var U = u(this).constructor;
                        x = Reflect.construct(k, arguments, U)
                    } else x = k.apply(this, arguments);
                    return e(this, x)
                }
            }
            var O = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/errorboundary.tsx";

            function A(W) {
                var R = W.match(/^([^.]+)/);
                return R !== null && parseInt(R[0]) >= 17
            }
            var j = "unknown",
                G = {
                    componentStack: null,
                    error: null,
                    eventId: null
                },
                z = function(W) {
                    "use strict";
                    g(L, W);
                    var R = y(L);

                    function L() {
                        for (var x = arguments.length, U = new Array(x), M = 0; M < x; M++) U[M] = arguments[M];
                        m(this, L);
                        var H;
                        return H = R.call.apply(R, [this].concat(n(U))), L.prototype.__init.call(_(H)), L.prototype.__init2.call(_(H)), H
                    }
                    var k = L.prototype;
                    return k.__init = function() {
                        this.state = G
                    }, k.componentDidCatch = function(U, M) {
                        var H = M.componentStack,
                            N = this,
                            J = this.props,
                            Q = J.beforeCapture,
                            te = J.onError,
                            ee = J.showDialog,
                            K = J.dialogOptions;
                        (0, f.withScope)(function(q) {
                            if (A(w.version) && (0, P.isError)(U)) {
                                var ne = new Error(U.message);
                                ne.name = "React ErrorBoundary ".concat(ne.name), ne.stack = H, U.cause = ne
                            }
                            Q && Q(q, U, H);
                            var ie = (0, f.captureException)(U, {
                                contexts: {
                                    react: {
                                        componentStack: H
                                    }
                                }
                            });
                            te && te(U, H, ie), ee && (0, f.showReportDialog)(t(a({}, K), {
                                eventId: ie
                            })), N.setState({
                                error: U,
                                componentStack: H,
                                eventId: ie
                            })
                        })
                    }, k.componentDidMount = function() {
                        var U = this.props.onMount;
                        U && U()
                    }, k.componentWillUnmount = function() {
                        var U = this.state,
                            M = U.error,
                            H = U.componentStack,
                            N = U.eventId,
                            J = this.props.onUnmount;
                        J && J(M, H, N)
                    }, k.__init2 = function() {
                        var U = this;
                        this.resetErrorBoundary = function() {
                            var M = U.props.onReset,
                                H = U.state,
                                N = H.error,
                                J = H.componentStack,
                                Q = H.eventId;
                            M && M(N, J, Q), U.setState(G)
                        }
                    }, k.render = function() {
                        var U = this.props,
                            M = U.fallback,
                            H = U.children,
                            N = this.state,
                            J = N.error,
                            Q = N.componentStack,
                            te = N.eventId;
                        if (J) {
                            var ee = void 0;
                            return typeof M == "function" ? ee = M({
                                error: J,
                                componentStack: Q,
                                resetError: this.resetErrorBoundary,
                                eventId: te
                            }) : ee = M, w.isValidElement(ee) ? ee : (M && (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.warn("fallback did not produce a valid ReactElement"), null)
                        }
                        return typeof H == "function" ? H() : H
                    }, L
                }(w.Component);

            function $(W, R) {
                var L = this,
                    k = W.displayName || W.name || j,
                    x = function(U) {
                        return w.createElement(z, t(a({}, R), {
                            __self: L,
                            __source: {
                                fileName: O,
                                lineNumber: 173
                            }
                        }), w.createElement(W, t(a({}, U), {
                            __self: L,
                            __source: {
                                fileName: O,
                                lineNumber: 174
                            }
                        })))
                    };
                return x.displayName = "errorBoundary(".concat(k, ")"), (0, C.default)(x, W), x
            }
        },
        532940: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(E, u) {
                for (var g in u) Object.defineProperty(E, g, {
                    enumerable: !0,
                    get: u[g]
                })
            }
            D(b, {
                init: function() {
                    return f.init
                },
                Profiler: function() {
                    return P.Profiler
                },
                useProfiler: function() {
                    return P.useProfiler
                },
                withProfiler: function() {
                    return P.withProfiler
                },
                ErrorBoundary: function() {
                    return C.ErrorBoundary
                },
                withErrorBoundary: function() {
                    return C.withErrorBoundary
                },
                createReduxEnhancer: function() {
                    return w.createReduxEnhancer
                },
                reactRouterV3Instrumentation: function() {
                    return I.reactRouterV3Instrumentation
                },
                reactRouterV4Instrumentation: function() {
                    return h.reactRouterV4Instrumentation
                },
                reactRouterV5Instrumentation: function() {
                    return h.reactRouterV5Instrumentation
                },
                withSentryRouting: function() {
                    return h.withSentryRouting
                },
                reactRouterV6Instrumentation: function() {
                    return _.reactRouterV6Instrumentation
                },
                withSentryReactRouterV6Routing: function() {
                    return _.withSentryReactRouterV6Routing
                },
                wrapCreateBrowserRouter: function() {
                    return _.wrapCreateBrowserRouter
                },
                wrapUseRoutes: function() {
                    return _.wrapUseRoutes
                }
            }), m(d(268601), b);
            var f = d(638506),
                P = d(716117),
                C = d(876012),
                w = d(778140),
                I = d(194006),
                h = d(196161),
                _ = d(191947);

            function m(E, u) {
                return Object.keys(E).forEach(function(g) {
                    g !== "default" && !Object.prototype.hasOwnProperty.call(u, g) && Object.defineProperty(u, g, {
                        enumerable: !0,
                        get: function() {
                            return E[g]
                        }
                    })
                }), E
            }
        },
        716117: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(R, L) {
                for (var k in L) Object.defineProperty(R, k, {
                    enumerable: !0,
                    get: L[k]
                })
            }
            D(b, {
                Profiler: function() {
                    return G
                },
                UNKNOWN_COMPONENT: function() {
                    return j
                },
                getActiveTransaction: function() {
                    return W
                },
                useProfiler: function() {
                    return $
                },
                withProfiler: function() {
                    return z
                }
            });
            var f = d(268601),
                P = d(442378),
                C = s(d(192628)),
                w = o(d(508669)),
                I = d(70859);

            function h(R, L) {
                (L == null || L > R.length) && (L = R.length);
                for (var k = 0, x = new Array(L); k < L; k++) x[k] = R[k];
                return x
            }

            function _(R) {
                if (Array.isArray(R)) return R
            }

            function m(R) {
                if (R === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return R
            }

            function E(R, L) {
                if (!(R instanceof L)) throw new TypeError("Cannot call a class as a function")
            }

            function u(R, L, k) {
                return L in R ? Object.defineProperty(R, L, {
                    value: k,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : R[L] = k, R
            }

            function g(R) {
                return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(k) {
                    return k.__proto__ || Object.getPrototypeOf(k)
                }, g(R)
            }

            function l(R, L) {
                if (typeof L != "function" && L !== null) throw new TypeError("Super expression must either be null or a function");
                R.prototype = Object.create(L && L.prototype, {
                    constructor: {
                        value: R,
                        writable: !0,
                        configurable: !0
                    }
                }), L && n(R, L)
            }

            function s(R) {
                return R && R.__esModule ? R : {
                    default: R
                }
            }

            function v(R) {
                if (typeof WeakMap != "function") return null;
                var L = new WeakMap,
                    k = new WeakMap;
                return (v = function(x) {
                    return x ? k : L
                })(R)
            }

            function o(R, L) {
                if (!L && R && R.__esModule) return R;
                if (R === null || typeof R != "object" && typeof R != "function") return {
                    default: R
                };
                var k = v(L);
                if (k && k.has(R)) return k.get(R);
                var x = {},
                    U = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var M in R)
                    if (M !== "default" && Object.prototype.hasOwnProperty.call(R, M)) {
                        var H = U ? Object.getOwnPropertyDescriptor(R, M) : null;
                        H && (H.get || H.set) ? Object.defineProperty(x, M, H) : x[M] = R[M]
                    }
                return x.default = R, k && k.set(R, x), x
            }

            function p(R, L) {
                var k = R == null ? null : typeof Symbol != "undefined" && R[Symbol.iterator] || R["@@iterator"];
                if (k != null) {
                    var x = [],
                        U = !0,
                        M = !1,
                        H, N;
                    try {
                        for (k = k.call(R); !(U = (H = k.next()).done) && (x.push(H.value), !(L && x.length === L)); U = !0);
                    } catch (J) {
                        M = !0, N = J
                    } finally {
                        try {
                            !U && k.return != null && k.return()
                        } finally {
                            if (M) throw N
                        }
                    }
                    return x
                }
            }

            function a() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function i(R) {
                for (var L = 1; L < arguments.length; L++) {
                    var k = arguments[L] != null ? arguments[L] : {},
                        x = Object.keys(k);
                    typeof Object.getOwnPropertySymbols == "function" && (x = x.concat(Object.getOwnPropertySymbols(k).filter(function(U) {
                        return Object.getOwnPropertyDescriptor(k, U).enumerable
                    }))), x.forEach(function(U) {
                        u(R, U, k[U])
                    })
                }
                return R
            }

            function t(R, L) {
                var k = Object.keys(R);
                if (Object.getOwnPropertySymbols) {
                    var x = Object.getOwnPropertySymbols(R);
                    L && (x = x.filter(function(U) {
                        return Object.getOwnPropertyDescriptor(R, U).enumerable
                    })), k.push.apply(k, x)
                }
                return k
            }

            function e(R, L) {
                return L = L != null ? L : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(L)) : t(Object(L)).forEach(function(k) {
                    Object.defineProperty(R, k, Object.getOwnPropertyDescriptor(L, k))
                }), R
            }

            function r(R, L) {
                return L && (T(L) === "object" || typeof L == "function") ? L : m(R)
            }

            function n(R, L) {
                return n = Object.setPrototypeOf || function(x, U) {
                    return x.__proto__ = U, x
                }, n(R, L)
            }

            function c(R, L) {
                return _(R) || p(R, L) || S(R, L) || a()
            }
            var T = function(R) {
                return R && typeof Symbol != "undefined" && R.constructor === Symbol ? "symbol" : typeof R
            };

            function S(R, L) {
                if (!!R) {
                    if (typeof R == "string") return h(R, L);
                    var k = Object.prototype.toString.call(R).slice(8, -1);
                    if (k === "Object" && R.constructor && (k = R.constructor.name), k === "Map" || k === "Set") return Array.from(k);
                    if (k === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)) return h(R, L)
                }
            }

            function y() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (R) {
                    return !1
                }
            }

            function O(R) {
                var L = y();
                return function() {
                    var x = g(R),
                        U;
                    if (L) {
                        var M = g(this).constructor;
                        U = Reflect.construct(x, arguments, M)
                    } else U = x.apply(this, arguments);
                    return r(this, U)
                }
            }
            var A = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/profiler.tsx",
                j = "unknown",
                G = function(R) {
                    "use strict";
                    l(k, R);
                    var L = O(k);

                    function k(U) {
                        E(this, k);
                        var M;
                        M = L.call(this, U), k.prototype.__init.call(m(M)), k.prototype.__init2.call(m(M));
                        var H = M.props,
                            N = H.name,
                            J = H.disabled,
                            Q = J === void 0 ? !1 : J;
                        if (Q) return r(M);
                        var te = W();
                        return te && (M._mountSpan = te.startChild({
                            description: "<".concat(N, ">"),
                            op: I.REACT_MOUNT_OP
                        })), M
                    }
                    var x = k.prototype;
                    return x.__init = function() {
                        this._mountSpan = void 0
                    }, x.__init2 = function() {
                        this._updateSpan = void 0
                    }, x.componentDidMount = function() {
                        this._mountSpan && this._mountSpan.finish()
                    }, x.shouldComponentUpdate = function(M) {
                        var H = M.updateProps,
                            N = M.includeUpdates,
                            J = N === void 0 ? !0 : N,
                            Q = this;
                        if (J && this._mountSpan && H !== this.props.updateProps) {
                            var te = Object.keys(H).filter(function(K) {
                                return H[K] !== Q.props.updateProps[K]
                            });
                            if (te.length > 0) {
                                var ee = (0, P.timestampWithMs)();
                                this._updateSpan = this._mountSpan.startChild({
                                    data: {
                                        changedProps: te
                                    },
                                    description: "<".concat(this.props.name, ">"),
                                    op: I.REACT_UPDATE_OP,
                                    startTimestamp: ee
                                })
                            }
                        }
                        return !0
                    }, x.componentDidUpdate = function() {
                        this._updateSpan && (this._updateSpan.finish(), this._updateSpan = void 0)
                    }, x.componentWillUnmount = function() {
                        var M = this.props,
                            H = M.name,
                            N = M.includeRender,
                            J = N === void 0 ? !0 : N;
                        this._mountSpan && J && this._mountSpan.startChild({
                            description: "<".concat(H, ">"),
                            endTimestamp: (0, P.timestampWithMs)(),
                            op: I.REACT_RENDER_OP,
                            startTimestamp: this._mountSpan.endTimestamp
                        })
                    }, x.render = function() {
                        return this.props.children
                    }, k.__initStatic = function() {
                        this.defaultProps = {
                            disabled: !1,
                            includeRender: !0,
                            includeUpdates: !0
                        }
                    }, k
                }(w.Component);
            G.__initStatic();

            function z(R, L) {
                var k = this,
                    x = L && L.name || R.displayName || R.name || j,
                    U = function(M) {
                        return w.createElement(G, e(i({}, L), {
                            name: x,
                            updateProps: M,
                            __self: k,
                            __source: {
                                fileName: A,
                                lineNumber: 144
                            }
                        }), w.createElement(R, e(i({}, M), {
                            __self: k,
                            __source: {
                                fileName: A,
                                lineNumber: 145
                            }
                        })))
                    };
                return U.displayName = "profiler(".concat(x, ")"), (0, C.default)(U, R), U
            }

            function $(R) {
                var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                        disabled: !1,
                        hasRenderSpan: !0
                    },
                    k = c(w.useState(function() {
                        if (!(L && L.disabled)) {
                            var U = W();
                            if (U) return U.startChild({
                                description: "<".concat(R, ">"),
                                op: I.REACT_MOUNT_OP
                            })
                        }
                    }), 1),
                    x = k[0];
                w.useEffect(function() {
                    return x && x.finish(),
                        function() {
                            x && L.hasRenderSpan && x.startChild({
                                description: "<".concat(R, ">"),
                                endTimestamp: (0, P.timestampWithMs)(),
                                op: I.REACT_RENDER_OP,
                                startTimestamp: x.endTimestamp
                            })
                        }
                }, [])
            }

            function W() {
                var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, f.getCurrentHub)();
                if (R) {
                    var L = R.getScope();
                    if (L) return L.getTransaction()
                }
            }
        },
        196161: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(S, y) {
                for (var O in y) Object.defineProperty(S, O, {
                    enumerable: !0,
                    get: y[O]
                })
            }
            D(b, {
                reactRouterV4Instrumentation: function() {
                    return t
                },
                reactRouterV5Instrumentation: function() {
                    return e
                },
                withSentryRouting: function() {
                    return T
                }
            });
            var f = d(268601),
                P = _(d(192628)),
                C = E(d(508669));

            function w(S, y) {
                (y == null || y > S.length) && (y = S.length);
                for (var O = 0, A = new Array(y); O < y; O++) A[O] = S[O];
                return A
            }

            function I(S) {
                if (Array.isArray(S)) return S
            }

            function h(S, y, O) {
                return y in S ? Object.defineProperty(S, y, {
                    value: O,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : S[y] = O, S
            }

            function _(S) {
                return S && S.__esModule ? S : {
                    default: S
                }
            }

            function m(S) {
                if (typeof WeakMap != "function") return null;
                var y = new WeakMap,
                    O = new WeakMap;
                return (m = function(A) {
                    return A ? O : y
                })(S)
            }

            function E(S, y) {
                if (!y && S && S.__esModule) return S;
                if (S === null || typeof S != "object" && typeof S != "function") return {
                    default: S
                };
                var O = m(y);
                if (O && O.has(S)) return O.get(S);
                var A = {},
                    j = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var G in S)
                    if (G !== "default" && Object.prototype.hasOwnProperty.call(S, G)) {
                        var z = j ? Object.getOwnPropertyDescriptor(S, G) : null;
                        z && (z.get || z.set) ? Object.defineProperty(A, G, z) : A[G] = S[G]
                    }
                return A.default = S, O && O.set(S, A), A
            }

            function u(S, y) {
                var O = S == null ? null : typeof Symbol != "undefined" && S[Symbol.iterator] || S["@@iterator"];
                if (O != null) {
                    var A = [],
                        j = !0,
                        G = !1,
                        z, $;
                    try {
                        for (O = O.call(S); !(j = (z = O.next()).done) && (A.push(z.value), !(y && A.length === y)); j = !0);
                    } catch (W) {
                        G = !0, $ = W
                    } finally {
                        try {
                            !j && O.return != null && O.return()
                        } finally {
                            if (G) throw $
                        }
                    }
                    return A
                }
            }

            function g() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function l(S) {
                for (var y = 1; y < arguments.length; y++) {
                    var O = arguments[y] != null ? arguments[y] : {},
                        A = Object.keys(O);
                    typeof Object.getOwnPropertySymbols == "function" && (A = A.concat(Object.getOwnPropertySymbols(O).filter(function(j) {
                        return Object.getOwnPropertyDescriptor(O, j).enumerable
                    }))), A.forEach(function(j) {
                        h(S, j, O[j])
                    })
                }
                return S
            }

            function s(S, y) {
                var O = Object.keys(S);
                if (Object.getOwnPropertySymbols) {
                    var A = Object.getOwnPropertySymbols(S);
                    y && (A = A.filter(function(j) {
                        return Object.getOwnPropertyDescriptor(S, j).enumerable
                    })), O.push.apply(O, A)
                }
                return O
            }

            function v(S, y) {
                return y = y != null ? y : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(y)) : s(Object(y)).forEach(function(O) {
                    Object.defineProperty(S, O, Object.getOwnPropertyDescriptor(y, O))
                }), S
            }

            function o(S, y) {
                return I(S) || u(S, y) || p(S, y) || g()
            }

            function p(S, y) {
                if (!!S) {
                    if (typeof S == "string") return w(S, y);
                    var O = Object.prototype.toString.call(S).slice(8, -1);
                    if (O === "Object" && S.constructor && (O = S.constructor.name), O === "Map" || O === "Set") return Array.from(O);
                    if (O === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)) return w(S, y)
                }
            }
            var a = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/reactrouter.tsx",
                i;

            function t(S, y, O) {
                return r(S, "react-router-v4", y, O)
            }

            function e(S, y, O) {
                return r(S, "react-router-v5", y, O)
            }

            function r(S, y) {
                var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
                    A = arguments.length > 3 ? arguments[3] : void 0,
                    j = function() {
                        if (S && S.location) return S.location.pathname;
                        if (f.WINDOW && f.WINDOW.location) return f.WINDOW.location.pathname
                    },
                    G = function(W) {
                        if (O.length === 0 || !A) return [W, "url"];
                        for (var R = n(O, W, A), L = 0; L < R.length; L++)
                            if (R[L].match.isExact) return [R[L].match.path, "route"];
                        return [W, "url"]
                    },
                    z = {
                        "routing.instrumentation": y
                    };
                return function($) {
                    var W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                        R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
                        L = j();
                    if (W && L) {
                        var k = o(G(L), 2),
                            x = k[0],
                            U = k[1];
                        i = $({
                            name: x,
                            op: "pageload",
                            tags: z,
                            metadata: {
                                source: U
                            }
                        })
                    }
                    R && S.listen && S.listen(function(M, H) {
                        if (H && (H === "PUSH" || H === "POP")) {
                            i && i.finish();
                            var N = o(G(M.pathname), 2),
                                J = N[0],
                                Q = N[1];
                            i = $({
                                name: J,
                                op: "navigation",
                                tags: z,
                                metadata: {
                                    source: Q
                                }
                            })
                        }
                    })
                }
            }

            function n(S, y, O) {
                var A = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
                return S.some(function(j) {
                    var G = j.path ? O(y, j) : A.length ? A[A.length - 1].match : c(y);
                    return G && (A.push({
                        route: j,
                        match: G
                    }), j.routes && n(j.routes, y, O, A)), !!G
                }), A
            }

            function c(S) {
                return {
                    path: "/",
                    url: "/",
                    params: {},
                    isExact: S === "/"
                }
            }

            function T(S) {
                var y = this,
                    O = S.displayName || S.name,
                    A = function(j) {
                        return i && j && j.computedMatch && j.computedMatch.isExact && i.setName(j.computedMatch.path, "route"), C.createElement(S, v(l({}, j), {
                            __self: y,
                            __source: {
                                fileName: a,
                                lineNumber: 174
                            }
                        }))
                    };
                return A.displayName = "sentryRoute(".concat(O, ")"), (0, P.default)(A, S), A
            }
        },
        194006: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "reactRouterV3Instrumentation", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var D = d(268601);

            function f(w, I, h) {
                return function(_) {
                    var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                        E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
                        u, g;
                    m && D.WINDOW && D.WINDOW.location && P(I, D.WINDOW.location, h, function(l) {
                        var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "url";
                        g = l, u = _({
                            name: g,
                            op: "pageload",
                            tags: {
                                "routing.instrumentation": "react-router-v3"
                            },
                            metadata: {
                                source: s
                            }
                        })
                    }), E && w.listen && w.listen(function(l) {
                        if (l.action === "PUSH" || l.action === "POP") {
                            u && u.finish();
                            var s = {
                                "routing.instrumentation": "react-router-v3"
                            };
                            g && (s.from = g), P(I, l, h, function(v) {
                                var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "url";
                                g = v, u = _({
                                    name: g,
                                    op: "navigation",
                                    tags: s,
                                    metadata: {
                                        source: o
                                    }
                                })
                            })
                        }
                    })
                }
            }

            function P(w, I, h, _) {
                var m = I.pathname;
                h({
                    location: I,
                    routes: w
                }, function(E, u, g) {
                    if (E || !g) return _(m);
                    var l = C(g.routes || []);
                    return l.length === 0 || l === "/*" ? _(m) : (m = l, _(m, "route"))
                })
            }

            function C(w) {
                if (!Array.isArray(w) || w.length === 0) return "";
                for (var I = w.filter(function(E) {
                        return !!E.path
                    }), h = -1, _ = I.length - 1; _ >= 0; _--) {
                    var m = I[_];
                    if (m.path && m.path.startsWith("/")) {
                        h = _;
                        break
                    }
                }
                return I.slice(h).filter(function(E) {
                    var u = E.path;
                    return !!u
                }).map(function(E) {
                    var u = E.path;
                    return u
                }).join("")
            }
        },
        191947: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(x, U) {
                for (var M in U) Object.defineProperty(x, M, {
                    enumerable: !0,
                    get: U[M]
                })
            }
            D(b, {
                reactRouterV6Instrumentation: function() {
                    return G
                },
                withSentryReactRouterV6Routing: function() {
                    return R
                },
                wrapCreateBrowserRouter: function() {
                    return k
                },
                wrapUseRoutes: function() {
                    return L
                }
            });
            var f = d(268601),
                P = d(442378),
                C = E(d(192628)),
                w = E(d(508669));

            function I(x, U) {
                (U == null || U > x.length) && (U = x.length);
                for (var M = 0, H = new Array(U); M < U; M++) H[M] = x[M];
                return H
            }

            function h(x) {
                if (Array.isArray(x)) return x
            }

            function _(x) {
                if (Array.isArray(x)) return I(x)
            }

            function m(x, U, M) {
                return U in x ? Object.defineProperty(x, U, {
                    value: M,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : x[U] = M, x
            }

            function E(x) {
                return x && x.__esModule ? x : {
                    default: x
                }
            }

            function u(x) {
                if (typeof Symbol != "undefined" && x[Symbol.iterator] != null || x["@@iterator"] != null) return Array.from(x)
            }

            function g(x, U) {
                var M = x == null ? null : typeof Symbol != "undefined" && x[Symbol.iterator] || x["@@iterator"];
                if (M != null) {
                    var H = [],
                        N = !0,
                        J = !1,
                        Q, te;
                    try {
                        for (M = M.call(x); !(N = (Q = M.next()).done) && (H.push(Q.value), !(U && H.length === U)); N = !0);
                    } catch (ee) {
                        J = !0, te = ee
                    } finally {
                        try {
                            !N && M.return != null && M.return()
                        } finally {
                            if (J) throw te
                        }
                    }
                    return H
                }
            }

            function l() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function s() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function v(x) {
                for (var U = 1; U < arguments.length; U++) {
                    var M = arguments[U] != null ? arguments[U] : {},
                        H = Object.keys(M);
                    typeof Object.getOwnPropertySymbols == "function" && (H = H.concat(Object.getOwnPropertySymbols(M).filter(function(N) {
                        return Object.getOwnPropertyDescriptor(M, N).enumerable
                    }))), H.forEach(function(N) {
                        m(x, N, M[N])
                    })
                }
                return x
            }

            function o(x, U) {
                var M = Object.keys(x);
                if (Object.getOwnPropertySymbols) {
                    var H = Object.getOwnPropertySymbols(x);
                    U && (H = H.filter(function(N) {
                        return Object.getOwnPropertyDescriptor(x, N).enumerable
                    })), M.push.apply(M, H)
                }
                return M
            }

            function p(x, U) {
                return U = U != null ? U : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(U)) : o(Object(U)).forEach(function(M) {
                    Object.defineProperty(x, M, Object.getOwnPropertyDescriptor(U, M))
                }), x
            }

            function a(x, U) {
                return h(x) || g(x, U) || t(x, U) || l()
            }

            function i(x) {
                return _(x) || u(x) || t(x) || s()
            }

            function t(x, U) {
                if (!!x) {
                    if (typeof x == "string") return I(x, U);
                    var M = Object.prototype.toString.call(x).slice(8, -1);
                    if (M === "Object" && x.constructor && (M = x.constructor.name), M === "Map" || M === "Set") return Array.from(M);
                    if (M === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)) return I(x, U)
                }
            }
            var e = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/reactrouterv6.tsx",
                r, n, c, T, S, y, O, A, j = {
                    "routing.instrumentation": "react-router-v6"
                };

            function G(x, U, M, H, N) {
                return function(J) {
                    var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                        te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
                        ee = f.WINDOW && f.WINDOW.location && f.WINDOW.location.pathname;
                    Q && ee && (r = J({
                        name: ee,
                        op: "pageload",
                        tags: j,
                        metadata: {
                            source: "url"
                        }
                    })), n = x, c = U, T = M, y = N, S = H, O = J, A = te
                }
            }

            function z(x, U, M) {
                if (!x || x.length === 0) return [U.pathname, "url"];
                var H = "";
                if (M)
                    for (var N = 0; N < M.length; N++) {
                        var J = M[N],
                            Q = J.route;
                        if (Q) {
                            if (Q.index) return [J.pathname, "route"];
                            var te = Q.path;
                            if (te) {
                                var ee = te[0] === "/" || H[H.length - 1] === "/" ? te : "/".concat(te);
                                if (H += ee, J.pathname === U.pathname) return (0, P.getNumberOfUrlSegments)(H) !== (0, P.getNumberOfUrlSegments)(J.pathname) && H.slice(-2) !== "/*" ? [ee, "route"] : [H, "route"]
                            }
                        }
                    }
                return [U.pathname, "url"]
            }

            function $(x, U, M) {
                var H = Array.isArray(M) ? M : y(U, x);
                if (r && H) {
                    var N;
                    (N = r).setName.apply(N, i(z(U, x, H)))
                }
            }

            function W(x, U, M, H, N) {
                if (H) {
                    r && r.finish();
                    return
                }
                var J = Array.isArray(N) ? N : y(U, x);
                if (A && (M === "PUSH" || M === "POP") && J) {
                    r && r.finish();
                    var Q = a(z(U, x, J), 2),
                        te = Q[0],
                        ee = Q[1];
                    r = O({
                        name: te,
                        op: "navigation",
                        tags: j,
                        metadata: {
                            source: ee
                        }
                    })
                }
            }

            function R(x) {
                var U = this;
                if (!n || !c || !T || !S || !y || !O) return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.warn("reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.\n      useEffect: ".concat(n, ". useLocation: ").concat(c, ". useNavigationType: ").concat(T, ".\n      createRoutesFromChildren: ").concat(S, ". matchRoutes: ").concat(y, ". customStartTransaction: ").concat(O, ".")), x;
                var M = !1,
                    H, N = function(J) {
                        var Q = c(),
                            te = T();
                        return n(function() {
                            H = S(J.children), M = !0, $(Q, H)
                        }, [J.children]), n(function() {
                            W(Q, H, te, M)
                        }, [J.children, Q, te, M]), M = !1, w.default.createElement(x, p(v({}, J), {
                            __self: U,
                            __source: {
                                fileName: e,
                                lineNumber: 207
                            }
                        }))
                    };
                return (0, C.default)(N, x), N
            }

            function L(x) {
                var U = this;
                if (!n || !c || !T || !y || !O) return (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.warn("reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters."), x;
                var M = !1;
                return function(H, N) {
                    var J = function(Q) {
                        var te = x(H, N),
                            ee = typeof N == "string" ? {
                                pathname: N
                            } : N,
                            K = ee || c(),
                            q = T();
                        return n(function() {
                            M = !0, $(K, H)
                        }, [Q]), n(function() {
                            W(K, H, q, M)
                        }, [Q, K, q, M]), M = !1, te
                    };
                    return w.default.createElement(J, {
                        __self: U,
                        __source: {
                            fileName: e,
                            lineNumber: 253
                        }
                    })
                }
            }

            function k(x) {
                return function(U, M) {
                    var H = x(U, M);
                    return H.state.historyAction === "POP" && r && $(H.state.location, U), H.subscribe(function(N) {
                        var J = N.location;
                        A && (N.historyAction === "PUSH" || N.historyAction === "POP") && r && W(J, U, N.historyAction, !1)
                    }), H
                }
            }
        },
        778140: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "createReduxEnhancer", {
                enumerable: !0,
                get: function() {
                    return h
                }
            });
            var D = d(268601);

            function f(_, m, E) {
                return m in _ ? Object.defineProperty(_, m, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : _[m] = E, _
            }

            function P(_) {
                for (var m = 1; m < arguments.length; m++) {
                    var E = arguments[m] != null ? arguments[m] : {},
                        u = Object.keys(E);
                    typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(E).filter(function(g) {
                        return Object.getOwnPropertyDescriptor(E, g).enumerable
                    }))), u.forEach(function(g) {
                        f(_, g, E[g])
                    })
                }
                return _
            }
            var C = "redux.action",
                w = "info",
                I = {
                    actionTransformer: function(_) {
                        return _
                    },
                    stateTransformer: function(_) {
                        return _ || null
                    }
                };

            function h(_) {
                var m = P({}, I, _);
                return function(E) {
                    return function(u, g) {
                        var l = function(s, v) {
                            var o = u(s, v);
                            return (0, D.configureScope)(function(p) {
                                var a = m.actionTransformer(v);
                                typeof a != "undefined" && a !== null && p.addBreadcrumb({
                                    category: C,
                                    data: a,
                                    type: w
                                });
                                var i = m.stateTransformer(o);
                                typeof i != "undefined" && i !== null ? p.setContext("state", {
                                    state: {
                                        type: "redux",
                                        value: i
                                    }
                                }) : p.setContext("state", null);
                                var t = m.configureScopeWithState;
                                typeof t == "function" && t(p, o)
                            }), o
                        };
                        return E(l, g)
                    }
                }
            }
        },
        638506: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "init", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var D = d(268601);

            function f(P) {
                P._metadata = P._metadata || {}, P._metadata.sdk = P._metadata.sdk || {
                    name: "sentry.javascript.react",
                    packages: [{
                        name: "npm:@sentry/react",
                        version: D.SDK_VERSION
                    }],
                    version: D.SDK_VERSION
                }, (0, D.init)(P)
            }
        },
        754936: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(t, e) {
                for (var r in e) Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }
            D(b, {
                BAGGAGE_HEADER_NAME: function() {
                    return g
                },
                MAX_BAGGAGE_STRING_LENGTH: function() {
                    return v
                },
                SENTRY_BAGGAGE_KEY_PREFIX: function() {
                    return l
                },
                SENTRY_BAGGAGE_KEY_PREFIX_REGEX: function() {
                    return s
                },
                baggageHeaderToDynamicSamplingContext: function() {
                    return o
                },
                dynamicSamplingContextToSentryBaggageHeader: function() {
                    return p
                }
            });
            var f = d(310837),
                P = d(563975);

            function C(t, e) {
                (e == null || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function w(t) {
                if (Array.isArray(t)) return t
            }

            function I(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function h(t, e) {
                var r = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
                if (r != null) {
                    var n = [],
                        c = !0,
                        T = !1,
                        S, y;
                    try {
                        for (r = r.call(t); !(c = (S = r.next()).done) && (n.push(S.value), !(e && n.length === e)); c = !0);
                    } catch (O) {
                        T = !0, y = O
                    } finally {
                        try {
                            !c && r.return != null && r.return()
                        } finally {
                            if (T) throw y
                        }
                    }
                    return n
                }
            }

            function _() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e] != null ? arguments[e] : {},
                        n = Object.keys(r);
                    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(c) {
                        return Object.getOwnPropertyDescriptor(r, c).enumerable
                    }))), n.forEach(function(c) {
                        I(t, c, r[c])
                    })
                }
                return t
            }

            function E(t, e) {
                return w(t) || h(t, e) || u(t, e) || _()
            }

            function u(t, e) {
                if (!!t) {
                    if (typeof t == "string") return C(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(r);
                    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return C(t, e)
                }
            }
            var g = "baggage",
                l = "sentry-",
                s = /^sentry-/,
                v = 8192;

            function o(t) {
                if (!(!(0, f.isString)(t) && !Array.isArray(t))) {
                    var e = {};
                    if (Array.isArray(t)) e = t.reduce(function(n, c) {
                        var T = a(c);
                        return m({}, n, T)
                    }, {});
                    else {
                        if (!t) return;
                        e = a(t)
                    }
                    var r = Object.entries(e).reduce(function(n, c) {
                        var T = E(c, 2),
                            S = T[0],
                            y = T[1];
                        if (S.match(s)) {
                            var O = S.slice(l.length);
                            n[O] = y
                        }
                        return n
                    }, {});
                    if (Object.keys(r).length > 0) return r
                }
            }

            function p(t) {
                var e = Object.entries(t).reduce(function(r, n) {
                    var c = E(n, 2),
                        T = c[0],
                        S = c[1];
                    return S && (r["".concat(l).concat(T)] = S), r
                }, {});
                return i(e)
            }

            function a(t) {
                return t.split(",").map(function(e) {
                    return e.split("=").map(function(r) {
                        return decodeURIComponent(r.trim())
                    })
                }).reduce(function(e, r) {
                    var n = E(r, 2),
                        c = n[0],
                        T = n[1];
                    return e[c] = T, e
                }, {})
            }

            function i(t) {
                if (Object.keys(t).length !== 0) return Object.entries(t).reduce(function(e, r, n) {
                    var c = E(r, 2),
                        T = c[0],
                        S = c[1],
                        y = "".concat(encodeURIComponent(T), "=").concat(encodeURIComponent(S)),
                        O = n === 0 ? y : "".concat(e, ",").concat(y);
                    return O.length > v ? ((typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && P.logger.warn("Not adding key: ".concat(T, " with val: ").concat(S, " to baggage header due to exceeding baggage size limits.")), e) : O
                }, "")
            }
        },
        812967: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(E, u) {
                for (var g in u) Object.defineProperty(E, g, {
                    enumerable: !0,
                    get: u[g]
                })
            }
            D(b, {
                getDomElement: function() {
                    return m
                },
                getLocationHref: function() {
                    return _
                },
                htmlTreeAsString: function() {
                    return I
                }
            });
            var f = d(310837),
                P = d(462463),
                C = (0, P.getGlobalObject)(),
                w = 80;

            function I(E) {
                var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                try {
                    for (var g = E, l = 5, s = [], v = 0, o = 0, p = " > ", a = p.length, i, t = Array.isArray(u) ? u : u.keyAttrs, e = !Array.isArray(u) && u.maxStringLength || w; g && v++ < l && (i = h(g, t), !(i === "html" || v > 1 && o + s.length * a + i.length >= e));) s.push(i), o += i.length, g = g.parentNode;
                    return s.reverse().join(p)
                } catch (r) {
                    return "<unknown>"
                }
            }

            function h(E, u) {
                var g = E,
                    l = [],
                    s, v, o, p, a;
                if (!g || !g.tagName) return "";
                l.push(g.tagName.toLowerCase());
                var i = u && u.length ? u.filter(function(e) {
                    return g.getAttribute(e)
                }).map(function(e) {
                    return [e, g.getAttribute(e)]
                }) : null;
                if (i && i.length) i.forEach(function(e) {
                    l.push("[".concat(e[0], '="').concat(e[1], '"]'))
                });
                else if (g.id && l.push("#".concat(g.id)), s = g.className, s && (0, f.isString)(s))
                    for (v = s.split(/\s+/), a = 0; a < v.length; a++) l.push(".".concat(v[a]));
                var t = ["type", "name", "title", "alt"];
                for (a = 0; a < t.length; a++) o = t[a], p = g.getAttribute(o), p && l.push("[".concat(o, '="').concat(p, '"]'));
                return l.join("")
            }

            function _() {
                try {
                    return C.document.location.href
                } catch (E) {
                    return ""
                }
            }

            function m(E) {
                return C.document && C.document.querySelector ? C.document.querySelector(E) : null
            }
        },
        334541: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "_asyncNullishCoalesce", {
                enumerable: !0,
                get: function() {
                    return w
                }
            });
            var D = d(850585);

            function f(h, _, m, E, u, g, l) {
                try {
                    var s = h[g](l),
                        v = s.value
                } catch (o) {
                    m(o);
                    return
                }
                s.done ? _(v) : Promise.resolve(v).then(E, u)
            }

            function P(h) {
                return function() {
                    var _ = this,
                        m = arguments;
                    return new Promise(function(E, u) {
                        var g = h.apply(_, m);

                        function l(v) {
                            f(g, E, u, l, s, "next", v)
                        }

                        function s(v) {
                            f(g, E, u, l, s, "throw", v)
                        }
                        l(void 0)
                    })
                }
            }
            var C = function(h, _) {
                var m, E, u, g, l = {
                    label: 0,
                    sent: function() {
                        if (u[0] & 1) throw u[1];
                        return u[1]
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
                    return this
                }), g;

                function s(o) {
                    return function(p) {
                        return v([o, p])
                    }
                }

                function v(o) {
                    if (m) throw new TypeError("Generator is already executing.");
                    for (; l;) try {
                        if (m = 1, E && (u = o[0] & 2 ? E.return : o[0] ? E.throw || ((u = E.return) && u.call(E), 0) : E.next) && !(u = u.call(E, o[1])).done) return u;
                        switch (E = 0, u && (o = [o[0] & 2, u.value]), o[0]) {
                            case 0:
                            case 1:
                                u = o;
                                break;
                            case 4:
                                return l.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                l.label++, E = o[1], o = [0];
                                continue;
                            case 7:
                                o = l.ops.pop(), l.trys.pop();
                                continue;
                            default:
                                if (u = l.trys, !(u = u.length > 0 && u[u.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                    l = 0;
                                    continue
                                }
                                if (o[0] === 3 && (!u || o[1] > u[0] && o[1] < u[3])) {
                                    l.label = o[1];
                                    break
                                }
                                if (o[0] === 6 && l.label < u[1]) {
                                    l.label = u[1], u = o;
                                    break
                                }
                                if (u && l.label < u[2]) {
                                    l.label = u[2], l.ops.push(o);
                                    break
                                }
                                u[2] && l.ops.pop(), l.trys.pop();
                                continue
                        }
                        o = _.call(h, l)
                    } catch (p) {
                        o = [6, p], E = 0
                    } finally {
                        m = u = 0
                    }
                    if (o[0] & 5) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }
            };

            function w(h, _) {
                return I.apply(this, arguments)
            }

            function I() {
                return I = P(function(h, _) {
                    return C(this, function(m) {
                        return [2, (0, D._nullishCoalesce)(h, _)]
                    })
                }), I.apply(this, arguments)
            }
        },
        658822: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "_asyncOptionalChain", {
                enumerable: !0,
                get: function() {
                    return m
                }
            });

            function d(u, g) {
                (g == null || g > u.length) && (g = u.length);
                for (var l = 0, s = new Array(g); l < g; l++) s[l] = u[l];
                return s
            }

            function D(u) {
                if (Array.isArray(u)) return d(u)
            }

            function f(u, g, l, s, v, o, p) {
                try {
                    var a = u[o](p),
                        i = a.value
                } catch (t) {
                    l(t);
                    return
                }
                a.done ? g(i) : Promise.resolve(i).then(s, v)
            }

            function P(u) {
                return function() {
                    var g = this,
                        l = arguments;
                    return new Promise(function(s, v) {
                        var o = u.apply(g, l);

                        function p(i) {
                            f(o, s, v, p, a, "next", i)
                        }

                        function a(i) {
                            f(o, s, v, p, a, "throw", i)
                        }
                        p(void 0)
                    })
                }
            }

            function C(u) {
                if (typeof Symbol != "undefined" && u[Symbol.iterator] != null || u["@@iterator"] != null) return Array.from(u)
            }

            function w() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function I(u) {
                return D(u) || C(u) || h(u) || w()
            }

            function h(u, g) {
                if (!!u) {
                    if (typeof u == "string") return d(u, g);
                    var l = Object.prototype.toString.call(u).slice(8, -1);
                    if (l === "Object" && u.constructor && (l = u.constructor.name), l === "Map" || l === "Set") return Array.from(l);
                    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return d(u, g)
                }
            }
            var _ = function(u, g) {
                var l, s, v, o, p = {
                    label: 0,
                    sent: function() {
                        if (v[0] & 1) throw v[1];
                        return v[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(t) {
                    return function(e) {
                        return i([t, e])
                    }
                }

                function i(t) {
                    if (l) throw new TypeError("Generator is already executing.");
                    for (; p;) try {
                        if (l = 1, s && (v = t[0] & 2 ? s.return : t[0] ? s.throw || ((v = s.return) && v.call(s), 0) : s.next) && !(v = v.call(s, t[1])).done) return v;
                        switch (s = 0, v && (t = [t[0] & 2, v.value]), t[0]) {
                            case 0:
                            case 1:
                                v = t;
                                break;
                            case 4:
                                return p.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                p.label++, s = t[1], t = [0];
                                continue;
                            case 7:
                                t = p.ops.pop(), p.trys.pop();
                                continue;
                            default:
                                if (v = p.trys, !(v = v.length > 0 && v[v.length - 1]) && (t[0] === 6 || t[0] === 2)) {
                                    p = 0;
                                    continue
                                }
                                if (t[0] === 3 && (!v || t[1] > v[0] && t[1] < v[3])) {
                                    p.label = t[1];
                                    break
                                }
                                if (t[0] === 6 && p.label < v[1]) {
                                    p.label = v[1], v = t;
                                    break
                                }
                                if (v && p.label < v[2]) {
                                    p.label = v[2], p.ops.push(t);
                                    break
                                }
                                v[2] && p.ops.pop(), p.trys.pop();
                                continue
                        }
                        t = g.call(u, p)
                    } catch (e) {
                        t = [6, e], s = 0
                    } finally {
                        l = v = 0
                    }
                    if (t[0] & 5) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }
            };

            function m(u) {
                return E.apply(this, arguments)
            }

            function E() {
                return E = P(function(u) {
                    var g, l, s, v, o, p;
                    return _(this, function(a) {
                        switch (a.label) {
                            case 0:
                                g = void 0, l = u[0], s = 1, a.label = 1;
                            case 1:
                                return s < u.length ? (v = u[s], o = u[s + 1], s += 2, (v === "optionalAccess" || v === "optionalCall") && l == null ? [2] : v === "access" || v === "optionalAccess" ? (g = l, [4, o(l)]) : [3, 3]) : [3, 6];
                            case 2:
                                return l = a.sent(), [3, 5];
                            case 3:
                                return v === "call" || v === "optionalCall" ? [4, o(function() {
                                    for (var i = arguments.length, t = new Array(i), e = 0; e < i; e++) t[e] = arguments[e];
                                    return (p = l).call.apply(p, [g].concat(I(t)))
                                })] : [3, 5];
                            case 4:
                                l = a.sent(), g = void 0, a.label = 5;
                            case 5:
                                return [3, 1];
                            case 6:
                                return [2, l]
                        }
                    })
                }), E.apply(this, arguments)
            }
        },
        873961: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "_asyncOptionalChainDelete", {
                enumerable: !0,
                get: function() {
                    return w
                }
            });
            var D = d(658822);

            function f(h, _, m, E, u, g, l) {
                try {
                    var s = h[g](l),
                        v = s.value
                } catch (o) {
                    m(o);
                    return
                }
                s.done ? _(v) : Promise.resolve(v).then(E, u)
            }

            function P(h) {
                return function() {
                    var _ = this,
                        m = arguments;
                    return new Promise(function(E, u) {
                        var g = h.apply(_, m);

                        function l(v) {
                            f(g, E, u, l, s, "next", v)
                        }

                        function s(v) {
                            f(g, E, u, l, s, "throw", v)
                        }
                        l(void 0)
                    })
                }
            }
            var C = function(h, _) {
                var m, E, u, g, l = {
                    label: 0,
                    sent: function() {
                        if (u[0] & 1) throw u[1];
                        return u[1]
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
                    return this
                }), g;

                function s(o) {
                    return function(p) {
                        return v([o, p])
                    }
                }

                function v(o) {
                    if (m) throw new TypeError("Generator is already executing.");
                    for (; l;) try {
                        if (m = 1, E && (u = o[0] & 2 ? E.return : o[0] ? E.throw || ((u = E.return) && u.call(E), 0) : E.next) && !(u = u.call(E, o[1])).done) return u;
                        switch (E = 0, u && (o = [o[0] & 2, u.value]), o[0]) {
                            case 0:
                            case 1:
                                u = o;
                                break;
                            case 4:
                                return l.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                l.label++, E = o[1], o = [0];
                                continue;
                            case 7:
                                o = l.ops.pop(), l.trys.pop();
                                continue;
                            default:
                                if (u = l.trys, !(u = u.length > 0 && u[u.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                    l = 0;
                                    continue
                                }
                                if (o[0] === 3 && (!u || o[1] > u[0] && o[1] < u[3])) {
                                    l.label = o[1];
                                    break
                                }
                                if (o[0] === 6 && l.label < u[1]) {
                                    l.label = u[1], u = o;
                                    break
                                }
                                if (u && l.label < u[2]) {
                                    l.label = u[2], l.ops.push(o);
                                    break
                                }
                                u[2] && l.ops.pop(), l.trys.pop();
                                continue
                        }
                        o = _.call(h, l)
                    } catch (p) {
                        o = [6, p], E = 0
                    } finally {
                        m = u = 0
                    }
                    if (o[0] & 5) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }
            };

            function w(h) {
                return I.apply(this, arguments)
            }

            function I() {
                return I = P(function(h) {
                    var _;
                    return C(this, function(m) {
                        switch (m.label) {
                            case 0:
                                return [4, (0, D._asyncOptionalChain)(h)];
                            case 1:
                                return _ = m.sent(), [2, _ == null ? !0 : _]
                        }
                    })
                }), I.apply(this, arguments)
            }
        },
        657775: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "_createNamedExportFrom", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });

            function d(D, f, P) {
                b[f] = D[P]
            }
        },
        787704: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "_createStarExport", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });

            function d(D) {
                Object.keys(D).filter(function(f) {
                    return f !== "default" && f !== "__esModule" && !(f in b)
                }).forEach(function(f) {
                    return b[f] = D[f]
                })
            }
        },
        342567: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "_interopDefault", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });

            function d(D) {
                return D.__esModule ? D.default : D
            }
        },
        231989: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "_interopNamespace", {
                enumerable: !0,
                get: function() {
                    return C
                }
            });

            function d(w, I, h) {
                return I in w ? Object.defineProperty(w, I, {
                    value: h,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : w[I] = h, w
            }

            function D(w) {
                for (var I = 1; I < arguments.length; I++) {
                    var h = arguments[I] != null ? arguments[I] : {},
                        _ = Object.keys(h);
                    typeof Object.getOwnPropertySymbols == "function" && (_ = _.concat(Object.getOwnPropertySymbols(h).filter(function(m) {
                        return Object.getOwnPropertyDescriptor(h, m).enumerable
                    }))), _.forEach(function(m) {
                        d(w, m, h[m])
                    })
                }
                return w
            }

            function f(w, I) {
                var h = Object.keys(w);
                if (Object.getOwnPropertySymbols) {
                    var _ = Object.getOwnPropertySymbols(w);
                    I && (_ = _.filter(function(m) {
                        return Object.getOwnPropertyDescriptor(w, m).enumerable
                    })), h.push.apply(h, _)
                }
                return h
            }

            function P(w, I) {
                return I = I != null ? I : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(I)) : f(Object(I)).forEach(function(h) {
                    Object.defineProperty(w, h, Object.getOwnPropertyDescriptor(I, h))
                }), w
            }

            function C(w) {
                return w.__esModule ? w : P(D({}, w), {
                    default: w
                })
            }
        },
        572834: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "_interopNamespaceDefaultOnly", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });

            function d(D) {
                return {
                    __proto__: null,
                    default: D
                }
            }
        },
        452518: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "_interopRequireDefault", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });

            function d(D) {
                return D.__esModule ? D : {
                    default: D
                }
            }
        },
        199978: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "_interopRequireWildcard", {
                enumerable: !0,
                get: function() {
                    return C
                }
            });

            function d(w, I, h) {
                return I in w ? Object.defineProperty(w, I, {
                    value: h,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : w[I] = h, w
            }

            function D(w) {
                for (var I = 1; I < arguments.length; I++) {
                    var h = arguments[I] != null ? arguments[I] : {},
                        _ = Object.keys(h);
                    typeof Object.getOwnPropertySymbols == "function" && (_ = _.concat(Object.getOwnPropertySymbols(h).filter(function(m) {
                        return Object.getOwnPropertyDescriptor(h, m).enumerable
                    }))), _.forEach(function(m) {
                        d(w, m, h[m])
                    })
                }
                return w
            }

            function f(w, I) {
                var h = Object.keys(w);
                if (Object.getOwnPropertySymbols) {
                    var _ = Object.getOwnPropertySymbols(w);
                    I && (_ = _.filter(function(m) {
                        return Object.getOwnPropertyDescriptor(w, m).enumerable
                    })), h.push.apply(h, _)
                }
                return h
            }

            function P(w, I) {
                return I = I != null ? I : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(I)) : f(Object(I)).forEach(function(h) {
                    Object.defineProperty(w, h, Object.getOwnPropertyDescriptor(I, h))
                }), w
            }

            function C(w) {
                return w.__esModule ? w : P(D({}, w), {
                    default: w
                })
            }
        },
        850585: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "_nullishCoalesce", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });

            function d(D, f) {
                return D != null ? D : f()
            }
        },
        109340: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "_optionalChain", {
                enumerable: !0,
                get: function() {
                    return I
                }
            });

            function d(h, _) {
                (_ == null || _ > h.length) && (_ = h.length);
                for (var m = 0, E = new Array(_); m < _; m++) E[m] = h[m];
                return E
            }

            function D(h) {
                if (Array.isArray(h)) return d(h)
            }

            function f(h) {
                if (typeof Symbol != "undefined" && h[Symbol.iterator] != null || h["@@iterator"] != null) return Array.from(h)
            }

            function P() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function C(h) {
                return D(h) || f(h) || w(h) || P()
            }

            function w(h, _) {
                if (!!h) {
                    if (typeof h == "string") return d(h, _);
                    var m = Object.prototype.toString.call(h).slice(8, -1);
                    if (m === "Object" && h.constructor && (m = h.constructor.name), m === "Map" || m === "Set") return Array.from(m);
                    if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) return d(h, _)
                }
            }

            function I(h) {
                for (var _ = void 0, m = h[0], E = 1; E < h.length;) {
                    var u = h[E],
                        g = h[E + 1];
                    if (E += 2, (u === "optionalAccess" || u === "optionalCall") && m == null) return;
                    if (u === "access" || u === "optionalAccess") _ = m, m = g(m);
                    else if (u === "call" || u === "optionalCall") {
                        var l;
                        m = g(function() {
                            for (var s = arguments.length, v = new Array(s), o = 0; o < s; o++) v[o] = arguments[o];
                            return (l = m).call.apply(l, [_].concat(C(v)))
                        }), _ = void 0
                    }
                }
                return m
            }
        },
        564310: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "_optionalChainDelete", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var D = d(109340);

            function f(P) {
                var C = (0, D._optionalChain)(P);
                return C == null ? !0 : C
            }
        },
        335090: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(v, o) {
                for (var p in o) Object.defineProperty(v, p, {
                    enumerable: !0,
                    get: o[p]
                })
            }
            D(b, {
                _asyncNullishCoalesce: function() {
                    return f._asyncNullishCoalesce
                },
                _asyncOptionalChain: function() {
                    return P._asyncOptionalChain
                },
                _asyncOptionalChainDelete: function() {
                    return C._asyncOptionalChainDelete
                },
                _createNamedExportFrom: function() {
                    return w._createNamedExportFrom
                },
                _createStarExport: function() {
                    return I._createStarExport
                },
                _interopDefault: function() {
                    return h._interopDefault
                },
                _interopNamespace: function() {
                    return _._interopNamespace
                },
                _interopNamespaceDefaultOnly: function() {
                    return m._interopNamespaceDefaultOnly
                },
                _interopRequireDefault: function() {
                    return E._interopRequireDefault
                },
                _interopRequireWildcard: function() {
                    return u._interopRequireWildcard
                },
                _nullishCoalesce: function() {
                    return g._nullishCoalesce
                },
                _optionalChain: function() {
                    return l._optionalChain
                },
                _optionalChainDelete: function() {
                    return s._optionalChainDelete
                }
            });
            var f = d(334541),
                P = d(658822),
                C = d(873961),
                w = d(657775),
                I = d(787704),
                h = d(342567),
                _ = d(231989),
                m = d(572834),
                E = d(452518),
                u = d(199978),
                g = d(850585),
                l = d(109340),
                s = d(564310)
        },
        415293: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "createClientReportEnvelope", {
                enumerable: !0,
                get: function() {
                    return P
                }
            });
            var D = d(926245),
                f = d(153838);

            function P(C, w, I) {
                var h = [{
                    type: "client_report"
                }, {
                    timestamp: I || (0, f.dateTimestampInSeconds)(),
                    discarded_events: C
                }];
                return (0, D.createEnvelope)(w ? {
                    dsn: w
                } : {}, [h])
            }
        },
        909255: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(o, p) {
                for (var a in p) Object.defineProperty(o, a, {
                    enumerable: !0,
                    get: p[a]
                })
            }
            D(b, {
                dsnFromString: function() {
                    return g
                },
                dsnToString: function() {
                    return u
                },
                makeDsn: function() {
                    return v
                }
            });
            var f = d(336186);

            function P(o, p) {
                (p == null || p > o.length) && (p = o.length);
                for (var a = 0, i = new Array(p); a < p; a++) i[a] = o[a];
                return i
            }

            function C(o) {
                if (Array.isArray(o)) return o
            }

            function w(o, p) {
                var a = o == null ? null : typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
                if (a != null) {
                    var i = [],
                        t = !0,
                        e = !1,
                        r, n;
                    try {
                        for (a = a.call(o); !(t = (r = a.next()).done) && (i.push(r.value), !(p && i.length === p)); t = !0);
                    } catch (c) {
                        e = !0, n = c
                    } finally {
                        try {
                            !t && a.return != null && a.return()
                        } finally {
                            if (e) throw n
                        }
                    }
                    return i
                }
            }

            function I() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function h(o, p) {
                return C(o) || w(o, p) || _(o, p) || I()
            }

            function _(o, p) {
                if (!!o) {
                    if (typeof o == "string") return P(o, p);
                    var a = Object.prototype.toString.call(o).slice(8, -1);
                    if (a === "Object" && o.constructor && (a = o.constructor.name), a === "Map" || a === "Set") return Array.from(a);
                    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return P(o, p)
                }
            }
            var m = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

            function E(o) {
                return o === "http" || o === "https"
            }

            function u(o) {
                var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                    a = o.host,
                    i = o.path,
                    t = o.pass,
                    e = o.port,
                    r = o.projectId,
                    n = o.protocol,
                    c = o.publicKey;
                return "".concat(n, "://").concat(c).concat(p && t ? ":".concat(t) : "") + "@".concat(a).concat(e ? ":".concat(e) : "", "/").concat(i && "".concat(i, "/")).concat(r)
            }

            function g(o) {
                var p = m.exec(o);
                if (!p) throw new f.SentryError("Invalid Sentry Dsn: ".concat(o));
                var a = h(p.slice(1), 6),
                    i = a[0],
                    t = a[1],
                    e = a[2],
                    r = e === void 0 ? "" : e,
                    n = a[3],
                    c = a[4],
                    T = c === void 0 ? "" : c,
                    S = a[5],
                    y = "",
                    O = S,
                    A = O.split("/");
                if (A.length > 1 && (y = A.slice(0, -1).join("/"), O = A.pop()), O) {
                    var j = O.match(/^\d+/);
                    j && (O = j[0])
                }
                return l({
                    host: n,
                    pass: r,
                    path: y,
                    projectId: O,
                    port: T,
                    protocol: i,
                    publicKey: t
                })
            }

            function l(o) {
                return {
                    protocol: o.protocol,
                    publicKey: o.publicKey || "",
                    pass: o.pass || "",
                    host: o.host,
                    port: o.port || "",
                    path: o.path || "",
                    projectId: o.projectId
                }
            }

            function s(o) {
                if (!!(typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__)) {
                    var p = o.port,
                        a = o.projectId,
                        i = o.protocol,
                        t = ["protocol", "publicKey", "host", "projectId"];
                    if (t.forEach(function(e) {
                            if (!o[e]) throw new f.SentryError("Invalid Sentry Dsn: ".concat(e, " missing"))
                        }), !a.match(/^\d+$/)) throw new f.SentryError("Invalid Sentry Dsn: Invalid projectId ".concat(a));
                    if (!E(i)) throw new f.SentryError("Invalid Sentry Dsn: Invalid protocol ".concat(i));
                    if (p && isNaN(parseInt(p, 10))) throw new f.SentryError("Invalid Sentry Dsn: Invalid port ".concat(p));
                    return !0
                }
            }

            function v(o) {
                var p = typeof o == "string" ? g(o) : l(o);
                return s(p), p
            }
        },
        36062: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "isBrowserBundle", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });

            function d() {
                return typeof __SENTRY_BROWSER_BUNDLE__ != "undefined" && !!__SENTRY_BROWSER_BUNDLE__
            }
        },
        926245: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(c, T) {
                for (var S in T) Object.defineProperty(c, S, {
                    enumerable: !0,
                    get: T[S]
                })
            }
            D(b, {
                addItemToEnvelope: function() {
                    return o
                },
                createAttachmentEnvelopeItem: function() {
                    return e
                },
                createEnvelope: function() {
                    return v
                },
                envelopeItemTypeToDataCategory: function() {
                    return n
                },
                forEachEnvelopeItem: function() {
                    return p
                },
                serializeEnvelope: function() {
                    return i
                }
            });
            var f = d(947338),
                P = d(69889);

            function C(c, T) {
                (T == null || T > c.length) && (T = c.length);
                for (var S = 0, y = new Array(T); S < T; S++) y[S] = c[S];
                return y
            }

            function w(c) {
                if (Array.isArray(c)) return c
            }

            function I(c) {
                if (Array.isArray(c)) return C(c)
            }

            function h(c, T) {
                return T != null && typeof Symbol != "undefined" && T[Symbol.hasInstance] ? !!T[Symbol.hasInstance](c) : c instanceof T
            }

            function _(c) {
                if (typeof Symbol != "undefined" && c[Symbol.iterator] != null || c["@@iterator"] != null) return Array.from(c)
            }

            function m(c, T) {
                var S = c == null ? null : typeof Symbol != "undefined" && c[Symbol.iterator] || c["@@iterator"];
                if (S != null) {
                    var y = [],
                        O = !0,
                        A = !1,
                        j, G;
                    try {
                        for (S = S.call(c); !(O = (j = S.next()).done) && (y.push(j.value), !(T && y.length === T)); O = !0);
                    } catch (z) {
                        A = !0, G = z
                    } finally {
                        try {
                            !O && S.return != null && S.return()
                        } finally {
                            if (A) throw G
                        }
                    }
                    return y
                }
            }

            function E() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function u() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function g(c, T) {
                return w(c) || m(c, T) || s(c, T) || E()
            }

            function l(c) {
                return I(c) || _(c) || s(c) || u()
            }

            function s(c, T) {
                if (!!c) {
                    if (typeof c == "string") return C(c, T);
                    var S = Object.prototype.toString.call(c).slice(8, -1);
                    if (S === "Object" && c.constructor && (S = c.constructor.name), S === "Map" || S === "Set") return Array.from(S);
                    if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)) return C(c, T)
                }
            }

            function v(c) {
                var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
                return [c, T]
            }

            function o(c, T) {
                var S = g(c, 2),
                    y = S[0],
                    O = S[1];
                return [y, l(O).concat([T])]
            }

            function p(c, T) {
                var S = c[1];
                S.forEach(function(y) {
                    var O = y[0].type;
                    T(y, O)
                })
            }

            function a(c, T) {
                var S = T || new TextEncoder;
                return S.encode(c)
            }

            function i(c, T) {
                var S = function(N) {
                        typeof j == "string" ? j = typeof N == "string" ? j + N : [a(j, T), N] : j.push(typeof N == "string" ? a(N, T) : N)
                    },
                    y = g(c, 2),
                    O = y[0],
                    A = y[1],
                    j = JSON.stringify(O),
                    G = !0,
                    z = !1,
                    $ = void 0;
                try {
                    for (var W = A[Symbol.iterator](), R; !(G = (R = W.next()).done); G = !0) {
                        var L = R.value,
                            k = g(L, 2),
                            x = k[0],
                            U = k[1];
                        if (S("\n".concat(JSON.stringify(x), "\n")), typeof U == "string" || h(U, Uint8Array)) S(U);
                        else {
                            var M = void 0;
                            try {
                                M = JSON.stringify(U)
                            } catch (H) {
                                M = JSON.stringify((0, f.normalize)(U))
                            }
                            S(M)
                        }
                    }
                } catch (H) {
                    z = !0, $ = H
                } finally {
                    try {
                        !G && W.return != null && W.return()
                    } finally {
                        if (z) throw $
                    }
                }
                return typeof j == "string" ? j : t(j)
            }

            function t(c) {
                var T = c.reduce(function(W, R) {
                        return W + R.length
                    }, 0),
                    S = new Uint8Array(T),
                    y = 0,
                    O = !0,
                    A = !1,
                    j = void 0;
                try {
                    for (var G = c[Symbol.iterator](), z; !(O = (z = G.next()).done); O = !0) {
                        var $ = z.value;
                        S.set($, y), y += $.length
                    }
                } catch (W) {
                    A = !0, j = W
                } finally {
                    try {
                        !O && G.return != null && G.return()
                    } finally {
                        if (A) throw j
                    }
                }
                return S
            }

            function e(c, T) {
                var S = typeof c.data == "string" ? a(c.data, T) : c.data;
                return [(0, P.dropUndefinedKeys)({
                    type: "attachment",
                    length: S.length,
                    filename: c.filename,
                    content_type: c.contentType,
                    attachment_type: c.attachmentType
                }), S]
            }
            var r = {
                session: "session",
                sessions: "session",
                attachment: "attachment",
                transaction: "transaction",
                event: "error",
                client_report: "internal",
                user_report: "default"
            };

            function n(c) {
                return r[c]
            }
        },
        336186: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "SentryError", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });

            function d(v) {
                if (v === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return v
            }

            function D(v, o) {
                if (!(v instanceof o)) throw new TypeError("Cannot call a class as a function")
            }

            function f() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (v) {
                    return !1
                }
            }

            function P(v, o, p) {
                return f() ? P = Reflect.construct : P = function(i, t, e) {
                    var r = [null];
                    r.push.apply(r, t);
                    var n = Function.bind.apply(i, r),
                        c = new n;
                    return e && m(c, e.prototype), c
                }, P.apply(null, arguments)
            }

            function C(v) {
                return C = Object.setPrototypeOf ? Object.getPrototypeOf : function(p) {
                    return p.__proto__ || Object.getPrototypeOf(p)
                }, C(v)
            }

            function w(v, o) {
                if (typeof o != "function" && o !== null) throw new TypeError("Super expression must either be null or a function");
                v.prototype = Object.create(o && o.prototype, {
                    constructor: {
                        value: v,
                        writable: !0,
                        configurable: !0
                    }
                }), o && m(v, o)
            }

            function I(v, o) {
                return o != null && typeof Symbol != "undefined" && o[Symbol.hasInstance] ? !!o[Symbol.hasInstance](v) : v instanceof o
            }

            function h(v) {
                return Function.toString.call(v).indexOf("[native code]") !== -1
            }

            function _(v, o) {
                return o && (E(o) === "object" || typeof o == "function") ? o : d(v)
            }

            function m(v, o) {
                return m = Object.setPrototypeOf || function(a, i) {
                    return a.__proto__ = i, a
                }, m(v, o)
            }
            var E = function(v) {
                return v && typeof Symbol != "undefined" && v.constructor === Symbol ? "symbol" : typeof v
            };

            function u(v) {
                var o = typeof Map == "function" ? new Map : void 0;
                return u = function(a) {
                    if (a === null || !h(a)) return a;
                    if (typeof a != "function") throw new TypeError("Super expression must either be null or a function");
                    if (typeof o != "undefined") {
                        if (o.has(a)) return o.get(a);
                        o.set(a, i)
                    }

                    function i() {
                        return P(a, arguments, C(this).constructor)
                    }
                    return i.prototype = Object.create(a.prototype, {
                        constructor: {
                            value: i,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), m(i, a)
                }, u(v)
            }

            function g() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (v) {
                    return !1
                }
            }

            function l(v) {
                var o = g();
                return function() {
                    var a = C(v),
                        i;
                    if (o) {
                        var t = C(this).constructor;
                        i = Reflect.construct(a, arguments, t)
                    } else i = a.apply(this, arguments);
                    return _(this, i)
                }
            }
            var s = function(o) {
                "use strict";
                w(a, o);
                var p = l(a);

                function a(i) {
                    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "warn";
                    D(this, a);
                    var e;
                    return e = p.call(this, i), e.message = i, e.name = (I(this, a) ? this.constructor : void 0).prototype.constructor.name, Object.setPrototypeOf(d(e), (I(this, a) ? this.constructor : void 0).prototype), e.logLevel = t, e
                }
                return a
            }(u(Error))
        },
        442378: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(j, G) {
                for (var z in G) Object.defineProperty(j, z, {
                    enumerable: !0,
                    get: G[z]
                })
            }
            D(b, {
                getDomElement: function() {
                    return f.getDomElement
                },
                getLocationHref: function() {
                    return f.getLocationHref
                },
                htmlTreeAsString: function() {
                    return f.htmlTreeAsString
                },
                dsnFromString: function() {
                    return P.dsnFromString
                },
                dsnToString: function() {
                    return P.dsnToString
                },
                makeDsn: function() {
                    return P.makeDsn
                },
                SentryError: function() {
                    return C.SentryError
                },
                GLOBAL_OBJ: function() {
                    return w.GLOBAL_OBJ
                },
                getGlobalObject: function() {
                    return w.getGlobalObject
                },
                getGlobalSingleton: function() {
                    return w.getGlobalSingleton
                },
                addInstrumentationHandler: function() {
                    return I.addInstrumentationHandler
                },
                isDOMError: function() {
                    return h.isDOMError
                },
                isDOMException: function() {
                    return h.isDOMException
                },
                isElement: function() {
                    return h.isElement
                },
                isError: function() {
                    return h.isError
                },
                isErrorEvent: function() {
                    return h.isErrorEvent
                },
                isEvent: function() {
                    return h.isEvent
                },
                isInstanceOf: function() {
                    return h.isInstanceOf
                },
                isNaN: function() {
                    return h.isNaN
                },
                isPlainObject: function() {
                    return h.isPlainObject
                },
                isPrimitive: function() {
                    return h.isPrimitive
                },
                isRegExp: function() {
                    return h.isRegExp
                },
                isString: function() {
                    return h.isString
                },
                isSyntheticEvent: function() {
                    return h.isSyntheticEvent
                },
                isThenable: function() {
                    return h.isThenable
                },
                CONSOLE_LEVELS: function() {
                    return _.CONSOLE_LEVELS
                },
                consoleSandbox: function() {
                    return _.consoleSandbox
                },
                logger: function() {
                    return _.logger
                },
                memoBuilder: function() {
                    return m.memoBuilder
                },
                addContextToFrame: function() {
                    return E.addContextToFrame
                },
                addExceptionMechanism: function() {
                    return E.addExceptionMechanism
                },
                addExceptionTypeValue: function() {
                    return E.addExceptionTypeValue
                },
                arrayify: function() {
                    return E.arrayify
                },
                checkOrSetAlreadyCaught: function() {
                    return E.checkOrSetAlreadyCaught
                },
                getEventDescription: function() {
                    return E.getEventDescription
                },
                parseSemver: function() {
                    return E.parseSemver
                },
                uuid4: function() {
                    return E.uuid4
                },
                dynamicRequire: function() {
                    return u.dynamicRequire
                },
                isNodeEnv: function() {
                    return u.isNodeEnv
                },
                loadModule: function() {
                    return u.loadModule
                },
                normalize: function() {
                    return g.normalize
                },
                normalizeToSize: function() {
                    return g.normalizeToSize
                },
                walk: function() {
                    return g.walk
                },
                addNonEnumerableProperty: function() {
                    return l.addNonEnumerableProperty
                },
                convertToPlainObject: function() {
                    return l.convertToPlainObject
                },
                dropUndefinedKeys: function() {
                    return l.dropUndefinedKeys
                },
                extractExceptionKeysForMessage: function() {
                    return l.extractExceptionKeysForMessage
                },
                fill: function() {
                    return l.fill
                },
                getOriginalFunction: function() {
                    return l.getOriginalFunction
                },
                markFunctionWrapped: function() {
                    return l.markFunctionWrapped
                },
                objectify: function() {
                    return l.objectify
                },
                urlEncode: function() {
                    return l.urlEncode
                },
                basename: function() {
                    return s.basename
                },
                dirname: function() {
                    return s.dirname
                },
                isAbsolute: function() {
                    return s.isAbsolute
                },
                join: function() {
                    return s.join
                },
                normalizePath: function() {
                    return s.normalizePath
                },
                relative: function() {
                    return s.relative
                },
                resolve: function() {
                    return s.resolve
                },
                makePromiseBuffer: function() {
                    return v.makePromiseBuffer
                },
                addRequestDataToEvent: function() {
                    return o.addRequestDataToEvent
                },
                addRequestDataToTransaction: function() {
                    return o.addRequestDataToTransaction
                },
                extractPathForTransaction: function() {
                    return o.extractPathForTransaction
                },
                extractRequestData: function() {
                    return o.extractRequestData
                },
                severityFromString: function() {
                    return p.severityFromString
                },
                severityLevelFromString: function() {
                    return p.severityLevelFromString
                },
                validSeverityLevels: function() {
                    return p.validSeverityLevels
                },
                createStackParser: function() {
                    return a.createStackParser
                },
                getFunctionName: function() {
                    return a.getFunctionName
                },
                nodeStackLineParser: function() {
                    return a.nodeStackLineParser
                },
                stackParserFromStackParserOptions: function() {
                    return a.stackParserFromStackParserOptions
                },
                stripSentryFramesAndReverse: function() {
                    return a.stripSentryFramesAndReverse
                },
                escapeStringForRegex: function() {
                    return i.escapeStringForRegex
                },
                isMatchingPattern: function() {
                    return i.isMatchingPattern
                },
                safeJoin: function() {
                    return i.safeJoin
                },
                snipLine: function() {
                    return i.snipLine
                },
                stringMatchesSomePattern: function() {
                    return i.stringMatchesSomePattern
                },
                truncate: function() {
                    return i.truncate
                },
                isNativeFetch: function() {
                    return t.isNativeFetch
                },
                supportsDOMError: function() {
                    return t.supportsDOMError
                },
                supportsDOMException: function() {
                    return t.supportsDOMException
                },
                supportsErrorEvent: function() {
                    return t.supportsErrorEvent
                },
                supportsFetch: function() {
                    return t.supportsFetch
                },
                supportsHistory: function() {
                    return t.supportsHistory
                },
                supportsNativeFetch: function() {
                    return t.supportsNativeFetch
                },
                supportsReferrerPolicy: function() {
                    return t.supportsReferrerPolicy
                },
                supportsReportingObserver: function() {
                    return t.supportsReportingObserver
                },
                SyncPromise: function() {
                    return e.SyncPromise
                },
                rejectedSyncPromise: function() {
                    return e.rejectedSyncPromise
                },
                resolvedSyncPromise: function() {
                    return e.resolvedSyncPromise
                },
                _browserPerformanceTimeOriginMode: function() {
                    return r._browserPerformanceTimeOriginMode
                },
                browserPerformanceTimeOrigin: function() {
                    return r.browserPerformanceTimeOrigin
                },
                dateTimestampInSeconds: function() {
                    return r.dateTimestampInSeconds
                },
                timestampInSeconds: function() {
                    return r.timestampInSeconds
                },
                timestampWithMs: function() {
                    return r.timestampWithMs
                },
                usingPerformanceAPI: function() {
                    return r.usingPerformanceAPI
                },
                TRACEPARENT_REGEXP: function() {
                    return n.TRACEPARENT_REGEXP
                },
                extractTraceparentData: function() {
                    return n.extractTraceparentData
                },
                isBrowserBundle: function() {
                    return c.isBrowserBundle
                },
                addItemToEnvelope: function() {
                    return T.addItemToEnvelope
                },
                createAttachmentEnvelopeItem: function() {
                    return T.createAttachmentEnvelopeItem
                },
                createEnvelope: function() {
                    return T.createEnvelope
                },
                envelopeItemTypeToDataCategory: function() {
                    return T.envelopeItemTypeToDataCategory
                },
                forEachEnvelopeItem: function() {
                    return T.forEachEnvelopeItem
                },
                serializeEnvelope: function() {
                    return T.serializeEnvelope
                },
                createClientReportEnvelope: function() {
                    return S.createClientReportEnvelope
                },
                DEFAULT_RETRY_AFTER: function() {
                    return y.DEFAULT_RETRY_AFTER
                },
                disabledUntil: function() {
                    return y.disabledUntil
                },
                isRateLimited: function() {
                    return y.isRateLimited
                },
                parseRetryAfterHeader: function() {
                    return y.parseRetryAfterHeader
                },
                updateRateLimits: function() {
                    return y.updateRateLimits
                },
                BAGGAGE_HEADER_NAME: function() {
                    return O.BAGGAGE_HEADER_NAME
                },
                MAX_BAGGAGE_STRING_LENGTH: function() {
                    return O.MAX_BAGGAGE_STRING_LENGTH
                },
                SENTRY_BAGGAGE_KEY_PREFIX: function() {
                    return O.SENTRY_BAGGAGE_KEY_PREFIX
                },
                SENTRY_BAGGAGE_KEY_PREFIX_REGEX: function() {
                    return O.SENTRY_BAGGAGE_KEY_PREFIX_REGEX
                },
                baggageHeaderToDynamicSamplingContext: function() {
                    return O.baggageHeaderToDynamicSamplingContext
                },
                dynamicSamplingContextToSentryBaggageHeader: function() {
                    return O.dynamicSamplingContextToSentryBaggageHeader
                },
                getNumberOfUrlSegments: function() {
                    return A.getNumberOfUrlSegments
                },
                parseUrl: function() {
                    return A.parseUrl
                },
                stripUrlQueryAndFragment: function() {
                    return A.stripUrlQueryAndFragment
                }
            });
            var f = d(812967),
                P = d(909255),
                C = d(336186),
                w = d(462463),
                I = d(826546),
                h = d(310837),
                _ = d(563975),
                m = d(219660),
                E = d(854184),
                u = d(116094),
                g = d(947338),
                l = d(69889),
                s = d(878208),
                v = d(214705),
                o = d(775957),
                p = d(690627),
                a = d(839463),
                i = d(361846),
                t = d(374738),
                e = d(726845),
                r = d(153838),
                n = d(676145),
                c = d(36062),
                T = d(926245),
                S = d(415293),
                y = d(147446),
                O = d(754936),
                A = d(356800)
        },
        826546: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "addInstrumentationHandler", {
                enumerable: !0,
                get: function() {
                    return v
                }
            });
            var D = d(310837),
                f = d(563975),
                P = d(69889),
                C = d(839463),
                w = d(374738),
                I = d(462463);

            function h(R, L, k) {
                return L in R ? Object.defineProperty(R, L, {
                    value: k,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : R[L] = k, R
            }

            function _(R) {
                for (var L = 1; L < arguments.length; L++) {
                    var k = arguments[L] != null ? arguments[L] : {},
                        x = Object.keys(k);
                    typeof Object.getOwnPropertySymbols == "function" && (x = x.concat(Object.getOwnPropertySymbols(k).filter(function(U) {
                        return Object.getOwnPropertyDescriptor(k, U).enumerable
                    }))), x.forEach(function(U) {
                        h(R, U, k[U])
                    })
                }
                return R
            }

            function m(R, L) {
                var k = Object.keys(R);
                if (Object.getOwnPropertySymbols) {
                    var x = Object.getOwnPropertySymbols(R);
                    L && (x = x.filter(function(U) {
                        return Object.getOwnPropertyDescriptor(R, U).enumerable
                    })), k.push.apply(k, x)
                }
                return k
            }

            function E(R, L) {
                return L = L != null ? L : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(L)) : m(Object(L)).forEach(function(k) {
                    Object.defineProperty(R, k, Object.getOwnPropertyDescriptor(L, k))
                }), R
            }
            var u = (0, I.getGlobalObject)(),
                g = {},
                l = {};

            function s(R) {
                if (!l[R]) switch (l[R] = !0, R) {
                    case "console":
                        p();
                        break;
                    case "dom":
                        j();
                        break;
                    case "xhr":
                        e();
                        break;
                    case "fetch":
                        a();
                        break;
                    case "history":
                        n();
                        break;
                    case "error":
                        z();
                        break;
                    case "unhandledrejection":
                        W();
                        break;
                    default:
                        (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.warn("unknown instrumentation type:", R);
                        return
                }
            }

            function v(R, L) {
                g[R] = g[R] || [], g[R].push(L), s(R)
            }

            function o(R, L) {
                if (!(!R || !g[R])) {
                    var k = !0,
                        x = !1,
                        U = void 0;
                    try {
                        for (var M = (g[R] || [])[Symbol.iterator](), H; !(k = (H = M.next()).done); k = !0) {
                            var N = H.value;
                            try {
                                N(L)
                            } catch (J) {
                                (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.error("Error while triggering instrumentation handler.\nType: ".concat(R, "\nName: ").concat((0, C.getFunctionName)(N), "\nError:"), J)
                            }
                        }
                    } catch (J) {
                        x = !0, U = J
                    } finally {
                        try {
                            !k && M.return != null && M.return()
                        } finally {
                            if (x) throw U
                        }
                    }
                }
            }

            function p() {
                "console" in u && f.CONSOLE_LEVELS.forEach(function(R) {
                    R in u.console && (0, P.fill)(u.console, R, function(L) {
                        return function() {
                            for (var k = arguments.length, x = new Array(k), U = 0; U < k; U++) x[U] = arguments[U];
                            o("console", {
                                args: x,
                                level: R
                            }), L && L.apply(u.console, x)
                        }
                    })
                })
            }

            function a() {
                !(0, w.supportsNativeFetch)() || (0, P.fill)(u, "fetch", function(R) {
                    return function() {
                        for (var L = arguments.length, k = new Array(L), x = 0; x < L; x++) k[x] = arguments[x];
                        var U = {
                            args: k,
                            fetchData: {
                                method: i(k),
                                url: t(k)
                            },
                            startTimestamp: Date.now()
                        };
                        return o("fetch", _({}, U)), R.apply(u, k).then(function(M) {
                            return o("fetch", E(_({}, U), {
                                endTimestamp: Date.now(),
                                response: M
                            })), M
                        }, function(M) {
                            throw o("fetch", E(_({}, U), {
                                endTimestamp: Date.now(),
                                error: M
                            })), M
                        })
                    }
                })
            }

            function i() {
                var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                return "Request" in u && (0, D.isInstanceOf)(R[0], Request) && R[0].method ? String(R[0].method).toUpperCase() : R[1] && R[1].method ? String(R[1].method).toUpperCase() : "GET"
            }

            function t() {
                var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                return typeof R[0] == "string" ? R[0] : "Request" in u && (0, D.isInstanceOf)(R[0], Request) ? R[0].url : String(R[0])
            }

            function e() {
                if ("XMLHttpRequest" in u) {
                    var R = XMLHttpRequest.prototype;
                    (0, P.fill)(R, "open", function(L) {
                        return function() {
                            for (var k = arguments.length, x = new Array(k), U = 0; U < k; U++) x[U] = arguments[U];
                            var M = this,
                                H = x[1],
                                N = M.__sentry_xhr__ = {
                                    method: (0, D.isString)(x[0]) ? x[0].toUpperCase() : x[0],
                                    url: x[1]
                                };
                            (0, D.isString)(H) && N.method === "POST" && H.match(/sentry_key/) && (M.__sentry_own_request__ = !0);
                            var J = function() {
                                if (M.readyState === 4) {
                                    try {
                                        N.status_code = M.status
                                    } catch (te) {}
                                    o("xhr", {
                                        args: x,
                                        endTimestamp: Date.now(),
                                        startTimestamp: Date.now(),
                                        xhr: M
                                    })
                                }
                            };
                            return "onreadystatechange" in M && typeof M.onreadystatechange == "function" ? (0, P.fill)(M, "onreadystatechange", function(Q) {
                                return function() {
                                    for (var te = arguments.length, ee = new Array(te), K = 0; K < te; K++) ee[K] = arguments[K];
                                    return J(), Q.apply(M, ee)
                                }
                            }) : M.addEventListener("readystatechange", J), L.apply(M, x)
                        }
                    }), (0, P.fill)(R, "send", function(L) {
                        return function() {
                            for (var k = arguments.length, x = new Array(k), U = 0; U < k; U++) x[U] = arguments[U];
                            return this.__sentry_xhr__ && x[0] !== void 0 && (this.__sentry_xhr__.body = x[0]), o("xhr", {
                                args: x,
                                startTimestamp: Date.now(),
                                xhr: this
                            }), L.apply(this, x)
                        }
                    })
                }
            }
            var r;

            function n() {
                var R = function(x) {
                    return function() {
                        for (var U = arguments.length, M = new Array(U), H = 0; H < U; H++) M[H] = arguments[H];
                        var N = M.length > 2 ? M[2] : void 0;
                        if (N) {
                            var J = r,
                                Q = String(N);
                            r = Q, o("history", {
                                from: J,
                                to: Q
                            })
                        }
                        return x.apply(this, M)
                    }
                };
                if (!!(0, w.supportsHistory)()) {
                    var L = u.onpopstate;
                    u.onpopstate = function() {
                        for (var k = arguments.length, x = new Array(k), U = 0; U < k; U++) x[U] = arguments[U];
                        var M = u.location.href,
                            H = r;
                        if (r = M, o("history", {
                                from: H,
                                to: M
                            }), L) try {
                            return L.apply(this, x)
                        } catch (N) {}
                    }, (0, P.fill)(u.history, "pushState", R), (0, P.fill)(u.history, "replaceState", R)
                }
            }
            var c = 1e3,
                T, S;

            function y(R, L) {
                if (!R || R.type !== L.type) return !0;
                try {
                    if (R.target !== L.target) return !0
                } catch (k) {}
                return !1
            }

            function O(R) {
                if (R.type !== "keypress") return !1;
                try {
                    var L = R.target;
                    if (!L || !L.tagName) return !0;
                    if (L.tagName === "INPUT" || L.tagName === "TEXTAREA" || L.isContentEditable) return !1
                } catch (k) {}
                return !0
            }

            function A(R) {
                var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                return function(k) {
                    if (!(!k || S === k) && !O(k)) {
                        var x = k.type === "keypress" ? "input" : k.type;
                        T === void 0 ? (R({
                            event: k,
                            name: x,
                            global: L
                        }), S = k) : y(S, k) && (R({
                            event: k,
                            name: x,
                            global: L
                        }), S = k), clearTimeout(T), T = u.setTimeout(function() {
                            T = void 0
                        }, c)
                    }
                }
            }

            function j() {
                if ("document" in u) {
                    var R = o.bind(null, "dom"),
                        L = A(R, !0);
                    u.document.addEventListener("click", L, !1), u.document.addEventListener("keypress", L, !1), ["EventTarget", "Node"].forEach(function(k) {
                        var x = u[k] && u[k].prototype;
                        !x || !x.hasOwnProperty || !x.hasOwnProperty("addEventListener") || ((0, P.fill)(x, "addEventListener", function(U) {
                            return function(M, H, N) {
                                if (M === "click" || M == "keypress") try {
                                    var J = this,
                                        Q = J.__sentry_instrumentation_handlers__ = J.__sentry_instrumentation_handlers__ || {},
                                        te = Q[M] = Q[M] || {
                                            refCount: 0
                                        };
                                    if (!te.handler) {
                                        var ee = A(R);
                                        te.handler = ee, U.call(this, M, ee, N)
                                    }
                                    te.refCount++
                                } catch (K) {}
                                return U.call(this, M, H, N)
                            }
                        }), (0, P.fill)(x, "removeEventListener", function(U) {
                            return function(M, H, N) {
                                if (M === "click" || M == "keypress") try {
                                    var J = this,
                                        Q = J.__sentry_instrumentation_handlers__ || {},
                                        te = Q[M];
                                    te && (te.refCount--, te.refCount <= 0 && (U.call(this, M, te.handler, N), te.handler = void 0, delete Q[M]), Object.keys(Q).length === 0 && delete J.__sentry_instrumentation_handlers__)
                                } catch (ee) {}
                                return U.call(this, M, H, N)
                            }
                        }))
                    })
                }
            }
            var G = null;

            function z() {
                G = u.onerror, u.onerror = function(R, L, k, x, U) {
                    return o("error", {
                        column: x,
                        error: U,
                        line: k,
                        msg: R,
                        url: L
                    }), G ? G.apply(this, arguments) : !1
                }
            }
            var $ = null;

            function W() {
                $ = u.onunhandledrejection, u.onunhandledrejection = function(R) {
                    return o("unhandledrejection", R), $ ? $.apply(this, arguments) : !0
                }
            }
        },
        310837: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function d(a, i) {
                for (var t in i) Object.defineProperty(a, t, {
                    enumerable: !0,
                    get: i[t]
                })
            }
            d(b, {
                isDOMError: function() {
                    return I
                },
                isDOMException: function() {
                    return h
                },
                isElement: function() {
                    return g
                },
                isError: function() {
                    return P
                },
                isErrorEvent: function() {
                    return w
                },
                isEvent: function() {
                    return u
                },
                isInstanceOf: function() {
                    return p
                },
                isNaN: function() {
                    return o
                },
                isPlainObject: function() {
                    return E
                },
                isPrimitive: function() {
                    return m
                },
                isRegExp: function() {
                    return l
                },
                isString: function() {
                    return _
                },
                isSyntheticEvent: function() {
                    return v
                },
                isThenable: function() {
                    return s
                }
            });

            function D(a, i) {
                return i != null && typeof Symbol != "undefined" && i[Symbol.hasInstance] ? !!i[Symbol.hasInstance](a) : a instanceof i
            }
            var f = Object.prototype.toString;

            function P(a) {
                switch (f.call(a)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return p(a, Error)
                }
            }

            function C(a, i) {
                return f.call(a) === "[object ".concat(i, "]")
            }

            function w(a) {
                return C(a, "ErrorEvent")
            }

            function I(a) {
                return C(a, "DOMError")
            }

            function h(a) {
                return C(a, "DOMException")
            }

            function _(a) {
                return C(a, "String")
            }

            function m(a) {
                return a === null || typeof a != "object" && typeof a != "function"
            }

            function E(a) {
                return C(a, "Object")
            }

            function u(a) {
                return typeof Event != "undefined" && p(a, Event)
            }

            function g(a) {
                return typeof Element != "undefined" && p(a, Element)
            }

            function l(a) {
                return C(a, "RegExp")
            }

            function s(a) {
                return Boolean(a && a.then && typeof a.then == "function")
            }

            function v(a) {
                return E(a) && "nativeEvent" in a && "preventDefault" in a && "stopPropagation" in a
            }

            function o(a) {
                return typeof a == "number" && a !== a
            }

            function p(a, i) {
                try {
                    return D(a, i)
                } catch (t) {
                    return !1
                }
            }
        },
        563975: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(s, v) {
                for (var o in v) Object.defineProperty(s, o, {
                    enumerable: !0,
                    get: v[o]
                })
            }
            D(b, {
                CONSOLE_LEVELS: function() {
                    return E
                },
                consoleSandbox: function() {
                    return u
                },
                logger: function() {
                    return l
                }
            });
            var f = d(462463);

            function P(s, v) {
                (v == null || v > s.length) && (v = s.length);
                for (var o = 0, p = new Array(v); o < v; o++) p[o] = s[o];
                return p
            }

            function C(s) {
                if (Array.isArray(s)) return P(s)
            }

            function w(s) {
                if (typeof Symbol != "undefined" && s[Symbol.iterator] != null || s["@@iterator"] != null) return Array.from(s)
            }

            function I() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function h(s) {
                return C(s) || w(s) || _(s) || I()
            }

            function _(s, v) {
                if (!!s) {
                    if (typeof s == "string") return P(s, v);
                    var o = Object.prototype.toString.call(s).slice(8, -1);
                    if (o === "Object" && s.constructor && (o = s.constructor.name), o === "Map" || o === "Set") return Array.from(o);
                    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return P(s, v)
                }
            }
            var m = "Sentry Logger ",
                E = ["debug", "info", "warn", "error", "log", "assert", "trace"];

            function u(s) {
                if (!("console" in f.GLOBAL_OBJ)) return s();
                var v = f.GLOBAL_OBJ.console,
                    o = {};
                E.forEach(function(p) {
                    var a = v[p] && v[p].__sentry_original__;
                    p in v && a && (o[p] = v[p], v[p] = a)
                });
                try {
                    return s()
                } finally {
                    Object.keys(o).forEach(function(p) {
                        v[p] = o[p]
                    })
                }
            }

            function g() {
                var s = !1,
                    v = {
                        enable: function() {
                            s = !0
                        },
                        disable: function() {
                            s = !1
                        }
                    };
                return typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__ ? E.forEach(function(o) {
                    v[o] = function() {
                        for (var p = arguments.length, a = new Array(p), i = 0; i < p; i++) a[i] = arguments[i];
                        s && u(function() {
                            var t;
                            (t = f.GLOBAL_OBJ.console)[o].apply(t, ["".concat(m, "[").concat(o, "]:")].concat(h(a)))
                        })
                    }
                }) : E.forEach(function(o) {
                    v[o] = function() {}
                }), v
            }
            var l;
            typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__ ? l = (0, f.getGlobalSingleton)("logger", g) : l = g()
        },
        219660: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "memoBuilder", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });

            function d() {
                var D = function(I) {
                        if (P) return C.has(I) ? !0 : (C.add(I), !1);
                        for (var h = 0; h < C.length; h++) {
                            var _ = C[h];
                            if (_ === I) return !0
                        }
                        return C.push(I), !1
                    },
                    f = function(I) {
                        if (P) C.delete(I);
                        else
                            for (var h = 0; h < C.length; h++)
                                if (C[h] === I) {
                                    C.splice(h, 1);
                                    break
                                }
                    },
                    P = typeof WeakSet == "function",
                    C = P ? new WeakSet : [];
                return [D, f]
            }
        },
        854184: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(p, a) {
                for (var i in a) Object.defineProperty(p, i, {
                    enumerable: !0,
                    get: a[i]
                })
            }
            D(b, {
                addContextToFrame: function() {
                    return s
                },
                addExceptionMechanism: function() {
                    return u
                },
                addExceptionTypeValue: function() {
                    return E
                },
                arrayify: function() {
                    return o
                },
                checkOrSetAlreadyCaught: function() {
                    return v
                },
                getEventDescription: function() {
                    return m
                },
                parseSemver: function() {
                    return l
                },
                uuid4: function() {
                    return h
                }
            });
            var f = d(69889),
                P = d(361846),
                C = d(462463);

            function w(p, a, i) {
                return a in p ? Object.defineProperty(p, a, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : p[a] = i, p
            }

            function I(p) {
                for (var a = 1; a < arguments.length; a++) {
                    var i = arguments[a] != null ? arguments[a] : {},
                        t = Object.keys(i);
                    typeof Object.getOwnPropertySymbols == "function" && (t = t.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                    }))), t.forEach(function(e) {
                        w(p, e, i[e])
                    })
                }
                return p
            }

            function h() {
                var p = C.GLOBAL_OBJ,
                    a = p.crypto || p.msCrypto;
                if (a && a.randomUUID) return a.randomUUID().replace(/-/g, "");
                var i = a && a.getRandomValues ? function() {
                    return a.getRandomValues(new Uint8Array(1))[0]
                } : function() {
                    return Math.random() * 16
                };
                return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function(t) {
                    return (t ^ (i() & 15) >> t / 4).toString(16)
                })
            }

            function _(p) {
                return p.exception && p.exception.values ? p.exception.values[0] : void 0
            }

            function m(p) {
                var a = p.message,
                    i = p.event_id;
                if (a) return a;
                var t = _(p);
                return t ? t.type && t.value ? "".concat(t.type, ": ").concat(t.value) : t.type || t.value || i || "<unknown>" : i || "<unknown>"
            }

            function E(p, a, i) {
                var t = p.exception = p.exception || {},
                    e = t.values = t.values || [],
                    r = e[0] = e[0] || {};
                r.value || (r.value = a || ""), r.type || (r.type = i || "Error")
            }

            function u(p, a) {
                var i = _(p);
                if (!!i) {
                    var t = {
                            type: "generic",
                            handled: !0
                        },
                        e = i.mechanism;
                    if (i.mechanism = I({}, t, e, a), a && "data" in a) {
                        var r = I({}, e && e.data, a.data);
                        i.mechanism.data = r
                    }
                }
            }
            var g = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

            function l(p) {
                var a = p.match(g) || [],
                    i = parseInt(a[1], 10),
                    t = parseInt(a[2], 10),
                    e = parseInt(a[3], 10);
                return {
                    buildmetadata: a[5],
                    major: isNaN(i) ? void 0 : i,
                    minor: isNaN(t) ? void 0 : t,
                    patch: isNaN(e) ? void 0 : e,
                    prerelease: a[4]
                }
            }

            function s(p, a) {
                var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5,
                    t = a.lineno || 0,
                    e = p.length,
                    r = Math.max(Math.min(e, t - 1), 0);
                a.pre_context = p.slice(Math.max(0, r - i), r).map(function(n) {
                    return (0, P.snipLine)(n, 0)
                }), a.context_line = (0, P.snipLine)(p[Math.min(e - 1, r)], a.colno || 0), a.post_context = p.slice(Math.min(r + 1, e), r + 1 + i).map(function(n) {
                    return (0, P.snipLine)(n, 0)
                })
            }

            function v(p) {
                if (p && p.__sentry_captured__) return !0;
                try {
                    (0, f.addNonEnumerableProperty)(p, "__sentry_captured__", !0)
                } catch (a) {}
                return !1
            }

            function o(p) {
                return Array.isArray(p) ? p : [p]
            }
        },
        116094: function(X, b, d) {
            "use strict";
            X = d.nmd(X);
            var D = d(760636);
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function f(h, _) {
                for (var m in _) Object.defineProperty(h, m, {
                    enumerable: !0,
                    get: _[m]
                })
            }
            f(b, {
                dynamicRequire: function() {
                    return w
                },
                isNodeEnv: function() {
                    return C
                },
                loadModule: function() {
                    return I
                }
            });
            var P = d(36062);

            function C() {
                return !(0, P.isBrowserBundle)() && Object.prototype.toString.call(typeof D != "undefined" ? D : 0) === "[object process]"
            }

            function w(h, _) {
                return h.require(_)
            }

            function I(h) {
                var _;
                try {
                    _ = w(X, h)
                } catch (E) {}
                try {
                    var m = w(X, "process").cwd;
                    _ = w(X, "".concat(m(), "/node_modules/").concat(h))
                } catch (E) {}
                return _
            }
        },
        947338: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(i, t) {
                for (var e in t) Object.defineProperty(i, e, {
                    enumerable: !0,
                    get: t[e]
                })
            }
            D(b, {
                normalize: function() {
                    return l
                },
                normalizeToSize: function() {
                    return s
                },
                walk: function() {
                    return v
                }
            });
            var f = d(310837),
                P = d(219660),
                C = d(69889),
                w = d(839463);

            function I(i, t) {
                (t == null || t > i.length) && (t = i.length);
                for (var e = 0, r = new Array(t); e < t; e++) r[e] = i[e];
                return r
            }

            function h(i) {
                if (Array.isArray(i)) return i
            }

            function _(i, t) {
                var e = i == null ? null : typeof Symbol != "undefined" && i[Symbol.iterator] || i["@@iterator"];
                if (e != null) {
                    var r = [],
                        n = !0,
                        c = !1,
                        T, S;
                    try {
                        for (e = e.call(i); !(n = (T = e.next()).done) && (r.push(T.value), !(t && r.length === t)); n = !0);
                    } catch (y) {
                        c = !0, S = y
                    } finally {
                        try {
                            !n && e.return != null && e.return()
                        } finally {
                            if (c) throw S
                        }
                    }
                    return r
                }
            }

            function m() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function E(i, t) {
                return h(i) || _(i, t) || g(i, t) || m()
            }
            var u = function(i) {
                return i && typeof Symbol != "undefined" && i.constructor === Symbol ? "symbol" : typeof i
            };

            function g(i, t) {
                if (!!i) {
                    if (typeof i == "string") return I(i, t);
                    var e = Object.prototype.toString.call(i).slice(8, -1);
                    if (e === "Object" && i.constructor && (e = i.constructor.name), e === "Map" || e === "Set") return Array.from(e);
                    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return I(i, t)
                }
            }

            function l(i) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0,
                    e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1 / 0;
                try {
                    return v("", i, t, e)
                } catch (r) {
                    return {
                        ERROR: "**non-serializable** (".concat(r, ")")
                    }
                }
            }

            function s(i) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3,
                    e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 100 * 1024,
                    r = l(i, t);
                return a(r) > e ? s(i, t - 1, e) : r
            }

            function v(i, t) {
                var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1 / 0,
                    r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1 / 0,
                    n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (0, P.memoBuilder)(),
                    c = E(n, 2),
                    T = c[0],
                    S = c[1];
                if (t === null || ["number", "boolean", "string"].includes(typeof t == "undefined" ? "undefined" : u(t)) && !(0, f.isNaN)(t)) return t;
                var y = o(i, t);
                if (!y.startsWith("[object ")) return y;
                if (t.__sentry_skip_normalization__) return t;
                if (e === 0) return y.replace("object ", "");
                if (T(t)) return "[Circular ~]";
                var O = t;
                if (O && typeof O.toJSON == "function") try {
                    var A = O.toJSON();
                    return v("", A, e - 1, r, n)
                } catch (R) {}
                var j = Array.isArray(t) ? [] : {},
                    G = 0,
                    z = (0, C.convertToPlainObject)(t);
                for (var $ in z)
                    if (!!Object.prototype.hasOwnProperty.call(z, $)) {
                        if (G >= r) {
                            j[$] = "[MaxProperties ~]";
                            break
                        }
                        var W = z[$];
                        j[$] = v($, W, e - 1, r, n), G++
                    }
                return S(t), j
            }

            function o(i, t) {
                try {
                    return i === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : i === "domainEmitter" ? "[DomainEmitter]" : typeof d.g != "undefined" && t === d.g ? "[Global]" : typeof window != "undefined" && t === window ? "[Window]" : typeof document != "undefined" && t === document ? "[Document]" : (0, f.isSyntheticEvent)(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? "[Function: ".concat((0, w.getFunctionName)(t), "]") : (typeof t == "undefined" ? "undefined" : u(t)) === "symbol" ? "[".concat(String(t), "]") : (typeof t == "undefined" ? "undefined" : u(t)) === "bigint" ? "[BigInt: ".concat(String(t), "]") : "[object ".concat(Object.getPrototypeOf(t).constructor.name, "]")
                } catch (e) {
                    return "**non-serializable** (".concat(e, ")")
                }
            }

            function p(i) {
                return ~-encodeURI(i).split(/%..|./).length
            }

            function a(i) {
                return p(JSON.stringify(i))
            }
        },
        69889: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(t, e) {
                for (var r in e) Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }
            D(b, {
                addNonEnumerableProperty: function() {
                    return m
                },
                convertToPlainObject: function() {
                    return l
                },
                dropUndefinedKeys: function() {
                    return p
                },
                extractExceptionKeysForMessage: function() {
                    return o
                },
                fill: function() {
                    return _
                },
                getOriginalFunction: function() {
                    return u
                },
                markFunctionWrapped: function() {
                    return E
                },
                objectify: function() {
                    return i
                },
                urlEncode: function() {
                    return g
                }
            });
            var f = d(812967),
                P = d(310837),
                C = d(361846);

            function w(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function I(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e] != null ? arguments[e] : {},
                        n = Object.keys(r);
                    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(c) {
                        return Object.getOwnPropertyDescriptor(r, c).enumerable
                    }))), n.forEach(function(c) {
                        w(t, c, r[c])
                    })
                }
                return t
            }
            var h = function(t) {
                return t && typeof Symbol != "undefined" && t.constructor === Symbol ? "symbol" : typeof t
            };

            function _(t, e, r) {
                if (e in t) {
                    var n = t[e],
                        c = r(n);
                    if (typeof c == "function") try {
                        E(c, n)
                    } catch (T) {}
                    t[e] = c
                }
            }

            function m(t, e, r) {
                Object.defineProperty(t, e, {
                    value: r,
                    writable: !0,
                    configurable: !0
                })
            }

            function E(t, e) {
                var r = e.prototype || {};
                t.prototype = e.prototype = r, m(t, "__sentry_original__", e)
            }

            function u(t) {
                return t.__sentry_original__
            }

            function g(t) {
                return Object.keys(t).map(function(e) {
                    return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t[e]))
                }).join("&")
            }

            function l(t) {
                if ((0, P.isError)(t)) return I({
                    message: t.message,
                    name: t.name,
                    stack: t.stack
                }, v(t));
                if ((0, P.isEvent)(t)) {
                    var e = I({
                        type: t.type,
                        target: s(t.target),
                        currentTarget: s(t.currentTarget)
                    }, v(t));
                    return typeof CustomEvent != "undefined" && (0, P.isInstanceOf)(t, CustomEvent) && (e.detail = t.detail), e
                } else return t
            }

            function s(t) {
                try {
                    return (0, P.isElement)(t) ? (0, f.htmlTreeAsString)(t) : Object.prototype.toString.call(t)
                } catch (e) {
                    return "<unknown>"
                }
            }

            function v(t) {
                if (typeof t == "object" && t !== null) {
                    var e = {};
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                } else return {}
            }

            function o(t) {
                var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 40,
                    r = Object.keys(l(t));
                if (r.sort(), !r.length) return "[object has no keys]";
                if (r[0].length >= e) return (0, C.truncate)(r[0], e);
                for (var n = r.length; n > 0; n--) {
                    var c = r.slice(0, n).join(", ");
                    if (!(c.length > e)) return n === r.length ? c : (0, C.truncate)(c, e)
                }
                return ""
            }

            function p(t) {
                var e = new Map;
                return a(t, e)
            }

            function a(t, e) {
                if ((0, P.isPlainObject)(t)) {
                    var r = e.get(t);
                    if (r !== void 0) return r;
                    var n = {};
                    e.set(t, n);
                    var c = !0,
                        T = !1,
                        S = void 0;
                    try {
                        for (var y = Object.keys(t)[Symbol.iterator](), O; !(c = (O = y.next()).done); c = !0) {
                            var A = O.value;
                            typeof t[A] != "undefined" && (n[A] = a(t[A], e))
                        }
                    } catch (z) {
                        T = !0, S = z
                    } finally {
                        try {
                            !c && y.return != null && y.return()
                        } finally {
                            if (T) throw S
                        }
                    }
                    return n
                }
                if (Array.isArray(t)) {
                    var j = e.get(t);
                    if (j !== void 0) return j;
                    var G = [];
                    return e.set(t, G), t.forEach(function(z) {
                        G.push(a(z, e))
                    }), G
                }
                return t
            }

            function i(t) {
                var e;
                switch (!0) {
                    case t == null:
                        e = new String(t);
                        break;
                    case ((typeof t == "undefined" ? "undefined" : h(t)) === "symbol" || (typeof t == "undefined" ? "undefined" : h(t)) === "bigint"):
                        e = Object(t);
                        break;
                    case (0, P.isPrimitive)(t):
                        e = new t.constructor(t);
                        break;
                    default:
                        e = t;
                        break
                }
                return e
            }
        },
        878208: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function d(g, l) {
                for (var s in l) Object.defineProperty(g, s, {
                    enumerable: !0,
                    get: l[s]
                })
            }
            d(b, {
                basename: function() {
                    return u
                },
                dirname: function() {
                    return E
                },
                isAbsolute: function() {
                    return _
                },
                join: function() {
                    return m
                },
                normalizePath: function() {
                    return h
                },
                relative: function() {
                    return I
                },
                resolve: function() {
                    return C
                }
            });

            function D(g, l) {
                for (var s = 0, v = g.length - 1; v >= 0; v--) {
                    var o = g[v];
                    o === "." ? g.splice(v, 1) : o === ".." ? (g.splice(v, 1), s++) : s && (g.splice(v, 1), s--)
                }
                if (l)
                    for (; s--; s) g.unshift("..");
                return g
            }
            var f = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;

            function P(g) {
                var l = f.exec(g);
                return l ? l.slice(1) : []
            }

            function C() {
                for (var g = arguments.length, l = new Array(g), s = 0; s < g; s++) l[s] = arguments[s];
                for (var v = "", o = !1, p = l.length - 1; p >= -1 && !o; p--) {
                    var a = p >= 0 ? l[p] : "/";
                    !a || (v = "".concat(a, "/").concat(v), o = a.charAt(0) === "/")
                }
                return v = D(v.split("/").filter(function(i) {
                    return !!i
                }), !o).join("/"), (o ? "/" : "") + v || "."
            }

            function w(g) {
                for (var l = 0; l < g.length && g[l] === ""; l++);
                for (var s = g.length - 1; s >= 0 && g[s] === ""; s--);
                return l > s ? [] : g.slice(l, s - l + 1)
            }

            function I(g, l) {
                g = C(g).substr(1), l = C(l).substr(1);
                for (var s = w(g.split("/")), v = w(l.split("/")), o = Math.min(s.length, v.length), p = o, a = 0; a < o; a++)
                    if (s[a] !== v[a]) {
                        p = a;
                        break
                    }
                for (var i = [], t = p; t < s.length; t++) i.push("..");
                return i = i.concat(v.slice(p)), i.join("/")
            }

            function h(g) {
                var l = _(g),
                    s = g.substr(-1) === "/",
                    v = D(g.split("/").filter(function(o) {
                        return !!o
                    }), !l).join("/");
                return !v && !l && (v = "."), v && s && (v += "/"), (l ? "/" : "") + v
            }

            function _(g) {
                return g.charAt(0) === "/"
            }

            function m() {
                for (var g = arguments.length, l = new Array(g), s = 0; s < g; s++) l[s] = arguments[s];
                return h(l.join("/"))
            }

            function E(g) {
                var l = P(g),
                    s = l[0],
                    v = l[1];
                return !s && !v ? "." : (v && (v = v.substr(0, v.length - 1)), s + v)
            }

            function u(g, l) {
                var s = P(g)[2];
                return l && s.substr(l.length * -1) === l && (s = s.substr(0, s.length - l.length)), s
            }
        },
        214705: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), Object.defineProperty(b, "makePromiseBuffer", {
                enumerable: !0,
                get: function() {
                    return P
                }
            });
            var D = d(336186),
                f = d(726845);

            function P(C) {
                var w = function() {
                        return C === void 0 || m.length < C
                    },
                    I = function(u) {
                        return m.splice(m.indexOf(u), 1)[0]
                    },
                    h = function(u) {
                        if (!w()) return (0, f.rejectedSyncPromise)(new D.SentryError("Not adding Promise because buffer limit was reached."));
                        var g = u();
                        return m.indexOf(g) === -1 && m.push(g), g.then(function() {
                            return I(g)
                        }).then(null, function() {
                            return I(g).then(null, function() {})
                        }), g
                    },
                    _ = function(u) {
                        return new f.SyncPromise(function(g, l) {
                            var s = m.length;
                            if (!s) return g(!0);
                            var v = setTimeout(function() {
                                u && u > 0 && g(!1)
                            }, u);
                            m.forEach(function(o) {
                                (0, f.resolvedSyncPromise)(o).then(function() {
                                    --s || (clearTimeout(v), g(!0))
                                }, l)
                            })
                        })
                    },
                    m = [];
                return {
                    $: m,
                    add: h,
                    drain: _
                }
            }
        },
        147446: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function d(s, v) {
                for (var o in v) Object.defineProperty(s, o, {
                    enumerable: !0,
                    get: v[o]
                })
            }
            d(b, {
                DEFAULT_RETRY_AFTER: function() {
                    return m
                },
                disabledUntil: function() {
                    return u
                },
                isRateLimited: function() {
                    return g
                },
                parseRetryAfterHeader: function() {
                    return E
                },
                updateRateLimits: function() {
                    return l
                }
            });

            function D(s, v) {
                (v == null || v > s.length) && (v = s.length);
                for (var o = 0, p = new Array(v); o < v; o++) p[o] = s[o];
                return p
            }

            function f(s) {
                if (Array.isArray(s)) return s
            }

            function P(s, v, o) {
                return v in s ? Object.defineProperty(s, v, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : s[v] = o, s
            }

            function C(s, v) {
                var o = s == null ? null : typeof Symbol != "undefined" && s[Symbol.iterator] || s["@@iterator"];
                if (o != null) {
                    var p = [],
                        a = !0,
                        i = !1,
                        t, e;
                    try {
                        for (o = o.call(s); !(a = (t = o.next()).done) && (p.push(t.value), !(v && p.length === v)); a = !0);
                    } catch (r) {
                        i = !0, e = r
                    } finally {
                        try {
                            !a && o.return != null && o.return()
                        } finally {
                            if (i) throw e
                        }
                    }
                    return p
                }
            }

            function w() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function I(s) {
                for (var v = 1; v < arguments.length; v++) {
                    var o = arguments[v] != null ? arguments[v] : {},
                        p = Object.keys(o);
                    typeof Object.getOwnPropertySymbols == "function" && (p = p.concat(Object.getOwnPropertySymbols(o).filter(function(a) {
                        return Object.getOwnPropertyDescriptor(o, a).enumerable
                    }))), p.forEach(function(a) {
                        P(s, a, o[a])
                    })
                }
                return s
            }

            function h(s, v) {
                return f(s) || C(s, v) || _(s, v) || w()
            }

            function _(s, v) {
                if (!!s) {
                    if (typeof s == "string") return D(s, v);
                    var o = Object.prototype.toString.call(s).slice(8, -1);
                    if (o === "Object" && s.constructor && (o = s.constructor.name), o === "Map" || o === "Set") return Array.from(o);
                    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return D(s, v)
                }
            }
            var m = 60 * 1e3;

            function E(s) {
                var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Date.now(),
                    o = parseInt("".concat(s), 10);
                if (!isNaN(o)) return o * 1e3;
                var p = Date.parse("".concat(s));
                return isNaN(p) ? m : p - v
            }

            function u(s, v) {
                return s[v] || s.all || 0
            }

            function g(s, v) {
                var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Date.now();
                return u(s, v) > o
            }

            function l(s, v) {
                var o = v.statusCode,
                    p = v.headers,
                    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Date.now(),
                    i = I({}, s),
                    t = p && p["x-sentry-rate-limits"],
                    e = p && p["retry-after"];
                if (t) {
                    var r = !0,
                        n = !1,
                        c = void 0;
                    try {
                        for (var T = t.trim().split(",")[Symbol.iterator](), S; !(r = (S = T.next()).done); r = !0) {
                            var y = S.value,
                                O = h(y.split(":", 2), 2),
                                A = O[0],
                                j = O[1],
                                G = parseInt(A, 10),
                                z = (isNaN(G) ? 60 : G) * 1e3;
                            if (!j) i.all = a + z;
                            else {
                                var $ = !0,
                                    W = !1,
                                    R = void 0;
                                try {
                                    for (var L = j.split(";")[Symbol.iterator](), k; !($ = (k = L.next()).done); $ = !0) {
                                        var x = k.value;
                                        i[x] = a + z
                                    }
                                } catch (U) {
                                    W = !0, R = U
                                } finally {
                                    try {
                                        !$ && L.return != null && L.return()
                                    } finally {
                                        if (W) throw R
                                    }
                                }
                            }
                        }
                    } catch (U) {
                        n = !0, c = U
                    } finally {
                        try {
                            !r && T.return != null && T.return()
                        } finally {
                            if (n) throw c
                        }
                    }
                } else e ? i.all = a + E(e, a) : o === 429 && (i.all = a + 60 * 1e3);
                return i
            }
        },
        775957: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(y, O) {
                for (var A in O) Object.defineProperty(y, A, {
                    enumerable: !0,
                    get: O[A]
                })
            }
            D(b, {
                addRequestDataToEvent: function() {
                    return T
                },
                addRequestDataToTransaction: function() {
                    return t
                },
                extractPathForTransaction: function() {
                    return e
                },
                extractRequestData: function() {
                    return c
                }
            });
            var f = d(335090),
                P = d(310837),
                C = d(947338),
                w = d(356800);

            function I(y, O) {
                (O == null || O > y.length) && (O = y.length);
                for (var A = 0, j = new Array(O); A < O; A++) j[A] = y[A];
                return j
            }

            function h(y) {
                if (Array.isArray(y)) return I(y)
            }

            function _(y, O, A) {
                return O in y ? Object.defineProperty(y, O, {
                    value: A,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : y[O] = A, y
            }

            function m(y) {
                if (typeof Symbol != "undefined" && y[Symbol.iterator] != null || y["@@iterator"] != null) return Array.from(y)
            }

            function E() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function u(y) {
                for (var O = 1; O < arguments.length; O++) {
                    var A = arguments[O] != null ? arguments[O] : {},
                        j = Object.keys(A);
                    typeof Object.getOwnPropertySymbols == "function" && (j = j.concat(Object.getOwnPropertySymbols(A).filter(function(G) {
                        return Object.getOwnPropertyDescriptor(A, G).enumerable
                    }))), j.forEach(function(G) {
                        _(y, G, A[G])
                    })
                }
                return y
            }

            function g(y, O) {
                var A = Object.keys(y);
                if (Object.getOwnPropertySymbols) {
                    var j = Object.getOwnPropertySymbols(y);
                    O && (j = j.filter(function(G) {
                        return Object.getOwnPropertyDescriptor(y, G).enumerable
                    })), A.push.apply(A, j)
                }
                return A
            }

            function l(y, O) {
                return O = O != null ? O : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(O)) : g(Object(O)).forEach(function(A) {
                    Object.defineProperty(y, A, Object.getOwnPropertyDescriptor(O, A))
                }), y
            }

            function s(y) {
                return h(y) || m(y) || o(y) || E()
            }
            var v = function(y) {
                return y && typeof Symbol != "undefined" && y.constructor === Symbol ? "symbol" : typeof y
            };

            function o(y, O) {
                if (!!y) {
                    if (typeof y == "string") return I(y, O);
                    var A = Object.prototype.toString.call(y).slice(8, -1);
                    if (A === "Object" && y.constructor && (A = y.constructor.name), A === "Map" || A === "Set") return Array.from(A);
                    if (A === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)) return I(y, O)
                }
            }
            var p = {
                    ip: !1,
                    request: !0,
                    transaction: !0,
                    user: !0
                },
                a = ["cookies", "data", "headers", "method", "query_string", "url"],
                i = ["id", "username", "email"];

            function t(y, O, A) {
                if (!!y) {
                    if (!y.metadata.source || y.metadata.source === "url") {
                        var j;
                        (j = y).setName.apply(j, s(e(O, {
                            path: !0,
                            method: !0
                        })))
                    }
                    y.setData("url", O.originalUrl || O.url), O.baseUrl && y.setData("baseUrl", O.baseUrl), y.setData("query", S(O, A))
                }
            }

            function e(y) {
                var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    A = y.method && y.method.toUpperCase(),
                    j = "",
                    G = "url";
                O.customRoute || y.route ? (j = O.customRoute || "".concat(y.baseUrl || "").concat(y.route && y.route.path), G = "route") : (y.originalUrl || y.url) && (j = (0, w.stripUrlQueryAndFragment)(y.originalUrl || y.url || ""));
                var z = "";
                return O.method && A && (z += A), O.method && O.path && (z += " "), O.path && j && (z += j), [z, G]
            }

            function r(y, O) {
                switch (O) {
                    case "path":
                        return e(y, {
                            path: !0
                        })[0];
                    case "handler":
                        return y.route && y.route.stack && y.route.stack[0] && y.route.stack[0].name || "<anonymous>";
                    case "methodPath":
                    default:
                        return e(y, {
                            path: !0,
                            method: !0
                        })[0]
                }
            }

            function n(y, O) {
                var A = {},
                    j = Array.isArray(O) ? O : i;
                return j.forEach(function(G) {
                    y && G in y && (A[G] = y[G])
                }), A
            }

            function c(y, O) {
                var A = O || {},
                    j = A.include,
                    G = j === void 0 ? a : j,
                    z = A.deps,
                    $ = {},
                    W = y.headers || {},
                    R = y.method,
                    L = y.hostname || y.host || W.host || "<no host>",
                    k = y.protocol === "https" || y.socket && y.socket.encrypted ? "https" : "http",
                    x = y.originalUrl || y.url || "",
                    U = "".concat(k, "://").concat(L).concat(x);
                return G.forEach(function(M) {
                    switch (M) {
                        case "headers":
                            {
                                $.headers = W;
                                break
                            }
                        case "method":
                            {
                                $.method = R;
                                break
                            }
                        case "url":
                            {
                                $.url = U;
                                break
                            }
                        case "cookies":
                            {
                                $.cookies = y.cookies || W.cookie && z && z.cookie && z.cookie.parse(W.cookie) || {};
                                break
                            }
                        case "query_string":
                            {
                                $.query_string = S(y, z);
                                break
                            }
                        case "data":
                            {
                                if (R === "GET" || R === "HEAD") break;y.body !== void 0 && ($.data = (0, P.isString)(y.body) ? y.body : JSON.stringify((0, C.normalize)(y.body)));
                                break
                            }
                        default:
                            ({}).hasOwnProperty.call(y, M) && ($[M] = y[M])
                    }
                }), $
            }

            function T(y, O, A) {
                var j = u({}, p, (0, f._optionalChain)([A, "optionalAccess", function(W) {
                    return W.include
                }]));
                if (j.request) {
                    var G = Array.isArray(j.request) ? c(O, {
                        include: j.request,
                        deps: (0, f._optionalChain)([A, "optionalAccess", function(W) {
                            return W.deps
                        }])
                    }) : c(O, {
                        deps: (0, f._optionalChain)([A, "optionalAccess", function(W) {
                            return W.deps
                        }])
                    });
                    y.request = u({}, y.request, G)
                }
                if (j.user) {
                    var z = O.user && (0, P.isPlainObject)(O.user) ? n(O.user, j.user) : {};
                    Object.keys(z).length && (y.user = u({}, y.user, z))
                }
                if (j.ip) {
                    var $ = O.ip || O.socket && O.socket.remoteAddress;
                    $ && (y.user = l(u({}, y.user), {
                        ip_address: $
                    }))
                }
                return j.transaction && !y.transaction && (y.transaction = r(O, j.transaction)), y
            }

            function S(y, O) {
                var A = y.originalUrl || y.url || "";
                if (!!A) return A.startsWith("/") && (A = "http://dogs.are.great".concat(A)), y.query || (typeof URL == "undefined" ? "undefined" : v(URL)) !== void 0 && new URL(A).search.replace("?", "") || O && O.url && O.url.parse(A).query || void 0
            }
        },
        690627: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function d(C, w) {
                for (var I in w) Object.defineProperty(C, I, {
                    enumerable: !0,
                    get: w[I]
                })
            }
            d(b, {
                severityFromString: function() {
                    return f
                },
                severityLevelFromString: function() {
                    return P
                },
                validSeverityLevels: function() {
                    return D
                }
            });
            var D = ["fatal", "error", "warning", "log", "info", "debug"];

            function f(C) {
                return P(C)
            }

            function P(C) {
                return C === "warn" ? "warning" : D.includes(C) ? C : "log"
            }
        },
        839463: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(e, r) {
                for (var n in r) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: r[n]
                })
            }
            D(b, {
                createStackParser: function() {
                    return s
                },
                getFunctionName: function() {
                    return a
                },
                nodeStackLineParser: function() {
                    return t
                },
                stackParserFromStackParserOptions: function() {
                    return v
                },
                stripSentryFramesAndReverse: function() {
                    return o
                }
            });
            var f = d(335090);

            function P(e, r) {
                (r == null || r > e.length) && (r = e.length);
                for (var n = 0, c = new Array(r); n < r; n++) c[n] = e[n];
                return c
            }

            function C(e) {
                if (Array.isArray(e)) return P(e)
            }

            function w(e, r, n) {
                return r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n, e
            }

            function I(e) {
                if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
            }

            function h() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function _(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = arguments[r] != null ? arguments[r] : {},
                        c = Object.keys(n);
                    typeof Object.getOwnPropertySymbols == "function" && (c = c.concat(Object.getOwnPropertySymbols(n).filter(function(T) {
                        return Object.getOwnPropertyDescriptor(n, T).enumerable
                    }))), c.forEach(function(T) {
                        w(e, T, n[T])
                    })
                }
                return e
            }

            function m(e, r) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    r && (c = c.filter(function(T) {
                        return Object.getOwnPropertyDescriptor(e, T).enumerable
                    })), n.push.apply(n, c)
                }
                return n
            }

            function E(e, r) {
                return r = r != null ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                }), e
            }

            function u(e) {
                return C(e) || I(e) || g(e) || h()
            }

            function g(e, r) {
                if (!!e) {
                    if (typeof e == "string") return P(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(n);
                    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, r)
                }
            }
            var l = 50;

            function s() {
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                var c = r.sort(function(T, S) {
                    return T[0] - S[0]
                }).map(function(T) {
                    return T[1]
                });
                return function(T) {
                    var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                        y = [],
                        O = !0,
                        A = !1,
                        j = void 0;
                    try {
                        for (var G = T.split("\n").slice(S)[Symbol.iterator](), z; !(O = (z = G.next()).done); O = !0) {
                            var $ = z.value,
                                W = $.replace(/\(error: (.*)\)/, "$1"),
                                R = !0,
                                L = !1,
                                k = void 0;
                            try {
                                for (var x = c[Symbol.iterator](), U; !(R = (U = x.next()).done); R = !0) {
                                    var M = U.value,
                                        H = M(W);
                                    if (H) {
                                        y.push(H);
                                        break
                                    }
                                }
                            } catch (N) {
                                L = !0, k = N
                            } finally {
                                try {
                                    !R && x.return != null && x.return()
                                } finally {
                                    if (L) throw k
                                }
                            }
                        }
                    } catch (N) {
                        A = !0, j = N
                    } finally {
                        try {
                            !O && G.return != null && G.return()
                        } finally {
                            if (A) throw j
                        }
                    }
                    return o(y)
                }
            }

            function v(e) {
                return Array.isArray(e) ? s.apply(void 0, u(e)) : e
            }

            function o(e) {
                if (!e.length) return [];
                var r = e,
                    n = r[0].function || "",
                    c = r[r.length - 1].function || "";
                return (n.indexOf("captureMessage") !== -1 || n.indexOf("captureException") !== -1) && (r = r.slice(1)), c.indexOf("sentryWrapped") !== -1 && (r = r.slice(0, -1)), r.slice(0, l).map(function(T) {
                    return E(_({}, T), {
                        filename: T.filename || r[0].filename,
                        function: T.function || "?"
                    })
                }).reverse()
            }
            var p = "<anonymous>";

            function a(e) {
                try {
                    return !e || typeof e != "function" ? p : e.name || p
                } catch (r) {
                    return p
                }
            }

            function i(e) {
                var r = /^\s*[-]{4,}$/,
                    n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
                return function(c) {
                    if (c.match(r)) return {
                        filename: c
                    };
                    var T = c.match(n);
                    if (!!T) {
                        var S, y, O, A, j;
                        if (T[1]) {
                            O = T[1];
                            var G = O.lastIndexOf(".");
                            if (O[G - 1] === "." && G--, G > 0) {
                                S = O.substr(0, G), y = O.substr(G + 1);
                                var z = S.indexOf(".Module");
                                z > 0 && (O = O.substr(z + 1), S = S.substr(0, z))
                            }
                            A = void 0
                        }
                        y && (A = S, j = y), y === "<anonymous>" && (j = void 0, O = void 0), O === void 0 && (j = j || "<anonymous>", O = A ? "".concat(A, ".").concat(j) : j);
                        var $ = (0, f._optionalChain)([T, "access", function(k) {
                                return k[2]
                            }, "optionalAccess", function(k) {
                                return k.startsWith
                            }, "call", function(k) {
                                return k("file://")
                            }]) ? T[2].substr(7) : T[2],
                            W = T[5] === "native",
                            R = W || $ && !$.startsWith("/") && !$.startsWith(".") && $.indexOf(":\\") !== 1,
                            L = !R && $ !== void 0 && !$.includes("node_modules/");
                        return {
                            filename: $,
                            module: (0, f._optionalChain)([e, "optionalCall", function(k) {
                                return k($)
                            }]),
                            function: O,
                            lineno: parseInt(T[3], 10) || void 0,
                            colno: parseInt(T[4], 10) || void 0,
                            in_app: L
                        }
                    }
                }
            }

            function t(e) {
                return [90, i(e)]
            }
        },
        361846: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(m, E) {
                for (var u in E) Object.defineProperty(m, u, {
                    enumerable: !0,
                    get: E[u]
                })
            }
            D(b, {
                escapeStringForRegex: function() {
                    return _
                },
                isMatchingPattern: function() {
                    return I
                },
                safeJoin: function() {
                    return w
                },
                snipLine: function() {
                    return C
                },
                stringMatchesSomePattern: function() {
                    return h
                },
                truncate: function() {
                    return P
                }
            });
            var f = d(310837);

            function P(m) {
                var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                return typeof m != "string" || E === 0 || m.length <= E ? m : "".concat(m.substr(0, E), "...")
            }

            function C(m, E) {
                var u = m,
                    g = u.length;
                if (g <= 150) return u;
                E > g && (E = g);
                var l = Math.max(E - 60, 0);
                l < 5 && (l = 0);
                var s = Math.min(l + 140, g);
                return s > g - 5 && (s = g), s === g && (l = Math.max(s - 140, 0)), u = u.slice(l, s), l > 0 && (u = "'{snip} ".concat(u)), s < g && (u += " {snip}"), u
            }

            function w(m, E) {
                if (!Array.isArray(m)) return "";
                for (var u = [], g = 0; g < m.length; g++) {
                    var l = m[g];
                    try {
                        u.push(String(l))
                    } catch (s) {
                        u.push("[value cannot be serialized]")
                    }
                }
                return u.join(E)
            }

            function I(m, E) {
                var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                return (0, f.isString)(m) ? (0, f.isRegExp)(E) ? E.test(m) : (0, f.isString)(E) ? u ? m === E : m.includes(E) : !1 : !1
            }

            function h(m) {
                var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
                    u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                return E.some(function(g) {
                    return I(m, g, u)
                })
            }

            function _(m) {
                return m.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
            }
        },
        374738: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(s, v) {
                for (var o in v) Object.defineProperty(s, o, {
                    enumerable: !0,
                    get: v[o]
                })
            }
            D(b, {
                isNativeFetch: function() {
                    return m
                },
                supportsDOMError: function() {
                    return I
                },
                supportsDOMException: function() {
                    return h
                },
                supportsErrorEvent: function() {
                    return w
                },
                supportsFetch: function() {
                    return _
                },
                supportsHistory: function() {
                    return l
                },
                supportsNativeFetch: function() {
                    return E
                },
                supportsReferrerPolicy: function() {
                    return g
                },
                supportsReportingObserver: function() {
                    return u
                }
            });
            var f = d(563975),
                P = d(462463),
                C = (0, P.getGlobalObject)();

            function w() {
                try {
                    return new ErrorEvent(""), !0
                } catch (s) {
                    return !1
                }
            }

            function I() {
                try {
                    return new DOMError(""), !0
                } catch (s) {
                    return !1
                }
            }

            function h() {
                try {
                    return new DOMException(""), !0
                } catch (s) {
                    return !1
                }
            }

            function _() {
                if (!("fetch" in C)) return !1;
                try {
                    return new Headers, new Request("http://www.example.com"), new Response, !0
                } catch (s) {
                    return !1
                }
            }

            function m(s) {
                return s && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(s.toString())
            }

            function E() {
                if (!_()) return !1;
                if (m(C.fetch)) return !0;
                var s = !1,
                    v = C.document;
                if (v && typeof v.createElement == "function") try {
                    var o = v.createElement("iframe");
                    o.hidden = !0, v.head.appendChild(o), o.contentWindow && o.contentWindow.fetch && (s = m(o.contentWindow.fetch)), v.head.removeChild(o)
                } catch (p) {
                    (typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__) && f.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", p)
                }
                return s
            }

            function u() {
                return "ReportingObserver" in C
            }

            function g() {
                if (!_()) return !1;
                try {
                    return new Request("_", {
                        referrerPolicy: "origin"
                    }), !0
                } catch (s) {
                    return !1
                }
            }

            function l() {
                var s = C.chrome,
                    v = s && s.app && s.app.runtime,
                    o = "history" in C && !!C.history.pushState && !!C.history.replaceState;
                return !v && o
            }
        },
        726845: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(_, m) {
                for (var E in m) Object.defineProperty(_, E, {
                    enumerable: !0,
                    get: m[E]
                })
            }
            D(b, {
                SyncPromise: function() {
                    return h
                },
                rejectedSyncPromise: function() {
                    return I
                },
                resolvedSyncPromise: function() {
                    return w
                }
            });
            var f = d(310837);

            function P(_, m) {
                if (!(_ instanceof m)) throw new TypeError("Cannot call a class as a function")
            }
            var C;
            (function(_) {
                var m = 0;
                _[_.PENDING = m] = "PENDING";
                var E = 1;
                _[_.RESOLVED = E] = "RESOLVED";
                var u = 2;
                _[_.REJECTED = u] = "REJECTED"
            })(C || (C = {}));

            function w(_) {
                return new h(function(m) {
                    m(_)
                })
            }

            function I(_) {
                return new h(function(m, E) {
                    E(_)
                })
            }
            var h = function() {
                "use strict";

                function _(E) {
                    P(this, _), _.prototype.__init.call(this), _.prototype.__init2.call(this), _.prototype.__init3.call(this), _.prototype.__init4.call(this), _.prototype.__init5.call(this), _.prototype.__init6.call(this);
                    try {
                        E(this._resolve, this._reject)
                    } catch (u) {
                        this._reject(u)
                    }
                }
                var m = _.prototype;
                return m.__init = function() {
                    this._state = C.PENDING
                }, m.__init2 = function() {
                    this._handlers = []
                }, m.then = function(u, g) {
                    var l = this;
                    return new _(function(s, v) {
                        l._handlers.push([!1, function(o) {
                            if (!u) s(o);
                            else try {
                                s(u(o))
                            } catch (p) {
                                v(p)
                            }
                        }, function(o) {
                            if (!g) v(o);
                            else try {
                                s(g(o))
                            } catch (p) {
                                v(p)
                            }
                        }]), l._executeHandlers()
                    })
                }, m.catch = function(u) {
                    return this.then(function(g) {
                        return g
                    }, u)
                }, m.finally = function(u) {
                    var g = this;
                    return new _(function(l, s) {
                        var v, o;
                        return g.then(function(p) {
                            o = !1, v = p, u && u()
                        }, function(p) {
                            o = !0, v = p, u && u()
                        }).then(function() {
                            if (o) {
                                s(v);
                                return
                            }
                            l(v)
                        })
                    })
                }, m.__init3 = function() {
                    var u = this;
                    this._resolve = function(g) {
                        u._setResult(C.RESOLVED, g)
                    }
                }, m.__init4 = function() {
                    var u = this;
                    this._reject = function(g) {
                        u._setResult(C.REJECTED, g)
                    }
                }, m.__init5 = function() {
                    var u = this;
                    this._setResult = function(g, l) {
                        if (u._state === C.PENDING) {
                            if ((0, f.isThenable)(l)) {
                                l.then(u._resolve, u._reject);
                                return
                            }
                            u._state = g, u._value = l, u._executeHandlers()
                        }
                    }
                }, m.__init6 = function() {
                    var u = this;
                    this._executeHandlers = function() {
                        if (u._state !== C.PENDING) {
                            var g = u._handlers.slice();
                            u._handlers = [], g.forEach(function(l) {
                                l[0] || (u._state === C.RESOLVED && l[1](u._value), u._state === C.REJECTED && l[2](u._value), l[0] = !0)
                            })
                        }
                    }
                }, _
            }()
        },
        153838: function(X, b, d) {
            "use strict";
            X = d.nmd(X), Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(o, p) {
                for (var a in p) Object.defineProperty(o, a, {
                    enumerable: !0,
                    get: p[a]
                })
            }
            D(b, {
                _browserPerformanceTimeOriginMode: function() {
                    return s
                },
                browserPerformanceTimeOrigin: function() {
                    return v
                },
                dateTimestampInSeconds: function() {
                    return E
                },
                timestampInSeconds: function() {
                    return u
                },
                timestampWithMs: function() {
                    return g
                },
                usingPerformanceAPI: function() {
                    return l
                }
            });
            var f = d(116094),
                P = d(462463),
                C = (0, P.getGlobalObject)(),
                w = {
                    nowSeconds: function() {
                        return Date.now() / 1e3
                    }
                };

            function I() {
                var o = C.performance;
                if (!(!o || !o.now)) {
                    var p = Date.now() - o.now();
                    return {
                        now: function() {
                            return o.now()
                        },
                        timeOrigin: p
                    }
                }
            }

            function h() {
                try {
                    var o = (0, f.dynamicRequire)(X, "perf_hooks");
                    return o.performance
                } catch (p) {
                    return
                }
            }
            var _ = (0, f.isNodeEnv)() ? h() : I(),
                m = _ === void 0 ? w : {
                    nowSeconds: function() {
                        return (_.timeOrigin + _.now()) / 1e3
                    }
                },
                E = w.nowSeconds.bind(w),
                u = m.nowSeconds.bind(m),
                g = u,
                l = _ !== void 0,
                s, v = function() {
                    var o = C.performance;
                    if (!o || !o.now) {
                        s = "none";
                        return
                    }
                    var p = 3600 * 1e3,
                        a = o.now(),
                        i = Date.now(),
                        t = o.timeOrigin ? Math.abs(o.timeOrigin + a - i) : p,
                        e = t < p,
                        r = o.timing && o.timing.navigationStart,
                        n = typeof r == "number",
                        c = n ? Math.abs(r + a - i) : p,
                        T = c < p;
                    return e || T ? t <= c ? (s = "timeOrigin", o.timeOrigin) : (s = "navigationStart", r) : (s = "dateNow", i)
                }()
        },
        676145: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function d(P, C) {
                for (var w in C) Object.defineProperty(P, w, {
                    enumerable: !0,
                    get: C[w]
                })
            }
            d(b, {
                TRACEPARENT_REGEXP: function() {
                    return D
                },
                extractTraceparentData: function() {
                    return f
                }
            });
            var D = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

            function f(P) {
                var C = P.match(D);
                if (!(!P || !C)) {
                    var w;
                    return C[3] === "1" ? w = !0 : C[3] === "0" && (w = !1), {
                        traceId: C[1],
                        parentSampled: w,
                        parentSpanId: C[2]
                    }
                }
            }
        },
        356800: function(X, b) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function d(C, w) {
                for (var I in w) Object.defineProperty(C, I, {
                    enumerable: !0,
                    get: w[I]
                })
            }
            d(b, {
                getNumberOfUrlSegments: function() {
                    return P
                },
                parseUrl: function() {
                    return D
                },
                stripUrlQueryAndFragment: function() {
                    return f
                }
            });

            function D(C) {
                if (!C) return {};
                var w = C.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!w) return {};
                var I = w[6] || "",
                    h = w[8] || "";
                return {
                    host: w[4],
                    path: w[5],
                    protocol: w[2],
                    relative: w[5] + I + h
                }
            }

            function f(C) {
                return C.split(/[\?#]/, 1)[0]
            }

            function P(C) {
                return C.split(/\\?\//).filter(function(w) {
                    return w.length > 0 && w !== ","
                }).length
            }
        },
        462463: function(X, b, d) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });

            function D(I, h) {
                for (var _ in h) Object.defineProperty(I, _, {
                    enumerable: !0,
                    get: h[_]
                })
            }
            D(b, {
                GLOBAL_OBJ: function() {
                    return P
                },
                getGlobalObject: function() {
                    return C
                },
                getGlobalSingleton: function() {
                    return w
                }
            });

            function f(I) {
                return I && I.Math == Math ? I : void 0
            }
            var P = typeof globalThis == "object" && f(globalThis) || typeof window == "object" && f(window) || typeof self == "object" && f(self) || typeof d.g == "object" && f(d.g) || function() {
                return this
            }() || {};

            function C() {
                return P
            }

            function w(I, h, _) {
                var m = _ || P,
                    E = m.__SENTRY__ = m.__SENTRY__ || {},
                    u = E[I] || (E[I] = h());
                return u
            }
        },
        490762: function(X, b, d) {
            "use strict";

            function D(B, F) {
                (F == null || F > B.length) && (F = B.length);
                for (var Y = 0, V = new Array(F); Y < F; Y++) V[Y] = B[Y];
                return V
            }

            function f(B) {
                if (Array.isArray(B)) return B
            }

            function P(B) {
                if (Array.isArray(B)) return D(B)
            }

            function C(B, F) {
                return F != null && typeof Symbol != "undefined" && F[Symbol.hasInstance] ? !!F[Symbol.hasInstance](B) : B instanceof F
            }

            function w(B) {
                if (typeof Symbol != "undefined" && B[Symbol.iterator] != null || B["@@iterator"] != null) return Array.from(B)
            }

            function I(B, F) {
                var Y = B == null ? null : typeof Symbol != "undefined" && B[Symbol.iterator] || B["@@iterator"];
                if (Y != null) {
                    var V = [],
                        Z = !0,
                        oe = !1,
                        re, se;
                    try {
                        for (Y = Y.call(B); !(Z = (re = Y.next()).done) && (V.push(re.value), !(F && V.length === F)); Z = !0);
                    } catch (de) {
                        oe = !0, se = de
                    } finally {
                        try {
                            !Z && Y.return != null && Y.return()
                        } finally {
                            if (oe) throw se
                        }
                    }
                    return V
                }
            }

            function h() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function _() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function m(B, F) {
                return f(B) || I(B, F) || u(B, F) || h()
            }

            function E(B) {
                return P(B) || w(B) || u(B) || _()
            }

            function u(B, F) {
                if (!!B) {
                    if (typeof B == "string") return D(B, F);
                    var Y = Object.prototype.toString.call(B).slice(8, -1);
                    if (Y === "Object" && B.constructor && (Y = B.constructor.name), Y === "Map" || Y === "Set") return Array.from(Y);
                    if (Y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Y)) return D(B, F)
                }
            }
            var g = function(B, F) {
                    var Y, V, Z, oe, re = {
                        label: 0,
                        sent: function() {
                            if (Z[0] & 1) throw Z[1];
                            return Z[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return oe = {
                        next: se(0),
                        throw: se(1),
                        return: se(2)
                    }, typeof Symbol == "function" && (oe[Symbol.iterator] = function() {
                        return this
                    }), oe;

                    function se(ue) {
                        return function(ge) {
                            return de([ue, ge])
                        }
                    }

                    function de(ue) {
                        if (Y) throw new TypeError("Generator is already executing.");
                        for (; re;) try {
                            if (Y = 1, V && (Z = ue[0] & 2 ? V.return : ue[0] ? V.throw || ((Z = V.return) && Z.call(V), 0) : V.next) && !(Z = Z.call(V, ue[1])).done) return Z;
                            switch (V = 0, Z && (ue = [ue[0] & 2, Z.value]), ue[0]) {
                                case 0:
                                case 1:
                                    Z = ue;
                                    break;
                                case 4:
                                    return re.label++, {
                                        value: ue[1],
                                        done: !1
                                    };
                                case 5:
                                    re.label++, V = ue[1], ue = [0];
                                    continue;
                                case 7:
                                    ue = re.ops.pop(), re.trys.pop();
                                    continue;
                                default:
                                    if (Z = re.trys, !(Z = Z.length > 0 && Z[Z.length - 1]) && (ue[0] === 6 || ue[0] === 2)) {
                                        re = 0;
                                        continue
                                    }
                                    if (ue[0] === 3 && (!Z || ue[1] > Z[0] && ue[1] < Z[3])) {
                                        re.label = ue[1];
                                        break
                                    }
                                    if (ue[0] === 6 && re.label < Z[1]) {
                                        re.label = Z[1], Z = ue;
                                        break
                                    }
                                    if (Z && re.label < Z[2]) {
                                        re.label = Z[2], re.ops.push(ue);
                                        break
                                    }
                                    Z[2] && re.ops.pop(), re.trys.pop();
                                    continue
                            }
                            ue = F.call(B, re)
                        } catch (ge) {
                            ue = [6, ge], V = 0
                        } finally {
                            Y = Z = 0
                        }
                        if (ue[0] & 5) throw ue[1];
                        return {
                            value: ue[0] ? ue[1] : void 0,
                            done: !0
                        }
                    }
                },
                l = Object.defineProperty,
                s = Object.getOwnPropertyDescriptor,
                v = Object.getOwnPropertyNames,
                o = Object.getOwnPropertySymbols,
                p = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable,
                i = function(B, F, Y) {
                    return F in B ? l(B, F, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: Y
                    }) : B[F] = Y
                },
                t = function(B, F) {
                    for (var Y in F || (F = {})) p.call(F, Y) && i(B, Y, F[Y]);
                    var V = !0,
                        Z = !1,
                        oe = void 0;
                    if (o) try {
                        for (var re = o(F)[Symbol.iterator](), se; !(V = (se = re.next()).done); V = !0) {
                            var Y = se.value;
                            a.call(F, Y) && i(B, Y, F[Y])
                        }
                    } catch (de) {
                        Z = !0, oe = de
                    } finally {
                        try {
                            !V && re.return != null && re.return()
                        } finally {
                            if (Z) throw oe
                        }
                    }
                    return B
                },
                e = function(B, F) {
                    var Y = {};
                    for (var V in B) p.call(B, V) && F.indexOf(V) < 0 && (Y[V] = B[V]);
                    var Z = !0,
                        oe = !1,
                        re = void 0;
                    if (B != null && o) try {
                        for (var se = o(B)[Symbol.iterator](), de; !(Z = (de = se.next()).done); Z = !0) {
                            var V = de.value;
                            F.indexOf(V) < 0 && a.call(B, V) && (Y[V] = B[V])
                        }
                    } catch (ue) {
                        oe = !0, re = ue
                    } finally {
                        try {
                            !Z && se.return != null && se.return()
                        } finally {
                            if (oe) throw re
                        }
                    }
                    return Y
                },
                r = function(B, F) {
                    for (var Y in F) l(B, Y, {
                        get: F[Y],
                        enumerable: !0
                    })
                },
                n = function(B, F, Y, V) {
                    if (F && typeof F == "object" || typeof F == "function") {
                        var Z = !0,
                            oe = !1,
                            re = void 0;
                        try {
                            for (var se = function() {
                                    var ge = ue.value;
                                    !p.call(B, ge) && ge !== Y && l(B, ge, {
                                        get: function() {
                                            return F[ge]
                                        },
                                        enumerable: !(V = s(F, ge)) || V.enumerable
                                    })
                                }, de = v(F)[Symbol.iterator](), ue; !(Z = (ue = de.next()).done); Z = !0) se()
                        } catch (ge) {
                            oe = !0, re = ge
                        } finally {
                            try {
                                !Z && de.return != null && de.return()
                            } finally {
                                if (oe) throw re
                            }
                        }
                    }
                    return B
                },
                c = function(B) {
                    return n(l({}, "__esModule", {
                        value: !0
                    }), B)
                },
                T = function(B, F, Y) {
                    return new Promise(function(V, Z) {
                        var oe = function(de) {
                                try {
                                    se(Y.next(de))
                                } catch (ue) {
                                    Z(ue)
                                }
                            },
                            re = function(de) {
                                try {
                                    se(Y.throw(de))
                                } catch (ue) {
                                    Z(ue)
                                }
                            },
                            se = function(de) {
                                return de.done ? V(de.value) : Promise.resolve(de.value).then(oe, re)
                            };
                        se((Y = Y.apply(B, F)).next())
                    })
                },
                S = {};
            r(S, {
                RUM_PREFIX: function() {
                    return be
                },
                default: function() {
                    return jt
                },
                getCumulativeLayoutShift: function() {
                    return A
                },
                getDecodedBodySize: function() {
                    return q
                },
                getDomContentLoadedEventEnd: function() {
                    return ie
                },
                getDomContentLoadedEventStart: function() {
                    return ae
                },
                getDomainLookup: function() {
                    return ne
                },
                getEncodedBodySize: function() {
                    return ce
                },
                getFirstContentfulPaint: function() {
                    return pe
                },
                getFirstInputDelay: function() {
                    return le
                },
                getLargestContentfulPaint: function() {
                    return ye
                },
                getLoadEventEnd: function() {
                    return he
                },
                getLoadEventStart: function() {
                    return Se
                },
                getPerformanceMetrics: function() {
                    return Ae
                },
                getResponseStart: function() {
                    return Oe
                },
                getTcpConnection: function() {
                    return Ce
                },
                getTlsNegotiation: function() {
                    return Me
                },
                init: function() {
                    return Ye
                },
                mark: function() {
                    return ft
                },
                measure: function() {
                    return lt
                },
                trackEventsV2Factory: function() {
                    return Rt
                },
                trackLoadPerformance: function() {
                    return It
                },
                trackSqspImages: function() {
                    return Be
                }
            }), X.exports = c(S);
            var y = {};
            r(y, {
                getCumulativeLayoutShift: function() {
                    return A
                },
                getDecodedBodySize: function() {
                    return q
                },
                getDomContentLoadedEventEnd: function() {
                    return ie
                },
                getDomContentLoadedEventStart: function() {
                    return ae
                },
                getDomainLookup: function() {
                    return ne
                },
                getEncodedBodySize: function() {
                    return ce
                },
                getFirstContentfulPaint: function() {
                    return pe
                },
                getFirstInputDelay: function() {
                    return le
                },
                getLargestContentfulPaint: function() {
                    return ye
                },
                getLoadEventEnd: function() {
                    return he
                },
                getLoadEventStart: function() {
                    return Se
                },
                getResponseStart: function() {
                    return Oe
                },
                getTcpConnection: function() {
                    return Ce
                },
                getTlsNegotiation: function() {
                    return Me
                }
            });
            var O = d(114499),
                A = function(B) {
                    (0, O.onCLS)(function(F) {
                        var Y;
                        B({
                            cumulativeLayoutShift: (Y = F == null ? void 0 : F.value) != null ? Y : void 0
                        })
                    })
                },
                j = "/api/1/performance",
                G = "/records",
                z = "/settings",
                $ = "load",
                W = "visibilitychange",
                R = "SS_MID",
                L = "SS_ANALYTICS_ID",
                k = 3e4,
                x = 3e4,
                U = /(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i,
                M = function(B) {
                    return function() {
                        for (var F = arguments.length, Y = new Array(F), V = 0; V < F; V++) Y[V] = arguments[V];
                        return new Promise(function(Z, oe) {
                            try {
                                B.apply(void 0, [function(re) {
                                    Z(re)
                                }].concat(E(Y)))
                            } catch (re) {
                                oe(re)
                            }
                        })
                    }
                },
                H = function(B) {
                    return M(setTimeout)(B)
                },
                N = function() {
                    return M(function(B) {
                        var F = function(Y) {
                            (Y.type === "pagehide" || document.visibilityState === "hidden") && (B(Y), removeEventListener("visibilitychange", F, !0), removeEventListener("pagehide", F, !0))
                        };
                        window.addEventListener("visibilitychange", F, !0), window.addEventListener("pagehide", F, !0)
                    })()
                },
                J = function(B) {
                    document.readyState === "complete" ? window.setTimeout(B, 0) : window.addEventListener("pageshow", B, {
                        once: !0
                    })
                },
                Q = function() {
                    return M(J)
                },
                te = function() {
                    var B = {
                            entryType: "navigation",
                            startTime: 0
                        },
                        F = performance.timing;
                    for (var Y in F)
                        if (Y !== "navigationStart" && Y !== "toJSON") {
                            var V = Math.max(F[Y] - F.navigationStart, 0);
                            B[Y] = V
                        }
                    return B
                },
                ee = function(B) {
                    return T(void 0, null, function() {
                        var F, Y, V, Z;
                        return g(this, function(oe) {
                            switch (oe.label) {
                                case 0:
                                    return [4, Q()];
                                case 1:
                                    return oe.sent(), F = m(window.performance.getEntriesByType("navigation"), 1), Y = F[0], V = Y != null ? Y : te(), Z = V[B], typeof Z != "number" || Z < 0 || Z > 2147483647 ? [2] : [2, Math.round(Z)]
                            }
                        })
                    })
                },
                K = function(B, F) {
                    if (typeof B == "number" && typeof F == "number" && B >= F) return B - F
                },
                q = function(B) {
                    return ee("decodedBodySize").then(function(F) {
                        B({
                            decodedBodySize: F
                        })
                    })
                },
                ne = function(B) {
                    return Promise.all([ee("domainLookupEnd"), ee("domainLookupStart")]).then(function(F) {
                        var Y = m(F, 2),
                            V = Y[0],
                            Z = Y[1];
                        B({
                            domainLookup: K(V, Z)
                        })
                    })
                },
                ie = function(B) {
                    return ee("domContentLoadedEventEnd").then(function(F) {
                        B({
                            domContentLoadedEventEnd: F
                        })
                    })
                },
                ae = function(B) {
                    return ee("domContentLoadedEventStart").then(function(F) {
                        B({
                            domContentLoadedEventStart: F
                        })
                    })
                },
                ce = function(B) {
                    return ee("encodedBodySize").then(function(F) {
                        B({
                            encodedBodySize: F
                        })
                    })
                },
                fe = d(114499),
                pe = function(B) {
                    (0, fe.onFCP)(function(F) {
                        B({
                            firstContentfulPaint: F ? Math.round(F.value) : void 0
                        })
                    })
                },
                ve = d(114499),
                le = function(B) {
                    (0, ve.onFID)(function(F) {
                        B({
                            firstInputDelay: F ? Math.round(F.value) : void 0
                        })
                    })
                },
                me = d(114499),
                ye = function(B) {
                    (0, me.onLCP)(function(F) {
                        B({
                            largestContentfulPaint: F ? Math.round(F.value) : void 0
                        })
                    })
                },
                he = function(B) {
                    return ee("loadEventEnd").then(function(F) {
                        B({
                            loadEventEnd: F
                        })
                    })
                },
                Se = function(B) {
                    return ee("loadEventStart").then(function(F) {
                        B({
                            loadEventStart: F
                        })
                    })
                },
                Oe = function(B) {
                    return ee("responseStart").then(function(F) {
                        B({
                            responseStart: F
                        })
                    })
                },
                Ce = function(B) {
                    return Promise.all([ee("connectEnd"), ee("connectStart")]).then(function(F) {
                        var Y = m(F, 2),
                            V = Y[0],
                            Z = Y[1];
                        B({
                            tcpConnection: K(V, Z)
                        })
                    })
                },
                Me = function(B) {
                    return Promise.all([ee("connectEnd"), ee("secureConnectionStart")]).then(function(F) {
                        var Y = m(F, 2),
                            V = Y[0],
                            Z = Y[1];
                        B({
                            tlsNegotiation: K(V, Z)
                        })
                    })
                };

            function Ae(B) {
                var F = this;
                Object.values(y).forEach(function(Y) {
                    return T(F, null, function() {
                        var V, Z, oe;
                        return g(this, function(re) {
                            switch (re.label) {
                                case 0:
                                    return re.trys.push([0, 2, , 3]), [4, Y(B)];
                                case 1:
                                    return re.sent(), [3, 3];
                                case 2:
                                    return oe = re.sent(), (Z = (V = window == null ? void 0 : window.SQUARESPACE_SENTRY) == null ? void 0 : V.captureException) == null || Z.call(V, oe), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                })
            }
            var Ke = "4.8.0";

            function xe(B) {
                var F = new RegExp("(^| )".concat(B, "=([^;]+)")),
                    Y = document.cookie.match(F);
                return Y ? Y[2] : ""
            }

            function Ze() {
                return !!(window.PerformanceMeasure && window.PerformanceMark)
            }

            function Le() {
                if (!Object.prototype.hasOwnProperty.call(window, "PerformanceObserver")) return !1;
                try {
                    var B = new window.PerformanceObserver(function() {
                        return null
                    });
                    B.observe({
                        entryTypes: ["mark"]
                    }), B.disconnect()
                } catch (F) {
                    return !1
                }
                return !0
            }

            function Ue() {
                var B;
                return typeof((B = window.navigator) == null ? void 0 : B.sendBeacon) == "function" && !U.test(window.navigator.userAgent)
            }

            function qe() {
                var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    F, Y, V, Z, oe, re, se;
                return {
                    context: B,
                    analyticsId: xe(L),
                    marketingId: xe(R),
                    memberId: (V = (Y = (F = window.Static) == null ? void 0 : F.SQUARESPACE_CONTEXT) == null ? void 0 : Y.authenticatedAccount) == null ? void 0 : V.id,
                    version: Ke,
                    connection: {
                        downlink: (Z = navigator.connection) == null ? void 0 : Z.downlink,
                        effectiveType: (oe = navigator.connection) == null ? void 0 : oe.effectiveType,
                        rtt: (re = navigator.connection) == null ? void 0 : re.rtt,
                        saveData: (se = navigator.connection) == null ? void 0 : se.saveData
                    },
                    deliveryType: Ue() ? "beacon" : "xhr",
                    display: {
                        devicePixelRatio: window.devicePixelRatio,
                        screenHeight: window.screen.height,
                        screenWidth: window.screen.width,
                        viewportHeight: window.innerHeight,
                        viewportWidth: window.innerWidth
                    },
                    hardware: {
                        deviceMemory: navigator.deviceMemory,
                        hardwareConcurrency: navigator.hardwareConcurrency
                    },
                    hash: window.location.hash || "",
                    hostname: window.location.hostname || "",
                    pathname: window.location.pathname || "/"
                }
            }
            var et = function(B) {
                    return T(void 0, null, function() {
                        var F, Y;
                        return g(this, function(V) {
                            switch (V.label) {
                                case 0:
                                    return F = qe(B), Y = {}, Ae(function(Z) {
                                        Object.assign(Y, Z)
                                    }), [4, Promise.race([H(6e4), N()])];
                                case 1:
                                    return V.sent(), [2, t(t({}, F), Y)]
                            }
                        })
                    })
                },
                tt = function(B, F) {
                    return T(void 0, null, function() {
                        var Y;
                        return g(this, function(V) {
                            switch (V.label) {
                                case 0:
                                    return [4, et(F)];
                                case 1:
                                    return Y = V.sent(), B(Y, "page_speed"), [2]
                            }
                        })
                    })
                },
                nt = ["media-www.sqspcdn.com", "images.squarespace-cdn.com", "static1.squarespace.com"],
                rt = function(B) {
                    return nt.some(function(F) {
                        return B.includes(F)
                    })
                },
                it = function(B) {
                    return B.hasAttribute("data-loader") ? 2 : B.hasAttribute("data-src") ? 1 : 0
                },
                ot = function(B, F) {
                    var Y;
                    if (B.hasAttribute("data-image-resolution")) return Number((Y = B.getAttribute("data-image-resolution")) == null ? void 0 : Y.replace("w", ""));
                    var V = F.indexOf("format=");
                    return V !== -1 ? Number(F.slice(V + 7).replace(/w.*/, "")) : NaN
                },
                at = function(B, F, Y) {
                    if (Y === 1 && C(B, HTMLImageElement) && B.naturalHeight === 0) {
                        var V = document.querySelector('div[style*="'.concat(F, '"]'));
                        if (V) return V
                    }
                    return B
                },
                ut = function(B) {
                    if (C(B, HTMLImageElement)) {
                        var F = B.naturalHeight,
                            Y = B.naturalWidth,
                            V = B.width,
                            Z = B.height;
                        return {
                            naturalHeight: F,
                            naturalWidth: Y,
                            width: V,
                            height: Z
                        }
                    }
                    var oe = B.getBoundingClientRect(),
                        re = Math.floor(oe.width),
                        se = Math.floor(oe.height);
                    return {
                        naturalHeight: se,
                        naturalWidth: re
                    }
                },
                ct = function(B, F) {
                    return T(void 0, null, function() {
                        var Y, V, Z, oe, re, se, de, ue, ge, Ie, Pe, $e, je, Ve, De, we, Xe;
                        return g(this, function(Nt) {
                            Y = ot(F, B.name), V = it(F), Z = F.getAttribute("data-loader"), oe = B.toJSON(), re = oe.serverTiming, se = oe.workerTiming, de = e(oe, ["serverTiming", "workerTiming"]), ue = !0, ge = !1, Ie = void 0;
                            try {
                                for (Pe = Object.entries(de)[Symbol.iterator](); !(ue = ($e = Pe.next()).done); ue = !0) je = m($e.value, 2), Ve = je[0], De = je[1], typeof De == "number" && (de[Ve] = Math.floor(De))
                            } catch (Ne) {
                                ge = !0, Ie = Ne
                            } finally {
                                try {
                                    !ue && Pe.return != null && Pe.return()
                                } finally {
                                    if (ge) throw Ie
                                }
                            }
                            return we = at(F, B.name, V), Xe = ut(we), [2, new Promise(function(Ne) {
                                var Qe = new IntersectionObserver(function(Dt) {
                                    Dt.forEach(function(Te) {
                                        if (Te.target === we) return Qe.disconnect(), Ne(t(t({
                                            visibleOnLoad: Te.isIntersecting,
                                            observationTime: Math.floor(Te.time),
                                            intersectionRatio: Te.intersectionRatio,
                                            squarespaceSize: Y,
                                            imageType: V,
                                            imageLoaderType: Z
                                        }, Xe), de))
                                    })
                                });
                                Qe.observe(we)
                            })]
                        })
                    })
                },
                st = function(B) {
                    return T(void 0, [B], function(F) {
                        var Y, V, Z, oe, re;
                        return g(this, function(se) {
                            switch (se.label) {
                                case 0:
                                    return Y = F.resource, V = F.deliverMetrics, !(C(Y, PerformanceResourceTiming) && Y.initiatorType === "img") || !rt(Y.name) ? [2] : (Z = Y.name.replace(/\?.*/, ""), oe = Array.from(document.querySelectorAll('img[src="'.concat(Y.name, '"], img[data-src*="').concat(Z, '"], img[srcset*="').concat(Y.name, '"]'))), document.querySelectorAll('picture > source[srcset="'.concat(Y.name, '"]')).forEach(function(de) {
                                        var ue = de.parentElement;
                                        ue !== null && oe.push(ue)
                                    }), oe.length !== 1 ? [2] : [4, ct(Y, oe[0])]);
                                case 1:
                                    return re = se.sent(), V(re, "image"), [2]
                            }
                        })
                    })
                },
                Be = function(B) {
                    return T(void 0, null, function() {
                        var F, Y;
                        return g(this, function(V) {
                            return Le() ? (F = function(Z) {
                                return st({
                                    resource: Z,
                                    deliverMetrics: B
                                })
                            }, performance.getEntriesByType("resource").forEach(F), Y = new PerformanceObserver(function(Z) {
                                Z.getEntries().forEach(F)
                            }), Y.observe({
                                entryTypes: ["resource"]
                            }), [2]) : [2]
                        })
                    })
                },
                _e, Re = function(B) {
                    var F = B.spanName,
                        Y = B.tracer,
                        V = B.startTime,
                        Z = B.spanAttributes,
                        oe = Z === void 0 ? {} : Z;
                    _e === void 0 && (_e = new Map);
                    var re = Y.startSpan(F, {
                        startTime: V
                    });
                    re.setAttributes(oe), _e.set(F, re)
                },
                Fe = function(B) {
                    var F = B.spanName,
                        Y = B.spanAttributes,
                        V = Y === void 0 ? {} : Y;
                    if (!(_e === void 0 || !_e.has(F))) {
                        var Z = _e.get(F);
                        Z.setAttributes(V), Z.end(), _e.delete(F)
                    }
                },
                be = "rum-",
                ke = function(B) {
                    var F;
                    typeof((F = window == null ? void 0 : window.SQUARESPACE_SENTRY) == null ? void 0 : F.captureException) == "function" ? window.SQUARESPACE_SENTRY.captureException(B): console.warn("@sqs/rum-collector: user timing exception: ".concat(B))
                };

            function ft(B) {
                var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                try {
                    if (!Ge()) return;
                    var Y = be + B;
                    if (window.performance.clearMarks(Y), window.performance.mark(Y, {
                            detail: F.detail,
                            startTime: F.startTime
                        }), F.tracer !== void 0) {
                        var V = m(window.performance.getEntriesByName(Y, "mark").slice(-1), 1),
                            Z = V[0];
                        Re({
                            spanName: B,
                            tracer: F.tracer,
                            startTime: Z.startTime,
                            spanAttributes: F.spanAttributes
                        })
                    }
                } catch (oe) {
                    ke(oe)
                }
            }

            function lt(B) {
                var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    requireStart: !1
                };
                try {
                    if (!(Ge() && dt())) return;
                    var Y = be + B,
                        V = {
                            detail: F.detail,
                            duration: F.duration
                        };
                    if (F.start === void 0 ? V.start = Y : typeof F.start == "string" ? V.start = be + F.start : V.start = F.start, V.end = typeof F.end == "string" ? be + F.end : F.end, F.requireStart && (typeof V.start == "number" || window.performance.getEntriesByName(V.start, "mark").length === 0)) return;
                    if (F.tracer !== void 0) {
                        var Z = t({
                            measureName: Y
                        }, F.spanAttributes);
                        typeof V.start == "number" ? (Re({
                            spanName: Y,
                            tracer: F.tracer,
                            startTime: V.start
                        }), Fe({
                            spanName: Y,
                            spanAttributes: Z
                        })) : (window.performance.getEntriesByName(V.start, "mark").length === 0 && Re({
                            spanName: V.start,
                            tracer: F.tracer,
                            startTime: 0
                        }), Fe({
                            spanName: V.start,
                            spanAttributes: Z
                        }))
                    }
                    vt(Y, V);
                    var oe = pt(Y);
                    return oe
                } catch (re) {
                    ke(re)
                }
            }

            function dt() {
                return "performance" in window && "getEntries" in window.performance && "getEntriesByType" in window.performance && "getEntriesByName" in window.performance
            }

            function Ge() {
                return "mark" in window.performance && "measure" in window.performance
            }

            function pt(B) {
                var F = window.performance.getEntriesByName(B, "measure");
                return F[F.length - 1]
            }

            function vt(B, F) {
                try {
                    window.performance.measure(B, F)
                } catch (Z) {
                    var Y = typeof F.start == "string" ? F.start : B,
                        V = typeof F.end == "string" ? F.end : void 0;
                    try {
                        window.performance.measure(B, Y, V)
                    } catch (oe) {
                        if (!C(oe, DOMException)) throw oe;
                        try {
                            window.performance.measure(B, "navigationStart")
                        } catch (re) {
                            if (!C(re, DOMException)) throw re;
                            window.performance.measure(B)
                        }
                    }
                }
            }

            function mt(B) {
                return typeof B == "string" && B.substring(0, 4) === be
            }

            function gt(B) {
                var F = {};
                for (var Y in B) typeof B[Y] != "function" && (F[Y] = B[Y]);
                return F
            }
            var He = new Set,
                yt = function(B) {
                    if (!!Ze()) {
                        var F = function(V) {
                            var Z = V.map(gt);
                            Z.forEach(function(oe) {
                                if (!!mt(oe.name)) {
                                    var re = "".concat(oe.name, "|").concat(oe.duration);
                                    He.has(re) || (B(oe, "user"), He.add(re))
                                }
                            })
                        };
                        if (F(window.performance.getEntriesByType("measure")), Le()) {
                            var Y = new window.PerformanceObserver(function(V) {
                                return F(V.getEntries())
                            });
                            Y.observe({
                                entryTypes: ["measure"]
                            })
                        } else document.addEventListener(W, function() {
                            document.visibilityState === "hidden" && F(window.performance.getEntriesByType("measure"))
                        })
                    }
                },
                We, Ee = [],
                ht = function(B) {
                    Ee.push(B)
                };

            function _t(B, F) {
                if (!(Ue() && navigator.sendBeacon(B, F))) {
                    var Y = new XMLHttpRequest;
                    Y.open("POST", B, !0), Y.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), Y.send(F)
                }
            }

            function Je() {
                if (Ee.length) {
                    var B = JSON.stringify(Ee);
                    _t(j + G, B), Ee = []
                }
            }

            function bt() {
                window.addEventListener($, function() {
                    We = window.setTimeout(Je, x)
                }), document.addEventListener(W, function() {
                    document.visibilityState === "hidden" && (window.clearTimeout(We), Je())
                })
            }

            function St(B) {
                ht(t({
                    raw: !0
                }, B))
            }
            var Ot = function(B, F) {
                    return function(Y, V) {
                        var Z = {
                            app: B,
                            data: Y,
                            event: V,
                            pageLoadId: F,
                            ts: Date.now()
                        };
                        St(Z)
                    }
                },
                Et = function() {
                    return new Promise(function(B, F) {
                        var Y = new XMLHttpRequest;
                        Y.onreadystatechange = function() {
                            if (Y.readyState === XMLHttpRequest.DONE)
                                if (Y.status === 200) try {
                                    B(JSON.parse(Y.response))
                                } catch (V) {
                                    F(V)
                                } else Y.status !== 0 && F(new Error("XHR request DONE with unexpected status: ".concat(Y.status)))
                        }, Y.ontimeout = function() {
                            F(new Error("Metric settings request timeout"))
                        }, Y.open("GET", j + z, !0), Y.timeout = k, Y.send()
                    })
                },
                Pt = function(B) {
                    return function() {
                        for (var F = arguments.length, Y = new Array(F), V = 0; V < F; V++) Y[V] = arguments[V];
                        B && B.apply(void 0, E(Y))
                    }
                },
                wt = function(B) {
                    var F = {
                        appName: B.appName || "",
                        context: B.context || {},
                        enabled: typeof B.enabled == "boolean" ? B.enabled : !0,
                        captureException: Pt(B.captureException)
                    };
                    return F
                };

            function Ye(B) {
                return T(this, null, function() {
                    var F, Y, V, Z, oe;
                    return g(this, function(re) {
                        switch (re.label) {
                            case 0:
                                if (F = wt(B), !F.enabled) return [2];
                                Y = "", re.label = 1;
                            case 1:
                                return re.trys.push([1, 3, , 4]), [4, Et()];
                            case 2:
                                if (V = re.sent(), Y = V.pageLoadId, !Y) throw new Error("Unable to resolve pageLoadId");
                                return Z = Ot(F.appName, Y), tt(Z, F.context), yt(Z), Be(Z), bt(), [3, 4];
                            case 3:
                                return oe = re.sent(), F.captureException(oe, {
                                    pageLoadId: Y,
                                    parsedOptions: F
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }
            var Tt = {
                    action: "load",
                    actor: "user",
                    event_owner_team: "web_performance",
                    event_source: "web",
                    object_type: "website"
                },
                At = function() {
                    var B = /^qa\d+.sqsp.net/g,
                        F = /^stage.sqsp.net/g,
                        Y = /(dev.squarespace.net|localhost|127.0.0.1|0.0.0.0)/g,
                        V = window.location.hostname.substr(window.location.hostname.indexOf(".") + 1);
                    return F.test(V) || B.test(V) ? "staging" : Y.test(V) ? "dev" : "prod"
                },
                Rt = function(B) {
                    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At();
                    return new B({
                        customSchemaName: "Performance",
                        sourceEnvironment: F
                    }, Tt)
                },
                ze = Object.freeze({
                    cumulativeLayoutShift: "cumulative_layout_shift",
                    decodedBodySize: "decoded_body_size_bytes",
                    domContentLoadedEventEnd: "dom_content_loaded_event_end_ms",
                    domContentLoadedEventStart: "dom_content_loaded_event_start_ms",
                    domainLookup: "domain_lookup_ms",
                    encodedBodySize: "encoded_body_size_bytes",
                    firstContentfulPaint: "first_contentful_paint_ms",
                    firstInputDelay: "first_input_delay_ms",
                    largestContentfulPaint: "largest_contentful_paint_ms",
                    loadEventEnd: "load_event_end_ms",
                    loadEventStart: "load_event_start_ms",
                    responseStart: "response_start_ms",
                    tcpConnection: "tcp_connection_ms",
                    tlsNegotiation: "tls_negotiation_ms"
                }),
                It = function(B) {
                    return T(void 0, null, function() {
                        var F;
                        return g(this, function(Y) {
                            switch (Y.label) {
                                case 0:
                                    return F = {}, Ae(function(V) {
                                        Object.entries(V).forEach(function(Z) {
                                            var oe = m(Z, 2),
                                                re = oe[0],
                                                se = oe[1];
                                            Object.prototype.hasOwnProperty.call(ze, re) && (F[ze[re]] = se)
                                        })
                                    }), [4, Promise.race([H(6e4), N()])];
                                case 1:
                                    return Y.sent(), B(F), [2]
                            }
                        })
                    })
                };

            function jt() {
                for (var B = arguments.length, F = new Array(B), Y = 0; Y < B; Y++) F[Y] = arguments[Y];
                return console.warn("@sqs/rum-collector default export is deprecated. Use named export `init` instead."), Ye.apply(void 0, E(F))
            }
        },
        114499: function(X, b) {
            (function(d, D) {
                D(b)
            })(this, function(d) {
                "use strict";
                var D, f, P, C, w, I = -1,
                    h = function(K) {
                        addEventListener("pageshow", function(q) {
                            q.persisted && (I = q.timeStamp, K(q))
                        }, !0)
                    },
                    _ = function() {
                        return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
                    },
                    m = function() {
                        var K = _();
                        return K && K.activationStart || 0
                    },
                    E = function(K, q) {
                        var ne = _(),
                            ie = "navigate";
                        return I >= 0 ? ie = "back-forward-cache" : ne && (ie = document.prerendering || m() > 0 ? "prerender" : document.wasDiscarded ? "restore" : ne.type.replace(/_/g, "-")), {
                            name: K,
                            value: q === void 0 ? -1 : q,
                            rating: "good",
                            delta: 0,
                            entries: [],
                            id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                            navigationType: ie
                        }
                    },
                    u = function(K, q, ne) {
                        try {
                            if (PerformanceObserver.supportedEntryTypes.includes(K)) {
                                var ie = new PerformanceObserver(function(ae) {
                                    Promise.resolve().then(function() {
                                        q(ae.getEntries())
                                    })
                                });
                                return ie.observe(Object.assign({
                                    type: K,
                                    buffered: !0
                                }, ne || {})), ie
                            }
                        } catch (ae) {}
                    },
                    g = function(K, q) {
                        var ne = function ie(ae) {
                            ae.type !== "pagehide" && document.visibilityState !== "hidden" || (K(ae), q && (removeEventListener("visibilitychange", ie, !0), removeEventListener("pagehide", ie, !0)))
                        };
                        addEventListener("visibilitychange", ne, !0), addEventListener("pagehide", ne, !0)
                    },
                    l = function(K, q, ne, ie) {
                        var ae, ce;
                        return function(fe) {
                            q.value >= 0 && (fe || ie) && ((ce = q.value - (ae || 0)) || ae === void 0) && (ae = q.value, q.delta = ce, q.rating = function(pe, ve) {
                                return pe > ve[1] ? "poor" : pe > ve[0] ? "needs-improvement" : "good"
                            }(q.value, ne), K(q))
                        }
                    },
                    s = function(K) {
                        requestAnimationFrame(function() {
                            return requestAnimationFrame(function() {
                                return K()
                            })
                        })
                    },
                    v = function(K) {
                        document.prerendering ? addEventListener("prerenderingchange", function() {
                            return K()
                        }, !0) : K()
                    },
                    o = -1,
                    p = function() {
                        return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0
                    },
                    a = function(K) {
                        document.visibilityState === "hidden" && o > -1 && (o = K.type === "visibilitychange" ? K.timeStamp : 0, t())
                    },
                    i = function() {
                        addEventListener("visibilitychange", a, !0), addEventListener("prerenderingchange", a, !0)
                    },
                    t = function() {
                        removeEventListener("visibilitychange", a, !0), removeEventListener("prerenderingchange", a, !0)
                    },
                    e = function() {
                        return o < 0 && (o = p(), i(), h(function() {
                            setTimeout(function() {
                                o = p(), i()
                            }, 0)
                        })), {
                            get firstHiddenTime() {
                                return o
                            }
                        }
                    },
                    r = function(K, q) {
                        q = q || {}, v(function() {
                            var ne, ie = [1800, 3e3],
                                ae = e(),
                                ce = E("FCP"),
                                fe = u("paint", function(pe) {
                                    pe.forEach(function(ve) {
                                        ve.name === "first-contentful-paint" && (fe.disconnect(), ve.startTime < ae.firstHiddenTime && (ce.value = Math.max(ve.startTime - m(), 0), ce.entries.push(ve), ne(!0)))
                                    })
                                });
                            fe && (ne = l(K, ce, ie, q.reportAllChanges), h(function(pe) {
                                ce = E("FCP"), ne = l(K, ce, ie, q.reportAllChanges), s(function() {
                                    ce.value = performance.now() - pe.timeStamp, ne(!0)
                                })
                            }))
                        })
                    },
                    n = function(K, q) {
                        q = q || {}, v(function() {
                            var ne, ie = [.1, .25],
                                ae = E("CLS"),
                                ce = -1,
                                fe = 0,
                                pe = [],
                                ve = function(ye) {
                                    ce > -1 && K(ye)
                                },
                                le = function(ye) {
                                    ye.forEach(function(he) {
                                        if (!he.hadRecentInput) {
                                            var Se = pe[0],
                                                Oe = pe[pe.length - 1];
                                            fe && he.startTime - Oe.startTime < 1e3 && he.startTime - Se.startTime < 5e3 ? (fe += he.value, pe.push(he)) : (fe = he.value, pe = [he]), fe > ae.value && (ae.value = fe, ae.entries = pe, ne())
                                        }
                                    })
                                },
                                me = u("layout-shift", le);
                            me && (ne = l(ve, ae, ie, q.reportAllChanges), r(function(ye) {
                                ce = ye.value, ae.value < 0 && (ae.value = 0, ne())
                            }), g(function() {
                                le(me.takeRecords()), ne(!0)
                            }), h(function() {
                                fe = 0, ce = -1, ae = E("CLS", 0), ne = l(ve, ae, ie, q.reportAllChanges), s(function() {
                                    return ne()
                                })
                            }))
                        })
                    },
                    c = {
                        passive: !0,
                        capture: !0
                    },
                    T = new Date,
                    S = function(K, q) {
                        D || (D = q, f = K, P = new Date, A(removeEventListener), y())
                    },
                    y = function() {
                        if (f >= 0 && f < P - T) {
                            var K = {
                                entryType: "first-input",
                                name: D.type,
                                target: D.target,
                                cancelable: D.cancelable,
                                startTime: D.timeStamp,
                                processingStart: D.timeStamp + f
                            };
                            C.forEach(function(q) {
                                q(K)
                            }), C = []
                        }
                    },
                    O = function(K) {
                        if (K.cancelable) {
                            var q = (K.timeStamp > 1e12 ? new Date : performance.now()) - K.timeStamp;
                            K.type == "pointerdown" ? function(ne, ie) {
                                var ae = function() {
                                        S(ne, ie), fe()
                                    },
                                    ce = function() {
                                        fe()
                                    },
                                    fe = function() {
                                        removeEventListener("pointerup", ae, c), removeEventListener("pointercancel", ce, c)
                                    };
                                addEventListener("pointerup", ae, c), addEventListener("pointercancel", ce, c)
                            }(q, K) : S(q, K)
                        }
                    },
                    A = function(K) {
                        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(q) {
                            return K(q, O, c)
                        })
                    },
                    j = function(K, q) {
                        q = q || {}, v(function() {
                            var ne, ie = [100, 300],
                                ae = e(),
                                ce = E("FID"),
                                fe = function(le) {
                                    le.startTime < ae.firstHiddenTime && (ce.value = le.processingStart - le.startTime, ce.entries.push(le), ne(!0))
                                },
                                pe = function(le) {
                                    le.forEach(fe)
                                },
                                ve = u("first-input", pe);
                            ne = l(K, ce, ie, q.reportAllChanges), ve && g(function() {
                                pe(ve.takeRecords()), ve.disconnect()
                            }, !0), ve && h(function() {
                                var le;
                                ce = E("FID"), ne = l(K, ce, ie, q.reportAllChanges), C = [], f = -1, D = null, A(addEventListener), le = fe, C.push(le), y()
                            })
                        })
                    },
                    G = 0,
                    z = 1 / 0,
                    $ = 0,
                    W = function(K) {
                        K.forEach(function(q) {
                            q.interactionId && (z = Math.min(z, q.interactionId), $ = Math.max($, q.interactionId), G = $ ? ($ - z) / 7 + 1 : 0)
                        })
                    },
                    R = function() {
                        return w ? G : performance.interactionCount || 0
                    },
                    L = function() {
                        "interactionCount" in performance || w || (w = u("event", W, {
                            type: "event",
                            buffered: !0,
                            durationThreshold: 0
                        }))
                    },
                    k = 0,
                    x = function() {
                        return R() - k
                    },
                    U = [],
                    M = {},
                    H = function(K) {
                        var q = U[U.length - 1],
                            ne = M[K.interactionId];
                        if (ne || U.length < 10 || K.duration > q.latency) {
                            if (ne) ne.entries.push(K), ne.latency = Math.max(ne.latency, K.duration);
                            else {
                                var ie = {
                                    id: K.interactionId,
                                    latency: K.duration,
                                    entries: [K]
                                };
                                M[ie.id] = ie, U.push(ie)
                            }
                            U.sort(function(ae, ce) {
                                return ce.latency - ae.latency
                            }), U.splice(10).forEach(function(ae) {
                                delete M[ae.id]
                            })
                        }
                    },
                    N = function(K, q) {
                        q = q || {}, v(function() {
                            var ne = [200, 500];
                            L();
                            var ie, ae = E("INP"),
                                ce = function(pe) {
                                    pe.forEach(function(me) {
                                        me.interactionId && H(me), me.entryType === "first-input" && !U.some(function(ye) {
                                            return ye.entries.some(function(he) {
                                                return me.duration === he.duration && me.startTime === he.startTime
                                            })
                                        }) && H(me)
                                    });
                                    var ve, le = (ve = Math.min(U.length - 1, Math.floor(x() / 50)), U[ve]);
                                    le && le.latency !== ae.value && (ae.value = le.latency, ae.entries = le.entries, ie())
                                },
                                fe = u("event", ce, {
                                    durationThreshold: q.durationThreshold || 40
                                });
                            ie = l(K, ae, ne, q.reportAllChanges), fe && (fe.observe({
                                type: "first-input",
                                buffered: !0
                            }), g(function() {
                                ce(fe.takeRecords()), ae.value < 0 && x() > 0 && (ae.value = 0, ae.entries = []), ie(!0)
                            }), h(function() {
                                U = [], k = R(), ae = E("INP"), ie = l(K, ae, ne, q.reportAllChanges)
                            }))
                        })
                    },
                    J = {},
                    Q = function(K, q) {
                        q = q || {}, v(function() {
                            var ne, ie = [2500, 4e3],
                                ae = e(),
                                ce = E("LCP"),
                                fe = function(le) {
                                    var me = le[le.length - 1];
                                    if (me) {
                                        var ye = Math.max(me.startTime - m(), 0);
                                        ye < ae.firstHiddenTime && (ce.value = ye, ce.entries = [me], ne())
                                    }
                                },
                                pe = u("largest-contentful-paint", fe);
                            if (pe) {
                                ne = l(K, ce, ie, q.reportAllChanges);
                                var ve = function() {
                                    J[ce.id] || (fe(pe.takeRecords()), pe.disconnect(), J[ce.id] = !0, ne(!0))
                                };
                                ["keydown", "click"].forEach(function(le) {
                                    addEventListener(le, ve, {
                                        once: !0,
                                        capture: !0
                                    })
                                }), g(ve, !0), h(function(le) {
                                    ce = E("LCP"), ne = l(K, ce, ie, q.reportAllChanges), s(function() {
                                        ce.value = performance.now() - le.timeStamp, J[ce.id] = !0, ne(!0)
                                    })
                                })
                            }
                        })
                    },
                    te = function K(q) {
                        document.prerendering ? v(function() {
                            return K(q)
                        }) : document.readyState !== "complete" ? addEventListener("load", function() {
                            return K(q)
                        }, !0) : setTimeout(q, 0)
                    },
                    ee = function(K, q) {
                        q = q || {};
                        var ne = [800, 1800],
                            ie = E("TTFB"),
                            ae = l(K, ie, ne, q.reportAllChanges);
                        te(function() {
                            var ce = _();
                            if (ce) {
                                var fe = ce.responseStart;
                                if (fe <= 0 || fe > performance.now()) return;
                                ie.value = Math.max(fe - m(), 0), ie.entries = [ce], ae(!0), h(function() {
                                    ie = E("TTFB", 0), (ae = l(K, ie, ne, q.reportAllChanges))(!0)
                                })
                            }
                        })
                    };
                d.getCLS = n, d.getFCP = r, d.getFID = j, d.getINP = N, d.getLCP = Q, d.getTTFB = ee, d.onCLS = n, d.onFCP = r, d.onFID = j, d.onINP = N, d.onLCP = Q, d.onTTFB = ee, Object.defineProperty(d, "__esModule", {
                    value: !0
                })
            })
        }
    },
    function(X) {
        var b = function(D) {
                return X(X.s = D)
            },
            d = b(395640)
    }
]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/performance-08fb9aaf317c28c6223c1-min.en-US.js.map