((typeof self !== 'undefined' ? self : this)["webpackJsonpcube_map_draw"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpcube_map_draw"] || []).push([[2],{

/***/ "0823":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4160");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("18a5");
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_mixins_common_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2da4");
/* harmony import */ var _base_factory_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("76f3");






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bm-map-type',
  render: function render() {},
  mixins: [Object(_base_mixins_common_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('control')],
  props: ['type', 'mapTypes', 'anchor', 'offset'],
  watch: {
    anchor: function anchor() {
      this.reload();
    },
    offset: function offset() {
      this.reload();
    },
    type: function type() {
      this.reload();
    },
    mapTypes: function mapTypes() {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          anchor = this.anchor,
          offset = this.offset,
          type = this.type;
      var mapTypes = [];
      this.mapTypes && this.mapTypes.forEach(function (item) {
        return mapTypes.push(global[item]);
      });
      this.originInstance = new BMap.MapTypeControl({
        anchor: global[anchor],
        offset: offset && Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_5__[/* createSize */ "e"])(BMap, offset),
        type: global[type],
        mapTypes: mapTypes
      });
      map.addControl(this.originInstance);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "165e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_mixins_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2da4");
/* harmony import */ var _base_bindEvent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4fab");
/* harmony import */ var _base_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("76f3");


//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bm-marker',
  mixins: [Object(_base_mixins_common_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('overlay')],
  props: {
    position: {},
    offset: {},
    icon: {},
    massClear: {
      type: Boolean,
      default: true
    },
    dragging: {
      type: Boolean,
      default: false
    },
    clicking: {
      type: Boolean,
      default: true
    },
    raiseOnDrag: {
      type: Boolean,
      default: false
    },
    draggingCursor: {
      type: String
    },
    rotation: {
      type: Number
    },
    shadow: {
      type: Object
    },
    title: {
      type: String
    },
    label: {
      type: Object
    },
    animation: {
      type: String
    },
    top: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    'position.lng': function positionLng(val, oldVal) {
      var BMap = this.BMap,
          originInstance = this.originInstance,
          position = this.position,
          renderByParent = this.renderByParent,
          $parent = this.$parent;

      if (val !== oldVal && val >= -180 && val <= 180) {
        originInstance.setPosition(Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_4__[/* createPoint */ "d"])(BMap, {
          lng: val,
          lat: position.lat
        }));
      }

      renderByParent && $parent.reload();
    },
    'position.lat': function positionLat(val, oldVal) {
      var BMap = this.BMap,
          originInstance = this.originInstance,
          position = this.position,
          renderByParent = this.renderByParent,
          $parent = this.$parent;

      if (val !== oldVal && val >= -74 && val <= 74) {
        originInstance.setPosition(Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_4__[/* createPoint */ "d"])(BMap, {
          lng: position.lng,
          lat: val
        }));
      }

      renderByParent && $parent.reload();
    },
    'offset.width': function offsetWidth(val, oldVal) {
      var BMap = this.BMap,
          originInstance = this.originInstance;

      if (val !== oldVal) {
        originInstance.setOffset(new BMap.Size(val, this.offset.height));
      }
    },
    'offset.height': function offsetHeight(val, oldVal) {
      var BMap = this.BMap,
          originInstance = this.originInstance;

      if (val !== oldVal) {
        originInstance.setOffset(new BMap.Size(this.offset.width, val));
      }
    },
    icon: {
      deep: true,
      handler: function handler(val) {
        var BMap = this.BMap,
            originInstance = this.originInstance,
            rotation = this.rotation;
        originInstance && originInstance.setIcon(Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_4__[/* createIcon */ "b"])(BMap, val));
        rotation && originInstance && originInstance.setRotation(rotation);
      }
    },
    massClear: function massClear(val) {
      val ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear();
    },
    dragging: function dragging(val) {
      val ? this.originInstance.enableDragging() : this.originInstance.disableDragging();
    },
    clicking: function clicking() {
      this.reload();
    },
    raiseOnDrag: function raiseOnDrag() {
      this.reload();
    },
    draggingCursor: function draggingCursor(val) {
      this.originInstance.setDraggingCursor(val);
    },
    rotation: function rotation(val) {
      this.originInstance.setRotation(val);
    },
    shadow: function shadow(val) {
      this.originInstance.setShadow(val);
    },
    title: function title(val) {
      this.originInstance.setTitle(val);
    },
    label: function label(val) {
      this.reload();
    },
    animation: function animation(val) {
      this.originInstance.setAnimation(global[val]);
    },
    top: function top(val) {
      this.originInstance.setTop(val);
    },
    zIndex: function zIndex(val) {
      this.originInstance.setZIndex(val);
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          position = this.position,
          offset = this.offset,
          icon = this.icon,
          massClear = this.massClear,
          dragging = this.dragging,
          clicking = this.clicking,
          raiseOnDrag = this.raiseOnDrag,
          draggingCursor = this.draggingCursor,
          rotation = this.rotation,
          shadow = this.shadow,
          title = this.title,
          label = this.label,
          animation = this.animation,
          top = this.top,
          renderByParent = this.renderByParent,
          $parent = this.$parent,
          zIndex = this.zIndex;
      var overlay = new BMap.Marker(new BMap.Point(position.lng, position.lat), {
        offset: offset,
        icon: icon && Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_4__[/* createIcon */ "b"])(BMap, icon),
        enableMassClear: massClear,
        enableDragging: dragging,
        enableClicking: clicking,
        raiseOnDrag: raiseOnDrag,
        draggingCursor: draggingCursor,
        rotation: rotation,
        shadow: shadow,
        title: title
      });
      this.originInstance = overlay;
      label && overlay && overlay.setLabel(Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_4__[/* createLabel */ "c"])(BMap, label));
      overlay.setTop(top);
      overlay.setZIndex(zIndex);
      _base_bindEvent_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].call(this, overlay);

      if (renderByParent) {
        $parent.reload();
      } else {
        map.addOverlay(overlay);
      }

      overlay.setAnimation(global[animation]);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "16d1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("841c");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("76f3");
/* harmony import */ var _base_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("33d3");
/* harmony import */ var _base_mixins_common_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2da4");




//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bm-transit',
  mixins: [Object(_base_mixins_common_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('search')],
  props: {
    location: {
      type: [Object, String]
    },
    start: {
      type: [Object, String]
    },
    end: {
      type: [Object, String]
    },
    panel: {
      type: Boolean,
      default: true
    },
    policy: {
      type: String
    },
    pageCapacity: {
      type: Number
    },
    autoViewport: {
      type: Boolean
    },
    selectFirstResult: {
      type: Boolean
    }
  },
  watch: {
    location: {
      handler: function handler(val) {
        var originInstance = this.originInstance,
            map = this.map;
        originInstance.setLocation(val || map);
      },
      deep: true
    },
    start: {
      handler: function handler(val) {
        var originInstance = this.originInstance,
            end = this.end,
            BMap = this.BMap;
        originInstance.search(Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* getPosition */ "b"])(BMap, val), Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* getPosition */ "b"])(BMap, end));
      },
      deep: true
    },
    end: {
      handler: function handler(val) {
        var originInstance = this.originInstance,
            start = this.start,
            BMap = this.BMap;
        originInstance.search(Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* getPosition */ "b"])(BMap, start), Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* getPosition */ "b"])(BMap, val));
      },
      deep: true
    },
    panel: function panel() {
      this.reload();
    },
    policy: function policy(val) {
      this.originInstance.setPolicy(global[val]);
    },
    pageCapacity: function pageCapacity(val) {
      this.originInstance && this.originInstance.setPageCapacity(val);
    },
    autoViewport: function autoViewport(val) {
      this.originInstance && (val ? this.originInstance.enableAutoViewport() : this.originInstance.disableAutoViewport());
    },
    selectFirstResult: function selectFirstResult() {
      this.reload();
    },
    highlightMode: function highlightMode() {
      this.reload();
    }
  },
  methods: {
    search: function search(start, end) {
      var originInstance = this.originInstance;
      originInstance.search(start, end);
    },
    load: function load() {
      var instance = this;
      var map = this.map,
          BMap = this.BMap,
          location = this.location,
          policy = this.policy,
          pageCapacity = this.pageCapacity,
          selectFirstResult = this.selectFirstResult,
          autoViewport = this.autoViewport,
          highlightMode = this.highlightMode,
          search = this.search,
          start = this.start,
          end = this.end,
          originInstance = this.originInstance;

      var _location = location ? Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* isPoint */ "c"])(location) ? Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_4__[/* createPoint */ "d"])(BMap, location) : location : map;

      var route = this.originInstance = new BMap.TransitRoute(_location, {
        renderOptions: {
          map: map,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult: selectFirstResult,
          autoViewport: autoViewport,
          highlightMode: highlightMode
        },
        policy: global[policy],
        pageCapacity: pageCapacity,
        onSearchComplete: function onSearchComplete(e) {
          if (originInstance && originInstance !== route) {
            originInstance.clearResults();
          }

          instance.$emit('searchcomplete', e);
        },
        onMarkersSet: function onMarkersSet(e) {
          instance.$emit('markersset', e);
        },
        onInfoHtmlSet: function onInfoHtmlSet(e) {
          instance.$emit('infohtmlset', e);
        },
        onPolylinesSet: function onPolylinesSet(e) {
          instance.$emit('polylinesset', e);
        },
        onResultsHtmlSet: function onResultsHtmlSet(e) {
          instance.$emit('resultshtmlset', e);
        }
      });
      search(Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* isPoint */ "c"])(start) ? Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_4__[/* createPoint */ "d"])(BMap, start) : start, Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* isPoint */ "c"])(end) ? Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_4__[/* createPoint */ "d"])(BMap, end) : end);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "2da4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const types = {
  control: {
    unload: 'removeControl'
  },
  layer: {
    unload: 'removeTileLayer'
  },
  overlay: {
    unload: 'removeOverlay'
  },
  contextMenu: {
    unload: 'removeContextMenu'
  }
}

const getParent = $component => ($component.abstract || $component.$el === $component.$children[0].$el) ? getParent($component.$parent) : $component

function destroyInstance () {
  const {unload, renderByParent, $parent} = this
  if (renderByParent) {
    $parent.reload()
  }
  unload()
}

class Mixin {
  constructor (prop) {
    this.methods = {
      ready () {
        const $parent = getParent(this.$parent)
        const BMap = this.BMap = $parent.BMap
        const map = this.map = $parent.map
        this.load()
        this.$emit('ready', {
          BMap,
          map
        })
      },
      transmitEvent (e) {
        this.$emit(e.type.replace(/^on/, ''), e)
      },
      reload () {
        this && this.BMap && this.$nextTick(() => {
          this.unload()
          this.$nextTick(this.load)
        })
      },
      unload () {
        const {map, originInstance} = this
        try {
          switch (prop.type) {
            case 'search':
              return originInstance.clearResults()
            case 'autoComplete':
            case 'lushu':
              return originInstance.dispose()
            case 'markerClusterer':
              return originInstance.clearMarkers()
            default:
              map[types[prop.type].unload](originInstance)
          }
        } catch (e) {}
      }
    }
    this.computed = {
      renderByParent () {
        return this.$parent.preventChildrenRender
      }
    }
    this.mounted = function () {
      const $parent = getParent(this.$parent)
      const map = $parent.map
      const {ready} = this
      map ? ready() : $parent.$on('ready', ready)
    }
    this.destroyed = destroyInstance
    this.beforeDestroy = destroyInstance
  }
}

/* harmony default export */ __webpack_exports__["a"] = (type => new Mixin({type}));


/***/ }),

/***/ "33d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPosition; });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("76f3");


const isPoint = obj => obj.lng && obj.lat
const checkType = val => Object.prototype.toString.call(val).slice(8, -1)

const getPosition = (BMap, point) => isPoint(point) ? Object(_factory__WEBPACK_IMPORTED_MODULE_0__[/* createPoint */ "d"])(BMap, point) : point


/***/ }),

/***/ "4136":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("18a5");
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_mixins_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2da4");
/* harmony import */ var _base_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("76f3");




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bm-panorama',
  mixins: [Object(_base_mixins_common_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('control')],
  render: function render() {},
  props: ['anchor', 'offset'],
  watch: {
    anchor: function anchor() {
      this.reload();
    },
    offset: function offset() {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          anchor = this.anchor,
          offset = this.offset;
      this.originInstance = new BMap.PanoramaControl({
        anchor: global[anchor],
        offset: offset && Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_3__[/* createSize */ "e"])(BMap, offset)
      });
      map.addControl(this.originInstance);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "4757":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("18a5");
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_mixins_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2da4");
/* harmony import */ var _base_bindEvent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4fab");
/* harmony import */ var _base_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("76f3");





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bm-geolocation',
  render: function render() {},
  mixins: [Object(_base_mixins_common_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('control')],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    },
    showAddressBar: {
      type: Boolean
    },
    autoLocation: {
      type: Boolean
    },
    locationIcon: {
      type: Object
    }
  },
  watch: {
    anchor: function anchor() {
      this.reload();
    },
    offset: function offset() {
      this.reload();
    },
    showAddressBar: function showAddressBar() {
      this.reload();
    },
    autoLocation: function autoLocation() {
      this.reload();
    },
    locationIcon: function locationIcon() {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          anchor = this.anchor,
          showAddressBar = this.showAddressBar,
          autoLocation = this.autoLocation,
          locationIcon = this.locationIcon,
          offset = this.offset;
      this.originInstance = new BMap.GeolocationControl({
        anchor: global[anchor],
        showAddressBar: showAddressBar,
        enableAutoLocation: autoLocation,
        offset: offset && Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_4__[/* createSize */ "e"])(BMap, offset),
        locationIcon: locationIcon && Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_4__[/* createIcon */ "b"])(BMap, locationIcon)
      });
      _base_bindEvent_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].call(this, this.originInstance);
      map.addControl(this.originInstance);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "4fab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/base/events.js
