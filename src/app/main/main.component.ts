import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel binding

import { WeatherChartComponent } from '../weather-chart/weather-chart.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [CommonModule, FormsModule, WeatherChartComponent],
})
export class MainComponent implements OnInit {
  cities = ['Toronto', 'Karachi', 'London', 'Sydney'];
  selectedCity: string = '';
  weatherData: { date: string; temperature: number }[] = [];
  chartData: { date: string; temperature: number }[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  onCityChange(): void {
    if (this.selectedCity) {
      this.weatherService.getWeatherData(this.selectedCity).subscribe(
        (data) => {
          this.weatherData = data.list.map((item: any) => ({
            date: new Date(item.dt * 1000).toLocaleString('en-GB', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            }),
            temperature: item.main.temp
          }));
        },
        (error) => {
          console.error('Error fetching weather data', error);
        }
      );
    }
  }
  
}
