/**
 * Created by pure on 2017/12/6.
 */
import {Component, Input, OnInit} from '@angular/core';
import {NbMenuService, NbSidebarService} from '@nebular/theme';
import {UserService} from '../../../@core/data/users.service';
@Component({
  selector: 'hyp-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';
  user: any;
  userMenu = [{title: 'Profile'}, {title: 'Log out'}];

  constructor(private sidebarService: NbSidebarService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    console.log('hello');
  }

  startSearch() {
  }
}
