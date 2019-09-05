import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import BScroll from 'better-scroll';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.styl']
})
export class CityListComponent implements AfterViewInit {
  @ViewChild('wrapper', {static: false})  wrapperEl: ElementRef;

  public scroll;

  ngAfterViewInit(): void {
    console.log(this.wrapperEl.nativeElement)
    this.scroll = new BScroll(this.wrapperEl.nativeElement, {click: true});
  }


}
