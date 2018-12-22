import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherPageNotFoundComponent } from './weather-page-not-found/weather-page-not-found.component';
import { AppComponent } from './app.component';

/* Services */
import { WeatherService } from '../services/service';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherDetailComponent,
    WeatherPageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
