/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `body {
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}
body #app {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  width: 100%;
  height: 100%;
  background-color: yellow;
}
body #app header {
  background-color: #343434;
  grid-area: 1/1/2/13;
  color: white;
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding-left: 2rem;
}
body #app nav {
  grid-area: 2/1/13/3;
  background-color: #dddddd;
  font-weight: bold;
  padding: 1rem;
  font-size: 1.5rem;
}
body #app nav #projects-header {
  padding-left: 0.5rem;
}
body #app nav #projects {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
body #app nav #projects .project {
  width: 80%;
  padding: 1rem;
  border: none;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
}
body #app nav #projects .project:hover {
  background-color: #cccccc;
}
body #app nav #projects .active {
  background-color: #cccccc;
}
body #app main {
  background-color: #eeeeee;
  grid-area: 2/3/13/13;
  display: flex;
  flex-direction: column;
}
body #app main .main-wrapper {
  padding: 0.5rem 1rem;
}
body #app main .main-wrapper button {
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
}
body #app main button:hover {
  background-color: #cccccc;
}

#input-field {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  flex-wrap: wrap;
}
#input-field input {
  align-self: center;
  box-sizing: border-box;
  border: 1px solid #858585;
  border-radius: 0.2rem;
  width: 90%;
  padding: 1rem;
}
#input-field #button-wrapper {
  align-self: center;
  gap: 1rem;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
#input-field #button-wrapper button {
  border: none;
  padding: 0.7rem 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  min-width: fit-content;
  flex: 1;
  font-weight: 800;
}
#input-field #button-wrapper :nth-child(1) {
  border: 1px solid #77ff77;
  background-color: #aaffaa;
}
#input-field #button-wrapper :nth-child(2) {
  border: 1px solid #ff8b8b;
  background-color: #ffbebe;
}

.popup-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 600px;
  border-radius: 1rem;
  gap: 1.5rem;
}
.popup h2,
.popup h3 {
  margin: 0;
}
.popup form {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.popup form * {
  padding: 1rem;
}

.popup-button {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  font-size: 1.5rem;
  background-color: transparent;
  color: black;
  font-weight: bold;
}

#todo-list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2.5rem;
}
#todo-list div {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 200px;
  height: 250px;
  border-radius: 0.5rem;
}`, "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/_variables.scss"],"names":[],"mappings":"AACA;EACE,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,UAAA;EACA,mJAAA;EAEA,eAAA;EACA,gBAAA;EACA,gBAAA;AADF;AAGE;EACE,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;AADJ;AAEI;EACE,yBCrBoB;EDsBpB,mBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;AAAN;AAEI;EACE,mBAAA;EACA,yBC9BiB;ED+BjB,iBAAA;EACA,aAAA;EACA,iBAAA;AAAN;AACM;EACE,oBAAA;AACR;AACM;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AACR;AACQ;EACE,UAAA;EACA,aAAA;EACA,YAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AACV;AACQ;EACE,yBAAA;AACV;AACQ;EACE,yBAAA;AACV;AAII;EACE,yBCjEiB;EDkEjB,oBAAA;EACA,aAAA;EACA,sBAAA;AAFN;AAIM;EACE,oBAAA;AAFR;AAGQ;EACE,SAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AADV;AAKM;EACE,yBAAA;AAHR;;AAQA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,WAAA;EACA,eAAA;AALF;AAME;EACE,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,qBAAA;EACA,UAAA;EACA,aAAA;AAJJ;AAME;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,eAAA;AAJJ;AAKI;EACE,YAAA;EACA,oBAAA;EACA,qBAAA;EACA,eAAA;EACA,sBAAA;EACA,OAAA;EACA,gBAAA;AAHN;AAKI;EACE,yBAAA;EACA,yBCtHS;ADmHf;AAKI;EACE,yBAAA;EACA,yBCzHO;ADsHb;;AAQA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EAEA,oCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AANF;;AAQA;EACE,kBAAA;EACA,uBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;AALF;AAME;;EAEE,SAAA;AAJJ;AAME;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AAJJ;AAKI;EACE,aAAA;AAHN;;AAOA;EACE,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;EACA,iBAAA;EACA,6BAAA;EACA,YAAA;EACA,iBAAA;AAJF;;AAMA;EACE,aAAA;EACA,SAAA;EACA,eAAA;EACA,uBAAA;EACA,2BAAA;EACA,eAAA;AAHF;AAIE;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,qBAAA;AAFJ","sourcesContent":["@import \"./variables\";\nbody {\n  height: 100svh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n\n  #app {\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(12, 1fr);\n    width: 100%;\n    height: 100%;\n    background-color: yellow;\n    header {\n      background-color: $background-color-header;\n      grid-area: 1/ 1/ 2/ 13;\n      color: white;\n      display: flex;\n      align-items: center;\n      font-size: 2rem;\n      padding-left: 2rem;\n    }\n    nav {\n      grid-area: 2 / 1 / 13 / 3;\n      background-color: $background-color-nav;\n      font-weight: bold;\n      padding: 1rem;\n      font-size: 1.5rem;\n      #projects-header {\n        padding-left: 0.5rem;\n      }\n      #projects {\n        margin-top: 2rem;\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n\n        .project {\n          width: 80%;\n          padding: 1rem;\n          border: none;\n          background-color: transparent;\n          text-align: left;\n          cursor: pointer;\n          font-size: 1rem;\n          font-weight: 600;\n        }\n        .project:hover {\n          background-color: #cccccc;\n        }\n        .active {\n          background-color: #cccccc;\n        }\n      }\n    }\n\n    main {\n      background-color: $background-color-app;\n      grid-area: 2 / 3 / 13 / 13;\n      display: flex;\n      flex-direction: column;\n\n      .main-wrapper {\n        padding: 0.5rem 1rem;\n        button {\n          border: 0;\n          cursor: pointer;\n          font-size: 1rem;\n          font-weight: 600;\n        }\n      }\n\n      button:hover {\n        background-color: #cccccc;\n      }\n    }\n  }\n}\n#input-field {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  input {\n    align-self: center;\n    box-sizing: border-box;\n    border: 1px solid lighten(rgb(56, 56, 56), 30%);\n    border-radius: 0.2rem;\n    width: 90%;\n    padding: 1rem;\n  }\n  #button-wrapper {\n    align-self: center;\n    gap: 1rem;\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    button {\n      border: none;\n      padding: 0.7rem 1rem;\n      border-radius: 0.2rem;\n      cursor: pointer;\n      min-width: fit-content;\n      flex: 1;\n      font-weight: 800;\n    }\n    :nth-child(1) {\n      border: 1px solid darken($button-green, 10%);\n      background-color: $button-green;\n    }\n    :nth-child(2) {\n      border: 1px solid darken($button-red, 10%);\n      background-color: $button-red;\n    }\n  }\n}\n\n.popup-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.popup {\n  position: relative;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 600px;\n  height: 600px;\n  border-radius: 1rem;\n  gap: 1.5rem;\n  h2,\n  h3 {\n    margin: 0;\n  }\n  form {\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n    * {\n      padding: 1rem;\n    }\n  }\n}\n.popup-button {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  border: none;\n  font-size: 1.5rem;\n  background-color: transparent;\n  color: black;\n  font-weight: bold;\n}\n#todo-list {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n  padding: 2.5rem;\n  div {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    width: 200px;\n    height: 250px;\n    border-radius: 0.5rem;\n  }\n}\n","$background-color-app: #eeeeee;\n$background-color-header: #343434;\n$background-color-nav: #dddddd;\n$button-green: #aaffaa;\n$button-red: #ffbebe;\n"],"sourceRoot":""}]);
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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/addTodo.js":
/*!************************!*\
  !*** ./src/addTodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToDo: () => (/* binding */ addToDo)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webstorage */ "./src/webstorage.js");


