"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./dist/style.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./dist/style.css ***!
  \********************************************************************************************************/
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
`, "",{"version":3,"sources":["webpack://./dist/style.css"],"names":[],"mappings":"AAAA,oEAAoE;;AAEpE;EACE,yCAAyC;AAC3C;;AAEA;;;;EAIE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;EACd,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,+BAA+B;EAC/B,mBAAmB;EACnB,cAAc;EACd,yBAAyB;EACzB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;EACzB,UAAU;EACV,cAAc;EACd,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,yBAAyB;EACzB,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,0BAA0B;EAC1B,UAAU;EACV,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;EACzB,UAAU;EACV,cAAc;EACd,yBAAyB;EACzB,iBAAiB;EACjB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,mCAAmC;AACrC;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,gBAAgB;AAClB;;;;AAIA;EACE,aAAa;EACb,mBAAmB;EACnB;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;;AAGA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX","sourcesContent":["/* Using color palette: https://palettes.shecodes.io/palettes/1448 */\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#container,\n#main,\n#header,\n#footer {\n  display: flex;\n  width: 100%;\n}\n\n#container {\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  align-items: center;\n}\n\n#header,\n#footer {\n  color: #e7eaf6;\n  background-color: #113f67;\n  height: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#main {\n  display: flex;\n  flex-direction: row;\n  justify-content: first baseline;\n  align-items: center;\n  color: #113f67;\n  background-color: #e7eaf6;\n  height: 80%;\n  width: 100%;\n}\n\n#newTask, .project, #delTask, #finishTask, #addTask {\n  margin-bottom: 2rem;\n  padding: 10px 25px;\n  background: transparent;\n  outline: none !important;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  display: inline-block;\n  border: 2px solid #113f67;\n  z-index: 1;\n  color: #e7eaf6;\n  background-color: #113f67;\n  border-radius: 5%;\n}\n\n#newTask:hover, .project:hover, #delTask:hover, #finishTask:hover {\n  color: #113f67;\n  background-color: #e7eaf6;\n  border-color: #e7eaf6;\n}\n\n#addTask:hover{\n  cursor: grab;\n  background-color: #a2a8d3;\n  border-color: #a2a8d3;\n}\n\n#delTask:hover {\n  background-color: red;\n  border-color: red;\n}\n\n#finishTask:hover {\n  background-color: green;\n  border-color: green;\n}\n\n#newProj {\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  align-items: space-around;\n  align-self: center;\n  gap: 1rem;\n}\n\n#formNav {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  gap: 1rem;\n}\n\n#mainleft {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 30%;\n  height: 100%;\n  background-color: #a2a8d3;\n}\n\n#mainright {\n  padding-top: 1rem ;\n  display: flex;\n  flex-direction: column;\n  justify-content:flex-start;\n  width: 70%;\n  height: 100%;\n}\n\n#projectsList {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  height: 80%;\n}\n\n.project {\n  margin-bottom: 2rem;\n  padding: 10px 25px;\n  background: transparent;\n  outline: none !important;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  display: inline-block;\n  border: 2px solid #113f67;\n  z-index: 1;\n  color: #e7eaf6;\n  background-color: #113f67;\n  border-radius: 5%;\n  margin: 1rem 1rem 1rem 1rem;\n}\n\n.task {\n  display: flex;\n  justify-content: space-around;\n  background-color: #113f67;\n  color: #e7eaf6;\n  padding: 10px 25px;\n  margin: 0.5rem 0.5rem 0.5rem 0.5rem;\n}\n\n.delbtn, .completebtn, .editbtn {\n  color: #113f67;\n  background-color: #a2a8d3;\n  border-radius: 20%;\n  transition: 0.3s ease;\n}\n\n.editbtn:hover {\n  cursor: grab;\n  background-color: orange;\n}\n\n.delbtn:hover {\n  cursor: grab;\n  background-color: red;\n}\n\n.completebtn:hover {\n  cursor: grab;\n  background-color: green;\n}\n\n.taskMan {\n  width: 5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  column-gap: 1rem;\n}\n\n\n\n#taskTitle {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly\n}\n\n#tasksContainer {\n  display: flex;\n  flex-direction: row;\n}\n\n#projectNav {\n  display: flex;\n  flex-direction: column;\n}\n\n#tasksList {\n  width: 80%;\n  height: 80%;\n}\n\n\n.taskForm {\n  display: flex;\n  flex-direction: row;\n  gap: 5rem;\n}\n\n.taskForm>div {\n  display: flex;\n  gap: 2rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./dist/style.css":
/*!************************!*\
  !*** ./dist/style.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./dist/style.css");

      
      
      
      
      
      
      
      
      

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
/* harmony export */   finishedProjects: () => (/* binding */ finishedProjects),
/* harmony export */   loadProjectsFromLocalStorage: () => (/* binding */ loadProjectsFromLocalStorage),
/* harmony export */   projectsArray: () => (/* binding */ projectsArray),
/* harmony export */   returnActive: () => (/* binding */ returnActive)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/DATA/tasks.js");
/* harmony import */ var _DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/loadPage */ "./src/DOM/loadPage.js");




// import { saveProject } from "./storage";



class Project {
  constructor(title, description = null, id=crypto.randomUUID()) {
    this.title = title;
    this.description = description;
    this.tasksList = [];
    this.active = false;
    this.id = id;
  }

  addToStorage() {
    localStorage.setItem(`project_${this.id}`,JSON.stringify(this))
    console.log(JSON.parse(localStorage.getItem(`project_${this.id}`)))
  }

  addTask(task) {
    this.tasksList.push(task);
  }
  removeTask(task) {
    const taskIndex = this.tasksList.indexOf(task);
    if (taskIndex !== -1) {
      this.tasksList.splice(taskIndex, 1);
    }
  }
}

// creates array of all projects and returns items to it. Used whenever a project is created or deleted.
let projectsArray = []

const completeProjectData = (proj) => {
  projectsArray.push(proj)
}

const returnActive = (arr) => {
  let activeProj = ""
  arr.forEach(element => {
    element.active == true ? activeProj = element : element.active = false;
  })
  return activeProj
}
const currentProject = returnActive(projectsArray)

const changeActiveProject = (proj) => {
  projectsArray.forEach(project => {
    project.active = false
  })
  proj.active = true
}

const finishedProjects = [];

function loadProjectsFromLocalStorage() {
  if (localStorage.length == 0 || JSON.parse(localStorage.getItem('projArr')).length == 0) {
    let projOne = new Project("Project 1", "Description");
    let projTwo = new Project("Project 2", "Some description");
    let testTaskOne = new _tasks__WEBPACK_IMPORTED_MODULE_0__.Task ("task 1 for proj 1")
    let testTaskTwo = new _tasks__WEBPACK_IMPORTED_MODULE_0__.Task ("taskIt's  2 for proj 1")
    let testTaskThree = new _tasks__WEBPACK_IMPORTED_MODULE_0__.Task ("task 1 for proj 2")
    let testTaskFour = new _tasks__WEBPACK_IMPORTED_MODULE_0__.Task("task 2 for proj 2")
    let projThree = new Project('Just a standalone Project')
    projOne.addTask(testTaskOne);
    projOne.addTask(testTaskTwo)
    projTwo.addTask(testTaskThree);
    projTwo.addTask(testTaskFour);
    projOne.active = true
    projectsArray.push(projOne, projTwo, projThree)
    localStorage.setItem('projArr', JSON.stringify(projectsArray))
  }
  else {
    projectsArray = JSON.parse(localStorage.getItem('projArr'))
    
  }
}

loadProjectsFromLocalStorage()

/***/ }),

/***/ "./src/DATA/tasks.js":
/*!***************************!*\
  !*** ./src/DATA/tasks.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   finishedTasks: () => (/* binding */ finishedTasks)
/* harmony export */ });
class Task {
    constructor(name) {
        this.name = name;
        this.id = crypto.randomUUID()
    }
}

const finishedTasks = []

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
            node.addEventListener('submit', function(e) {
            e.preventDefault()
            let currentProject = (0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.returnActive)(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray)
            let submissionValue = node.querySelector('.taskInput').value
            let newTask = new _DATA_tasks__WEBPACK_IMPORTED_MODULE_1__.Task(submissionValue)
            currentProject.tasksList.push(newTask)
            ;(0,_loadPage__WEBPACK_IMPORTED_MODULE_2__.recreateDOM)()
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
/* harmony export */   taskManBtns: () => (/* binding */ taskManBtns),
/* harmony export */   updateTasks: () => (/* binding */ updateTasks)
/* harmony export */ });
/* harmony import */ var _DATA_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DATA/projects */ "./src/DATA/projects.js");
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ "./src/DOM/addTask.js");
/* harmony import */ var _DATA_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DATA/tasks */ "./src/DATA/tasks.js");










const recreateDOM = () => {
  document.body.innerHTML = ``
  localStorage.setItem('projArr', JSON.stringify(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray))
  
  appendNodeToBody(framework());
  injectProjHtml(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray);
  navigateProjects()
  updateTasks()
  projBtns()
  ;(0,_addTask__WEBPACK_IMPORTED_MODULE_1__.addTaskBtn)() 
  let currentProject = (0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.returnActive)(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray)
  if (currentProject.title == null) {
    document.getElementById('mainright').innerHTML = ``;
  }
  (0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.loadProjectsFromLocalStorage)()
}

function framework() {
  let currentProject = (0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.returnActive)(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray)
  const divFrame = document.createElement("div");
  divFrame.id = "container";
  let title = ""
  if (currentProject.description) {
    title = `${currentProject.title}: ${currentProject.description}`
  }
  else if (currentProject.description == null && currentProject.title == null) {
    title = ``
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
    <div id="footer"><div><p>Created by Uria Levy for the ODIN Project</p></div></div>`;
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
    divNode.id = currentProject.tasksList[i].id
    taskArr.push(divNode);
    taskNode.appendChild(divNode)
    taskArr[i].innerHTML = `${currentProject.tasksList[i].name} <div class="taskMan"><button class="completebtn">✔</button><button class="editbtn">🖊️</button><button class ="delbtn">🗑️</button></div>` 
    taskManBtns(divNode, currentProject.tasksList[i])
  }}}
}

