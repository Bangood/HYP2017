/**
 * Created by pure on 2017/12/7.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HerbsComponent} from './herbs.component';
import {AddHerbComponent} from './add/add-herb.component';
const routes: Routes = [{
  path: '',
  component: HerbsComponent,
  children: [{
    path: 'add',
    component: AddHerbComponent
  }]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerbsRoutingModule {
}
export const routedComponents = [
  HerbsComponent,
  AddHerbComponent
];
