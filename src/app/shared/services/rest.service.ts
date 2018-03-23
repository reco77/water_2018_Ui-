import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class RestService {
    public headers: HttpHeaders;
    public requestoptions: RequestOptions;
    public res: Response;

    constructor(private httpClient: HttpClient) { }

    public postRequest(url: string, data: any): Observable<any> {

        this.headers = new HttpHeaders();
        this.headers.append("Content-type", "application/json");
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem("token") );
        // let httpHeaders = new HttpHeaders(this.headers);
        // this.requestoptions = new RequestOptions({
        //     method: RequestMethod.Post,
        //     url: url,
        //     headers: this.headers,
        //     body: JSON.stringify(data)
        // })
        console.log("start post to url: ",url);
        return this.httpClient.post(
            url,
            JSON.stringify(data),
            {headers: this.headers}
        )
            .map((res: Response) => {
                    return [{ status: res.status, json: res }]
            })
            .catch((error: any) => {     //catch Errors here using catch block
                if (error.status === 500) {
                    // Display your message error here
                }
                else if (error.status === 400) {
                    // Display your message error here
                }
                return null;
            });
    }

    public getRequest(url: string, data: any): Observable<any> { 
        this.headers = new HttpHeaders();
        this.headers.append("Content-type", "application/json");
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem("token") );

        // this.requestoptions = new RequestOptions({
        //     method: RequestMethod.Get,
        //     url: url,
        //     headers: this.headers,
        //     body: JSON.stringify(data)
        // })
        console.log("start get to url: ",url);
        return this.httpClient.get(
            url,
            // JSON.stringify(data),
            {headers: this.headers}
        )
            .map((res: Response) => {
                    return [{ status: res.status, json: res }]
            })
            .catch((error: any) => {     //catch Errors here using catch block
                if (error.status === 500) {
                    // Display your message error here
                }
                else if (error.status === 400) {
                    // Display your message error here
                }
                return null;
            });
     }

    public putRequest(url: string, data: any): Observable<any> { 
        this.headers = new HttpHeaders();
        this.headers.append("Content-type", "application/json");
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem("token") );

        // this.requestoptions = new RequestOptions({
        //     method: RequestMethod.Put,
        //     url: url,
        //     headers: this.headers,
        //     body: JSON.stringify(data)
        // })

        return this.httpClient.put(
            url,
            JSON.stringify(data),
            {headers: this.headers}
        )
            .map((res: Response) => {
                    return [{ status: res.status, json: res }]
            })
            .catch((error: any) => {     //catch Errors here using catch block
                if (error.status === 500) {
                    // Display your message error here
                }
                else if (error.status === 400) {
                    // Display your message error here
                }
                return null;
            });
     }

    public deleteRequest(url: string, data: any): Observable<any> { 
        this.headers = new HttpHeaders();
        this.headers.append("Content-type", "application/json");
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem("token") );

        // this.requestoptions = new RequestOptions({
        //     method: RequestMethod.Delete,
        //     url: url,
        //     headers: this.headers,
        //     body: JSON.stringify(data)
        // })

        return this.httpClient.delete(
            url,
            // JSON.stringify(data),
            {headers: this.headers}
        )
            .map((res: Response) => {
                    return [{ status: res.status, json: res }]
            })
            .catch((error: any) => {     //catch Errors here using catch block
                if (error.status === 500) {
                    // Display your message error here
                }
                else if (error.status === 400) {
                    // Display your message error here
                }
                return null;
            });
     }
 }