/* harmony default export */ var events = ({
  'bm-map': [
    'click',
    'dblclick',
    'rightclick',
    'rightdblclick',
    'maptypechange',
    'mousemove',
    'mouseover',
    'mouseout',
    'movestart',
    'moving',
    'moveend',
    'zoomstart',
    'zoomend',
    'addoverlay',
    'addcontrol',
    'removecontrol',
    'removeoverlay',
    'clearoverlays',
    'dragstart',
    'dragging',
    'dragend',
    'addtilelayer',
    'removetilelayer',
    'load',
    'resize',
    'hotspotclick',
    'hotspotover',
    'hotspotout',
    'tilesloaded',
    'touchstart',
    'touchmove',
    'touchend',
    'longpress'
  ],
  'bm-geolocation': [
    'locationSuccess',
    'locationError'
  ],
  'bm-overview-map': [
    'viewchanged',
    'viewchanging'
  ],
  'bm-marker': [
    'click',
    'dblclick',
    'mousedown',
    'mouseup',
    'mouseout',
    'mouseover',
    'remove',
    'infowindowclose',
    'infowindowopen',
    'dragstart',
    'dragging',
    'dragend',
    'rightclick'
  ],
  'bm-polyline': [
    'click',
    'dblclick',
    'mousedown',
    'mouseup',
    'mouseout',
    'mouseover',
    'remove',
    'lineupdate'
  ],
  'bm-polygon': [
    'click',
    'dblclick',
    'mousedown',
    'mouseup',
    'mouseout',
    'mouseover',
    'remove',
    'lineupdate'
  ],
  'bm-circle': [
    'click',
    'dblclick',
    'mousedown',
    'mouseup',
    'mouseout',
    'mouseover',
    'remove',
    'lineupdate'
  ],
  'bm-label': [
    'click',
    'dblclick',
    'mousedown',
    'mouseup',
    'mouseout',
    'mouseover',
    'remove',
    'rightclick'
  ],
  'bm-info-window': [
    'close',
    'open',
    'maximize',
    'restore',
    'clickclose'
  ],
  'bm-ground': [
    'click',
    'dblclick'
  ],
  'bm-autocomplete': [
    'onconfirm',
    'onhighlight'
  ],
  'bm-point-collection': [
    'click',
    'mouseover',
    'mouseout'
  ]
});

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/base/bindEvent.js


/* harmony default export */ var bindEvent = __webpack_exports__["a"] = (function (instance, eventList) {
  const ev = eventList || events[this.$options.name]
  ev && ev.forEach(event => {
    const hasOn = event.slice(0, 2) === 'on'
    const eventName = hasOn ? event.slice(2) : event
    const listener = this.$listeners[eventName]
    listener && instance.addEventListener(event, listener.fns)
  })
});


/***/ }),

/***/ "6160":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("18a5");
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_mixins_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2da4");
/* harmony import */ var _base_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("76f3");




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bm-city-list',
  render: function render() {},
  mixins: [Object(_base_mixins_common_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('control')],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    }
  },
  watch: {
    anchor: function anchor() {
      this.reload();
    },
    offset: function offset() {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          anchor = this.anchor,
          offset = this.offset;
      var self = this;
      this.originInstance = new BMap.CityListControl({
        anchor: global[anchor],
        offset: offset && Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_3__[/* createSize */ "e"])(BMap, offset),
        onChangeBefore: function onChangeBefore() {
          self.$emit('changeBefore');
        },
        onChangeAfter: function onChangeAfter() {
          self.$emit('changeAfter');
        }
      });
      map.addControl(this.originInstance);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "6a21":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("18a5");
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_mixins_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2da4");
/* harmony import */ var _base_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("76f3");




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bm-scale',
  render: function render() {},
  mixins: [Object(_base_mixins_common_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('control')],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    }
  },
  watch: {
    anchor: function anchor() {
      this.reload();
    },
    offset: function offset() {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          anchor = this.anchor,
          offset = this.offset;
      this.originInstance = new BMap.ScaleControl({
        anchor: global[anchor],
        offset: offset && Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_3__[/* createSize */ "e"])(BMap, offset)
      });
      map.addControl(this.originInstance);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "76f3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createPoint; });
/* unused harmony export createPixel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createLabel; });
function createPoint (BMap, options = {}) {
  const {lng, lat} = options
  return new BMap.Point(lng, lat)
}

function createPixel (BMap, options = {}) {
  const {x, y} = options
  return new BMap.Pixel(x, y)
}

function createBounds (BMap, options = {}) {
  const {sw, ne} = options
  return new BMap.Bounds(createPoint(BMap, sw), createPoint(BMap, ne))
}

function createSize (BMap, options = {}) {
  const {width, height} = options
  return new BMap.Size(width, height)
}

function createIcon (BMap, options = {}) {
  const {url, size, opts = {}} = options
  return new BMap.Icon(url, createSize(BMap, size), {
    anchor: opts.anchor && createSize(BMap, opts.anchor),
    imageSize: opts.imageSize && createSize(BMap, opts.imageSize),
    imageOffset: opts.imageOffset && createSize(BMap, opts.imageOffset),
    infoWindowAnchor: opts.infoWindowAnchor && createSize(BMap, opts.infoWindowAnchor),
    printImageUrl: opts.printImageUrl
  })
}

function createLabel (BMap, options = {}) {
  const {content, opts} = options
  return new BMap.Label(content, {
    offset: opts.offset && createSize(BMap, opts.offset),
    position: opts.position && createPoint(BMap, opts.position),
    enableMassClear: opts.enableMassClear
  })
}


/***/ }),

/***/ "7a58":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("18a5");
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_mixins_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2da4");
/* harmony import */ var _base_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("76f3");


