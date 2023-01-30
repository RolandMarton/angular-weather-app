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
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData("Budapest");
  }

  async getWeatherData(cityName: string){
    console.log("City name in City-card.component: " + cityName)
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
  }

}
