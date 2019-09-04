import { Component, OnInit } from '@angular/core';
import { WeekendService } from '../weekend.service';

@Component({
  selector: 'app-weekend',
  templateUrl: './weekend.component.html',
  styleUrls: ['./weekend.component.styl']
})
export class WeekendComponent implements OnInit {
  weekendList;
  constructor(private weekendService: WeekendService) {
    this.weekendList = this.weekendService.getWeekendList();
  }

  ngOnInit() {
    
  }
}
