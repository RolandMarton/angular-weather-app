import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

  @Output() sendCurrentCity = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(cityName: string) {
    this.sendCurrentCity.emit(cityName);
    console.log("City name in search-city.component " + cityName);
  }
}
