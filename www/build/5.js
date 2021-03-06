webpackJsonp([5],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListModule", function() { return ProductListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list__ = __webpack_require__(733);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductListModule = (function () {
    function ProductListModule() {
    }
    ProductListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductList */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductList */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductList */]
            ]
        })
    ], ProductListModule);
    return ProductListModule;
}());

//# sourceMappingURL=product-list.module.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_moltin_moltin__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductList = (function () {
    function ProductList(modalController, navController, navParams, toastController, moltin) {
        this.modalController = modalController;
        this.navController = navController;
        this.navParams = navParams;
        this.toastController = toastController;
        this.moltin = moltin;
        //class variable
        this.product = [];
        this.categoryProductsList = [];
        this.categoryName = this.navParams.get('categoryName');
        this.categoryProducts = this.navParams.get('products');
        for (var i = 0; i < this.categoryProducts.length; i++) {
            this.categoryProductsList.push(this.categoryProducts[i]["products"]);
        }
    }
    //Actions
    ProductList.prototype.closeModal = function () {
        var productCatalogPage = this.modalController.create('productCatalog');
        productCatalogPage.present();
    };
    ProductList.prototype.goToProduct = function (product) {
        console.log("product to pass", product);
        this.navController.push('product', { 'product': product });
    };
    ProductList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\pages\product-list\product-list.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton>\n\n      <ion-title>\n\n        {{ categoryName }}\n\n      </ion-title>\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)="closeModal()">\n\n                <svg class="feather">\n\n                    <use xlink:href="assets/icon/feather-sprite.svg#arrow-left"/>\n\n                </svg>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="goToBag();">\n\n                <svg class="feather">\n\n                    <use xlink:href="assets/icon/feather-sprite.svg#shopping-bag" />\n\n                </svg>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n      <ion-grid>\n\n          <ion-row>\n\n             <ion-col col-33 *ngFor="let product of categoryProductsList">\n\n                 <div class="card card-1" (click)="goToProduct(product);">\n\n                   <img src="{{product.image}}">\n\n                 </div>\n\n                   <h4>{{ product.name }}</h4>\n\n                   <p>{{ product.meta.display_price.with_tax.formatted }}</p>\n\n             </ion-col>\n\n           </ion-row>\n\n     </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\pages\product-list\product-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_moltin_moltin__["a" /* Moltin */]])
    ], ProductList);
    return ProductList;
}());

//# sourceMappingURL=product-list.js.map

/***/ })

});
//# sourceMappingURL=5.js.map