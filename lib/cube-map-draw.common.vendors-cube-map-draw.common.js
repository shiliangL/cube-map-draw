((typeof self !== 'undefined' ? self : this)["webpackJsonpcube_map_draw"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpcube_map_draw"] || []).push([[4],{

/***/ "06c5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _unsupportedIterableToArray; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

/***/ }),

/***/ "262e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "2caf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _createSuper; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("4ae1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__("3410");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js



function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (Object(esm_typeof["a" /* default */])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js




function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/***/ }),

/***/ "35eb":
/***/ (function(module, exports, __webpack_require__) {

(function (root, factory) {  
  if (true) {  
      module.exports = factory();
  } else {}  
})(this, function() {
  function CurveLine(points, opts) {
    try {
      BMap;
    } catch (e) {
      throw Error('Baidu Map JS API is not ready yet!');
    }
    var self = this;
    var curvePoints = getCurvePoints(points);
    var polyline = new BMap.Polyline(curvePoints, opts);

    polyline.addEventListener('lineupdate', function(){
      if (this.isEditing) {
        this.enableEditing();
      }
    });

    polyline.cornerPoints = points;
    polyline.editMarkers = []; //缂栬緫鍔熻兘鐨勯《鐐�

    /**
     * 閲嶅啓寮х嚎鐨勭紪杈戝姛鑳�
     */
    polyline.enableEditing = function () {
      var self = this;

      if (self.map) {
        self.disableEditing();
        for (var i = 0; i < self.cornerPoints.length; i++) {
          var marker = new BMap.Marker(self.cornerPoints[i], {
            icon: new BMap.Icon('http://api.map.baidu.com/library/CurveLine/1.5/src/circle.png', new BMap.Size(16,16)),
            enableDragging: true,
            raiseOnDrag: true
          });
          marker.addEventListener('dragend', function(){
            self.cornerPoints.length = 0;
            for (var i = 0; i < self.editMarkers.length; i++) {
              self.cornerPoints.push(self.editMarkers[i].getPosition());
            }
            var curvePoints = getCurvePoints(self.cornerPoints)
            self.setPath(curvePoints);
          });
          marker.index = i;
          self.editMarkers.push(marker);
          self.map.addOverlay(marker);
        }
      }
      self.isEditing = true;
    }

    /**
     * 閲嶅啓寮х嚎鐨勭紪杈戝姛鑳�
     */
    polyline.disableEditing = function() {
      this.isEditing = false;
      //娓呯┖涔嬪墠鐨勭紪杈戠偣
      for (var i = 0; i < this.editMarkers.length; i++) {
        this.map.removeOverlay(this.editMarkers[i]);
        this.editMarkers[i] = null;
      }
      this.editMarkers.length = 0;
    }

    /**
     * 鑾峰彇寮х嚎鐨勫潗鏍囩偣
     */
    polyline.getPath = function() {
      return curvePoints;
    }

    // polyline.points = points; //寮х嚎鐨勫潗鏍囬《鐐�
    // polyline.enableEditing = enableEditing;
    // polyline.disableEditing = disableEditing;
    // polyline.getPath = getPath;
    return polyline;
  }

  function extend(child, parent) {
    for (var p in parent) {
      if (parent.hasOwnProperty(p)) {
        child[p] = parent[p];
      }
    }
    
    return child;
  };

  function getCurvePoints(points) {
    var curvePoints = [];
    for (var i = 0; i < points.length - 1; i++) {
      var p = getCurveByTwoPoints(points[i], points[i + 1]);
      if (p && p.length > 0) {
        curvePoints = curvePoints.concat(p);
      }
    }
    return curvePoints;
  }

  function getCurveByTwoPoints(obj1, obj2) {
    var curveCoordinates = [];
    if (!obj1 || !obj2 || !(obj1 instanceof BMap.Point) || !(obj2 instanceof BMap.Point)) {
      return null;
    }

    var B1 = function(x) {
      return 1 - 2 * x + x * x;
    };
    var B2 = function(x) {
      return 2 * x - 2 * x * x;
    };
    var B3 = function(x) {
      return x * x;
    };

    var count=30; // 鏇茬嚎鏄敱涓€浜涘皬鐨勭嚎娈电粍鎴愮殑锛岃繖涓〃绀鸿繖涓洸绾挎墍鏈夊埌鐨勬姌绾跨殑涓暟
    var isFuture=false;
    var t, h, h2, lat3, lng3, j, t2;
    var LnArray = [];
    var i = 0;
    var inc = 0;

    if (typeof(obj2) == "undefined") {
      if (typeof(curveCoordinates) != "undefined") {
        curveCoordinates = [];
      }
      return;
    }

    var lat1 = parseFloat(obj1.lat);
    var lat2 = parseFloat(obj2.lat);
    var lng1 = parseFloat(obj1.lng);
    var lng2 = parseFloat(obj2.lng);
      
    // 璁＄畻鏇茬嚎瑙掑害鐨勬柟娉�
    if (lng2 > lng1) {
      if (parseFloat(lng2-lng1) > 180) {
        if (lng1 < 0) {
          lng1 = parseFloat(180 + 180 + lng1);
        }
      }
    }
    
    if (lng1 > lng2) {
      if (parseFloat(lng1-lng2) > 180) {
        if (lng2 < 0) {
          lng2 = parseFloat(180 + 180 + lng2);
        }
      }
    }
    j = 0;
    t2 = 0;
    if (lat2 == lat1) {
      t = 0;
      h = lng1 - lng2;
    } else if (lng2 == lng1) {
      t = Math.PI / 2;
      h = lat1 - lat2;
    } else {
      t = Math.atan((lat2 - lat1) / (lng2 - lng1));
      h = (lat2 - lat1) / Math.sin(t);
    }
    if (t2 == 0) {
      t2 = (t + (Math.PI / 5));
    }
    h2 = h / 2;
    lng3 = h2 * Math.cos(t2) + lng1;
    lat3 = h2 * Math.sin(t2) + lat1;

    for (i = 0; i < count + 1; i++) {
      curveCoordinates.push(new BMap.Point(
        (lng1 * B1(inc) + lng3 * B2(inc)) + lng2 * B3(inc),
        (lat1 * B1(inc) + lat3 * B2(inc) + lat2 * B3(inc))
      ));
      inc = inc + (1 / count);
    }
    return curveCoordinates;
  }
  return CurveLine;
});


/***/ }),

/***/ "3835":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js







