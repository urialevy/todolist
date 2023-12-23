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

#newTask, .project, #delTask, #finishTask, #addTask {
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

#newTask:hover, .project:hover, #delTask:hover, #finishTask:hover {
  color: #113f67;
  background-color: #e7eaf6;
  border-color: #e7eaf6;
}

#addTask:hover{
  cursor: grab;
  background-color: #a2a8d3;
  border-color: #a2a8d3;
}

#delTask:hover {
  background-color: red;
  border-color: red;
}

#finishTask:hover {
  background-color: green;
  border-color: green;
}

#newProj {
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: space-around;
  align-self: center;
  gap: 1rem;
}

#formNav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1rem;
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
  padding-top: 1rem ;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  width: 70%;
  height: 100%;
}

#projectsList {
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 80%;
}

.project {
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
  margin: 1rem 1rem 1rem 1rem;
}

.task {
  display: flex;
  justify-content: space-around;
  background-color: #113f67;
  color: #e7eaf6;
  padding: 10px 25px;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
}

.delbtn, .completebtn, .editbtn {
  color: #113f67;
  background-color: #a2a8d3;
  border-radius: 20%;
  transition: 0.3s ease;
}

.editbtn:hover {
  cursor: grab;
  background-color: orange;
}

.delbtn:hover {
  cursor: grab;
  background-color: red;
}

.completebtn:hover {
  cursor: grab;
  background-color: green;
}

.taskMan {
  width: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  column-gap: 1rem;
}



#taskTitle {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly
}

#tasksContainer {
  display: flex;
  flex-direction: row;
}

#projectNav {
  display: flex;
  flex-direction: column;
}

#tasksList {
  width: 80%;
  height: 80%;
}


.taskForm {
  display: flex;
  flex-direction: row;
  gap: 5rem;
}

.taskForm>div {
  display: flex;
  gap: 2rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,oEAAoE;;AAEpE;EACE,yCAAyC;AAC3C;;AAEA;;;;EAIE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;EACd,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,+BAA+B;EAC/B,mBAAmB;EACnB,cAAc;EACd,yBAAyB;EACzB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;EACzB,UAAU;EACV,cAAc;EACd,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,yBAAyB;EACzB,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,0BAA0B;EAC1B,UAAU;EACV,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;EACzB,UAAU;EACV,cAAc;EACd,yBAAyB;EACzB,iBAAiB;EACjB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,mCAAmC;AACrC;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,gBAAgB;AAClB;;;;AAIA;EACE,aAAa;EACb,mBAAmB;EACnB;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;;AAGA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX","sourcesContent":["/* Using color palette: https://palettes.shecodes.io/palettes/1448 */\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#container,\n#main,\n#header,\n#footer {\n  display: flex;\n  width: 100%;\n}\n\n#container {\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  align-items: center;\n}\n\n#header,\n#footer {\n  color: #e7eaf6;\n  background-color: #113f67;\n  height: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#main {\n  display: flex;\n  flex-direction: row;\n  justify-content: first baseline;\n  align-items: center;\n  color: #113f67;\n  background-color: #e7eaf6;\n  height: 80%;\n  width: 100%;\n}\n\n#newTask, .project, #delTask, #finishTask, #addTask {\n  margin-bottom: 2rem;\n  padding: 10px 25px;\n  background: transparent;\n  outline: none !important;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  display: inline-block;\n  border: 2px solid #113f67;\n  z-index: 1;\n  color: #e7eaf6;\n  background-color: #113f67;\n  border-radius: 5%;\n}\n\n#newTask:hover, .project:hover, #delTask:hover, #finishTask:hover {\n  color: #113f67;\n  background-color: #e7eaf6;\n  border-color: #e7eaf6;\n}\n\n#addTask:hover{\n  cursor: grab;\n  background-color: #a2a8d3;\n  border-color: #a2a8d3;\n}\n\n#delTask:hover {\n  background-color: red;\n  border-color: red;\n}\n\n#finishTask:hover {\n  background-color: green;\n  border-color: green;\n}\n\n#newProj {\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  align-items: space-around;\n  align-self: center;\n  gap: 1rem;\n}\n\n#formNav {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  gap: 1rem;\n}\n\n#mainleft {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 30%;\n  height: 100%;\n  background-color: #a2a8d3;\n}\n\n#mainright {\n  padding-top: 1rem ;\n  display: flex;\n  flex-direction: column;\n  justify-content:flex-start;\n  width: 70%;\n  height: 100%;\n}\n\n#projectsList {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  height: 80%;\n}\n\n.project {\n  margin-bottom: 2rem;\n  padding: 10px 25px;\n  background: transparent;\n  outline: none !important;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  display: inline-block;\n  border: 2px solid #113f67;\n  z-index: 1;\n  color: #e7eaf6;\n  background-color: #113f67;\n  border-radius: 5%;\n  margin: 1rem 1rem 1rem 1rem;\n}\n\n.task {\n  display: flex;\n  justify-content: space-around;\n  background-color: #113f67;\n  color: #e7eaf6;\n  padding: 10px 25px;\n  margin: 0.5rem 0.5rem 0.5rem 0.5rem;\n}\n\n.delbtn, .completebtn, .editbtn {\n  color: #113f67;\n  background-color: #a2a8d3;\n  border-radius: 20%;\n  transition: 0.3s ease;\n}\n\n.editbtn:hover {\n  cursor: grab;\n  background-color: orange;\n}\n\n.delbtn:hover {\n  cursor: grab;\n  background-color: red;\n}\n\n.completebtn:hover {\n  cursor: grab;\n  background-color: green;\n}\n\n.taskMan {\n  width: 5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  column-gap: 1rem;\n}\n\n\n\n#taskTitle {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly\n}\n\n#tasksContainer {\n  display: flex;\n  flex-direction: row;\n}\n\n#projectNav {\n  display: flex;\n  flex-direction: column;\n}\n\n#tasksList {\n  width: 80%;\n  height: 80%;\n}\n\n\n.taskForm {\n  display: flex;\n  flex-direction: row;\n  gap: 5rem;\n}\n\n.taskForm>div {\n  display: flex;\n  gap: 2rem;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   changeActiveProject: () => (/* binding */ changeActiveProject),
/* harmony export */   completeProjectData: () => (/* binding */ completeProjectData),
/* harmony export */   projOne: () => (/* binding */ projOne),
/* harmony export */   projTwo: () => (/* binding */ projTwo),
/* harmony export */   projectsArray: () => (/* binding */ projectsArray),
/* harmony export */   returnActive: () => (/* binding */ returnActive)
/* harmony export */ });


