/**
 * Created by pure on 2018/3/27.
 */
import {Component} from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {PrimitiveService} from '../../../core/data/primitive.service';
@Component({
  selector: 'hyp-primitive-create',
  styleUrls: ['./create.component.scss'],
  templateUrl: './create.component.html'
})
export class PrimitiveCreateComponent {

  primitive: Primitive = new Primitive('', 10001, 0, 0, 0, true);
  submitted = false;

  constructor(private _primitiveService: PrimitiveService,
              private _toasterService: ToasterService) {
  }

  create() {
    this.submitted = true;
    this._primitiveService.create(this.primitive)
      .then(() => {
        this._toasterService.pop('success', '提示', '创建成功');
        this.submitted = false;
      }).catch($err => {
      this.submitted = false;
      console.log($err);
      this._toasterService.pop('error', '提示', $err);
    });
  }
}

class Primitive {
  constructor(public name: string,
              public dbIndex: number,
              public imgNum: number,
              public race: number,
              public type: number,
              public isSelected: boolean) {
  }
}
