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
exports.id = "pages/api/leaderboard";
exports.ids = ["pages/api/leaderboard"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/leaderboard.ts":
/*!**********************************!*\
  !*** ./pages/api/leaderboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nfunction handler(req, res) {\n    // read all files from public leaderboard folder\n    const imgPaths = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"public\", \"users\"));\n    // randomize images\n    imgPaths.sort(()=>Math.random() - 0.5);\n    const leaderboard = imgPaths.map((imgPath)=>{\n        return {\n            // trim extensions from filenames\n            username: imgPath.replace(/\\.[^/.]+$/, \"\"),\n            profileImage: `/users/${imgPath}`,\n            score: 100 + Math.floor(Math.random() * 1000)\n        };\n    });\n    res.status(200).json({\n        leaderboard\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGVhZGVyYm9hcmQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFHekQ7QUFDSTtBQUVULFNBQVNFLFFBQ3RCQyxHQUFtQixFQUNuQkMsR0FBcUMsRUFDckM7SUFDQSxnREFBZ0Q7SUFDaEQsTUFBTUMsV0FBV0wscURBQWMsQ0FBQ0MsZ0RBQVMsQ0FBQ08sUUFBUUMsR0FBRyxJQUFJLFVBQVU7SUFFbkUsbUJBQW1CO0lBQ25CSixTQUFTSyxJQUFJLENBQUMsSUFBTUMsS0FBS0MsTUFBTSxLQUFLO0lBRXBDLE1BQU1DLGNBQWNSLFNBQVNTLEdBQUcsQ0FBQyxDQUFDQyxVQUFZO1FBQzVDLE9BQU87WUFDTCxpQ0FBaUM7WUFDakNDLFVBQVVELFFBQVFFLE9BQU8sQ0FBQyxhQUFhO1lBQ3ZDQyxjQUFjLENBQUMsT0FBTyxFQUFFSCxRQUFRLENBQUM7WUFDakNJLE9BQU8sTUFBTVIsS0FBS1MsS0FBSyxDQUFDVCxLQUFLQyxNQUFNLEtBQUs7UUFDMUM7SUFDRjtJQUVBUixJQUFJaUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFVDtJQUFZO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1leGVyY2lzZS8uL3BhZ2VzL2FwaS9sZWFkZXJib2FyZC50cz9lMzljIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxMZWFkZXJib2FyZERhdGE+XG4pIHtcbiAgLy8gcmVhZCBhbGwgZmlsZXMgZnJvbSBwdWJsaWMgbGVhZGVyYm9hcmQgZm9sZGVyXG4gIGNvbnN0IGltZ1BhdGhzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwicHVibGljXCIsIFwidXNlcnNcIikpO1xuXG4gIC8vIHJhbmRvbWl6ZSBpbWFnZXNcbiAgaW1nUGF0aHMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcblxuICBjb25zdCBsZWFkZXJib2FyZCA9IGltZ1BhdGhzLm1hcCgoaW1nUGF0aCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAvLyB0cmltIGV4dGVuc2lvbnMgZnJvbSBmaWxlbmFtZXNcbiAgICAgIHVzZXJuYW1lOiBpbWdQYXRoLnJlcGxhY2UoL1xcLlteLy5dKyQvLCBcIlwiKSxcbiAgICAgIHByb2ZpbGVJbWFnZTogYC91c2Vycy8ke2ltZ1BhdGh9YCxcbiAgICAgIHNjb3JlOiAxMDAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcbiAgICB9O1xuICB9KTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGxlYWRlcmJvYXJkIH0pO1xufVxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpbWdQYXRocyIsInJlYWRkaXJTeW5jIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsImxlYWRlcmJvYXJkIiwibWFwIiwiaW1nUGF0aCIsInVzZXJuYW1lIiwicmVwbGFjZSIsInByb2ZpbGVJbWFnZSIsInNjb3JlIiwiZmxvb3IiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/leaderboard.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/leaderboard.ts"));
module.exports = __webpack_exports__;

})();