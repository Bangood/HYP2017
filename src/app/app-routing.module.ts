/**
 * Created by pure on 2018/2/2.
 */
import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule'},
  {path: '', redirectTo: 'pages', pathMatch: 'full'},
  {path: '**', redirectTo: 'pages'}
];
const config: ExtraOptions = {
  useHash: true
};
@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
