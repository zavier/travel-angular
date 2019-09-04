import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weekend',
  templateUrl: './weekend.component.html',
  styleUrls: ['./weekend.component.styl']
})
export class WeekendComponent implements OnInit {
  @Input()
  weekendList;
  constructor() { }

  ngOnInit() {
    
  }
}