function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js + 1 modules
var unsupportedIterableToArray = __webpack_require__("06c5");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "4b0c":
/***/ (function(module, exports, __webpack_require__) {

(function (root, factory) {  
    if (true) {  
        module.exports = factory();
    } else {}  
})(this, function() {
    var baidu = {};
    baidu.dom = {};
    baidu.dom.g = function(id) {
        if ('string' == typeof id || id instanceof String) {
            return document.getElementById(id);
        } else if (id && id.nodeName && (id.nodeType == 1 || id.nodeType == 9)) {
            return id;
        }
        return null;
    };
    baidu.g = baidu.G = baidu.dom.g;
    baidu.lang = baidu.lang || {};
    baidu.lang.isString = function(source) {
        return '[object String]' == Object.prototype.toString.call(source);
    };
    baidu.isString = baidu.lang.isString;
    baidu.dom._g = function(id) {
        if (baidu.lang.isString(id)) {
            return document.getElementById(id);
        }
        return id;
    };
    baidu._g = baidu.dom._g;
    baidu.dom.getDocument = function(element) {
        element = baidu.dom.g(element);
        return element.nodeType == 9 ? element : element.ownerDocument || element.document;
    };
    baidu.browser = baidu.browser || {};
    baidu.browser.ie = baidu.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || + RegExp['\x241']) : undefined;
    baidu.dom.getComputedStyle = function(element, key) {
        element = baidu.dom._g(element);
        var doc = baidu.dom.getDocument(element),
            styles;
        if (doc.defaultView && doc.defaultView.getComputedStyle) {
            styles = doc.defaultView.getComputedStyle(element, null);
            if (styles) {
                return styles[key] || styles.getPropertyValue(key);
            }
        }
        return '';
    };
    baidu.dom._styleFixer = baidu.dom._styleFixer || {};
    baidu.dom._styleFilter = baidu.dom._styleFilter || [];
    baidu.dom._styleFilter.filter = function(key, value, method) {
        for (var i = 0, filters = baidu.dom._styleFilter, filter; filter = filters[i]; i++) {
            if (filter = filter[method]) {
                value = filter(key, value);
            }
        }
        return value;
    };
    baidu.string = baidu.string || {};
    baidu.string.toCamelCase = function(source) {

        if (source.indexOf('-') < 0 && source.indexOf('_') < 0) {
            return source;
        }
        return source.replace(/[-_][^-_]/g, function(match) {
            return match.charAt(1).toUpperCase();
        });
    };
    baidu.dom.getStyle = function(element, key) {
        var dom = baidu.dom;
        element = dom.g(element);
        key = baidu.string.toCamelCase(key);

        var value = element.style[key] ||
                    (element.currentStyle ? element.currentStyle[key] : '') ||
                    dom.getComputedStyle(element, key);

        if (!value) {
            var fixer = dom._styleFixer[key];
            if (fixer) {
                value = fixer.get ? fixer.get(element) : baidu.dom.getStyle(element, fixer);
            }
        }

        if (fixer = dom._styleFilter) {
            value = fixer.filter(key, value, 'get');
        }
        return value;
    };
    baidu.getStyle = baidu.dom.getStyle;
    baidu.dom._NAME_ATTRS = (function() {
        var result = {
            'cellpadding': 'cellPadding',
            'cellspacing': 'cellSpacing',
            'colspan': 'colSpan',
            'rowspan': 'rowSpan',
            'valign': 'vAlign',
            'usemap': 'useMap',
            'frameborder': 'frameBorder'
        };

        if (baidu.browser.ie < 8) {
            result['for'] = 'htmlFor';
            result['class'] = 'className';
        } else {
            result['htmlFor'] = 'for';
            result['className'] = 'class';
        }

        return result;
    })();
    baidu.dom.setAttr = function(element, key, value) {
        element = baidu.dom.g(element);
        if ('style' == key) {
            element.style.cssText = value;
        } else {
            key = baidu.dom._NAME_ATTRS[key] || key;
            element.setAttribute(key, value);
        }
        return element;
    };
    baidu.setAttr = baidu.dom.setAttr;
    baidu.dom.setAttrs = function(element, attributes) {
        element = baidu.dom.g(element);
        for (var key in attributes) {
            baidu.dom.setAttr(element, key, attributes[key]);
        }
        return element;
    };
    baidu.setAttrs = baidu.dom.setAttrs;
    baidu.dom.create = function(tagName, opt_attributes) {
        var el = document.createElement(tagName),
            attributes = opt_attributes || {};
        return baidu.dom.setAttrs(el, attributes);
    };
    baidu.object = baidu.object || {};
    baidu.extend =
    baidu.object.extend = function(target, source) {
        for (var p in source) {
            if (source.hasOwnProperty(p)) {
                target[p] = source[p];
            }
        }
        return target;
    };

    /**
     * @exports LuShu as BMapLib.LuShu
     */
    var LuShu = function(map, path, opts) {
        try {
            BMap;
        } catch (e) {
            throw Error('Baidu Map JS API is not ready yet!');
        }
        if (!path || path.length < 1) {
            return;
        }
        this._map = map;
        this._path = path;
        this.i = 0;
        this._setTimeoutQuene = [];
        this._projection = this._map.getMapType().getProjection();
        this._opts = {
            icon: null,
            speed: 4000,
            defaultContent: '',
            showInfoWindow: false
        };
        this._setOptions(opts);
        this._rotation = 0;

        if (!this._opts.icon instanceof BMap.Icon) {
            this._opts.icon = defaultIcon;
        }
    }
    LuShu.prototype._setOptions = function(opts) {
        if (!opts) {
            return;
        }
        for (var p in opts) {
            if (opts.hasOwnProperty(p)) {
                this._opts[p] = opts[p];
            }
        }
    }
    LuShu.prototype.start = function() {
        var me = this,
            len = me._path.length;
        this._opts.onstart && this._opts.onstart(me)
        if (me.i && me.i < len - 1) {
            if (!me._fromPause) {
                return;
            }else if(!me._fromStop){
	            me._moveNext(++me.i);
            }
        }else {
            !me._marker && me._addMarker();
            me._timeoutFlag = setTimeout(function() {
                    !me._overlay && me._addInfoWin();
                    me._moveNext(me.i);
            },400);
        }
        this._fromPause = false;
        this._fromStop = false;
    },
    LuShu.prototype.stop = function() {
        this.i = 0;
        this._fromStop = true;
        clearInterval(this._intervalFlag);
        this._clearTimeout();
        for (var i = 0, t = this._opts.landmarkPois, len = t.length; i < len; i++) {
            t[i].bShow = false;
        }
        this._opts.onstop && this._opts.onstop(this)
    };
    LuShu.prototype.pause = function() {
        clearInterval(this._intervalFlag);
        this._fromPause = true;
        this._clearTimeout();
        this._opts.onpause && this._opts.onpause(this)
    };
    LuShu.prototype.hideInfoWindow = function() {
        this._opts.showInfoWindow = false;
        this._overlay && (this._overlay._div.style.visibility = 'hidden');
    };
    LuShu.prototype.showInfoWindow = function() {
        this._opts.showInfoWindow = true;
        this._overlay && (this._overlay._div.style.visibility = 'visible');
    };
    LuShu.prototype.dispose = function () {
        clearInterval(this._intervalFlag);
        this._setTimeoutQuene && this._clearTimeout();
        if (this._map) {
            this._map.removeOverlay(this._overlay);
            this._map.removeOverlay(this._marker);
        }
    };
    baidu.object.extend(LuShu.prototype, {
        _addMarker: function(callback) {
            if (this._marker) {
                this.stop();
                this._map.removeOverlay(this._marker);
                clearTimeout(this._timeoutFlag);
            }
            this._overlay && this._map.removeOverlay(this._overlay);
            var marker = new BMap.Marker(this._path[0]);
            this._opts.icon && marker.setIcon(this._opts.icon);
            this._map.addOverlay(marker);
            marker.setAnimation(BMAP_ANIMATION_DROP);
            this._marker = marker;
        },
        _addInfoWin: function() {
            var me = this;
            !CustomOverlay.prototype.initialize && initCustomOverlay();
            var overlay = new CustomOverlay(me._marker.getPosition(), me._opts.defaultContent);
            overlay.setRelatedClass(this);
            this._overlay = overlay;
            this._map.addOverlay(overlay);
            this._opts.showInfoWindow ? this.showInfoWindow() : this.hideInfoWindow()
        },
        _getMercator: function(poi) {
            return this._map.getMapType().getProjection().lngLatToPoint(poi);
        },
        _getDistance: function(pxA, pxB) {
            return Math.sqrt(Math.pow(pxA.x - pxB.x, 2) + Math.pow(pxA.y - pxB.y, 2));
        },
        _move: function(initPos,targetPos,effect) {
            var me = this,
                currentCount = 0,
                timer = 10,
                step = this._opts.speed / (1000 / timer),
                init_pos = this._projection.lngLatToPoint(initPos),
                target_pos = this._projection.lngLatToPoint(targetPos),
                count = Math.round(me._getDistance(init_pos, target_pos) / step);
            if (count < 1) {
                me._moveNext(++me.i);
                return;
            }
            me._intervalFlag = setInterval(function() {
	            if (currentCount >= count) {
	                clearInterval(me._intervalFlag);
		        	if(me.i > me._path.length){
						return;
		        	}
	                me._moveNext(++me.i);
	            } else {
                    currentCount++;
                    var x = effect(init_pos.x, target_pos.x, currentCount, count),
                        y = effect(init_pos.y, target_pos.y, currentCount, count),
                        pos = me._projection.pointToLngLat(new BMap.Pixel(x, y));
                    if(currentCount == 1){
                        var proPos = null;
                        if(me.i - 1 >= 0){
                            proPos = me._path[me.i - 1];
                        }
                        if(me._opts.enableRotation == true){
                            me.setRotation(proPos,initPos,targetPos);
                        }
                        if(me._opts.autoView){
                            if(!me._map.getBounds().containsPoint(pos)){
                                me._map.setCenter(pos);
                            }   
                        }
                    }
                    me._marker.setPosition(pos);
                    me._setInfoWin(pos);
                }
	        },timer);
        },
        setRotation : function(prePos,curPos,targetPos){
            var me = this;
            var deg = 0;
            //start!
            curPos =  me._map.pointToPixel(curPos);
            targetPos =  me._map.pointToPixel(targetPos);   

            if(targetPos.x != curPos.x){
                var tan = (targetPos.y - curPos.y)/(targetPos.x - curPos.x),
                atan  = Math.atan(tan);
                deg = atan*360/(2*Math.PI);
                //degree  correction;
                if(targetPos.x < curPos.x){
                    deg = -deg + 90 + 90;

                } else {
                    deg = -deg;
                }

                me._marker.setRotation(-deg);   

            }else {
                var disy = targetPos.y- curPos.y ;
                var bias = 0;
                if(disy > 0)
                    bias=-1
                else
                    bias = 1
                me._marker.setRotation(-bias * 90);  
            }
            return;
        },
        linePixellength : function(from,to){ 
            return Math.sqrt(Math.abs(from.x- to.x) * Math.abs(from.x- to.x) + Math.abs(from.y- to.y) * Math.abs(from.y- to.y) );
        },
        pointToPoint : function(from,to ){
            return Math.abs(from.x- to.x) * Math.abs(from.x- to.x) + Math.abs(from.y- to.y) * Math.abs(from.y- to.y)
        },
        _moveNext: function(index) {
            var me = this;
            if (index < this._path.length - 1) {
                me._move(me._path[index], me._path[index + 1], me._tween.linear);
            } else {
                me.stop()
            }
        },
        _setInfoWin: function(pos) {
            var me = this;
            me._overlay.setPosition(pos, me._marker.getIcon().size);
            var index = me._troughPointIndex(pos);
            if (index != -1) {
                clearInterval(me._intervalFlag);
                me._overlay.setHtml(me._opts.landmarkPois[index].html);
                me._overlay.setPosition(pos, me._marker.getIcon().size);
                me._pauseForView(index);
            }else {
                me._overlay.setHtml(me._opts.defaultContent);
            }
        },
        _pauseForView: function(index) {
            var me = this;
            var t = setTimeout(function() {
                me._moveNext(++me.i);
            },me._opts.landmarkPois[index].pauseTime * 1000);
            me._setTimeoutQuene.push(t);
        },
        _clearTimeout: function() {
            for (var i in this._setTimeoutQuene) {
                clearTimeout(this._setTimeoutQuene[i]);
            }
            this._setTimeoutQuene.length = 0;
        },
        _tween: {
            linear: function(initPos, targetPos, currentCount, count) {
                var b = initPos, c = targetPos - initPos, t = currentCount,
                d = count;
                return c * t / d + b;
            }
        },
        _troughPointIndex: function(markerPoi) {
            var t = this._opts.landmarkPois, distance;
            for (var i = 0, len = t.length; i < len; i++) {
                if (!t[i].bShow) {
                    distance = this._map.getDistance(new BMap.Point(t[i].lng, t[i].lat), markerPoi);
                    if (distance < 10) {
                        t[i].bShow = true;
                        return i;
                    }
                }
            }
           return -1;
        }
    });
    function CustomOverlay(point,html) {
        this._point = point;
        this._html = html;
    }

    function initCustomOverlay() {
        CustomOverlay.prototype = new BMap.Overlay();
        CustomOverlay.prototype.initialize = function(map) {
            var div = this._div = baidu.dom.create('div', {style: 'border:solid 1px #ccc;width:auto;min-width:50px;text-align:center;position:absolute;background:#fff;color:#000;font-size:12px;border-radius: 10px;padding:5px;white-space: nowrap;'});
            div.innerHTML = this._html;
            map.getPanes().floatPane.appendChild(div);
            this._map = map;
            return div;
        }
        CustomOverlay.prototype.draw = function() {
            this.setPosition(this.lushuMain._marker.getPosition(), this.lushuMain._marker.getIcon().size);
        }
        baidu.object.extend(CustomOverlay.prototype, {
            setPosition: function(poi,markerSize) {
                var px = this._map.pointToOverlayPixel(poi),
                    styleW = baidu.dom.getStyle(this._div, 'width'),
                    styleH = baidu.dom.getStyle(this._div, 'height'),
                    overlayW = parseInt(this._div.clientWidth || styleW, 10),
                    overlayH = parseInt(this._div.clientHeight || styleH, 10);
                this._div.style.left = px.x - overlayW / 2 + 'px';
                this._div.style.bottom = -(px.y - markerSize.height) + 'px';
            },
            setHtml: function(html) {
                this._div.innerHTML = html;
            },
            setRelatedClass: function(lushuMain) {
                this.lushuMain = lushuMain;
            }
        });
    }

    return LuShu
});


/***/ }),

