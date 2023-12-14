"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Using color palette: https://palettes.shecodes.io/palettes/1448 */

body {
  font-family: Arial, Helvetica, sans-serif;
}

#container,
#main,
#header,
#footer {
  display: flex;
  width: 100%;
}

#container {
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
}

#header,
#footer {
  color: #e7eaf6;
  background-color: #113f67;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#main {
  display: flex;
  flex-direction: row;
  justify-content: first baseline;
  align-items: center;
  color: #113f67;
  background-color: #e7eaf6;
  height: 80%;
  width: 100%;
}

#newTask {
  margin-bottom: 2rem;
  padding: 10px 25px;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  border: 2px solid #113f67;
  z-index: 1;
  color: #e7eaf6;
  background-color: #113f67;
  border-radius: 5%;
}

#newTask:hover {
  color: #113f67;
  background-color: #e7eaf6;
  border-color: #e7eaf6;
}

#mainleft {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 100%;
  background-color: #a2a8d3;
}

#mainright {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  height: 100%;
}

#projectsList {
  width: 80%;
  height: 80%;
}

.project {
  border: solid black;
  padding: 10px 25px;
  margin: 1rem 1rem 1rem 1rem;
}

.task {
  border: solid black;
  padding: 10px 25px;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
}

#taskTitle {
  display: flex;
  justify-content: center;
}

#tasksList {
  width: 80%;
  height: 80%;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,oEAAoE;;AAEpE;EACE,yCAAyC;AAC3C;;AAEA;;;;EAIE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;EACd,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,+BAA+B;EAC/B,mBAAmB;EACnB,cAAc;EACd,yBAAyB;EACzB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;EACzB,UAAU;EACV,cAAc;EACd,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,UAAU;EACV,YAAY;AACd;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,WAAW;AACb","sourcesContent":["/* Using color palette: https://palettes.shecodes.io/palettes/1448 */\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#container,\n#main,\n#header,\n#footer {\n  display: flex;\n  width: 100%;\n}\n\n#container {\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  align-items: center;\n}\n\n#header,\n#footer {\n  color: #e7eaf6;\n  background-color: #113f67;\n  height: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#main {\n  display: flex;\n  flex-direction: row;\n  justify-content: first baseline;\n  align-items: center;\n  color: #113f67;\n  background-color: #e7eaf6;\n  height: 80%;\n  width: 100%;\n}\n\n#newTask {\n  margin-bottom: 2rem;\n  padding: 10px 25px;\n  background: transparent;\n  outline: none !important;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  display: inline-block;\n  border: 2px solid #113f67;\n  z-index: 1;\n  color: #e7eaf6;\n  background-color: #113f67;\n  border-radius: 5%;\n}\n\n#newTask:hover {\n  color: #113f67;\n  background-color: #e7eaf6;\n  border-color: #e7eaf6;\n}\n\n#mainleft {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 30%;\n  height: 100%;\n  background-color: #a2a8d3;\n}\n\n#mainright {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 70%;\n  height: 100%;\n}\n\n#projectsList {\n  width: 80%;\n  height: 80%;\n}\n\n.project {\n  border: solid black;\n  padding: 10px 25px;\n  margin: 1rem 1rem 1rem 1rem;\n}\n\n.task {\n  border: solid black;\n  padding: 10px 25px;\n  margin: 0.5rem 0.5rem 0.5rem 0.5rem;\n}\n\n#taskTitle {\n  display: flex;\n  justify-content: center;\n}\n\n#tasksList {\n  width: 80%;\n  height: 80%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DATA/projects.js":
/*!******************************!*\
  !*** ./src/DATA/projects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   placeHolder: () => (/* binding */ placeHolder),
/* harmony export */   projOne: () => (/* binding */ projOne),
/* harmony export */   projTwo: () => (/* binding */ projTwo)
/* harmony export */ });
class Project {
  constructor(title, description = "", dueDate = null) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.tasksList = [];
  }
  addTask(task) {
    this.tasksList.push(task);
  }
  removeTask(task) {
    const taskIndex = this.tasksList.indexOf(task);
    if (taskIndex !== -1) {
      this.tasksList.splice(taskIndex, 11);
    }
  }
}

const projOne = new Project("Project 1", "Description", "12.31.2023");
const projTwo = new Project("Project 2", "Some description", "");
projOne.addTask("task 1 for proj 1");
projOne.addTask("task 2 for proj 1");
projTwo.addTask("Task 1 for proj 2");

