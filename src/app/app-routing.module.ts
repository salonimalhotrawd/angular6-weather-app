import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherPageNotFoundComponent } from './weather-page-not-found/weather-page-not-found.component';

const appRoutes: Routes = [
  { path: 'find', component: WeatherSearchComponent },
  { path: '',redirectTo: '/find',pathMatch: 'full'},
  { path: '**', component: WeatherPageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
