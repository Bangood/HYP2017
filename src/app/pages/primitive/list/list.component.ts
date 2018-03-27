/**
 * Created by pure on 2018/3/27.
 */
import {Component} from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {PrimitiveService} from '../../../core/data/primitive.service';
@Component({
  selector: 'hyp-primitive-list',
  styleUrls: ['./list.component.scss'],
  templateUrl: './list.component.html'
})
export class PrimitiveListComponent {
  primitives: any = [];

  constructor(private _primitiveService: PrimitiveService,
              private _toasterService: ToasterService) {
    this._primitiveService.list()
      .then($res => {
        this.primitives = $res;
      }).catch($err => this._toasterService.pop('error', '提示', $err));
  }
}
