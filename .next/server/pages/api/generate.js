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
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconst basePromptPrefix = `Your name is Ava and you are a personal assistant for people with questions about the internet, computers or technology in general. You should be very respectful, but answer in language that's similar to what you'd speak while explaining something in person. After all, you're meant to mimic human conversation. If you think there's a mistake in the question, feel free to point this out! You often have to deal with people who don't know a lot about the internet, so they might end up asking random questions that don't really make sense.\nMy question: `;\nconst generateAction = async (req, res)=>{\n    console.log(`API: ${basePromptPrefix}${req.body.userInput}\\n`);\n    const baseCompletion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: `${basePromptPrefix}${req.body.userInput}`,\n        temperature: 0.8,\n        max_tokens: 256\n    });\n    const basePromptOutput = baseCompletion.data.choices.pop();\n    res.status(200).json({\n        output: basePromptOutput\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBRUEsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFDN0IsTUFBTU0sbUJBQ04sQ0FBQzthQUNZLENBQUM7QUFDZCxNQUFNQyxpQkFBaUIsT0FBT0MsS0FBS0MsTUFBUTtJQUN6Q0MsUUFBUUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFTCxpQkFBaUIsRUFBRUUsSUFBSUksSUFBSSxDQUFDQyxTQUFTLENBQUMsRUFBRSxDQUFDO0lBRTdELE1BQU1DLGlCQUFpQixNQUFNVCxPQUFPVSxnQkFBZ0IsQ0FBQztRQUNuREMsT0FBTztRQUNQQyxRQUFRLENBQUMsRUFBRVgsaUJBQWlCLEVBQUVFLElBQUlJLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7UUFDbERLLGFBQWE7UUFDYkMsWUFBWTtJQUNkO0lBRUEsTUFBTUMsbUJBQW1CTixlQUFlTyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRztJQUV4RGQsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxRQUFRTjtJQUFpQjtBQUNsRDtBQUVBLGlFQUFlYixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2NyYXRjaHBhZC8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS5qcz82MjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gJ29wZW5haSc7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG59KTtcblxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcbmNvbnN0IGJhc2VQcm9tcHRQcmVmaXggPSBcbmBZb3VyIG5hbWUgaXMgQXZhIGFuZCB5b3UgYXJlIGEgcGVyc29uYWwgYXNzaXN0YW50IGZvciBwZW9wbGUgd2l0aCBxdWVzdGlvbnMgYWJvdXQgdGhlIGludGVybmV0LCBjb21wdXRlcnMgb3IgdGVjaG5vbG9neSBpbiBnZW5lcmFsLiBZb3Ugc2hvdWxkIGJlIHZlcnkgcmVzcGVjdGZ1bCwgYnV0IGFuc3dlciBpbiBsYW5ndWFnZSB0aGF0J3Mgc2ltaWxhciB0byB3aGF0IHlvdSdkIHNwZWFrIHdoaWxlIGV4cGxhaW5pbmcgc29tZXRoaW5nIGluIHBlcnNvbi4gQWZ0ZXIgYWxsLCB5b3UncmUgbWVhbnQgdG8gbWltaWMgaHVtYW4gY29udmVyc2F0aW9uLiBJZiB5b3UgdGhpbmsgdGhlcmUncyBhIG1pc3Rha2UgaW4gdGhlIHF1ZXN0aW9uLCBmZWVsIGZyZWUgdG8gcG9pbnQgdGhpcyBvdXQhIFlvdSBvZnRlbiBoYXZlIHRvIGRlYWwgd2l0aCBwZW9wbGUgd2hvIGRvbid0IGtub3cgYSBsb3QgYWJvdXQgdGhlIGludGVybmV0LCBzbyB0aGV5IG1pZ2h0IGVuZCB1cCBhc2tpbmcgcmFuZG9tIHF1ZXN0aW9ucyB0aGF0IGRvbid0IHJlYWxseSBtYWtlIHNlbnNlLlxuTXkgcXVlc3Rpb246IGA7XG5jb25zdCBnZW5lcmF0ZUFjdGlvbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zb2xlLmxvZyhgQVBJOiAke2Jhc2VQcm9tcHRQcmVmaXh9JHtyZXEuYm9keS51c2VySW5wdXR9XFxuYClcblxuICBjb25zdCBiYXNlQ29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcbiAgICBtb2RlbDogJ3RleHQtZGF2aW5jaS0wMDMnLFxuICAgIHByb21wdDogYCR7YmFzZVByb21wdFByZWZpeH0ke3JlcS5ib2R5LnVzZXJJbnB1dH1gLFxuICAgIHRlbXBlcmF0dXJlOiAwLjgsXG4gICAgbWF4X3Rva2VuczogMjU2LFxuICB9KTtcbiAgXG4gIGNvbnN0IGJhc2VQcm9tcHRPdXRwdXQgPSBiYXNlQ29tcGxldGlvbi5kYXRhLmNob2ljZXMucG9wKCk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBvdXRwdXQ6IGJhc2VQcm9tcHRPdXRwdXQgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUFjdGlvbjtcblxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwiYmFzZVByb21wdFByZWZpeCIsImdlbmVyYXRlQWN0aW9uIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJ1c2VySW5wdXQiLCJiYXNlQ29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInByb21wdCIsInRlbXBlcmF0dXJlIiwibWF4X3Rva2VucyIsImJhc2VQcm9tcHRPdXRwdXQiLCJkYXRhIiwiY2hvaWNlcyIsInBvcCIsInN0YXR1cyIsImpzb24iLCJvdXRwdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();