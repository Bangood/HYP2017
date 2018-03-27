import {Component} from '@angular/core';
import {ToasterConfig, IToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  template: `
    <toaster-container [toasterconfig]="appConfig"></toaster-container>
    <router-outlet></router-outlet>`
})
export class AppComponent {
  appConfig: IToasterConfig = new ToasterConfig({
    animation: 'fade', newestOnTop: false, positionClass: 'toast-top-full-width',
    toastContainerId: 1, timeout: 5000, showCloseButton: true,
    titleClass: 'title-1'
  });

  constructor() {
  }
}
