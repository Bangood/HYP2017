/**
 * Created by pure on 2018/3/27.
 */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ThemeModule} from '../../theme/theme.module';
import {PrimitiveRoutingModule, routedComponents} from './primitive-routing.module';
@NgModule({
  imports: [
    ThemeModule,
    PrimitiveRoutingModule,
    FormsModule,
  ],
  declarations: [
    ...routedComponents
  ]
})
export class PrimitiveModule {
}
