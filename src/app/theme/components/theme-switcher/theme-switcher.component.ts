/**
 * Created by pure on 2018/2/6.
 */
//
import {Component, OnInit} from '@angular/core';
//
import {NbThemeService} from '@nebular/theme';
import {NbJSThemeOptions} from '@nebular/theme/services/js-themes/theme.options';
@Component({
  selector: 'hyp-theme-switcher',
  styleUrls: ['./theme-switcher.component.scss'],
  templateUrl: './theme-switcher.component.html'
})
export class ThemeSwitcherComponent implements OnInit {
  theme: NbJSThemeOptions;

  constructor(private _themeService: NbThemeService) {
  }

  ngOnInit() {
    this._themeService.getJsTheme()
      .subscribe(($theme: NbJSThemeOptions) => this.theme = $theme);
  }

  toggleTheme($theme: boolean) {
    const boolTheme = this.boolToTheme($theme);
    this._themeService.changeTheme(boolTheme);
  }

  currentBoolTheme() {
    return this.themeToBool(this.theme);
  }

  private themeToBool($theme: NbJSThemeOptions) {
    return $theme.name === 'cosmic';
  }

  private boolToTheme($theme: boolean) {
    return $theme ? 'cosmic' : 'default';
  }
}
