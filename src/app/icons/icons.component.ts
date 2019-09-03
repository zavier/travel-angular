import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { IconsService } from '../icons.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.styl']
})
export class IconsComponent implements AfterViewInit {
  pages;

  constructor(private iconsService: IconsService) {
    this.pages = this.iconsService.getIconPages();
  }

  ngAfterViewInit() {
  }

}
