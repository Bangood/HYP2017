/**
 * Created by pure on 2018/2/2.
 */
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {ThemeModule} from '../theme/theme.module';
const PAGES_COMPONENT = [
  PagesComponent
];
@NgModule({
  imports: [
    PagesRoutingModule,
    DashboardModule,
    ThemeModule
  ],
  declarations: [
    ...PAGES_COMPONENT
  ]
})
export class PagesModule {
}
