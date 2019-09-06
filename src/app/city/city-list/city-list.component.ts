import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { CitySearchComponent } from '../city-search/city-search.component';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.styl']
})
export class CityListComponent implements AfterViewInit {
  @Input() cities;
  @Input() hotCities;

  objectKeys = Object.keys;


  ngAfterViewInit(): void {
    
  }


}
