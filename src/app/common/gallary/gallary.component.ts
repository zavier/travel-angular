import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.styl']
})
export class GallaryComponent implements AfterViewInit {
  @Input() images;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngAfterViewInit() {
    new Swiper('.swiper-container-gallary', {
      autoplay: false,
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      }
    });
  }

  handleGallaryClick() {
    this.notify.emit();
  }

}
