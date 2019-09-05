import { Component, AfterViewInit, Input } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.styl']
})
export class IconsComponent implements AfterViewInit {
  @Input()
  pages;

  constructor() { }

  ngAfterViewInit() {
    new Swiper('.swiper-container-icons', {
      autoplay: false,
      direction: 'horizontal',
      loop: true,
    });
  }

}
