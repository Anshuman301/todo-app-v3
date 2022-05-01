// build/snowpack/pkg/common/index-4259e28f.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = Symbol.for("react.element");
var n = Symbol.for("react.portal");
var p = Symbol.for("react.fragment");
var q = Symbol.for("react.strict_mode");
var r = Symbol.for("react.profiler");
var t = Symbol.for("react.provider");
var u = Symbol.for("react.context");
var v = Symbol.for("react.forward_ref");
var w = Symbol.for("react.suspense");
var x = Symbol.for("react.memo");
var y = Symbol.for("react.lazy");
var z = Symbol.iterator;
function A(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = z && a2[z] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var B = {isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
}};
var C = Object.assign;
var D = {};
function E(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D;
  this.updater = e2 || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function(a2, b2) {
  if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F() {
}
F.prototype = E.prototype;
function G(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D;
  this.updater = e2 || B;
}
var H = G.prototype = new F();
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = true;
var I = Array.isArray;
var J = Object.prototype.hasOwnProperty;
var K = {current: null};
var L = {key: true, ref: true, __self: true, __source: true};
function M(a2, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (b2 != null)
    for (d2 in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k2 = "" + b2.key), b2)
      J.call(b2, d2) && !L.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (g2 === 1)
    c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps)
    for (d2 in g2 = a2.defaultProps, g2)
      c2[d2] === void 0 && (c2[d2] = g2[d2]);
  return {$$typeof: l, type: a2, key: k2, ref: h2, props: c2, _owner: K.current};
}
function N(a2, b2) {
  return {$$typeof: l, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner};
}
function O(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === l;
}
function escape(a2) {
  var b2 = {"=": "=0", ":": "=2"};
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P = /\/+/g;
function Q(a2, b2) {
  return typeof a2 === "object" && a2 !== null && a2.key != null ? escape("" + a2.key) : b2.toString(36);
}
function R(a2, b2, e2, d2, c2) {
  var k2 = typeof a2;
  if (k2 === "undefined" || k2 === "boolean")
    a2 = null;
  var h2 = false;
  if (a2 === null)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l:
          case n:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, c2 = c2(h2), a2 = d2 === "" ? "." + Q(h2, 0) : d2, I(c2) ? (e2 = "", a2 != null && (e2 = a2.replace(P, "$&/") + "/"), R(c2, b2, e2, "", function(a3) {
      return a3;
    })) : c2 != null && (O(c2) && (c2 = N(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d2 = d2 === "" ? "." : d2 + ":";
  if (I(a2))
    for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d2 + Q(k2, g2);
      h2 += R(k2, b2, e2, f2, c2);
    }
  else if (f2 = A(a2), typeof f2 === "function")
    for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
      k2 = k2.value, f2 = d2 + Q(k2, g2++), h2 += R(k2, b2, e2, f2, c2);
  else if (k2 === "object")
    throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + (b2 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S(a2, b2, e2) {
  if (a2 == null)
    return a2;
  var d2 = [], c2 = 0;
  R(a2, d2, "", "", function(a3) {
    return b2.call(e2, a3, c2++);
  });
  return d2;
}
function T(a2) {
  if (a2._status === -1) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (a2._status === 0 || a2._status === -1)
        a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (a2._status === 0 || a2._status === -1)
        a2._status = 2, a2._result = b3;
    });
    a2._status === -1 && (a2._status = 0, a2._result = b2);
  }
  if (a2._status === 1)
    return a2._result.default;
  throw a2._result;
}
var U = {current: null};
var V = {transition: null};
var W = {ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K};
var Children = {map: S, forEach: function(a2, b2, e2) {
  S(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O(a2))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
}};
var Component = E;
var Fragment = p;
var Profiler = r;
var PureComponent = G;
var StrictMode = q;
var Suspense = w;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
var cloneElement = function(a2, b2, e2) {
  if (a2 === null || a2 === void 0)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d2 = C({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (b2 != null) {
    b2.ref !== void 0 && (k2 = b2.ref, h2 = K.current);
    b2.key !== void 0 && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps)
      var g2 = a2.type.defaultProps;
    for (f2 in b2)
      J.call(b2, f2) && !L.hasOwnProperty(f2) && (d2[f2] = b2[f2] === void 0 && g2 !== void 0 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (f2 === 1)
    d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return {$$typeof: l, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2};
};
var createContext = function(a2) {
  a2 = {$$typeof: u, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null};
  a2.Provider = {$$typeof: t, _context: a2};
  return a2.Consumer = a2;
};
var createElement = M;
var createFactory = function(a2) {
  var b2 = M.bind(null, a2);
  b2.type = a2;
  return b2;
};
var createRef = function() {
  return {current: null};
};
var forwardRef = function(a2) {
  return {$$typeof: v, render: a2};
};
var isValidElement = O;
var lazy = function(a2) {
  return {$$typeof: y, _payload: {_status: -1, _result: a2}, _init: T};
};
var memo = function(a2, b2) {
  return {$$typeof: x, type: a2, compare: b2 === void 0 ? null : b2};
};
var startTransition = function(a2) {
  var b2 = V.transition;
  V.transition = {};
  try {
    a2();
  } finally {
    V.transition = b2;
  }
};
var unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
var useCallback = function(a2, b2) {
  return U.current.useCallback(a2, b2);
};
var useContext = function(a2) {
  return U.current.useContext(a2);
};
var useDebugValue = function() {
};
var useDeferredValue = function(a2) {
  return U.current.useDeferredValue(a2);
};
var useEffect = function(a2, b2) {
  return U.current.useEffect(a2, b2);
};
var useId = function() {
  return U.current.useId();
};
var useImperativeHandle = function(a2, b2, e2) {
  return U.current.useImperativeHandle(a2, b2, e2);
};
var useInsertionEffect = function(a2, b2) {
  return U.current.useInsertionEffect(a2, b2);
};
var useLayoutEffect = function(a2, b2) {
  return U.current.useLayoutEffect(a2, b2);
};
var useMemo = function(a2, b2) {
  return U.current.useMemo(a2, b2);
};
var useReducer = function(a2, b2, e2) {
  return U.current.useReducer(a2, b2, e2);
};
var useRef = function(a2) {
  return U.current.useRef(a2);
};
var useState = function(a2) {
  return U.current.useState(a2);
};
var useSyncExternalStore = function(a2, b2, e2) {
  return U.current.useSyncExternalStore(a2, b2, e2);
};
var useTransition = function() {
  return U.current.useTransition();
};
var version = "18.1.0";
var react_production_min = {
  Children,
  Component,
  Fragment,
  Profiler,
  PureComponent,
  StrictMode,
  Suspense,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  cloneElement,
  createContext,
  createElement,
  createFactory,
  createRef,
  forwardRef,
  isValidElement,
  lazy,
  memo,
  startTransition,
  unstable_act,
  useCallback,
  useContext,
  useDebugValue,
  useDeferredValue,
  useEffect,
  useId,
  useImperativeHandle,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
  useTransition,
  version
};
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});
var React = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), react, {
  default: react
}));

// build/snowpack/pkg/common/index-60f23bc9.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a:
      for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (0 < g2(e2, b2))
          a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function h2(a2) {
    return a2.length === 0 ? null : a2[0];
  }
  function k2(a2) {
    if (a2.length === 0)
      return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a:
        for (var d2 = 0, e2 = a2.length, w3 = e2 >>> 1; d2 < w3; ) {
          var m2 = 2 * (d2 + 1) - 1, C4 = a2[m2], n3 = m2 + 1, x3 = a2[n3];
          if (0 > g2(C4, c2))
            n3 < e2 && 0 > g2(x3, C4) ? (a2[d2] = x3, a2[n3] = c2, d2 = n3) : (a2[d2] = C4, a2[m2] = c2, d2 = m2);
          else if (n3 < e2 && 0 > g2(x3, c2))
            a2[d2] = x3, a2[n3] = c2, d2 = n3;
          else
            break a;
        }
    }
    return b2;
  }
  function g2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return c2 !== 0 ? c2 : a2.id - b2.id;
  }
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l3 = performance;
    exports.unstable_now = function() {
      return l3.now();
    };
  } else {
    var p4 = Date, q3 = p4.now();
    exports.unstable_now = function() {
      return p4.now() - q3;
    };
  }
  var r3 = [], t4 = [], u2 = 1, v3 = null, y3 = 3, z4 = false, A4 = false, B4 = false, D4 = typeof setTimeout === "function" ? setTimeout : null, E4 = typeof clearTimeout === "function" ? clearTimeout : null, F3 = typeof setImmediate !== "undefined" ? setImmediate : null;
  typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G4(a2) {
    for (var b2 = h2(t4); b2 !== null; ) {
      if (b2.callback === null)
        k2(t4);
      else if (b2.startTime <= a2)
        k2(t4), b2.sortIndex = b2.expirationTime, f2(r3, b2);
      else
        break;
      b2 = h2(t4);
    }
  }
  function H4(a2) {
    B4 = false;
    G4(a2);
    if (!A4)
      if (h2(r3) !== null)
        A4 = true, I4(J3);
      else {
        var b2 = h2(t4);
        b2 !== null && K4(H4, b2.startTime - a2);
      }
  }
  function J3(a2, b2) {
    A4 = false;
    B4 && (B4 = false, E4(L4), L4 = -1);
    z4 = true;
    var c2 = y3;
    try {
      G4(b2);
      for (v3 = h2(r3); v3 !== null && (!(v3.expirationTime > b2) || a2 && !M4()); ) {
        var d2 = v3.callback;
        if (typeof d2 === "function") {
          v3.callback = null;
          y3 = v3.priorityLevel;
          var e2 = d2(v3.expirationTime <= b2);
          b2 = exports.unstable_now();
          typeof e2 === "function" ? v3.callback = e2 : v3 === h2(r3) && k2(r3);
          G4(b2);
        } else
          k2(r3);
        v3 = h2(r3);
      }
      if (v3 !== null)
        var w3 = true;
      else {
        var m2 = h2(t4);
        m2 !== null && K4(H4, m2.startTime - b2);
        w3 = false;
      }
      return w3;
    } finally {
      v3 = null, y3 = c2, z4 = false;
    }
  }
  var N4 = false, O4 = null, L4 = -1, P4 = 5, Q4 = -1;
  function M4() {
    return exports.unstable_now() - Q4 < P4 ? false : true;
  }
  function R4() {
    if (O4 !== null) {
      var a2 = exports.unstable_now();
      Q4 = a2;
      var b2 = true;
      try {
        b2 = O4(true, a2);
      } finally {
        b2 ? S4() : (N4 = false, O4 = null);
      }
    } else
      N4 = false;
  }
  var S4;
  if (typeof F3 === "function")
    S4 = function() {
      F3(R4);
    };
  else if (typeof MessageChannel !== "undefined") {
    var T4 = new MessageChannel(), U4 = T4.port2;
    T4.port1.onmessage = R4;
    S4 = function() {
      U4.postMessage(null);
    };
  } else
    S4 = function() {
      D4(R4, 0);
    };
  function I4(a2) {
    O4 = a2;
    N4 || (N4 = true, S4());
  }
  function K4(a2, b2) {
    L4 = D4(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A4 || z4 || (A4 = true, I4(J3));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P4 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y3;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r3);
  };
  exports.unstable_next = function(a2) {
    switch (y3) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y3;
    }
    var c2 = y3;
    y3 = b2;
    try {
      return a2();
    } finally {
      y3 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y3;
    y3 = a2;
    try {
      return b2();
    } finally {
      y3 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    typeof c2 === "object" && c2 !== null ? (c2 = c2.delay, c2 = typeof c2 === "number" && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = {id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1};
    c2 > d2 ? (a2.sortIndex = c2, f2(t4, a2), h2(r3) === null && a2 === h2(t4) && (B4 ? (E4(L4), L4 = -1) : B4 = true, K4(H4, c2 - d2))) : (a2.sortIndex = e2, f2(r3, a2), A4 || z4 || (A4 = true, I4(J3)));
    return a2;
  };
  exports.unstable_shouldYield = M4;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y3;
    return function() {
      var c2 = y3;
      y3 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y3 = c2;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function p2(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = new Set();
var ea = {};
function fa(a2, b2) {
  ha(a2, b2);
  ha(a2 + "Capture", b2);
}
function ha(a2, b2) {
  ea[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    da.add(b2[a2]);
}
var ia = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ja = Object.prototype.hasOwnProperty;
var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var la = {};
var ma = {};
function na(a2) {
  if (ja.call(ma, a2))
    return true;
  if (ja.call(la, a2))
    return false;
  if (ka.test(a2))
    return ma[a2] = true;
  la[a2] = true;
  return false;
}
function oa(a2, b2, c2, d2) {
  if (c2 !== null && c2.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (c2 !== null)
        return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return a2 !== "data-" && a2 !== "aria-";
    default:
      return false;
  }
}
function pa(a2, b2, c2, d2) {
  if (b2 === null || typeof b2 === "undefined" || oa(a2, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (c2 !== null)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function t2(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z2[a2] = new t2(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z2[b2] = new t2(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z2[a2] = new t2(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z2[a2] = new t2(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z2[a2] = new t2(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z2[a2] = new t2(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z2[a2] = new t2(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z2[a2] = new t2(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z2[a2] = new t2(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var qa = /[\-:]([a-z])/g;
function ra(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z2[b2] = new t2(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z2[b2] = new t2(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z2[b2] = new t2(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z2[a2] = new t2(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z2.xlinkHref = new t2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z2[a2] = new t2(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function sa(a2, b2, c2, d2) {
  var e2 = z2.hasOwnProperty(b2) ? z2[b2] : null;
  if (e2 !== null ? e2.type !== 0 : d2 || !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N")
    pa(b2, c2, e2, d2) && (c2 = null), d2 || e2 === null ? na(b2) && (c2 === null ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = c2 === null ? e2.type === 3 ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, c2 === null ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = e2 === 3 || e2 === 4 && c2 === true ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
}
var ta = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var ua = Symbol.for("react.element");
var va = Symbol.for("react.portal");
var wa = Symbol.for("react.fragment");
var xa = Symbol.for("react.strict_mode");
var za = Symbol.for("react.profiler");
var Aa = Symbol.for("react.provider");
var Ba = Symbol.for("react.context");
var Ca = Symbol.for("react.forward_ref");
var Da = Symbol.for("react.suspense");
var Ea = Symbol.for("react.suspense_list");
var Fa = Symbol.for("react.memo");
var Ga = Symbol.for("react.lazy");
var Ha = Symbol.for("react.offscreen");
var Ia = Symbol.iterator;
function Ja(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = Ia && a2[Ia] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var A2 = Object.assign;
var Ka;
function La(a2) {
  if (Ka === void 0)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      Ka = b2 && b2[1] || "";
    }
  return "\n" + Ka + a2;
}
var Ma = false;
function Na(a2, b2) {
  if (!a2 || Ma)
    return "";
  Ma = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", {set: function() {
        throw Error();
      }}), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l3) {
          var d2 = l3;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l3) {
          d2 = l3;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l3) {
        d2 = l3;
      }
      a2();
    }
  } catch (l3) {
    if (l3 && d2 && typeof l3.stack === "string") {
      for (var e2 = l3.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (g2 !== 1 || h2 !== 1) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Ma = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? La(a2) : "";
}
function Oa(a2) {
  switch (a2.tag) {
    case 5:
      return La(a2.type);
    case 16:
      return La("Lazy");
    case 13:
      return La("Suspense");
    case 19:
      return La("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Na(a2.type, false), a2;
    case 11:
      return a2 = Na(a2.type.render, false), a2;
    case 1:
      return a2 = Na(a2.type, true), a2;
    default:
      return "";
  }
}
function Pa(a2) {
  if (a2 == null)
    return null;
  if (typeof a2 === "function")
    return a2.displayName || a2.name || null;
  if (typeof a2 === "string")
    return a2;
  switch (a2) {
    case wa:
      return "Fragment";
    case va:
      return "Portal";
    case za:
      return "Profiler";
    case xa:
      return "StrictMode";
    case Da:
      return "Suspense";
    case Ea:
      return "SuspenseList";
  }
  if (typeof a2 === "object")
    switch (a2.$$typeof) {
      case Ba:
        return (a2.displayName || "Context") + ".Consumer";
      case Aa:
        return (a2._context.displayName || "Context") + ".Provider";
      case Ca:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Fa:
        return b2 = a2.displayName || null, b2 !== null ? b2 : Pa(a2.type) || "Memo";
      case Ga:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Pa(a2(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Qa(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || (a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pa(b2);
    case 8:
      return b2 === xa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof b2 === "function")
        return b2.displayName || b2.name || null;
      if (typeof b2 === "string")
        return b2;
  }
  return null;
}
function Ra(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Sa(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Ta(a2) {
  var b2 = Sa(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && typeof c2 !== "undefined" && typeof c2.get === "function" && typeof c2.set === "function") {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, {configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    }});
    Object.defineProperty(a2, b2, {enumerable: c2.enumerable});
    return {getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    }};
  }
}
function Ua(a2) {
  a2._valueTracker || (a2._valueTracker = Ta(a2));
}
function Va(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Sa(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Wa(a2) {
  a2 = a2 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a2 === "undefined")
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Xa(a2, b2) {
  var c2 = b2.checked;
  return A2({}, b2, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c2 != null ? c2 : a2._wrapperState.initialChecked});
}
function Ya(a2, b2) {
  var c2 = b2.defaultValue == null ? "" : b2.defaultValue, d2 = b2.checked != null ? b2.checked : b2.defaultChecked;
  c2 = Ra(b2.value != null ? b2.value : c2);
  a2._wrapperState = {initialChecked: d2, initialValue: c2, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null};
}
function Za(a2, b2) {
  b2 = b2.checked;
  b2 != null && sa(a2, "checked", b2, false);
}
function $a(a2, b2) {
  Za(a2, b2);
  var c2 = Ra(b2.value), d2 = b2.type;
  if (c2 != null)
    if (d2 === "number") {
      if (c2 === 0 && a2.value === "" || a2.value != c2)
        a2.value = "" + c2;
    } else
      a2.value !== "" + c2 && (a2.value = "" + c2);
  else if (d2 === "submit" || d2 === "reset") {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && bb(a2, b2.type, Ra(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a2.defaultChecked = !!b2.defaultChecked);
}
function cb(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!(d2 !== "submit" && d2 !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  c2 !== "" && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  c2 !== "" && (a2.name = c2);
}
function bb(a2, b2, c2) {
  if (b2 !== "number" || Wa(a2.ownerDocument) !== a2)
    c2 == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var db = Array.isArray;
function eb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++)
      e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Ra(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      b2 !== null || a2[e2].disabled || (b2 = a2[e2]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function fb(a2, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(p2(91));
  return A2({}, b2, {value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue});
}
function gb(a2, b2) {
  var c2 = b2.value;
  if (c2 == null) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (c2 != null) {
      if (b2 != null)
        throw Error(p2(92));
      if (db(c2)) {
        if (1 < c2.length)
          throw Error(p2(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    b2 == null && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = {initialValue: Ra(c2)};
}
function hb(a2, b2) {
  var c2 = Ra(b2.value), d2 = Ra(b2.defaultValue);
  c2 != null && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), b2.defaultValue == null && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  d2 != null && (a2.defaultValue = "" + d2);
}
function ib(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && b2 !== "" && b2 !== null && (a2.value = b2);
}
function jb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kb(a2, b2) {
  return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? jb(b2) : a2 === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
}
var lb;
var mb = function(a2) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if (a2.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    lb = lb || document.createElement("div");
    lb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = lb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function nb(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && c2.nodeType === 3) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var ob = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var pb = ["Webkit", "ms", "Moz", "O"];
Object.keys(ob).forEach(function(a2) {
  pb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    ob[b2] = ob[a2];
  });
});
function qb(a2, b2, c2) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c2 || typeof b2 !== "number" || b2 === 0 || ob.hasOwnProperty(a2) && ob[a2] ? ("" + b2).trim() : b2 + "px";
}
function rb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = c2.indexOf("--") === 0, e2 = qb(c2, b2[c2], d2);
      c2 === "float" && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
}
var sb = A2({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
function tb(a2, b2) {
  if (b2) {
    if (sb[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(p2(137, a2));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(p2(60));
      if (typeof b2.dangerouslySetInnerHTML !== "object" || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p2(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(p2(62));
  }
}
function ub(a2, b2) {
  if (a2.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var vb = null;
function wb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return a2.nodeType === 3 ? a2.parentNode : a2;
}
var xb = null;
var yb = null;
var zb = null;
function Ab(a2) {
  if (a2 = Bb(a2)) {
    if (typeof xb !== "function")
      throw Error(p2(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Cb(b2), xb(a2.stateNode, a2.type, b2));
  }
}
function Db(a2) {
  yb ? zb ? zb.push(a2) : zb = [a2] : yb = a2;
}
function Eb() {
  if (yb) {
    var a2 = yb, b2 = zb;
    zb = yb = null;
    Ab(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Ab(b2[a2]);
  }
}
function Fb(a2, b2) {
  return a2(b2);
}
function Gb() {
}
var Hb = false;
function Ib(a2, b2, c2) {
  if (Hb)
    return a2(b2, c2);
  Hb = true;
  try {
    return Fb(a2, b2, c2);
  } finally {
    if (Hb = false, yb !== null || zb !== null)
      Gb(), Eb();
  }
}
function Jb(a2, b2) {
  var c2 = a2.stateNode;
  if (c2 === null)
    return null;
  var d2 = Cb(c2);
  if (d2 === null)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c2 && typeof c2 !== "function")
    throw Error(p2(231, b2, typeof c2));
  return c2;
}
var Kb = false;
if (ia)
  try {
    Lb = {};
    Object.defineProperty(Lb, "passive", {get: function() {
      Kb = true;
    }});
    window.addEventListener("test", Lb, Lb);
    window.removeEventListener("test", Lb, Lb);
  } catch (a2) {
    Kb = false;
  }
var Lb;
function Mb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l3 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l3);
  } catch (n3) {
    this.onError(n3);
  }
}
var Nb = false;
var Ob = null;
var Pb = false;
var Qb = null;
var Rb = {onError: function(a2) {
  Nb = true;
  Ob = a2;
}};
function Sb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Nb = false;
  Ob = null;
  Mb.apply(Rb, arguments);
}
function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Sb.apply(this, arguments);
  if (Nb) {
    if (Nb) {
      var l3 = Ob;
      Nb = false;
      Ob = null;
    } else
      throw Error(p2(198));
    Pb || (Pb = true, Qb = l3);
  }
}
function Ub(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, (b2.flags & 4098) !== 0 && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return b2.tag === 3 ? c2 : null;
}
function Vb(a2) {
  if (a2.tag === 13) {
    var b2 = a2.memoizedState;
    b2 === null && (a2 = a2.alternate, a2 !== null && (b2 = a2.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function Wb(a2) {
  if (Ub(a2) !== a2)
    throw Error(p2(188));
}
function Xb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Ub(a2);
    if (b2 === null)
      throw Error(p2(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (e2 === null)
      break;
    var f2 = e2.alternate;
    if (f2 === null) {
      d2 = e2.return;
      if (d2 !== null) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return Wb(e2), a2;
        if (f2 === d2)
          return Wb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p2(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(p2(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(p2(190));
  }
  if (c2.tag !== 3)
    throw Error(p2(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Yb(a2) {
  a2 = Xb(a2);
  return a2 !== null ? Zb(a2) : null;
}
function Zb(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2;
  for (a2 = a2.child; a2 !== null; ) {
    var b2 = Zb(a2);
    if (b2 !== null)
      return b2;
    a2 = a2.sibling;
  }
  return null;
}
var $b = scheduler.unstable_scheduleCallback;
var ac = scheduler.unstable_cancelCallback;
var bc = scheduler.unstable_shouldYield;
var cc = scheduler.unstable_requestPaint;
var B2 = scheduler.unstable_now;
var dc = scheduler.unstable_getCurrentPriorityLevel;
var ec = scheduler.unstable_ImmediatePriority;
var fc = scheduler.unstable_UserBlockingPriority;
var gc = scheduler.unstable_NormalPriority;
var hc = scheduler.unstable_LowPriority;
var ic = scheduler.unstable_IdlePriority;
var jc = null;
var kc = null;
function lc(a2) {
  if (kc && typeof kc.onCommitFiberRoot === "function")
    try {
      kc.onCommitFiberRoot(jc, a2, void 0, (a2.current.flags & 128) === 128);
    } catch (b2) {
    }
}
var nc = Math.clz32 ? Math.clz32 : mc;
var oc = Math.log;
var pc = Math.LN2;
function mc(a2) {
  a2 >>>= 0;
  return a2 === 0 ? 32 : 31 - (oc(a2) / pc | 0) | 0;
}
var qc = 64;
var rc = 4194304;
function sc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function tc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (c2 === 0)
    return 0;
  var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
  if (g2 !== 0) {
    var h2 = g2 & ~e2;
    h2 !== 0 ? d2 = sc(h2) : (f2 &= g2, f2 !== 0 && (d2 = sc(f2)));
  } else
    g2 = c2 & ~e2, g2 !== 0 ? d2 = sc(g2) : f2 !== 0 && (d2 = sc(f2));
  if (d2 === 0)
    return 0;
  if (b2 !== 0 && b2 !== d2 && (b2 & e2) === 0 && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || e2 === 16 && (f2 & 4194240) !== 0))
    return b2;
  (d2 & 4) !== 0 && (d2 |= c2 & 16);
  b2 = a2.entangledLanes;
  if (b2 !== 0)
    for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - nc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function uc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g2 = 31 - nc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (k2 === -1) {
      if ((h2 & c2) === 0 || (h2 & d2) !== 0)
        e2[g2] = uc(h2, b2);
    } else
      k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function wc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function xc() {
  var a2 = qc;
  qc <<= 1;
  (qc & 4194240) === 0 && (qc = 64);
  return a2;
}
function yc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a2);
  return b2;
}
function zc(a2, b2, c2) {
  a2.pendingLanes |= b2;
  b2 !== 536870912 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - nc(b2);
  a2[b2] = c2;
}
function Ac(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d2 = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e2 = 31 - nc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a2[e2] = -1;
    c2 &= ~f2;
  }
}
function Bc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d2 = 31 - nc(c2), e2 = 1 << d2;
    e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
    c2 &= ~e2;
  }
}
var C2 = 0;
function Cc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? (a2 & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Dc;
var Ec;
var Fc;
var Gc;
var Hc;
var Ic = false;
var Jc = [];
var Kc = null;
var Lc = null;
var Mc = null;
var Nc = new Map();
var Oc = new Map();
var Pc = [];
var Qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Rc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Kc = null;
      break;
    case "dragenter":
    case "dragleave":
      Lc = null;
      break;
    case "mouseover":
    case "mouseout":
      Mc = null;
      break;
    case "pointerover":
    case "pointerout":
      Nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Oc.delete(b2.pointerId);
  }
}
function Sc(a2, b2, c2, d2, e2, f2) {
  if (a2 === null || a2.nativeEvent !== f2)
    return a2 = {blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2]}, b2 !== null && (b2 = Bb(b2), b2 !== null && Ec(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  e2 !== null && b2.indexOf(e2) === -1 && b2.push(e2);
  return a2;
}
function Tc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Kc = Sc(Kc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return Lc = Sc(Lc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return Mc = Sc(Mc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Nc.set(f2, Sc(Nc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Oc.set(f2, Sc(Oc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function Uc(a2) {
  var b2 = Vc(a2.target);
  if (b2 !== null) {
    var c2 = Ub(b2);
    if (c2 !== null) {
      if (b2 = c2.tag, b2 === 13) {
        if (b2 = Vb(c2), b2 !== null) {
          a2.blockedOn = b2;
          Hc(a2.priority, function() {
            Fc(c2);
          });
          return;
        }
      } else if (b2 === 3 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = c2.tag === 3 ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Wc(a2) {
  if (a2.blockedOn !== null)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Xc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (c2 === null) {
      c2 = a2.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      vb = d2;
      c2.target.dispatchEvent(d2);
      vb = null;
    } else
      return b2 = Bb(c2), b2 !== null && Ec(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Yc(a2, b2, c2) {
  Wc(a2) && c2.delete(b2);
}
function Zc() {
  Ic = false;
  Kc !== null && Wc(Kc) && (Kc = null);
  Lc !== null && Wc(Lc) && (Lc = null);
  Mc !== null && Wc(Mc) && (Mc = null);
  Nc.forEach(Yc);
  Oc.forEach(Yc);
}
function $c(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Ic || (Ic = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Zc)));
}
function ad(a2) {
  function b2(b3) {
    return $c(b3, a2);
  }
  if (0 < Jc.length) {
    $c(Jc[0], a2);
    for (var c2 = 1; c2 < Jc.length; c2++) {
      var d2 = Jc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  Kc !== null && $c(Kc, a2);
  Lc !== null && $c(Lc, a2);
  Mc !== null && $c(Mc, a2);
  Nc.forEach(b2);
  Oc.forEach(b2);
  for (c2 = 0; c2 < Pc.length; c2++)
    d2 = Pc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < Pc.length && (c2 = Pc[0], c2.blockedOn === null); )
    Uc(c2), c2.blockedOn === null && Pc.shift();
}
var bd = ta.ReactCurrentBatchConfig;
var cd = true;
function dd(a2, b2, c2, d2) {
  var e2 = C2, f2 = bd.transition;
  bd.transition = null;
  try {
    C2 = 1, ed(a2, b2, c2, d2);
  } finally {
    C2 = e2, bd.transition = f2;
  }
}
function fd(a2, b2, c2, d2) {
  var e2 = C2, f2 = bd.transition;
  bd.transition = null;
  try {
    C2 = 4, ed(a2, b2, c2, d2);
  } finally {
    C2 = e2, bd.transition = f2;
  }
}
function ed(a2, b2, c2, d2) {
  if (cd) {
    var e2 = Xc(a2, b2, c2, d2);
    if (e2 === null)
      gd(a2, b2, d2, hd, c2), Rc(a2, d2);
    else if (Tc(e2, a2, b2, c2, d2))
      d2.stopPropagation();
    else if (Rc(a2, d2), b2 & 4 && -1 < Qc.indexOf(a2)) {
      for (; e2 !== null; ) {
        var f2 = Bb(e2);
        f2 !== null && Dc(f2);
        f2 = Xc(a2, b2, c2, d2);
        f2 === null && gd(a2, b2, d2, hd, c2);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      e2 !== null && d2.stopPropagation();
    } else
      gd(a2, b2, d2, null, c2);
  }
}
var hd = null;
function Xc(a2, b2, c2, d2) {
  hd = null;
  a2 = wb(d2);
  a2 = Vc(a2);
  if (a2 !== null)
    if (b2 = Ub(a2), b2 === null)
      a2 = null;
    else if (c2 = b2.tag, c2 === 13) {
      a2 = Vb(b2);
      if (a2 !== null)
        return a2;
      a2 = null;
    } else if (c2 === 3) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return b2.tag === 3 ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else
      b2 !== a2 && (a2 = null);
  hd = a2;
  return null;
}
function id(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (dc()) {
        case ec:
          return 1;
        case fc:
          return 4;
        case gc:
        case hc:
          return 16;
        case ic:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jd = null;
var kd = null;
var ld = null;
function md() {
  if (ld)
    return ld;
  var a2, b2 = kd, c2 = b2.length, d2, e2 = "value" in jd ? jd.value : jd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
    ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return ld = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function nd(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b2 === 13 && (a2 = 13)) : a2 = b2;
  a2 === 10 && (a2 = 13);
  return 32 <= a2 || a2 === 13 ? a2 : 0;
}
function od() {
  return true;
}
function pd() {
  return false;
}
function qd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2)
      a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? od : pd;
    this.isPropagationStopped = pd;
    return this;
  }
  A2(b2.prototype, {preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = od);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = od);
  }, persist: function() {
  }, isPersistent: od});
  return b2;
}
var rd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0};
var sd = qd(rd);
var td = A2({}, rd, {view: 0, detail: 0});
var ud = qd(td);
var vd;
var wd;
var xd;
var zd = A2({}, td, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== xd && (xd && a2.type === "mousemove" ? (vd = a2.screenX - xd.screenX, wd = a2.screenY - xd.screenY) : wd = vd = 0, xd = a2);
  return vd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : wd;
}});
var Ad = qd(zd);
var Bd = A2({}, zd, {dataTransfer: 0});
var Cd = qd(Bd);
var Dd = A2({}, td, {relatedTarget: 0});
var Ed = qd(Dd);
var Fd = A2({}, rd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
var Gd = qd(Fd);
var Hd = A2({}, rd, {clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
}});
var Id = qd(Hd);
var Jd = A2({}, rd, {data: 0});
var Kd = qd(Jd);
var Ld = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
var Md = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
var Nd = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
function Od(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Nd[a2]) ? !!b2[a2] : false;
}
function yd() {
  return Od;
}
var Pd = A2({}, td, {key: function(a2) {
  if (a2.key) {
    var b2 = Ld[a2.key] || a2.key;
    if (b2 !== "Unidentified")
      return b2;
  }
  return a2.type === "keypress" ? (a2 = nd(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Md[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yd, charCode: function(a2) {
  return a2.type === "keypress" ? nd(a2) : 0;
}, keyCode: function(a2) {
  return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}, which: function(a2) {
  return a2.type === "keypress" ? nd(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}});
var Qd = qd(Pd);
var Rd = A2({}, zd, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
var Sd = qd(Rd);
var Td = A2({}, td, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yd});
var Ud = qd(Td);
var Vd = A2({}, rd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
var Wd = qd(Vd);
var Xd = A2({}, zd, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
});
var Yd = qd(Xd);
var Zd = [9, 13, 27, 32];
var $d = ia && "CompositionEvent" in window;
var ae = null;
ia && "documentMode" in document && (ae = document.documentMode);
var be = ia && "TextEvent" in window && !ae;
var ce = ia && (!$d || ae && 8 < ae && 11 >= ae);
var de = String.fromCharCode(32);
var ee = false;
function fe(a2, b2) {
  switch (a2) {
    case "keyup":
      return Zd.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function ge(a2) {
  a2 = a2.detail;
  return typeof a2 === "object" && "data" in a2 ? a2.data : null;
}
var he = false;
function ie(a2, b2) {
  switch (a2) {
    case "compositionend":
      return ge(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      ee = true;
      return de;
    case "textInput":
      return a2 = b2.data, a2 === de && ee ? null : a2;
    default:
      return null;
  }
}
function je(a2, b2) {
  if (he)
    return a2 === "compositionend" || !$d && fe(a2, b2) ? (a2 = md(), ld = kd = jd = null, he = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return ce && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var ke = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
function le(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 === "input" ? !!ke[a2.type] : b2 === "textarea" ? true : false;
}
function me(a2, b2, c2, d2) {
  Db(d2);
  b2 = ne(b2, "onChange");
  0 < b2.length && (c2 = new sd("onChange", "change", null, c2, d2), a2.push({event: c2, listeners: b2}));
}
var oe = null;
var pe = null;
function qe(a2) {
  re(a2, 0);
}
function se(a2) {
  var b2 = te(a2);
  if (Va(b2))
    return a2;
}
function ue(a2, b2) {
  if (a2 === "change")
    return b2;
}
var ve = false;
if (ia) {
  if (ia) {
    xe = "oninput" in document;
    if (!xe) {
      ye = document.createElement("div");
      ye.setAttribute("oninput", "return;");
      xe = typeof ye.oninput === "function";
    }
    we = xe;
  } else
    we = false;
  ve = we && (!document.documentMode || 9 < document.documentMode);
}
var we;
var xe;
var ye;
function ze() {
  oe && (oe.detachEvent("onpropertychange", Ae), pe = oe = null);
}
function Ae(a2) {
  if (a2.propertyName === "value" && se(pe)) {
    var b2 = [];
    me(b2, pe, a2, wb(a2));
    Ib(qe, b2);
  }
}
function Be(a2, b2, c2) {
  a2 === "focusin" ? (ze(), oe = b2, pe = c2, oe.attachEvent("onpropertychange", Ae)) : a2 === "focusout" && ze();
}
function Ce(a2) {
  if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
    return se(pe);
}
function De(a2, b2) {
  if (a2 === "click")
    return se(b2);
}
function Ee(a2, b2) {
  if (a2 === "input" || a2 === "change")
    return se(b2);
}
function Fe(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var Ge = typeof Object.is === "function" ? Object.is : Fe;
function He(a2, b2) {
  if (Ge(a2, b2))
    return true;
  if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !Ge(a2[e2], b2[e2]))
      return false;
  }
  return true;
}
function Ie(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Je(a2, b2) {
  var c2 = Ie(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (c2.nodeType === 3) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2)
        return {node: c2, offset: b2 - a2};
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Ie(c2);
  }
}
function Ke(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && a2.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Ke(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Le() {
  for (var a2 = window, b2 = Wa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = typeof b2.contentWindow.location.href === "string";
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Wa(a2.document);
  }
  return b2;
}
function Me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b2 === "textarea" || a2.contentEditable === "true");
}
function Ne(a2) {
  var b2 = Le(), c2 = a2.focusedElem, d2 = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Ke(c2.ownerDocument.documentElement, c2)) {
    if (d2 !== null && Me(c2)) {
      if (b2 = d2.start, a2 = d2.end, a2 === void 0 && (a2 = b2), "selectionStart" in c2)
        c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = d2.end === void 0 ? f2 : Math.min(d2.end, e2);
        !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Je(c2, f2);
        var g2 = Je(c2, d2);
        e2 && g2 && (a2.rangeCount !== 1 || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; )
      a2.nodeType === 1 && b2.push({element: a2, left: a2.scrollLeft, top: a2.scrollTop});
    typeof c2.focus === "function" && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++)
      a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Oe = ia && "documentMode" in document && 11 >= document.documentMode;
var Pe = null;
var Qe = null;
var Re = null;
var Se = false;
function Te(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : c2.nodeType === 9 ? c2 : c2.ownerDocument;
  Se || Pe == null || Pe !== Wa(d2) || (d2 = Pe, "selectionStart" in d2 && Me(d2) ? d2 = {start: d2.selectionStart, end: d2.selectionEnd} : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = {anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset}), Re && He(Re, d2) || (Re = d2, d2 = ne(Qe, "onSelect"), 0 < d2.length && (b2 = new sd("onSelect", "select", null, b2, c2), a2.push({event: b2, listeners: d2}), b2.target = Pe)));
}
function Ue(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var Ve = {animationend: Ue("Animation", "AnimationEnd"), animationiteration: Ue("Animation", "AnimationIteration"), animationstart: Ue("Animation", "AnimationStart"), transitionend: Ue("Transition", "TransitionEnd")};
var We = {};
var Xe = {};
ia && (Xe = document.createElement("div").style, "AnimationEvent" in window || (delete Ve.animationend.animation, delete Ve.animationiteration.animation, delete Ve.animationstart.animation), "TransitionEvent" in window || delete Ve.transitionend.transition);
function Ye(a2) {
  if (We[a2])
    return We[a2];
  if (!Ve[a2])
    return a2;
  var b2 = Ve[a2], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Xe)
      return We[a2] = b2[c2];
  return a2;
}
var Ze = Ye("animationend");
var $e = Ye("animationiteration");
var af = Ye("animationstart");
var bf = Ye("transitionend");
var cf = new Map();
var df = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ef(a2, b2) {
  cf.set(a2, b2);
  fa(b2, [a2]);
}
for (var ff = 0; ff < df.length; ff++) {
  gf = df[ff], hf = gf.toLowerCase(), jf = gf[0].toUpperCase() + gf.slice(1);
  ef(hf, "on" + jf);
}
var gf;
var hf;
var jf;
ef(Ze, "onAnimationEnd");
ef($e, "onAnimationIteration");
ef(af, "onAnimationStart");
ef("dblclick", "onDoubleClick");
ef("focusin", "onFocus");
ef("focusout", "onBlur");
ef(bf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kf));
function mf(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Tb(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function re(a2, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l3 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          mf(e2, h2, l3);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l3 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          mf(e2, h2, l3);
          f2 = k2;
        }
    }
  }
  if (Pb)
    throw a2 = Qb, Pb = false, Qb = null, a2;
}
function D2(a2, b2) {
  var c2 = b2[nf];
  c2 === void 0 && (c2 = b2[nf] = new Set());
  var d2 = a2 + "__bubble";
  c2.has(d2) || (of(b2, a2, 2, false), c2.add(d2));
}
function pf(a2, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  of(c2, a2, d2, b2);
}
var qf = "_reactListening" + Math.random().toString(36).slice(2);
function rf(a2) {
  if (!a2[qf]) {
    a2[qf] = true;
    da.forEach(function(b3) {
      b3 !== "selectionchange" && (lf.has(b3) || pf(b3, false, a2), pf(b3, true, a2));
    });
    var b2 = a2.nodeType === 9 ? a2 : a2.ownerDocument;
    b2 === null || b2[qf] || (b2[qf] = true, pf("selectionchange", false, b2));
  }
}
function of(a2, b2, c2, d2) {
  switch (id(b2)) {
    case 1:
      var e2 = dd;
      break;
    case 4:
      e2 = fd;
      break;
    default:
      e2 = ed;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Kb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e2 = true);
  d2 ? e2 !== void 0 ? a2.addEventListener(b2, c2, {capture: true, passive: e2}) : a2.addEventListener(b2, c2, true) : e2 !== void 0 ? a2.addEventListener(b2, c2, {passive: e2}) : a2.addEventListener(b2, c2, false);
}
function gd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d2 !== null)
    a:
      for (; ; ) {
        if (d2 === null)
          return;
        var g2 = d2.tag;
        if (g2 === 3 || g2 === 4) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || h2.nodeType === 8 && h2.parentNode === e2)
            break;
          if (g2 === 4)
            for (g2 = d2.return; g2 !== null; ) {
              var k2 = g2.tag;
              if (k2 === 3 || k2 === 4) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || k2.nodeType === 8 && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; h2 !== null; ) {
            g2 = Vc(h2);
            if (g2 === null)
              return;
            k2 = g2.tag;
            if (k2 === 5 || k2 === 6) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Ib(function() {
    var d3 = f2, e3 = wb(c2), g3 = [];
    a: {
      var h3 = cf.get(a2);
      if (h3 !== void 0) {
        var k3 = sd, m2 = a2;
        switch (a2) {
          case "keypress":
            if (nd(c2) === 0)
              break a;
          case "keydown":
          case "keyup":
            k3 = Qd;
            break;
          case "focusin":
            m2 = "focus";
            k3 = Ed;
            break;
          case "focusout":
            m2 = "blur";
            k3 = Ed;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Ed;
            break;
          case "click":
            if (c2.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Ad;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Cd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Ud;
            break;
          case Ze:
          case $e:
          case af:
            k3 = Gd;
            break;
          case bf:
            k3 = Wd;
            break;
          case "scroll":
            k3 = ud;
            break;
          case "wheel":
            k3 = Yd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Id;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Sd;
        }
        var w3 = (b2 & 4) !== 0, J3 = !w3 && a2 === "scroll", v3 = w3 ? h3 !== null ? h3 + "Capture" : null : h3;
        w3 = [];
        for (var x3 = d3, r3; x3 !== null; ) {
          r3 = x3;
          var F3 = r3.stateNode;
          r3.tag === 5 && F3 !== null && (r3 = F3, v3 !== null && (F3 = Jb(x3, v3), F3 != null && w3.push(sf(x3, F3, r3))));
          if (J3)
            break;
          x3 = x3.return;
        }
        0 < w3.length && (h3 = new k3(h3, m2, null, c2, e3), g3.push({event: h3, listeners: w3}));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a2 === "mouseover" || a2 === "pointerover";
        k3 = a2 === "mouseout" || a2 === "pointerout";
        if (h3 && c2 !== vb && (m2 = c2.relatedTarget || c2.fromElement) && (Vc(m2) || m2[tf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (m2 = c2.relatedTarget || c2.toElement, k3 = d3, m2 = m2 ? Vc(m2) : null, m2 !== null && (J3 = Ub(m2), m2 !== J3 || m2.tag !== 5 && m2.tag !== 6))
              m2 = null;
          } else
            k3 = null, m2 = d3;
          if (k3 !== m2) {
            w3 = Ad;
            F3 = "onMouseLeave";
            v3 = "onMouseEnter";
            x3 = "mouse";
            if (a2 === "pointerout" || a2 === "pointerover")
              w3 = Sd, F3 = "onPointerLeave", v3 = "onPointerEnter", x3 = "pointer";
            J3 = k3 == null ? h3 : te(k3);
            r3 = m2 == null ? h3 : te(m2);
            h3 = new w3(F3, x3 + "leave", k3, c2, e3);
            h3.target = J3;
            h3.relatedTarget = r3;
            F3 = null;
            Vc(e3) === d3 && (w3 = new w3(v3, x3 + "enter", m2, c2, e3), w3.target = r3, w3.relatedTarget = J3, F3 = w3);
            J3 = F3;
            if (k3 && m2)
              b: {
                w3 = k3;
                v3 = m2;
                x3 = 0;
                for (r3 = w3; r3; r3 = uf(r3))
                  x3++;
                r3 = 0;
                for (F3 = v3; F3; F3 = uf(F3))
                  r3++;
                for (; 0 < x3 - r3; )
                  w3 = uf(w3), x3--;
                for (; 0 < r3 - x3; )
                  v3 = uf(v3), r3--;
                for (; x3--; ) {
                  if (w3 === v3 || v3 !== null && w3 === v3.alternate)
                    break b;
                  w3 = uf(w3);
                  v3 = uf(v3);
                }
                w3 = null;
              }
            else
              w3 = null;
            k3 !== null && vf(g3, h3, k3, w3, false);
            m2 !== null && J3 !== null && vf(g3, J3, m2, w3, true);
          }
        }
      }
      a: {
        h3 = d3 ? te(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k3 === "select" || k3 === "input" && h3.type === "file")
          var Z = ue;
        else if (le(h3))
          if (ve)
            Z = Ee;
          else {
            Z = Ce;
            var ya = Be;
          }
        else
          (k3 = h3.nodeName) && k3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (Z = De);
        if (Z && (Z = Z(a2, d3))) {
          me(g3, Z, c2, e3);
          break a;
        }
        ya && ya(a2, h3, d3);
        a2 === "focusout" && (ya = h3._wrapperState) && ya.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      ya = d3 ? te(d3) : window;
      switch (a2) {
        case "focusin":
          if (le(ya) || ya.contentEditable === "true")
            Pe = ya, Qe = d3, Re = null;
          break;
        case "focusout":
          Re = Qe = Pe = null;
          break;
        case "mousedown":
          Se = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Se = false;
          Te(g3, c2, e3);
          break;
        case "selectionchange":
          if (Oe)
            break;
        case "keydown":
        case "keyup":
          Te(g3, c2, e3);
      }
      var ab;
      if ($d)
        b: {
          switch (a2) {
            case "compositionstart":
              var ca = "onCompositionStart";
              break b;
            case "compositionend":
              ca = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ca = "onCompositionUpdate";
              break b;
          }
          ca = void 0;
        }
      else
        he ? fe(a2, c2) && (ca = "onCompositionEnd") : a2 === "keydown" && c2.keyCode === 229 && (ca = "onCompositionStart");
      ca && (ce && c2.locale !== "ko" && (he || ca !== "onCompositionStart" ? ca === "onCompositionEnd" && he && (ab = md()) : (jd = e3, kd = "value" in jd ? jd.value : jd.textContent, he = true)), ya = ne(d3, ca), 0 < ya.length && (ca = new Kd(ca, a2, null, c2, e3), g3.push({event: ca, listeners: ya}), ab ? ca.data = ab : (ab = ge(c2), ab !== null && (ca.data = ab))));
      if (ab = be ? ie(a2, c2) : je(a2, c2))
        d3 = ne(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Kd("onBeforeInput", "beforeinput", null, c2, e3), g3.push({event: e3, listeners: d3}), e3.data = ab);
    }
    re(g3, b2);
  });
}
function sf(a2, b2, c2) {
  return {instance: a2, listener: b2, currentTarget: c2};
}
function ne(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; a2 !== null; ) {
    var e2 = a2, f2 = e2.stateNode;
    e2.tag === 5 && f2 !== null && (e2 = f2, f2 = Jb(a2, c2), f2 != null && d2.unshift(sf(a2, f2, e2)), f2 = Jb(a2, b2), f2 != null && d2.push(sf(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function uf(a2) {
  if (a2 === null)
    return null;
  do
    a2 = a2.return;
  while (a2 && a2.tag !== 5);
  return a2 ? a2 : null;
}
function vf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; c2 !== null && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l3 = h2.stateNode;
    if (k2 !== null && k2 === d2)
      break;
    h2.tag === 5 && l3 !== null && (h2 = l3, e2 ? (k2 = Jb(c2, f2), k2 != null && g2.unshift(sf(c2, k2, h2))) : e2 || (k2 = Jb(c2, f2), k2 != null && g2.push(sf(c2, k2, h2))));
    c2 = c2.return;
  }
  g2.length !== 0 && a2.push({event: b2, listeners: g2});
}
var wf = /\r\n?/g;
var xf = /\u0000|\uFFFD/g;
function yf(a2) {
  return (typeof a2 === "string" ? a2 : "" + a2).replace(wf, "\n").replace(xf, "");
}
function zf(a2, b2, c2) {
  b2 = yf(b2);
  if (yf(a2) !== b2 && c2)
    throw Error(p2(425));
}
function Af() {
}
var Bf = null;
var Cf = null;
function Df(a2, b2) {
  return a2 === "textarea" || a2 === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var Ef = typeof setTimeout === "function" ? setTimeout : void 0;
var Ff = typeof clearTimeout === "function" ? clearTimeout : void 0;
var Gf = typeof Promise === "function" ? Promise : void 0;
var If = typeof queueMicrotask === "function" ? queueMicrotask : typeof Gf !== "undefined" ? function(a2) {
  return Gf.resolve(null).then(a2).catch(Hf);
} : Ef;
function Hf(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Jf(a2, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a2.removeChild(c2);
    if (e2 && e2.nodeType === 8)
      if (c2 = e2.data, c2 === "/$") {
        if (d2 === 0) {
          a2.removeChild(e2);
          ad(b2);
          return;
        }
        d2--;
      } else
        c2 !== "$" && c2 !== "$?" && c2 !== "$!" || d2++;
    c2 = e2;
  } while (c2);
  ad(b2);
}
function Kf(a2) {
  for (; a2 != null; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
    if (b2 === 8) {
      b2 = a2.data;
      if (b2 === "$" || b2 === "$!" || b2 === "$?")
        break;
      if (b2 === "/$")
        return null;
    }
  }
  return a2;
}
function Lf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (a2.nodeType === 8) {
      var c2 = a2.data;
      if (c2 === "$" || c2 === "$!" || c2 === "$?") {
        if (b2 === 0)
          return a2;
        b2--;
      } else
        c2 === "/$" && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Mf = Math.random().toString(36).slice(2);
var Nf = "__reactFiber$" + Mf;
var Of = "__reactProps$" + Mf;
var tf = "__reactContainer$" + Mf;
var nf = "__reactEvents$" + Mf;
var Pf = "__reactListeners$" + Mf;
var Qf = "__reactHandles$" + Mf;
function Vc(a2) {
  var b2 = a2[Nf];
  if (b2)
    return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[tf] || c2[Nf]) {
      c2 = b2.alternate;
      if (b2.child !== null || c2 !== null && c2.child !== null)
        for (a2 = Lf(a2); a2 !== null; ) {
          if (c2 = a2[Nf])
            return c2;
          a2 = Lf(a2);
        }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Bb(a2) {
  a2 = a2[Nf] || a2[tf];
  return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
}
function te(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2.stateNode;
  throw Error(p2(33));
}
function Cb(a2) {
  return a2[Of] || null;
}
var Rf = [];
var Sf = -1;
function Tf(a2) {
  return {current: a2};
}
function E2(a2) {
  0 > Sf || (a2.current = Rf[Sf], Rf[Sf] = null, Sf--);
}
function G2(a2, b2) {
  Sf++;
  Rf[Sf] = a2.current;
  a2.current = b2;
}
var Uf = {};
var H2 = Tf(Uf);
var Vf = Tf(false);
var Wf = Uf;
function Xf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2)
    return Uf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Yf(a2) {
  a2 = a2.childContextTypes;
  return a2 !== null && a2 !== void 0;
}
function Zf() {
  E2(Vf);
  E2(H2);
}
function $f(a2, b2, c2) {
  if (H2.current !== Uf)
    throw Error(p2(168));
  G2(H2, b2);
  G2(Vf, c2);
}
function ag(a2, b2, c2) {
  var d2 = a2.stateNode;
  b2 = b2.childContextTypes;
  if (typeof d2.getChildContext !== "function")
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in b2))
      throw Error(p2(108, Qa(a2) || "Unknown", e2));
  return A2({}, c2, d2);
}
function bg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Uf;
  Wf = H2.current;
  G2(H2, a2);
  G2(Vf, Vf.current);
  return true;
}
function cg(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2)
    throw Error(p2(169));
  c2 ? (a2 = ag(a2, b2, Wf), d2.__reactInternalMemoizedMergedChildContext = a2, E2(Vf), E2(H2), G2(H2, a2)) : E2(Vf);
  G2(Vf, c2);
}
var dg = null;
var eg = false;
var fg = false;
function gg(a2) {
  dg === null ? dg = [a2] : dg.push(a2);
}
function hg(a2) {
  eg = true;
  gg(a2);
}
function ig() {
  if (!fg && dg !== null) {
    fg = true;
    var a2 = 0, b2 = C2;
    try {
      var c2 = dg;
      for (C2 = 1; a2 < c2.length; a2++) {
        var d2 = c2[a2];
        do
          d2 = d2(true);
        while (d2 !== null);
      }
      dg = null;
      eg = false;
    } catch (e2) {
      throw dg !== null && (dg = dg.slice(a2 + 1)), $b(ec, ig), e2;
    } finally {
      C2 = b2, fg = false;
    }
  }
  return null;
}
var jg = ta.ReactCurrentBatchConfig;
function kg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A2({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2)
      b2[c2] === void 0 && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
var lg = Tf(null);
var mg = null;
var ng = null;
var og = null;
function pg() {
  og = ng = mg = null;
}
function qg(a2) {
  var b2 = lg.current;
  E2(lg);
  a2._currentValue = b2;
}
function rg(a2, b2, c2) {
  for (; a2 !== null; ) {
    var d2 = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, d2 !== null && (d2.childLanes |= b2)) : d2 !== null && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a2 === c2)
      break;
    a2 = a2.return;
  }
}
function sg(a2, b2) {
  mg = a2;
  og = ng = null;
  a2 = a2.dependencies;
  a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (tg = true), a2.firstContext = null);
}
function ug(a2) {
  var b2 = a2._currentValue;
  if (og !== a2)
    if (a2 = {context: a2, memoizedValue: b2, next: null}, ng === null) {
      if (mg === null)
        throw Error(p2(308));
      ng = a2;
      mg.dependencies = {lanes: 0, firstContext: a2};
    } else
      ng = ng.next = a2;
  return b2;
}
var vg = null;
var wg = false;
function xg(a2) {
  a2.updateQueue = {baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null, interleaved: null, lanes: 0}, effects: null};
}
function yg(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = {baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects});
}
function zg(a2, b2) {
  return {eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null};
}
function Ag(a2, b2) {
  var c2 = a2.updateQueue;
  c2 !== null && (c2 = c2.shared, Bg(a2) ? (a2 = c2.interleaved, a2 === null ? (b2.next = b2, vg === null ? vg = [c2] : vg.push(c2)) : (b2.next = a2.next, a2.next = b2), c2.interleaved = b2) : (a2 = c2.pending, a2 === null ? b2.next = b2 : (b2.next = a2.next, a2.next = b2), c2.pending = b2));
}
function Cg(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (b2 !== null && (b2 = b2.shared, (c2 & 4194240) !== 0)) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Bc(a2, c2);
  }
}
function Dg(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (d2 !== null && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (c2 !== null) {
      do {
        var g2 = {eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null};
        f2 === null ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (c2 !== null);
      f2 === null ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = {baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects};
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  a2 === null ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function Eg(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  wg = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (h2 !== null) {
    e2.shared.pending = null;
    var k2 = h2, l3 = k2.next;
    k2.next = null;
    g2 === null ? f2 = l3 : g2.next = l3;
    g2 = k2;
    var n3 = a2.alternate;
    n3 !== null && (n3 = n3.updateQueue, h2 = n3.lastBaseUpdate, h2 !== g2 && (h2 === null ? n3.firstBaseUpdate = l3 : h2.next = l3, n3.lastBaseUpdate = k2));
  }
  if (f2 !== null) {
    var u2 = e2.baseState;
    g2 = 0;
    n3 = l3 = k2 = null;
    h2 = f2;
    do {
      var q3 = h2.lane, y3 = h2.eventTime;
      if ((d2 & q3) === q3) {
        n3 !== null && (n3 = n3.next = {
          eventTime: y3,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var m2 = a2, w3 = h2;
          q3 = b2;
          y3 = c2;
          switch (w3.tag) {
            case 1:
              m2 = w3.payload;
              if (typeof m2 === "function") {
                u2 = m2.call(y3, u2, q3);
                break a;
              }
              u2 = m2;
              break a;
            case 3:
              m2.flags = m2.flags & -65537 | 128;
            case 0:
              m2 = w3.payload;
              q3 = typeof m2 === "function" ? m2.call(y3, u2, q3) : m2;
              if (q3 === null || q3 === void 0)
                break a;
              u2 = A2({}, u2, q3);
              break a;
            case 2:
              wg = true;
          }
        }
        h2.callback !== null && h2.lane !== 0 && (a2.flags |= 64, q3 = e2.effects, q3 === null ? e2.effects = [h2] : q3.push(h2));
      } else
        y3 = {eventTime: y3, lane: q3, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null}, n3 === null ? (l3 = n3 = y3, k2 = u2) : n3 = n3.next = y3, g2 |= q3;
      h2 = h2.next;
      if (h2 === null)
        if (h2 = e2.shared.pending, h2 === null)
          break;
        else
          q3 = h2, h2 = q3.next, q3.next = null, e2.lastBaseUpdate = q3, e2.shared.pending = null;
    } while (1);
    n3 === null && (k2 = u2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l3;
    e2.lastBaseUpdate = n3;
    b2 = e2.shared.interleaved;
    if (b2 !== null) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else
      f2 === null && (e2.shared.lanes = 0);
    Fg |= g2;
    a2.lanes = g2;
    a2.memoizedState = u2;
  }
}
function Gg(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (a2 !== null)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (e2 !== null) {
        d2.callback = null;
        d2 = c2;
        if (typeof e2 !== "function")
          throw Error(p2(191, e2));
        e2.call(d2);
      }
    }
}
var Hg = new react.Component().refs;
function Ig(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = c2 === null || c2 === void 0 ? b2 : A2({}, b2, c2);
  a2.memoizedState = c2;
  a2.lanes === 0 && (a2.updateQueue.baseState = c2);
}
var Mg = {isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Ub(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = Jg(), e2 = Kg(a2), f2 = zg(d2, e2);
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a2, f2);
  b2 = Lg(a2, e2, d2);
  b2 !== null && Cg(b2, a2, e2);
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = Jg(), e2 = Kg(a2), f2 = zg(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a2, f2);
  b2 = Lg(a2, e2, d2);
  b2 !== null && Cg(b2, a2, e2);
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = Jg(), d2 = Kg(a2), e2 = zg(c2, d2);
  e2.tag = 2;
  b2 !== void 0 && b2 !== null && (e2.callback = b2);
  Ag(a2, e2);
  b2 = Lg(a2, d2, c2);
  b2 !== null && Cg(b2, a2, d2);
}};
function Ng(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !He(c2, d2) || !He(e2, f2) : true;
}
function Og(a2, b2, c2) {
  var d2 = false, e2 = Uf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = ug(f2) : (e2 = Yf(b2) ? Wf : H2.current, d2 = b2.contextTypes, f2 = (d2 = d2 !== null && d2 !== void 0) ? Xf(a2, e2) : Uf);
  b2 = new b2(c2, f2);
  a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Mg;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Pg(a2, b2, c2, d2) {
  a2 = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c2, d2);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && Mg.enqueueReplaceState(b2, b2.state, null);
}
function Qg(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = Hg;
  xg(a2);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e2.context = ug(f2) : (f2 = Yf(b2) ? Wf : H2.current, e2.context = Xf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Ig(a2, b2, f2, c2), e2.state = a2.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e2.getSnapshotBeforeUpdate === "function" || typeof e2.UNSAFE_componentWillMount !== "function" && typeof e2.componentWillMount !== "function" || (b2 = e2.state, typeof e2.componentWillMount === "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Mg.enqueueReplaceState(e2, e2.state, null), Eg(a2, c2, e2, d2), e2.state = a2.memoizedState);
  typeof e2.componentDidMount === "function" && (a2.flags |= 4194308);
}
var Rg = [];
var Sg = 0;
var Tg = null;
var Ug = 0;
var Vg = [];
var Wg = 0;
var Xg = null;
var Yg = 1;
var Zg = "";
function $g(a2, b2) {
  Rg[Sg++] = Ug;
  Rg[Sg++] = Tg;
  Tg = a2;
  Ug = b2;
}
function ah(a2, b2, c2) {
  Vg[Wg++] = Yg;
  Vg[Wg++] = Zg;
  Vg[Wg++] = Xg;
  Xg = a2;
  var d2 = Yg;
  a2 = Zg;
  var e2 = 32 - nc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - nc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    Yg = 1 << 32 - nc(b2) + e2 | c2 << e2 | d2;
    Zg = f2 + a2;
  } else
    Yg = 1 << f2 | c2 << e2 | d2, Zg = a2;
}
function bh(a2) {
  a2.return !== null && ($g(a2, 1), ah(a2, 1, 0));
}
function ch(a2) {
  for (; a2 === Tg; )
    Tg = Rg[--Sg], Rg[Sg] = null, Ug = Rg[--Sg], Rg[Sg] = null;
  for (; a2 === Xg; )
    Xg = Vg[--Wg], Vg[Wg] = null, Zg = Vg[--Wg], Vg[Wg] = null, Yg = Vg[--Wg], Vg[Wg] = null;
}
var dh = null;
var eh = null;
var I2 = false;
var fh = null;
function gh(a2, b2) {
  var c2 = hh(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  b2 === null ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function ih(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = b2.nodeType !== 1 || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a2.stateNode = b2, dh = a2, eh = Kf(b2.firstChild), true) : false;
    case 6:
      return b2 = a2.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a2.stateNode = b2, dh = a2, eh = null, true) : false;
    case 13:
      return b2 = b2.nodeType !== 8 ? null : b2, b2 !== null ? (c2 = Xg !== null ? {id: Yg, overflow: Zg} : null, a2.memoizedState = {dehydrated: b2, treeContext: c2, retryLane: 1073741824}, c2 = hh(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, dh = a2, eh = null, true) : false;
    default:
      return false;
  }
}
function jh(a2) {
  return (a2.mode & 1) !== 0 && (a2.flags & 128) === 0;
}
function kh(a2) {
  if (I2) {
    var b2 = eh;
    if (b2) {
      var c2 = b2;
      if (!ih(a2, b2)) {
        if (jh(a2))
          throw Error(p2(418));
        b2 = Kf(c2.nextSibling);
        var d2 = dh;
        b2 && ih(a2, b2) ? gh(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I2 = false, dh = a2);
      }
    } else {
      if (jh(a2))
        throw Error(p2(418));
      a2.flags = a2.flags & -4097 | 2;
      I2 = false;
      dh = a2;
    }
  }
}
function lh(a2) {
  for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
    a2 = a2.return;
  dh = a2;
}
function mh(a2) {
  if (a2 !== dh)
    return false;
  if (!I2)
    return lh(a2), I2 = true, false;
  var b2;
  (b2 = a2.tag !== 3) && !(b2 = a2.tag !== 5) && (b2 = a2.type, b2 = b2 !== "head" && b2 !== "body" && !Df(a2.type, a2.memoizedProps));
  if (b2 && (b2 = eh)) {
    if (jh(a2)) {
      for (a2 = eh; a2; )
        a2 = Kf(a2.nextSibling);
      throw Error(p2(418));
    }
    for (; b2; )
      gh(a2, b2), b2 = Kf(b2.nextSibling);
  }
  lh(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(p2(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c2 = a2.data;
          if (c2 === "/$") {
            if (b2 === 0) {
              eh = Kf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            c2 !== "$" && c2 !== "$!" && c2 !== "$?" || b2++;
        }
        a2 = a2.nextSibling;
      }
      eh = null;
    }
  } else
    eh = dh ? Kf(a2.stateNode.nextSibling) : null;
  return true;
}
function nh() {
  eh = dh = null;
  I2 = false;
}
function oh(a2) {
  fh === null ? fh = [a2] : fh.push(a2);
}
function ph(a2, b2, c2) {
  a2 = c2.ref;
  if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (c2.tag !== 1)
          throw Error(p2(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(p2(147, a2));
      var e2 = d2, f2 = "" + a2;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        b3 === Hg && (b3 = e2.refs = {});
        a3 === null ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if (typeof a2 !== "string")
      throw Error(p2(284));
    if (!c2._owner)
      throw Error(p2(290, a2));
  }
  return a2;
}
function qh(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p2(31, a2 === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function rh(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function sh(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.deletions;
      d3 === null ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a2)
      return null;
    for (; d3 !== null; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = new Map(); b3 !== null; )
      b3.key !== null ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = th(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2)
      return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (d3 !== null)
      return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a2 && b3.alternate === null && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (b3 === null || b3.tag !== 6)
      return b3 = uh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === wa)
      return n3(a3, b3, c3.props.children, d3, c3.key);
    if (b3 !== null && (b3.elementType === f3 || typeof f3 === "object" && f3 !== null && f3.$$typeof === Ga && rh(f3) === b3.type))
      return d3 = e2(b3, c3.props), d3.ref = ph(a3, b3, c3), d3.return = a3, d3;
    d3 = vh(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = ph(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l3(a3, b3, c3, d3) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = wh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function n3(a3, b3, c3, d3, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = xh(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function u2(a3, b3, c3) {
    if (typeof b3 === "string" && b3 !== "" || typeof b3 === "number")
      return b3 = uh("" + b3, a3.mode, c3), b3.return = a3, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case ua:
          return c3 = vh(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = ph(a3, null, b3), c3.return = a3, c3;
        case va:
          return b3 = wh(b3, a3.mode, c3), b3.return = a3, b3;
        case Ga:
          var d3 = b3._init;
          return u2(a3, d3(b3._payload), c3);
      }
      if (db(b3) || Ja(b3))
        return b3 = xh(b3, a3.mode, c3, null), b3.return = a3, b3;
      qh(a3, b3);
    }
    return null;
  }
  function q3(a3, b3, c3, d3) {
    var e3 = b3 !== null ? b3.key : null;
    if (typeof c3 === "string" && c3 !== "" || typeof c3 === "number")
      return e3 !== null ? null : h2(a3, b3, "" + c3, d3);
    if (typeof c3 === "object" && c3 !== null) {
      switch (c3.$$typeof) {
        case ua:
          return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
        case va:
          return c3.key === e3 ? l3(a3, b3, c3, d3) : null;
        case Ga:
          return e3 = c3._init, q3(a3, b3, e3(c3._payload), d3);
      }
      if (db(c3) || Ja(c3))
        return e3 !== null ? null : n3(a3, b3, c3, d3, null);
      qh(a3, c3);
    }
    return null;
  }
  function y3(a3, b3, c3, d3, e3) {
    if (typeof d3 === "string" && d3 !== "" || typeof d3 === "number")
      return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if (typeof d3 === "object" && d3 !== null) {
      switch (d3.$$typeof) {
        case ua:
          return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
        case va:
          return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, l3(b3, a3, d3, e3);
        case Ga:
          var f3 = d3._init;
          return y3(a3, b3, c3, f3(d3._payload), e3);
      }
      if (db(d3) || Ja(d3))
        return a3 = a3.get(c3) || null, n3(b3, a3, d3, e3, null);
      qh(b3, d3);
    }
    return null;
  }
  function m2(e3, g3, h3, k3) {
    for (var l4 = null, n4 = null, r3 = g3, m3 = g3 = 0, x3 = null; r3 !== null && m3 < h3.length; m3++) {
      r3.index > m3 ? (x3 = r3, r3 = null) : x3 = r3.sibling;
      var v3 = q3(e3, r3, h3[m3], k3);
      if (v3 === null) {
        r3 === null && (r3 = x3);
        break;
      }
      a2 && r3 && v3.alternate === null && b2(e3, r3);
      g3 = f2(v3, g3, m3);
      n4 === null ? l4 = v3 : n4.sibling = v3;
      n4 = v3;
      r3 = x3;
    }
    if (m3 === h3.length)
      return c2(e3, r3), I2 && $g(e3, m3), l4;
    if (r3 === null) {
      for (; m3 < h3.length; m3++)
        r3 = u2(e3, h3[m3], k3), r3 !== null && (g3 = f2(r3, g3, m3), n4 === null ? l4 = r3 : n4.sibling = r3, n4 = r3);
      I2 && $g(e3, m3);
      return l4;
    }
    for (r3 = d2(e3, r3); m3 < h3.length; m3++)
      x3 = y3(r3, e3, m3, h3[m3], k3), x3 !== null && (a2 && x3.alternate !== null && r3.delete(x3.key === null ? m3 : x3.key), g3 = f2(x3, g3, m3), n4 === null ? l4 = x3 : n4.sibling = x3, n4 = x3);
    a2 && r3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I2 && $g(e3, m3);
    return l4;
  }
  function w3(e3, g3, h3, k3) {
    var l4 = Ja(h3);
    if (typeof l4 !== "function")
      throw Error(p2(150));
    h3 = l4.call(h3);
    if (h3 == null)
      throw Error(p2(151));
    for (var n4 = l4 = null, m3 = g3, r3 = g3 = 0, x3 = null, v3 = h3.next(); m3 !== null && !v3.done; r3++, v3 = h3.next()) {
      m3.index > r3 ? (x3 = m3, m3 = null) : x3 = m3.sibling;
      var w4 = q3(e3, m3, v3.value, k3);
      if (w4 === null) {
        m3 === null && (m3 = x3);
        break;
      }
      a2 && m3 && w4.alternate === null && b2(e3, m3);
      g3 = f2(w4, g3, r3);
      n4 === null ? l4 = w4 : n4.sibling = w4;
      n4 = w4;
      m3 = x3;
    }
    if (v3.done)
      return c2(e3, m3), I2 && $g(e3, r3), l4;
    if (m3 === null) {
      for (; !v3.done; r3++, v3 = h3.next())
        v3 = u2(e3, v3.value, k3), v3 !== null && (g3 = f2(v3, g3, r3), n4 === null ? l4 = v3 : n4.sibling = v3, n4 = v3);
      I2 && $g(e3, r3);
      return l4;
    }
    for (m3 = d2(e3, m3); !v3.done; r3++, v3 = h3.next())
      v3 = y3(m3, e3, r3, v3.value, k3), v3 !== null && (a2 && v3.alternate !== null && m3.delete(v3.key === null ? r3 : v3.key), g3 = f2(v3, g3, r3), n4 === null ? l4 = v3 : n4.sibling = v3, n4 = v3);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I2 && $g(e3, r3);
    return l4;
  }
  function J3(a3, d3, f3, h3) {
    typeof f3 === "object" && f3 !== null && f3.type === wa && f3.key === null && (f3 = f3.props.children);
    if (typeof f3 === "object" && f3 !== null) {
      switch (f3.$$typeof) {
        case ua:
          a: {
            for (var k3 = f3.key, l4 = d3; l4 !== null; ) {
              if (l4.key === k3) {
                k3 = f3.type;
                if (k3 === wa) {
                  if (l4.tag === 7) {
                    c2(a3, l4.sibling);
                    d3 = e2(l4, f3.props.children);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                } else if (l4.elementType === k3 || typeof k3 === "object" && k3 !== null && k3.$$typeof === Ga && rh(k3) === l4.type) {
                  c2(a3, l4.sibling);
                  d3 = e2(l4, f3.props);
                  d3.ref = ph(a3, l4, f3);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                }
                c2(a3, l4);
                break;
              } else
                b2(a3, l4);
              l4 = l4.sibling;
            }
            f3.type === wa ? (d3 = xh(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = vh(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = ph(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case va:
          a: {
            for (l4 = f3.key; d3 !== null; ) {
              if (d3.key === l4)
                if (d3.tag === 4 && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
              else
                b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = wh(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
        case Ga:
          return l4 = f3._init, J3(a3, d3, l4(f3._payload), h3);
      }
      if (db(f3))
        return m2(a3, d3, f3, h3);
      if (Ja(f3))
        return w3(a3, d3, f3, h3);
      qh(a3, f3);
    }
    return typeof f3 === "string" && f3 !== "" || typeof f3 === "number" ? (f3 = "" + f3, d3 !== null && d3.tag === 6 ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = uh(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
  }
  return J3;
}
var yh = sh(true);
var zh = sh(false);
var Ah = {};
var Bh = Tf(Ah);
var Ch = Tf(Ah);
var Dh = Tf(Ah);
function Eh(a2) {
  if (a2 === Ah)
    throw Error(p2(174));
  return a2;
}
function Fh(a2, b2) {
  G2(Dh, b2);
  G2(Ch, a2);
  G2(Bh, Ah);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : kb(null, "");
      break;
    default:
      a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = kb(b2, a2);
  }
  E2(Bh);
  G2(Bh, b2);
}
function Gh() {
  E2(Bh);
  E2(Ch);
  E2(Dh);
}
function Hh(a2) {
  Eh(Dh.current);
  var b2 = Eh(Bh.current);
  var c2 = kb(b2, a2.type);
  b2 !== c2 && (G2(Ch, a2), G2(Bh, c2));
}
function Ih(a2) {
  Ch.current === a2 && (E2(Bh), E2(Ch));
}
var K2 = Tf(0);
function Jh(a2) {
  for (var b2 = a2; b2 !== null; ) {
    if (b2.tag === 13) {
      var c2 = b2.memoizedState;
      if (c2 !== null && (c2 = c2.dehydrated, c2 === null || c2.data === "$?" || c2.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 128) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Kh = [];
function Lh() {
  for (var a2 = 0; a2 < Kh.length; a2++)
    Kh[a2]._workInProgressVersionPrimary = null;
  Kh.length = 0;
}
var Mh = ta.ReactCurrentDispatcher;
var Nh = ta.ReactCurrentBatchConfig;
var Oh = 0;
var L2 = null;
var M2 = null;
var N2 = null;
var Ph = false;
var Qh = false;
var Rh = 0;
var Sh = 0;
function O2() {
  throw Error(p2(321));
}
function Th(a2, b2) {
  if (b2 === null)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
    if (!Ge(a2[c2], b2[c2]))
      return false;
  return true;
}
function Uh(a2, b2, c2, d2, e2, f2) {
  Oh = f2;
  L2 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Mh.current = a2 === null || a2.memoizedState === null ? Vh : Wh;
  a2 = c2(d2, e2);
  if (Qh) {
    f2 = 0;
    do {
      Qh = false;
      Rh = 0;
      if (25 <= f2)
        throw Error(p2(301));
      f2 += 1;
      N2 = M2 = null;
      b2.updateQueue = null;
      Mh.current = Xh;
      a2 = c2(d2, e2);
    } while (Qh);
  }
  Mh.current = Yh;
  b2 = M2 !== null && M2.next !== null;
  Oh = 0;
  N2 = M2 = L2 = null;
  Ph = false;
  if (b2)
    throw Error(p2(300));
  return a2;
}
function Zh() {
  var a2 = Rh !== 0;
  Rh = 0;
  return a2;
}
function $h() {
  var a2 = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  N2 === null ? L2.memoizedState = N2 = a2 : N2 = N2.next = a2;
  return N2;
}
function ai() {
  if (M2 === null) {
    var a2 = L2.alternate;
    a2 = a2 !== null ? a2.memoizedState : null;
  } else
    a2 = M2.next;
  var b2 = N2 === null ? L2.memoizedState : N2.next;
  if (b2 !== null)
    N2 = b2, M2 = a2;
  else {
    if (a2 === null)
      throw Error(p2(310));
    M2 = a2;
    a2 = {memoizedState: M2.memoizedState, baseState: M2.baseState, baseQueue: M2.baseQueue, queue: M2.queue, next: null};
    N2 === null ? L2.memoizedState = N2 = a2 : N2 = N2.next = a2;
  }
  return N2;
}
function bi(a2, b2) {
  return typeof b2 === "function" ? b2(a2) : b2;
}
function ci(a2) {
  var b2 = ai(), c2 = b2.queue;
  if (c2 === null)
    throw Error(p2(311));
  c2.lastRenderedReducer = a2;
  var d2 = M2, e2 = d2.baseQueue, f2 = c2.pending;
  if (f2 !== null) {
    if (e2 !== null) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (e2 !== null) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l3 = f2;
    do {
      var n3 = l3.lane;
      if ((Oh & n3) === n3)
        k2 !== null && (k2 = k2.next = {lane: 0, action: l3.action, hasEagerState: l3.hasEagerState, eagerState: l3.eagerState, next: null}), d2 = l3.hasEagerState ? l3.eagerState : a2(d2, l3.action);
      else {
        var u2 = {
          lane: n3,
          action: l3.action,
          hasEagerState: l3.hasEagerState,
          eagerState: l3.eagerState,
          next: null
        };
        k2 === null ? (h2 = k2 = u2, g2 = d2) : k2 = k2.next = u2;
        L2.lanes |= n3;
        Fg |= n3;
      }
      l3 = l3.next;
    } while (l3 !== null && l3 !== f2);
    k2 === null ? g2 = d2 : k2.next = h2;
    Ge(d2, b2.memoizedState) || (tg = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a2 = c2.interleaved;
  if (a2 !== null) {
    e2 = a2;
    do
      f2 = e2.lane, L2.lanes |= f2, Fg |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else
    e2 === null && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function di(a2) {
  var b2 = ai(), c2 = b2.queue;
  if (c2 === null)
    throw Error(p2(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (e2 !== null) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    Ge(f2, b2.memoizedState) || (tg = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function ei() {
}
function fi(a2, b2) {
  var c2 = L2, d2 = ai(), e2 = b2(), f2 = !Ge(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, tg = true);
  d2 = d2.queue;
  gi(hi.bind(null, c2, d2, a2), [a2]);
  if (d2.getSnapshot !== b2 || f2 || N2 !== null && N2.memoizedState.tag & 1) {
    c2.flags |= 2048;
    ii(9, ji.bind(null, c2, d2, e2, b2), void 0, null);
    if (P2 === null)
      throw Error(p2(349));
    (Oh & 30) !== 0 || ki(c2, b2, e2);
  }
  return e2;
}
function ki(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = {getSnapshot: b2, value: c2};
  b2 = L2.updateQueue;
  b2 === null ? (b2 = {lastEffect: null, stores: null}, L2.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, c2 === null ? b2.stores = [a2] : c2.push(a2));
}
function ji(a2, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  li(b2) && Lg(a2, 1, -1);
}
function hi(a2, b2, c2) {
  return c2(function() {
    li(b2) && Lg(a2, 1, -1);
  });
}
function li(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !Ge(a2, c2);
  } catch (d2) {
    return true;
  }
}
function mi(a2) {
  var b2 = $h();
  typeof a2 === "function" && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: a2};
  b2.queue = a2;
  a2 = a2.dispatch = ni.bind(null, L2, a2);
  return [b2.memoizedState, a2];
}
function ii(a2, b2, c2, d2) {
  a2 = {tag: a2, create: b2, destroy: c2, deps: d2, next: null};
  b2 = L2.updateQueue;
  b2 === null ? (b2 = {lastEffect: null, stores: null}, L2.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, c2 === null ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function oi() {
  return ai().memoizedState;
}
function pi(a2, b2, c2, d2) {
  var e2 = $h();
  L2.flags |= a2;
  e2.memoizedState = ii(1 | b2, c2, void 0, d2 === void 0 ? null : d2);
}
function qi(a2, b2, c2, d2) {
  var e2 = ai();
  d2 = d2 === void 0 ? null : d2;
  var f2 = void 0;
  if (M2 !== null) {
    var g2 = M2.memoizedState;
    f2 = g2.destroy;
    if (d2 !== null && Th(d2, g2.deps)) {
      e2.memoizedState = ii(b2, c2, f2, d2);
      return;
    }
  }
  L2.flags |= a2;
  e2.memoizedState = ii(1 | b2, c2, f2, d2);
}
function ri(a2, b2) {
  return pi(8390656, 8, a2, b2);
}
function gi(a2, b2) {
  return qi(2048, 8, a2, b2);
}
function si(a2, b2) {
  return qi(4, 2, a2, b2);
}
function ti(a2, b2) {
  return qi(4, 4, a2, b2);
}
function ui(a2, b2) {
  if (typeof b2 === "function")
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function vi(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return qi(4, 4, ui.bind(null, b2, a2), c2);
}
function wi() {
}
function xi(a2, b2) {
  var c2 = ai();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Th(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function yi(a2, b2) {
  var c2 = ai();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Th(b2, d2[1]))
    return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function zi(a2, b2, c2) {
  if ((Oh & 21) === 0)
    return a2.baseState && (a2.baseState = false, tg = true), a2.memoizedState = c2;
  Ge(c2, b2) || (c2 = xc(), L2.lanes |= c2, Fg |= c2, a2.baseState = true);
  return b2;
}
function Ai(a2, b2) {
  var c2 = C2;
  C2 = c2 !== 0 && 4 > c2 ? c2 : 4;
  a2(true);
  var d2 = Nh.transition;
  Nh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C2 = c2, Nh.transition = d2;
  }
}
function Bi() {
  return ai().memoizedState;
}
function Ci(a2, b2, c2) {
  var d2 = Kg(a2);
  c2 = {lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null};
  Di(a2) ? Ei(b2, c2) : (Fi(a2, b2, c2), c2 = Jg(), a2 = Lg(a2, d2, c2), a2 !== null && Gi(a2, b2, d2));
}
function ni(a2, b2, c2) {
  var d2 = Kg(a2), e2 = {lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null};
  if (Di(a2))
    Ei(b2, e2);
  else {
    Fi(a2, b2, e2);
    var f2 = a2.alternate;
    if (a2.lanes === 0 && (f2 === null || f2.lanes === 0) && (f2 = b2.lastRenderedReducer, f2 !== null))
      try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (Ge(h2, g2))
          return;
      } catch (k2) {
      } finally {
      }
    c2 = Jg();
    a2 = Lg(a2, d2, c2);
    a2 !== null && Gi(a2, b2, d2);
  }
}
function Di(a2) {
  var b2 = a2.alternate;
  return a2 === L2 || b2 !== null && b2 === L2;
}
function Ei(a2, b2) {
  Qh = Ph = true;
  var c2 = a2.pending;
  c2 === null ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function Fi(a2, b2, c2) {
  Bg(a2) ? (a2 = b2.interleaved, a2 === null ? (c2.next = c2, vg === null ? vg = [b2] : vg.push(b2)) : (c2.next = a2.next, a2.next = c2), b2.interleaved = c2) : (a2 = b2.pending, a2 === null ? c2.next = c2 : (c2.next = a2.next, a2.next = c2), b2.pending = c2);
}
function Gi(a2, b2, c2) {
  if ((c2 & 4194240) !== 0) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Bc(a2, c2);
  }
}
var Yh = {readContext: ug, useCallback: O2, useContext: O2, useEffect: O2, useImperativeHandle: O2, useInsertionEffect: O2, useLayoutEffect: O2, useMemo: O2, useReducer: O2, useRef: O2, useState: O2, useDebugValue: O2, useDeferredValue: O2, useTransition: O2, useMutableSource: O2, useSyncExternalStore: O2, useId: O2, unstable_isNewReconciler: false};
var Vh = {readContext: ug, useCallback: function(a2, b2) {
  $h().memoizedState = [a2, b2 === void 0 ? null : b2];
  return a2;
}, useContext: ug, useEffect: ri, useImperativeHandle: function(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return pi(4194308, 4, ui.bind(null, b2, a2), c2);
}, useLayoutEffect: function(a2, b2) {
  return pi(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return pi(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = $h();
  b2 = b2 === void 0 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = $h();
  b2 = c2 !== void 0 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2};
  d2.queue = a2;
  a2 = a2.dispatch = Ci.bind(null, L2, a2);
  return [d2.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = $h();
  a2 = {current: a2};
  return b2.memoizedState = a2;
}, useState: mi, useDebugValue: wi, useDeferredValue: function(a2) {
  return $h().memoizedState = a2;
}, useTransition: function() {
  var a2 = mi(false), b2 = a2[0];
  a2 = Ai.bind(null, a2[1]);
  $h().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d2 = L2, e2 = $h();
  if (I2) {
    if (c2 === void 0)
      throw Error(p2(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (P2 === null)
      throw Error(p2(349));
    (Oh & 30) !== 0 || ki(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = {value: c2, getSnapshot: b2};
  e2.queue = f2;
  ri(hi.bind(null, d2, f2, a2), [a2]);
  d2.flags |= 2048;
  ii(9, ji.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = $h(), b2 = P2.identifierPrefix;
  if (I2) {
    var c2 = Zg;
    var d2 = Yg;
    c2 = (d2 & ~(1 << 32 - nc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Rh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else
    c2 = Sh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false};
var Wh = {
  readContext: ug,
  useCallback: xi,
  useContext: ug,
  useEffect: gi,
  useImperativeHandle: vi,
  useInsertionEffect: si,
  useLayoutEffect: ti,
  useMemo: yi,
  useReducer: ci,
  useRef: oi,
  useState: function() {
    return ci(bi);
  },
  useDebugValue: wi,
  useDeferredValue: function(a2) {
    var b2 = ai();
    return zi(b2, M2.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = ci(bi)[0], b2 = ai().memoizedState;
    return [a2, b2];
  },
  useMutableSource: ei,
  useSyncExternalStore: fi,
  useId: Bi,
  unstable_isNewReconciler: false
};
var Xh = {readContext: ug, useCallback: xi, useContext: ug, useEffect: gi, useImperativeHandle: vi, useInsertionEffect: si, useLayoutEffect: ti, useMemo: yi, useReducer: di, useRef: oi, useState: function() {
  return di(bi);
}, useDebugValue: wi, useDeferredValue: function(a2) {
  var b2 = ai();
  return M2 === null ? b2.memoizedState = a2 : zi(b2, M2.memoizedState, a2);
}, useTransition: function() {
  var a2 = di(bi)[0], b2 = ai().memoizedState;
  return [a2, b2];
}, useMutableSource: ei, useSyncExternalStore: fi, useId: Bi, unstable_isNewReconciler: false};
function Hi(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Oa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return {value: a2, source: b2, stack: e2};
}
function Ii(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Ji = typeof WeakMap === "function" ? WeakMap : Map;
function Ki(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  c2.payload = {element: null};
  var d2 = b2.value;
  c2.callback = function() {
    Li || (Li = true, Mi = d2);
    Ii(a2, b2);
  };
  return c2;
}
function Ni(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if (typeof d2 === "function") {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Ii(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c2.callback = function() {
    Ii(a2, b2);
    typeof d2 !== "function" && (Oi === null ? Oi = new Set([this]) : Oi.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, {componentStack: c3 !== null ? c3 : ""});
  });
  return c2;
}
function Pi(a2, b2, c2) {
  var d2 = a2.pingCache;
  if (d2 === null) {
    d2 = a2.pingCache = new Ji();
    var e2 = new Set();
    d2.set(b2, e2);
  } else
    e2 = d2.get(b2), e2 === void 0 && (e2 = new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a2 = Qi.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Ri(a2) {
  do {
    var b2;
    if (b2 = a2.tag === 13)
      b2 = a2.memoizedState, b2 = b2 !== null ? b2.dehydrated !== null ? true : false : true;
    if (b2)
      return a2;
    a2 = a2.return;
  } while (a2 !== null);
  return null;
}
function Si(a2, b2, c2, d2, e2) {
  if ((a2.mode & 1) === 0)
    return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, c2.tag === 1 && (c2.alternate === null ? c2.tag = 17 : (b2 = zg(-1, 1), b2.tag = 2, Ag(c2, b2))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Ti;
var Ui;
var Vi;
var Wi;
Ti = function(a2, b2) {
  for (var c2 = b2.child; c2 !== null; ) {
    if (c2.tag === 5 || c2.tag === 6)
      a2.appendChild(c2.stateNode);
    else if (c2.tag !== 4 && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Ui = function() {
};
Vi = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    Eh(Bh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Xa(a2, e2);
        d2 = Xa(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = A2({}, e2, {value: void 0});
        d2 = A2({}, d2, {value: void 0});
        f2 = [];
        break;
      case "textarea":
        e2 = fb(a2, e2);
        d2 = fb(a2, d2);
        f2 = [];
        break;
      default:
        typeof e2.onClick !== "function" && typeof d2.onClick === "function" && (a2.onclick = Af);
    }
    tb(c2, d2);
    var g2;
    c2 = null;
    for (l3 in e2)
      if (!d2.hasOwnProperty(l3) && e2.hasOwnProperty(l3) && e2[l3] != null)
        if (l3 === "style") {
          var h2 = e2[l3];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          l3 !== "dangerouslySetInnerHTML" && l3 !== "children" && l3 !== "suppressContentEditableWarning" && l3 !== "suppressHydrationWarning" && l3 !== "autoFocus" && (ea.hasOwnProperty(l3) ? f2 || (f2 = []) : (f2 = f2 || []).push(l3, null));
    for (l3 in d2) {
      var k2 = d2[l3];
      h2 = e2 != null ? e2[l3] : void 0;
      if (d2.hasOwnProperty(l3) && k2 !== h2 && (k2 != null || h2 != null))
        if (l3 === "style")
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(l3, c2)), c2 = k2;
        else
          l3 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f2 = f2 || []).push(l3, k2)) : l3 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f2 = f2 || []).push(l3, "" + k2) : l3 !== "suppressContentEditableWarning" && l3 !== "suppressHydrationWarning" && (ea.hasOwnProperty(l3) ? (k2 != null && l3 === "onScroll" && D2("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l3, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l3 = f2;
    if (b2.updateQueue = l3)
      b2.flags |= 4;
  }
};
Wi = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Xi(a2, b2) {
  if (!I2)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; b2 !== null; )
          b2.alternate !== null && (c2 = b2), b2 = b2.sibling;
        c2 === null ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; c2 !== null; )
          c2.alternate !== null && (d2 = c2), c2 = c2.sibling;
        d2 === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
}
function Q2(a2) {
  var b2 = a2.alternate !== null && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
  if (b2)
    for (var e2 = a2.child; e2 !== null; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else
    for (e2 = a2.child; e2 !== null; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d2;
  a2.childLanes = c2;
  return b2;
}
function Yi(a2, b2, c2) {
  var d2 = b2.pendingProps;
  ch(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Q2(b2), null;
    case 1:
      return Yf(b2.type) && Zf(), Q2(b2), null;
    case 3:
      d2 = b2.stateNode;
      Gh();
      E2(Vf);
      E2(H2);
      Lh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (a2 === null || a2.child === null)
        mh(b2) ? b2.flags |= 4 : a2 === null || a2.memoizedState.isDehydrated && (b2.flags & 256) === 0 || (b2.flags |= 1024, fh !== null && (Zi(fh), fh = null));
      Ui(a2, b2);
      Q2(b2);
      return null;
    case 5:
      Ih(b2);
      var e2 = Eh(Dh.current);
      c2 = b2.type;
      if (a2 !== null && b2.stateNode != null)
        Vi(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (b2.stateNode === null)
            throw Error(p2(166));
          Q2(b2);
          return null;
        }
        a2 = Eh(Bh.current);
        if (mh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Nf] = b2;
          d2[Of] = f2;
          a2 = (b2.mode & 1) !== 0;
          switch (c2) {
            case "dialog":
              D2("cancel", d2);
              D2("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D2("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < kf.length; e2++)
                D2(kf[e2], d2);
              break;
            case "source":
              D2("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D2("error", d2);
              D2("load", d2);
              break;
            case "details":
              D2("toggle", d2);
              break;
            case "input":
              Ya(d2, f2);
              D2("invalid", d2);
              break;
            case "select":
              d2._wrapperState = {wasMultiple: !!f2.multiple};
              D2("invalid", d2);
              break;
            case "textarea":
              gb(d2, f2), D2("invalid", d2);
          }
          tb(c2, f2);
          e2 = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              g2 === "children" ? typeof h2 === "string" ? d2.textContent !== h2 && (f2.suppressHydrationWarning !== true && zf(d2.textContent, h2, a2), e2 = ["children", h2]) : typeof h2 === "number" && d2.textContent !== "" + h2 && (f2.suppressHydrationWarning !== true && zf(d2.textContent, h2, a2), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && h2 != null && g2 === "onScroll" && D2("scroll", d2);
            }
          switch (c2) {
            case "input":
              Ua(d2);
              cb(d2, f2, true);
              break;
            case "textarea":
              Ua(d2);
              ib(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d2.onclick = Af);
          }
          d2 = e2;
          b2.updateQueue = d2;
          d2 !== null && (b2.flags |= 4);
        } else {
          g2 = e2.nodeType === 9 ? e2 : e2.ownerDocument;
          a2 === "http://www.w3.org/1999/xhtml" && (a2 = jb(c2));
          a2 === "http://www.w3.org/1999/xhtml" ? c2 === "script" ? (a2 = g2.createElement("div"), a2.innerHTML = "<script></script>", a2 = a2.removeChild(a2.firstChild)) : typeof d2.is === "string" ? a2 = g2.createElement(c2, {is: d2.is}) : (a2 = g2.createElement(c2), c2 === "select" && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[Nf] = b2;
          a2[Of] = d2;
          Ti(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g2 = ub(c2, d2);
            switch (c2) {
              case "dialog":
                D2("cancel", a2);
                D2("close", a2);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D2("load", a2);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < kf.length; e2++)
                  D2(kf[e2], a2);
                e2 = d2;
                break;
              case "source":
                D2("error", a2);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D2("error", a2);
                D2("load", a2);
                e2 = d2;
                break;
              case "details":
                D2("toggle", a2);
                e2 = d2;
                break;
              case "input":
                Ya(a2, d2);
                e2 = Xa(a2, d2);
                D2("invalid", a2);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a2._wrapperState = {wasMultiple: !!d2.multiple};
                e2 = A2({}, d2, {value: void 0});
                D2("invalid", a2);
                break;
              case "textarea":
                gb(a2, d2);
                e2 = fb(a2, d2);
                D2("invalid", a2);
                break;
              default:
                e2 = d2;
            }
            tb(c2, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                f2 === "style" ? rb(a2, k2) : f2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && mb(a2, k2)) : f2 === "children" ? typeof k2 === "string" ? (c2 !== "textarea" || k2 !== "") && nb(a2, k2) : typeof k2 === "number" && nb(a2, "" + k2) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ea.hasOwnProperty(f2) ? k2 != null && f2 === "onScroll" && D2("scroll", a2) : k2 != null && sa(a2, f2, k2, g2));
              }
            switch (c2) {
              case "input":
                Ua(a2);
                cb(a2, d2, false);
                break;
              case "textarea":
                Ua(a2);
                ib(a2);
                break;
              case "option":
                d2.value != null && a2.setAttribute("value", "" + Ra(d2.value));
                break;
              case "select":
                a2.multiple = !!d2.multiple;
                f2 = d2.value;
                f2 != null ? eb(a2, !!d2.multiple, f2, false) : d2.defaultValue != null && eb(a2, !!d2.multiple, d2.defaultValue, true);
                break;
              default:
                typeof e2.onClick === "function" && (a2.onclick = Af);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 512, b2.flags |= 2097152);
      }
      Q2(b2);
      return null;
    case 6:
      if (a2 && b2.stateNode != null)
        Wi(a2, b2, a2.memoizedProps, d2);
      else {
        if (typeof d2 !== "string" && b2.stateNode === null)
          throw Error(p2(166));
        c2 = Eh(Dh.current);
        Eh(Bh.current);
        if (mh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Nf] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a2 = dh, a2 !== null)
              switch (a2.tag) {
                case 3:
                  zf(d2.nodeValue, c2, (a2.mode & 1) !== 0);
                  break;
                case 5:
                  a2.memoizedProps.suppressHydrationWarning !== true && zf(d2.nodeValue, c2, (a2.mode & 1) !== 0);
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d2 = (c2.nodeType === 9 ? c2 : c2.ownerDocument).createTextNode(d2), d2[Nf] = b2, b2.stateNode = d2;
      }
      Q2(b2);
      return null;
    case 13:
      E2(K2);
      d2 = b2.memoizedState;
      if (I2 && eh !== null && (b2.mode & 1) !== 0 && (b2.flags & 128) === 0) {
        for (d2 = eh; d2; )
          d2 = Kf(d2.nextSibling);
        nh();
        b2.flags |= 98560;
        return b2;
      }
      if (d2 !== null && d2.dehydrated !== null) {
        d2 = mh(b2);
        if (a2 === null) {
          if (!d2)
            throw Error(p2(318));
          d2 = b2.memoizedState;
          d2 = d2 !== null ? d2.dehydrated : null;
          if (!d2)
            throw Error(p2(317));
          d2[Nf] = b2;
        } else
          nh(), (b2.flags & 128) === 0 && (b2.memoizedState = null), b2.flags |= 4;
        Q2(b2);
        return null;
      }
      fh !== null && (Zi(fh), fh = null);
      if ((b2.flags & 128) !== 0)
        return b2.lanes = c2, b2;
      d2 = d2 !== null;
      c2 = false;
      a2 === null ? mh(b2) : c2 = a2.memoizedState !== null;
      d2 !== c2 && d2 && (b2.child.flags |= 8192, (b2.mode & 1) !== 0 && (a2 === null || (K2.current & 1) !== 0 ? R2 === 0 && (R2 = 3) : $i()));
      b2.updateQueue !== null && (b2.flags |= 4);
      Q2(b2);
      return null;
    case 4:
      return Gh(), Ui(a2, b2), a2 === null && rf(b2.stateNode.containerInfo), Q2(b2), null;
    case 10:
      return qg(b2.type._context), Q2(b2), null;
    case 17:
      return Yf(b2.type) && Zf(), Q2(b2), null;
    case 19:
      E2(K2);
      f2 = b2.memoizedState;
      if (f2 === null)
        return Q2(b2), null;
      d2 = (b2.flags & 128) !== 0;
      g2 = f2.rendering;
      if (g2 === null)
        if (d2)
          Xi(f2, false);
        else {
          if (R2 !== 0 || a2 !== null && (a2.flags & 128) !== 0)
            for (a2 = b2.child; a2 !== null; ) {
              g2 = Jh(a2);
              if (g2 !== null) {
                b2.flags |= 128;
                Xi(f2, false);
                d2 = g2.updateQueue;
                d2 !== null && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; c2 !== null; )
                  f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = a2 === null ? null : {lanes: a2.lanes, firstContext: a2.firstContext}), c2 = c2.sibling;
                G2(K2, K2.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          f2.tail !== null && B2() > aj && (b2.flags |= 128, d2 = true, Xi(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d2)
          if (a2 = Jh(g2), a2 !== null) {
            if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, c2 !== null && (b2.updateQueue = c2, b2.flags |= 4), Xi(f2, true), f2.tail === null && f2.tailMode === "hidden" && !g2.alternate && !I2)
              return Q2(b2), null;
          } else
            2 * B2() - f2.renderingStartTime > aj && c2 !== 1073741824 && (b2.flags |= 128, d2 = true, Xi(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, c2 !== null ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (f2.tail !== null)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B2(), b2.sibling = null, c2 = K2.current, G2(K2, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      Q2(b2);
      return null;
    case 22:
    case 23:
      return bj(), d2 = b2.memoizedState !== null, a2 !== null && a2.memoizedState !== null !== d2 && (b2.flags |= 8192), d2 && (b2.mode & 1) !== 0 ? (cj & 1073741824) !== 0 && (Q2(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : Q2(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p2(156, b2.tag));
}
var dj = ta.ReactCurrentOwner;
var tg = false;
function ej(a2, b2, c2, d2) {
  b2.child = a2 === null ? zh(b2, null, c2, d2) : yh(b2, a2.child, c2, d2);
}
function fj(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  sg(b2, e2);
  d2 = Uh(a2, b2, c2, d2, f2, e2);
  c2 = Zh();
  if (a2 !== null && !tg)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, gj(a2, b2, e2);
  I2 && c2 && bh(b2);
  b2.flags |= 1;
  ej(a2, b2, d2, e2);
  return b2.child;
}
function hj(a2, b2, c2, d2, e2) {
  if (a2 === null) {
    var f2 = c2.type;
    if (typeof f2 === "function" && !ij(f2) && f2.defaultProps === void 0 && c2.compare === null && c2.defaultProps === void 0)
      return b2.tag = 15, b2.type = f2, jj(a2, b2, f2, d2, e2);
    a2 = vh(c2.type, null, d2, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if ((a2.lanes & e2) === 0) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = c2 !== null ? c2 : He;
    if (c2(g2, d2) && a2.ref === b2.ref)
      return gj(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = th(f2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function jj(a2, b2, c2, d2, e2) {
  if (a2 !== null) {
    var f2 = a2.memoizedProps;
    if (He(f2, d2) && a2.ref === b2.ref)
      if (tg = false, b2.pendingProps = d2 = f2, (a2.lanes & e2) !== 0)
        (a2.flags & 131072) !== 0 && (tg = true);
      else
        return b2.lanes = a2.lanes, gj(a2, b2, e2);
  }
  return kj(a2, b2, c2, d2, e2);
}
function lj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = a2 !== null ? a2.memoizedState : null;
  if (d2.mode === "hidden")
    if ((b2.mode & 1) === 0)
      b2.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}, G2(mj, cj), cj |= c2;
    else if ((c2 & 1073741824) !== 0)
      b2.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}, d2 = f2 !== null ? f2.baseLanes : c2, G2(mj, cj), cj |= d2;
    else
      return a2 = f2 !== null ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = {baseLanes: a2, cachePool: null, transitions: null}, b2.updateQueue = null, G2(mj, cj), cj |= a2, null;
  else
    f2 !== null ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G2(mj, cj), cj |= d2;
  ej(a2, b2, e2, c2);
  return b2.child;
}
function nj(a2, b2) {
  var c2 = b2.ref;
  if (a2 === null && c2 !== null || a2 !== null && a2.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function kj(a2, b2, c2, d2, e2) {
  var f2 = Yf(c2) ? Wf : H2.current;
  f2 = Xf(b2, f2);
  sg(b2, e2);
  c2 = Uh(a2, b2, c2, d2, f2, e2);
  d2 = Zh();
  if (a2 !== null && !tg)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, gj(a2, b2, e2);
  I2 && d2 && bh(b2);
  b2.flags |= 1;
  ej(a2, b2, c2, e2);
  return b2.child;
}
function oj(a2, b2, c2, d2, e2) {
  if (Yf(c2)) {
    var f2 = true;
    bg(b2);
  } else
    f2 = false;
  sg(b2, e2);
  if (b2.stateNode === null)
    a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Og(b2, c2, d2), Qg(b2, c2, d2, e2), d2 = true;
  else if (a2 === null) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l3 = c2.contextType;
    typeof l3 === "object" && l3 !== null ? l3 = ug(l3) : (l3 = Yf(c2) ? Wf : H2.current, l3 = Xf(b2, l3));
    var n3 = c2.getDerivedStateFromProps, u2 = typeof n3 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    u2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d2 || k2 !== l3) && Pg(b2, g2, d2, l3);
    wg = false;
    var q3 = b2.memoizedState;
    g2.state = q3;
    Eg(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || q3 !== k2 || Vf.current || wg ? (typeof n3 === "function" && (Ig(b2, c2, n3, d2), k2 = b2.memoizedState), (h2 = wg || Ng(b2, c2, h2, d2, q3, k2, l3)) ? (u2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b2.flags |= 4194308)) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l3, d2 = h2) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    yg(a2, b2);
    h2 = b2.memoizedProps;
    l3 = b2.type === b2.elementType ? h2 : kg(b2.type, h2);
    g2.props = l3;
    u2 = b2.pendingProps;
    q3 = g2.context;
    k2 = c2.contextType;
    typeof k2 === "object" && k2 !== null ? k2 = ug(k2) : (k2 = Yf(c2) ? Wf : H2.current, k2 = Xf(b2, k2));
    var y3 = c2.getDerivedStateFromProps;
    (n3 = typeof y3 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== u2 || q3 !== k2) && Pg(b2, g2, d2, k2);
    wg = false;
    q3 = b2.memoizedState;
    g2.state = q3;
    Eg(b2, d2, g2, e2);
    var m2 = b2.memoizedState;
    h2 !== u2 || q3 !== m2 || Vf.current || wg ? (typeof y3 === "function" && (Ig(b2, c2, y3, d2), m2 = b2.memoizedState), (l3 = wg || Ng(b2, c2, l3, d2, q3, m2, k2) || false) ? (n3 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d2, m2, k2), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d2, m2, k2)), typeof g2.componentDidUpdate === "function" && (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b2.flags |= 1024)) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && q3 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && q3 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = m2), g2.props = d2, g2.state = m2, g2.context = k2, d2 = l3) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && q3 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && q3 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return pj(a2, b2, c2, d2, f2, e2);
}
function pj(a2, b2, c2, d2, e2, f2) {
  nj(a2, b2);
  var g2 = (b2.flags & 128) !== 0;
  if (!d2 && !g2)
    return e2 && cg(b2, c2, false), gj(a2, b2, f2);
  d2 = b2.stateNode;
  dj.current = b2;
  var h2 = g2 && typeof c2.getDerivedStateFromError !== "function" ? null : d2.render();
  b2.flags |= 1;
  a2 !== null && g2 ? (b2.child = yh(b2, a2.child, null, f2), b2.child = yh(b2, null, h2, f2)) : ej(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && cg(b2, c2, true);
  return b2.child;
}
function qj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? $f(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && $f(a2, b2.context, false);
  Fh(a2, b2.containerInfo);
}
function rj(a2, b2, c2, d2, e2) {
  nh();
  oh(e2);
  b2.flags |= 256;
  ej(a2, b2, c2, d2);
  return b2.child;
}
var sj = {dehydrated: null, treeContext: null, retryLane: 0};
function tj(a2) {
  return {baseLanes: a2, cachePool: null, transitions: null};
}
function uj(a2, b2) {
  return {baseLanes: a2.baseLanes | b2, cachePool: null, transitions: a2.transitions};
}
function vj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = K2.current, f2 = false, g2 = (b2.flags & 128) !== 0, h2;
  (h2 = g2) || (h2 = a2 !== null && a2.memoizedState === null ? false : (e2 & 2) !== 0);
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (a2 === null || a2.memoizedState !== null)
    e2 |= 1;
  G2(K2, e2 & 1);
  if (a2 === null) {
    kh(b2);
    a2 = b2.memoizedState;
    if (a2 !== null && (a2 = a2.dehydrated, a2 !== null))
      return (b2.mode & 1) === 0 ? b2.lanes = 1 : a2.data === "$!" ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    e2 = d2.children;
    a2 = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, e2 = {mode: "hidden", children: e2}, (d2 & 1) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = e2) : f2 = wj(e2, d2, 0, null), a2 = xh(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = tj(c2), b2.memoizedState = sj, a2) : xj(b2, e2);
  }
  e2 = a2.memoizedState;
  if (e2 !== null) {
    h2 = e2.dehydrated;
    if (h2 !== null) {
      if (g2) {
        if (b2.flags & 256)
          return b2.flags &= -257, yj(a2, b2, c2, Error(p2(422)));
        if (b2.memoizedState !== null)
          return b2.child = a2.child, b2.flags |= 128, null;
        f2 = d2.fallback;
        e2 = b2.mode;
        d2 = wj({mode: "visible", children: d2.children}, e2, 0, null);
        f2 = xh(f2, e2, c2, null);
        f2.flags |= 2;
        d2.return = b2;
        f2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        (b2.mode & 1) !== 0 && yh(b2, a2.child, null, c2);
        b2.child.memoizedState = tj(c2);
        b2.memoizedState = sj;
        return f2;
      }
      if ((b2.mode & 1) === 0)
        b2 = yj(a2, b2, c2, null);
      else if (h2.data === "$!")
        b2 = yj(a2, b2, c2, Error(p2(419)));
      else if (d2 = (c2 & a2.childLanes) !== 0, tg || d2) {
        d2 = P2;
        if (d2 !== null) {
          switch (c2 & -c2) {
            case 4:
              f2 = 2;
              break;
            case 16:
              f2 = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              f2 = 32;
              break;
            case 536870912:
              f2 = 268435456;
              break;
            default:
              f2 = 0;
          }
          d2 = (f2 & (d2.suspendedLanes | c2)) !== 0 ? 0 : f2;
          d2 !== 0 && d2 !== e2.retryLane && (e2.retryLane = d2, Lg(a2, d2, -1));
        }
        $i();
        b2 = yj(a2, b2, c2, Error(p2(421)));
      } else
        h2.data === "$?" ? (b2.flags |= 128, b2.child = a2.child, b2 = zj.bind(null, a2), h2._reactRetry = b2, b2 = null) : (c2 = e2.treeContext, eh = Kf(h2.nextSibling), dh = b2, I2 = true, fh = null, c2 !== null && (Vg[Wg++] = Yg, Vg[Wg++] = Zg, Vg[Wg++] = Xg, Yg = c2.id, Zg = c2.overflow, Xg = b2), b2 = xj(b2, b2.pendingProps.children), b2.flags |= 4096);
      return b2;
    }
    if (f2)
      return d2 = Aj(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = e2 === null ? tj(c2) : uj(e2, c2), f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = sj, d2;
    c2 = Bj(a2, b2, d2.children, c2);
    b2.memoizedState = null;
    return c2;
  }
  if (f2)
    return d2 = Aj(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = e2 === null ? tj(c2) : uj(e2, c2), f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = sj, d2;
  c2 = Bj(a2, b2, d2.children, c2);
  b2.memoizedState = null;
  return c2;
}
function xj(a2, b2) {
  b2 = wj({mode: "visible", children: b2}, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function Bj(a2, b2, c2, d2) {
  var e2 = a2.child;
  a2 = e2.sibling;
  c2 = th(e2, {mode: "visible", children: c2});
  (b2.mode & 1) === 0 && (c2.lanes = d2);
  c2.return = b2;
  c2.sibling = null;
  a2 !== null && (d2 = b2.deletions, d2 === null ? (b2.deletions = [a2], b2.flags |= 16) : d2.push(a2));
  return b2.child = c2;
}
function Aj(a2, b2, c2, d2, e2) {
  var f2 = b2.mode;
  a2 = a2.child;
  var g2 = a2.sibling, h2 = {mode: "hidden", children: c2};
  (f2 & 1) === 0 && b2.child !== a2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, b2.deletions = null) : (c2 = th(a2, h2), c2.subtreeFlags = a2.subtreeFlags & 14680064);
  g2 !== null ? d2 = th(g2, d2) : (d2 = xh(d2, f2, e2, null), d2.flags |= 2);
  d2.return = b2;
  c2.return = b2;
  c2.sibling = d2;
  b2.child = c2;
  return d2;
}
function yj(a2, b2, c2, d2) {
  d2 !== null && oh(d2);
  yh(b2, a2.child, null, c2);
  a2 = xj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function Cj(a2, b2, c2) {
  a2.lanes |= b2;
  var d2 = a2.alternate;
  d2 !== null && (d2.lanes |= b2);
  rg(a2.return, b2, c2);
}
function Dj(a2, b2, c2, d2, e2) {
  var f2 = a2.memoizedState;
  f2 === null ? a2.memoizedState = {isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2} : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function Ej(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  ej(a2, b2, d2.children, c2);
  d2 = K2.current;
  if ((d2 & 2) !== 0)
    d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (a2 !== null && (a2.flags & 128) !== 0)
      a:
        for (a2 = b2.child; a2 !== null; ) {
          if (a2.tag === 13)
            a2.memoizedState !== null && Cj(a2, c2, b2);
          else if (a2.tag === 19)
            Cj(a2, c2, b2);
          else if (a2.child !== null) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d2 &= 1;
  }
  G2(K2, d2);
  if ((b2.mode & 1) === 0)
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; c2 !== null; )
          a2 = c2.alternate, a2 !== null && Jh(a2) === null && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        c2 === null ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        Dj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; e2 !== null; ) {
          a2 = e2.alternate;
          if (a2 !== null && Jh(a2) === null) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        Dj(b2, true, c2, null, f2);
        break;
      case "together":
        Dj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function gj(a2, b2, c2) {
  a2 !== null && (b2.dependencies = a2.dependencies);
  Fg |= b2.lanes;
  if ((c2 & b2.childLanes) === 0)
    return null;
  if (a2 !== null && b2.child !== a2.child)
    throw Error(p2(153));
  if (b2.child !== null) {
    a2 = b2.child;
    c2 = th(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; a2.sibling !== null; )
      a2 = a2.sibling, c2 = c2.sibling = th(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function Fj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      qj(b2);
      nh();
      break;
    case 5:
      Hh(b2);
      break;
    case 1:
      Yf(b2.type) && bg(b2);
      break;
    case 4:
      Fh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G2(lg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (d2 !== null) {
        if (d2.dehydrated !== null)
          return G2(K2, K2.current & 1), b2.flags |= 128, null;
        if ((c2 & b2.child.childLanes) !== 0)
          return vj(a2, b2, c2);
        G2(K2, K2.current & 1);
        a2 = gj(a2, b2, c2);
        return a2 !== null ? a2.sibling : null;
      }
      G2(K2, K2.current & 1);
      break;
    case 19:
      d2 = (c2 & b2.childLanes) !== 0;
      if ((a2.flags & 128) !== 0) {
        if (d2)
          return Ej(a2, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G2(K2, K2.current);
      if (d2)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, lj(a2, b2, c2);
  }
  return gj(a2, b2, c2);
}
function Gj(a2, b2) {
  ch(b2);
  switch (b2.tag) {
    case 1:
      return Yf(b2.type) && Zf(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return Gh(), E2(Vf), E2(H2), Lh(), a2 = b2.flags, (a2 & 65536) !== 0 && (a2 & 128) === 0 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Ih(b2), null;
    case 13:
      E2(K2);
      a2 = b2.memoizedState;
      if (a2 !== null && a2.dehydrated !== null) {
        if (b2.alternate === null)
          throw Error(p2(340));
        nh();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E2(K2), null;
    case 4:
      return Gh(), null;
    case 10:
      return qg(b2.type._context), null;
    case 22:
    case 23:
      return bj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hj = false;
var S2 = false;
var Ij = typeof WeakSet === "function" ? WeakSet : Set;
var T2 = null;
function Jj(a2, b2) {
  var c2 = a2.ref;
  if (c2 !== null)
    if (typeof c2 === "function")
      try {
        c2(null);
      } catch (d2) {
        U2(a2, b2, d2);
      }
    else
      c2.current = null;
}
function Kj(a2, b2, c2) {
  try {
    c2();
  } catch (d2) {
    U2(a2, b2, d2);
  }
}
var Lj = false;
function Mj(a2, b2) {
  Bf = cd;
  a2 = Le();
  if (Me(a2)) {
    if ("selectionStart" in a2)
      var c2 = {start: a2.selectionStart, end: a2.selectionEnd};
    else
      a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && d2.rangeCount !== 0) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (Z) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l3 = 0, n3 = 0, u2 = a2, q3 = null;
          b:
            for (; ; ) {
              for (var y3; ; ) {
                u2 !== c2 || e2 !== 0 && u2.nodeType !== 3 || (h2 = g2 + e2);
                u2 !== f2 || d2 !== 0 && u2.nodeType !== 3 || (k2 = g2 + d2);
                u2.nodeType === 3 && (g2 += u2.nodeValue.length);
                if ((y3 = u2.firstChild) === null)
                  break;
                q3 = u2;
                u2 = y3;
              }
              for (; ; ) {
                if (u2 === a2)
                  break b;
                q3 === c2 && ++l3 === e2 && (h2 = g2);
                q3 === f2 && ++n3 === d2 && (k2 = g2);
                if ((y3 = u2.nextSibling) !== null)
                  break;
                u2 = q3;
                q3 = u2.parentNode;
              }
              u2 = y3;
            }
          c2 = h2 === -1 || k2 === -1 ? null : {start: h2, end: k2};
        } else
          c2 = null;
      }
    c2 = c2 || {start: 0, end: 0};
  } else
    c2 = null;
  Cf = {focusedElem: a2, selectionRange: c2};
  cd = false;
  for (T2 = b2; T2 !== null; )
    if (b2 = T2, a2 = b2.child, (b2.subtreeFlags & 1028) !== 0 && a2 !== null)
      a2.return = b2, T2 = a2;
    else
      for (; T2 !== null; ) {
        b2 = T2;
        try {
          var m2 = b2.alternate;
          if ((b2.flags & 1024) !== 0)
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m2 !== null) {
                  var w3 = m2.memoizedProps, J3 = m2.memoizedState, v3 = b2.stateNode, x3 = v3.getSnapshotBeforeUpdate(b2.elementType === b2.type ? w3 : kg(b2.type, w3), J3);
                  v3.__reactInternalSnapshotBeforeUpdate = x3;
                }
                break;
              case 3:
                var r3 = b2.stateNode.containerInfo;
                if (r3.nodeType === 1)
                  r3.textContent = "";
                else if (r3.nodeType === 9) {
                  var F3 = r3.body;
                  F3 != null && (F3.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p2(163));
            }
        } catch (Z) {
          U2(b2, b2.return, Z);
        }
        a2 = b2.sibling;
        if (a2 !== null) {
          a2.return = b2.return;
          T2 = a2;
          break;
        }
        T2 = b2.return;
      }
  m2 = Lj;
  Lj = false;
  return m2;
}
function Nj(a2, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = d2 !== null ? d2.lastEffect : null;
  if (d2 !== null) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        f2 !== void 0 && Kj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Oj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = b2 !== null ? b2.lastEffect : null;
  if (b2 !== null) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Pj(a2) {
  var b2 = a2.ref;
  if (b2 !== null) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    typeof b2 === "function" ? b2(a2) : b2.current = a2;
  }
}
function Qj(a2) {
  var b2 = a2.alternate;
  b2 !== null && (a2.alternate = null, Qj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  a2.tag === 5 && (b2 = a2.stateNode, b2 !== null && (delete b2[Nf], delete b2[Of], delete b2[nf], delete b2[Pf], delete b2[Qf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Rj(a2) {
  return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
}
function Sj(a2) {
  a:
    for (; ; ) {
      for (; a2.sibling === null; ) {
        if (a2.return === null || Rj(a2.return))
          return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 18; ) {
        if (a2.flags & 2)
          continue a;
        if (a2.child === null || a2.tag === 4)
          continue a;
        else
          a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2))
        return a2.stateNode;
    }
}
function Tj(a2, b2, c2) {
  var d2 = a2.tag;
  if (d2 === 5 || d2 === 6)
    a2 = a2.stateNode, b2 ? c2.nodeType === 8 ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (c2.nodeType === 8 ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, c2 !== null && c2 !== void 0 || b2.onclick !== null || (b2.onclick = Af));
  else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
    for (Tj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      Tj(a2, b2, c2), a2 = a2.sibling;
}
function Uj(a2, b2, c2) {
  var d2 = a2.tag;
  if (d2 === 5 || d2 === 6)
    a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
    for (Uj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      Uj(a2, b2, c2), a2 = a2.sibling;
}
var V2 = null;
var Vj = false;
function Wj(a2, b2, c2) {
  for (c2 = c2.child; c2 !== null; )
    Xj(a2, b2, c2), c2 = c2.sibling;
}
function Xj(a2, b2, c2) {
  if (kc && typeof kc.onCommitFiberUnmount === "function")
    try {
      kc.onCommitFiberUnmount(jc, c2);
    } catch (h2) {
    }
  switch (c2.tag) {
    case 5:
      S2 || Jj(c2, b2);
    case 6:
      var d2 = V2, e2 = Vj;
      V2 = null;
      Wj(a2, b2, c2);
      V2 = d2;
      Vj = e2;
      V2 !== null && (Vj ? (a2 = V2, c2 = c2.stateNode, a2.nodeType === 8 ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : V2.removeChild(c2.stateNode));
      break;
    case 18:
      V2 !== null && (Vj ? (a2 = V2, c2 = c2.stateNode, a2.nodeType === 8 ? Jf(a2.parentNode, c2) : a2.nodeType === 1 && Jf(a2, c2), ad(a2)) : Jf(V2, c2.stateNode));
      break;
    case 4:
      d2 = V2;
      e2 = Vj;
      V2 = c2.stateNode.containerInfo;
      Vj = true;
      Wj(a2, b2, c2);
      V2 = d2;
      Vj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!S2 && (d2 = c2.updateQueue, d2 !== null && (d2 = d2.lastEffect, d2 !== null))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          g2 !== void 0 && ((f2 & 2) !== 0 ? Kj(c2, b2, g2) : (f2 & 4) !== 0 && Kj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Wj(a2, b2, c2);
      break;
    case 1:
      if (!S2 && (Jj(c2, b2), d2 = c2.stateNode, typeof d2.componentWillUnmount === "function"))
        try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          U2(c2, b2, h2);
        }
      Wj(a2, b2, c2);
      break;
    case 21:
      Wj(a2, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (S2 = (d2 = S2) || c2.memoizedState !== null, Wj(a2, b2, c2), S2 = d2) : Wj(a2, b2, c2);
      break;
    default:
      Wj(a2, b2, c2);
  }
}
function Yj(a2) {
  var b2 = a2.updateQueue;
  if (b2 !== null) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    c2 === null && (c2 = a2.stateNode = new Ij());
    b2.forEach(function(b3) {
      var d2 = Zj.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function ak(a2, b2) {
  var c2 = b2.deletions;
  if (c2 !== null)
    for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a2, g2 = b2, h2 = g2;
        a:
          for (; h2 !== null; ) {
            switch (h2.tag) {
              case 5:
                V2 = h2.stateNode;
                Vj = false;
                break a;
              case 3:
                V2 = h2.stateNode.containerInfo;
                Vj = true;
                break a;
              case 4:
                V2 = h2.stateNode.containerInfo;
                Vj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (V2 === null)
          throw Error(p2(160));
        Xj(f2, g2, e2);
        V2 = null;
        Vj = false;
        var k2 = e2.alternate;
        k2 !== null && (k2.return = null);
        e2.return = null;
      } catch (l3) {
        U2(e2, b2, l3);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; b2 !== null; )
      bk(b2, a2), b2 = b2.sibling;
}
function bk(a2, b2) {
  var c2 = a2.alternate, d2 = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ak(b2, a2);
      ck(a2);
      if (d2 & 4) {
        try {
          Nj(3, a2, a2.return), Oj(3, a2);
        } catch (m2) {
          U2(a2, a2.return, m2);
        }
        try {
          Nj(5, a2, a2.return);
        } catch (m2) {
          U2(a2, a2.return, m2);
        }
      }
      break;
    case 1:
      ak(b2, a2);
      ck(a2);
      d2 & 512 && c2 !== null && Jj(c2, c2.return);
      break;
    case 5:
      ak(b2, a2);
      ck(a2);
      d2 & 512 && c2 !== null && Jj(c2, c2.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          nb(e2, "");
        } catch (m2) {
          U2(a2, a2.return, m2);
        }
      }
      if (d2 & 4 && (e2 = a2.stateNode, e2 != null)) {
        var f2 = a2.memoizedProps, g2 = c2 !== null ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (k2 !== null)
          try {
            h2 === "input" && f2.type === "radio" && f2.name != null && Za(e2, f2);
            ub(h2, g2);
            var l3 = ub(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var n3 = k2[g2], u2 = k2[g2 + 1];
              n3 === "style" ? rb(e2, u2) : n3 === "dangerouslySetInnerHTML" ? mb(e2, u2) : n3 === "children" ? nb(e2, u2) : sa(e2, n3, u2, l3);
            }
            switch (h2) {
              case "input":
                $a(e2, f2);
                break;
              case "textarea":
                hb(e2, f2);
                break;
              case "select":
                var q3 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y3 = f2.value;
                y3 != null ? eb(e2, !!f2.multiple, y3, false) : q3 !== !!f2.multiple && (f2.defaultValue != null ? eb(e2, !!f2.multiple, f2.defaultValue, true) : eb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Of] = f2;
          } catch (m2) {
            U2(a2, a2.return, m2);
          }
      }
      break;
    case 6:
      ak(b2, a2);
      ck(a2);
      if (d2 & 4) {
        if (a2.stateNode === null)
          throw Error(p2(162));
        l3 = a2.stateNode;
        n3 = a2.memoizedProps;
        try {
          l3.nodeValue = n3;
        } catch (m2) {
          U2(a2, a2.return, m2);
        }
      }
      break;
    case 3:
      ak(b2, a2);
      ck(a2);
      if (d2 & 4 && c2 !== null && c2.memoizedState.isDehydrated)
        try {
          ad(b2.containerInfo);
        } catch (m2) {
          U2(a2, a2.return, m2);
        }
      break;
    case 4:
      ak(b2, a2);
      ck(a2);
      break;
    case 13:
      ak(b2, a2);
      ck(a2);
      l3 = a2.child;
      l3.flags & 8192 && l3.memoizedState !== null && (l3.alternate === null || l3.alternate.memoizedState === null) && (dk = B2());
      d2 & 4 && Yj(a2);
      break;
    case 22:
      l3 = c2 !== null && c2.memoizedState !== null;
      a2.mode & 1 ? (S2 = (n3 = S2) || l3, ak(b2, a2), S2 = n3) : ak(b2, a2);
      ck(a2);
      if (d2 & 8192) {
        n3 = a2.memoizedState !== null;
        a:
          for (u2 = null, q3 = a2; ; ) {
            if (q3.tag === 5) {
              if (u2 === null) {
                u2 = q3;
                try {
                  e2 = q3.stateNode, n3 ? (f2 = e2.style, typeof f2.setProperty === "function" ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q3.stateNode, k2 = q3.memoizedProps.style, g2 = k2 !== void 0 && k2 !== null && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = qb("display", g2));
                } catch (m2) {
                  U2(a2, a2.return, m2);
                }
              }
            } else if (q3.tag === 6) {
              if (u2 === null)
                try {
                  q3.stateNode.nodeValue = n3 ? "" : q3.memoizedProps;
                } catch (m2) {
                  U2(a2, a2.return, m2);
                }
            } else if ((q3.tag !== 22 && q3.tag !== 23 || q3.memoizedState === null || q3 === a2) && q3.child !== null) {
              q3.child.return = q3;
              q3 = q3.child;
              continue;
            }
            if (q3 === a2)
              break a;
            for (; q3.sibling === null; ) {
              if (q3.return === null || q3.return === a2)
                break a;
              u2 === q3 && (u2 = null);
              q3 = q3.return;
            }
            u2 === q3 && (u2 = null);
            q3.sibling.return = q3.return;
            q3 = q3.sibling;
          }
        if (n3 && !l3 && (a2.mode & 1) !== 0)
          for (T2 = a2, a2 = a2.child; a2 !== null; ) {
            for (l3 = T2 = a2; T2 !== null; ) {
              n3 = T2;
              u2 = n3.child;
              switch (n3.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nj(4, n3, n3.return);
                  break;
                case 1:
                  Jj(n3, n3.return);
                  f2 = n3.stateNode;
                  if (typeof f2.componentWillUnmount === "function") {
                    q3 = n3;
                    y3 = n3.return;
                    try {
                      e2 = q3, f2.props = e2.memoizedProps, f2.state = e2.memoizedState, f2.componentWillUnmount();
                    } catch (m2) {
                      U2(q3, y3, m2);
                    }
                  }
                  break;
                case 5:
                  Jj(n3, n3.return);
                  break;
                case 22:
                  if (n3.memoizedState !== null) {
                    ek(l3);
                    continue;
                  }
              }
              u2 !== null ? (u2.return = n3, T2 = u2) : ek(l3);
            }
            a2 = a2.sibling;
          }
      }
      break;
    case 19:
      ak(b2, a2);
      ck(a2);
      d2 & 4 && Yj(a2);
      break;
    case 21:
      break;
    default:
      ak(b2, a2), ck(a2);
  }
}
function ck(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a2.return; c2 !== null; ) {
          if (Rj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p2(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (nb(e2, ""), d2.flags &= -33);
          var f2 = Sj(a2);
          Uj(a2, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Sj(a2);
          Tj(a2, h2, g2);
          break;
        default:
          throw Error(p2(161));
      }
    } catch (k2) {
      U2(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function fk(a2, b2, c2) {
  T2 = a2;
  gk(a2);
}
function gk(a2, b2, c2) {
  for (var d2 = (a2.mode & 1) !== 0; T2 !== null; ) {
    var e2 = T2, f2 = e2.child;
    if (e2.tag === 22 && d2) {
      var g2 = e2.memoizedState !== null || Hj;
      if (!g2) {
        var h2 = e2.alternate, k2 = h2 !== null && h2.memoizedState !== null || S2;
        h2 = Hj;
        var l3 = S2;
        Hj = g2;
        if ((S2 = k2) && !l3)
          for (T2 = e2; T2 !== null; )
            g2 = T2, k2 = g2.child, g2.tag === 22 && g2.memoizedState !== null ? hk(e2) : k2 !== null ? (k2.return = g2, T2 = k2) : hk(e2);
        for (; f2 !== null; )
          T2 = f2, gk(f2), f2 = f2.sibling;
        T2 = e2;
        Hj = h2;
        S2 = l3;
      }
      ik(a2);
    } else
      (e2.subtreeFlags & 8772) !== 0 && f2 !== null ? (f2.return = e2, T2 = f2) : ik(a2);
  }
}
function ik(a2) {
  for (; T2 !== null; ) {
    var b2 = T2;
    if ((b2.flags & 8772) !== 0) {
      var c2 = b2.alternate;
      try {
        if ((b2.flags & 8772) !== 0)
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              S2 || Oj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !S2)
                if (c2 === null)
                  d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : kg(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              f2 !== null && Gg(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (g2 !== null) {
                c2 = null;
                if (b2.child !== null)
                  switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                Gg(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (c2 === null && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (b2.memoizedState === null) {
                var l3 = b2.alternate;
                if (l3 !== null) {
                  var n3 = l3.memoizedState;
                  if (n3 !== null) {
                    var u2 = n3.dehydrated;
                    u2 !== null && ad(u2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(p2(163));
          }
        S2 || b2.flags & 512 && Pj(b2);
      } catch (q3) {
        U2(b2, b2.return, q3);
      }
    }
    if (b2 === a2) {
      T2 = null;
      break;
    }
    c2 = b2.sibling;
    if (c2 !== null) {
      c2.return = b2.return;
      T2 = c2;
      break;
    }
    T2 = b2.return;
  }
}
function ek(a2) {
  for (; T2 !== null; ) {
    var b2 = T2;
    if (b2 === a2) {
      T2 = null;
      break;
    }
    var c2 = b2.sibling;
    if (c2 !== null) {
      c2.return = b2.return;
      T2 = c2;
      break;
    }
    T2 = b2.return;
  }
}
function hk(a2) {
  for (; T2 !== null; ) {
    var b2 = T2;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Oj(4, b2);
          } catch (k2) {
            U2(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if (typeof d2.componentDidMount === "function") {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              U2(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Pj(b2);
          } catch (k2) {
            U2(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Pj(b2);
          } catch (k2) {
            U2(b2, g2, k2);
          }
      }
    } catch (k2) {
      U2(b2, b2.return, k2);
    }
    if (b2 === a2) {
      T2 = null;
      break;
    }
    var h2 = b2.sibling;
    if (h2 !== null) {
      h2.return = b2.return;
      T2 = h2;
      break;
    }
    T2 = b2.return;
  }
}
var jk = Math.ceil;
var kk = ta.ReactCurrentDispatcher;
var lk = ta.ReactCurrentOwner;
var mk = ta.ReactCurrentBatchConfig;
var W2 = 0;
var P2 = null;
var X = null;
var Y = 0;
var cj = 0;
var mj = Tf(0);
var R2 = 0;
var nk = null;
var Fg = 0;
var ok = 0;
var pk = 0;
var qk = null;
var rk = null;
var dk = 0;
var aj = Infinity;
var sk = null;
var Li = false;
var Mi = null;
var Oi = null;
var tk = false;
var uk = null;
var vk = 0;
var wk = 0;
var xk = null;
var yk = -1;
var zk = 0;
function Jg() {
  return (W2 & 6) !== 0 ? B2() : yk !== -1 ? yk : yk = B2();
}
function Kg(a2) {
  if ((a2.mode & 1) === 0)
    return 1;
  if ((W2 & 2) !== 0 && Y !== 0)
    return Y & -Y;
  if (jg.transition !== null)
    return zk === 0 && (zk = xc()), zk;
  a2 = C2;
  if (a2 !== 0)
    return a2;
  a2 = window.event;
  a2 = a2 === void 0 ? 16 : id(a2.type);
  return a2;
}
function Lg(a2, b2, c2) {
  if (50 < wk)
    throw wk = 0, xk = null, Error(p2(185));
  var d2 = Ak(a2, b2);
  if (d2 === null)
    return null;
  zc(d2, b2, c2);
  if ((W2 & 2) === 0 || d2 !== P2)
    d2 === P2 && ((W2 & 2) === 0 && (ok |= b2), R2 === 4 && Bk(d2, Y)), Ck(d2, c2), b2 === 1 && W2 === 0 && (a2.mode & 1) === 0 && (aj = B2() + 500, eg && ig());
  return d2;
}
function Ak(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  c2 !== null && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; a2 !== null; )
    a2.childLanes |= b2, c2 = a2.alternate, c2 !== null && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return c2.tag === 3 ? c2.stateNode : null;
}
function Bg(a2) {
  return (P2 !== null || vg !== null) && (a2.mode & 1) !== 0 && (W2 & 2) === 0;
}
function Ck(a2, b2) {
  var c2 = a2.callbackNode;
  vc(a2, b2);
  var d2 = tc(a2, a2 === P2 ? Y : 0);
  if (d2 === 0)
    c2 !== null && ac(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
    c2 != null && ac(c2);
    if (b2 === 1)
      a2.tag === 0 ? hg(Dk.bind(null, a2)) : gg(Dk.bind(null, a2)), If(function() {
        W2 === 0 && ig();
      }), c2 = null;
    else {
      switch (Cc(d2)) {
        case 1:
          c2 = ec;
          break;
        case 4:
          c2 = fc;
          break;
        case 16:
          c2 = gc;
          break;
        case 536870912:
          c2 = ic;
          break;
        default:
          c2 = gc;
      }
      c2 = Ek(c2, Fk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Fk(a2, b2) {
  yk = -1;
  zk = 0;
  if ((W2 & 6) !== 0)
    throw Error(p2(327));
  var c2 = a2.callbackNode;
  if (Gk() && a2.callbackNode !== c2)
    return null;
  var d2 = tc(a2, a2 === P2 ? Y : 0);
  if (d2 === 0)
    return null;
  if ((d2 & 30) !== 0 || (d2 & a2.expiredLanes) !== 0 || b2)
    b2 = Hk(a2, d2);
  else {
    b2 = d2;
    var e2 = W2;
    W2 |= 2;
    var f2 = Ik();
    if (P2 !== a2 || Y !== b2)
      sk = null, aj = B2() + 500, Jk(a2, b2);
    do
      try {
        Kk();
        break;
      } catch (h2) {
        Lk(a2, h2);
      }
    while (1);
    pg();
    kk.current = f2;
    W2 = e2;
    X !== null ? b2 = 0 : (P2 = null, Y = 0, b2 = R2);
  }
  if (b2 !== 0) {
    b2 === 2 && (e2 = wc(a2), e2 !== 0 && (d2 = e2, b2 = Mk(a2, e2)));
    if (b2 === 1)
      throw c2 = nk, Jk(a2, 0), Bk(a2, d2), Ck(a2, B2()), c2;
    if (b2 === 6)
      Bk(a2, d2);
    else {
      e2 = a2.current.alternate;
      if ((d2 & 30) === 0 && !Nk(e2) && (b2 = Hk(a2, d2), b2 === 2 && (f2 = wc(a2), f2 !== 0 && (d2 = f2, b2 = Mk(a2, f2))), b2 === 1))
        throw c2 = nk, Jk(a2, 0), Bk(a2, d2), Ck(a2, B2()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p2(345));
        case 2:
          Ok(a2, rk, sk);
          break;
        case 3:
          Bk(a2, d2);
          if ((d2 & 130023424) === d2 && (b2 = dk + 500 - B2(), 10 < b2)) {
            if (tc(a2, 0) !== 0)
              break;
            e2 = a2.suspendedLanes;
            if ((e2 & d2) !== d2) {
              Jg();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ef(Ok.bind(null, a2, rk, sk), b2);
            break;
          }
          Ok(a2, rk, sk);
          break;
        case 4:
          Bk(a2, d2);
          if ((d2 & 4194240) === d2)
            break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - nc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B2() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * jk(d2 / 1960)) - d2;
          if (10 < d2) {
            a2.timeoutHandle = Ef(Ok.bind(null, a2, rk, sk), d2);
            break;
          }
          Ok(a2, rk, sk);
          break;
        case 5:
          Ok(a2, rk, sk);
          break;
        default:
          throw Error(p2(329));
      }
    }
  }
  Ck(a2, B2());
  return a2.callbackNode === c2 ? Fk.bind(null, a2) : null;
}
function Mk(a2, b2) {
  var c2 = qk;
  a2.current.memoizedState.isDehydrated && (Jk(a2, b2).flags |= 256);
  a2 = Hk(a2, b2);
  a2 !== 2 && (b2 = rk, rk = c2, b2 !== null && Zi(b2));
  return a2;
}
function Zi(a2) {
  rk === null ? rk = a2 : rk.push.apply(rk, a2);
}
function Nk(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (c2 !== null && (c2 = c2.stores, c2 !== null))
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!Ge(f2(), e2))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && c2 !== null)
      c2.return = b2, b2 = c2;
    else {
      if (b2 === a2)
        break;
      for (; b2.sibling === null; ) {
        if (b2.return === null || b2.return === a2)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Bk(a2, b2) {
  b2 &= ~pk;
  b2 &= ~ok;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - nc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Dk(a2) {
  if ((W2 & 6) !== 0)
    throw Error(p2(327));
  Gk();
  var b2 = tc(a2, 0);
  if ((b2 & 1) === 0)
    return Ck(a2, B2()), null;
  var c2 = Hk(a2, b2);
  if (a2.tag !== 0 && c2 === 2) {
    var d2 = wc(a2);
    d2 !== 0 && (b2 = d2, c2 = Mk(a2, d2));
  }
  if (c2 === 1)
    throw c2 = nk, Jk(a2, 0), Bk(a2, b2), Ck(a2, B2()), c2;
  if (c2 === 6)
    throw Error(p2(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Ok(a2, rk, sk);
  Ck(a2, B2());
  return null;
}
function Pk(a2, b2) {
  var c2 = W2;
  W2 |= 1;
  try {
    return a2(b2);
  } finally {
    W2 = c2, W2 === 0 && (aj = B2() + 500, eg && ig());
  }
}
function Qk(a2) {
  uk !== null && uk.tag === 0 && (W2 & 6) === 0 && Gk();
  var b2 = W2;
  W2 |= 1;
  var c2 = mk.transition, d2 = C2;
  try {
    if (mk.transition = null, C2 = 1, a2)
      return a2();
  } finally {
    C2 = d2, mk.transition = c2, W2 = b2, (W2 & 6) === 0 && ig();
  }
}
function bj() {
  cj = mj.current;
  E2(mj);
}
function Jk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  c2 !== -1 && (a2.timeoutHandle = -1, Ff(c2));
  if (X !== null)
    for (c2 = X.return; c2 !== null; ) {
      var d2 = c2;
      ch(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          d2 !== null && d2 !== void 0 && Zf();
          break;
        case 3:
          Gh();
          E2(Vf);
          E2(H2);
          Lh();
          break;
        case 5:
          Ih(d2);
          break;
        case 4:
          Gh();
          break;
        case 13:
          E2(K2);
          break;
        case 19:
          E2(K2);
          break;
        case 10:
          qg(d2.type._context);
          break;
        case 22:
        case 23:
          bj();
      }
      c2 = c2.return;
    }
  P2 = a2;
  X = a2 = th(a2.current, null);
  Y = cj = b2;
  R2 = 0;
  nk = null;
  pk = ok = Fg = 0;
  rk = qk = null;
  if (vg !== null) {
    for (b2 = 0; b2 < vg.length; b2++)
      if (c2 = vg[b2], d2 = c2.interleaved, d2 !== null) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (f2 !== null) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
    vg = null;
  }
  return a2;
}
function Lk(a2, b2) {
  do {
    var c2 = X;
    try {
      pg();
      Mh.current = Yh;
      if (Ph) {
        for (var d2 = L2.memoizedState; d2 !== null; ) {
          var e2 = d2.queue;
          e2 !== null && (e2.pending = null);
          d2 = d2.next;
        }
        Ph = false;
      }
      Oh = 0;
      N2 = M2 = L2 = null;
      Qh = false;
      Rh = 0;
      lk.current = null;
      if (c2 === null || c2.return === null) {
        R2 = 1;
        nk = b2;
        X = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Y;
        h2.flags |= 32768;
        if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
          var l3 = k2, n3 = h2, u2 = n3.tag;
          if ((n3.mode & 1) === 0 && (u2 === 0 || u2 === 11 || u2 === 15)) {
            var q3 = n3.alternate;
            q3 ? (n3.updateQueue = q3.updateQueue, n3.memoizedState = q3.memoizedState, n3.lanes = q3.lanes) : (n3.updateQueue = null, n3.memoizedState = null);
          }
          var y3 = Ri(g2);
          if (y3 !== null) {
            y3.flags &= -257;
            Si(y3, g2, h2, f2, b2);
            y3.mode & 1 && Pi(f2, l3, b2);
            b2 = y3;
            k2 = l3;
            var m2 = b2.updateQueue;
            if (m2 === null) {
              var w3 = new Set();
              w3.add(k2);
              b2.updateQueue = w3;
            } else
              m2.add(k2);
            break a;
          } else {
            if ((b2 & 1) === 0) {
              Pi(f2, l3, b2);
              $i();
              break a;
            }
            k2 = Error(p2(426));
          }
        } else if (I2 && h2.mode & 1) {
          var J3 = Ri(g2);
          if (J3 !== null) {
            (J3.flags & 65536) === 0 && (J3.flags |= 256);
            Si(J3, g2, h2, f2, b2);
            oh(k2);
            break a;
          }
        }
        f2 = k2;
        R2 !== 4 && (R2 = 2);
        qk === null ? qk = [f2] : qk.push(f2);
        k2 = Hi(k2, h2);
        h2 = g2;
        do {
          switch (h2.tag) {
            case 3:
              h2.flags |= 65536;
              b2 &= -b2;
              h2.lanes |= b2;
              var v3 = Ki(h2, k2, b2);
              Dg(h2, v3);
              break a;
            case 1:
              f2 = k2;
              var x3 = h2.type, r3 = h2.stateNode;
              if ((h2.flags & 128) === 0 && (typeof x3.getDerivedStateFromError === "function" || r3 !== null && typeof r3.componentDidCatch === "function" && (Oi === null || !Oi.has(r3)))) {
                h2.flags |= 65536;
                b2 &= -b2;
                h2.lanes |= b2;
                var F3 = Ni(h2, f2, b2);
                Dg(h2, F3);
                break a;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
      }
      Rk(c2);
    } catch (Z) {
      b2 = Z;
      X === c2 && c2 !== null && (X = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Ik() {
  var a2 = kk.current;
  kk.current = Yh;
  return a2 === null ? Yh : a2;
}
function $i() {
  if (R2 === 0 || R2 === 3 || R2 === 2)
    R2 = 4;
  P2 === null || (Fg & 268435455) === 0 && (ok & 268435455) === 0 || Bk(P2, Y);
}
function Hk(a2, b2) {
  var c2 = W2;
  W2 |= 2;
  var d2 = Ik();
  if (P2 !== a2 || Y !== b2)
    sk = null, Jk(a2, b2);
  do
    try {
      Sk();
      break;
    } catch (e2) {
      Lk(a2, e2);
    }
  while (1);
  pg();
  W2 = c2;
  kk.current = d2;
  if (X !== null)
    throw Error(p2(261));
  P2 = null;
  Y = 0;
  return R2;
}
function Sk() {
  for (; X !== null; )
    Tk(X);
}
function Kk() {
  for (; X !== null && !bc(); )
    Tk(X);
}
function Tk(a2) {
  var b2 = Uk(a2.alternate, a2, cj);
  a2.memoizedProps = a2.pendingProps;
  b2 === null ? Rk(a2) : X = b2;
  lk.current = null;
}
function Rk(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if ((b2.flags & 32768) === 0) {
      if (c2 = Yi(c2, b2, cj), c2 !== null) {
        X = c2;
        return;
      }
    } else {
      c2 = Gj(c2, b2);
      if (c2 !== null) {
        c2.flags &= 32767;
        X = c2;
        return;
      }
      if (a2 !== null)
        a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        R2 = 6;
        X = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      X = b2;
      return;
    }
    X = b2 = a2;
  } while (b2 !== null);
  R2 === 0 && (R2 = 5);
}
function Ok(a2, b2, c2) {
  var d2 = C2, e2 = mk.transition;
  try {
    mk.transition = null, C2 = 1, Vk(a2, b2, c2, d2);
  } finally {
    mk.transition = e2, C2 = d2;
  }
  return null;
}
function Vk(a2, b2, c2, d2) {
  do
    Gk();
  while (uk !== null);
  if ((W2 & 6) !== 0)
    throw Error(p2(327));
  c2 = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (c2 === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current)
    throw Error(p2(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Ac(a2, f2);
  a2 === P2 && (X = P2 = null, Y = 0);
  (c2.subtreeFlags & 2064) === 0 && (c2.flags & 2064) === 0 || tk || (tk = true, Ek(gc, function() {
    Gk();
    return null;
  }));
  f2 = (c2.flags & 15990) !== 0;
  if ((c2.subtreeFlags & 15990) !== 0 || f2) {
    f2 = mk.transition;
    mk.transition = null;
    var g2 = C2;
    C2 = 1;
    var h2 = W2;
    W2 |= 4;
    lk.current = null;
    Mj(a2, c2);
    bk(c2, a2);
    Ne(Cf);
    cd = !!Bf;
    Cf = Bf = null;
    a2.current = c2;
    fk(c2);
    cc();
    W2 = h2;
    C2 = g2;
    mk.transition = f2;
  } else
    a2.current = c2;
  tk && (tk = false, uk = a2, vk = e2);
  f2 = a2.pendingLanes;
  f2 === 0 && (Oi = null);
  lc(c2.stateNode);
  Ck(a2, B2());
  if (b2 !== null)
    for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
      d2(b2[c2]);
  if (Li)
    throw Li = false, a2 = Mi, Mi = null, a2;
  (vk & 1) !== 0 && a2.tag !== 0 && Gk();
  f2 = a2.pendingLanes;
  (f2 & 1) !== 0 ? a2 === xk ? wk++ : (wk = 0, xk = a2) : wk = 0;
  ig();
  return null;
}
function Gk() {
  if (uk !== null) {
    var a2 = Cc(vk), b2 = mk.transition, c2 = C2;
    try {
      mk.transition = null;
      C2 = 16 > a2 ? 16 : a2;
      if (uk === null)
        var d2 = false;
      else {
        a2 = uk;
        uk = null;
        vk = 0;
        if ((W2 & 6) !== 0)
          throw Error(p2(331));
        var e2 = W2;
        W2 |= 4;
        for (T2 = a2.current; T2 !== null; ) {
          var f2 = T2, g2 = f2.child;
          if ((T2.flags & 16) !== 0) {
            var h2 = f2.deletions;
            if (h2 !== null) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l3 = h2[k2];
                for (T2 = l3; T2 !== null; ) {
                  var n3 = T2;
                  switch (n3.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(8, n3, f2);
                  }
                  var u2 = n3.child;
                  if (u2 !== null)
                    u2.return = n3, T2 = u2;
                  else
                    for (; T2 !== null; ) {
                      n3 = T2;
                      var q3 = n3.sibling, y3 = n3.return;
                      Qj(n3);
                      if (n3 === l3) {
                        T2 = null;
                        break;
                      }
                      if (q3 !== null) {
                        q3.return = y3;
                        T2 = q3;
                        break;
                      }
                      T2 = y3;
                    }
                }
              }
              var m2 = f2.alternate;
              if (m2 !== null) {
                var w3 = m2.child;
                if (w3 !== null) {
                  m2.child = null;
                  do {
                    var J3 = w3.sibling;
                    w3.sibling = null;
                    w3 = J3;
                  } while (w3 !== null);
                }
              }
              T2 = f2;
            }
          }
          if ((f2.subtreeFlags & 2064) !== 0 && g2 !== null)
            g2.return = f2, T2 = g2;
          else
            b:
              for (; T2 !== null; ) {
                f2 = T2;
                if ((f2.flags & 2048) !== 0)
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(9, f2, f2.return);
                  }
                var v3 = f2.sibling;
                if (v3 !== null) {
                  v3.return = f2.return;
                  T2 = v3;
                  break b;
                }
                T2 = f2.return;
              }
        }
        var x3 = a2.current;
        for (T2 = x3; T2 !== null; ) {
          g2 = T2;
          var r3 = g2.child;
          if ((g2.subtreeFlags & 2064) !== 0 && r3 !== null)
            r3.return = g2, T2 = r3;
          else
            b:
              for (g2 = x3; T2 !== null; ) {
                h2 = T2;
                if ((h2.flags & 2048) !== 0)
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oj(9, h2);
                    }
                  } catch (Z) {
                    U2(h2, h2.return, Z);
                  }
                if (h2 === g2) {
                  T2 = null;
                  break b;
                }
                var F3 = h2.sibling;
                if (F3 !== null) {
                  F3.return = h2.return;
                  T2 = F3;
                  break b;
                }
                T2 = h2.return;
              }
        }
        W2 = e2;
        ig();
        if (kc && typeof kc.onPostCommitFiberRoot === "function")
          try {
            kc.onPostCommitFiberRoot(jc, a2);
          } catch (Z) {
          }
        d2 = true;
      }
      return d2;
    } finally {
      C2 = c2, mk.transition = b2;
    }
  }
  return false;
}
function Wk(a2, b2, c2) {
  b2 = Hi(c2, b2);
  b2 = Ki(a2, b2, 1);
  Ag(a2, b2);
  b2 = Jg();
  a2 = Ak(a2, 1);
  a2 !== null && (zc(a2, 1, b2), Ck(a2, b2));
}
function U2(a2, b2, c2) {
  if (a2.tag === 3)
    Wk(a2, a2, c2);
  else
    for (; b2 !== null; ) {
      if (b2.tag === 3) {
        Wk(b2, a2, c2);
        break;
      } else if (b2.tag === 1) {
        var d2 = b2.stateNode;
        if (typeof b2.type.getDerivedStateFromError === "function" || typeof d2.componentDidCatch === "function" && (Oi === null || !Oi.has(d2))) {
          a2 = Hi(c2, a2);
          a2 = Ni(b2, a2, 1);
          Ag(b2, a2);
          a2 = Jg();
          b2 = Ak(b2, 1);
          b2 !== null && (zc(b2, 1, a2), Ck(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Qi(a2, b2, c2) {
  var d2 = a2.pingCache;
  d2 !== null && d2.delete(b2);
  b2 = Jg();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  P2 === a2 && (Y & c2) === c2 && (R2 === 4 || R2 === 3 && (Y & 130023424) === Y && 500 > B2() - dk ? Jk(a2, 0) : pk |= c2);
  Ck(a2, b2);
}
function Xk(a2, b2) {
  b2 === 0 && ((a2.mode & 1) === 0 ? b2 = 1 : (b2 = rc, rc <<= 1, (rc & 130023424) === 0 && (rc = 4194304)));
  var c2 = Jg();
  a2 = Ak(a2, b2);
  a2 !== null && (zc(a2, b2, c2), Ck(a2, c2));
}
function zj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  b2 !== null && (c2 = b2.retryLane);
  Xk(a2, c2);
}
function Zj(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d2 = a2.stateNode;
      var e2 = a2.memoizedState;
      e2 !== null && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a2.stateNode;
      break;
    default:
      throw Error(p2(314));
  }
  d2 !== null && d2.delete(b2);
  Xk(a2, c2);
}
var Uk;
Uk = function(a2, b2, c2) {
  if (a2 !== null)
    if (a2.memoizedProps !== b2.pendingProps || Vf.current)
      tg = true;
    else {
      if ((a2.lanes & c2) === 0 && (b2.flags & 128) === 0)
        return tg = false, Fj(a2, b2, c2);
      tg = (a2.flags & 131072) !== 0 ? true : false;
    }
  else
    tg = false, I2 && (b2.flags & 1048576) !== 0 && ah(b2, Ug, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
      a2 = b2.pendingProps;
      var e2 = Xf(b2, H2.current);
      sg(b2, c2);
      e2 = Uh(null, b2, d2, a2, e2, c2);
      var f2 = Zh();
      b2.flags |= 1;
      typeof e2 === "object" && e2 !== null && typeof e2.render === "function" && e2.$$typeof === void 0 ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Yf(d2) ? (f2 = true, bg(b2)) : f2 = false, b2.memoizedState = e2.state !== null && e2.state !== void 0 ? e2.state : null, xg(b2), e2.updater = Mg, b2.stateNode = e2, e2._reactInternals = b2, Qg(b2, d2, a2, c2), b2 = pj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I2 && f2 && bh(b2), ej(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
        a2 = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = Yk(d2);
        a2 = kg(d2, a2);
        switch (e2) {
          case 0:
            b2 = kj(null, b2, d2, a2, c2);
            break a;
          case 1:
            b2 = oj(null, b2, d2, a2, c2);
            break a;
          case 11:
            b2 = fj(null, b2, d2, a2, c2);
            break a;
          case 14:
            b2 = hj(null, b2, d2, kg(d2.type, a2), c2);
            break a;
        }
        throw Error(p2(306, d2, ""));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), kj(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), oj(a2, b2, d2, e2, c2);
    case 3:
      a: {
        qj(b2);
        if (a2 === null)
          throw Error(p2(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        yg(a2, b2);
        Eg(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated)
          if (f2 = {
            element: d2,
            isDehydrated: false,
            cache: g2.cache,
            pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries,
            transitions: g2.transitions
          }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Error(p2(423));
            b2 = rj(a2, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Error(p2(424));
            b2 = rj(a2, b2, d2, c2, e2);
            break a;
          } else
            for (eh = Kf(b2.stateNode.containerInfo.firstChild), dh = b2, I2 = true, fh = null, c2 = zh(b2, null, d2, c2), b2.child = c2; c2; )
              c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          nh();
          if (d2 === e2) {
            b2 = gj(a2, b2, c2);
            break a;
          }
          ej(a2, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Hh(b2), a2 === null && kh(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = a2 !== null ? a2.memoizedProps : null, g2 = e2.children, Df(d2, e2) ? g2 = null : f2 !== null && Df(d2, f2) && (b2.flags |= 32), nj(a2, b2), ej(a2, b2, g2, c2), b2.child;
    case 6:
      return a2 === null && kh(b2), null;
    case 13:
      return vj(a2, b2, c2);
    case 4:
      return Fh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, a2 === null ? b2.child = yh(b2, null, d2, c2) : ej(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), fj(a2, b2, d2, e2, c2);
    case 7:
      return ej(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return ej(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return ej(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G2(lg, d2._currentValue);
        d2._currentValue = g2;
        if (f2 !== null)
          if (Ge(f2.value, g2)) {
            if (f2.children === e2.children && !Vf.current) {
              b2 = gj(a2, b2, c2);
              break a;
            }
          } else
            for (f2 = b2.child, f2 !== null && (f2.return = b2); f2 !== null; ) {
              var h2 = f2.dependencies;
              if (h2 !== null) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; k2 !== null; ) {
                  if (k2.context === d2) {
                    if (f2.tag === 1) {
                      k2 = zg(-1, c2 & -c2);
                      k2.tag = 2;
                      var l3 = f2.updateQueue;
                      if (l3 !== null) {
                        l3 = l3.shared;
                        var n3 = l3.pending;
                        n3 === null ? k2.next = k2 : (k2.next = n3.next, n3.next = k2);
                        l3.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    k2 !== null && (k2.lanes |= c2);
                    rg(f2.return, c2, b2);
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (f2.tag === 10)
                g2 = f2.type === b2.type ? null : f2.child;
              else if (f2.tag === 18) {
                g2 = f2.return;
                if (g2 === null)
                  throw Error(p2(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                h2 !== null && (h2.lanes |= c2);
                rg(g2, c2, b2);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (g2 !== null)
                g2.return = f2;
              else
                for (g2 = f2; g2 !== null; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (f2 !== null) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        ej(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, sg(b2, c2), e2 = ug(e2), d2 = d2(e2), b2.flags |= 1, ej(a2, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = kg(d2, b2.pendingProps), e2 = kg(d2.type, e2), hj(a2, b2, d2, e2, c2);
    case 15:
      return jj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Yf(d2) ? (a2 = true, bg(b2)) : a2 = false, sg(b2, c2), Og(b2, d2, e2), Qg(b2, d2, e2, c2), pj(null, b2, d2, true, a2, c2);
    case 19:
      return Ej(a2, b2, c2);
    case 22:
      return lj(a2, b2, c2);
  }
  throw Error(p2(156, b2.tag));
};
function Ek(a2, b2) {
  return $b(a2, b2);
}
function Zk(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function hh(a2, b2, c2, d2) {
  return new Zk(a2, b2, c2, d2);
}
function ij(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function Yk(a2) {
  if (typeof a2 === "function")
    return ij(a2) ? 1 : 0;
  if (a2 !== void 0 && a2 !== null) {
    a2 = a2.$$typeof;
    if (a2 === Ca)
      return 11;
    if (a2 === Fa)
      return 14;
  }
  return 2;
}
function th(a2, b2) {
  var c2 = a2.alternate;
  c2 === null ? (c2 = hh(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = b2 === null ? null : {lanes: b2.lanes, firstContext: b2.firstContext};
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function vh(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if (typeof a2 === "function")
    ij(a2) && (g2 = 1);
  else if (typeof a2 === "string")
    g2 = 5;
  else
    a:
      switch (a2) {
        case wa:
          return xh(c2.children, e2, f2, b2);
        case xa:
          g2 = 8;
          e2 |= 8;
          break;
        case za:
          return a2 = hh(12, c2, b2, e2 | 2), a2.elementType = za, a2.lanes = f2, a2;
        case Da:
          return a2 = hh(13, c2, b2, e2), a2.elementType = Da, a2.lanes = f2, a2;
        case Ea:
          return a2 = hh(19, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
        case Ha:
          return wj(c2, e2, f2, b2);
        default:
          if (typeof a2 === "object" && a2 !== null)
            switch (a2.$$typeof) {
              case Aa:
                g2 = 10;
                break a;
              case Ba:
                g2 = 9;
                break a;
              case Ca:
                g2 = 11;
                break a;
              case Fa:
                g2 = 14;
                break a;
              case Ga:
                g2 = 16;
                d2 = null;
                break a;
            }
          throw Error(p2(130, a2 == null ? a2 : typeof a2, ""));
      }
  b2 = hh(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function xh(a2, b2, c2, d2) {
  a2 = hh(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function wj(a2, b2, c2, d2) {
  a2 = hh(22, a2, d2, b2);
  a2.elementType = Ha;
  a2.lanes = c2;
  a2.stateNode = {};
  return a2;
}
function uh(a2, b2, c2) {
  a2 = hh(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function wh(a2, b2, c2) {
  b2 = hh(4, a2.children !== null ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = {containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation};
  return b2;
}
function $k(a2, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = yc(0);
  this.expirationTimes = yc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = yc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function al(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = new $k(a2, b2, c2, h2, k2);
  b2 === 1 ? (b2 = 1, f2 === true && (b2 |= 8)) : b2 = 0;
  f2 = hh(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = {element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null};
  xg(f2);
  return a2;
}
function bl(a2, b2, c2) {
  var d2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: va, key: d2 == null ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2};
}
function cl(a2) {
  if (!a2)
    return Uf;
  a2 = a2._reactInternals;
  a: {
    if (Ub(a2) !== a2 || a2.tag !== 1)
      throw Error(p2(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Yf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (b2 !== null);
    throw Error(p2(171));
  }
  if (a2.tag === 1) {
    var c2 = a2.type;
    if (Yf(c2))
      return ag(a2, c2, b2);
  }
  return b2;
}
function dl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = al(c2, d2, true, a2, e2, f2, g2, h2, k2);
  a2.context = cl(null);
  c2 = a2.current;
  d2 = Jg();
  e2 = Kg(c2);
  f2 = zg(d2, e2);
  f2.callback = b2 !== void 0 && b2 !== null ? b2 : null;
  Ag(c2, f2);
  a2.current.lanes = e2;
  zc(a2, e2, d2);
  Ck(a2, d2);
  return a2;
}
function el(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = Jg(), g2 = Kg(e2);
  c2 = cl(c2);
  b2.context === null ? b2.context = c2 : b2.pendingContext = c2;
  b2 = zg(f2, g2);
  b2.payload = {element: a2};
  d2 = d2 === void 0 ? null : d2;
  d2 !== null && (b2.callback = d2);
  Ag(e2, b2);
  a2 = Lg(e2, g2, f2);
  a2 !== null && Cg(a2, e2, g2);
  return g2;
}
function fl(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function gl(a2, b2) {
  a2 = a2.memoizedState;
  if (a2 !== null && a2.dehydrated !== null) {
    var c2 = a2.retryLane;
    a2.retryLane = c2 !== 0 && c2 < b2 ? c2 : b2;
  }
}
function hl(a2, b2) {
  gl(a2, b2);
  (a2 = a2.alternate) && gl(a2, b2);
}
function il() {
  return null;
}
var jl = typeof reportError === "function" ? reportError : function(a2) {
  console.error(a2);
};
function kl(a2) {
  this._internalRoot = a2;
}
ll.prototype.render = kl.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (b2 === null)
    throw Error(p2(409));
  el(a2, b2, null, null);
};
ll.prototype.unmount = kl.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (a2 !== null) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Qk(function() {
      el(null, a2, null, null);
    });
    b2[tf] = null;
  }
};
function ll(a2) {
  this._internalRoot = a2;
}
ll.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Gc();
    a2 = {blockedOn: null, target: a2, priority: b2};
    for (var c2 = 0; c2 < Pc.length && b2 !== 0 && b2 < Pc[c2].priority; c2++)
      ;
    Pc.splice(c2, 0, a2);
    c2 === 0 && Uc(a2);
  }
};
function ml(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11);
}
function nl(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
}
function ol() {
}
function pl(a2, b2, c2, d2, e2) {
  if (e2) {
    if (typeof d2 === "function") {
      var f2 = d2;
      d2 = function() {
        var a3 = fl(g2);
        f2.call(a3);
      };
    }
    var g2 = dl(b2, d2, a2, 0, null, false, false, "", ol);
    a2._reactRootContainer = g2;
    a2[tf] = g2.current;
    rf(a2.nodeType === 8 ? a2.parentNode : a2);
    Qk();
    return g2;
  }
  for (; e2 = a2.lastChild; )
    a2.removeChild(e2);
  if (typeof d2 === "function") {
    var h2 = d2;
    d2 = function() {
      var a3 = fl(k2);
      h2.call(a3);
    };
  }
  var k2 = al(a2, 0, false, null, null, false, false, "", ol);
  a2._reactRootContainer = k2;
  a2[tf] = k2.current;
  rf(a2.nodeType === 8 ? a2.parentNode : a2);
  Qk(function() {
    el(b2, k2, c2, d2);
  });
  return k2;
}
function ql(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if (typeof e2 === "function") {
      var h2 = e2;
      e2 = function() {
        var a3 = fl(g2);
        h2.call(a3);
      };
    }
    el(b2, g2, a2, e2);
  } else
    g2 = pl(c2, b2, a2, e2, d2);
  return fl(g2);
}
Dc = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = sc(b2.pendingLanes);
        c2 !== 0 && (Bc(b2, c2 | 1), Ck(b2, B2()), (W2 & 6) === 0 && (aj = B2() + 500, ig()));
      }
      break;
    case 13:
      var d2 = Jg();
      Qk(function() {
        return Lg(a2, 1, d2);
      });
      hl(a2, 1);
  }
};
Ec = function(a2) {
  if (a2.tag === 13) {
    var b2 = Jg();
    Lg(a2, 134217728, b2);
    hl(a2, 134217728);
  }
};
Fc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Jg(), c2 = Kg(a2);
    Lg(a2, c2, b2);
    hl(a2, c2);
  }
};
Gc = function() {
  return C2;
};
Hc = function(a2, b2) {
  var c2 = C2;
  try {
    return C2 = a2, b2();
  } finally {
    C2 = c2;
  }
};
xb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      $a(a2, c2);
      b2 = c2.name;
      if (c2.type === "radio" && b2 != null) {
        for (c2 = a2; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Cb(d2);
            if (!e2)
              throw Error(p2(90));
            Va(d2);
            $a(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      hb(a2, c2);
      break;
    case "select":
      b2 = c2.value, b2 != null && eb(a2, !!c2.multiple, b2, false);
  }
};
Fb = Pk;
Gb = Qk;
var rl = {usingClientEntryPoint: false, Events: [Bb, te, Cb, Db, Eb, Pk]};
var sl = {findFiberByHostInstance: Vc, bundleType: 0, version: "18.1.0", rendererPackageName: "react-dom"};
var tl = {bundleType: sl.bundleType, version: sl.version, rendererPackageName: sl.rendererPackageName, rendererConfig: sl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ta.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Yb(a2);
  return a2 === null ? null : a2.stateNode;
}, findFiberByHostInstance: sl.findFiberByHostInstance || il, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.1.0-next-22edb9f77-20220426"};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ul.isDisabled && ul.supportsFiber)
    try {
      jc = ul.inject(tl), kc = ul;
    } catch (a2) {
    }
}
var ul;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2 = rl;
var createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ml(b2))
    throw Error(p2(200));
  return bl(a2, b2, null, c2);
};
var createRoot = function(a2, b2) {
  if (!ml(a2))
    throw Error(p2(299));
  var c2 = false, d2 = "", e2 = jl;
  b2 !== null && b2 !== void 0 && (b2.unstable_strictMode === true && (c2 = true), b2.identifierPrefix !== void 0 && (d2 = b2.identifierPrefix), b2.onRecoverableError !== void 0 && (e2 = b2.onRecoverableError));
  b2 = al(a2, 1, false, null, null, c2, false, d2, e2);
  a2[tf] = b2.current;
  rf(a2.nodeType === 8 ? a2.parentNode : a2);
  return new kl(b2);
};
var findDOMNode = function(a2) {
  if (a2 == null)
    return null;
  if (a2.nodeType === 1)
    return a2;
  var b2 = a2._reactInternals;
  if (b2 === void 0) {
    if (typeof a2.render === "function")
      throw Error(p2(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p2(268, a2));
  }
  a2 = Yb(b2);
  a2 = a2 === null ? null : a2.stateNode;
  return a2;
};
var flushSync = function(a2) {
  return Qk(a2);
};
var hydrate = function(a2, b2, c2) {
  if (!nl(b2))
    throw Error(p2(200));
  return ql(null, a2, b2, true, c2);
};
var hydrateRoot = function(a2, b2, c2) {
  if (!ml(a2))
    throw Error(p2(405));
  var d2 = c2 != null && c2.hydratedSources || null, e2 = false, f2 = "", g2 = jl;
  c2 !== null && c2 !== void 0 && (c2.unstable_strictMode === true && (e2 = true), c2.identifierPrefix !== void 0 && (f2 = c2.identifierPrefix), c2.onRecoverableError !== void 0 && (g2 = c2.onRecoverableError));
  b2 = dl(b2, null, a2, 1, c2 != null ? c2 : null, e2, false, f2, g2);
  a2[tf] = b2.current;
  rf(a2);
  if (d2)
    for (a2 = 0; a2 < d2.length; a2++)
      c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), b2.mutableSourceEagerHydrationData == null ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(c2, e2);
  return new ll(b2);
};
var render = function(a2, b2, c2) {
  if (!nl(b2))
    throw Error(p2(200));
  return ql(null, a2, b2, false, c2);
};
var unmountComponentAtNode = function(a2) {
  if (!nl(a2))
    throw Error(p2(40));
  return a2._reactRootContainer ? (Qk(function() {
    ql(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[tf] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Pk;
var unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!nl(c2))
    throw Error(p2(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(p2(38));
  return ql(a2, b2, c2, false, d2);
};
var version2 = "18.1.0-next-22edb9f77-20220426";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2,
  createPortal,
  createRoot,
  findDOMNode,
  flushSync,
  hydrate,
  hydrateRoot,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_renderSubtreeIntoContainer,
  version: version2
};
var reactDom = createCommonjsModule(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
});

// build/snowpack/pkg/@chakra-ui/react.js
function sheetForTag(tag2) {
  if (tag2.sheet) {
    return tag2.sheet;
  }
  for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
    if (document.styleSheets[i2].ownerNode === tag2) {
      return document.styleSheets[i2];
    }
  }
}
function createStyleElement(options) {
  var tag2 = document.createElement("style");
  tag2.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag2.setAttribute("nonce", options.nonce);
  }
  tag2.appendChild(document.createTextNode(""));
  tag2.setAttribute("data-s", "");
  return tag2;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag2) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag2, before);
      _this.tags.push(tag2);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate2(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag2 = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag2);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
      }
    } else {
      tag2.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag2) {
      return tag2.parentNode && tag2.parentNode.removeChild(tag2);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var e = "-ms-";
var r2 = "-moz-";
var a = "-webkit-";
var c = "comm";
var n2 = "rule";
var t3 = "decl";
var i = "@import";
var p3 = "@keyframes";
var k = Math.abs;
var d = String.fromCharCode;
var g = Object.assign;
function m(e2, r22) {
  return (((r22 << 2 ^ z3(e2, 0)) << 2 ^ z3(e2, 1)) << 2 ^ z3(e2, 2)) << 2 ^ z3(e2, 3);
}
function x2(e2) {
  return e2.trim();
}
function y2(e2, r22) {
  return (e2 = r22.exec(e2)) ? e2[0] : e2;
}
function j(e2, r22, a2) {
  return e2.replace(r22, a2);
}
function C3(e2, r22) {
  return e2.indexOf(r22);
}
function z3(e2, r22) {
  return e2.charCodeAt(r22) | 0;
}
function A3(e2, r22, a2) {
  return e2.slice(r22, a2);
}
function O3(e2) {
  return e2.length;
}
function M3(e2) {
  return e2.length;
}
function S3(e2, r22) {
  return r22.push(e2), e2;
}
function q2(e2, r22) {
  return e2.map(r22).join("");
}
var B3 = 1;
var D3 = 1;
var E3 = 0;
var F2 = 0;
var G3 = 0;
var H3 = "";
function I3(e2, r22, a2, c2, n22, t22, s2) {
  return {value: e2, root: r22, parent: a2, type: c2, props: n22, children: t22, line: B3, column: D3, length: s2, return: ""};
}
function J2(e2, r22) {
  return g(I3("", null, null, "", null, null, 0), e2, {length: -e2.length}, r22);
}
function K3() {
  return G3;
}
function L3() {
  G3 = F2 > 0 ? z3(H3, --F2) : 0;
  if (D3--, G3 === 10)
    D3 = 1, B3--;
  return G3;
}
function N3() {
  G3 = F2 < E3 ? z3(H3, F2++) : 0;
  if (D3++, G3 === 10)
    D3 = 1, B3++;
  return G3;
}
function P3() {
  return z3(H3, F2);
}
function Q3() {
  return F2;
}
function R3(e2, r22) {
  return A3(H3, e2, r22);
}
function T3(e2) {
  switch (e2) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function U3(e2) {
  return B3 = D3 = 1, E3 = O3(H3 = e2), F2 = 0, [];
}
function V3(e2) {
  return H3 = "", e2;
}
function W3(e2) {
  return x2(R3(F2 - 1, ee2(e2 === 91 ? e2 + 2 : e2 === 40 ? e2 + 1 : e2)));
}
function Y2(e2) {
  while (G3 = P3())
    if (G3 < 33)
      N3();
    else
      break;
  return T3(e2) > 2 || T3(G3) > 3 ? "" : " ";
}
function _(e2, r22) {
  while (--r22 && N3())
    if (G3 < 48 || G3 > 102 || G3 > 57 && G3 < 65 || G3 > 70 && G3 < 97)
      break;
  return R3(e2, Q3() + (r22 < 6 && P3() == 32 && N3() == 32));
}
function ee2(e2) {
  while (N3())
    switch (G3) {
      case e2:
        return F2;
      case 34:
      case 39:
        if (e2 !== 34 && e2 !== 39)
          ee2(G3);
        break;
      case 40:
        if (e2 === 41)
          ee2(e2);
        break;
      case 92:
        N3();
        break;
    }
  return F2;
}
function re2(e2, r22) {
  while (N3())
    if (e2 + G3 === 47 + 10)
      break;
    else if (e2 + G3 === 42 + 42 && P3() === 47)
      break;
  return "/*" + R3(r22, F2 - 1) + "*" + d(e2 === 47 ? e2 : N3());
}
function ae2(e2) {
  while (!T3(P3()))
    N3();
  return R3(e2, F2);
}
function ce2(e2) {
  return V3(ne2("", null, null, null, [""], e2 = U3(e2), 0, [0], e2));
}
function ne2(e2, r22, a2, c2, n22, t22, s2, u2, i2) {
  var f2 = 0;
  var o2 = 0;
  var l22 = s2;
  var v22 = 0;
  var h2 = 0;
  var p22 = 0;
  var b2 = 1;
  var w22 = 1;
  var $2 = 1;
  var k2 = 0;
  var g2 = "";
  var m2 = n22;
  var x22 = t22;
  var y22 = c2;
  var z22 = g2;
  while (w22)
    switch (p22 = k2, k2 = N3()) {
      case 40:
        if (p22 != 108 && z22.charCodeAt(l22 - 1) == 58) {
          if (C3(z22 += j(W3(k2), "&", "&\f"), "&\f") != -1)
            $2 = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        z22 += W3(k2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        z22 += Y2(p22);
        break;
      case 92:
        z22 += _(Q3() - 1, 7);
        continue;
      case 47:
        switch (P3()) {
          case 42:
          case 47:
            S3(se2(re2(N3(), Q3()), r22, a2), i2);
            break;
          default:
            z22 += "/";
        }
        break;
      case 123 * b2:
        u2[f2++] = O3(z22) * $2;
      case 125 * b2:
      case 59:
      case 0:
        switch (k2) {
          case 0:
          case 125:
            w22 = 0;
          case 59 + o2:
            if (h2 > 0 && O3(z22) - l22)
              S3(h2 > 32 ? ue2(z22 + ";", c2, a2, l22 - 1) : ue2(j(z22, " ", "") + ";", c2, a2, l22 - 2), i2);
            break;
          case 59:
            z22 += ";";
          default:
            S3(y22 = te2(z22, r22, a2, f2, o2, n22, u2, g2, m2 = [], x22 = [], l22), t22);
            if (k2 === 123)
              if (o2 === 0)
                ne2(z22, r22, y22, y22, m2, t22, l22, u2, x22);
              else
                switch (v22) {
                  case 100:
                  case 109:
                  case 115:
                    ne2(e2, y22, y22, c2 && S3(te2(e2, y22, y22, 0, 0, n22, u2, g2, n22, m2 = [], l22), x22), n22, x22, l22, u2, c2 ? m2 : x22);
                    break;
                  default:
                    ne2(z22, y22, y22, y22, [""], x22, 0, u2, x22);
                }
        }
        f2 = o2 = h2 = 0, b2 = $2 = 1, g2 = z22 = "", l22 = s2;
        break;
      case 58:
        l22 = 1 + O3(z22), h2 = p22;
      default:
        if (b2 < 1) {
          if (k2 == 123)
            --b2;
          else if (k2 == 125 && b2++ == 0 && L3() == 125)
            continue;
        }
        switch (z22 += d(k2), k2 * b2) {
          case 38:
            $2 = o2 > 0 ? 1 : (z22 += "\f", -1);
            break;
          case 44:
            u2[f2++] = (O3(z22) - 1) * $2, $2 = 1;
            break;
          case 64:
            if (P3() === 45)
              z22 += W3(N3());
            v22 = P3(), o2 = l22 = O3(g2 = z22 += ae2(Q3())), k2++;
            break;
          case 45:
            if (p22 === 45 && O3(z22) == 2)
              b2 = 0;
        }
    }
  return t22;
}
function te2(e2, r22, a2, c2, t22, s2, u2, i2, f2, o2, l22) {
  var v22 = t22 - 1;
  var h2 = t22 === 0 ? s2 : [""];
  var p22 = M3(h2);
  for (var b2 = 0, w22 = 0, $2 = 0; b2 < c2; ++b2)
    for (var d2 = 0, g2 = A3(e2, v22 + 1, v22 = k(w22 = u2[b2])), m2 = e2; d2 < p22; ++d2)
      if (m2 = x2(w22 > 0 ? h2[d2] + " " + g2 : j(g2, /&\f/g, h2[d2])))
        f2[$2++] = m2;
  return I3(e2, r22, a2, t22 === 0 ? n2 : i2, f2, o2, l22);
}
function se2(e2, r22, a2) {
  return I3(e2, r22, a2, c, d(K3()), A3(e2, 2, -2), 0);
}
function ue2(e2, r22, a2, c2) {
  return I3(e2, r22, a2, t3, A3(e2, 0, c2), A3(e2, c2 + 1, -1), c2);
}
function ie2(c2, n22) {
  switch (m(c2, n22)) {
    case 5103:
      return a + "print-" + c2 + c2;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + c2 + c2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + c2 + r2 + c2 + e + c2 + c2;
    case 6828:
    case 4268:
      return a + c2 + e + c2 + c2;
    case 6165:
      return a + c2 + e + "flex-" + c2 + c2;
    case 5187:
      return a + c2 + j(c2, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + c2;
    case 5443:
      return a + c2 + e + "flex-item-" + j(c2, /flex-|-self/, "") + c2;
    case 4675:
      return a + c2 + e + "flex-line-pack" + j(c2, /align-content|flex-|-self/, "") + c2;
    case 5548:
      return a + c2 + e + j(c2, "shrink", "negative") + c2;
    case 5292:
      return a + c2 + e + j(c2, "basis", "preferred-size") + c2;
    case 6060:
      return a + "box-" + j(c2, "-grow", "") + a + c2 + e + j(c2, "grow", "positive") + c2;
    case 4554:
      return a + j(c2, /([^-])(transform)/g, "$1" + a + "$2") + c2;
    case 6187:
      return j(j(j(c2, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), c2, "") + c2;
    case 5495:
    case 3959:
      return j(c2, /(image-set\([^]*)/, a + "$1$`$1");
    case 4968:
      return j(j(c2, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + c2 + c2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(c2, /(.+)-inline(.+)/, a + "$1$2") + c2;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (O3(c2) - 1 - n22 > 6)
        switch (z3(c2, n22 + 1)) {
          case 109:
            if (z3(c2, n22 + 4) !== 45)
              break;
          case 102:
            return j(c2, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3$1" + r2 + (z3(c2, n22 + 3) == 108 ? "$3" : "$2-$3")) + c2;
          case 115:
            return ~C3(c2, "stretch") ? ie2(j(c2, "stretch", "fill-available"), n22) + c2 : c2;
        }
      break;
    case 4949:
      if (z3(c2, n22 + 1) !== 115)
        break;
    case 6444:
      switch (z3(c2, O3(c2) - 3 - (~C3(c2, "!important") && 10))) {
        case 107:
          return j(c2, ":", ":" + a) + c2;
        case 101:
          return j(c2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a + (z3(c2, 14) === 45 ? "inline-" : "") + "box$3$1" + a + "$2$3$1" + e + "$2box$3") + c2;
      }
      break;
    case 5936:
      switch (z3(c2, n22 + 11)) {
        case 114:
          return a + c2 + e + j(c2, /[svh]\w+-[tblr]{2}/, "tb") + c2;
        case 108:
          return a + c2 + e + j(c2, /[svh]\w+-[tblr]{2}/, "tb-rl") + c2;
        case 45:
          return a + c2 + e + j(c2, /[svh]\w+-[tblr]{2}/, "lr") + c2;
      }
      return a + c2 + e + c2 + c2;
  }
  return c2;
}
function fe2(e2, r22) {
  var a2 = "";
  var c2 = M3(e2);
  for (var n22 = 0; n22 < c2; n22++)
    a2 += r22(e2[n22], n22, e2, r22) || "";
  return a2;
}
function oe2(e2, r22, a2, s2) {
  switch (e2.type) {
    case i:
    case t3:
      return e2.return = e2.return || e2.value;
    case c:
      return "";
    case p3:
      return e2.return = e2.value + "{" + fe2(e2.children, s2) + "}";
    case n2:
      e2.value = e2.props.join(",");
  }
  return O3(a2 = fe2(e2.children, s2)) ? e2.return = e2.value + "{" + a2 + "}" : "";
}
function le2(e2) {
  var r22 = M3(e2);
  return function(a2, c2, n22, t22) {
    var s2 = "";
    for (var u2 = 0; u2 < r22; u2++)
      s2 += e2[u2](a2, c2, n22, t22) || "";
    return s2;
  };
}
function ve2(e2) {
  return function(r22) {
    if (!r22.root) {
      if (r22 = r22.return)
        e2(r22);
    }
  };
}
function he2(c2, s2, u2, i2) {
  if (c2.length > -1) {
    if (!c2.return)
      switch (c2.type) {
        case t3:
          c2.return = ie2(c2.value, c2.length);
          break;
        case p3:
          return fe2([J2(c2, {value: j(c2.value, "@", "@" + a)})], i2);
        case n2:
          if (c2.length)
            return q2(c2.props, function(n22) {
              switch (y2(n22, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return fe2([J2(c2, {props: [j(n22, /:(read-\w+)/, ":" + r2 + "$1")]})], i2);
                case "::placeholder":
                  return fe2([J2(c2, {props: [j(n22, /:(plac\w+)/, ":" + a + "input-$1")]}), J2(c2, {props: [j(n22, /:(plac\w+)/, ":" + r2 + "$1")]}), J2(c2, {props: [j(n22, /:(plac\w+)/, e + "input-$1")]})], i2);
              }
              return "";
            });
      }
  }
}
var weakMemoize = function weakMemoize2(func) {
  var cache = new WeakMap();
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};
function memoize(fn) {
  var cache = Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character = 0;
  while (true) {
    previous = character;
    character = P3();
    if (previous === 38 && character === 12) {
      points[index] = 1;
    }
    if (T3(character)) {
      break;
    }
    N3();
  }
  return R3(begin, F2);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character = 44;
  do {
    switch (T3(character)) {
      case 0:
        if (character === 38 && P3() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(F2 - 1, points, index);
        break;
      case 2:
        parsed[index] += W3(character);
        break;
      case 4:
        if (character === 44) {
          parsed[++index] = P3() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += d(character);
    }
  } while (character = N3());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return V3(toRules(U3(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i2 = 0, k2 = 0; i2 < rules.length; i2++) {
    for (var j2 = 0; j2 < parentRules.length; j2++, k2++) {
      element.props[k2] = points[i2] ? rules[i2].replace(/&\f/g, parentRules[j2]) : parentRules[j2] + " " + rules[i2];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var defaultStylisPlugins = [he2];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node) {
      var dataEmotionAttribute = node.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container2;
  var nodesToHydrate = [];
  {
    container2 = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node) {
      var attrib = node.getAttribute("data-emotion").split(" ");
      for (var i2 = 1; i2 < attrib.length; i2++) {
        inserted[attrib[i2]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [oe2, ve2(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = le2(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles3) {
      return fe2(ce2(styles3), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container: container2,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = typeof Symbol === "function" && Symbol.for;
var c$1 = b ? Symbol.for("react.element") : 60103;
var d$1 = b ? Symbol.for("react.portal") : 60106;
var e$1 = b ? Symbol.for("react.fragment") : 60107;
var f = b ? Symbol.for("react.strict_mode") : 60108;
var g$1 = b ? Symbol.for("react.profiler") : 60114;
var h = b ? Symbol.for("react.provider") : 60109;
var k$1 = b ? Symbol.for("react.context") : 60110;
var l2 = b ? Symbol.for("react.async_mode") : 60111;
var m$1 = b ? Symbol.for("react.concurrent_mode") : 60111;
var n$1 = b ? Symbol.for("react.forward_ref") : 60112;
var p$1 = b ? Symbol.for("react.suspense") : 60113;
var q$1 = b ? Symbol.for("react.suspense_list") : 60120;
var r$1 = b ? Symbol.for("react.memo") : 60115;
var t$1 = b ? Symbol.for("react.lazy") : 60116;
var v2 = b ? Symbol.for("react.block") : 60121;
var w2 = b ? Symbol.for("react.fundamental") : 60117;
var x$1 = b ? Symbol.for("react.responder") : 60118;
var y$1 = b ? Symbol.for("react.scope") : 60119;
function z$1(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c$1:
        switch (a2 = a2.type, a2) {
          case l2:
          case m$1:
          case e$1:
          case g$1:
          case f:
          case p$1:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$1:
              case n$1:
              case t$1:
              case r$1:
              case h:
                return a2;
              default:
                return u2;
            }
        }
      case d$1:
        return u2;
    }
  }
}
function A$1(a2) {
  return z$1(a2) === m$1;
}
var AsyncMode = l2;
var ConcurrentMode = m$1;
var ContextConsumer = k$1;
var ContextProvider = h;
var Element$1 = c$1;
var ForwardRef = n$1;
var Fragment2 = e$1;
var Lazy = t$1;
var Memo = r$1;
var Portal = d$1;
var Profiler2 = g$1;
var StrictMode2 = f;
var Suspense2 = p$1;
var isAsyncMode = function(a2) {
  return A$1(a2) || z$1(a2) === l2;
};
var isConcurrentMode = A$1;
var isContextConsumer = function(a2) {
  return z$1(a2) === k$1;
};
var isContextProvider = function(a2) {
  return z$1(a2) === h;
};
var isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === c$1;
};
var isForwardRef = function(a2) {
  return z$1(a2) === n$1;
};
var isFragment = function(a2) {
  return z$1(a2) === e$1;
};
var isLazy = function(a2) {
  return z$1(a2) === t$1;
};
var isMemo = function(a2) {
  return z$1(a2) === r$1;
};
var isPortal = function(a2) {
  return z$1(a2) === d$1;
};
var isProfiler = function(a2) {
  return z$1(a2) === g$1;
};
var isStrictMode = function(a2) {
  return z$1(a2) === f;
};
var isSuspense = function(a2) {
  return z$1(a2) === p$1;
};
var isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === e$1 || a2 === m$1 || a2 === g$1 || a2 === f || a2 === p$1 || a2 === q$1 || typeof a2 === "object" && a2 !== null && (a2.$$typeof === t$1 || a2.$$typeof === r$1 || a2.$$typeof === h || a2.$$typeof === k$1 || a2.$$typeof === n$1 || a2.$$typeof === w2 || a2.$$typeof === x$1 || a2.$$typeof === y$1 || a2.$$typeof === v2);
};
var typeOf = z$1;
var reactIs_production_min = {
  AsyncMode,
  ConcurrentMode,
  ContextConsumer,
  ContextProvider,
  Element: Element$1,
  ForwardRef,
  Fragment: Fragment2,
  Lazy,
  Memo,
  Portal,
  Profiler: Profiler2,
  StrictMode: StrictMode2,
  Suspense: Suspense2,
  isAsyncMode,
  isConcurrentMode,
  isContextConsumer,
  isContextProvider,
  isElement,
  isForwardRef,
  isFragment,
  isLazy,
  isMemo,
  isPortal,
  isProfiler,
  isStrictMode,
  isSuspense,
  isValidElementType,
  typeOf
};
var reactIs = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_production_min;
  }
});
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames2) {
  var rawClassName = "";
  classNames2.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h2 = 0;
  var k2, i2 = 0, len = str.length;
  for (; len >= 4; ++i2, len -= 4) {
    k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
    k2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= k2 >>> 24;
    h2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i2) & 255;
      h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match, p1, p22) {
          cursor = {
            name: p1,
            styles: p22,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next = interpolation.next;
        if (next !== void 0) {
          while (next !== void 0) {
            cursor = {
              name: next.name,
              styles: next.styles,
              next: cursor
            };
            next = next.next;
          }
        }
        var styles3 = interpolation.styles + ";";
        return styles3;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i2 = 0; i2 < obj.length; i2++) {
      string += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles3 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles3 += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles3 += strings[0];
  }
  for (var i2 = 1; i2 < args.length; i2++) {
    styles3 += handleInterpolation(mergedProps, registered, args[i2]);
    if (stringMode) {
      styles3 += strings[i2];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match;
  while ((match = labelPattern.exec(styles3)) !== null) {
    identifierName += "-" + match[1];
  }
  var name = murmur2(styles3) + identifierName;
  return {
    name,
    styles: styles3,
    next: cursor
  };
};
var EmotionCacheContext = /* @__PURE__ */ react.createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
  key: "css"
}) : null);
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ react.forwardRef(function(props, ref) {
    var cache = react.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ react.createContext({});
var getTheme = function getTheme2(outerTheme, theme3) {
  if (typeof theme3 === "function") {
    var mergedTheme = theme3(outerTheme);
    return mergedTheme;
  }
  return _extends({}, outerTheme, theme3);
};
var createCacheWithTheme = /* @__PURE__ */ weakMemoize(function(outerTheme) {
  return weakMemoize(function(theme3) {
    return getTheme(outerTheme, theme3);
  });
});
var ThemeProvider = function ThemeProvider2(props) {
  var theme3 = react.useContext(ThemeContext);
  if (props.theme !== theme3) {
    theme3 = createCacheWithTheme(theme3)(props.theme);
  }
  return /* @__PURE__ */ react.createElement(ThemeContext.Provider, {
    value: theme3
  }, props.children);
};
var useInsertionEffect2 = React["useInsertionEffect"] ? React["useInsertionEffect"] : function useInsertionEffect3(create) {
  create();
};
var _extends_1 = createCommonjsModule(function(module) {
  function _extends2() {
    module.exports = _extends2 = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _extends2.apply(this, arguments);
  }
  module.exports = _extends2, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
var useInsertionEffect$1 = React["useInsertionEffect"] ? React["useInsertionEffect"] : react.useLayoutEffect;
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var styles3 = props.styles;
  var serialized = serializeStyles([styles3], void 0, react.useContext(ThemeContext));
  var sheetRef = react.useRef();
  useInsertionEffect$1(function() {
    var key = cache.key + "-global";
    var sheet = new cache.sheet.constructor({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node !== null) {
      rehydrating = true;
      node.setAttribute("data-emotion", key);
      sheet.hydrate([node]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffect$1(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var CSSReset = function CSSReset2() {
  return /* @__PURE__ */ react.createElement(Global, {
    styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }
    `
  });
};
var CSSReset$1 = CSSReset;
var lodash_mergewith = createCommonjsModule(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root2 = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e2) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  function baseTimes(n3, iteratee) {
    var index = -1, result = Array(n3);
    while (++index < n3) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function overArg(func, transform10) {
    return function(arg) {
      return func(transform10(arg));
    };
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root2["__core-js_shared__"];
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var nativeObjectToString = objectProto.toString;
  var objectCtorString = funcToString.call(Object);
  var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Buffer = moduleExports ? root2.Buffer : void 0, Symbol2 = root2.Symbol, Uint8Array = root2.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e2) {
    }
  }();
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeMax = Math.max, nativeNow = Date.now;
  var Map2 = getNative(root2, "Map"), nativeCreate = getNative(Object, "create");
  var baseCreate = function() {
    function object() {
    }
    return function(proto) {
      if (!isObject2(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new (Map2 || ListCache)(),
      string: new Hash()
    };
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size2 = data.size;
    data.set(key, value);
    this.size += data.size == size2 ? 0 : 1;
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assignMergeValue(object, key, value) {
    if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      });
    } else {
      object[key] = value;
    }
  }
  var baseFor = createBaseFor();
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  function baseIsNative(value) {
    if (!isObject2(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  function baseKeysIn(object) {
    if (!isObject2(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function(srcValue, key) {
      stack || (stack = new Stack());
      if (isObject2(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray2(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject2(objValue) || isFunction2(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
  }
  var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
      configurable: true,
      enumerable: false,
      value: constant(string),
      writable: true
    });
  };
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }
  function createAssigner(assigner) {
    return baseRest(function(object, sources) {
      var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag2 = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e2) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag2;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isIterateeCall(value, index, object) {
    if (!isObject2(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
      return eq(object[index], value);
    }
    return false;
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  function overRest(func, start, transform10) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform10(array);
      return apply(func, this, otherArgs);
    };
  }
  function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }
  var setToString = shortOut(baseSetToString);
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e2) {
      }
      try {
        return func + "";
      } catch (e2) {
      }
    }
    return "";
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var isArguments = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArray2 = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction2(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isFunction2(value) {
    if (!isObject2(value)) {
      return false;
    }
    var tag2 = baseGetTag(value);
    return tag2 == funcTag || tag2 == genTag || tag2 == asyncTag || tag2 == proxyTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject2(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
    baseMerge(object, source, srcIndex, customizer);
  });
  function constant(value) {
    return function() {
      return value;
    };
  }
  function identity(value) {
    return value;
  }
  function stubFalse() {
    return false;
  }
  module.exports = mergeWith;
});
function getLastItem(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
function isNumber(value) {
  return typeof value === "number";
}
function isArray(value) {
  return Array.isArray(value);
}
function isFunction(value) {
  return typeof value === "function";
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}
function isEmptyObject(value) {
  return isObject(value) && Object.keys(value).length === 0;
}
function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}
function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
}
var __DEV__ = false;
function omit(object, keys2) {
  var result = {};
  Object.keys(object).forEach(function(key) {
    if (keys2.includes(key))
      return;
    result[key] = object[key];
  });
  return result;
}
function pick(object, keys2) {
  var result = {};
  keys2.forEach(function(key) {
    if (key in object) {
      result[key] = object[key];
    }
  });
  return result;
}
function get(obj, path, fallback, index) {
  var key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj)
      break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize$1 = function memoize2(fn) {
  var cache = new WeakMap();
  var memoizedFn = function memoizedFn2(obj, path, fallback, index) {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, new Map());
    }
    var map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    var value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet = memoize$1(get);
function objectFilter(object, fn) {
  var result = {};
  Object.keys(object).forEach(function(key) {
    var value = object[key];
    var shouldPass = fn(value, key, object);
    if (shouldPass) {
      result[key] = value;
    }
  });
  return result;
}
var filterUndefined = function filterUndefined2(object) {
  return objectFilter(object, function(val) {
    return val !== null && val !== void 0;
  });
};
var objectKeys = function objectKeys2(obj) {
  return Object.keys(obj);
};
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(carry, _ref) {
    var key = _ref[0], value = _ref[1];
    carry[key] = value;
    return carry;
  }, {});
};
function analyzeCSSValue(value) {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit
  };
}
function px(value) {
  if (value == null)
    return value;
  var _analyzeCSSValue = analyzeCSSValue(value), unitless = _analyzeCSSValue.unitless;
  return unitless || isNumber(value) ? value + "px" : value;
}
var sortByBreakpointValue = function sortByBreakpointValue2(a2, b2) {
  return parseInt(a2[1], 10) > parseInt(b2[1], 10) ? 1 : -1;
};
var sortBps = function sortBps2(breakpoints3) {
  return fromEntries(Object.entries(breakpoints3).sort(sortByBreakpointValue));
};
function normalize(breakpoints3) {
  var sorted = sortBps(breakpoints3);
  return Object.assign(Object.values(sorted), sorted);
}
function keys(breakpoints3) {
  var value = Object.keys(sortBps(breakpoints3));
  return new Set(value);
}
function subtract(value) {
  var _px;
  if (!value)
    return value;
  value = (_px = px(value)) != null ? _px : value;
  var factor = value.endsWith("px") ? -1 : -0.0635;
  return isNumber(value) ? "" + (value + factor) : value.replace(/([0-9]+\.?[0-9]*)/, function(m2) {
    return "" + (parseFloat(m2) + factor);
  });
}
function queryString(min, max) {
  var query = ["@media screen"];
  if (min)
    query.push("and", "(min-width: " + px(min) + ")");
  if (max)
    query.push("and", "(max-width: " + px(max) + ")");
  return query.join(" ");
}
function analyzeBreakpoints(breakpoints3) {
  var _breakpoints$base;
  if (!breakpoints3)
    return null;
  breakpoints3.base = (_breakpoints$base = breakpoints3.base) != null ? _breakpoints$base : "0px";
  var normalized = normalize(breakpoints3);
  var queries2 = Object.entries(breakpoints3).sort(sortByBreakpointValue).map(function(_ref, index, entry) {
    var _entry;
    var breakpoint = _ref[0], minW = _ref[1];
    var _ref2 = (_entry = entry[index + 1]) != null ? _entry : [], maxW = _ref2[1];
    maxW = parseFloat(maxW) > 0 ? subtract(maxW) : void 0;
    return {
      breakpoint,
      minW,
      maxW,
      maxWQuery: queryString(null, maxW),
      minWQuery: queryString(minW),
      minMaxQuery: queryString(minW, maxW)
    };
  });
  var _keys = keys(breakpoints3);
  var _keysArr = Array.from(_keys.values());
  return {
    keys: _keys,
    normalized,
    isResponsive: function isResponsive(test) {
      var keys2 = Object.keys(test);
      return keys2.length > 0 && keys2.every(function(key) {
        return _keys.has(key);
      });
    },
    asObject: sortBps(breakpoints3),
    asArray: normalize(breakpoints3),
    details: queries2,
    media: [null].concat(normalized.map(function(minW) {
      return queryString(minW);
    }).slice(1)),
    toArrayValue: function toArrayValue(test) {
      if (!isObject(test)) {
        throw new Error("toArrayValue: value must be an object");
      }
      var result = _keysArr.map(function(bp) {
        var _test$bp;
        return (_test$bp = test[bp]) != null ? _test$bp : null;
      });
      while (getLastItem(result) === null) {
        result.pop();
      }
      return result;
    },
    toObjectValue: function toObjectValue(test) {
      if (!Array.isArray(test)) {
        throw new Error("toObjectValue: value must be an array");
      }
      return test.reduce(function(acc, value, index) {
        var key = _keysArr[index];
        if (key != null && value != null)
          acc[key] = value;
        return acc;
      }, {});
    }
  };
}
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var isBrowser$1 = canUseDOM();
var dataAttr = function dataAttr2(condition) {
  return condition ? "" : void 0;
};
var ariaAttr = function ariaAttr2(condition) {
  return condition ? true : void 0;
};
var cx = function cx2() {
  for (var _len = arguments.length, classNames2 = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames2[_key] = arguments[_key];
  }
  return classNames2.filter(Boolean).join(" ");
};
function runIfFn(valueOrFn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return isFunction(valueOrFn) ? valueOrFn.apply(void 0, args) : valueOrFn;
}
function callAllHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function func(event) {
    fns.some(function(fn) {
      fn == null ? void 0 : fn(event);
      return event == null ? void 0 : event.defaultPrevented;
    });
  };
}
function once(fn) {
  var result;
  return function func() {
    if (fn) {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      result = fn.apply(this, args);
      fn = null;
    }
    return result;
  };
}
var noop = function noop2() {
};
var warn = once(function(options) {
  return function() {
    var condition = options.condition, message = options.message;
    if (condition && __DEV__) {
      console.warn(message);
    }
  };
});
var pipe = function pipe2() {
  for (var _len6 = arguments.length, fns = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    fns[_key6] = arguments[_key6];
  }
  return function(v3) {
    return fns.reduce(function(a2, b2) {
      return b2(a2);
    }, v3);
  };
};
function flatten(target, maxDepth) {
  if (maxDepth === void 0) {
    maxDepth = Infinity;
  }
  if (!isObject(target) && !Array.isArray(target) || !maxDepth) {
    return target;
  }
  return Object.entries(target).reduce(function(result, _ref) {
    var key = _ref[0], value = _ref[1];
    if (isObject(value) || isArray(value)) {
      Object.entries(flatten(value, maxDepth - 1)).forEach(function(_ref2) {
        var childKey = _ref2[0], childValue = _ref2[1];
        result[key + "." + childKey] = childValue;
      });
    } else {
      result[key] = value;
    }
    return result;
  }, {});
}
var breakpoints = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
function assignRef(ref, value) {
  if (ref == null)
    return;
  if (isFunction(ref)) {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error("Cannot assign value '" + value + "' to ref '" + ref + "'");
  }
}
function mergeRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return function(node) {
    refs.forEach(function(ref) {
      return assignRef(ref, node);
    });
  };
}
function createContext2(options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$strict = _options.strict, strict = _options$strict === void 0 ? true : _options$strict, _options$errorMessage = _options.errorMessage, errorMessage = _options$errorMessage === void 0 ? "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider" : _options$errorMessage, name = _options.name;
  var Context = /* @__PURE__ */ react.createContext(void 0);
  Context.displayName = name;
  function useContext2() {
    var context = react.useContext(Context);
    if (!context && strict) {
      var error = new Error(errorMessage);
      error.name = "ContextError";
      Error.captureStackTrace == null ? void 0 : Error.captureStackTrace(error, useContext2);
      throw error;
    }
    return context;
  }
  return [Context.Provider, useContext2, Context];
}
function getValidChildren(children) {
  return react.Children.toArray(children).filter(function(child) {
    return /* @__PURE__ */ react.isValidElement(child);
  });
}
function useBoolean(initialState) {
  if (initialState === void 0) {
    initialState = false;
  }
  var _useState = react.useState(initialState), value = _useState[0], setValue = _useState[1];
  var callbacks = react.useMemo(function() {
    return {
      on: function on() {
        return setValue(true);
      },
      off: function off() {
        return setValue(false);
      },
      toggle: function toggle() {
        return setValue(function(prev) {
          return !prev;
        });
      }
    };
  }, []);
  return [value, callbacks];
}
var defaultIdContext = {
  current: 1
};
var IdContext = /* @__PURE__ */ react.createContext(defaultIdContext);
var IdProvider = /* @__PURE__ */ react.memo(function(_ref) {
  var children = _ref.children;
  return /* @__PURE__ */ react.createElement(IdContext.Provider, {
    value: {
      current: 1
    }
  }, children);
});
var genId = function genId2(context) {
  return context.current++;
};
function useId2(idProp, prefix) {
  var context = react.useContext(IdContext);
  var _React$useState = react.useState(context.current), id2 = _React$useState[0], setId = _React$useState[1];
  react.useEffect(function() {
    setId(genId(context));
  }, [context]);
  return react.useMemo(function() {
    return idProp || [prefix, id2].filter(Boolean).join("-");
  }, [idProp, prefix, id2]);
}
function assignRef$1(ref, value) {
  if (ref == null)
    return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error("Cannot assign value '" + value + "' to ref '" + ref + "'");
  }
}
function useMergeRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return react.useMemo(function() {
    if (refs.every(function(ref) {
      return ref == null;
    })) {
      return null;
    }
    return function(node) {
      refs.forEach(function(ref) {
        if (ref)
          assignRef$1(ref, node);
      });
    };
  }, refs);
}
var _createContext$1 = createContext2({
  strict: false,
  name: "PortalManagerContext"
});
var PortalManagerContextProvider = _createContext$1[0];
function PortalManager(props) {
  var children = props.children, zIndex = props.zIndex;
  return /* @__PURE__ */ react.createElement(PortalManagerContextProvider, {
    value: {
      zIndex
    }
  }, children);
}
var _createContext = createContext2({
  strict: false,
  name: "PortalContext"
});
var doc = {
  body: {
    classList: {
      add: function add() {
      },
      remove: function remove() {
      }
    }
  },
  addEventListener: function addEventListener() {
  },
  removeEventListener: function removeEventListener() {
  },
  activeElement: {
    blur: function blur() {
    },
    nodeName: ""
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {
      }
    };
  },
  createElement: function createElement2() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {
      },
      getElementsByTagName: function getElementsByTagName() {
        return [];
      }
    };
  }
};
var ssrDocument = doc;
var noop$1 = function noop3() {
};
var win = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: noop$1,
  removeEventListener: noop$1,
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return "";
      }
    };
  },
  matchMedia: function matchMedia() {
    return {
      matches: false,
      addListener: noop$1,
      removeListener: noop$1
    };
  },
  requestAnimationFrame: function requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame: function cancelAnimationFrame(id2) {
    if (typeof setTimeout === "undefined")
      return;
    clearTimeout(id2);
  },
  setTimeout: function setTimeout2() {
    return 0;
  },
  clearTimeout: noop$1,
  setInterval: function setInterval() {
    return 0;
  },
  clearInterval: noop$1
};
var ssrWindow = win;
var mockEnv = {
  window: ssrWindow,
  document: ssrDocument
};
var defaultEnv = isBrowser$1 ? {
  window,
  document
} : mockEnv;
var EnvironmentContext = /* @__PURE__ */ react.createContext(defaultEnv);
function useEnvironment() {
  return react.useContext(EnvironmentContext);
}
function EnvironmentProvider(props) {
  var children = props.children, environmentProp = props.environment;
  var _useState = react.useState(null), node = _useState[0], setNode = _useState[1];
  var context = react.useMemo(function() {
    var _ref;
    var doc2 = node == null ? void 0 : node.ownerDocument;
    var win2 = node == null ? void 0 : node.ownerDocument.defaultView;
    var nodeEnv = doc2 ? {
      document: doc2,
      window: win2
    } : void 0;
    var env = (_ref = environmentProp != null ? environmentProp : nodeEnv) != null ? _ref : defaultEnv;
    return env;
  }, [node, environmentProp]);
  var showEnvGetter = !node && !environmentProp;
  return /* @__PURE__ */ react.createElement(EnvironmentContext.Provider, {
    value: context
  }, children, showEnvGetter && /* @__PURE__ */ react.createElement("span", {
    ref: function ref(el2) {
      if (el2)
        setNode(el2);
    }
  }));
}
var classNames = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
var mockBody = {
  classList: {
    add: noop,
    remove: noop
  }
};
var getBody = function getBody2(document2) {
  return isBrowser$1 ? document2.body : mockBody;
};
function syncBodyClassName(isDark3, document2) {
  var body = getBody(document2);
  body.classList.add(isDark3 ? classNames.dark : classNames.light);
  body.classList.remove(isDark3 ? classNames.light : classNames.dark);
}
function getMediaQuery(query) {
  var mediaQueryList = window.matchMedia == null ? void 0 : window.matchMedia(query);
  if (!mediaQueryList) {
    return void 0;
  }
  return !!mediaQueryList.media === mediaQueryList.matches;
}
var queries = {
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)"
};
function getColorScheme(fallback) {
  var _getMediaQuery;
  var isDark3 = (_getMediaQuery = getMediaQuery(queries.dark)) != null ? _getMediaQuery : fallback === "dark";
  return isDark3 ? "dark" : "light";
}
function addListener(fn) {
  if (!("matchMedia" in window)) {
    return noop;
  }
  var mediaQueryList = window.matchMedia(queries.dark);
  var listener = function listener2() {
    fn(mediaQueryList.matches ? "dark" : "light", true);
  };
  mediaQueryList.addEventListener("change", listener);
  return function() {
    mediaQueryList.removeEventListener("change", listener);
  };
}
var root = {
  get: function get2() {
    return document.documentElement.style.getPropertyValue("--chakra-ui-color-mode") || document.documentElement.dataset.theme;
  },
  set: function set(mode2) {
    if (isBrowser$1) {
      document.documentElement.style.setProperty("--chakra-ui-color-mode", mode2);
      document.documentElement.setAttribute("data-theme", mode2);
    }
  }
};
var hasSupport = function hasSupport2() {
  return typeof Storage !== "undefined";
};
var storageKey = "chakra-ui-color-mode";
var localStorageManager = {
  get: function get3(init) {
    if (!hasSupport())
      return init;
    try {
      var _value = localStorage.getItem(storageKey);
      return _value != null ? _value : init;
    } catch (error) {
      return init;
    }
  },
  set: function set2(value) {
    if (!hasSupport())
      return;
    try {
      localStorage.setItem(storageKey, value);
    } catch (error) {
    }
  },
  type: "localStorage"
};
var ColorModeContext = /* @__PURE__ */ react.createContext({});
var useColorMode = function useColorMode2() {
  var context = react.useContext(ColorModeContext);
  if (context === void 0) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
};
function ColorModeProvider(props) {
  var value = props.value, children = props.children, _props$options = props.options, useSystemColorMode = _props$options.useSystemColorMode, initialColorMode = _props$options.initialColorMode, _props$colorModeManag = props.colorModeManager, colorModeManager = _props$colorModeManag === void 0 ? localStorageManager : _props$colorModeManag;
  var defaultColorMode = initialColorMode === "dark" ? "dark" : "light";
  var _React$useState = react.useState(colorModeManager.type === "cookie" ? colorModeManager.get(defaultColorMode) : defaultColorMode), colorMode = _React$useState[0], rawSetColorMode = _React$useState[1];
  var _useEnvironment = useEnvironment(), document2 = _useEnvironment.document;
  react.useEffect(function() {
    if (isBrowser$1 && colorModeManager.type === "localStorage") {
      var systemColorWithFallback = getColorScheme(defaultColorMode);
      if (useSystemColorMode) {
        return rawSetColorMode(systemColorWithFallback);
      }
      var rootGet = root.get();
      var colorManagerGet = colorModeManager.get();
      if (rootGet) {
        return rawSetColorMode(rootGet);
      }
      if (colorManagerGet) {
        return rawSetColorMode(colorManagerGet);
      }
      if (initialColorMode === "system") {
        return rawSetColorMode(systemColorWithFallback);
      }
      return rawSetColorMode(defaultColorMode);
    }
  }, [colorModeManager, useSystemColorMode, defaultColorMode, initialColorMode]);
  react.useEffect(function() {
    var isDark3 = colorMode === "dark";
    syncBodyClassName(isDark3, document2);
    root.set(isDark3 ? "dark" : "light");
  }, [colorMode, document2]);
  var setColorMode = react.useCallback(function(value2, isListenerEvent) {
    if (isListenerEvent === void 0) {
      isListenerEvent = false;
    }
    if (!isListenerEvent) {
      colorModeManager.set(value2);
    } else if (colorModeManager.get() && !useSystemColorMode)
      return;
    rawSetColorMode(value2);
  }, [colorModeManager, useSystemColorMode]);
  var toggleColorMode = react.useCallback(function() {
    setColorMode(colorMode === "light" ? "dark" : "light");
  }, [colorMode, setColorMode]);
  react.useEffect(function() {
    var shouldUseSystemListener = useSystemColorMode || initialColorMode === "system";
    var removeListener;
    if (shouldUseSystemListener) {
      removeListener = addListener(setColorMode);
    }
    return function() {
      if (removeListener && shouldUseSystemListener) {
        removeListener();
      }
    };
  }, [setColorMode, useSystemColorMode, initialColorMode]);
  var context = react.useMemo(function() {
    return {
      colorMode: value != null ? value : colorMode,
      toggleColorMode: value ? noop : toggleColorMode,
      setColorMode: value ? noop : setColorMode
    };
  }, [colorMode, setColorMode, toggleColorMode, value]);
  return /* @__PURE__ */ react.createElement(ColorModeContext.Provider, {
    value: context
  }, children);
}
function setScript(initialValue) {
  var mql = window.matchMedia("(prefers-color-scheme: dark)");
  var systemPreference = mql.matches ? "dark" : "light";
  var persistedPreference = systemPreference;
  try {
    persistedPreference = localStorage.getItem("chakra-ui-color-mode");
  } catch (error) {
    console.log("Chakra UI: localStorage is not available. Color mode persistence might not work as expected");
  }
  var colorMode;
  if (persistedPreference) {
    colorMode = persistedPreference;
  } else if (initialValue === "system") {
    colorMode = systemPreference;
  } else {
    colorMode = initialValue != null ? initialValue : systemPreference;
  }
  if (colorMode) {
    document.documentElement.style.setProperty("--chakra-ui-color-mode", colorMode);
    document.documentElement.setAttribute("data-theme", colorMode);
  }
}
var ColorModeScript = function ColorModeScript2(props) {
  var _props$initialColorMo = props.initialColorMode, initialColorMode = _props$initialColorMo === void 0 ? "light" : _props$initialColorMo;
  var validColorModeValues = ["dark", "light", "system"];
  if (!validColorModeValues.includes(initialColorMode)) {
    initialColorMode = "light";
  }
  var html = "(" + String(setScript) + ")('" + initialColorMode + "')";
  return /* @__PURE__ */ react.createElement("script", {
    nonce: props.nonce,
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
};
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var tokenToCSSVar = function tokenToCSSVar2(scale, value) {
  return function(theme3) {
    var valueStr = String(value);
    var key = scale ? scale + "." + valueStr : valueStr;
    return isObject(theme3.__cssMap) && key in theme3.__cssMap ? theme3.__cssMap[key].varRef : value;
  };
};
function createTransform(options) {
  var scale = options.scale, transform10 = options.transform, compose = options.compose;
  var fn = function fn2(value, theme3) {
    var _transform;
    var _value = tokenToCSSVar(scale, value)(theme3);
    var result = (_transform = transform10 == null ? void 0 : transform10(_value, theme3)) != null ? _transform : _value;
    if (compose) {
      result = compose(result, theme3);
    }
    return result;
  };
  return fn;
}
function toConfig(scale, transform10) {
  return function(property) {
    var result = {
      property,
      scale
    };
    result.transform = createTransform({
      scale,
      transform: transform10
    });
    return result;
  };
}
var getRtl = function getRtl2(_ref) {
  var rtl = _ref.rtl, ltr = _ref.ltr;
  return function(theme3) {
    return theme3.direction === "rtl" ? rtl : ltr;
  };
};
function logical(options) {
  var property = options.property, scale = options.scale, transform10 = options.transform;
  return {
    scale,
    property: getRtl(property),
    transform: scale ? createTransform({
      scale,
      compose: transform10
    }) : transform10
  };
}
var _spaceXTemplate;
var _spaceYTemplate;
var transformTemplate = ["rotate(var(--chakra-rotate, 0))", "scaleX(var(--chakra-scale-x, 1))", "scaleY(var(--chakra-scale-y, 1))", "skewX(var(--chakra-skew-x, 0))", "skewY(var(--chakra-skew-y, 0))"];
function getTransformTemplate() {
  return ["translateX(var(--chakra-translate-x, 0))", "translateY(var(--chakra-translate-y, 0))"].concat(transformTemplate).join(" ");
}
function getTransformGpuTemplate() {
  return ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)"].concat(transformTemplate).join(" ");
}
var filterTemplate = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: ["var(--chakra-blur)", "var(--chakra-brightness)", "var(--chakra-contrast)", "var(--chakra-grayscale)", "var(--chakra-hue-rotate)", "var(--chakra-invert)", "var(--chakra-saturate)", "var(--chakra-sepia)", "var(--chakra-drop-shadow)"].join(" ")
};
var backdropFilterTemplate = {
  backdropFilter: ["var(--chakra-backdrop-blur)", "var(--chakra-backdrop-brightness)", "var(--chakra-backdrop-contrast)", "var(--chakra-backdrop-grayscale)", "var(--chakra-backdrop-hue-rotate)", "var(--chakra-backdrop-invert)", "var(--chakra-backdrop-opacity)", "var(--chakra-backdrop-saturate)", "var(--chakra-backdrop-sepia)"].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function getRingTemplate(value) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": value,
    boxShadow: ["var(--chakra-ring-offset-shadow)", "var(--chakra-ring-shadow)", "var(--chakra-shadow, 0 0 #0000)"].join(", ")
  };
}
var flexDirectionTemplate = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
};
var owlSelector = "& > :not(style) ~ :not(style)";
var spaceXTemplate = (_spaceXTemplate = {}, _spaceXTemplate[owlSelector] = {
  marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
  marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
}, _spaceXTemplate);
var spaceYTemplate = (_spaceYTemplate = {}, _spaceYTemplate[owlSelector] = {
  marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
  marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
}, _spaceYTemplate);
function _setPrototypeOf(o, p4) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p5) {
    o2.__proto__ = p5;
    return o2;
  };
  return _setPrototypeOf(o, p4);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _wrapRegExp() {
  _wrapRegExp = function(re3, groups) {
    return new BabelRegExp(re3, void 0, groups);
  };
  var _super = RegExp.prototype;
  var _groups = new WeakMap();
  function BabelRegExp(re3, flags, groups) {
    var _this = new RegExp(re3, flags);
    _groups.set(_this, groups || _groups.get(re3));
    return _setPrototypeOf(_this, BabelRegExp.prototype);
  }
  _inherits(BabelRegExp, RegExp);
  BabelRegExp.prototype.exec = function(str) {
    var result = _super.exec.call(this, str);
    if (result)
      result.groups = buildGroups(result, this);
    return result;
  };
  BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
    if (typeof substitution === "string") {
      var groups = _groups.get(this);
      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_2, name) {
        return "$" + groups[name];
      }));
    } else if (typeof substitution === "function") {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function() {
        var args = arguments;
        if (typeof args[args.length - 1] !== "object") {
          args = [].slice.call(args);
          args.push(buildGroups(args, _this));
        }
        return substitution.apply(this, args);
      });
    } else {
      return _super[Symbol.replace].call(this, str, substitution);
    }
  };
  function buildGroups(result, re3) {
    var g2 = _groups.get(re3);
    return Object.keys(g2).reduce(function(groups, name) {
      groups[name] = result[g2[name]];
      return groups;
    }, Object.create(null));
  }
  return _wrapRegExp.apply(this, arguments);
}
var directionMap = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
};
var valueSet = new Set(Object.values(directionMap));
var globalSet = new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"]);
var trimSpace = function trimSpace2(str) {
  return str.trim();
};
function parseGradient(value, theme3) {
  var _regex$exec$groups, _regex$exec;
  if (value == null || globalSet.has(value))
    return value;
  var regex = /* @__PURE__ */ _wrapRegExp(/(^[\x2DA-Za-z]+)\(((.*))\)/g, {
    type: 1,
    values: 2
  });
  var _ref = (_regex$exec$groups = (_regex$exec = regex.exec(value)) == null ? void 0 : _regex$exec.groups) != null ? _regex$exec$groups : {}, type = _ref.type, values = _ref.values;
  if (!type || !values)
    return value;
  var _type = type.includes("-gradient") ? type : type + "-gradient";
  var _values$split$map$fil = values.split(",").map(trimSpace).filter(Boolean), maybeDirection = _values$split$map$fil[0], stops = _values$split$map$fil.slice(1);
  if ((stops == null ? void 0 : stops.length) === 0)
    return value;
  var direction2 = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
  stops.unshift(direction2);
  var _values = stops.map(function(stop) {
    if (valueSet.has(stop))
      return stop;
    var firstStop = stop.indexOf(" ");
    var _ref2 = firstStop !== -1 ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)] : [stop], _color = _ref2[0], _stop = _ref2[1];
    var _stopOrFunc = isCSSFunction(_stop) ? _stop : _stop && _stop.split(" ");
    var key = "colors." + _color;
    var color2 = key in theme3.__cssMap ? theme3.__cssMap[key].varRef : _color;
    return _stopOrFunc ? [color2].concat(Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]).join(" ") : color2;
  });
  return _type + "(" + _values.join(", ") + ")";
}
var isCSSFunction = function isCSSFunction2(value) {
  return isString(value) && value.includes("(") && value.includes(")");
};
var gradientTransform = function gradientTransform2(value, theme3) {
  return parseGradient(value, theme3 != null ? theme3 : {});
};
var analyzeCSSValue$1 = function analyzeCSSValue2(value) {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit
  };
};
var wrap = function wrap2(str) {
  return function(value) {
    return str + "(" + value + ")";
  };
};
var transformFunctions = {
  filter: function filter(value) {
    return value !== "auto" ? value : filterTemplate;
  },
  backdropFilter: function backdropFilter(value) {
    return value !== "auto" ? value : backdropFilterTemplate;
  },
  ring: function ring(value) {
    return getRingTemplate(transformFunctions.px(value));
  },
  bgClip: function bgClip(value) {
    return value === "text" ? {
      color: "transparent",
      backgroundClip: "text"
    } : {
      backgroundClip: value
    };
  },
  transform: function transform(value) {
    if (value === "auto")
      return getTransformTemplate();
    if (value === "auto-gpu")
      return getTransformGpuTemplate();
    return value;
  },
  px: function px2(value) {
    if (value == null)
      return value;
    var _analyzeCSSValue = analyzeCSSValue$1(value), unitless = _analyzeCSSValue.unitless;
    return unitless || isNumber(value) ? value + "px" : value;
  },
  fraction: function fraction(value) {
    return !isNumber(value) || value > 1 ? value : value * 100 + "%";
  },
  float: function float(value, theme3) {
    var map = {
      left: "right",
      right: "left"
    };
    return theme3.direction === "rtl" ? map[value] : value;
  },
  degree: function degree(value) {
    if (isCssVar(value) || value == null)
      return value;
    var unitless = isString(value) && !value.endsWith("deg");
    return isNumber(value) || unitless ? value + "deg" : value;
  },
  gradient: gradientTransform,
  blur: wrap("blur"),
  opacity: wrap("opacity"),
  brightness: wrap("brightness"),
  contrast: wrap("contrast"),
  dropShadow: wrap("drop-shadow"),
  grayscale: wrap("grayscale"),
  hueRotate: wrap("hue-rotate"),
  invert: wrap("invert"),
  saturate: wrap("saturate"),
  sepia: wrap("sepia"),
  bgImage: function bgImage(value) {
    if (value == null)
      return value;
    var prevent = isCSSFunction(value) || globalSet.has(value);
    return !prevent ? "url(" + value + ")" : value;
  },
  outline: function outline(value) {
    var isNoneOrZero = String(value) === "0" || String(value) === "none";
    return value !== null && isNoneOrZero ? {
      outline: "2px solid transparent",
      outlineOffset: "2px"
    } : {
      outline: value
    };
  },
  flexDirection: function flexDirection(value) {
    var _flexDirectionTemplat;
    var _ref = (_flexDirectionTemplat = flexDirectionTemplate[value]) != null ? _flexDirectionTemplat : {}, space2 = _ref.space, divide3 = _ref.divide;
    var result = {
      flexDirection: value
    };
    if (space2)
      result[space2] = 1;
    if (divide3)
      result[divide3] = 1;
    return result;
  }
};
var t$2 = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  radii: toConfig("radii", transformFunctions.px),
  space: toConfig("space", transformFunctions.px),
  spaceT: toConfig("space", transformFunctions.px),
  degreeT: function degreeT(property) {
    return {
      property,
      transform: transformFunctions.degree
    };
  },
  prop: function prop(property, scale, transform10) {
    return _extends$1({
      property,
      scale
    }, scale && {
      transform: createTransform({
        scale,
        transform: transform10
      })
    });
  },
  propT: function propT(property, transform10) {
    return {
      property,
      transform: transform10
    };
  },
  sizes: toConfig("sizes", transformFunctions.px),
  sizesT: toConfig("sizes", transformFunctions.fraction),
  shadows: toConfig("shadows"),
  logical,
  blur: toConfig("blur", transformFunctions.blur)
};
var background = {
  background: t$2.colors("background"),
  backgroundColor: t$2.colors("backgroundColor"),
  backgroundImage: t$2.propT("backgroundImage", transformFunctions.bgImage),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: {
    transform: transformFunctions.bgClip
  },
  bgSize: t$2.prop("backgroundSize"),
  bgPosition: t$2.prop("backgroundPosition"),
  bg: t$2.colors("background"),
  bgColor: t$2.colors("backgroundColor"),
  bgPos: t$2.prop("backgroundPosition"),
  bgRepeat: t$2.prop("backgroundRepeat"),
  bgAttachment: t$2.prop("backgroundAttachment"),
  bgGradient: t$2.propT("backgroundImage", transformFunctions.gradient),
  bgClip: {
    transform: transformFunctions.bgClip
  }
};
Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage
});
var border = {
  border: t$2.borders("border"),
  borderWidth: t$2.borderWidths("borderWidth"),
  borderStyle: t$2.borderStyles("borderStyle"),
  borderColor: t$2.colors("borderColor"),
  borderRadius: t$2.radii("borderRadius"),
  borderTop: t$2.borders("borderTop"),
  borderBlockStart: t$2.borders("borderBlockStart"),
  borderTopLeftRadius: t$2.radii("borderTopLeftRadius"),
  borderStartStartRadius: t$2.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: t$2.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: t$2.radii("borderTopRightRadius"),
  borderStartEndRadius: t$2.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: t$2.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: t$2.borders("borderRight"),
  borderInlineEnd: t$2.borders("borderInlineEnd"),
  borderBottom: t$2.borders("borderBottom"),
  borderBlockEnd: t$2.borders("borderBlockEnd"),
  borderBottomLeftRadius: t$2.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: t$2.radii("borderBottomRightRadius"),
  borderLeft: t$2.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: t$2.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: t$2.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: t$2.borders(["borderLeft", "borderRight"]),
  borderInline: t$2.borders("borderInline"),
  borderY: t$2.borders(["borderTop", "borderBottom"]),
  borderBlock: t$2.borders("borderBlock"),
  borderTopWidth: t$2.borderWidths("borderTopWidth"),
  borderBlockStartWidth: t$2.borderWidths("borderBlockStartWidth"),
  borderTopColor: t$2.colors("borderTopColor"),
  borderBlockStartColor: t$2.colors("borderBlockStartColor"),
  borderTopStyle: t$2.borderStyles("borderTopStyle"),
  borderBlockStartStyle: t$2.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: t$2.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: t$2.borderWidths("borderBlockEndWidth"),
  borderBottomColor: t$2.colors("borderBottomColor"),
  borderBlockEndColor: t$2.colors("borderBlockEndColor"),
  borderBottomStyle: t$2.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: t$2.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: t$2.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: t$2.borderWidths("borderInlineStartWidth"),
  borderLeftColor: t$2.colors("borderLeftColor"),
  borderInlineStartColor: t$2.colors("borderInlineStartColor"),
  borderLeftStyle: t$2.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: t$2.borderStyles("borderInlineStartStyle"),
  borderRightWidth: t$2.borderWidths("borderRightWidth"),
  borderInlineEndWidth: t$2.borderWidths("borderInlineEndWidth"),
  borderRightColor: t$2.colors("borderRightColor"),
  borderInlineEndColor: t$2.colors("borderInlineEndColor"),
  borderRightStyle: t$2.borderStyles("borderRightStyle"),
  borderInlineEndStyle: t$2.borderStyles("borderInlineEndStyle"),
  borderTopRadius: t$2.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: t$2.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
  borderLeftRadius: t$2.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: t$2.radii(["borderTopRightRadius", "borderBottomRightRadius"])
};
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle
});
var color = {
  color: t$2.colors("color"),
  textColor: t$2.colors("color"),
  fill: t$2.colors("fill"),
  stroke: t$2.colors("stroke")
};
var effect = {
  boxShadow: t$2.shadows("boxShadow"),
  mixBlendMode: true,
  blendMode: t$2.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: t$2.prop("backgroundBlendMode"),
  opacity: true
};
Object.assign(effect, {
  shadow: effect.boxShadow
});
var filter2 = {
  filter: {
    transform: transformFunctions.filter
  },
  blur: t$2.blur("--chakra-blur"),
  brightness: t$2.propT("--chakra-brightness", transformFunctions.brightness),
  contrast: t$2.propT("--chakra-contrast", transformFunctions.contrast),
  hueRotate: t$2.degreeT("--chakra-hue-rotate"),
  invert: t$2.propT("--chakra-invert", transformFunctions.invert),
  saturate: t$2.propT("--chakra-saturate", transformFunctions.saturate),
  dropShadow: t$2.propT("--chakra-drop-shadow", transformFunctions.dropShadow),
  backdropFilter: {
    transform: transformFunctions.backdropFilter
  },
  backdropBlur: t$2.blur("--chakra-backdrop-blur"),
  backdropBrightness: t$2.propT("--chakra-backdrop-brightness", transformFunctions.brightness),
  backdropContrast: t$2.propT("--chakra-backdrop-contrast", transformFunctions.contrast),
  backdropHueRotate: t$2.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: t$2.propT("--chakra-backdrop-invert", transformFunctions.invert),
  backdropSaturate: t$2.propT("--chakra-backdrop-saturate", transformFunctions.saturate)
};
var flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: {
    transform: transformFunctions.flexDirection
  },
  experimental_spaceX: {
    static: spaceXTemplate,
    transform: createTransform({
      scale: "space",
      transform: function transform2(value) {
        return value !== null ? {
          "--chakra-space-x": value
        } : null;
      }
    })
  },
  experimental_spaceY: {
    static: spaceYTemplate,
    transform: createTransform({
      scale: "space",
      transform: function transform3(value) {
        return value != null ? {
          "--chakra-space-y": value
        } : null;
      }
    })
  },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: t$2.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  gap: t$2.space("gap"),
  rowGap: t$2.space("rowGap"),
  columnGap: t$2.space("columnGap")
};
Object.assign(flexbox, {
  flexDir: flexbox.flexDirection
});
var grid = {
  gridGap: t$2.space("gridGap"),
  gridColumnGap: t$2.space("gridColumnGap"),
  gridRowGap: t$2.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var interactivity = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: {
    transform: transformFunctions.outline
  },
  outlineOffset: true,
  outlineColor: t$2.colors("outlineColor")
};
var layout = {
  width: t$2.sizesT("width"),
  inlineSize: t$2.sizesT("inlineSize"),
  height: t$2.sizes("height"),
  blockSize: t$2.sizes("blockSize"),
  boxSize: t$2.sizes(["width", "height"]),
  minWidth: t$2.sizes("minWidth"),
  minInlineSize: t$2.sizes("minInlineSize"),
  minHeight: t$2.sizes("minHeight"),
  minBlockSize: t$2.sizes("minBlockSize"),
  maxWidth: t$2.sizes("maxWidth"),
  maxInlineSize: t$2.sizes("maxInlineSize"),
  maxHeight: t$2.sizes("maxHeight"),
  maxBlockSize: t$2.sizes("maxBlockSize"),
  d: t$2.prop("display"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  float: t$2.propT("float", transformFunctions["float"]),
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true
};
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY
});
var list = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: t$2.prop("listStylePosition"),
  listStyleImage: true,
  listStyleImg: t$2.prop("listStyleImage")
};
var srOnly = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var srFocusable = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
};
var getWithPriority = function getWithPriority2(theme3, key, styles3) {
  var result = {};
  var obj = memoizedGet(theme3, key, {});
  for (var prop2 in obj) {
    var isInStyles = prop2 in styles3 && styles3[prop2] != null;
    if (!isInStyles)
      result[prop2] = obj[prop2];
  }
  return result;
};
var others = {
  srOnly: {
    transform: function transform4(value) {
      if (value === true)
        return srOnly;
      if (value === "focusable")
        return srFocusable;
      return {};
    }
  },
  layerStyle: {
    processResult: true,
    transform: function transform5(value, theme3, styles3) {
      return getWithPriority(theme3, "layerStyles." + value, styles3);
    }
  },
  textStyle: {
    processResult: true,
    transform: function transform6(value, theme3, styles3) {
      return getWithPriority(theme3, "textStyles." + value, styles3);
    }
  },
  apply: {
    processResult: true,
    transform: function transform7(value, theme3, styles3) {
      return getWithPriority(theme3, value, styles3);
    }
  }
};
var position = {
  position: true,
  pos: t$2.prop("position"),
  zIndex: t$2.prop("zIndex", "zIndices"),
  inset: t$2.spaceT("inset"),
  insetX: t$2.spaceT(["left", "right"]),
  insetInline: t$2.spaceT("insetInline"),
  insetY: t$2.spaceT(["top", "bottom"]),
  insetBlock: t$2.spaceT("insetBlock"),
  top: t$2.spaceT("top"),
  insetBlockStart: t$2.spaceT("insetBlockStart"),
  bottom: t$2.spaceT("bottom"),
  insetBlockEnd: t$2.spaceT("insetBlockEnd"),
  left: t$2.spaceT("left"),
  insetInlineStart: t$2.logical({
    scale: "space",
    property: {
      ltr: "left",
      rtl: "right"
    }
  }),
  right: t$2.spaceT("right"),
  insetInlineEnd: t$2.logical({
    scale: "space",
    property: {
      ltr: "right",
      rtl: "left"
    }
  })
};
Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd
});
var ring2 = {
  ring: {
    transform: transformFunctions.ring
  },
  ringColor: t$2.colors("--chakra-ring-color"),
  ringOffset: t$2.prop("--chakra-ring-offset-width"),
  ringOffsetColor: t$2.colors("--chakra-ring-offset-color"),
  ringInset: t$2.prop("--chakra-ring-inset")
};
var space = {
  margin: t$2.spaceT("margin"),
  marginTop: t$2.spaceT("marginTop"),
  marginBlockStart: t$2.spaceT("marginBlockStart"),
  marginRight: t$2.spaceT("marginRight"),
  marginInlineEnd: t$2.spaceT("marginInlineEnd"),
  marginBottom: t$2.spaceT("marginBottom"),
  marginBlockEnd: t$2.spaceT("marginBlockEnd"),
  marginLeft: t$2.spaceT("marginLeft"),
  marginInlineStart: t$2.spaceT("marginInlineStart"),
  marginX: t$2.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: t$2.spaceT("marginInline"),
  marginY: t$2.spaceT(["marginTop", "marginBottom"]),
  marginBlock: t$2.spaceT("marginBlock"),
  padding: t$2.space("padding"),
  paddingTop: t$2.space("paddingTop"),
  paddingBlockStart: t$2.space("paddingBlockStart"),
  paddingRight: t$2.space("paddingRight"),
  paddingBottom: t$2.space("paddingBottom"),
  paddingBlockEnd: t$2.space("paddingBlockEnd"),
  paddingLeft: t$2.space("paddingLeft"),
  paddingInlineStart: t$2.space("paddingInlineStart"),
  paddingInlineEnd: t$2.space("paddingInlineEnd"),
  paddingX: t$2.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: t$2.space("paddingInline"),
  paddingY: t$2.space(["paddingTop", "paddingBottom"]),
  paddingBlock: t$2.space("paddingBlock")
};
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd
});
var textDecoration = {
  textDecorationColor: t$2.colors("textDecorationColor"),
  textDecoration: true,
  textDecor: {
    property: "textDecoration"
  },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: t$2.shadows("textShadow")
};
var transform8 = {
  clipPath: true,
  transform: t$2.propT("transform", transformFunctions.transform),
  transformOrigin: true,
  translateX: t$2.spaceT("--chakra-translate-x"),
  translateY: t$2.spaceT("--chakra-translate-y"),
  skewX: t$2.degreeT("--chakra-skew-x"),
  skewY: t$2.degreeT("--chakra-skew-y"),
  scaleX: t$2.prop("--chakra-scale-x"),
  scaleY: t$2.prop("--chakra-scale-y"),
  scale: t$2.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: t$2.degreeT("--chakra-rotate")
};
var transition = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: t$2.prop("transitionDuration", "transition.duration"),
  transitionProperty: t$2.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: t$2.prop("transitionTimingFunction", "transition.easing")
};
var typography = {
  fontFamily: t$2.prop("fontFamily", "fonts"),
  fontSize: t$2.prop("fontSize", "fontSizes", transformFunctions.px),
  fontWeight: t$2.prop("fontWeight", "fontWeights"),
  lineHeight: t$2.prop("lineHeight", "lineHeights"),
  letterSpacing: t$2.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  },
  isTruncated: {
    transform: function transform9(value) {
      if (value === true) {
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
      }
    }
  }
};
var scroll = {
  scrollBehavior: true,
  scrollSnapAlign: true,
  scrollSnapStop: true,
  scrollSnapType: true,
  scrollMargin: t$2.spaceT("scrollMargin"),
  scrollMarginTop: t$2.spaceT("scrollMarginTop"),
  scrollMarginBottom: t$2.spaceT("scrollMarginBottom"),
  scrollMarginLeft: t$2.spaceT("scrollMarginLeft"),
  scrollMarginRight: t$2.spaceT("scrollMarginRight"),
  scrollMarginX: t$2.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: t$2.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: t$2.spaceT("scrollPadding"),
  scrollPaddingTop: t$2.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: t$2.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: t$2.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: t$2.spaceT("scrollPaddingRight"),
  scrollPaddingX: t$2.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: t$2.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n3 = Object.prototype.toString.call(o).slice(8, -1);
  if (n3 === "Object" && o.constructor)
    n3 = o.constructor.name;
  if (n3 === "Map" || n3 === "Set")
    return Array.from(o);
  if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
    return _arrayLikeToArray(o, minLen);
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i2 = 0;
    return function() {
      if (i2 >= o.length)
        return {
          done: true
        };
      return {
        done: false,
        value: o[i2++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var state = {
  hover: function hover(str, post) {
    return str + ":hover " + post + ", " + str + "[data-hover] " + post;
  },
  focus: function focus(str, post) {
    return str + ":focus " + post + ", " + str + "[data-focus] " + post;
  },
  focusVisible: function focusVisible(str, post) {
    return str + ":focus-visible " + post;
  },
  focusWithin: function focusWithin(str, post) {
    return str + ":focus-within " + post;
  },
  active: function active(str, post) {
    return str + ":active " + post + ", " + str + "[data-active] " + post;
  },
  disabled: function disabled(str, post) {
    return str + ":disabled " + post + ", " + str + "[data-disabled] " + post;
  },
  invalid: function invalid(str, post) {
    return str + ":invalid " + post + ", " + str + "[data-invalid] " + post;
  },
  checked: function checked(str, post) {
    return str + ":checked " + post + ", " + str + "[data-checked] " + post;
  },
  indeterminate: function indeterminate(str, post) {
    return str + ":indeterminate " + post + ", " + str + "[aria-checked=mixed] " + post + ", " + str + "[data-indeterminate] " + post;
  },
  readOnly: function readOnly(str, post) {
    return str + ":read-only " + post + ", " + str + "[readonly] " + post + ", " + str + "[data-read-only] " + post;
  },
  expanded: function expanded(str, post) {
    return str + ":read-only " + post + ", " + str + "[aria-expanded=true] " + post + ", " + str + "[data-expanded] " + post;
  },
  placeholderShown: function placeholderShown(str, post) {
    return str + ":placeholder-shown " + post;
  }
};
var toGroup = function toGroup2(fn) {
  return merge(function(v3) {
    return fn(v3, "&");
  }, "[role=group]", "[data-group]", ".group");
};
var toPeer = function toPeer2(fn) {
  return merge(function(v3) {
    return fn(v3, "~ &");
  }, "[data-peer]", ".peer");
};
var merge = function merge2(fn) {
  for (var _len = arguments.length, selectors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    selectors[_key - 1] = arguments[_key];
  }
  return selectors.map(fn).join(", ");
};
var pseudoSelectors = {
  _hover: "&:hover, &[data-hover]",
  _active: "&:active, &[data-active]",
  _focus: "&:focus, &[data-focus]",
  _highlighted: "&[data-highlighted]",
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible",
  _disabled: "&[disabled], &[aria-disabled=true], &[data-disabled]",
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  _before: "&::before",
  _after: "&::after",
  _empty: "&:empty",
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  _checked: "&[aria-checked=true], &[data-checked]",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  _valid: "&[data-valid], &[data-state=valid]",
  _loading: "&[data-loading], &[aria-busy=true]",
  _selected: "&[aria-selected=true], &[data-selected]",
  _hidden: "&[hidden], &[data-hidden]",
  _autofill: "&:-webkit-autofill",
  _even: "&:nth-of-type(even)",
  _odd: "&:nth-of-type(odd)",
  _first: "&:first-of-type",
  _last: "&:last-of-type",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _visited: "&:visited",
  _activeLink: "&[aria-current=page]",
  _activeStep: "&[aria-current=step]",
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _groupHover: toGroup(state.hover),
  _peerHover: toPeer(state.hover),
  _groupFocus: toGroup(state.focus),
  _peerFocus: toPeer(state.focus),
  _groupFocusVisible: toGroup(state.focusVisible),
  _peerFocusVisible: toPeer(state.focusVisible),
  _groupActive: toGroup(state.active),
  _peerActive: toPeer(state.active),
  _groupDisabled: toGroup(state.disabled),
  _peerDisabled: toPeer(state.disabled),
  _groupInvalid: toGroup(state.invalid),
  _peerInvalid: toPeer(state.invalid),
  _groupChecked: toGroup(state.checked),
  _peerChecked: toPeer(state.checked),
  _groupFocusWithin: toGroup(state.focusWithin),
  _peerFocusWithin: toPeer(state.focusWithin),
  _peerPlaceholderShown: toPeer(state.placeholderShown),
  _placeholder: "&::placeholder",
  _placeholderShown: "&:placeholder-shown",
  _fullScreen: "&:fullscreen",
  _selection: "&::selection",
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  _mediaDark: "@media (prefers-color-scheme: dark)",
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"
};
var pseudoPropNames = objectKeys(pseudoSelectors);
var systemProps = lodash_mergewith({}, background, border, color, flexbox, layout, filter2, ring2, interactivity, grid, others, position, effect, space, scroll, typography, textDecoration, transform8, list, transition);
var layoutSystem = Object.assign({}, space, layout, flexbox, grid, position);
var propNames = [].concat(objectKeys(systemProps), pseudoPropNames);
var styleProps = _extends$1({}, systemProps, pseudoSelectors);
var isStyleProp = function isStyleProp2(prop2) {
  return prop2 in styleProps;
};
var expandResponsive = function expandResponsive2(styles3) {
  return function(theme3) {
    if (!theme3.__breakpoints)
      return styles3;
    var _theme$__breakpoints = theme3.__breakpoints, isResponsive = _theme$__breakpoints.isResponsive, toArrayValue = _theme$__breakpoints.toArrayValue, medias = _theme$__breakpoints.media;
    var computedStyles = {};
    for (var key in styles3) {
      var value = runIfFn(styles3[key], theme3);
      if (value == null)
        continue;
      value = isObject(value) && isResponsive(value) ? toArrayValue(value) : value;
      if (!Array.isArray(value)) {
        computedStyles[key] = value;
        continue;
      }
      var queries2 = value.slice(0, medias.length).length;
      for (var index = 0; index < queries2; index += 1) {
        var media = medias == null ? void 0 : medias[index];
        if (!media) {
          computedStyles[key] = value[index];
          continue;
        }
        computedStyles[media] = computedStyles[media] || {};
        if (value[index] == null) {
          continue;
        }
        computedStyles[media][key] = value[index];
      }
    }
    return computedStyles;
  };
};
var isCSSVariableTokenValue = function isCSSVariableTokenValue2(key, value) {
  return key.startsWith("--") && isString(value) && !isCssVar(value);
};
var resolveTokenValue = function resolveTokenValue2(theme3, value) {
  var _ref, _getVar2;
  if (value == null)
    return value;
  var getVar = function getVar2(val) {
    var _theme$__cssMap, _theme$__cssMap$val;
    return (_theme$__cssMap = theme3.__cssMap) == null ? void 0 : (_theme$__cssMap$val = _theme$__cssMap[val]) == null ? void 0 : _theme$__cssMap$val.varRef;
  };
  var getValue = function getValue2(val) {
    var _getVar;
    return (_getVar = getVar(val)) != null ? _getVar : val;
  };
  var valueSplit = value.split(",").map(function(v3) {
    return v3.trim();
  });
  var tokenValue = valueSplit[0], fallbackValue = valueSplit[1];
  value = (_ref = (_getVar2 = getVar(tokenValue)) != null ? _getVar2 : getValue(fallbackValue)) != null ? _ref : getValue(value);
  return value;
};
function getCss(options) {
  var _options$configs = options.configs, configs = _options$configs === void 0 ? {} : _options$configs, _options$pseudos = options.pseudos, pseudos = _options$pseudos === void 0 ? {} : _options$pseudos, theme3 = options.theme;
  var css3 = function css4(stylesOrFn, nested) {
    if (nested === void 0) {
      nested = false;
    }
    var _styles = runIfFn(stylesOrFn, theme3);
    var styles3 = expandResponsive(_styles)(theme3);
    var computedStyles = {};
    for (var key in styles3) {
      var _config$transform, _config, _config2, _config3, _config4;
      var valueOrFn = styles3[key];
      var value = runIfFn(valueOrFn, theme3);
      if (key in pseudos) {
        key = pseudos[key];
      }
      if (isCSSVariableTokenValue(key, value)) {
        value = resolveTokenValue(theme3, value);
      }
      var config2 = configs[key];
      if (config2 === true) {
        config2 = {
          property: key
        };
      }
      if (isObject(value)) {
        var _computedStyles$key;
        computedStyles[key] = (_computedStyles$key = computedStyles[key]) != null ? _computedStyles$key : {};
        computedStyles[key] = lodash_mergewith({}, computedStyles[key], css4(value, true));
        continue;
      }
      var rawValue = (_config$transform = (_config = config2) == null ? void 0 : _config.transform == null ? void 0 : _config.transform(value, theme3, _styles)) != null ? _config$transform : value;
      rawValue = (_config2 = config2) != null && _config2.processResult ? css4(rawValue, true) : rawValue;
      var configProperty = runIfFn((_config3 = config2) == null ? void 0 : _config3.property, theme3);
      if (!nested && (_config4 = config2) != null && _config4["static"]) {
        var staticStyles = runIfFn(config2["static"], theme3);
        computedStyles = lodash_mergewith({}, computedStyles, staticStyles);
      }
      if (configProperty && Array.isArray(configProperty)) {
        for (var _iterator = _createForOfIteratorHelperLoose(configProperty), _step; !(_step = _iterator()).done; ) {
          var property = _step.value;
          computedStyles[property] = rawValue;
        }
        continue;
      }
      if (configProperty) {
        if (configProperty === "&" && isObject(rawValue)) {
          computedStyles = lodash_mergewith({}, computedStyles, rawValue);
        } else {
          computedStyles[configProperty] = rawValue;
        }
        continue;
      }
      if (isObject(rawValue)) {
        computedStyles = lodash_mergewith({}, computedStyles, rawValue);
        continue;
      }
      computedStyles[key] = rawValue;
    }
    return computedStyles;
  };
  return css3;
}
var css$1 = function css2(styles3) {
  return function(theme3) {
    var cssFn = getCss({
      theme: theme3,
      pseudos: pseudoSelectors,
      configs: systemProps
    });
    return cssFn(styles3);
  };
};
function resolveReference(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpression = function toExpression2(operator) {
  for (var _len = arguments.length, operands = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    operands[_key - 1] = arguments[_key];
  }
  return operands.map(resolveReference).join(" " + operator + " ").replace(/calc/g, "");
};
var _add = function add2() {
  for (var _len2 = arguments.length, operands = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    operands[_key2] = arguments[_key2];
  }
  return "calc(" + toExpression.apply(void 0, ["+"].concat(operands)) + ")";
};
var _subtract = function subtract2() {
  for (var _len3 = arguments.length, operands = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    operands[_key3] = arguments[_key3];
  }
  return "calc(" + toExpression.apply(void 0, ["-"].concat(operands)) + ")";
};
var _multiply = function multiply() {
  for (var _len4 = arguments.length, operands = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    operands[_key4] = arguments[_key4];
  }
  return "calc(" + toExpression.apply(void 0, ["*"].concat(operands)) + ")";
};
var _divide = function divide() {
  for (var _len5 = arguments.length, operands = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    operands[_key5] = arguments[_key5];
  }
  return "calc(" + toExpression.apply(void 0, ["/"].concat(operands)) + ")";
};
var _negate = function negate(x3) {
  var value = resolveReference(x3);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : "-" + value;
  }
  return _multiply(value, -1);
};
var calc = Object.assign(function(x3) {
  return {
    add: function add4() {
      for (var _len6 = arguments.length, operands = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        operands[_key6] = arguments[_key6];
      }
      return calc(_add.apply(void 0, [x3].concat(operands)));
    },
    subtract: function subtract4() {
      for (var _len7 = arguments.length, operands = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        operands[_key7] = arguments[_key7];
      }
      return calc(_subtract.apply(void 0, [x3].concat(operands)));
    },
    multiply: function multiply3() {
      for (var _len8 = arguments.length, operands = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        operands[_key8] = arguments[_key8];
      }
      return calc(_multiply.apply(void 0, [x3].concat(operands)));
    },
    divide: function divide3() {
      for (var _len9 = arguments.length, operands = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        operands[_key9] = arguments[_key9];
      }
      return calc(_divide.apply(void 0, [x3].concat(operands)));
    },
    negate: function negate3() {
      return calc(_negate(x3));
    },
    toString: function toString() {
      return x3.toString();
    }
  };
}, {
  add: _add,
  subtract: _subtract,
  multiply: _multiply,
  divide: _divide,
  negate: _negate
});
function replaceWhiteSpace(value, replaceValue) {
  if (replaceValue === void 0) {
    replaceValue = "-";
  }
  return value.replace(/\s+/g, replaceValue);
}
function escape2(value) {
  var valueStr = replaceWhiteSpace(value.toString());
  if (valueStr.includes("\\."))
    return value;
  var isDecimal2 = !Number.isInteger(parseFloat(value.toString()));
  return isDecimal2 ? valueStr.replace(".", "\\.") : value;
}
function addPrefix(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }
  return [prefix, escape2(value)].filter(Boolean).join("-");
}
function toVarReference(name, fallback) {
  return "var(" + escape2(name) + (fallback ? ", " + fallback : "") + ")";
}
function toVarDefinition(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }
  return "--" + addPrefix(value, prefix);
}
function cssVar(name, fallback, cssVarPrefix) {
  var cssVariable = toVarDefinition(name, cssVarPrefix);
  return {
    variable: cssVariable,
    reference: toVarReference(cssVariable, fallback)
  };
}
function tokenToCssVar(token, prefix) {
  return cssVar(String(token).replace(/\./g, "-"), void 0, prefix);
}
function createThemeVars(flatTokens, options) {
  var cssVars = {};
  var cssMap = {};
  var _loop = function _loop2() {
    var _Object$entries$_i = _Object$entries[_i], token = _Object$entries$_i[0], tokenValue = _Object$entries$_i[1];
    var isSemantic = tokenValue.isSemantic, value = tokenValue.value;
    var _tokenToCssVar = tokenToCssVar(token, options == null ? void 0 : options.cssVarPrefix), variable = _tokenToCssVar.variable, reference = _tokenToCssVar.reference;
    if (!isSemantic) {
      if (token.startsWith("space")) {
        var keys2 = token.split(".");
        var firstKey = keys2[0], referenceKeys = keys2.slice(1);
        var negativeLookupKey = firstKey + ".-" + referenceKeys.join(".");
        var negativeValue = calc.negate(value);
        var negatedReference = calc.negate(reference);
        cssMap[negativeLookupKey] = {
          value: negativeValue,
          var: variable,
          varRef: negatedReference
        };
      }
      cssVars[variable] = value;
      cssMap[token] = {
        value,
        var: variable,
        varRef: reference
      };
      return "continue";
    }
    var lookupToken = function lookupToken2(maybeToken) {
      var scale = String(token).split(".")[0];
      var withScale = [scale, maybeToken].join(".");
      var resolvedTokenValue = flatTokens[withScale];
      if (!resolvedTokenValue)
        return maybeToken;
      var _tokenToCssVar2 = tokenToCssVar(withScale, options == null ? void 0 : options.cssVarPrefix), reference2 = _tokenToCssVar2.reference;
      return reference2;
    };
    var normalizedValue = isObject(value) ? value : {
      default: value
    };
    cssVars = lodash_mergewith(cssVars, Object.entries(normalizedValue).reduce(function(acc, _ref) {
      var _pseudoSelectors$cond, _acc$conditionSelecto;
      var conditionAlias = _ref[0], conditionValue = _ref[1];
      var maybeReference = lookupToken(conditionValue);
      if (conditionAlias === "default") {
        acc[variable] = maybeReference;
        return acc;
      }
      var conditionSelector = (_pseudoSelectors$cond = pseudoSelectors == null ? void 0 : pseudoSelectors[conditionAlias]) != null ? _pseudoSelectors$cond : conditionAlias;
      acc[conditionSelector] = (_acc$conditionSelecto = {}, _acc$conditionSelecto[variable] = maybeReference, _acc$conditionSelecto);
      return acc;
    }, {}));
    cssMap[token] = {
      value: reference,
      var: variable,
      varRef: reference
    };
  };
  for (var _i = 0, _Object$entries = Object.entries(flatTokens); _i < _Object$entries.length; _i++) {
    var _ret = _loop();
    if (_ret === "continue")
      continue;
  }
  return {
    cssVars,
    cssMap
  };
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded = ["__cssMap", "__cssVars", "__breakpoints"];
var tokens = ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur"];
function extractTokens(theme3) {
  var _tokens = tokens;
  return pick(theme3, _tokens);
}
function extractSemanticTokens(theme3) {
  return theme3.semanticTokens;
}
function omitVars(rawTheme) {
  rawTheme.__cssMap;
  rawTheme.__cssVars;
  rawTheme.__breakpoints;
  var cleanTheme = _objectWithoutPropertiesLoose(rawTheme, _excluded);
  return cleanTheme;
}
function flattenTokens(_ref) {
  var _flatten, _flatten2;
  var tokens2 = _ref.tokens, semanticTokens = _ref.semanticTokens;
  var tokenEntries = Object.entries((_flatten = flatten(tokens2)) != null ? _flatten : {}).map(function(_ref2) {
    var token = _ref2[0], value = _ref2[1];
    var enhancedToken = {
      isSemantic: false,
      value
    };
    return [token, enhancedToken];
  });
  var semanticTokenEntries = Object.entries((_flatten2 = flatten(semanticTokens, 1)) != null ? _flatten2 : {}).map(function(_ref3) {
    var token = _ref3[0], value = _ref3[1];
    var enhancedToken = {
      isSemantic: true,
      value
    };
    return [token, enhancedToken];
  });
  return fromEntries([].concat(tokenEntries, semanticTokenEntries));
}
function toCSSVar(rawTheme) {
  var _theme$config;
  var theme3 = omitVars(rawTheme);
  var tokens2 = extractTokens(theme3);
  var semanticTokens = extractSemanticTokens(theme3);
  var flatTokens = flattenTokens({
    tokens: tokens2,
    semanticTokens
  });
  var cssVarPrefix = (_theme$config = theme3.config) == null ? void 0 : _theme$config.cssVarPrefix;
  var _createThemeVars = createThemeVars(flatTokens, {
    cssVarPrefix
  }), cssMap = _createThemeVars.cssMap, cssVars = _createThemeVars.cssVars;
  var defaultCssVars = {
    "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-ring-offset-width": "0px",
    "--chakra-ring-offset-color": "#fff",
    "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
    "--chakra-ring-offset-shadow": "0 0 #0000",
    "--chakra-ring-shadow": "0 0 #0000",
    "--chakra-space-x-reverse": "0",
    "--chakra-space-y-reverse": "0"
  };
  Object.assign(theme3, {
    __cssVars: _extends$1({}, defaultCssVars, cssVars),
    __cssMap: cssMap,
    __breakpoints: analyzeBreakpoints(theme3.breakpoints)
  });
  return theme3;
}
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal(a2, b2) {
  if (a2 === b2)
    return true;
  if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
    if (a2.constructor !== b2.constructor)
      return false;
    var length, i2, keys2;
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length != b2.length)
        return false;
      for (i2 = length; i2-- !== 0; )
        if (!equal(a2[i2], b2[i2]))
          return false;
      return true;
    }
    var it;
    if (hasMap && a2 instanceof Map && b2 instanceof Map) {
      if (a2.size !== b2.size)
        return false;
      it = a2.entries();
      while (!(i2 = it.next()).done)
        if (!b2.has(i2.value[0]))
          return false;
      it = a2.entries();
      while (!(i2 = it.next()).done)
        if (!equal(i2.value[1], b2.get(i2.value[0])))
          return false;
      return true;
    }
    if (hasSet && a2 instanceof Set && b2 instanceof Set) {
      if (a2.size !== b2.size)
        return false;
      it = a2.entries();
      while (!(i2 = it.next()).done)
        if (!b2.has(i2.value[0]))
          return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
      length = a2.length;
      if (length != b2.length)
        return false;
      for (i2 = length; i2-- !== 0; )
        if (a2[i2] !== b2[i2])
          return false;
      return true;
    }
    if (a2.constructor === RegExp)
      return a2.source === b2.source && a2.flags === b2.flags;
    if (a2.valueOf !== Object.prototype.valueOf)
      return a2.valueOf() === b2.valueOf();
    if (a2.toString !== Object.prototype.toString)
      return a2.toString() === b2.toString();
    keys2 = Object.keys(a2);
    length = keys2.length;
    if (length !== Object.keys(b2).length)
      return false;
    for (i2 = length; i2-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b2, keys2[i2]))
        return false;
    if (hasElementType && a2 instanceof Element)
      return false;
    for (i2 = length; i2-- !== 0; ) {
      if ((keys2[i2] === "_owner" || keys2[i2] === "__v" || keys2[i2] === "__o") && a2.$$typeof) {
        continue;
      }
      if (!equal(a2[keys2[i2]], b2[keys2[i2]]))
        return false;
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
}
var reactFastCompare = function isEqual(a2, b2) {
  try {
    return equal(a2, b2);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
};
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(function(prop2) {
  return reactPropsRegex.test(prop2) || prop2.charCodeAt(0) === 111 && prop2.charCodeAt(1) === 110 && prop2.charCodeAt(2) < 91;
});
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag2) {
  return typeof tag2 === "string" && tag2.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag2, options, isReal) {
  var shouldForwardProp3;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp3 = tag2.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag2.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp3 !== "function" && isReal) {
    shouldForwardProp3 = tag2.__emotion_forwardProp;
  }
  return shouldForwardProp3;
};
var useInsertionEffect$2 = React["useInsertionEffect"] ? React["useInsertionEffect"] : function useInsertionEffect4(create) {
  create();
};
function useInsertionEffectMaybe(create) {
  useInsertionEffect$2(create);
}
var Insertion = function Insertion2(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectMaybe(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var createStyled = function createStyled2(tag2, options) {
  var isReal = tag2.__emotion_real === tag2;
  var baseTag = isReal && tag2.__emotion_base || tag2;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp3 = composeShouldForwardProps(tag2, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp3 || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles3 = isReal && tag2.__emotion_styles !== void 0 ? tag2.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles3.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles3.push.apply(styles3, args);
    } else {
      styles3.push(args[0][0]);
      var len = args.length;
      var i2 = 1;
      for (; i2 < len; i2++) {
        styles3.push(args[i2], args[0][i2]);
      }
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = react.useContext(ThemeContext);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles3.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp3 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as")
          continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Insertion, {
        cache,
        serialized,
        isStringTag: typeof FinalTag === "string"
      }), /* @__PURE__ */ react.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag2.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles3;
    Styled.__emotion_forwardProp = shouldForwardProp3;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && false) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles3);
    };
    return Styled;
  };
};
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = createStyled.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
var ThemeProvider$1 = function ThemeProvider$12(props) {
  var cssVarsRoot = props.cssVarsRoot, theme3 = props.theme, children = props.children;
  var computedTheme = react.useMemo(function() {
    return toCSSVar(theme3);
  }, [theme3]);
  return /* @__PURE__ */ react.createElement(ThemeProvider, {
    theme: computedTheme
  }, /* @__PURE__ */ react.createElement(CSSVars, {
    root: cssVarsRoot
  }), children);
};
var CSSVars = function CSSVars2(_ref) {
  var _ref$root = _ref.root, root2 = _ref$root === void 0 ? ":host, :root" : _ref$root;
  var selector = [root2, "[data-theme]"].join(",");
  return /* @__PURE__ */ react.createElement(Global, {
    styles: function styles3(theme3) {
      var _ref2;
      return _ref2 = {}, _ref2[selector] = theme3.__cssVars, _ref2;
    }
  });
};
function useTheme() {
  var theme3 = react.useContext(ThemeContext);
  if (!theme3) {
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
  }
  return theme3;
}
var _createContext$2 = createContext2({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
var StylesProvider = _createContext$2[0];
var useStyles = _createContext$2[1];
var GlobalStyle = function GlobalStyle2() {
  var _useColorMode = useColorMode(), colorMode = _useColorMode.colorMode;
  return /* @__PURE__ */ react.createElement(Global, {
    styles: function styles3(theme3) {
      var styleObjectOrFn = memoizedGet(theme3, "styles.global");
      var globalStyles = runIfFn(styleObjectOrFn, {
        theme: theme3,
        colorMode
      });
      if (!globalStyles)
        return void 0;
      var styles4 = css$1(globalStyles)(theme3);
      return styles4;
    }
  });
};
function omitThemingProps(props) {
  return omit(props, ["styleConfig", "size", "variant", "colorScheme"]);
}
function useChakra() {
  var colorModeResult = useColorMode();
  var theme3 = useTheme();
  return _extends$2({}, colorModeResult, {
    theme: theme3
  });
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var allPropNames = new Set([].concat(propNames, ["textStyle", "layerStyle", "apply", "isTruncated", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"]));
var validHTMLProps = new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
var shouldForwardProp = function shouldForwardProp2(prop2) {
  return validHTMLProps.has(prop2) || !allPropNames.has(prop2);
};
var _excluded$1 = ["theme", "css", "__css", "sx"];
var _excluded2 = ["baseStyle"];
var toCSSObject = function toCSSObject2(_ref) {
  var baseStyle22 = _ref.baseStyle;
  return function(props) {
    props.theme;
    var cssProp = props.css, __css = props.__css, sx = props.sx, rest = _objectWithoutPropertiesLoose$1(props, _excluded$1);
    var styleProps2 = objectFilter(rest, function(_2, prop2) {
      return isStyleProp(prop2);
    });
    var finalBaseStyle = runIfFn(baseStyle22, props);
    var finalStyles = Object.assign({}, __css, finalBaseStyle, filterUndefined(styleProps2), sx);
    var computedCSS = css$1(finalStyles)(props.theme);
    return cssProp ? [computedCSS, cssProp] : computedCSS;
  };
};
function styled(component, options) {
  var _ref2 = options != null ? options : {}, baseStyle22 = _ref2.baseStyle, styledOptions = _objectWithoutPropertiesLoose$1(_ref2, _excluded2);
  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }
  var styleObject = toCSSObject({
    baseStyle: baseStyle22
  });
  return newStyled(component, styledOptions)(styleObject);
}
function forwardRef2(component) {
  return /* @__PURE__ */ react.forwardRef(component);
}
var _excluded$2 = ["styleConfig"];
function useStyleConfig(themeKey, props, opts) {
  var _styleConfig$defaultP;
  if (props === void 0) {
    props = {};
  }
  if (opts === void 0) {
    opts = {};
  }
  var _props = props, styleConfigProp = _props.styleConfig, rest = _objectWithoutPropertiesLoose$1(_props, _excluded$2);
  var _useChakra = useChakra(), theme3 = _useChakra.theme, colorMode = _useChakra.colorMode;
  var themeStyleConfig = memoizedGet(theme3, "components." + themeKey);
  var styleConfig = styleConfigProp || themeStyleConfig;
  var mergedProps = lodash_mergewith({
    theme: theme3,
    colorMode
  }, (_styleConfig$defaultP = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _styleConfig$defaultP : {}, filterUndefined(omit(rest, ["children"])));
  var stylesRef = react.useRef({});
  if (styleConfig) {
    var _styleConfig$baseStyl, _styleConfig$variants, _styleConfig$variants2, _styleConfig$sizes$me, _styleConfig$sizes, _opts;
    var baseStyles = runIfFn((_styleConfig$baseStyl = styleConfig.baseStyle) != null ? _styleConfig$baseStyl : {}, mergedProps);
    var variants2 = runIfFn((_styleConfig$variants = (_styleConfig$variants2 = styleConfig.variants) == null ? void 0 : _styleConfig$variants2[mergedProps.variant]) != null ? _styleConfig$variants : {}, mergedProps);
    var sizes2 = runIfFn((_styleConfig$sizes$me = (_styleConfig$sizes = styleConfig.sizes) == null ? void 0 : _styleConfig$sizes[mergedProps.size]) != null ? _styleConfig$sizes$me : {}, mergedProps);
    var styles3 = lodash_mergewith({}, baseStyles, sizes2, variants2);
    if ((_opts = opts) != null && _opts.isMultiPart && styleConfig.parts) {
      styleConfig.parts.forEach(function(part) {
        var _styles$part;
        styles3[part] = (_styles$part = styles3[part]) != null ? _styles$part : {};
      });
    }
    var isStyleEqual = reactFastCompare(stylesRef.current, styles3);
    if (!isStyleEqual) {
      stylesRef.current = styles3;
    }
  }
  return stylesRef.current;
}
function useMultiStyleConfig(themeKey, props) {
  return useStyleConfig(themeKey, props, {
    isMultiPart: true
  });
}
function factory() {
  var cache = new Map();
  return new Proxy(styled, {
    apply: function apply(target, thisArg, argArray) {
      return styled.apply(void 0, argArray);
    },
    get: function get4(_2, element) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    }
  });
}
var chakra = factory();
var ChakraProvider = function ChakraProvider2(props) {
  var children = props.children, colorModeManager = props.colorModeManager, portalZIndex = props.portalZIndex, _props$resetCSS = props.resetCSS, resetCSS = _props$resetCSS === void 0 ? true : _props$resetCSS, _props$theme = props.theme, theme3 = _props$theme === void 0 ? {} : _props$theme, environment = props.environment, cssVarsRoot = props.cssVarsRoot;
  var _children = /* @__PURE__ */ react.createElement(EnvironmentProvider, {
    environment
  }, children);
  return /* @__PURE__ */ react.createElement(IdProvider, null, /* @__PURE__ */ react.createElement(ThemeProvider$1, {
    theme: theme3,
    cssVarsRoot
  }, /* @__PURE__ */ react.createElement(ColorModeProvider, {
    colorModeManager,
    options: theme3.config
  }, resetCSS && /* @__PURE__ */ react.createElement(CSSReset$1, null), /* @__PURE__ */ react.createElement(GlobalStyle, null), portalZIndex ? /* @__PURE__ */ react.createElement(PortalManager, {
    zIndex: portalZIndex
  }, _children) : _children)));
};
var spacing = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};
function _extends$3() {
  _extends$3 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
var largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem"
};
var container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};
var sizes = _extends$3({}, spacing, largeSizes, {
  container
});
function bound01(n3, max) {
  if (isOnePointZero(n3)) {
    n3 = "100%";
  }
  var isPercent = isPercentage(n3);
  n3 = max === 360 ? n3 : Math.min(max, Math.max(0, parseFloat(n3)));
  if (isPercent) {
    n3 = parseInt(String(n3 * max), 10) / 100;
  }
  if (Math.abs(n3 - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n3 = (n3 < 0 ? n3 % max + max : n3 % max) / parseFloat(String(max));
  } else {
    n3 = n3 % max / parseFloat(String(max));
  }
  return n3;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n3) {
  return typeof n3 === "string" && n3.indexOf(".") !== -1 && parseFloat(n3) === 1;
}
function isPercentage(n3) {
  return typeof n3 === "string" && n3.indexOf("%") !== -1;
}
function boundAlpha(a2) {
  a2 = parseFloat(a2);
  if (isNaN(a2) || a2 < 0 || a2 > 1) {
    a2 = 1;
  }
  return a2;
}
function convertToPercentage(n3) {
  if (n3 <= 1) {
    return "".concat(Number(n3) * 100, "%");
  }
  return n3;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}
function rgbToRgb(r3, g2, b2) {
  return {
    r: bound01(r3, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function rgbToHsl(r3, g2, b2) {
  r3 = bound01(r3, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r3, g2, b2);
  var min = Math.min(r3, g2, b2);
  var h2 = 0;
  var s = 0;
  var l3 = (max + min) / 2;
  if (max === min) {
    s = 0;
    h2 = 0;
  } else {
    var d2 = max - min;
    s = l3 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
    switch (max) {
      case r3:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r3) / d2 + 2;
        break;
      case b2:
        h2 = (r3 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return {h: h2, s, l: l3};
}
function hue2rgb(p4, q3, t4) {
  if (t4 < 0) {
    t4 += 1;
  }
  if (t4 > 1) {
    t4 -= 1;
  }
  if (t4 < 1 / 6) {
    return p4 + (q3 - p4) * (6 * t4);
  }
  if (t4 < 1 / 2) {
    return q3;
  }
  if (t4 < 2 / 3) {
    return p4 + (q3 - p4) * (2 / 3 - t4) * 6;
  }
  return p4;
}
function hslToRgb(h2, s, l3) {
  var r3;
  var g2;
  var b2;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l3 = bound01(l3, 100);
  if (s === 0) {
    g2 = l3;
    b2 = l3;
    r3 = l3;
  } else {
    var q3 = l3 < 0.5 ? l3 * (1 + s) : l3 + s - l3 * s;
    var p4 = 2 * l3 - q3;
    r3 = hue2rgb(p4, q3, h2 + 1 / 3);
    g2 = hue2rgb(p4, q3, h2);
    b2 = hue2rgb(p4, q3, h2 - 1 / 3);
  }
  return {r: r3 * 255, g: g2 * 255, b: b2 * 255};
}
function rgbToHsv(r3, g2, b2) {
  r3 = bound01(r3, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r3, g2, b2);
  var min = Math.min(r3, g2, b2);
  var h2 = 0;
  var v3 = max;
  var d2 = max - min;
  var s = max === 0 ? 0 : d2 / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r3:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r3) / d2 + 2;
        break;
      case b2:
        h2 = (r3 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return {h: h2, s, v: v3};
}
function hsvToRgb(h2, s, v3) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v3 = bound01(v3, 100);
  var i2 = Math.floor(h2);
  var f2 = h2 - i2;
  var p4 = v3 * (1 - s);
  var q3 = v3 * (1 - f2 * s);
  var t4 = v3 * (1 - (1 - f2) * s);
  var mod = i2 % 6;
  var r3 = [v3, q3, p4, p4, t4, v3][mod];
  var g2 = [t4, v3, v3, q3, p4, p4][mod];
  var b2 = [p4, p4, t4, v3, v3, q3][mod];
  return {r: r3 * 255, g: g2 * 255, b: b2 * 255};
}
function rgbToHex(r3, g2, b2, allow3Char) {
  var hex = [
    pad2(Math.round(r3).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r3, g2, b2, a2, allow4Char) {
  var hex = [
    pad2(Math.round(r3).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16)),
    pad2(convertDecimalToHex(a2))
  ];
  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function convertDecimalToHex(d2) {
  return Math.round(parseFloat(d2) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color2) {
  return {
    r: color2 >> 16,
    g: (color2 & 65280) >> 8,
    b: color2 & 255
  };
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color2) {
  var rgb = {r: 0, g: 0, b: 0};
  var a2 = 1;
  var s = null;
  var v3 = null;
  var l3 = null;
  var ok2 = false;
  var format = false;
  if (typeof color2 === "string") {
    color2 = stringInputToObject(color2);
  }
  if (typeof color2 === "object") {
    if (isValidCSSUnit(color2.r) && isValidCSSUnit(color2.g) && isValidCSSUnit(color2.b)) {
      rgb = rgbToRgb(color2.r, color2.g, color2.b);
      ok2 = true;
      format = String(color2.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.v)) {
      s = convertToPercentage(color2.s);
      v3 = convertToPercentage(color2.v);
      rgb = hsvToRgb(color2.h, s, v3);
      ok2 = true;
      format = "hsv";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.l)) {
      s = convertToPercentage(color2.s);
      l3 = convertToPercentage(color2.l);
      rgb = hslToRgb(color2.h, s, l3);
      ok2 = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color2, "a")) {
      a2 = color2.a;
    }
  }
  a2 = boundAlpha(a2);
  return {
    ok: ok2,
    format: color2.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a2
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color2) {
  color2 = color2.trim().toLowerCase();
  if (color2.length === 0) {
    return false;
  }
  var named = false;
  if (names[color2]) {
    color2 = names[color2];
    named = true;
  } else if (color2 === "transparent") {
    return {r: 0, g: 0, b: 0, a: 0, format: "name"};
  }
  var match = matchers.rgb.exec(color2);
  if (match) {
    return {r: match[1], g: match[2], b: match[3]};
  }
  match = matchers.rgba.exec(color2);
  if (match) {
    return {r: match[1], g: match[2], b: match[3], a: match[4]};
  }
  match = matchers.hsl.exec(color2);
  if (match) {
    return {h: match[1], s: match[2], l: match[3]};
  }
  match = matchers.hsla.exec(color2);
  if (match) {
    return {h: match[1], s: match[2], l: match[3], a: match[4]};
  }
  match = matchers.hsv.exec(color2);
  if (match) {
    return {h: match[1], s: match[2], v: match[3]};
  }
  match = matchers.hsva.exec(color2);
  if (match) {
    return {h: match[1], s: match[2], v: match[3], a: match[4]};
  }
  match = matchers.hex8.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color2) {
  return Boolean(matchers.CSS_UNIT.exec(String(color2)));
}
var TinyColor = function() {
  function TinyColor2(color2, opts) {
    if (color2 === void 0) {
      color2 = "";
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a;
    if (color2 instanceof TinyColor2) {
      return color2;
    }
    if (typeof color2 === "number") {
      color2 = numberInputToObject(color2);
    }
    this.originalInput = color2;
    var rgb = inputToRGB(color2);
    this.originalInput = color2;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  TinyColor2.prototype.isDark = function() {
    return this.getBrightness() < 128;
  };
  TinyColor2.prototype.isLight = function() {
    return !this.isDark();
  };
  TinyColor2.prototype.getBrightness = function() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  };
  TinyColor2.prototype.getLuminance = function() {
    var rgb = this.toRgb();
    var R4;
    var G4;
    var B4;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R4 = RsRGB / 12.92;
    } else {
      R4 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G4 = GsRGB / 12.92;
    } else {
      G4 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B4 = BsRGB / 12.92;
    } else {
      B4 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R4 + 0.7152 * G4 + 0.0722 * B4;
  };
  TinyColor2.prototype.getAlpha = function() {
    return this.a;
  };
  TinyColor2.prototype.setAlpha = function(alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  TinyColor2.prototype.toHsv = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return {h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a};
  };
  TinyColor2.prototype.toHsvString = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h2 = Math.round(hsv.h * 360);
    var s = Math.round(hsv.s * 100);
    var v3 = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s, "%, ").concat(v3, "%)") : "hsva(".concat(h2, ", ").concat(s, "%, ").concat(v3, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHsl = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return {h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a};
  };
  TinyColor2.prototype.toHslString = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h2 = Math.round(hsl.h * 360);
    var s = Math.round(hsl.s * 100);
    var l3 = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s, "%, ").concat(l3, "%)") : "hsla(".concat(h2, ", ").concat(s, "%, ").concat(l3, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHex = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };
  TinyColor2.prototype.toHexString = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return "#" + this.toHex(allow3Char);
  };
  TinyColor2.prototype.toHex8 = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };
  TinyColor2.prototype.toHex8String = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return "#" + this.toHex8(allow4Char);
  };
  TinyColor2.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toRgbString = function() {
    var r3 = Math.round(this.r);
    var g2 = Math.round(this.g);
    var b2 = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(r3, ", ").concat(g2, ", ").concat(b2, ")") : "rgba(".concat(r3, ", ").concat(g2, ", ").concat(b2, ", ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toPercentageRgb = function() {
    var fmt = function(x3) {
      return "".concat(Math.round(bound01(x3, 255) * 100), "%");
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toPercentageRgbString = function() {
    var rnd = function(x3) {
      return Math.round(bound01(x3, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toName = function() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
      var _b = _a[_i], key = _b[0], value = _b[1];
      if (hex === value) {
        return key;
      }
    }
    return false;
  };
  TinyColor2.prototype.toString = function(format) {
    var formatSet = Boolean(format);
    format = format !== null && format !== void 0 ? format : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor2.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor2.prototype.clone = function() {
    return new TinyColor2(this.toString());
  };
  TinyColor2.prototype.lighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.brighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor2(rgb);
  };
  TinyColor2.prototype.darken = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.tint = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("white", amount);
  };
  TinyColor2.prototype.shade = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("black", amount);
  };
  TinyColor2.prototype.desaturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.saturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.greyscale = function() {
    return this.desaturate(100);
  };
  TinyColor2.prototype.spin = function(amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.mix = function(color2, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor2(color2).toRgb();
    var p4 = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p4 + rgb1.r,
      g: (rgb2.g - rgb1.g) * p4 + rgb1.g,
      b: (rgb2.b - rgb1.b) * p4 + rgb1.b,
      a: (rgb2.a - rgb1.a) * p4 + rgb1.a
    };
    return new TinyColor2(rgba);
  };
  TinyColor2.prototype.analogous = function(results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor2(hsl));
    }
    return ret;
  };
  TinyColor2.prototype.complement = function() {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.monochromatic = function(results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h2 = hsv.h;
    var s = hsv.s;
    var v3 = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor2({h: h2, s, v: v3}));
      v3 = (v3 + modification) % 1;
    }
    return res;
  };
  TinyColor2.prototype.splitcomplement = function() {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    return [
      this,
      new TinyColor2({h: (h2 + 72) % 360, s: hsl.s, l: hsl.l}),
      new TinyColor2({h: (h2 + 216) % 360, s: hsl.s, l: hsl.l})
    ];
  };
  TinyColor2.prototype.onBackground = function(background2) {
    var fg2 = this.toRgb();
    var bg2 = new TinyColor2(background2).toRgb();
    return new TinyColor2({
      r: bg2.r + (fg2.r - bg2.r) * fg2.a,
      g: bg2.g + (fg2.g - bg2.g) * fg2.a,
      b: bg2.b + (fg2.b - bg2.b) * fg2.a
    });
  };
  TinyColor2.prototype.triad = function() {
    return this.polyad(3);
  };
  TinyColor2.prototype.tetrad = function() {
    return this.polyad(4);
  };
  TinyColor2.prototype.polyad = function(n3) {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    var result = [this];
    var increment = 360 / n3;
    for (var i2 = 1; i2 < n3; i2++) {
      result.push(new TinyColor2({h: (h2 + i2 * increment) % 360, s: hsl.s, l: hsl.l}));
    }
    return result;
  };
  TinyColor2.prototype.equals = function(color2) {
    return this.toRgbString() === new TinyColor2(color2).toRgbString();
  };
  return TinyColor2;
}();
function random(options) {
  if (options === void 0) {
    options = {};
  }
  if (options.count !== void 0 && options.count !== null) {
    var totalColors = options.count;
    var colors3 = [];
    options.count = void 0;
    while (totalColors > colors3.length) {
      options.count = null;
      if (options.seed) {
        options.seed += 1;
      }
      colors3.push(random(options));
    }
    options.count = totalColors;
    return colors3;
  }
  var h2 = pickHue(options.hue, options.seed);
  var s = pickSaturation(h2, options);
  var v3 = pickBrightness(h2, s, options);
  var res = {h: h2, s, v: v3};
  if (options.alpha !== void 0) {
    res.a = options.alpha;
  }
  return new TinyColor(res);
}
function pickHue(hue, seed) {
  var hueRange = getHueRange(hue);
  var res = randomWithin(hueRange, seed);
  if (res < 0) {
    res = 360 + res;
  }
  return res;
}
function pickSaturation(hue, options) {
  if (options.hue === "monochrome") {
    return 0;
  }
  if (options.luminosity === "random") {
    return randomWithin([0, 100], options.seed);
  }
  var saturationRange = getColorInfo(hue).saturationRange;
  var sMin = saturationRange[0];
  var sMax = saturationRange[1];
  switch (options.luminosity) {
    case "bright":
      sMin = 55;
      break;
    case "dark":
      sMin = sMax - 10;
      break;
    case "light":
      sMax = 55;
      break;
  }
  return randomWithin([sMin, sMax], options.seed);
}
function pickBrightness(H4, S4, options) {
  var bMin = getMinimumBrightness(H4, S4);
  var bMax = 100;
  switch (options.luminosity) {
    case "dark":
      bMax = bMin + 20;
      break;
    case "light":
      bMin = (bMax + bMin) / 2;
      break;
    case "random":
      bMin = 0;
      bMax = 100;
      break;
  }
  return randomWithin([bMin, bMax], options.seed);
}
function getMinimumBrightness(H4, S4) {
  var lowerBounds = getColorInfo(H4).lowerBounds;
  for (var i2 = 0; i2 < lowerBounds.length - 1; i2++) {
    var s1 = lowerBounds[i2][0];
    var v1 = lowerBounds[i2][1];
    var s2 = lowerBounds[i2 + 1][0];
    var v22 = lowerBounds[i2 + 1][1];
    if (S4 >= s1 && S4 <= s2) {
      var m2 = (v22 - v1) / (s2 - s1);
      var b2 = v1 - m2 * s1;
      return m2 * S4 + b2;
    }
  }
  return 0;
}
function getHueRange(colorInput) {
  var num = parseInt(colorInput, 10);
  if (!Number.isNaN(num) && num < 360 && num > 0) {
    return [num, num];
  }
  if (typeof colorInput === "string") {
    var namedColor = bounds.find(function(n3) {
      return n3.name === colorInput;
    });
    if (namedColor) {
      var color2 = defineColor(namedColor);
      if (color2.hueRange) {
        return color2.hueRange;
      }
    }
    var parsed = new TinyColor(colorInput);
    if (parsed.isValid) {
      var hue = parsed.toHsv().h;
      return [hue, hue];
    }
  }
  return [0, 360];
}
function getColorInfo(hue) {
  if (hue >= 334 && hue <= 360) {
    hue -= 360;
  }
  for (var _i = 0, bounds_1 = bounds; _i < bounds_1.length; _i++) {
    var bound = bounds_1[_i];
    var color2 = defineColor(bound);
    if (color2.hueRange && hue >= color2.hueRange[0] && hue <= color2.hueRange[1]) {
      return color2;
    }
  }
  throw Error("Color not found");
}
function randomWithin(range, seed) {
  if (seed === void 0) {
    return Math.floor(range[0] + Math.random() * (range[1] + 1 - range[0]));
  }
  var max = range[1] || 1;
  var min = range[0] || 0;
  seed = (seed * 9301 + 49297) % 233280;
  var rnd = seed / 233280;
  return Math.floor(min + rnd * (max - min));
}
function defineColor(bound) {
  var sMin = bound.lowerBounds[0][0];
  var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
  var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
  var bMax = bound.lowerBounds[0][1];
  return {
    name: bound.name,
    hueRange: bound.hueRange,
    lowerBounds: bound.lowerBounds,
    saturationRange: [sMin, sMax],
    brightnessRange: [bMin, bMax]
  };
}
var bounds = [
  {
    name: "monochrome",
    hueRange: null,
    lowerBounds: [
      [0, 0],
      [100, 0]
    ]
  },
  {
    name: "red",
    hueRange: [-26, 18],
    lowerBounds: [
      [20, 100],
      [30, 92],
      [40, 89],
      [50, 85],
      [60, 78],
      [70, 70],
      [80, 60],
      [90, 55],
      [100, 50]
    ]
  },
  {
    name: "orange",
    hueRange: [19, 46],
    lowerBounds: [
      [20, 100],
      [30, 93],
      [40, 88],
      [50, 86],
      [60, 85],
      [70, 70],
      [100, 70]
    ]
  },
  {
    name: "yellow",
    hueRange: [47, 62],
    lowerBounds: [
      [25, 100],
      [40, 94],
      [50, 89],
      [60, 86],
      [70, 84],
      [80, 82],
      [90, 80],
      [100, 75]
    ]
  },
  {
    name: "green",
    hueRange: [63, 178],
    lowerBounds: [
      [30, 100],
      [40, 90],
      [50, 85],
      [60, 81],
      [70, 74],
      [80, 64],
      [90, 50],
      [100, 40]
    ]
  },
  {
    name: "blue",
    hueRange: [179, 257],
    lowerBounds: [
      [20, 100],
      [30, 86],
      [40, 80],
      [50, 74],
      [60, 60],
      [70, 52],
      [80, 44],
      [90, 39],
      [100, 35]
    ]
  },
  {
    name: "purple",
    hueRange: [258, 282],
    lowerBounds: [
      [20, 100],
      [30, 87],
      [40, 79],
      [50, 70],
      [60, 65],
      [70, 59],
      [80, 52],
      [90, 45],
      [100, 42]
    ]
  },
  {
    name: "pink",
    hueRange: [283, 334],
    lowerBounds: [
      [20, 100],
      [30, 90],
      [40, 86],
      [60, 84],
      [80, 80],
      [90, 75],
      [100, 73]
    ]
  }
];
var getColor = function getColor2(theme3, color2, fallback) {
  var hex = memoizedGet(theme3, "colors." + color2, color2);
  var _TinyColor = new TinyColor(hex), isValid = _TinyColor.isValid;
  return isValid ? hex : fallback;
};
var tone = function tone2(color2) {
  return function(theme3) {
    var hex = getColor(theme3, color2);
    var isDark3 = new TinyColor(hex).isDark();
    return isDark3 ? "dark" : "light";
  };
};
var isDark = function isDark2(color2) {
  return function(theme3) {
    return tone(color2)(theme3) === "dark";
  };
};
var transparentize = function transparentize2(color2, opacity) {
  return function(theme3) {
    var raw = getColor(theme3, color2);
    return new TinyColor(raw).setAlpha(opacity).toRgbString();
  };
};
function generateStripe(size2, color2) {
  if (size2 === void 0) {
    size2 = "1rem";
  }
  if (color2 === void 0) {
    color2 = "rgba(255, 255, 255, 0.15)";
  }
  return {
    backgroundImage: "linear-gradient(\n    45deg,\n    " + color2 + " 25%,\n    transparent 25%,\n    transparent 50%,\n    " + color2 + " 50%,\n    " + color2 + " 75%,\n    transparent 75%,\n    transparent\n  )",
    backgroundSize: size2 + " " + size2
  };
}
function randomColor(opts) {
  var fallback = random().toHexString();
  if (!opts || isEmptyObject(opts)) {
    return fallback;
  }
  if (opts.string && opts.colors) {
    return randomColorFromList(opts.string, opts.colors);
  }
  if (opts.string && !opts.colors) {
    return randomColorFromString(opts.string);
  }
  if (opts.colors && !opts.string) {
    return randomFromList(opts.colors);
  }
  return fallback;
}
function randomColorFromString(str) {
  var hash = 0;
  if (str.length === 0)
    return hash.toString();
  for (var i2 = 0; i2 < str.length; i2 += 1) {
    hash = str.charCodeAt(i2) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  var color2 = "#";
  for (var j2 = 0; j2 < 3; j2 += 1) {
    var value = hash >> j2 * 8 & 255;
    color2 += ("00" + value.toString(16)).substr(-2);
  }
  return color2;
}
function randomColorFromList(str, list2) {
  var index = 0;
  if (str.length === 0)
    return list2[0];
  for (var i2 = 0; i2 < str.length; i2 += 1) {
    index = str.charCodeAt(i2) + ((index << 5) - index);
    index = index & index;
  }
  index = (index % list2.length + list2.length) % list2.length;
  return list2[index];
}
function randomFromList(list2) {
  return list2[Math.floor(Math.random() * list2.length)];
}
function mode(light, dark) {
  return function(props) {
    return props.colorMode === "dark" ? dark : light;
  };
}
function orient(options) {
  var orientation = options.orientation, vertical = options.vertical, horizontal = options.horizontal;
  if (!orientation)
    return {};
  return orientation === "vertical" ? vertical : horizontal;
}
function _extends$4() {
  _extends$4 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
var createBreakpoints = function createBreakpoints2(config2) {
  warn({
    condition: true,
    message: ["[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon", "simply pass the breakpoints as an object. Remove the createBreakpoint(..) call"].join("")
  });
  return _extends$4({
    base: "0em"
  }, config2);
};
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var Anatomy = /* @__PURE__ */ function() {
  function Anatomy2(name) {
    var _this = this;
    this.map = {};
    this.called = false;
    this.assert = function() {
      if (!_this.called) {
        _this.called = true;
        return;
      }
      throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?");
    };
    this.parts = function() {
      _this.assert();
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }
      for (var _i = 0, _values = values; _i < _values.length; _i++) {
        var part = _values[_i];
        _this.map[part] = _this.toPart(part);
      }
      return _this;
    };
    this.extend = function() {
      for (var _len2 = arguments.length, parts = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        parts[_key2] = arguments[_key2];
      }
      for (var _i2 = 0, _parts = parts; _i2 < _parts.length; _i2++) {
        var part = _parts[_i2];
        if (part in _this.map)
          continue;
        _this.map[part] = _this.toPart(part);
      }
      return _this;
    };
    this.toPart = function(part) {
      var el2 = ["container", "root"].includes(part != null ? part : "") ? [_this.name] : [_this.name, part];
      var attr = el2.filter(Boolean).join("__");
      var className = "chakra-" + attr;
      var partObj = {
        className,
        selector: "." + className,
        toString: function toString() {
          return part;
        }
      };
      return partObj;
    };
    this.__type = {};
  }
  _createClass(Anatomy2, [{
    key: "selectors",
    get: function get4() {
      var value = fromEntries(Object.entries(this.map).map(function(_ref) {
        var key = _ref[0], part = _ref[1];
        return [key, part.selector];
      }));
      return value;
    }
  }, {
    key: "classNames",
    get: function get4() {
      var value = fromEntries(Object.entries(this.map).map(function(_ref2) {
        var key = _ref2[0], part = _ref2[1];
        return [key, part.className];
      }));
      return value;
    }
  }, {
    key: "keys",
    get: function get4() {
      return Object.keys(this.map);
    }
  }]);
  return Anatomy2;
}();
function anatomy(name) {
  return new Anatomy(name);
}
function toRef(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpr = function toExpr2(operator) {
  for (var _len = arguments.length, operands = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    operands[_key - 1] = arguments[_key];
  }
  return operands.map(toRef).join(" " + operator + " ").replace(/calc/g, "");
};
var _add$1 = function add3() {
  for (var _len2 = arguments.length, operands = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    operands[_key2] = arguments[_key2];
  }
  return "calc(" + toExpr.apply(void 0, ["+"].concat(operands)) + ")";
};
var _subtract$1 = function subtract3() {
  for (var _len3 = arguments.length, operands = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    operands[_key3] = arguments[_key3];
  }
  return "calc(" + toExpr.apply(void 0, ["-"].concat(operands)) + ")";
};
var _multiply$1 = function multiply2() {
  for (var _len4 = arguments.length, operands = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    operands[_key4] = arguments[_key4];
  }
  return "calc(" + toExpr.apply(void 0, ["*"].concat(operands)) + ")";
};
var _divide$1 = function divide2() {
  for (var _len5 = arguments.length, operands = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    operands[_key5] = arguments[_key5];
  }
  return "calc(" + toExpr.apply(void 0, ["/"].concat(operands)) + ")";
};
var _negate$1 = function negate2(x3) {
  var value = toRef(x3);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : "-" + value;
  }
  return _multiply$1(value, -1);
};
var calc$1 = Object.assign(function(x3) {
  return {
    add: function add4() {
      for (var _len6 = arguments.length, operands = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        operands[_key6] = arguments[_key6];
      }
      return calc$1(_add$1.apply(void 0, [x3].concat(operands)));
    },
    subtract: function subtract4() {
      for (var _len7 = arguments.length, operands = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        operands[_key7] = arguments[_key7];
      }
      return calc$1(_subtract$1.apply(void 0, [x3].concat(operands)));
    },
    multiply: function multiply3() {
      for (var _len8 = arguments.length, operands = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        operands[_key8] = arguments[_key8];
      }
      return calc$1(_multiply$1.apply(void 0, [x3].concat(operands)));
    },
    divide: function divide3() {
      for (var _len9 = arguments.length, operands = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        operands[_key9] = arguments[_key9];
      }
      return calc$1(_divide$1.apply(void 0, [x3].concat(operands)));
    },
    negate: function negate3() {
      return calc$1(_negate$1(x3));
    },
    toString: function toString() {
      return x3.toString();
    }
  };
}, {
  add: _add$1,
  subtract: _subtract$1,
  multiply: _multiply$1,
  divide: _divide$1,
  negate: _negate$1
});
function isDecimal(value) {
  return !Number.isInteger(parseFloat(value.toString()));
}
function replaceWhiteSpace$1(value, replaceValue) {
  if (replaceValue === void 0) {
    replaceValue = "-";
  }
  return value.replace(/\s+/g, replaceValue);
}
function escape$1(value) {
  var valueStr = replaceWhiteSpace$1(value.toString());
  if (valueStr.includes("\\."))
    return value;
  return isDecimal(value) ? valueStr.replace(".", "\\.") : value;
}
function addPrefix$1(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }
  return [prefix, escape$1(value)].filter(Boolean).join("-");
}
function toVarRef(name, fallback) {
  return "var(" + escape$1(name) + (fallback ? ", " + fallback : "") + ")";
}
function toVar(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }
  return "--" + addPrefix$1(value, prefix);
}
function cssVar$1(name, options) {
  var cssVariable = toVar(name, options == null ? void 0 : options.prefix);
  return {
    variable: cssVariable,
    reference: toVarRef(cssVariable, getFallback(options == null ? void 0 : options.fallback))
  };
}
function getFallback(fallback) {
  if (typeof fallback === "string")
    return fallback;
  return fallback == null ? void 0 : fallback.reference;
}
var accordionAnatomy = anatomy("accordion").parts("root", "container", "button", "panel").extend("icon");
var alertAnatomy = anatomy("alert").parts("title", "description", "container").extend("icon");
var avatarAnatomy = anatomy("avatar").parts("label", "badge", "container").extend("excessLabel", "group");
var breadcrumbAnatomy = anatomy("breadcrumb").parts("link", "item", "container").extend("separator");
var buttonAnatomy = anatomy("button").parts();
var checkboxAnatomy = anatomy("checkbox").parts("control", "icon", "container").extend("label");
var circularProgressAnatomy = anatomy("progress").parts("track", "filledTrack").extend("label");
var drawerAnatomy = anatomy("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var editableAnatomy = anatomy("editable").parts("preview", "input", "textarea");
var formAnatomy = anatomy("form").parts("container", "requiredIndicator", "helperText");
var formErrorAnatomy = anatomy("formError").parts("text", "icon");
var inputAnatomy = anatomy("input").parts("addon", "field", "element");
var listAnatomy = anatomy("list").parts("container", "item", "icon");
var menuAnatomy = anatomy("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider");
var modalAnatomy = anatomy("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var numberInputAnatomy = anatomy("numberinput").parts("root", "field", "stepperGroup", "stepper");
var pinInputAnatomy = anatomy("pininput").parts("field");
var popoverAnatomy = anatomy("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton");
var progressAnatomy = anatomy("progress").parts("label", "filledTrack", "track");
var radioAnatomy = anatomy("radio").parts("container", "control", "label");
var selectAnatomy = anatomy("select").parts("field", "icon");
var sliderAnatomy = anatomy("slider").parts("container", "track", "thumb", "filledTrack");
var statAnatomy = anatomy("stat").parts("container", "label", "helpText", "number", "icon");
var switchAnatomy = anatomy("switch").parts("container", "track", "thumb");
var tableAnatomy = anatomy("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption");
var tabsAnatomy = anatomy("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator");
var tagAnatomy = anatomy("tag").parts("container", "label", "closeButton");
var typography$1 = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
};
var baseStyleContainer$4 = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
};
var baseStyleButton$1 = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "1rem",
  _focus: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: 4,
  py: 2
};
var baseStylePanel = {
  pt: 2,
  px: 4,
  pb: 5
};
var baseStyleIcon$5 = {
  fontSize: "1.25em"
};
var baseStyle$D = {
  root: {},
  container: baseStyleContainer$4,
  button: baseStyleButton$1,
  panel: baseStylePanel,
  icon: baseStyleIcon$5
};
var accordion = {
  parts: accordionAnatomy.keys,
  baseStyle: baseStyle$D
};
var baseStyle$C = {
  container: {
    px: 4,
    py: 3
  },
  title: {
    fontWeight: "bold",
    lineHeight: 6,
    marginEnd: 2
  },
  description: {
    lineHeight: 6
  },
  icon: {
    flexShrink: 0,
    marginEnd: 3,
    w: 5,
    h: 6
  }
};
function getBg(props) {
  var theme3 = props.theme, c2 = props.colorScheme;
  var lightBg = getColor(theme3, c2 + ".100", c2);
  var darkBg = transparentize(c2 + ".200", 0.16)(theme3);
  return mode(lightBg, darkBg)(props);
}
var variantSubtle$1 = function variantSubtle(props) {
  var c2 = props.colorScheme;
  return {
    container: {
      bg: getBg(props)
    },
    icon: {
      color: mode(c2 + ".500", c2 + ".200")(props)
    }
  };
};
var variantLeftAccent = function variantLeftAccent2(props) {
  var c2 = props.colorScheme;
  return {
    container: {
      paddingStart: 3,
      borderStartWidth: "4px",
      borderStartColor: mode(c2 + ".500", c2 + ".200")(props),
      bg: getBg(props)
    },
    icon: {
      color: mode(c2 + ".500", c2 + ".200")(props)
    }
  };
};
var variantTopAccent = function variantTopAccent2(props) {
  var c2 = props.colorScheme;
  return {
    container: {
      pt: 2,
      borderTopWidth: "4px",
      borderTopColor: mode(c2 + ".500", c2 + ".200")(props),
      bg: getBg(props)
    },
    icon: {
      color: mode(c2 + ".500", c2 + ".200")(props)
    }
  };
};
var variantSolid$3 = function variantSolid(props) {
  var c2 = props.colorScheme;
  return {
    container: {
      bg: mode(c2 + ".500", c2 + ".200")(props),
      color: mode("white", "gray.900")(props)
    }
  };
};
var variants$b = {
  subtle: variantSubtle$1,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid$3
};
var defaultProps$n = {
  variant: "subtle",
  colorScheme: "blue"
};
var alert = {
  parts: alertAnatomy.keys,
  baseStyle: baseStyle$C,
  variants: variants$b,
  defaultProps: defaultProps$n
};
var baseStyleBadge = function baseStyleBadge2(props) {
  return {
    transform: "translate(25%, 25%)",
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: mode("white", "gray.800")(props)
  };
};
var baseStyleExcessLabel = function baseStyleExcessLabel2(props) {
  return {
    bg: mode("gray.200", "whiteAlpha.400")(props)
  };
};
var baseStyleContainer$3 = function baseStyleContainer(props) {
  var name = props.name, theme3 = props.theme;
  var bg2 = name ? randomColor({
    string: name
  }) : "gray.400";
  var isBgDark = isDark(bg2)(theme3);
  var color2 = "white";
  if (!isBgDark)
    color2 = "gray.800";
  var borderColor = mode("white", "gray.800")(props);
  return {
    bg: bg2,
    color: color2,
    borderColor,
    verticalAlign: "top"
  };
};
var baseStyle$B = function baseStyle(props) {
  return {
    badge: baseStyleBadge(props),
    excessLabel: baseStyleExcessLabel(props),
    container: baseStyleContainer$3(props)
  };
};
function getSize$3(size2) {
  var themeSize = sizes[size2];
  return {
    container: {
      width: size2,
      height: size2,
      fontSize: "calc(" + (themeSize != null ? themeSize : size2) + " / 2.5)"
    },
    excessLabel: {
      width: size2,
      height: size2
    },
    label: {
      fontSize: "calc(" + (themeSize != null ? themeSize : size2) + " / 2.5)",
      lineHeight: size2 !== "100%" ? themeSize != null ? themeSize : size2 : void 0
    }
  };
}
var sizes$k = {
  "2xs": getSize$3("4"),
  xs: getSize$3("6"),
  sm: getSize$3("8"),
  md: getSize$3("12"),
  lg: getSize$3("16"),
  xl: getSize$3("24"),
  "2xl": getSize$3("32"),
  full: getSize$3("100%")
};
var defaultProps$m = {
  size: "md"
};
var avatar = {
  parts: avatarAnatomy.keys,
  baseStyle: baseStyle$B,
  sizes: sizes$k,
  defaultProps: defaultProps$m
};
var baseStyle$A = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold"
};
var variantSolid$2 = function variantSolid2(props) {
  var c2 = props.colorScheme, theme3 = props.theme;
  var dark = transparentize(c2 + ".500", 0.6)(theme3);
  return {
    bg: mode(c2 + ".500", dark)(props),
    color: mode("white", "whiteAlpha.800")(props)
  };
};
var variantSubtle2 = function variantSubtle3(props) {
  var c2 = props.colorScheme, theme3 = props.theme;
  var darkBg = transparentize(c2 + ".200", 0.16)(theme3);
  return {
    bg: mode(c2 + ".100", darkBg)(props),
    color: mode(c2 + ".800", c2 + ".200")(props)
  };
};
var variantOutline$2 = function variantOutline(props) {
  var c2 = props.colorScheme, theme3 = props.theme;
  var darkColor = transparentize(c2 + ".200", 0.8)(theme3);
  var lightColor = getColor(theme3, c2 + ".500");
  var color2 = mode(lightColor, darkColor)(props);
  return {
    color: color2,
    boxShadow: "inset 0 0 0px 1px " + color2
  };
};
var variants$a = {
  solid: variantSolid$2,
  subtle: variantSubtle2,
  outline: variantOutline$2
};
var defaultProps$l = {
  variant: "subtle",
  colorScheme: "gray"
};
var Badge = {
  baseStyle: baseStyle$A,
  variants: variants$a,
  defaultProps: defaultProps$l
};
var baseStyleLink = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focus: {
    boxShadow: "outline"
  }
};
var baseStyle$z = {
  link: baseStyleLink
};
var breadcrumb = {
  parts: breadcrumbAnatomy.keys,
  baseStyle: baseStyle$z
};
var baseStyle$y = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focus: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
};
var variantGhost = function variantGhost2(props) {
  var c2 = props.colorScheme, theme3 = props.theme;
  if (c2 === "gray") {
    return {
      color: mode("inherit", "whiteAlpha.900")(props),
      _hover: {
        bg: mode("gray.100", "whiteAlpha.200")(props)
      },
      _active: {
        bg: mode("gray.200", "whiteAlpha.300")(props)
      }
    };
  }
  var darkHoverBg = transparentize(c2 + ".200", 0.12)(theme3);
  var darkActiveBg = transparentize(c2 + ".200", 0.24)(theme3);
  return {
    color: mode(c2 + ".600", c2 + ".200")(props),
    bg: "transparent",
    _hover: {
      bg: mode(c2 + ".50", darkHoverBg)(props)
    },
    _active: {
      bg: mode(c2 + ".100", darkActiveBg)(props)
    }
  };
};
var variantOutline$1 = function variantOutline2(props) {
  var c2 = props.colorScheme;
  var borderColor = mode("gray.200", "whiteAlpha.300")(props);
  return _extends$3({
    border: "1px solid",
    borderColor: c2 === "gray" ? borderColor : "currentColor"
  }, variantGhost(props));
};
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};
var variantSolid$1 = function variantSolid3(props) {
  var _accessibleColorMap$c;
  var c2 = props.colorScheme;
  if (c2 === "gray") {
    var _bg = mode("gray.100", "whiteAlpha.200")(props);
    return {
      bg: _bg,
      _hover: {
        bg: mode("gray.200", "whiteAlpha.300")(props),
        _disabled: {
          bg: _bg
        }
      },
      _active: {
        bg: mode("gray.300", "whiteAlpha.400")(props)
      }
    };
  }
  var _ref = (_accessibleColorMap$c = accessibleColorMap[c2]) != null ? _accessibleColorMap$c : {}, _ref$bg = _ref.bg, bg2 = _ref$bg === void 0 ? c2 + ".500" : _ref$bg, _ref$color = _ref.color, color2 = _ref$color === void 0 ? "white" : _ref$color, _ref$hoverBg = _ref.hoverBg, hoverBg = _ref$hoverBg === void 0 ? c2 + ".600" : _ref$hoverBg, _ref$activeBg = _ref.activeBg, activeBg = _ref$activeBg === void 0 ? c2 + ".700" : _ref$activeBg;
  var background2 = mode(bg2, c2 + ".200")(props);
  return {
    bg: background2,
    color: mode(color2, "gray.800")(props),
    _hover: {
      bg: mode(hoverBg, c2 + ".300")(props),
      _disabled: {
        bg: background2
      }
    },
    _active: {
      bg: mode(activeBg, c2 + ".400")(props)
    }
  };
};
var variantLink = function variantLink2(props) {
  var c2 = props.colorScheme;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(c2 + ".500", c2 + ".200")(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: mode(c2 + ".700", c2 + ".500")(props)
    }
  };
};
var variantUnstyled$2 = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: 0,
  p: 0
};
var variants$9 = {
  ghost: variantGhost,
  outline: variantOutline$1,
  solid: variantSolid$1,
  link: variantLink,
  unstyled: variantUnstyled$2
};
var sizes$j = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: "lg",
    px: 6
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: "md",
    px: 4
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: "sm",
    px: 3
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: "xs",
    px: 2
  }
};
var defaultProps$k = {
  variant: "solid",
  size: "md",
  colorScheme: "gray"
};
var button = {
  baseStyle: baseStyle$y,
  variants: variants$9,
  sizes: sizes$j,
  defaultProps: defaultProps$k
};
var baseStyleControl$1 = function baseStyleControl(props) {
  var c2 = props.colorScheme;
  return {
    w: "100%",
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: mode(c2 + ".500", c2 + ".200")(props),
      borderColor: mode(c2 + ".500", c2 + ".200")(props),
      color: mode("white", "gray.900")(props),
      _hover: {
        bg: mode(c2 + ".600", c2 + ".300")(props),
        borderColor: mode(c2 + ".600", c2 + ".300")(props)
      },
      _disabled: {
        borderColor: mode("gray.200", "transparent")(props),
        bg: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: mode(c2 + ".500", c2 + ".200")(props),
      borderColor: mode(c2 + ".500", c2 + ".200")(props),
      color: mode("white", "gray.900")(props)
    },
    _disabled: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
      borderColor: mode("gray.100", "transparent")(props)
    },
    _focus: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: mode("red.500", "red.300")(props)
    }
  };
};
var baseStyleContainer$2 = {
  _disabled: {
    cursor: "not-allowed"
  }
};
var baseStyleLabel$3 = {
  userSelect: "none",
  _disabled: {
    opacity: 0.4
  }
};
var baseStyleIcon$4 = {
  transitionProperty: "transform",
  transitionDuration: "normal"
};
var baseStyle$x = function baseStyle2(props) {
  return {
    icon: baseStyleIcon$4,
    container: baseStyleContainer$2,
    control: baseStyleControl$1(props),
    label: baseStyleLabel$3
  };
};
var sizes$i = {
  sm: {
    control: {
      h: 3,
      w: 3
    },
    label: {
      fontSize: "sm"
    },
    icon: {
      fontSize: "0.45rem"
    }
  },
  md: {
    control: {
      w: 4,
      h: 4
    },
    label: {
      fontSize: "md"
    },
    icon: {
      fontSize: "0.625rem"
    }
  },
  lg: {
    control: {
      w: 5,
      h: 5
    },
    label: {
      fontSize: "lg"
    },
    icon: {
      fontSize: "0.625rem"
    }
  }
};
var defaultProps$j = {
  size: "md",
  colorScheme: "blue"
};
var Checkbox = {
  parts: checkboxAnatomy.keys,
  baseStyle: baseStyle$x,
  sizes: sizes$i,
  defaultProps: defaultProps$j
};
var _lg$1;
var _md$1;
var _sm$1;
var $size$1 = cssVar$1("close-button-size");
var baseStyle$w = function baseStyle3(props) {
  var hoverBg = mode("blackAlpha.100", "whiteAlpha.100")(props);
  var activeBg = mode("blackAlpha.200", "whiteAlpha.200")(props);
  return {
    w: [$size$1.reference],
    h: [$size$1.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none"
    },
    _hover: {
      bg: hoverBg
    },
    _active: {
      bg: activeBg
    },
    _focus: {
      boxShadow: "outline"
    }
  };
};
var sizes$h = {
  lg: (_lg$1 = {}, _lg$1[$size$1.variable] = "40px", _lg$1.fontSize = "16px", _lg$1),
  md: (_md$1 = {}, _md$1[$size$1.variable] = "32px", _md$1.fontSize = "12px", _md$1),
  sm: (_sm$1 = {}, _sm$1[$size$1.variable] = "24px", _sm$1.fontSize = "10px", _sm$1)
};
var defaultProps$i = {
  size: "md"
};
var closeButton = {
  baseStyle: baseStyle$w,
  sizes: sizes$h,
  defaultProps: defaultProps$i
};
var variants$8 = Badge.variants;
var defaultProps$h = Badge.defaultProps;
var baseStyle$v = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm"
};
var code = {
  baseStyle: baseStyle$v,
  variants: variants$8,
  defaultProps: defaultProps$h
};
var baseStyle$u = {
  w: "100%",
  mx: "auto",
  maxW: "60ch",
  px: "1rem"
};
var container$1 = {
  baseStyle: baseStyle$u
};
var baseStyle$t = {
  opacity: 0.6,
  borderColor: "inherit"
};
var variantSolid4 = {
  borderStyle: "solid"
};
var variantDashed = {
  borderStyle: "dashed"
};
var variants$7 = {
  solid: variantSolid4,
  dashed: variantDashed
};
var defaultProps$g = {
  variant: "solid"
};
var divider = {
  baseStyle: baseStyle$t,
  variants: variants$7,
  defaultProps: defaultProps$g
};
function getSize$2(value) {
  if (value === "full") {
    return {
      dialog: {
        maxW: "100vw",
        h: "100vh"
      }
    };
  }
  return {
    dialog: {
      maxW: value
    }
  };
}
var baseStyleOverlay$1 = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
};
var baseStyleDialogContainer$1 = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
};
var baseStyleDialog$1 = function baseStyleDialog(props) {
  var isFullHeight = props.isFullHeight;
  return _extends$3({}, isFullHeight && {
    height: "100vh"
  }, {
    zIndex: "modal",
    maxH: "100vh",
    bg: mode("white", "gray.700")(props),
    color: "inherit",
    boxShadow: mode("lg", "dark-lg")(props)
  });
};
var baseStyleHeader$2 = {
  px: 6,
  py: 4,
  fontSize: "xl",
  fontWeight: "semibold"
};
var baseStyleCloseButton$3 = {
  position: "absolute",
  top: 2,
  insetEnd: 3
};
var baseStyleBody$2 = {
  px: 6,
  py: 2,
  flex: 1,
  overflow: "auto"
};
var baseStyleFooter$2 = {
  px: 6,
  py: 4
};
var baseStyle$s = function baseStyle4(props) {
  return {
    overlay: baseStyleOverlay$1,
    dialogContainer: baseStyleDialogContainer$1,
    dialog: baseStyleDialog$1(props),
    header: baseStyleHeader$2,
    closeButton: baseStyleCloseButton$3,
    body: baseStyleBody$2,
    footer: baseStyleFooter$2
  };
};
var sizes$g = {
  xs: getSize$2("xs"),
  sm: getSize$2("md"),
  md: getSize$2("lg"),
  lg: getSize$2("2xl"),
  xl: getSize$2("4xl"),
  full: getSize$2("full")
};
var defaultProps$f = {
  size: "xs"
};
var drawer = {
  parts: drawerAnatomy.keys,
  baseStyle: baseStyle$s,
  sizes: sizes$g,
  defaultProps: defaultProps$f
};
var baseStylePreview = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal"
};
var baseStyleInput = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focus: {
    boxShadow: "outline"
  },
  _placeholder: {
    opacity: 0.6
  }
};
var baseStyleTextarea = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focus: {
    boxShadow: "outline"
  },
  _placeholder: {
    opacity: 0.6
  }
};
var baseStyle$r = {
  preview: baseStylePreview,
  input: baseStyleInput,
  textarea: baseStyleTextarea
};
var editable = {
  parts: editableAnatomy.keys,
  baseStyle: baseStyle$r
};
var baseStyleRequiredIndicator = function baseStyleRequiredIndicator2(props) {
  return {
    marginStart: 1,
    color: mode("red.500", "red.300")(props)
  };
};
var baseStyleHelperText = function baseStyleHelperText2(props) {
  return {
    mt: 2,
    color: mode("gray.500", "whiteAlpha.600")(props),
    lineHeight: "normal",
    fontSize: "sm"
  };
};
var baseStyle$q = function baseStyle5(props) {
  return {
    container: {
      width: "100%",
      position: "relative"
    },
    requiredIndicator: baseStyleRequiredIndicator(props),
    helperText: baseStyleHelperText(props)
  };
};
var form = {
  parts: formAnatomy.keys,
  baseStyle: baseStyle$q
};
var baseStyleText = function baseStyleText2(props) {
  return {
    color: mode("red.500", "red.300")(props),
    mt: 2,
    fontSize: "sm",
    lineHeight: "normal"
  };
};
var baseStyleIcon$3 = function baseStyleIcon(props) {
  return {
    marginEnd: "0.5em",
    color: mode("red.500", "red.300")(props)
  };
};
var baseStyle$p = function baseStyle6(props) {
  return {
    text: baseStyleText(props),
    icon: baseStyleIcon$3(props)
  };
};
var formError = {
  parts: formErrorAnatomy.keys,
  baseStyle: baseStyle$p
};
var baseStyle$o = {
  fontSize: "md",
  marginEnd: 3,
  mb: 2,
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
};
var formLabel = {
  baseStyle: baseStyle$o
};
var baseStyle$n = {
  fontFamily: "heading",
  fontWeight: "bold"
};
var sizes$f = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
};
var defaultProps$e = {
  size: "xl"
};
var heading = {
  baseStyle: baseStyle$n,
  sizes: sizes$f,
  defaultProps: defaultProps$e
};
var baseStyle$m = {
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal"
  }
};
var size = {
  lg: {
    fontSize: "lg",
    px: 4,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    px: 4,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    px: 3,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    px: 2,
    h: 6,
    borderRadius: "sm"
  }
};
var sizes$e = {
  lg: {
    field: size.lg,
    addon: size.lg
  },
  md: {
    field: size.md,
    addon: size.md
  },
  sm: {
    field: size.sm,
    addon: size.sm
  },
  xs: {
    field: size.xs,
    addon: size.xs
  }
};
function getDefaults(props) {
  var fc2 = props.focusBorderColor, ec2 = props.errorBorderColor;
  return {
    focusBorderColor: fc2 || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec2 || mode("red.500", "red.300")(props)
  };
}
var variantOutline3 = function variantOutline4(props) {
  var theme3 = props.theme;
  var _getDefaults = getDefaults(props), fc2 = _getDefaults.focusBorderColor, ec2 = _getDefaults.errorBorderColor;
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      },
      _invalid: {
        borderColor: getColor(theme3, ec2),
        boxShadow: "0 0 0 1px " + getColor(theme3, ec2)
      },
      _focus: {
        zIndex: 1,
        borderColor: getColor(theme3, fc2),
        boxShadow: "0 0 0 1px " + getColor(theme3, fc2)
      }
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props)
    }
  };
};
var variantFilled = function variantFilled2(props) {
  var theme3 = props.theme;
  var _getDefaults2 = getDefaults(props), fc2 = _getDefaults2.focusBorderColor, ec2 = _getDefaults2.errorBorderColor;
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      },
      _invalid: {
        borderColor: getColor(theme3, ec2)
      },
      _focus: {
        bg: "transparent",
        borderColor: getColor(theme3, fc2)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props)
    }
  };
};
var variantFlushed = function variantFlushed2(props) {
  var theme3 = props.theme;
  var _getDefaults3 = getDefaults(props), fc2 = _getDefaults3.focusBorderColor, ec2 = _getDefaults3.errorBorderColor;
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: 0,
      px: 0,
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme3, ec2),
        boxShadow: "0px 1px 0px 0px " + getColor(theme3, ec2)
      },
      _focus: {
        borderColor: getColor(theme3, fc2),
        boxShadow: "0px 1px 0px 0px " + getColor(theme3, fc2)
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: 0,
      px: 0,
      bg: "transparent"
    }
  };
};
var variantUnstyled$1 = {
  field: {
    bg: "transparent",
    px: 0,
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: 0,
    height: "auto"
  }
};
var variants$6 = {
  outline: variantOutline3,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled$1
};
var defaultProps$d = {
  size: "md",
  variant: "outline"
};
var Input = {
  parts: inputAnatomy.keys,
  baseStyle: baseStyle$m,
  sizes: sizes$e,
  variants: variants$6,
  defaultProps: defaultProps$d
};
var baseStyle$l = function baseStyle7(props) {
  return {
    bg: mode("gray.100", "whiteAlpha")(props),
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap"
  };
};
var kbd = {
  baseStyle: baseStyle$l
};
var baseStyle$k = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focus: {
    boxShadow: "outline"
  }
};
var link = {
  baseStyle: baseStyle$k
};
var baseStyleIcon$2 = {
  marginEnd: "0.5rem",
  display: "inline",
  verticalAlign: "text-bottom"
};
var baseStyle$j = {
  container: {},
  item: {},
  icon: baseStyleIcon$2
};
var list$1 = {
  parts: listAnatomy.keys,
  baseStyle: baseStyle$j
};
var baseStyleList = function baseStyleList2(props) {
  return {
    bg: mode("#fff", "gray.700")(props),
    boxShadow: mode("sm", "dark-lg")(props),
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px"
  };
};
var baseStyleItem = function baseStyleItem2(props) {
  return {
    py: "0.4rem",
    px: "0.8rem",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      bg: mode("gray.100", "whiteAlpha.100")(props)
    },
    _active: {
      bg: mode("gray.200", "whiteAlpha.200")(props)
    },
    _expanded: {
      bg: mode("gray.100", "whiteAlpha.100")(props)
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
};
var baseStyleGroupTitle = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
};
var baseStyleCommand = {
  opacity: 0.6
};
var baseStyleDivider = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "0.5rem",
  opacity: 0.6
};
var baseStyleButton = {
  transitionProperty: "common",
  transitionDuration: "normal"
};
var baseStyle$i = function baseStyle8(props) {
  return {
    button: baseStyleButton,
    list: baseStyleList(props),
    item: baseStyleItem(props),
    groupTitle: baseStyleGroupTitle,
    command: baseStyleCommand,
    divider: baseStyleDivider
  };
};
var menu = {
  parts: menuAnatomy.keys,
  baseStyle: baseStyle$i
};
var baseStyleOverlay = {
  bg: "blackAlpha.600",
  zIndex: "modal"
};
var baseStyleDialogContainer = function baseStyleDialogContainer2(props) {
  var isCentered = props.isCentered, scrollBehavior = props.scrollBehavior;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto"
  };
};
var baseStyleDialog2 = function baseStyleDialog3(props) {
  var scrollBehavior = props.scrollBehavior;
  return {
    borderRadius: "md",
    bg: mode("white", "gray.700")(props),
    color: "inherit",
    my: "3.75rem",
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
    boxShadow: mode("lg", "dark-lg")(props)
  };
};
var baseStyleHeader$1 = {
  px: 6,
  py: 4,
  fontSize: "xl",
  fontWeight: "semibold"
};
var baseStyleCloseButton$2 = {
  position: "absolute",
  top: 2,
  insetEnd: 3
};
var baseStyleBody$1 = function baseStyleBody(props) {
  var scrollBehavior = props.scrollBehavior;
  return {
    px: 6,
    py: 2,
    flex: 1,
    overflow: scrollBehavior === "inside" ? "auto" : void 0
  };
};
var baseStyleFooter$1 = {
  px: 6,
  py: 4
};
var baseStyle$h = function baseStyle9(props) {
  return {
    overlay: baseStyleOverlay,
    dialogContainer: baseStyleDialogContainer(props),
    dialog: baseStyleDialog2(props),
    header: baseStyleHeader$1,
    closeButton: baseStyleCloseButton$2,
    body: baseStyleBody$1(props),
    footer: baseStyleFooter$1
  };
};
function getSize$1(value) {
  if (value === "full") {
    return {
      dialog: {
        maxW: "100vw",
        minH: "100vh",
        "@supports(min-height: -webkit-fill-available)": {
          minH: "-webkit-fill-available"
        },
        my: 0
      }
    };
  }
  return {
    dialog: {
      maxW: value
    }
  };
}
var sizes$d = {
  xs: getSize$1("xs"),
  sm: getSize$1("sm"),
  md: getSize$1("md"),
  lg: getSize$1("lg"),
  xl: getSize$1("xl"),
  "2xl": getSize$1("2xl"),
  "3xl": getSize$1("3xl"),
  "4xl": getSize$1("4xl"),
  "5xl": getSize$1("5xl"),
  "6xl": getSize$1("6xl"),
  full: getSize$1("full")
};
var defaultProps$c = {
  size: "md"
};
var modal = {
  parts: modalAnatomy.keys,
  baseStyle: baseStyle$h,
  sizes: sizes$d,
  defaultProps: defaultProps$c
};
var _baseStyleRoot;
var _Input$baseStyle$fiel;
var _Input$baseStyle;
var variants$5 = Input.variants;
var defaultProps$b = Input.defaultProps;
var $stepperWidth = cssVar$1("number-input-stepper-width");
var $inputPadding = cssVar$1("number-input-input-padding");
var inputPaddingValue = calc$1($stepperWidth).add("0.5rem").toString();
var baseStyleRoot$1 = (_baseStyleRoot = {}, _baseStyleRoot[$stepperWidth.variable] = "24px", _baseStyleRoot[$inputPadding.variable] = inputPaddingValue, _baseStyleRoot);
var baseStyleField$1 = (_Input$baseStyle$fiel = (_Input$baseStyle = Input.baseStyle) == null ? void 0 : _Input$baseStyle.field) != null ? _Input$baseStyle$fiel : {};
var baseStyleStepperGroup = {
  width: [$stepperWidth.reference]
};
var baseStyleStepper = function baseStyleStepper2(props) {
  return {
    borderStart: "1px solid",
    borderStartColor: mode("inherit", "whiteAlpha.300")(props),
    color: mode("inherit", "whiteAlpha.800")(props),
    _active: {
      bg: mode("gray.200", "whiteAlpha.300")(props)
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
};
var baseStyle$g = function baseStyle10(props) {
  return {
    root: baseStyleRoot$1,
    field: baseStyleField$1,
    stepperGroup: baseStyleStepperGroup,
    stepper: baseStyleStepper(props)
  };
};
function getSize(size2) {
  var _sizeStyle$field$font, _sizeStyle$field;
  var sizeStyle = Input.sizes[size2];
  var radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };
  var _fontSize = (_sizeStyle$field$font = (_sizeStyle$field = sizeStyle.field) == null ? void 0 : _sizeStyle$field.fontSize) != null ? _sizeStyle$field$font : "md";
  var fontSize = typography$1.fontSizes[_fontSize.toString()];
  return {
    field: _extends$3({}, sizeStyle.field, {
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top"
    }),
    stepper: {
      fontSize: calc$1(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size2]
      },
      _last: {
        borderBottomEndRadius: radius[size2],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  };
}
var sizes$c = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg")
};
var numberInput = {
  parts: numberInputAnatomy.keys,
  baseStyle: baseStyle$g,
  sizes: sizes$c,
  variants: variants$5,
  defaultProps: defaultProps$b
};
var _Input$variants$unsty$1;
var baseStyle$f = _extends$3({}, Input.baseStyle.field, {
  textAlign: "center"
});
var sizes$b = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
};
var variants$4 = {
  outline: function outline2(props) {
    var _Input$variants$outli;
    return (_Input$variants$outli = Input.variants.outline(props).field) != null ? _Input$variants$outli : {};
  },
  flushed: function flushed(props) {
    var _Input$variants$flush;
    return (_Input$variants$flush = Input.variants.flushed(props).field) != null ? _Input$variants$flush : {};
  },
  filled: function filled(props) {
    var _Input$variants$fille;
    return (_Input$variants$fille = Input.variants.filled(props).field) != null ? _Input$variants$fille : {};
  },
  unstyled: (_Input$variants$unsty$1 = Input.variants.unstyled.field) != null ? _Input$variants$unsty$1 : {}
};
var defaultProps$a = Input.defaultProps;
var pinInput = {
  baseStyle: baseStyle$f,
  sizes: sizes$b,
  variants: variants$4,
  defaultProps: defaultProps$a
};
var $popperBg = cssVar$1("popper-bg");
var $arrowBg$1 = cssVar$1("popper-arrow-bg");
var $arrowShadowColor = cssVar$1("popper-arrow-shadow-color");
var baseStylePopper = {
  zIndex: 10
};
var baseStyleContent = function baseStyleContent2(props) {
  var _ref;
  var bg2 = mode("white", "gray.700")(props);
  var shadowColor = mode("gray.200", "whiteAlpha.300")(props);
  return _ref = {}, _ref[$popperBg.variable] = "colors." + bg2, _ref.bg = $popperBg.reference, _ref[$arrowBg$1.variable] = $popperBg.reference, _ref[$arrowShadowColor.variable] = "colors." + shadowColor, _ref.width = "xs", _ref.border = "1px solid", _ref.borderColor = "inherit", _ref.borderRadius = "md", _ref.boxShadow = "sm", _ref.zIndex = "inherit", _ref._focus = {
    outline: 0,
    boxShadow: "outline"
  }, _ref;
};
var baseStyleHeader = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
};
var baseStyleBody2 = {
  px: 3,
  py: 2
};
var baseStyleFooter = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
};
var baseStyleCloseButton$1 = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
};
var baseStyle$e = function baseStyle11(props) {
  return {
    popper: baseStylePopper,
    content: baseStyleContent(props),
    header: baseStyleHeader,
    body: baseStyleBody2,
    footer: baseStyleFooter,
    arrow: {},
    closeButton: baseStyleCloseButton$1
  };
};
var popover = {
  parts: popoverAnatomy.keys,
  baseStyle: baseStyle$e
};
function filledStyle(props) {
  var c2 = props.colorScheme, t4 = props.theme, isIndeterminate = props.isIndeterminate, hasStripe = props.hasStripe;
  var stripeStyle = mode(generateStripe(), generateStripe("1rem", "rgba(0,0,0,0.1)"))(props);
  var bgColor = mode(c2 + ".500", c2 + ".200")(props);
  var gradient = "linear-gradient(\n    to right,\n    transparent 0%,\n    " + getColor(t4, bgColor) + " 50%,\n    transparent 100%\n  )";
  var addStripe = !isIndeterminate && hasStripe;
  return _extends$3({}, addStripe && stripeStyle, isIndeterminate ? {
    bgImage: gradient
  } : {
    bgColor
  });
}
var baseStyleLabel$2 = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
};
var baseStyleTrack$2 = function baseStyleTrack(props) {
  return {
    bg: mode("gray.100", "whiteAlpha.300")(props)
  };
};
var baseStyleFilledTrack$1 = function baseStyleFilledTrack(props) {
  return _extends$3({
    transitionProperty: "common",
    transitionDuration: "slow"
  }, filledStyle(props));
};
var baseStyle$d = function baseStyle12(props) {
  return {
    label: baseStyleLabel$2,
    filledTrack: baseStyleFilledTrack$1(props),
    track: baseStyleTrack$2(props)
  };
};
var sizes$a = {
  xs: {
    track: {
      h: "0.25rem"
    }
  },
  sm: {
    track: {
      h: "0.5rem"
    }
  },
  md: {
    track: {
      h: "0.75rem"
    }
  },
  lg: {
    track: {
      h: "1rem"
    }
  }
};
var defaultProps$9 = {
  size: "md",
  colorScheme: "blue"
};
var progress = {
  parts: progressAnatomy.keys,
  sizes: sizes$a,
  baseStyle: baseStyle$d,
  defaultProps: defaultProps$9
};
var baseStyleControl2 = function baseStyleControl3(props) {
  var _Checkbox$baseStyle = Checkbox.baseStyle(props), _Checkbox$baseStyle$c = _Checkbox$baseStyle.control, control = _Checkbox$baseStyle$c === void 0 ? {} : _Checkbox$baseStyle$c;
  return _extends$3({}, control, {
    borderRadius: "full",
    _checked: _extends$3({}, control["_checked"], {
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    })
  });
};
var baseStyle$c = function baseStyle13(props) {
  return {
    label: Checkbox.baseStyle(props).label,
    container: Checkbox.baseStyle(props).container,
    control: baseStyleControl2(props)
  };
};
var sizes$9 = {
  md: {
    control: {
      w: 4,
      h: 4
    },
    label: {
      fontSize: "md"
    }
  },
  lg: {
    control: {
      w: 5,
      h: 5
    },
    label: {
      fontSize: "lg"
    }
  },
  sm: {
    control: {
      width: 3,
      height: 3
    },
    label: {
      fontSize: "sm"
    }
  }
};
var defaultProps$8 = {
  size: "md",
  colorScheme: "blue"
};
var radio = {
  parts: radioAnatomy.keys,
  baseStyle: baseStyle$c,
  sizes: sizes$9,
  defaultProps: defaultProps$8
};
var baseStyleField = function baseStyleField2(props) {
  return _extends$3({}, Input.baseStyle.field, {
    bg: mode("white", "gray.700")(props),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    "> option, > optgroup": {
      bg: mode("white", "gray.700")(props)
    }
  });
};
var baseStyleIcon$1 = {
  width: "1.5rem",
  height: "100%",
  insetEnd: "0.5rem",
  position: "relative",
  color: "currentColor",
  fontSize: "1.25rem",
  _disabled: {
    opacity: 0.5
  }
};
var baseStyle$b = function baseStyle14(props) {
  return {
    field: baseStyleField(props),
    icon: baseStyleIcon$1
  };
};
var iconSpacing = {
  paddingInlineEnd: "2rem"
};
var sizes$8 = lodash_mergewith({}, Input.sizes, {
  lg: {
    field: iconSpacing
  },
  md: {
    field: iconSpacing
  },
  sm: {
    field: iconSpacing
  },
  xs: {
    field: iconSpacing,
    icon: {
      insetEnd: "0.25rem"
    }
  }
});
var select = {
  parts: selectAnatomy.keys,
  baseStyle: baseStyle$b,
  sizes: sizes$8,
  variants: Input.variants,
  defaultProps: Input.defaultProps
};
var fade = function fade2(startColor, endColor) {
  return keyframes({
    from: {
      borderColor: startColor,
      background: startColor
    },
    to: {
      borderColor: endColor,
      background: endColor
    }
  });
};
var baseStyle$a = function baseStyle15(props) {
  var defaultStartColor = mode("gray.100", "gray.800")(props);
  var defaultEndColor = mode("gray.400", "gray.600")(props);
  var _props$startColor = props.startColor, startColor = _props$startColor === void 0 ? defaultStartColor : _props$startColor, _props$endColor = props.endColor, endColor = _props$endColor === void 0 ? defaultEndColor : _props$endColor, speed = props.speed, theme3 = props.theme;
  var start = getColor(theme3, startColor);
  var end = getColor(theme3, endColor);
  return {
    opacity: 0.7,
    borderRadius: "2px",
    borderColor: start,
    background: end,
    animation: speed + "s linear infinite alternate " + fade(start, end)
  };
};
var skeleton = {
  baseStyle: baseStyle$a
};
var baseStyle$9 = function baseStyle16(props) {
  return {
    borderRadius: "md",
    fontWeight: "semibold",
    _focus: {
      boxShadow: "outline",
      padding: "1rem",
      position: "fixed",
      top: "1.5rem",
      insetStart: "1.5rem",
      bg: mode("white", "gray.700")(props)
    }
  };
};
var skipLink = {
  baseStyle: baseStyle$9
};
function thumbOrientation(props) {
  return orient({
    orientation: props.orientation,
    vertical: {
      left: "50%",
      transform: "translateX(-50%)",
      _active: {
        transform: "translateX(-50%) scale(1.15)"
      }
    },
    horizontal: {
      top: "50%",
      transform: "translateY(-50%)",
      _active: {
        transform: "translateY(-50%) scale(1.15)"
      }
    }
  });
}
var baseStyleContainer$1 = function baseStyleContainer2(props) {
  var orientation = props.orientation;
  return _extends$3({
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    }
  }, orient({
    orientation,
    vertical: {
      h: "100%"
    },
    horizontal: {
      w: "100%"
    }
  }));
};
var baseStyleTrack$1 = function baseStyleTrack2(props) {
  return {
    overflow: "hidden",
    borderRadius: "sm",
    bg: mode("gray.200", "whiteAlpha.200")(props),
    _disabled: {
      bg: mode("gray.300", "whiteAlpha.300")(props)
    }
  };
};
var baseStyleThumb$1 = function baseStyleThumb(props) {
  return _extends$3({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focus: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  }, thumbOrientation(props));
};
var baseStyleFilledTrack2 = function baseStyleFilledTrack3(props) {
  var c2 = props.colorScheme;
  return {
    width: "inherit",
    height: "inherit",
    bg: mode(c2 + ".500", c2 + ".200")(props)
  };
};
var baseStyle$8 = function baseStyle17(props) {
  return {
    container: baseStyleContainer$1(props),
    track: baseStyleTrack$1(props),
    thumb: baseStyleThumb$1(props),
    filledTrack: baseStyleFilledTrack2(props)
  };
};
var sizeLg = function sizeLg2(props) {
  return {
    thumb: {
      w: "16px",
      h: "16px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "4px"
      },
      vertical: {
        w: "4px"
      }
    })
  };
};
var sizeMd = function sizeMd2(props) {
  return {
    thumb: {
      w: "14px",
      h: "14px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "4px"
      },
      vertical: {
        w: "4px"
      }
    })
  };
};
var sizeSm = function sizeSm2(props) {
  return {
    thumb: {
      w: "10px",
      h: "10px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "2px"
      },
      vertical: {
        w: "2px"
      }
    })
  };
};
var sizes$7 = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm
};
var defaultProps$7 = {
  size: "md",
  colorScheme: "blue"
};
var slider = {
  parts: sliderAnatomy.keys,
  sizes: sizes$7,
  baseStyle: baseStyle$8,
  defaultProps: defaultProps$7
};
var _xs;
var _sm;
var _md;
var _lg;
var _xl;
var $size = cssVar$1("spinner-size");
var baseStyle$7 = {
  width: [$size.reference],
  height: [$size.reference]
};
var sizes$6 = {
  xs: (_xs = {}, _xs[$size.variable] = "0.75rem", _xs),
  sm: (_sm = {}, _sm[$size.variable] = "1rem", _sm),
  md: (_md = {}, _md[$size.variable] = "1.5rem", _md),
  lg: (_lg = {}, _lg[$size.variable] = "2rem", _lg),
  xl: (_xl = {}, _xl[$size.variable] = "3rem", _xl)
};
var defaultProps$6 = {
  size: "md"
};
var spinner = {
  baseStyle: baseStyle$7,
  sizes: sizes$6,
  defaultProps: defaultProps$6
};
var baseStyleLabel$1 = {
  fontWeight: "medium"
};
var baseStyleHelpText = {
  opacity: 0.8,
  marginBottom: 2
};
var baseStyleNumber = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
};
var baseStyleIcon2 = {
  marginEnd: 1,
  w: "14px",
  h: "14px",
  verticalAlign: "middle"
};
var baseStyle$6 = {
  container: {},
  label: baseStyleLabel$1,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon2
};
var sizes$5 = {
  md: {
    label: {
      fontSize: "sm"
    },
    helpText: {
      fontSize: "sm"
    },
    number: {
      fontSize: "2xl"
    }
  }
};
var defaultProps$5 = {
  size: "md"
};
var stat = {
  parts: statAnatomy.keys,
  baseStyle: baseStyle$6,
  sizes: sizes$5,
  defaultProps: defaultProps$5
};
var _container2;
var _container3;
var _container4;
var $width = cssVar$1("switch-track-width");
var $height = cssVar$1("switch-track-height");
var $diff = cssVar$1("switch-track-diff");
var diffValue = calc$1.subtract($width, $height);
var $translateX = cssVar$1("switch-thumb-x");
var baseStyleTrack3 = function baseStyleTrack4(props) {
  var c2 = props.colorScheme;
  return {
    borderRadius: "full",
    p: "2px",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    bg: mode("gray.300", "whiteAlpha.400")(props),
    _focus: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      bg: mode(c2 + ".500", c2 + ".200")(props)
    }
  };
};
var baseStyleThumb2 = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: "translateX(" + $translateX.reference + ")"
  }
};
var baseStyle$5 = function baseStyle18(props) {
  var _rtl, _container;
  return {
    container: (_container = {}, _container[$diff.variable] = diffValue, _container[$translateX.variable] = $diff.reference, _container._rtl = (_rtl = {}, _rtl[$translateX.variable] = calc$1($diff).negate().toString(), _rtl), _container),
    track: baseStyleTrack3(props),
    thumb: baseStyleThumb2
  };
};
var sizes$4 = {
  sm: {
    container: (_container2 = {}, _container2[$width.variable] = "1.375rem", _container2[$height.variable] = "0.75rem", _container2)
  },
  md: {
    container: (_container3 = {}, _container3[$width.variable] = "1.875rem", _container3[$height.variable] = "1rem", _container3)
  },
  lg: {
    container: (_container4 = {}, _container4[$width.variable] = "2.875rem", _container4[$height.variable] = "1.5rem", _container4)
  }
};
var defaultProps$4 = {
  size: "md",
  colorScheme: "blue"
};
var _switch = {
  parts: switchAnatomy.keys,
  baseStyle: baseStyle$5,
  sizes: sizes$4,
  defaultProps: defaultProps$4
};
var baseStyle$4 = {
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
};
var numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
};
var variantSimple = function variantSimple2(props) {
  var c2 = props.colorScheme;
  return {
    th: _extends$3({
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(c2 + ".100", c2 + ".700")(props)
    }, numericStyles),
    td: _extends$3({
      borderBottom: "1px",
      borderColor: mode(c2 + ".100", c2 + ".700")(props)
    }, numericStyles),
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: {
            borderBottomWidth: 0
          }
        }
      }
    }
  };
};
var variantStripe = function variantStripe2(props) {
  var c2 = props.colorScheme;
  return {
    th: _extends$3({
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(c2 + ".100", c2 + ".700")(props)
    }, numericStyles),
    td: _extends$3({
      borderBottom: "1px",
      borderColor: mode(c2 + ".100", c2 + ".700")(props)
    }, numericStyles),
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: mode(c2 + ".100", c2 + ".700")(props)
          },
          td: {
            background: mode(c2 + ".100", c2 + ".700")(props)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: {
            borderBottomWidth: 0
          }
        }
      }
    }
  };
};
var variants$3 = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: {}
};
var sizes$3 = {
  sm: {
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  },
  md: {
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  },
  lg: {
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  }
};
var defaultProps$3 = {
  variant: "simple",
  size: "md",
  colorScheme: "gray"
};
var table = {
  parts: tableAnatomy.keys,
  baseStyle: baseStyle$4,
  variants: variants$3,
  sizes: sizes$3,
  defaultProps: defaultProps$3
};
var baseStyleRoot = function baseStyleRoot2(props) {
  var orientation = props.orientation;
  return {
    display: orientation === "vertical" ? "flex" : "block"
  };
};
var baseStyleTab = function baseStyleTab2(props) {
  var isFitted = props.isFitted;
  return {
    flex: isFitted ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focus: {
      zIndex: 1,
      boxShadow: "outline"
    }
  };
};
var baseStyleTablist = function baseStyleTablist2(props) {
  var _props$align = props.align, align = _props$align === void 0 ? "start" : _props$align, orientation = props.orientation;
  var alignments = {
    end: "flex-end",
    center: "center",
    start: "flex-start"
  };
  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row"
  };
};
var baseStyleTabpanel = {
  p: 4
};
var baseStyle$3 = function baseStyle19(props) {
  return {
    root: baseStyleRoot(props),
    tab: baseStyleTab(props),
    tablist: baseStyleTablist(props),
    tabpanel: baseStyleTabpanel
  };
};
var sizes$2 = {
  sm: {
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  },
  md: {
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  },
  lg: {
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  }
};
var variantLine = function variantLine2(props) {
  var _tablist, _tab;
  var c2 = props.colorScheme, orientation = props.orientation;
  var isVertical = orientation === "vertical";
  var borderProp = orientation === "vertical" ? "borderStart" : "borderBottom";
  var marginProp = isVertical ? "marginStart" : "marginBottom";
  return {
    tablist: (_tablist = {}, _tablist[borderProp] = "2px solid", _tablist.borderColor = "inherit", _tablist),
    tab: (_tab = {}, _tab[borderProp] = "2px solid", _tab.borderColor = "transparent", _tab[marginProp] = "-2px", _tab._selected = {
      color: mode(c2 + ".600", c2 + ".300")(props),
      borderColor: "currentColor"
    }, _tab._active = {
      bg: mode("gray.200", "whiteAlpha.300")(props)
    }, _tab._disabled = {
      opacity: 0.4,
      cursor: "not-allowed"
    }, _tab)
  };
};
var variantEnclosed = function variantEnclosed2(props) {
  var c2 = props.colorScheme;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      _selected: {
        color: mode(c2 + ".600", c2 + ".300")(props),
        borderColor: "inherit",
        borderBottomColor: mode("white", "gray.800")(props)
      }
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
};
var variantEnclosedColored = function variantEnclosedColored2(props) {
  var c2 = props.colorScheme;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      bg: mode("gray.50", "whiteAlpha.50")(props),
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        bg: mode("#fff", "gray.800")(props),
        color: mode(c2 + ".600", c2 + ".300")(props),
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      }
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
};
var variantSoftRounded = function variantSoftRounded2(props) {
  var c2 = props.colorScheme, theme3 = props.theme;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: getColor(theme3, c2 + ".700"),
        bg: getColor(theme3, c2 + ".100")
      }
    }
  };
};
var variantSolidRounded = function variantSolidRounded2(props) {
  var c2 = props.colorScheme;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: mode("gray.600", "inherit")(props),
      _selected: {
        color: mode("#fff", "gray.800")(props),
        bg: mode(c2 + ".600", c2 + ".300")(props)
      }
    }
  };
};
var variantUnstyled = {};
var variants$2 = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled
};
var defaultProps$2 = {
  size: "md",
  variant: "line",
  colorScheme: "blue"
};
var tabs = {
  parts: tabsAnatomy.keys,
  baseStyle: baseStyle$3,
  sizes: sizes$2,
  variants: variants$2,
  defaultProps: defaultProps$2
};
var baseStyleContainer3 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  _focus: {
    boxShadow: "outline"
  }
};
var baseStyleLabel = {
  lineHeight: 1.2,
  overflow: "visible"
};
var baseStyleCloseButton = {
  fontSize: "18px",
  w: "1.25rem",
  h: "1.25rem",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "0.375rem",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focus: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
};
var baseStyle$2 = {
  container: baseStyleContainer3,
  label: baseStyleLabel,
  closeButton: baseStyleCloseButton
};
var sizes$1 = {
  sm: {
    container: {
      minH: "1.25rem",
      minW: "1.25rem",
      fontSize: "xs",
      px: 2,
      borderRadius: "md"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  },
  md: {
    container: {
      minH: "1.5rem",
      minW: "1.5rem",
      fontSize: "sm",
      borderRadius: "md",
      px: 2
    }
  },
  lg: {
    container: {
      minH: 8,
      minW: 8,
      fontSize: "md",
      borderRadius: "md",
      px: 3
    }
  }
};
var variants$1 = {
  subtle: function subtle(props) {
    return {
      container: Badge.variants.subtle(props)
    };
  },
  solid: function solid(props) {
    return {
      container: Badge.variants.solid(props)
    };
  },
  outline: function outline3(props) {
    return {
      container: Badge.variants.outline(props)
    };
  }
};
var defaultProps$1 = {
  size: "md",
  variant: "subtle",
  colorScheme: "gray"
};
var tag = {
  parts: tagAnatomy.keys,
  variants: variants$1,
  baseStyle: baseStyle$2,
  sizes: sizes$1,
  defaultProps: defaultProps$1
};
var _Input$variants$unsty;
var _Input$sizes$xs$field;
var _Input$sizes$sm$field;
var _Input$sizes$md$field;
var _Input$sizes$lg$field;
var baseStyle$1 = _extends$3({}, Input.baseStyle.field, {
  paddingY: "8px",
  minHeight: "80px",
  lineHeight: "short",
  verticalAlign: "top"
});
var variants = {
  outline: function outline4(props) {
    var _Input$variants$outli;
    return (_Input$variants$outli = Input.variants.outline(props).field) != null ? _Input$variants$outli : {};
  },
  flushed: function flushed2(props) {
    var _Input$variants$flush;
    return (_Input$variants$flush = Input.variants.flushed(props).field) != null ? _Input$variants$flush : {};
  },
  filled: function filled2(props) {
    var _Input$variants$fille;
    return (_Input$variants$fille = Input.variants.filled(props).field) != null ? _Input$variants$fille : {};
  },
  unstyled: (_Input$variants$unsty = Input.variants.unstyled.field) != null ? _Input$variants$unsty : {}
};
var sizes$l = {
  xs: (_Input$sizes$xs$field = Input.sizes.xs.field) != null ? _Input$sizes$xs$field : {},
  sm: (_Input$sizes$sm$field = Input.sizes.sm.field) != null ? _Input$sizes$sm$field : {},
  md: (_Input$sizes$md$field = Input.sizes.md.field) != null ? _Input$sizes$md$field : {},
  lg: (_Input$sizes$lg$field = Input.sizes.lg.field) != null ? _Input$sizes$lg$field : {}
};
var defaultProps = {
  size: "md",
  variant: "outline"
};
var textarea = {
  baseStyle: baseStyle$1,
  sizes: sizes$l,
  variants,
  defaultProps
};
var $bg = cssVar$1("tooltip-bg");
var $arrowBg = cssVar$1("popper-arrow-bg");
var baseStyle20 = function baseStyle21(props) {
  var _ref;
  var bg2 = mode("gray.700", "gray.300")(props);
  return _ref = {}, _ref[$bg.variable] = "colors." + bg2, _ref.px = "8px", _ref.py = "2px", _ref.bg = [$bg.reference], _ref[$arrowBg.variable] = [$bg.reference], _ref.color = mode("whiteAlpha.900", "gray.900")(props), _ref.borderRadius = "sm", _ref.fontWeight = "medium", _ref.fontSize = "sm", _ref.boxShadow = "md", _ref.maxW = "320px", _ref.zIndex = "tooltip", _ref;
};
var tooltip = {
  baseStyle: baseStyle20
};
var components = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Accordion: accordion,
  Alert: alert,
  Avatar: avatar,
  Badge,
  Breadcrumb: breadcrumb,
  Button: button,
  Checkbox,
  CloseButton: closeButton,
  Code: code,
  Container: container$1,
  Divider: divider,
  Drawer: drawer,
  Editable: editable,
  Form: form,
  FormError: formError,
  FormLabel: formLabel,
  Heading: heading,
  Input,
  Kbd: kbd,
  Link: link,
  List: list$1,
  Menu: menu,
  Modal: modal,
  NumberInput: numberInput,
  PinInput: pinInput,
  Popover: popover,
  Progress: progress,
  Radio: radio,
  Select: select,
  Skeleton: skeleton,
  SkipLink: skipLink,
  Slider: slider,
  Spinner: spinner,
  Stat: stat,
  Switch: _switch,
  Table: table,
  Tabs: tabs,
  Tag: tag,
  Textarea: textarea,
  Tooltip: tooltip
});
var borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
};
var breakpoints$1 = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
});
var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
};
var radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};
var shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};
var transitionProperty = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
};
var transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
var transitionDuration = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
};
var transition$1 = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration
};
var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};
var blur2 = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
};
var foundations = _extends$3({
  breakpoints: breakpoints$1,
  zIndices,
  radii,
  blur: blur2,
  colors
}, typography$1, {
  sizes,
  shadows,
  space: spacing,
  borders,
  transition: transition$1
});
var styles = {
  global: function global2(props) {
    return {
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "gray.800")(props),
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base"
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props)
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word"
      }
    };
  }
};
var styles$1 = styles;
var requiredChakraThemeKeys = ["borders", "breakpoints", "colors", "components", "config", "direction", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "shadows", "sizes", "space", "styles", "transition", "zIndices"];
function isChakraTheme(unit) {
  if (!isObject(unit)) {
    return false;
  }
  return requiredChakraThemeKeys.every(function(propertyName) {
    return Object.prototype.hasOwnProperty.call(unit, propertyName);
  });
}
var direction = "ltr";
var config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
var theme = _extends$3({
  direction
}, foundations, {
  components,
  styles: styles$1,
  config
});
var visuallyHiddenStyle = {
  border: "0px",
  clip: "rect(0px, 0px, 0px, 0px)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var VisuallyHidden = chakra("span", {
  baseStyle: visuallyHiddenStyle
});
var VisuallyHiddenInput = chakra("input", {
  baseStyle: visuallyHiddenStyle
});
function _extends$5() {
  _extends$5 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$3 = ["label", "thickness", "speed", "emptyColor", "className"];
var spin = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var Spinner = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles3 = useStyleConfig("Spinner", props);
  var _omitThemingProps = omitThemingProps(props), _omitThemingProps$lab = _omitThemingProps.label, label = _omitThemingProps$lab === void 0 ? "Loading..." : _omitThemingProps$lab, _omitThemingProps$thi = _omitThemingProps.thickness, thickness = _omitThemingProps$thi === void 0 ? "2px" : _omitThemingProps$thi, _omitThemingProps$spe = _omitThemingProps.speed, speed = _omitThemingProps$spe === void 0 ? "0.45s" : _omitThemingProps$spe, _omitThemingProps$emp = _omitThemingProps.emptyColor, emptyColor = _omitThemingProps$emp === void 0 ? "transparent" : _omitThemingProps$emp, className = _omitThemingProps.className, rest = _objectWithoutPropertiesLoose$2(_omitThemingProps, _excluded$3);
  var _className = cx("chakra-spinner", className);
  var spinnerStyles = _extends$5({
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: thickness,
    borderBottomColor: emptyColor,
    borderLeftColor: emptyColor,
    animation: spin + " " + speed + " linear infinite"
  }, styles3);
  return /* @__PURE__ */ react.createElement(chakra.div, _extends$5({
    ref,
    __css: spinnerStyles,
    className: _className
  }, rest), label && /* @__PURE__ */ react.createElement(VisuallyHidden, null, label));
});
function _objectWithoutPropertiesLoose$3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends$6() {
  _extends$6 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$6.apply(this, arguments);
}
var _createContext$3 = createContext2({
  strict: false,
  name: "ButtonGroupContext"
});
var useButtonGroup = _createContext$3[1];
var _excluded$3$1 = ["label", "placement", "spacing", "children", "className", "__css"];
var ButtonSpinner = function ButtonSpinner2(props) {
  var label = props.label, placement = props.placement, _props$spacing = props.spacing, spacing2 = _props$spacing === void 0 ? "0.5rem" : _props$spacing, _props$children = props.children, children = _props$children === void 0 ? /* @__PURE__ */ react.createElement(Spinner, {
    color: "currentColor",
    width: "1em",
    height: "1em"
  }) : _props$children, className = props.className, __css = props.__css, rest = _objectWithoutPropertiesLoose$3(props, _excluded$3$1);
  var _className = cx("chakra-button__spinner", className);
  var marginProp = placement === "start" ? "marginEnd" : "marginStart";
  var spinnerStyles = react.useMemo(function() {
    var _extends2;
    return _extends$6((_extends2 = {
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute"
    }, _extends2[marginProp] = label ? spacing2 : 0, _extends2.fontSize = "1em", _extends2.lineHeight = "normal", _extends2), __css);
  }, [__css, label, marginProp, spacing2]);
  return /* @__PURE__ */ react.createElement(chakra.div, _extends$6({
    className: _className
  }, rest, {
    __css: spinnerStyles
  }), children);
};
var _excluded$2$1 = ["children", "className"];
var ButtonIcon = function ButtonIcon2(props) {
  var children = props.children, className = props.className, rest = _objectWithoutPropertiesLoose$3(props, _excluded$2$1);
  var _children = /* @__PURE__ */ react.isValidElement(children) ? /* @__PURE__ */ react.cloneElement(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;
  var _className = cx("chakra-button__icon", className);
  return /* @__PURE__ */ react.createElement(chakra.span, _extends$6({
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0
  }, rest, {
    className: _className
  }), _children);
};
function useButtonType(value) {
  var _React$useState = react.useState(!value), isButton = _React$useState[0], setIsButton = _React$useState[1];
  var refCallback = react.useCallback(function(node) {
    if (!node)
      return;
    setIsButton(node.tagName === "BUTTON");
  }, []);
  var type = isButton ? "button" : void 0;
  return {
    ref: refCallback,
    type
  };
}
var _excluded$1$1 = ["isDisabled", "isLoading", "isActive", "isFullWidth", "children", "leftIcon", "rightIcon", "loadingText", "iconSpacing", "type", "spinner", "spinnerPlacement", "className", "as"];
var Button = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var group = useButtonGroup();
  var styles3 = useStyleConfig("Button", _extends$6({}, group, props));
  var _omitThemingProps = omitThemingProps(props), _omitThemingProps$isD = _omitThemingProps.isDisabled, isDisabled = _omitThemingProps$isD === void 0 ? group == null ? void 0 : group.isDisabled : _omitThemingProps$isD, isLoading = _omitThemingProps.isLoading, isActive = _omitThemingProps.isActive, isFullWidth = _omitThemingProps.isFullWidth, children = _omitThemingProps.children, leftIcon = _omitThemingProps.leftIcon, rightIcon = _omitThemingProps.rightIcon, loadingText = _omitThemingProps.loadingText, _omitThemingProps$ico = _omitThemingProps.iconSpacing, iconSpacing2 = _omitThemingProps$ico === void 0 ? "0.5rem" : _omitThemingProps$ico, type = _omitThemingProps.type, spinner2 = _omitThemingProps.spinner, _omitThemingProps$spi = _omitThemingProps.spinnerPlacement, spinnerPlacement = _omitThemingProps$spi === void 0 ? "start" : _omitThemingProps$spi, className = _omitThemingProps.className, as = _omitThemingProps.as, rest = _objectWithoutPropertiesLoose$3(_omitThemingProps, _excluded$1$1);
  var buttonStyles = react.useMemo(function() {
    var _styles$_focus;
    var _focus = lodash_mergewith({}, (_styles$_focus = styles3 == null ? void 0 : styles3["_focus"]) != null ? _styles$_focus : {}, {
      zIndex: 1
    });
    return _extends$6({
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      width: isFullWidth ? "100%" : "auto"
    }, styles3, !!group && {
      _focus
    });
  }, [styles3, group, isFullWidth]);
  var _useButtonType = useButtonType(as), _ref = _useButtonType.ref, defaultType = _useButtonType.type;
  var contentProps = {
    rightIcon,
    leftIcon,
    iconSpacing: iconSpacing2,
    children
  };
  return /* @__PURE__ */ react.createElement(chakra.button, _extends$6({
    disabled: isDisabled || isLoading,
    ref: useMergeRefs(ref, _ref),
    as,
    type: type != null ? type : defaultType,
    "data-active": dataAttr(isActive),
    "data-loading": dataAttr(isLoading),
    __css: buttonStyles,
    className: cx("chakra-button", className)
  }, rest), isLoading && spinnerPlacement === "start" && /* @__PURE__ */ react.createElement(ButtonSpinner, {
    className: "chakra-button__spinner--start",
    label: loadingText,
    placement: "start",
    spacing: iconSpacing2
  }, spinner2), isLoading ? loadingText || /* @__PURE__ */ react.createElement(chakra.span, {
    opacity: 0
  }, /* @__PURE__ */ react.createElement(ButtonContent, contentProps)) : /* @__PURE__ */ react.createElement(ButtonContent, contentProps), isLoading && spinnerPlacement === "end" && /* @__PURE__ */ react.createElement(ButtonSpinner, {
    className: "chakra-button__spinner--end",
    label: loadingText,
    placement: "end",
    spacing: iconSpacing2
  }, spinner2));
});
function ButtonContent(props) {
  var leftIcon = props.leftIcon, rightIcon = props.rightIcon, children = props.children, iconSpacing2 = props.iconSpacing;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, leftIcon && /* @__PURE__ */ react.createElement(ButtonIcon, {
    marginEnd: iconSpacing2
  }, leftIcon), children, rightIcon && /* @__PURE__ */ react.createElement(ButtonIcon, {
    marginStart: iconSpacing2
  }, rightIcon));
}
function _extends$7() {
  _extends$7 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$7.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$2$2 = ["id", "isRequired", "isInvalid", "isDisabled", "isReadOnly"];
var _excluded2$1 = ["getRootProps", "htmlProps"];
var _createContext$4 = createContext2({
  strict: false,
  name: "FormControlContext"
});
var FormControlProvider = _createContext$4[0];
var useFormControlContext = _createContext$4[1];
function useFormControlProvider(props) {
  var idProp = props.id, isRequired = props.isRequired, isInvalid = props.isInvalid, isDisabled = props.isDisabled, isReadOnly = props.isReadOnly, htmlProps = _objectWithoutPropertiesLoose$4(props, _excluded$2$2);
  var uuid = useId2();
  var id2 = idProp || "field-" + uuid;
  var labelId = id2 + "-label";
  var feedbackId = id2 + "-feedback";
  var helpTextId = id2 + "-helptext";
  var _React$useState = react.useState(false), hasFeedbackText = _React$useState[0], setHasFeedbackText = _React$useState[1];
  var _React$useState2 = react.useState(false), hasHelpText = _React$useState2[0], setHasHelpText = _React$useState2[1];
  var _useBoolean = useBoolean(), isFocused = _useBoolean[0], setFocus = _useBoolean[1];
  var getHelpTextProps = react.useCallback(function(props2, forwardedRef) {
    if (props2 === void 0) {
      props2 = {};
    }
    if (forwardedRef === void 0) {
      forwardedRef = null;
    }
    return _extends$7({
      id: helpTextId
    }, props2, {
      ref: mergeRefs(forwardedRef, function(node) {
        if (!node)
          return;
        setHasHelpText(true);
      })
    });
  }, [helpTextId]);
  var getLabelProps = react.useCallback(function(props2, forwardedRef) {
    var _props$id, _props$htmlFor;
    if (props2 === void 0) {
      props2 = {};
    }
    if (forwardedRef === void 0) {
      forwardedRef = null;
    }
    return _extends$7({}, props2, {
      ref: forwardedRef,
      "data-focus": dataAttr(isFocused),
      "data-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      "data-readonly": dataAttr(isReadOnly),
      id: (_props$id = props2.id) != null ? _props$id : labelId,
      htmlFor: (_props$htmlFor = props2.htmlFor) != null ? _props$htmlFor : id2
    });
  }, [id2, isDisabled, isFocused, isInvalid, isReadOnly, labelId]);
  var getErrorMessageProps = react.useCallback(function(props2, forwardedRef) {
    if (props2 === void 0) {
      props2 = {};
    }
    if (forwardedRef === void 0) {
      forwardedRef = null;
    }
    return _extends$7({
      id: feedbackId
    }, props2, {
      ref: mergeRefs(forwardedRef, function(node) {
        if (!node)
          return;
        setHasFeedbackText(true);
      }),
      "aria-live": "polite"
    });
  }, [feedbackId]);
  var getRootProps = react.useCallback(function(props2, forwardedRef) {
    if (props2 === void 0) {
      props2 = {};
    }
    if (forwardedRef === void 0) {
      forwardedRef = null;
    }
    return _extends$7({}, props2, htmlProps, {
      ref: forwardedRef,
      role: "group"
    });
  }, [htmlProps]);
  var getRequiredIndicatorProps = react.useCallback(function(props2, forwardedRef) {
    if (props2 === void 0) {
      props2 = {};
    }
    if (forwardedRef === void 0) {
      forwardedRef = null;
    }
    return _extends$7({}, props2, {
      ref: forwardedRef,
      role: "presentation",
      "aria-hidden": true,
      children: props2.children || "*"
    });
  }, []);
  return {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    isFocused: !!isFocused,
    onFocus: setFocus.on,
    onBlur: setFocus.off,
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id: id2,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
    getHelpTextProps,
    getErrorMessageProps,
    getRootProps,
    getLabelProps,
    getRequiredIndicatorProps
  };
}
var FormControl = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles3 = useMultiStyleConfig("Form", props);
  var ownProps = omitThemingProps(props);
  var _useFormControlProvid = useFormControlProvider(ownProps), getRootProps = _useFormControlProvid.getRootProps;
  var context = _objectWithoutPropertiesLoose$4(_useFormControlProvid, _excluded2$1);
  var className = cx("chakra-form-control", props.className);
  return /* @__PURE__ */ react.createElement(FormControlProvider, {
    value: context
  }, /* @__PURE__ */ react.createElement(StylesProvider, {
    value: styles3
  }, /* @__PURE__ */ react.createElement(chakra.div, _extends$7({}, getRootProps({}, ref), {
    className,
    __css: styles3["container"]
  }))));
});
var _excluded$1$2 = ["isDisabled", "isInvalid", "isReadOnly", "isRequired"];
var _excluded2$2 = ["id", "disabled", "readOnly", "required", "isRequired", "isInvalid", "isReadOnly", "isDisabled", "onFocus", "onBlur"];
function useFormControl(props) {
  var _useFormControlProps = useFormControlProps(props), isDisabled = _useFormControlProps.isDisabled, isInvalid = _useFormControlProps.isInvalid, isReadOnly = _useFormControlProps.isReadOnly, isRequired = _useFormControlProps.isRequired, rest = _objectWithoutPropertiesLoose$4(_useFormControlProps, _excluded$1$2);
  return _extends$7({}, rest, {
    disabled: isDisabled,
    readOnly: isReadOnly,
    required: isRequired,
    "aria-invalid": ariaAttr(isInvalid),
    "aria-required": ariaAttr(isRequired),
    "aria-readonly": ariaAttr(isReadOnly)
  });
}
function useFormControlProps(props) {
  var _ref, _ref2, _ref3;
  var field = useFormControlContext();
  var id2 = props.id, disabled2 = props.disabled, readOnly2 = props.readOnly, required = props.required, isRequired = props.isRequired, isInvalid = props.isInvalid, isReadOnly = props.isReadOnly, isDisabled = props.isDisabled, onFocus = props.onFocus, onBlur = props.onBlur, rest = _objectWithoutPropertiesLoose$4(props, _excluded2$2);
  var labelIds = props["aria-describedby"] ? [props["aria-describedby"]] : [];
  if (field != null && field.hasFeedbackText && field != null && field.isInvalid) {
    labelIds.push(field.feedbackId);
  }
  if (field != null && field.hasHelpText) {
    labelIds.push(field.helpTextId);
  }
  return _extends$7({}, rest, {
    "aria-describedby": labelIds.join(" ") || void 0,
    id: id2 != null ? id2 : field == null ? void 0 : field.id,
    isDisabled: (_ref = disabled2 != null ? disabled2 : isDisabled) != null ? _ref : field == null ? void 0 : field.isDisabled,
    isReadOnly: (_ref2 = readOnly2 != null ? readOnly2 : isReadOnly) != null ? _ref2 : field == null ? void 0 : field.isReadOnly,
    isRequired: (_ref3 = required != null ? required : isRequired) != null ? _ref3 : field == null ? void 0 : field.isRequired,
    isInvalid: isInvalid != null ? isInvalid : field == null ? void 0 : field.isInvalid,
    onFocus: callAllHandlers(field == null ? void 0 : field.onFocus, onFocus),
    onBlur: callAllHandlers(field == null ? void 0 : field.onBlur, onBlur)
  });
}
function _extends$8() {
  _extends$8 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$5(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$3$2 = ["htmlSize"];
var Input$1 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var htmlSize = props.htmlSize, rest = _objectWithoutPropertiesLoose$5(props, _excluded$3$2);
  var styles3 = useMultiStyleConfig("Input", rest);
  var ownProps = omitThemingProps(rest);
  var input = useFormControl(ownProps);
  var _className = cx("chakra-input", props.className);
  return /* @__PURE__ */ react.createElement(chakra.input, _extends$8({
    size: htmlSize
  }, input, {
    __css: styles3.field,
    ref,
    className: _className
  }));
});
Input$1.id = "Input";
var _excluded$2$3 = ["placement"];
var placements = {
  left: {
    marginEnd: "-1px",
    borderEndRadius: 0,
    borderEndColor: "transparent"
  },
  right: {
    marginStart: "-1px",
    borderStartRadius: 0,
    borderStartColor: "transparent"
  }
};
var StyledAddon = chakra("div", {
  baseStyle: {
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap"
  }
});
var InputAddon = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var _placements$placement;
  var _props$placement = props.placement, placement = _props$placement === void 0 ? "left" : _props$placement, rest = _objectWithoutPropertiesLoose$5(props, _excluded$2$3);
  var placementStyles = (_placements$placement = placements[placement]) != null ? _placements$placement : {};
  var styles3 = useStyles();
  return /* @__PURE__ */ react.createElement(StyledAddon, _extends$8({
    ref
  }, rest, {
    __css: _extends$8({}, styles3.addon, placementStyles)
  }));
});
var InputLeftAddon = /* @__PURE__ */ forwardRef2(function(props, ref) {
  return /* @__PURE__ */ react.createElement(InputAddon, _extends$8({
    ref,
    placement: "left"
  }, props, {
    className: cx("chakra-input__left-addon", props.className)
  }));
});
InputLeftAddon.id = "InputLeftAddon";
var InputRightAddon = /* @__PURE__ */ forwardRef2(function(props, ref) {
  return /* @__PURE__ */ react.createElement(InputAddon, _extends$8({
    ref,
    placement: "right"
  }, props, {
    className: cx("chakra-input__right-addon", props.className)
  }));
});
InputRightAddon.id = "InputRightAddon";
var _excluded$4 = ["placement"];
var _excluded2$3 = ["className"];
var _excluded3 = ["className"];
var StyledElement = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: 2
  }
});
var InputElement = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var _input$height, _input$height2, _extends2;
  var _props$placement = props.placement, placement = _props$placement === void 0 ? "left" : _props$placement, rest = _objectWithoutPropertiesLoose$5(props, _excluded$4);
  var styles3 = useStyles();
  var input = styles3.field;
  var attr = placement === "left" ? "insetStart" : "insetEnd";
  var elementStyles = _extends$8((_extends2 = {}, _extends2[attr] = "0", _extends2.width = (_input$height = input == null ? void 0 : input.height) != null ? _input$height : input == null ? void 0 : input.h, _extends2.height = (_input$height2 = input == null ? void 0 : input.height) != null ? _input$height2 : input == null ? void 0 : input.h, _extends2.fontSize = input == null ? void 0 : input.fontSize, _extends2), styles3.element);
  return /* @__PURE__ */ react.createElement(StyledElement, _extends$8({
    ref,
    __css: elementStyles
  }, rest));
});
InputElement.id = "InputElement";
var InputLeftElement = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var className = props.className, rest = _objectWithoutPropertiesLoose$5(props, _excluded2$3);
  var _className = cx("chakra-input__left-element", className);
  return /* @__PURE__ */ react.createElement(InputElement, _extends$8({
    ref,
    placement: "left",
    className: _className
  }, rest));
});
InputLeftElement.id = "InputLeftElement";
var InputRightElement = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var className = props.className, rest = _objectWithoutPropertiesLoose$5(props, _excluded3);
  var _className = cx("chakra-input__right-element", className);
  return /* @__PURE__ */ react.createElement(InputElement, _extends$8({
    ref,
    placement: "right",
    className: _className
  }, rest));
});
InputRightElement.id = "InputRightElement";
function _extends$9() {
  _extends$9 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$9.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$6(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Box = chakra("div");
var Center = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
var _excluded$a = ["direction", "align", "justify", "wrap", "basis", "grow", "shrink"];
var Flex = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var direction2 = props.direction, align = props.align, justify = props.justify, wrap3 = props.wrap, basis = props.basis, grow = props.grow, shrink = props.shrink, rest = _objectWithoutPropertiesLoose$6(props, _excluded$a);
  var styles3 = {
    display: "flex",
    flexDirection: direction2,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap3,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink
  };
  return /* @__PURE__ */ react.createElement(chakra.div, _extends$9({
    ref,
    __css: styles3
  }, rest));
});
var _excluded$5 = ["children", "styleType", "stylePosition", "spacing"];
var _createContext$5 = createContext2({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in a `<*List />` "
});
var StylesProvider$1 = _createContext$5[0];
var useStyles$1 = _createContext$5[1];
var List = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var _ref;
  var styles3 = useMultiStyleConfig("List", props);
  var _omitThemingProps = omitThemingProps(props), children = _omitThemingProps.children, _omitThemingProps$sty = _omitThemingProps.styleType, styleType = _omitThemingProps$sty === void 0 ? "none" : _omitThemingProps$sty, stylePosition = _omitThemingProps.stylePosition, spacing2 = _omitThemingProps.spacing, rest = _objectWithoutPropertiesLoose$6(_omitThemingProps, _excluded$5);
  var validChildren = getValidChildren(children);
  var selector = "& > *:not(style) ~ *:not(style)";
  var spacingStyle = spacing2 ? (_ref = {}, _ref[selector] = {
    mt: spacing2
  }, _ref) : {};
  return /* @__PURE__ */ react.createElement(StylesProvider$1, {
    value: styles3
  }, /* @__PURE__ */ react.createElement(chakra.ul, _extends$9({
    ref,
    listStyleType: styleType,
    listStylePosition: stylePosition,
    role: "list",
    __css: _extends$9({}, styles3.container, spacingStyle)
  }, rest), validChildren));
});
var ListItem = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles3 = useStyles$1();
  return /* @__PURE__ */ react.createElement(chakra.li, _extends$9({
    ref
  }, props, {
    __css: styles3.item
  }));
});
var Spacer = chakra("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
var _excluded$2$4 = ["className", "align", "decoration", "casing"];
var Text = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles3 = useStyleConfig("Text", props);
  var _omitThemingProps = omitThemingProps(props);
  var rest = _objectWithoutPropertiesLoose$6(_omitThemingProps, _excluded$2$4);
  var aliasedProps = filterUndefined({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing
  });
  return /* @__PURE__ */ react.createElement(chakra.p, _extends$9({
    ref,
    className: cx("chakra-text", props.className)
  }, aliasedProps, rest, {
    __css: styles3
  }));
});
var ChakraProvider$1 = ChakraProvider;
ChakraProvider$1.defaultProps = {
  theme
};
function extendTheme() {
  for (var _len = arguments.length, extensions = new Array(_len), _key = 0; _key < _len; _key++) {
    extensions[_key] = arguments[_key];
  }
  var overrides = [].concat(extensions);
  var baseTheme = extensions[extensions.length - 1];
  if (isChakraTheme(baseTheme) && overrides.length > 1) {
    overrides = overrides.slice(0, overrides.length - 1);
  } else {
    baseTheme = theme;
  }
  return pipe.apply(void 0, overrides.map(function(extension) {
    return function(prevTheme) {
      return isFunction(extension) ? extension(prevTheme) : mergeThemeOverride(prevTheme, extension);
    };
  }))(baseTheme);
}
function mergeThemeOverride() {
  for (var _len2 = arguments.length, overrides = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    overrides[_key2] = arguments[_key2];
  }
  return lodash_mergewith.apply(void 0, [{}].concat(overrides, [mergeThemeCustomizer]));
}
function mergeThemeCustomizer(source, override, key, object) {
  if ((isFunction(source) || isFunction(override)) && Object.prototype.hasOwnProperty.call(object, key)) {
    return function() {
      var sourceValue = isFunction(source) ? source.apply(void 0, arguments) : source;
      var overrideValue = isFunction(override) ? override.apply(void 0, arguments) : override;
      return lodash_mergewith({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }
  return void 0;
}

// build/dist/utils/theme.utils.js
var pxToRem = (px3) => {
  const remValue = px3 * 100 / (1080 + 1024 + 512);
  return `${remValue}rem`;
};
var pxToRemSm = (px3) => {
  const remValue = px3 * 100 / (375 + 507 + 187.5);
  return `${remValue}rem`;
};
var funcArr = (px3) => [pxToRemSm(px3 / 1.5), null, pxToRem(px3)];
var pxToAll = (px3, defaultValue = 2) => {
  return funcArr(px3);
};

// build/dist/components/InputTodo.js
function InputTodo({getTodo, handleReset}) {
  const inputRef = react.useRef(null);
  return /* @__PURE__ */ react.createElement(Flex, {
    mt: pxToAll(20),
    w: pxToAll(450),
    wrap: "nowrap",
    direction: "row",
    justify: "center",
    alignItems: "center"
  }, /* @__PURE__ */ react.createElement("form", {
    onSubmit: (e2) => {
      e2.preventDefault();
      const data = Object.fromEntries(new FormData(e2.target).entries());
      getTodo({...data, isCompleted: false, updatedAt: new Date()});
      inputRef.current.value = "";
    }
  }, /* @__PURE__ */ react.createElement(FormControl, {
    isRequired: true
  }, /* @__PURE__ */ react.createElement(Input$1, {
    size: "md",
    name: "todo",
    ref: inputRef
  }))), /* @__PURE__ */ react.createElement(Button, {
    ml: pxToAll(20),
    onClick: handleReset
  }, "Reset"));
}

// build/dist/components/TodoList.js
var resetFilter = {
  isFilter: false,
  filterOn: []
};
function TodoList({todoList, handleClick}) {
  const [filterData, setFilterData] = react.useState(resetFilter);
  const filterTodoList = todoList.filter((todoObj) => {
    const isTuthy = filterData.filterOn.map((value) => todoObj.todo.includes(value));
    return isTuthy.every((value) => value);
  });
  return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", filterData.isFilter && /* @__PURE__ */ react.createElement(Button, {
    onClick: () => setFilterData(resetFilter),
    mt: pxToAll(20)
  }, "Remove Filter"), /* @__PURE__ */ react.createElement(List, {
    mt: pxToAll(20)
  }, filterTodoList.map(({...rest}, idx) => /* @__PURE__ */ react.createElement(Item, {
    key: idx,
    ...rest,
    handleClick,
    handleFilterClick: (filterHash) => setFilterData((prev) => ({
      isFilter: true,
      filterOn: [...prev.filterOn, filterHash]
    }))
  }))));
}
function Item({todo, isCompleted, handleClick, handleFilterClick}) {
  const getText = () => {
    const array = [...todo.matchAll(/[#][\w]+/g)];
    const ele = [];
    if (array.length) {
      for (let i2 = 0; i2 < array.length; i2 += 1) {
        if (i2 == 0) {
          ele.push(/* @__PURE__ */ react.createElement("span", null, todo.substring(0, array[i2]["index"])));
        } else {
          ele.push(/* @__PURE__ */ react.createElement("span", null, todo.substring(array[i2 - 1][0].length + array[i2 - 1]["index"], array[i2]["index"])));
        }
        ele.push(/* @__PURE__ */ react.createElement("span", {
          style: {color: "blue"},
          onClick: (e2) => {
            e2.stopPropagation();
            handleFilterClick(array[i2][0]);
          }
        }, array[i2][0]));
      }
      ele.push(/* @__PURE__ */ react.createElement("span", null, todo.substring(array[array.length - 1][0].length + array[array.length - 1]["index"])));
    } else {
      ele.push(/* @__PURE__ */ react.createElement("span", null, todo));
    }
    return ele;
  };
  return /* @__PURE__ */ react.createElement(ListItem, {
    onClick: () => {
      if (!isCompleted)
        handleClick(todo);
    },
    textDecorationLine: isCompleted ? "line-through" : "none",
    padding: pxToAll(10)
  }, getText());
}

// build/dist/App.js
function App() {
  const [todoList, setTodoList] = react.useState(() => {
    const res = localStorage.getItem("todos");
    if (res != null) {
      const obj = JSON.parse(res);
      return obj.todos;
    }
    return [];
  });
  const handleTodoCompletion = (todoName) => {
    console.log(todoName);
    const findIdx = todoList.findIndex((todoObj) => todoObj.todo === todoName && !todoObj.isCompleted);
    console.log(findIdx);
    setTodoList([
      ...todoList.slice(0, findIdx),
      {
        ...todoList[findIdx],
        isCompleted: true,
        updatedAt: new Date()
      },
      ...todoList.slice(findIdx + 1)
    ]);
  };
  const s1 = todoList.filter((todo) => !todo.isCompleted).sort((a2, b2) => b2.updatedAt - a2.updatedAt);
  const s2 = todoList.filter((todo) => todo.isCompleted).sort((a2, b2) => b2.updatedAt - a2.updatedAt);
  return /* @__PURE__ */ react.createElement(Flex, {
    direction: "column",
    height: "100vh",
    alignItems: "center"
  }, /* @__PURE__ */ react.createElement(Text, {
    textStyle: "h4"
  }, "Todo App"), /* @__PURE__ */ react.createElement(InputTodo, {
    getTodo: (todo) => {
      setTodoList((prev) => {
        localStorage.setItem("todos", JSON.stringify({todos: [todo, ...prev]}));
        return [todo, ...prev];
      });
    },
    handleReset: () => {
      setTodoList([]);
      localStorage.setItem("todos", JSON.stringify({todos: []}));
    }
  }), /* @__PURE__ */ react.createElement(TodoList, {
    todoList: [...s1, ...s2],
    handleClick: handleTodoCompletion
  }));
}

// build/dist/theme/foundations/typography.js
var typography2 = {
  fonts: {
    heading: `"Nunito Sans", sans-serif`,
    body: `"Nunito Sans", sans-serif`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  }
};
var typography_default = typography2;

// build/dist/theme/foundations/breakpoints.js
var breakpoints2 = {
  base: "0px",
  sm: "375px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  "2xl": "2560px"
};
var breakpoints_default = breakpoints2;

// build/dist/theme/styles.global.js
var styles2 = {
  global: (props) => {
    return {
      html: {
        fontSize: props.colorMode === "light" ? `calc(1vw + 1vh + .5vmin)` : `calc(1vw + 1vh + .5vmin)`,
        transition: "all 0.25s"
      },
      body: {
        color: props.colorMode === "light" ? "green.700" : "text.primary",
        bgGradient: props.colorMode === "light" ? "linear(to-t, green.200, green.500)" : "linear(to-t,brand.secondary 50%, brand.primary 100%)"
      }
    };
  }
};
var styles_global_default = styles2;

// build/dist/theme/components/CustomItem.js
var tab = (br = "50%", dur = "0.25") => ({
  textAlign: "center",
  _before: {
    pos: "absolute",
    overflow: "hidden",
    top: "50%",
    left: "50%",
    bottom: "50%",
    right: "50%",
    content: '""',
    bg: "text.secondary",
    borderRadius: br,
    opacity: 0.5
  },
  _active: {
    transitionProperty: "initial",
    color: "text.secondary",
    _before: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      opacity: 0,
      transition: `all ${dur}s cubic-bezier(.13,.94,.13,.95)`
    }
  }
});
var CustomItem = {
  baseStyle: {
    pos: "relative"
  },
  sizes: {
    md: {
      fontSize: pxToAll(18),
      fontWeight: "bold",
      lineHeight: 1.25,
      p: pxToAll(10)
    },
    sm: {
      fontSize: pxToAll(18),
      fontWeight: "normal",
      lineHeight: 1.25,
      p: pxToAll(10)
    }
  },
  variants: {
    item: {
      cursor: "pointer",
      _hover: {
        transition: "color 0.5s",
        color: "text.secondary"
      }
    },
    tab: tab(),
    card: {
      borderRadius: "10px",
      ...tab("10px", "0.5")
    }
  },
  defaultProps: {
    size: "md",
    variant: "item"
  }
};
var CustomItem_default = CustomItem;

// build/dist/theme/components/Button.js
var Button2 = {
  baseStyle: {
    bg: "brand.secondary",
    borderRadius: "25px",
    pos: "relative",
    cursor: "auto"
  },
  sizes: {
    md: {
      fontSize: pxToAll(18),
      lineHeight: 1.25,
      px: pxToAll(15),
      py: pxToAll(10),
      height: "max-content",
      minWidth: "max-content"
    },
    mdlg: {
      fontSize: pxToAll(20),
      height: pxToAll(40),
      minWidth: pxToAll(40),
      borderRadius: "50%"
    },
    xl: {
      height: pxToAll(60),
      fontSize: pxToAll(24),
      minWidth: pxToAll(60),
      borderRadius: "50%"
    },
    lg: {
      height: pxToAll(50),
      fontSize: pxToAll(24),
      minWidth: pxToAll(50),
      borderRadius: "50%"
    }
  },
  variants: {
    normal: {
      boxShadow: `0 0 5px rgba(0,0,0, 0.36)`,
      transitionProperty: "initial",
      _hover: {
        bg: "shade.hoverPrimary"
      },
      _focus: {
        boxShadow: "none"
      },
      _before: {
        pos: "absolute",
        overflow: "hidden",
        top: "50%",
        left: "50%",
        bottom: "50%",
        right: "50%",
        content: '""',
        bg: "text.secondary",
        borderRadius: "25px"
      },
      _active: {
        transitionProperty: "initial",
        color: "text.secondary",
        _before: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          opacity: 0,
          transition: "all 0.5s cubic-bezier(.13,.94,.13,.95)"
        }
      }
    }
  },
  defaultProps: {
    size: "md",
    variant: "normal"
  }
};
var Button_default = Button2;

// build/dist/theme/foundations/colors.js
var colors2 = {
  shade: {
    primary: "rgba(0, 0, 0, 0.36)",
    secondary: "#1D4044",
    hoverPrimary: "rgba(255, 255, 255, 0.06)"
  },
  brand: {
    primary: "#2c5282",
    secondary: "#2d3748"
  },
  text: {
    primary: "#A0AEC0",
    secondary: "#CBD5E0",
    disabled: "#718096",
    play: "#4299e1"
  }
};
var colors_default = colors2;

// build/dist/theme/components/Input.js
var Input2 = {
  baseStyle: {
    field: {
      transitionProperty: "initial"
    }
  },
  sizes: {
    md: {
      field: {
        fontSize: pxToAll(18),
        h: pxToAll(50),
        px: pxToAll(15),
        py: pxToAll(15)
      }
    }
  },
  variants: {
    normal: {
      field: {
        bg: "shade.primary",
        borderRadius: "25px",
        _focus: {
          boxShadow: `0 0 5px rgba(0,0,0,0.5)`
        }
      }
    }
  },
  defaultProps: {
    size: "md",
    variant: "normal"
  }
};
var Input_default = Input2;

// build/dist/theme/index.theme.js
var theme2 = extendTheme({
  breakpoints: breakpoints_default,
  ...typography_default,
  colors: colors_default,
  components: {
    CustomItem: CustomItem_default,
    Button: Button_default,
    Input: Input_default,
    Text: {
      baseStyle: {
        userSelect: "none"
      }
    }
  },
  layerStyles: {
    selected: {
      bg: "shade.secondary",
      borderRadius: "5px",
      color: "text.secondary"
    },
    hover: {
      _hover: {
        transform: "scale(1.1)",
        color: "text.secondary",
        transition: "all 0.25s"
      }
    },
    iconDisabled: {
      color: "text.disabled",
      cursor: "not-allowed"
    },
    iconActive: {
      color: "text.secondary"
    }
  },
  textStyles: {
    h2: {
      fontSize: pxToRem(80),
      fontWeight: "bold",
      lineHeight: 2,
      letterSpacing: "tighter"
    },
    h3: {
      fontSize: pxToAll(36),
      fontWeight: "bold",
      lineHeight: 1.5
    },
    h4: {
      fontSize: pxToAll(32),
      fontWeight: "bold",
      lineHeight: 1.5
    },
    h5: {
      fontSize: pxToAll(26),
      fontWeight: "bold",
      lineHeight: 1.5
    },
    h6: {
      fontSize: pxToAll(20.5),
      fontWeight: "normal",
      lineHeight: 1.25
    },
    label: {
      fontSize: pxToAll(16.5),
      fontWeight: "normal",
      lineHeight: 1.25
    },
    p: {
      fontSize: pxToAll(14),
      fontWeight: "normal",
      lineHeight: 1.25
    },
    icon: {
      lg: {
        fontSize: pxToAll(40)
      },
      md: {
        fontSize: pxToAll(24)
      },
      sm: {
        fontSize: pxToAll(18)
      }
    }
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  },
  styles: styles_global_default
});
var index_theme_default = theme2;

// build/dist/index.js
reactDom.render(/* @__PURE__ */ react.createElement(react.StrictMode, null, /* @__PURE__ */ react.createElement(ChakraProvider$1, {
  theme: index_theme_default
}, /* @__PURE__ */ react.createElement(ColorModeScript, {
  initialColorMode: index_theme_default.config.initialColorMode
}), /* @__PURE__ */ react.createElement(App, null))), document.getElementById("root"));
//# sourceMappingURL=index.js.map
