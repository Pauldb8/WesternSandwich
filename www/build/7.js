webpackJsonp([7],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailModule", function() { return ProductDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductDetailModule = (function () {
    function ProductDetailModule() {
    }
    ProductDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */]
            ]
        })
    ], ProductDetailModule);
    return ProductDetailModule;
}());

//# sourceMappingURL=product-detail.module.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_moltin_moltin__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailPage = (function () {
    function ProductDetailPage(navController, modalController, navParams, moltin, toastController) {
        this.navController = navController;
        this.modalController = modalController;
        this.navParams = navParams;
        this.moltin = moltin;
        this.toastController = toastController;
        this.product = this.navParams.get('product');
    }
    ProductDetailPage.prototype.addToCart = function () {
        var _this = this;
        this.moltin.addToCart(this.product).subscribe(function (data) { return _this.goToSuccess(); }, function (error) { return _this.displayError(); });
    };
    ProductDetailPage.prototype.goToSuccess = function () {
        var _this = this;
        var controller = this.modalController.create('add-cart-success');
        controller.onDidDismiss(function (data) {
            if (data) {
                var pop = data["pop"];
                if (pop === true) {
                    _this.navController.pop();
                }
            }
        });
        controller.present();
    };
    ProductDetailPage.prototype.goToBag = function () {
        this.navController.push('cart');
    };
    ProductDetailPage.prototype.displayError = function () {
        var toast = this.toastController.create({
            message: "Could not add to bag",
            duration: 3
        });
        toast.present();
    };
    ProductDetailPage.prototype.closeModal = function () {
        var productCatalogPage = this.modalController.create('productCatalog');
        productCatalogPage.present();
    };
    ProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\pages\product-detail\product-detail.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton>\n\n        <ion-title>\n\n            <img src="/assets/imgs/title-logo.png" />\n\n        </ion-title>\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)="closeModal()">\n\n                <svg class="feather">\n\n                    <use xlink:href="assets/icon/feather-sprite.svg#arrow-left"/>\n\n                </svg>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="goToBag();">\n\n                <svg class="feather">\n\n                    <use xlink:href="assets/icon/feather-sprite.svg#shopping-bag" />\n\n                </svg>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="container">\n\n        <ion-grid class="product">\n\n            <ion-row class="gallery">\n\n              <ion-slides pager="true">\n\n                <img src="{{ product.image }}" />\n\n              </ion-slides>\n\n\n\n            <ion-row class="info">\n\n                <ion-col>\n\n                    <h2>{{ product.name }}</h2>\n\n                    <p>{{ product.description }}</p>\n\n                </ion-col>\n\n            </ion-row>\n\n          </ion-row>\n\n\n\n        </ion-grid>\n\n        <ion-toolbar>\n\n            <ion-grid>\n\n                <ion-row class="actions">\n\n                    <ion-col>\n\n                        <h4>{{ product.meta.display_price.with_tax.formatted }}</h4>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <button ion-button block round icon-start (click)="addToCart();">\n\n                            <svg class="feather">\n\n                                <use xlink:href="assets/icon/feather-sprite.svg#shopping-bag" />\n\n                            </svg>\n\n                            Ajouter au Panier \n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </ion-toolbar>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\pages\product-detail\product-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_moltin_moltin__["a" /* Moltin */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());

//# sourceMappingURL=product-detail.js.map

/***/ })

});
//# sourceMappingURL=7.js.map