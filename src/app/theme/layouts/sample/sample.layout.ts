/**
 * Created by pure on 2018/2/2.
 */
//
import {Component, OnDestroy} from '@angular/core';
//
import {
  NbMediaBreakpoint,
  NbMediaBreakpointsService,
  NbMenuItem,
  NbMenuService,
  NbSidebarService,
  NbThemeService
} from '@nebular/theme';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';
//
import {StateService} from '../../../core/data/state.service';

@Component({
  selector: 'hyp-sample-layout',
  styleUrls: ['./sample.layout.scss'],
  templateUrl: './sample.layout.html'
})
export class SampleLayoutComponent implements OnDestroy {
  subMenu: NbMenuItem[] = [{
    title: 'PAGE LEVEL MENU',
    group: true,
  },
    {
      title: 'Buttons',
      icon: 'ion ion-android-radio-button-off',
      link: '/pages/ui-features/buttons',
    },
    {
      title: 'Grid',
      icon: 'ion ion-android-radio-button-off',
      link: '/pages/ui-features/grid',
    },
    {
      title: 'Icons',
      icon: 'ion ion-android-radio-button-off',
      link: '/pages/ui-features/icons',
    },
    {
      title: 'Modals',
      icon: 'ion ion-android-radio-button-off',
      link: '/pages/ui-features/modals',
    },
    {
      title: 'Typography',
      icon: 'ion ion-android-radio-button-off',
      link: '/pages/ui-features/typography',
    },
    {
      title: 'Animated Searches',
      icon: 'ion ion-android-radio-button-off',
      link: '/pages/ui-features/search-fields',
    },
    {
      title: 'Tabs',
      icon: 'ion ion-android-radio-button-off',
      link: '/pages/ui-features/tabs',
    }];
  layout: any = {};
  sidebar: any = {};
  protected layoutState$: Subscription;
  protected sidebarState$: Subscription;
  protected menuClick$: Subscription;

  constructor(private _stateService: StateService,
              private _bpService: NbMediaBreakpointsService,
              private _menuService: NbMenuService,
              private _themeService: NbThemeService,
              private _sidebarService: NbSidebarService) {
    this.layoutState$ = this._stateService.onLayoutState()
      .subscribe(($layout: string) => this.layout = $layout);
    this.sidebarState$ = this._stateService.onSidebarState()
      .subscribe(($sidebar: string) => this.sidebar = $sidebar);
    const isBp = this._bpService.getByName('is');
    this.menuClick$ = this._menuService.onItemSelect()
      .withLatestFrom(this._themeService.onMediaQueryChange())
      .delay(20)
      .subscribe(([$item, [$bpForm, $bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {
        if ($bpTo.width <= isBp.width) {
          console.log('fuck');
          this._sidebarService.collapse('menu-sidebar');
        }
      });
  }

  ngOnDestroy() {
    this.layoutState$.unsubscribe();
    this.sidebarState$.unsubscribe();
    this.menuClick$.unsubscribe();
  }
}
