import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {NgModule} from '@angular/core';

import {CoreModule} from './core/core.module';
import {ThemeModule} from './theme/theme.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    ThemeModule.forRoot()
  ],
  providers: [{
    provide: APP_BASE_HREF, useValue: '/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
