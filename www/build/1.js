webpackJsonp([1],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutDetailModule", function() { return CheckoutDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_detail__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cart_progress_cart_progress_module__ = __webpack_require__(722);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckoutDetailModule = (function () {
    function CheckoutDetailModule() {
    }
    CheckoutDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout_detail__["a" /* CheckoutDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_cart_progress_cart_progress_module__["a" /* CartProgressModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout_detail__["a" /* CheckoutDetailPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__checkout_detail__["a" /* CheckoutDetailPage */]
            ]
        })
    ], CheckoutDetailModule);
    return CheckoutDetailModule;
}());

//# sourceMappingURL=checkout-detail.module.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProgressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_progress__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartProgressModule = (function () {
    function CartProgressModule() {
    }
    CartProgressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__cart_progress__["a" /* CartProgress */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__cart_progress__["a" /* CartProgress */]
            ]
        })
    ], CartProgressModule);
    return CartProgressModule;
}());

//# sourceMappingURL=cart-progress.module.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartProgress = (function () {
    function CartProgress() {
        this.elements = [
            "Détails",
            "Paiement",
            "Confirmation"
        ];
    }
    CartProgress.prototype.getElements = function () {
        return Array.from({ length: this.amount }, function (x, i) { return i + 1; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('amount'),
        __metadata("design:type", Number)
    ], CartProgress.prototype, "amount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('current'),
        __metadata("design:type", Number)
    ], CartProgress.prototype, "current", void 0);
    CartProgress = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cart-progress',template:/*ion-inline-start:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\components\cart-progress\cart-progress.html"*/'<ul>\n\n    <li *ngFor="let number of getElements();" [ngClass]="{ \'active\': number < current }">\n\n        <span></span>\n\n        <p>{{ elements[number - 1]}}</p>\n\n    </li>\n\n</ul>'/*ion-inline-end:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\components\cart-progress\cart-progress.html"*/
        })
    ], CartProgress);
    return CartProgress;
}());

//# sourceMappingURL=cart-progress.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutDetailPage = (function () {
    function CheckoutDetailPage(navController, navParams, formBuilder) {
        this.navController = navController;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.cart = this.navParams.get('cart');
        this.form = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    CheckoutDetailPage.prototype.pay = function () {
        this.navController.push('checkout-payment', {
            'customer': this.form.value,
            'cart': this.cart
        });
    };
    CheckoutDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-checkout-detail",template:/*ion-inline-start:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\pages\checkout-detail\checkout-detail.html"*/'<ion-header>\n\n    <ion-navbar class="grey">\n\n        <ion-title>\n\n            Paiement\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-grid no-padding>\n\n        <ion-row>\n\n            <cart-progress amount=3 current=1></cart-progress>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-grid padding>\n\n        <ion-row>\n\n            <h2>Vos coordonnées</h2>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <form [formGroup]="form">\n\n                    <ion-item no-lines>\n\n                        <ion-input formControlName="name" placeholder="Votre nom" class="rounded"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item no-lines>\n\n                        <ion-input formControlName="email" placeholder="Votre email" class="rounded"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item no-lines>\n\n                        <button ion-button block round icon-end (click)="pay();" [disabled]="!form.valid">\n\n                            Continuer vers le paiement\n\n                            <svg class="feather">\n\n                                <use xlink:href="assets/icon/feather-sprite.svg#arrow-right" />\n\n                            </svg>\n\n                        </button>\n\n                    </ion-item>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\pages\checkout-detail\checkout-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CheckoutDetailPage);
    return CheckoutDetailPage;
}());

//# sourceMappingURL=checkout-detail.js.map

/***/ })

});
//# sourceMappingURL=1.js.map