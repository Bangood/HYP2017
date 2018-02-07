/**
 * Created by pure on 2018/2/2.
 */
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {ThemeModule} from '../../theme/theme.module';
@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
