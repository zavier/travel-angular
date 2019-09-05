import { Component, OnInit } from '@angular/core';
import { SwiperService } from 'src/app/swiper.service';
import { IconsService } from 'src/app/icons.service';
import { RecommendService } from 'src/app/recommend.service';
import { WeekendService } from 'src/app/weekend.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.styl']
})
export class HomeIndexComponent implements OnInit {

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
