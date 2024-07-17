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
body #app nav #projects button:hover {
  background-color: #cccccc;
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
body #app main .add-todo:hover {
  background-color: #cccccc;
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
  flex-direction: column;
  padding: 1rem;
  width: 200px;
  height: 250px;
  border-radius: 0.5rem;
}
#todo-list div .delete-button {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 1rem;
  border: none;
  color: red;
}
#todo-list div .delete-button:hover {
  transform: scale(1.1);
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
  padding: 1rem 3rem;
  border: 1.5px solid black;
  border-radius: 0.5rem;
}`, "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/_variables.scss"],"names":[],"mappings":"AACA;EACE,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,UAAA;EACA,mJAAA;EAEA,eAAA;EACA,gBAAA;EACA,gBAAA;AADF;AAGE;EACE,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;AADJ;AAEI;EACE,yBCrBoB;EDsBpB,mBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;AAAN;AAEI;EACE,mBAAA;EACA,yBC9BiB;ED+BjB,iBAAA;EACA,aAAA;EACA,iBAAA;AAAN;AACM;EACE,oBAAA;AACR;AACM;EAIE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAFR;AAJQ;EACE,yBAAA;AAMV;AACQ;EACE,UAAA;EACA,aAAA;EACA,YAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AACV;AACQ;EACE,yBAAA;AACV;AACQ;EACE,yBAAA;AACV;AAII;EACE,yBCpEiB;EDqEjB,oBAAA;EACA,aAAA;EACA,sBAAA;AAFN;AAGM;EACE,yBAAA;AADR;AAIM;EACE,oBAAA;AAFR;AAGQ;EACE,SAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AADV;;AAOA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,WAAA;EACA,eAAA;AAJF;AAKE;EACE,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,qBAAA;EACA,UAAA;EACA,aAAA;AAHJ;AAKE;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,eAAA;AAHJ;AAII;EACE,YAAA;EACA,oBAAA;EACA,qBAAA;EACA,eAAA;EACA,sBAAA;EACA,OAAA;EACA,gBAAA;AAFN;AAII;EACE,yBAAA;EACA,yBCxHS;ADsHf;AAII;EACE,yBAAA;EACA,yBC3HO;ADyHb;;AAOA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EAEA,oCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AALF;;AAOA;EACE,kBAAA;EACA,uBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;AAJF;AAKE;;EAEE,SAAA;AAHJ;AAKE;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AAHJ;AAII;EACE,aAAA;AAFN;;AAMA;EACE,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;EACA,iBAAA;EACA,6BAAA;EACA,YAAA;EACA,iBAAA;AAHF;;AAKA;EACE,aAAA;EACA,SAAA;EACA,eAAA;EACA,uBAAA;EACA,2BAAA;EACA,eAAA;AAFF;AAGE;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,qBAAA;AADJ;AAGI;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;EACA,YAAA;EACA,UAAA;AADN;AAGI;EACE,qBAAA;AADN;AAII;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;AAFN;;AAMA;EACE,iBAAA;AAHF;AAIE;EACE,kBAAA;EACA,yBAAA;EACA,qBAAA;AAFJ","sourcesContent":["@import \"./variables\";\nbody {\n  height: 100svh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n\n  #app {\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(12, 1fr);\n    width: 100%;\n    height: 100%;\n    background-color: yellow;\n    header {\n      background-color: $background-color-header;\n      grid-area: 1/ 1/ 2/ 13;\n      color: white;\n      display: flex;\n      align-items: center;\n      font-size: 2rem;\n      padding-left: 2rem;\n    }\n    nav {\n      grid-area: 2 / 1 / 13 / 3;\n      background-color: $background-color-nav;\n      font-weight: bold;\n      padding: 1rem;\n      font-size: 1.5rem;\n      #projects-header {\n        padding-left: 0.5rem;\n      }\n      #projects {\n        button:hover {\n          background-color: #cccccc;\n        }\n        margin-top: 2rem;\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n\n        .project {\n          width: 80%;\n          padding: 1rem;\n          border: none;\n          background-color: transparent;\n          text-align: left;\n          cursor: pointer;\n          font-size: 1rem;\n          font-weight: 600;\n        }\n        .project:hover {\n          background-color: #cccccc;\n        }\n        .active {\n          background-color: #cccccc;\n        }\n      }\n    }\n\n    main {\n      background-color: $background-color-app;\n      grid-area: 2 / 3 / 13 / 13;\n      display: flex;\n      flex-direction: column;\n      .add-todo:hover {\n        background-color: #cccccc;\n      }\n\n      .main-wrapper {\n        padding: 0.5rem 1rem;\n        button {\n          border: 0;\n          cursor: pointer;\n          font-size: 1rem;\n          font-weight: 600;\n        }\n      }\n    }\n  }\n}\n#input-field {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  input {\n    align-self: center;\n    box-sizing: border-box;\n    border: 1px solid lighten(rgb(56, 56, 56), 30%);\n    border-radius: 0.2rem;\n    width: 90%;\n    padding: 1rem;\n  }\n  #button-wrapper {\n    align-self: center;\n    gap: 1rem;\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    button {\n      border: none;\n      padding: 0.7rem 1rem;\n      border-radius: 0.2rem;\n      cursor: pointer;\n      min-width: fit-content;\n      flex: 1;\n      font-weight: 800;\n    }\n    :nth-child(1) {\n      border: 1px solid darken($button-green, 10%);\n      background-color: $button-green;\n    }\n    :nth-child(2) {\n      border: 1px solid darken($button-red, 10%);\n      background-color: $button-red;\n    }\n  }\n}\n\n.popup-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.popup {\n  position: relative;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 600px;\n  height: 600px;\n  border-radius: 1rem;\n  gap: 1.5rem;\n  h2,\n  h3 {\n    margin: 0;\n  }\n  form {\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n    * {\n      padding: 1rem;\n    }\n  }\n}\n.popup-button {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  border: none;\n  font-size: 1.5rem;\n  background-color: transparent;\n  color: black;\n  font-weight: bold;\n}\n#todo-list {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n  padding: 2.5rem;\n  div {\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    width: 200px;\n    height: 250px;\n    border-radius: 0.5rem;\n\n    .delete-button {\n      position: absolute;\n      top: 5px;\n      right: 5px;\n      padding: 1rem;\n      border: none;\n      color: red;\n    }\n    .delete-button:hover {\n      transform: scale(1.1);\n    }\n\n    div {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n}\n.delete-popup {\n  font-size: larger;\n  :nth-child(3) {\n    padding: 1rem 3rem;\n    border: 1.5px solid black;\n    border-radius: 0.5rem;\n  }\n}\n","$background-color-app: #eeeeee;\n$background-color-header: #343434;\n$background-color-nav: #dddddd;\n$button-green: #aaffaa;\n$button-red: #ffbebe;\n"],"sourceRoot":""}]);
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
/* harmony import */ var _todoManagement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoManagement.js */ "./src/todoManagement.js");
/* harmony import */ var _deletePopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deletePopup.js */ "./src/deletePopup.js");



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

    const bottomButtons = document.createElement("div");

    const editButton = document.createElement("button");
    editButton.classList = "todo-button";
    editButton.textContent = "edit";
    bottomButtons.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList = "todo-button delete-button";
    deleteButton.innerHTML = `<i class="gg-trash"></i>`;
    deleteButton.addEventListener("click", () => {
      (0,_deletePopup_js__WEBPACK_IMPORTED_MODULE_2__.deletePopup)(todo);
    });

    todoDiv.appendChild(deleteButton);

    const finishedButton = document.createElement("button");
    finishedButton.classList = "todo-button";
    finishedButton.textContent = "finished";
    finishedButton.addEventListener("click", () => {
      console.log("Franiolo");
      (0,_todoManagement_js__WEBPACK_IMPORTED_MODULE_1__.finishTodo)(todo);
    });
    bottomButtons.appendChild(finishedButton);

    todoDiv.appendChild(bottomButtons);

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
    this.finished = [];
    this.expired = [];
  }
  addToDo(title, desc, dueDate, priority) {
    this.todos.push(new _toDoClass_js__WEBPACK_IMPORTED_MODULE_0__.ToDo(title, desc, dueDate, priority));
  }
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
  _index__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.finished.push(finishedTodo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxtSEFBbUgsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLGFBQWEsYUFBYSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsYUFBYSxhQUFhLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxhQUFhLGFBQWEsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFL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ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2FkZFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2RlbGV0ZVBvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9nZW5lcmF0ZUlucHV0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9nZW5lcmF0ZU5hdmJhci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZ2VuZXJhdGVQb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZ2VuZXJhdGVQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZ2VuZXJhdGVUb2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3RvRG9DbGFzcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3RvRG9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90b2RvTWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvd2Vic3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBoZWlnaHQ6IDEwMHN2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5ib2R5ICNhcHAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cbmJvZHkgI2FwcCBoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICBncmlkLWFyZWE6IDEvMS8yLzEzO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuYm9keSAjYXBwIG5hdiB7XG4gIGdyaWQtYXJlYTogMi8xLzEzLzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbmJvZHkgI2FwcCBuYXYgI3Byb2plY3RzLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuYm9keSAjYXBwIG5hdiAjcHJvamVjdHMge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufVxuYm9keSAjYXBwIG5hdiAjcHJvamVjdHMgLnByb2plY3Qge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmJvZHkgI2FwcCBuYXYgI3Byb2plY3RzIC5wcm9qZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbn1cbmJvZHkgI2FwcCBuYXYgI3Byb2plY3RzIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufVxuYm9keSAjYXBwIG1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBncmlkLWFyZWE6IDIvMy8xMy8xMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmJvZHkgI2FwcCBtYWluIC5hZGQtdG9kbzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5ib2R5ICNhcHAgbWFpbiAubWFpbi13cmFwcGVyIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5ib2R5ICNhcHAgbWFpbiAubWFpbi13cmFwcGVyIGJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNpbnB1dC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMC41cmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4jaW5wdXQtZmllbGQgaW5wdXQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NTg1ODU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbiNpbnB1dC1maWVsZCAjYnV0dG9uLXdyYXBwZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiNpbnB1dC1maWVsZCAjYnV0dG9uLXdyYXBwZXIgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZsZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4jaW5wdXQtZmllbGQgI2J1dHRvbi13cmFwcGVyIDpudGgtY2hpbGQoMSkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzdmZjc3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFmZmFhO1xufVxuI2lucHV0LWZpZWxkICNidXR0b24td3JhcHBlciA6bnRoLWNoaWxkKDIpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmOGI4YjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmViZTtcbn1cblxuLnBvcHVwLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvcHVwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZ2FwOiAxLjVyZW07XG59XG4ucG9wdXAgaDIsXG4ucG9wdXAgaDMge1xuICBtYXJnaW46IDA7XG59XG4ucG9wdXAgZm9ybSB7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xufVxuLnBvcHVwIGZvcm0gKiB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5wb3B1cC1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiN0b2RvLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMi41cmVtO1xufVxuI3RvZG8tbGlzdCBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuI3RvZG8tbGlzdCBkaXYgLmRlbGV0ZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiByZWQ7XG59XG4jdG9kby1saXN0IGRpdiAuZGVsZXRlLWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbiN0b2RvLWxpc3QgZGl2IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGVsZXRlLXBvcHVwIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG4uZGVsZXRlLXBvcHVwIDpudGgtY2hpbGQoMykge1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtSkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQURKO0FBRUk7RUFDRSx5QkNyQm9CO0VEc0JwQixtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUVJO0VBQ0UsbUJBQUE7RUFDQSx5QkM5QmlCO0VEK0JqQixpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUFOO0FBQ007RUFDRSxvQkFBQTtBQUNSO0FBQ007RUFJRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFGUjtBQUpRO0VBQ0UseUJBQUE7QUFNVjtBQUNRO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDVjtBQUNRO0VBQ0UseUJBQUE7QUFDVjtBQUNRO0VBQ0UseUJBQUE7QUFDVjtBQUlJO0VBQ0UseUJDcEVpQjtFRHFFakIsb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFGTjtBQUdNO0VBQ0UseUJBQUE7QUFEUjtBQUlNO0VBQ0Usb0JBQUE7QUFGUjtBQUdRO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFEVjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFKRjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUhKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBSEo7QUFJSTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBRk47QUFJSTtFQUNFLHlCQUFBO0VBQ0EseUJDeEhTO0FEc0hmO0FBSUk7RUFDRSx5QkFBQTtFQUNBLHlCQzNITztBRHlIYjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsb0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUxGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUpGO0FBS0U7O0VBRUUsU0FBQTtBQUhKO0FBS0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUhKO0FBSUk7RUFDRSxhQUFBO0FBRk47O0FBTUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQUZGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFESjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUROO0FBR0k7RUFDRSxxQkFBQTtBQUROO0FBSUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRk47O0FBTUE7RUFDRSxpQkFBQTtBQUhGO0FBSUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL3ZhcmlhYmxlc1xcXCI7XFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHN2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuXFxuICAjYXBwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIGhlYWRlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItaGVhZGVyO1xcbiAgICAgIGdyaWQtYXJlYTogMS8gMS8gMi8gMTM7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICB9XFxuICAgIG5hdiB7XFxuICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDEzIC8gMztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1uYXY7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAjcHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICAgIH1cXG4gICAgICAjcHJvamVjdHMge1xcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgICAgIH1cXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMXJlbTtcXG5cXG4gICAgICAgIC5wcm9qZWN0IHtcXG4gICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICB9XFxuICAgICAgICAucHJvamVjdDpob3ZlciB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxuICAgICAgICB9XFxuICAgICAgICAuYWN0aXZlIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItYXBwO1xcbiAgICAgIGdyaWQtYXJlYTogMiAvIDMgLyAxMyAvIDEzO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAuYWRkLXRvZG86aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgICB9XFxuXFxuICAgICAgLm1haW4td3JhcHBlciB7XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcbiNpbnB1dC1maWVsZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMC41cmVtO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgaW5wdXQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0ZW4ocmdiKDU2LCA1NiwgNTYpLCAzMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuICAjYnV0dG9uLXdyYXBwZXIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYnV0dG9uIHtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgcGFkZGluZzogMC43cmVtIDFyZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgIGZsZXg6IDE7XFxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgfVxcbiAgICA6bnRoLWNoaWxkKDEpIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJGJ1dHRvbi1ncmVlbiwgMTAlKTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLWdyZWVuO1xcbiAgICB9XFxuICAgIDpudGgtY2hpbGQoMikge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkYnV0dG9uLXJlZCwgMTAlKTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLXJlZDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucG9wdXAtYmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgZ2FwOiAxLjVyZW07XFxuICBoMixcXG4gIGgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgZm9ybSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICAqIHtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB9XFxuICB9XFxufVxcbi5wb3B1cC1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0b3A6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiN0b2RvLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMi41cmVtO1xcbiAgZGl2IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXG4gICAgLmRlbGV0ZS1idXR0b24ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDVweDtcXG4gICAgICByaWdodDogNXB4O1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGNvbG9yOiByZWQ7XFxuICAgIH1cXG4gICAgLmRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgfVxcblxcbiAgICBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICB9XFxufVxcbi5kZWxldGUtcG9wdXAge1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICA6bnRoLWNoaWxkKDMpIHtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB9XFxufVxcblwiLFwiJGJhY2tncm91bmQtY29sb3ItYXBwOiAjZWVlZWVlO1xcbiRiYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcjogIzM0MzQzNDtcXG4kYmFja2dyb3VuZC1jb2xvci1uYXY6ICNkZGRkZGQ7XFxuJGJ1dHRvbi1ncmVlbjogI2FhZmZhYTtcXG4kYnV0dG9uLXJlZDogI2ZmYmViZTtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBzdGF0ZSwgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi93ZWJzdG9yYWdlXCI7XG5leHBvcnQgZnVuY3Rpb24gYWRkVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IHByb2plY3QgPSB0b0RvTGlzdC5wcm9qZWN0cy5maW5kKFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT0gc3RhdGUuY3VycmVudFByb2plY3QubmFtZVxuICApO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgcHJvamVjdC5hZGRUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXG4gIHNhdmVEYXRhKCk7XG59XG4iLCJpbXBvcnQgeyBkZWxldGVUb2RvIH0gZnJvbSBcIi4vdG9kb01hbmFnZW1lbnRcIjtcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQb3B1cChkZWxldGVkVG9kbykge1xuICBjb25zdCBwb3B1cEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQXJlIHlvdSBzdXJlP1wiO1xuXG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gXCJEZWxldGluZyB0b2RvIGlzIGlycmV2ZXJzYWJsZVwiO1xuXG4gIGNvbnN0IHF1aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBxdWl0LnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIHF1aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwb3B1cEJhY2tncm91bmQucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWWVzXCI7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZVRvZG8oZGVsZXRlZFRvZG8pO1xuICAgIHBvcHVwQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgcG9wdXAuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHF1aXQpO1xuICBwb3B1cEJhY2tncm91bmQuYXBwZW5kQ2hpbGQocG9wdXApO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwQmFja2dyb3VuZCk7XG4gIHBvcHVwQmFja2dyb3VuZC5jbGFzc0xpc3QgPSBcInBvcHVwLWJhY2tncm91bmRcIjtcbiAgcG9wdXAuY2xhc3NMaXN0ID0gXCJwb3B1cCBkZWxldGUtcG9wdXBcIjtcbiAgcXVpdC5jbGFzc0xpc3QgPSBcInBvcHVwLWJ1dHRvblwiO1xufVxuIiwiaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVOYXZiYXIgfSBmcm9tIFwiLi9nZW5lcmF0ZU5hdmJhci5qc1wiO1xuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi93ZWJzdG9yYWdlLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVJbnB1dChsaXN0KSB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1idXR0b25cIik7XG4gIGNvbnNvbGUubG9nKGFkZFByb2plY3RCdXR0b24pO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5wdXQuaWQgPSBcImlucHV0LWZpZWxkXCI7XG4gIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0RmllbGQucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgbmFtZVwiO1xuXG4gIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25XcmFwcGVyLmlkID0gXCJidXR0b24td3JhcHBlclwiO1xuXG4gIGNvbnN0IGlucHV0Q29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGlucHV0Q29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICBpbnB1dENvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGlucHV0RmllbGQudmFsdWU7XG4gICAgaWYgKHByb2plY3ROYW1lKSB7XG4gICAgICBsaXN0LmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgc2F2ZURhdGEoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZU5hdmJhcihsaXN0KTtcbiAgfSk7XG5cbiAgY29uc3QgaW5wdXRDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBpbnB1dENhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGlucHV0Q2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaW5wdXQucmVwbGFjZVdpdGgoYWRkUHJvamVjdEJ1dHRvbik7XG4gIH0pO1xuXG4gIGlucHV0LmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xuICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGlucHV0Q29uZmlybUJ1dHRvbik7XG4gIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXRDYW5jZWxCdXR0b24pO1xuICBpbnB1dC5hcHBlbmRDaGlsZChidXR0b25XcmFwcGVyKTtcblxuICBhZGRQcm9qZWN0QnV0dG9uLnJlcGxhY2VXaXRoKGlucHV0KTtcbn1cbiIsImltcG9ydCB7IGdlbmVyYXRlSW5wdXQgfSBmcm9tIFwiLi9nZW5lcmF0ZUlucHV0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVByb2plY3RzIH0gZnJvbSBcIi4vZ2VuZXJhdGVQcm9qZWN0c1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTmF2YmFyKHRvRG9MaXN0KSB7XG4gIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcbiAgcHJvamVjdHNEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdXR0b24uaWQgPSBcImFkZC1idXR0b25cIjtcbiAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QgPSBcInByb2plY3RcIjtcbiAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBBZGQgUHJvamVjdFwiO1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBnZW5lcmF0ZUlucHV0KHRvRG9MaXN0KSk7XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICBnZW5lcmF0ZVByb2plY3RzKCk7XG59XG4iLCJpbXBvcnQgeyBhZGRUb0RvIH0gZnJvbSBcIi4vYWRkVG9kb1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb2RvcyB9IGZyb20gXCIuL2dlbmVyYXRlVG9kb3NcIjtcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBvcHVwKCkge1xuICBjb25zdCBwb3B1cEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBvcHVwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHBvcHVwU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHRpdGxlSW5wdXQubmFtZSA9IFwidGl0bGVcIjtcbiAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAvLyBDcmVhdGUgaW5wdXQgZm9yIGRlc2NyaXB0aW9uXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uIChvcHRpb25hbClcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAvLyBDcmVhdGUgaW5wdXQgZm9yIGR1ZSBkYXRlXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gIC8vIENyZWF0ZSBzZWxlY3QgZm9yIHByaW9yaXR5XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHlTZWxlY3QubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgY29uc3QgcHJpb3JpdGllcyA9IFtcImxvd1wiLCBcIm1lZGl1bVwiLCBcImhpZ2hcIl07XG4gIHByaW9yaXRpZXMuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5O1xuICAgIG9wdGlvbi50ZXh0ID0gcHJpb3JpdHk7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuXG4gIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIkFkZCBUby1Eb1wiO1xuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKFxuICAgICAgdGl0bGVJbnB1dC52YWx1ZSAhPSBcIlwiICYmXG4gICAgICBkdWVEYXRlSW5wdXQudmFsdWUgIT0gXCJcIiAmJlxuICAgICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgIT0gXCJcIlxuICAgICkge1xuICAgICAgYWRkVG9EbyhcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLFxuICAgICAgICBwcmlvcml0eVNlbGVjdC52YWx1ZVxuICAgICAgKTtcbiAgICB9XG4gICAgcG9wdXBCYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICAgIGdlbmVyYXRlVG9kb3MoKTtcbiAgfSk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICBjb25zdCBwb3B1cEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBvcHVwQmFja2dyb3VuZC5jbGFzc0xpc3QgPSBcInBvcHVwLWJhY2tncm91bmRcIjtcbiAgcG9wdXAuY2xhc3NMaXN0ID0gXCJwb3B1cFwiO1xuICBwb3B1cFRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgVG8tRG9cIjtcbiAgcG9wdXBTdWJ0aXRsZS50ZXh0Q29udGVudCA9IGAke3N0YXRlLmN1cnJlbnRQcm9qZWN0Lm5hbWV9YDtcblxuICBwb3B1cEJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuICBwb3B1cEJ1dHRvbi5jbGFzc0xpc3QgPSBcInBvcHVwLWJ1dHRvblwiO1xuICBwb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBvcHVwQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgfSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVGl0bGUpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFN1YnRpdGxlKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQnV0dG9uKTtcbiAgcG9wdXBCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cEJhY2tncm91bmQpO1xufVxuIiwiaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb2RvcyB9IGZyb20gXCIuL2dlbmVyYXRlVG9kb3NcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RzKCkge1xuICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG4gIHRvRG9MaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0ID0gXCJwcm9qZWN0IGFjdGl2ZVwiO1xuICAgIH0gZWxzZSBwcm9qZWN0RGl2LmNsYXNzTGlzdCA9IFwicHJvamVjdFwiO1xuICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcHJvamVjdHNEaXYuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgc3RhdGUuY3VycmVudFByb2plY3QgPSB0b0RvTGlzdC5wcm9qZWN0cy5maW5kKFxuICAgICAgICAocHJvamVjdE5hbWUpID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUubmFtZVxuICAgICAgKTtcbiAgICAgIGdlbmVyYXRlVG9kb3MoKTtcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmN1cnJlbnRQcm9qZWN0KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBzdGF0ZSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBmaW5pc2hUb2RvIH0gZnJvbSBcIi4vdG9kb01hbmFnZW1lbnQuanNcIjtcbmltcG9ydCB7IGRlbGV0ZVBvcHVwIH0gZnJvbSBcIi4vZGVsZXRlUG9wdXAuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRvZG9zKCkge1xuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0XCIpO1xuICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgdG9kb3NcIik7XG4gIHRvZG9MaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIHN0YXRlLmN1cnJlbnRQcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBsZXQgYm9yZGVyQ29sb3I7XG4gICAgc3dpdGNoICh0b2RvLnByaW9yaXR5KSB7XG4gICAgICBjYXNlIFwibG93XCI6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJncmVlblwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBib3JkZXJDb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9XG4gICAgY29uc29sZS5sb2codG9kbyk7XG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG5cbiAgICBpZiAodG9kby5kZXNjcmlwdGlvbikge1xuICAgICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHRvZG9EZXNjLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG5cbiAgICB0b2RvRGl2LnN0eWxlLmJvcmRlciA9IGAzcHggc29saWQgJHtib3JkZXJDb2xvcn1gO1xuXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG5cbiAgICBjb25zdCBib3R0b21CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0ID0gXCJ0b2RvLWJ1dHRvblwiO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgICBib3R0b21CdXR0b25zLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0ID0gXCJ0b2RvLWJ1dHRvbiBkZWxldGUtYnV0dG9uXCI7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImdnLXRyYXNoXCI+PC9pPmA7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkZWxldGVQb3B1cCh0b2RvKTtcbiAgICB9KTtcblxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIGNvbnN0IGZpbmlzaGVkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmaW5pc2hlZEJ1dHRvbi5jbGFzc0xpc3QgPSBcInRvZG8tYnV0dG9uXCI7XG4gICAgZmluaXNoZWRCdXR0b24udGV4dENvbnRlbnQgPSBcImZpbmlzaGVkXCI7XG4gICAgZmluaXNoZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRnJhbmlvbG9cIik7XG4gICAgICBmaW5pc2hUb2RvKHRvZG8pO1xuICAgIH0pO1xuICAgIGJvdHRvbUJ1dHRvbnMuYXBwZW5kQ2hpbGQoZmluaXNoZWRCdXR0b24pO1xuXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChib3R0b21CdXR0b25zKTtcblxuICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICB9KTtcbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgVG9Eb0xpc3QgfSBmcm9tIFwiLi90b0RvTGlzdC5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3RvRG9Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vdG9Eb0NsYXNzLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU5hdmJhciB9IGZyb20gXCIuL2dlbmVyYXRlTmF2YmFyLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVBvcHVwIH0gZnJvbSBcIi4vZ2VuZXJhdGVQb3B1cC5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb2RvcyB9IGZyb20gXCIuL2dlbmVyYXRlVG9kb3MuanNcIjtcbmltcG9ydCB7IGxvYWRTdG9yYWdlIH0gZnJvbSBcIi4vd2Vic3RvcmFnZS5qc1wiO1xuZXhwb3J0IGNvbnN0IHRvRG9MaXN0ID0gbmV3IFRvRG9MaXN0KCk7XG5cbmNvbnNvbGUubG9nKHRvRG9MaXN0KTtcbmxvYWRTdG9yYWdlKCk7XG5nZW5lcmF0ZU5hdmJhcih0b0RvTGlzdCk7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcbiAgY3VycmVudFByb2plY3Q6IHRvRG9MaXN0LnByb2plY3RzWzBdLFxufTtcbmdlbmVyYXRlVG9kb3MoKTtcbmNvbnNvbGUubG9nKHN0YXRlKTtcblxuY29uc3QgYWRkVG9Eb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG9cIik7XG5hZGRUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZW5lcmF0ZVBvcHVwKTtcbiIsImV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICh0aGlzLnRpdGxlID0gdGl0bGUpLFxuICAgICAgKHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiB8fCBcIlwiKSxcbiAgICAgICh0aGlzLmR1ZURhdGUgPSBkdWVEYXRlKSxcbiAgICAgICh0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHkpLFxuICAgICAgKHRoaXMuZmluaXNoZWQgPSBmYWxzZSk7XG4gIH1cbiAgdXBkYXRlVGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cbiAgdXBkYXRlRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbiAgdXBkYXRlRHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuICB1cGRhdGVQcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuICB1cGRhdGVOb3Rlcyhub3Rlcykge1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgfVxuICB0b2dnbGVGaW5pc2hlZCgpIHtcbiAgICB0aGlzLmZpbmlzaGVkID0gIXRoaXMuZmluaXNoZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi90b0RvUHJvamVjdC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVG9Eb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW25ldyBQcm9qZWN0KFwiR2VuZXJhbFwiKV07XG4gIH1cbiAgYWRkUHJvamVjdChuYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG5hbWUpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL3RvRG9DbGFzcy5qc1wiO1xuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRhKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvZG9zID0gW10gfHwgZGF0YTtcbiAgICB0aGlzLmZpbmlzaGVkID0gW107XG4gICAgdGhpcy5leHBpcmVkID0gW107XG4gIH1cbiAgYWRkVG9Ebyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRvZG9zLnB1c2gobmV3IFRvRG8odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGdlbmVyYXRlVG9kb3MgfSBmcm9tIFwiLi9nZW5lcmF0ZVRvZG9zXCI7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuL3dlYnN0b3JhZ2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBmaW5pc2hUb2RvKGZpbmlzaGVkVG9kbykge1xuICBzdGF0ZS5jdXJyZW50UHJvamVjdC5maW5pc2hlZC5wdXNoKGZpbmlzaGVkVG9kbyk7XG4gIHN0YXRlLmN1cnJlbnRQcm9qZWN0LnRvZG9zID0gc3RhdGUuY3VycmVudFByb2plY3QudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgcmV0dXJuIHRvZG8gIT0gZmluaXNoZWRUb2RvO1xuICB9KTtcbiAgZ2VuZXJhdGVUb2RvcygpO1xuICBzYXZlRGF0YSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVG9kbyhkZWxldGVkVG9kbykge1xuICBzdGF0ZS5jdXJyZW50UHJvamVjdC50b2RvcyA9IHN0YXRlLmN1cnJlbnRQcm9qZWN0LnRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgIHJldHVybiB0b2RvICE9IGRlbGV0ZWRUb2RvO1xuICB9KTtcbiAgZ2VuZXJhdGVUb2RvcygpO1xuICBzYXZlRGF0YSgpO1xufVxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVOYXZiYXIgfSBmcm9tIFwiLi9nZW5lcmF0ZU5hdmJhci5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb2RvcyB9IGZyb20gXCIuL2dlbmVyYXRlVG9kb3MuanNcIjtcbmltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi90b0RvQ2xhc3MuanNcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi90b0RvUHJvamVjdC5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVEYXRhKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0KSk7XG4gIGNvbnNvbGUubG9nKFwic2F2ZWQgZGF0YVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTdG9yYWdlKCkge1xuICBsZXQgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0xpc3RcIik7XG4gIGlmIChzdG9yZWREYXRhKSB7XG4gICAgbGV0IHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuXG4gICAgdG9Eb0xpc3QucHJvamVjdHMgPSBwYXJzZWREYXRhLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0Lm5hbWUsIHByb2plY3QudG9kb3MpO1xuICAgICAgbmV3UHJvamVjdC50b2RvcyA9IHByb2plY3QudG9kb3MubWFwKFxuICAgICAgICAodG9kbykgPT5cbiAgICAgICAgICBuZXcgVG9Ebyh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZURhdGUsIHRvZG8ucHJpb3JpdHkpXG4gICAgICApO1xuICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9