import {Component, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';

import {Element} from './element.model';
@Component({
    selector: 'analysis',
    templateUrl: './anlysis.component.html',
    styleUrls: ['./anlysis.component.scss']
})



export class AnalysisComponent {
    private dataTable = 
        {
            
                "first": "Elizabeth",
                "last": "Wong",
                "email": "sika@iknulber.cl",
                "born": "1995-04-12 17:00",
                "age": 23
            }
           ;
    private columns =[
        {"name":"First Name","path":"first","renderer":"px-data-grid-string-renderer","editable":true,"frozen":false,"id":"first[string]"},
        {"name":"Last Name","path":"last","renderer":"px-data-grid-string-renderer","editable":true,"frozen":false,"id":"last[string]"},
        {"name":"Email","path":"email","frozen":false,"id":"email[string]"}];
    private currentAction = "produce";

      displayedColumns = ['regions',  '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

      
    ELEMENT_DATA: any[] = [
        {"regions": 1, '2012':10, '2013':11, '2014':12, '2015':13,
         '2016':14, '2017':15, '2018':16, '2019':17, '2020':18, '2021':19, '2022':20,'2023':20},
         {"regions":1,
         '2012':519.3472,
         '2013':646.5944,
         '2014':695.872,
         '2015':779.7992,
         '2016':825.7096,
         '2017':870.4931,
         '2018':996.0612,
         '2019':1042.4983,
         '2020':1096.43,
         '2021':1178.154,
         '2022':1247.3562,
         '2023':1303.4488}
      ];
      
    //   2,361.3744,541.052,561.4504,559.3464,565.7024,592.2209627,608.5798,627.756,633.1163,664.4495,674.2707,691.1127
    //   3,118.2696,142.4048,145.0104,139.2312,146.9304,150.0356434,140.3137,140.3137,140.3137,140.3137,140.3137,140.3137
    //   4,93.752,96.0448,98.5584,105.2184,99.0192,101.3154108,103.8503,103.6002,104.2096,106.2484,107.6393,108.9659
    //   5,206.8584,479.5024,490.2272,506.6872,527.292,577.1623577,621.3888,621.08,656.6212,706.0377,725.5714,753.0243
    //   6,93.752,60.8272,63.4824,66.3024,80.468,80.9749451,83.0534,92.4114,98.0933,98.4929,104.9864,110.4125
    //   7,70.8328,79.1072,86.8664,56.02,57.1096,60.75228841,51.9459,44.0943,44.9283,42.8538,38.367,32.8327
    //   8,22.7488,25.7744,34.6664,44.3704,44.7528,49.03492575,53.4855,59.4933,63.2939,68.1108,73.8589,78.9228
    //   9,16.2064,18.244,17.9136,17.7056,18.9936,19.07672532,18.0233,18.0233,18.0233,18.0233,18.0233,18.0233
    //   10,28.212,30.7184,36.6712,62.108,48.328,52.80975975,59.4245,59.4676,59.7912,63.3959,66.787,71.0008
    //   11,8.1064,8.42,15.3952,18.6376,19.2032,20.99854218,24.0506,26.1192,27.9267,30.0538,32.6648,34.8227
    //   12,12.2568,13.1464,20.1864,31.6592,34.5552,37.18128913,45.3334,53.2723,56.1102,61.2841,68.0933,73.123
    //   13,30.5792,32.1928,32.8264,33.1048,35.1896,36.63037263,37.8603,39.527,40.2748,41.9831,43.2167,44.5049
      @ViewChild(MatSort) sort: MatSort;
      private dataSource
      constructor(){
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      }
  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