class Project {
  constructor(title, description = "" /*dueDate = null*/) {
    this.title = title;
    this.description = description;
    // this.dueDate = dueDate;
    this.tasksList = [];
    this.active = Boolean;
    this.id = crypto.randomUUID()
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

const projOne = new Project("Project 1", "Description");
const projTwo = new Project("Project 2", "Some description");
projOne.addTask("task 1 for proj 1");
projOne.addTask("task 2 for proj 1", "with a description");
projTwo.addTask("Task 1 for proj 2");
projOne.active = true;
// creates array of all projects and returns items to it. Used whenever a project is created or deleted.
const projectsArray = []

const completeProjectData = (proj) => {
  projectsArray.push(proj)
}
completeProjectData(projOne)
completeProjectData(projTwo)
const returnActive = (arr) => {
  let activeProj = ""
  arr.forEach(element => {
    element.active == true ? activeProj = element : element.active = false;
  })
  return activeProj
}

const changeActiveProject = (proj) => {
  projectsArray.forEach(project => {
    project.active = false
  })
  proj.active = true
}
changeActiveProject(projTwo)

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

/***/ "./src/DOM/addTask.js":
/*!****************************!*\
  !*** ./src/DOM/addTask.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addForm: () => (/* binding */ addForm),
/* harmony export */   addTaskBtn: () => (/* binding */ addTaskBtn),
/* harmony export */   formListener: () => (/* binding */ formListener)
/* harmony export */ });
/* harmony import */ var _DATA_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DATA/projects */ "./src/DATA/projects.js");
/* harmony import */ var _DATA_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DATA/tasks */ "./src/DATA/tasks.js");
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadPage */ "./src/DOM/loadPage.js");




const formListener = (node) => {
    let currentProject = (0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.returnActive)(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray);
            node.addEventListener('submit', function(e) {
            e.preventDefault()
            let submissionValue = node.querySelector('.taskInput').value

                currentProject.addTask(submissionValue); (0,_loadPage__WEBPACK_IMPORTED_MODULE_2__.updateTasks)()
        })        
    }


const addForm = () => {
    let formNode = document.createElement('div')
    formNode.classList.add('task')
    let tasksList = document.getElementById('tasksList')
    formNode.innerHTML = `<form action="" class="taskForm"><div><label for:"description"></label><input type="text" placeholder="Type your task here..." class="taskInput" name="taskDescription" required></div><div><input type="submit" value="Save"><button class="cancelbtn">Cancel</button></div></form>`
    tasksList.appendChild(formNode)
    formListener(formNode)    
}
const cancelBtns = () => {
    let formCancelBtns = document.querySelectorAll('.cancelbtn')
    formCancelBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault()
            btn.parentElement.parentElement.parentElement.remove()
        })
    })
}    

const addTaskBtn = () => {
    let addTaskBtn = document.getElementById('addTask')
    addTaskBtn.addEventListener('click', function(e) {
        e.preventDefault()
        addForm()
        cancelBtns()
    })
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
/* harmony export */   injectProjHtml: () => (/* binding */ injectProjHtml),
/* harmony export */   navigateProjects: () => (/* binding */ navigateProjects),
/* harmony export */   projBtns: () => (/* binding */ projBtns),
/* harmony export */   recreateDOM: () => (/* binding */ recreateDOM),
/* harmony export */   updateTasks: () => (/* binding */ updateTasks)
/* harmony export */ });
/* harmony import */ var _DATA_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DATA/projects */ "./src/DATA/projects.js");
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ "./src/DOM/addTask.js");








const recreateDOM = () => {
  document.body.innerHTML = ``
  appendNodeToBody(framework());
  injectProjHtml(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray);
  navigateProjects()
  updateTasks()
  projBtns()
  ;(0,_addTask__WEBPACK_IMPORTED_MODULE_1__.addTaskBtn)() 
}

function framework() {
  let currentProject = (0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.returnActive)(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray)
  const divFrame = document.createElement("div");
  divFrame.id = "container";
  let title = ""
  if (currentProject.description) {
    title = `${currentProject.title}: ${currentProject.description}`
  }
  else {
    title = `${currentProject.title}`
  }
  divFrame.innerHTML = `<div id="header"><h1>To-do list</h1></div>
    <div id="main">
        <div id="mainleft">
            <div id="projectTitle"><h1>Projects</h1></div>
            <div id="projectsList">
            </div>
            <div id="projectNav"><button id="newTask"><h2>+ Add Project</h2></button>
            <button id="delTask"><h2>❌ Delete Project</h2></button>
            <button id="finishTask"><h2>✔ Complete Project</h2></button></div></div>
            <div id="mainright">
                <div id="taskTitle"><div><h2>${title}</h2></div><div><button id="addTask"><h2>+Add Task</h2></button></div></div>
                <div id="tasksContainer">
                <div id="tasksList">
            </div></div>
            </div>
            </div>
    <div id="footer"><div class="text-red-700"><p class="text-red-700">LOREM IPSUM!</p></div></div>`;
  return divFrame;
}
function appendNodeToBody(node) {
  document.body.appendChild(node);
}


