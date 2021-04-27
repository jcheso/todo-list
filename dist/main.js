/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* * {\\n  box-sizing: border-box;\\n} */\\n\\nbody {\\n  margin: 0px;\\n  font-family: \\\"Trebuchet MS\\\", \\\"Lucida Sans Unicode\\\", \\\"Lucida Grande\\\",\\n    \\\"Lucida Sans\\\", Arial, sans-serif;\\n  color: #313638;\\n  /* background-color: #313638; */\\n}\\n\\n.container {\\n  margin: auto;\\n  max-width: 1024px;\\n}\\n\\n.todo-wrapper {\\n  padding: 10px;\\n  background-color: white;\\n  border-radius: 10px;\\n  border: #dbdbdb solid 2px;\\n}\\n\\nheader {\\n  background-color: #bfc0c0;\\n  color: #2d3142;\\n  text-transform: uppercase;\\n}\\n\\n.todo-title {\\n  font-weight: 600;\\n}\\n\\n#main {\\n  display: flex;\\n  min-height: calc(100vh - 5vh);\\n}\\n\\n#main > .todo-content {\\n  flex: 1;\\n}\\n#main > .side-bar {\\n  flex: 0 0 15vw;\\n}\\n\\n#main > .side-bar {\\n  order: -1;\\n}\\n\\nheader,\\n.todo-content,\\n.side-bar {\\n  padding: 1em;\\n}\\n\\n.divider {\\n  border: #383b5c solid 0.5px;\\n  border-radius: 10px;\\n  width: 100%;\\n}\\n\\n.side-bar {\\n  background-color: #2d3142;\\n  font-size: large;\\n}\\n\\n.side-bar-btn {\\n  padding: 10px;\\n  width: 100%;\\n  border: none;\\n  border-radius: 5px;\\n  color: white;\\n  font-weight: 400;\\n  text-transform: uppercase;\\n  margin: 5px 5px 5px 0;\\n  cursor: pointer;\\n  opacity: 0.9;\\n}\\n\\n.task-button {\\n  width: auto;\\n}\\n.main-color {\\n  background-color: #4f5d75;\\n}\\n\\n.secondary-color {\\n  background-color: #ef8354;\\n}\\n\\n.accent-color {\\n  background-color: #ecae52;\\n}\\n\\n.side-bar-field {\\n  display: flex;\\n  width: 100%;\\n}\\n\\n.side-bar-input {\\n  flex-grow: 1;\\n  padding: 10px 8px 10px 8px;\\n  color: #313638;\\n  width: 50%;\\n  border-radius: 5px;\\n  border: none;\\n  margin: 5px 5px 5px 0;\\n  cursor: text;\\n}\\n\\n.new-group-btn {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 5px;\\n  padding: 0 10px 0 10px;\\n  border: none;\\n  background-color: #4f5d75;\\n  font-weight: 400;\\n  color: #ffffff;\\n  font-size: larger;\\n  text-transform: uppercase;\\n  margin: 5px 0 5px 0;\\n  cursor: pointer;\\n  opacity: 0.9;\\n}\\n\\n.group-list {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  text-align: center;\\n}\\n\\n.group-item {\\n  display: flex;\\n  flex-direction: row;\\n  padding: 5px 0 5px 0;\\n  text-align: center;\\n}\\n.todo-content {\\n  background-color: #ffffff;\\n}\\n\\n.todo-header {\\n  display: flex;\\n  flex-direction: row;\\n  padding: 10px;\\n  font-size: x-large;\\n  font-weight: 800;\\n  color: #313638;\\n  text-transform: uppercase;\\n}\\n\\n.todo-list-header {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  border-bottom: 2px solid #313638;\\n  padding: 10px 10px 10px 20px;\\n  margin: 10px 10px 30px 10px;\\n  font-weight: 600;\\n  text-transform: uppercase;\\n}\\n\\n.todo-item {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.todo-item-display {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: left;\\n  padding: 10px 10px 10px 20px;\\n  margin: 10px;\\n}\\n\\n.todo-item-container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-evenly;\\n  width: 100%;\\n  align-items: center;\\n}\\n\\n.todo-item-high {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  margin: 10px;\\n  background-color: rgb(243, 145, 145);\\n  border-radius: 15px;\\n}\\n\\n.todo-item-medium {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  margin: 10px;\\n  background-color: rgb(243, 223, 135);\\n  border-radius: 15px;\\n}\\n\\n.todo-item-low {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  margin: 10px;\\n  background-color: rgb(209, 247, 153);\\n  border-radius: 15px;\\n}\\n\\n.todo-item-complete {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  margin: 10px;\\n  text-decoration: line-through;\\n  background-color: grey;\\n  border-radius: 15px;\\n  opacity: 0.5;\\n}\\n\\n.todo-item-description {\\n  padding: 10px 10px 20px 25px;\\n}\\n\\n/* Button used to open the contact form - fixed at the bottom of the page */\\n.open-button {\\n  padding: 16px 20px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 5px;\\n  border: none;\\n  background-color: #4f5d75;\\n  font-weight: 400;\\n  color: white;\\n  font-size: larger;\\n  text-transform: uppercase;\\n  margin: 5px 0 5px 0;\\n  cursor: pointer;\\n  position: fixed;\\n  bottom: 23px;\\n  right: 25px;\\n  width: 180px;\\n  opacity: 0.9;\\n}\\n\\n/* The popup form - hidden by default */\\n.form-popup {\\n  display: none;\\n  position: fixed;\\n  bottom: 5px;\\n  right: 225px;\\n  right: 5px;\\n  z-index: 9;\\n  padding: 10px;\\n  background-color: white;\\n  border-radius: 10px;\\n  border: #dbdbdb solid 2px;\\n}\\n\\n/* Add styles to the form container */\\n.add-task-form {\\n  max-width: 400px;\\n  padding: 10px;\\n  background-color: white;\\n  font-weight: 600;\\n}\\n\\n.radio-buttons {\\n  font-weight: 300;\\n}\\n\\n/* Full-width input fields */\\n.add-task-form input[type=\\\"text\\\"] {\\n  width: 100%;\\n  padding: 15px 0px 15px 0px;\\n  margin: 5px 0 22px 0;\\n  border: none;\\n  background: #e8e9eb;\\n  color: #313638;\\n}\\n\\n.add-task-form input[type=\\\"date\\\"] {\\n  width: 100%;\\n  padding: 15px 0px 15px 0px;\\n  margin: 5px 0 22px 0;\\n  border: none;\\n  background: #e8e9eb;\\n  color: #313638;\\n}\\n\\n.add-task-form input[type=\\\"radio\\\"] {\\n  padding: 15px 0px 15px 0px;\\n  margin: 5px 0 22px 0;\\n  border: none;\\n  background: #e8e9eb;\\n  color: #313638;\\n}\\n\\n.select-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.select-box {\\n  padding: 15px 0px 15px 0px;\\n  margin: 5px 0 22px 0;\\n  border: none;\\n  background: #e8e9eb;\\n  color: #4f5d75;\\n}\\n.add-task-form .button {\\n  background-color: #f06543;\\n  color: #4f5d75;\\n  padding: 16px 20px;\\n  border: none;\\n  cursor: pointer;\\n  opacity: 0.9;\\n  position: fixed;\\n  bottom: 23px;\\n  right: 23px;\\n  width: 180px;\\n}\\n\\n.add-task-form .button:hover,\\n.open-button:hover,\\n.close-button:hover,\\n.new-group-btn:hover,\\n.side-bar-btn:hover {\\n  opacity: 1;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/clear_white_24dp.svg":
/*!*****************************************!*\
  !*** ./src/assets/clear_white_24dp.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3cc27fbef373f7279e51.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/clear_white_24dp.svg?");

/***/ }),

