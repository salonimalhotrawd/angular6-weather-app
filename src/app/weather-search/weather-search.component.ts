import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../../services/service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  weatherSearchForm : FormGroup;
  weatherData:any;
  weatherView:any;
  weatherAPIError:String;
  weatherKelvinToCelsius:any;
  weatherGeoLat:any;
  weatherGeoLong:any;
  weatherDetailBoolean:boolean=false;
  weatherCity:String;
  loading:boolean=false;

  constructor(private _fb : FormBuilder,private _weatherService : WeatherService) {}

  ngOnInit() {
  	this.weatherSearchForm = this._fb.group({
  	  search : [null,Validators.compose([Validators.required])]
  	})
  }

  /* Weather Search Form Submit */
  OnWeatherSearchFormSubmit(f){
  	if(this.weatherSearchForm.valid){
      this.weatherDetailBoolean = false;
      this.weatherAPIError = "";
      this.weatherGeoLat = "";
      this.weatherGeoLong = "";
      this.weatherCity = "";
      let value = f.value.search;
      this.loading = true;
      this._weatherService.getWeatherForecast(value).subscribe(
        (resp)=>{
          this.loading = false;
          this.weatherData = resp.list;
          for(let i=0;i<5;i++){
            let a = this.weatherData[i].main.temp;
            let b = 275.15;
            let c = a-b;
            this.weatherData[i].main.temp = c.toFixed(0);
            var today = new Date();
            var tomorrow = new Date();
            this.weatherData[i].dt = tomorrow.setDate(today.getDate()+i);
          }
          this.weatherGeoLat = resp.city.coord.lat;
          this.weatherGeoLong = resp.city.coord.lon;
          this.weatherCity = resp.city.name;
        },(err)=>{
          this.loading = false;
          this.weatherAPIError = err["error"]["message"];
          this.weatherDetailBoolean = false;
        }
     )}
  }

  /* Weather Detail View */
  weatheDetailView(data){
    this.weatherView = data;
    this.weatherView["lat"] = this.weatherGeoLat;
    this.weatherView["lon"] = this.weatherGeoLong;
    this.weatherView["city"] = this.weatherCity;
    this.weatherDetailBoolean = true;
    this.loading = false;
  }
}