const placeHolder = () => {
  let projectArr = [];
  projectArr.push(projOne);
  projectArr.push(projTwo);
  return projectArr;
};
placeHolder();


/***/ }),

/***/ "./src/DATA/tasks.js":
/*!***************************!*\
  !*** ./src/DATA/tasks.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(name, description="", dueDate=null) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
    }
}

/***/ }),

/***/ "./src/DOM/loadPage.js":
/*!*****************************!*\
  !*** ./src/DOM/loadPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendNodeToBody: () => (/* binding */ appendNodeToBody),
/* harmony export */   framework: () => (/* binding */ framework),
/* harmony export */   getProjTitles: () => (/* binding */ getProjTitles),
/* harmony export */   injectProjHtml: () => (/* binding */ injectProjHtml),
/* harmony export */   injectTaskHtml: () => (/* binding */ injectTaskHtml)
/* harmony export */ });
/* harmony import */ var _DATA_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DATA/projects */ "./src/DATA/projects.js");
/* harmony import */ var _DATA_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DATA/tasks */ "./src/DATA/tasks.js");




function framework() {
  const divFrame = document.createElement("div");
  divFrame.id = "container";
  divFrame.innerHTML = `<div id="header"><h1>To-do list</h1></div>
    <div id="main">
        <div id="mainleft">
            <div id="projectTitle"><h1>Projects</h1></div>
            <div id="projectsList">
            </div>
            <div><button id="newTask"><h2>+ Add Project</h2></button></div></div>
            <div id="mainright">
                <div id="taskTitle"><h2>Tasks</h2></div>
                <div id="tasksList">
            </div>
            </div>
            </div>
    <div id="footer"><div class="text-red-700"><p class="text-red-700">LOREM IPSUM!</p></div></div>`;
  return divFrame;
}
function appendNodeToBody(node) {
  document.body.appendChild(node);
}
const getProjTitles = (arr) => {
  let titlesArr = [];
  arr.forEach((element) => {
    titlesArr.push(element.title);
  });
  return titlesArr;
  console.log(titlesArr);
};

const injectProjHtml = (titlesArray) => {
  let projectsList = document.querySelector("#projectsList");
  let projectNodeArr = [];
  for (let i = 0; i < titlesArray.length; i++) {
    let divNode = document.createElement("div");
    divNode.classList.add("project");
    projectsList.appendChild(divNode);
    projectNodeArr.push(divNode);
    projectNodeArr[i].innerHTML = `${titlesArray[i]}`;
  }
};

const injectTaskHtml = (projArray, index) => {
  let taskNode = document.querySelector("#tasksList");
  let taskArr = [];
  for (let i = 0; i < projArray[index].tasksList.length; i++) {
    let divNode = document.createElement("div");
    divNode.classList.add("task");
    taskNode.appendChild(divNode);
    taskArr.push(divNode);
    taskArr[i].innerHTML = `${projArray[index].tasksList[i]}`;
  }
};


/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/loadPage */ "./src/DOM/loadPage.js");
/* harmony import */ var _DATA_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DATA/tasks */ "./src/DATA/tasks.js");
/* harmony import */ var _DATA_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DATA/projects */ "./src/DATA/projects.js");











