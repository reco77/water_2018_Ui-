import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class RestService {
    public headers: Headers;
    public requestoptions: RequestOptions;
    public res: Response;

    constructor(public http: Http, private httpClient: HttpClient) { }

    public PostRequest(url: string, data: any): any {

        this.headers = new Headers();
        this.headers.append("Content-type", "application/json");
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem("token") );
        // let httpHeaders = new HttpHeaders(this.headers);
        this.requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: url,
            headers: this.headers,
            body: JSON.stringify(data)
        })

        return this.httpClient.post(
            url,
            JSON.stringify(data),
            // {headers: this.headers}
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

    public GetRequest(url: string, data: any): any { 
        this.headers = new Headers();
        this.headers.append("Content-type", "application/json");
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem("token") );

        this.requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: url,
            headers: this.headers,
            body: JSON.stringify(data)
        })

        return this.httpClient.post(
            url,
            JSON.stringify(data),
            // {headers: this.headers}
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

    public PutRequest(url: string, data: any): any { 
        this.headers = new Headers();
        this.headers.append("Content-type", "application/json");
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem("token") );

        this.requestoptions = new RequestOptions({
            method: RequestMethod.Put,
            url: url,
            headers: this.headers,
            body: JSON.stringify(data)
        })

        return this.httpClient.post(
            url,
            JSON.stringify(data),
            // {headers: this.headers}
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

    public DeleteRequest(url: string, data: any): any { 
        this.headers = new Headers();
        this.headers.append("Content-type", "application/json");
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem("token") );

        this.requestoptions = new RequestOptions({
            method: RequestMethod.Delete,
            url: url,
            headers: this.headers,
            body: JSON.stringify(data)
        })

        return this.httpClient.post(
            url,
            JSON.stringify(data),
            // {headers: this.headers}
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