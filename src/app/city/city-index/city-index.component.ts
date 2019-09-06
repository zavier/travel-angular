import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import BScroll from 'better-scroll';
import { CityService } from 'src/app/city.service';

@Component({
  selector: 'app-city-index',
  templateUrl: './city-index.component.html',
  styleUrls: ['./city-index.component.styl']
})
export class CityIndexComponent implements AfterViewInit {
  @ViewChild('wrapper', {static: false})  wrapperEl: ElementRef;
  @ViewChild('headerSearch', {static: false})  headerSearchEl: ElementRef;

  ngAfterViewInit(): void {
    let headerSearchHeight = this.headerSearchEl.nativeElement.clientHeight;
    let viewHeight = document.documentElement.clientHeight;
    this.wrapperEl.nativeElement.style.height = (viewHeight - headerSearchHeight) + 'px';
    this.scroll = new BScroll(this.wrapperEl.nativeElement, {click: true});
  }

  public scroll;

  cities;
  hotCities;

  constructor(private cityService: CityService) {
    let cityData = this.cityService.getCitys()
    this.cities = cityData.data.cities;
    this.hotCities = cityData.data.hotCities;
  }
  

}
