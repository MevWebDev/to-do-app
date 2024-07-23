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
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}
body button {
  cursor: pointer;
  color: black;
}
body input,
body textarea,
body select {
  font-size: 16px;
}
body input,
body select {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  color: #333;
}
body input[type=submit] {
  border: 1px solid black;
}
body input[type=submit]:hover {
  border: 1px solid black;
  color: #ccc;
  background-color: #333;
}
body #app {
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}
body #app #wrapper {
  display: flex;
  flex-grow: 1;
}
@media (max-width: 600px) {
  body #app #wrapper {
    flex-direction: column;
  }
}
body #app header {
  background-color: #343434;
  color: white;
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 1rem 0 1rem 2rem;
}
@media (max-width: 600px) {
  body #app header {
    width: 100vw;
  }
}
body #app nav {
  background-color: #dddddd;
  font-weight: bold;
  padding: 1rem;
  font-size: 1.5rem;
  flex-grow: 1;
  width: 200px;
}
@media (max-width: 600px) {
  body #app nav {
    width: 100%;
    padding: 5px 10px;
    flex-grow: 0;
  }
}
body #app nav #projects-header {
  padding-left: 1rem;
}
@media (max-width: 600px) {
  body #app nav #projects-header {
    padding-left: 0.5rem;
    font-size: large;
  }
}
body #app nav #projects {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
body #app nav #projects button:hover {
  background-color: #cccccc;
}
@media (max-width: 600px) {
  body #app nav #projects {
    flex-direction: row;
    margin-top: 0;
    overflow: scroll;
  }
}
body #app nav #projects .project {
  cursor: pointer;
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
@media (max-width: 600px) {
  body #app nav #projects .project {
    font-size: 12px;
    padding: 0.5rem;
  }
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
body #app nav #projects .project button .active {
  background-color: #cccccc;
}
body #app nav #projects .project button:hover {
  transform: translateY(-1px);
}
body #app nav #projects .project:hover {
  background-color: #cccccc;
}
body #app nav #projects .active {
  background-color: #cccccc;
}
body #app main {
  background-color: #eeeeee;
  flex-grow: 10;
  display: flex;
  flex-direction: column;
}
@media (max-width: 600px) {
  body #app main {
    width: 100%;
  }
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
.popup button {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  color: #333;
}
@media (max-width: 600px) {
  .popup {
    width: 400px;
    height: 400px;
    gap: 0.7rem;
  }
}
.popup h2,
.popup h3 {
  margin: 0;
}
.popup form {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.popup form * {
  padding: 1rem;
}
@media (max-width: 600px) {
  .popup form * {
    padding: 0.5rem;
  }
}

.popup-button {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  border: 0;
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
@media (max-width: 600px) {
  #todo-list {
    justify-content: center;
    padding: 1rem 0 0 0;
  }
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
@media (max-width: 600px) {
  #todo-list div {
    width: 45%;
  }
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
}`, "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"./variables\";\n* {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100vh;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  button {\n    cursor: pointer;\n    color: black;\n  }\n  input,\n  textarea,\n  select {\n    font-size: 16px; // Prevent zoom on focus in Safari\n  }\n  input,\n  select {\n    background-color: white;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 10px;\n    font-size: 16px;\n    color: #333;\n  }\n  input[type=\"submit\"] {\n    border: 1px solid black;\n  }\n  input[type=\"submit\"]:hover {\n    border: 1px solid black;\n    color: #ccc;\n    background-color: #333;\n  }\n  #app {\n    background-color: $background-color-app;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100%;\n\n    #wrapper {\n      display: flex;\n      flex-grow: 1;\n      @media (max-width: 600px) {\n        flex-direction: column;\n      }\n    }\n\n    header {\n      background-color: $background-color-header;\n      color: white;\n      display: flex;\n      align-items: center;\n      font-size: 2rem;\n      padding: 1rem 0 1rem 2rem;\n      @media (max-width: 600px) {\n        width: 100vw;\n      }\n    }\n    nav {\n      background-color: $background-color-nav;\n      font-weight: bold;\n      padding: 1rem;\n      font-size: 1.5rem;\n      flex-grow: 1;\n      width: 200px;\n      @media (max-width: 600px) {\n        width: 100%;\n        padding: 5px 10px;\n        flex-grow: 0;\n      }\n      #projects-header {\n        padding-left: 1rem;\n        @media (max-width: 600px) {\n          padding-left: 0.5rem;\n          font-size: large;\n        }\n      }\n      #projects {\n        button:hover {\n          background-color: #cccccc;\n        }\n        margin-top: 1rem;\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n        @media (max-width: 600px) {\n          flex-direction: row;\n          margin-top: 0;\n          overflow: scroll;\n        }\n\n        .project {\n          cursor: pointer;\n\n          width: 80%;\n          padding: 1rem;\n          border: none;\n          background-color: transparent;\n          text-align: left;\n\n          font-size: 1rem;\n          font-weight: 600;\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          @media (max-width: 600px) {\n            font-size: 12px;\n            padding: 0.5rem;\n          }\n          div {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            gap: 1rem;\n          }\n          button {\n            border: none;\n            background-color: transparent;\n\n            cursor: pointer;\n            .active {\n              background-color: #cccccc;\n            }\n          }\n          button:hover {\n            transform: translateY(-1px);\n          }\n        }\n        .project:hover {\n          background-color: #cccccc;\n        }\n        .active {\n          background-color: #cccccc;\n        }\n      }\n    }\n\n    main {\n      background-color: $background-color-app;\n      flex-grow: 10;\n      display: flex;\n      flex-direction: column;\n      @media (max-width: 600px) {\n        width: 100%;\n      }\n      .main-wrapper {\n        padding: 0.5rem 1rem;\n        .buttons-main {\n          display: flex;\n          gap: 1rem;\n          button {\n            cursor: pointer;\n            font-size: 1rem;\n            font-weight: 600;\n            border: none;\n          }\n          button:hover {\n            background-color: #cccccc;\n          }\n        }\n      }\n    }\n  }\n}\n#input-field {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  input {\n    align-self: center;\n    box-sizing: border-box;\n    border: 1px solid lighten(rgb(56, 56, 56), 30%);\n    border-radius: 0.2rem;\n    width: 90%;\n    padding: 1rem;\n  }\n  #button-wrapper {\n    align-self: center;\n    gap: 1rem;\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    button {\n      border: none;\n      padding: 0.7rem 1rem;\n      border-radius: 0.2rem;\n      cursor: pointer;\n      min-width: fit-content;\n      flex: 1;\n      font-weight: 800;\n    }\n    :nth-child(1) {\n      border: 1px solid darken($button-green, 10%);\n      background-color: $button-green;\n    }\n    :nth-child(2) {\n      border: 1px solid darken($button-red, 10%);\n      background-color: $button-red;\n    }\n  }\n}\n\n.popup-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.popup {\n  position: relative;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 600px;\n  height: 600px;\n  border-radius: 1rem;\n  gap: 1.5rem;\n  button {\n    background-color: white;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 10px;\n    font-size: 16px;\n    color: #333;\n  }\n  @media (max-width: 600px) {\n    width: 400px;\n    height: 400px;\n    gap: 0.7rem;\n  }\n  h2,\n  h3 {\n    margin: 0;\n  }\n  form {\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    // @media (max-width: 600px) {\n    //   height: 50%;\n    // }\n    * {\n      padding: 1rem;\n      @media (max-width: 600px) {\n        padding: 0.5rem;\n      }\n    }\n  }\n}\n.popup-button {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  border: 0;\n  font-size: 1.5rem;\n  background-color: transparent;\n  color: black;\n  font-weight: bold;\n}\n#todo-list {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n  padding: 2.5rem;\n  @media (max-width: 600px) {\n    justify-content: center;\n    padding: 1rem 0 0 0;\n  }\n  div {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    flex-direction: column;\n    padding: 1rem;\n    width: 200px;\n    height: 250px;\n    border-radius: 0.5rem;\n    text-align: center;\n    animation: fadeIn 0.5s ease-in-out;\n    @media (max-width: 600px) {\n      width: 45%;\n    }\n    h3 {\n      margin: 0;\n      margin-top: 2rem;\n    }\n    p {\n      height: 40px;\n    }\n    button {\n      cursor: pointer;\n    }\n    .delete-button {\n      position: absolute;\n      top: 0;\n      right: 0;\n      padding: 0.75rem;\n      border: none;\n      background-color: transparent;\n    }\n    .delete-button:hover {\n      transform: scale(1.1);\n    }\n    .edit-button {\n      position: absolute;\n      top: 0;\n      left: 0;\n      padding: 0.75rem;\n      border: none;\n      background-color: transparent;\n    }\n    .edit-button:hover {\n      transform: scale(1.1);\n    }\n    .finished-button {\n      background-color: green;\n      border: 0;\n      color: white;\n      border-radius: 0.5rem;\n      width: 80%;\n      padding: 0.5rem 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      justify-self: flex-end;\n      animation: ease-in-out 0.2s;\n    }\n    .finished-button:hover {\n      background-color: darken($color: green, $amount: 2%);\n    }\n\n    div {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n}\n.delete-popup {\n  font-size: larger;\n  :nth-child(3) {\n    padding: 1rem 4rem;\n  }\n}\n.activity-log {\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  width: 90%;\n  overflow: scroll;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none;\n  scroll-snap-type: y mandatory;\n  .activity {\n    min-width: 90%;\n    border: 1px solid;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    justify-content: center;\n    align-items: center;\n    * {\n      margin: 0;\n    }\n  }\n}\n","$background-color-app: #eeeeee;\n$background-color-header: #343434;\n$background-color-nav: #dddddd;\n$button-green: #aaffaa;\n$button-red: #ffbebe;\n"],"sourceRoot":""}]);
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

    if (activity[2] == "finished") {
      activityDiv.innerHTML = `<h3>Finished todo:</h3> ${activity[0].title}`;
    } else if (activity[2] == "expired") {
      activityDiv.innerHTML = `<h3>Expired todo:</h3> ${activity[0].title}`;
    }

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

/***/ "./src/checkDates.js":
/*!***************************!*\
  !*** ./src/checkDates.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkDates: () => (/* binding */ checkDates)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function checkDates() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.projects.forEach((project) => {
    const expiredTodos = project.todos.filter((todo) => {
      return today > new Date(todo.dueDate);
    });
    project.todos = project.todos.filter((todo) => {
      return today < new Date(todo.dueDate);
    });
    expiredTodos.forEach((todo) => {
      _index__WEBPACK_IMPORTED_MODULE_0__.toDoList.addActivityLog(todo, todo.dueDate.toLocaleString(), `expired`);
    });
  });
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
    projectsDiv.childNodes.forEach((node) => {
      node.classList.remove("active");
    });
    todayButton.classList.add("active");
  });
  projectsDiv.appendChild(todayButton);
  const weekButton = document.createElement("button");

  weekButton.id = "week-button";
  weekButton.classList = "project";
  weekButton.innerHTML = `<div><i class="fas fa-calendar-week"></i>Week</div>`;
  weekButton.addEventListener("click", () => {
    projectsDiv.childNodes.forEach((node) => {
      node.classList.remove("active");
    });
    weekButton.classList.add("active");

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





const addTodoButton = document.querySelector(".add-todo");

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
      addTodoButton.style.display = "block";
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
/* harmony import */ var _checkDates_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkDates.js */ "./src/checkDates.js");











const toDoList = new _toDoList_js__WEBPACK_IMPORTED_MODULE_1__.ToDoList();

(0,_webstorage_js__WEBPACK_IMPORTED_MODULE_7__.loadStorage)();
(0,_checkDates_js__WEBPACK_IMPORTED_MODULE_10__.checkDates)();
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
  addActivityLog(message, time, state) {
    this.activityLog.push([message, time, state]);
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





const addTodoButton = document.querySelector(".add-todo");

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
  addTodoButton.style.display = "none";
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
  _index__WEBPACK_IMPORTED_MODULE_1__.toDoList.addActivityLog(finishedTodo, currentTime, `finished`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1IQUFtSCxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssT0FBTyxVQUFVLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLGFBQWEsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssYUFBYSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxhQUFhLGFBQWEsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLGFBQWEsWUFBWSxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFN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LGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvYWN0aXZpdHlsb2cuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2FkZFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2NoZWNrRGF0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2RlbGV0ZVBvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9lZGl0VG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZ2VuZXJhdGVJbnB1dC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZ2VuZXJhdGVOYXZiYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2dlbmVyYXRlUG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2dlbmVyYXRlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2dlbmVyYXRlVG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9wcm9qZWN0TWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdG9Eb0NsYXNzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdG9Eb1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3RvZGF5LXdlZWsuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3RvZG9NYW5hZ2VtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy93ZWJzdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbmJvZHkgYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5ib2R5IGlucHV0LFxuYm9keSB0ZXh0YXJlYSxcbmJvZHkgc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuYm9keSBpbnB1dCxcbmJvZHkgc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbn1cbmJvZHkgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5ib2R5IGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjb2xvcjogI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cbmJvZHkgI2FwcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuYm9keSAjYXBwICN3cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGJvZHkgI2FwcCAjd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuYm9keSAjYXBwIGhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAycmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGJvZHkgI2FwcCBoZWFkZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxufVxuYm9keSAjYXBwIG5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZmxleC1ncm93OiAxO1xuICB3aWR0aDogMjAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYm9keSAjYXBwIG5hdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgZmxleC1ncm93OiAwO1xuICB9XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cy1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYm9keSAjYXBwIG5hdiAjcHJvamVjdHMtaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cbmJvZHkgI2FwcCBuYXYgI3Byb2plY3RzIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYm9keSAjYXBwIG5hdiAjcHJvamVjdHMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG59XG5ib2R5ICNhcHAgbmF2ICNwcm9qZWN0cyAucHJvamVjdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYm9keSAjYXBwIG5hdiAjcHJvamVjdHMgLnByb2plY3Qge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbn1cbmJvZHkgI2FwcCBuYXYgI3Byb2plY3RzIC5wcm9qZWN0IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuYm9keSAjYXBwIG5hdiAjcHJvamVjdHMgLnByb2plY3QgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYm9keSAjYXBwIG5hdiAjcHJvamVjdHMgLnByb2plY3QgYnV0dG9uIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufVxuYm9keSAjYXBwIG5hdiAjcHJvamVjdHMgLnByb2plY3QgYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuYm9keSAjYXBwIG5hdiAjcHJvamVjdHMgLnByb2plY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufVxuYm9keSAjYXBwIG5hdiAjcHJvamVjdHMgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5ib2R5ICNhcHAgbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIGZsZXgtZ3JvdzogMTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYm9keSAjYXBwIG1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5ib2R5ICNhcHAgbWFpbiAubWFpbi13cmFwcGVyIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5ib2R5ICNhcHAgbWFpbiAubWFpbi13cmFwcGVyIC5idXR0b25zLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG59XG5ib2R5ICNhcHAgbWFpbiAubWFpbi13cmFwcGVyIC5idXR0b25zLW1haW4gYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmJvZHkgI2FwcCBtYWluIC5tYWluLXdyYXBwZXIgLmJ1dHRvbnMtbWFpbiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufVxuXG4jaW5wdXQtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDAuNXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuI2lucHV0LWZpZWxkIGlucHV0IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODU4NTg1O1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4jaW5wdXQtZmllbGQgI2J1dHRvbi13cmFwcGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4jaW5wdXQtZmllbGQgI2J1dHRvbi13cmFwcGVyIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICBmbGV4OiAxO1xuICBmb250LXdlaWdodDogODAwO1xufVxuI2lucHV0LWZpZWxkICNidXR0b24td3JhcHBlciA6bnRoLWNoaWxkKDEpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3ZmY3NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhZmZhYTtcbn1cbiNpbnB1dC1maWVsZCAjYnV0dG9uLXdyYXBwZXIgOm50aC1jaGlsZCgyKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjhiOGI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJlYmU7XG59XG5cbi5wb3B1cC1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3B1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGdhcDogMS41cmVtO1xufVxuLnBvcHVwIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnBvcHVwIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBnYXA6IDAuN3JlbTtcbiAgfVxufVxuLnBvcHVwIGgyLFxuLnBvcHVwIGgzIHtcbiAgbWFyZ2luOiAwO1xufVxuLnBvcHVwIGZvcm0ge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbn1cbi5wb3B1cCBmb3JtICoge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5wb3B1cCBmb3JtICoge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxufVxuXG4ucG9wdXAtYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jdG9kby1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDIuNXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAjdG9kby1saXN0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDAgMCAwO1xuICB9XG59XG4jdG9kby1saXN0IGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI3RvZG8tbGlzdCBkaXYge1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbn1cbiN0b2RvLWxpc3QgZGl2IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuI3RvZG8tbGlzdCBkaXYgcCB7XG4gIGhlaWdodDogNDBweDtcbn1cbiN0b2RvLWxpc3QgZGl2IGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN0b2RvLWxpc3QgZGl2IC5kZWxldGUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuI3RvZG8tbGlzdCBkaXYgLmRlbGV0ZS1idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4jdG9kby1saXN0IGRpdiAuZWRpdC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiN0b2RvLWxpc3QgZGl2IC5lZGl0LWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbiN0b2RvLWxpc3QgZGl2IC5maW5pc2hlZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICBhbmltYXRpb246IGVhc2UtaW4tb3V0IDAuMnM7XG59XG4jdG9kby1saXN0IGRpdiAuZmluaXNoZWQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzYwMDtcbn1cbiN0b2RvLWxpc3QgZGl2IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGVsZXRlLXBvcHVwIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG4uZGVsZXRlLXBvcHVwIDpudGgtY2hpbGQoMykge1xuICBwYWRkaW5nOiAxcmVtIDRyZW07XG59XG5cbi5hY3Rpdml0eS1sb2cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiA5MCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbn1cbi5hY3Rpdml0eS1sb2cgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYWN0aXZpdHktbG9nIC5hY3Rpdml0eSB7XG4gIG1pbi13aWR0aDogOTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hY3Rpdml0eS1sb2cgLmFjdGl2aXR5ICoge1xuICBtYXJnaW46IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLHNCQUFBO0FBQUY7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtF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LGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBaUJOO0FBZkk7RUFDRSxxQkFBQTtBQWlCTjtBQWZJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBaUJOO0FBZkk7RUFDRSxxQkFBQTtBQWlCTjtBQWZJO0VBQ0UsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBaUJOO0FBZkk7RUFDRSx5QkFBQTtBQWlCTjtBQWRJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWdCTjs7QUFaQTtFQUNFLGlCQUFBO0FBZUY7QUFkRTtFQUNFLGtCQUFBO0FBZ0JKOztBQWJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUlBLHdCQUFBLEVBQUEsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBWUY7QUFqQkU7RUFDRSxhQUFBO0FBbUJKO0FBZEU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZ0JKO0FBZkk7RUFDRSxTQUFBO0FBaUJOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4vdmFyaWFibGVzXFxcIjtcXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcbiAgaW5wdXQsXFxuICB0ZXh0YXJlYSxcXG4gIHNlbGVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDsgLy8gUHJldmVudCB6b29tIG9uIGZvY3VzIGluIFNhZmFyaVxcbiAgfVxcbiAgaW5wdXQsXFxuICBzZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgfVxcbiAgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIH1cXG4gIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiAjY2NjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgfVxcbiAgI2FwcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWFwcDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICN3cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItaGVhZGVyO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDJyZW07XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIG5hdiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItbmF2O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICBmbGV4LWdyb3c6IDA7XFxuICAgICAgfVxcbiAgICAgICNwcm9qZWN0cy1oZWFkZXIge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAjcHJvamVjdHMge1xcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgICAgIH1cXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3Qge1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIC5hY3RpdmUge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5wcm9qZWN0OmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgICAgIH1cXG4gICAgICAgIC5hY3RpdmUge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBtYWluIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1hcHA7XFxuICAgICAgZmxleC1ncm93OiAxMDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICB9XFxuICAgICAgLm1haW4td3JhcHBlciB7XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgICAgIC5idXR0b25zLW1haW4ge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuI2lucHV0LWZpZWxkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBpbnB1dCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbihyZ2IoNTYsIDU2LCA1NiksIDMwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG4gICNidXR0b24td3JhcHBlciB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBidXR0b24ge1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgZmxleDogMTtcXG4gICAgICBmb250LXdlaWdodDogODAwO1xcbiAgICB9XFxuICAgIDpudGgtY2hpbGQoMSkge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkYnV0dG9uLWdyZWVuLCAxMCUpO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tZ3JlZW47XFxuICAgIH1cXG4gICAgOm50aC1jaGlsZCgyKSB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRidXR0b24tcmVkLCAxMCUpO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tcmVkO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5wb3B1cC1iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBnYXA6IDEuNXJlbTtcXG4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBnYXA6IDAuN3JlbTtcXG4gIH1cXG4gIGgyLFxcbiAgaDMge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICBmb3JtIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIC8vIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAvLyAgIGhlaWdodDogNTAlO1xcbiAgICAvLyB9XFxuICAgICoge1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcbi5wb3B1cC1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0b3A6IDEwcHg7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiN0b2RvLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMi41cmVtO1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDAgMCAwO1xcbiAgfVxcbiAgZGl2IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLWluLW91dDtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgd2lkdGg6IDQ1JTtcXG4gICAgfVxcbiAgICBoMyB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIH1cXG4gICAgcCB7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB9XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIC5kZWxldGUtYnV0dG9uIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW07XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuICAgIC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIH1cXG4gICAgLmVkaXQtYnV0dG9uIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgcGFkZGluZzogMC43NXJlbTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG4gICAgLmVkaXQtYnV0dG9uOmhvdmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIH1cXG4gICAgLmZpbmlzaGVkLWJ1dHRvbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgICBhbmltYXRpb246IGVhc2UtaW4tb3V0IDAuMnM7XFxuICAgIH1cXG4gICAgLmZpbmlzaGVkLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogZ3JlZW4sICRhbW91bnQ6IDIlKTtcXG4gICAgfVxcblxcbiAgICBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICB9XFxufVxcbi5kZWxldGUtcG9wdXAge1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICA6bnRoLWNoaWxkKDMpIHtcXG4gICAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgfVxcbn1cXG4uYWN0aXZpdHktbG9nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogOTAlO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XFxuICAuYWN0aXZpdHkge1xcbiAgICBtaW4td2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICoge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIiRiYWNrZ3JvdW5kLWNvbG9yLWFwcDogI2VlZWVlZTtcXG4kYmFja2dyb3VuZC1jb2xvci1oZWFkZXI6ICMzNDM0MzQ7XFxuJGJhY2tncm91bmQtY29sb3ItbmF2OiAjZGRkZGRkO1xcbiRidXR0b24tZ3JlZW46ICNhYWZmYWE7XFxuJGJ1dHRvbi1yZWQ6ICNmZmJlYmU7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi93ZWJzdG9yYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUFjdGl2aXR5TG9nKCkge1xuICBjb25zdCBwb3B1cEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwb3B1cEJhY2tncm91bmQuY2xhc3NMaXN0ID0gXCJwb3B1cC1iYWNrZ3JvdW5kXCI7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcG9wdXAuY2xhc3NMaXN0ID0gXCJwb3B1cFwiO1xuICBwb3B1cC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiZmxleC1zdGFydFwiO1xuICBwb3B1cC5zdHlsZS5wYWRkaW5nID0gXCIycmVtXCI7XG4gIHBvcHVwQmFja2dyb3VuZC5hcHBlbmRDaGlsZChwb3B1cCk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXG4gIHBvcHVwLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFjdGl2aXR5IExvZ1wiO1xuICBjb25zdCBxdWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcXVpdC5jbGFzc0xpc3QgPSBcInBvcHVwLWJ1dHRvblwiO1xuICBwb3B1cC5hcHBlbmRDaGlsZChxdWl0KTtcbiAgcXVpdC50ZXh0Q29udGVudCA9IFwieFwiO1xuICBxdWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcG9wdXBCYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2cuY2xhc3NMaXN0ID0gXCJhY3Rpdml0eS1sb2dcIjtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQobG9nKTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChidXR0b24pO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIkNsZWFyXCI7XG4gIGJ1dHRvbi5zdHlsZS5tYXJnaW5Ub3AgPSBcImF1dG9cIjtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9Eb0xpc3QuYWN0aXZpdHlMb2cgPSBbXTtcbiAgICBwb3B1cEJhY2tncm91bmQucmVtb3ZlKCk7XG4gICAgc2F2ZURhdGEoKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cEJhY2tncm91bmQpO1xuICBnZW5lcmF0ZUFjdGl2aXRpZXMoKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVBY3Rpdml0aWVzKCkge1xuICBsZXQgYm9yZGVyQ29sb3I7XG5cbiAgY29uc3QgbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3Rpdml0eS1sb2dcIik7XG4gIGxvZy5pbm5lckhUTUwgPSBcIlwiO1xuICB0b0RvTGlzdC5hY3Rpdml0eUxvZy5mb3JFYWNoKChhY3Rpdml0eSkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aXZpdHlbMF0ucHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICBib3JkZXJDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJibGFja1wiO1xuICAgIH1cbiAgICBjb25zdCBhY3Rpdml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWN0aXZpdHlEaXYuc3R5bGUuYm9yZGVyID0gYDNweCBzb2xpZCAke2JvcmRlckNvbG9yfWA7XG4gICAgYWN0aXZpdHlEaXYuY2xhc3NMaXN0ID0gXCJhY3Rpdml0eVwiO1xuXG4gICAgaWYgKGFjdGl2aXR5WzJdID09IFwiZmluaXNoZWRcIikge1xuICAgICAgYWN0aXZpdHlEaXYuaW5uZXJIVE1MID0gYDxoMz5GaW5pc2hlZCB0b2RvOjwvaDM+ICR7YWN0aXZpdHlbMF0udGl0bGV9YDtcbiAgICB9IGVsc2UgaWYgKGFjdGl2aXR5WzJdID09IFwiZXhwaXJlZFwiKSB7XG4gICAgICBhY3Rpdml0eURpdi5pbm5lckhUTUwgPSBgPGgzPkV4cGlyZWQgdG9kbzo8L2gzPiAke2FjdGl2aXR5WzBdLnRpdGxlfWA7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZURpdi5pbm5lckhUTUwgPSBgPGg0Pm9uPC9oND4gJHthY3Rpdml0eVsxXX1gO1xuICAgIGFjdGl2aXR5RGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuICAgIGxvZy5hcHBlbmRDaGlsZChhY3Rpdml0eURpdik7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgc3RhdGUsIHRvRG9MaXN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vd2Vic3RvcmFnZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICBjb25zdCBwcm9qZWN0ID0gdG9Eb0xpc3QucHJvamVjdHMuZmluZChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09IHN0YXRlLmN1cnJlbnRQcm9qZWN0Lm5hbWVcbiAgKTtcblxuICBwcm9qZWN0LmFkZFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cbiAgc2F2ZURhdGEoKTtcbn1cbiIsImltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRGF0ZXMoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgdG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHRvRG9MaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBleHBpcmVkVG9kb3MgPSBwcm9qZWN0LnRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgcmV0dXJuIHRvZGF5ID4gbmV3IERhdGUodG9kby5kdWVEYXRlKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0LnRvZG9zID0gcHJvamVjdC50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgIHJldHVybiB0b2RheSA8IG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSk7XG4gICAgfSk7XG4gICAgZXhwaXJlZFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHRvRG9MaXN0LmFkZEFjdGl2aXR5TG9nKHRvZG8sIHRvZG8uZHVlRGF0ZS50b0xvY2FsZVN0cmluZygpLCBgZXhwaXJlZGApO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGRlbGV0ZVRvZG8gfSBmcm9tIFwiLi90b2RvTWFuYWdlbWVudFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVBvcHVwKGRlbGV0ZWRUb2RvKSB7XG4gIGNvbnN0IHBvcHVwQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJBcmUgeW91IHN1cmU/XCI7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBcIkRlbGV0aW5nIHRvZG8gaXMgaXJyZXZlcnNhYmxlXCI7XG5cbiAgY29uc3QgcXVpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHF1aXQudGV4dENvbnRlbnQgPSBcInhcIjtcbiAgcXVpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBvcHVwQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJZZXNcIjtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGVsZXRlVG9kbyhkZWxldGVkVG9kbyk7XG4gICAgcG9wdXBCYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICB9KTtcblxuICBwb3B1cC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocXVpdCk7XG4gIHBvcHVwQmFja2dyb3VuZC5hcHBlbmRDaGlsZChwb3B1cCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXBCYWNrZ3JvdW5kKTtcbiAgcG9wdXBCYWNrZ3JvdW5kLmNsYXNzTGlzdCA9IFwicG9wdXAtYmFja2dyb3VuZFwiO1xuICBwb3B1cC5jbGFzc0xpc3QgPSBcInBvcHVwIGRlbGV0ZS1wb3B1cFwiO1xuICBxdWl0LmNsYXNzTGlzdCA9IFwicG9wdXAtYnV0dG9uXCI7XG59XG4iLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vdG9Eb0NsYXNzXCI7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRvZG9zIH0gZnJvbSBcIi4vZ2VuZXJhdGVUb2Rvcy5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvZG8odG9kbywgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICB0b2RvLnRpdGxlID0gdGl0bGU7XG4gIHRvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdG9kby5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdG9kby5wcmlvcml0eSA9IHByaW9yaXR5O1xuICBnZW5lcmF0ZVRvZG9zKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG9kb1BvcHVwKHRvZG8pIHtcbiAgY29uc3QgcG9wdXBCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBwb3B1cFN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICB0aXRsZUlucHV0Lm5hbWUgPSBcInRpdGxlXCI7XG4gIHRpdGxlSW5wdXQudmFsdWUgPSBgJHt0b2RvLnRpdGxlfWA7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgLy8gQ3JlYXRlIGlucHV0IGZvciBkZXNjcmlwdGlvblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gYCR7dG9kby5kZXNjcmlwdGlvbn1gO1xuICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvbiAob3B0aW9uYWwgJiBtYXggMjQgY2hhcmFjdGVycylcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAvLyBDcmVhdGUgaW5wdXQgZm9yIGR1ZSBkYXRlXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgZHVlRGF0ZUlucHV0LnZhbHVlID0gYCR7dG9kby5kdWVEYXRlfWA7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICAvLyBDcmVhdGUgc2VsZWN0IGZvciBwcmlvcml0eVxuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBbXCJsb3dcIiwgXCJtZWRpdW1cIiwgXCJoaWdoXCJdO1xuICBwcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eTtcbiAgICBvcHRpb24udGV4dCA9IHByaW9yaXR5O1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IGAke3RvZG8ucHJpb3JpdHl9YDtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG5cbiAgLy8gQ3JlYXRlIHN1Ym1pdCBidXR0b25cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiRWRpdCBUby1Eb1wiO1xuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBkdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZUlucHV0LnZhbHVlKTtcbiAgICBkdWVEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY3VycmVudERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgaWYgKGR1ZURhdGUgPCBjdXJyZW50RGF0ZSkge1xuICAgICAgYWxlcnQoXCJEb24ndCBnbyBiYWNrIHRvIHRoZSBmdXR1cmUhXCIpO1xuICAgIH0gZWxzZSBpZiAodGl0bGVJbnB1dC52YWx1ZS5sZW5ndGggPiAzMCkge1xuICAgICAgYWxlcnQoXCJUaXRsZSBtdXN0IGJlIDMwIGNoYXJhY3RlcnMgb3IgbGVzcyFcIik7XG4gICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbklucHV0LnZhbHVlLmxlbmd0aCA+IDI0KSB7XG4gICAgICBhbGVydChcIkRlc2NyaXB0aW9uIG11c3QgYmUgMjQgY2hhcmFjdGVycyBvciBsZXNzIVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlVG9kbyhcbiAgICAgICAgdG9kbyxcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLFxuICAgICAgICBwcmlvcml0eVNlbGVjdC52YWx1ZVxuICAgICAgKTtcbiAgICAgIHBvcHVwQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgICAgIGdlbmVyYXRlVG9kb3MoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVRvZG9zKCk7XG4gIH0pO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgY29uc3QgcG9wdXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwb3B1cEJhY2tncm91bmQuY2xhc3NMaXN0ID0gXCJwb3B1cC1iYWNrZ3JvdW5kXCI7XG4gIHBvcHVwLmNsYXNzTGlzdCA9IFwicG9wdXBcIjtcbiAgcG9wdXBUaXRsZS50ZXh0Q29udGVudCA9IFwiRWRpdCBUby1Eb1wiO1xuICBwb3B1cFN1YnRpdGxlLnRleHRDb250ZW50ID0gYCR7c3RhdGUuY3VycmVudFByb2plY3QubmFtZX1gO1xuXG4gIHBvcHVwQnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIHBvcHVwQnV0dG9uLmNsYXNzTGlzdCA9IFwicG9wdXAtYnV0dG9uXCI7XG4gIHBvcHVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcG9wdXBCYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICB9KTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUaXRsZSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwU3VidGl0bGUpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBCdXR0b24pO1xuICBwb3B1cEJhY2tncm91bmQuYXBwZW5kQ2hpbGQocG9wdXApO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwQmFja2dyb3VuZCk7XG59XG4iLCJpbXBvcnQgeyB0b0RvTGlzdCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU5hdmJhciB9IGZyb20gXCIuL2dlbmVyYXRlTmF2YmFyLmpzXCI7XG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuL3dlYnN0b3JhZ2UuanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlUHJvamVjdHMgfSBmcm9tIFwiLi9nZW5lcmF0ZVByb2plY3RzLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVJbnB1dChsaXN0KSB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1idXR0b25cIik7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbnB1dC5pZCA9IFwiaW5wdXQtZmllbGRcIjtcbiAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRGaWVsZC5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBuYW1lXCI7XG5cbiAgY29uc3QgYnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbldyYXBwZXIuaWQgPSBcImJ1dHRvbi13cmFwcGVyXCI7XG5cbiAgY29uc3QgaW5wdXRDb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaW5wdXRDb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gIGlucHV0Q29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gaW5wdXRGaWVsZC52YWx1ZTtcbiAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgIGxpc3QuYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICBzYXZlRGF0YSgpO1xuICAgIH1cbiAgICBnZW5lcmF0ZU5hdmJhcihsaXN0KTtcbiAgICBnZW5lcmF0ZVByb2plY3RzKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGlucHV0Q2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaW5wdXRDYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBpbnB1dENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlucHV0LnJlcGxhY2VXaXRoKGFkZFByb2plY3RCdXR0b24pO1xuICB9KTtcblxuICBpbnB1dC5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcbiAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChpbnB1dENvbmZpcm1CdXR0b24pO1xuICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGlucHV0Q2FuY2VsQnV0dG9uKTtcbiAgaW5wdXQuYXBwZW5kQ2hpbGQoYnV0dG9uV3JhcHBlcik7XG5cbiAgYWRkUHJvamVjdEJ1dHRvbi5yZXBsYWNlV2l0aChpbnB1dCk7XG59XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUlucHV0IH0gZnJvbSBcIi4vZ2VuZXJhdGVJbnB1dFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVQcm9qZWN0cyB9IGZyb20gXCIuL2dlbmVyYXRlUHJvamVjdHNcIjtcbmltcG9ydCB7IGdlbmVyYXRlVG9kYXksIGdlbmVyYXRlV2VlayB9IGZyb20gXCIuL3RvZGF5LXdlZWtcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU5hdmJhcih0b0RvTGlzdCkge1xuICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG4gIHByb2plY3RzRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmlkID0gXCJhZGQtYnV0dG9uXCI7XG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0ID0gXCJwcm9qZWN0XCI7XG4gIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIFByb2plY3RcIjtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZ2VuZXJhdGVJbnB1dCh0b0RvTGlzdCkpO1xuICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgY29uc3QgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0b2RheUJ1dHRvbi5pZCA9IFwidG9kYXktYnV0dG9uXCI7XG4gIHRvZGF5QnV0dG9uLmNsYXNzTGlzdCA9IFwicHJvamVjdFwiO1xuICB0b2RheUJ1dHRvbi5pbm5lckhUTUwgPSBgPGRpdj48aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1kYXlcIj48L2k+VG9kYXk8L2Rpdj5gO1xuICB0b2RheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdlbmVyYXRlVG9kYXkoKTtcbiAgICBwcm9qZWN0c0Rpdi5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICB0b2RheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KTtcbiAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQodG9kYXlCdXR0b24pO1xuICBjb25zdCB3ZWVrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICB3ZWVrQnV0dG9uLmlkID0gXCJ3ZWVrLWJ1dHRvblwiO1xuICB3ZWVrQnV0dG9uLmNsYXNzTGlzdCA9IFwicHJvamVjdFwiO1xuICB3ZWVrQnV0dG9uLmlubmVySFRNTCA9IGA8ZGl2PjxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLXdlZWtcIj48L2k+V2VlazwvZGl2PmA7XG4gIHdlZWtCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0c0Rpdi5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICB3ZWVrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICBnZW5lcmF0ZVdlZWsoKTtcbiAgfSk7XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHdlZWtCdXR0b24pO1xufVxuIiwiaW1wb3J0IHsgYWRkVG9EbyB9IGZyb20gXCIuL2FkZFRvZG9cIjtcbmltcG9ydCB7IGdlbmVyYXRlVG9kb3MgfSBmcm9tIFwiLi9nZW5lcmF0ZVRvZG9zXCI7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gXCIuL2luZGV4XCI7XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQb3B1cCgpIHtcbiAgY29uc3QgcG9wdXBCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBwb3B1cFN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICB0aXRsZUlucHV0Lm5hbWUgPSBcInRpdGxlXCI7XG4gIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRpdGxlIChtYXggMzAgY2hhcmFjdGVycylcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAvLyBDcmVhdGUgaW5wdXQgZm9yIGRlc2NyaXB0aW9uXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uIChvcHRpb25hbCAmIG1heCAyNCBjaGFyYWN0ZXJzKVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIC8vIENyZWF0ZSBpbnB1dCBmb3IgZHVlIGRhdGVcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICBkdWVEYXRlSW5wdXQubmFtZSA9IFwiZHVlRGF0ZVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgLy8gQ3JlYXRlIHNlbGVjdCBmb3IgcHJpb3JpdHlcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcmlvcml0eVNlbGVjdC5uYW1lID0gXCJwcmlvcml0eVwiO1xuICBjb25zdCBwcmlvcml0aWVzID0gW1wibG93XCIsIFwibWVkaXVtXCIsIFwiaGlnaFwiXTtcbiAgcHJpb3JpdGllcy5mb3JFYWNoKChwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHk7XG4gICAgb3B0aW9uLnRleHQgPSBwcmlvcml0eTtcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG5cbiAgLy8gQ3JlYXRlIHN1Ym1pdCBidXR0b25cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiQWRkIFRvLURvXCI7XG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGN1cnJlbnREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIGxldCBkdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZUlucHV0LnZhbHVlKTtcbiAgICBkdWVEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIGlmIChkdWVEYXRlIDwgY3VycmVudERhdGUpIHtcbiAgICAgIGFsZXJ0KFwiRG9uJ3QgZ28gYmFjayB0byB0aGUgZnV0dXJlIVwiKTtcbiAgICB9IGVsc2UgaWYgKHRpdGxlSW5wdXQudmFsdWUubGVuZ3RoID4gMzApIHtcbiAgICAgIGFsZXJ0KFwiVGl0bGUgbXVzdCBiZSAzMCBjaGFyYWN0ZXJzIG9yIGxlc3MhXCIpO1xuICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb25JbnB1dC52YWx1ZS5sZW5ndGggPiAyNCkge1xuICAgICAgYWxlcnQoXCJEZXNjcmlwdGlvbiBtdXN0IGJlIDI0IGNoYXJhY3RlcnMgb3IgbGVzcyFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFRvRG8oXG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QudmFsdWVcbiAgICAgICk7XG4gICAgICBwb3B1cEJhY2tncm91bmQucmVtb3ZlKCk7XG4gICAgICBnZW5lcmF0ZVRvZG9zKCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVUb2RvcygpO1xuICB9KTtcblxuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gIGNvbnN0IHBvcHVwQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcG9wdXBCYWNrZ3JvdW5kLmNsYXNzTGlzdCA9IFwicG9wdXAtYmFja2dyb3VuZFwiO1xuICBwb3B1cC5jbGFzc0xpc3QgPSBcInBvcHVwXCI7XG4gIHBvcHVwVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBUby1Eb1wiO1xuICBwb3B1cFN1YnRpdGxlLnRleHRDb250ZW50ID0gYCR7c3RhdGUuY3VycmVudFByb2plY3QubmFtZX1gO1xuXG4gIHBvcHVwQnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIHBvcHVwQnV0dG9uLmNsYXNzTGlzdCA9IFwicG9wdXAtYnV0dG9uXCI7XG4gIHBvcHVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcG9wdXBCYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICB9KTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUaXRsZSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwU3VidGl0bGUpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBCdXR0b24pO1xuICBwb3B1cEJhY2tncm91bmQuYXBwZW5kQ2hpbGQocG9wdXApO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwQmFja2dyb3VuZCk7XG59XG4iLCJpbXBvcnQgeyB0b0RvTGlzdCB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRvZG9zIH0gZnJvbSBcIi4vZ2VuZXJhdGVUb2Rvc1wiO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VtZW50XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU5hdmJhciB9IGZyb20gXCIuL2dlbmVyYXRlTmF2YmFyXCI7XG5jb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kb1wiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdHMoKSB7XG4gIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcbiAgcHJvamVjdHNEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgZ2VuZXJhdGVOYXZiYXIodG9Eb0xpc3QpO1xuICB0b0RvTGlzdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7IC8vIFNldCB0ZXh0Q29udGVudCBoZXJlXG5cbiAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICBjb25zdCBwcm9qZWN0c0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBwcm9qZWN0c0RlbGV0ZS5zdHlsZS5vcGFjaXR5ID0gXCIwJVwiO1xuICAgICAgcHJvamVjdHNEZWxldGUuY2xhc3NMaXN0ID0gXCJwcm9qZWN0LWRlbGV0ZS1idXR0b25cIjtcbiAgICAgIHByb2plY3RzRGVsZXRlLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIiBzdHlsZT1cImZvbnQtc2l6ZToxLjI1cmVtO1wiPjwvaT5gO1xuICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0RlbGV0ZSk7IC8vIEFwcGVuZCB0aGUgZGVsZXRlIGJ1dHRvbiBhZnRlciBzZXR0aW5nIHRleHRDb250ZW50XG5cbiAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RzRGVsZXRlLnN0eWxlLm9wYWNpdHkgPSBcIjEwMCVcIjtcbiAgICAgIH0pO1xuICAgICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0c0RlbGV0ZS5zdHlsZS5vcGFjaXR5ID0gXCIwJVwiO1xuICAgICAgfSk7XG4gICAgICBwcm9qZWN0c0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0ID0gXCJwcm9qZWN0IGFjdGl2ZVwiO1xuICAgIH0gZWxzZSBwcm9qZWN0RGl2LmNsYXNzTGlzdCA9IFwicHJvamVjdFwiO1xuXG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWRkVG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgcHJvamVjdHNEaXYuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBzdGF0ZS5jdXJyZW50UHJvamVjdCA9IHRvRG9MaXN0LnByb2plY3RzLmZpbmQoXG4gICAgICAgIChwcm9qZWN0TmFtZSkgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZS5uYW1lXG4gICAgICApO1xuICAgICAgZ2VuZXJhdGVUb2RvcygpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IGZpbmlzaFRvZG8gfSBmcm9tIFwiLi90b2RvTWFuYWdlbWVudC5qc1wiO1xuaW1wb3J0IHsgZGVsZXRlUG9wdXAgfSBmcm9tIFwiLi9kZWxldGVQb3B1cC5qc1wiO1xuaW1wb3J0IHsgdXBkYXRlVG9kb1BvcHVwIH0gZnJvbSBcIi4vZWRpdFRvZG8uanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRvZG9zKCkge1xuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0XCIpO1xuXG4gIHRvZG9MaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIHN0YXRlLmN1cnJlbnRQcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBsZXQgYm9yZGVyQ29sb3I7XG4gICAgc3dpdGNoICh0b2RvLnByaW9yaXR5KSB7XG4gICAgICBjYXNlIFwibG93XCI6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJncmVlblwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBib3JkZXJDb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcblxuICAgIC8vIGlmICh0b2RvLmRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvRGVzYy50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcblxuICAgIHRvZG9EaXYuc3R5bGUuYm9yZGVyID0gYDNweCBzb2xpZCAke2JvcmRlckNvbG9yfWA7XG5cbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0ID0gXCJ0b2RvLWJ1dHRvbiBlZGl0LWJ1dHRvblwiO1xuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID1cbiAgICAgICc8aSBjbGFzcz1cImZhIGZhLWVkaXRcIiBzdHlsZT1cImZvbnQtc2l6ZToxLjVyZW07XCI+PC9pPic7XG5cbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB1cGRhdGVUb2RvUG9wdXAodG9kbykpO1xuXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdCA9IFwidG9kby1idXR0b24gZGVsZXRlLWJ1dHRvblwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCIgc3R5bGU9XCJmb250LXNpemU6MS41cmVtO1wiPjwvaT5gO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGVsZXRlUG9wdXAodG9kbyk7XG4gICAgfSk7XG5cbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICBjb25zdCBmaW5pc2hlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZmluaXNoZWRCdXR0b24uY2xhc3NMaXN0ID0gXCJ0b2RvLWJ1dHRvbiBmaW5pc2hlZC1idXR0b25cIjtcbiAgICBmaW5pc2hlZEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJnZy1jaGVja1wiPjwvaT4nO1xuICAgIGZpbmlzaGVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBmaW5pc2hUb2RvKHRvZG8pO1xuICAgIH0pO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZmluaXNoZWRCdXR0b24pO1xuXG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gIH0pO1xufVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBUb0RvTGlzdCB9IGZyb20gXCIuL3RvRG9MaXN0LmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vdG9Eb1Byb2plY3QuanNcIjtcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi90b0RvQ2xhc3MuanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlTmF2YmFyIH0gZnJvbSBcIi4vZ2VuZXJhdGVOYXZiYXIuanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlUG9wdXAgfSBmcm9tIFwiLi9nZW5lcmF0ZVBvcHVwLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRvZG9zIH0gZnJvbSBcIi4vZ2VuZXJhdGVUb2Rvcy5qc1wiO1xuaW1wb3J0IHsgbG9hZFN0b3JhZ2UsIHNhdmVEYXRhIH0gZnJvbSBcIi4vd2Vic3RvcmFnZS5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVQcm9qZWN0cyB9IGZyb20gXCIuL2dlbmVyYXRlUHJvamVjdHMuanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlQWN0aXZpdHlMb2cgfSBmcm9tIFwiLi9hY3Rpdml0eWxvZy5qc1wiO1xuaW1wb3J0IHsgY2hlY2tEYXRlcyB9IGZyb20gXCIuL2NoZWNrRGF0ZXMuanNcIjtcbmV4cG9ydCBjb25zdCB0b0RvTGlzdCA9IG5ldyBUb0RvTGlzdCgpO1xuXG5sb2FkU3RvcmFnZSgpO1xuY2hlY2tEYXRlcygpO1xuZ2VuZXJhdGVOYXZiYXIodG9Eb0xpc3QpO1xuZ2VuZXJhdGVQcm9qZWN0cyh0b0RvTGlzdCk7XG5leHBvcnQgY29uc3Qgc3RhdGUgPSB7XG4gIGN1cnJlbnRQcm9qZWN0OiB0b0RvTGlzdC5wcm9qZWN0c1swXSxcbn07XG5nZW5lcmF0ZVRvZG9zKCk7XG5cbmNvbnN0IGFkZFRvRG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpO1xuYWRkVG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2VuZXJhdGVQb3B1cCk7XG5cbmNvbnN0IGFjdGl2aXR5TG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3Rpdml0eS1sb2ctYnV0dG9uXCIpO1xuYWN0aXZpdHlMb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZ2VuZXJhdGVBY3Rpdml0eUxvZygpO1xufSk7XG5zYXZlRGF0YSgpO1xuIiwiaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVQcm9qZWN0cyB9IGZyb20gXCIuL2dlbmVyYXRlUHJvamVjdHNcIjtcbmltcG9ydCB7IGdlbmVyYXRlVG9kb3MgfSBmcm9tIFwiLi9nZW5lcmF0ZVRvZG9zXCI7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuL3dlYnN0b3JhZ2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgaWYgKHByb2plY3QubmFtZSAhPT0gXCJnZW5lcmFsIFwiKSB7XG4gICAgdG9Eb0xpc3QucHJvamVjdHMgPSB0b0RvTGlzdC5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAocHJvamVjdE5hbWUpID0+IHByb2plY3QgIT09IHByb2plY3ROYW1lXG4gICAgKTtcblxuICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0ID0gdG9Eb0xpc3QucHJvamVjdHNbMF07XG5cbiAgICBnZW5lcmF0ZVByb2plY3RzKCk7XG4gICAgZ2VuZXJhdGVUb2RvcygpO1xuICAgIHNhdmVEYXRhKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICh0aGlzLnRpdGxlID0gdGl0bGUpLFxuICAgICAgKHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiB8fCBcIlwiKSxcbiAgICAgICh0aGlzLmR1ZURhdGUgPSBkdWVEYXRlKSxcbiAgICAgICh0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHkpLFxuICAgICAgKHRoaXMuZmluaXNoZWQgPSBmYWxzZSk7XG4gIH1cbiAgdXBkYXRlVGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cbiAgdXBkYXRlRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbiAgdXBkYXRlRHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuICB1cGRhdGVQcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuICB1cGRhdGVOb3Rlcyhub3Rlcykge1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgfVxuICB0b2dnbGVGaW5pc2hlZCgpIHtcbiAgICB0aGlzLmZpbmlzaGVkID0gIXRoaXMuZmluaXNoZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi90b0RvUHJvamVjdC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVG9Eb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW25ldyBQcm9qZWN0KFwiR2VuZXJhbFwiKV07XG4gICAgdGhpcy5hY3Rpdml0eUxvZyA9IFtdO1xuICB9XG4gIGFkZFByb2plY3QobmFtZSkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChuYW1lKSk7XG4gIH1cbiAgYWRkQWN0aXZpdHlMb2cobWVzc2FnZSwgdGltZSwgc3RhdGUpIHtcbiAgICB0aGlzLmFjdGl2aXR5TG9nLnB1c2goW21lc3NhZ2UsIHRpbWUsIHN0YXRlXSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi90b0RvQ2xhc3MuanNcIjtcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGF0YSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50b2RvcyA9IFtdIHx8IGRhdGE7XG4gIH1cbiAgYWRkVG9Ebyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRvZG9zLnB1c2gobmV3IFRvRG8odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IGZpbmlzaFRvZG8gfSBmcm9tIFwiLi90b2RvTWFuYWdlbWVudC5qc1wiO1xuaW1wb3J0IHsgZGVsZXRlUG9wdXAgfSBmcm9tIFwiLi9kZWxldGVQb3B1cC5qc1wiO1xuaW1wb3J0IHsgdXBkYXRlVG9kb1BvcHVwIH0gZnJvbSBcIi4vZWRpdFRvZG8uanNcIjtcbmNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUb2RheSgpIHtcbiAgY29uc3QgdG9kYXlUb2RvcyA9IFtdO1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XG4gIHRvRG9MaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGUodG9kby5kdWVEYXRlKS50b0RhdGVTdHJpbmcoKSA9PT0gdG9kYXk7XG4gICAgfSk7XG4gICAgdG9kYXlUb2Rvcy5wdXNoKHRvZG9zKTtcbiAgfSk7XG5cbiAgY29uc3QgdG9kYXlUb2Rvc0ZsYXQgPSB0b2RheVRvZG9zLmZsYXQoKTtcbiAgZ2VuZXJhdGVUb2RvczIodG9kYXlUb2Rvc0ZsYXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVXZWVrKCkge1xuICBjb25zdCB3ZWVrVG9kb3MgPSBbXTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdG9kYXlEYXlPZldlZWsgPSBub3cuZ2V0RGF5KCk7XG4gIGNvbnN0IGRheXNVbnRpbEVuZE9mTmV4dFdlZWsgPSAxMyAtIHRvZGF5RGF5T2ZXZWVrO1xuICBub3cuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgY29uc3QgbmV4dFdlZWsgPSBuZXcgRGF0ZShub3cpO1xuICBuZXh0V2Vlay5zZXREYXRlKG5vdy5nZXREYXRlKCkgKyBkYXlzVW50aWxFbmRPZk5leHRXZWVrKTtcbiAgbmV4dFdlZWsuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIG5leHRXZWVrLnNldERhdGUobm93LmdldERhdGUoKSArIDcpO1xuICB0b0RvTGlzdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSk7XG4gICAgICByZXR1cm4gZHVlRGF0ZSA+PSBub3cgJiYgZHVlRGF0ZSA8PSBuZXh0V2VlaztcbiAgICB9KTtcbiAgICB3ZWVrVG9kb3MucHVzaCh0b2Rvcyk7XG4gIH0pO1xuXG4gIGNvbnN0IHdlZWtUb2Rvc0ZsYXQgPSB3ZWVrVG9kb3MuZmxhdCgpO1xuICBnZW5lcmF0ZVRvZG9zMih3ZWVrVG9kb3NGbGF0KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2RvczIobGlzdCkge1xuICBhZGRUb2RvQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tbGlzdFwiKTtcbiAgdG9kb0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgbGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgbGV0IGJvcmRlckNvbG9yO1xuICAgIHN3aXRjaCAodG9kby5wcmlvcml0eSkge1xuICAgICAgY2FzZSBcImxvd1wiOlxuICAgICAgICBib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgIGJvcmRlckNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICBib3JkZXJDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYm9yZGVyQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgfVxuXG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG5cbiAgICAvLyBpZiAodG9kby5kZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb0Rlc2MudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuICAgIC8vIH1cblxuICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG5cbiAgICB0b2RvRGl2LnN0eWxlLmJvcmRlciA9IGAzcHggc29saWQgJHtib3JkZXJDb2xvcn1gO1xuXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdCA9IFwidG9kby1idXR0b24gZWRpdC1idXR0b25cIjtcbiAgICBlZGl0QnV0dG9uLmlubmVySFRNTCA9XG4gICAgICAnPGkgY2xhc3M9XCJmYSBmYS1lZGl0XCIgc3R5bGU9XCJmb250LXNpemU6MS41cmVtO1wiPjwvaT4nO1xuXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdXBkYXRlVG9kb1BvcHVwKHRvZG8pKTtcblxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QgPSBcInRvZG8tYnV0dG9uIGRlbGV0ZS1idXR0b25cIjtcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiIHN0eWxlPVwiZm9udC1zaXplOjEuNXJlbTtcIj48L2k+YDtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRlbGV0ZVBvcHVwKHRvZG8pO1xuICAgIH0pO1xuXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgY29uc3QgZmluaXNoZWRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGZpbmlzaGVkQnV0dG9uLmNsYXNzTGlzdCA9IFwidG9kby1idXR0b24gZmluaXNoZWQtYnV0dG9uXCI7XG4gICAgZmluaXNoZWRCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZ2ctY2hlY2tcIj48L2k+JztcbiAgICBmaW5pc2hlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZmluaXNoVG9kbyh0b2RvKTtcbiAgICB9KTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGZpbmlzaGVkQnV0dG9uKTtcblxuICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGdlbmVyYXRlVG9kb3MgfSBmcm9tIFwiLi9nZW5lcmF0ZVRvZG9zXCI7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gXCIuL3dlYnN0b3JhZ2VcIjtcbmltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcbmV4cG9ydCBmdW5jdGlvbiBmaW5pc2hUb2RvKGZpbmlzaGVkVG9kbykge1xuICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgdG9Eb0xpc3QuYWRkQWN0aXZpdHlMb2coZmluaXNoZWRUb2RvLCBjdXJyZW50VGltZSwgYGZpbmlzaGVkYCk7XG4gIHN0YXRlLmN1cnJlbnRQcm9qZWN0LnRvZG9zID0gc3RhdGUuY3VycmVudFByb2plY3QudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgcmV0dXJuIHRvZG8gIT0gZmluaXNoZWRUb2RvO1xuICB9KTtcblxuICBnZW5lcmF0ZVRvZG9zKCk7XG4gIHNhdmVEYXRhKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUb2RvKGRlbGV0ZWRUb2RvKSB7XG4gIHN0YXRlLmN1cnJlbnRQcm9qZWN0LnRvZG9zID0gc3RhdGUuY3VycmVudFByb2plY3QudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgcmV0dXJuIHRvZG8gIT0gZGVsZXRlZFRvZG87XG4gIH0pO1xuICBnZW5lcmF0ZVRvZG9zKCk7XG4gIHNhdmVEYXRhKCk7XG59XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZU5hdmJhciB9IGZyb20gXCIuL2dlbmVyYXRlTmF2YmFyLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRvZG9zIH0gZnJvbSBcIi4vZ2VuZXJhdGVUb2Rvcy5qc1wiO1xuaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL3RvRG9DbGFzcy5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3RvRG9Qcm9qZWN0LmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gc2F2ZURhdGEoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTdG9yYWdlKCkge1xuICBsZXQgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0xpc3RcIik7XG4gIGlmIChzdG9yZWREYXRhKSB7XG4gICAgbGV0IHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuICAgIHRvRG9MaXN0LmFjdGl2aXR5TG9nID0gcGFyc2VkRGF0YS5hY3Rpdml0eUxvZztcbiAgICB0b0RvTGlzdC5wcm9qZWN0cyA9IHBhcnNlZERhdGEucHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3QubmFtZSwgcHJvamVjdC50b2Rvcyk7XG4gICAgICBuZXdQcm9qZWN0LnRvZG9zID0gcHJvamVjdC50b2Rvcy5tYXAoXG4gICAgICAgICh0b2RvKSA9PlxuICAgICAgICAgIG5ldyBUb0RvKHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZHVlRGF0ZSwgdG9kby5wcmlvcml0eSlcbiAgICAgICk7XG4gICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=