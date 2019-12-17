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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _brewlog_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brewlog-list.page */ "./src/app/brewlog-list/brewlog-list.page.ts");




const routes = [
    {
        path: '',
        component: _brewlog_list_page__WEBPACK_IMPORTED_MODULE_3__["BrewlogListPage"]
    }
];
let BrewlogListPageRoutingModule = class BrewlogListPageRoutingModule {
};
BrewlogListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BrewlogListPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _brewlog_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brewlog-list-routing.module */ "./src/app/brewlog-list/brewlog-list-routing.module.ts");
/* harmony import */ var _brewlog_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brewlog-list.page */ "./src/app/brewlog-list/brewlog-list.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components.module */ "./src/app/components.module.ts");








let BrewlogListPageModule = class BrewlogListPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popovermenu_popovermenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popovermenu/popovermenu.component */ "./src/app/popovermenu/popovermenu.component.ts");




let BrewlogListPage = class BrewlogListPage {
    constructor(popoverCtl) {
        this.popoverCtl = popoverCtl;
        this.menu = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        });
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverCtl.create({
                component: _popovermenu_popovermenu_component__WEBPACK_IMPORTED_MODULE_3__["PopovermenuComponent"],
                componentProps: { menuItems: this.menu },
                event: ev
            });
            return yield popover.present();
        });
    }
};
BrewlogListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
BrewlogListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-brewlog-list',
        template: __webpack_require__(/*! raw-loader!./brewlog-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/brewlog-list/brewlog-list.page.html"),
        styles: [__webpack_require__(/*! ./brewlog-list.page.scss */ "./src/app/brewlog-list/brewlog-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], BrewlogListPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popovermenu_popovermenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popovermenu/popovermenu.component */ "./src/app/popovermenu/popovermenu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");






let ComponentsModule = class ComponentsModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let PopovermenuComponent = class PopovermenuComponent {
    constructor(navParams) {
        this.navParams = navParams;
        this.menuItems = [];
        this.menuItems = this.navParams.get('menuItems');
    }
    onClick(menuItem) { }
};
PopovermenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
PopovermenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popovermenu',
        template: __webpack_require__(/*! raw-loader!./popovermenu.component.html */ "./node_modules/raw-loader/index.js!./src/app/popovermenu/popovermenu.component.html"),
        styles: [__webpack_require__(/*! ./popovermenu.component.scss */ "./src/app/popovermenu/popovermenu.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], PopovermenuComponent);



/***/ })

}]);
//# sourceMappingURL=brewlog-list-brewlog-list-module-es2015.js.map