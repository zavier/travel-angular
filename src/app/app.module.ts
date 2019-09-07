import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { SwiperComponent } from './home/swiper/swiper.component';
import { IconsComponent } from './home/icons/icons.component';
import { RecommendComponent } from './home/recommend/recommend.component';
import { WeekendComponent } from './home/weekend/weekend.component';
import { CityHeaderComponent } from './city/city-header/city-header.component';
import { HomeIndexComponent } from './home/home-index/home-index.component';
import { CityIndexComponent } from './city/city-index/city-index.component';
import { CitySearchComponent } from './city/city-search/city-search.component';
import { CityListComponent } from './city/city-list/city-list.component';
import { CityAlphabetComponent } from './city/city-alphabet/city-alphabet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeIndexComponent,
    HomeHeaderComponent,
    SwiperComponent,
    IconsComponent,
    RecommendComponent,
    WeekendComponent,
    CityIndexComponent,
    CityHeaderComponent,
    HomeIndexComponent,
    CityIndexComponent,
    CitySearchComponent,
    CityListComponent,
    CityAlphabetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
