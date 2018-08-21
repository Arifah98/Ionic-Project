import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralManagerPage } from './general-manager';

@NgModule({
  declarations: [
    GeneralManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralManagerPage),
  ],
})
export class GeneralManagerPageModule {}
