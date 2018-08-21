import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-sales',
  templateUrl: 'sales.html'
})
export class SalesPage {

 
  constructor(public navCtrl: NavController) {

  }

  
  pageTopSales() {
    this.navCtrl.push('TopSalesPage');
  }

  pageGeneralManager() {
    this.navCtrl.push('GeneralManagerPage');
  }

}
