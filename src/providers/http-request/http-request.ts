import { Environment } from "../../environments/environment";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { RequestMethod } from "@angular/http";
import { Observable } from "rxjs";
@Injectable()
export class HttpRequestProvider {

  public requestMethod = RequestMethod;
  private headers:HttpHeaders = new HttpHeaders();
  constructor(public http: HttpClient) {
    console.log('Hello HttpRequestProvider Provider');
  }
  
  public getRequest(method:RequestMethod, url:string, parameters?:any):Observable<any>{
    if(RequestMethod.Get == method){
       return this.http.get(Environment.API_ENDPOINT + url,
        {
          params: parameters ,
          headers: this.headers
        });
        // return this.getJSON(url); 
    }else{
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Accept', 'application/json');
      return this.http.post(Environment.API_ENDPOINT + url, parameters,
        {
          headers: this.headers
        }
      );
    }
  }

  public getJSON(fileName): Observable<any> {
    return this.http.get(fileName)
}
}
