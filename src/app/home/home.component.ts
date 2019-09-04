import { Component, OnInit } from '@angular/core';
import { SwiperService } from '../swiper.service';
import { IconsService } from '../icons.service';
import { RecommendService } from '../recommend.service';
import { WeekendService } from '../weekend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  swiperList = [];
  pages = [];
  recommendList = [];
  weekendList = [];

  constructor(
    private swiperService: SwiperService,
    private iconsService: IconsService,
    private recommentService: RecommendService,
    private weekendService: WeekendService
    ) {
    this.swiperList = this.swiperService.getSwiperList();
    this.pages = this.iconsService.getIconPages();
    this.recommendList = this.recommentService.getRecommendList();
    this.weekendList = this.weekendService.getWeekendList();
  }

  ngOnInit() {
  }

}
