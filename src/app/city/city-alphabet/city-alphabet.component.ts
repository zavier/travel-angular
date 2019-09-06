import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-alphabet',
  templateUrl: './city-alphabet.component.html',
  styleUrls: ['./city-alphabet.component.styl']
})
export class CityAlphabetComponent implements OnInit {
  @Input() cities;

  constructor() { }

  ngOnInit() {
  }

}