/***/ "53ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4d3");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e01a");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d28b");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("e260");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3ca3");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "5530":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _objectSpread2; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "57ff":
/***/ (function(module, exports, __webpack_require__) {

(function (root, factory) {  
    if (true) {  
        module.exports = factory();
    } else {}  
})(this, function() {
    function inherits (subClass, superClass, className) {
        var key, proto,
            selfProps = subClass.prototype,
            clazz = new Function();

        clazz.prototype = superClass.prototype;
        proto = subClass.prototype = new clazz();
        for (key in selfProps) {
            proto[key] = selfProps[key];
        }
        subClass.prototype.constructor = subClass;
        subClass.superClass = superClass.prototype;

        // 类名标识，兼容Class的toString，基本没用
        if ("string" == typeof className) {
            proto._className = className;
        }
    };
    var heatmapFactory = (function(){
        // store object constructor
        // a heatmap contains a store
        // the store has to know about the heatmap in order to trigger heatmap updates when datapoints get added
        var store = function store(hmap){

            var _ = {
                // data is a two dimensional array
                // a datapoint gets saved as data[point-x-value][point-y-value]
                // the value at [point-x-value][point-y-value] is the occurrence of the datapoint
                data: [],
                // tight coupling of the heatmap object
                heatmap: hmap
            };
            // the max occurrence - the heatmaps radial gradient alpha transition is based on it
            this.max = 1;

            this.get = function(key){
                return _[key];
            };
            this.set = function(key, value){
                _[key] = value;
            };
        }

        store.prototype = {
            // function for adding datapoints to the store
            // datapoints are usually defined by x and y but could also contain a third parameter which represents the occurrence
            addDataPoint: function(x, y){
                if(x < 0 || y < 0)
                    return;

                var me = this,
                    heatmap = me.get("heatmap"),
                    data = me.get("data");

                if(!data[x])
                    data[x] = [];

                if(!data[x][y])
                    data[x][y] = 0;

                // if count parameter is set increment by count otherwise by 1
                data[x][y]+=(arguments.length<3)?1:arguments[2];
                
                me.set("data", data);
                // do we have a new maximum?
                if(me.max < data[x][y]){
                    // max changed, we need to redraw all existing(lower) datapoints
                    heatmap.get("actx").clearRect(0,0,heatmap.get("width"),heatmap.get("height"));
                    me.setDataSet({ max: data[x][y], data: data }, true);
                    return;
                }
                heatmap.drawAlpha(x, y, data[x][y], true);
            },
            setDataSet: function(obj, internal){
                var me = this,
                    heatmap = me.get("heatmap"),
                    data = [],
                    d = obj.data,
                    dlen = d.length;
                // clear the heatmap before the data set gets drawn
                heatmap.clear();
                this.max = obj.max;
                // if a legend is set, update it
                heatmap.get("legend") && heatmap.get("legend").update(obj.max);
                
                if(internal != null && internal){
                    for(var one in d){
                        // jump over undefined indexes
                        if(one === undefined)
                            continue;
                        for(var two in d[one]){
                            if(two === undefined)
                                continue;
                            // if both indexes are defined, push the values into the array
                            heatmap.drawAlpha(one, two, d[one][two], false);   
                        }
                    }
                }else{
                    while(dlen--){
                        var point = d[dlen];
                        heatmap.drawAlpha(point.x, point.y, point.count, false);
                        if(!data[point.x])
                            data[point.x] = [];

                        if(!data[point.x][point.y])
                            data[point.x][point.y] = 0;

                        data[point.x][point.y] = point.count;
                    }
                }
                heatmap.colorize();
                this.set("data", d);
            },
            exportDataSet: function(){
                var me = this,
                    data = me.get("data"),
                    exportData = [];

                for(var one in data){
                    // jump over undefined indexes
                    if(one === undefined)
                        continue;
                    for(var two in data[one]){
                        if(two === undefined)
                            continue;
                        // if both indexes are defined, push the values into the array
                        exportData.push({x: parseInt(one, 10), y: parseInt(two, 10), count: data[one][two]});
                    }
                }

                return { max: me.max, data: exportData };
            },
            generateRandomDataSet: function(points){
                var heatmap = this.get("heatmap"),
                w = heatmap.get("width"),
                h = heatmap.get("height");
                var randomset = {},
                max = Math.floor(Math.random()*1000+1);
                randomset.max = max;
                var data = [];
                while(points--){
                    data.push({x: Math.floor(Math.random()*w+1), y: Math.floor(Math.random()*h+1), count: Math.floor(Math.random()*max+1)});
                }
                randomset.data = data;
                this.setDataSet(randomset);
            }
        };

        var legend = function legend(config){
            this.config = config;

            var _ = {
                element: null,
                labelsEl: null,
                gradientCfg: null,
                ctx: null
            };
            this.get = function(key){
                return _[key];
            };
            this.set = function(key, value){
                _[key] = value;
            };
            this.init();
        };
        legend.prototype = {
            init: function(){
                var me = this,
                    config = me.config,
                    title = config.title || "Legend",
                    position = config.position,
                    offset = config.offset || 10,
                    gconfig = config.gradient,
                    labelsEl = document.createElement("ul"),
                    labelsHtml = "",
                    grad, element, gradient, positionCss = "";

                me.processGradientObject();
                
                // Positioning

                // top or bottom
                if(position.indexOf('t') > -1){
                    positionCss += 'top:'+offset+'px;';
                }else{
                    positionCss += 'bottom:'+offset+'px;';
                }

                // left or right
                if(position.indexOf('l') > -1){
                    positionCss += 'left:'+offset+'px;';
                }else{
                    positionCss += 'right:'+offset+'px;';
                }

                element = document.createElement("div");
                element.style.cssText = "border-radius:5px;position:absolute;"+positionCss+"font-family:Helvetica; width:256px;z-index:10000000000; background:rgba(255,255,255,1);padding:10px;border:1px solid black;margin:0;";
                element.innerHTML = "<h3 style='padding:0;margin:0;text-align:center;font-size:16px;'>"+title+"</h3>";
                // create gradient in canvas
                labelsEl.style.cssText = "position:relative;font-size:12px;display:block;list-style:none;list-style-type:none;margin:0;height:15px;";
                

                // create gradient element
                gradient = document.createElement("div");
                gradient.style.cssText = ["position:relative;display:block;width:256px;height:15px;border-bottom:1px solid black; background-image:url(",me.createGradientImage(),");"].join("");

                element.appendChild(labelsEl);
                element.appendChild(gradient);
                
                me.set("element", element);
                me.set("labelsEl", labelsEl);

                me.update(1);
            },
            processGradientObject: function(){
                // create array and sort it
                var me = this,
                    gradientConfig = this.config.gradient,
                    gradientArr = [];

                for(var key in gradientConfig){
                    if(gradientConfig.hasOwnProperty(key)){
                        gradientArr.push({ stop: key, value: gradientConfig[key] });
                    }
                }
                gradientArr.sort(function(a, b){
                    return (a.stop - b.stop);
                });
                gradientArr.unshift({ stop: 0, value: 'rgba(0,0,0,0)' });

                me.set("gradientArr", gradientArr);
            },
            createGradientImage: function(){
                var me = this,
                    gradArr = me.get("gradientArr"),
                    length = gradArr.length,
                    canvas = document.createElement("canvas"),
                    ctx = canvas.getContext("2d"),
                    grad;
                // the gradient in the legend including the ticks will be 256x15px
                canvas.width = "256";
                canvas.height = "15";

                grad = ctx.createLinearGradient(0,5,256,10);

                for(var i = 0; i < length; i++){
                    grad.addColorStop(1/(length-1) * i, gradArr[i].value);
                }

                ctx.fillStyle = grad;
                ctx.fillRect(0,5,256,10);
                ctx.strokeStyle = "black";
                ctx.beginPath();

                for(var i = 0; i < length; i++){
                    ctx.moveTo(((1/(length-1)*i*256) >> 0)+.5, 0);
                    ctx.lineTo(((1/(length-1)*i*256) >> 0)+.5, (i==0)?15:5);
                }
                ctx.moveTo(255.5, 0);
                ctx.lineTo(255.5, 15);
                ctx.moveTo(255.5, 4.5);
                ctx.lineTo(0, 4.5);
                
                ctx.stroke();

                // we re-use the context for measuring the legends label widths
                me.set("ctx", ctx);

                return canvas.toDataURL();
            },
            getElement: function(){
                return this.get("element");
            },
            update: function(max){
                var me = this,
                    gradient = me.get("gradientArr"),
                    ctx = me.get("ctx"),
                    labels = me.get("labelsEl"),
                    labelText, labelsHtml = "", offset;

                for(var i = 0; i < gradient.length; i++){

                    labelText = max*gradient[i].stop >> 0;
                    offset = (ctx.measureText(labelText).width/2) >> 0;

                    if(i == 0){
                        offset = 0;
                    }
                    if(i == gradient.length-1){
                        offset *= 2;
                    }
                    labelsHtml += '<li style="position:absolute;left:'+(((((1/(gradient.length-1)*i*256) || 0)) >> 0)-offset+.5)+'px">'+labelText+'</li>';
                }       
                labels.innerHTML = labelsHtml;
            }
        };

        // heatmap object constructor
        var heatmap = function heatmap(config){
            // private variables
            var _ = {
                radius : 40,
                element : {},
                canvas : {},
                acanvas: {},
                ctx : {},
                actx : {},
                legend: null,
                visible : true,
                width : 0,
                height : 0,
                max : false,
                gradient : false,
                opacity: 180,
                premultiplyAlpha: false,
                bounds: {
                    l: 1000,
                    r: 0,
                    t: 1000,
                    b: 0
                },
                debug: false
            };
            // heatmap store containing the datapoints and information about the maximum
            // accessible via instance.store
            this.store = new store(this);

            this.get = function(key){
                return _[key];
            };
            this.set = function(key, value){
                _[key] = value;
            };
            // configure the heatmap when an instance gets created
            this.configure(config);
            // and initialize it
            this.init();
        };

        // public functions
        heatmap.prototype = {
            configure: function(config){
                var me = this,
                    rout, rin;

                me.set("radius", config["radius"] || 40);
                me.set("element", (config.element instanceof Object)?config.element:document.getElementById(config.element));
                me.set("visible", (config.visible != null)?config.visible:true);
                me.set("max", config.max || false);
                me.set("gradient", config.gradient || { 0.45: "rgb(0,0,255)", 0.55: "rgb(0,255,255)", 0.65: "rgb(0,255,0)", 0.95: "yellow", 1.0: "rgb(255,0,0)"});    // default is the common blue to red gradient
                me.set("opacity", parseInt(255/(100/config.opacity), 10) || 180);
                me.set("width", config.width || 0);
                me.set("height", config.height || 0);
                me.set("debug", config.debug);

                if(config.legend){
                    var legendCfg = config.legend;
                    legendCfg.gradient = me.get("gradient");
                    me.set("legend", new legend(legendCfg));
                }
                    
            },
            resize: function () {
                var me = this,
                    element = me.get("element"),
                    canvas = me.get("canvas"),
                    acanvas = me.get("acanvas");
                canvas.width = acanvas.width = me.get("width") || element.style.width.replace(/px/, "") || me.getWidth(element);
                this.set("width", canvas.width);
                canvas.height = acanvas.height = me.get("height") || element.style.height.replace(/px/, "") || me.getHeight(element);
                this.set("height", canvas.height);
            },

            init: function(){
                var me = this,
                    canvas = document.createElement("canvas"),
                    acanvas = document.createElement("canvas"),
                    ctx = canvas.getContext("2d"),
                    actx = acanvas.getContext("2d"),
                    element = me.get("element");

                
                me.initColorPalette();

                me.set("canvas", canvas);
                me.set("ctx", ctx);
                me.set("acanvas", acanvas);
                me.set("actx", actx);

                me.resize();
                canvas.style.cssText = acanvas.style.cssText = "position:absolute;top:0;left:0;z-index:10000000;";
                
                if(!me.get("visible"))
                    canvas.style.display = "none";

                element.appendChild(canvas);
                if(me.get("legend")){
                    element.appendChild(me.get("legend").getElement());
                }
                
                // debugging purposes only
                if(me.get("debug"))
                    document.body.appendChild(acanvas);
                
                actx.shadowOffsetX = 15000; 
                actx.shadowOffsetY = 15000; 
                actx.shadowBlur = 15; 
            },
            initColorPalette: function(){

                var me = this,
                    canvas = document.createElement("canvas"),
                    gradient = me.get("gradient"),
                    ctx, grad, testData;

                canvas.width = "1";
                canvas.height = "256";
                ctx = canvas.getContext("2d");
                grad = ctx.createLinearGradient(0,0,1,256);

                // Test how the browser renders alpha by setting a partially transparent pixel
                // and reading the result.  A good browser will return a value reasonably close
                // to what was set.  Some browsers (e.g. on Android) will return a ridiculously wrong value.
                testData = ctx.getImageData(0,0,1,1);
                testData.data[0] = testData.data[3] = 64; // 25% red & alpha
                testData.data[1] = testData.data[2] = 0; // 0% blue & green
                ctx.putImageData(testData, 0, 0);
                testData = ctx.getImageData(0,0,1,1);
                me.set("premultiplyAlpha", (testData.data[0] < 60 || testData.data[0] > 70));
                
                for(var x in gradient){
                    grad.addColorStop(x, gradient[x]);
                }

                ctx.fillStyle = grad;
                ctx.fillRect(0,0,1,256);

                me.set("gradient", ctx.getImageData(0,0,1,256).data);
            },
            getWidth: function(element){
                var width = element.offsetWidth;
                if(element.style.paddingLeft){
                    width+=element.style.paddingLeft;
                }
                if(element.style.paddingRight){
                    width+=element.style.paddingRight;
                }

                return width;
            },
            getHeight: function(element){
                var height = element.offsetHeight;
                if(element.style.paddingTop){
                    height+=element.style.paddingTop;
                }
                if(element.style.paddingBottom){
                    height+=element.style.paddingBottom;
                }

                return height;
            },
            colorize: function(x, y){
                // get the private variables
                var me = this,
                    width = me.get("width"),
                    radius = me.get("radius"),
                    height = me.get("height"),
                    actx = me.get("actx"),
                    ctx = me.get("ctx"),
                    x2 = radius * 3,
                    premultiplyAlpha = me.get("premultiplyAlpha"),
                    palette = me.get("gradient"),
                    opacity = me.get("opacity"),
                    bounds = me.get("bounds"),
                    left, top, bottom, right, 
                    image, length, alpha, offset, finalAlpha;
                
                if(x != null && y != null){
                    if(x+x2>width){
                        x=width-x2;
                    }
                    if(x<0){
                        x=0;
                    }
                    if(y<0){
                        y=0;
                    }
                    if(y+x2>height){
                        y=height-x2;
                    }
                    left = x;
                    top = y;
                    right = x + x2;
                    bottom = y + x2;

                }else{
                    if(bounds['l'] < 0){
                        left = 0;
                    }else{
                        left = bounds['l'];
                    }
                    if(bounds['r'] > width){
                        right = width;
                    }else{
                        right = bounds['r'];
                    }
                    if(bounds['t'] < 0){
                        top = 0;
                    }else{
                        top = bounds['t'];
                    }
                    if(bounds['b'] > height){
                        bottom = height;
                    }else{
                        bottom = bounds['b'];
                    }    
                }

                image = actx.getImageData(left, top, right-left, bottom-top);
                length = image.data.length;
                // loop thru the area
                for(var i=3; i < length; i+=4){

                    // [0] -> r, [1] -> g, [2] -> b, [3] -> alpha
                    alpha = image.data[i],
                    offset = alpha*4;

                    if(!offset)
                        continue;

                    // we ve started with i=3
                    // set the new r, g and b values
                    finalAlpha = (alpha < opacity)?alpha:opacity;
                    image.data[i-3]=palette[offset];
                    image.data[i-2]=palette[offset+1];
                    image.data[i-1]=palette[offset+2];
                    
                    if (premultiplyAlpha) {
                    // To fix browsers that premultiply incorrectly, we'll pass in a value scaled
                    // appropriately so when the multiplication happens the correct value will result.
                    image.data[i-3] /= 255/finalAlpha;
                    image.data[i-2] /= 255/finalAlpha;
                    image.data[i-1] /= 255/finalAlpha;
                    }
                    
                    // we want the heatmap to have a gradient from transparent to the colors
                    // as long as alpha is lower than the defined opacity (maximum), we'll use the alpha value
                    image.data[i] = finalAlpha;
                }
                // the rgb data manipulation didn't affect the ImageData object(defined on the top)
                // after the manipulation process we have to set the manipulated data to the ImageData object
                // image.data = imageData;
                ctx.putImageData(image, left, top);
            },
            drawAlpha: function(x, y, count, colorize){
                // storing the variables because they will be often used
                var me = this,
                    radius = me.get("radius"),
                    ctx = me.get("actx"),
                    max = me.get("max"),
                    bounds = me.get("bounds"),
                    xb = x - (1.5 * radius) >> 0, yb = y - (1.5 * radius) >> 0,
                    xc = x + (1.5 * radius) >> 0, yc = y + (1.5 * radius) >> 0;

                ctx.shadowColor = ('rgba(0,0,0,'+((count)?(count/me.store.max):'0.1')+')');

                ctx.shadowOffsetX = 15000; 
                ctx.shadowOffsetY = 15000; 
                ctx.shadowBlur = 15; 

                ctx.beginPath();
                ctx.arc(x - 15000, y - 15000, radius, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                if(colorize){
                    // finally colorize the area
                    me.colorize(xb,yb);
                }else{
                    // or update the boundaries for the area that then should be colorized
                    if(xb < bounds["l"]){
                        bounds["l"] = xb;
                    }
                    if(yb < bounds["t"]){
                        bounds["t"] = yb;
                    }
                    if(xc > bounds['r']){
                        bounds['r'] = xc;
                    }
                    if(yc > bounds['b']){
                        bounds['b'] = yc;
                    }
                }
            },
            toggleDisplay: function(){
                var me = this,
                    visible = me.get("visible"),
                canvas = me.get("canvas");

                if(!visible)
                    canvas.style.display = "block";
                else
                    canvas.style.display = "none";

                me.set("visible", !visible);
            },
            // dataURL export
            getImageData: function(){
                return this.get("canvas").toDataURL();
            },
            clear: function(){
                var me = this,
                    w = me.get("width"),
                    h = me.get("height");

                me.store.set("data",[]);
                // @TODO: reset stores max to 1
                //me.store.max = 1;
                me.get("ctx").clearRect(0,0,w,h);
                me.get("actx").clearRect(0,0,w,h);
            },
            cleanup: function(){
                var me = this;
                me.get("element").removeChild(me.get("canvas"));
            }
        };

        return {
            create: function(config){
                return new heatmap(config);
            }, 
            util: {
                mousePosition: function(ev){
                    // this doesn't work right
                    // rather use
                    /*
                        // this = element to observe
                        var x = ev.pageX - this.offsetLeft;
                        var y = ev.pageY - this.offsetTop;

                    */
                    var x, y;

                    if (ev.layerX) { // Firefox
                        x = ev.layerX;
                        y = ev.layerY;
                    } else if (ev.offsetX) { // Opera
                        x = ev.offsetX;
                        y = ev.offsetY;
                    }
                    if(typeof(x)=='undefined')
                        return;

                    return [x,y];
                }
            }
        };
    })();

    var HeatmapOverlay = function(opts) {
        try {
            BMap;
        } catch (e) {
            throw Error('Baidu Map JS API is not ready yet!');
        }
        if (!HeatmapOverlay._isExtended) {
            HeatmapOverlay._isExtended = true;
            inherits(HeatmapOverlay, BMap.Overlay, "HeatmapOverlay");
            var newHeatmap = new HeatmapOverlay(opts);
            this.__proto__ = newHeatmap.__proto__;
        }
        // HeatmapOverlay.prototype = new BMap.Overlay();
        this.conf = opts;
        this.heatmap = null;
        this.latlngs = [];
        this.bounds = null;
        this._moveendHandler = this._moveendHandler.bind(this);
    }

    HeatmapOverlay.prototype.initialize = function(map) {
        this._map = map;
        var el = document.createElement("div");
        el.style.position = "absolute";
        el.style.top = 0;
        el.style.left = 0;
        el.style.border = 0;
        el.style.width = this._map.getSize().width + "px";
        el.style.height = this._map.getSize().height + "px";
        this.conf.element = el;
        map.getPanes().mapPane.appendChild(el);
        this.heatmap = heatmapFactory.create(this.conf);
        this._div = el;
        return el;
    }

    HeatmapOverlay.prototype.draw = function() {
        var currentBounds = this._map.getBounds();

        if (currentBounds.equals(this.bounds)) {
            return;
        }
        this.bounds = currentBounds;

        var ne = this._map.pointToOverlayPixel(currentBounds.getNorthEast()),
            sw = this._map.pointToOverlayPixel(currentBounds.getSouthWest());
        if (!ne || !sw) {
            return
        }
        var topY = ne.y,
            leftX = sw.x,
            h = sw.y - ne.y,
            w = ne.x - sw.x;

        this.conf.element.style.left = leftX + 'px';
        this.conf.element.style.top = topY + 'px';
        this.conf.element.style.width = w + 'px';
        this.conf.element.style.height = h + 'px';
        this.heatmap.store.get("heatmap").resize();

        if (this.latlngs.length > 0) {
            this.heatmap.clear();

            var len = this.latlngs.length;
            var d = {
                max: this.heatmap.store.max,
                data: []
            };

            while (len--) {
                var latlng = this.latlngs[len].latlng;

                if (!currentBounds.containsPoint(latlng)) {
                    continue;
                }

                var divPixel = this._map.pointToOverlayPixel(latlng),
                    screenPixel = new BMap.Pixel(divPixel.x - leftX, divPixel.y - topY);
                var roundedPoint = this.pixelTransform(screenPixel);
                d.data.push({
                    x: roundedPoint.x,
                    y: roundedPoint.y,
                    count: this.latlngs[len].c
                });
            }
            this.heatmap.store.setDataSet(d);
        }
    }

    HeatmapOverlay.prototype.pixelTransform = function(p) {
        var w = this.heatmap.get("width"),
            h = this.heatmap.get("height");

        while (p.x < 0) {
            p.x += w;
        }

        while (p.x > w) {
            p.x -= w;
        }

        while (p.y < 0) {
            p.y += h;
        }

        while (p.y > h) {
            p.y -= h;
        }

        p.x = (p.x >> 0);
        p.y = (p.y >> 0);

        return p;
    }

    HeatmapOverlay.prototype._moveendHandler = function (e) {
        this.setDataSet(this._data);
        delete this._data;
        this._map.removeEventListener('moveend', this._moveendHandler);
    }

    HeatmapOverlay.prototype.setDataSet = function(data) {
        if (!this._map) {
            return;
        }
        var currentBounds = this._map.getBounds();

        var ne = this._map.pointToOverlayPixel(currentBounds.getNorthEast()),
            sw = this._map.pointToOverlayPixel(currentBounds.getSouthWest());
        if (!ne || !sw) {
            this._data = data
            this._map.addEventListener('moveend', this._moveendHandler);
        }

        var mapdata = {
            max: data.max,
            data: []
        };
        var d = data.data,
            dlen = d.length;


        this.latlngs = [];

        while (dlen--) {
            var latlng = new BMap.Point(d[dlen].lng, d[dlen].lat);
            this.latlngs.push({
                latlng: latlng,
                c: d[dlen].count
            });

            if (!currentBounds.containsPoint(latlng)) {
                continue;
            }

            var divPixel = this._map.pointToOverlayPixel(latlng),
                leftX = this._map.pointToOverlayPixel(currentBounds.getSouthWest()).x,
                topY = this._map.pointToOverlayPixel(currentBounds.getNorthEast()).y,
                screenPixel = new BMap.Pixel(divPixel.x - leftX, divPixel.y - topY);
            var point = this.pixelTransform(screenPixel);

            mapdata.data.push({
                x: point.x,
                y: point.y,
                count: d[dlen].count
            });
        }
        this.heatmap.clear();
        this.heatmap.store.setDataSet(mapdata);
    }

    HeatmapOverlay.prototype.addDataPoint = function(lng, lat, count) {
        var latlng = new BMap.Point(lng, lat),
            point = this.pixelTransform(this._map.pointToOverlayPixel(latlng));

        this.heatmap.store.addDataPoint(point.x, point.y, count);
        this.latlngs.push({
            latlng: latlng,
            c: count
        });
    }

    HeatmapOverlay.prototype.toggle = function() {
        this.heatmap.toggleDisplay();
    }

    return HeatmapOverlay;
});


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "b85c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createForOfIteratorHelper; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4d3");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e01a");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d28b");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("e260");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3ca3");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("06c5");








function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ }),

