import { Component } from '@angular/core';
import { RestService } from '@shared/services/rest.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';


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
    private rest:RestService
   ){
    // console.log("test");
    // console.log(rest.getRequest("https://httpbin.org/get",{}));
    // // let responet: Observable<any> = rest.getRequest("https://httpbin.org/get",{});
    // // console.log(responet);
    // rest.getRequest("https://httpbin.org/get",{}).subscribe(res =>{
    //   console.log(res);
    // })
    // rest.GetRequest("https://httpbin.org/get",{}).subscriber(res => {
    //   console.log(res);   
    // });
  }
}
