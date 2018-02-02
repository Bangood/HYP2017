/**
 * Created by pure on 2018/2/2.
 */
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {DashboardModule} from './dashboard/dashboard.module';
const PAGES_COMPONENT = [
  PagesComponent
];
@NgModule({
  imports: [
    PagesRoutingModule,
    DashboardModule
  ],
  declarations: [
    ...PAGES_COMPONENT
  ]
})
export class PagesModule {
}
