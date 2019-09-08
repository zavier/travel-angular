import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import BScroll from 'better-scroll';
import { CityService } from 'src/app/service/city.service';

@Component({
  selector: 'app-city-index',
  templateUrl: './city-index.component.html',
  styleUrls: ['./city-index.component.styl']
})
export class CityIndexComponent implements AfterViewInit {
  @ViewChild('wrapper', {static: false})  wrapperEl: ElementRef;
  @ViewChild('headerSearch', {static: false})  headerSearchEl: ElementRef;

  public scroll: BScroll;

  cities;
  hotCities;
  letters;

  ngAfterViewInit(): void {
    let headerSearchHeight = this.headerSearchEl.nativeElement.clientHeight;
    let viewHeight = document.documentElement.clientHeight;
    this.wrapperEl.nativeElement.style.height = (viewHeight - headerSearchHeight) + 'px';
    this.scroll = new BScroll(this.wrapperEl.nativeElement, {click: true});
  }

  constructor(private cityService: CityService) {
    let cityData = this.cityService.getCitys()
    this.cities = cityData.data.cities;
    this.hotCities = cityData.data.hotCities;

    this.letters = cityService.getExistLetters();
  }
  
  clickAlphabet(alphabet: string) {
    let index = this.cityService.getIndexOfLetter(alphabet);
    let ele: HTMLElement = document.getElementsByClassName('letter')[index] as HTMLElement
    this.scroll.scrollToElement(ele)
  }

}
