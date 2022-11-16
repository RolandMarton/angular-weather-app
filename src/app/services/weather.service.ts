import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { GeoCodeData } from '../models/geo-coding.model';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) { }

  geoCodingData?: any;

  getWeatherData(cityName: string): Observable<WeatherData> {
  
    this.http.get<GeoCodeData>(environment.geoCodingApiBaseUrl, {
      params: new HttpParams()
      .set('q', cityName)
      .set('limit', 5)
      .set('appid', '77996a3f2041c3a077d0ca5e3e5e47c0')
    }).subscribe(response => {
      this.geoCodingData = response;
      console.log(this.geoCodingData);
      }
    );
  
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      params: new HttpParams()
      .set('lat', this.geoCodingData[0].lat)
      .set('lon', this.geoCodingData[0].lon)
      .set('units', 'metric')
      .set('appid', '77996a3f2041c3a077d0ca5e3e5e47c0')
    });
  }
}
