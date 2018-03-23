import { Component } from '@angular/core';
// import { RestService } from '@shared/services/rest.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  pieChartData =  {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    options: {'title': 'Tasks'},
  };

  constructor(
    // private rest:RestService
   ){
    console.log("test");
    // rest.GetRequest("https://httpbin.org/get",{}).subscriber(res => {
    //   console.log(res);   
    // })
  }
}
