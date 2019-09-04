import { Component, AfterViewInit, Input } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.styl']
})
export class SwiperComponent implements AfterViewInit {
  slide;

  @Input()
  swiperList;

  constructor() { }

  ngAfterViewInit() {
    this.slide = new Swiper('.swiper-container', {
      autoplay: false,
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
