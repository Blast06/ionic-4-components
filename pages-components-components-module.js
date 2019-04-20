(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-components-components-module"],{

/***/ "./src/app/pages/components/components.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/components/components.module.ts ***!
  \*******************************************************/
/*! exports provided: ComponentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsPageModule", function() { return ComponentsPageModule; });
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.page */ "./src/app/pages/components/components.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _components_page__WEBPACK_IMPORTED_MODULE_6__["ComponentsPage"]
    }
];
var ComponentsPageModule = /** @class */ (function () {
    function ComponentsPageModule() {
    }
    ComponentsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivethreeCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"]
            ],
            declarations: [_components_page__WEBPACK_IMPORTED_MODULE_6__["ComponentsPage"]]
        })
    ], ComponentsPageModule);
    return ComponentsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/components/components.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/components/components.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'Ionic 4 UI Components'\"></app-header>\n\n<ion-content padding>\n\n  Component Documentation is coming soon!\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/components/components.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/components/components.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvY29tcG9uZW50cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/components/components.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/components/components.page.ts ***!
  \*****************************************************/
/*! exports provided: ComponentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsPage", function() { return ComponentsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsPage = /** @class */ (function () {
    function ComponentsPage() {
        this.iconState = true;
    }
    ComponentsPage.prototype.ngOnInit = function () {
    };
    ComponentsPage.prototype.toggleIcon = function () {
        this.iconState = !this.iconState;
    };
    ComponentsPage.prototype.stepperClick = function (event) {
    };
    ComponentsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.page.html */ "./src/app/pages/components/components.page.html"),
            styles: [__webpack_require__(/*! ./components.page.scss */ "./src/app/pages/components/components.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsPage);
    return ComponentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-components-components-module.js.map