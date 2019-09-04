import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { SwiperService } from '../swiper.service';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.styl']
})
export class SwiperComponent implements AfterViewInit {
  slide;

  swiperList;

  constructor(private swiperService: SwiperService) {
    this.swiperList = this.swiperService.getSwiperList();
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