function addToDo(title, description, dueDate, priority) {
  const project = _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.find(
    (project) => project.name == _index__WEBPACK_IMPORTED_MODULE_0__.state.currentProject.name
  );
  console.log(project);
  project.addToDo(title, description, dueDate, priority);

  (0,_webstorage__WEBPACK_IMPORTED_MODULE_1__.saveData)();
}


/***/ }),

/***/ "./src/generateInput.js":
/*!******************************!*\
  !*** ./src/generateInput.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateInput: () => (/* binding */ generateInput)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _generateNavbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateNavbar.js */ "./src/generateNavbar.js");
/* harmony import */ var _webstorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webstorage.js */ "./src/webstorage.js");



function generateInput(list) {
  const addProjectButton = document.querySelector("#add-button");
  console.log(addProjectButton);

  const input = document.createElement("div");
  input.id = "input-field";
  const inputField = document.createElement("input");
  inputField.placeholder = "Project name";

  const buttonWrapper = document.createElement("div");
  buttonWrapper.id = "button-wrapper";

  const inputConfirmButton = document.createElement("button");
  inputConfirmButton.textContent = "Confirm";
  inputConfirmButton.addEventListener("click", () => {
    const projectName = inputField.value;
    if (projectName) {
      list.addProject(projectName);
      (0,_webstorage_js__WEBPACK_IMPORTED_MODULE_2__.saveData)();
    }

    (0,_generateNavbar_js__WEBPACK_IMPORTED_MODULE_1__.generateNavbar)(list);
  });

  const inputCancelButton = document.createElement("button");
  inputCancelButton.textContent = "Cancel";
  inputCancelButton.addEventListener("click", () => {
    input.replaceWith(addProjectButton);
  });

  input.appendChild(inputField);
  buttonWrapper.appendChild(inputConfirmButton);
  buttonWrapper.appendChild(inputCancelButton);
  input.appendChild(buttonWrapper);

  addProjectButton.replaceWith(input);
}