// generates DOM list of projects
const injectProjHtml = (projArray) => {
  let projectsList = document.querySelector("#projectsList");
  projectsList.innerHTML = ``
  let projectNodeArr = [];
  for (let i = 0; i < projArray.length; i++) {
    let divNode = document.createElement("div");
    divNode.classList.add("project");
    divNode.id = `${projArray[i].id}`
    projectsList.appendChild(divNode);
    projectNodeArr.push(divNode);
    projectNodeArr[i].innerHTML = `${projArray[i].title}`;
  }
};

// generates list of tasks in DOM for a project
const updateTasks = () => {
  let currentProject = (0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.returnActive)(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray);
  let taskNode = document.querySelector("#tasksList");
  let taskArr = [];
  if (taskNode) {
  taskNode.innerHTML = ``  
  // append tasks to the task list from the project
  if (currentProject.tasksList) {
  for (let i = 0; i < currentProject.tasksList.length; i++) {
    let divNode = document.createElement("div");
    divNode.classList.add("task");
    taskArr.push(divNode);
    taskNode.appendChild(divNode)
    taskArr[i].innerHTML = `${currentProject.tasksList[i]} <div class="taskMan"><button class ="delbtn">🗑️</button><button class="completebtn">✔</button><button class="editbtn">🖊️</button></div>` 
  }}}
}
// creates navigation menu on the left for projects
const navigateProjects = () => {
  // get an array of the existing node list
  let nodeList = document.querySelectorAll('.project')
  // add an event listener to each one of them, they adjust the DOM to show the correct project's display
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('click', function(e) {
      e.preventDefault()
      // gets the UUID of the element using the DOM
      let UUID = nodeList[i].id
      let associatedProject = _DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray.find(element => element.id == UUID)
      let title = ""
      if (associatedProject.description) {
        title = `${associatedProject.title}: ${associatedProject.description}`
      }
      else {
        title = `${associatedProject.title}`
      }
      document.getElementById('mainright').innerHTML=`<div id="taskTitle"><div><h2>${title}</h2></div><div><button id="addTask"><h2>+Add Task</h2></button></div></div>
      <div id="tasksContainer">
      <div id="tasksList">
  </div>`
      updateTasks()
    })
  }
}
const projBtns = () => {
  let addProjBtn = document.getElementById('newTask')
  let delProjBtn = document.getElementById('delTask')
  let finishTaskBtn = document.getElementById('finishTask')
  let secondaryMenu = false;
  addProjBtn.addEventListener('click', function(e) {
    secondaryMenu = true;
    e.preventDefault()
    let formNode = document.createElement('form')
    formNode.id = 'newProj'
    formNode.action = 'submit'
    formNode.innerHTML = `<input type="text" name="title" placeholder="Project title" id="projTitle" required><input type="text" placeholder="Project description" id="projDesc"><div id="formNav"><input type="submit"></input><button id="cancelProjBtn">Cancel</button></div>`
    document.getElementById('mainright').innerHTML = ``
    let cancelBtn = document.getElementById('cancelProjBtn')
    document.getElementById('mainright').appendChild(formNode)
    formNode.addEventListener('submit', function(e) {
      secondaryMenu == true ? secondaryMenu = false : secondaryMenu = false
      e.preventDefault()
      let projName = document.getElementById('projTitle').value
      let projDesc = document.getElementById('projDesc').value
      let newProject = new _DATA_projects__WEBPACK_IMPORTED_MODULE_0__.Project (projName, projDesc, "")
      newProject.active=false
      _DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray.push(newProject)
      ;(0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.changeActiveProject)(newProject)
      recreateDOM()
      
      
    }
    )
    
  }
    
  )
  
  delProjBtn.addEventListener('click', function(e) {
    e.preventDefault()
    let currentProject = (0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.returnActive)(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray);
    let index = _DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray.indexOf(currentProject)
    if (secondaryMenu) {
      secondaryMenu = false
      document.getElementById('mainright').innerHTML=``
    }
    else {
      _DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray.splice(index, 1)
      if (_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length > 0) {
        (0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.changeActiveProject)(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray[0])
        updateTasks()
        injectProjHtml(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray)
      }
     else {
      document.getElementById('projectsList').innerHTML = ``
      document.getElementById('mainright').innerHTML=``
     }

    }
  })
  finishTaskBtn.addEventListener('click', function(e) {

  })
}


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
/* harmony import */ var _DOM_addTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/addTask */ "./src/DOM/addTask.js");















