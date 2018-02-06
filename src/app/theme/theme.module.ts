/**
 * Created by pure on 2018/2/2.
 */
//
import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
//
import {
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule
} from '@nebular/theme';
//
import {
  ThemeSwitcherComponent,
} from './components';

import {DEFAULT_THEME} from './styles/theme.default';
import {COSMIC_THEME} from './styles/theme.cosmic';

const BASE_MODULES = [
  CommonModule
];
const NB_MODULES = [
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule
];
const COMPONENTS = [
  ThemeSwitcherComponent,
];
const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot({name: 'cosmic'}, [DEFAULT_THEME, COSMIC_THEME]).providers,
  ...NbSidebarModule.forRoot().providers
];
@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS]
    };
  }
}