/***/ "bee2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "c296":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports, __commonjs_global), module.exports; }


var index$1 = __commonjs(function (module, exports, global) {
(function (root, factory) {  
    if (typeof exports === 'object') {  
        module.exports = factory();
    } else if (true) {  
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));  
    } else {}  
})(__commonjs_global, function() {
    var T,
    baidu = T = baidu || {version: "1.3.8"}; 
    var context = {};
    //提出guid，防止在与老版本Tangram混用时
    //在下一行错误的修改context[undefined]
    baidu.guid = "$BAIDU$";

    //Tangram可能被放在闭包中
    //一些页面级别唯一的属性，需要挂载在context[baidu.guid]上
    context[baidu.guid] = context[baidu.guid] || {};

    /**         
    * @ignore
    * @namespace baidu.dom 操作dom的方法。
    */
    baidu.dom = baidu.dom || {};

    
    /**
     * 从文档中获取指定的DOM元素
     * @name baidu.dom.g
     * @function
     * @grammar baidu.dom.g(id)
     * @param {string|HTMLElement} id 元素的id或DOM元素
     * @shortcut g,T.G
     * @meta standard
     * @see baidu.dom.q
     *             
     * @returns {HTMLElement|null} 获取的元素，查找不到时返回null,如果参数不合法，直接返回参数
     */
    baidu.dom.g = function (id) {
        if ('string' == typeof id || id instanceof String) {
            return document.getElementById(id);
        } else if (id && id.nodeName && (id.nodeType == 1 || id.nodeType == 9)) {
            return id;
        }
        return null;
    };

    // 声明快捷方法
    baidu.g = baidu.G = baidu.dom.g;

    /**
     * 获取目标元素所属的document对象
     * @name baidu.dom.getDocument
     * @function
     * @grammar baidu.dom.getDocument(element)
     * @param {HTMLElement|string} element 目标元素或目标元素的id
     * @meta standard
     * @see baidu.dom.getWindow
     *             
     * @returns {HTMLDocument} 目标元素所属的document对象
     */
    baidu.dom.getDocument = function (element) {
        element = baidu.dom.g(element);
        return element.nodeType == 9 ? element : element.ownerDocument || element.document;
    };

    /**
         * @ignore
     * @namespace baidu.lang 对语言层面的封装，包括类型判断、模块扩展、继承基类以及对象自定义事件的支持。
    */
    baidu.lang = baidu.lang || {};

    /**
     * 判断目标参数是否string类型或String对象
     * @name baidu.lang.isString
     * @function
     * @grammar baidu.lang.isString(source)
     * @param {Any} source 目标参数
     * @shortcut isString
     * @meta standard
     * @see baidu.lang.isObject,baidu.lang.isNumber,baidu.lang.isArray,baidu.lang.isElement,baidu.lang.isBoolean,baidu.lang.isDate
     *             
     * @returns {boolean} 类型判断结果
     */
    baidu.lang.isString = function (source) {
        return '[object String]' == Object.prototype.toString.call(source);
    };

    // 声明快捷方法
    baidu.isString = baidu.lang.isString;

    /**
     * 从文档中获取指定的DOM元素
     * **内部方法**
     * 
     * @param {string|HTMLElement} id 元素的id或DOM元素
     * @meta standard
     * @return {HTMLElement} DOM元素，如果不存在，返回null，如果参数不合法，直接返回参数
     */
    baidu.dom._g = function (id) {
        if (baidu.lang.isString(id)) {
            return document.getElementById(id);
        }
        return id;
    };

    // 声明快捷方法
    baidu._g = baidu.dom._g;

    /**
     * @ignore
     * @namespace baidu.browser 判断浏览器类型和特性的属性。
     */
    baidu.browser = baidu.browser || {};

    if (/msie (\d+\.\d)/i.test(navigator.userAgent)) {
        //IE 8下，以documentMode为准
        //在百度模板中，可能会有$，防止冲突，将$1 写成 \x241
        /**
         * 判断是否为ie浏览器
         * @property ie ie版本号
         * @grammar baidu.browser.ie
         * @meta standard
         * @shortcut ie
         * @see baidu.browser.firefox,baidu.browser.safari,baidu.browser.opera,baidu.browser.chrome,baidu.browser.maxthon 
         */
        baidu.browser.ie = baidu.ie = document.documentMode || + RegExp['\x241'];
    }

    /**
     * 获取目标元素的computed style值。如果元素的样式值不能被浏览器计算，则会返回空字符串（IE）
     *
     * @author berg
     * @name baidu.dom.getComputedStyle
     * @function
     * @grammar baidu.dom.getComputedStyle(element, key)
     * @param {HTMLElement|string} element 目标元素或目标元素的id
     * @param {string} key 要获取的样式名
     *
     * @see baidu.dom.getStyle
     *             
     * @returns {string} 目标元素的computed style值
     */

    baidu.dom.getComputedStyle = function(element, key){
        element = baidu.dom._g(element);
        var doc = baidu.dom.getDocument(element),
            styles;
        if (doc.defaultView && doc.defaultView.getComputedStyle) {
            styles = doc.defaultView.getComputedStyle(element, null);
            if (styles) {
                return styles[key] || styles.getPropertyValue(key);
            }
        }
        return ''; 
    };

    /**
     * 提供给setStyle与getStyle使用
     */
    baidu.dom._styleFixer = baidu.dom._styleFixer || {};

    /**
     * 提供给setStyle与getStyle使用
     */
    baidu.dom._styleFilter = baidu.dom._styleFilter || [];

    /**
     * 为获取和设置样式的过滤器
     * @private
     * @meta standard
     */
    baidu.dom._styleFilter.filter = function (key, value, method) {
        for (var i = 0, filters = baidu.dom._styleFilter, filter; filter = filters[i]; i++) {
            if (filter = filter[method]) {
                value = filter(key, value);
            }
        }
        return value;
    };

    /**
         * @ignore
     * @namespace baidu.string 操作字符串的方法。
     */
    baidu.string = baidu.string || {};

    /**
     * 将目标字符串进行驼峰化处理
     * @name baidu.string.toCamelCase
     * @function
     * @grammar baidu.string.toCamelCase(source)
     * @param {string} source 目标字符串
     * @remark
     * 支持单词以“-_”分隔
     * @meta standard
     *             
     * @returns {string} 驼峰化处理后的字符串
     */
    baidu.string.toCamelCase = function (source) {
        //提前判断，提高getStyle等的效率 thanks xianwei
        if (source.indexOf('-') < 0 && source.indexOf('_') < 0) {
            return source;
        }
        return source.replace(/[-_][^-_]/g, function (match) {
            return match.charAt(1).toUpperCase();
        });
    };

    /**
     * 获取目标元素的样式值
     * @name baidu.dom.getStyle
     * @function
     * @grammar baidu.dom.getStyle(element, key)
     * @param {HTMLElement|string} element 目标元素或目标元素的id
     * @param {string} key 要获取的样式名
     * @remark
     * 
     * 为了精简代码，本模块默认不对任何浏览器返回值进行归一化处理（如使用getStyle时，不同浏览器下可能返回rgb颜色或hex颜色），也不会修复浏览器的bug和差异性（如设置IE的float属性叫styleFloat，firefox则是cssFloat）。<br />
     * baidu.dom._styleFixer和baidu.dom._styleFilter可以为本模块提供支持。<br />
     * 其中_styleFilter能对颜色和px进行归一化处理，_styleFixer能对display，float，opacity，textOverflow的浏览器兼容性bug进行处理。	
     * @shortcut getStyle
     * @meta standard
     * @see baidu.dom.setStyle,baidu.dom.setStyles, baidu.dom.getComputedStyle
     *             
     * @returns {string} 目标元素的样式值
     */
    baidu.dom.getStyle = function (element, key) {
        var dom = baidu.dom;

        element = dom.g(element);
        key = baidu.string.toCamelCase(key);
        //computed style, then cascaded style, then explicitly set style.
        var value = element.style[key] ||
                    (element.currentStyle ? element.currentStyle[key] : "") || 
                    dom.getComputedStyle(element, key);

        // 在取不到值的时候，用fixer进行修正
        if (!value) {
            var fixer = dom._styleFixer[key];
            if(fixer){
                value = fixer.get ? fixer.get(element) : baidu.dom.getStyle(element, fixer);
            }
        }

        /* 检查结果过滤器 */
        if (fixer = dom._styleFilter) {
            value = fixer.filter(key, value, 'get');
        }

        return value;
    };

    // 声明快捷方法
    baidu.getStyle = baidu.dom.getStyle;


    if (/opera\/(\d+\.\d)/i.test(navigator.userAgent)) {
    /**
     * 判断是否为opera浏览器
     * @property opera opera版本号
     * @grammar baidu.browser.opera
     * @meta standard
     * @see baidu.browser.ie,baidu.browser.firefox,baidu.browser.safari,baidu.browser.chrome 
     */
        baidu.browser.opera = + RegExp['\x241'];
    }

    /**
     * 判断是否为webkit内核
     * @property isWebkit 
     * @grammar baidu.browser.isWebkit
     * @meta standard
     * @see baidu.browser.isGecko
     */
    baidu.browser.isWebkit = /webkit/i.test(navigator.userAgent);

    /**
     * 判断是否为gecko内核
     * @property isGecko 
     * @grammar baidu.browser.isGecko
     * @meta standard
     * @see baidu.browser.isWebkit
     */
    baidu.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);

    /**
     * 判断是否严格标准的渲染模式
     * @property isStrict 
     * @grammar baidu.browser.isStrict
     * @meta standard
     */
    baidu.browser.isStrict = document.compatMode == "CSS1Compat";

    /**
     * 获取目标元素相对于整个文档左上角的位置
     * @name baidu.dom.getPosition
     * @function
     * @grammar baidu.dom.getPosition(element)
     * @param {HTMLElement|string} element 目标元素或目标元素的id
     * @meta standard
     *             
     * @returns {Object} 目标元素的位置，键值为top和left的Object。
     */
    baidu.dom.getPosition = function (element) {
        element = baidu.dom.g(element);
        var doc = baidu.dom.getDocument(element), 
            browser = baidu.browser,
            getStyle = baidu.dom.getStyle,
        // Gecko 1.9版本以下用getBoxObjectFor计算位置
        // 但是某些情况下是有bug的
        // 对于这些有bug的情况
        // 使用递归查找的方式
            BUGGY_GECKO_BOX_OBJECT = browser.isGecko > 0 && 
                                        doc.getBoxObjectFor &&
                                        getStyle(element, 'position') == 'absolute' &&
                                        (element.style.top === '' || element.style.left === ''),
            pos = {"left":0,"top":0},
            viewport = (browser.ie && !browser.isStrict) ? doc.body : doc.documentElement,
            parent,
            box;

        if(element == viewport){
            return pos;
        }

        if(element.getBoundingClientRect){ // IE and Gecko 1.9+
    
            //当HTML或者BODY有border width时, 原生的getBoundingClientRect返回值是不符合预期的
            //考虑到通常情况下 HTML和BODY的border只会设成0px,所以忽略该问题.
            box = element.getBoundingClientRect();

            pos.left = Math.floor(box.left) + Math.max(doc.documentElement.scrollLeft, doc.body.scrollLeft);
            pos.top  = Math.floor(box.top)  + Math.max(doc.documentElement.scrollTop,  doc.body.scrollTop);
    
            // IE会给HTML元素添加一个border，默认是medium（2px）
            // 但是在IE 6 7 的怪异模式下，可以被html { border: 0; } 这条css规则覆盖
            // 在IE7的标准模式下，border永远是2px，这个值通过clientLeft 和 clientTop取得
            // 但是。。。在IE 6 7的怪异模式，如果用户使用css覆盖了默认的medium
            // clientTop和clientLeft不会更新
            pos.left -= doc.documentElement.clientLeft;
            pos.top  -= doc.documentElement.clientTop;
    
            var htmlDom = doc.body,
                // 在这里，不使用element.style.borderLeftWidth，只有computedStyle是可信的
                htmlBorderLeftWidth = parseInt(getStyle(htmlDom, 'borderLeftWidth')),
                htmlBorderTopWidth = parseInt(getStyle(htmlDom, 'borderTopWidth'));
            if(browser.ie && !browser.isStrict){
                pos.left -= isNaN(htmlBorderLeftWidth) ? 2 : htmlBorderLeftWidth;
                pos.top  -= isNaN(htmlBorderTopWidth) ? 2 : htmlBorderTopWidth;
            }
        } else { 
            // safari/opera/firefox
            parent = element;

            do {
                pos.left += parent.offsetLeft;
                pos.top  += parent.offsetTop;
    
                // safari里面，如果遍历到了一个fixed的元素，后面的offset都不准了
                if (browser.isWebkit > 0 && getStyle(parent, 'position') == 'fixed') {
                    pos.left += doc.body.scrollLeft;
                    pos.top  += doc.body.scrollTop;
                    break;
                }
        
                parent = parent.offsetParent;
            } while (parent && parent != element);

            // 对body offsetTop的修正
            if(browser.opera > 0 || (browser.isWebkit > 0 && getStyle(element, 'position') == 'absolute')){
                pos.top  -= doc.body.offsetTop;
            }

            // 计算除了body的scroll
            parent = element.offsetParent;
            while (parent && parent != doc.body) {
                pos.left -= parent.scrollLeft;
                // see https://bugs.opera.com/show_bug.cgi?id=249965
                if (!browser.opera || parent.tagName != 'TR') {
                    pos.top -= parent.scrollTop;
                }
                parent = parent.offsetParent;
            }
        }

        return pos;
    };

    /**
     * @ignore
     * @namespace baidu.event 屏蔽浏览器差异性的事件封装。
     * @property target 	事件的触发元素
     * @property pageX 		鼠标事件的鼠标x坐标
     * @property pageY 		鼠标事件的鼠标y坐标
     * @property keyCode 	键盘事件的键值
     */
    baidu.event = baidu.event || {};

    /**
     * 事件监听器的存储表
     * @private
     * @meta standard
     */
    baidu.event._listeners = baidu.event._listeners || [];

    /**
     * 为目标元素添加事件监听器
     * @name baidu.event.on
     * @function
     * @grammar baidu.event.on(element, type, listener)
     * @param {HTMLElement|string|window} element 目标元素或目标元素id
     * @param {string} type 事件类型
     * @param {Function} listener 需要添加的监听器
     * @remark
     * 
    1. 不支持跨浏览器的鼠标滚轮事件监听器添加<br>
    2. 改方法不为监听器灌入事件对象，以防止跨iframe事件挂载的事件对象获取失败

        * @shortcut on
        * @meta standard
        * @see baidu.event.un
        *             
        * @returns {HTMLElement|window} 目标元素
        */
    baidu.event.on = function (element, type, listener) {
        type = type.replace(/^on/i, '');
        element = baidu.dom._g(element);

        var realListener = function (ev) {
                // 1. 这里不支持EventArgument,  原因是跨frame的事件挂载
                // 2. element是为了修正this
                listener.call(element, ev);
            },
            lis = baidu.event._listeners,
            filter = baidu.event._eventFilter,
            afterFilter,
            realType = type;
        type = type.toLowerCase();
        // filter过滤
        if(filter && filter[type]){
            afterFilter = filter[type](element, type, realListener);
            realType = afterFilter.type;
            realListener = afterFilter.listener;
        }

        // 事件监听器挂载
        if (element.addEventListener) {
            element.addEventListener(realType, realListener, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + realType, realListener);
        }

        // 将监听器存储到数组中
        lis[lis.length] = [element, type, listener, realListener, realType];
        return element;
    };

    // 声明快捷方法
    baidu.on = baidu.event.on;

    /**
     * 返回一个当前页面的唯一标识字符串。
     * @name baidu.lang.guid
     * @function
     * @grammar baidu.lang.guid()
     * @version 1.1.1
     * @meta standard
     *             
     * @returns {String} 当前页面的唯一标识字符串
     */

    (function(){
        //不直接使用window，可以提高3倍左右性能
        var guid = context[baidu.guid];

        baidu.lang.guid = function() {
            return "TANGRAM__" + (guid._counter ++).toString(36);
        };

        guid._counter = guid._counter || 1;
    })();

    /**
     * 所有类的实例的容器
     * key为每个实例的guid
     * @meta standard
     */

    context[baidu.guid]._instances = context[baidu.guid]._instances || {};

    /**
     * 判断目标参数是否为function或Function实例
     * @name baidu.lang.isFunction
     * @function
     * @grammar baidu.lang.isFunction(source)
     * @param {Any} source 目标参数
     * @version 1.2
     * @see baidu.lang.isString,baidu.lang.isObject,baidu.lang.isNumber,baidu.lang.isArray,baidu.lang.isElement,baidu.lang.isBoolean,baidu.lang.isDate
     * @meta standard
     * @returns {boolean} 类型判断结果
     */
    baidu.lang.isFunction = function (source) {
        // chrome下,'function' == typeof /a/ 为true.
        return '[object Function]' == Object.prototype.toString.call(source);
    };

    /**
     *    
     * @ignore
     * @class  Tangram继承机制提供的一个基类，用户可以通过继承baidu.lang.Class来获取它的属性及方法。
     * @name 	baidu.lang.Class
     * @grammar baidu.lang.Class(guid)
     * @param 	{string}	guid	对象的唯一标识
     * @meta standard
     * @remark baidu.lang.Class和它的子类的实例均包含一个全局唯一的标识guid。guid是在构造函数中生成的，因此，继承自baidu.lang.Class的类应该直接或者间接调用它的构造函数。<br>baidu.lang.Class的构造函数中产生guid的方式可以保证guid的唯一性，及每个实例都有一个全局唯一的guid。
     * @meta standard
     * @see baidu.lang.inherits,baidu.lang.Event
     */
    baidu.lang.Class = function(guid) {
        this.guid = guid || baidu.lang.guid();
        context[baidu.guid]._instances[this.guid] = this;
    };
    context[baidu.guid]._instances = context[baidu.guid]._instances || {};

    /**
     * 释放对象所持有的资源，主要是自定义事件。
     * @name dispose
     * @grammar obj.dispose()
     */
    baidu.lang.Class.prototype.dispose = function(){
        delete context[baidu.guid]._instances[this.guid];

        for(var property in this){
            if (!baidu.lang.isFunction(this[property])) {
                delete this[property];
            }
        }
        this.disposed = true;
    };

    /**
     * 重载了默认的toString方法，使得返回信息更加准确一些。
     * @return {string} 对象的String表示形式
     */
    baidu.lang.Class.prototype.toString = function(){
        return "[object " + (this._className || "Object" ) + "]";
    };

    /**
     * @ignore
     * @class   自定义的事件对象。
     * @name 	baidu.lang.Event
     * @grammar baidu.lang.Event(type[, target])
     * @param 	{string} type	 事件类型名称。为了方便区分事件和一个普通的方法，事件类型名称必须以"on"(小写)开头。
     * @param 	{Object} [target]触发事件的对象
     * @meta standard
     * @remark 引入该模块，会自动为Class引入3个事件扩展方法：addEventListener、removeEventListener和dispatchEvent。
     * @meta standard
     * @see baidu.lang.Class
     */
    baidu.lang.Event = function (type, target) {
        this.type = type;
        this.returnValue = true;
        this.target = target || null;
        this.currentTarget = null;
    };

    /**
     * 注册对象的事件监听器。引入baidu.lang.Event后，Class的子类实例才会获得该方法。
     * @grammar obj.addEventListener(type, handler[, key])
     * @param 	{string}   type         自定义事件的名称
     * @param 	{Function} handler      自定义事件被触发时应该调用的回调函数
     * @param 	{string}   [key]		为事件监听函数指定的名称，可在移除时使用。如果不提供，方法会默认为它生成一个全局唯一的key。
     * @remark 	事件类型区分大小写。如果自定义事件名称不是以小写"on"开头，该方法会给它加上"on"再进行判断，即"click"和"onclick"会被认为是同一种事件。 
     */
    baidu.lang.Class.prototype.addEventListener = function (type, handler, key) {
        if (!baidu.lang.isFunction(handler)) {
            return;
        }

        !this.__listeners && (this.__listeners = {});

        var t = this.__listeners, id;
        if (typeof key == "string" && key) {
            if (/[^\w\-]/.test(key)) {
                throw("nonstandard key:" + key);
            } else {
                handler.hashCode = key; 
                id = key;
            }
        }
        type.indexOf("on") != 0 && (type = "on" + type);

        typeof t[type] != "object" && (t[type] = {});
        id = id || baidu.lang.guid();
        handler.hashCode = id;
        t[type][id] = handler;
    };

    /**
     * 移除对象的事件监听器。引入baidu.lang.Event后，Class的子类实例才会获得该方法。
     * @grammar obj.removeEventListener(type, handler)
     * @param {string}   type     事件类型
     * @param {Function|string} handler  要移除的事件监听函数或者监听函数的key
     * @remark 	如果第二个参数handler没有被绑定到对应的自定义事件中，什么也不做。
     */
    baidu.lang.Class.prototype.removeEventListener = function (type, handler) {
        if (typeof handler != "undefined") {
            if ( (baidu.lang.isFunction(handler) && ! (handler = handler.hashCode))
                || (! baidu.lang.isString(handler))
            ){
                return;
            }
        }

        !this.__listeners && (this.__listeners = {});

        type.indexOf("on") != 0 && (type = "on" + type);

        var t = this.__listeners;
        if (!t[type]) {
            return;
        }
        if (typeof handler != "undefined") {
            t[type][handler] && delete t[type][handler];
        } else {
            for(var guid in t[type]){
                delete t[type][guid];
            }
        }
    };

    /**
     * 派发自定义事件，使得绑定到自定义事件上面的函数都会被执行。引入baidu.lang.Event后，Class的子类实例才会获得该方法。
     * @grammar obj.dispatchEvent(event, options)
     * @param {baidu.lang.Event|String} event 	Event对象，或事件名称(1.1.1起支持)
     * @param {Object} 					options 扩展参数,所含属性键值会扩展到Event对象上(1.2起支持)
     * @remark 处理会调用通过addEventListenr绑定的自定义事件回调函数之外，还会调用直接绑定到对象上面的自定义事件。例如：<br>
    myobj.onMyEvent = function(){}<br>
    myobj.addEventListener("onMyEvent", function(){});
        */
    baidu.lang.Class.prototype.dispatchEvent = function (event, options) {
        if (baidu.lang.isString(event)) {
            event = new baidu.lang.Event(event);
        }
        !this.__listeners && (this.__listeners = {});

        // 20100603 添加本方法的第二个参数，将 options extend到event中去传递
        options = options || {};
        for (var i in options) {
            event[i] = options[i];
        }

        var i, t = this.__listeners, p = event.type;
        event.target = event.target || this;
        event.currentTarget = this;

        p.indexOf("on") != 0 && (p = "on" + p);

        baidu.lang.isFunction(this[p]) && this[p].apply(this, arguments);

        if (typeof t[p] == "object") {
            for (i in t[p]) {
                t[p][i].apply(this, arguments);
            }
        }
        return event.returnValue;
    };


    baidu.lang.inherits = function (subClass, superClass, className) {
        var key, proto,
            selfProps = subClass.prototype,
            clazz = new Function();

        clazz.prototype = superClass.prototype;
        proto = subClass.prototype = new clazz();
        for (key in selfProps) {
            proto[key] = selfProps[key];
        }
        subClass.prototype.constructor = subClass;
        subClass.superClass = superClass.prototype;

        // 类名标识，兼容Class的toString，基本没用
        if ("string" == typeof className) {
            proto._className = className;
        }
    };
    // 声明快捷方法
    baidu.inherits = baidu.lang.inherits;


    /**
    
     * 图片的路径

     * @private
     * @type {String}
    
     */
    var _IMAGE_PATH = 'http://api.map.baidu.com/library/TextIconOverlay/1.2/src/images/m';

    /**
    
     * 图片的后缀名

      * @private
     * @type {String}
    
     */
    var _IMAGE_EXTENSION  = 'png';

    /**
     *@exports TextIconOverlay as BMapLib.TextIconOverlay
     */
    
    /**
    * TextIconOverlay
    * @class 此类表示地图上的一个覆盖物，该覆盖物由文字和图标组成，从Overlay继承。文字通常是数字（0-9）或字母（A-Z ），而文字与图标之间有一定的映射关系。
    *该覆盖物适用于以下类似的场景：需要在地图上添加一系列覆盖物，这些覆盖物之间用不同的图标和文字来区分，文字可能表示了该覆盖物的某一属性值，根据该文字和一定的映射关系，自动匹配相应颜色和大小的图标。
    *
    *@constructor
    *@param {Point} position 表示一个经纬度坐标位置。
    *@param {String} text 表示该覆盖物显示的文字信息。
    *@param {Json Object} options 可选参数，可选项包括：<br />
    *"<b>styles</b>":{Array<IconStyle>} 一组图标风格。单个图表风格包括以下几个属性：<br />
    *   url	{String}	 图片的url地址。(必选)<br />
    *   size {Size}	图片的大小。（必选）<br />
    *   anchor {Size} 图标定位在地图上的位置相对于图标左上角的偏移值，默认偏移值为图标的中心位置。（可选）<br />
    *   offset {Size} 图片相对于可视区域的偏移值，此功能的作用等同于CSS中的background-position属性。（可选）<br />
    *   textSize {Number} 文字的大小。（可选，默认10）<br />
    *   textColor {String} 文字的颜色。（可选，默认black）<br />
    */
    var TextIconOverlay = function(position, text, options){
        try {
            BMap;
        } catch (e) {
            throw Error('Baidu Map JS API is not ready yet!');
        }
        T.lang.inherits(TextIconOverlay, BMap.Overlay, "TextIconOverlay");
        this._position = position;
        this._text = text;
        this._options = options || {};
        this._styles = this._options['styles'] || [];
        (!this._styles.length) && this._setupDefaultStyles();                  
    };


    TextIconOverlay.prototype._setupDefaultStyles = function(){  
        var sizes = [53, 56, 66, 78, 90];
        for(var i = 0, size; size = sizes[i]; i++){
            this._styles.push({
                url:_IMAGE_PATH + i + '.' + _IMAGE_EXTENSION,
                size: new BMap.Size(size, size)
            });
        }//for循环的简洁写法
    };

    /**
    *继承Overlay的intialize方法，自定义覆盖物时必须。
    *@param {Map} map BMap.Map的实例化对象。
    *@return {HTMLElement} 返回覆盖物对应的HTML元素。
    */
    TextIconOverlay.prototype.initialize = function(map){
        this._map = map;
    
        this._domElement = document.createElement('div');     
        this._updateCss();    
        this._updateText();
        this._updatePosition(); 
        
        this._bind();

        this._map.getPanes().markerMouseTarget.appendChild(this._domElement);
        return this._domElement;   
    };

    /**
    *继承Overlay的draw方法，自定义覆盖物时必须。
    *@return 无返回值。
    */
    TextIconOverlay.prototype.draw = function(){
        this._map && this._updatePosition();
    };
    
    /**
    *获取该覆盖物上的文字。
    *@return {String} 该覆盖物上的文字。
    */
    TextIconOverlay.prototype.getText = function(){
        return this._text;
    };

    /**
    *设置该覆盖物上的文字。
    *@param {String} text 要设置的文字，通常是字母A-Z或数字0-9。
    *@return 无返回值。
    */
    TextIconOverlay.prototype.setText = function(text){
        if(text && (!this._text || (this._text.toString() != text.toString()))){
            this._text = text;
            this._updateText();
            this._updateCss();
            this._updatePosition(); 
        }
    };

    /**
    *获取该覆盖物的位置。
    *@return {Point} 该覆盖物的经纬度坐标。
    */
    TextIconOverlay.prototype.getPosition = function () {
        return this._position;
    };
   
    /**
    *设置该覆盖物的位置。
    *@param {Point}  position 要设置的经纬度坐标。
    *@return 无返回值。
    */
    TextIconOverlay.prototype.setPosition = function (position) {
        if(position && (!this._position || !this._position.equals(position))){
            this._position = position;  
            this._updatePosition();
        }
    };

    /**
    *由文字信息获取风格数组的对应索引值。
    *内部默认的对应函数为文字转换为数字除以10的结果，比如文字8返回索引0，文字25返回索引2.
    *如果需要自定义映射关系，请覆盖该函数。
    *@param {String} text  文字。
    *@param {Array<IconStyle>}  styles 一组图标风格。
    *@return {Number} 对应的索引值。
    */
    TextIconOverlay.prototype.getStyleByText = function(text, styles){
        var count = parseInt(text);
        var index = parseInt(count / 10);
        index = Math.max(0, index);
        index = Math.min(index, styles.length - 1);
        return styles[index]; 
    };

    /**
    *更新相应的CSS。
    *@return 无返回值。
    */
    TextIconOverlay.prototype._updateCss = function(){
        if (!this._domElement) {
            return
        }
        var style = this.getStyleByText(this._text, this._styles);
        this._domElement.style.cssText = this._buildCssText(style);
    };

    /**
    *更新覆盖物的显示文字。
    *@return 无返回值。
    */
    TextIconOverlay.prototype._updateText = function(){
        if (this._domElement) {
            this._domElement.innerHTML = this._text;
        }
    };

    /**
    *调整覆盖物在地图上的位置更新覆盖物的显示文字。
    *@return 无返回值。
    */
    TextIconOverlay.prototype._updatePosition = function(){
        if (this._domElement && this._position) {
            var style = this._domElement.style;
            var pixelPosition= this._map.pointToOverlayPixel(this._position); 
            pixelPosition.x -= Math.ceil(parseInt(style.width) / 2);
            pixelPosition.y -= Math.ceil(parseInt(style.height) / 2);       
            style.left = pixelPosition.x + "px";
            style.top = pixelPosition.y + "px";
        }
    };
    
    /**
    * 为该覆盖物的HTML元素构建CSS
    * @param {IconStyle}  一个图标的风格。
    * @return {String} 构建完成的CSSTEXT。
    */
    TextIconOverlay.prototype._buildCssText = function(style) {    
        //根据style来确定一些默认值
        var url = style['url'];
        var size = style['size'];
        var anchor = style['anchor'];
        var offset = style['offset'];
        var textColor = style['textColor'] || 'black';
        var textSize = style['textSize'] || 10;

        var csstext = [];
        if (T.browser["ie"] < 7) {
            csstext.push('filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(' +
                'sizingMethod=scale,src="' + url + '");');
        } else {
            csstext.push('background-image:url(' + url + ');');
            var backgroundPosition = '0 0';
            (offset instanceof BMap.Size) && (backgroundPosition = offset.width + 'px' + ' ' + offset.height + 'px');          
            csstext.push('background-position:' + backgroundPosition + ';');
        }

        if (size instanceof BMap.Size){
            if (anchor instanceof BMap.Size) {
                if (anchor.height > 0 && anchor.height < size.height) {
                      csstext.push('height:' + (size.height - anchor.height) + 'px; padding-top:' + anchor.height + 'px;');
                }
                if(anchor.width > 0 && anchor.width < size.width){
                    csstext.push('width:' + (size.width - anchor.width) + 'px; padding-left:' + anchor.width + 'px;');                
                }
            } else {
                csstext.push('height:' + size.height + 'px; line-height:' + size.height + 'px;');
                csstext.push('width:' + size.width + 'px; text-align:center;');
            }
        }
   
        csstext.push('cursor:pointer; color:' + textColor + '; position:absolute; font-size:' +
            textSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
        return csstext.join('');
    };


    /**
    
     * 当鼠标点击该覆盖物时会触发该事件

     * @name TextIconOverlay#click

     * @event

     * @param {Event Object} e 回调函数会返回event参数，包括以下返回值：
    
     * <br />"<b>type</b> : {String} 事件类型

     * <br />"<b>target</b>：{BMapLib.TextIconOverlay} 事件目标

     *

     */

    /**

     * 当鼠标进入该覆盖物区域时会触发该事件

     * @name TextIconOverlay#mouseover

     * @event
     * @param {Event Object} e 回调函数会返回event参数，包括以下返回值：
    
     * <br />"<b>type</b> : {String} 事件类型

     * <br />"<b>target</b>：{BMapLib.TextIconOverlay} 事件目标

     * <br />"<b>point</b> : {BMap.Point} 最新添加上的节点BMap.Point对象

     * <br />"<b>pixel</b>：{BMap.pixel} 最新添加上的节点BMap.Pixel对象

     *

     * @example <b>参考示例：</b><br />

     * myTextIconOverlay.addEventListener("mouseover", function(e) {  alert(e.point);  });

     */

    /**

     * 当鼠标离开该覆盖物区域时会触发该事件

     * @name TextIconOverlay#mouseout

     * @event

     * @param {Event Object} e 回调函数会返回event参数，包括以下返回值：

     * <br />"<b>type</b> : {String} 事件类型

     * <br />"<b>target</b>：{BMapLib.TextIconOverlay} 事件目标

     * <br />"<b>point</b> : {BMap.Point} 最新添加上的节点BMap.Point对象

     * <br />"<b>pixel</b>：{BMap.pixel} 最新添加上的节点BMap.Pixel对象

     *

     * @example <b>参考示例：</b><br />

     * myTextIconOverlay.addEventListener("mouseout", function(e) {  alert(e.point);  });

     */


    /**
    * 为该覆盖物绑定一系列事件
    * 当前支持click mouseover mouseout
    * @return 无返回值。
    */
    TextIconOverlay.prototype._bind = function(){
        if (!this._domElement){
            return;
        }

        var me = this;
        var map = this._map;

        var BaseEvent = T.lang.Event;
        function eventExtend(e, be){
            var elem = e.srcElement || e.target;
            var x = e.clientX || e.pageX;
            var y = e.clientY || e.pageY;
            if (e && be && x && y && elem){
                var offset = T.dom.getPosition(map.getContainer());
                be.pixel = new BMap.Pixel(x - offset.left, y - offset.top);
                be.point = map.pixelToPoint(be.pixel);
            }
            return be;
        }//给事件参数增加pixel和point两个值

        T.event.on(this._domElement,"mouseover", function(e){
            me.dispatchEvent(eventExtend(e, new BaseEvent("onmouseover")));
        });
        T.event.on(this._domElement,"mouseout", function(e){
            me.dispatchEvent(eventExtend(e, new BaseEvent("onmouseout")));
        });
        T.event.on(this._domElement,"click", function(e){
            me.dispatchEvent(eventExtend(e, new BaseEvent("onclick")));
        });
    };

    return TextIconOverlay;
});
});

