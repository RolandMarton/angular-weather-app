import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

  cityName: string = 'Budapest';

  @Output() sendCurrentCity = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }
}
