import { Component } from '@angular/core';
import { RestService } from '@shared/services/rest.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
    private rest:RestService,
    private http: HttpClient
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
    // this.http
    //   .get("/assets/data/regions.csv")
    //   // .map(data => {
    //   //   console.log("data: ",data);
    //   //   return data;
    //   // } ,(err) => {
    //   //   console.log("err: ",err);
    //   // })
    //   .subscribe(data => {
    //     // this.items = data;
    //     console.log(data);
    //   }, (err) => {
    //     console.log("error: ",err);
    //     console.log("error: ",JSON.parse( JSON.stringify( err.error.text)))
    //   });
    let responet: Observable<any> = rest.getRequest("http://192.168.42.144:8080/data/byCity",{});
    responet.subscribe(res => {
      console.log("res: ",res);
    });
    var reader = new FileReader();
    // reader.readAsDataURL(Blob)
  }
}
