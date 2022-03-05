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

/***/ "./src/components/add-val.js":
/*!***********************************!*\
  !*** ./src/components/add-val.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addVal = val => {\n  let items = [];\n\n  try {\n    items = JSON.parse(localStorage.getItem('todo-list'));\n  } catch (e) {\n    throw new Error(`Error occured: ${e}`);\n  }\n\n  items = items === null ? [] : items;\n  const indexNum = items.length + 1;\n  const objItem = {\n    description: val,\n    completed: false,\n    index: indexNum\n  };\n\n  if (val !== '' && val !== ' ') {\n    items.push(objItem);\n    localStorage.setItem('todo-list', JSON.stringify(items));\n  }\n\n  return objItem;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addVal);\n\n//# sourceURL=webpack://todo-list/./src/components/add-val.js?");

/***/ }),

/***/ "./src/components/append-li.js":
/*!*************************************!*\
  !*** ./src/components/append-li.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst domElement = item => {\n  const ulElement = document.getElementById('list-cont');\n  const element = document.createElement('li');\n  element.className = 'todo-item';\n  element.id = `li-${item.index}`;\n  const label = document.createElement('label');\n  label.id = `label-${item.index}`;\n  label.className = 'label-item';\n  const checkBox = document.createElement('input');\n  checkBox.type = 'checkbox';\n  checkBox.className = 'checkbox-item';\n  checkBox.id = `checkbox-${item.index}`;\n  checkBox.checked = item.completed;\n  element.appendChild(checkBox);\n  const textTag = document.createElement('h4');\n  textTag.id = `text-id-${item.index}`;\n  textTag.textContent = `${item.description}`;\n  textTag.style.textDecoration = item.completed ? 'line-through' : 'none';\n  label.appendChild(textTag);\n  element.appendChild(label);\n  const optIcon = document.createElement('i');\n  optIcon.id = `option-${item.index}`;\n  optIcon.classList = 'fa fa-ellipsis-v option-menu';\n  optIcon.innerHTML = ' ';\n  element.appendChild(optIcon);\n  ulElement.appendChild(element);\n  return [label, optIcon, checkBox];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domElement);\n\n//# sourceURL=webpack://todo-list/./src/components/append-li.js?");

/***/ }),

/***/ "./src/components/delete-val.js":
/*!**************************************!*\
  !*** ./src/components/delete-val.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst deleteLi = id => {\n  let taskItemList = [];\n\n  try {\n    taskItemList = JSON.parse(localStorage.getItem('todo-list'));\n  } catch (e) {\n    throw new Error(`Error occured: ${e}`);\n  }\n\n  taskItemList = taskItemList.filter((word, el) => el + 1 !== id);\n  taskItemList.forEach((value, index) => {\n    value.index = index + 1;\n  });\n  localStorage.setItem('todo-list', JSON.stringify(taskItemList));\n  return true;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteLi);\n\n//# sourceURL=webpack://todo-list/./src/components/delete-val.js?");

/***/ }),