var TextIconOverlay = (index$1 && typeof index$1 === 'object' && 'default' in index$1 ? index$1['default'] : index$1);

/**
 * 获取一个扩展的视图范围，把上下左右都扩大一样的像素值。
 * @param {Map} map BMap.Map的实例化对象
 * @param {BMap.Bounds} bounds BMap.Bounds的实例化对象
 * @param {Number} gridSize 要扩大的像素值
 *
 * @return {BMap.Bounds} 返回扩大后的视图范围。
 */
var getExtendedBounds = function(map, bounds, gridSize){
    bounds = cutBoundsInRange(bounds);
    var pixelNE = map.pointToPixel(bounds.getNorthEast());
    var pixelSW = map.pointToPixel(bounds.getSouthWest()); 
    pixelNE.x += gridSize;
    pixelNE.y -= gridSize;
    pixelSW.x -= gridSize;
    pixelSW.y += gridSize;
    var newNE = map.pixelToPoint(pixelNE);
    var newSW = map.pixelToPoint(pixelSW);
    return new BMap.Bounds(newSW, newNE);
};

/**
 * 按照百度地图支持的世界范围对bounds进行边界处理
 * @param {BMap.Bounds} bounds BMap.Bounds的实例化对象
 *
 * @return {BMap.Bounds} 返回不越界的视图范围
 */
