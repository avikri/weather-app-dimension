import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel binding

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [CommonModule, FormsModule],
})
export class MainComponent implements OnInit {
  cities = ['Toronto', 'Karachi', 'London', 'Sydney'];
  selectedCity: string = '';
  weatherData: any = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  onCityChange(): void {
    if (this.selectedCity) {
      this.weatherService.getWeatherData(this.selectedCity).subscribe(
        (data) => {
          this.weatherData = data;
        },
        (error) => {
          console.error('Error fetching weather data', error);
        }
      );
    }
  }
}
