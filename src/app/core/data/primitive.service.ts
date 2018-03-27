/**
 * Created by pure on 2018/3/27.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()

export class PrimitiveService {
  host = 'http://localhost:3001';

  constructor(private _http: HttpClient) {
  }

  create($primitive) {
    return this._http.post(`${this.host}/v1/primitive/`, $primitive)
      .toPromise()
      .then(($res: any) => {
        if ($res && $res.error) {
          return Promise.reject($res.error);
        } else {
          return Promise.resolve();
        }
      });
  }

  list() {
    return this._http.get(`${this.host}/v1/primitive/list`)
      .toPromise()
      .then(($res: any) => {
        if ($res.error) {
          return Promise.reject($res.error);
        } else {
          return Promise.resolve($res.data);
        }
      });
  }
}
