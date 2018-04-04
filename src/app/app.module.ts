import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ToasterModule } from 'angular2-toaster';
import { NbAuthModule, NbEmailPassAuthProvider, NB_AUTH_TOKEN_WRAPPER_TOKEN, NbAuthJWTToken, NbAuthJWTInterceptor } from '@nebular/auth';

import { CoreModule } from './core/core.module';
import { ThemeModule } from './theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';



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
    ToasterModule.forRoot(),
    NbAuthModule.forRoot({
      forms: {
        login: {
          redirectDelay: 0
        }
      },
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            login: {
              endpoint: 'http://localhost:3001/v1/user/login'
            }
          }
        }
      }
    })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: NbAuthJWTToken },
    { provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