var cutBoundsInRange = function (bounds) {
    var maxX = getRange(bounds.getNorthEast().lng, -180, 180);
    var minX = getRange(bounds.getSouthWest().lng, -180, 180);
    var maxY = getRange(bounds.getNorthEast().lat, -74, 74);
    var minY = getRange(bounds.getSouthWest().lat, -74, 74);
    return new BMap.Bounds(new BMap.Point(minX, minY), new BMap.Point(maxX, maxY));
}; 

/**
 * 对单个值进行边界处理。
 * @param {Number} i 要处理的数值
 * @param {Number} min 下边界值
 * @param {Number} max 上边界值
 * 
 * @return {Number} 返回不越界的数值
 */
var getRange = function (i, mix, max) {
    mix && (i = Math.max(i, mix));
    max && (i = Math.min(i, max));
    return i;
};

/**
 * 判断给定的对象是否为数组
 * @param {Object} source 要测试的对象
 *
 * @return {Boolean} 如果是数组返回true，否则返回false
 */
var isArray = function (source) {
    return '[object Array]' === Object.prototype.toString.call(source);
};

/**
 * 返回item在source中的索引位置
 * @param {Object} item 要测试的对象
 * @param {Array} source 数组
 *
 * @return {Number} 如果在数组内，返回索引，否则返回-1
 */
