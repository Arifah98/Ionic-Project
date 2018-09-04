import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';


import { OrdersPage } from '../pages/orders/orders';
import { SalesPage } from '../pages/sales/sales';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { DetailPageModule } from '../pages/detail/detail.module';
import { AddPageModule } from '../pages/add/add.module';

@NgModule({
  declarations: [
    MyApp,
    OrdersPage,
    SalesPage,
    DashboardPage,
    SettingsPage,
    LoginPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    ProfilePageModule,
    DetailPageModule,
    AddPageModule,
    IonicModule.forRoot(MyApp) ,
    IonicStorageModule.forRoot()  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrdersPage,
    SalesPage,
    DashboardPage,
    SettingsPage,
    LoginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
