import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/wheather.service';
import { wheatherData } from './model/wheather-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wheather-app';

  constructor(private wheatherService: WeatherService) {

  }
  ngOnInit(): void {
    this.getWheatherData(this.cityName)
    this.cityName = ''
  }

  wheatherData?: wheatherData;

  cityName: string = 'chennai'


  private getWheatherData(cityName: string) {
    this.wheatherService.getWeatherData(cityName).subscribe({
      next: response => {
        this.wheatherData = response
        console.log(response);
      }
    })
  }

  onSubmit() {
    this.getWheatherData(this.cityName)
    this.cityName = ''
  }
}
