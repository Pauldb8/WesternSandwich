webpackJsonp([6],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCartSuccessModule", function() { return AddToCartSuccessModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__success__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddToCartSuccessModule = (function () {
    function AddToCartSuccessModule() {
    }
    AddToCartSuccessModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__success__["a" /* AddToCartSuccessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__success__["a" /* AddToCartSuccessPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__success__["a" /* AddToCartSuccessPage */]
            ]
        })
    ], AddToCartSuccessModule);
    return AddToCartSuccessModule;
}());

//# sourceMappingURL=success.module.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToCartSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddToCartSuccessPage = (function () {
    function AddToCartSuccessPage(navController, viewController, navParams) {
        this.navController = navController;
        this.viewController = viewController;
        this.navParams = navParams;
        this.product = this.navParams.get('product');
    }
    AddToCartSuccessPage.prototype.keepShopping = function () {
        this.viewController.dismiss({ 'pop': true });
    };
    AddToCartSuccessPage.prototype.goToBag = function () {
        this.navController.push('cart');
    };
    AddToCartSuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-cart-success',template:/*ion-inline-start:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\pages\product-detail\success\success.html"*/'<ion-content>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <svg class="feather">\n\n                <use xlink:href="assets/icon/feather-sprite.svg#check-circle" />\n\n            </svg>\n\n            <ion-card-title>Ajouté au panier</ion-card-title>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <button ion-button full outline round icon-start (click)="keepShopping();">\n\n                Continuer\n\n            </button>\n\n            <button ion-button block round icon-end (click)="goToBag();">\n\n                Se rendre au panier\n\n                <svg class="feather">\n\n                    <use xlink:href="assets/icon/feather-sprite.svg#shopping-bag" />\n\n                </svg>\n\n            </button>\n\n        </ion-card-content>\n\n\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\pages\product-detail\success\success.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddToCartSuccessPage);
    return AddToCartSuccessPage;
}());

//# sourceMappingURL=success.js.map

/***/ })

});
//# sourceMappingURL=6.js.map