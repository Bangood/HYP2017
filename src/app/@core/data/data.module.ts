/**
 * Created by pure on 2017/12/7.
 */
import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserService} from './users.service';
import {StateService} from './state.service';
import {PlayerService} from './player.service';

const SERVICES = [
  UserService,
  StateService,
  PlayerService
];

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ...SERVICES
  ]
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES
      ]
    };
  }
}
