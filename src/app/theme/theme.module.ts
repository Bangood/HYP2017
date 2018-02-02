/**
 * Created by pure on 2018/2/2.
 */
import {NgModule, ModuleWithProviders} from '@angular/core';

import {
  NbLayoutModule, NbThemeModule
} from '@nebular/theme';

const NB_MODULES = [
  NbLayoutModule
];
const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot({name: 'default'}).providers
];
@NgModule({
  imports: [...NB_MODULES],
  exports: [...NB_MODULES],
  declarations: []
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS]
    };
  }
}
