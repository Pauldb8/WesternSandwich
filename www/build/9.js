webpackJsonp([9],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(729);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = (function () {
    function HomePage(modalController, nav) {
        this.modalController = modalController;
        this.nav = nav;
        this.buttonColor = '#FFFFFF'; //Default Color
    }
    HomePage.prototype.getProductCatalog = function () {
        this.nav.push("productCatalog");
        //   let productCatalogPage = this.modalController.create('productCatalog');
        //   productCatalogPage.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\pages\home\home.html"*/'<ion-content>\n\n    <ion-grid no-padding>\n\n        <ion-row>\n\n            <ion-col>\n\n                <h1 text-center>Western Sandwich</h1>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="info">\n\n            <ion-col>\n\n                <p text-justify> \n\n                    Un grand choix d\'une variété de sandwichs et de pâtes maisons qui vont régaler vos papilles.\n\n                    Complémenter le tout d\'une boisson fraîche, et on vous pouvez venir retirer votre menu ou on vous le livre chez vous!\n\n                </p>\n\n                <button ion-button block round icon-end (click)="getProductCatalog();" [ngStyle]="{\'background-color\': buttonColor}">\n\n                    Passer commande\n\n                    <svg class="feather">\n\n                        <use xlink:href="assets/imgs/catalogbook.svg"/>\n\n                    </svg>\n\n                </button>\n\n                <p text-center>\n\n                    <br />Méthode de paiements acceptées:\n\n                    <br> \n\n                    <img src="../../assets/imgs/paypal-logo.png">  \n\n                    <img src="../../assets/imgs/bancontact-logo.png">\n\n                    <ion-icon name="ios-cash-outline"></ion-icon>\n\n                </p> \n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="fill" text-center>\n\n            <p color="text-light">&copy; Western Sandwich 2018</p>  \n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=9.js.map