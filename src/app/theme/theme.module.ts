/**
 * Created by pure on 2018/2/2.
 */
import {NgModule, ModuleWithProviders} from '@angular/core';

import {
  NbLayoutModule, NbThemeModule
} from '@nebular/theme';

import {DEFAULT_THEME} from './styles/theme.default';
import {COSMIC_THEME} from './styles/theme.cosmic';
const NB_MODULES = [
  NbLayoutModule
];
const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot({name: 'cosmic'}, [DEFAULT_THEME, COSMIC_THEME]).providers
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