(0,_DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__.appendNodeToBody)((0,_DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__.framework)());
(0,_DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__.injectProjHtml)((0,_DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__.getProjTitles)((0,_DATA_projects__WEBPACK_IMPORTED_MODULE_3__.placeHolder)()));
(0,_DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__.injectTaskHtml)((0,_DATA_projects__WEBPACK_IMPORTED_MODULE_3__.placeHolder)(), 0);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QThCLDhCQUE4QjtBQUM1RDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekRxQjtBQUMrQjtBQUNGO0FBQ0o7QUFDVjtBQUNNO0FBQ007QUFDRjtBQUNDO0FBQ0M7O0FBRWhELCtEQUFnQixDQUFDLHdEQUFTO0FBQzFCLDZEQUFjLENBQUMsNERBQWEsQ0FBQywyREFBVztBQUN4Qyw2REFBYyxDQUFDLDJEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvREFUQS9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9EQVRBL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS9sb2FkUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFVzaW5nIGNvbG9yIHBhbGV0dGU6IGh0dHBzOi8vcGFsZXR0ZXMuc2hlY29kZXMuaW8vcGFsZXR0ZXMvMTQ0OCAqL1xuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbiNjb250YWluZXIsXG4jbWFpbixcbiNoZWFkZXIsXG4jZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNjb250YWluZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNoZWFkZXIsXG4jZm9vdGVyIHtcbiAgY29sb3I6ICNlN2VhZjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTNmNjc7XG4gIGhlaWdodDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI21haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZpcnN0IGJhc2VsaW5lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzExM2Y2NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZWFmNjtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jbmV3VGFzayB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAycHggc29saWQgIzExM2Y2NztcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNlN2VhZjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTNmNjc7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4jbmV3VGFzazpob3ZlciB7XG4gIGNvbG9yOiAjMTEzZjY3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlYWY2O1xuICBib3JkZXItY29sb3I6ICNlN2VhZjY7XG59XG5cbiNtYWlubGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmE4ZDM7XG59XG5cbiNtYWlucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI3Byb2plY3RzTGlzdCB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xufVxuXG4ucHJvamVjdCB7XG4gIGJvcmRlcjogc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xufVxuXG4udGFzayB7XG4gIGJvcmRlcjogc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwLjVyZW07XG59XG5cbiN0YXNrVGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3Rhc2tzTGlzdCB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG9FQUFvRTs7QUFFcEU7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7Ozs7RUFJRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFVzaW5nIGNvbG9yIHBhbGV0dGU6IGh0dHBzOi8vcGFsZXR0ZXMuc2hlY29kZXMuaW8vcGFsZXR0ZXMvMTQ0OCAqL1xcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIsXFxuI21haW4sXFxuI2hlYWRlcixcXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXIsXFxuI2Zvb3RlciB7XFxuICBjb2xvcjogI2U3ZWFmNjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTNmNjc7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmlyc3QgYmFzZWxpbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMxMTNmNjc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlYWY2O1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI25ld1Rhc2sge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxMTNmNjc7XFxuICB6LWluZGV4OiAxO1xcbiAgY29sb3I6ICNlN2VhZjY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzZjY3O1xcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxufVxcblxcbiNuZXdUYXNrOmhvdmVyIHtcXG4gIGNvbG9yOiAjMTEzZjY3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZWFmNjtcXG4gIGJvcmRlci1jb2xvcjogI2U3ZWFmNjtcXG59XFxuXFxuI21haW5sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmE4ZDM7XFxufVxcblxcbiNtYWlucmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdHNMaXN0IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gIG1hcmdpbjogMXJlbSAxcmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuLnRhc2sge1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xcbn1cXG5cXG4jdGFza1RpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2tzTGlzdCB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uID0gXCJcIiwgZHVlRGF0ZSA9IG51bGwpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy50YXNrc0xpc3QgPSBbXTtcbiAgfVxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzTGlzdC5wdXNoKHRhc2spO1xuICB9XG4gIHJlbW92ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IHRoaXMudGFza3NMaXN0LmluZGV4T2YodGFzayk7XG4gICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMudGFza3NMaXN0LnNwbGljZSh0YXNrSW5kZXgsIDExKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2pPbmUgPSBuZXcgUHJvamVjdChcIlByb2plY3QgMVwiLCBcIkRlc2NyaXB0aW9uXCIsIFwiMTIuMzEuMjAyM1wiKTtcbmV4cG9ydCBjb25zdCBwcm9qVHdvID0gbmV3IFByb2plY3QoXCJQcm9qZWN0IDJcIiwgXCJTb21lIGRlc2NyaXB0aW9uXCIsIFwiXCIpO1xucHJvak9uZS5hZGRUYXNrKFwidGFzayAxIGZvciBwcm9qIDFcIik7XG5wcm9qT25lLmFkZFRhc2soXCJ0YXNrIDIgZm9yIHByb2ogMVwiKTtcbnByb2pUd28uYWRkVGFzayhcIlRhc2sgMSBmb3IgcHJvaiAyXCIpO1xuXG5leHBvcnQgY29uc3QgcGxhY2VIb2xkZXIgPSAoKSA9PiB7XG4gIGxldCBwcm9qZWN0QXJyID0gW107XG4gIHByb2plY3RBcnIucHVzaChwcm9qT25lKTtcbiAgcHJvamVjdEFyci5wdXNoKHByb2pUd28pO1xuICByZXR1cm4gcHJvamVjdEFycjtcbn07XG5wbGFjZUhvbGRlcigpO1xuIiwiZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uPVwiXCIsIGR1ZURhdGU9bnVsbCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vREFUQS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLi9EQVRBL3Rhc2tzXCI7XG5pbXBvcnQgeyBwbGFjZUhvbGRlciB9IGZyb20gXCIuLi9EQVRBL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBwcm9qT25lIH0gZnJvbSBcIi4uL0RBVEEvcHJvamVjdHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBmcmFtZXdvcmsoKSB7XG4gIGNvbnN0IGRpdkZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2RnJhbWUuaWQgPSBcImNvbnRhaW5lclwiO1xuICBkaXZGcmFtZS5pbm5lckhUTUwgPSBgPGRpdiBpZD1cImhlYWRlclwiPjxoMT5Uby1kbyBsaXN0PC9oMT48L2Rpdj5cbiAgICA8ZGl2IGlkPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGlkPVwibWFpbmxlZnRcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0VGl0bGVcIj48aDE+UHJvamVjdHM8L2gxPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3RzTGlzdFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxidXR0b24gaWQ9XCJuZXdUYXNrXCI+PGgyPisgQWRkIFByb2plY3Q8L2gyPjwvYnV0dG9uPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1haW5yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YXNrVGl0bGVcIj48aDI+VGFza3M8L2gyPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YXNrc0xpc3RcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiZm9vdGVyXCI+PGRpdiBjbGFzcz1cInRleHQtcmVkLTcwMFwiPjxwIGNsYXNzPVwidGV4dC1yZWQtNzAwXCI+TE9SRU0gSVBTVU0hPC9wPjwvZGl2PjwvZGl2PmA7XG4gIHJldHVybiBkaXZGcmFtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmROb2RlVG9Cb2R5KG5vZGUpIHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRQcm9qVGl0bGVzID0gKGFycikgPT4ge1xuICBsZXQgdGl0bGVzQXJyID0gW107XG4gIGFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgdGl0bGVzQXJyLnB1c2goZWxlbWVudC50aXRsZSk7XG4gIH0pO1xuICByZXR1cm4gdGl0bGVzQXJyO1xuICBjb25zb2xlLmxvZyh0aXRsZXNBcnIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGluamVjdFByb2pIdG1sID0gKHRpdGxlc0FycmF5KSA9PiB7XG4gIGxldCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzTGlzdFwiKTtcbiAgbGV0IHByb2plY3ROb2RlQXJyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgZGl2Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2Tm9kZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoZGl2Tm9kZSk7XG4gICAgcHJvamVjdE5vZGVBcnIucHVzaChkaXZOb2RlKTtcbiAgICBwcm9qZWN0Tm9kZUFycltpXS5pbm5lckhUTUwgPSBgJHt0aXRsZXNBcnJheVtpXX1gO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaW5qZWN0VGFza0h0bWwgPSAocHJvakFycmF5LCBpbmRleCkgPT4ge1xuICBsZXQgdGFza05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzTGlzdFwiKTtcbiAgbGV0IHRhc2tBcnIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qQXJyYXlbaW5kZXhdLnRhc2tzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkaXZOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZOb2RlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgIHRhc2tOb2RlLmFwcGVuZENoaWxkKGRpdk5vZGUpO1xuICAgIHRhc2tBcnIucHVzaChkaXZOb2RlKTtcbiAgICB0YXNrQXJyW2ldLmlubmVySFRNTCA9IGAke3Byb2pBcnJheVtpbmRleF0udGFza3NMaXN0W2ldfWA7XG4gIH1cbn07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZnJhbWV3b3JrLCBwcm9qT25lIH0gZnJvbSBcIi4vRE9NL2xvYWRQYWdlXCI7XG5pbXBvcnQgeyBhcHBlbmROb2RlVG9Cb2R5IH0gZnJvbSBcIi4vRE9NL2xvYWRQYWdlXCI7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9EQVRBL3Rhc2tzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vREFUQS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgaW5qZWN0UHJvakh0bWwgfSBmcm9tIFwiLi9ET00vbG9hZFBhZ2VcIjtcbmltcG9ydCB7IHBsYWNlSG9sZGVyIH0gZnJvbSBcIi4vREFUQS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZ2V0UHJvalRpdGxlcyB9IGZyb20gXCIuL0RPTS9sb2FkUGFnZVwiO1xuaW1wb3J0IHsgaW5qZWN0VGFza0h0bWwgfSBmcm9tIFwiLi9ET00vbG9hZFBhZ2VcIjtcblxuYXBwZW5kTm9kZVRvQm9keShmcmFtZXdvcmsoKSk7XG5pbmplY3RQcm9qSHRtbChnZXRQcm9qVGl0bGVzKHBsYWNlSG9sZGVyKCkpKTtcbmluamVjdFRhc2tIdG1sKHBsYWNlSG9sZGVyKCksIDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9