/**
 * Created by pure on 2017/12/6.
 */
import {NgModule} from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';
import {DashboardComponent} from './dashboard.component';
import {ContactsComponent} from './contacts/contacts.component';
@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    DashboardComponent,
    ContactsComponent
  ]
})
export class DashboardModule {}
