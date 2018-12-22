import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject,Subscription, Subject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private baseUrl = environment.baseUrl;
  private appId = environment.appId;
  private getWeatherUrl = this.baseUrl + '/weather';
  private getWeatherForecastUrl = this.baseUrl + '/forecast'
  constructor(private _httpClient : HttpClient) {}

  /* Today Weather Forecast */
  getWeather(data):Observable<any>{
  	const params = new HttpParams().set('q',data).set('appId', this.appId);
  	return this._httpClient.get(this.getWeatherUrl,{params:params});
  }

  /* 5 Days Wetaher Forecast */
  getWeatherForecast(data):Observable<any>{
    const params = new HttpParams().set('q',data).set('appId', this.appId);
    return this._httpClient.get(this.getWeatherForecastUrl,{params:params});
  }
}
