

import { HttpInterceptor,HttpHandler,HttpEvent,HttpRequest, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {
  constructor(public http:HttpClient){

  }
  getUsers():Observable<any>{
     return  this.http.get('https://api.github.com/users/kiran-blockchian');
  }
   
  getCountries():Observable<any>{
    return  this.http.get('https://restcountries.eu/rest/v2/all');
 }
}