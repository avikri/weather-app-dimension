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

  //set input for component
  @Input() chartData: { date: string; temperature: number }[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  //set options for chart
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: '#2C2C2C', 
    },
    title: {
      text: '5-Day Weather Forecast',
      style: { color: '#FFFFFF' }, 
    },
    legend: {
      itemStyle: {
        color: '#FFFFFF', 
      },
      itemHoverStyle: {
        color: '#FFAA00', 
      },
    },
    xAxis: {
      categories: [], 
      title: { text: 'Date', style: { color: '#FFFFFF' } }, 
      labels: { style: { color: '#FFFFFF' } }, 
    },
    yAxis: {
      title: { text: 'Temperature (°C)', style: { color: '#FFFFFF' } }, 
      labels: { style: { color: '#FFFFFF' } }, 
    },
    series: [
      {
        type: 'line',
        name: 'Temperature',
        data: [], 
        color: '#1E3A8A', 
        marker: {
          fillColor: '#1E3A8A', 
          lineWidth: 2,         
          lineColor: '#1E3A8A', 
        },
      },
    ],
  };
  
  

  ngOnChanges(): void {
    if (this.chartData.length > 0) {
      this.updateChart();
    }
  }

  //update chart with fetched data
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
    this.updateFlag = true; 
  }

  
}
