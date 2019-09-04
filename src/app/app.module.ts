import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { SwiperComponent } from './home/swiper/swiper.component';
import { IconsComponent } from './home/icons/icons.component';
import { RecommendComponent } from './home/recommend/recommend.component';
import { WeekendComponent } from './home/weekend/weekend.component';
import { CityComponent } from './city/city.component';
import { CityHeaderComponent } from './city/city-header/city-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    SwiperComponent,
    IconsComponent,
    RecommendComponent,
    WeekendComponent,
    CityComponent,
    CityHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
