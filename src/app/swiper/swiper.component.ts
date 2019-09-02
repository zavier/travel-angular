import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Image } from '../image';

declare var swiper:any;

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.styl']
})
export class SwiperComponent implements AfterViewInit {
  slide;

  swiperList: Image[];

  constructor() {
    this.swiperList = [
      {
        id: 1,
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg'
      },
      {
        id: 2,
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/d75097876425de8365684f0693b37fd3.jpg'
      }
    ]
  }

  ngAfterViewInit() {
    this.slide = new Swiper('.swiper-container', {
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      speed: 1000,
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

}
