import {
    Component
} from "@angular/core";
import {
    IonicPage,
    ModalController,
    NavController,
    NavParams
} from "ionic-angular";
import {
    MoltinCart
} from "../../providers/moltin/models/cart";
import { Moltin } from "../../providers/moltin/moltin";

declare var Stripe: any;

@IonicPage({
    name: "checkout-payment",
    segment: "checkout-payment"
})
@Component({
    selector: "page-checkout-payment",
    templateUrl: "checkout-payment.html"
})
export class CheckoutPaymentPage {

    private paymentRequest: any;
    private card: any;
    private canMakePayment: boolean = true;
    private moltinCart: MoltinCart = this.navParams.get('cart');
    private customer: {} = this.navParams.get('customer');

    private selectedPaymentMethod: string = "bancontact";
    private formIsValid: boolean = false;

    private promoCode: string;

    constructor(
        private navController: NavController,
        private navParams: NavParams,
        private moltin: Moltin
    ) {
        this.constructPaymentRequest();
    }

    ionViewDidLoad() {
    }

    constructPaymentRequest() {
        let items = this.moltinCart.data.map(item => {
            return {
                "amount": item.meta.display_price.with_tax.value.amount,
                "label": item.name,
            }
        })
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
    }

    applyPromoCode() {
        this.moltin.applyPromoCode(this.promoCode).subscribe(
            data => console.log(data),
            error => console.error(error)
        )
    }

    confirmOrder() {
        if (this.selectedPaymentMethod == "bancontact") {
            this.moveToConfirmationPage();
        }
    }

    moveToConfirmationPage() {
        this.navController.push('checkout-confirmation', {
            'customer': this.customer
        });
    }
}