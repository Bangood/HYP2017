/**
 * Created by pure on 2017/12/6.
 */
import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEM: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true
  }, {
    title: 'FEATURES',
    group: true
  }, {
    title: 'Herbs',
    icon: 'nb-keypad',
    link: '/pages/herbs',
    children: [
      {
        title: 'Add',
        link: '/pages/herbs/add',
      }
    ],
  }
];
