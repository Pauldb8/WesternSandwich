webpackJsonp([0],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPaymentModule", function() { return CheckoutPaymentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_payment__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cart_progress_cart_progress_module__ = __webpack_require__(722);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckoutPaymentModule = (function () {
    function CheckoutPaymentModule() {
    }
    CheckoutPaymentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout_payment__["a" /* CheckoutPaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_cart_progress_cart_progress_module__["a" /* CartProgressModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout_payment__["a" /* CheckoutPaymentPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__checkout_payment__["a" /* CheckoutPaymentPage */]
            ]
        })
    ], CheckoutPaymentModule);
    return CheckoutPaymentModule;
}());

//# sourceMappingURL=checkout-payment.module.js.map

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

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPaymentPage; });
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



var CheckoutPaymentPage = (function () {
    function CheckoutPaymentPage(navController, navParams, moltin) {
        this.navController = navController;
        this.navParams = navParams;
        this.moltin = moltin;
        this.canMakePayment = true;
        this.moltinCart = this.navParams.get('cart');
        this.customer = this.navParams.get('customer');
        this.selectedPaymentMethod = "bancontact";
        this.formIsValid = false;
        this.constructPaymentRequest();
    }
    CheckoutPaymentPage.prototype.ionViewDidLoad = function () {
    };
    CheckoutPaymentPage.prototype.constructPaymentRequest = function () {
        var items = this.moltinCart.data.map(function (item) {
            return {
                "amount": item.meta.display_price.with_tax.value.amount,
                "label": item.name,
            };
        });
        this.paymentRequest = {
            country: 'BE',
            currency: this.moltinCart.meta.display_price.with_tax.currency.toLowerCase(),
            total: {
                label: 'Paiement total',
                amount: this.moltinCart.meta.display_price.with_tax.amount,
            },
            displayItems: items
        };
        // this.paymentRequest.on('token', (ev) => {
        //     ev.complete('success');
        //     this.moveToConfirmationPage(ev.token);
        // });
        // this.paymentRequest.on('error', (ev) => {
        //     console.log(ev);
        // });
        // this.paymentRequest.on('cancel', (ev) => {
        //     console.log(ev);
        // })
    };
    CheckoutPaymentPage.prototype.applyPromoCode = function () {
        this.moltin.applyPromoCode(this.promoCode).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    CheckoutPaymentPage.prototype.confirmOrder = function () {
        if (this.selectedPaymentMethod == "bancontact") {
            this.moveToConfirmationPage();
        }
    };
    CheckoutPaymentPage.prototype.moveToConfirmationPage = function () {
        this.navController.push('checkout-confirmation', {
            'customer': this.customer
        });
    };
    CheckoutPaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-checkout-payment",template:/*ion-inline-start:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\pages\checkout-payment\checkout-payment.html"*/'<ion-header>\n\n    <ion-navbar class="grey">\n\n        <ion-title>\n\n            Paiement\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-grid no-padding>\n\n        <ion-row>\n\n            <cart-progress amount=3 current=2></cart-progress>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-grid padding>\n\n        <ion-row>\n\n            <h4>Code promo ?</h4>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col class="promo">\n\n                <ion-input placeholder="Entre le code" class="rounded" [(ngModel)]="promoCode"></ion-input>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n                <button ion-button block round icon-end (click)="applyPromoCode();">\n\n                    Appliquer\n\n                    <svg class="feather">\n\n                        <use xlink:href="assets/icon/feather-sprite.svg#arrow-right" />\n\n                    </svg>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row  *ngIf="canMakePayment">\n\n            <h4>Cliquez sur la méthode de paiement</h4>\n\n        </ion-row>\n\n        <ion-row *ngIf="selectedPaymentMethod == \'bancontact\'" align-items-center>\n\n            <ion-col col-6>\n\n                <ion-card>\n\n                    <img src="../../assets/imgs/bancontact-logo.png">\n\n                    <ion-card-content>\n\n                        <ion-card-title>\n\n                            Payer par Bancontact\n\n                        </ion-card-title>\n\n                        <p>\n\n                            Payez avec votre application bancontact préférée de manière instantanée et entièrement \n\n                            sécurisée.\n\n                        </p>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pauld\IonicProjects\WesternSandwich\src\pages\checkout-payment\checkout-payment.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_moltin_moltin__["a" /* Moltin */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_moltin_moltin__["a" /* Moltin */]) === "function" && _c || Object])
    ], CheckoutPaymentPage);
    return CheckoutPaymentPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=checkout-payment.js.map

/***/ })

});
//# sourceMappingURL=0.js.map