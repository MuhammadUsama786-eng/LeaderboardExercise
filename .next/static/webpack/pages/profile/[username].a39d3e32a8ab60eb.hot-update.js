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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst User = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [like, setLike] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data , status  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(\"users\", async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/profile/\".concat(router.query.username));\n        return res.data;\n    });\n    const toogleLike = ()=>{\n        setLike(like ? false : true);\n    };\n    return status === \"loading\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Loading\"\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n        lineNumber: 26,\n        columnNumber: 8\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative py-3 sm:max-w-xl sm:mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-md mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-center text-3xl font-extrabold text-gray-900\",\n                                children: router.query.username\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                lineNumber: 34,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                            lineNumber: 33,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center mt-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                className: \"space-y-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                className: \"text-md font-medium text-gray-500\",\n                                                children: \"Email\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                className: \"mt-1 text-lg text-gray-900\",\n                                                children: data.email\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                className: \"text-md font-medium text-gray-500\",\n                                                children: \"Age\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                className: \"mt-1 text-lg text-gray-900\",\n                                                children: data.age\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                className: \"text-md font-medium text-gray-500\",\n                                                children: \"Birthday\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                className: \"mt-1 text-lg text-gray-900\",\n                                                children: data.birthday\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                className: \"text-md font-medium text-gray-500\",\n                                                children: \"Twitter\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                className: \"mt-1 text-lg text-gray-900\",\n                                                children: data.twitter\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                className: \"text-md font-medium text-gray-500\",\n                                                children: \"Bio\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                className: \"mt-1 text-lg text-gray-900\",\n                                                children: data.bio\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                lineNumber: 39,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>toogleLike(),\n                            children: like ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.HeartIcon, {\n                                className: \"h-6 w-6 text-red-500\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.HeartIcon, {\n                                className: \"h-6 w-6\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                    lineNumber: 32,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n            lineNumber: 30,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\next-js-ts-test-main\\\\pages\\\\profile\\\\[username].tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(User, \"WkSsdbLiEQ4pvaaF8BvoXsOkx6c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDVjtBQUNkO0FBQ2E7QUFDYztBQUNnQjtBQUlyRSxNQUFNTyxPQUFXLElBQU07O0lBRXJCLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNLENBQUNPLE1BQUtDLFFBQVEsR0FBRVQsK0NBQVFBLENBQUMsS0FBSztJQUVwQyxNQUFNLEVBQUVVLEtBQUksRUFBRUMsT0FBTSxFQUFFLEdBQUdSLHFEQUFRQSxDQUFDLFNBQVMsVUFBWTtRQUNyRCxNQUFNUyxNQUFNLE1BQU1WLGlEQUFTLENBQUMsZ0JBQXNDLE9BQXRCSyxPQUFPTyxLQUFLLENBQUNDLFFBQVE7UUFDakUsT0FBT0gsSUFBSUYsSUFBSTtJQUNqQjtJQUVBLE1BQU1NLGFBQWEsSUFBSTtRQUNyQlAsUUFBUUQsT0FBSyxLQUFLLEdBQUMsSUFBSTtJQUN6QjtJQUVBLE9BQ0UsV0FBWSwwQkFDVCw4REFBQ1M7a0JBQUc7Ozs7O2tDQUdILDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDtzQ0FDQyw0RUFBQ0U7Z0NBQUdELFdBQVU7MENBQ1haLE9BQU9PLEtBQUssQ0FBQ0MsUUFBUTs7Ozs7Ozs7Ozs7c0NBRzFCLDhEQUFDRzs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0U7Z0NBQUdGLFdBQVU7O2tEQUNaLDhEQUFDRDs7MERBQ0MsOERBQUNJO2dEQUFHSCxXQUFVOzBEQUFvQzs7Ozs7OzBEQUNsRCw4REFBQ0k7Z0RBQUdKLFdBQVU7MERBQThCVCxLQUFLYyxLQUFLOzs7Ozs7Ozs7Ozs7a0RBRXhELDhEQUFDTjs7MERBQ0MsOERBQUNJO2dEQUFHSCxXQUFVOzBEQUFvQzs7Ozs7OzBEQUNsRCw4REFBQ0k7Z0RBQUdKLFdBQVU7MERBQThCVCxLQUFLZSxHQUFHOzs7Ozs7Ozs7Ozs7a0RBRXRELDhEQUFDUDs7MERBQ0MsOERBQUNJO2dEQUFHSCxXQUFVOzBEQUFvQzs7Ozs7OzBEQUNsRCw4REFBQ0k7Z0RBQUdKLFdBQVU7MERBQThCVCxLQUFLZ0IsUUFBUTs7Ozs7Ozs7Ozs7O2tEQUUzRCw4REFBQ1I7OzBEQUNDLDhEQUFDSTtnREFBR0gsV0FBVTswREFBb0M7Ozs7OzswREFDbEQsOERBQUNJO2dEQUFHSixXQUFVOzBEQUE4QlQsS0FBS2lCLE9BQU87Ozs7Ozs7Ozs7OztrREFFMUQsOERBQUNUOzswREFDQyw4REFBQ0k7Z0RBQUdILFdBQVU7MERBQW9DOzs7Ozs7MERBQ2xELDhEQUFDSTtnREFBR0osV0FBVTswREFBOEJULEtBQUtrQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJOUQsOERBQUNDOzRCQUFPQyxTQUFTLElBQU1kO3NDQUNuQlIscUJBQ0EsOERBQUNILDZEQUFjQTtnQ0FBQ2MsV0FBVTs7Ozs7MERBRTFCLDhEQUFDZiwrREFBU0E7Z0NBQUNlLFdBQVU7Ozs7O3lDQUN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBTVI7QUFHUDtHQWxFTWI7O1FBRVdMLGtEQUFTQTtRQUdDRSxpREFBUUE7OztLQUw3Qkc7QUFvRU4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLnRzeD8zZjI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLEZDIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IEhlYXJ0SWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcbmltcG9ydCB7IEhlYXJ0SWNvbiBhcyBTb2xpZEhlYXJ0SWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XG5cblxuXG5jb25zdCBVc2VyOiBGQyA9ICgpID0+IHtcbiBcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtsaWtlLHNldExpa2VdID11c2VTdGF0ZShmYWxzZSlcbiAgIFxuICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdXNlUXVlcnkoXCJ1c2Vyc1wiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2ZpbGUvJHtyb3V0ZXIucXVlcnkudXNlcm5hbWV9YCk7XG4gICAgcmV0dXJuIHJlcy5kYXRhXG4gIH0pO1xuICBcbiAgY29uc3QgdG9vZ2xlTGlrZSA9ICgpPT57XG4gICAgc2V0TGlrZShsaWtlP2ZhbHNlOnRydWUpXG4gIH1cbiBcbiAgcmV0dXJuIChcbiAgICAoc3RhdHVzID09PSAnbG9hZGluZycpID8gXG4gICAgICAoPGgxPkxvYWRpbmc8L2gxPilcbiAgICAgIDpcbiAgICAgIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS0xMDAgcHktNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHNtOnB5LTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweS0zIHNtOm1heC13LXhsIHNtOm14LWF1dG9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHgtNCBweS0xMCBiZy13aGl0ZSBteC04IG1kOm14LTAgc2hhZG93IHJvdW5kZWQtM3hsIHNtOnAtMTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtyb3V0ZXIucXVlcnkudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNlwiPlxuICAgICAgICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LW1kIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5FbWFpbDwvZHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1sZyB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuZW1haWx9PC9kZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPkFnZTwvZHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1sZyB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYWdlfTwvZGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LW1kIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5CaXJ0aGRheTwvZHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1sZyB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYmlydGhkYXl9PC9kZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPlR3aXR0ZXI8L2R0PlxuICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC0xIHRleHQtbGcgdGV4dC1ncmF5LTkwMFwiPntkYXRhLnR3aXR0ZXJ9PC9kZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPkJpbzwvZHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1sZyB0ZXh0LWdyYXktOTAwXCI+e2RhdGEuYmlvfTwvZGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9vZ2xlTGlrZSgpfT5cbiAgICAgICAgICAgICAgIHtsaWtlID8gKFxuICAgICAgICAgICAgICAgIDxTb2xpZEhlYXJ0SWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtcmVkLTUwMFwiIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPEhlYXJ0SWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgKVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXhpb3MiLCJ1c2VRdWVyeSIsIkhlYXJ0SWNvbiIsIlNvbGlkSGVhcnRJY29uIiwiVXNlciIsInJvdXRlciIsImxpa2UiLCJzZXRMaWtlIiwiZGF0YSIsInN0YXR1cyIsInJlcyIsImdldCIsInF1ZXJ5IiwidXNlcm5hbWUiLCJ0b29nbGVMaWtlIiwiaDEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImRsIiwiZHQiLCJkZCIsImVtYWlsIiwiYWdlIiwiYmlydGhkYXkiLCJ0d2l0dGVyIiwiYmlvIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile/[username].tsx\n"));

/***/ })

});