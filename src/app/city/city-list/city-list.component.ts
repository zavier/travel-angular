import { Component, AfterViewInit, Input, SimpleChange, OnChanges, OnInit } from '@angular/core';
import { DataService } from 'src/app/serice/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.styl']
})
export class CityListComponent implements OnInit {
  @Input() cities;
  @Input() hotCities;

  currentCity;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataService.currentMessage.subscribe(city => this.currentCity = city);
  }

  changeCity(city: string) {
    this.dataService.changeMessage(city);
    this.router.navigate(['/']);
  }

}
