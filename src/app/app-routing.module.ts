import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from './home/home-index/home-index.component';
import { CityIndexComponent } from './city/city-index/city-index.component';
import { DetailIndexComponent } from './detail/detail-index/detail-index.component';
import { GallaryComponent } from './common/gallary/gallary.component';


const routes: Routes = [
  { path: '', component: HomeIndexComponent },
  { path: 'city', component: CityIndexComponent },
  { path: 'detail/:id', component: DetailIndexComponent },
  { path: 'gallary', component: GallaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
