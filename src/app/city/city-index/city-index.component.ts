import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import BScroll from 'better-scroll';

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

  constructor() {
  }
  

}
