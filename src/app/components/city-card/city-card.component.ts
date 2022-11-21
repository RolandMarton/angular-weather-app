import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';
import { CARDS } from './essential-card-data';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  cards = CARDS;
  cityName: string = 'Budapest';
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    console.log(this.cityName)
    this.cityName = '';
  }

  private async getWeatherData(cityName: string){
    await this.weatherService.getGeoData(cityName);

    setTimeout( () => {
      this.weatherService.getWeatherData()
        .subscribe({
          next: (response) => {
            this.weatherData = response;
            console.log(response);
          }
        })
    }, 1000 );

    // this.weatherService.getWeatherData()
    // .subscribe({
    //    next: (response) => {
    //     this.weatherData = response;
    //     console.log(response);
    //   }
    // })
  }

}
