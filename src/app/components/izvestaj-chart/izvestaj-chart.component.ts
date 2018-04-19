import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-izvestaj-chart',
  templateUrl: './izvestaj-chart.component.html',
  styleUrls: ['./izvestaj-chart.component.css']
})
export class IzvestajChartComponent implements OnInit {

  chart: Chart;

  @Input()
  xOsa : any[];

  @Input()
  yOsa : any[];

  constructor() { }

  ngOnInit() {
    
  }

}
