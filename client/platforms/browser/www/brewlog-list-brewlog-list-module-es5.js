(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brewlog-list-brewlog-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/brewlog-list/brewlog-list.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/brewlog-list/brewlog-list.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>brewlog-list</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"presentPopover($event)\"><i class=\"material-icons\">menu</i></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/popovermenu/popovermenu.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/popovermenu/popovermenu.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n  <ion-item *ngFor=\"let menuItem of menuItems\" (click)=\"onClick(menuItem)\">\n    <i item-start class=\"material-icons\">{{menuItem.icon}}</i>\n    <ion-label>{{menuItem.label | translate:menuItem.langParam}}</ion-label>\n  </ion-item>\n</ion-list>\n"

/***/ }),

/***/ "./src/app/brewlog-list/brewlog-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/brewlog-list/brewlog-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BrewlogListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrewlogListPageRoutingModule", function() { return BrewlogListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _brewlog_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brewlog-list.page */ "./src/app/brewlog-list/brewlog-list.page.ts");




var routes = [
    {
        path: '',
        component: _brewlog_list_page__WEBPACK_IMPORTED_MODULE_3__["BrewlogListPage"]
    }
];
var BrewlogListPageRoutingModule = /** @class */ (function () {
    function BrewlogListPageRoutingModule() {
    }
    BrewlogListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BrewlogListPageRoutingModule);
    return BrewlogListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/brewlog-list/brewlog-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/brewlog-list/brewlog-list.module.ts ***!
  \*****************************************************/
/*! exports provided: BrewlogListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrewlogListPageModule", function() { return BrewlogListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _brewlog_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brewlog-list-routing.module */ "./src/app/brewlog-list/brewlog-list-routing.module.ts");
/* harmony import */ var _brewlog_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brewlog-list.page */ "./src/app/brewlog-list/brewlog-list.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components.module */ "./src/app/components.module.ts");








var BrewlogListPageModule = /** @class */ (function () {
    function BrewlogListPageModule() {
    }
    BrewlogListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _brewlog_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["BrewlogListPageRoutingModule"],
                _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_brewlog_list_page__WEBPACK_IMPORTED_MODULE_6__["BrewlogListPage"]]
        })
    ], BrewlogListPageModule);
    return BrewlogListPageModule;
}());



/***/ }),

/***/ "./src/app/brewlog-list/brewlog-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/brewlog-list/brewlog-list.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyZXdsb2ctbGlzdC9icmV3bG9nLWxpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/brewlog-list/brewlog-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/brewlog-list/brewlog-list.page.ts ***!
  \***************************************************/
/*! exports provided: BrewlogListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrewlogListPage", function() { return BrewlogListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popovermenu_popovermenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popovermenu/popovermenu.component */ "./src/app/popovermenu/popovermenu.component.ts");




var BrewlogListPage = /** @class */ (function () {
    function BrewlogListPage(popoverCtl) {
        this.popoverCtl = popoverCtl;
        this.menu = [];
    }
    BrewlogListPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.menu = [
                    {
                        label: 'TITLE',
                        icon: 'star'
                    },
                    {
                        label: 'data',
                        icon: 'star',
                        langParam: { name: 'Kalle' }
                    }
                ];
                return [2 /*return*/];
            });
        });
    };
    BrewlogListPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtl.create({
                            component: _popovermenu_popovermenu_component__WEBPACK_IMPORTED_MODULE_3__["PopovermenuComponent"],
                            componentProps: { menuItems: this.menu },
                            event: ev
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BrewlogListPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    BrewlogListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brewlog-list',
            template: __webpack_require__(/*! raw-loader!./brewlog-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/brewlog-list/brewlog-list.page.html"),
            styles: [__webpack_require__(/*! ./brewlog-list.page.scss */ "./src/app/brewlog-list/brewlog-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], BrewlogListPage);
    return BrewlogListPage;
}());



/***/ }),

/***/ "./src/app/components.module.ts":
/*!**************************************!*\
  !*** ./src/app/components.module.ts ***!
  \**************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popovermenu_popovermenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popovermenu/popovermenu.component */ "./src/app/popovermenu/popovermenu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"].forRoot()
            ],
            declarations: [
                _popovermenu_popovermenu_component__WEBPACK_IMPORTED_MODULE_3__["PopovermenuComponent"]
            ],
            entryComponents: [
                _popovermenu_popovermenu_component__WEBPACK_IMPORTED_MODULE_3__["PopovermenuComponent"]
            ],
            exports: [_popovermenu_popovermenu_component__WEBPACK_IMPORTED_MODULE_3__["PopovermenuComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/popovermenu/popovermenu.component.scss":
/*!********************************************************!*\
  !*** ./src/app/popovermenu/popovermenu.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcG92ZXJtZW51L3BvcG92ZXJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/popovermenu/popovermenu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/popovermenu/popovermenu.component.ts ***!
  \******************************************************/
/*! exports provided: PopovermenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopovermenuComponent", function() { return PopovermenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var PopovermenuComponent = /** @class */ (function () {
    function PopovermenuComponent(navParams) {
        this.navParams = navParams;
        this.menuItems = [];
        this.menuItems = this.navParams.get('menuItems');
    }
    PopovermenuComponent.prototype.onClick = function (menuItem) { };
    PopovermenuComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
    ]; };
    PopovermenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popovermenu',
            template: __webpack_require__(/*! raw-loader!./popovermenu.component.html */ "./node_modules/raw-loader/index.js!./src/app/popovermenu/popovermenu.component.html"),
            styles: [__webpack_require__(/*! ./popovermenu.component.scss */ "./src/app/popovermenu/popovermenu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], PopovermenuComponent);
    return PopovermenuComponent;
}());



/***/ })

}]);
//# sourceMappingURL=brewlog-list-brewlog-list-module-es5.js.map