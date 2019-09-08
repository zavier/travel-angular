import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import BScroll from 'better-scroll';
import { DataService } from 'src/app/serice/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.styl']
})
export class CitySearchComponent implements AfterViewInit {
  @Input() cities;
  @ViewChild('searchResult', {static: false}) searchResEle: ElementRef;

  searchDisplay = 'none';

  keyword;
  list = [];
  timer;

  scroll: BScroll;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.scroll = new BScroll(this.searchResEle.nativeElement, {click: true});
  }

  changeKeyword() {
    if (!this.keyword) {
      this.list = [];
      this.searchDisplay = 'none';
      return;
    }

    this.searchDisplay = '';
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      const result = [];
      for (let i in this.cities) {
        this.cities[i].forEach(element => {
          if (element.spell.indexOf(this.keyword) > -1 
            || element.name.indexOf(this.keyword) > -1) {
              result.push(element);
            }
        });
      }
      this.list = result;
    }, 100);
  }

  changeCity(city: string) {
    this.dataService.changeMessage(city);
    this.router.navigate(['/']);
  }
}
