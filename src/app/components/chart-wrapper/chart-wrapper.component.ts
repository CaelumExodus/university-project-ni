import { Component } from '@angular/core';
import { chartsData } from "./charts-data";
import { CalculateDataService } from "../../services/calculateData.service";

@Component({
  selector: 'app-chart-wrapper',
  templateUrl: './chart-wrapper.component.html',
  styleUrls: ['./chart-wrapper.component.scss']
})
export class ChartWrapperComponent {
  protected readonly chartsData = chartsData;
  protected averageArray: number[] = [];

  constructor() {
    chartsData.forEach((chartData) => {
      chartData.data.datasets.forEach((dataset) => {
          this.averageArray.push(Number(CalculateDataService.calculateAverageFromArray(dataset.data).toFixed(2)));
        });
      });
    }
  }