//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bm-control',
  mixins: [Object(_base_mixins_common_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('control')],
  props: ['anchor', 'offset'],
  watch: {
    anchor: function anchor(val) {
      this.originInstance.setAnchor(val);
    },
    offset: function offset(val) {
      this.originInstance.setOffset(val);
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          anchor = this.anchor,
          offset = this.offset,
          $el = this.$el;

      var Control = function Control() {
        this.defaultAnchor = global[anchor || 'BMAP_ANCHOR_TOP_LEFT'];
        this.defaultOffset = Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_3__[/* createSize */ "e"])(BMap, offset);
      };

      Control.prototype = new BMap.Control();

      Control.prototype.initialize = function (map) {
        return map.getContainer().appendChild($el);
      };

      this.originInstance = new Control(anchor, offset);
      map.addControl(this.originInstance);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "7b51":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4160");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_mixins_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2da4");
/* harmony import */ var _base_bindEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4fab");
/* harmony import */ var _base_factory_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("76f3");



//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bm-info-window',
  mixins: [Object(_base_mixins_common_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])('overlay')],
  props: {
    show: {
      type: Boolean
    },
    position: {
      type: Object
    },
    title: {
      type: String
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    maxWidth: {
      type: Number
    },
    offset: {
      type: Object
    },
    maximize: {
      type: Boolean
    },
    autoPan: {
      type: Boolean
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    message: {
      type: String
    }
  },
  watch: {
    show: function show(val) {
      val ? this.openInfoWindow() : this.closeInfoWindow();
    },
    'position.lng': function positionLng(val, oldVal) {
      this.reload();
    },
    'position.lat': function positionLat(val, oldVal) {
      this.reload();
    },
    'offset.width': function offsetWidth(val, oldVal) {
      this.reload();
    },
    'offset.height': function offsetHeight(val) {
      this.reload();
    },
    maxWidth: function maxWidth() {
      this.reload();
    },
    width: function width(val) {
      this.originInstance.setWidth(val);
    },
    height: function height(val) {
      this.originInstance.setHeight(val);
    },
    title: function title(val) {
      this.originInstance.setTitle(val);
    },
    maximize: function maximize(val) {
      val ? this.originInstance.enableMaximize() : this.originInstance.disableMaximize();
    },
    autoPan: function autoPan(val) {
      val ? this.originInstance.enableAutoPan() : this.originInstance.disableAutoPan();
    },
    closeOnClick: function closeOnClick(val) {
      val ? this.originInstance.enableCloseOnClick() : this.originInstance.disableCloseOnClick();
    }
  },
  methods: {
    redraw: function redraw() {
      this.originInstance.redraw();
    },
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          show = this.show,
          title = this.title,
          width = this.width,
          height = this.height,
          maxWidth = this.maxWidth,
          offset = this.offset,
          autoPan = this.autoPan,
          closeOnClick = this.closeOnClick,
          message = this.message,
          maximize = this.maximize,
          bindObserver = this.bindObserver,
          $parent = this.$parent;
      var $content = this.$el;
      var overlay = new BMap.InfoWindow($content, {
        width: width,
        height: height,
        title: title,
        maxWidth: maxWidth,
        offset: Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_5__[/* createSize */ "e"])(BMap, offset),
        enableAutoPan: autoPan,
        enableCloseOnClick: closeOnClick,
        enableMessage: typeof message === 'undefined',
        message: message
      });
      maximize ? overlay.enableMaximize() : overlay.disableMaximize();
      _base_bindEvent_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].call(this, overlay);
      this.originInstance = overlay;
      overlay.redraw();
      [].forEach.call($content.querySelectorAll('img'), function ($img) {
        $img.onload = function () {
          return overlay.redraw();
        };
      });
      bindObserver();
      this.$container = $parent.originInstance && $parent.originInstance.openInfoWindow ? $parent.originInstance : map;
      show && this.openInfoWindow();
    },
    bindObserver: function bindObserver() {
      var MutationObserver = global.MutationObserver;

      if (!MutationObserver) {
        return;
      }

      var $el = this.$el,
          originInstance = this.originInstance;
      this.observer = new MutationObserver(function (mutations) {
        return originInstance.redraw();
      });
      this.observer.observe($el, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    },
    openInfoWindow: function openInfoWindow() {
      var BMap = this.BMap,
          $container = this.$container,
          position = this.position,
          originInstance = this.originInstance;
      $container.openInfoWindow(originInstance, Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_5__[/* createPoint */ "d"])(BMap, position));
    },
    closeInfoWindow: function closeInfoWindow() {
      this.$container.closeInfoWindow(this.originInstance);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "7f25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("e6cf");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_shiliangl_vue_library_dev_cube_baidu_map_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("b85c");
/* harmony import */ var _base_bindEvent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4fab");
/* harmony import */ var _base_util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("33d3");





//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bm-map',
  props: {
    ak: {
      type: String
    },
    center: {
      type: [Object, String]
    },
    zoom: {
      type: Number
    },
    minZoom: {
      type: Number
    },
    maxZoom: {
      type: Number
    },
    highResolution: {
      type: Boolean,
      default: true
    },
    mapClick: {
      type: Boolean,
      default: true
    },
    mapType: {
      type: String
    },
    dragging: {
      type: Boolean,
      default: true
    },
    scrollWheelZoom: {
      type: Boolean,
      default: false
    },
    doubleClickZoom: {
      type: Boolean,
      default: true
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    inertialDragging: {
      type: Boolean,
      default: true
    },
    continuousZoom: {
      type: Boolean,
      default: true
    },
    pinchToZoom: {
      type: Boolean,
      default: true
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    theme: {
      type: Array
    },
    mapStyle: {
      type: Object
    }
  },
  watch: {
    center: function center(val, oldVal) {
      var map = this.map,
          zoom = this.zoom;

      if (Object(_base_util_js__WEBPACK_IMPORTED_MODULE_6__[/* checkType */ "a"])(val) === 'String' && val !== oldVal) {
        map.centerAndZoom(val, zoom);
      }
    },
    'center.lng': function centerLng(val, oldVal) {
      var BMap = this.BMap,
          map = this.map,
          zoom = this.zoom,
          center = this.center;

      if (val !== oldVal && val >= -180 && val <= 180) {
        map.centerAndZoom(new BMap.Point(val, center.lat), zoom);
      }
    },
    'center.lat': function centerLat(val, oldVal) {
      var BMap = this.BMap,
          map = this.map,
          zoom = this.zoom,
          center = this.center;

      if (val !== oldVal && val >= -74 && val <= 74) {
        map.centerAndZoom(new BMap.Point(center.lng, val), zoom);
      }
    },
    zoom: function zoom(val, oldVal) {
      var map = this.map;

      if (val !== oldVal && val >= 3 && val <= 19) {
        map.setZoom(val);
      }
    },
    minZoom: function minZoom(val) {
      var map = this.map;
      map.setMinZoom(val);
    },
    maxZoom: function maxZoom(val) {
      var map = this.map;
      map.setMaxZoom(val);
    },
    highResolution: function highResolution() {
      this.reset();
    },
    mapClick: function mapClick() {
      this.reset();
    },
    mapType: function mapType(val) {
      var map = this.map;
      map.setMapType(global[val]);
    },
    dragging: function dragging(val) {
      var map = this.map;
      val ? map.enableDragging() : map.disableDragging();
    },
    scrollWheelZoom: function scrollWheelZoom(val) {
      var map = this.map;
      val ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom();
    },
    doubleClickZoom: function doubleClickZoom(val) {
      var map = this.map;
      val ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom();
    },
    keyboard: function keyboard(val) {
      var map = this.map;
      val ? map.enableKeyboard() : map.disableKeyboard();
    },
    inertialDragging: function inertialDragging(val) {
      var map = this.map;
      val ? map.enableInertialDragging() : map.disableInertialDragging();
    },
    continuousZoom: function continuousZoom(val) {
      var map = this.map;
      val ? map.enableContinuousZoom() : map.disableContinuousZoom();
    },
    pinchToZoom: function pinchToZoom(val) {
      var map = this.map;
      val ? map.enablePinchToZoom() : map.disablePinchToZoom();
    },
    autoResize: function autoResize(val) {
      var map = this.map;
      val ? map.enableAutoResize() : map.disableAutoResize();
    },
    theme: function theme(val) {
      var map = this.map;
      map.setMapStyle({
        styleJson: val
      });
    },
    'mapStyle.features': {
      handler: function handler(val, oldVal) {
        var map = this.map,
            mapStyle = this.mapStyle;
        var style = mapStyle.style,
            styleJson = mapStyle.styleJson;
        map.setMapStyle({
          styleJson: styleJson,
          features: val,
          style: style
        });
      },
      deep: true
    },
    'mapStyle.style': function mapStyleStyle(val, oldVal) {
      var map = this.map,
          mapStyle = this.mapStyle;
      var features = mapStyle.features,
          styleJson = mapStyle.styleJson;
      map.setMapStyle({
        styleJson: styleJson,
        features: features,
        style: val
      });
    },
    'mapStyle.styleJson': {
      handler: function handler(val, oldVal) {
        var map = this.map,
            mapStyle = this.mapStyle;
        var features = mapStyle.features,
            style = mapStyle.style;
        map.setMapStyle({
          styleJson: val,
          features: features,
          style: style
        });
      },
      deep: true
    },
    mapStyle: function mapStyle(val) {
      var map = this.map,
          theme = this.theme;
      !theme && map.setMapStyle(val);
    }
  },
  methods: {
    setMapOptions: function setMapOptions() {
      var map = this.map,
          minZoom = this.minZoom,
          maxZoom = this.maxZoom,
          mapType = this.mapType,
          dragging = this.dragging,
          scrollWheelZoom = this.scrollWheelZoom,
          doubleClickZoom = this.doubleClickZoom,
          keyboard = this.keyboard,
          inertialDragging = this.inertialDragging,
          continuousZoom = this.continuousZoom,
          pinchToZoom = this.pinchToZoom,
          autoResize = this.autoResize;
      minZoom && map.setMinZoom(minZoom);
      maxZoom && map.setMaxZoom(maxZoom);
      mapType && map.setMapType(global[mapType]);
      dragging ? map.enableDragging() : map.disableDragging();
      scrollWheelZoom ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom();
      doubleClickZoom ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom();
      keyboard ? map.enableKeyboard() : map.disableKeyboard();
      inertialDragging ? map.enableInertialDragging() : map.disableInertialDragging();
      continuousZoom ? map.enableContinuousZoom() : map.disableContinuousZoom();
      pinchToZoom ? map.enablePinchToZoom() : map.disablePinchToZoom();
      autoResize ? map.enableAutoResize() : map.disableAutoResize();
    },
    init: function init(BMap) {
      if (this.map) {
        return;
      }

      var $el = this.$refs.view;

      var _iterator = Object(_Users_shiliangl_vue_library_dev_cube_baidu_map_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this.$slots.default || []),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var $node = _step.value;

          if ($node.componentOptions && $node.componentOptions.tag === 'bm-view') {
            this.hasBmView = true;
            $el = $node.elm;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var map = new BMap.Map($el, {
        enableHighResolution: this.highResolution,
        enableMapClick: this.mapClick
      });
      this.map = map;
      var setMapOptions = this.setMapOptions,
          zoom = this.zoom,
          getCenterPoint = this.getCenterPoint,
          theme = this.theme,
          mapStyle = this.mapStyle;
      theme ? map.setMapStyle({
        styleJson: theme
      }) : map.setMapStyle(mapStyle);
      setMapOptions();
      _base_bindEvent_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].call(this, map); // 此处强行初始化一次地图 回避一个由于错误的 center 字符串导致初始化失败抛出的错误

      map.reset();
      map.centerAndZoom(getCenterPoint(), zoom);
      this.$emit('ready', {
        BMap: BMap,
        map: map
      }); // Debug
      // global.map = map
      // global.mapComponent = this
    },
    getCenterPoint: function getCenterPoint() {
      var center = this.center,
          BMap = this.BMap;

      switch (Object(_base_util_js__WEBPACK_IMPORTED_MODULE_6__[/* checkType */ "a"])(center)) {
        case 'String':
          return center;

        case 'Object':
          return new BMap.Point(center.lng, center.lat);

        default:
          return new BMap.Point();
      }
    },
    initMap: function initMap(BMap) {
      this.BMap = BMap;
      this.init(BMap);
    },
    getMapScript: function getMapScript() {
      if (!global.BMap) {
        var ak = this.ak || this._BMap().ak;

        global.BMap = {};
        global.BMap._preloader = new Promise(function (resolve, reject) {
          global._initBaiduMap = function () {
            resolve(global.BMap);
            global.document.body.removeChild($script);
            global.BMap._preloader = null;
            global._initBaiduMap = null;
          };

          var $script = document.createElement('script');
          global.document.body.appendChild($script);
          $script.src = "https://api.map.baidu.com/api?v=2.0&ak=".concat(ak, "&callback=_initBaiduMap");
        });
        return global.BMap._preloader;
      } else if (!global.BMap._preloader) {
        return Promise.resolve(global.BMap);
      } else {
        return global.BMap._preloader;
      }
    },
    reset: function reset() {
      var getMapScript = this.getMapScript,
          initMap = this.initMap;
      getMapScript().then(initMap);
    }
  },
  mounted: function mounted() {
    this.reset();
  },
  data: function data() {
    return {
      hasBmView: false
    };
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "8409":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4160");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("18a5");
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("76f3");
/* harmony import */ var _base_mixins_common_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2da4");
/* harmony import */ var _base_bindEvent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4fab");







/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bm-overview-map',
  mixins: [Object(_base_mixins_common_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('control')],
  render: function render() {},
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    },
    size: {
      type: Object
    },
    isOpen: {
      type: Boolean
    }
  },
  watch: {
    anchor: function anchor() {
      this.reload();
    },
    offset: function offset() {
      this.reload();
    },
    size: function size() {
      this.reload();
    },
    isOpen: function isOpen() {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          isOpen = this.isOpen,
          size = this.size,
          offset = this.offset,
          anchor = this.anchor;
      var mapTypes = [];
      this.mapTypes && this.mapTypes.forEach(function (item) {
        mapTypes.push(global[item]);
      });
      this.originInstance = new BMap.OverviewMapControl({
        anchor: global[anchor],
        offset: Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_4__[/* createSize */ "e"])(BMap, offset),
        size: Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_4__[/* createSize */ "e"])(BMap, size),
        isOpen: isOpen
      });
      _base_bindEvent_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].call(this, this.originInstance);
      map.addControl(this.originInstance);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "abed":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4160");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("18a5");
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_mixins_common_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2da4");
/* harmony import */ var _base_factory_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("76f3");






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bm-copyright',
  render: function render() {},
  mixins: [Object(_base_mixins_common_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('control')],
  props: ['anchor', 'offset', 'copyright'],
  watch: {
    anchor: function anchor() {
      this.reload();
    },
    offset: function offset() {
      this.reload();
    },
    copyright: function copyright() {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          offset = this.offset,
          anchor = this.anchor,
          updateCopyrightList = this.updateCopyrightList;
      this.originInstance = new BMap.CopyrightControl({
        anchor: global[anchor],
        offset: offset && Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_5__[/* createSize */ "e"])(BMap, offset)
      });
      updateCopyrightList();
      map.addControl(this.originInstance);
    },
    updateCopyrightList: function updateCopyrightList() {
      var _this = this;

      var BMap = this.BMap,
          map = this.map;
      var _this$originInstance = this.originInstance,
          removeCopyright = _this$originInstance.removeCopyright,
          getCopyrightCollection = _this$originInstance.getCopyrightCollection;
      var copyrightList = getCopyrightCollection();
      copyrightList && copyrightList.forEach(function (item) {
        removeCopyright(item.id);
      });
      this.copyright && this.copyright.forEach(function (item) {
        var bounds = item.bounds ? new BMap.Bounds(new BMap.Point(item.bounds.sw.lng, item.bounds.sw.lat), new BMap.Point(item.bounds.ne.lng, item.bounds.ne.lat)) : map.getBounds();

        _this.originInstance.addCopyright({
          id: item.id,
          content: item.content,
          bounds: bounds
        });

        _this.originInstance.getCopyrightCollection();
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "b0f5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("841c");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("76f3");
/* harmony import */ var _base_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("33d3");
/* harmony import */ var _base_mixins_common_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2da4");




//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bm-driving',
  mixins: [Object(_base_mixins_common_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('search')],
  props: {
    location: {
      type: [Object, String]
    },
    start: {
      type: [Object, String]
    },
    end: {
      type: [Object, String]
    },
    startCity: {
      type: [String, Number]
    },
    endCity: {
      type: [String, Number]
    },
    waypoints: {
      type: Array
    },
    policy: {
      type: String
    },
    panel: {
      type: Boolean,
      default: true
    },
    autoViewport: {
      type: Boolean
    },
    selectFirstResult: {
      type: Boolean
    }
  },
  watch: {
    location: {
      handler: function handler(val) {
        var originInstance = this.originInstance,
            map = this.map;
        originInstance.setLocation(val || map);
      },
      deep: true
    },
    start: {
      handler: function handler(val) {
        var originInstance = this.originInstance,
            end = this.end,
            startCity = this.startCity,
            endCity = this.endCity,
            waypoints = this.waypoints,
            BMap = this.BMap,
            getWaypoints = this.getWaypoints;
        originInstance.search(Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* getPosition */ "b"])(BMap, val), Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* getPosition */ "b"])(BMap, end), {
          startCity: startCity,
          endCity: endCity,
          waypoints: getWaypoints(waypoints)
        });
      },
      deep: true
    },
    end: {
      handler: function handler(val) {
        var originInstance = this.originInstance,
            start = this.start,
            startCity = this.startCity,
            endCity = this.endCity,
            waypoints = this.waypoints,
            BMap = this.BMap,
            getWaypoints = this.getWaypoints;
        originInstance.search(Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* getPosition */ "b"])(BMap, start), Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* getPosition */ "b"])(BMap, val), {
          startCity: startCity,
          endCity: endCity,
          waypoints: getWaypoints(waypoints)
        });
      },
      deep: true
    },
    startCity: function startCity(val) {
      var originInstance = this.originInstance,
          start = this.start,
          end = this.end,
          endCity = this.endCity,
          waypoints = this.waypoints,
          getWaypoints = this.getWaypoints;
      originInstance.search(start, end, {
        val: val,
        endCity: endCity,
        waypoints: getWaypoints(waypoints)
      });
    },
    endCity: function endCity(val) {
      var originInstance = this.originInstance,
          start = this.start,
          end = this.end,
          startCity = this.startCity,
          waypoints = this.waypoints,
          getWaypoints = this.getWaypoints;
      originInstance.search(start, end, {
        startCity: startCity,
        val: val,
        waypoints: getWaypoints(waypoints)
      });
    },
    waypoints: {
      handler: function handler(val) {
        var originInstance = this.originInstance,
            start = this.start,
            end = this.end,
            startCity = this.startCity,
            endCity = this.endCity,
            getWaypoints = this.getWaypoints;
        originInstance.search(start, end, {
          startCity: startCity,
          endCity: endCity,
          waypoints: getWaypoints(val)
        });
      },
      deep: true
    },
    panel: function panel() {
      this.reload();
    },
    policy: function policy(val) {
      this.reload();
    },
    autoViewport: function autoViewport() {
      this.reload();
    },
    selectFirstResult: function selectFirstResult() {
      this.reload();
    },
    highlightMode: function highlightMode() {
      this.reload();
    }
  },
  methods: {
    search: function search(start, end, _ref) {
      var startCity = _ref.startCity,
          endCity = _ref.endCity,
          waypoints = _ref.waypoints;
      var originInstance = this.originInstance,
          getWaypoints = this.getWaypoints;
      originInstance.search(start, end, {
        startCity: startCity,
        endCity: endCity,
        waypoints: getWaypoints(waypoints)
      });
    },
    getWaypoints: function getWaypoints(waypoints) {
      var BMap = this.BMap;

      if (waypoints) {
        return waypoints.map(function (position) {
          return Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* getPosition */ "b"])(BMap, position);
        });
      }
    },
    load: function load() {
      var instance = this;
      var map = this.map,
          BMap = this.BMap,
          location = this.location,
          policy = this.policy,
          selectFirstResult = this.selectFirstResult,
          autoViewport = this.autoViewport,
          highlightMode = this.highlightMode,
          search = this.search,
          start = this.start,
          end = this.end,
          startCity = this.startCity,
          endCity = this.endCity,
          waypoints = this.waypoints,
          originInstance = this.originInstance,
          getWaypoints = this.getWaypoints;

      var _location = location ? Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* isPoint */ "c"])(location) ? Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_4__[/* createPoint */ "d"])(BMap, location) : location : map;

      var route = this.originInstance = new BMap.DrivingRoute(_location, {
        renderOptions: {
          map: map,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult: selectFirstResult,
          autoViewport: autoViewport,
          highlightMode: highlightMode
        },
        policy: global[policy],
        onSearchComplete: function onSearchComplete(e) {
          if (originInstance && originInstance !== route) {
            originInstance.clearResults();
          }

          instance.$emit('searchcomplete', e);
        },
        onMarkersSet: function onMarkersSet(e) {
          instance.$emit('markersset', e);
        },
        onInfoHtmlSet: function onInfoHtmlSet(e) {
          instance.$emit('infohtmlset', e);
        },
        onPolylinesSet: function onPolylinesSet(e) {
          instance.$emit('polylinesset', e);
        },
        onResultsHtmlSet: function onResultsHtmlSet(e) {
          instance.$emit('resultshtmlset', e);
        }
      });
      search(Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* getPosition */ "b"])(BMap, start), Object(_base_util_js__WEBPACK_IMPORTED_MODULE_5__[/* getPosition */ "b"])(BMap, end), {
        startCity: startCity,
        endCity: endCity,
        waypoints: getWaypoints(waypoints)
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "b5c1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("18a5");
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_mixins_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2da4");
/* harmony import */ var _base_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("76f3");




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bm-navigation',
  render: function render() {},
  mixins: [Object(_base_mixins_common_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('control')],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    },
    type: {
      type: String
    },
    showZoomInfo: {
      type: Boolean
    },
    enableGeolocation: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    anchor: function anchor() {
      this.reload();
    },
    offset: function offset() {
      this.reload();
    },
    type: function type() {
      this.reload();
    },
    showZoomInfo: function showZoomInfo() {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          anchor = this.anchor,
          offset = this.offset,
          type = this.type,
          showZoomInfo = this.showZoomInfo,
          enableGeolocation = this.enableGeolocation;
      this.originInstance = new BMap.NavigationControl({
        anchor: global[anchor],
        offset: offset && Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_3__[/* createSize */ "e"])(BMap, offset),
        type: global[type],
        showZoomInfo: showZoomInfo,
        enableGeolocation: enableGeolocation
      });
      map.addControl(this.originInstance);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "bfa3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_mixins_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2da4");
/* harmony import */ var _base_bindEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4fab");
/* harmony import */ var _base_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("76f3");




