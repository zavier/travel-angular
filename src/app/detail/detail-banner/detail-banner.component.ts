import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-banner',
  templateUrl: './detail-banner.component.html',
  styleUrls: ['./detail-banner.component.styl']
})
export class DetailBannerComponent implements OnInit {
  images = ['http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png', 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg']

  show=false;

  constructor() { }

  ngOnInit() {
  }

  showGallary() {
    this.show = true;
  }

  hideGallary() {
    this.show = false;
  }

}