var indexOf = function(item, source){
    var index = -1;
    if(isArray(source)){
        if (source.indexOf) {
            index = source.indexOf(item);
        } else {
            for (var i = 0, m; m = source[i]; i++) {
                if (m === item) {
                    index = i;
                    break;
                }
            }
        }
    }        
    return index;
};

/**
 *@exports MarkerClusterer as BMapLib.MarkerClusterer
 */

    /**
     * MarkerClusterer
     * @class 用来解决加载大量点要素到地图上产生覆盖现象的问题，并提高性能
     * @constructor
     * @param {Map} map 地图的一个实例。
     * @param {Json Object} options 可选参数，可选项包括：<br />
     *    markers {Array<Marker>} 要聚合的标记数组<br />
     *    girdSize {Number} 聚合计算时网格的像素大小，默认60<br />
     *    maxZoom {Number} 最大的聚合级别，大于该级别就不进行相应的聚合<br />
     *    minClusterSize {Number} 最小的聚合数量，小于该数量的不能成为一个聚合，默认为2<br />
     *    isAverangeCenter {Boolean} 聚合点的落脚位置是否是所有聚合在内点的平均值，默认为否，落脚在聚合内的第一个点<br />
     *    styles {Array<IconStyle>} 自定义聚合后的图标风格，请参考TextIconOverlay类<br />
     */
var MarkerClusterer  = function(map, options){
    try {
        BMap;
    } catch (e) {
        throw Error('Baidu Map JS API is not ready yet!');
    }
    if (!map){
        return;
    }
    this._map = map;
    this._markers = [];
    this._clusters = [];
    
    var opts = options || {};
    this._gridSize = opts["gridSize"] || 60;
    this._maxZoom = opts["maxZoom"] || 18;
    this._minClusterSize = opts["minClusterSize"] || 2;           
    this._isAverageCenter = false;
    if (opts['isAverageCenter'] != undefined) {
        this._isAverageCenter = opts['isAverageCenter'];
    }    
    this._styles = opts["styles"] || [];

    var that = this;
    this._map.addEventListener("zoomend",function(){
        that._redraw();     
    });

    this._map.addEventListener("moveend",function(){
        that._redraw();     
    });

    var mkrs = opts["markers"];
    isArray(mkrs) && this.addMarkers(mkrs);
};

/**
 * 添加要聚合的标记数组。
 * @param {Array<Marker>} markers 要聚合的标记数组
 *
 * @return 无返回值。
 */
MarkerClusterer.prototype.addMarkers = function(markers){
    if (!markers.length) {
        return
    }
    for(var i = 0, len = markers.length; i <len ; i++){
        this._pushMarkerTo(markers[i]);
    }
    this._createClusters();   
};

/**
 * 把一个标记添加到要聚合的标记数组中
 * @param {BMap.Marker} marker 要添加的标记
 *
 * @return 无返回值。
 */
MarkerClusterer.prototype._pushMarkerTo = function(marker){
    var index = indexOf(marker, this._markers);
    if(index === -1){
        marker.isInCluster = false;
        this._markers.push(marker);//Marker拖放后enableDragging不做变化，忽略
    }
};

/**
 * 添加一个聚合的标记。
 * @param {BMap.Marker} marker 要聚合的单个标记。
 * @return 无返回值。
 */
MarkerClusterer.prototype.addMarker = function(marker) {
    this._pushMarkerTo(marker);
    this._createClusters();
};

