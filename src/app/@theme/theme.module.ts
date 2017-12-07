/**
 * Created by pure on 2017/12/4.
 */
import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
  NbCheckboxModule,
} from '@nebular/theme';
import {
  HeaderComponent,
  FooterComponent,
  ThemeSettingsComponent,
  ThemeSwitcherComponent
} from './components';
import {
  OneColumnLayoutComponent,
  TwoColumnsLayoutComponent,
  ThreeColumnsLayoutComponent,
  SampleLayoutComponent
} from './layouts';
import {DEFAULT_THEME} from './styles/theme.default';
import {COSMIC_THEME} from './styles/theme.cosmic';
const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NgbModule
];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  ThemeSettingsComponent,
  ThemeSwitcherComponent,
  OneColumnLayoutComponent,
  TwoColumnsLayoutComponent,
  ThreeColumnsLayoutComponent,
  SampleLayoutComponent
];
const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot({
    name: 'cosmic'
  }, [DEFAULT_THEME, COSMIC_THEME]).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers
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
