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
body button {
  cursor: pointer;
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
body #app nav #projects button:hover {
  background-color: #cccccc;
}
body #app nav #projects .project {
  height: 30;
  width: 80%;
  padding: 1rem;
  border: none;
  background-color: transparent;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
body #app nav #projects .project div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
body #app nav #projects .project button {
  border: none;
  background-color: transparent;
  cursor: pointer;
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
body #app main .main-wrapper .buttons-main {
  display: flex;
  gap: 1rem;
}
body #app main .main-wrapper .buttons-main button {
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  border: none;
}
body #app main .main-wrapper .buttons-main button:hover {
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 1rem;
  width: 200px;
  height: 250px;
  border-radius: 0.5rem;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;
}
#todo-list div h3 {
  margin: 0;
  margin-top: 2rem;
}
#todo-list div p {
  height: 40px;
}
#todo-list div button {
  cursor: pointer;
}
#todo-list div .delete-button {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.75rem;
  border: none;
  background-color: transparent;
}
#todo-list div .delete-button:hover {
  transform: scale(1.1);
}
#todo-list div .edit-button {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.75rem;
  border: none;
  background-color: transparent;
}
#todo-list div .edit-button:hover {
  transform: scale(1.1);
}
#todo-list div .finished-button {
  background-color: green;
  border: 0;
  color: white;
  border-radius: 0.5rem;
  width: 80%;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
  animation: ease-in-out 0.2s;
}
#todo-list div .finished-button:hover {
  background-color: #007600;
}
#todo-list div div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.delete-popup {
  font-size: larger;
}
.delete-popup :nth-child(3) {
  padding: 1rem 4rem;
}