/***/ "./src/components/pure-mtd.js":
/*!************************************!*\
  !*** ./src/components/pure-mtd.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getActiveItem\": () => (/* binding */ getActiveItem),\n/* harmony export */   \"getCurrentDomVal\": () => (/* binding */ getCurrentDomVal),\n/* harmony export */   \"fetchCurrentItems\": () => (/* binding */ fetchCurrentItems),\n/* harmony export */   \"updateCheckboxDom\": () => (/* binding */ updateCheckboxDom),\n/* harmony export */   \"updateListDom\": () => (/* binding */ updateListDom),\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"makeEditable\": () => (/* binding */ makeEditable),\n/* harmony export */   \"multipleDelete\": () => (/* binding */ multipleDelete)\n/* harmony export */ });\nconst getActiveItem = item => {\n  const val = item.path[1].constructor.name;\n  const element = val === 'HTMLLabelElement' ? item.path[1].id : item.path[0].id;\n  return element;\n};\nconst getCurrentDomVal = id => {\n  const checkbox = document.getElementById(`checkbox-${id}`);\n  const checkboxVal = checkbox.checked;\n  const descElement = document.getElementById(`text-id-${id}`);\n  const desc = descElement.textContent;\n  return [checkboxVal, desc];\n};\nconst fetchCurrentItems = id => {\n  const [checked, desc] = getCurrentDomVal(id);\n  const summarizObj = {\n    description: desc,\n    completed: checked,\n    index: id\n  };\n  return summarizObj;\n};\nconst updateCheckboxDom = id => {\n  const element = document.getElementById(`text-id-${id}`);\n  const textDecor = element.style.textDecoration;\n  element.style.textDecoration = textDecor === 'line-through' ? 'none' : 'line-through';\n  return element.style.textDecoration;\n};\nconst updateListDom = obj => {\n  const li = document.getElementById(`li-${obj.index}`);\n  li.className = 'todo-item';\n  li.style.display = 'flow-root';\n  const label = document.getElementById(`label-${obj.index}`);\n  label.className = 'label-item';\n  const textInput = document.getElementById(`edit-${obj.index}`);\n  const textTag = document.createElement('h4');\n  textTag.id = `text-id-${obj.index}`;\n  textTag.textContent = `${obj.description}`;\n  textTag.style.textDecoration = obj.completed ? 'line-through' : 'none';\n  textInput.replaceWith(textTag);\n  const trashIcon = document.getElementById(`option-${obj.index}`);\n  const optIcon = document.createElement('i');\n  optIcon.id = `option-${obj.index}`;\n  optIcon.classList = 'fa fa-ellipsis-v option-menu';\n  optIcon.innerHTML = ' ';\n  trashIcon.replaceWith(optIcon);\n  return [textTag, optIcon];\n};\nconst getLocalStorage = () => {\n  let todoList = [];\n\n  try {\n    todoList = JSON.parse(localStorage.getItem('todo-list'));\n  } catch (e) {\n    throw new Error(`Error occured: ${e}`);\n  }\n\n  return todoList;\n};\nconst makeEditable = id => {\n  const activeItems = document.querySelectorAll('.active-li');\n  activeItems.forEach(item => item.classList.toggle('active-li'));\n  const activeLabels = document.querySelectorAll('.label-item-edit');\n  activeLabels.forEach(item => {\n    item.className = 'label-item';\n  });\n  const liID = `li-${id}`;\n  const currentLi = document.getElementById(liID);\n  currentLi.className = 'todo-item active-li';\n  const {\n    description,\n    index,\n    completed\n  } = fetchCurrentItems(id);\n  currentLi.innerHTML = '';\n  const checkbox = document.createElement('input');\n  checkbox.type = 'checkbox';\n  checkbox.className = 'checkbox-item';\n  checkbox.id = `checkbox-${index}`;\n  checkbox.checked = completed;\n  const label = document.createElement('label');\n  label.className = 'label-item-edit';\n  label.id = `label-${index}`;\n  const textInput = document.createElement('input');\n  textInput.type = 'text';\n  textInput.name = `edit-${index}`;\n  textInput.id = `edit-${index}`;\n  textInput.className = 'edit-input';\n  textInput.value = description;\n  label.appendChild(textInput);\n  const trashIcon = document.createElement('i');\n  trashIcon.id = `option-${index}`;\n  trashIcon.className = 'fa fa-trash option-menu';\n  [checkbox, label, trashIcon].forEach(item => currentLi.appendChild(item));\n  currentLi.style.display = 'flex';\n  return [textInput, checkbox, trashIcon];\n};\nconst multipleDelete = () => {\n  const checkedItems = document.querySelectorAll('input[type=checkbox]:checked');\n  const filtIds = [];\n  checkedItems.forEach((item, index) => {\n    const [, id] = item.id.split('-');\n    filtIds.push(+id);\n  });\n  let itemList = [];\n  itemList = getLocalStorage();\n  itemList = itemList.filter((val, index) => filtIds.indexOf(val.index) === -1);\n  itemList.forEach((val, index) => {\n    val.index = index + 1;\n  });\n  localStorage.setItem('todo-list', JSON.stringify(itemList));\n  return checkedItems;\n};\n\n//# sourceURL=webpack://todo-list/./src/components/pure-mtd.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _todo_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-controller.js */ \"./src/todo-controller.js\");\n/* harmony import */ var _components_pure_mtd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pure-mtd.js */ \"./src/components/pure-mtd.js\");\n\n\n\nconst addRemoveObj = new _todo_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst {\n  form\n} = addRemoveObj;\nform.addEventListener('submit', addRemoveObj.addElement);\naddRemoveObj.itemList();\naddRemoveObj.todoInputBox.focus();\nconst refreshIcon = document.getElementById('refresh-link');\nrefreshIcon.addEventListener('click', () => addRemoveObj.itemList());\nconst clearAllElement = document.getElementById('clear-completed');\nclearAllElement.addEventListener('click', () => {\n  (0,_components_pure_mtd_js__WEBPACK_IMPORTED_MODULE_2__.multipleDelete)();\n  addRemoveObj.itemList();\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todo-controller.js":