/***/ }),

/***/ "./src/generateNavbar.js":
/*!*******************************!*\
  !*** ./src/generateNavbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateNavbar: () => (/* binding */ generateNavbar)
/* harmony export */ });
/* harmony import */ var _generateInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateInput */ "./src/generateInput.js");
/* harmony import */ var _generateProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateProjects */ "./src/generateProjects.js");


function generateNavbar(toDoList) {
  const projectsDiv = document.querySelector("#projects");
  projectsDiv.innerHTML = "";
  const addProjectButton = document.createElement("button");
  addProjectButton.id = "add-button";
  addProjectButton.classList = "project";
  addProjectButton.textContent = "+ Add Project";
  addProjectButton.addEventListener("click", () => (0,_generateInput__WEBPACK_IMPORTED_MODULE_0__.generateInput)(toDoList));
  projectsDiv.appendChild(addProjectButton);
  (0,_generateProjects__WEBPACK_IMPORTED_MODULE_1__.generateProjects)();
}


/***/ }),

/***/ "./src/generatePopup.js":
/*!******************************!*\
  !*** ./src/generatePopup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generatePopup: () => (/* binding */ generatePopup)
/* harmony export */ });
/* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodo */ "./src/addTodo.js");
/* harmony import */ var _generateTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateTodos */ "./src/generateTodos.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");



function generatePopup() {
  const popupBackground = document.createElement("div");
  const popup = document.createElement("div");
  const popupTitle = document.createElement("h2");
  const popupSubtitle = document.createElement("h3");
  const form = document.createElement("form");
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.placeholder = "Title";
  form.appendChild(titleInput);

  // Create input for description
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.name = "description";
  descriptionInput.placeholder = "Description (optional)";
  form.appendChild(descriptionInput);

  // Create input for due date
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  form.appendChild(dueDateInput);

  // Create select for priority
  const prioritySelect = document.createElement("select");
  prioritySelect.name = "priority";
  const priorities = ["low", "medium", "high"];
  priorities.forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority;
    option.text = priority;
    prioritySelect.appendChild(option);
  });
  form.appendChild(prioritySelect);

  // Create submit button
  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Add To-Do";
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      titleInput.value != "" &&
      dueDateInput.value != "" &&
      prioritySelect.value != ""
    ) {
      (0,_addTodo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(
        titleInput.value,
        descriptionInput.value,
        dueDateInput.value,
        prioritySelect.value
      );
    }
    popupBackground.remove();
    (0,_generateTodos__WEBPACK_IMPORTED_MODULE_1__.generateTodos)();
  });

  form.appendChild(submitButton);
  const popupButton = document.createElement("button");
  popupBackground.classList = "popup-background";
  popup.classList = "popup";
  popupTitle.textContent = "Add To-Do";
  popupSubtitle.textContent = `${_index__WEBPACK_IMPORTED_MODULE_2__.state.currentProject.name}`;

  popupButton.textContent = "x";
  popupButton.classList = "popup-button";
  popupButton.addEventListener("click", () => {
    popupBackground.remove();
  });
  popup.appendChild(popupTitle);
  popup.appendChild(popupSubtitle);
  popup.appendChild(form);
  popup.appendChild(popupButton);
  popupBackground.appendChild(popup);
  document.body.appendChild(popupBackground);
}


/***/ }),

/***/ "./src/generateProjects.js":
/*!*********************************!*\
  !*** ./src/generateProjects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateProjects: () => (/* binding */ generateProjects)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _generateTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateTodos */ "./src/generateTodos.js");



function generateProjects() {
  const projectsDiv = document.querySelector("#projects");
  _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.forEach((project, index) => {
    const projectDiv = document.createElement("button");
    if (index == 0) {
      projectDiv.classList = "project active";
    } else projectDiv.classList = "project";
    projectDiv.textContent = project.name;
    projectsDiv.appendChild(projectDiv);
    projectDiv.addEventListener("click", () => {
      projectsDiv.childNodes.forEach((node) => {
        node.classList.remove("active");
      });
      projectDiv.classList.add("active");
      _index__WEBPACK_IMPORTED_MODULE_0__.state.currentProject = _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.find(
        (projectName) => project.name === projectName.name
      );
      (0,_generateTodos__WEBPACK_IMPORTED_MODULE_1__.generateTodos)();
      console.log(_index__WEBPACK_IMPORTED_MODULE_0__.state.currentProject);
    });
  });
}


/***/ }),

