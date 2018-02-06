/**
 * Created by pure on 2018/2/6.
 */
//
import {Injectable} from '@angular/core';
//
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
//
@Injectable()
export class UserService {
  private _users = {
    nick: {name: 'Nick Jones', picture: 'assets/images/nick.png'},
    eva: {name: 'Eva Moor', picture: 'assets/images/eva.png'},
    jack: {name: 'Jack Williams', picture: 'assets/images/jack.png'},
    lee: {name: 'Lee Wong', picture: 'assets/images/lee.png'},
    alan: {name: 'Alan Thompson', picture: 'assets/images/alan.png'},
    kate: {name: 'Kate Martinez', picture: 'assets/images/kate.png'},
  };

  constructor() {
  }

  getUsers(): Observable<any> {
    return Observable.of(this._users);
  }

}