/**
 * 根据所给定的标记，创建聚合点
 * @return 无返回值
 */
MarkerClusterer.prototype._createClusters = function(){
    var mapBounds = this._map.getBounds();
    if (!mapBounds.getCenter()) {
        return
    }
    var extendedBounds = getExtendedBounds(this._map, mapBounds, this._gridSize);
    for(var i = 0, marker; marker = this._markers[i]; i++){
        if(!marker.isInCluster && extendedBounds.containsPoint(marker.getPosition()) ){ 
            this._addToClosestCluster(marker);
        }
    }   
};

/**
 * 根据标记的位置，把它添加到最近的聚合中
 * @param {BMap.Marker} marker 要进行聚合的单个标记
 *
 * @return 无返回值。
 */
MarkerClusterer.prototype._addToClosestCluster = function (marker){
    var distance = 4000000;
    var clusterToAddTo = null;
    var position = marker.getPosition();
    for(var i = 0, cluster; cluster = this._clusters[i]; i++){
        var center = cluster.getCenter();
        if(center){
            var d = this._map.getDistance(center, marker.getPosition());
            if(d < distance){
                distance = d;
                clusterToAddTo = cluster;
            }
        }
    }

    if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)){
        clusterToAddTo.addMarker(marker);
    } else {
        var cluster = new Cluster(this);
        cluster.addMarker(marker);            
        this._clusters.push(cluster);
    }    
};

/**
 * 清除上一次的聚合的结果
 * @return 无返回值。
 */
MarkerClusterer.prototype._clearLastClusters = function(){
    for(var i = 0, cluster; cluster = this._clusters[i]; i++){            
        cluster.remove();
    }
    this._clusters = [];//置空Cluster数组
    this._removeMarkersFromCluster();//把Marker的cluster标记设为false
};

/**
 * 清除某个聚合中的所有标记
 * @return 无返回值
 */
MarkerClusterer.prototype._removeMarkersFromCluster = function(){
    for(var i = 0, marker; marker = this._markers[i]; i++){
        marker.isInCluster = false;
    }
};

/**
 * 把所有的标记从地图上清除
 * @return 无返回值
 */
MarkerClusterer.prototype._removeMarkersFromMap = function(){
    for(var i = 0, marker; marker = this._markers[i]; i++){
        marker.isInCluster = false;
        var label = marker.getLabel();
        this._map.removeOverlay(marker);
        marker.setLabel(label);
    }
};

/**
 * 删除单个标记
 * @param {BMap.Marker} marker 需要被删除的marker
 *
 * @return {Boolean} 删除成功返回true，否则返回false
 */
MarkerClusterer.prototype._removeMarker = function(marker) {
    var index = indexOf(marker, this._markers);
    if (index === -1) {
        return false;
    }
    this._map.removeOverlay(marker);
    this._markers.splice(index, 1);
    return true;
};

/**
 * 删除单个标记
 * @param {BMap.Marker} marker 需要被删除的marker
 *
 * @return {Boolean} 删除成功返回true，否则返回false
 */
MarkerClusterer.prototype.removeMarker = function(marker) {
    var success = this._removeMarker(marker);
    if (success) {
        this._clearLastClusters();
        this._createClusters();
    }
    return success;
};

/**
 * 删除一组标记
 * @param {Array<BMap.Marker>} markers 需要被删除的marker数组
 *
 * @return {Boolean} 删除成功返回true，否则返回false
 */
MarkerClusterer.prototype.removeMarkers = function(markers) {
    var success = false;
    for (var i = 0; i < markers.length; i++) {
        var r = this._removeMarker(markers[i]);
        success = success || r; 
    }

    if (success) {
        this._clearLastClusters();
        this._createClusters();
    }
    return success;
};

/**
 * 从地图上彻底清除所有的标记
 * @return 无返回值
 */
MarkerClusterer.prototype.clearMarkers = function() {
    this._clearLastClusters();
    this._removeMarkersFromMap();
    this._markers = [];
};

/**
 * 重新生成，比如改变了属性等
 * @return 无返回值
 */
MarkerClusterer.prototype._redraw = function () {
    this._clearLastClusters();
    this._createClusters();
};

/**
 * 获取网格大小
 * @return {Number} 网格大小
 */
MarkerClusterer.prototype.getGridSize = function() {
    return this._gridSize;
};

/**
 * 设置网格大小
 * @param {Number} size 网格大小
 * @return 无返回值
 */
MarkerClusterer.prototype.setGridSize = function(size) {
    this._gridSize = size;
    this._redraw();
};

/**
 * 获取聚合的最大缩放级别。
 * @return {Number} 聚合的最大缩放级别。
 */
MarkerClusterer.prototype.getMaxZoom = function() {
    return this._maxZoom;       
};

/**
 * 设置聚合的最大缩放级别
 * @param {Number} maxZoom 聚合的最大缩放级别
 * @return 无返回值
 */
MarkerClusterer.prototype.setMaxZoom = function(maxZoom) {
    this._maxZoom = maxZoom;
    this._redraw();
};

/**
 * 获取聚合的样式风格集合
 * @return {Array<IconStyle>} 聚合的样式风格集合
 */
MarkerClusterer.prototype.getStyles = function() {
    return this._styles;
};

/**
 * 设置聚合的样式风格集合
 * @param {Array<IconStyle>} styles 样式风格数组
 * @return 无返回值
 */
MarkerClusterer.prototype.setStyles = function(styles) {
    this._styles = styles;
    this._redraw();
};

/**
 * 获取单个聚合的最小数量。
 * @return {Number} 单个聚合的最小数量。
 */
MarkerClusterer.prototype.getMinClusterSize = function() {
    return this._minClusterSize;
};

/**
 * 设置单个聚合的最小数量。
 * @param {Number} size 单个聚合的最小数量。
 * @return 无返回值。
 */
MarkerClusterer.prototype.setMinClusterSize = function(size) {
    this._minClusterSize = size;
    this._redraw();
};

/**
 * 获取单个聚合的落脚点是否是聚合内所有标记的平均中心。
 * @return {Boolean} true或false。
 */
MarkerClusterer.prototype.isAverageCenter = function() {
    return this._isAverageCenter;
};

/**
 * 获取聚合的Map实例。
 * @return {Map} Map的示例。
 */
MarkerClusterer.prototype.getMap = function() {
    return this._map;
};

/**
 * 获取所有的标记数组。
 * @return {Array<Marker>} 标记数组。
 */
MarkerClusterer.prototype.getMarkers = function() {
    return this._markers;
};

/**
 * 获取聚合的总数量。
 * @return {Number} 聚合的总数量。
 */
MarkerClusterer.prototype.getClustersCount = function() {
    var count = 0;
    for(var i = 0, cluster; cluster = this._clusters[i]; i++){
        cluster.isReal() && count++;     
    }
    return count;
};

/**
 * @ignore
 * Cluster
 * @class 表示一个聚合对象，该聚合，包含有N个标记，这N个标记组成的范围，并有予以显示在Map上的TextIconOverlay等。
 * @constructor
 * @param {MarkerClusterer} markerClusterer 一个标记聚合器示例。
 */
function Cluster(markerClusterer){
    this._markerClusterer = markerClusterer;
    this._map = markerClusterer.getMap();
    this._minClusterSize = markerClusterer.getMinClusterSize();
    this._isAverageCenter = markerClusterer.isAverageCenter();
    this._center = null;//落脚位置
    this._markers = [];//这个Cluster中所包含的markers
    this._gridBounds = null;//以中心点为准，向四边扩大gridSize个像素的范围，也即网格范围
    this._isReal = false; //真的是个聚合

    this._clusterMarker = new TextIconOverlay(this._center, this._markers.length, {"styles":this._markerClusterer.getStyles()});
    //this._map.addOverlay(this._clusterMarker);
}

/**
 * 向该聚合添加一个标记。
 * @param {Marker} marker 要添加的标记。
 * @return 无返回值。
 */
Cluster.prototype.addMarker = function(marker){
    if(this.isMarkerInCluster(marker)){
        return false;
    }//也可用marker.isInCluster判断,外面判断OK，这里基本不会命中

    if (!this._center){
        this._center = marker.getPosition();
        this.updateGridBounds();//
    } else {
        if(this._isAverageCenter){
            var l = this._markers.length + 1;
            var lat = (this._center.lat * (l - 1) + marker.getPosition().lat) / l;
            var lng = (this._center.lng * (l - 1) + marker.getPosition().lng) / l;
            this._center = new BMap.Point(lng, lat);
            this.updateGridBounds();
        }//计算新的Center
    }

    marker.isInCluster = true;
    this._markers.push(marker);

    var len = this._markers.length;
    if(len < this._minClusterSize ){     
        this._map.addOverlay(marker);
        //this.updateClusterMarker();
        return true;
    } else if (len === this._minClusterSize) {
        for (var i = 0; i < len; i++) {
            var label = this._markers[i].getLabel();
            this._markers[i].getMap() && this._map.removeOverlay(this._markers[i]);
            this._markers[i].setLabel(label);
        }
        
    } 
    this._map.addOverlay(this._clusterMarker);
    this._isReal = true;
    this.updateClusterMarker();
    return true;
};

/**
 * 判断一个标记是否在该聚合中。
 * @param {Marker} marker 要判断的标记。
 * @return {Boolean} true或false。
 */
Cluster.prototype.isMarkerInCluster= function(marker){
    if (this._markers.indexOf) {
        return this._markers.indexOf(marker) != -1;
    } else {
        for (var i = 0, m; m = this._markers[i]; i++) {
            if (m === marker) {
                return true;
            }
        }
    }
    return false;
};

/**
 * 判断一个标记是否在该聚合网格范围中。
 * @param {Marker} marker 要判断的标记。
 * @return {Boolean} true或false。
 */
Cluster.prototype.isMarkerInClusterBounds = function(marker) {
    return this._gridBounds.containsPoint(marker.getPosition());
};

Cluster.prototype.isReal = function(marker) {
    return this._isReal;
};

/**
 * 更新该聚合的网格范围。
 * @return 无返回值。
 */
Cluster.prototype.updateGridBounds = function() {
    var bounds = new BMap.Bounds(this._center, this._center);
    this._gridBounds = getExtendedBounds(this._map, bounds, this._markerClusterer.getGridSize());
};

/**
 * 更新该聚合的显示样式，也即TextIconOverlay。
 * @return 无返回值。
 */
Cluster.prototype.updateClusterMarker = function () {
    if (this._map.getZoom() > this._markerClusterer.getMaxZoom()) {
        this._clusterMarker && this._map.removeOverlay(this._clusterMarker);
        for (var i = 0, marker; marker = this._markers[i]; i++) {
            this._map.addOverlay(marker);
        }
        return;
    }

    if (this._markers.length < this._minClusterSize) {
        this._clusterMarker.hide();
        return;
    }

    this._clusterMarker.setPosition(this._center);
    
    this._clusterMarker.setText(this._markers.length);

    this._clusterMarker.addEventListener && !this._clusterMarker._hasClickEvent && this._clusterMarker.addEventListener("click", function(event){
        this._clusterMarker._hasClickEvent = true;
        this._markers && this._map.setViewport(this.getBounds());
    }.bind(this));
};

/**
 * 删除该聚合。
 * @return 无返回值。
 */
Cluster.prototype.remove = function(){
    for (var i = 0, m; m = this._markers[i]; i++) {
        var label = this._markers[i].getLabel();
        this._markers[i].getMap() && this._map.removeOverlay(this._markers[i]);
        this._markers[i].setLabel(label);
    }//清除散的标记点
    this._map.removeOverlay(this._clusterMarker);
    this._markers.length = 0;
    delete this._markers;
};

/**
 * 获取该聚合所包含的所有标记的最小外接矩形的范围。
 * @return {BMap.Bounds} 计算出的范围。
 */
Cluster.prototype.getBounds = function() {
    var bounds = new BMap.Bounds(this._center,this._center);
    for (var i = 0, marker; marker = this._markers[i]; i++) {
        bounds.extend(marker.getPosition());
    }
    return bounds;
};

/**
 * 获取该聚合的落脚点。
 * @return {BMap.Point} 该聚合的落脚点。
 */
Cluster.prototype.getCenter = function() {
    return this._center;
};

return MarkerClusterer;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "d4ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/components/index.js + 13 modules
var components = __webpack_require__("2af9");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components["a" /* default */]);



/***/ })

}]);