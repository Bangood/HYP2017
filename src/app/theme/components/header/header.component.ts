/**
 * Created by pure on 2018/2/6.
 */
//
import {Component, Input, OnInit} from '@angular/core';
//
import {NbSidebarService} from '@nebular/theme';
//
import {UserService} from '../../../core/data/users.service';
@Component({
  selector: 'hyp-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';
  user: any;
  userMenu = [{title: 'Profile'}, {title: 'Log out'}];

  constructor(private _sidebarService: NbSidebarService,
              private _userService: UserService) {
  }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(($users: any) => this.user = $users.nick);
  }

  toggleSidebar(): boolean {
    this._sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this._sidebarService.toggle(false, 'setting-sidebar');
    return false;
  }

  goToHomePage(): void {

  }

  startSearch() {
  }
}
