import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.styl']
})
export class IconsComponent implements AfterViewInit {
  @Input()
  pages;

  constructor() { }

  ngAfterViewInit() {
  }

}
