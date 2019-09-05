import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from './home/home-index/home-index.component';
import { CityIndexComponent } from './city/city-index/city-index.component';


const routes: Routes = [
  { path: '', component: HomeIndexComponent },
  { path: 'city', component: CityIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
