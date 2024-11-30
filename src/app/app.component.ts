import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent, HighchartsChartModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app-dashboard';
}
