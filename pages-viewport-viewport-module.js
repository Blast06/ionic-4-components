(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-viewport-viewport-module"],{

/***/ "./src/app/pages/viewport/viewport.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/viewport/viewport.module.ts ***!
  \***************************************************/
/*! exports provided: ViewportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportPageModule", function() { return ViewportPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewport_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewport.page */ "./src/app/pages/viewport/viewport.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _viewport_page__WEBPACK_IMPORTED_MODULE_5__["ViewportPage"]
    }
];
var ViewportPageModule = /** @class */ (function () {
    function ViewportPageModule() {
    }
    ViewportPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivethreeCoreModule"]
            ],
            declarations: [_viewport_page__WEBPACK_IMPORTED_MODULE_5__["ViewportPage"]]
        })
    ], ViewportPageModule);
    return ViewportPageModule;
}());



/***/ }),

/***/ "./src/app/pages/viewport/viewport.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/viewport/viewport.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>In Viewport: {{visible}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <p *ngIf=\"!visible\">\n    scroll to reveal the button\n  </p>\n  <div class=\"container\">\n\n    <ion-button [fivCenter] fivViewport (fivAppear)=\"appear($event)\" (fivDisappear)=\"disappear($event)\">\n      Click me\n    </ion-button>\n\n  </div>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/viewport/viewport.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/viewport/viewport.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  min-height: 300vh;\n  position: relative;\n}\n.container ion-button {\n  bottom: 50px;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJ5Z3Jvc3NnYXJ0ZW4vRGV2L3RoaW5ncy9maXZldGhyZWUtbGliL3NyYy9hcHAvcGFnZXMvdmlld3BvcnQvdmlld3BvcnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy92aWV3cG9ydC92aWV3cG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlld3BvcnQvdmlld3BvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMzAwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxufSIsIi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAzMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lciBpb24tYnV0dG9uIHtcbiAgYm90dG9tOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/viewport/viewport.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/viewport/viewport.page.ts ***!
  \*************************************************/
/*! exports provided: ViewportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportPage", function() { return ViewportPage; });
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

var ViewportPage = /** @class */ (function () {
    function ViewportPage() {
        this.visible = false;
    }
    ViewportPage.prototype.ngOnInit = function () {
    };
    ViewportPage.prototype.appear = function (event) {
        this.visible = true;
    };
    ViewportPage.prototype.disappear = function (event) {
        this.visible = false;
    };
    ViewportPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewport',
            template: __webpack_require__(/*! ./viewport.page.html */ "./src/app/pages/viewport/viewport.page.html"),
            styles: [__webpack_require__(/*! ./viewport.page.scss */ "./src/app/pages/viewport/viewport.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewportPage);
    return ViewportPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-viewport-viewport-module.js.map