/***/ "./src/generateTodos.js":
/*!******************************!*\
  !*** ./src/generateTodos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateTodos: () => (/* binding */ generateTodos)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function generateTodos() {
  const todoList = document.querySelector("#todo-list");
  console.log("Loading todos");
  todoList.innerHTML = "";
  _index_js__WEBPACK_IMPORTED_MODULE_0__.state.currentProject.todos.forEach((todo) => {
    let borderColor;
    switch (todo.priority) {
      case "low":
        borderColor = "green";
        break;
      case "medium":
        borderColor = "orange";
        break;
      case "high":
        borderColor = "red";
        break;
      default:
        borderColor = "black";
    }
    console.log(todo);
    const todoDiv = document.createElement("div");

    const todoTitle = document.createElement("h3");
    todoTitle.textContent = todo.title;
    todoDiv.appendChild(todoTitle);

    if (todo.description) {
      const todoDesc = document.createElement("p");
      todoDesc.textContent = todo.description;
      todoDiv.appendChild(todoDesc);
    }

    const todoDate = document.createElement("p");
    todoDate.textContent = todo.dueDate;

    todoDiv.style.border = `3px solid ${borderColor}`;

    todoDiv.appendChild(todoDate);
    todoList.appendChild(todoDiv);
  });
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: () => (/* binding */ state),
/* harmony export */   toDoList: () => (/* binding */ toDoList)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _toDoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoList.js */ "./src/toDoList.js");
/* harmony import */ var _toDoProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoProject.js */ "./src/toDoProject.js");
/* harmony import */ var _toDoClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoClass.js */ "./src/toDoClass.js");
/* harmony import */ var _generateNavbar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateNavbar.js */ "./src/generateNavbar.js");
/* harmony import */ var _generatePopup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generatePopup.js */ "./src/generatePopup.js");
/* harmony import */ var _generateTodos_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generateTodos.js */ "./src/generateTodos.js");
/* harmony import */ var _webstorage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webstorage.js */ "./src/webstorage.js");








const toDoList = new _toDoList_js__WEBPACK_IMPORTED_MODULE_1__.ToDoList();

console.log(toDoList);
(0,_webstorage_js__WEBPACK_IMPORTED_MODULE_7__.loadStorage)();
(0,_generateNavbar_js__WEBPACK_IMPORTED_MODULE_4__.generateNavbar)(toDoList);

const state = {
  currentProject: toDoList.projects[0],
};
(0,_generateTodos_js__WEBPACK_IMPORTED_MODULE_6__.generateTodos)();
console.log(state);

const addToDoButton = document.querySelector(".add-todo");
addToDoButton.addEventListener("click", _generatePopup_js__WEBPACK_IMPORTED_MODULE_5__.generatePopup);


/***/ }),

/***/ "./src/toDoClass.js":
/*!**************************!*\
  !*** ./src/toDoClass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDo: () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo {
  constructor(title, description, dueDate, priority) {
    (this.title = title),
      (this.description = description || ""),
      (this.dueDate = dueDate),
      (this.priority = priority),
      (this.finished = false);
  }
  updateTitle(title) {
    this.title = title;
  }
  updateDescription(description) {
    this.description = description;
  }
  updateDueDate(dueDate) {
    this.dueDate = dueDate;
  }
  updatePriority(priority) {
    this.priority = priority;
  }
  updateNotes(notes) {
    this.notes = notes;
  }
  toggleFinished() {
    this.finished = !this.finished;
  }
}


/***/ }),

/***/ "./src/toDoList.js":
/*!*************************!*\
  !*** ./src/toDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDoList: () => (/* binding */ ToDoList)
/* harmony export */ });
/* harmony import */ var _toDoProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoProject.js */ "./src/toDoProject.js");


class ToDoList {
  constructor() {
    this.projects = [new _toDoProject_js__WEBPACK_IMPORTED_MODULE_0__.Project("General")];
  }
  addProject(name) {
    this.projects.push(new _toDoProject_js__WEBPACK_IMPORTED_MODULE_0__.Project(name));
  }
}


/***/ }),

/***/ "./src/toDoProject.js":
/*!****************************!*\
  !*** ./src/toDoProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _toDoClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoClass.js */ "./src/toDoClass.js");

class Project {
  constructor(name, data) {
    this.name = name;
    this.todos = [] || 0;
  }
  addToDo(title, desc, dueDate, priority) {
    this.todos.push(new _toDoClass_js__WEBPACK_IMPORTED_MODULE_0__.ToDo(title, desc, dueDate, priority));
  }
}


/***/ }),

/***/ "./src/webstorage.js":
/*!***************************!*\
  !*** ./src/webstorage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStorage: () => (/* binding */ loadStorage),
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
/* harmony import */ var _generateNavbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateNavbar.js */ "./src/generateNavbar.js");
/* harmony import */ var _generateTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateTodos.js */ "./src/generateTodos.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _toDoClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoClass.js */ "./src/toDoClass.js");
/* harmony import */ var _toDoProject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDoProject.js */ "./src/toDoProject.js");





function saveData() {
  localStorage.setItem("toDoList", JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_2__.toDoList));
  console.log("saved data");
}

