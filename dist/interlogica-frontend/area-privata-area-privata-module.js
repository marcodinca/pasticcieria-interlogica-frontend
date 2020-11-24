(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["area-privata-area-privata-module"],{

/***/ "pWjB":
/*!*****************************************************!*\
  !*** ./src/app/area-privata/area-privata.module.ts ***!
  \*****************************************************/
/*! exports provided: AreaPrivataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaPrivataModule", function() { return AreaPrivataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ingredienti_ingredienti_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingredienti/ingredienti.component */ "TTgH");
/* harmony import */ var _prodotti_prodotti_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prodotti/prodotti.component */ "Fc2a");
/* harmony import */ var _area_privata_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./area-privata.component */ "bdNl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








const routes = [
    {
        path: '', component: _area_privata_component__WEBPACK_IMPORTED_MODULE_4__["AreaPrivataComponent"], children: [
            { path: 'ingredienti', component: _ingredienti_ingredienti_component__WEBPACK_IMPORTED_MODULE_2__["IngredientiComponent"] },
            { path: 'prodotti', component: _prodotti_prodotti_component__WEBPACK_IMPORTED_MODULE_3__["ProdottiComponent"] },
            { path: '', redirectTo: '/area-privata/ingredienti', pathMatch: 'full' },
        ]
    }
];
class AreaPrivataModule {
}
AreaPrivataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AreaPrivataModule });
AreaPrivataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AreaPrivataModule_Factory(t) { return new (t || AreaPrivataModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AreaPrivataModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AreaPrivataModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=area-privata-area-privata-module.js.map