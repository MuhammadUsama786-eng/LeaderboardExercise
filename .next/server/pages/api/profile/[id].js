"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/profile/[id]";
exports.ids = ["pages/api/profile/[id]"];
exports.modules = {

/***/ "lorem-ipsum":
/*!******************************!*\
  !*** external "lorem-ipsum" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lorem-ipsum");

/***/ }),

/***/ "random-profile-generator":
/*!*******************************************!*\
  !*** external "random-profile-generator" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("random-profile-generator");

/***/ }),

/***/ "(api)/./pages/api/profile/[id].ts":
/*!***********************************!*\
  !*** ./pages/api/profile/[id].ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lorem_ipsum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lorem-ipsum */ \"lorem-ipsum\");\n/* harmony import */ var lorem_ipsum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lorem_ipsum__WEBPACK_IMPORTED_MODULE_0__);\n\nvar randomProfile = __webpack_require__(/*! random-profile-generator */ \"random-profile-generator\");\nconst lorem = new lorem_ipsum__WEBPACK_IMPORTED_MODULE_0__.LoremIpsum({\n    sentencesPerParagraph: {\n        max: 8,\n        min: 4\n    },\n    wordsPerSentence: {\n        max: 16,\n        min: 4\n    }\n});\nfunction handler(req, res) {\n    const username = req.query.id;\n    const { age , twitter , email , birthday  } = randomProfile.profile();\n    const bio = lorem.generateParagraphs(1);\n    const profileData = {\n        username,\n        bio,\n        age,\n        twitter,\n        email,\n        birthday\n    };\n    res.status(200).json(profileData);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS9baWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUV6QyxJQUFJQyxnQkFBZ0JDLG1CQUFPQSxDQUFDLDBEQUEwQjtBQUV0RCxNQUFNQyxRQUFRLElBQUlILG1EQUFVQSxDQUFDO0lBQzNCSSx1QkFBdUI7UUFDckJDLEtBQUs7UUFDTEMsS0FBSztJQUNQO0lBQ0FDLGtCQUFrQjtRQUNoQkYsS0FBSztRQUNMQyxLQUFLO0lBQ1A7QUFDRjtBQUVlLFNBQVNFLFFBQ3RCQyxHQUFtQixFQUNuQkMsR0FBaUMsRUFDakM7SUFDQSxNQUFNQyxXQUFXRixJQUFJRyxLQUFLLENBQUNDLEVBQUU7SUFDN0IsTUFBTSxFQUFFQyxJQUFHLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBR2hCLGNBQWNpQixPQUFPO0lBQy9ELE1BQU1DLE1BQU1oQixNQUFNaUIsa0JBQWtCLENBQUM7SUFFckMsTUFBTUMsY0FBMkI7UUFDL0JWO1FBQ0FRO1FBQ0FMO1FBQ0FDO1FBQ0FDO1FBQ0FDO0lBQ0Y7SUFFQVAsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0Y7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLWV4ZXJjaXNlLy4vcGFnZXMvYXBpL3Byb2ZpbGUvW2lkXS50cz83OWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvcmVtSXBzdW0gfSBmcm9tIFwibG9yZW0taXBzdW1cIjtcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xudmFyIHJhbmRvbVByb2ZpbGUgPSByZXF1aXJlKFwicmFuZG9tLXByb2ZpbGUtZ2VuZXJhdG9yXCIpO1xuXG5jb25zdCBsb3JlbSA9IG5ldyBMb3JlbUlwc3VtKHtcbiAgc2VudGVuY2VzUGVyUGFyYWdyYXBoOiB7XG4gICAgbWF4OiA4LFxuICAgIG1pbjogNCxcbiAgfSxcbiAgd29yZHNQZXJTZW50ZW5jZToge1xuICAgIG1heDogMTYsXG4gICAgbWluOiA0LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFByb2ZpbGVEYXRhPlxuKSB7XG4gIGNvbnN0IHVzZXJuYW1lID0gcmVxLnF1ZXJ5LmlkIGFzIHN0cmluZztcbiAgY29uc3QgeyBhZ2UsIHR3aXR0ZXIsIGVtYWlsLCBiaXJ0aGRheSB9ID0gcmFuZG9tUHJvZmlsZS5wcm9maWxlKCk7XG4gIGNvbnN0IGJpbyA9IGxvcmVtLmdlbmVyYXRlUGFyYWdyYXBocygxKTtcblxuICBjb25zdCBwcm9maWxlRGF0YTogUHJvZmlsZURhdGEgPSB7XG4gICAgdXNlcm5hbWUsXG4gICAgYmlvLFxuICAgIGFnZSxcbiAgICB0d2l0dGVyLFxuICAgIGVtYWlsLFxuICAgIGJpcnRoZGF5LFxuICB9O1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2ZpbGVEYXRhKTtcbn1cbiJdLCJuYW1lcyI6WyJMb3JlbUlwc3VtIiwicmFuZG9tUHJvZmlsZSIsInJlcXVpcmUiLCJsb3JlbSIsInNlbnRlbmNlc1BlclBhcmFncmFwaCIsIm1heCIsIm1pbiIsIndvcmRzUGVyU2VudGVuY2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlcm5hbWUiLCJxdWVyeSIsImlkIiwiYWdlIiwidHdpdHRlciIsImVtYWlsIiwiYmlydGhkYXkiLCJwcm9maWxlIiwiYmlvIiwiZ2VuZXJhdGVQYXJhZ3JhcGhzIiwicHJvZmlsZURhdGEiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile/[id].ts"));
module.exports = __webpack_exports__;

})();