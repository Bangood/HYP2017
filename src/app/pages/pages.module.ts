/**
 * Created by pure on 2017/12/4.
 */
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {ThemeModule} from '../@theme/theme.module';
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
export class PagesModule {}
