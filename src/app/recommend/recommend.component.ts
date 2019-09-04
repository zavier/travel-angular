import { Component, OnInit } from '@angular/core';
import { RecommendService } from '../recommend.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.styl']
})
export class RecommendComponent implements OnInit {
  recommendList;
  constructor(private recommendService: RecommendService) { }

  ngOnInit() {
    this.recommendList = this.recommendService.getRecommendList();
  }

}
