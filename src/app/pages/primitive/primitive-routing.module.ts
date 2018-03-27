/**
 * Created by pure on 2018/3/27.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PrimitiveComponent} from './primitive.component';
import {PrimitiveCreateComponent} from './create/create.component';
import {PrimitiveListComponent} from './list/list.component';

const routes: Routes = [{
  path: '',
  component: PrimitiveComponent,
  children: [{
    path: 'create',
    component: PrimitiveCreateComponent
  }, {
    path: 'list',
    component: PrimitiveListComponent
  }]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrimitiveRoutingModule {
}
export const routedComponents = [
  PrimitiveComponent,
  PrimitiveCreateComponent,
  PrimitiveListComponent
];