function loadStorage() {
  let storedData = localStorage.getItem("toDoList");
  if (storedData) {
    let parsedData = JSON.parse(storedData);

    _index_js__WEBPACK_IMPORTED_MODULE_2__.toDoList.projects = parsedData.projects.map((project) => {
      let newProject = new _toDoProject_js__WEBPACK_IMPORTED_MODULE_4__.Project(project.name, project.todos);
      newProject.todos = project.todos.map(
        (todo) =>
          new _toDoClass_js__WEBPACK_IMPORTED_MODULE_3__.ToDo(todo.title, todo.description, todo.dueDate, todo.priority)
      );
      return newProject;
    });
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUhBQW1ILFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxhQUFhLGFBQWEsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLGFBQWEsYUFBYSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssYUFBYSxhQUFhLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLE1BQU0s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O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQjJDOztBQUVwQztBQUNQO0FBQ0EseUJBQXlCLG9EQUFPO0FBQ2hDO0FBQ0E7QUFDQSwyQkFBMkIsb0RBQU87QUFDbEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1RzQztBQUMvQjtBQUNQO0FBQ0E7QUFDQSx1QkFBdUIsQ0FBSTtBQUMzQjtBQUNBO0FBQ0Esd0JBQXdCLCtDQUFJO0FBQzVCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RxRDtBQUNGO0FBQ2I7QUFDQTtBQUNLO0FBQ3BDO0FBQ1Asa0RBQWtELCtDQUFRO0FBQzFEO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsSUFBSSwrQ0FBUTtBQUNaLDJCQUEyQixvREFBTztBQUNsQztBQUNBO0FBQ0EsY0FBYywrQ0FBSTtBQUNsQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7VUN4QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvYWRkVG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZ2VuZXJhdGVJbnB1dC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZ2VuZXJhdGVOYXZiYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2dlbmVyYXRlUG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2dlbmVyYXRlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2dlbmVyYXRlVG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90b0RvQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90b0RvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvd2Vic3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBoZWlnaHQ6IDEwMHN2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5ib2R5ICNhcHAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cbmJvZHkgI2FwcCBoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICBncmlkLWFyZWE6IDEvMS8yLzEzO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuYm9keSAjYXBwIG5hdiB7XG4gIGdyaWQtYXJlYTogMi8xLzEzLzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbmJvZHkgI2FwcCBuYXYgI3Byb2plY3RzLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuYm9keSAjYXBwIG5hdiAjcHJvamVjdHMge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyAucHJvamVjdCB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuYm9keSAjYXBwIG5hdiAjcHJvamVjdHMgLnByb2plY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufVxuYm9keSAjYXBwIG5hdiAjcHJvamVjdHMgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5ib2R5ICNhcHAgbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIGdyaWQtYXJlYTogMi8zLzEzLzEzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuYm9keSAjYXBwIG1haW4gLm1haW4td3JhcHBlciB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxuYm9keSAjYXBwIG1haW4gLm1haW4td3JhcHBlciBidXR0b24ge1xuICBib3JkZXI6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuYm9keSAjYXBwIG1haW4gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbn1cblxuI2lucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAwLjVyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiNpbnB1dC1maWVsZCBpbnB1dCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg1ODU4NTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuI2lucHV0LWZpZWxkICNidXR0b24td3JhcHBlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuI2lucHV0LWZpZWxkICNidXR0b24td3JhcHBlciBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgZmxleDogMTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbiNpbnB1dC1maWVsZCAjYnV0dG9uLXdyYXBwZXIgOm50aC1jaGlsZCgxKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3N2ZmNzc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWZmYWE7XG59XG4jaW5wdXQtZmllbGQgI2J1dHRvbi13cmFwcGVyIDpudGgtY2hpbGQoMikge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY4YjhiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZWJlO1xufVxuXG4ucG9wdXAtYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9wdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBnYXA6IDEuNXJlbTtcbn1cbi5wb3B1cCBoMixcbi5wb3B1cCBoMyB7XG4gIG1hcmdpbjogMDtcbn1cbi5wb3B1cCBmb3JtIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjVyZW07XG59XG4ucG9wdXAgZm9ybSAqIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnBvcHVwLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3RvZG8tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAyLjVyZW07XG59XG4jdG9kby1saXN0IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1KQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBREo7QUFFSTtFQUNFLHlCQ3JCb0I7RURzQnBCLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFOO0FBRUk7RUFDRSxtQkFBQTtFQUNBLHlCQzlCaUI7RUQrQmpCLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQU47QUFDTTtFQUNFLG9CQUFBO0FBQ1I7QUFDTTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUNSO0FBQ1E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNWO0FBQ1E7RUFDRSx5QkFBQTtBQUNWO0FBQ1E7RUFDRSx5QkFBQTtBQUNWO0FBSUk7RUFDRSx5QkNqRWlCO0VEa0VqQixvQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUZOO0FBSU07RUFDRSxvQkFBQTtBQUZSO0FBR1E7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURWO0FBS007RUFDRSx5QkFBQTtBQUhSOztBQVFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUxGO0FBTUU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBSko7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFKSjtBQUtJO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFITjtBQUtJO0VBQ0UseUJBQUE7RUFDQSx5QkN0SFM7QURtSGY7QUFLSTtFQUNFLHlCQUFBO0VBQ0EseUJDekhPO0FEc0hiOztBQVFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTEY7QUFNRTs7RUFFRSxTQUFBO0FBSko7QUFNRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBSko7QUFLSTtFQUNFLGFBQUE7QUFITjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFKRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBSEY7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL3ZhcmlhYmxlc1xcXCI7XFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHN2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuXFxuICAjYXBwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIGhlYWRlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItaGVhZGVyO1xcbiAgICAgIGdyaWQtYXJlYTogMS8gMS8gMi8gMTM7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICB9XFxuICAgIG5hdiB7XFxuICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDEzIC8gMztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1uYXY7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAjcHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICAgIH1cXG4gICAgICAjcHJvamVjdHMge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxcmVtO1xcblxcbiAgICAgICAgLnByb2plY3Qge1xcbiAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5wcm9qZWN0OmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgICAgIH1cXG4gICAgICAgIC5hY3RpdmUge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBtYWluIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1hcHA7XFxuICAgICAgZ3JpZC1hcmVhOiAyIC8gMyAvIDEzIC8gMTM7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgIC5tYWluLXdyYXBwZXIge1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuI2lucHV0LWZpZWxkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBpbnB1dCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbihyZ2IoNTYsIDU2LCA1NiksIDMwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG4gICNidXR0b24td3JhcHBlciB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBidXR0b24ge1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgZmxleDogMTtcXG4gICAgICBmb250LXdlaWdodDogODAwO1xcbiAgICB9XFxuICAgIDpudGgtY2hpbGQoMSkge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkYnV0dG9uLWdyZWVuLCAxMCUpO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tZ3JlZW47XFxuICAgIH1cXG4gICAgOm50aC1jaGlsZCgyKSB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRidXR0b24tcmVkLCAxMCUpO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tcmVkO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5wb3B1cC1iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBnYXA6IDEuNXJlbTtcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICBmb3JtIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgICoge1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuLnBvcHVwLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI3RvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAyLjVyZW07XFxuICBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIH1cXG59XFxuXCIsXCIkYmFja2dyb3VuZC1jb2xvci1hcHA6ICNlZWVlZWU7XFxuJGJhY2tncm91bmQtY29sb3ItaGVhZGVyOiAjMzQzNDM0O1xcbiRiYWNrZ3JvdW5kLWNvbG9yLW5hdjogI2RkZGRkZDtcXG4kYnV0dG9uLWdyZWVuOiAjYWFmZmFhO1xcbiRidXR0b24tcmVkOiAjZmZiZWJlO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHN0YXRlLCB0b0RvTGlzdCB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuL3dlYnN0b3JhZ2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgcHJvamVjdCA9IHRvRG9MaXN0LnByb2plY3RzLmZpbmQoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PSBzdGF0ZS5jdXJyZW50UHJvamVjdC5uYW1lXG4gICk7XG4gIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICBwcm9qZWN0LmFkZFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cbiAgc2F2ZURhdGEoKTtcbn1cbiIsImltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlTmF2YmFyIH0gZnJvbSBcIi4vZ2VuZXJhdGVOYXZiYXIuanNcIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vd2Vic3RvcmFnZS5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSW5wdXQobGlzdCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtYnV0dG9uXCIpO1xuICBjb25zb2xlLmxvZyhhZGRQcm9qZWN0QnV0dG9uKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlucHV0LmlkID0gXCJpbnB1dC1maWVsZFwiO1xuICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dEZpZWxkLnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IG5hbWVcIjtcblxuICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uV3JhcHBlci5pZCA9IFwiYnV0dG9uLXdyYXBwZXJcIjtcblxuICBjb25zdCBpbnB1dENvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBpbnB1dENvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIjtcbiAgaW5wdXRDb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBpbnB1dEZpZWxkLnZhbHVlO1xuICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgbGlzdC5hZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgIHNhdmVEYXRhKCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVOYXZiYXIobGlzdCk7XG4gIH0pO1xuXG4gIGNvbnN0IGlucHV0Q2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaW5wdXRDYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBpbnB1dENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlucHV0LnJlcGxhY2VXaXRoKGFkZFByb2plY3RCdXR0b24pO1xuICB9KTtcblxuICBpbnB1dC5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcbiAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChpbnB1dENvbmZpcm1CdXR0b24pO1xuICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGlucHV0Q2FuY2VsQnV0dG9uKTtcbiAgaW5wdXQuYXBwZW5kQ2hpbGQoYnV0dG9uV3JhcHBlcik7XG5cbiAgYWRkUHJvamVjdEJ1dHRvbi5yZXBsYWNlV2l0aChpbnB1dCk7XG59XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUlucHV0IH0gZnJvbSBcIi4vZ2VuZXJhdGVJbnB1dFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVQcm9qZWN0cyB9IGZyb20gXCIuL2dlbmVyYXRlUHJvamVjdHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU5hdmJhcih0b0RvTGlzdCkge1xuICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG4gIHByb2plY3RzRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmlkID0gXCJhZGQtYnV0dG9uXCI7XG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0ID0gXCJwcm9qZWN0XCI7XG4gIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIFByb2plY3RcIjtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZ2VuZXJhdGVJbnB1dCh0b0RvTGlzdCkpO1xuICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgZ2VuZXJhdGVQcm9qZWN0cygpO1xufVxuIiwiaW1wb3J0IHsgYWRkVG9EbyB9IGZyb20gXCIuL2FkZFRvZG9cIjtcbmltcG9ydCB7IGdlbmVyYXRlVG9kb3MgfSBmcm9tIFwiLi9nZW5lcmF0ZVRvZG9zXCI7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gXCIuL2luZGV4XCI7XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQb3B1cCgpIHtcbiAgY29uc3QgcG9wdXBCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBwb3B1cFN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICB0aXRsZUlucHV0Lm5hbWUgPSBcInRpdGxlXCI7XG4gIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgLy8gQ3JlYXRlIGlucHV0IGZvciBkZXNjcmlwdGlvblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvbiAob3B0aW9uYWwpXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgLy8gQ3JlYXRlIGlucHV0IGZvciBkdWUgZGF0ZVxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkdWVEYXRlXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICAvLyBDcmVhdGUgc2VsZWN0IGZvciBwcmlvcml0eVxuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBbXCJsb3dcIiwgXCJtZWRpdW1cIiwgXCJoaWdoXCJdO1xuICBwcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eTtcbiAgICBvcHRpb24udGV4dCA9IHByaW9yaXR5O1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcblxuICAvLyBDcmVhdGUgc3VibWl0IGJ1dHRvblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCJBZGQgVG8tRG9cIjtcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChcbiAgICAgIHRpdGxlSW5wdXQudmFsdWUgIT0gXCJcIiAmJlxuICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlICE9IFwiXCIgJiZcbiAgICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlICE9IFwiXCJcbiAgICApIHtcbiAgICAgIGFkZFRvRG8oXG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QudmFsdWVcbiAgICAgICk7XG4gICAgfVxuICAgIHBvcHVwQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgICBnZW5lcmF0ZVRvZG9zKCk7XG4gIH0pO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgY29uc3QgcG9wdXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwb3B1cEJhY2tncm91bmQuY2xhc3NMaXN0ID0gXCJwb3B1cC1iYWNrZ3JvdW5kXCI7XG4gIHBvcHVwLmNsYXNzTGlzdCA9IFwicG9wdXBcIjtcbiAgcG9wdXBUaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIFRvLURvXCI7XG4gIHBvcHVwU3VidGl0bGUudGV4dENvbnRlbnQgPSBgJHtzdGF0ZS5jdXJyZW50UHJvamVjdC5uYW1lfWA7XG5cbiAgcG9wdXBCdXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgcG9wdXBCdXR0b24uY2xhc3NMaXN0ID0gXCJwb3B1cC1idXR0b25cIjtcbiAgcG9wdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwb3B1cEJhY2tncm91bmQucmVtb3ZlKCk7XG4gIH0pO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFRpdGxlKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBTdWJ0aXRsZSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKGZvcm0pO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEJ1dHRvbik7XG4gIHBvcHVwQmFja2dyb3VuZC5hcHBlbmRDaGlsZChwb3B1cCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXBCYWNrZ3JvdW5kKTtcbn1cbiIsImltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGdlbmVyYXRlVG9kb3MgfSBmcm9tIFwiLi9nZW5lcmF0ZVRvZG9zXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0cygpIHtcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICB0b0RvTGlzdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdCA9IFwicHJvamVjdCBhY3RpdmVcIjtcbiAgICB9IGVsc2UgcHJvamVjdERpdi5jbGFzc0xpc3QgPSBcInByb2plY3RcIjtcbiAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHByb2plY3RzRGl2LmNoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9KTtcbiAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0ID0gdG9Eb0xpc3QucHJvamVjdHMuZmluZChcbiAgICAgICAgKHByb2plY3ROYW1lKSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lLm5hbWVcbiAgICAgICk7XG4gICAgICBnZW5lcmF0ZVRvZG9zKCk7XG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZS5jdXJyZW50UHJvamVjdCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUb2RvcygpIHtcbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tbGlzdFwiKTtcbiAgY29uc29sZS5sb2coXCJMb2FkaW5nIHRvZG9zXCIpO1xuICB0b2RvTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICBzdGF0ZS5jdXJyZW50UHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgbGV0IGJvcmRlckNvbG9yO1xuICAgIHN3aXRjaCAodG9kby5wcmlvcml0eSkge1xuICAgICAgY2FzZSBcImxvd1wiOlxuICAgICAgICBib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICBib3JkZXJDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gICAgaWYgKHRvZG8uZGVzY3JpcHRpb24pIHtcbiAgICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0b2RvRGVzYy50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuXG4gICAgdG9kb0Rpdi5zdHlsZS5ib3JkZXIgPSBgM3B4IHNvbGlkICR7Ym9yZGVyQ29sb3J9YDtcblxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICB9KTtcbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgVG9Eb0xpc3QgfSBmcm9tIFwiLi90b0RvTGlzdC5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3RvRG9Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vdG9Eb0NsYXNzLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU5hdmJhciB9IGZyb20gXCIuL2dlbmVyYXRlTmF2YmFyLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVBvcHVwIH0gZnJvbSBcIi4vZ2VuZXJhdGVQb3B1cC5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb2RvcyB9IGZyb20gXCIuL2dlbmVyYXRlVG9kb3MuanNcIjtcbmltcG9ydCB7IGxvYWRTdG9yYWdlIH0gZnJvbSBcIi4vd2Vic3RvcmFnZS5qc1wiO1xuZXhwb3J0IGNvbnN0IHRvRG9MaXN0ID0gbmV3IFRvRG9MaXN0KCk7XG5cbmNvbnNvbGUubG9nKHRvRG9MaXN0KTtcbmxvYWRTdG9yYWdlKCk7XG5nZW5lcmF0ZU5hdmJhcih0b0RvTGlzdCk7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcbiAgY3VycmVudFByb2plY3Q6IHRvRG9MaXN0LnByb2plY3RzWzBdLFxufTtcbmdlbmVyYXRlVG9kb3MoKTtcbmNvbnNvbGUubG9nKHN0YXRlKTtcblxuY29uc3QgYWRkVG9Eb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG9cIik7XG5hZGRUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZW5lcmF0ZVBvcHVwKTtcbiIsImV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICh0aGlzLnRpdGxlID0gdGl0bGUpLFxuICAgICAgKHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiB8fCBcIlwiKSxcbiAgICAgICh0aGlzLmR1ZURhdGUgPSBkdWVEYXRlKSxcbiAgICAgICh0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHkpLFxuICAgICAgKHRoaXMuZmluaXNoZWQgPSBmYWxzZSk7XG4gIH1cbiAgdXBkYXRlVGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cbiAgdXBkYXRlRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbiAgdXBkYXRlRHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuICB1cGRhdGVQcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuICB1cGRhdGVOb3Rlcyhub3Rlcykge1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgfVxuICB0b2dnbGVGaW5pc2hlZCgpIHtcbiAgICB0aGlzLmZpbmlzaGVkID0gIXRoaXMuZmluaXNoZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi90b0RvUHJvamVjdC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVG9Eb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW25ldyBQcm9qZWN0KFwiR2VuZXJhbFwiKV07XG4gIH1cbiAgYWRkUHJvamVjdChuYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG5hbWUpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL3RvRG9DbGFzcy5qc1wiO1xuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRhKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvZG9zID0gW10gfHwgZGF0YTtcbiAgfVxuICBhZGRUb0RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudG9kb3MucHVzaChuZXcgVG9Ebyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVOYXZiYXIgfSBmcm9tIFwiLi9nZW5lcmF0ZU5hdmJhci5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb2RvcyB9IGZyb20gXCIuL2dlbmVyYXRlVG9kb3MuanNcIjtcbmltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi90b0RvQ2xhc3MuanNcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi90b0RvUHJvamVjdC5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVEYXRhKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0KSk7XG4gIGNvbnNvbGUubG9nKFwic2F2ZWQgZGF0YVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTdG9yYWdlKCkge1xuICBsZXQgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0xpc3RcIik7XG4gIGlmIChzdG9yZWREYXRhKSB7XG4gICAgbGV0IHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuXG4gICAgdG9Eb0xpc3QucHJvamVjdHMgPSBwYXJzZWREYXRhLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0Lm5hbWUsIHByb2plY3QudG9kb3MpO1xuICAgICAgbmV3UHJvamVjdC50b2RvcyA9IHByb2plY3QudG9kb3MubWFwKFxuICAgICAgICAodG9kbykgPT5cbiAgICAgICAgICBuZXcgVG9Ebyh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZURhdGUsIHRvZG8ucHJpb3JpdHkpXG4gICAgICApO1xuICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9