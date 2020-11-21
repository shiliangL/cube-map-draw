(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cube-map-draw"] = factory();
	else
		root["cube-map-draw"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpcube_map_draw"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpcube_map_draw"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["fb15",1,0,2,4]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "24f9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2af9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CubeMapDraw/src/index.vue?vue&type=template&id=8814b8d2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cube-draw-map"},[_c('baidu-map',{staticClass:"bm-view",attrs:{"map-click":false,"scroll-wheel-zoom":true,"center":_vm.defaultConfig.mapCenter,"ak":_vm.defaultConfig.akey},on:{"ready":_vm.ready}},[_c('bm-control',{attrs:{"anchor":"BMAP_ANCHOR_TOP_RIGHT"}},[(_vm.map)?_c('map-drawing-tools',_vm._b({attrs:{"drawType":_vm.drawTypeList},on:{"draw":_vm.draw}},'map-drawing-tools',_vm.$attrs,false)):_vm._e()],1),(_vm.map)?_c('bm-control',[_c('bm-control',{key:"0b31ab34-33c1-4d49-bd04-eced3fd4f999"},[_vm._l((_vm.markers),function(polygon,index){return [_c('bm-control',{key:'polygons_bm_marker_Item'+index},[_c('bm-marker',{key:index+'line_list_bm_marker_one',attrs:{"position":polygon.point}})],1)]})],2),_c('bm-control',{key:"f1a7c4d6-de54-42f6-b784-ee802466d55d"},[_vm._l((_vm.polylines),function(polygonItem,ItemIndex){return [_c('bm-control',{key:'polygons_bm_polyline_Item'+ItemIndex},[_c('bm-polyline',{key:ItemIndex+'polygons_bm_polyline_one',attrs:{"path":polygonItem.point,"editing":polygonItem.editing,"stroke-color":polygonItem.strokeColor || _vm.defaultConfig.styleOptions.strokeColor,"fill-color":polygonItem.fillColor || _vm.defaultConfig.styleOptions.fillColor,"fill-opacity":polygonItem.fillOpacity || _vm.defaultConfig.styleOptions.fillOpacity,"stroke-opacity":polygonItem.strokeOpacity || _vm.defaultConfig.styleOptions.strokeOpacity,"stroke-style":polygonItem.strokeStyle || _vm.defaultConfig.styleOptions.strokeStyle,"stroke-weight":polygonItem.strokeWeight || _vm.defaultConfig.styleOptions.strokeWeight},on:{"click":function($event){return _vm.click($event, polygonItem)},"rightclick":function($event){return _vm.rightclick($event, polygonItem,ItemIndex)},"lineupdate":function($event){return _vm.polygonUpdate($event, polygonItem,ItemIndex, 'polylines')}}}),(polygonItem.centerPoint)?_c('bm-control',[_vm._t("overlay-center",null,{"row":polygonItem})],2):_vm._e()],1)]})],2),_c('bm-control',{key:"7ac63c28-2833-41e0-bfd8-6dc33abcc7c5"},[_vm._l((_vm.polygons),function(polygonItem,ItemIndex){return [_c('bm-control',{key:'polygons_bm_polygon_Item'+ItemIndex},[_c('bm-polygon',{key:ItemIndex+'polygons_bm_polygon_one',attrs:{"path":polygonItem.point,"editing":polygonItem.editing,"stroke-color":polygonItem.strokeColor || _vm.defaultConfig.styleOptions.strokeColor,"fill-color":polygonItem.fillColor || _vm.defaultConfig.styleOptions.fillColor,"fill-opacity":polygonItem.fillOpacity || _vm.defaultConfig.styleOptions.fillOpacity,"stroke-opacity":polygonItem.strokeOpacity || _vm.defaultConfig.styleOptions.strokeOpacity,"stroke-style":polygonItem.strokeStyle || _vm.defaultConfig.styleOptions.strokeStyle,"stroke-weight":polygonItem.strokeWeight || _vm.defaultConfig.styleOptions.strokeWeight},on:{"click":function($event){return _vm.click($event, polygonItem)},"rightclick":function($event){return _vm.rightclick($event, polygonItem,ItemIndex)},"lineupdate":function($event){return _vm.polygonUpdate($event, polygonItem,ItemIndex,'polygons')}}}),(polygonItem.centerPoint)?_c('bm-control',[_vm._t("overlay-center",null,{"row":polygonItem})],2):_vm._e()],1)]})],2),_c('bm-boundary',{ref:"boundary",attrs:{"name":_vm.defaultConfig.mapCenter,"strokeWeight":2,"strokeColor":"#000","fillColor":""}})],1):_vm._e(),_c('transition',{attrs:{"name":"el-zoom-in-top"}},[(_vm.visible)?_c('ul',{directives:[{name:"clickOutside",rawName:"v-clickOutside",value:(_vm.clickOutside),expression:"clickOutside"}],staticClass:"contextmenu",style:({left:_vm.contextmenu.left+'px',top:_vm.contextmenu.top+'px'})},[_c('li',{on:{"click":function($event){$event.stopPropagation();return _vm.handlerContextmenu(1)}}},[_vm._v(" 开启编辑 ")]),_c('li',{on:{"click":function($event){$event.stopPropagation();return _vm.handlerContextmenu(2)}}},[_vm._v(" 完成编辑 ")]),_c('li',{on:{"click":function($event){$event.stopPropagation();return _vm.handlerContextmenu(0)}}},[_vm._v(" 删除 ")])]):_vm._e()])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CubeMapDraw/src/index.vue?vue&type=template&id=8814b8d2&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__("dca8");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__("b85c");

// EXTERNAL MODULE: ./node_modules/vue-baidu-map/components/index.js + 122 modules
var components = __webpack_require__("fec8");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.anchor.js
var es_string_anchor = __webpack_require__("18a5");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// CONCATENATED MODULE: ./src/utils/bMapLib.js













/**
 * @fileoverview 百度地图的鼠标绘制工具，对外开放。
 * 允许用户在地图上点击完成鼠标绘制的功能。
 * 使用者可以自定义所绘制结果的相关样式，例如线宽、颜色、测线段距离、面积等等。
 * 主入口类是<a href="symbols/BMapLib.DrawingManager.html">DrawingManager</a>，
 * 基于Baidu Map API 1.4。
 *
 * @author Baidu Map Api Group
 * @version 1.4
 */

/**
 * @namespace BMap的所有library类均放在BMapLib命名空间下
 */
// eslint-disable-next-line no-use-before-define
var bMapLib_BMapLib = window.BMapLib = bMapLib_BMapLib || {};
/**
 * 定义常量, 绘制的模式
 * @final {Number} DrawingType
 */

var BMAP_DRAWING_MARKER = 'marker'; // 鼠标画点模式

var BMAP_DRAWING_POLYLINE = 'polyline'; // 鼠标画线模式

var BMAP_DRAWING_CIRCLE = 'circle'; // 鼠标画圆模式

var BMAP_DRAWING_RECTANGLE = 'rectangle'; // 鼠标画矩形模式

var BMAP_DRAWING_POLYGON = 'polygon'; // 鼠标画多边形模式

function initBMapLib() {
  /**
   * 声明baidu包
   */
  // eslint-disable-next-line no-use-before-define
  var baidu = baidu || {
    guid: '$BAIDU$'
  };

  (function () {
    // 一些页面级别唯一的属性，需要挂载在window[baidu.guid]上
    window[baidu.guid] = {};
    /**
     * 将源对象的所有属性拷贝到目标对象中
     * @name baidu.extend
     * @function
     * @grammar baidu.extend(target, source)
     * @param {Object} target 目标对象
     * @param {Object} source 源对象
     * @returns {Object} 目标对象
     */

    baidu.extend = function (target, source) {
      for (var p in source) {
        // eslint-disable-next-line no-prototype-builtins
        if (source.hasOwnProperty(p)) {
          target[p] = source[p];
        }
      }

      return target;
    };
    /**
     * @ignore
     * @namespace
     * @baidu.lang 对语言层面的封装，包括类型判断、模块扩展、继承基类以及对象自定义事件的支持。
     * @property guid 对象的唯一标识
     */


    baidu.lang = baidu.lang || {};
    /**
     * 返回一个当前页面的唯一标识字符串。
     * @function
     * @grammar baidu.lang.guid()
     * @returns {String} 当前页面的唯一标识字符串
     */

    baidu.lang.guid = function () {
      return 'TANGRAM__' + (window[baidu.guid]._counter++).toString(36);
    };

    window[baidu.guid]._counter = window[baidu.guid]._counter || 1;
    /**
     * 所有类的实例的容器
     * key为每个实例的guid
     */

    window[baidu.guid]._instances = window[baidu.guid]._instances || {};
    /**
     * Tangram继承机制提供的一个基类，用户可以通过继承baidu.lang.Class来获取它的属性及方法。
     * @function
     * @name baidu.lang.Class
     * @grammar baidu.lang.Class(guid)
     * @param {string} guid对象的唯一标识
     * @meta standard
     * @remark baidu.lang.Class和它的子类的实例均包含一个全局唯一的标识guid。
     * guid是在构造函数中生成的，因此，继承自baidu.lang.Class的类应该直接或者间接调用它的构造函数。<br>
     * baidu.lang.Class的构造函数中产生guid的方式可以保证guid的唯一性，及每个实例都有一个全局唯一的guid。
     */

    baidu.lang.Class = function (guid) {
      this.guid = guid || baidu.lang.guid();
      window[baidu.guid]._instances[this.guid] = this;
    };

    window[baidu.guid]._instances = window[baidu.guid]._instances || {};
    /**
     * 判断目标参数是否string类型或String对象
     * @name baidu.lang.isString
     * @function
     * @grammar baidu.lang.isString(source)
     * @param {Any} source 目标参数
     * @shortcut isString
     * @meta standard
     *
     * @returns {boolean} 类型判断结果
     */

    baidu.lang.isString = function (source) {
      return Object.prototype.toString.call(source) === '[object String]';
    };
    /**
     * 判断目标参数是否为function或Function实例
     * @name baidu.lang.isFunction
     * @function
     * @grammar baidu.lang.isFunction(source)
     * @param {Any} source 目标参数
     * @returns {boolean} 类型判断结果
     */


    baidu.lang.isFunction = function (source) {
      return Object.prototype.toString.call(source) === '[object Function]';
    };
    /**
     * 重载了默认的toString方法，使得返回信息更加准确一些。
     * @return {string} 对象的String表示形式
     */


    baidu.lang.Class.prototype.toString = function () {
      return '[object ' + (this._className || 'Object') + ']';
    };
    /**
     * 释放对象所持有的资源，主要是自定义事件。
     * @name dispose
     * @grammar obj.dispose()
     */


    baidu.lang.Class.prototype.dispose = function () {
      delete window[baidu.guid]._instances[this.guid];

      for (var property in this) {
        if (!baidu.lang.isFunction(this[property])) {
          delete this[property];
        }
      }

      this.disposed = true;
    };
    /**
     * 自定义的事件对象。
     * @function
     * @name baidu.lang.Event
     * @grammar baidu.lang.Event(type[, target])
     * @param {string} type事件类型名称。为了方便区分事件和一个普通的方法，事件类型名称必须以"on"(小写)开头。
     * @param {Object} [target]触发事件的对象
     * @meta standard
     * @remark 引入该模块，会自动为Class引入3个事件扩展方法：addEventListener、removeEventListener和dispatchEvent。
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
     * @param {string}   type         自定义事件的名称
     * @param {Function} handler      自定义事件被触发时应该调用的回调函数
     * @param {string}[key]为事件监听函数指定的名称，可在移除时使用。如果不提供，方法会默认为它生成一个全局唯一的key。
     * @remark 事件类型区分大小写。如果自定义事件名称不是以小写"on"开头，该方法会给它加上"on"再进行判断，即"click"和"onclick"会被认为是同一种事件。
     */


    baidu.lang.Class.prototype.addEventListener = function (type, handler, key) {
      if (!baidu.lang.isFunction(handler)) {
        return;
      }

      !this.__listeners && (this.__listeners = {});
      var t = this.__listeners;
      var id;

      if (typeof key === 'string' && key) {
        // eslint-disable-next-line no-useless-escape
        if (/[^\w\-]/.test(key)) {
          // eslint-disable-next-line no-throw-literal
          throw 'nonstandard key:' + key;
        } else {
          handler.hashCode = key;
          id = key;
        }
      }

      type.indexOf('on') !== 0 && (type = 'on' + type);
      Object(esm_typeof["a" /* default */])(t[type]) !== 'object' && (t[type] = {});
      id = id || baidu.lang.guid();
      handler.hashCode = id;
      t[type][id] = handler;
    };
    /**
     * 移除对象的事件监听器。引入baidu.lang.Event后，Class的子类实例才会获得该方法。
     * @grammar obj.removeEventListener(type, handler)
     * @param {string}   type     事件类型
     * @param {Function|string} handler  要移除的事件监听函数或者监听函数的key
     * @remark 如果第二个参数handler没有被绑定到对应的自定义事件中，什么也不做。
     */


    baidu.lang.Class.prototype.removeEventListener = function (type, handler) {
      if (baidu.lang.isFunction(handler)) {
        handler = handler.hashCode;
      } else if (!baidu.lang.isString(handler)) {
        return;
      }

      !this.__listeners && (this.__listeners = {});
      type.indexOf('on') !== 0 && (type = 'on' + type);
      var t = this.__listeners;

      if (!t[type]) {
        return;
      }

      t[type][handler] && delete t[type][handler];
    };
    /**
     * 派发自定义事件，使得绑定到自定义事件上面的函数都会被执行。引入baidu.lang.Event后，Class的子类实例才会获得该方法。
     * @grammar obj.dispatchEvent(event, options)
     * @param {baidu.lang.Event|String} event Event对象，或事件名称(1.1.1起支持)
     * @param {Object} options 扩展参数,所含属性键值会扩展到Event对象上(1.2起支持)
     * @remark 处理会调用通过addEventListenr绑定的自定义事件回调函数之外，还会调用直接绑定到对象上面的自定义事件。
     * 例如：<br>
     * myobj.onMyEvent = function(){}<br>
     * myobj.addEventListener("onMyEvent", function(){});
     */


    baidu.lang.Class.prototype.dispatchEvent = function (event, options) {
      if (baidu.lang.isString(event)) {
        event = new baidu.lang.Event(event);
      }

      !this.__listeners && (this.__listeners = {});
      options = options || {};

      for (var i in options) {
        event[i] = options[i];
      }

      var t = this.__listeners;
      var p = event.type; // how ?
      //  event.target = event.target || this;
      //  event.currentTarget = this;
      // how ?

      p.indexOf('on') !== 0 && (p = 'on' + p);
      baidu.lang.isFunction(this[p]) && this[p].apply(this, arguments);

      if (Object(esm_typeof["a" /* default */])(t[p]) === 'object') {
        for (i in t[p]) {
          t[p][i].apply(this, arguments);
        }
      }

      return event.returnValue;
    };
    /**
     * 为类型构造器建立继承关系
     * @name baidu.lang.inherits
     * @function
     * @grammar baidu.lang.inherits(subClass, superClass[, className])
     * @param {Function} subClass 子类构造器
     * @param {Function} superClass 父类构造器
     * @param {string} className 类名标识
     * @remark 使subClass继承superClass的prototype，
     * 因此subClass的实例能够使用superClass的prototype中定义的所有属性和方法。<br>
     * 这个函数实际上是建立了subClass和superClass的原型链集成，并对subClass进行了constructor修正。<br>
     * <strong>注意：如果要继承构造函数，需要在subClass里面call一下，具体见下面的demo例子</strong>
     * @shortcut inherits
     * @meta standard
     * @see baidu.lang.Class
     */


    baidu.lang.inherits = function (subClass, superClass, className) {
      var key;
      var proto;
      var selfProps = subClass.prototype; // eslint-disable-next-line no-new-func

      var clazz = new Function();
      clazz.prototype = superClass.prototype; // eslint-disable-next-line new-cap

      proto = subClass.prototype = new clazz();

      for (key in selfProps) {
        proto[key] = selfProps[key];
      }

      subClass.prototype.constructor = subClass;
      subClass.superClass = superClass.prototype;

      if (typeof className === 'string') {
        proto._className = className;
      }
    };
    /**
     * @ignore
     * @namespace baidu.dom 操作dom的方法。
     */


    baidu.dom = baidu.dom || {};
    /**
     * 从文档中获取指定的DOM元素
     *
     * @param {string|HTMLElement} id 元素的id或DOM元素
     * @meta standard
     * @return {HTMLElement} DOM元素，如果不存在，返回null，如果参数不合法，直接返回参数
     */

    baidu._g = baidu.dom._g = function (id) {
      if (baidu.lang.isString(id)) {
        return document.getElementById(id);
      }

      return id;
    };
    /**
     * 从文档中获取指定的DOM元素
     * @name baidu.dom.g
     * @function
     * @grammar baidu.dom.g(id)
     * @param {string|HTMLElement} id 元素的id或DOM元素
     * @meta standard
     *
     * @returns {HTMLElement|null} 获取的元素，查找不到时返回null,如果参数不合法，直接返回参数
     */


    baidu.g = baidu.dom.g = function (id) {
      if (typeof id === 'string' || id instanceof String) {
        return document.getElementById(id);
      } else if (id && id.nodeName && (id.nodeType === 1 || id.nodeType === 9)) {
        return id;
      }

      return null;
    };
    /**
     * 在目标元素的指定位置插入HTML代码
     * @name baidu.dom.insertHTML
     * @function
     * @grammar baidu.dom.insertHTML(element, position, html)
     * @param {HTMLElement|string} element 目标元素或目标元素的id
     * @param {string} position 插入html的位置信息，取值为beforeBegin,afterBegin,beforeEnd,afterEnd
     * @param {string} html 要插入的html
     * @remark
     *
     * 对于position参数，大小写不敏感<br>
     * 参数的意思：beforeBegin<span>afterBegin   this is span! beforeEnd</span> afterEnd <br />
     * 此外，如果使用本函数插入带有script标签的HTML字符串，script标签对应的脚本将不会被执行。
     *
     * @shortcut insertHTML
     * @meta standard
     *
     * @returns {HTMLElement} 目标元素
     */


    baidu.insertHTML = baidu.dom.insertHTML = function (element, position, html) {
      element = baidu.dom.g(element);
      var range, begin;

      if (element.insertAdjacentHTML) {
        element.insertAdjacentHTML(position, html);
      } else {
        // 这里不做"undefined" != typeof(HTMLElement) && !window.opera判断，其它浏览器将出错？！
        // 但是其实做了判断，其它浏览器下等于这个函数就不能执行了
        range = element.ownerDocument.createRange(); // FF下range的位置设置错误可能导致创建出来的fragment在插入dom树之后html结构乱掉
        // 改用range.insertNode来插入html, by wenyuxiang @ 2010-12-14.

        position = position.toUpperCase();

        if (position === 'AFTERBEGIN' || position === 'BEFOREEND') {
          range.selectNodeContents(element);
          range.collapse(position === 'AFTERBEGIN');
        } else {
          begin = position === 'BEFOREBEGIN';
          range[begin ? 'setStartBefore' : 'setEndAfter'](element);
          range.collapse(begin);
        }

        range.insertNode(range.createContextualFragment(html));
      }

      return element;
    };
    /**
     * 为目标元素添加className
     * @name baidu.dom.addClass
     * @function
     * @grammar baidu.dom.addClass(element, className)
     * @param {HTMLElement|string} element 目标元素或目标元素的id
     * @param {string} className 要添加的className，允许同时添加多个class，中间使用空白符分隔
     * @remark
     * 使用者应保证提供的className合法性，不应包含不合法字符，className合法字符参考：http://www.w3.org/TR/CSS2/syndata.html。
     * @shortcut addClass
     * @meta standard
     *
     * @returns {HTMLElement} 目标元素
     */


    baidu.ac = baidu.dom.addClass = function (element, className) {
      element = baidu.dom.g(element);
      var classArray = className.split(/\s+/);
      var result = element.className;
      var classMatch = ' ' + result + ' ';
      var i = 0;
      var l = classArray.length;

      for (; i < l; i++) {
        if (classMatch.indexOf(' ' + classArray[i] + ' ') < 0) {
          result += (result ? ' ' : '') + classArray[i];
        }
      }

      element.className = result;
      return element;
    };
    /**
     * @ignore
     * @namespace baidu.event 屏蔽浏览器差异性的事件封装。
     * @property target 事件的触发元素
     * @property pageX 鼠标事件的鼠标x坐标
     * @property pageY  鼠标事件的鼠标y坐标
     * @property keyCode 键盘事件的键值
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
     *  1. 不支持跨浏览器的鼠标滚轮事件监听器添加<br>
     *  2. 改方法不为监听器灌入事件对象，以防止跨iframe事件挂载的事件对象获取失败
     * @shortcut on
     * @meta standard
     * @see baidu.event.un
     *
     * @returns {HTMLElement|window} 目标元素
     */

    baidu.on = baidu.event.on = function (element, type, listener) {
      type = type.replace(/^on/i, '');
      element = baidu._g(element);

      var realListener = function realListener(ev) {
        // 1. 这里不支持EventArgument,  原因是跨frame的事件挂载
        // 2. element是为了修正this
        listener.call(element, ev);
      };

      var lis = baidu.event._listeners;
      var filter = baidu.event._eventFilter;
      var afterFilter;
      var realType = type;
      type = type.toLowerCase(); // filter过滤

      if (filter && filter[type]) {
        afterFilter = filter[type](element, type, realListener);
        realType = afterFilter.type;
        realListener = afterFilter.listener;
      } // 事件监听器挂载


      if (element.addEventListener) {
        element.addEventListener(realType, realListener, false);
      } else if (element.attachEvent) {
        element.attachEvent('on' + realType, realListener);
      } // 将监听器存储到数组中


      lis[lis.length] = [element, type, listener, realListener, realType];
      return element;
    };
    /**
     * 为目标元素移除事件监听器
     * @name baidu.event.un
     * @function
     * @grammar baidu.event.un(element, type, listener)
     * @param {HTMLElement|string|window} element 目标元素或目标元素id
     * @param {string} type 事件类型
     * @param {Function} listener 需要移除的监听器
     * @shortcut un
     * @meta standard
     *
     * @returns {HTMLElement|window} 目标元素
     */


    baidu.un = baidu.event.un = function (element, type, listener) {
      element = baidu._g(element);
      type = type.replace(/^on/i, '').toLowerCase();
      var lis = baidu.event._listeners;
      var len = lis.length;
      var isRemoveAll = !listener;
      var item;
      var realType;
      var realListener; // 如果将listener的结构改成json
      // 可以节省掉这个循环，优化性能
      // 但是由于un的使用频率并不高，同时在listener不多的时候
      // 遍历数组的性能消耗不会对代码产生影响
      // 暂不考虑此优化

      while (len--) {
        item = lis[len]; // listener存在时，移除element的所有以listener监听的type类型事件
        // listener不存在时，移除element的所有type类型事件

        if (item[1] === type && item[0] === element && (isRemoveAll || item[2] === listener)) {
          realType = item[4];
          realListener = item[3];

          if (element.removeEventListener) {
            element.removeEventListener(realType, realListener, false);
          } else if (element.detachEvent) {
            element.detachEvent('on' + realType, realListener);
          }

          lis.splice(len, 1);
        }
      }

      return element;
    };
    /**
     * 获取event事件,解决不同浏览器兼容问题
     * @param {Event}
     * @return {Event}
     */


    baidu.getEvent = baidu.event.getEvent = function (event) {
      return window.event || event;
    };
    /**
     * 获取event.target,解决不同浏览器兼容问题
     * @param {Event}
     * @return {Target}
     */


    baidu.getTarget = baidu.event.getTarget = function (event) {
      // eslint-disable-next-line no-redeclare
      var event = baidu.getEvent(event);
      return event.target || event.srcElement;
    };
    /**
     * 阻止事件的默认行为
     * @name baidu.event.preventDefault
     * @function
     * @grammar baidu.event.preventDefault(event)
     * @param {Event} event 事件对象
     * @meta standard
     */


    baidu.preventDefault = baidu.event.preventDefault = function (event) {
      // eslint-disable-next-line no-redeclare
      var event = baidu.getEvent(event);

      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    };
    /**
     * 停止事件冒泡传播
     * @param {Event}
     */


    baidu.stopBubble = baidu.event.stopBubble = function (event) {
      event = baidu.getEvent(event);
      event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
    };
  })();
  /**
   * @exports DrawingManager as BMapLib.DrawingManager
   */


  var DrawingManager =
  /**
   * DrawingManager类的构造函数
   * @class 鼠标绘制管理类，实现鼠标绘制管理的<b>入口</b>。
   * 实例化该类后，即可调用该类提供的open
   * 方法开启绘制模式状态。
   * 也可加入工具栏进行选择操作。
   *
   * @constructor
   * @param {Map} map Baidu map的实例对象
   * @param {Json Object} opts 可选的输入参数，非必填项。可输入选项包括：<br />
   * {"<b>isOpen</b>" : {Boolean} 是否开启绘制模式
   * <br />"<b>enableDrawingTool</b>" : {Boolean} 是否添加绘制工具栏控件，默认不添加
   * <br />"<b>drawingToolOptions</b>" : {Json Object} 可选的输入参数，非必填项。可输入选项包括
   * <br />      "<b>anchor</b>" : {ControlAnchor} 停靠位置、默认左上角
   * <br />      "<b>offset</b>" : {Size} 偏移值。
   * <br />      "<b>scale</b>" : {Number} 工具栏的缩放比例,默认为1
   * <br />      "<b>drawingModes</b>" : {DrawingType<Array>} 工具栏上可以选择出现的绘制模式,将需要显示的DrawingType以数组型形式传入，如[BMAP_DRAWING_MARKER, BMAP_DRAWING_CIRCLE] 将只显示画点和画圆的选项
   * <br />"<b>enableCalculate</b>" : {Boolean} 绘制是否进行测距(画线时候)、测面(画圆、多边形、矩形)
   * <br />"<b>markerOptions</b>" : {CircleOptions} 所画的点的可选参数，参考api中的<a href="http://developer.baidu.com/map/reference/index.php?title=Class:%E6%80%BB%E7%B1%BB/%E8%A6%86%E7%9B%96%E7%89%A9%E7%B1%BB">对应类</a>
   * <br />"<b>circleOptions</b>" : {CircleOptions} 所画的圆的可选参数，参考api中的<a href="http://developer.baidu.com/map/reference/index.php?title=Class:%E6%80%BB%E7%B1%BB/%E8%A6%86%E7%9B%96%E7%89%A9%E7%B1%BB">对应类</a>
   * <br />"<b>polylineOptions</b>" : {CircleOptions} 所画的线的可选参数，参考api中的<a href="http://developer.baidu.com/map/reference/index.php?title=Class:%E6%80%BB%E7%B1%BB/%E8%A6%86%E7%9B%96%E7%89%A9%E7%B1%BB">对应类</a>
   * <br />"<b>polygonOptions</b>" : {PolygonOptions} 所画的多边形的可选参数，参考api中的<a href="http://developer.baidu.com/map/reference/index.php?title=Class:%E6%80%BB%E7%B1%BB/%E8%A6%86%E7%9B%96%E7%89%A9%E7%B1%BB">对应类</a>
   * <br />"<b>rectangleOptions</b>" : {PolygonOptions} 所画的矩形的可选参数，参考api中的<a href="http://developer.baidu.com/map/reference/index.php?title=Class:%E6%80%BB%E7%B1%BB/%E8%A6%86%E7%9B%96%E7%89%A9%E7%B1%BB">对应类</a>
   *
   * @example <b>参考示例：</b><br />
   * var map = new BMap.Map("container");<br />map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);<br />
   * var myDrawingManagerObject = new BMapLib.DrawingManager(map, {isOpen: true,
   *     drawingType: BMAP_DRAWING_MARKER, enableDrawingTool: true,
   *     enableCalculate: false,
   *     drawingToolOptions: {
   *         anchor: BMAP_ANCHOR_TOP_LEFT,
   *         offset: new BMap.Size(5, 5),
   *         drawingTypes : [
   *             BMAP_DRAWING_MARKER,
   *             BMAP_DRAWING_CIRCLE,
   *             BMAP_DRAWING_POLYLINE,
   *             BMAP_DRAWING_POLYGON,
   *             BMAP_DRAWING_RECTANGLE
   *          ]
   *     },
   *     polylineOptions: {
   *         strokeColor: "#333"
   *     });
   */
  bMapLib_BMapLib.DrawingManager = function (map, opts) {
    if (!map) {
      return;
    }

    instances.push(this);
    opts = opts || {};

    this._initialize(map, opts);
  }; // 通过baidu.lang下的inherits方法，让DrawingManager继承baidu.lang.Class


  baidu.lang.inherits(DrawingManager, baidu.lang.Class, 'DrawingManager');
  /**
   * 开启地图的绘制模式
   *
   * @example <b>参考示例：</b><br />
   * myDrawingManagerObject.open();
   */

  DrawingManager.prototype.open = function () {
    // 判断绘制状态是否已经开启
    if (this._isOpen === true) {
      return true;
    }

    closeInstanceExcept(this);

    this._open();
  };
  /**
   * 关闭地图的绘制状态
   *
   * @example <b>参考示例：</b><br />
   * myDrawingManagerObject.close();
   */


  DrawingManager.prototype.close = function () {
    // 判断绘制状态是否已经开启
    if (this._isOpen === false) {
      return true;
    }

    this._close();
  };
  /**
   * 设置当前的绘制模式，参数DrawingType，为5个可选常量:
   * <br/>BMAP_DRAWING_MARKER    画点
   * <br/>BMAP_DRAWING_CIRCLE    画圆
   * <br/>BMAP_DRAWING_POLYLINE  画线
   * <br/>BMAP_DRAWING_POLYGON   画多边形
   * <br/>BMAP_DRAWING_RECTANGLE 画矩形
   * @param {DrawingType} DrawingType
   * @return {Boolean}
   *
   * @example <b>参考示例：</b><br />
   * myDrawingManagerObject.setDrawingMode(BMAP_DRAWING_POLYLINE);
   */


  DrawingManager.prototype.setDrawingMode = function (drawingType) {
    // 与当前模式不一样时候才进行重新绑定事件
    if (this._drawingType !== drawingType) {
      closeInstanceExcept(this);

      this._setDrawingMode(drawingType);
    }
  };
  /**
   * 获取当前的绘制模式
   * @return {DrawingType} 绘制的模式
   *
   * @example <b>参考示例：</b><br />
   * alert(myDrawingManagerObject.getDrawingMode());
   */


  DrawingManager.prototype.getDrawingMode = function () {
    return this._drawingType;
  };
  /**
   * 打开距离或面积计算
   *
   * @example <b>参考示例：</b><br />
   * myDrawingManagerObject.enableCalculate();
   */


  DrawingManager.prototype.enableCalculate = function () {
    this._enableCalculate = true;

    this._addGeoUtilsLibrary();
  };
  /**
   * 关闭距离或面积计算
   *
   * @example <b>参考示例：</b><br />
   * myDrawingManagerObject.disableCalculate();
   */


  DrawingManager.prototype.disableCalculate = function () {
    this._enableCalculate = false;
  };
  /**
   * 鼠标绘制完成后，派发总事件的接口
   * @name DrawingManager#overlaycomplete
   * @event
   * @param {Event Object} e 回调函数会返回event参数，包括以下返回值：
   * <br />{"<b>drawingMode</b> : {DrawingType} 当前的绘制模式
   * <br />"<b>overlay</b>：{Marker||Polyline||Polygon||Circle} 对应的绘制模式返回对应的覆盖物
   * <br />"<b>calculate</b>：{Number} 需要开启计算模式才会返回这个值，当绘制线的时候返回距离、绘制多边形、圆、矩形时候返回面积，单位为米，
   * <br />"<b>label</b>：{Label} 计算面积时候出现在Map上的Label对象
   *
   * @example <b>参考示例：</b>
   * myDrawingManagerObject.addEventListener("overlaycomplete", function(e) {
   *     alert(e.drawingMode);
   *     alert(e.overlay);
   *     alert(e.calculate);
   *     alert(e.label);
   * });
   */

  /**
   * 绘制点完成后，派发的事件接口
   * @name DrawingManager#markercomplete
   * @event
   * @param {Marker} overlay 回调函数会返回相应的覆盖物，
   * <br />{"<b>overlay</b> : {Marker}
   *
   * @example <b>参考示例：</b>
   * myDrawingManagerObject.addEventListener("circlecomplete", function(e, overlay) {
   *     alert(overlay);
   * });
   */

  /**
   * 绘制圆完成后，派发的事件接口
   * @name DrawingManager#circlecomplete
   * @event
   * @param {Circle} overlay 回调函数会返回相应的覆盖物，
   * <br />{"<b>overlay</b> : {Circle}
   */

  /**
   * 绘制线完成后，派发的事件接口
   * @name DrawingManager#polylinecomplete
   * @event
   * @param {Polyline} overlay 回调函数会返回相应的覆盖物，
   * <br />{"<b>overlay</b> : {Polyline}
   */

  /**
   * 绘制多边形完成后，派发的事件接口
   * @name DrawingManager#polygoncomplete
   * @event
   * @param {Polygon} overlay 回调函数会返回相应的覆盖物，
   * <br />{"<b>overlay</b> : {Polygon}
   */

  /**
   * 绘制矩形完成后，派发的事件接口
   * @name DrawingManager#rectanglecomplete
   * @event
   * @param {Polygon} overlay 回调函数会返回相应的覆盖物，
   * <br />{"<b>overlay</b> : {Polygon}
   */

  /**
   * 初始化状态
   * @param {Map} 地图实例
   * @param {Object} 参数
   */
  // eslint-disable-next-line no-unused-expressions


  DrawingManager.prototype._initialize = function (map, opts) {
    /**
     * map对象
     * @private
     * @type {Map}
     */
    this._map = map;
    /**
     * 配置对象
     * @private
     * @type {Object}
     */

    this._opts = opts;
    /**
     * 当前的绘制模式, 默认是绘制点
     * @private
     * @type {DrawingType}
     */

    this._drawingType = opts.drawingMode || BMAP_DRAWING_MARKER;
    /**
     * 是否添加添加鼠标绘制工具栏面板
     */

    if (opts.enableDrawingTool) {
      var drawingTool = new DrawingTool(this, opts.drawingToolOptions);
      this._drawingTool = drawingTool;
      map.addControl(drawingTool);
    } // 是否计算绘制出的面积


    if (opts.enableCalculate === true) {
      this.enableCalculate();
    } else {
      this.disableCalculate();
    }
    /**
     * 是否已经开启了绘制状态
     * @private
     * @type {Boolean}
     */


    this._isOpen = !!(opts.isOpen === true);

    if (this._isOpen) {
      this._open();
    }

    this.markerOptions = opts.markerOptions || {};
    this.circleOptions = opts.circleOptions || {};
    this.polylineOptions = opts.polylineOptions || {};
    this.polygonOptions = opts.polygonOptions || {};
    this.rectangleOptions = opts.rectangleOptions || {};
  };
  /**
     * 开启地图的绘制状态
     * @return {Boolean}，开启绘制状态成功，返回true；否则返回false。
     */


  DrawingManager.prototype._open = function () {
    this._isOpen = true; // 添加遮罩，所有鼠标操作都在这个遮罩上完成

    if (!this._mask) {
      this._mask = new Mask();
    }

    this._map.addOverlay(this._mask);

    this._setDrawingMode(this._drawingType);
  };
  /**
   * 设置当前的绘制模式
   * @param {DrawingType}
   */


  DrawingManager.prototype._setDrawingMode = function (drawingType) {
    this._drawingType = drawingType;
    /**
     * 开启编辑状态时候才重新进行事件绑定
     */

    if (this._isOpen) {
      // 清空之前的自定义事件
      this._mask.__listeners = {};

      switch (drawingType) {
        case BMAP_DRAWING_MARKER:
          this._bindMarker();

          break;

        case BMAP_DRAWING_CIRCLE:
          this._bindCircle();

          break;

        case BMAP_DRAWING_POLYLINE:
        case BMAP_DRAWING_POLYGON:
          this._bindPolylineOrPolygon();

          break;

        case BMAP_DRAWING_RECTANGLE:
          this._bindRectangle();

          break;
      }
    }
    /**
     * 如果添加了工具栏，则也需要改变工具栏的样式
     */


    if (this._drawingTool && this._isOpen) {
      this._drawingTool.setStyleByDrawingMode(drawingType);
    }
  };
  /**
   * 关闭地图的绘制状态
   * @return {Boolean}，关闭绘制状态成功，返回true；否则返回false。
   */


  DrawingManager.prototype._close = function () {
    this._isOpen = false;

    if (this._mask) {
      this._map.removeOverlay(this._mask);
    }
    /**
     * 如果添加了工具栏，则关闭时候将工具栏样式设置为拖拽地图
     */


    if (this._drawingTool) {
      this._drawingTool.setStyleByDrawingMode('hander');
    }
  };
  /**
   * 绑定鼠标画点的事件
   */


  DrawingManager.prototype._bindMarker = function () {
    var me = this;
    var map = this._map;
    var mask = this._mask;
    /**
     * 鼠标点击的事件
     */

    var clickAction = function clickAction(e) {
      // 往地图上添加marker
      var marker = new BMap.Marker(e.point, me.markerOptions);
      map.addOverlay(marker);

      me._dispatchOverlayComplete(marker);
    };

    mask.addEventListener('click', clickAction);
  };
  /**
   * 绑定鼠标画圆的事件
   */


  DrawingManager.prototype._bindCircle = function () {
    var me = this;
    var map = this._map;
    var mask = this._mask;
    var circle = null;
    var centerPoint = null; // 圆的中心点

    /**
     * 开始绘制圆形
     */

    var startAction = function startAction(e) {
      centerPoint = e.point;
      circle = new BMap.Circle(centerPoint, 0, me.circleOptions);
      map.addOverlay(circle);
      mask.enableEdgeMove();
      mask.addEventListener('mousemove', moveAction);
      baidu.on(document, 'mouseup', endAction);
    };
    /**
     * 绘制圆形过程中，鼠标移动过程的事件
     */


    var moveAction = function moveAction(e) {
      circle.setRadius(me._map.getDistance(centerPoint, e.point));
    };
    /**
     * 绘制圆形结束
     */


    var endAction = function endAction(e) {
      var calculate = me._calculate(circle, e.point);

      me._dispatchOverlayComplete(circle, calculate);

      centerPoint = null;
      mask.disableEdgeMove();
      mask.removeEventListener('mousemove', moveAction);
      baidu.un(document, 'mouseup', endAction);
    };
    /**
     * 鼠标点击起始点
     */


    var mousedownAction = function mousedownAction(e) {
      baidu.preventDefault(e);
      baidu.stopBubble(e);

      if (centerPoint == null) {
        startAction(e);
      }
    };

    mask.addEventListener('mousedown', mousedownAction);
  };
  /**
   * 画线和画多边形相似性比较大，公用一个方法
   */


  DrawingManager.prototype._bindPolylineOrPolygon = function () {
    var me = this;
    var map = this._map;
    var mask = this._mask;
    var points = []; // 用户绘制的点

    var drawPoint = null; // 实际需要画在地图上的点

    var overlay = null;
    var isBinded = false;
    /**
     * 鼠标点击的事件
     */

    var startAction = function startAction(e) {
      points.push(e.point);
      drawPoint = points.concat(points[points.length - 1]);

      if (points.length === 1) {
        if (me._drawingType === BMAP_DRAWING_POLYLINE) {
          overlay = new BMap.Polyline(drawPoint, me.polylineOptions);
        } else if (me._drawingType === BMAP_DRAWING_POLYGON) {
          overlay = new BMap.Polygon(drawPoint, me.polygonOptions);
        }

        map.addOverlay(overlay);
      } else {
        overlay.setPath(drawPoint);
      }

      if (!isBinded) {
        isBinded = true;
        mask.enableEdgeMove();
        mask.addEventListener('mousemove', mousemoveAction);
        mask.addEventListener('dblclick', dblclickAction);
      }
    };
    /**
     * 鼠标移动过程的事件
     */


    var mousemoveAction = function mousemoveAction(e) {
      overlay && overlay.setPositionAt(drawPoint.length - 1, e.point);
    };
    /**
     * 鼠标双击的事件
     */


    var dblclickAction = function dblclickAction(e) {
      baidu.stopBubble(e);
      isBinded = false;
      mask.disableEdgeMove();
      mask.removeEventListener('mousemove', mousemoveAction);
      mask.removeEventListener('dblclick', dblclickAction);
      overlay.setPath(points);

      var calculate = me._calculate(overlay, points.pop());

      me._dispatchOverlayComplete(overlay, calculate);

      points.length = 0;
      drawPoint.length = 0;
    };

    mask.addEventListener('click', startAction); // 双击时候不放大地图级别

    mask.addEventListener('dblclick', function (e) {
      baidu.stopBubble(e);
    });
  };
  /**
   * 绑定鼠标画矩形的事件
   */


  DrawingManager.prototype._bindRectangle = function () {
    var me = this;
    var map = this._map;
    var mask = this._mask;
    var polygon = null;
    var startPoint = null;
    /**
     * 开始绘制矩形
     */

    var startAction = function startAction(e) {
      baidu.stopBubble(e);
      baidu.preventDefault(e);
      startPoint = e.point;
      var endPoint = startPoint;
      polygon = new BMap.Polygon(me._getRectanglePoint(startPoint, endPoint), me.rectangleOptions);
      map.addOverlay(polygon);
      mask.enableEdgeMove();
      mask.addEventListener('mousemove', moveAction);
      baidu.on(document, 'mouseup', endAction);
    };
    /**
     * 绘制矩形过程中，鼠标移动过程的事件
     */


    var moveAction = function moveAction(e) {
      polygon.setPath(me._getRectanglePoint(startPoint, e.point));
    };
    /**
     * 绘制矩形结束
     */


    var endAction = function endAction(e) {
      var calculate = me._calculate(polygon, polygon.getPath()[2]);

      me._dispatchOverlayComplete(polygon, calculate);

      startPoint = null;
      mask.disableEdgeMove();
      mask.removeEventListener('mousemove', moveAction);
      baidu.un(document, 'mouseup', endAction);
    };

    mask.addEventListener('mousedown', startAction);
  };
  /**
   * 添加显示所绘制图形的面积或者长度
   * @param {overlay} 覆盖物
   * @param {point} 显示的位置
   */


  DrawingManager.prototype._calculate = function (overlay, point) {
    var result = {
      data: 0,
      // 计算出来的长度或面积
      label: null // 显示长度或面积的label对象

    };

    if (this._enableCalculate && bMapLib_BMapLib.GeoUtils) {
      var type = overlay.toString(); // 不同覆盖物调用不同的计算方法

      switch (type) {
        case '[object Polyline]':
          result.data = bMapLib_BMapLib.GeoUtils.getPolylineDistance(overlay);
          break;

        case '[object Polygon]':
          result.data = bMapLib_BMapLib.GeoUtils.getPolygonArea(overlay);
          break;

        case '[object Circle]':
          var radius = overlay.getRadius();
          result.data = Math.PI * radius * radius;
          break;
      } // 一场情况处理


      if (!result.data || result.data < 0) {
        result.data = 0;
      } else {
        // 保留2位小数位
        result.data = result.data.toFixed(2);
      } // 地图上不需要显示 // todo
      // result.label = this._addLabel(point, result.data)

    }

    return result;
  };
  /**
   * 开启测距和测面功能需要依赖于GeoUtils库
   * 所以这里判断用户是否已经加载,若未加载则用js动态加载
   */


  DrawingManager.prototype._addGeoUtilsLibrary = function () {
    if (!bMapLib_BMapLib.GeoUtils) {
      var script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', 'http://api.map.baidu.com/library/GeoUtils/1.2/src/GeoUtils_min.js');
      document.body.appendChild(script);
    }
  };
  /**
   * 向地图中添加文本标注
   * @param {Point}
   * @param {String} 所以显示的内容
   */


  DrawingManager.prototype._addLabel = function (point, content) {
    var label = new BMap.Label(content, {
      position: point
    });

    this._map.addOverlay(label);

    return label;
  };
  /**
   * 根据起终点获取矩形的四个顶点
   * @param {Point} 起点
   * @param {Point} 终点
   */


  DrawingManager.prototype._getRectanglePoint = function (startPoint, endPoint) {
    return [new BMap.Point(startPoint.lng, startPoint.lat), new BMap.Point(endPoint.lng, startPoint.lat), new BMap.Point(endPoint.lng, endPoint.lat), new BMap.Point(startPoint.lng, endPoint.lat)];
  };
  /**
   * 派发事件
   */


  DrawingManager.prototype._dispatchOverlayComplete = function (overlay, calculate) {
    var options = {
      overlay: overlay,
      drawingMode: this._drawingType,
      calculate: calculate && calculate.data ? calculate.data : null,
      label: calculate && calculate.label ? calculate.label : null
    };
    this.dispatchEvent(this._drawingType + 'complete', overlay);
    this.dispatchEvent('overlaycomplete', options);
  };
  /**
   * 创建遮罩对象
   */


  function Mask() {
    /**
     * 鼠标到地图边缘的时候是否自动平移地图
     */
    this._enableEdgeMove = false;
  }

  Mask.prototype = new BMap.Overlay();
  /**
   * 这里不使用api中的自定义事件，是为了更灵活使用
   */

  Mask.prototype.dispatchEvent = baidu.lang.Class.prototype.dispatchEvent;
  Mask.prototype.addEventListener = baidu.lang.Class.prototype.addEventListener;
  Mask.prototype.removeEventListener = baidu.lang.Class.prototype.removeEventListener;

  Mask.prototype.initialize = function (map) {
    var me = this;
    this._map = map;
    var div = this.container = document.createElement('div');

    var size = this._map.getSize();

    div.style.cssText = 'position:absolute;background:url(about:blank);cursor:crosshair;width:' + size.width + 'px;height:' + size.height + 'px';

    this._map.addEventListener('resize', function (e) {
      me._adjustSize(e.size);
    });

    this._map.getPanes().floatPane.appendChild(div);

    this._bind();

    return div;
  };

  Mask.prototype.draw = function () {
    var map = this._map;
    var point = map.pixelToPoint(new BMap.Pixel(0, 0));
    var pixel = map.pointToOverlayPixel(point);
    this.container.style.left = pixel.x + 'px';
    this.container.style.top = pixel.y + 'px';
  };
  /**
   * 开启鼠标到地图边缘，自动平移地图
   */


  Mask.prototype.enableEdgeMove = function () {
    this._enableEdgeMove = true;
  };
  /**
   * 关闭鼠标到地图边缘，自动平移地图
   */


  Mask.prototype.disableEdgeMove = function () {
    clearInterval(this._edgeMoveTimer);
    this._enableEdgeMove = false;
  };
  /**
   * 绑定事件,派发自定义事件
   */


  Mask.prototype._bind = function () {
    var me = this; // eslint-disable-next-line no-unused-vars

    var map = this._map;
    var container = this.container;
    var lastMousedownXY = null;
    var lastClickXY = null;
    /**
     * 根据event对象获取鼠标的xy坐标对象
     * @param {Event}
     * @return {Object} {x:e.x, y:e.y}
     */

    var getXYbyEvent = function getXYbyEvent(e) {
      return {
        x: e.clientX,
        y: e.clientY
      };
    };

    var domEvent = function domEvent(e) {
      var type = e.type; // eslint-disable-next-line no-redeclare

      var e = baidu.getEvent(e); // 当前鼠标所在点的地理坐标

      var point = me.getDrawPoint(e);

      var dispatchEvent = function dispatchEvent(type) {
        e.point = point;
        me.dispatchEvent(e);
      };

      if (type === 'mousedown') {
        lastMousedownXY = getXYbyEvent(e);
      }

      var nowXY = getXYbyEvent(e); // click经过一些特殊处理派发，其他同事件按正常的dom事件派发

      if (type === 'click') {
        // 鼠标点击过程不进行移动才派发click和dblclick
        if (Math.abs(nowXY.x - lastMousedownXY.x) < 5 && Math.abs(nowXY.y - lastMousedownXY.y) < 5) {
          if (!lastClickXY || !(Math.abs(nowXY.x - lastClickXY.x) < 5 && Math.abs(nowXY.y - lastClickXY.y) < 5)) {
            dispatchEvent('click');
            lastClickXY = getXYbyEvent(e);
          } else {
            lastClickXY = null;
          }
        }
      } else {
        dispatchEvent(type);
      }
    };
    /**
     * 将事件都遮罩层的事件都绑定到domEvent来处理
     */


    var events = ['click', 'mousedown', 'mousemove', 'mouseup', 'dblclick'];
    var index = events.length;

    while (index--) {
      baidu.on(container, events[index], domEvent);
    } // 鼠标移动过程中，到地图边缘后自动平移地图


    baidu.on(container, 'mousemove', function (e) {
      if (me._enableEdgeMove) {
        me.mousemoveAction(e);
      }
    });
  }; // 鼠标移动过程中，到地图边缘后自动平移地图


  Mask.prototype.mousemoveAction = function (e) {
    function getClientPosition(e) {
      var clientX = e.clientX;
      var clientY = e.clientY;

      if (e.changedTouches) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
      }

      return new BMap.Pixel(clientX, clientY);
    }

    var map = this._map;
    var me = this;
    var pixel = map.pointToPixel(this.getDrawPoint(e));
    var clientPos = getClientPosition(e);
    var offsetX = clientPos.x - pixel.x;
    var offsetY = clientPos.y - pixel.y;
    pixel = new BMap.Pixel(clientPos.x - offsetX, clientPos.y - offsetY);
    this._draggingMovePixel = pixel; // var point = map.pixelToPoint(pixel)
    // var eventObj = {
    //   pixel: pixel,
    //   point: point
    // }
    // 拖拽到地图边缘移动地图

    this._panByX = this._panByY = 0;

    if (pixel.x <= 20 || pixel.x >= map.width - 20 || pixel.y <= 50 || pixel.y >= map.height - 10) {
      if (pixel.x <= 20) {
        this._panByX = 8;
      } else if (pixel.x >= map.width - 20) {
        this._panByX = -8;
      }

      if (pixel.y <= 50) {
        this._panByY = 8;
      } else if (pixel.y >= map.height - 10) {
        this._panByY = -8;
      }

      if (!this._edgeMoveTimer) {
        this._edgeMoveTimer = setInterval(function () {
          map.panBy(me._panByX, me._panByY, {
            noAnimation: true
          });
        }, 30);
      }
    } else {
      if (this._edgeMoveTimer) {
        clearInterval(this._edgeMoveTimer);
        this._edgeMoveTimer = null;
      }
    }
  };
  /*
   * 调整大小
   * @param {Size}
   */


  Mask.prototype._adjustSize = function (size) {
    this.container.style.width = size.width + 'px';
    this.container.style.height = size.height + 'px';
  };
  /**
   * 获取当前绘制点的地理坐标
   *
   * @param {Event} e e对象
   * @return Point对象的位置信息
   */


  Mask.prototype.getDrawPoint = function (e) {
    var map = this._map;
    var trigger = baidu.getTarget(e);
    var x = e.offsetX || e.layerX || 0;
    var y = e.offsetY || e.layerY || 0;
    if (trigger.nodeType !== 1) trigger = trigger.parentNode;

    while (trigger && trigger !== map.getContainer()) {
      if (!(trigger.clientWidth === 0 && trigger.clientHeight === 0 && trigger.offsetParent && trigger.offsetParent.nodeName === 'TD')) {
        x += trigger.offsetLeft || 0;
        y += trigger.offsetTop || 0;
      }

      trigger = trigger.offsetParent;
    }

    var pixel = new BMap.Pixel(x, y);
    var point = map.pixelToPoint(pixel);
    return point;
  };
  /**
   * 绘制工具面板，自定义控件
   */


  function DrawingTool(drawingManager, drawingToolOptions) {
    this.drawingManager = drawingManager;
    drawingToolOptions = this.drawingToolOptions = drawingToolOptions || {}; // 默认停靠位置和偏移量

    this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
    this.defaultOffset = new BMap.Size(10, 10); // 默认所有工具栏都显示

    this.defaultDrawingModes = [BMAP_DRAWING_MARKER, BMAP_DRAWING_CIRCLE, BMAP_DRAWING_POLYLINE, BMAP_DRAWING_POLYGON, BMAP_DRAWING_RECTANGLE]; // 工具栏可显示的绘制模式

    if (drawingToolOptions.drawingModes) {
      this.drawingModes = drawingToolOptions.drawingModes;
    } else {
      this.drawingModes = this.defaultDrawingModes;
    } // 用户设置停靠位置和偏移量


    if (drawingToolOptions.anchor) {
      this.setAnchor(drawingToolOptions.anchor);
    }

    if (drawingToolOptions.offset) {
      this.setOffset(drawingToolOptions.offset);
    }
  } // 通过JavaScript的prototype属性继承于BMap.Control


  DrawingTool.prototype = new BMap.Control(); // 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
  // 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中

  DrawingTool.prototype.initialize = function (map) {
    // 创建一个DOM元素
    var container = this.container = document.createElement('div');
    container.className = 'BMapLib_Drawing'; // 用来设置外层边框阴影

    var panel = this.panel = document.createElement('div');
    panel.className = 'BMapLib_Drawing_panel';

    if (this.drawingToolOptions && this.drawingToolOptions.scale) {
      this._setScale(this.drawingToolOptions.scale);
    }

    container.appendChild(panel); // 添加内容

    panel.innerHTML = this._generalHtml(); // 绑定事件

    this._bind(panel); // 添加DOM元素到地图中


    map.getContainer().appendChild(container); // 将DOM元素返回

    return container;
  }; // 生成工具栏的html元素


  DrawingTool.prototype._generalHtml = function (map) {
    // 鼠标经过工具栏上的提示信息
    var tips = {};
    tips.hander = '拖动地图';
    tips[BMAP_DRAWING_MARKER] = '画点';
    tips[BMAP_DRAWING_CIRCLE] = '画圆';
    tips[BMAP_DRAWING_POLYLINE] = '画折线';
    tips[BMAP_DRAWING_POLYGON] = '画多边形';
    tips[BMAP_DRAWING_RECTANGLE] = '画矩形';

    var getItem = function getItem(className, drawingType) {
      return '<a class="' + className + '" drawingType="' + drawingType + '" href="javascript:void(0)" title="' + tips[drawingType] + '" onfocus="this.blur()"></a>';
    };

    var html = [];
    html.push(getItem('BMapLib_box BMapLib_hander', 'hander'));

    for (var i = 0, len = this.drawingModes.length; i < len; i++) {
      var classStr = 'BMapLib_box BMapLib_' + this.drawingModes[i];

      if (i === len - 1) {
        classStr += ' BMapLib_last';
      }

      html.push(getItem(classStr, this.drawingModes[i]));
    }

    return html.join('');
  };
  /**
   * 设置工具栏的缩放比例
   */


  DrawingTool.prototype._setScale = function (scale) {
    var width = 390;
    var height = 50;
    var ml = -parseInt((width - width * scale) / 2, 10);
    var mt = -parseInt((height - height * scale) / 2, 10);
    this.container.style.cssText = ['-moz-transform: scale(' + scale + ');', '-o-transform: scale(' + scale + ');', '-webkit-transform: scale(' + scale + ');', 'transform: scale(' + scale + ');', 'margin-left:' + ml + 'px;', 'margin-top:' + mt + 'px;', '*margin-left:0px;', // ie6、7
    '*margin-top:0px;', // ie6、7
    'margin-left:0px\\0;', // ie8
    'margin-top:0px\\0;', // ie8
    // ie下使用滤镜
    'filter: progid:DXImageTransform.Microsoft.Matrix(', 'M11=' + scale + ',', 'M12=0,', 'M21=0,', 'M22=' + scale + ',', "SizingMethod='auto expand');"].join('');
  }; // 绑定工具栏的事件


  DrawingTool.prototype._bind = function (panel) {
    var me = this;
    baidu.on(this.panel, 'click', function (e) {
      var target = baidu.getTarget(e);
      var drawingType = target.getAttribute('drawingType');
      me.setStyleByDrawingMode(drawingType);

      me._bindEventByDraingMode(drawingType);
    });
  }; // 设置工具栏当前选中的项样式


  DrawingTool.prototype.setStyleByDrawingMode = function (drawingType) {
    if (!drawingType) {
      return;
    }

    var boxs = this.panel.getElementsByTagName('a');

    for (var i = 0, len = boxs.length; i < len; i++) {
      var box = boxs[i];

      if (box.getAttribute('drawingType') === drawingType) {
        var classStr = 'BMapLib_box BMapLib_' + drawingType + '_hover';

        if (i === len - 1) {
          classStr += ' BMapLib_last';
        }

        box.className = classStr;
      } else {
        box.className = box.className.replace(/_hover/, '');
      }
    }
  }; // 设置工具栏当前选中的项样式


  DrawingTool.prototype._bindEventByDraingMode = function (drawingType) {
    var drawingManager = this.drawingManager; // 点在拖拽地图的按钮上

    if (drawingType === 'hander') {
      drawingManager.close();
    } else {
      drawingManager.setDrawingMode(drawingType);
      drawingManager.open();
    }
  }; // 用来存储用户实例化出来的drawingmanager对象


  var instances = [];
  /*
   * 关闭其他实例的绘制模式
   * @param {DrawingManager} 当前的实例
   */

  function closeInstanceExcept(instance) {
    var index = instances.length;

    while (index--) {
      if (instances[index] !== instance) {
        instances[index].close();
      }
    }
  }

  return bMapLib_BMapLib;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// CONCATENATED MODULE: ./src/utils/index.js







/*
 * @Author: shiliangL
 * @Date: 2020-11-21 12:10:44
 * @LastEditTime: 2020-11-21 12:28:40
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-baidu-map/src/utils/index.js
 */
// 后往前合并
function deepMerge(target, merged) {
  for (var key in merged) {
    // eslint-disable-next-line no-prototype-builtins
    if (merged.hasOwnProperty(key)) {
      target[key] = target[key] && target[key].toString() === '[object Object]' ? deepMerge(target[key], merged[key]) : target[key] = merged[key];
    }

    return target;
  }
}
function deepClone(source) {
  if (!source && Object(esm_typeof["a" /* default */])(source) !== 'object') {
    throw new Error('error arguments', 'deepClone');
  }

  var targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach(function (keys) {
    if (source[keys] && Object(esm_typeof["a" /* default */])(source[keys]) === 'object') {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55f2df8e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CubeMapDraw/src/MapTools.vue?vue&type=template&id=38552c8e&scoped=true&
var MapToolsvue_type_template_id_38552c8e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"map-drawing-tools"},[_c('a',{on:{"click":function($event){$event.stopPropagation();return _vm.draw(0)}}},[_c('full-screen',{attrs:{"theme":"outline","size":"14","fill":_vm.iconColor}}),_vm._v(" 视角 ")],1),(!_vm.preview)?[_c('a',{staticClass:"stop",on:{"click":function($event){$event.stopPropagation();return _vm.draw(1)}}},[_c('click-tap',{attrs:{"theme":"outline","size":"14","fill":"#E6A23C"}}),_vm._v(" 停止绘制 ")],1),_vm._l((_vm.drawType),function(item,index){return _c('a',{key:index,style:({color: item.iconColor || '' }),on:{"click":function($event){$event.stopPropagation();return _vm.draw(item.type)}}},[(item.iconName)?_c(item.iconName,{tag:"component",attrs:{"theme":item.iconTheme || 'outline',"size":item.iconSize || 14,"fill":item.iconColor || _vm.iconColor}}):_vm._e(),_c('span',{domProps:{"textContent":_vm._s(item.text)}})],1)})]:_vm._e()],2)}
var MapToolsvue_type_template_id_38552c8e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CubeMapDraw/src/MapTools.vue?vue&type=template&id=38552c8e&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/@icon-park/vue/es/index.js + 1390 modules
var es = __webpack_require__("db24");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CubeMapDraw/src/MapTools.vue?vue&type=script&lang=js&

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


var ICONCONFIG = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, es["c" /* DEFAULT_ICON_CONFIGS */]), {}, {
  prefix: 'icon'
});

/* harmony default export */ var MapToolsvue_type_script_lang_js_ = ({
  name: 'MapDrawingTools',
  provide: function provide() {
    return {
      ICON_CONFIGS: ICONCONFIG
    };
  },
  props: {
    preview: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    drawType: {
      type: Array,
      default: function _default() {
        return [// { text: '标点', iconName: 'LocalTwo', iconColor: '#3894ff', type: 2 },
          // { text: '画面', iconName: 'MapDraw', iconColor: '#3894ff', type: 2 },
          // { text: '画线', iconName: 'Waves', iconColor: '#3894ff', type: 2 }
        ];
      }
    },
    iconColor: {
      type: String,
      default: function _default() {
        return '#3894ff';
      }
    }
  },
  components: {
    Clear: es["a" /* Clear */],
    Waves: es["i" /* Waves */],
    MapDraw: es["g" /* MapDraw */],
    LocalTwo: es["f" /* LocalTwo */],
    ClickTap: es["b" /* ClickTap */],
    FullScreen: es["d" /* FullScreen */],
    MaterialTwo: es["h" /* MaterialTwo */],
    FullScreenPlay: es["e" /* FullScreenPlay */]
  },
  mounted: function mounted() {// console.log(this.$attrs)
  },
  methods: {
    draw: function draw(type) {
      this.$emit('draw', type);
    }
  }
});
// CONCATENATED MODULE: ./src/components/CubeMapDraw/src/MapTools.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_MapToolsvue_type_script_lang_js_ = (MapToolsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/CubeMapDraw/src/MapTools.vue?vue&type=style&index=0&id=38552c8e&lang=scss&scoped=true&
var MapToolsvue_type_style_index_0_id_38552c8e_lang_scss_scoped_true_ = __webpack_require__("2ec5");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/CubeMapDraw/src/MapTools.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_MapToolsvue_type_script_lang_js_,
  MapToolsvue_type_template_id_38552c8e_scoped_true_render,
  MapToolsvue_type_template_id_38552c8e_scoped_true_staticRenderFns,
  false,
  null,
  "38552c8e",
  null
  
)

/* harmony default export */ var MapTools = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CubeMapDraw/src/index.vue?vue&type=script&lang=js&







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




/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'CubeDrawMap',
  props: {
    config: {
      type: Object,
      default: function _default() {}
    },
    drawTypeList: {
      type: Array,
      default: function _default() {
        return [{
          text: '标点',
          iconName: 'LocalTwo',
          iconColor: '#3894ff',
          type: 2
        }, {
          text: '画面',
          iconName: 'MapDraw',
          iconColor: '#3894ff',
          type: 3
        }, {
          text: '画线',
          iconName: 'Waves',
          iconColor: '#3894ff',
          type: 4
        }, {
          text: '清除',
          iconName: 'Clear',
          iconColor: '#F56C6C',
          type: 10
        }];
      }
    },
    polygons: {
      type: Array,
      default: function _default() {
        return [];
      } // validator: (value) => {
      //   return value[0] ? value[0].point : true
      // }

    },
    polylines: {
      type: Array,
      default: function _default() {
        return [];
      } // validator: (value) => {
      //   return value[0] ? value[0].point : true
      // }

    },
    markers: {
      type: Array,
      default: function _default() {
        return [];
      } // validator: (value) => {
      //   return value[0] ? value[0].point : true
      // }

    }
  },
  components: {
    BaiduMap: components["a" /* BaiduMap */],
    BmControl: components["c" /* BmControl */],
    BmMarker: components["d" /* BmMarker */],
    BmPolyline: components["f" /* BmPolyline */],
    BmPolygon: components["e" /* BmPolygon */],
    BmBoundary: components["b" /* BmBoundary */],
    MapDrawingTools: MapTools
  },
  directives: {
    clickOutside: {
      bind: function bind(el, binding, vnode) {
        function clickHandler(e) {
          if (el.contains(e.target)) return false;
          if (binding.expression) binding.value(e);
        }

        el.__vueClickOutside__ = clickHandler;
        document.addEventListener('click', clickHandler);
      },
      unbind: function unbind(el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
      }
    }
  },
  created: function created() {
    // this.config 作为配置静态数据 初始化配置使用 暂时不考虑可动态的场景
    deepMerge(this.defaultConfig, this.config || {});
  },
  data: function data() {
    return {
      map: null,
      drawingManager: null,
      visible: false,
      contextmenu: {
        left: 0,
        right: 0
      },
      defaultConfig: {
        styleOptions: {
          strokeColor: 'blue',
          // 边线颜色。
          fillColor: '#3689F3',
          // 填充颜色。当参数为空时，圆形将没有填充效果。
          strokeWeight: 2,
          // 边线的宽度，以像素为单位。
          strokeOpacity: 1,
          // 边线透明度，取值范围0 - 1。
          fillOpacity: 0.4,
          // 填充的透明度，取值范围0 - 1。
          strokeStyle: 'dashed' // 边线的样式，solid dashed。

        },
        mapCenter: '深圳市',
        akey: '',
        markers: [],
        polylines: [],
        polygons: [],
        circles: [],
        rectangle: []
      }
    };
  },
  mounted: function mounted() {},
  methods: {
    // 省市区边界初始化完毕
    boundaryLoaded: function boundaryLoaded(points) {
      this.boundaryLoadedpoints = Object.freeze(points);
      this.map && this.map.setViewport(points);
    },
    // 地图初始化完毕
    ready: function ready(_ref) {
      var _this = this;

      var map = _ref.map,
          BMap = _ref.BMap;
      this.BMapLib = initBMapLib();
      this.map = map;
      this.BMap = BMap;
      this.$nextTick().then(function () {
        var styleOptions = _this.defaultConfig.styleOptions; // eslint-disable-next-line no-undef

        _this.drawingManager = new BMapLib.DrawingManager(map, {
          isOpen: false,
          // 是否开启绘制模式
          enableDrawingTool: false,
          // 是否显示工具栏
          enableCalculate: true,
          // 输出面积 单位 米
          drawingToolOptions: {
            anchor: BMAP_ANCHOR_TOP_RIGHT,
            // 位置
            offset: new BMap.Size(5, 5) // 偏离值

          },
          circleOptions: styleOptions,
          // 圆的样式
          polylineOptions: styleOptions,
          // 线的样式
          polygonOptions: styleOptions,
          // 多边形的样式
          rectangleOptions: styleOptions // 矩形的样式

        });
        _this.drawingManager && _this.drawingManager.addEventListener('overlaycomplete', function (n, e) {
          return _this.drawOverlayComplete(e);
        });

        _this.$emit('ready', {
          map: map,
          BMap: BMap,
          BMapLib: _this.BMapLib
        }); // console.log(this.BMapLib, 'this.BMapLib')


        setTimeout(function () {
          // 处理省市区边界视角
          var points = [];
          var boundaryPaths = _this.$refs.boundary ? _this.$refs.boundary.paths : [];
          boundaryPaths.forEach(function (item) {
            item.forEach(function (p) {
              points.push(new BMap.Point(p.lng, p.lat));
            });
          });
          _this.boundaryPaths = Object.freeze(points);

          _this.getBetterViewByOverlays();
        }, 2200);
      });
    },
    getOverLayCenterPoint: function getOverLayCenterPoint(path) {
      var x = 0.0;
      var y = 0.0;

      for (var i = 0; i < path.length; i++) {
        x = x + parseFloat(path[i].lng);
        y = y + parseFloat(path[i].lat);
      }

      x = x / path.length;
      y = y / path.length;
      return {
        lng: x,
        lat: y
      };
    },
    // 选择绘图方式
    draw: function draw(type) {
      switch (type) {
        case 10:
          this.markers.splice(0, this.markers.length);
          this.polygons.splice(0, this.polygons.length);
          this.polylines.splice(0, this.polylines.length);
          this.$emit('update:markers', []);
          this.$emit('update:polylines', []);
          this.$emit('update:polygons', []);
          this.$emit('clear');
          this.drawingManager && this.drawingManager.close();
          console.log('清除全部');
          break;

        case 0:
          this.drawingManager && this.drawingManager.close();
          this.getBetterViewByOverlays();
          break;

        case 1:
          this.drawType = null;
          this.drawingManager && this.drawingManager.close(); // this.getBetterViewByOverlays()

          break;

        case 2:
          this.drawingManager.open();
          this.drawingManager.setDrawingMode('marker');
          break;

        case 3:
          this.drawingManager.open();
          this.drawingManager.setDrawingMode('polygon');
          break;

        case 4:
          this.drawingManager.open();
          this.drawingManager.setDrawingMode('polyline');
          break;

        case 5:
          this.drawingManager.open();
          this.drawingManager.setDrawingMode('circle');
          break;

        case 6:
          this.drawingManager.open();
          this.drawingManager.setDrawingMode('rectangle');
          break;

        default:
          break;
      }
    },
    // 绘制覆盖物完成
    drawOverlayComplete: function drawOverlayComplete(e) {
      if (!e.drawingMode) return; // 立即清除鼠标绘制的东西

      this.map && this.map.removeOverlay(e.overlay);
      var overlay = e.overlay; // const { polygons, polylines, markers, circles, rectangle } = this.defaultConfig

      var drawPolygonTypeList = ['polygon', 'polyline', 'circle', 'rectangle'];

      if (drawPolygonTypeList.includes(e.drawingMode)) {
        var overLayCenterPoint = this.getOverLayCenterPoint(e.overlay.getPath());
        var polygonOverLay = {
          point: overlay.getPath(),
          calculate: e.calculate,
          editing: true,
          centerPoint: overLayCenterPoint
        };

        switch (e.drawingMode) {
          case 'polygon':
            this.polygons && this.polygons.push(polygonOverLay); // : polygons.push(polygonOverLay)

            break;

          case 'polyline':
            this.polylines && this.polylines.push(polygonOverLay); // : polylines.push(polygonOverLay)

            break;

          case 'circle':
            this.circles && this.circles.push(polygonOverLay); // :  circles.push(polygonOverLay)

            break;

          case 'rectangle':
            this.rectangle && this.rectangle.push(polygonOverLay); // : rectangle.push(polygonOverLay)

            break;

          default:
            break;
        }
      } else {
        var _overlay$point = overlay.point,
            lat = _overlay$point.lat,
            lng = _overlay$point.lng;
        this.markers && this.markers.push({
          point: {
            lat: lat,
            lng: lng
          }
        }); // : markers.push({ point: { lat, lng } })
      }
    },
    click: function click(e, item) {// console.log(e, item)
    },
    getBetterViewByOverlays: function getBetterViewByOverlays() {
      var ampPoits = [];
      var markers = this.markers,
          polygons = this.polygons,
          polylines = this.polylines;

      var _iterator = Object(createForOfIteratorHelper["a" /* default */])(markers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          ampPoits.push(new BMap.Point(item.point.lng, item.point.lat));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = Object(createForOfIteratorHelper["a" /* default */])(polygons),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _item = _step2.value;

          _item.point.forEach(function (k) {
            ampPoits.push(new BMap.Point(k.lng, k.lat));
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = Object(createForOfIteratorHelper["a" /* default */])(polylines),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _item2 = _step3.value;

          _item2.point.forEach(function (k) {
            ampPoits.push(new BMap.Point(k.lng, k.lat));
          });
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.map && this.map.setViewport(ampPoits.length ? ampPoits : this.boundaryPaths);
    },
    polygonUpdate: function polygonUpdate(e, item, index, name) {
      if (!item.editing) return;
      item.point = e.target.getPath();
      item.calculate = this.BMapLib.GeoUtils ? this.BMapLib.GeoUtils.getPolygonArea(e.target) : 0;
      item.centerPoint = this.getOverLayCenterPoint(e.target.getPath());
    }
  }
});
// CONCATENATED MODULE: ./src/components/CubeMapDraw/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var CubeMapDraw_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/CubeMapDraw/src/index.vue?vue&type=style&index=0&id=8814b8d2&scoped=true&lang=scss&
var srcvue_type_style_index_0_id_8814b8d2_scoped_true_lang_scss_ = __webpack_require__("fe73");

// CONCATENATED MODULE: ./src/components/CubeMapDraw/src/index.vue






/* normalize component */

var src_component = Object(componentNormalizer["a" /* default */])(
  CubeMapDraw_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "8814b8d2",
  null
  
)

/* harmony default export */ var src = (src_component.exports);
// CONCATENATED MODULE: ./src/components/CubeMapDraw/index.js



src.install = function (Vue) {
  Vue.component(src.name, src);
};

/* harmony default export */ var CubeMapDraw = (src);
// CONCATENATED MODULE: ./src/components/index.js




/*
 * @Author: shiliangL
 * @Date: 2020-11-21 21:42:23
 * @LastEditTime: 2020-11-21 22:10:58
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /cube-baidu-map/src/components/index.js
 */

var components_components = [CubeMapDraw];

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  components_components.forEach(function (component) {
    Vue.component(component.name, component);
  });
};
/* istanbul ignore if */


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var src_components = __webpack_exports__["a"] = ({
  version: '0.1.1',
  install: install,
  CubeMapDraw: CubeMapDraw
});

/***/ }),

/***/ "2c7d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2ec5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapTools_vue_vue_type_style_index_0_id_38552c8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2c7d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapTools_vue_vue_type_style_index_0_id_38552c8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapTools_vue_vue_type_style_index_0_id_38552c8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapTools_vue_vue_type_style_index_0_id_38552c8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fe73":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8814b8d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("24f9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8814b8d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8814b8d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8814b8d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ });
});