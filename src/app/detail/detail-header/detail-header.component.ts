import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.styl']
})
export class DetailHeaderComponent {
  
  showAbsDisplay;
  showFixDisplay;

  opacity = 0;

  constructor() {
    this.showFixDisplay = 'none';
  }

  @HostListener("window:scroll", [])
  handleScroll() {
    const top = document.documentElement.scrollTop;
    if (top > 60) {
      let opacity = top / 140;
      this.opacity = opacity > 1 ? 1 : opacity;
      this.showFix();
    } else {
      this.showAbs();
    }
  }

  showAbs() {
    this.showFixDisplay = 'none';
    this.showAbsDisplay = '';
  }

  showFix() {
    this.showFixDisplay = '';
    this.showAbsDisplay = 'none';
  }

}
