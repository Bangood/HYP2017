/**
 * Created by pure on 2018/2/2.
 */
import {Component} from '@angular/core';
@Component({
  selector: 'hyp-pages',
  template: `
    <hyp-sample-layout>
      <router-outlet></router-outlet>
    </hyp-sample-layout>
  `
})
export class PagesComponent {
}
