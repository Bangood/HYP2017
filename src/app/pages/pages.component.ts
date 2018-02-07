/**
 * Created by pure on 2018/2/2.
 */
import {Component} from '@angular/core';
//
//
import {MENU_ITEM} from './pages-menu';
@Component({
  selector: 'hyp-pages',
  template: `
    <hyp-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </hyp-sample-layout>
  `
})
export class PagesComponent {
  menu = MENU_ITEM;
}
