import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwiperService {

  constructor() { }

  getSwiperList() {
    let swiperList = [
      {
        id: 1,
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg'
      },
      {
        id: 2,
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/d75097876425de8365684f0693b37fd3.jpg'
      }
    ];
    return swiperList;
  }
}
