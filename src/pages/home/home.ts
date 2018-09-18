import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController} from 'ionic-angular';
import { ProductCatalog } from '../product-catalog/product-catalog';

@IonicPage({
    name: 'home',
    segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    buttonColor: string = '#FFFFFF'; //Default Color

    constructor(private modalController: ModalController,
        private nav: NavController
    ) {

    }
 
    getProductCatalog() {
        this.nav.push("productCatalog");  
    //   let productCatalogPage = this.modalController.create('productCatalog');
    //   productCatalogPage.present();
    }
    
}
