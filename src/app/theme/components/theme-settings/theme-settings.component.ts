/**
 * Created by pure on 2018/2/7.
 */
//
import {Component} from '@angular/core';
//
//
import {StateService} from '../../../core/data/state.service';
@Component({
  selector: 'hyp-theme-settings',
  styleUrls: ['./theme-settings.component.scss'],
  templateUrl: './theme-settings.component.html'
})
export class ThemeSettingsComponent {
  layouts = [];
  sidebars = [];

  constructor(private _stateService: StateService) {
    this._stateService.getLayoutStates()
      .subscribe(($layouts: any[]) => this.layouts = $layouts);
    this._stateService.getSidebarStates()
      .subscribe(($sidebars: any[]) => this.sidebars = $sidebars);
  }

  layoutSelect($layout: any): boolean {
    this.layouts = this.layouts.map(($l: any) => {
      $l.selected = false;
      return $l;
    });
    $layout.selected = true;
    this._stateService.setLayoutState($layout);
    return false;
  }

  sidebarSelect($sidebars: any): boolean {
    this.sidebars = this.sidebars.map(($s: any) => {
      $s.selected = false;
      return $s;
    });
    $sidebars.selected = true;
    this._stateService.setSidebarState($sidebars);
    return false;
  }
}
