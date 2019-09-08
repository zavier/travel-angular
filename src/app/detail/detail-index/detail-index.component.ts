import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/service/detail.service';

@Component({
  selector: 'app-detail-index',
  templateUrl: './detail-index.component.html',
  styleUrls: ['./detail-index.component.styl']
})
export class DetailIndexComponent implements OnInit {
  list = [];

  constructor(
    private detailService: DetailService
  ) { }

  ngOnInit() {
    this.list = this.detailService.getDetailList();
  }

}
