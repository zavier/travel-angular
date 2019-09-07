import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.styl']
})
export class DetailHeaderComponent implements OnInit {
  showAbsDisplay;
  showFixDisplay;

  constructor() {
    this.showFixDisplay = 'none';
  }

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const top = document.documentElement.scrollTop;
    if (top > 60) {
      this.showAbsDisplay = 'none';
      this.showFixDisplay = '';
      console.log(this.showAbsDisplay);
    } else {
      this.showAbsDisplay = '';
      this.showFixDisplay = 'none';
      console.log(this.showAbsDisplay);
    }
  }

}