const taskManBtns = (taskNode, task) => {
  let currentProject = (0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.returnActive)(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray);
  let delTaskBtn = taskNode.querySelector('.delbtn')
  let finishTaskBtn = taskNode.querySelector('.completebtn')
  let  editTaskBtn = taskNode.querySelector('.editbtn')
  let taskUUID = task.id
  let associatedTask = currentProject.tasksList.find(element => element.id == taskUUID)
  let taskIndex = currentProject.tasksList.indexOf(associatedTask)
  delTaskBtn.addEventListener('click', function(e) {
    currentProject.tasksList.splice(taskIndex, 1)
    recreateDOM()
  })
  finishTaskBtn.addEventListener('click', function(e) {
    _DATA_tasks__WEBPACK_IMPORTED_MODULE_2__.finishedTasks.push(currentProject)
    _DATA_tasks__WEBPACK_IMPORTED_MODULE_2__.finishedTasks.push(currentProject.tasksList.associatedTask)
    currentProject.tasksList.splice(taskIndex, 1)
    recreateDOM()
  })
  editTaskBtn.addEventListener('click', function(e) {
    
    taskNode.innerHTML = `<form action="" class="taskForm"><div><label for:"description"></label><input type="text" placeholder="Type your task here..." value="${task.name}" class="taskInput" name="taskDescription" required></div><div><input type="submit" value="Save"><button class="cancelbtn">Cancel</button></div></form>`;
    taskNode.addEventListener('submit', function(e) {
      e.preventDefault()
      task.name = taskNode.querySelector('.taskInput').value
      console.log(task.name)
      recreateDOM()
    })
    taskNode.querySelector('.cancelbtn').addEventListener('click', function(e) {
      e.preventDefault()
      recreateDOM()
    })

  })
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
      ;(0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.changeActiveProject)(associatedProject)
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
      ;(0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.changeActiveProject)(associatedProject)
      updateTasks()
      ;(0,_addTask__WEBPACK_IMPORTED_MODULE_1__.addTaskBtn)()
    })
  }
}
const projBtns = () => {
  let addProjBtn = document.getElementById('newTask')
  let delProjBtn = document.getElementById('delTask')
  let finishprojBtn = document.getElementById('finishTask')
  let secondaryMenu = false;
  addProjBtn.addEventListener('click', function(e) {
    e.preventDefault()
    secondaryMenu = true;
    let formNode = document.createElement('form')
    formNode.id = 'newProj'
    formNode.action = 'submit'
    formNode.innerHTML = `<input type="text" name="title" placeholder="Project title" id="projTitle" required><input type="text" placeholder="Project description" id="projDesc"><div id="formNav"><input type="submit"></input><button id="cancelProjBtn">Cancel</button></div>`
    document.getElementById('mainright').innerHTML = ``
    document.getElementById('mainright').appendChild(formNode)
    let cancelBtn = document.getElementById('cancelProjBtn')
    cancelBtn.addEventListener('click', function(e) {
      e.preventDefault()
      recreateDOM()
      secondaryMenu = false;
    })
    
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
      secondaryMenu = false;
    })
  })

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
    //   saveProjects(projectsArray)
      if (_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length > 0) {
        (0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.changeActiveProject)(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray[0])
        updateTasks()
        injectProjHtml(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray)
      }
     else {
      document.getElementById('projectsList').innerHTML = ``
      document.getElementById('mainright').innerHTML=``
     }
     recreateDOM()

    }
  })
  finishprojBtn.addEventListener('click', function(e) {
    if (secondaryMenu) {}
    else {
      let currentProject = (0,_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.returnActive)(_DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray)
      _DATA_projects__WEBPACK_IMPORTED_MODULE_0__.finishedProjects.push(currentProject)
      let index = _DATA_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray.indexOf(currentProject)
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
      recreateDOM()
    }

  })
}


