import { Component, OnInit } from '@angular/core';
import { Image } from '../image';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.styl']
})
export class IconsComponent implements OnInit {

  iconList: Image[];

  constructor() {
    this.iconList = [
      {
        id: 1,
        url: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        desc: "景点门票"
      }, {
        "id": 2,
        url: "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
        desc: "滑雪季"
      }, {
        "id": 3,
        url: "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
        desc: "泡温泉"
      }, {
        "id": 4,
        url: "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
        desc: "动植园"
      }, {
        "id": 5,
        url: "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
        desc: "游乐园"
      }, {
        "id": 6,
        url: "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
        desc: "必游榜单"
      }, {
        "id": 7,
        url: "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
        desc: "演出"
      }, {
        "id": 8,
        url: "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
        desc: "城市观光"
      }
    ]
  }

  ngOnInit() {
  }

}
