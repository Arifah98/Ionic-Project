import { Component } from '@angular/core';

import { OrdersPage } from '../orders/orders';
import { SalesPage } from '../sales/sales';
import { DashboardPage } from '../dashboard/dashboard';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = OrdersPage;
  tab3Root = SalesPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