.activity-log {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 90%;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  scroll-snap-type: y mandatory;
}
.activity-log ::-webkit-scrollbar {
  display: none;
}
.activity-log .activity {
  min-width: 90%;
  border: 1px solid;
  padding: 1rem;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
}
.activity-log .activity * {
  margin: 0;
}`, "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"./variables\";\nbody {\n  height: 100svh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  button {\n    cursor: pointer;\n  }\n\n  #app {\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(12, 1fr);\n    width: 100%;\n    height: 100%;\n    background-color: yellow;\n    header {\n      background-color: $background-color-header;\n      grid-area: 1/ 1/ 2/ 13;\n      color: white;\n      display: flex;\n      align-items: center;\n      font-size: 2rem;\n      padding-left: 2rem;\n    }\n    nav {\n      grid-area: 2 / 1 / 13 / 3;\n      background-color: $background-color-nav;\n      font-weight: bold;\n      padding: 1rem;\n      font-size: 1.5rem;\n      #projects-header {\n        padding-left: 0.5rem;\n      }\n      #projects {\n        button:hover {\n          background-color: #cccccc;\n        }\n        margin-top: 2rem;\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n\n        .project {\n          height: 30;\n          width: 80%;\n          padding: 1rem;\n          border: none;\n          background-color: transparent;\n          text-align: left;\n\n          font-size: 1rem;\n          font-weight: 600;\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          div {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            gap: 1rem;\n          }\n          button {\n            border: none;\n            background-color: transparent;\n            cursor: pointer;\n          }\n        }\n        .project:hover {\n          background-color: #cccccc;\n        }\n        .active {\n          background-color: #cccccc;\n        }\n      }\n    }\n\n    main {\n      background-color: $background-color-app;\n      grid-area: 2 / 3 / 13 / 13;\n      display: flex;\n      flex-direction: column;\n\n      .main-wrapper {\n        padding: 0.5rem 1rem;\n        .buttons-main {\n          display: flex;\n          gap: 1rem;\n          button {\n            cursor: pointer;\n            font-size: 1rem;\n            font-weight: 600;\n            border: none;\n          }\n          button:hover {\n            background-color: #cccccc;\n          }\n        }\n      }\n    }\n  }\n}\n#input-field {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  input {\n    align-self: center;\n    box-sizing: border-box;\n    border: 1px solid lighten(rgb(56, 56, 56), 30%);\n    border-radius: 0.2rem;\n    width: 90%;\n    padding: 1rem;\n  }\n  #button-wrapper {\n    align-self: center;\n    gap: 1rem;\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    button {\n      border: none;\n      padding: 0.7rem 1rem;\n      border-radius: 0.2rem;\n      cursor: pointer;\n      min-width: fit-content;\n      flex: 1;\n      font-weight: 800;\n    }\n    :nth-child(1) {\n      border: 1px solid darken($button-green, 10%);\n      background-color: $button-green;\n    }\n    :nth-child(2) {\n      border: 1px solid darken($button-red, 10%);\n      background-color: $button-red;\n    }\n  }\n}\n\n.popup-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.popup {\n  position: relative;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 600px;\n  height: 600px;\n  border-radius: 1rem;\n  gap: 1.5rem;\n  h2,\n  h3 {\n    margin: 0;\n  }\n  form {\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n    * {\n      padding: 1rem;\n    }\n  }\n}\n.popup-button {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  border: none;\n  font-size: 1.5rem;\n  background-color: transparent;\n  color: black;\n  font-weight: bold;\n}\n#todo-list {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n  padding: 2.5rem;\n  div {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    flex-direction: column;\n    padding: 1rem;\n    width: 200px;\n    height: 250px;\n    border-radius: 0.5rem;\n    text-align: center;\n    animation: fadeIn 0.5s ease-in-out;\n    h3 {\n      margin: 0;\n      margin-top: 2rem;\n    }\n    p {\n      height: 40px;\n    }\n    button {\n      cursor: pointer;\n    }\n    .delete-button {\n      position: absolute;\n      top: 0;\n      right: 0;\n      padding: 0.75rem;\n      border: none;\n      background-color: transparent;\n    }\n    .delete-button:hover {\n      transform: scale(1.1);\n    }\n    .edit-button {\n      position: absolute;\n      top: 0;\n      left: 0;\n      padding: 0.75rem;\n      border: none;\n      background-color: transparent;\n    }\n    .edit-button:hover {\n      transform: scale(1.1);\n    }\n    .finished-button {\n      background-color: green;\n      border: 0;\n      color: white;\n      border-radius: 0.5rem;\n      width: 80%;\n      padding: 0.5rem 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      justify-self: flex-end;\n      animation: ease-in-out 0.2s;\n    }\n    .finished-button:hover {\n      background-color: darken($color: green, $amount: 2%);\n    }\n\n    div {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n}\n.delete-popup {\n  font-size: larger;\n  :nth-child(3) {\n    padding: 1rem 4rem;\n  }\n}\n.activity-log {\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  width: 90%;\n  overflow: scroll;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none;\n  scroll-snap-type: y mandatory;\n  .activity {\n    min-width: 90%;\n    border: 1px solid;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    justify-content: center;\n    align-items: center;\n    * {\n      margin: 0;\n    }\n  }\n}\n","$background-color-app: #eeeeee;\n$background-color-header: #343434;\n$background-color-nav: #dddddd;\n$button-green: #aaffaa;\n$button-red: #ffbebe;\n"],"sourceRoot":""}]);
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

/***/ "./src/activitylog.js":
/*!****************************!*\
  !*** ./src/activitylog.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateActivityLog: () => (/* binding */ generateActivityLog)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webstorage */ "./src/webstorage.js");



function generateActivityLog() {
  const popupBackground = document.createElement("div");
  popupBackground.classList = "popup-background";
  const popup = document.createElement("div");
  popup.classList = "popup";
  popup.style.justifyContent = "flex-start";
  popup.style.padding = "2rem";
  popupBackground.appendChild(popup);
  const title = document.createElement("h3");

  popup.appendChild(title);
  title.textContent = "Activity Log";
  const quit = document.createElement("button");
  quit.classList = "popup-button";
  popup.appendChild(quit);
  quit.textContent = "x";
  quit.addEventListener("click", () => {
    popupBackground.remove();
  });

  const log = document.createElement("div");
  log.classList = "activity-log";
  popup.appendChild(log);

  const button = document.createElement("button");
  popup.appendChild(button);
  button.textContent = "Clear";
  button.style.marginTop = "auto";
  button.addEventListener("click", () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.activityLog = [];
    popupBackground.remove();
    (0,_webstorage__WEBPACK_IMPORTED_MODULE_1__.saveData)();
  });

  document.body.appendChild(popupBackground);
  generateActivities();
}

function generateActivities() {
  let borderColor;

  const log = document.querySelector(".activity-log");
  log.innerHTML = "";
  _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.activityLog.forEach((activity) => {
    switch (activity[0].priority) {
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
    const activityDiv = document.createElement("div");
    activityDiv.style.border = `3px solid ${borderColor}`;
    activityDiv.classList = "activity";
    activityDiv.innerHTML = `<h3>Finished todo:</h3> ${activity[0].title}`;
    const dateDiv = document.createElement("div");
    dateDiv.innerHTML = `<h4>on</h4> ${activity[1]}`;
    activityDiv.appendChild(dateDiv);
    log.appendChild(activityDiv);
  });
}


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

  project.addToDo(title, description, dueDate, priority);

  (0,_webstorage__WEBPACK_IMPORTED_MODULE_1__.saveData)();
}


/***/ }),

/***/ "./src/deletePopup.js":
/*!****************************!*\
  !*** ./src/deletePopup.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deletePopup: () => (/* binding */ deletePopup)
/* harmony export */ });
/* harmony import */ var _todoManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoManagement */ "./src/todoManagement.js");

function deletePopup(deletedTodo) {
  const popupBackground = document.createElement("div");
  const popup = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = "Are you sure?";

  const subtitle = document.createElement("p");
  subtitle.textContent = "Deleting todo is irreversable";

  const quit = document.createElement("button");
  quit.textContent = "x";
  quit.addEventListener("click", () => {
    popupBackground.remove();
  });

  const button = document.createElement("button");
  button.textContent = "Yes";
  button.addEventListener("click", () => {
    (0,_todoManagement__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(deletedTodo);
    popupBackground.remove();
  });

  popup.appendChild(title);
  popup.appendChild(subtitle);
  popup.appendChild(button);
  popup.appendChild(quit);
  popupBackground.appendChild(popup);
  document.body.appendChild(popupBackground);
  popupBackground.classList = "popup-background";
  popup.classList = "popup delete-popup";
  quit.classList = "popup-button";
}


/***/ }),

/***/ "./src/editTodo.js":
/*!*************************!*\
  !*** ./src/editTodo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateTodo: () => (/* binding */ updateTodo),
/* harmony export */   updateTodoPopup: () => (/* binding */ updateTodoPopup)
/* harmony export */ });
/* harmony import */ var _toDoClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoClass */ "./src/toDoClass.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _generateTodos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateTodos.js */ "./src/generateTodos.js");



function updateTodo(todo, title, description, dueDate, priority) {
  todo.title = title;
  todo.description = description;
  todo.dueDate = dueDate;
  todo.priority = priority;
  (0,_generateTodos_js__WEBPACK_IMPORTED_MODULE_2__.generateTodos)();
}
function updateTodoPopup(todo) {
  const popupBackground = document.createElement("div");
  const popup = document.createElement("div");
  const popupTitle = document.createElement("h2");
  const popupSubtitle = document.createElement("h3");
  const form = document.createElement("form");
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.value = `${todo.title}`;
  form.appendChild(titleInput);

  // Create input for description
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.name = "description";
  descriptionInput.value = `${todo.description}`;
  descriptionInput.placeholder = "Description (optional & max 24 characters)";
  form.appendChild(descriptionInput);

  // Create input for due date
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  dueDateInput.value = `${todo.dueDate}`;
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
  prioritySelect.value = `${todo.priority}`;
  form.appendChild(prioritySelect);

  // Create submit button
  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Edit To-Do";
  submitButton.addEventListener("click", () => {
    event.preventDefault();
    let dueDate = new Date(dueDateInput.value);
    dueDate.setHours(0, 0, 0, 0);
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (dueDate < currentDate) {
      alert("Don't go back to the future!");
    } else if (titleInput.value.length > 30) {
      alert("Title must be 30 characters or less!");
    } else if (descriptionInput.value.length > 24) {
      alert("Description must be 24 characters or less!");
    } else {
      updateTodo(
        todo,
        titleInput.value,
        descriptionInput.value,
        dueDateInput.value,
        prioritySelect.value
      );
      popupBackground.remove();
      (0,_generateTodos_js__WEBPACK_IMPORTED_MODULE_2__.generateTodos)();
    }

    (0,_generateTodos_js__WEBPACK_IMPORTED_MODULE_2__.generateTodos)();
  });

  form.appendChild(submitButton);
  const popupButton = document.createElement("button");
  popupBackground.classList = "popup-background";
  popup.classList = "popup";
  popupTitle.textContent = "Edit To-Do";
  popupSubtitle.textContent = `${_index_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.name}`;

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
/* harmony import */ var _generateProjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateProjects.js */ "./src/generateProjects.js");




function generateInput(list) {
  const addProjectButton = document.querySelector("#add-button");

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
    (0,_generateProjects_js__WEBPACK_IMPORTED_MODULE_3__.generateProjects)();
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
/* harmony import */ var _today_week__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today-week */ "./src/today-week.js");



function generateNavbar(toDoList) {
  const projectsDiv = document.querySelector("#projects");
  projectsDiv.innerHTML = "";
  const addProjectButton = document.createElement("button");
  addProjectButton.id = "add-button";
  addProjectButton.classList = "project";
  addProjectButton.textContent = "+ Add Project";
  addProjectButton.addEventListener("click", () => (0,_generateInput__WEBPACK_IMPORTED_MODULE_0__.generateInput)(toDoList));
  projectsDiv.appendChild(addProjectButton);
  const todayButton = document.createElement("button");
  todayButton.id = "today-button";
  todayButton.classList = "project";
  todayButton.innerHTML = `<div><i class="fas fa-calendar-day"></i>Today</div>`;
  todayButton.addEventListener("click", () => {
    (0,_today_week__WEBPACK_IMPORTED_MODULE_2__.generateToday)();
  });
  projectsDiv.appendChild(todayButton);
  const weekButton = document.createElement("button");
  weekButton.id = "week-button";
  weekButton.classList = "project";
  weekButton.innerHTML = `<div><i class="fas fa-calendar-week"></i>Week</div>`;
  weekButton.addEventListener("click", () => {
    (0,_today_week__WEBPACK_IMPORTED_MODULE_2__.generateWeek)();
  });
  projectsDiv.appendChild(weekButton);
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
  titleInput.placeholder = "Title (max 30 characters)";
  form.appendChild(titleInput);

  // Create input for description
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.name = "description";
  descriptionInput.placeholder = "Description (optional & max 24 characters)";
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
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    let dueDate = new Date(dueDateInput.value);
    dueDate.setHours(0, 0, 0, 0);
    if (dueDate < currentDate) {
      alert("Don't go back to the future!");
    } else if (titleInput.value.length > 30) {
      alert("Title must be 30 characters or less!");
    } else if (descriptionInput.value.length > 24) {
      alert("Description must be 24 characters or less!");
    } else {
      (0,_addTodo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(
        titleInput.value,
        descriptionInput.value,
        dueDateInput.value,
        prioritySelect.value
      );
      popupBackground.remove();
      (0,_generateTodos__WEBPACK_IMPORTED_MODULE_1__.generateTodos)();
    }

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
/* harmony import */ var _projectManagement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManagement */ "./src/projectManagement.js");
/* harmony import */ var _generateNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateNavbar */ "./src/generateNavbar.js");






function generateProjects() {
  const projectsDiv = document.querySelector("#projects");
  projectsDiv.innerHTML = "";
  (0,_generateNavbar__WEBPACK_IMPORTED_MODULE_3__.generateNavbar)(_index__WEBPACK_IMPORTED_MODULE_0__.toDoList);
  _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.forEach((project, index) => {
    const projectDiv = document.createElement("div");
    projectDiv.textContent = project.name; // Set textContent here

    if (index > 0) {
      const projectsDelete = document.createElement("button");
      projectsDelete.style.opacity = "0%";
      projectsDelete.classList = "project-delete-button";
      projectsDelete.innerHTML = `<i class="fa fa-trash-o" style="font-size:1.25rem;"></i>`;
      projectDiv.appendChild(projectsDelete); // Append the delete button after setting textContent

      projectDiv.addEventListener("mouseover", () => {
        projectsDelete.style.opacity = "100%";
      });
      projectDiv.addEventListener("mouseout", () => {
        projectsDelete.style.opacity = "0%";
      });
      projectsDelete.addEventListener("click", (event) => {
        event.stopPropagation();
        (0,_projectManagement__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(project);
      });
    }

    if (index == 0) {
      projectDiv.classList = "project active";
    } else projectDiv.classList = "project";

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
/* harmony import */ var _todoManagement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoManagement.js */ "./src/todoManagement.js");
/* harmony import */ var _deletePopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deletePopup.js */ "./src/deletePopup.js");
/* harmony import */ var _editTodo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTodo.js */ "./src/editTodo.js");




function generateTodos() {
  const todoList = document.querySelector("#todo-list");

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

    const todoDiv = document.createElement("div");

    const todoTitle = document.createElement("h3");
    todoTitle.textContent = todo.title;
    todoDiv.appendChild(todoTitle);

    // if (todo.description) {
    const todoDesc = document.createElement("p");
    todoDesc.textContent = todo.description;
    todoDiv.appendChild(todoDesc);
    // }

    const todoDate = document.createElement("p");
    todoDate.textContent = todo.dueDate;

    todoDiv.style.border = `3px solid ${borderColor}`;

    todoDiv.appendChild(todoDate);

    const editButton = document.createElement("button");
    editButton.classList = "todo-button edit-button";
    editButton.innerHTML =
      '<i class="fa fa-edit" style="font-size:1.5rem;"></i>';

    editButton.addEventListener("click", () => (0,_editTodo_js__WEBPACK_IMPORTED_MODULE_3__.updateTodoPopup)(todo));

    todoDiv.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList = "todo-button delete-button";
    deleteButton.innerHTML = `<i class="fa fa-trash-o" style="font-size:1.5rem;"></i>`;
    deleteButton.addEventListener("click", () => {
      (0,_deletePopup_js__WEBPACK_IMPORTED_MODULE_2__.deletePopup)(todo);
    });

    todoDiv.appendChild(deleteButton);

    const finishedButton = document.createElement("button");
    finishedButton.classList = "todo-button finished-button";
    finishedButton.innerHTML = '<i class="gg-check"></i>';
    finishedButton.addEventListener("click", () => {
      (0,_todoManagement_js__WEBPACK_IMPORTED_MODULE_1__.finishTodo)(todo);
    });
    todoDiv.appendChild(finishedButton);

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
/* harmony import */ var _generateProjects_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generateProjects.js */ "./src/generateProjects.js");
/* harmony import */ var _activitylog_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./activitylog.js */ "./src/activitylog.js");










const toDoList = new _toDoList_js__WEBPACK_IMPORTED_MODULE_1__.ToDoList();

(0,_webstorage_js__WEBPACK_IMPORTED_MODULE_7__.loadStorage)();
(0,_generateNavbar_js__WEBPACK_IMPORTED_MODULE_4__.generateNavbar)(toDoList);
(0,_generateProjects_js__WEBPACK_IMPORTED_MODULE_8__.generateProjects)(toDoList);
const state = {
  currentProject: toDoList.projects[0],
};
(0,_generateTodos_js__WEBPACK_IMPORTED_MODULE_6__.generateTodos)();

const addToDoButton = document.querySelector(".add-todo");
addToDoButton.addEventListener("click", _generatePopup_js__WEBPACK_IMPORTED_MODULE_5__.generatePopup);

const activityLog = document.querySelector(".activity-log-button");
activityLog.addEventListener("click", () => {
  (0,_activitylog_js__WEBPACK_IMPORTED_MODULE_9__.generateActivityLog)();
});
(0,_webstorage_js__WEBPACK_IMPORTED_MODULE_7__.saveData)();


/***/ }),

/***/ "./src/projectManagement.js":
/*!**********************************!*\
  !*** ./src/projectManagement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProject: () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _generateProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateProjects */ "./src/generateProjects.js");
/* harmony import */ var _generateTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateTodos */ "./src/generateTodos.js");
/* harmony import */ var _webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webstorage */ "./src/webstorage.js");





function deleteProject(project) {
  if (project.name !== "general ") {
    _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects = _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.filter(
      (projectName) => project !== projectName
    );

    _index__WEBPACK_IMPORTED_MODULE_0__.state.currentProject = _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects[0];

    (0,_generateProjects__WEBPACK_IMPORTED_MODULE_1__.generateProjects)();
    (0,_generateTodos__WEBPACK_IMPORTED_MODULE_2__.generateTodos)();
    (0,_webstorage__WEBPACK_IMPORTED_MODULE_3__.saveData)();
  }
}


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
    this.activityLog = [];
  }
  addProject(name) {
    this.projects.push(new _toDoProject_js__WEBPACK_IMPORTED_MODULE_0__.Project(name));
  }
  addActivityLog(message, time) {
    this.activityLog.push([message, time]);
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

/***/ "./src/today-week.js":
/*!***************************!*\
  !*** ./src/today-week.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateToday: () => (/* binding */ generateToday),
/* harmony export */   generateWeek: () => (/* binding */ generateWeek)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _todoManagement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoManagement.js */ "./src/todoManagement.js");
/* harmony import */ var _deletePopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deletePopup.js */ "./src/deletePopup.js");
/* harmony import */ var _editTodo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTodo.js */ "./src/editTodo.js");






function generateToday() {
  const todayTodos = [];
  const today = new Date().toDateString();
  _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.forEach((project) => {
    const todos = project.todos.filter((todo) => {
      return new Date(todo.dueDate).toDateString() === today;
    });
    todayTodos.push(todos);
  });

  const todayTodosFlat = todayTodos.flat();
  generateTodos2(todayTodosFlat);
}

function generateWeek() {
  const weekTodos = [];
  const now = new Date();
  const todayDayOfWeek = now.getDay();
  const daysUntilEndOfNextWeek = 13 - todayDayOfWeek;
  now.setHours(0, 0, 0, 0);

  const nextWeek = new Date(now);
  nextWeek.setDate(now.getDate() + daysUntilEndOfNextWeek);
  nextWeek.setHours(0, 0, 0, 0);
  nextWeek.setDate(now.getDate() + 7);
  _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.forEach((project) => {
    const todos = project.todos.filter((todo) => {
      const dueDate = new Date(todo.dueDate);
      return dueDate >= now && dueDate <= nextWeek;
    });
    weekTodos.push(todos);
  });

  const weekTodosFlat = weekTodos.flat();
  generateTodos2(weekTodosFlat);
}

function generateTodos2(list) {
  const todoList = document.querySelector("#todo-list");
  todoList.innerHTML = "";
  list.forEach((todo) => {
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

    const todoDiv = document.createElement("div");

    const todoTitle = document.createElement("h3");
    todoTitle.textContent = todo.title;
    todoDiv.appendChild(todoTitle);

    // if (todo.description) {
    const todoDesc = document.createElement("p");
    todoDesc.textContent = todo.description;
    todoDiv.appendChild(todoDesc);
    // }

    const todoDate = document.createElement("p");
    todoDate.textContent = todo.dueDate;

    todoDiv.style.border = `3px solid ${borderColor}`;

    todoDiv.appendChild(todoDate);

    const editButton = document.createElement("button");
    editButton.classList = "todo-button edit-button";
    editButton.innerHTML =
      '<i class="fa fa-edit" style="font-size:1.5rem;"></i>';

    editButton.addEventListener("click", () => (0,_editTodo_js__WEBPACK_IMPORTED_MODULE_3__.updateTodoPopup)(todo));

    todoDiv.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList = "todo-button delete-button";
    deleteButton.innerHTML = `<i class="fa fa-trash-o" style="font-size:1.5rem;"></i>`;
    deleteButton.addEventListener("click", () => {
      (0,_deletePopup_js__WEBPACK_IMPORTED_MODULE_2__.deletePopup)(todo);
    });

    todoDiv.appendChild(deleteButton);

    const finishedButton = document.createElement("button");
    finishedButton.classList = "todo-button finished-button";
    finishedButton.innerHTML = '<i class="gg-check"></i>';
    finishedButton.addEventListener("click", () => {
      (0,_todoManagement_js__WEBPACK_IMPORTED_MODULE_1__.finishTodo)(todo);
    });
    todoDiv.appendChild(finishedButton);

    todoList.appendChild(todoDiv);
  });
}


/***/ }),

/***/ "./src/todoManagement.js":
/*!*******************************!*\
  !*** ./src/todoManagement.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   finishTodo: () => (/* binding */ finishTodo)
/* harmony export */ });
/* harmony import */ var _generateTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateTodos */ "./src/generateTodos.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webstorage */ "./src/webstorage.js");




function finishTodo(finishedTodo) {
  const currentTime = new Date().toLocaleString();
  _index__WEBPACK_IMPORTED_MODULE_1__.toDoList.addActivityLog(finishedTodo, currentTime);
  _index__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.todos = _index__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.todos.filter((todo) => {
    return todo != finishedTodo;
  });

  (0,_generateTodos__WEBPACK_IMPORTED_MODULE_0__.generateTodos)();
  (0,_webstorage__WEBPACK_IMPORTED_MODULE_2__.saveData)();
}

function deleteTodo(deletedTodo) {
  _index__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.todos = _index__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.todos.filter((todo) => {
    return todo != deletedTodo;
  });
  (0,_generateTodos__WEBPACK_IMPORTED_MODULE_0__.generateTodos)();
  (0,_webstorage__WEBPACK_IMPORTED_MODULE_2__.saveData)();
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
}

function loadStorage() {
  let storedData = localStorage.getItem("toDoList");
  if (storedData) {
    let parsedData = JSON.parse(storedData);
    _index_js__WEBPACK_IMPORTED_MODULE_2__.toDoList.activityLog = parsedData.activityLog;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1IQUFtSCxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssYUFBYSxhQUFhLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxhQUFhLGFBQWEsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxhQUFhLGFBQWEsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcs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QUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2FjdGl2aXR5bG9nLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9hZGRUb2RvLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9kZWxldGVQb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZWRpdFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2dlbmVyYXRlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2dlbmVyYXRlTmF2YmFyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9nZW5lcmF0ZVBvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9nZW5lcmF0ZVByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9nZW5lcmF0ZVRvZG9zLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdE1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3RvRG9DbGFzcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3RvRG9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90b2RheS13ZWVrLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90b2RvTWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvd2Vic3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBoZWlnaHQ6IDEwMHN2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5ib2R5IGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJvZHkgI2FwcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuYm9keSAjYXBwIGhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIGdyaWQtYXJlYTogMS8xLzIvMTM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5ib2R5ICNhcHAgbmF2IHtcbiAgZ3JpZC1hcmVhOiAyLzEvMTMvMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuYm9keSAjYXBwIG5hdiAjcHJvamVjdHMtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cbmJvZHkgI2FwcCBuYXYgI3Byb2plY3RzIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyAucHJvamVjdCB7XG4gIGhlaWdodDogMzA7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYm9keSAjYXBwIG5hdiAjcHJvamVjdHMgLnByb2plY3QgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyAucHJvamVjdCBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyAucHJvamVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbn1cbmJvZHkgI2FwcCBtYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgZ3JpZC1hcmVhOiAyLzMvMTMvMTM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5ib2R5ICNhcHAgbWFpbiAubWFpbi13cmFwcGVyIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5ib2R5ICNhcHAgbWFpbiAubWFpbi13cmFwcGVyIC5idXR0b25zLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG59XG5ib2R5ICNhcHAgbWFpbiAubWFpbi13cmFwcGVyIC5idXR0b25zLW1haW4gYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmJvZHkgI2FwcCBtYWluIC5tYWluLXdyYXBwZXIgLmJ1dHRvbnMtbWFpbiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufVxuXG4jaW5wdXQtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDAuNXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuI2lucHV0LWZpZWxkIGlucHV0IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODU4NTg1O1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4jaW5wdXQtZmllbGQgI2J1dHRvbi13cmFwcGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4jaW5wdXQtZmllbGQgI2J1dHRvbi13cmFwcGVyIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICBmbGV4OiAxO1xuICBmb250LXdlaWdodDogODAwO1xufVxuI2lucHV0LWZpZWxkICNidXR0b24td3JhcHBlciA6bnRoLWNoaWxkKDEpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3ZmY3NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhZmZhYTtcbn1cbiNpbnB1dC1maWVsZCAjYnV0dG9uLXdyYXBwZXIgOm50aC1jaGlsZCgyKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjhiOGI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJlYmU7XG59XG5cbi5wb3B1cC1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3B1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGdhcDogMS41cmVtO1xufVxuLnBvcHVwIGgyLFxuLnBvcHVwIGgzIHtcbiAgbWFyZ2luOiAwO1xufVxuLnBvcHVwIGZvcm0ge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNXJlbTtcbn1cbi5wb3B1cCBmb3JtICoge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ucG9wdXAtYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jdG9kby1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDIuNXJlbTtcbn1cbiN0b2RvLWxpc3QgZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLWluLW91dDtcbn1cbiN0b2RvLWxpc3QgZGl2IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuI3RvZG8tbGlzdCBkaXYgcCB7XG4gIGhlaWdodDogNDBweDtcbn1cbiN0b2RvLWxpc3QgZGl2IGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN0b2RvLWxpc3QgZGl2IC5kZWxldGUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuI3RvZG8tbGlzdCBkaXYgLmRlbGV0ZS1idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4jdG9kby1saXN0IGRpdiAuZWRpdC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiN0b2RvLWxpc3QgZGl2IC5lZGl0LWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbiN0b2RvLWxpc3QgZGl2IC5maW5pc2hlZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICBhbmltYXRpb246IGVhc2UtaW4tb3V0IDAuMnM7XG59XG4jdG9kby1saXN0IGRpdiAuZmluaXNoZWQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzYwMDtcbn1cbiN0b2RvLWxpc3QgZGl2IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGVsZXRlLXBvcHVwIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG4uZGVsZXRlLXBvcHVwIDpudGgtY2hpbGQoMykge1xuICBwYWRkaW5nOiAxcmVtIDRyZW07XG59XG5cbi5hY3Rpdml0eS1sb2cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiA5MCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbn1cbi5hY3Rpdml0eS1sb2cgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYWN0aXZpdHktbG9nIC5hY3Rpdml0eSB7XG4gIG1pbi13aWR0aDogOTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hY3Rpdml0eS1sb2cgLmFjdGl2aXR5ICoge1xuICBtYXJnaW46IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUpBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURGO0FBRUU7RUFDRSxlQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQURKO0FB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LFFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQUROO0FBR0k7RUFDRSxxQkFBQTtBQUROO0FBR0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFETjtBQUdJO0VBQ0UscUJBQUE7QUFETjtBQUdJO0VBQ0UsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBRE47QUFHSTtFQUNFLHlCQUFBO0FBRE47QUFJSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGTjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7QUFJRTtFQUNFLGtCQUFBO0FBRko7O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBSUEsd0JBQUEsRUFBQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFORjtBQUNFO0VBQ0UsYUFBQTtBQUNKO0FBSUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRko7QUFHSTtFQUNFLFNBQUE7QUFETlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL3ZhcmlhYmxlc1xcXCI7XFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHN2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBidXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAjYXBwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIGhlYWRlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItaGVhZGVyO1xcbiAgICAgIGdyaWQtYXJlYTogMS8gMS8gMi8gMTM7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICB9XFxuICAgIG5hdiB7XFxuICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDEzIC8gMztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1uYXY7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAjcHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICAgIH1cXG4gICAgICAjcHJvamVjdHMge1xcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgICAgIH1cXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMXJlbTtcXG5cXG4gICAgICAgIC5wcm9qZWN0IHtcXG4gICAgICAgICAgaGVpZ2h0OiAzMDtcXG4gICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG5cXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAucHJvamVjdDpob3ZlciB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxuICAgICAgICB9XFxuICAgICAgICAuYWN0aXZlIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItYXBwO1xcbiAgICAgIGdyaWQtYXJlYTogMiAvIDMgLyAxMyAvIDEzO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICAubWFpbi13cmFwcGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICAgICAgLmJ1dHRvbnMtbWFpbiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG4jaW5wdXQtZmllbGQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGlucHV0IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGVuKHJnYig1NiwgNTYsIDU2KSwgMzAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcbiAgI2J1dHRvbi13cmFwcGVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICBmbGV4OiAxO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIH1cXG4gICAgOm50aC1jaGlsZCgxKSB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRidXR0b24tZ3JlZW4sIDEwJSk7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbi1ncmVlbjtcXG4gICAgfVxcbiAgICA6bnRoLWNoaWxkKDIpIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJGJ1dHRvbi1yZWQsIDEwJSk7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbi1yZWQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnBvcHVwLWJhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbiAgaDIsXFxuICBoMyB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIGZvcm0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgKiB7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG4ucG9wdXAtYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jdG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDIuNXJlbTtcXG4gIGRpdiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIGgzIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgfVxcbiAgICBwIHtcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIH1cXG4gICAgYnV0dG9uIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLmRlbGV0ZS1idXR0b24ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgcGFkZGluZzogMC43NXJlbTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG4gICAgLmRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgfVxcbiAgICAuZWRpdC1idXR0b24ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcbiAgICAuZWRpdC1idXR0b246aG92ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgfVxcbiAgICAuZmluaXNoZWQtYnV0dG9uIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgICB3aWR0aDogODAlO1xcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgIGFuaW1hdGlvbjogZWFzZS1pbi1vdXQgMC4ycztcXG4gICAgfVxcbiAgICAuZmluaXNoZWQtYnV0dG9uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiBncmVlbiwgJGFtb3VudDogMiUpO1xcbiAgICB9XFxuXFxuICAgIGRpdiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gIH1cXG59XFxuLmRlbGV0ZS1wb3B1cCB7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIDpudGgtY2hpbGQoMykge1xcbiAgICBwYWRkaW5nOiAxcmVtIDRyZW07XFxuICB9XFxufVxcbi5hY3Rpdml0eS1sb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcXG4gIC5hY3Rpdml0eSB7XFxuICAgIG1pbi13aWR0aDogOTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgKiB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiJGJhY2tncm91bmQtY29sb3ItYXBwOiAjZWVlZWVlO1xcbiRiYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcjogIzM0MzQzNDtcXG4kYmFja2dyb3VuZC1jb2xvci1uYXY6ICNkZGRkZGQ7XFxuJGJ1dHRvbi1ncmVlbjogI2FhZmZhYTtcXG4kYnV0dG9uLXJlZDogI2ZmYmViZTtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0b0RvTGlzdCB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuL3dlYnN0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQWN0aXZpdHlMb2coKSB7XG4gIGNvbnN0IHBvcHVwQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBvcHVwQmFja2dyb3VuZC5jbGFzc0xpc3QgPSBcInBvcHVwLWJhY2tncm91bmRcIjtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwb3B1cC5jbGFzc0xpc3QgPSBcInBvcHVwXCI7XG4gIHBvcHVwLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJmbGV4LXN0YXJ0XCI7XG4gIHBvcHVwLnN0eWxlLnBhZGRpbmcgPSBcIjJyZW1cIjtcbiAgcG9wdXBCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cbiAgcG9wdXAuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQWN0aXZpdHkgTG9nXCI7XG4gIGNvbnN0IHF1aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBxdWl0LmNsYXNzTGlzdCA9IFwicG9wdXAtYnV0dG9uXCI7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHF1aXQpO1xuICBxdWl0LnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIHF1aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwb3B1cEJhY2tncm91bmQucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvZy5jbGFzc0xpc3QgPSBcImFjdGl2aXR5LWxvZ1wiO1xuICBwb3B1cC5hcHBlbmRDaGlsZChsb2cpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBvcHVwLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2xlYXJcIjtcbiAgYnV0dG9uLnN0eWxlLm1hcmdpblRvcCA9IFwiYXV0b1wiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b0RvTGlzdC5hY3Rpdml0eUxvZyA9IFtdO1xuICAgIHBvcHVwQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgICBzYXZlRGF0YSgpO1xuICB9KTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwQmFja2dyb3VuZCk7XG4gIGdlbmVyYXRlQWN0aXZpdGllcygpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUFjdGl2aXRpZXMoKSB7XG4gIGxldCBib3JkZXJDb2xvcjtcblxuICBjb25zdCBsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2aXR5LWxvZ1wiKTtcbiAgbG9nLmlubmVySFRNTCA9IFwiXCI7XG4gIHRvRG9MaXN0LmFjdGl2aXR5TG9nLmZvckVhY2goKGFjdGl2aXR5KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpdml0eVswXS5wcmlvcml0eSkge1xuICAgICAgY2FzZSBcImxvd1wiOlxuICAgICAgICBib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICBib3JkZXJDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgfVxuICAgIGNvbnN0IGFjdGl2aXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhY3Rpdml0eURpdi5zdHlsZS5ib3JkZXIgPSBgM3B4IHNvbGlkICR7Ym9yZGVyQ29sb3J9YDtcbiAgICBhY3Rpdml0eURpdi5jbGFzc0xpc3QgPSBcImFjdGl2aXR5XCI7XG4gICAgYWN0aXZpdHlEaXYuaW5uZXJIVE1MID0gYDxoMz5GaW5pc2hlZCB0b2RvOjwvaDM+ICR7YWN0aXZpdHlbMF0udGl0bGV9YDtcbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlRGl2LmlubmVySFRNTCA9IGA8aDQ+b248L2g0PiAke2FjdGl2aXR5WzFdfWA7XG4gICAgYWN0aXZpdHlEaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG4gICAgbG9nLmFwcGVuZENoaWxkKGFjdGl2aXR5RGl2KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBzdGF0ZSwgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi93ZWJzdG9yYWdlXCI7XG5leHBvcnQgZnVuY3Rpb24gYWRkVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IHByb2plY3QgPSB0b0RvTGlzdC5wcm9qZWN0cy5maW5kKFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT0gc3RhdGUuY3VycmVudFByb2plY3QubmFtZVxuICApO1xuXG4gIHByb2plY3QuYWRkVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcblxuICBzYXZlRGF0YSgpO1xufVxuIiwiaW1wb3J0IHsgZGVsZXRlVG9kbyB9IGZyb20gXCIuL3RvZG9NYW5hZ2VtZW50XCI7XG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUG9wdXAoZGVsZXRlZFRvZG8pIHtcbiAgY29uc3QgcG9wdXBCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFyZSB5b3Ugc3VyZT9cIjtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiRGVsZXRpbmcgdG9kbyBpcyBpcnJldmVyc2FibGVcIjtcblxuICBjb25zdCBxdWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcXVpdC50ZXh0Q29udGVudCA9IFwieFwiO1xuICBxdWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcG9wdXBCYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlllc1wiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkZWxldGVUb2RvKGRlbGV0ZWRUb2RvKTtcbiAgICBwb3B1cEJhY2tncm91bmQucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHBvcHVwLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChidXR0b24pO1xuICBwb3B1cC5hcHBlbmRDaGlsZChxdWl0KTtcbiAgcG9wdXBCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cEJhY2tncm91bmQpO1xuICBwb3B1cEJhY2tncm91bmQuY2xhc3NMaXN0ID0gXCJwb3B1cC1iYWNrZ3JvdW5kXCI7XG4gIHBvcHVwLmNsYXNzTGlzdCA9IFwicG9wdXAgZGVsZXRlLXBvcHVwXCI7XG4gIHF1aXQuY2xhc3NMaXN0ID0gXCJwb3B1cC1idXR0b25cIjtcbn1cbiIsImltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi90b0RvQ2xhc3NcIjtcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlVG9kb3MgfSBmcm9tIFwiLi9nZW5lcmF0ZVRvZG9zLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG9kbyh0b2RvLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIHRvZG8udGl0bGUgPSB0aXRsZTtcbiAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0b2RvLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0b2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIGdlbmVyYXRlVG9kb3MoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb2RvUG9wdXAodG9kbykge1xuICBjb25zdCBwb3B1cEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBvcHVwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHBvcHVwU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHRpdGxlSW5wdXQubmFtZSA9IFwidGl0bGVcIjtcbiAgdGl0bGVJbnB1dC52YWx1ZSA9IGAke3RvZG8udGl0bGV9YDtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAvLyBDcmVhdGUgaW5wdXQgZm9yIGRlc2NyaXB0aW9uXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBgJHt0b2RvLmRlc2NyaXB0aW9ufWA7XG4gIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uIChvcHRpb25hbCAmIG1heCAyNCBjaGFyYWN0ZXJzKVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIC8vIENyZWF0ZSBpbnB1dCBmb3IgZHVlIGRhdGVcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICBkdWVEYXRlSW5wdXQubmFtZSA9IFwiZHVlRGF0ZVwiO1xuICBkdWVEYXRlSW5wdXQudmFsdWUgPSBgJHt0b2RvLmR1ZURhdGV9YDtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gIC8vIENyZWF0ZSBzZWxlY3QgZm9yIHByaW9yaXR5XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHlTZWxlY3QubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgY29uc3QgcHJpb3JpdGllcyA9IFtcImxvd1wiLCBcIm1lZGl1bVwiLCBcImhpZ2hcIl07XG4gIHByaW9yaXRpZXMuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5O1xuICAgIG9wdGlvbi50ZXh0ID0gcHJpb3JpdHk7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG4gIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gYCR7dG9kby5wcmlvcml0eX1gO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcblxuICAvLyBDcmVhdGUgc3VibWl0IGJ1dHRvblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCJFZGl0IFRvLURvXCI7XG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGR1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlSW5wdXQudmFsdWUpO1xuICAgIGR1ZURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjdXJyZW50RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBpZiAoZHVlRGF0ZSA8IGN1cnJlbnREYXRlKSB7XG4gICAgICBhbGVydChcIkRvbid0IGdvIGJhY2sgdG8gdGhlIGZ1dHVyZSFcIik7XG4gICAgfSBlbHNlIGlmICh0aXRsZUlucHV0LnZhbHVlLmxlbmd0aCA+IDMwKSB7XG4gICAgICBhbGVydChcIlRpdGxlIG11c3QgYmUgMzAgY2hhcmFjdGVycyBvciBsZXNzIVwiKTtcbiAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uSW5wdXQudmFsdWUubGVuZ3RoID4gMjQpIHtcbiAgICAgIGFsZXJ0KFwiRGVzY3JpcHRpb24gbXVzdCBiZSAyNCBjaGFyYWN0ZXJzIG9yIGxlc3MhXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVUb2RvKFxuICAgICAgICB0b2RvLFxuICAgICAgICB0aXRsZUlucHV0LnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlXG4gICAgICApO1xuICAgICAgcG9wdXBCYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICAgICAgZ2VuZXJhdGVUb2RvcygpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlVG9kb3MoKTtcbiAgfSk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICBjb25zdCBwb3B1cEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBvcHVwQmFja2dyb3VuZC5jbGFzc0xpc3QgPSBcInBvcHVwLWJhY2tncm91bmRcIjtcbiAgcG9wdXAuY2xhc3NMaXN0ID0gXCJwb3B1cFwiO1xuICBwb3B1cFRpdGxlLnRleHRDb250ZW50ID0gXCJFZGl0IFRvLURvXCI7XG4gIHBvcHVwU3VidGl0bGUudGV4dENvbnRlbnQgPSBgJHtzdGF0ZS5jdXJyZW50UHJvamVjdC5uYW1lfWA7XG5cbiAgcG9wdXBCdXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgcG9wdXBCdXR0b24uY2xhc3NMaXN0ID0gXCJwb3B1cC1idXR0b25cIjtcbiAgcG9wdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwb3B1cEJhY2tncm91bmQucmVtb3ZlKCk7XG4gIH0pO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFRpdGxlKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBTdWJ0aXRsZSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKGZvcm0pO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEJ1dHRvbik7XG4gIHBvcHVwQmFja2dyb3VuZC5hcHBlbmRDaGlsZChwb3B1cCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXBCYWNrZ3JvdW5kKTtcbn1cbiIsImltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlTmF2YmFyIH0gZnJvbSBcIi4vZ2VuZXJhdGVOYXZiYXIuanNcIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vd2Vic3RvcmFnZS5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVQcm9qZWN0cyB9IGZyb20gXCIuL2dlbmVyYXRlUHJvamVjdHMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUlucHV0KGxpc3QpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWJ1dHRvblwiKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlucHV0LmlkID0gXCJpbnB1dC1maWVsZFwiO1xuICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dEZpZWxkLnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IG5hbWVcIjtcblxuICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uV3JhcHBlci5pZCA9IFwiYnV0dG9uLXdyYXBwZXJcIjtcblxuICBjb25zdCBpbnB1dENvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBpbnB1dENvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIjtcbiAgaW5wdXRDb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBpbnB1dEZpZWxkLnZhbHVlO1xuICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgbGlzdC5hZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgIHNhdmVEYXRhKCk7XG4gICAgfVxuICAgIGdlbmVyYXRlTmF2YmFyKGxpc3QpO1xuICAgIGdlbmVyYXRlUHJvamVjdHMoKTtcbiAgfSk7XG5cbiAgY29uc3QgaW5wdXRDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBpbnB1dENhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGlucHV0Q2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaW5wdXQucmVwbGFjZVdpdGgoYWRkUHJvamVjdEJ1dHRvbik7XG4gIH0pO1xuXG4gIGlucHV0LmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xuICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGlucHV0Q29uZmlybUJ1dHRvbik7XG4gIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXRDYW5jZWxCdXR0b24pO1xuICBpbnB1dC5hcHBlbmRDaGlsZChidXR0b25XcmFwcGVyKTtcblxuICBhZGRQcm9qZWN0QnV0dG9uLnJlcGxhY2VXaXRoKGlucHV0KTtcbn1cbiIsImltcG9ydCB7IGdlbmVyYXRlSW5wdXQgfSBmcm9tIFwiLi9nZW5lcmF0ZUlucHV0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVByb2plY3RzIH0gZnJvbSBcIi4vZ2VuZXJhdGVQcm9qZWN0c1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb2RheSwgZ2VuZXJhdGVXZWVrIH0gZnJvbSBcIi4vdG9kYXktd2Vla1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTmF2YmFyKHRvRG9MaXN0KSB7XG4gIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcbiAgcHJvamVjdHNEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdXR0b24uaWQgPSBcImFkZC1idXR0b25cIjtcbiAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QgPSBcInByb2plY3RcIjtcbiAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBBZGQgUHJvamVjdFwiO1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBnZW5lcmF0ZUlucHV0KHRvRG9MaXN0KSk7XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICBjb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRvZGF5QnV0dG9uLmlkID0gXCJ0b2RheS1idXR0b25cIjtcbiAgdG9kYXlCdXR0b24uY2xhc3NMaXN0ID0gXCJwcm9qZWN0XCI7XG4gIHRvZGF5QnV0dG9uLmlubmVySFRNTCA9IGA8ZGl2PjxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWRheVwiPjwvaT5Ub2RheTwvZGl2PmA7XG4gIHRvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ2VuZXJhdGVUb2RheSgpO1xuICB9KTtcbiAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQodG9kYXlCdXR0b24pO1xuICBjb25zdCB3ZWVrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgd2Vla0J1dHRvbi5pZCA9IFwid2Vlay1idXR0b25cIjtcbiAgd2Vla0J1dHRvbi5jbGFzc0xpc3QgPSBcInByb2plY3RcIjtcbiAgd2Vla0J1dHRvbi5pbm5lckhUTUwgPSBgPGRpdj48aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci13ZWVrXCI+PC9pPldlZWs8L2Rpdj5gO1xuICB3ZWVrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ2VuZXJhdGVXZWVrKCk7XG4gIH0pO1xuICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZCh3ZWVrQnV0dG9uKTtcbn1cbiIsImltcG9ydCB7IGFkZFRvRG8gfSBmcm9tIFwiLi9hZGRUb2RvXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRvZG9zIH0gZnJvbSBcIi4vZ2VuZXJhdGVUb2Rvc1wiO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9pbmRleFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUG9wdXAoKSB7XG4gIGNvbnN0IHBvcHVwQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcG9wdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgcG9wdXBTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgdGl0bGVJbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUaXRsZSAobWF4IDMwIGNoYXJhY3RlcnMpXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgLy8gQ3JlYXRlIGlucHV0IGZvciBkZXNjcmlwdGlvblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvbiAob3B0aW9uYWwgJiBtYXggMjQgY2hhcmFjdGVycylcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAvLyBDcmVhdGUgaW5wdXQgZm9yIGR1ZSBkYXRlXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gIC8vIENyZWF0ZSBzZWxlY3QgZm9yIHByaW9yaXR5XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHlTZWxlY3QubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgY29uc3QgcHJpb3JpdGllcyA9IFtcImxvd1wiLCBcIm1lZGl1bVwiLCBcImhpZ2hcIl07XG4gIHByaW9yaXRpZXMuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5O1xuICAgIG9wdGlvbi50ZXh0ID0gcHJpb3JpdHk7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuXG4gIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIkFkZCBUby1Eb1wiO1xuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjdXJyZW50RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBsZXQgZHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGVJbnB1dC52YWx1ZSk7XG4gICAgZHVlRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBpZiAoZHVlRGF0ZSA8IGN1cnJlbnREYXRlKSB7XG4gICAgICBhbGVydChcIkRvbid0IGdvIGJhY2sgdG8gdGhlIGZ1dHVyZSFcIik7XG4gICAgfSBlbHNlIGlmICh0aXRsZUlucHV0LnZhbHVlLmxlbmd0aCA+IDMwKSB7XG4gICAgICBhbGVydChcIlRpdGxlIG11c3QgYmUgMzAgY2hhcmFjdGVycyBvciBsZXNzIVwiKTtcbiAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uSW5wdXQudmFsdWUubGVuZ3RoID4gMjQpIHtcbiAgICAgIGFsZXJ0KFwiRGVzY3JpcHRpb24gbXVzdCBiZSAyNCBjaGFyYWN0ZXJzIG9yIGxlc3MhXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRUb0RvKFxuICAgICAgICB0aXRsZUlucHV0LnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlXG4gICAgICApO1xuICAgICAgcG9wdXBCYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICAgICAgZ2VuZXJhdGVUb2RvcygpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlVG9kb3MoKTtcbiAgfSk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICBjb25zdCBwb3B1cEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBvcHVwQmFja2dyb3VuZC5jbGFzc0xpc3QgPSBcInBvcHVwLWJhY2tncm91bmRcIjtcbiAgcG9wdXAuY2xhc3NMaXN0ID0gXCJwb3B1cFwiO1xuICBwb3B1cFRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgVG8tRG9cIjtcbiAgcG9wdXBTdWJ0aXRsZS50ZXh0Q29udGVudCA9IGAke3N0YXRlLmN1cnJlbnRQcm9qZWN0Lm5hbWV9YDtcblxuICBwb3B1cEJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuICBwb3B1cEJ1dHRvbi5jbGFzc0xpc3QgPSBcInBvcHVwLWJ1dHRvblwiO1xuICBwb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBvcHVwQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgfSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVGl0bGUpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFN1YnRpdGxlKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQnV0dG9uKTtcbiAgcG9wdXBCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cEJhY2tncm91bmQpO1xufVxuIiwiaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb2RvcyB9IGZyb20gXCIuL2dlbmVyYXRlVG9kb3NcIjtcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlbWVudFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVOYXZiYXIgfSBmcm9tIFwiLi9nZW5lcmF0ZU5hdmJhclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0cygpIHtcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICBwcm9qZWN0c0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuICBnZW5lcmF0ZU5hdmJhcih0b0RvTGlzdCk7XG4gIHRvRG9MaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTsgLy8gU2V0IHRleHRDb250ZW50IGhlcmVcblxuICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgIGNvbnN0IHByb2plY3RzRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHByb2plY3RzRGVsZXRlLnN0eWxlLm9wYWNpdHkgPSBcIjAlXCI7XG4gICAgICBwcm9qZWN0c0RlbGV0ZS5jbGFzc0xpc3QgPSBcInByb2plY3QtZGVsZXRlLWJ1dHRvblwiO1xuICAgICAgcHJvamVjdHNEZWxldGUuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiIHN0eWxlPVwiZm9udC1zaXplOjEuMjVyZW07XCI+PC9pPmA7XG4gICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RzRGVsZXRlKTsgLy8gQXBwZW5kIHRoZSBkZWxldGUgYnV0dG9uIGFmdGVyIHNldHRpbmcgdGV4dENvbnRlbnRcblxuICAgICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdHNEZWxldGUuc3R5bGUub3BhY2l0eSA9IFwiMTAwJVwiO1xuICAgICAgfSk7XG4gICAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RzRGVsZXRlLnN0eWxlLm9wYWNpdHkgPSBcIjAlXCI7XG4gICAgICB9KTtcbiAgICAgIHByb2plY3RzRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QgPSBcInByb2plY3QgYWN0aXZlXCI7XG4gICAgfSBlbHNlIHByb2plY3REaXYuY2xhc3NMaXN0ID0gXCJwcm9qZWN0XCI7XG5cbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0c0Rpdi5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0ID0gdG9Eb0xpc3QucHJvamVjdHMuZmluZChcbiAgICAgICAgKHByb2plY3ROYW1lKSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lLm5hbWVcbiAgICAgICk7XG4gICAgICBnZW5lcmF0ZVRvZG9zKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZmluaXNoVG9kbyB9IGZyb20gXCIuL3RvZG9NYW5hZ2VtZW50LmpzXCI7XG5pbXBvcnQgeyBkZWxldGVQb3B1cCB9IGZyb20gXCIuL2RlbGV0ZVBvcHVwLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVUb2RvUG9wdXAgfSBmcm9tIFwiLi9lZGl0VG9kby5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVG9kb3MoKSB7XG4gIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWxpc3RcIik7XG5cbiAgdG9kb0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgc3RhdGUuY3VycmVudFByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGxldCBib3JkZXJDb2xvcjtcbiAgICBzd2l0Y2ggKHRvZG8ucHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICBib3JkZXJDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJibGFja1wiO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gICAgLy8gaWYgKHRvZG8uZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9EZXNjLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjKTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuXG4gICAgdG9kb0Rpdi5zdHlsZS5ib3JkZXIgPSBgM3B4IHNvbGlkICR7Ym9yZGVyQ29sb3J9YDtcblxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QgPSBcInRvZG8tYnV0dG9uIGVkaXQtYnV0dG9uXCI7XG4gICAgZWRpdEJ1dHRvbi5pbm5lckhUTUwgPVxuICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiIHN0eWxlPVwiZm9udC1zaXplOjEuNXJlbTtcIj48L2k+JztcblxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHVwZGF0ZVRvZG9Qb3B1cCh0b2RvKSk7XG5cbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0ID0gXCJ0b2RvLWJ1dHRvbiBkZWxldGUtYnV0dG9uXCI7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIiBzdHlsZT1cImZvbnQtc2l6ZToxLjVyZW07XCI+PC9pPmA7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkZWxldGVQb3B1cCh0b2RvKTtcbiAgICB9KTtcblxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIGNvbnN0IGZpbmlzaGVkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmaW5pc2hlZEJ1dHRvbi5jbGFzc0xpc3QgPSBcInRvZG8tYnV0dG9uIGZpbmlzaGVkLWJ1dHRvblwiO1xuICAgIGZpbmlzaGVkQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImdnLWNoZWNrXCI+PC9pPic7XG4gICAgZmluaXNoZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGZpbmlzaFRvZG8odG9kbyk7XG4gICAgfSk7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChmaW5pc2hlZEJ1dHRvbik7XG5cbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IFRvRG9MaXN0IH0gZnJvbSBcIi4vdG9Eb0xpc3QuanNcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi90b0RvUHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL3RvRG9DbGFzcy5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVOYXZiYXIgfSBmcm9tIFwiLi9nZW5lcmF0ZU5hdmJhci5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVQb3B1cCB9IGZyb20gXCIuL2dlbmVyYXRlUG9wdXAuanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlVG9kb3MgfSBmcm9tIFwiLi9nZW5lcmF0ZVRvZG9zLmpzXCI7XG5pbXBvcnQgeyBsb2FkU3RvcmFnZSwgc2F2ZURhdGEgfSBmcm9tIFwiLi93ZWJzdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVByb2plY3RzIH0gZnJvbSBcIi4vZ2VuZXJhdGVQcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVBY3Rpdml0eUxvZyB9IGZyb20gXCIuL2FjdGl2aXR5bG9nLmpzXCI7XG5leHBvcnQgY29uc3QgdG9Eb0xpc3QgPSBuZXcgVG9Eb0xpc3QoKTtcblxubG9hZFN0b3JhZ2UoKTtcbmdlbmVyYXRlTmF2YmFyKHRvRG9MaXN0KTtcbmdlbmVyYXRlUHJvamVjdHModG9Eb0xpc3QpO1xuZXhwb3J0IGNvbnN0IHN0YXRlID0ge1xuICBjdXJyZW50UHJvamVjdDogdG9Eb0xpc3QucHJvamVjdHNbMF0sXG59O1xuZ2VuZXJhdGVUb2RvcygpO1xuXG5jb25zdCBhZGRUb0RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kb1wiKTtcbmFkZFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdlbmVyYXRlUG9wdXApO1xuXG5jb25zdCBhY3Rpdml0eUxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZpdHktbG9nLWJ1dHRvblwiKTtcbmFjdGl2aXR5TG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGdlbmVyYXRlQWN0aXZpdHlMb2coKTtcbn0pO1xuc2F2ZURhdGEoKTtcbiIsImltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGdlbmVyYXRlUHJvamVjdHMgfSBmcm9tIFwiLi9nZW5lcmF0ZVByb2plY3RzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRvZG9zIH0gZnJvbSBcIi4vZ2VuZXJhdGVUb2Rvc1wiO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi93ZWJzdG9yYWdlXCI7XG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG4gIGlmIChwcm9qZWN0Lm5hbWUgIT09IFwiZ2VuZXJhbCBcIikge1xuICAgIHRvRG9MaXN0LnByb2plY3RzID0gdG9Eb0xpc3QucHJvamVjdHMuZmlsdGVyKFxuICAgICAgKHByb2plY3ROYW1lKSA9PiBwcm9qZWN0ICE9PSBwcm9qZWN0TmFtZVxuICAgICk7XG5cbiAgICBzdGF0ZS5jdXJyZW50UHJvamVjdCA9IHRvRG9MaXN0LnByb2plY3RzWzBdO1xuXG4gICAgZ2VuZXJhdGVQcm9qZWN0cygpO1xuICAgIGdlbmVyYXRlVG9kb3MoKTtcbiAgICBzYXZlRGF0YSgpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAodGhpcy50aXRsZSA9IHRpdGxlKSxcbiAgICAgICh0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gfHwgXCJcIiksXG4gICAgICAodGhpcy5kdWVEYXRlID0gZHVlRGF0ZSksXG4gICAgICAodGhpcy5wcmlvcml0eSA9IHByaW9yaXR5KSxcbiAgICAgICh0aGlzLmZpbmlzaGVkID0gZmFsc2UpO1xuICB9XG4gIHVwZGF0ZVRpdGxlKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB9XG4gIHVwZGF0ZURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG4gIHVwZGF0ZUR1ZURhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cbiAgdXBkYXRlUHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbiAgdXBkYXRlTm90ZXMobm90ZXMpIHtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIH1cbiAgdG9nZ2xlRmluaXNoZWQoKSB7XG4gICAgdGhpcy5maW5pc2hlZCA9ICF0aGlzLmZpbmlzaGVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vdG9Eb1Byb2plY3QuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRvRG9MaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtuZXcgUHJvamVjdChcIkdlbmVyYWxcIildO1xuICAgIHRoaXMuYWN0aXZpdHlMb2cgPSBbXTtcbiAgfVxuICBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QobmFtZSkpO1xuICB9XG4gIGFkZEFjdGl2aXR5TG9nKG1lc3NhZ2UsIHRpbWUpIHtcbiAgICB0aGlzLmFjdGl2aXR5TG9nLnB1c2goW21lc3NhZ2UsIHRpbWVdKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL3RvRG9DbGFzcy5qc1wiO1xuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRhKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvZG9zID0gW10gfHwgZGF0YTtcbiAgfVxuICBhZGRUb0RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudG9kb3MucHVzaChuZXcgVG9Ebyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZmluaXNoVG9kbyB9IGZyb20gXCIuL3RvZG9NYW5hZ2VtZW50LmpzXCI7XG5pbXBvcnQgeyBkZWxldGVQb3B1cCB9IGZyb20gXCIuL2RlbGV0ZVBvcHVwLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVUb2RvUG9wdXAgfSBmcm9tIFwiLi9lZGl0VG9kby5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUb2RheSgpIHtcbiAgY29uc3QgdG9kYXlUb2RvcyA9IFtdO1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XG4gIHRvRG9MaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGUodG9kby5kdWVEYXRlKS50b0RhdGVTdHJpbmcoKSA9PT0gdG9kYXk7XG4gICAgfSk7XG4gICAgdG9kYXlUb2Rvcy5wdXNoKHRvZG9zKTtcbiAgfSk7XG5cbiAgY29uc3QgdG9kYXlUb2Rvc0ZsYXQgPSB0b2RheVRvZG9zLmZsYXQoKTtcbiAgZ2VuZXJhdGVUb2RvczIodG9kYXlUb2Rvc0ZsYXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVXZWVrKCkge1xuICBjb25zdCB3ZWVrVG9kb3MgPSBbXTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdG9kYXlEYXlPZldlZWsgPSBub3cuZ2V0RGF5KCk7XG4gIGNvbnN0IGRheXNVbnRpbEVuZE9mTmV4dFdlZWsgPSAxMyAtIHRvZGF5RGF5T2ZXZWVrO1xuICBub3cuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgY29uc3QgbmV4dFdlZWsgPSBuZXcgRGF0ZShub3cpO1xuICBuZXh0V2Vlay5zZXREYXRlKG5vdy5nZXREYXRlKCkgKyBkYXlzVW50aWxFbmRPZk5leHRXZWVrKTtcbiAgbmV4dFdlZWsuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIG5leHRXZWVrLnNldERhdGUobm93LmdldERhdGUoKSArIDcpO1xuICB0b0RvTGlzdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSk7XG4gICAgICByZXR1cm4gZHVlRGF0ZSA+PSBub3cgJiYgZHVlRGF0ZSA8PSBuZXh0V2VlaztcbiAgICB9KTtcbiAgICB3ZWVrVG9kb3MucHVzaCh0b2Rvcyk7XG4gIH0pO1xuXG4gIGNvbnN0IHdlZWtUb2Rvc0ZsYXQgPSB3ZWVrVG9kb3MuZmxhdCgpO1xuICBnZW5lcmF0ZVRvZG9zMih3ZWVrVG9kb3NGbGF0KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2RvczIobGlzdCkge1xuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0XCIpO1xuICB0b2RvTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICBsaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBsZXQgYm9yZGVyQ29sb3I7XG4gICAgc3dpdGNoICh0b2RvLnByaW9yaXR5KSB7XG4gICAgICBjYXNlIFwibG93XCI6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJncmVlblwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBib3JkZXJDb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcblxuICAgIC8vIGlmICh0b2RvLmRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvRGVzYy50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcblxuICAgIHRvZG9EaXYuc3R5bGUuYm9yZGVyID0gYDNweCBzb2xpZCAke2JvcmRlckNvbG9yfWA7XG5cbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0ID0gXCJ0b2RvLWJ1dHRvbiBlZGl0LWJ1dHRvblwiO1xuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID1cbiAgICAgICc8aSBjbGFzcz1cImZhIGZhLWVkaXRcIiBzdHlsZT1cImZvbnQtc2l6ZToxLjVyZW07XCI+PC9pPic7XG5cbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB1cGRhdGVUb2RvUG9wdXAodG9kbykpO1xuXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdCA9IFwidG9kby1idXR0b24gZGVsZXRlLWJ1dHRvblwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCIgc3R5bGU9XCJmb250LXNpemU6MS41cmVtO1wiPjwvaT5gO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGVsZXRlUG9wdXAodG9kbyk7XG4gICAgfSk7XG5cbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICBjb25zdCBmaW5pc2hlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZmluaXNoZWRCdXR0b24uY2xhc3NMaXN0ID0gXCJ0b2RvLWJ1dHRvbiBmaW5pc2hlZC1idXR0b25cIjtcbiAgICBmaW5pc2hlZEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJnZy1jaGVja1wiPjwvaT4nO1xuICAgIGZpbmlzaGVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBmaW5pc2hUb2RvKHRvZG8pO1xuICAgIH0pO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZmluaXNoZWRCdXR0b24pO1xuXG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVUb2RvcyB9IGZyb20gXCIuL2dlbmVyYXRlVG9kb3NcIjtcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vd2Vic3RvcmFnZVwiO1xuaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmlzaFRvZG8oZmluaXNoZWRUb2RvKSB7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuICB0b0RvTGlzdC5hZGRBY3Rpdml0eUxvZyhmaW5pc2hlZFRvZG8sIGN1cnJlbnRUaW1lKTtcbiAgc3RhdGUuY3VycmVudFByb2plY3QudG9kb3MgPSBzdGF0ZS5jdXJyZW50UHJvamVjdC50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICByZXR1cm4gdG9kbyAhPSBmaW5pc2hlZFRvZG87XG4gIH0pO1xuXG4gIGdlbmVyYXRlVG9kb3MoKTtcbiAgc2F2ZURhdGEoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG8oZGVsZXRlZFRvZG8pIHtcbiAgc3RhdGUuY3VycmVudFByb2plY3QudG9kb3MgPSBzdGF0ZS5jdXJyZW50UHJvamVjdC50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICByZXR1cm4gdG9kbyAhPSBkZWxldGVkVG9kbztcbiAgfSk7XG4gIGdlbmVyYXRlVG9kb3MoKTtcbiAgc2F2ZURhdGEoKTtcbn1cbiIsImltcG9ydCB7IGdlbmVyYXRlTmF2YmFyIH0gZnJvbSBcIi4vZ2VuZXJhdGVOYXZiYXIuanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlVG9kb3MgfSBmcm9tIFwiLi9nZW5lcmF0ZVRvZG9zLmpzXCI7XG5pbXBvcnQgeyB0b0RvTGlzdCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vdG9Eb0NsYXNzLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vdG9Eb1Byb2plY3QuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBzYXZlRGF0YSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvTGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0b0RvTGlzdCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFN0b3JhZ2UoKSB7XG4gIGxldCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvTGlzdFwiKTtcbiAgaWYgKHN0b3JlZERhdGEpIHtcbiAgICBsZXQgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2Uoc3RvcmVkRGF0YSk7XG4gICAgdG9Eb0xpc3QuYWN0aXZpdHlMb2cgPSBwYXJzZWREYXRhLmFjdGl2aXR5TG9nO1xuICAgIHRvRG9MaXN0LnByb2plY3RzID0gcGFyc2VkRGF0YS5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdC5uYW1lLCBwcm9qZWN0LnRvZG9zKTtcbiAgICAgIG5ld1Byb2plY3QudG9kb3MgPSBwcm9qZWN0LnRvZG9zLm1hcChcbiAgICAgICAgKHRvZG8pID0+XG4gICAgICAgICAgbmV3IFRvRG8odG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWVEYXRlLCB0b2RvLnByaW9yaXR5KVxuICAgICAgKTtcbiAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==