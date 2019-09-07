import { Component, ViewChild, ElementRef, AfterViewInit, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.styl']
})
export class CityListComponent implements AfterViewInit {
  @Input() cities;
  @Input() hotCities;

  ngAfterViewInit(): void {
  }

}
