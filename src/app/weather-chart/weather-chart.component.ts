import { Component, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  standalone: true,
  imports: [HighchartsChartModule],
})
export class WeatherChartComponent implements OnChanges {
  @Input() chartData: { date: string; temperature: number }[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnChanges(): void {
    if (this.chartData.length > 0) {
      console.log('Chart received new data:', this.chartData);
      this.updateChart();
    }
  }

  updateChart(): void {
    this.chartOptions = {
      title: { text: '5-Day Weather Forecast' },
      xAxis: {
        categories: this.chartData.map(item => item.date),
        title: { text: 'Date' },
      },
      yAxis: {
        title: { text: 'Temperature (°C)' },
      },
      series: [{
        type: 'line',
        name: 'Temperature',
        data: this.chartData.map(item => item.temperature),
      }],
    };
    console.log(this.chartOptions)

  }
}
