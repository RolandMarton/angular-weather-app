import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { CARDS } from './mock-city-cards';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  cards = CARDS;

  constructor(private weatherService: WeatherService) { 

  }

  ngOnInit(): void {
    this.weatherService.getWeatherData('Budapest')
    .subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

}
