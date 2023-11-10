"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/BlogCard.tsx":
/*!*********************************!*\
  !*** ./components/BlogCard.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStaticPaths: function() { return /* binding */ getStaticPaths; },\n/* harmony export */   getStaticProps: function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Reaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reaction */ \"(app-pages-browser)/./components/Reaction.tsx\");\n/* __next_internal_client_entry_do_not_use__ getStaticProps,getStaticPaths,default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst cardStyle = {\n    display: \"flex\",\n    border: \"1px solid gray\",\n    flexDirection: \"column\",\n    alignItems: \"center\"\n};\nconst BlogCard = (param)=>{\n    let { title = \"Go back\" } = param;\n    _s();\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"https://q-force-wiki.hotanloc.xyz/flows/trigger/e8bb5c1b-36e0-4d67-ada1-f9be8ecf62b4\", {\n                next: {\n                    revalidate: 3600\n                }\n            });\n            if (response.ok) {\n                const data = await response.json();\n                setList(data.data.slice(0, 10));\n            } else {\n                console.error(\"Failed to fetch data\");\n            }\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-2 md:space-y-3 lg:min-w-600 md:min-w-500 w-full flex flex-col items-center\",\n        children: list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4 px-5 max-w-xl md:min-w-500 min-w-200 w-full mx-auto bg-white  flex flex-col justify-start items-start space-y-3 rounded-xl shadow relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"font-semibold text-sm cursor-pointer\",\n                                        href: \"/profile/teeadmin\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative flex-shrink-0 \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: \"h-10 w-10 md:h-12 md:w-12 select-none bg-white rounded-full object-cover flex-shrink-0 \",\n                                                src: \"https://xuan-teeappapi.azurewebsites.net/default/default-male.svg\",\n                                                alt: \"Avatar\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col justify-evenly\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"font-semibold text-sm cursor-pointer hover:underline\",\n                                                href: \"/profile/teeadmin\",\n                                                children: \"I am Admin\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                className: \"text-xs text-gray-500 dark:text-dark-txt hover:underline space-x-2\",\n                                                href: \"/blogs/\".concat(item.id),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: \"Sep 3, 2022, 11:38 PM\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                        className: \"fas fa-globe-asia\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative z-10\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-1 flex items-center justify-center rounded-full transition-base cursor-pointer active:scale-90 active:transform select-none flex-shrink-0  clickable dark:border-dark-third \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"text-center align-middle text-xl w-7 h-7  text-black dark:text-dark-txt bx bx-dots-horizontal-rounded\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm break-words overflow-ellipsis max-w-full\",\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-h-500 cursor-pointer\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full max-h-128 bg-gray-100 dark:bg-dark-third rounded-xl shadow overflow-hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"object-contain md:max-h-128 max-h-112 w-full\",\n                                    src: \"https://q-force-wiki.hotanloc.xyz/assets/\".concat(item.cover),\n                                    alt: \"Post photo\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, undefined),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Reaction__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full text-center flex justify-between items-center select-none cursor-pointer border-t border-b dark:border-dark-third space-x-1 text-gray-600 dark:text-dark-txt font-semibold text-sm p-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"relative flex-1 transition-base\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full h-full p-1 bg-white hover:bg-gray-100 active:bg-gray-200 dark:bg-dark-secondary dark:hover:bg-dark-third dark:active:bg-dark-hover rounded transition-base\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"bx bx-like mr-2 text-lg align-middle\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            \"Like\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex-1 p-1 h-full w-full bg-white hover:bg-gray-100 active:bg-gray-200 dark:bg-dark-secondary dark:hover:bg-dark-third dark:active:bg-dark-hover rounded transition-base flex items-center justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"bx bx-comment mr-2 text-lg align-middle \"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \"Comment\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\micro-frontend\\\\blog2\\\\blog-main\\\\components\\\\BlogCard.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BlogCard, \"ZBNfaudzy8bVxb8UgkyyMnLdlWY=\");\n_c = BlogCard;\nasync function getStaticProps() {\n    const res = await fetch(\"https://q-force-wiki.hotanloc.xyz/flows/trigger/e8bb5c1b-36e0-4d67-ada1-f9be8ecf62b4\");\n    const posts = await res.json();\n    return {\n        props: {\n            posts\n        },\n        // Next.js will attempt to re-generate the page:\n        // - When a request comes in\n        // - At most once every 10 seconds\n        revalidate: 10\n    };\n}\n// This function gets called at build time on server-side.\n// It may be called again, on a serverless function, if\n// the path has not been generated.\nasync function getStaticPaths() {\n    const res = await fetch(\"https://q-force-wiki.hotanloc.xyz/flows/trigger/e8bb5c1b-36e0-4d67-ada1-f9be8ecf62b4\");\n    const posts = await res.json();\n    // Get the paths we want to pre-render based on posts\n    const paths = posts.map((post)=>({\n            params: {\n                id: post.id\n            }\n        }));\n    // We'll pre-render only these paths at build time.\n    // { fallback: 'blocking' } will server-render pages\n    // on-demand if the path doesn't exist.\n    return {\n        paths,\n        fallback: \"blocking\"\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogCard);\nvar _c;\n$RefreshReg$(_c, \"BlogCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQmxvZ0NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDdEI7QUFDSztBQWFsQyxNQUFNSyxZQUFZO0lBQ2hCQyxTQUFTO0lBQ1RDLFFBQVE7SUFDUkMsZUFBZTtJQUNmQyxZQUFZO0FBQ2Q7QUFFQSxNQUFNQyxXQUFXO1FBQUMsRUFBRUMsUUFBUSxTQUFTLEVBQWlCOztJQUNwRCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUMsRUFBRTtJQUVuQyxNQUFNYSxZQUFZO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLHdGQUNBO2dCQUFFQyxNQUFNO29CQUFFQyxZQUFZO2dCQUFLO1lBQUU7WUFFL0IsSUFBSUgsU0FBU0ksRUFBRSxFQUFFO2dCQUNmLE1BQU1DLE9BQU8sTUFBTUwsU0FBU00sSUFBSTtnQkFDaENSLFFBQVFPLEtBQUtBLElBQUksQ0FBQ0UsS0FBSyxDQUFDLEdBQUc7WUFDN0IsT0FBTztnQkFDTEMsUUFBUUMsS0FBSyxDQUFDO1lBQ2hCO1FBQ0YsRUFBRSxPQUFPQyxLQUFLO1lBQ1pGLFFBQVFDLEtBQUssQ0FBQ0M7UUFDaEI7SUFDRjtJQUVBdkIsZ0RBQVNBLENBQUM7UUFDUlk7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1k7UUFBSUMsV0FBVTtrQkFDWmYsS0FBS2dCLEdBQUcsQ0FBQyxDQUFDQyxNQUFnQkMsc0JBQ3pCLDhEQUFDSjtnQkFFQ0MsV0FBVTs7a0NBRVYsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDSTt3Q0FDQ0osV0FBVTt3Q0FDVkssTUFBSztrREFFTCw0RUFBQ047NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNNO2dEQUNDTixXQUFVO2dEQUNWTyxLQUFJO2dEQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7O2tEQUlWLDhEQUFDVDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNJO2dEQUNDSixXQUFVO2dEQUNWSyxNQUFLOzBEQUNOOzs7Ozs7MERBR0QsOERBQUM3QixrREFBSUE7Z0RBQ0h3QixXQUFVO2dEQUNWSyxNQUFNLFVBQWtCLE9BQVJILEtBQUtPLEVBQUU7O2tFQUV2Qiw4REFBQ0M7a0VBQUs7Ozs7OztrRUFDTiw4REFBQ0M7d0RBQUVYLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJbkIsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ1c7d0NBQUVYLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSW5CLDhEQUFDVTt3QkFBS1YsV0FBVTtrQ0FDYkUsS0FBS2xCLEtBQUs7Ozs7OztrQ0FFYiw4REFBQ2U7d0JBQUlDLFdBQVU7OzRCQUNaOzBDQUNELDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ007b0NBQ0NOLFdBQVU7b0NBQ1ZPLEtBQUssNENBQXVELE9BQVhMLEtBQUtVLEtBQUs7b0NBQzNESixLQUFJOzs7Ozs7Ozs7Ozs0QkFFRDs7Ozs7OztrQ0FFVCw4REFBQy9CLGlEQUFRQTs7Ozs7a0NBQ1QsOERBQUNzQjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNVO2dDQUFLVixXQUFVOzBDQUNkLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ1U7OzBEQUNDLDhEQUFDQztnREFBRVgsV0FBVTs7Ozs7OzRDQUEyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSTlELDhEQUFDVTtnQ0FBS1YsV0FBVTs7a0RBQ2QsOERBQUNXO3dDQUFFWCxXQUFVOzs7Ozs7b0NBQStDOzs7Ozs7Ozs7Ozs7OztlQTlEM0RHOzs7Ozs7Ozs7O0FBc0VmO0dBbEdNcEI7S0FBQUE7QUFvR0MsZUFBZThCO0lBQ3BCLE1BQU1DLE1BQU0sTUFBTXpCLE1BQ2hCO0lBRUYsTUFBTTBCLFFBQVEsTUFBTUQsSUFBSXBCLElBQUk7SUFFNUIsT0FBTztRQUNMc0IsT0FBTztZQUNMRDtRQUNGO1FBQ0EsZ0RBQWdEO1FBQ2hELDRCQUE0QjtRQUM1QixrQ0FBa0M7UUFDbEN4QixZQUFZO0lBQ2Q7QUFDRjtBQUVBLDBEQUEwRDtBQUMxRCx1REFBdUQ7QUFDdkQsbUNBQW1DO0FBQzVCLGVBQWUwQjtJQUNwQixNQUFNSCxNQUFNLE1BQU16QixNQUNoQjtJQUVGLE1BQU0wQixRQUFRLE1BQU1ELElBQUlwQixJQUFJO0lBRTVCLHFEQUFxRDtJQUNyRCxNQUFNd0IsUUFBUUgsTUFBTWQsR0FBRyxDQUFDLENBQUNrQixPQUFVO1lBQ2pDQyxRQUFRO2dCQUFFWCxJQUFJVSxLQUFLVixFQUFFO1lBQUM7UUFDeEI7SUFFQSxtREFBbUQ7SUFDbkQsb0RBQW9EO0lBQ3BELHVDQUF1QztJQUN2QyxPQUFPO1FBQUVTO1FBQU9HLFVBQVU7SUFBVztBQUN2QztBQUVBLCtEQUFldEMsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jsb2dDYXJkLnRzeD9kZGFlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3Rpb24gZnJvbSBcIi4vUmVhY3Rpb25cIjtcclxuXHJcbmludGVyZmFjZSBCbG9nQ2FyZFByb3BzIHtcclxuICB0aXRsZT86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEJsb2dJdGVtIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY292ZXI6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGNhcmRTdHlsZSA9IHtcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyYXlcIixcclxuICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIGFzIGNvbnN0LCAvLyBVcGRhdGUgdGhlIHR5cGUgb2YgZmxleERpcmVjdGlvblxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbn07XHJcblxyXG5jb25zdCBCbG9nQ2FyZCA9ICh7IHRpdGxlID0gXCJHbyBiYWNrXCIgfTogQmxvZ0NhcmRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBcImh0dHBzOi8vcS1mb3JjZS13aWtpLmhvdGFubG9jLnh5ei9mbG93cy90cmlnZ2VyL2U4YmI1YzFiLTM2ZTAtNGQ2Ny1hZGExLWY5YmU4ZWNmNjJiNFwiLFxyXG4gICAgICAgIHsgbmV4dDogeyByZXZhbGlkYXRlOiAzNjAwIH0gfVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldExpc3QoZGF0YS5kYXRhLnNsaWNlKDAsIDEwKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkYXRhXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBtZDpzcGFjZS15LTMgbGc6bWluLXctNjAwIG1kOm1pbi13LTUwMCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAge2xpc3QubWFwKChpdGVtOiBCbG9nSXRlbSwgaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJweS00IHB4LTUgbWF4LXcteGwgbWQ6bWluLXctNTAwIG1pbi13LTIwMCB3LWZ1bGwgbXgtYXV0byBiZy13aGl0ZSAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IHNwYWNlLXktMyByb3VuZGVkLXhsIHNoYWRvdyByZWxhdGl2ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNtIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZmlsZS90ZWVhZG1pblwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4LXNocmluay0wIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIG1kOmgtMTIgbWQ6dy0xMiBzZWxlY3Qtbm9uZSBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyIGZsZXgtc2hyaW5rLTAgXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3h1YW4tdGVlYXBwYXBpLmF6dXJld2Vic2l0ZXMubmV0L2RlZmF1bHQvZGVmYXVsdC1tYWxlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1ldmVubHlcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zbSBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2ZpbGUvdGVlYWRtaW5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBJIGFtIEFkbWluXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWRhcmstdHh0IGhvdmVyOnVuZGVybGluZSBzcGFjZS14LTJcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL2Jsb2dzLyR7aXRlbS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TZXAgMywgMjAyMiwgMTE6MzggUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1nbG9iZS1hc2lhXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYmFzZSBjdXJzb3ItcG9pbnRlciBhY3RpdmU6c2NhbGUtOTAgYWN0aXZlOnRyYW5zZm9ybSBzZWxlY3Qtbm9uZSBmbGV4LXNocmluay0wICBjbGlja2FibGUgZGFyazpib3JkZXItZGFyay10aGlyZCBcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGFsaWduLW1pZGRsZSB0ZXh0LXhsIHctNyBoLTcgIHRleHQtYmxhY2sgZGFyazp0ZXh0LWRhcmstdHh0IGJ4IGJ4LWRvdHMtaG9yaXpvbnRhbC1yb3VuZGVkXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBicmVhay13b3JkcyBvdmVyZmxvdy1lbGxpcHNpcyBtYXgtdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LWgtNTAwIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LWgtMTI4IGJnLWdyYXktMTAwIGRhcms6YmctZGFyay10aGlyZCByb3VuZGVkLXhsIHNoYWRvdyBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpbiBtZDptYXgtaC0xMjggbWF4LWgtMTEyIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3EtZm9yY2Utd2lraS5ob3RhbmxvYy54eXovYXNzZXRzLyR7aXRlbS5jb3Zlcn1gfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUG9zdCBwaG90b1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8UmVhY3Rpb24gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBzZWxlY3Qtbm9uZSBjdXJzb3ItcG9pbnRlciBib3JkZXItdCBib3JkZXItYiBkYXJrOmJvcmRlci1kYXJrLXRoaXJkIHNwYWNlLXgtMSB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1kYXJrLXR4dCBmb250LXNlbWlib2xkIHRleHQtc20gcC0xXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtMSB0cmFuc2l0aW9uLWJhc2VcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcC0xIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktMTAwIGFjdGl2ZTpiZy1ncmF5LTIwMCBkYXJrOmJnLWRhcmstc2Vjb25kYXJ5IGRhcms6aG92ZXI6YmctZGFyay10aGlyZCBkYXJrOmFjdGl2ZTpiZy1kYXJrLWhvdmVyIHJvdW5kZWQgdHJhbnNpdGlvbi1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYngtbGlrZSBtci0yIHRleHQtbGcgYWxpZ24tbWlkZGxlXCI+PC9pPkxpa2VcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4LTEgcC0xIGgtZnVsbCB3LWZ1bGwgYmctd2hpdGUgaG92ZXI6YmctZ3JheS0xMDAgYWN0aXZlOmJnLWdyYXktMjAwIGRhcms6YmctZGFyay1zZWNvbmRhcnkgZGFyazpob3ZlcjpiZy1kYXJrLXRoaXJkIGRhcms6YWN0aXZlOmJnLWRhcmstaG92ZXIgcm91bmRlZCB0cmFuc2l0aW9uLWJhc2UgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieC1jb21tZW50IG1yLTIgdGV4dC1sZyBhbGlnbi1taWRkbGUgXCI+PC9pPlxyXG4gICAgICAgICAgICAgIENvbW1lbnRcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIFwiaHR0cHM6Ly9xLWZvcmNlLXdpa2kuaG90YW5sb2MueHl6L2Zsb3dzL3RyaWdnZXIvZThiYjVjMWItMzZlMC00ZDY3LWFkYTEtZjliZThlY2Y2MmI0XCJcclxuICApO1xyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzLFxyXG4gICAgfSxcclxuICAgIC8vIE5leHQuanMgd2lsbCBhdHRlbXB0IHRvIHJlLWdlbmVyYXRlIHRoZSBwYWdlOlxyXG4gICAgLy8gLSBXaGVuIGEgcmVxdWVzdCBjb21lcyBpblxyXG4gICAgLy8gLSBBdCBtb3N0IG9uY2UgZXZlcnkgMTAgc2Vjb25kc1xyXG4gICAgcmV2YWxpZGF0ZTogMTAsIC8vIEluIHNlY29uZHNcclxuICB9O1xyXG59XHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWUgb24gc2VydmVyLXNpZGUuXHJcbi8vIEl0IG1heSBiZSBjYWxsZWQgYWdhaW4sIG9uIGEgc2VydmVybGVzcyBmdW5jdGlvbiwgaWZcclxuLy8gdGhlIHBhdGggaGFzIG5vdCBiZWVuIGdlbmVyYXRlZC5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgXCJodHRwczovL3EtZm9yY2Utd2lraS5ob3RhbmxvYy54eXovZmxvd3MvdHJpZ2dlci9lOGJiNWMxYi0zNmUwLTRkNjctYWRhMS1mOWJlOGVjZjYyYjRcIlxyXG4gICk7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAvLyBHZXQgdGhlIHBhdGhzIHdlIHdhbnQgdG8gcHJlLXJlbmRlciBiYXNlZCBvbiBwb3N0c1xyXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7IGlkOiBwb3N0LmlkIH0sXHJcbiAgfSkpO1xyXG5cclxuICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cclxuICAvLyB7IGZhbGxiYWNrOiAnYmxvY2tpbmcnIH0gd2lsbCBzZXJ2ZXItcmVuZGVyIHBhZ2VzXHJcbiAgLy8gb24tZGVtYW5kIGlmIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QuXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBcImJsb2NraW5nXCIgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ0NhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIlJlYWN0aW9uIiwiY2FyZFN0eWxlIiwiZGlzcGxheSIsImJvcmRlciIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiQmxvZ0NhcmQiLCJ0aXRsZSIsImxpc3QiLCJzZXRMaXN0IiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm5leHQiLCJyZXZhbGlkYXRlIiwib2siLCJkYXRhIiwianNvbiIsInNsaWNlIiwiY29uc29sZSIsImVycm9yIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJpZCIsInNwYW4iLCJpIiwiY292ZXIiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsInBvc3RzIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwicG9zdCIsInBhcmFtcyIsImZhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BlogCard.tsx\n"));

/***/ })

});