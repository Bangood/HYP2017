/**
 * Created by pure on 2017/12/7.
 */
import {NgModule} from '@angular/core';
import {HerbsRoutingModule, routedComponents} from './herbs-routing.module';
@NgModule({
  imports: [
    HerbsRoutingModule
  ],
  declarations: [
    ...routedComponents
  ],
  providers: []
})
export class HerbsModule {}
