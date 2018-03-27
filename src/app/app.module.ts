import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';
import {NgModule} from '@angular/core';

import {ToasterModule} from 'angular2-toaster';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    ToasterModule.forRoot()
  ],
  providers: [{
    provide: APP_BASE_HREF, useValue: '/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