/*!********************************!*\
  !*** ./src/todo-controller.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _components_add_val_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/add-val.js */ \"./src/components/add-val.js\");\n/* harmony import */ var _components_append_li_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/append-li.js */ \"./src/components/append-li.js\");\n/* harmony import */ var _components_delete_val_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/delete-val.js */ \"./src/components/delete-val.js\");\n/* harmony import */ var _components_pure_mtd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pure-mtd.js */ \"./src/components/pure-mtd.js\");\n\n\n\n\nclass Todo {\n  constructor() {\n    this.form = document.getElementById('form-field');\n    this.todoInputBox = document.getElementById('input-field');\n  }\n\n  itemList = () => {\n    let todoList = [];\n    todoList = (0,_components_pure_mtd_js__WEBPACK_IMPORTED_MODULE_3__.getLocalStorage)();\n    todoList = todoList === null ? [] : todoList;\n    const prevList = document.querySelectorAll('.todo-item');\n    prevList.forEach(item => item.remove());\n    todoList.forEach(item => {\n      const [label, optIcon, checkBox] = (0,_components_append_li_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item);\n      optIcon.addEventListener('click', this.editDelete);\n      checkBox.addEventListener('click', event => {\n        this.updateItem({\n          event,\n          type: 'checkbox'\n        });\n      });\n      label.addEventListener('click', this.editDelete);\n    });\n  };\n  updateItem = ({\n    event,\n    type\n  }) => {\n    let currentList = [];\n    currentList = (0,_components_pure_mtd_js__WEBPACK_IMPORTED_MODULE_3__.getLocalStorage)();\n    currentList = currentList === null ? [] : currentList;\n    const currentInboxID = event.srcElement.id;\n    const [, id] = currentInboxID.split('-');\n    const currentElement = currentList.filter((val, index) => val.index === +id);\n    const currentElementIndex = currentList.indexOf(currentElement[0]);\n    const newObj = {\n      description: type === 'text' ? event.srcElement.value : currentElement[0].description,\n      index: currentElement[0].index,\n      completed: type !== 'text' ? event.srcElement.checked : currentElement[0].completed\n    };\n    currentList[currentElementIndex] = newObj;\n    localStorage.setItem('todo-list', JSON.stringify(currentList));\n\n    if (type === 'checkbox') {\n      (0,_components_pure_mtd_js__WEBPACK_IMPORTED_MODULE_3__.updateCheckboxDom)(id);\n    } else {\n      const itemElements = (0,_components_pure_mtd_js__WEBPACK_IMPORTED_MODULE_3__.updateListDom)(newObj);\n      itemElements.forEach(item => item.addEventListener('click', this.editDelete));\n    }\n  };\n  deleteItem = event => {\n    let [, id] = event.srcElement.id.split('-');\n    id = +id;\n    (0,_components_delete_val_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n    const liItem = document.getElementById(`li-${id}`);\n    liItem.remove();\n  };\n  editDelete = e => {\n    const eventId = (0,_components_pure_mtd_js__WEBPACK_IMPORTED_MODULE_3__.getActiveItem)(e);\n    let id = '';\n    [, id] = eventId.split('-');\n    const [textInput, checkbox, trashIcon] = (0,_components_pure_mtd_js__WEBPACK_IMPORTED_MODULE_3__.makeEditable)(id);\n    textInput.addEventListener('mouseout', event => {\n      this.updateItem({\n        event,\n        type: 'text'\n      });\n    });\n    checkbox.addEventListener('click', event => {\n      this.updateItem({\n        event,\n        type: 'checkbox'\n      });\n    });\n    trashIcon.addEventListener('click', event => {\n      this.deleteItem(event);\n    });\n    return true;\n  };\n  addElement = e => {\n    e.preventDefault();\n    const val = this.form.elements.desc.value;\n    const objItem = (0,_components_add_val_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(val);\n    this.todoInputBox.value = '';\n    const [label, optIcon, checkBox] = (0,_components_append_li_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(objItem);\n    checkBox.addEventListener('click', event => {\n      this.updateItem({\n        event,\n        type: 'checkbox'\n      });\n    });\n    optIcon.addEventListener('click', this.editDelete);\n    label.addEventListener('click', this.editDelete);\n  };\n}\n\n//# sourceURL=webpack://todo-list/./src/todo-controller.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.cdnfonts.com/css/cocogoose);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.cdnfonts.com/css/Lato);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --color: rgb(20 11 11 / 69%);\\n  --padding: 20px 30px;\\n  --congo-font: 'cocogoose', sans-serif;\\n  --lato-font: 'Lato', sans-serif;\\n}\\n\\n*,\\n::before,\\n::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  scroll-behavior: smooth;\\n}\\n\\nhtml {\\n  font-family: var(--lato-font);\\n  font-size: 1rem;\\n  font-style: normal;\\n  font-weight: normal;\\n  color: var(--color);\\n}\\n\\nheader {\\n  padding: var(--padding);\\n  background-color: white;\\n  position: fixed;\\n  width: 100vw;\\n}\\n\\nsection > h1 {\\n  text-align: center;\\n  font-size: larger;\\n  font-weight: 600;\\n  font-family: var(--congo-font);\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: var(--color);\\n}\\n\\nbody {\\n  width: 100%;\\n  height: 100%;\\n  overflow-x: hidden;\\n  background-color: aliceblue;\\n}\\n\\n.main-cont {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100vw;\\n  justify-content: center;\\n  height: 100%;\\n  margin: auto;\\n  padding-top: 80px;\\n  padding-bottom: 30px;\\n  align-content: center;\\n}\\n\\n.main-cont > ul {\\n  align-self: center;\\n  width: 75%;\\n  background-color: white;\\n  z-index: 2;\\n}\\n\\nlabel > h4 {\\n  display: inline;\\n  margin-left: 10px;\\n}\\n\\n.active-li {\\n  background-color: rgb(192, 162, 27);\\n}\\n\\nform {\\n  display: flex;\\n  width: 100vw;\\n  padding: var(--padding);\\n  border-bottom: solid 1px var(--color);\\n}\\n\\nform > input[type='text'] {\\n  border: none;\\n  flex: 2;\\n  outline: none;\\n  font-family: var(--lato-font);\\n  font-style: italic;\\n  font-weight: 500;\\n  background: transparent;\\n  color: var(--color);\\n}\\n\\n.label-item-edit {\\n  display: flow-root;\\n  margin-left: 10px;\\n  width: 90%;\\n}\\n\\n.label-item-edit > input[type='text'] {\\n  width: 100%;\\n  border: none;\\n  outline: none;\\n  font-family: var(--congo-font);\\n  font-style: italic;\\n  font-size: small;\\n  background: transparent;\\n  color: var(--color);\\n}\\n\\n.list-header {\\n  display: flex;\\n  height: 60px;\\n  align-items: center;\\n  padding: var(--padding);\\n  border-bottom: solid 1px var(--color);\\n}\\n\\n.list-header > h2 {\\n  flex: 2;\\n}\\n\\n.list-header > a {\\n  float: right;\\n}\\n\\n.todo-item {\\n  display: flow-root;\\n  padding: var(--padding);\\n  border-bottom: solid 1px var(--color);\\n}\\n\\n.todo-item > label {\\n  float: left;\\n  cursor: pointer;\\n}\\n\\n.todo-item > i {\\n  float: right;\\n  cursor: pointer;\\n}\\n\\n.input-box {\\n  display: flex;\\n}\\n\\nform > button {\\n  float: right;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\nform > input:placeholder-shown {\\n  font-style: italic;\\n}\\n\\n.todo-item > input[type=checkbox] {\\n  float: left;\\n  position: initial;\\n  margin-top: 4px;\\n  cursor: pointer;\\n  background: transparent;\\n}\\n\\n.reset-box {\\n  align-self: center;\\n  display: flex;\\n  justify-content: center;\\n  height: 67px;\\n  align-items: center;\\n  width: 75%;\\n  background-color: #e5e1de;\\n}\\n\\n.reset-box > a {\\n  text-align: center;\\n}\\n\\n@media only screen and (min-width: 768px) {\\n  .main-cont > ul {\\n    align-self: center;\\n    width: 50%;\\n    background-color: white;\\n    z-index: 2;\\n  }\\n\\n  .reset-box {\\n    align-self: center;\\n    display: flex;\\n    justify-content: center;\\n    height: 67px;\\n    align-items: center;\\n    width: 50%;\\n    background-color: #e5e1de;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;