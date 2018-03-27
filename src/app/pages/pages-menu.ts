/**
 * Created by pure on 2018/2/7.
 */
//
//
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
      }, {
        title: 'List',
        link: '/pages/herbs/list'
      }
    ],
  }, {
    title: '种族',
    icon: 'nb-keypad',
    link: '',
    children: []
  }, {
    title: '势力',
    icon: 'nb-keypad',
    link: '',
    children: []
  }, {
    title: '宗教',
    icon: 'nb-keypad',
    link: '',
    children: []
  }, {
    title: '群芳谱',
    icon: 'nb-keypad',
    link: '/pages/primitive',
    children: [{
      title: '新增',
      link: '/pages/primitive/create'
    }, {
      title: '列表',
      link: '/pages/primitive/list'
    }]
  }, {
    title: '红颜楼',
    icon: 'nb-keypad',
    link: '',
    children: []
  },
];
