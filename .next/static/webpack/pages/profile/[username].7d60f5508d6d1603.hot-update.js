"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile/[username]",{

/***/ "./pages/profile/[username].tsx":
/*!**************************************!*\
  !*** ./pages/profile/[username].tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst User = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data , status  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(\"users\", async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/profile/\".concat(router.query.username));\n        console.log(\"userData\", awaitres.data.data);\n        return res.data.data;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative py-3 sm:max-w-xl sm:mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-md mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center mt-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                className: \"space-y-6\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n            lineNumber: 23,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(User, \"q1Pyu7OmQRlqw29+6yfvvllhm0g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1Y7QUFDZDtBQUNhO0FBS3ZDLE1BQU1JLE9BQVcsSUFBTTs7SUFFckIsTUFBTUMsU0FBU0osc0RBQVNBO0lBRXhCLE1BQU0sRUFBRUssS0FBSSxFQUFFQyxPQUFNLEVBQUUsR0FBR0oscURBQVFBLENBQUMsU0FBUyxVQUFZO1FBQ3JELE1BQU1LLE1BQU0sTUFBTU4saURBQVMsQ0FBQyxnQkFBc0MsT0FBdEJHLE9BQU9LLEtBQUssQ0FBQ0MsUUFBUTtRQUNqRUMsUUFBUUMsR0FBRyxDQUFDLFlBQVdDLFNBQVNSLElBQUksQ0FBQ0EsSUFBSTtRQUN6QyxPQUFPRSxJQUFJRixJQUFJLENBQUNBLElBQUk7SUFDdEI7SUFJQSxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFDZiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7Ozs7O3NDQUtELDhEQUFDQTs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0M7Z0NBQUdELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEIxQjtHQW5ETVo7O1FBRVdILGtEQUFTQTtRQUVDRSxpREFBUUE7OztLQUo3QkM7QUFxRE4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLnRzeD8zZjI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLEZDIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuXG5cblxuY29uc3QgVXNlcjogRkMgPSAoKSA9PiB7XG4gXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgXG4gIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSB1c2VRdWVyeShcInVzZXJzXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvZmlsZS8ke3JvdXRlci5xdWVyeS51c2VybmFtZX1gKTtcbiAgICBjb25zb2xlLmxvZyhcInVzZXJEYXRhXCIsYXdhaXRyZXMuZGF0YS5kYXRhKVxuICAgIHJldHVybiByZXMuZGF0YS5kYXRhXG4gIH0pO1xuICBcbiBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktMTAwIHB5LTYgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBzbTpweS0xMlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHktMyBzbTptYXgtdy14bCBzbTpteC1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHB4LTQgcHktMTAgYmctd2hpdGUgbXgtOCBtZDpteC0wIHNoYWRvdyByb3VuZGVkLTN4bCBzbTpwLTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7LyogPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAge3VzZXJEYXRhLnVzZXJuYW1lfVxuICAgICAgICAgICAgPC9oMj4gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC02XCI+XG4gICAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LW1kIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5FbWFpbDwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1sZyB0ZXh0LWdyYXktOTAwXCI+e3VzZXJEYXRhLmVtYWlsfTwvZGQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LW1kIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5BZ2U8L2R0PlxuICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC0xIHRleHQtbGcgdGV4dC1ncmF5LTkwMFwiPnt1c2VyRGF0YS5hZ2V9PC9kZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPkJpcnRoZGF5PC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LWxnIHRleHQtZ3JheS05MDBcIj57dXNlckRhdGEuYmlydGhkYXl9PC9kZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPlR3aXR0ZXI8L2R0PlxuICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC0xIHRleHQtbGcgdGV4dC1ncmF5LTkwMFwiPnt1c2VyRGF0YS50d2l0dGVyfTwvZGQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LW1kIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5CaW88L2R0PlxuICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC0xIHRleHQtbGcgdGV4dC1ncmF5LTkwMFwiPnt1c2VyRGF0YS5iaW99PC9kZD5cbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsImF4aW9zIiwidXNlUXVlcnkiLCJVc2VyIiwicm91dGVyIiwiZGF0YSIsInN0YXR1cyIsInJlcyIsImdldCIsInF1ZXJ5IiwidXNlcm5hbWUiLCJjb25zb2xlIiwibG9nIiwiYXdhaXRyZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJkbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile/[username].tsx\n"));

/***/ })

});