/* harmony default export */ __webpack_exports__["a"] = ({
  render: function render() {},
  name: 'bm-point-collection',
  mixins: [Object(_base_mixins_common_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('overlay')],
  props: {
    points: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    shape: {
      type: String,
      default: 'BMAP_POINT_SHAPE_CIRCLE'
    },
    color: {
      type: String
    },
    size: {
      type: String,
      default: 'BMAP_POINT_SIZE_NORMAL'
    }
  },
  watch: {
    shape: function shape(val) {
      var originInstance = this.originInstance,
          color = this.color,
          size = this.size;
      originInstance.setStyles({
        shape: global[val],
        color: color,
        size: global[size]
      });
    },
    size: function size(val) {
      var originInstance = this.originInstance,
          color = this.color,
          shape = this.shape;
      originInstance.setStyles({
        shape: global[shape],
        color: color,
        size: global[val]
      });
    },
    color: function color(val) {
      var originInstance = this.originInstance,
          shape = this.shape,
          size = this.size;
      originInstance.setStyles({
        shape: global[shape],
        color: val,
        size: global[size]
      });
    },
    points: {
      deep: true,
      handler: function handler(val) {
        var originInstance = this.originInstance;
        originInstance.clear();
        originInstance.setPoints(val);
      }
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          points = this.points,
          shape = this.shape,
          color = this.color,
          size = this.size;
      var overlay = this.originInstance = new BMap.PointCollection(points.map(function (p) {
        return Object(_base_factory_js__WEBPACK_IMPORTED_MODULE_3__[/* createPoint */ "d"])(BMap, p);
      }), {
        shape: global[shape],
        color: color,
        size: global[size]
      });
      _base_bindEvent_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].call(this, overlay);
      map.addOverlay(overlay);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "fec8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Map; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ Control; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Marker; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ Polyline; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Polygon; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Boundary; });

// UNUSED EXPORTS: BmView, BmScale, BmNavigation, BmMapType, BmOverviewMap, BmGeolocation, BmCopyright, BmCityList, BmPanorama, BmPointCollection, BmCircle, BmGround, BmLabel, BmInfoWindow, BmOverlay, BmContextMenu, BmContextMenuItem, BmLocalSearch, BmTransit, BmWalking, BmDriving, BmBus, BmTile, BmTraffic, BmAutoComplete, BmlMarkerClusterer, BmlLushu, BmlHeatmap, BmlCurveLine

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/map/Map.vue?vue&type=template&id=470f2580&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.hasBmView)?_c('div',{ref:"view",staticStyle:{"width":"100%","height":"100%"}}):_vm._e(),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/map/Map.vue?vue&type=template&id=470f2580&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/map/Map.vue?vue&type=script&lang=js&
var Mapvue_type_script_lang_js_ = __webpack_require__("7f25");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/map/Map.vue?vue&type=script&lang=js&
 /* harmony default export */ var map_Mapvue_type_script_lang_js_ = (Mapvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/map/Map.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  map_Mapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Map = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/map/MapView.vue?vue&type=template&id=183c0d62&
var MapViewvue_type_template_id_183c0d62_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var MapViewvue_type_template_id_183c0d62_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/map/MapView.vue?vue&type=template&id=183c0d62&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/map/MapView.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var MapViewvue_type_script_lang_js_ = ({
  name: 'bm-view'
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/map/MapView.vue?vue&type=script&lang=js&
 /* harmony default export */ var map_MapViewvue_type_script_lang_js_ = (MapViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/map/MapView.vue





/* normalize component */

var MapView_component = Object(componentNormalizer["a" /* default */])(
  map_MapViewvue_type_script_lang_js_,
  MapViewvue_type_template_id_183c0d62_render,
  MapViewvue_type_template_id_183c0d62_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapView = (MapView_component.exports);
// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/controls/Scale.vue?vue&type=script&lang=js&
var Scalevue_type_script_lang_js_ = __webpack_require__("6a21");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/Scale.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_Scalevue_type_script_lang_js_ = (Scalevue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/Scale.vue
var Scale_render, Scale_staticRenderFns




/* normalize component */

var Scale_component = Object(componentNormalizer["a" /* default */])(
  controls_Scalevue_type_script_lang_js_,
  Scale_render,
  Scale_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Scale = (Scale_component.exports);
// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/controls/Navigation.vue?vue&type=script&lang=js&
var Navigationvue_type_script_lang_js_ = __webpack_require__("b5c1");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/Navigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_Navigationvue_type_script_lang_js_ = (Navigationvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/Navigation.vue
var Navigation_render, Navigation_staticRenderFns




/* normalize component */

var Navigation_component = Object(componentNormalizer["a" /* default */])(
  controls_Navigationvue_type_script_lang_js_,
  Navigation_render,
  Navigation_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Navigation = (Navigation_component.exports);
// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/controls/MapType.vue?vue&type=script&lang=js&
var MapTypevue_type_script_lang_js_ = __webpack_require__("0823");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/MapType.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_MapTypevue_type_script_lang_js_ = (MapTypevue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/MapType.vue
var MapType_render, MapType_staticRenderFns




/* normalize component */

var MapType_component = Object(componentNormalizer["a" /* default */])(
  controls_MapTypevue_type_script_lang_js_,
  MapType_render,
  MapType_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapType = (MapType_component.exports);
// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/controls/OverviewMap.vue?vue&type=script&lang=js&
var OverviewMapvue_type_script_lang_js_ = __webpack_require__("8409");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/OverviewMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_OverviewMapvue_type_script_lang_js_ = (OverviewMapvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/OverviewMap.vue
var OverviewMap_render, OverviewMap_staticRenderFns




/* normalize component */

var OverviewMap_component = Object(componentNormalizer["a" /* default */])(
  controls_OverviewMapvue_type_script_lang_js_,
  OverviewMap_render,
  OverviewMap_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OverviewMap = (OverviewMap_component.exports);
// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/controls/Geolocation.vue?vue&type=script&lang=js&
var Geolocationvue_type_script_lang_js_ = __webpack_require__("4757");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/Geolocation.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_Geolocationvue_type_script_lang_js_ = (Geolocationvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/Geolocation.vue
var Geolocation_render, Geolocation_staticRenderFns




/* normalize component */

var Geolocation_component = Object(componentNormalizer["a" /* default */])(
  controls_Geolocationvue_type_script_lang_js_,
  Geolocation_render,
  Geolocation_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Geolocation = (Geolocation_component.exports);
// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/controls/Copyright.vue?vue&type=script&lang=js&
var Copyrightvue_type_script_lang_js_ = __webpack_require__("abed");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/Copyright.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_Copyrightvue_type_script_lang_js_ = (Copyrightvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/Copyright.vue
var Copyright_render, Copyright_staticRenderFns




/* normalize component */

var Copyright_component = Object(componentNormalizer["a" /* default */])(
  controls_Copyrightvue_type_script_lang_js_,
  Copyright_render,
  Copyright_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Copyright = (Copyright_component.exports);
// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/controls/CityList.vue?vue&type=script&lang=js&
var CityListvue_type_script_lang_js_ = __webpack_require__("6160");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/CityList.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_CityListvue_type_script_lang_js_ = (CityListvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/CityList.vue
var CityList_render, CityList_staticRenderFns




/* normalize component */

var CityList_component = Object(componentNormalizer["a" /* default */])(
  controls_CityListvue_type_script_lang_js_,
  CityList_render,
  CityList_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CityList = (CityList_component.exports);
// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/controls/Panorama.vue?vue&type=script&lang=js&
var Panoramavue_type_script_lang_js_ = __webpack_require__("4136");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/Panorama.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_Panoramavue_type_script_lang_js_ = (Panoramavue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/Panorama.vue
var Panorama_render, Panorama_staticRenderFns




/* normalize component */

var Panorama_component = Object(componentNormalizer["a" /* default */])(
  controls_Panoramavue_type_script_lang_js_,
  Panorama_render,
  Panorama_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Panorama = (Panorama_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/controls/Control.vue?vue&type=template&id=04af1729&
var Controlvue_type_template_id_04af1729_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
var Controlvue_type_template_id_04af1729_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/Control.vue?vue&type=template&id=04af1729&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/controls/Control.vue?vue&type=script&lang=js&
var Controlvue_type_script_lang_js_ = __webpack_require__("7a58");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/Control.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_Controlvue_type_script_lang_js_ = (Controlvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/controls/Control.vue





/* normalize component */

var Control_component = Object(componentNormalizer["a" /* default */])(
  controls_Controlvue_type_script_lang_js_,
  Controlvue_type_template_id_04af1729_render,
  Controlvue_type_template_id_04af1729_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Control = (Control_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/overlays/Marker.vue?vue&type=template&id=8b00e1e8&
var Markervue_type_template_id_8b00e1e8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
var Markervue_type_template_id_8b00e1e8_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Marker.vue?vue&type=template&id=8b00e1e8&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/overlays/Marker.vue?vue&type=script&lang=js&
var Markervue_type_script_lang_js_ = __webpack_require__("165e");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Marker.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Markervue_type_script_lang_js_ = (Markervue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Marker.vue





/* normalize component */

var Marker_component = Object(componentNormalizer["a" /* default */])(
  overlays_Markervue_type_script_lang_js_,
  Markervue_type_template_id_8b00e1e8_render,
  Markervue_type_template_id_8b00e1e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Marker = (Marker_component.exports);
// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/overlays/PointCollection.vue?vue&type=script&lang=js&
var PointCollectionvue_type_script_lang_js_ = __webpack_require__("bfa3");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/PointCollection.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_PointCollectionvue_type_script_lang_js_ = (PointCollectionvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/PointCollection.vue
var PointCollection_render, PointCollection_staticRenderFns




/* normalize component */

var PointCollection_component = Object(componentNormalizer["a" /* default */])(
  overlays_PointCollectionvue_type_script_lang_js_,
  PointCollection_render,
  PointCollection_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PointCollection = (PointCollection_component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/vue-baidu-map/components/base/mixins/common.js
var common = __webpack_require__("2da4");

// EXTERNAL MODULE: ./node_modules/vue-baidu-map/components/base/bindEvent.js + 1 modules
var bindEvent = __webpack_require__("4fab");

// EXTERNAL MODULE: ./node_modules/vue-baidu-map/components/base/factory.js
var factory = __webpack_require__("76f3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/overlays/Polyline.vue?vue&type=script&lang=js&





/* harmony default export */ var Polylinevue_type_script_lang_js_ = ({
  name: 'bm-polyline',
  render: function render() {},
  mixins: [Object(common["a" /* default */])('overlay')],
  props: {
    path: {
      type: Array
    },
    strokeColor: {
      type: String
    },
    strokeWeight: {
      type: Number
    },
    strokeOpacity: {
      type: Number
    },
    strokeStyle: {
      type: String
    },
    massClear: {
      type: Boolean,
      default: true
    },
    clicking: {
      type: Boolean,
      default: true
    },
    editing: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    path: {
      handler: function handler(val, oldVal) {
        this.reload();
      },
      deep: true
    },
    strokeColor: function strokeColor(val) {
      this.originInstance.setStrokeColor(val);
    },
    strokeOpacity: function strokeOpacity(val) {
      this.originInstance.setStrokeOpacity(val);
    },
    strokeWeight: function strokeWeight(val) {
      this.originInstance.setStrokeWeight(val);
    },
    strokeStyle: function strokeStyle(val) {
      this.originInstance.setStrokeStyle(val);
    },
    editing: function editing(val) {
      val ? this.originInstance.enableEditing() : this.originInstance.disableEditing();
    },
    massClear: function massClear(val) {
      val ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear();
    },
    clicking: function clicking(val) {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          path = this.path,
          strokeColor = this.strokeColor,
          strokeWeight = this.strokeWeight,
          strokeOpacity = this.strokeOpacity,
          strokeStyle = this.strokeStyle,
          editing = this.editing,
          massClear = this.massClear,
          clicking = this.clicking;
      var overlay = new BMap.Polyline(path.map(function (item) {
        return Object(factory["d" /* createPoint */])(BMap, {
          lng: item.lng,
          lat: item.lat
        });
      }), {
        strokeColor: strokeColor,
        strokeWeight: strokeWeight,
        strokeOpacity: strokeOpacity,
        strokeStyle: strokeStyle,
        enableEditing: editing,
        enableMassClear: massClear,
        enableClicking: clicking
      });
      this.originInstance = overlay;
      map.addOverlay(overlay);
      bindEvent["a" /* default */].call(this, overlay);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Polyline.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Polylinevue_type_script_lang_js_ = (Polylinevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Polyline.vue
var Polyline_render, Polyline_staticRenderFns




/* normalize component */

var Polyline_component = Object(componentNormalizer["a" /* default */])(
  overlays_Polylinevue_type_script_lang_js_,
  Polyline_render,
  Polyline_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Polyline = (Polyline_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/overlays/Polygon.vue?vue&type=script&lang=js&





/* harmony default export */ var Polygonvue_type_script_lang_js_ = ({
  name: 'bm-polygon',
  render: function render() {},
  mixins: [Object(common["a" /* default */])('overlay')],
  props: {
    path: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    strokeColor: {
      type: String
    },
    strokeWeight: {
      type: Number
    },
    strokeOpacity: {
      type: Number
    },
    strokeStyle: {
      type: String
    },
    fillColor: {
      type: String
    },
    fillOpacity: {
      type: Number
    },
    massClear: {
      type: Boolean,
      default: true
    },
    clicking: {
      type: Boolean,
      default: true
    },
    editing: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    path: {
      handler: function handler(val, oldVal) {
        this.reload();
      },
      deep: true
    },
    strokeColor: function strokeColor(val) {
      this.originInstance.setStrokeColor(val);
    },
    strokeOpacity: function strokeOpacity(val) {
      this.originInstance.setStrokeOpacity(val);
    },
    strokeWeight: function strokeWeight(val) {
      this.originInstance.setStrokeWeight(val);
    },
    strokeStyle: function strokeStyle(val) {
      this.originInstance.setStrokeStyle(val);
    },
    fillColor: function fillColor(val) {
      this.originInstance.setFillColor(val);
    },
    fillOpacity: function fillOpacity(val) {
      this.originInstance.setFillOpacity(val);
    },
    editing: function editing(val) {
      val ? this.originInstance.enableEditing() : this.originInstance.disableEditing();
    },
    massClear: function massClear(val) {
      val ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear();
    },
    clicking: function clicking(val) {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          path = this.path,
          strokeColor = this.strokeColor,
          strokeWeight = this.strokeWeight,
          strokeOpacity = this.strokeOpacity,
          strokeStyle = this.strokeStyle,
          fillColor = this.fillColor,
          fillOpacity = this.fillOpacity,
          editing = this.editing,
          massClear = this.massClear,
          clicking = this.clicking;
      var overlay = new BMap.Polygon(path.map(function (item) {
        return Object(factory["d" /* createPoint */])(BMap, {
          lng: item.lng,
          lat: item.lat
        });
      }), {
        strokeColor: strokeColor,
        strokeWeight: strokeWeight,
        strokeOpacity: strokeOpacity,
        strokeStyle: strokeStyle,
        fillColor: fillColor,
        fillOpacity: fillOpacity,
        // enableEditing: editing,
        enableMassClear: massClear,
        enableClicking: clicking
      });
      this.originInstance = overlay;
      map.addOverlay(overlay);
      bindEvent["a" /* default */].call(this, overlay); // 这里有一个诡异的bug，直接给 editing 赋值时会出现未知错误，因为使用下面的方法抹平。

      editing ? overlay.enableEditing() : overlay.disableEditing();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Polygon.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Polygonvue_type_script_lang_js_ = (Polygonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Polygon.vue
var Polygon_render, Polygon_staticRenderFns




/* normalize component */

var Polygon_component = Object(componentNormalizer["a" /* default */])(
  overlays_Polygonvue_type_script_lang_js_,
  Polygon_render,
  Polygon_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Polygon = (Polygon_component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/overlays/Circle.vue?vue&type=script&lang=js&










/* harmony default export */ var Circlevue_type_script_lang_js_ = ({
  name: 'bm-circle',
  render: function render() {},
  mixins: [Object(common["a" /* default */])('overlay')],
  props: {
    center: {},
    radius: {},
    strokeColor: {
      type: String
    },
    strokeWeight: {
      type: Number
    },
    strokeOpacity: {
      type: Number
    },
    strokeStyle: {
      type: String
    },
    fillColor: {
      type: String
    },
    fillOpacity: {
      type: Number
    },
    massClear: {
      type: Boolean,
      default: true
    },
    clicking: {
      type: Boolean,
      default: true
    },
    editing: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    'center.lng': function centerLng(val, oldVal) {
      var BMap = this.BMap,
          originInstance = this.originInstance,
          isEditing = this.isEditing,
          disableEditing = this.disableEditing,
          enableEditing = this.enableEditing,
          center = this.center,
          editing = this.editing;

      if (!isEditing) {
        disableEditing();
        var lng = val;

        if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
          originInstance.setCenter(Object(factory["d" /* createPoint */])(BMap, {
            lng: lng,
            lat: center.lat
          }));
        }

        editing && enableEditing();
      }
    },
    'center.lat': function centerLat(val, oldVal) {
      var BMap = this.BMap,
          originInstance = this.originInstance,
          isEditing = this.isEditing,
          disableEditing = this.disableEditing,
          enableEditing = this.enableEditing,
          center = this.center,
          editing = this.editing;

      if (!isEditing) {
        disableEditing();
        var lat = val;

        if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
          originInstance.setCenter(Object(factory["d" /* createPoint */])(BMap, {
            lng: center.lng,
            lat: lat
          }));
        }

        editing && enableEditing();
      }
    },
    radius: function radius(val, oldVal) {
      var originInstance = this.originInstance,
          isEditing = this.isEditing,
          disableEditing = this.disableEditing,
          enableEditing = this.enableEditing,
          editing = this.editing;

      if (!isEditing) {
        disableEditing();
        originInstance.setRadius(val);
        editing && enableEditing();
      }
    },
    strokeColor: function strokeColor(val) {
      this.originInstance.setStrokeColor(val);
    },
    strokeOpacity: function strokeOpacity(val) {
      this.originInstance.setStrokeOpacity(val);
    },
    strokeWeight: function strokeWeight(val) {
      this.originInstance.setStrokeWeight(val);
    },
    strokeStyle: function strokeStyle(val) {
      this.originInstance.setStrokeStyle(val);
    },
    fillColor: function fillColor(val) {
      this.originInstance.setFillColor(val);
    },
    fillOpacity: function fillOpacity(val) {
      this.originInstance.setFillOpacity(val);
    },
    editing: function editing(val) {
      val ? this.enableEditing() : this.disableEditing();
    },
    massClear: function massClear(val) {
      val ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear();
    },
    clicking: function clicking(val) {
      this.reload();
    }
  },
  methods: {
    dragStartHandler: function dragStartHandler() {
      this.isEditing = true;
    },
    dragEndHandler: function dragEndHandler() {
      this.isEditing = false;
      this.bindEditingNodeEvents();
    },
    bindEditingNodeEvents: function bindEditingNodeEvents() {
      var originInstance = this.originInstance,
          editingKey = this.editingKey,
          dragStartHandler = this.dragStartHandler,
          dragEndHandler = this.dragEndHandler;
      originInstance[editingKey].forEach(function ($node) {
        $node.addEventListener('dragstart', dragStartHandler);
        $node.addEventListener('dragend', dragEndHandler);
      });
    },
    enableEditing: function enableEditing() {
      var originInstance = this.originInstance,
          bindEditingNodeEvents = this.bindEditingNodeEvents;
      originInstance.enableEditing();
      bindEditingNodeEvents();
    },
    disableEditing: function disableEditing() {
      var originInstance = this.originInstance;
      originInstance.disableEditing();
    },
    getEditingKey: function getEditingKey(overlay) {
      var _this = this;

      var stack = [];
      overlay.enableEditing();
      setTimeout(function () {
        for (var key in overlay) {
          if (overlay[key] && overlay[key].length === 2) {
            stack.push(key);
          }
        }

        overlay.disableEditing();

        for (var _key in overlay) {
          if (overlay[_key] && overlay[_key].length === 0 && ~stack.indexOf(_key)) {
            _this.editingKey = _key;
          }
        }
      }, 0);
    },
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          center = this.center,
          radius = this.radius,
          strokeColor = this.strokeColor,
          strokeWeight = this.strokeWeight,
          strokeOpacity = this.strokeOpacity,
          strokeStyle = this.strokeStyle,
          fillColor = this.fillColor,
          fillOpacity = this.fillOpacity,
          editing = this.editing,
          massClear = this.massClear,
          clicking = this.clicking,
          enableEditing = this.enableEditing,
          disableEditing = this.disableEditing,
          getEditingKey = this.getEditingKey,
          editingKey = this.editingKey;
      var overlay = new BMap.Circle(Object(factory["d" /* createPoint */])(BMap, {
        lng: center.lng,
        lat: center.lat
      }), radius, {
        strokeColor: strokeColor,
        strokeWeight: strokeWeight,
        strokeOpacity: strokeOpacity,
        strokeStyle: strokeStyle,
        fillColor: fillColor,
        fillOpacity: fillOpacity,
        // enableEditing: editing,
        enableMassClear: massClear,
        enableClicking: clicking
      });
      this.originInstance = overlay;
      map.addOverlay(overlay);
      bindEvent["a" /* default */].call(this, overlay); // 解决圆形组件无法双向绑定的问题

      !editingKey && getEditingKey(overlay);
      setTimeout(function () {
        editing ? enableEditing() : disableEditing();
      }, 0);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Circle.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Circlevue_type_script_lang_js_ = (Circlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Circle.vue
var Circle_render, Circle_staticRenderFns




/* normalize component */

var Circle_component = Object(componentNormalizer["a" /* default */])(
  overlays_Circlevue_type_script_lang_js_,
  Circle_render,
  Circle_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Circle = (Circle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/overlays/Ground.vue?vue&type=script&lang=js&





/* harmony default export */ var Groundvue_type_script_lang_js_ = ({
  name: 'bm-ground',
  render: function render() {},
  mixins: [Object(common["a" /* default */])('overlay')],
  props: {
    bounds: {
      type: Object
    },
    opacity: {
      type: Number
    },
    imageURL: {
      type: String
    },
    displayOnMinLevel: {
      type: Number
    },
    displayOnMaxLevel: {
      type: Number
    }
  },
  watch: {
    bounds: {
      handler: function handler(val) {
        var BMap = this.BMap;
        this.originInstance.setBounds(Object(factory["a" /* createBounds */])(BMap, val));
      },
      deep: true
    },
    opacity: function opacity(val) {
      this.originInstance.setOpacity(val);
    },
    imageURL: function imageURL(val) {
      this.originInstance.setImageURL(val);
    },
    displayOnMinLevel: function displayOnMinLevel(val) {
      this.originInstance.setDisplayOnMinLevel(val);
    },
    displayOnMaxLevel: function displayOnMaxLevel(val) {
      this.originInstance.setDisplayOnMaxLevel(val);
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          bounds = this.bounds,
          opacity = this.opacity,
          imageURL = this.imageURL,
          displayOnMinLevel = this.displayOnMinLevel,
          displayOnMaxLevel = this.displayOnMaxLevel;
      var overlay = new BMap.GroundOverlay(bounds && Object(factory["a" /* createBounds */])(BMap, bounds), {
        opacity: opacity,
        imageURL: imageURL,
        displayOnMaxLevel: displayOnMaxLevel,
        displayOnMinLevel: displayOnMinLevel
      }); // option 中配置 https 协议地址无法加载

      overlay.setImageURL(imageURL);
      this.originInstance = overlay;
      bindEvent["a" /* default */].call(this, overlay);
      map.addOverlay(overlay);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Ground.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Groundvue_type_script_lang_js_ = (Groundvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Ground.vue
var Ground_render, Ground_staticRenderFns




/* normalize component */

var Ground_component = Object(componentNormalizer["a" /* default */])(
  overlays_Groundvue_type_script_lang_js_,
  Ground_render,
  Ground_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ground = (Ground_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/overlays/Label.vue?vue&type=script&lang=js&







/* harmony default export */ var Labelvue_type_script_lang_js_ = ({
  name: 'bm-label',
  render: function render() {},
  mixins: [Object(common["a" /* default */])('overlay')],
  props: {
    content: {
      type: String
    },
    title: {
      type: String
    },
    offset: {},
    position: {},
    labelStyle: {},
    zIndex: {
      type: Number,
      default: 0
    },
    massClear: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    content: function content(val) {
      this.originInstance.setContent(val);
    },
    title: function title(val) {
      this.originInstance.setTitle(val);
    },
    'offset.width': function offsetWidth(val, oldVal) {
      var BMap = this.BMap;

      if (val.toString() !== oldVal.toString()) {
        this.originInstance.setOffset(Object(factory["e" /* createSize */])(BMap, {
          width: val,
          height: this.offset.height
        }));
      }
    },
    'offset.height': function offsetHeight(val, oldVal) {
      var BMap = this.BMap;

      if (val.toString() !== oldVal.toString()) {
        this.originInstance.setOffset(Object(factory["e" /* createSize */])(BMap, {
          width: this.offset.width,
          height: val
        }));
      }
    },
    'position.lng': function positionLng(val, oldVal) {
      var BMap = this.BMap;
      var lng = val;

      if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
        this.originInstance.setCenter(Object(factory["d" /* createPoint */])(BMap, {
          lng: lng,
          lat: this.center.lat
        }));
      }
    },
    'position.lat': function positionLat(val, oldVal) {
      var BMap = this.BMap;
      var lat = val;

      if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
        this.originInstance.setCenter(Object(factory["d" /* createPoint */])(BMap, {
          lng: this.center.lng,
          lat: lat
        }));
      }
    },
    labelStyle: {
      handler: function handler(val) {
        this.originInstance.setStyle(val);
      },
      deep: true
    },
    zIndex: function zIndex(val) {
      this.originInstance.setZIndex(val);
    },
    massClear: function massClear(val) {
      val ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear();
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          content = this.content,
          title = this.title,
          offset = this.offset,
          position = this.position,
          labelStyle = this.labelStyle,
          zIndex = this.zIndex,
          massClear = this.massClear,
          $parent = this.$parent;
      var overlay = new BMap.Label(content, {
        offset: Object(factory["e" /* createSize */])(BMap, offset),
        position: Object(factory["d" /* createPoint */])(BMap, position),
        enableMassClear: massClear
      });
      this.originInstance = overlay;

      try {
        $parent.originInstance.setLabel(overlay);
      } catch (e) {
        map.addOverlay(overlay);
      }

      title && overlay.setTitle(title);
      labelStyle && overlay.setStyle(labelStyle);
      zIndex && overlay.setZIndex(zIndex);
      bindEvent["a" /* default */].call(this, overlay);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Label.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Labelvue_type_script_lang_js_ = (Labelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Label.vue
var Label_render, Label_staticRenderFns




/* normalize component */

var Label_component = Object(componentNormalizer["a" /* default */])(
  overlays_Labelvue_type_script_lang_js_,
  Label_render,
  Label_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Label = (Label_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/overlays/InfoWindow.vue?vue&type=template&id=6b5c0453&
var InfoWindowvue_type_template_id_6b5c0453_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}]},[_vm._t("default")],2)}
var InfoWindowvue_type_template_id_6b5c0453_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/InfoWindow.vue?vue&type=template&id=6b5c0453&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/overlays/InfoWindow.vue?vue&type=script&lang=js&
var InfoWindowvue_type_script_lang_js_ = __webpack_require__("7b51");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/InfoWindow.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_InfoWindowvue_type_script_lang_js_ = (InfoWindowvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/InfoWindow.vue





/* normalize component */

var InfoWindow_component = Object(componentNormalizer["a" /* default */])(
  overlays_InfoWindowvue_type_script_lang_js_,
  InfoWindowvue_type_template_id_6b5c0453_render,
  InfoWindowvue_type_template_id_6b5c0453_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InfoWindow = (InfoWindow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/overlays/Overlay.vue?vue&type=template&id=94244088&
var Overlayvue_type_template_id_94244088_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
var Overlayvue_type_template_id_94244088_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Overlay.vue?vue&type=template&id=94244088&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("262e");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 4 modules
var createSuper = __webpack_require__("2caf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/overlays/Overlay.vue?vue&type=script&lang=js&





//
//
//
//
//
//

/* harmony default export */ var Overlayvue_type_script_lang_js_ = ({
  name: 'bm-overlay',
  mixins: [Object(common["a" /* default */])('overlay')],
  props: {
    pane: {
      type: String
    }
  },
  watch: {
    pane: function pane() {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          $el = this.$el,
          pane = this.pane;
      var $emit = this.$emit.bind(this);

      var CustomOverlay = /*#__PURE__*/function (_BMap$Overlay) {
        Object(inherits["a" /* default */])(CustomOverlay, _BMap$Overlay);

        var _super = Object(createSuper["a" /* default */])(CustomOverlay);

        function CustomOverlay() {
          Object(classCallCheck["a" /* default */])(this, CustomOverlay);

          return _super.apply(this, arguments);
        }

        Object(createClass["a" /* default */])(CustomOverlay, [{
          key: "initialize",
          value: function initialize() {
            $emit('initialize', {
              BMap: BMap,
              map: map,
              el: $el,
              overlay: this
            });

            try {
              map.getPanes()[pane].appendChild($el);
            } catch (e) {}

            return $el;
          }
        }, {
          key: "draw",
          value: function draw() {
            $emit('draw', {
              BMap: BMap,
              map: map,
              el: $el,
              overlay: this
            });
          }
        }]);

        return CustomOverlay;
      }(BMap.Overlay);

      var overlay = new CustomOverlay();
      this.originInstance = overlay;
      map.addOverlay(overlay);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Overlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Overlayvue_type_script_lang_js_ = (Overlayvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/overlays/Overlay.vue





/* normalize component */

var Overlay_component = Object(componentNormalizer["a" /* default */])(
  overlays_Overlayvue_type_script_lang_js_,
  Overlayvue_type_template_id_94244088_render,
  Overlayvue_type_template_id_94244088_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Overlay = (Overlay_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/context-menu/Menu.vue?vue&type=template&id=463e006b&
var Menuvue_type_template_id_463e006b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
var Menuvue_type_template_id_463e006b_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/context-menu/Menu.vue?vue&type=template&id=463e006b&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__("b85c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/context-menu/Menu.vue?vue&type=script&lang=js&



//
//
//
//
//
//

/* harmony default export */ var Menuvue_type_script_lang_js_ = ({
  name: 'bm-context-menu',
  props: {
    width: {
      type: Number
    }
  },
  mixins: [Object(common["a" /* default */])('contextMenu')],
  methods: {
    load: function load() {
      var width = this.width,
          BMap = this.BMap,
          map = this.map,
          $parent = this.$parent;
      var parent = this.parent = $parent.originInstance || map;

      if (this.originInstance) {
        parent.removeContextMenu(this.originInstance);
      }

      var menu = this.originInstance = new BMap.ContextMenu();

      var _iterator = Object(createForOfIteratorHelper["a" /* default */])(this.$children),
          _step;

      try {
        var _loop = function _loop() {
          var item = _step.value;

          if (item.seperator) {
            menu.addSeparator();
            return "continue";
          }

          var menuItem = new BMap.MenuItem(item.text, function (point, pixel) {
            item.callback({
              point: point,
              pixel: pixel,
              BMap: BMap,
              map: map,
              target: parent
            });
          }, {
            width: width,
            id: item.id,
            iconUrl: item.iconUrl
          });
          item.disabled ? menuItem.disable() : menuItem.enable();
          item.originInstance = menuItem;
          menu.addItem(menuItem);
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();

          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      parent.addContextMenu(menu);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/context-menu/Menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var context_menu_Menuvue_type_script_lang_js_ = (Menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/context-menu/Menu.vue





/* normalize component */

var Menu_component = Object(componentNormalizer["a" /* default */])(
  context_menu_Menuvue_type_script_lang_js_,
  Menuvue_type_template_id_463e006b_render,
  Menuvue_type_template_id_463e006b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Menu = (Menu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/context-menu/Item.vue?vue&type=template&id=3e9cc08b&
var Itemvue_type_template_id_3e9cc08b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._t("default")],2)}
var Itemvue_type_template_id_3e9cc08b_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/context-menu/Item.vue?vue&type=template&id=3e9cc08b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/context-menu/Item.vue?vue&type=script&lang=js&

//
//
//
//
//
/* harmony default export */ var Itemvue_type_script_lang_js_ = ({
  name: 'bm-context-menu-item',
  props: {
    callback: {
      type: Function,
      default: function _default() {}
    },
    text: {
      type: String
    },
    iconUrl: {
      type: String
    },
    id: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    seperator: {
      type: Boolean
    }
  },
  methods: {
    reload: function reload() {
      this.$parent.map && this.$parent.load();
    }
  },
  watch: {
    text: function text() {
      this.reload();
    },
    iconUrl: function iconUrl() {
      this.reload();
    },
    id: function id() {
      this.reload();
    },
    disabled: function disabled() {
      this.reload();
    },
    iseperator: function iseperator() {
      this.reload();
    },
    callback: function callback() {
      this.reload();
    }
  },
  destroyed: function destroyed() {
    this.reload();
  },
  mounted: function mounted() {
    this.reload();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/context-menu/Item.vue?vue&type=script&lang=js&
 /* harmony default export */ var context_menu_Itemvue_type_script_lang_js_ = (Itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/context-menu/Item.vue





/* normalize component */

var Item_component = Object(componentNormalizer["a" /* default */])(
  context_menu_Itemvue_type_script_lang_js_,
  Itemvue_type_template_id_3e9cc08b_render,
  Itemvue_type_template_id_3e9cc08b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Item = (Item_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/search/LocalSearch.vue?vue&type=template&id=281ec2d5&
var LocalSearchvue_type_template_id_281ec2d5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.panel),expression:"panel"}]},[_vm._t("default")],2)}
var LocalSearchvue_type_template_id_281ec2d5_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/LocalSearch.vue?vue&type=template&id=281ec2d5&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("841c");

// EXTERNAL MODULE: ./node_modules/vue-baidu-map/components/base/util.js
var util = __webpack_require__("33d3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/search/LocalSearch.vue?vue&type=script&lang=js&




//
//
//
//
//
//



/* harmony default export */ var LocalSearchvue_type_script_lang_js_ = ({
  name: 'bm-local-search',
  mixins: [Object(common["a" /* default */])('search')],
  props: {
    location: {
      type: [Object, String]
    },
    keyword: {
      type: [Array, String]
    },
    panel: {
      type: Boolean,
      default: true
    },
    forceLocal: {
      type: Boolean
    },
    customData: {
      type: Object
    },
    bounds: {
      type: Object
    },
    nearby: {
      type: Object
    },
    // page: {
    //   type: Number
    // },
    pageCapacity: {
      type: Number
    },
    autoViewport: {
      type: Boolean
    },
    selectFirstResult: {
      type: Boolean
    }
  },
  watch: {
    location: {
      handler: function handler(val) {
        var originInstance = this.originInstance,
            search = this.search;
        originInstance.setLocation(val || this.map);
        search();
      },
      deep: true
    },
    keyword: function keyword() {
      this.search();
    },
    bounds: {
      handler: function handler(val) {
        var searchInBounds = this.searchInBounds;
        searchInBounds(val);
      },
      deep: true
    },
    nearby: {
      handler: function handler(val) {
        var searchNearby = this.searchNearby;
        searchNearby(val);
      },
      deep: true
    },
    forceLocal: function forceLocal() {
      this.reload();
    },
    customData: {
      deep: true,
      handler: function handler() {
        this.reload();
      }
    },
    // panel () {
    //   this.reload()
    // },
    pageCapacity: function pageCapacity(val) {
      this.originInstance && this.originInstance.setPageCapacity(val);
    },
    autoViewport: function autoViewport(val) {
      this.originInstance && (val ? this.originInstance.enableAutoViewport() : this.originInstance.disableAutoViewport());
    },
    selectFirstResult: function selectFirstResult(val) {
      this.originInstance && (val ? this.originInstance.enableFirstResultSelection() : this.originInstance.disableFirstResultSelection());
    },
    highlightMode: function highlightMode() {
      this.reload();
    }
  },
  methods: {
    searchNearby: function searchNearby(nearby) {
      var originInstance = this.originInstance,
          keyword = this.keyword,
          customData = this.customData,
          BMap = this.BMap;
      originInstance.searchNearby(keyword, Object(factory["d" /* createPoint */])(BMap, nearby.center), nearby.radius, customData);
    },
    searchInBounds: function searchInBounds(bounds) {
      var originInstance = this.originInstance,
          keyword = this.keyword,
          customData = this.customData,
          BMap = this.BMap;
      originInstance.searchInBounds(keyword, Object(factory["a" /* createBounds */])(BMap, bounds), customData);
    },
    search: function search() {
      var originInstance = this.originInstance,
          keyword = this.keyword,
          forceLocal = this.forceLocal,
          customData = this.customData,
          nearby = this.nearby,
          bounds = this.bounds,
          searchNearby = this.searchNearby,
          searchInBounds = this.searchInBounds;
      nearby ? searchNearby(nearby) : bounds ? searchInBounds(bounds) : originInstance.search(keyword, {
        forceLocal: forceLocal,
        customData: customData
      });
    },
    load: function load() {
      var instance = this;
      var map = this.map,
          BMap = this.BMap,
          search = this.search,
          pageCapacity = this.pageCapacity,
          autoViewport = this.autoViewport,
          selectFirstResult = this.selectFirstResult,
          highlightMode = this.highlightMode,
          location = this.location,
          originInstance = this.originInstance;

      var _location = location ? Object(util["c" /* isPoint */])(location) ? Object(factory["d" /* createPoint */])(BMap, location) : location : map;

      var route = this.originInstance = new BMap.LocalSearch(_location, {
        onMarkersSet: function onMarkersSet(e) {
          instance.$emit('markersset', e);
        },
        onInfoHtmlSet: function onInfoHtmlSet(e) {
          instance.$emit('infohtmlset', e);
        },
        onResultsHtmlSet: function onResultsHtmlSet(e) {
          instance.$emit('resultshtmlset', e);
        },
        onSearchComplete: function onSearchComplete(e) {
          if (originInstance && originInstance !== route) {
            originInstance.clearResults();
          }

          instance.$emit('searchcomplete', e);
        },
        pageCapacity: pageCapacity,
        renderOptions: {
          map: map,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult: selectFirstResult,
          autoViewport: autoViewport,
          highlightMode: highlightMode
        }
      });
      search();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/LocalSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_LocalSearchvue_type_script_lang_js_ = (LocalSearchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/LocalSearch.vue





/* normalize component */

var LocalSearch_component = Object(componentNormalizer["a" /* default */])(
  search_LocalSearchvue_type_script_lang_js_,
  LocalSearchvue_type_template_id_281ec2d5_render,
  LocalSearchvue_type_template_id_281ec2d5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LocalSearch = (LocalSearch_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/search/Transit.vue?vue&type=template&id=6978b94a&
var Transitvue_type_template_id_6978b94a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.panel),expression:"panel"}]},[_vm._t("default")],2)}
var Transitvue_type_template_id_6978b94a_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/Transit.vue?vue&type=template&id=6978b94a&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/search/Transit.vue?vue&type=script&lang=js&
var Transitvue_type_script_lang_js_ = __webpack_require__("16d1");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/Transit.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_Transitvue_type_script_lang_js_ = (Transitvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/Transit.vue





/* normalize component */

var Transit_component = Object(componentNormalizer["a" /* default */])(
  search_Transitvue_type_script_lang_js_,
  Transitvue_type_template_id_6978b94a_render,
  Transitvue_type_template_id_6978b94a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Transit = (Transit_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/search/Walking.vue?vue&type=template&id=3db0ebfa&
var Walkingvue_type_template_id_3db0ebfa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.panel),expression:"panel"}]},[_vm._t("default")],2)}
var Walkingvue_type_template_id_3db0ebfa_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/Walking.vue?vue&type=template&id=3db0ebfa&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/search/Walking.vue?vue&type=script&lang=js&




//
//
//
//
//
//



/* harmony default export */ var Walkingvue_type_script_lang_js_ = ({
  name: 'bm-walking',
  mixins: [Object(common["a" /* default */])('search')],
  props: {
    location: {
      type: [Object, String]
    },
    start: {
      type: [Object, String]
    },
    end: {
      type: [Object, String]
    },
    panel: {
      type: Boolean,
      default: true
    },
    pageCapacity: {
      type: Number
    },
    autoViewport: {
      type: Boolean
    },
    selectFirstResult: {
      type: Boolean
    }
  },
  watch: {
    location: {
      handler: function handler(val) {
        var originInstance = this.originInstance,
            map = this.map;
        originInstance.setLocation(val || map);
      },
      deep: true
    },
    start: {
      handler: function handler(val) {
        var originInstance = this.originInstance,
            end = this.end,
            BMap = this.BMap;
        originInstance.search(Object(util["b" /* getPosition */])(BMap, val), Object(util["b" /* getPosition */])(BMap, end));
      },
      deep: true
    },
    end: {
      handler: function handler(val) {
        var originInstance = this.originInstance,
            start = this.start,
            BMap = this.BMap;
        originInstance.search(Object(util["b" /* getPosition */])(BMap, start), Object(util["b" /* getPosition */])(BMap, val));
      },
      deep: true
    },
    panel: function panel() {
      this.reload();
    },
    autoViewport: function autoViewport(val) {
      this.reload();
    },
    selectFirstResult: function selectFirstResult(val) {
      this.reload();
    },
    highlightMode: function highlightMode() {
      this.reload();
    }
  },
  methods: {
    search: function search(start, end) {
      var originInstance = this.originInstance;
      originInstance.search(start, end);
    },
    load: function load() {
      var instance = this;
      var map = this.map,
          BMap = this.BMap,
          location = this.location,
          selectFirstResult = this.selectFirstResult,
          autoViewport = this.autoViewport,
          highlightMode = this.highlightMode,
          search = this.search,
          start = this.start,
          end = this.end,
          originInstance = this.originInstance;

      var _location = location ? Object(util["c" /* isPoint */])(location) ? Object(factory["d" /* createPoint */])(BMap, location) : location : map;

      var route = this.originInstance = new BMap.WalkingRoute(_location, {
        renderOptions: {
          map: map,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult: selectFirstResult,
          autoViewport: autoViewport,
          highlightMode: highlightMode
        },
        onSearchComplete: function onSearchComplete(e) {
          if (originInstance && originInstance !== route) {
            originInstance.clearResults();
          }

          instance.$emit('searchcomplete', e);
        },
        onMarkersSet: function onMarkersSet(e) {
          instance.$emit('markersset', e);
        },
        onInfoHtmlSet: function onInfoHtmlSet(e) {
          instance.$emit('infohtmlset', e);
        },
        onPolylinesSet: function onPolylinesSet(e) {
          instance.$emit('polylinesset', e);
        },
        onResultsHtmlSet: function onResultsHtmlSet(e) {
          instance.$emit('resultshtmlset', e);
        }
      });
      search(Object(util["c" /* isPoint */])(start) ? Object(factory["d" /* createPoint */])(BMap, start) : start, Object(util["c" /* isPoint */])(end) ? Object(factory["d" /* createPoint */])(BMap, end) : end);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/Walking.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_Walkingvue_type_script_lang_js_ = (Walkingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/Walking.vue





/* normalize component */

var Walking_component = Object(componentNormalizer["a" /* default */])(
  search_Walkingvue_type_script_lang_js_,
  Walkingvue_type_template_id_3db0ebfa_render,
  Walkingvue_type_template_id_3db0ebfa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Walking = (Walking_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/search/Driving.vue?vue&type=template&id=01f26479&
var Drivingvue_type_template_id_01f26479_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.panel),expression:"panel"}]},[_vm._t("default")],2)}
var Drivingvue_type_template_id_01f26479_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/Driving.vue?vue&type=template&id=01f26479&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/search/Driving.vue?vue&type=script&lang=js&
var Drivingvue_type_script_lang_js_ = __webpack_require__("b0f5");

// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/Driving.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_Drivingvue_type_script_lang_js_ = (Drivingvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/Driving.vue





/* normalize component */

var Driving_component = Object(componentNormalizer["a" /* default */])(
  search_Drivingvue_type_script_lang_js_,
  Drivingvue_type_template_id_01f26479_render,
  Drivingvue_type_template_id_01f26479_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Driving = (Driving_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/search/Bus.vue?vue&type=template&id=55bc20dc&
var Busvue_type_template_id_55bc20dc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.panel),expression:"panel"}]})}
var Busvue_type_template_id_55bc20dc_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/Bus.vue?vue&type=template&id=55bc20dc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/search/Bus.vue?vue&type=script&lang=js&




//
//
//
//
//



/* harmony default export */ var Busvue_type_script_lang_js_ = ({
  name: 'bm-bus',
  mixins: [Object(common["a" /* default */])('search')],
  props: {
    location: {
      type: [Object, String]
    },
    keyword: {
      type: String
    },
    panel: {
      type: Boolean,
      default: true
    },
    pageCapacity: {
      type: Number
    },
    autoViewport: {
      type: Boolean
    },
    selectFirstResult: {
      type: Boolean
    }
  },
  watch: {
    location: {
      handler: function handler(val) {
        var originInstance = this.originInstance,
            map = this.map;
        originInstance.setLocation(val || map);
      },
      deep: true
    },
    keyword: function keyword(val) {
      this.search(val);
    },
    panel: function panel() {
      this.reload();
    },
    autoViewport: function autoViewport(val) {
      this.reload();
    },
    selectFirstResult: function selectFirstResult(val) {
      this.reload();
    }
  },
  methods: {
    search: function search(keyword) {
      var originInstance = this.originInstance;
      originInstance.getBusList(keyword);
    },
    load: function load() {
      var instance = this;
      var location = this.location,
          selectFirstResult = this.selectFirstResult,
          autoViewport = this.autoViewport,
          highlightMode = this.highlightMode,
          keyword = this.keyword,
          search = this.search,
          BMap = this.BMap,
          map = this.map,
          originInstance = this.originInstance;

      var _location = location ? Object(util["c" /* isPoint */])(location) ? Object(factory["d" /* createPoint */])(BMap, location) : location : map;

      var route = this.originInstance = new BMap.BusLineSearch(_location, {
        renderOptions: {
          map: map,
          panel: this.$el,
          selectFirstResult: selectFirstResult,
          autoViewport: autoViewport,
          highlightMode: highlightMode
        },
        onGetBusListComplete: function onGetBusListComplete(e) {
          if (originInstance && originInstance !== route) {
            originInstance.clearResults();
          }

          instance.$emit('getbuslistcomplete', e);
        },
        onGetBusLineComplete: function onGetBusLineComplete(e) {
          if (originInstance && originInstance !== route) {
            originInstance.clearResults();
          }

          instance.$emit('getbuslinecomplete', e);
        },
        onBusListHtmlSet: function onBusListHtmlSet(e) {
          instance.$emit('buslisthtmlset', e);
        },
        onBusLineHtmlSet: function onBusLineHtmlSet(e) {
          instance.$emit('buslinehtmlset', e);
        },
        onMarkersSet: function onMarkersSet(e) {
          instance.$emit('markersset', e);
        },
        onPolylinesSet: function onPolylinesSet(e) {
          instance.$emit('polylinesset', e);
        }
      });
      search(keyword);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/Bus.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_Busvue_type_script_lang_js_ = (Busvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/search/Bus.vue





/* normalize component */

var Bus_component = Object(componentNormalizer["a" /* default */])(
  search_Busvue_type_script_lang_js_,
  Busvue_type_template_id_55bc20dc_render,
  Busvue_type_template_id_55bc20dc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Bus = (Bus_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/layers/Tile.vue?vue&type=script&lang=js&




/* harmony default export */ var Tilevue_type_script_lang_js_ = ({
  name: 'bm-tile',
  render: function render(h) {},
  mixins: [Object(common["a" /* default */])('layer')],
  props: {
    transparentPng: {
      type: Boolean
    },
    tileUrlTemplate: {
      type: String
    },
    copyright: {},
    zIndex: {
      type: Number
    }
  },
  watch: {
    transparentPng: function transparentPng() {
      this.reload();
    },
    tileUrlTemplate: function tileUrlTemplate() {
      this.reload();
    },
    copyright: function copyright() {
      this.reload();
    },
    zIndex: function zIndex() {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          transparentPng = this.transparentPng,
          tileUrlTemplate = this.tileUrlTemplate,
          copyright = this.copyright,
          zIndex = this.zIndex;
      this.originInstance = new BMap.TileLayer({
        transparentPng: transparentPng,
        tileUrlTemplate: tileUrlTemplate,
        copyright: copyright && {
          id: copyright.id,
          content: copyright.content,
          bounds: copyright.bounds && Object(factory["a" /* createBounds */])(copyright.bounds)
        },
        zIndex: zIndex
      });
      map.addTileLayer(this.originInstance);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/layers/Tile.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_Tilevue_type_script_lang_js_ = (Tilevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/layers/Tile.vue
var Tile_render, Tile_staticRenderFns




/* normalize component */

var Tile_component = Object(componentNormalizer["a" /* default */])(
  layers_Tilevue_type_script_lang_js_,
  Tile_render,
  Tile_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tile = (Tile_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/layers/Traffic.vue?vue&type=script&lang=js&


/* harmony default export */ var Trafficvue_type_script_lang_js_ = ({
  name: 'bm-triffic',
  render: function render(h) {},
  mixins: [Object(common["a" /* default */])('layer')],
  props: {
    predictDate: {
      type: Object
    }
  },
  watch: {
    'pridictDate.weekday': function pridictDateWeekday() {
      this.reload();
    },
    'pridictDate.hour': function pridictDateHour() {
      this.reload();
    },
    pridictDate: function pridictDate() {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var pridictDate = this.pridictDate,
          BMap = this.BMap,
          map = this.map;
      this.originInstance = new BMap.TrafficLayer({
        pridictDate: pridictDate
      });
      map.addTileLayer(this.originInstance);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/layers/Traffic.vue?vue&type=script&lang=js&
 /* harmony default export */ var layers_Trafficvue_type_script_lang_js_ = (Trafficvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/layers/Traffic.vue
var Traffic_render, Traffic_staticRenderFns




/* normalize component */

var Traffic_component = Object(componentNormalizer["a" /* default */])(
  layers_Trafficvue_type_script_lang_js_,
  Traffic_render,
  Traffic_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Traffic = (Traffic_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/others/Boundary.vue?vue&type=template&id=b3544044&
var Boundaryvue_type_template_id_b3544044_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.paths.length)?_c('div',_vm._l((_vm.paths),function(path,index){return _c('bm-polygon',{key:index,attrs:{"path":path,"stroke-color":_vm.strokeColor,"stroke-weight":_vm.strokeWeight,"stroke-opacity":_vm.strokeOpacity,"stroke-style":_vm.strokeStyle,"fill-opacity":_vm.fillOpacity,"fill-color":_vm.fillColor,"mass-clear":_vm.massClear,"clicking":_vm.clicking},on:{"click":function($event){return _vm.$emit('click', $event)},"dblclick":function($event){return _vm.$emit('dblclick', $event)},"mousedown":function($event){return _vm.$emit('mousedown', $event)},"mouseup":function($event){return _vm.$emit('mouseup', $event)},"mouseout":function($event){return _vm.$emit('mouseout', $event)},"mouseover":function($event){return _vm.$emit('mouseover', $event)},"remove":function($event){return _vm.$emit('remove', $event)}}})}),1):_vm._e()}
var Boundaryvue_type_template_id_b3544044_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/others/Boundary.vue?vue&type=template&id=b3544044&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("3835");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/others/Boundary.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import abstractMixin from '../base/mixins/abstract.js'

/* harmony default export */ var Boundaryvue_type_script_lang_js_ = ({
  mixins: [Object(common["a" /* default */])('abstract')],
  props: ['name', 'strokeColor', 'strokeWeight', 'strokeOpacity', 'strokeStyle', 'fillColor', 'fillOpacity', 'massClear', 'clicking'],
  data: function data() {
    return {
      paths: []
    };
  },
  components: {
    BmPolygon: Polygon
  },
  watch: {
    name: function name() {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var _this = this;

      var BMap = this.BMap,
          name = this.name;
      var bd = new BMap.Boundary();
      bd.get(name, function (data) {
        _this.paths = data.boundaries.map(function (boundary) {
          return (boundary || []).split(';').map(function (point) {
            return function (_ref) {
              var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
                  lng = _ref2[0],
                  lat = _ref2[1];

              return {
                lng: lng,
                lat: lat
              };
            }(point.split(',').map(function (p) {
              return +p;
            }));
          });
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/others/Boundary.vue?vue&type=script&lang=js&
 /* harmony default export */ var others_Boundaryvue_type_script_lang_js_ = (Boundaryvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/others/Boundary.vue





/* normalize component */

var Boundary_component = Object(componentNormalizer["a" /* default */])(
  others_Boundaryvue_type_script_lang_js_,
  Boundaryvue_type_template_id_b3544044_render,
  Boundaryvue_type_template_id_b3544044_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Boundary = (Boundary_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/others/AutoComplete.vue?vue&type=template&id=16a5e391&
var AutoCompletevue_type_template_id_16a5e391_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._t("default",[_c('input')])],2)}
var AutoCompletevue_type_template_id_16a5e391_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/others/AutoComplete.vue?vue&type=template&id=16a5e391&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/others/AutoComplete.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//


/* harmony default export */ var AutoCompletevue_type_script_lang_js_ = ({
  name: 'bm-autocomplete',
  mixins: [Object(common["a" /* default */])()],
  props: {
    types: {
      type: String
    },
    location: {
      type: String
    },
    sugStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  watch: {
    types: function types() {
      this.reload();
    },
    location: function location() {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var _this = this;

      var BMap = this.BMap,
          map = this.map,
          $el = this.$el,
          types = this.types,
          location = this.location,
          sugStyle = this.sugStyle;
      var input = $el.querySelector('input');

      if (!input) {
        return;
      }

      this.originInstance = new BMap.Autocomplete({
        input: input,
        types: types,
        location: location || map,
        onSearchComplete: function onSearchComplete(e) {
          var $sugs = document.querySelectorAll('.tangram-suggestion-main');

          var _iterator = Object(createForOfIteratorHelper["a" /* default */])($sugs),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var $sug = _step.value;

              for (var name in sugStyle) {
                $sug.style[name] = sugStyle[name].toString();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          _this.$emit('searchcomplete', e);
        }
      }); // Support v-model

      this.originInstance.addEventListener('onconfirm', function (e) {
        var val = e.item.value;

        _this.$emit('input', val.province + val.city + val.district + val.street + val.business);
      });
      bindEvent["a" /* default */].call(this, this.originInstance);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/others/AutoComplete.vue?vue&type=script&lang=js&
 /* harmony default export */ var others_AutoCompletevue_type_script_lang_js_ = (AutoCompletevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/others/AutoComplete.vue





/* normalize component */

var AutoComplete_component = Object(componentNormalizer["a" /* default */])(
  others_AutoCompletevue_type_script_lang_js_,
  AutoCompletevue_type_template_id_16a5e391_render,
  AutoCompletevue_type_template_id_16a5e391_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AutoComplete = (AutoComplete_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/extra/MarkerClusterer.vue?vue&type=template&id=02bae26d&
var MarkerClusterervue_type_template_id_02bae26d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._t("default")],2)}
var MarkerClusterervue_type_template_id_02bae26d_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/extra/MarkerClusterer.vue?vue&type=template&id=02bae26d&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/bmaplib.markerclusterer/index.js
var bmaplib_markerclusterer = __webpack_require__("c296");
var bmaplib_markerclusterer_default = /*#__PURE__*/__webpack_require__.n(bmaplib_markerclusterer);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/extra/MarkerClusterer.vue?vue&type=script&lang=js&



//
//
//
//
//
//



/* harmony default export */ var MarkerClusterervue_type_script_lang_js_ = ({
  name: 'bml-marker-clusterer',
  mixins: [Object(common["a" /* default */])('markerClusterer')],
  props: {
    gridSize: {
      type: Object
    },
    maxZoom: {
      type: Number
    },
    minClusterSize: {
      type: Number
    },
    styles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    averageCenter: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    gridSize: {
      handler: function handler(val) {
        var BMap = this.BMap,
            originInstance = this.originInstance;
        originInstance.setGridSize(BMap, val.map);
      },
      deep: true
    },
    maxZoom: function maxZoom(val) {
      var originInstance = this.originInstance;
      originInstance.setMaxZoom(val);
    },
    minClusterSize: {
      handler: function handler(val) {
        var BMap = this.BMap,
            originInstance = this.originInstance;
        originInstance.setMinClusterSize(Object(factory["e" /* createSize */])(BMap, val));
      },
      deep: true
    },
    styles: {
      handler: function handler(val) {
        var BMap = this.BMap,
            originInstance = this.originInstance;
        var obj = JSON.parse(JSON.stringify(val)).map(function (item) {
          item.size = item.size && Object(factory["e" /* createSize */])(BMap, item.size);
          return item;
        });
        originInstance.setStyles(obj);
      },
      deep: true
    },
    averageCenter: function averageCenter(val) {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var _this = this;

      var BMap = this.BMap,
          map = this.map,
          gridSize = this.gridSize,
          minClusterSize = this.minClusterSize,
          maxZoom = this.maxZoom,
          styles = this.styles,
          averageCenter = this.averageCenter;
      this.originInstance = new bmaplib_markerclusterer_default.a(map, {
        gridSize: gridSize && Object(factory["e" /* createSize */])(BMap, gridSize),
        maxZoom: maxZoom,
        minClusterSize: minClusterSize && Object(factory["e" /* createSize */])(BMap, minClusterSize),
        styles: styles.map(function (item) {
          item.size = Object(factory["e" /* createSize */])(BMap, item.size);
          return item;
        }),
        isAverageCenter: averageCenter
      });
      this.$nextTick(function () {
        var markers = _this.$children.map(function (inst) {
          return inst.originInstance;
        }).filter(function (marker) {
          return marker instanceof BMap.Marker;
        });

        _this.originInstance.addMarkers(markers);
      });
    }
  },
  beforeCreate: function beforeCreate() {
    this.preventChildrenRender = true;
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/extra/MarkerClusterer.vue?vue&type=script&lang=js&
 /* harmony default export */ var extra_MarkerClusterervue_type_script_lang_js_ = (MarkerClusterervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/extra/MarkerClusterer.vue





/* normalize component */

var MarkerClusterer_component = Object(componentNormalizer["a" /* default */])(
  extra_MarkerClusterervue_type_script_lang_js_,
  MarkerClusterervue_type_template_id_02bae26d_render,
  MarkerClusterervue_type_template_id_02bae26d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MarkerClusterer = (MarkerClusterer_component.exports);
// EXTERNAL MODULE: ./node_modules/bmaplib.lushu/index.js
var bmaplib_lushu = __webpack_require__("4b0c");
var bmaplib_lushu_default = /*#__PURE__*/__webpack_require__.n(bmaplib_lushu);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/extra/Lushu.vue?vue&type=script&lang=js&



/*eslint-disable*/



/* harmony default export */ var Lushuvue_type_script_lang_js_ = ({
  name: 'bm-lushu',
  render: function render(h) {},
  mixins: [Object(common["a" /* default */])('lushu')],
  props: {
    path: {
      type: Array,
      default: []
    },
    landmarkPois: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    icon: {
      type: Object
    },
    speed: {
      type: Number,
      default: 4000
    },
    content: {
      type: String,
      default: ''
    },
    autoView: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: Boolean,
      default: false
    },
    infoWindow: {
      type: Boolean,
      default: true
    },
    play: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    path: {
      handler: function handler(val) {
        this.reload();
      },
      deep: true
    },
    landmarkPois: {
      handler: function handler(val) {
        this.reload();
      },
      deep: true
    },
    icon: {
      handler: function handler(val) {
        var originInstance = this.originInstance,
            content = this.content;
        var newMarker = Object(factory["b" /* createIcon */])(BMap, val);
        originInstance._opts.icon = newMarker;
        originInstance._marker = newMarker;
      },
      deep: true
    },
    speed: function speed(val) {
      var originInstance = this.originInstance,
          content = this.content;
      originInstance._opts.speed = val;
    },
    content: function content(val) {
      var originInstance = this.originInstance,
          infoWindow = this.infoWindow;
      val && infoWindow ? originInstance.showInfoWindow() : originInstance.hideInfoWindow();
      originInstance._opts.defaultContent = val;
      originInstance._overlay && originInstance._overlay.setHtml(val);
    },
    autoView: function autoView(val) {
      var originInstance = this.originInstance,
          content = this.content;
      originInstance._opts.autoView = val;
    },
    rotation: function rotation(val) {
      var originInstance = this.originInstance,
          content = this.content;
      originInstance._opts.enableRotation = val;
    },
    infoWindow: function infoWindow(val) {
      var originInstance = this.originInstance,
          content = this.content;
      originInstance && val && content ? originInstance.showInfoWindow() : originInstance.hideInfoWindow();
    },
    play: function play(val) {
      var originInstance = this.originInstance;
      val && originInstance ? originInstance.start() : !this._isEnd && originInstance.pause();
    }
  },
  methods: {
    load: function load() {
      var _this = this;

      var BMap = this.BMap,
          map = this.map,
          path = this.path,
          landmarkPois = this.landmarkPois,
          icon = this.icon,
          speed = this.speed,
          content = this.content,
          autoView = this.autoView,
          rotation = this.rotation,
          infoWindow = this.infoWindow,
          play = this.play;
      var lushu = this.originInstance = new bmaplib_lushu_default.a(map, path, {
        enableRotation: rotation,
        landmarkPois: landmarkPois,
        showInfoWindow: infoWindow,
        defaultContent: content,
        icon: icon && Object(factory["b" /* createIcon */])(BMap, icon),
        speed: speed,
        autoView: autoView,
        onstart: function onstart(e) {
          _this._isEnd = false;

          _this.$emit('start');
        },
        onstop: function onstop(e) {
          _this._isEnd = true;

          _this.$emit('stop');
        },
        onpause: function onpause(e) {
          return _this.$emit('pause');
        }
      });
      play && path.length && lushu.start(this);
      path.length && (content && infoWindow ? lushu.showInfoWindow() : lushu.hideInfoWindow());
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/extra/Lushu.vue?vue&type=script&lang=js&
 /* harmony default export */ var extra_Lushuvue_type_script_lang_js_ = (Lushuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/extra/Lushu.vue
var Lushu_render, Lushu_staticRenderFns




/* normalize component */

var Lushu_component = Object(componentNormalizer["a" /* default */])(
  extra_Lushuvue_type_script_lang_js_,
  Lushu_render,
  Lushu_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Lushu = (Lushu_component.exports);
// EXTERNAL MODULE: ./node_modules/bmaplib.heatmap/index.js
var bmaplib_heatmap = __webpack_require__("57ff");
var bmaplib_heatmap_default = /*#__PURE__*/__webpack_require__.n(bmaplib_heatmap);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/extra/Heatmap.vue?vue&type=script&lang=js&




/* harmony default export */ var Heatmapvue_type_script_lang_js_ = ({
  name: 'bml-heatmap',
  render: function render() {},
  mixins: [Object(common["a" /* default */])('overlay')],
  props: {
    data: {
      type: Array,
      default: Array
    },
    max: {
      type: Number
    },
    radius: {
      type: Number
    },
    gradient: {
      type: Object
    },
    opacity: {
      type: Number
    }
  },
  watch: {
    data: {
      handler: function handler() {
        this.reload();
      },
      deep: true
    },
    max: function max() {
      this.reload();
    },
    radius: function radius(val) {
      var originInstance = this.originInstance,
          opacity = this.opacity,
          gradient = this.gradient;
      originInstance.setOptions({
        radius: val,
        opacity: opacity,
        gradient: gradient
      });
    },
    gradient: {
      handler: function handler(val) {
        var originInstance = this.originInstance,
            radius = this.radius,
            opacity = this.opacity;
        originInstance.setOptions({
          radius: radius,
          opacity: opacity,
          gradient: val
        });
      },
      deep: true
    },
    opacity: function opacity(val) {
      var originInstance = this.originInstance,
          radius = this.radius,
          gradient = this.gradient;
      originInstance.setOptions({
        radius: radius,
        opacity: val,
        gradient: gradient
      });
    }
  },
  methods: {
    load: function load() {
      var map = this.map,
          data = this.data,
          max = this.max,
          radius = this.radius,
          opacity = this.opacity,
          gradient = this.gradient;
      var overlay = this.originInstance = new bmaplib_heatmap_default.a({
        radius: radius,
        opacity: opacity,
        gradient: gradient
      });
      map.addOverlay(overlay);
      overlay.setDataSet({
        data: data,
        max: max
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/extra/Heatmap.vue?vue&type=script&lang=js&
 /* harmony default export */ var extra_Heatmapvue_type_script_lang_js_ = (Heatmapvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/extra/Heatmap.vue
var Heatmap_render, Heatmap_staticRenderFns




/* normalize component */

var Heatmap_component = Object(componentNormalizer["a" /* default */])(
  extra_Heatmapvue_type_script_lang_js_,
  Heatmap_render,
  Heatmap_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Heatmap = (Heatmap_component.exports);
// EXTERNAL MODULE: ./node_modules/bmaplib.curveline/index.js
var bmaplib_curveline = __webpack_require__("35eb");
var bmaplib_curveline_default = /*#__PURE__*/__webpack_require__.n(bmaplib_curveline);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-baidu-map/components/extra/CurveLine.vue?vue&type=script&lang=js&






var eventList = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'lineupdate'];
/* harmony default export */ var CurveLinevue_type_script_lang_js_ = ({
  name: 'bml-curve-line',
  render: function render() {},
  mixins: [Object(common["a" /* default */])('overlay')],
  props: {
    points: {
      type: Array,
      default: Array
    },
    strokeColor: {
      type: String
    },
    strokeWeight: {
      type: Number
    },
    strokeOpacity: {
      type: Number
    },
    strokeStyle: {
      type: String
    },
    massClear: {
      type: Boolean,
      default: true
    },
    clicking: {
      type: Boolean,
      default: true
    },
    editing: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    points: {
      handler: function handler(val, oldVal) {
        this.originInstance.disableEditing();
        this.reload();
      },
      deep: true
    },
    strokeColor: function strokeColor(val) {
      this.originInstance.setStrokeColor(val);
    },
    strokeOpacity: function strokeOpacity(val) {
      this.originInstance.setStrokeOpacity(val);
    },
    strokeWeight: function strokeWeight(val) {
      this.originInstance.setStrokeWeight(val);
    },
    strokeStyle: function strokeStyle(val) {
      this.originInstance.setStrokeStyle(val);
    },
    editing: function editing(val) {
      val ? this.originInstance.enableEditing() : this.originInstance.disableEditing();
    },
    massClear: function massClear(val) {
      val ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear();
    },
    clicking: function clicking(val) {
      this.reload();
    }
  },
  methods: {
    load: function load() {
      var BMap = this.BMap,
          map = this.map,
          points = this.points,
          strokeColor = this.strokeColor,
          strokeWeight = this.strokeWeight,
          strokeOpacity = this.strokeOpacity,
          strokeStyle = this.strokeStyle,
          editing = this.editing,
          massClear = this.massClear,
          clicking = this.clicking;
      var overlay = new bmaplib_curveline_default.a(points.map(function (item) {
        return Object(factory["d" /* createPoint */])(BMap, item);
      }), {
        strokeColor: strokeColor,
        strokeWeight: strokeWeight,
        strokeOpacity: strokeOpacity,
        strokeStyle: strokeStyle,
        // enableEditing: editing,
        enableMassClear: massClear,
        enableClicking: clicking
      });
      editing ? overlay.enableEditing() : overlay.disableEditing();
      this.originInstance = overlay;
      map.addOverlay(overlay);
      bindEvent["a" /* default */].call(this, overlay, eventList);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/extra/CurveLine.vue?vue&type=script&lang=js&
 /* harmony default export */ var extra_CurveLinevue_type_script_lang_js_ = (CurveLinevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/extra/CurveLine.vue
var CurveLine_render, CurveLine_staticRenderFns




/* normalize component */

var CurveLine_component = Object(componentNormalizer["a" /* default */])(
  extra_CurveLinevue_type_script_lang_js_,
  CurveLine_render,
  CurveLine_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CurveLine = (CurveLine_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-baidu-map/components/index.js





































/* harmony default export */ var components = ({
  install (Vue, options) {
    const {ak} = options
    Vue.prototype._BMap = () => ({ak})

    Vue.component('baidu-map', Map)
    Vue.component('bm-view', MapView)

    Vue.component('bm-scale', Scale)
    Vue.component('bm-navigation', Navigation)
    Vue.component('bm-map-type', MapType)
    Vue.component('bm-overview-map', OverviewMap)
    Vue.component('bm-geolocation', Geolocation)
    Vue.component('bm-copyright', Copyright)
    Vue.component('bm-city-list', CityList)
    Vue.component('bm-panorama', Panorama)
    Vue.component('bm-control', Control)

    Vue.component('bm-marker', Marker)
    Vue.component('bm-point-collection', PointCollection)
    Vue.component('bm-polyline', Polyline)
    Vue.component('bm-polygon', Polygon)
    Vue.component('bm-circle', Circle)
    Vue.component('bm-ground', Ground)
    Vue.component('bm-label', Label)
    Vue.component('bm-info-window', InfoWindow)
    Vue.component('bm-overlay', Overlay)

    Vue.component('bm-context-menu', Menu)
    Vue.component('bm-context-menu-item', Item)

    Vue.component('bm-local-search', LocalSearch)
    Vue.component('bm-transit', Transit)
    Vue.component('bm-walking', Walking)
    Vue.component('bm-driving', Driving)
    Vue.component('bm-bus', Bus)

    Vue.component('bm-tile', Tile)
    Vue.component('bm-traffic', Traffic)

    Vue.component('bm-auto-complete', AutoComplete)
    Vue.component('bm-boundary', Boundary)
  }
});






/***/ })

}]);