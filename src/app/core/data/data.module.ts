/**
 * Created by pure on 2018/2/6.
 */
//
import {NgModule, ModuleWithProviders} from '@angular/core';
//
import {UserService} from './users.service';
import {StateService} from './state.service';
import {PrimitiveService} from './primitive.service';
const SERVICES = [
  UserService,
  StateService,
  PrimitiveService
];
@NgModule({
  imports: [],
  providers: [
    ...SERVICES
  ]
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: DataModule,
      providers: [
        ...SERVICES
      ]
    };
  }
}
