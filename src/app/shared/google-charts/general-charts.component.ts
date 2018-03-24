
import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';

@Component({
 selector: "general-chart",
 template: require("./general-charts.component.html"),
 styles: [require("./general-charts.component.scss")]
})

export class OurGoogleChartComponent {

 @ViewChild('pieChart') pieChart;
 @Input() colors;
 @Input() dataTable;
 @Input() lengedPostion = 'none';
 @Input() hAxis;
 @Input() chartType;
 @Input() pieHole;
 @Input() isStacked = false;
 @Input() series;

 public stackedColors = ["#50206E", "#7A5492", "#0B86BF", "#0DB2BE"];
 public serviceTypeColors = ['#007bff', '#9ac5f3']
 public comboColors = ["#50206E", "#0DB2BE", "#7a8086"];
 public srsStatusDataColors = ["#50206E", "#7A5492", "#0B86BF", "#0DB2BE"];
 public virtcalChart = ["#50206E"];
 public serviceLevelColor = ["#0DB2BE"];
 public confirmationCodeColor = ["#50206E"];
 public virtcalGroupedChartColor = ["#50206E", "#0DB2BE"];
 
 public columnChartData2: any = {

   chartType: 'BarChart',
   options: {
     legend: { position: 'none' },
     seriesType: 'bars',
     bars: 'horizontal',
     bar: {groupWidth: "20%"},
     hAxis: { format: '#\'%\'',
     direction:1 },
     animation: {
       duration: 1000,
       easing: 'out',
       startup: true
     },
     fontName: 'Conv_STC-Regular',
     backgroundColor:{
       fill:'transparent'
     },
     height: 230, 
      series: {
           0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
           1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
         },
        //  axes: {
        //    y: {
        //      distance: {label: 'parsecs'}, // Left y-axis.
        //      brightness: {side: 'right', label: 'apparent magnitude'} // Right y-axis.
        //    }
        //  }
   }
 };
 constructor() {
 }
 ngOnInit() {
   switch (this.colors) {
     case 'stackedColors':
       this.columnChartData2.options.colors = this.stackedColors;
       break;
     case 'serviceTypeColors':
       this.columnChartData2.options.colors = this.serviceTypeColors;
       break;
     case 'comboColors':
       this.columnChartData2.options.colors = this.comboColors;
       break;
     case 'srsStatusDataColors':
       this.columnChartData2.options.colors = this.srsStatusDataColors;
       break;
     case 'virtcalChart':
       this.columnChartData2.options.colors = this.virtcalChart;
       break;
     case 'serviceLevelColor':
       this.columnChartData2.options.colors = this.serviceLevelColor;
       break;
     case 'confirmationCodeColor':
       this.columnChartData2.options.colors = this.confirmationCodeColor;
     case 'virtcalGroupedChartColor':
       this.columnChartData2.options.colors = this.virtcalGroupedChartColor;
       break;
     default:
     this.columnChartData2.options.colors = ["#1976D2"];
     //do nothing
   }
   // this.columnChartData2.options.colors = this.colors;
   this.columnChartData2.dataTable = this.dataTable;
   this.columnChartData2.chartType = this.chartType;
   this.columnChartData2.options.legend.position = this.lengedPostion;
   this.columnChartData2.options.hAxis.format = this.hAxis;
   this.columnChartData2.options.pieHole = this.pieHole;
   this.columnChartData2.options.isStacked = this.isStacked;
   this.columnChartData2.options.series = this.series;
 }

 @HostListener('window:resize', ['$event'])
 onResize(event) {
   // event.target.innerWidth;
   //   console.log(event.target,innerWidth);
   this.pieChart.redraw();
 }

}
