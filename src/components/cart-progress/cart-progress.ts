import { Component, Input, NgModule } from '@angular/core';
import { Button, Select } from 'ionic-angular';
 
@Component({
    selector: 'cart-progress',
    templateUrl: 'cart-progress.html'
})
export class CartProgress {

    @Input('amount') amount: number;
    @Input('current') current: number;

    private elements: string[] = [
        "Détails",
        "Paiement",
        "Confirmation" 
    ]

    getElements(): Array<number> {
        return Array.from({length: this.amount}, (x,i) => i + 1);
    }
}