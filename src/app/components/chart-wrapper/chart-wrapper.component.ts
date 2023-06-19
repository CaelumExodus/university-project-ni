import { Component } from '@angular/core';
import { chartsData } from "./charts-data";
import { data } from "autoprefixer";

@Component({
  selector: 'app-chart-wrapper',
  templateUrl: './chart-wrapper.component.html',
  styleUrls: ['./chart-wrapper.component.scss']
})
export class ChartWrapperComponent {

  protected readonly chartsData = chartsData;
  protected readonly data = data;

}
