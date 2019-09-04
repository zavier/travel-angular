import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.styl']
})
export class RecommendComponent implements OnInit {
  @Input()
  recommendList;

  constructor() { }

  ngOnInit() {
  }

}
