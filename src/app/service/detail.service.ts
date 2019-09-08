import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor() { }

  getDetailList() {
    return [{
      "title": "成人票",
      "children": [{
        "title": "成人三馆联票",
        "children": [{
          "title": "成人三馆联票 - 某一连锁店销售"
        }]
      },{
        "title": "成人五馆联票"
      }]
    }, {
      "title": "学生票"
    }, {
      "title": "儿童票"
    }, {
      "title": "特惠票"
    }];
  }
}