(0,_DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__.appendNodeToBody)((0,_DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__.framework)());
(0,_DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__.injectProjHtml)(_DATA_projects__WEBPACK_IMPORTED_MODULE_3__.projectsArray);
(0,_DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__.navigateProjects)()
;(0,_DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__.updateTasks)()
;(0,_DOM_addTask__WEBPACK_IMPORTED_MODULE_4__.addTaskBtn)()
;(0,_DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__.projBtns)()

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixNQUFNLFlBQVksT0FBTyxRQUFRLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxL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O0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFLcUI7QUFDNEM7QUFDZjtBQUNKO0FBQ1Y7QUFDWTtBQUNGO0FBQ0M7QUFDQztBQUNFO0FBQ2dCO0FBQ2xCO0FBQ047OztBQUcxQywrREFBZ0IsQ0FBQyx3REFBUztBQUMxQiw2REFBYyxDQUFDLHlEQUFhO0FBQzVCLCtEQUFnQjtBQUNoQiwyREFBVztBQUNYLHlEQUFVO0FBQ1Ysd0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzkwMTEiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9EQVRBL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RBVEEvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NL2xvYWRQYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVXNpbmcgY29sb3IgcGFsZXR0ZTogaHR0cHM6Ly9wYWxldHRlcy5zaGVjb2Rlcy5pby9wYWxldHRlcy8xNDQ4ICovXG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuI2NvbnRhaW5lcixcbiNtYWluLFxuI2hlYWRlcixcbiNmb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2hlYWRlcixcbiNmb290ZXIge1xuICBjb2xvcjogI2U3ZWFmNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExM2Y2NztcbiAgaGVpZ2h0OiAxMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmlyc3QgYmFzZWxpbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMTEzZjY3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlYWY2O1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNuZXdUYXNrLCAucHJvamVjdCwgI2RlbFRhc2ssICNmaW5pc2hUYXNrLCAjYWRkVGFzayB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAycHggc29saWQgIzExM2Y2NztcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNlN2VhZjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTNmNjc7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4jbmV3VGFzazpob3ZlciwgLnByb2plY3Q6aG92ZXIsICNkZWxUYXNrOmhvdmVyLCAjZmluaXNoVGFzazpob3ZlciB7XG4gIGNvbG9yOiAjMTEzZjY3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlYWY2O1xuICBib3JkZXItY29sb3I6ICNlN2VhZjY7XG59XG5cbiNhZGRUYXNrOmhvdmVye1xuICBjdXJzb3I6IGdyYWI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmE4ZDM7XG4gIGJvcmRlci1jb2xvcjogI2EyYThkMztcbn1cblxuI2RlbFRhc2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4jZmluaXNoVGFzazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xufVxuXG4jbmV3UHJvaiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyMCU7XG4gIGFsaWduLWl0ZW1zOiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4jZm9ybU5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBnYXA6IDFyZW07XG59XG5cbiNtYWlubGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmE4ZDM7XG59XG5cbiNtYWlucmlnaHQge1xuICBwYWRkaW5nLXRvcDogMXJlbSA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNwcm9qZWN0c0xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuLnByb2plY3Qge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxMTNmNjc7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZTdlYWY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzZjY3O1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xufVxuXG4udGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzZjY3O1xuICBjb2xvcjogI2U3ZWFmNjtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBtYXJnaW46IDAuNXJlbSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcbn1cblxuLmRlbGJ0biwgLmNvbXBsZXRlYnRuLCAuZWRpdGJ0biB7XG4gIGNvbG9yOiAjMTEzZjY3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJhOGQzO1xuICBib3JkZXItcmFkaXVzOiAyMCU7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cblxuLmVkaXRidG46aG92ZXIge1xuICBjdXJzb3I6IGdyYWI7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmRlbGJ0bjpob3ZlciB7XG4gIGN1cnNvcjogZ3JhYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uY29tcGxldGVidG46aG92ZXIge1xuICBjdXJzb3I6IGdyYWI7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4udGFza01hbiB7XG4gIHdpZHRoOiA1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgY29sdW1uLWdhcDogMXJlbTtcbn1cblxuXG5cbiN0YXNrVGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seVxufVxuXG4jdGFza3NDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4jcHJvamVjdE5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiN0YXNrc0xpc3Qge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuXG4udGFza0Zvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDVyZW07XG59XG5cbi50YXNrRm9ybT5kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0VBQW9FOztBQUVwRTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTs7OztFQUlFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOzs7O0FBSUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFVzaW5nIGNvbG9yIHBhbGV0dGU6IGh0dHBzOi8vcGFsZXR0ZXMuc2hlY29kZXMuaW8vcGFsZXR0ZXMvMTQ0OCAqL1xcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIsXFxuI21haW4sXFxuI2hlYWRlcixcXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXIsXFxuI2Zvb3RlciB7XFxuICBjb2xvcjogI2U3ZWFmNjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTNmNjc7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmlyc3QgYmFzZWxpbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMxMTNmNjc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlYWY2O1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI25ld1Rhc2ssIC5wcm9qZWN0LCAjZGVsVGFzaywgI2ZpbmlzaFRhc2ssICNhZGRUYXNrIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMTEzZjY3O1xcbiAgei1pbmRleDogMTtcXG4gIGNvbG9yOiAjZTdlYWY2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExM2Y2NztcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbn1cXG5cXG4jbmV3VGFzazpob3ZlciwgLnByb2plY3Q6aG92ZXIsICNkZWxUYXNrOmhvdmVyLCAjZmluaXNoVGFzazpob3ZlciB7XFxuICBjb2xvcjogIzExM2Y2NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2VhZjY7XFxuICBib3JkZXItY29sb3I6ICNlN2VhZjY7XFxufVxcblxcbiNhZGRUYXNrOmhvdmVye1xcbiAgY3Vyc29yOiBncmFiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyYThkMztcXG4gIGJvcmRlci1jb2xvcjogI2EyYThkMztcXG59XFxuXFxuI2RlbFRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcblxcbiNmaW5pc2hUYXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuI25ld1Byb2oge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjAlO1xcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI2Zvcm1OYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW5sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmE4ZDM7XFxufVxcblxcbiNtYWlucmlnaHQge1xcbiAgcGFkZGluZy10b3A6IDFyZW0gO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNwcm9qZWN0c0xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMTEzZjY3O1xcbiAgei1pbmRleDogMTtcXG4gIGNvbG9yOiAjZTdlYWY2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExM2Y2NztcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzZjY3O1xcbiAgY29sb3I6ICNlN2VhZjY7XFxuICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxuICBtYXJnaW46IDAuNXJlbSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcXG59XFxuXFxuLmRlbGJ0biwgLmNvbXBsZXRlYnRuLCAuZWRpdGJ0biB7XFxuICBjb2xvcjogIzExM2Y2NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmE4ZDM7XFxuICBib3JkZXItcmFkaXVzOiAyMCU7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxufVxcblxcbi5lZGl0YnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogZ3JhYjtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLmRlbGJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IGdyYWI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jb21wbGV0ZWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IGdyYWI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRhc2tNYW4ge1xcbiAgd2lkdGg6IDVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgY29sdW1uLWdhcDogMXJlbTtcXG59XFxuXFxuXFxuXFxuI3Rhc2tUaXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5XFxufVxcblxcbiN0YXNrc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuI3Byb2plY3ROYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN0YXNrc0xpc3Qge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbn1cXG5cXG5cXG4udGFza0Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDVyZW07XFxufVxcblxcbi50YXNrRm9ybT5kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZWwgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uID0gXCJcIiAvKmR1ZURhdGUgPSBudWxsKi8pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIC8vIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy50YXNrc0xpc3QgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZSA9IEJvb2xlYW47XG4gICAgdGhpcy5pZCA9IGNyeXB0by5yYW5kb21VVUlEKClcbiAgfVxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzTGlzdC5wdXNoKHRhc2spO1xuICB9XG4gIHJlbW92ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IHRoaXMudGFza3NMaXN0LmluZGV4T2YodGFzayk7XG4gICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMudGFza3NMaXN0LnNwbGljZSh0YXNrSW5kZXgsIDExKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2pPbmUgPSBuZXcgUHJvamVjdChcIlByb2plY3QgMVwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuZXhwb3J0IGNvbnN0IHByb2pUd28gPSBuZXcgUHJvamVjdChcIlByb2plY3QgMlwiLCBcIlNvbWUgZGVzY3JpcHRpb25cIik7XG5wcm9qT25lLmFkZFRhc2soXCJ0YXNrIDEgZm9yIHByb2ogMVwiKTtcbnByb2pPbmUuYWRkVGFzayhcInRhc2sgMiBmb3IgcHJvaiAxXCIsIFwid2l0aCBhIGRlc2NyaXB0aW9uXCIpO1xucHJvalR3by5hZGRUYXNrKFwiVGFzayAxIGZvciBwcm9qIDJcIik7XG5wcm9qT25lLmFjdGl2ZSA9IHRydWU7XG4vLyBjcmVhdGVzIGFycmF5IG9mIGFsbCBwcm9qZWN0cyBhbmQgcmV0dXJucyBpdGVtcyB0byBpdC4gVXNlZCB3aGVuZXZlciBhIHByb2plY3QgaXMgY3JlYXRlZCBvciBkZWxldGVkLlxuZXhwb3J0IGNvbnN0IHByb2plY3RzQXJyYXkgPSBbXVxuXG5leHBvcnQgY29uc3QgY29tcGxldGVQcm9qZWN0RGF0YSA9IChwcm9qKSA9PiB7XG4gIHByb2plY3RzQXJyYXkucHVzaChwcm9qKVxufVxuY29tcGxldGVQcm9qZWN0RGF0YShwcm9qT25lKVxuY29tcGxldGVQcm9qZWN0RGF0YShwcm9qVHdvKVxuZXhwb3J0IGNvbnN0IHJldHVybkFjdGl2ZSA9IChhcnIpID0+IHtcbiAgbGV0IGFjdGl2ZVByb2ogPSBcIlwiXG4gIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuYWN0aXZlID09IHRydWUgPyBhY3RpdmVQcm9qID0gZWxlbWVudCA6IGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XG4gIH0pXG4gIHJldHVybiBhY3RpdmVQcm9qXG59XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VBY3RpdmVQcm9qZWN0ID0gKHByb2opID0+IHtcbiAgcHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIHByb2plY3QuYWN0aXZlID0gZmFsc2VcbiAgfSlcbiAgcHJvai5hY3RpdmUgPSB0cnVlXG59XG5jaGFuZ2VBY3RpdmVQcm9qZWN0KHByb2pUd28pIiwiZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uPVwiXCIsIGR1ZURhdGU9bnVsbCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxufSIsImltcG9ydCB7IFByb2plY3QsIHJldHVybkFjdGl2ZSwgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuLi9EQVRBL3Byb2plY3RzXCJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi4vREFUQS90YXNrc1wiXG5pbXBvcnQgeyB1cGRhdGVUYXNrcyB9IGZyb20gXCIuL2xvYWRQYWdlXCJcblxuZXhwb3J0IGNvbnN0IGZvcm1MaXN0ZW5lciA9IChub2RlKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcmV0dXJuQWN0aXZlKHByb2plY3RzQXJyYXkpO1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGxldCBzdWJtaXNzaW9uVmFsdWUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy50YXNrSW5wdXQnKS52YWx1ZVxuXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QuYWRkVGFzayhzdWJtaXNzaW9uVmFsdWUpOyB1cGRhdGVUYXNrcygpXG4gICAgICAgIH0pICAgICAgICBcbiAgICB9XG5cblxuZXhwb3J0IGNvbnN0IGFkZEZvcm0gPSAoKSA9PiB7XG4gICAgbGV0IGZvcm1Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtTm9kZS5jbGFzc0xpc3QuYWRkKCd0YXNrJylcbiAgICBsZXQgdGFza3NMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzTGlzdCcpXG4gICAgZm9ybU5vZGUuaW5uZXJIVE1MID0gYDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwidGFza0Zvcm1cIj48ZGl2PjxsYWJlbCBmb3I6XCJkZXNjcmlwdGlvblwiPjwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgdGFzayBoZXJlLi4uXCIgY2xhc3M9XCJ0YXNrSW5wdXRcIiBuYW1lPVwidGFza0Rlc2NyaXB0aW9uXCIgcmVxdWlyZWQ+PC9kaXY+PGRpdj48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2F2ZVwiPjxidXR0b24gY2xhc3M9XCJjYW5jZWxidG5cIj5DYW5jZWw8L2J1dHRvbj48L2Rpdj48L2Zvcm0+YFxuICAgIHRhc2tzTGlzdC5hcHBlbmRDaGlsZChmb3JtTm9kZSlcbiAgICBmb3JtTGlzdGVuZXIoZm9ybU5vZGUpICAgIFxufVxuY29uc3QgY2FuY2VsQnRucyA9ICgpID0+IHtcbiAgICBsZXQgZm9ybUNhbmNlbEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FuY2VsYnRuJylcbiAgICBmb3JtQ2FuY2VsQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgICAgIH0pXG4gICAgfSlcbn0gICAgXG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrQnRuID0gKCkgPT4ge1xuICAgIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2snKVxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBhZGRGb3JtKClcbiAgICAgICAgY2FuY2VsQnRucygpXG4gICAgfSlcbn1cblxuXG4iLCJpbXBvcnQgeyBlbCB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcbmltcG9ydCB7IHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi4vREFUQS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgcmV0dXJuQWN0aXZlIH0gZnJvbSBcIi4uL0RBVEEvcHJvamVjdHNcIjtcbmltcG9ydCB7IGNoYW5nZUFjdGl2ZVByb2plY3QgfSBmcm9tIFwiLi4vREFUQS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9EQVRBL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBhZGRUYXNrQnRuIH0gZnJvbSBcIi4vYWRkVGFza1wiO1xuXG5cbmV4cG9ydCBjb25zdCByZWNyZWF0ZURPTSA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgYFxuICBhcHBlbmROb2RlVG9Cb2R5KGZyYW1ld29yaygpKTtcbiAgaW5qZWN0UHJvakh0bWwocHJvamVjdHNBcnJheSk7XG4gIG5hdmlnYXRlUHJvamVjdHMoKVxuICB1cGRhdGVUYXNrcygpXG4gIHByb2pCdG5zKClcbiAgYWRkVGFza0J0bigpIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWV3b3JrKCkge1xuICBsZXQgY3VycmVudFByb2plY3QgPSByZXR1cm5BY3RpdmUocHJvamVjdHNBcnJheSlcbiAgY29uc3QgZGl2RnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZGcmFtZS5pZCA9IFwiY29udGFpbmVyXCI7XG4gIGxldCB0aXRsZSA9IFwiXCJcbiAgaWYgKGN1cnJlbnRQcm9qZWN0LmRlc2NyaXB0aW9uKSB7XG4gICAgdGl0bGUgPSBgJHtjdXJyZW50UHJvamVjdC50aXRsZX06ICR7Y3VycmVudFByb2plY3QuZGVzY3JpcHRpb259YFxuICB9XG4gIGVsc2Uge1xuICAgIHRpdGxlID0gYCR7Y3VycmVudFByb2plY3QudGl0bGV9YFxuICB9XG4gIGRpdkZyYW1lLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwiaGVhZGVyXCI+PGgxPlRvLWRvIGxpc3Q8L2gxPjwvZGl2PlxuICAgIDxkaXYgaWQ9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJtYWlubGVmdFwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3RUaXRsZVwiPjxoMT5Qcm9qZWN0czwvaDE+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJvamVjdHNMaXN0XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0TmF2XCI+PGJ1dHRvbiBpZD1cIm5ld1Rhc2tcIj48aDI+KyBBZGQgUHJvamVjdDwvaDI+PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVsVGFza1wiPjxoMj7inYwgRGVsZXRlIFByb2plY3Q8L2gyPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZpbmlzaFRhc2tcIj48aDI+4pyUIENvbXBsZXRlIFByb2plY3Q8L2gyPjwvYnV0dG9uPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1haW5yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YXNrVGl0bGVcIj48ZGl2PjxoMj4ke3RpdGxlfTwvaDI+PC9kaXY+PGRpdj48YnV0dG9uIGlkPVwiYWRkVGFza1wiPjxoMj4rQWRkIFRhc2s8L2gyPjwvYnV0dG9uPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YXNrc0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YXNrc0xpc3RcIj5cbiAgICAgICAgICAgIDwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiZm9vdGVyXCI+PGRpdiBjbGFzcz1cInRleHQtcmVkLTcwMFwiPjxwIGNsYXNzPVwidGV4dC1yZWQtNzAwXCI+TE9SRU0gSVBTVU0hPC9wPjwvZGl2PjwvZGl2PmA7XG4gIHJldHVybiBkaXZGcmFtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmROb2RlVG9Cb2R5KG5vZGUpIHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcbn1cblxuXG4vLyBnZW5lcmF0ZXMgRE9NIGxpc3Qgb2YgcHJvamVjdHNcbmV4cG9ydCBjb25zdCBpbmplY3RQcm9qSHRtbCA9IChwcm9qQXJyYXkpID0+IHtcbiAgbGV0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNMaXN0XCIpO1xuICBwcm9qZWN0c0xpc3QuaW5uZXJIVE1MID0gYGBcbiAgbGV0IHByb2plY3ROb2RlQXJyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvakFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGRpdk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdk5vZGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgZGl2Tm9kZS5pZCA9IGAke3Byb2pBcnJheVtpXS5pZH1gXG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGRpdk5vZGUpO1xuICAgIHByb2plY3ROb2RlQXJyLnB1c2goZGl2Tm9kZSk7XG4gICAgcHJvamVjdE5vZGVBcnJbaV0uaW5uZXJIVE1MID0gYCR7cHJvakFycmF5W2ldLnRpdGxlfWA7XG4gIH1cbn07XG5cbi8vIGdlbmVyYXRlcyBsaXN0IG9mIHRhc2tzIGluIERPTSBmb3IgYSBwcm9qZWN0XG5leHBvcnQgY29uc3QgdXBkYXRlVGFza3MgPSAoKSA9PiB7XG4gIGxldCBjdXJyZW50UHJvamVjdCA9IHJldHVybkFjdGl2ZShwcm9qZWN0c0FycmF5KTtcbiAgbGV0IHRhc2tOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrc0xpc3RcIik7XG4gIGxldCB0YXNrQXJyID0gW107XG4gIGlmICh0YXNrTm9kZSkge1xuICB0YXNrTm9kZS5pbm5lckhUTUwgPSBgYCAgXG4gIC8vIGFwcGVuZCB0YXNrcyB0byB0aGUgdGFzayBsaXN0IGZyb20gdGhlIHByb2plY3RcbiAgaWYgKGN1cnJlbnRQcm9qZWN0LnRhc2tzTGlzdCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LnRhc2tzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkaXZOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZOb2RlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgIHRhc2tBcnIucHVzaChkaXZOb2RlKTtcbiAgICB0YXNrTm9kZS5hcHBlbmRDaGlsZChkaXZOb2RlKVxuICAgIHRhc2tBcnJbaV0uaW5uZXJIVE1MID0gYCR7Y3VycmVudFByb2plY3QudGFza3NMaXN0W2ldfSA8ZGl2IGNsYXNzPVwidGFza01hblwiPjxidXR0b24gY2xhc3MgPVwiZGVsYnRuXCI+8J+Xke+4jzwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJjb21wbGV0ZWJ0blwiPuKclDwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJlZGl0YnRuXCI+8J+Wiu+4jzwvYnV0dG9uPjwvZGl2PmAgXG4gIH19fVxufVxuLy8gY3JlYXRlcyBuYXZpZ2F0aW9uIG1lbnUgb24gdGhlIGxlZnQgZm9yIHByb2plY3RzXG5leHBvcnQgY29uc3QgbmF2aWdhdGVQcm9qZWN0cyA9ICgpID0+IHtcbiAgLy8gZ2V0IGFuIGFycmF5IG9mIHRoZSBleGlzdGluZyBub2RlIGxpc3RcbiAgbGV0IG5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxuICAvLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBvbmUgb2YgdGhlbSwgdGhleSBhZGp1c3QgdGhlIERPTSB0byBzaG93IHRoZSBjb3JyZWN0IHByb2plY3QncyBkaXNwbGF5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBub2RlTGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgLy8gZ2V0cyB0aGUgVVVJRCBvZiB0aGUgZWxlbWVudCB1c2luZyB0aGUgRE9NXG4gICAgICBsZXQgVVVJRCA9IG5vZGVMaXN0W2ldLmlkXG4gICAgICBsZXQgYXNzb2NpYXRlZFByb2plY3QgPSBwcm9qZWN0c0FycmF5LmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmlkID09IFVVSUQpXG4gICAgICBsZXQgdGl0bGUgPSBcIlwiXG4gICAgICBpZiAoYXNzb2NpYXRlZFByb2plY3QuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGl0bGUgPSBgJHthc3NvY2lhdGVkUHJvamVjdC50aXRsZX06ICR7YXNzb2NpYXRlZFByb2plY3QuZGVzY3JpcHRpb259YFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRpdGxlID0gYCR7YXNzb2NpYXRlZFByb2plY3QudGl0bGV9YFxuICAgICAgfVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5yaWdodCcpLmlubmVySFRNTD1gPGRpdiBpZD1cInRhc2tUaXRsZVwiPjxkaXY+PGgyPiR7dGl0bGV9PC9oMj48L2Rpdj48ZGl2PjxidXR0b24gaWQ9XCJhZGRUYXNrXCI+PGgyPitBZGQgVGFzazwvaDI+PC9idXR0b24+PC9kaXY+PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwidGFza3NDb250YWluZXJcIj5cbiAgICAgIDxkaXYgaWQ9XCJ0YXNrc0xpc3RcIj5cbiAgPC9kaXY+YFxuICAgICAgdXBkYXRlVGFza3MoKVxuICAgIH0pXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBwcm9qQnRucyA9ICgpID0+IHtcbiAgbGV0IGFkZFByb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFzaycpXG4gIGxldCBkZWxQcm9qQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbFRhc2snKVxuICBsZXQgZmluaXNoVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5pc2hUYXNrJylcbiAgbGV0IHNlY29uZGFyeU1lbnUgPSBmYWxzZTtcbiAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBzZWNvbmRhcnlNZW51ID0gdHJ1ZTtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgZm9ybU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtTm9kZS5pZCA9ICduZXdQcm9qJ1xuICAgIGZvcm1Ob2RlLmFjdGlvbiA9ICdzdWJtaXQnXG4gICAgZm9ybU5vZGUuaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiUHJvamVjdCB0aXRsZVwiIGlkPVwicHJvalRpdGxlXCIgcmVxdWlyZWQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IGRlc2NyaXB0aW9uXCIgaWQ9XCJwcm9qRGVzY1wiPjxkaXYgaWQ9XCJmb3JtTmF2XCI+PGlucHV0IHR5cGU9XCJzdWJtaXRcIj48L2lucHV0PjxidXR0b24gaWQ9XCJjYW5jZWxQcm9qQnRuXCI+Q2FuY2VsPC9idXR0b24+PC9kaXY+YFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlucmlnaHQnKS5pbm5lckhUTUwgPSBgYFxuICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsUHJvakJ0bicpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5yaWdodCcpLmFwcGVuZENoaWxkKGZvcm1Ob2RlKVxuICAgIGZvcm1Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHNlY29uZGFyeU1lbnUgPT0gdHJ1ZSA/IHNlY29uZGFyeU1lbnUgPSBmYWxzZSA6IHNlY29uZGFyeU1lbnUgPSBmYWxzZVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBsZXQgcHJvak5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvalRpdGxlJykudmFsdWVcbiAgICAgIGxldCBwcm9qRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qRGVzYycpLnZhbHVlXG4gICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0IChwcm9qTmFtZSwgcHJvakRlc2MsIFwiXCIpXG4gICAgICBuZXdQcm9qZWN0LmFjdGl2ZT1mYWxzZVxuICAgICAgcHJvamVjdHNBcnJheS5wdXNoKG5ld1Byb2plY3QpXG4gICAgICBjaGFuZ2VBY3RpdmVQcm9qZWN0KG5ld1Byb2plY3QpXG4gICAgICByZWNyZWF0ZURPTSgpXG4gICAgICBcbiAgICAgIFxuICAgIH1cbiAgICApXG4gICAgXG4gIH1cbiAgICBcbiAgKVxuICBcbiAgZGVsUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSByZXR1cm5BY3RpdmUocHJvamVjdHNBcnJheSk7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdHNBcnJheS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KVxuICAgIGlmIChzZWNvbmRhcnlNZW51KSB7XG4gICAgICBzZWNvbmRhcnlNZW51ID0gZmFsc2VcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlucmlnaHQnKS5pbm5lckhUTUw9YGBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcm9qZWN0c0FycmF5LnNwbGljZShpbmRleCwgMSlcbiAgICAgIGlmIChwcm9qZWN0c0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hhbmdlQWN0aXZlUHJvamVjdChwcm9qZWN0c0FycmF5WzBdKVxuICAgICAgICB1cGRhdGVUYXNrcygpXG4gICAgICAgIGluamVjdFByb2pIdG1sKHByb2plY3RzQXJyYXkpXG4gICAgICB9XG4gICAgIGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzTGlzdCcpLmlubmVySFRNTCA9IGBgXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnJpZ2h0JykuaW5uZXJIVE1MPWBgXG4gICAgIH1cblxuICAgIH1cbiAgfSlcbiAgZmluaXNoVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblxuICB9KVxufVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGZyYW1ld29yaywgcHJvak9uZSwgdXBkYXRlVGFza3MgfSBmcm9tIFwiLi9ET00vbG9hZFBhZ2VcIjtcbmltcG9ydCB7IGFwcGVuZE5vZGVUb0JvZHkgfSBmcm9tIFwiLi9ET00vbG9hZFBhZ2VcIjtcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL0RBVEEvdGFza3NcIjtcbmltcG9ydCB7IGluamVjdFByb2pIdG1sIH0gZnJvbSBcIi4vRE9NL2xvYWRQYWdlXCI7XG5pbXBvcnQgeyBwbGFjZUhvbGRlciB9IGZyb20gXCIuL0RBVEEvcHJvamVjdHNcIjtcbmltcG9ydCB7IGdldFByb2pUaXRsZXMgfSBmcm9tIFwiLi9ET00vbG9hZFBhZ2VcIjtcbmltcG9ydCB7IGluamVjdFRhc2tIdG1sIH0gZnJvbSBcIi4vRE9NL2xvYWRQYWdlXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZVByb2plY3RzIH0gZnJvbSBcIi4vRE9NL2xvYWRQYWdlXCI7XG5pbXBvcnQgeyBhZGRGb3JtLCBhZGRUYXNrQnRuLCBmb3JtTGlzdGVuZXIgfSBmcm9tIFwiLi9ET00vYWRkVGFza1wiO1xuaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL0RBVEEvcHJvamVjdHNcIjtcbmltcG9ydCB7IHByb2pCdG5zIH0gZnJvbSBcIi4vRE9NL2xvYWRQYWdlXCI7XG5cblxuYXBwZW5kTm9kZVRvQm9keShmcmFtZXdvcmsoKSk7XG5pbmplY3RQcm9qSHRtbChwcm9qZWN0c0FycmF5KTtcbm5hdmlnYXRlUHJvamVjdHMoKVxudXBkYXRlVGFza3MoKVxuYWRkVGFza0J0bigpXG5wcm9qQnRucygpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9