import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.styl']
})
export class DetailListComponent implements OnInit {
  @Input()
  list = [];

  constructor() { }

  ngOnInit() {
  }

}