/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../dist/style.css */ "./dist/style.css");
/* harmony import */ var _DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/loadPage */ "./src/DOM/loadPage.js");
/* harmony import */ var _DATA_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DATA/tasks */ "./src/DATA/tasks.js");
/* harmony import */ var _DATA_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DATA/projects */ "./src/DATA/projects.js");
/* harmony import */ var _DOM_addTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/addTask */ "./src/DOM/addTask.js");














(0,_DOM_loadPage__WEBPACK_IMPORTED_MODULE_1__.recreateDOM)()

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlGQUF5RixNQUFNLFlBQVksT0FBTyxRQUFRLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxL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dUIseURBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JQeUI7QUFDcUQ7QUFDNUI7QUFDSjtBQUNWO0FBQ1k7QUFDRjtBQUNDO0FBQ0M7QUFDRTtBQUNnQjtBQUNZO0FBQ3BDOztBQUUxQywwREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vZGlzdC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9kaXN0L3N0eWxlLmNzcz84ZTQ0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvREFUQS9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9EQVRBL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS9hZGRUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS9sb2FkUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFVzaW5nIGNvbG9yIHBhbGV0dGU6IGh0dHBzOi8vcGFsZXR0ZXMuc2hlY29kZXMuaW8vcGFsZXR0ZXMvMTQ0OCAqL1xuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbiNjb250YWluZXIsXG4jbWFpbixcbiNoZWFkZXIsXG4jZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNjb250YWluZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNoZWFkZXIsXG4jZm9vdGVyIHtcbiAgY29sb3I6ICNlN2VhZjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTNmNjc7XG4gIGhlaWdodDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI21haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZpcnN0IGJhc2VsaW5lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzExM2Y2NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZWFmNjtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jbmV3VGFzaywgLnByb2plY3QsICNkZWxUYXNrLCAjZmluaXNoVGFzaywgI2FkZFRhc2sge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxMTNmNjc7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZTdlYWY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzZjY3O1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuI25ld1Rhc2s6aG92ZXIsIC5wcm9qZWN0OmhvdmVyLCAjZGVsVGFzazpob3ZlciwgI2ZpbmlzaFRhc2s6aG92ZXIge1xuICBjb2xvcjogIzExM2Y2NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZWFmNjtcbiAgYm9yZGVyLWNvbG9yOiAjZTdlYWY2O1xufVxuXG4jYWRkVGFzazpob3ZlcntcbiAgY3Vyc29yOiBncmFiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJhOGQzO1xuICBib3JkZXItY29sb3I6ICNhMmE4ZDM7XG59XG5cbiNkZWxUYXNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuI2ZpbmlzaFRhc2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcbn1cblxuI25ld1Byb2oge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMjAlO1xuICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuI2Zvcm1OYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4jbWFpbmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJhOGQzO1xufVxuXG4jbWFpbnJpZ2h0IHtcbiAgcGFkZGluZy10b3A6IDFyZW0gO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jcHJvamVjdHNMaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi5wcm9qZWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTEzZjY3O1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2U3ZWFmNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExM2Y2NztcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIG1hcmdpbjogMXJlbSAxcmVtIDFyZW0gMXJlbTtcbn1cblxuLnRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExM2Y2NztcbiAgY29sb3I6ICNlN2VhZjY7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwLjVyZW07XG59XG5cbi5kZWxidG4sIC5jb21wbGV0ZWJ0biwgLmVkaXRidG4ge1xuICBjb2xvcjogIzExM2Y2NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyYThkMztcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG5cbi5lZGl0YnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBncmFiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5kZWxidG46aG92ZXIge1xuICBjdXJzb3I6IGdyYWI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmNvbXBsZXRlYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBncmFiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLnRhc2tNYW4ge1xuICB3aWR0aDogNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG59XG5cblxuXG4jdGFza1RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHlcbn1cblxuI3Rhc2tzQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuI3Byb2plY3ROYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jdGFza3NMaXN0IHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cblxuLnRhc2tGb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiA1cmVtO1xufVxuXG4udGFza0Zvcm0+ZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9kaXN0L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvRUFBb0U7O0FBRXBFO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBOzs7O0VBSUUsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7Ozs7QUFJQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVXNpbmcgY29sb3IgcGFsZXR0ZTogaHR0cHM6Ly9wYWxldHRlcy5zaGVjb2Rlcy5pby9wYWxldHRlcy8xNDQ4ICovXFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRhaW5lcixcXG4jbWFpbixcXG4jaGVhZGVyLFxcbiNmb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlcixcXG4jZm9vdGVyIHtcXG4gIGNvbG9yOiAjZTdlYWY2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExM2Y2NztcXG4gIGhlaWdodDogMTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmaXJzdCBiYXNlbGluZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzExM2Y2NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2VhZjY7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbmV3VGFzaywgLnByb2plY3QsICNkZWxUYXNrLCAjZmluaXNoVGFzaywgI2FkZFRhc2sge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxMTNmNjc7XFxuICB6LWluZGV4OiAxO1xcbiAgY29sb3I6ICNlN2VhZjY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzZjY3O1xcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxufVxcblxcbiNuZXdUYXNrOmhvdmVyLCAucHJvamVjdDpob3ZlciwgI2RlbFRhc2s6aG92ZXIsICNmaW5pc2hUYXNrOmhvdmVyIHtcXG4gIGNvbG9yOiAjMTEzZjY3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZWFmNjtcXG4gIGJvcmRlci1jb2xvcjogI2U3ZWFmNjtcXG59XFxuXFxuI2FkZFRhc2s6aG92ZXJ7XFxuICBjdXJzb3I6IGdyYWI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJhOGQzO1xcbiAgYm9yZGVyLWNvbG9yOiAjYTJhOGQzO1xcbn1cXG5cXG4jZGVsVGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuI2ZpbmlzaFRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXItY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4jbmV3UHJvaiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyMCU7XFxuICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jZm9ybU5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbmxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyYThkMztcXG59XFxuXFxuI21haW5yaWdodCB7XFxuICBwYWRkaW5nLXRvcDogMXJlbSA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxMTNmNjc7XFxuICB6LWluZGV4OiAxO1xcbiAgY29sb3I6ICNlN2VhZjY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzZjY3O1xcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxuICBtYXJnaW46IDFyZW0gMXJlbSAxcmVtIDFyZW07XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTNmNjc7XFxuICBjb2xvcjogI2U3ZWFmNjtcXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xcbn1cXG5cXG4uZGVsYnRuLCAuY29tcGxldGVidG4sIC5lZGl0YnRuIHtcXG4gIGNvbG9yOiAjMTEzZjY3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyYThkMztcXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG59XFxuXFxuLmVkaXRidG46aG92ZXIge1xcbiAgY3Vyc29yOiBncmFiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uZGVsYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogZ3JhYjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNvbXBsZXRlYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogZ3JhYjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udGFza01hbiB7XFxuICB3aWR0aDogNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcbn1cXG5cXG5cXG5cXG4jdGFza1RpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHlcXG59XFxuXFxuI3Rhc2tzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jcHJvamVjdE5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Rhc2tzTGlzdCB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcblxcbi50YXNrRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuLnRhc2tGb3JtPmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBlbCB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IENvbXBvdW5kZWRTcGFjZSBmcm9tIFwiYW50ZC9lcy9zcGFjZVwiO1xuaW1wb3J0IHsgcmVjcmVhdGVET00gfSBmcm9tIFwiLi4vRE9NL2xvYWRQYWdlXCI7XG4vLyBpbXBvcnQgeyBzYXZlUHJvamVjdCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uID0gbnVsbCwgaWQ9Y3J5cHRvLnJhbmRvbVVVSUQoKSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy50YXNrc0xpc3QgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGFkZFRvU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdF8ke3RoaXMuaWR9YCxKU09OLnN0cmluZ2lmeSh0aGlzKSlcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcm9qZWN0XyR7dGhpcy5pZH1gKSkpXG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzTGlzdC5wdXNoKHRhc2spO1xuICB9XG4gIHJlbW92ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IHRoaXMudGFza3NMaXN0LmluZGV4T2YodGFzayk7XG4gICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMudGFza3NMaXN0LnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBjcmVhdGVzIGFycmF5IG9mIGFsbCBwcm9qZWN0cyBhbmQgcmV0dXJucyBpdGVtcyB0byBpdC4gVXNlZCB3aGVuZXZlciBhIHByb2plY3QgaXMgY3JlYXRlZCBvciBkZWxldGVkLlxuZXhwb3J0IGxldCBwcm9qZWN0c0FycmF5ID0gW11cblxuZXhwb3J0IGNvbnN0IGNvbXBsZXRlUHJvamVjdERhdGEgPSAocHJvaikgPT4ge1xuICBwcm9qZWN0c0FycmF5LnB1c2gocHJvailcbn1cblxuZXhwb3J0IGNvbnN0IHJldHVybkFjdGl2ZSA9IChhcnIpID0+IHtcbiAgbGV0IGFjdGl2ZVByb2ogPSBcIlwiXG4gIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuYWN0aXZlID09IHRydWUgPyBhY3RpdmVQcm9qID0gZWxlbWVudCA6IGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XG4gIH0pXG4gIHJldHVybiBhY3RpdmVQcm9qXG59XG5jb25zdCBjdXJyZW50UHJvamVjdCA9IHJldHVybkFjdGl2ZShwcm9qZWN0c0FycmF5KVxuXG5leHBvcnQgY29uc3QgY2hhbmdlQWN0aXZlUHJvamVjdCA9IChwcm9qKSA9PiB7XG4gIHByb2plY3RzQXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBwcm9qZWN0LmFjdGl2ZSA9IGZhbHNlXG4gIH0pXG4gIHByb2ouYWN0aXZlID0gdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgZmluaXNoZWRQcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCB8fCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qQXJyJykpLmxlbmd0aCA9PSAwKSB7XG4gICAgbGV0IHByb2pPbmUgPSBuZXcgUHJvamVjdChcIlByb2plY3QgMVwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgIGxldCBwcm9qVHdvID0gbmV3IFByb2plY3QoXCJQcm9qZWN0IDJcIiwgXCJTb21lIGRlc2NyaXB0aW9uXCIpO1xuICAgIGxldCB0ZXN0VGFza09uZSA9IG5ldyBUYXNrIChcInRhc2sgMSBmb3IgcHJvaiAxXCIpXG4gICAgbGV0IHRlc3RUYXNrVHdvID0gbmV3IFRhc2sgKFwidGFza0l0J3MgIDIgZm9yIHByb2ogMVwiKVxuICAgIGxldCB0ZXN0VGFza1RocmVlID0gbmV3IFRhc2sgKFwidGFzayAxIGZvciBwcm9qIDJcIilcbiAgICBsZXQgdGVzdFRhc2tGb3VyID0gbmV3IFRhc2soXCJ0YXNrIDIgZm9yIHByb2ogMlwiKVxuICAgIGxldCBwcm9qVGhyZWUgPSBuZXcgUHJvamVjdCgnSnVzdCBhIHN0YW5kYWxvbmUgUHJvamVjdCcpXG4gICAgcHJvak9uZS5hZGRUYXNrKHRlc3RUYXNrT25lKTtcbiAgICBwcm9qT25lLmFkZFRhc2sodGVzdFRhc2tUd28pXG4gICAgcHJvalR3by5hZGRUYXNrKHRlc3RUYXNrVGhyZWUpO1xuICAgIHByb2pUd28uYWRkVGFzayh0ZXN0VGFza0ZvdXIpO1xuICAgIHByb2pPbmUuYWN0aXZlID0gdHJ1ZVxuICAgIHByb2plY3RzQXJyYXkucHVzaChwcm9qT25lLCBwcm9qVHdvLCBwcm9qVGhyZWUpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pBcnInLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KSlcbiAgfVxuICBlbHNlIHtcbiAgICBwcm9qZWN0c0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvakFycicpKVxuICAgIFxuICB9XG59XG5cbmxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZmluaXNoZWRUYXNrcyA9IFtdIiwiaW1wb3J0IHsgUHJvamVjdCwgcmV0dXJuQWN0aXZlLCBwcm9qZWN0c0FycmF5LCBjaGFuZ2VBY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4uL0RBVEEvcHJvamVjdHNcIlxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLi9EQVRBL3Rhc2tzXCJcbmltcG9ydCB7IHJlY3JlYXRlRE9NLCB1cGRhdGVUYXNrcyB9IGZyb20gXCIuL2xvYWRQYWdlXCJcblxuZXhwb3J0IGNvbnN0IGZvcm1MaXN0ZW5lciA9IChub2RlKSA9PiB7XG4gICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcmV0dXJuQWN0aXZlKHByb2plY3RzQXJyYXkpXG4gICAgICAgICAgICBsZXQgc3VibWlzc2lvblZhbHVlID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcudGFza0lucHV0JykudmFsdWVcbiAgICAgICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2soc3VibWlzc2lvblZhbHVlKVxuICAgICAgICAgICAgY3VycmVudFByb2plY3QudGFza3NMaXN0LnB1c2gobmV3VGFzaylcbiAgICAgICAgICAgIHJlY3JlYXRlRE9NKClcbiAgICAgICAgfSkgICAgICAgIFxuICAgIH1cblxuXG5leHBvcnQgY29uc3QgYWRkRm9ybSA9ICgpID0+IHtcbiAgICBsZXQgZm9ybU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1Ob2RlLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxuICAgIGxldCB0YXNrc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3NMaXN0JylcbiAgICBmb3JtTm9kZS5pbm5lckhUTUwgPSBgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJ0YXNrRm9ybVwiPjxkaXY+PGxhYmVsIGZvcjpcImRlc2NyaXB0aW9uXCI+PC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciB0YXNrIGhlcmUuLi5cIiBjbGFzcz1cInRhc2tJbnB1dFwiIG5hbWU9XCJ0YXNrRGVzY3JpcHRpb25cIiByZXF1aXJlZD48L2Rpdj48ZGl2PjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTYXZlXCI+PGJ1dHRvbiBjbGFzcz1cImNhbmNlbGJ0blwiPkNhbmNlbDwvYnV0dG9uPjwvZGl2PjwvZm9ybT5gXG4gICAgdGFza3NMaXN0LmFwcGVuZENoaWxkKGZvcm1Ob2RlKVxuICAgIGZvcm1MaXN0ZW5lcihmb3JtTm9kZSkgICAgXG59XG5jb25zdCBjYW5jZWxCdG5zID0gKCkgPT4ge1xuICAgIGxldCBmb3JtQ2FuY2VsQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYW5jZWxidG4nKVxuICAgIGZvcm1DYW5jZWxCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgfSlcbiAgICB9KVxufSAgICBcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tCdG4gPSAoKSA9PiB7XG4gICAgbGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFzaycpXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGFkZEZvcm0oKVxuICAgICAgICBjYW5jZWxCdG5zKClcbiAgICB9KVxufSIsImltcG9ydCB7IGVsIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuaW1wb3J0IHsgY29tcGxldGVQcm9qZWN0RGF0YSwgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSwgcHJvamVjdHNBcnJheSwgc2F2ZVByb2plY3RzIH0gZnJvbSBcIi4uL0RBVEEvcHJvamVjdHNcIjtcbmltcG9ydCB7IHJldHVybkFjdGl2ZSB9IGZyb20gXCIuLi9EQVRBL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBjaGFuZ2VBY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4uL0RBVEEvcHJvamVjdHNcIjtcbmltcG9ydCB7IFByb2plY3QsIGZpbmlzaGVkUHJvamVjdHMgfSBmcm9tIFwiLi4vREFUQS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgYWRkVGFza0J0biB9IGZyb20gXCIuL2FkZFRhc2tcIjtcbmltcG9ydCB7IGZpbmlzaGVkVGFza3MgfSBmcm9tIFwiLi4vREFUQS90YXNrc1wiO1xuXG5cblxuZXhwb3J0IGNvbnN0IHJlY3JlYXRlRE9NID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGBgXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qQXJyJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpXG4gIFxuICBhcHBlbmROb2RlVG9Cb2R5KGZyYW1ld29yaygpKTtcbiAgaW5qZWN0UHJvakh0bWwocHJvamVjdHNBcnJheSk7XG4gIG5hdmlnYXRlUHJvamVjdHMoKVxuICB1cGRhdGVUYXNrcygpXG4gIHByb2pCdG5zKClcbiAgYWRkVGFza0J0bigpIFxuICBsZXQgY3VycmVudFByb2plY3QgPSByZXR1cm5BY3RpdmUocHJvamVjdHNBcnJheSlcbiAgaWYgKGN1cnJlbnRQcm9qZWN0LnRpdGxlID09IG51bGwpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnJpZ2h0JykuaW5uZXJIVE1MID0gYGA7XG4gIH1cbiAgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZXdvcmsoKSB7XG4gIGxldCBjdXJyZW50UHJvamVjdCA9IHJldHVybkFjdGl2ZShwcm9qZWN0c0FycmF5KVxuICBjb25zdCBkaXZGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdkZyYW1lLmlkID0gXCJjb250YWluZXJcIjtcbiAgbGV0IHRpdGxlID0gXCJcIlxuICBpZiAoY3VycmVudFByb2plY3QuZGVzY3JpcHRpb24pIHtcbiAgICB0aXRsZSA9IGAke2N1cnJlbnRQcm9qZWN0LnRpdGxlfTogJHtjdXJyZW50UHJvamVjdC5kZXNjcmlwdGlvbn1gXG4gIH1cbiAgZWxzZSBpZiAoY3VycmVudFByb2plY3QuZGVzY3JpcHRpb24gPT0gbnVsbCAmJiBjdXJyZW50UHJvamVjdC50aXRsZSA9PSBudWxsKSB7XG4gICAgdGl0bGUgPSBgYFxuICB9XG4gIGVsc2Uge1xuICAgIHRpdGxlID0gYCR7Y3VycmVudFByb2plY3QudGl0bGV9YFxuICB9XG4gIGRpdkZyYW1lLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwiaGVhZGVyXCI+PGgxPlRvLWRvIGxpc3Q8L2gxPjwvZGl2PlxuICAgIDxkaXYgaWQ9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJtYWlubGVmdFwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3RUaXRsZVwiPjxoMT5Qcm9qZWN0czwvaDE+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJvamVjdHNMaXN0XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0TmF2XCI+PGJ1dHRvbiBpZD1cIm5ld1Rhc2tcIj48aDI+KyBBZGQgUHJvamVjdDwvaDI+PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVsVGFza1wiPjxoMj7inYwgRGVsZXRlIFByb2plY3Q8L2gyPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZpbmlzaFRhc2tcIj48aDI+4pyUIENvbXBsZXRlIFByb2plY3Q8L2gyPjwvYnV0dG9uPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1haW5yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YXNrVGl0bGVcIj48ZGl2PjxoMj4ke3RpdGxlfTwvaDI+PC9kaXY+PGRpdj48YnV0dG9uIGlkPVwiYWRkVGFza1wiPjxoMj4rQWRkIFRhc2s8L2gyPjwvYnV0dG9uPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YXNrc0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YXNrc0xpc3RcIj5cbiAgICAgICAgICAgIDwvZGl2PjwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJmb290ZXJcIj48ZGl2PjxwPkNyZWF0ZWQgYnkgVXJpYSBMZXZ5IGZvciB0aGUgT0RJTiBQcm9qZWN0PC9wPjwvZGl2PjwvZGl2PmA7XG4gIHJldHVybiBkaXZGcmFtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmROb2RlVG9Cb2R5KG5vZGUpIHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcbn1cblxuXG4vLyBnZW5lcmF0ZXMgRE9NIGxpc3Qgb2YgcHJvamVjdHNcbmV4cG9ydCBjb25zdCBpbmplY3RQcm9qSHRtbCA9IChwcm9qQXJyYXkpID0+IHtcbiAgbGV0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNMaXN0XCIpO1xuICBwcm9qZWN0c0xpc3QuaW5uZXJIVE1MID0gYGBcbiAgbGV0IHByb2plY3ROb2RlQXJyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvakFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGRpdk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdk5vZGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgZGl2Tm9kZS5pZCA9IGAke3Byb2pBcnJheVtpXS5pZH1gXG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGRpdk5vZGUpO1xuICAgIHByb2plY3ROb2RlQXJyLnB1c2goZGl2Tm9kZSk7XG4gICAgcHJvamVjdE5vZGVBcnJbaV0uaW5uZXJIVE1MID0gYCR7cHJvakFycmF5W2ldLnRpdGxlfWA7XG4gIH1cbn07XG5cbi8vIGdlbmVyYXRlcyBsaXN0IG9mIHRhc2tzIGluIERPTSBmb3IgYSBwcm9qZWN0XG5leHBvcnQgY29uc3QgdXBkYXRlVGFza3MgPSAoKSA9PiB7XG4gIGxldCBjdXJyZW50UHJvamVjdCA9IHJldHVybkFjdGl2ZShwcm9qZWN0c0FycmF5KTtcbiAgbGV0IHRhc2tOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrc0xpc3RcIik7XG4gIGxldCB0YXNrQXJyID0gW107XG4gIGlmICh0YXNrTm9kZSkge1xuICB0YXNrTm9kZS5pbm5lckhUTUwgPSBgYCAgXG4gIC8vIGFwcGVuZCB0YXNrcyB0byB0aGUgdGFzayBsaXN0IGZyb20gdGhlIHByb2plY3RcbiAgaWYgKGN1cnJlbnRQcm9qZWN0LnRhc2tzTGlzdCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LnRhc2tzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkaXZOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZOb2RlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgIGRpdk5vZGUuaWQgPSBjdXJyZW50UHJvamVjdC50YXNrc0xpc3RbaV0uaWRcbiAgICB0YXNrQXJyLnB1c2goZGl2Tm9kZSk7XG4gICAgdGFza05vZGUuYXBwZW5kQ2hpbGQoZGl2Tm9kZSlcbiAgICB0YXNrQXJyW2ldLmlubmVySFRNTCA9IGAke2N1cnJlbnRQcm9qZWN0LnRhc2tzTGlzdFtpXS5uYW1lfSA8ZGl2IGNsYXNzPVwidGFza01hblwiPjxidXR0b24gY2xhc3M9XCJjb21wbGV0ZWJ0blwiPuKclDwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJlZGl0YnRuXCI+8J+Wiu+4jzwvYnV0dG9uPjxidXR0b24gY2xhc3MgPVwiZGVsYnRuXCI+8J+Xke+4jzwvYnV0dG9uPjwvZGl2PmAgXG4gICAgdGFza01hbkJ0bnMoZGl2Tm9kZSwgY3VycmVudFByb2plY3QudGFza3NMaXN0W2ldKVxuICB9fX1cbn1cblxuZXhwb3J0IGNvbnN0IHRhc2tNYW5CdG5zID0gKHRhc2tOb2RlLCB0YXNrKSA9PiB7XG4gIGxldCBjdXJyZW50UHJvamVjdCA9IHJldHVybkFjdGl2ZShwcm9qZWN0c0FycmF5KTtcbiAgbGV0IGRlbFRhc2tCdG4gPSB0YXNrTm9kZS5xdWVyeVNlbGVjdG9yKCcuZGVsYnRuJylcbiAgbGV0IGZpbmlzaFRhc2tCdG4gPSB0YXNrTm9kZS5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVidG4nKVxuICBsZXQgIGVkaXRUYXNrQnRuID0gdGFza05vZGUucXVlcnlTZWxlY3RvcignLmVkaXRidG4nKVxuICBsZXQgdGFza1VVSUQgPSB0YXNrLmlkXG4gIGxldCBhc3NvY2lhdGVkVGFzayA9IGN1cnJlbnRQcm9qZWN0LnRhc2tzTGlzdC5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5pZCA9PSB0YXNrVVVJRClcbiAgbGV0IHRhc2tJbmRleCA9IGN1cnJlbnRQcm9qZWN0LnRhc2tzTGlzdC5pbmRleE9mKGFzc29jaWF0ZWRUYXNrKVxuICBkZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzTGlzdC5zcGxpY2UodGFza0luZGV4LCAxKVxuICAgIHJlY3JlYXRlRE9NKClcbiAgfSlcbiAgZmluaXNoVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBmaW5pc2hlZFRhc2tzLnB1c2goY3VycmVudFByb2plY3QpXG4gICAgZmluaXNoZWRUYXNrcy5wdXNoKGN1cnJlbnRQcm9qZWN0LnRhc2tzTGlzdC5hc3NvY2lhdGVkVGFzaylcbiAgICBjdXJyZW50UHJvamVjdC50YXNrc0xpc3Quc3BsaWNlKHRhc2tJbmRleCwgMSlcbiAgICByZWNyZWF0ZURPTSgpXG4gIH0pXG4gIGVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIFxuICAgIHRhc2tOb2RlLmlubmVySFRNTCA9IGA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cInRhc2tGb3JtXCI+PGRpdj48bGFiZWwgZm9yOlwiZGVzY3JpcHRpb25cIj48L2xhYmVsPjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHRhc2sgaGVyZS4uLlwiIHZhbHVlPVwiJHt0YXNrLm5hbWV9XCIgY2xhc3M9XCJ0YXNrSW5wdXRcIiBuYW1lPVwidGFza0Rlc2NyaXB0aW9uXCIgcmVxdWlyZWQ+PC9kaXY+PGRpdj48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2F2ZVwiPjxidXR0b24gY2xhc3M9XCJjYW5jZWxidG5cIj5DYW5jZWw8L2J1dHRvbj48L2Rpdj48L2Zvcm0+YDtcbiAgICB0YXNrTm9kZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRhc2submFtZSA9IHRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoJy50YXNrSW5wdXQnKS52YWx1ZVxuICAgICAgY29uc29sZS5sb2codGFzay5uYW1lKVxuICAgICAgcmVjcmVhdGVET00oKVxuICAgIH0pXG4gICAgdGFza05vZGUucXVlcnlTZWxlY3RvcignLmNhbmNlbGJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZWNyZWF0ZURPTSgpXG4gICAgfSlcblxuICB9KVxufVxuXG5cbi8vIGNyZWF0ZXMgbmF2aWdhdGlvbiBtZW51IG9uIHRoZSBsZWZ0IGZvciBwcm9qZWN0c1xuZXhwb3J0IGNvbnN0IG5hdmlnYXRlUHJvamVjdHMgPSAoKSA9PiB7XG4gIC8vIGdldCBhbiBhcnJheSBvZiB0aGUgZXhpc3Rpbmcgbm9kZSBsaXN0XG4gIGxldCBub2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcbiAgLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggb25lIG9mIHRoZW0sIHRoZXkgYWRqdXN0IHRoZSBET00gdG8gc2hvdyB0aGUgY29ycmVjdCBwcm9qZWN0J3MgZGlzcGxheVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbm9kZUxpc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIC8vIGdldHMgdGhlIFVVSUQgb2YgdGhlIGVsZW1lbnQgdXNpbmcgdGhlIERPTVxuICAgICAgbGV0IFVVSUQgPSBub2RlTGlzdFtpXS5pZFxuICAgICAgbGV0IGFzc29jaWF0ZWRQcm9qZWN0ID0gcHJvamVjdHNBcnJheS5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5pZCA9PSBVVUlEKVxuICAgICAgY2hhbmdlQWN0aXZlUHJvamVjdChhc3NvY2lhdGVkUHJvamVjdClcbiAgICAgIGxldCB0aXRsZSA9IFwiXCJcbiAgICAgIGlmIChhc3NvY2lhdGVkUHJvamVjdC5kZXNjcmlwdGlvbikge1xuICAgICAgICB0aXRsZSA9IGAke2Fzc29jaWF0ZWRQcm9qZWN0LnRpdGxlfTogJHthc3NvY2lhdGVkUHJvamVjdC5kZXNjcmlwdGlvbn1gXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGl0bGUgPSBgJHthc3NvY2lhdGVkUHJvamVjdC50aXRsZX1gXG4gICAgICB9XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnJpZ2h0JykuaW5uZXJIVE1MPWA8ZGl2IGlkPVwidGFza1RpdGxlXCI+PGRpdj48aDI+JHt0aXRsZX08L2gyPjwvZGl2PjxkaXY+PGJ1dHRvbiBpZD1cImFkZFRhc2tcIj48aDI+K0FkZCBUYXNrPC9oMj48L2J1dHRvbj48L2Rpdj48L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJ0YXNrc0NvbnRhaW5lclwiPlxuICAgICAgPGRpdiBpZD1cInRhc2tzTGlzdFwiPlxuICA8L2Rpdj5gXG4gICAgICBjaGFuZ2VBY3RpdmVQcm9qZWN0KGFzc29jaWF0ZWRQcm9qZWN0KVxuICAgICAgdXBkYXRlVGFza3MoKVxuICAgICAgYWRkVGFza0J0bigpXG4gICAgfSlcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHByb2pCdG5zID0gKCkgPT4ge1xuICBsZXQgYWRkUHJvakJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrJylcbiAgbGV0IGRlbFByb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsVGFzaycpXG4gIGxldCBmaW5pc2hwcm9qQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmlzaFRhc2snKVxuICBsZXQgc2Vjb25kYXJ5TWVudSA9IGZhbHNlO1xuICBhZGRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNlY29uZGFyeU1lbnUgPSB0cnVlO1xuICAgIGxldCBmb3JtTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm1Ob2RlLmlkID0gJ25ld1Byb2onXG4gICAgZm9ybU5vZGUuYWN0aW9uID0gJ3N1Ym1pdCdcbiAgICBmb3JtTm9kZS5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IHRpdGxlXCIgaWQ9XCJwcm9qVGl0bGVcIiByZXF1aXJlZD48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgZGVzY3JpcHRpb25cIiBpZD1cInByb2pEZXNjXCI+PGRpdiBpZD1cImZvcm1OYXZcIj48aW5wdXQgdHlwZT1cInN1Ym1pdFwiPjwvaW5wdXQ+PGJ1dHRvbiBpZD1cImNhbmNlbFByb2pCdG5cIj5DYW5jZWw8L2J1dHRvbj48L2Rpdj5gXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5yaWdodCcpLmlubmVySFRNTCA9IGBgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5yaWdodCcpLmFwcGVuZENoaWxkKGZvcm1Ob2RlKVxuICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsUHJvakJ0bicpXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZWNyZWF0ZURPTSgpXG4gICAgICBzZWNvbmRhcnlNZW51ID0gZmFsc2U7XG4gICAgfSlcbiAgICBcbiAgICBmb3JtTm9kZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBzZWNvbmRhcnlNZW51ID09IHRydWUgPyBzZWNvbmRhcnlNZW51ID0gZmFsc2UgOiBzZWNvbmRhcnlNZW51ID0gZmFsc2VcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgbGV0IHByb2pOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pUaXRsZScpLnZhbHVlXG4gICAgICBsZXQgcHJvakRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvakRlc2MnKS52YWx1ZVxuICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCAocHJvak5hbWUsIHByb2pEZXNjLCBcIlwiKVxuICAgICAgbmV3UHJvamVjdC5hY3RpdmU9ZmFsc2VcbiAgICAgIHByb2plY3RzQXJyYXkucHVzaChuZXdQcm9qZWN0KVxuICAgICAgY2hhbmdlQWN0aXZlUHJvamVjdChuZXdQcm9qZWN0KVxuICAgICAgcmVjcmVhdGVET00oKVxuICAgICAgc2Vjb25kYXJ5TWVudSA9IGZhbHNlO1xuICAgIH0pXG4gIH0pXG5cbiAgZGVsUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSByZXR1cm5BY3RpdmUocHJvamVjdHNBcnJheSk7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdHNBcnJheS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KVxuICAgIGlmIChzZWNvbmRhcnlNZW51KSB7XG4gICAgICBzZWNvbmRhcnlNZW51ID0gZmFsc2VcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlucmlnaHQnKS5pbm5lckhUTUw9YGBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcm9qZWN0c0FycmF5LnNwbGljZShpbmRleCwgMSlcbiAgICAvLyAgIHNhdmVQcm9qZWN0cyhwcm9qZWN0c0FycmF5KVxuICAgICAgaWYgKHByb2plY3RzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGFuZ2VBY3RpdmVQcm9qZWN0KHByb2plY3RzQXJyYXlbMF0pXG4gICAgICAgIHVwZGF0ZVRhc2tzKClcbiAgICAgICAgaW5qZWN0UHJvakh0bWwocHJvamVjdHNBcnJheSlcbiAgICAgIH1cbiAgICAgZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNMaXN0JykuaW5uZXJIVE1MID0gYGBcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlucmlnaHQnKS5pbm5lckhUTUw9YGBcbiAgICAgfVxuICAgICByZWNyZWF0ZURPTSgpXG5cbiAgICB9XG4gIH0pXG4gIGZpbmlzaHByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHNlY29uZGFyeU1lbnUpIHt9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgY3VycmVudFByb2plY3QgPSByZXR1cm5BY3RpdmUocHJvamVjdHNBcnJheSlcbiAgICAgIGZpbmlzaGVkUHJvamVjdHMucHVzaChjdXJyZW50UHJvamVjdClcbiAgICAgIGxldCBpbmRleCA9IHByb2plY3RzQXJyYXkuaW5kZXhPZihjdXJyZW50UHJvamVjdClcbiAgICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgaWYgKHByb2plY3RzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGFuZ2VBY3RpdmVQcm9qZWN0KHByb2plY3RzQXJyYXlbMF0pXG4gICAgICAgIHVwZGF0ZVRhc2tzKClcbiAgICAgICAgaW5qZWN0UHJvakh0bWwocHJvamVjdHNBcnJheSlcbiAgICAgIH1cbiAgICAgZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNMaXN0JykuaW5uZXJIVE1MID0gYGBcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlucmlnaHQnKS5pbm5lckhUTUw9YGBcbiAgICAgfVxuICAgICAgcmVjcmVhdGVET00oKVxuICAgIH1cblxuICB9KVxufVxuIiwiaW1wb3J0IFwiL2Rpc3Qvc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBmcmFtZXdvcmssIHByb2pPbmUsIHJlY3JlYXRlRE9NLCB1cGRhdGVUYXNrcyB9IGZyb20gXCIuL0RPTS9sb2FkUGFnZVwiO1xuaW1wb3J0IHsgYXBwZW5kTm9kZVRvQm9keSB9IGZyb20gXCIuL0RPTS9sb2FkUGFnZVwiO1xuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vREFUQS90YXNrc1wiO1xuaW1wb3J0IHsgaW5qZWN0UHJvakh0bWwgfSBmcm9tIFwiLi9ET00vbG9hZFBhZ2VcIjtcbmltcG9ydCB7IHBsYWNlSG9sZGVyIH0gZnJvbSBcIi4vREFUQS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZ2V0UHJvalRpdGxlcyB9IGZyb20gXCIuL0RPTS9sb2FkUGFnZVwiO1xuaW1wb3J0IHsgaW5qZWN0VGFza0h0bWwgfSBmcm9tIFwiLi9ET00vbG9hZFBhZ2VcIjtcbmltcG9ydCB7IG5hdmlnYXRlUHJvamVjdHMgfSBmcm9tIFwiLi9ET00vbG9hZFBhZ2VcIjtcbmltcG9ydCB7IGFkZEZvcm0sIGFkZFRhc2tCdG4sIGZvcm1MaXN0ZW5lciB9IGZyb20gXCIuL0RPTS9hZGRUYXNrXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5LCBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vREFUQS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgcHJvakJ0bnMgfSBmcm9tIFwiLi9ET00vbG9hZFBhZ2VcIjtcblxucmVjcmVhdGVET00oKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==