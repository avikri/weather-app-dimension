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
  updateFlag = false;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: '#2C2C2C', // Set background color
    },
    title: {
      text: '5-Day Weather Forecast',
      style: { color: '#FFFFFF' }, // Set title text color
    },
    legend: {
      itemStyle: {
        color: '#FFFFFF', // Set text color for legend (key)
      },
      itemHoverStyle: {
        color: '#FFAA00', // Optional: Set hover color for legend items
      },
    },
    xAxis: {
      categories: [], // Placeholder for dynamic dates
      title: { text: 'Date', style: { color: '#FFFFFF' } }, // Axis title color
      labels: { style: { color: '#FFFFFF' } }, // Axis labels color
    },
    yAxis: {
      title: { text: 'Temperature (°C)', style: { color: '#FFFFFF' } }, // Axis title color
      labels: { style: { color: '#FFFFFF' } }, // Axis labels color
    },
    series: [
      {
        type: 'line',
        name: 'Temperature',
        data: [], // Placeholder for dynamic temperature data
        color: '#FFAA00', // Set line color
        marker: {
          fillColor: '#FFFFFF', // Set marker (data point) fill color
          lineWidth: 2,         // Marker border width
          lineColor: '#FFAA00', // Marker border color (matches the line color)
        },
      },
    ],
  };
  
  

  ngOnChanges(): void {
    if (this.chartData.length > 0) {
      console.log('Chart received new data:', this.chartData);
      this.updateChart();
    }
  }

  updateChart(): void {
    this.chartOptions = {
      ...this.chartOptions,
      xAxis: {
        categories: this.chartData.map((item) => item.date),
        title: { text: 'Date' },
      },
      series: [
        {
          type: 'line',
          name: 'Temperature',
          data: this.chartData.map((item) => item.temperature),
        },
      ],
    };
    this.updateFlag = true; // Trigger chart update
  }

  
}
