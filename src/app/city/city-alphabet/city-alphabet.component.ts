import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CityService } from 'src/app/city.service';

@Component({
  selector: 'app-city-alphabet',
  templateUrl: './city-alphabet.component.html',
  styleUrls: ['./city-alphabet.component.styl']
})
export class CityAlphabetComponent implements OnInit {
  @Input() cities;

  @Output() clicked = new EventEmitter<string>();

  touchStatus: boolean = false;

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

  handleLetterClick(alphabet: string) {
    this.clicked.emit(alphabet);
  }

  handleTouchStart() {
    this.touchStatus = true;
  }

  handleTouchMove(e) {
    const touchY = e.touches[0].clientY;
    let startY = 0;
    if (this.touchStatus) {
      let ele = document.getElementsByClassName('letter')[0] as HTMLElement
      startY = ele.offsetTop;
      const index = Math.floor((touchY - startY) / 20);
      if (index >= 0 && index <= this.cityService.getExistLetters().length) {
        this.clicked.emit(this.cityService.getExistLetters()[index]);
      }
    }
  }

  handleTouchEnd() {
    this.touchStatus = false;
  }

}
