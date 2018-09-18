webpackJsonp([8],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCatalogModule", function() { return ProductCatalogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_catalog__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductCatalogModule = (function () {
    function ProductCatalogModule() {
    }
    ProductCatalogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_catalog__["a" /* ProductCatalog */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_catalog__["a" /* ProductCatalog */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__product_catalog__["a" /* ProductCatalog */]
            ]
        })
    ], ProductCatalogModule);
    return ProductCatalogModule;
}());

//# sourceMappingURL=product-catalog.module.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCatalog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_moltin_moltin__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(160);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCatalog = (function () {
    function ProductCatalog(
        //protocols
        modalController, navController, toastController, moltin) {
        var _this = this;
        this.modalController = modalController;
        this.navController = navController;
        this.toastController = toastController;
        this.moltin = moltin;
        //class variable
        this.products = { data: [], meta: null };
        this.productData = [];
        this.productIncluded = [];
        this.product = [];
        this.productList = [];
        this.categoryList = [];
        this.filteredCatFusionAthletic = [];
        this.filteredCatMakeup = [];
        this.listSandwichs = [];
        this.listPates = [];
        this.listBoissons = [];
        //Instantiatation
        this.moltin.getProducts().then(function (data) {
            //data returned
            _this.products = data;
            //product data
            _this.productData = _this.products.data;
            _this.productIncluded = data['included'];
            //pull category out of the included
            _this.categoryList = _this.productIncluded['categories'];
            //loop through the products (map) and match them to a category and add the category to the products
            _this.productList = _this.products.data.map(function (product) {
                //get the image id out of the product object
                var imageId = product['relationships'].main_image
                    ? product['relationships'].main_image.data.id
                    : false;
                //get the cat id out of the product object
                var catId = product['relationships'].categories
                    ? product['relationships'].categories.data[0]["id"]
                    : false;
                //now loop through and match them to the included data (categoery object in this case)
                return __assign({}, product, { 
                    //id from product id to the the id of the included then add to product
                    image: imageId
                        ? _this.productIncluded['main_images'].find(function (img) { return img.id === imageId; }).link.href
                        : '/static/moltin-light-hex.svg', categoriesName: catId
                        ? _this.productIncluded['categories'].find(function (cat) { return cat.id === catId; }).name
                        : 'Category Name' });
            });
            console.log("lists", _this.productList);
            for (var i = 0; i < _this.productList.length; i++) {
                if (_this.productList[i]["categoriesName"] == "Sandwichs") {
                    _this.listSandwichs.push({
                        products: _this.productList[i],
                        catName: _this.productList[i]["categoriesName"],
                        image: _this.productList[i]["image"],
                        productName: _this.productList[i]["name"],
                        productFormattedPrice: _this.productList[i]["meta"]["display_price"]["with_tax"]["formatted"]
                    });
                }
                else if (_this.productList[i]["categoriesName"] == "Pâtes") {
                    _this.listPates.push({
                        products: _this.productList[i],
                        catName: _this.productList[i]["categoriesName"],
                        image: _this.productList[i]["image"],
                        productName: _this.productList[i]["name"],
                        productFormattedPrice: _this.productList[i]["meta"]["display_price"]["with_tax"]["formatted"]
                    });
                }
                else if (_this.productList[i]["categoriesName"] == "Boissons") {
                    _this.listBoissons.push({
                        products: _this.productList[i],
                        catName: _this.productList[i]["categoriesName"],
                        image: _this.productList[i]["image"],
                        productName: _this.productList[i]["name"],
                        productFormattedPrice: _this.productList[i]["meta"]["display_price"]["with_tax"]["formatted"]
                    });
                }
                else {
                    console.log("no cat for product");
                }
            }
        });
    }
    //Actions
    ProductCatalog.prototype.closeModal = function () {
        var HomePage = this.modalController.create('home');
        HomePage.present();
    };
    //view all
    ProductCatalog.prototype.getProductList = function (categorySelected) {
        console.log("categorySelected", categorySelected);
        if (categorySelected == 'Sandwichs') {
            var productListPage = this.modalController.create('productList', {
                'categoryName': "Sandwichs",
                'products': this.listSandwichs
            });
            productListPage.present();
        }
        if (categorySelected == 'Pâtes') {
            var productListPage = this.modalController.create('productList', {
                'categoryName': "Pates",
                'products': this.listPates
            });
            productListPage.present();
        }
        if (categorySelected == 'Boissons') {
            var productListPage = this.modalController.create('productList', {
                'categoryName': "Boissons",
                'products': this.listBoissons
            });
            productListPage.present();
        }
    };
    //go to product details
    ProductCatalog.prototype.goToProduct = function (product) {
        console.log("product to pass", product);
        this.navController.push('product', { 'product': product });
    };
    ProductCatalog.prototype.goToBag = function () {
        this.navController.push('cart');
    };
    ProductCatalog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-catalog',template:/*ion-inline-start:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\pages\product-catalog\product-catalog.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton>\n\n        <ion-title>\n\n            Menu\n\n        </ion-title>\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)="closeModal()">\n\n                <svg class="feather">\n\n                    <use xlink:href="assets/icon/feather-sprite.svg#arrow-left"/>\n\n                </svg>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="goToBag();">\n\n                <svg class="feather">\n\n                    <use xlink:href="assets/icon/feather-sprite.svg#shopping-bag" />\n\n                </svg>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n <div class="container">\n\n        <ion-col class="header" (click)="getProductList(\'Sandwichs\')">\n\n            <h1>Sandwichs</h1>\n\n            <h3>Voir tout</h3>\n\n        </ion-col>\n\n        <ion-slides>\n\n            <ion-col col-33 *ngFor="let product of listSandwichs"> \n\n                <div class="card card-1" (click)="goToProduct(product.products);">\n\n                    <img src="{{product.image}}">\n\n                </div>\n\n                <h4>{{ product.productName }}</h4>\n\n                <p>{{ product.productFormattedPrice }}</p>\n\n            </ion-col>\n\n        </ion-slides>\n\n        \n\n      <ion-col class="header" (click)="getProductList(\'Pates\')">\n\n          <h1>Pâtes</h1>\n\n           <h3>Voir tout</h3>\n\n       </ion-col>\n\n <ion-slides pager="true">\n\n     <ion-item>\n\n     <ion-row>\n\n       <ion-item no-lines text-wrap>\n\n       <ion-slides>\n\n         <ion-col col-33 *ngFor="let product of listPates">\n\n           <div class="card card-1" (click)="goToProduct(product.products);">\n\n               <img src="{{product.image}}">\n\n             </div>\n\n               <h4>{{ product.productName }}</h4>\n\n               <p>{{ product.productFormattedPrice }}</p>\n\n         </ion-col>\n\n       </ion-slides>\n\n     </ion-item>\n\n       </ion-row>\n\n   </ion-item>\n\n </ion-slides>\n\n\n\n <ion-col class="header" (click)="getProductList(\'Boissons\')">\n\n     <h1>Boissons</h1>\n\n      <h3>Voir tout</h3>\n\n  </ion-col>\n\n<ion-slides pager="true">\n\n<ion-item>\n\n<ion-row>\n\n  <ion-item no-lines text-wrap>\n\n  <ion-slides>\n\n    <ion-col col-33 *ngFor="let product of listBoissons">\n\n      <div class="card card-1" (click)="goToProduct(product.products);">\n\n          <img src="{{product.image}}">\n\n        </div>\n\n          <h4>{{ product.productName }}</h4>\n\n          <p>{{ product.productFormattedPrice }}</p>\n\n    </ion-col>\n\n  </ion-slides>\n\n</ion-item>\n\n  </ion-row>\n\n</ion-item>\n\n</ion-slides>\n\n\n\n\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\pages\product-catalog\product-catalog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_moltin_moltin__["a" /* Moltin */]])
    ], ProductCatalog);
    return ProductCatalog;
}());

//# sourceMappingURL=product-catalog.js.map

/***/ })

});
//# sourceMappingURL=8.js.map