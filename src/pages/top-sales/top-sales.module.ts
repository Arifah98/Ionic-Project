import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopSalesPage } from './top-sales';

@NgModule({
  declarations: [
    TopSalesPage,
  ],
  imports: [
    IonicPageModule.forChild(TopSalesPage),
  ],
})
export class TopSalesPageModule {}