/***/ "./src/assets/delete_white_24dp.svg":
/*!******************************************!*\
  !*** ./src/assets/delete_white_24dp.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68aade56655f922f91f9.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/delete_white_24dp.svg?");

/***/ }),

/***/ "./src/assets/done_white_24dp.svg":
/*!****************************************!*\
  !*** ./src/assets/done_white_24dp.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ad4c28841e4fa9d960f4.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/done_white_24dp.svg?");

/***/ }),

/***/ "./src/assets/expand_less_white_24dp.svg":
/*!***********************************************!*\
  !*** ./src/assets/expand_less_white_24dp.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f0cc1e85133e1cfbb25e.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/expand_less_white_24dp.svg?");

/***/ }),

/***/ "./src/assets/expand_more_white_24dp.svg":
/*!***********************************************!*\
  !*** ./src/assets/expand_more_white_24dp.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c20ca823560c4209d6b0.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/expand_more_white_24dp.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_clear_white_24dp_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/clear_white_24dp.svg */ \"./src/assets/clear_white_24dp.svg\");\n/* harmony import */ var _assets_delete_white_24dp_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/delete_white_24dp.svg */ \"./src/assets/delete_white_24dp.svg\");\n/* harmony import */ var _assets_done_white_24dp_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/done_white_24dp.svg */ \"./src/assets/done_white_24dp.svg\");\n/* harmony import */ var _assets_expand_more_white_24dp_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/expand_more_white_24dp.svg */ \"./src/assets/expand_more_white_24dp.svg\");\n/* harmony import */ var _assets_expand_less_white_24dp_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/expand_less_white_24dp.svg */ \"./src/assets/expand_less_white_24dp.svg\");\n/* **Feature List**\n- Add tasks to a group with due date, description and priority.\n- Expand task to show description\n- Add custom groups\n- Delete groups and all tasks in it\n- Mark tasks complete or delete individual tasks\n- Highlight tasks based on their priority\n*/\n\n\n// import addWhite from './assets/add_white_24dp.svg';\n\n\n\n\n\n\n\n//Factory to create new Todo items - properties to incl. title, description, dueDate, priority and status\nconst taskFactory = (task, description, group, dueDate, priority) => {\n  let expandDescription = false;\n  let isComplete = false;\n  return {\n    task,\n    description,\n    group,\n    dueDate,\n    priority,\n    isComplete,\n    expandDescription,\n  };\n};\n\n//Module to modify the Todo item - create new Todo, setting todo as complete, changing priority\nconst taskController = (() => {\n  let taskList = [];\n  let groupList = [\"View All\", \"General\"];\n  let currentGroup = \"View All\";\n\n  const addTask = () => {\n    const taskFormData = displayController.getTaskForm(event);\n    taskList.push(\n      taskFactory(\n        taskFormData.task,\n        taskFormData.description,\n        taskFormData.group,\n        taskFormData.dueDate,\n        taskFormData.priority\n      )\n    );\n    if (currentGroup !== taskFormData.group) {\n      currentGroup = \"View All\";\n      displayGroup(currentGroup);\n    } else {\n      displayGroup(currentGroup);\n    }\n  };\n\n  const markTaskComplete = (event) => {\n    const id = event.target.parentElement.parentElement.parentElement.id;\n    if (taskList[id].isComplete) {\n      taskList[id].isComplete = false;\n    } else {\n      taskList[id].isComplete = true;\n    }\n    displayController.markTaskComplete(id, taskList[id].priority);\n  };\n\n  const deleteTask = (event) => {\n    const id = event.target.parentElement.parentElement.parentElement.id;\n    taskList.splice(id, 1, \"\");\n    displayController.deleteElement(id);\n  };\n\n  const deleteGroup = (event) => {\n    const groupName = event.target.parentElement.parentElement.id;\n    const id = groupList.indexOf(groupName);\n    // Delete the option from the dropdown\n    displayController.deleteElement(groupName);\n    // Delete the group from the array\n    groupList.splice(id, 1, \"\");\n    // Delete the group from the DOM\n    displayController.deleteElement(groupName);\n    // Check if tasks are under the group, if so delete the tasks\n    taskList.forEach((taskObj, index) => {\n      // For each task, check if the taskList.group = groupName\n      if (taskObj.group == groupName) {\n        taskList.splice(index, 1, \"\");\n        displayController.deleteElement(index);\n      }\n    });\n  };\n\n  const addGroup = () => {\n    // Get form variables from DOM input function\n    const newGroup = displayController.getGroupForm(event);\n    // Check if existing and add to array\n    if (groupList.includes(newGroup)) {\n      alert(\"This group already exists\");\n    } else {\n      groupList.push(newGroup);\n      displayController.addGroup(newGroup, groupList.length - 1);\n    }\n  };\n\n  const displayAll = () => {\n    taskList.forEach((taskObj, index) => {\n      displayController.addTask(taskObj, index);\n    });\n  };\n\n  const getGroupName = () => {\n    const groupName = event.target.id;\n    currentGroup = groupName;\n    displayGroup(groupName);\n  };\n\n  const displayGroup = (groupName) => {\n    // Clear current groups\n    displayController.clearTaskDisplay();\n    displayController.updateGroupHeader(groupName);\n    // If groupName is View all - just display all instead.\n    if (groupName == \"View All\") {\n      displayAll();\n    } else\n      taskList.forEach((taskObj, index) => {\n        if (taskObj.group == groupName) {\n          displayController.addTask(taskObj, index);\n        }\n      });\n  };\n\n  const displayDescription = () => {\n    const id = event.target.parentElement.parentElement.parentElement.id;\n    console.log(id);\n    const taskObj = taskList[id];\n    //Triggered by onclick element on the group.\n    // Get the id of the task\n    if (!taskObj.expandDescription) {\n      displayController.expandDescription(id, taskObj);\n      taskObj.expandDescription = true;\n    } else {\n      displayController.hideDescription(id, taskObj);\n      taskObj.expandDescription = false;\n    }\n\n    // Run a function in displayController to insert a div below the task with the description\n    // Function checks if div exists already, if so, delete it instead of adding\n  };\n\n  return {\n    addTask,\n    markTaskComplete,\n    deleteTask,\n    addGroup,\n    deleteGroup,\n    displayGroup,\n    currentGroup,\n    getGroupName,\n    displayDescription,\n  };\n})();\n\n//Module to handle DOM related stuff - eventListeners, insert new item, delete item, expand a todo, show priority (color)\nconst displayController = (() => {\n  const openForm = () =>\n    (document.getElementById(\"myForm\").style.display = \"block\");\n\n  const closeForm = () =>\n    (document.getElementById(\"myForm\").style.display = \"none\");\n\n  const getTaskForm = (event) => {\n    const task = document.getElementById(\"task\").value;\n    const description = document.getElementById(\"description\").value;\n    const group = document.getElementById(\"group\").value;\n    const dueDate = document.getElementById(\"due-date\").value;\n    let priority = \"\";\n    if (document.getElementById(\"priority-high\").checked) {\n      priority = \"high\";\n    } else if (document.getElementById(\"priority-medium\").checked) {\n      priority = \"medium\";\n    } else {\n      priority = \"low\";\n    }\n    event.preventDefault();\n    return { task, description, group, dueDate, priority };\n  };\n\n  const initialiseEventListeners = () => {\n    document.getElementById(\"close-btn\").addEventListener(\"click\", closeForm);\n    document.getElementById(\"open-btn\").addEventListener(\"click\", openForm);\n    document\n      .getElementById(\"View All\")\n      .addEventListener(\"click\", taskController.getGroupName);\n    document\n      .getElementById(\"General\")\n      .addEventListener(\"click\", taskController.getGroupName);\n    document\n      .getElementById(\"add-task-form\")\n      .addEventListener(\"submit\", taskController.addTask);\n    document\n      .getElementById(\"new-group-form\")\n      .addEventListener(\"submit\", taskController.addGroup);\n  };\n\n  const addDiv = (className, parentElement, innerHTML) => {\n    const newDiv = document.createElement(\"div\");\n    newDiv.setAttribute(\"class\", className);\n    newDiv.innerHTML = innerHTML;\n    parentElement.appendChild(newDiv);\n  };\n\n  //Add new task to DOM\n  const addTask = (taskObj, index) => {\n    const todoList = document.getElementById(\"todo-list-content\");\n\n    const todoItem = document.createElement(\"div\");\n    todoItem.setAttribute(\"class\", `todo-item-${taskObj.priority}`);\n    todoItem.setAttribute(\"id\", index);\n    todoList.appendChild(todoItem);\n\n    const todoItemDisplay = document.createElement(\"div\");\n    todoItemDisplay.setAttribute(\"class\", `todo-item-display`);\n    todoItem.appendChild(todoItemDisplay);\n\n    const todoItemExpand = document.createElement(\"button\");\n    todoItemExpand.setAttribute(\"class\", \"side-bar-btn task-button main-color\");\n    todoItemDisplay.appendChild(todoItemExpand);\n\n    const todoImageExpand = document.createElement(\"IMG\");\n    todoImageExpand.setAttribute(\"id\", `expand${index}`);\n    todoImageExpand.setAttribute(\"src\", expandWhite);\n    todoImageExpand.addEventListener(\n      \"click\",\n      taskController.displayDescription\n    );\n    todoItemExpand.appendChild(todoImageExpand);\n\n    const todoItemContainer = document.createElement(\"div\");\n    todoItemContainer.setAttribute(\"class\", `todo-item-container`);\n    todoItemDisplay.appendChild(todoItemContainer);\n\n    addDiv(\"todo-item-title\", todoItemContainer, taskObj.task);\n    addDiv(\"todo-item-group\", todoItemContainer, taskObj.group);\n    addDiv(\"todo-item-dueDate\", todoItemContainer, taskObj.dueDate);\n\n    const todoItemCompleteButton = document.createElement(\"button\");\n    todoItemCompleteButton.setAttribute(\n      \"class\",\n      \"side-bar-btn task-button main-color\"\n    );\n    todoItemDisplay.appendChild(todoItemCompleteButton);\n\n    const todoImage = document.createElement(\"IMG\");\n    todoImage.setAttribute(\"src\", _assets_done_white_24dp_svg__WEBPACK_IMPORTED_MODULE_3__);\n    todoImage.addEventListener(\"click\", taskController.markTaskComplete);\n\n    todoItemCompleteButton.appendChild(todoImage);\n\n    const todoItemDeleteButton = document.createElement(\"button\");\n    todoItemDeleteButton.setAttribute(\n      \"class\",\n      \"side-bar-btn task-button main-color\"\n    );\n    todoItemDisplay.appendChild(todoItemDeleteButton);\n\n    const todoImageDelete = document.createElement(\"IMG\");\n    todoImageDelete.setAttribute(\"src\", _assets_delete_white_24dp_svg__WEBPACK_IMPORTED_MODULE_2__);\n    todoImageDelete.addEventListener(\"click\", taskController.deleteTask);\n    todoItemDeleteButton.appendChild(todoImageDelete);\n  };\n\n  // Mark Complete\n  const markTaskComplete = (id, priority) => {\n    const task = document.getElementById(id);\n    const taskClass = task.getAttribute(\"class\");\n    if (taskClass == `todo-item-${priority}`) {\n      task.setAttribute(\"class\", \"todo-item-complete\");\n    } else {\n      task.setAttribute(\"class\", `todo-item-${priority}`);\n    }\n  };\n  // Delete task from DOM\n  const deleteElement = (id) => {\n    document.getElementById(id).remove();\n  };\n\n  // Add new group to DOM\n  // Collect form data, check if group name already exists.\n  const getGroupForm = (event) => {\n    const newGroup = document.getElementById(\"new-group\").value;\n    event.preventDefault();\n    return newGroup;\n  };\n  // Add the group to the select DOM, add the group to the side bar DOM\n  const addGroup = (newGroup, index) => {\n    const groupList = document.getElementById(\"group-list\");\n\n    const groupItem = document.createElement(\"div\");\n    groupItem.setAttribute(\"class\", \"side-bar-field\");\n    groupItem.setAttribute(\"id\", newGroup);\n    groupList.appendChild(groupItem);\n\n    const groupItemButton = document.createElement(\"button\");\n    groupItemButton.setAttribute(\"class\", \"side-bar-btn accent-color\");\n    groupItemButton.innerHTML = newGroup;\n    groupItemButton.setAttribute(\"id\", newGroup);\n    groupItemButton.addEventListener(\"click\", taskController.getGroupName);\n    groupItem.appendChild(groupItemButton);\n\n    const groupDeleteButton = document.createElement(\"button\");\n    groupDeleteButton.setAttribute(\"class\", \"new-group-btn \");\n    groupItem.appendChild(groupDeleteButton);\n\n    const groupDelete = document.createElement(\"IMG\");\n    groupDelete.setAttribute(\"src\", _assets_clear_white_24dp_svg__WEBPACK_IMPORTED_MODULE_1__);\n    groupDelete.addEventListener(\"click\", taskController.deleteGroup);\n    groupDeleteButton.appendChild(groupDelete);\n\n    const groupSelect = document.getElementById(\"group\");\n    const groupSelectOption = document.createElement(\"option\");\n    groupSelectOption.setAttribute(\"value\", newGroup);\n    groupSelectOption.setAttribute(\"id\", newGroup);\n    groupSelectOption.text = newGroup;\n    groupSelect.appendChild(groupSelectOption);\n  };\n\n  // Expand task to show description\n\n  // Change group\n  const clearTaskDisplay = () => {\n    const oldTodoList = document.getElementById(\"todo-list-content\");\n    oldTodoList.remove();\n\n    const newTodoList = document.createElement(\"div\");\n    newTodoList.setAttribute(\"id\", \"todo-list-content\");\n    newTodoList.setAttribute(\"class\", \"todo-list\");\n\n    const todoList = document.getElementById(\"todo-list\");\n    todoList.appendChild(newTodoList);\n  };\n\n  const updateGroupHeader = (currentGroup) => {\n    document.getElementById(\"todo-header\").innerText = currentGroup;\n  };\n\n  const expandDescription = (id, taskObj) => {\n    // Change graphic to expand less\n    const todoItemExpand = document.getElementById(`expand${id}`);\n    todoItemExpand.setAttribute(\"src\", _assets_expand_less_white_24dp_svg__WEBPACK_IMPORTED_MODULE_5__);\n    const todoItem = document.getElementById(id);\n\n    // Insert div below task with description\n    const todoItemDescription = document.createElement(\"div\");\n    todoItemDescription.setAttribute(\"class\", `todo-item-description`);\n    todoItemDescription.setAttribute(\"id\", `description-${taskObj.id}`);\n    todoItemDescription.innerText = taskObj.description;\n    todoItem.appendChild(todoItemDescription);\n  };\n\n  const hideDescription = (id, taskObj) => {\n    // Remove div with description\n    const todoItemDescription = document.getElementById(\n      `description-${taskObj.id}`\n    );\n    todoItemDescription.remove();\n    // Change icon back to expand more\n    const todoItemExpand = document.getElementById(`expand${id}`);\n    todoItemExpand.setAttribute(\"src\", _assets_expand_more_white_24dp_svg__WEBPACK_IMPORTED_MODULE_4__);\n  };\n\n  initialiseEventListeners();\n  updateGroupHeader(taskController.currentGroup);\n\n  return {\n    getTaskForm,\n    addTask,\n    markTaskComplete,\n    deleteElement,\n    getGroupForm,\n    addGroup,\n    clearTaskDisplay,\n    updateGroupHeader,\n    expandDescription,\n    hideDescription,\n  };\n})();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;